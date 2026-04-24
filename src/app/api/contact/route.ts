import { NextRequest, NextResponse } from 'next/server';
import { resend, FROM_INFO } from '@/lib/resend';
import { supabase } from '@/lib/supabase';
import { rateLimit, getClientIp } from '@/lib/rateLimit';

export async function POST(req: NextRequest) {
    if (!rateLimit(getClientIp(req), 5, 60_000)) {
        return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }
    try {
        const body = await req.json();
        const { name, email, phone, subject, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
        }

        // Save to database
        try {
            await supabase.from('contact_messages').insert([{ name, email, phone, subject, message, status: 'unread' }]);
        } catch (dbErr) {
            console.error('[CONTACT API] DB save failed:', dbErr);
        }

        const adminHtml = `
        <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:680px;margin:0 auto;background:#fff;">
            <div style="background:linear-gradient(135deg,#0f172a,#1e3a5f);padding:32px;text-align:center;border-radius:12px 12px 0 0;">
                <h1 style="color:#fff;margin:0;font-size:22px;">New Contact Message</h1>
                <p style="color:#94a3b8;margin:6px 0 0;font-size:13px;">Airport Travel Taxis — Website Contact Form</p>
            </div>
            <div style="padding:28px;border:1px solid #e2e8f0;border-top:none;">
                <table style="width:100%;border-collapse:collapse;">
                    <tr><td style="padding:8px 0;color:#64748b;font-size:14px;width:100px;">Name</td><td style="padding:8px 0;color:#0f172a;font-size:14px;font-weight:600;">${name}</td></tr>
                    <tr><td style="padding:8px 0;color:#64748b;font-size:14px;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#1d4ed8;">${email}</a></td></tr>
                    ${phone ? `<tr><td style="padding:8px 0;color:#64748b;font-size:14px;">Phone</td><td style="padding:8px 0;"><a href="tel:${phone}" style="color:#1d4ed8;">${phone}</a></td></tr>` : ''}
                    <tr><td style="padding:8px 0;color:#64748b;font-size:14px;">Subject</td><td style="padding:8px 0;color:#0f172a;font-size:14px;font-weight:600;">${subject || 'General Inquiry'}</td></tr>
                </table>
                <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:18px;margin-top:18px;">
                    <p style="color:#334155;font-size:14px;line-height:1.8;margin:0;white-space:pre-wrap;">${message}</p>
                </div>
            </div>
            <div style="background:#f8fafc;padding:18px;text-align:center;border-radius:0 0 12px 12px;border:1px solid #e2e8f0;border-top:none;">
                <p style="color:#94a3b8;font-size:12px;margin:0;">Airport Travel Taxis — Automated notification from website contact form.</p>
            </div>
        </div>`;

        const autoReplyHtml = `
        <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:680px;margin:0 auto;background:#fff;">
            <div style="background:linear-gradient(135deg,#0f172a,#1e3a5f);padding:32px;text-align:center;border-radius:12px 12px 0 0;">
                <h1 style="color:#fff;margin:0;font-size:22px;">Message Received ✓</h1>
                <p style="color:#94a3b8;margin:6px 0 0;font-size:13px;">Thank you for contacting Airport Travel Taxis</p>
            </div>
            <div style="padding:28px;border:1px solid #e2e8f0;border-top:none;">
                <p style="color:#334155;font-size:15px;line-height:1.7;">Dear <strong>${name}</strong>,</p>
                <p style="color:#334155;font-size:15px;line-height:1.7;margin-top:12px;">Thank you for reaching out. We have received your message and our team will respond within <strong>24 hours</strong>.</p>
                <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:16px;margin:20px 0;">
                    <p style="color:#64748b;font-size:13px;margin:0;"><strong>Your message:</strong><br><span style="color:#475569;">${message.substring(0, 200)}${message.length > 200 ? '...' : ''}</span></p>
                </div>
                <div style="text-align:center;margin:24px 0;">
                    <a href="https://wa.me/966569487569" style="display:inline-block;padding:14px 32px;background:#25d366;color:#fff;text-decoration:none;border-radius:8px;font-weight:700;font-size:15px;">💬 Chat on WhatsApp</a>
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
            subject: `Contact Form — ${subject || 'General Inquiry'} from ${name}`,
            html: adminHtml,
        });

        let customerEmailSent = false;
        const custResult = await resend.emails.send({
            from: FROM_INFO,
            to: [email],
            subject: `We've received your message — Airport Travel Taxis`,
            html: autoReplyHtml,
        });
        customerEmailSent = !custResult.error;

        return NextResponse.json({ success: true, adminEmailSent: !adminResult.error, customerEmailSent });

    } catch (error) {
        console.error('[CONTACT API] Fatal error:', error);
        return NextResponse.json({ error: 'Internal server error', details: String(error) }, { status: 500 });
    }
}
