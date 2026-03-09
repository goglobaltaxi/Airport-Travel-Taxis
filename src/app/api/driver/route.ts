import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    console.log('🚗 [DRIVER EMAIL API] Request received');
    console.log('🚗 SMTP Config:', {
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: process.env.SMTP_PORT || '465',
        user: process.env.SMTP_USER ? '✅ Set' : '❌ MISSING',
        pass: process.env.SMTP_PASS ? '✅ Set' : '❌ MISSING',
    });

    try {
        const body = await req.json();
        const { name, email, phone, country, vehicle_make, vehicle_year, cross_border } = body;

        console.log('🚗 Driver data:', { name, email, country });

        // Validate required fields
        if (!name || !email || !phone || !vehicle_make || !vehicle_year) {
            console.log('🚗 ❌ Validation failed - missing fields');
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Create transporter fresh each time
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '465'),
            secure: parseInt(process.env.SMTP_PORT || '465') === 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Verify SMTP connection first
        try {
            await transporter.verify();
            console.log('🚗 ✅ SMTP connection verified successfully');
        } catch (verifyErr) {
            console.error('🚗 ❌ SMTP verification FAILED:', verifyErr);
            return NextResponse.json(
                { error: 'Email service connection failed.', details: String(verifyErr) },
                { status: 500 }
            );
        }

        const emailHtml = `
            <div style="font-family: 'Segoe UI', Arial, sans-serif; width: 100%; margin: 0 auto; background: #ffffff;">
                <div style="background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%); padding: 32px; text-align: center; border-radius: 12px 12px 0 0;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">New Driver Application</h1>
                    <p style="color: #94a3b8; margin: 8px 0 0; font-size: 14px;">Airport Travel Taxis — Website Registration</p>
                </div>

                <div style="padding: 32px; border: 1px solid #e2e8f0; border-top: none;">
                    <div style="margin-bottom: 24px;">
                        <h2 style="color: #0f172a; font-size: 16px; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #ca8a04; padding-bottom: 8px;">Applicant Details</h2>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 140px;">Full Name</td>
                                <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email</td>
                                <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">
                                    <a href="mailto:${email}" style="color: #1d41d1; text-decoration: none;">${email}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Phone</td>
                                <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">
                                    <a href="tel:${phone}" style="color: #1d41d1; text-decoration: none;">${phone}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Country</td>
                                <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${country}</td>
                            </tr>
                        </table>
                    </div>

                    <div style="margin-bottom: 24px;">
                        <h2 style="color: #0f172a; font-size: 16px; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #ca8a04; padding-bottom: 8px;">Vehicle Information</h2>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 140px;">Make & Model</td>
                                <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${vehicle_make}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Year</td>
                                <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${vehicle_year}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Cross-Border?</td>
                                <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${cross_border === 'yes' ? '✅ Yes' : '❌ No'}</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div style="background: #f8fafc; padding: 20px; text-align: center; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: none;">
                    <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                        Airport Travel Taxis — Professional Chauffeur Service<br />
                        This is an automated notification from your website.
                    </p>
                </div>
            </div>
        `;

        // ── Send email to ADMIN ────────────────────────────────────
        let adminEmailSent = false;
        try {
            const adminResult = await transporter.sendMail({
                from: '"Airport Travel Taxis" <info@airporttraveltaxis.com>',
                to: 'info@airporttraveltaxis.com',
                replyTo: email,
                subject: `🚗 Driver Application — ${name} from ${country}`,
                html: emailHtml,
            });
            console.log('🚗 ✅ Admin email sent! MessageId:', adminResult.messageId);
            adminEmailSent = true;
        } catch (adminErr) {
            console.error('🚗 ❌ Admin email FAILED:', adminErr);
        }

        // ── Send auto-reply to the driver ──────────────────────────────
        let customerEmailSent = false;
        try {
            const autoReplyHtml = `
                <div style="font-family: 'Segoe UI', Arial, sans-serif; width: 100%; margin: 0 auto; background: #ffffff;">
                    <div style="background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%); padding: 32px; text-align: center; border-radius: 12px 12px 0 0;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">Application Received ✓</h1>
                        <p style="color: #94a3b8; margin: 8px 0 0; font-size: 14px;">Thank you for applying to Drive With Us</p>
                    </div>
                    <div style="padding: 32px; border: 1px solid #e2e8f0; border-top: none;">
                        <p style="color: #334155; font-size: 15px; line-height: 1.6;">
                            Dear <strong>${name}</strong>,
                        </p>
                        <p style="color: #334155; font-size: 15px; line-height: 1.6;">
                            Thank you for your interest in joining Airport Travel Taxis. We have received your driver application for your vehicle (<strong>${vehicle_year} ${vehicle_make}</strong>).
                        </p>
                        <p style="color: #334155; font-size: 15px; line-height: 1.6;">
                            Our fleet management team will review your application and get back to you within 24-48 hours. If your vehicle meets our network criteria, we will reach out to schedule an onboarding interview.
                        </p>
                        <p style="color: #334155; font-size: 15px; line-height: 1.6;">
                            For immediate assistance or to expedite your application, contact us directly on WhatsApp:
                        </p>
                        <div style="text-align: center; margin: 24px 0;">
                            <a href="https://wa.me/923057262461" 
                               style="display: inline-block; padding: 14px 36px; background: #25d366; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 15px;">
                                💬 Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                    <div style="background: #f8fafc; padding: 20px; text-align: center; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: none;">
                        <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                            Airport Travel Taxis — Professional Chauffeur Service<br />
                            © 2025 airporttraveltaxis.com | All rights reserved
                        </p>
                    </div>
                </div>
            `;

            const custResult = await transporter.sendMail({
                from: '"Airport Travel Taxis" <info@airporttraveltaxis.com>',
                to: email,
                subject: `Application Received — Airport Travel Taxis`,
                html: autoReplyHtml,
            });
            console.log('🚗 ✅ Customer auto-reply sent! MessageId:', custResult.messageId);
            customerEmailSent = true;
        } catch (custErr) {
            console.error('🚗 ❌ Customer auto-reply FAILED:', custErr);
        }

        return NextResponse.json({ success: true, adminEmailSent, customerEmailSent });

    } catch (error) {
        console.error('🚗 ❌ Driver API FATAL error:', error);
        return NextResponse.json(
            { error: 'Internal server error', details: String(error) },
            { status: 500 }
        );
    }
}
