import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { supabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
    console.log('📩 [CONTACT EMAIL API] Request received');
    console.log('📩 SMTP Config:', {
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: process.env.SMTP_PORT || '465',
        user: process.env.SMTP_USER ? '✅ Set' : '❌ MISSING',
        pass: process.env.SMTP_PASS ? '✅ Set' : '❌ MISSING',
    });

    try {
        const body = await req.json();
        const { name, email, phone, subject, message } = body;

        console.log('📩 Contact data:', { name, email, subject });

        // Validate required fields
        if (!name || !email || !message) {
            console.log('📩 ❌ Validation failed - missing fields');
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        // Save to Database
        try {
            await supabase.from('contact_messages').insert([{
                name,
                email,
                phone,
                subject,
                message,
                status: 'unread'
            }]);
            console.log('📩 ✅ Saved to database');
        } catch (dbErr) {
            console.error('📩 ⚠️ Database save failed (continuing with email):', dbErr);
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
            console.log('📩 ✅ SMTP connection verified successfully');
        } catch (verifyErr) {
            console.error('📩 ❌ SMTP verification FAILED:', verifyErr);
            return NextResponse.json(
                { error: 'Email service connection failed.', details: String(verifyErr) },
                { status: 500 }
            );
        }

        const emailHtml = `
            <div style="font-family: 'Segoe UI', Arial, sans-serif; width: 100%; margin: 0 auto; background: #ffffff;">
                <div style="background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%); padding: 32px; text-align: center; border-radius: 12px 12px 0 0;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">New Contact Message</h1>
                    <p style="color: #94a3b8; margin: 8px 0 0; font-size: 14px;">Airport Travel Taxis — Website Contact Form</p>
                </div>

                <div style="padding: 32px; border: 1px solid #e2e8f0; border-top: none;">
                    <div style="margin-bottom: 24px;">
                        <h2 style="color: #0f172a; font-size: 16px; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #ca8a04; padding-bottom: 8px;">From</h2>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 100px;">Name</td>
                                <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email</td>
                                <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">
                                    <a href="mailto:${email}" style="color: #1d41d1; text-decoration: none;">${email}</a>
                                </td>
                            </tr>
                            ${phone ? `
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Phone</td>
                                <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">
                                    <a href="tel:${phone}" style="color: #1d41d1; text-decoration: none;">${phone}</a>
                                </td>
                            </tr>` : ''}
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Subject</td>
                                <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${subject || 'General Inquiry'}</td>
                            </tr>
                        </table>
                    </div>

                    <div style="margin-bottom: 24px;">
                        <h2 style="color: #0f172a; font-size: 16px; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #ca8a04; padding-bottom: 8px;">Message</h2>
                        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px;">
                            <p style="color: #334155; font-size: 14px; line-height: 1.8; margin: 0; white-space: pre-wrap;">${message}</p>
                        </div>
                    </div>
                </div>

                <div style="background: #f8fafc; padding: 20px; text-align: center; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: none;">
                    <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                        Airport Travel Taxis — Professional Chauffeur Service<br />
                        This is an automated notification from your website contact form.
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
                subject: `📩 Contact Form — ${subject || 'General Inquiry'} from ${name}`,
                html: emailHtml,
            });
            console.log('📩 ✅ Admin email sent! MessageId:', adminResult.messageId);
            adminEmailSent = true;
        } catch (adminErr) {
            console.error('📩 ❌ Admin email FAILED:', adminErr);
        }

        // ── Send auto-reply to the sender ──────────────────────────────
        let customerEmailSent = false;
        try {
            const autoReplyHtml = `
                <div style="font-family: 'Segoe UI', Arial, sans-serif; width: 100%; margin: 0 auto; background: #ffffff;">
                    <div style="background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%); padding: 32px; text-align: center; border-radius: 12px 12px 0 0;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">Message Received ✓</h1>
                        <p style="color: #94a3b8; margin: 8px 0 0; font-size: 14px;">Thank you for contacting Airport Travel Taxis</p>
                    </div>
                    <div style="padding: 32px; border: 1px solid #e2e8f0; border-top: none;">
                        <p style="color: #334155; font-size: 15px; line-height: 1.6;">
                            Dear <strong>${name}</strong>,
                        </p>
                        <p style="color: #334155; font-size: 15px; line-height: 1.6;">
                            Thank you for reaching out to us. We have received your message and our team will respond within <strong>24 hours</strong>.
                        </p>
                        <p style="color: #334155; font-size: 15px; line-height: 1.6;">
                            For immediate assistance, contact us directly on WhatsApp:
                        </p>
                        <div style="text-align: center; margin: 24px 0;">
                            <a href="https://wa.me/923057262461" 
                               style="display: inline-block; padding: 14px 36px; background: #25d366; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 15px;">
                                💬 Chat on WhatsApp
                            </a>
                        </div>
                        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-top: 16px;">
                            <p style="color: #64748b; font-size: 13px; margin: 0;">
                                <strong>Your message:</strong><br />
                                <span style="color: #475569;">${message.substring(0, 200)}${message.length > 200 ? '...' : ''}</span>
                            </p>
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
                subject: `We've received your message — Airport Travel Taxis`,
                html: autoReplyHtml,
            });
            console.log('📩 ✅ Customer auto-reply sent! MessageId:', custResult.messageId);
            customerEmailSent = true;
        } catch (custErr) {
            console.error('📩 ❌ Customer auto-reply FAILED:', custErr);
        }

        return NextResponse.json({ success: true, adminEmailSent, customerEmailSent });

    } catch (error) {
        console.error('📩 ❌ Contact API FATAL error:', error);
        return NextResponse.json(
            { error: 'Internal server error', details: String(error) },
            { status: 500 }
        );
    }
}

