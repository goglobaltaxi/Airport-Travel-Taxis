import { NextRequest, NextResponse } from 'next/server';
import { resend, FROM_INFO } from '@/lib/resend';
import { supabase } from '@/lib/supabase';
import { rateLimit, getClientIp } from '@/lib/rateLimit';

export async function POST(req: NextRequest) {
    if (!rateLimit(getClientIp(req), 3, 60_000)) {
        return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }
    try {
        const body = await req.json();
        const { name, email, phone, country, vehicle_make, vehicle_year, cross_border } = body;

        if (!name || !email || !phone || !vehicle_make || !vehicle_year) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        // Save driver application to database
        try {
            await supabase.from('driver_applications').insert([{
                name, email, phone, country,
                vehicle_make, vehicle_year,
                cross_border: cross_border === 'yes',
                status: 'pending',
                applied_at: new Date().toISOString(),
            }]);
        } catch (dbErr) {
            console.error('[DRIVER API] DB save failed (table may not exist yet):', dbErr);
        }

        const adminHtml = `
        <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:680px;margin:0 auto;background:#fff;">
            <div style="background:linear-gradient(135deg,#0f172a,#1e3a5f);padding:32px;text-align:center;border-radius:12px 12px 0 0;">
                <h1 style="color:#fff;margin:0;font-size:22px;">New Driver Application</h1>
                <p style="color:#94a3b8;margin:6px 0 0;font-size:13px;">Airport Travel Taxis — Driver Registration</p>
            </div>
            <div style="padding:28px;border:1px solid #e2e8f0;border-top:none;">
                <h3 style="color:#0f172a;font-size:12px;text-transform:uppercase;letter-spacing:1.5px;border-bottom:2px solid #ca8a04;padding-bottom:8px;margin-bottom:14px;">Applicant</h3>
                <table style="width:100%;border-collapse:collapse;">
                    <tr><td style="padding:8px 0;color:#64748b;font-size:14px;width:140px;">Full Name</td><td style="padding:8px 0;color:#0f172a;font-size:14px;font-weight:600;">${name}</td></tr>
                    <tr><td style="padding:8px 0;color:#64748b;font-size:14px;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#1d4ed8;">${email}</a></td></tr>
                    <tr><td style="padding:8px 0;color:#64748b;font-size:14px;">Phone</td><td style="padding:8px 0;"><a href="tel:${phone}" style="color:#1d4ed8;">${phone}</a></td></tr>
                    <tr><td style="padding:8px 0;color:#64748b;font-size:14px;">Country</td><td style="padding:8px 0;color:#0f172a;font-size:14px;font-weight:600;">${country || 'Not specified'}</td></tr>
                </table>
                <h3 style="color:#0f172a;font-size:12px;text-transform:uppercase;letter-spacing:1.5px;border-bottom:2px solid #ca8a04;padding-bottom:8px;margin:20px 0 14px;">Vehicle</h3>
                <table style="width:100%;border-collapse:collapse;">
                    <tr><td style="padding:8px 0;color:#64748b;font-size:14px;width:140px;">Make & Model</td><td style="padding:8px 0;color:#0f172a;font-size:14px;font-weight:600;">${vehicle_make}</td></tr>
                    <tr><td style="padding:8px 0;color:#64748b;font-size:14px;">Year</td><td style="padding:8px 0;color:#0f172a;font-size:14px;font-weight:600;">${vehicle_year}</td></tr>
                    <tr><td style="padding:8px 0;color:#64748b;font-size:14px;">Cross-Border</td><td style="padding:8px 0;color:#0f172a;font-size:14px;font-weight:600;">${cross_border === 'yes' ? '✅ Yes' : '❌ No'}</td></tr>
                </table>
                <div style="text-align:center;margin-top:24px;">
                    <a href="https://wa.me/${phone?.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi ${name}, we received your driver application for Airport Travel Taxis. Our team will review it and contact you within 24-48 hours.`)}" style="display:inline-block;padding:14px 28px;background:#25d366;color:#fff;text-decoration:none;border-radius:8px;font-weight:700;">📲 Contact Applicant on WhatsApp</a>
                </div>
            </div>
            <div style="background:#f8fafc;padding:18px;text-align:center;border-radius:0 0 12px 12px;border:1px solid #e2e8f0;border-top:none;">
                <p style="color:#94a3b8;font-size:12px;margin:0;">Airport Travel Taxis — Automated driver application notification.</p>
            </div>
        </div>`;

        const autoReplyHtml = `
        <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:680px;margin:0 auto;background:#fff;">
            <div style="background:linear-gradient(135deg,#0f172a,#1e3a5f);padding:32px;text-align:center;border-radius:12px 12px 0 0;">
                <h1 style="color:#fff;margin:0;font-size:22px;">Application Received ✓</h1>
                <p style="color:#94a3b8;margin:6px 0 0;font-size:13px;">Thank you for applying to Drive With Us</p>
            </div>
            <div style="padding:28px;border:1px solid #e2e8f0;border-top:none;">
                <p style="color:#334155;font-size:15px;line-height:1.7;">Dear <strong>${name}</strong>,</p>
                <p style="color:#334155;font-size:15px;line-height:1.7;margin-top:12px;">Thank you for your interest in joining Airport Travel Taxis. We have received your driver application for your <strong>${vehicle_year} ${vehicle_make}</strong>.</p>
                <p style="color:#334155;font-size:15px;line-height:1.7;margin-top:12px;">Our fleet management team will review your application and get back to you within <strong>24–48 hours</strong>.</p>
                <div style="text-align:center;margin:28px 0;">
                    <a href="https://wa.me/966569487569" style="display:inline-block;padding:14px 32px;background:#25d366;color:#fff;text-decoration:none;border-radius:8px;font-weight:700;font-size:15px;">💬 Contact Us on WhatsApp</a>
                </div>
            </div>
            <div style="background:#f8fafc;padding:18px;text-align:center;border-radius:0 0 12px 12px;border:1px solid #e2e8f0;border-top:none;">
                <p style="color:#94a3b8;font-size:12px;margin:0;">Airport Travel Taxis — www.airporttraveltaxis.com | © ${new Date().getFullYear()}</p>
            </div>
        </div>`;

        const adminResult = await resend.emails.send({
            from: FROM_INFO,
            to: ['info@airporttraveltaxis.com'],
            replyTo: email,
            subject: `Driver Application — ${name} (${vehicle_year} ${vehicle_make}) from ${country}`,
            html: adminHtml,
        });

        let driverEmailSent = false;
        const driverResult = await resend.emails.send({
            from: FROM_INFO,
            to: [email],
            subject: `Application Received — Airport Travel Taxis`,
            html: autoReplyHtml,
        });
        driverEmailSent = !driverResult.error;

        return NextResponse.json({ success: true, adminEmailSent: !adminResult.error, driverEmailSent });

    } catch (error) {
        console.error('[DRIVER API] Fatal error:', error);
        return NextResponse.json({ error: 'Internal server error', details: String(error) }, { status: 500 });
    }
}
