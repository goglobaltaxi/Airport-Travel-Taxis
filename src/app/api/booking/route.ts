import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    console.log('📧 [BOOKING EMAIL API] Request received');
    console.log('📧 SMTP Config:', {
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: process.env.SMTP_PORT || '465',
        user: process.env.SMTP_USER ? '✅ Set' : '❌ MISSING',
        pass: process.env.SMTP_PASS ? '✅ Set' : '❌ MISSING',
    });

    try {
        const body = await req.json();
        const {
            customer_name,
            customer_email,
            customer_phone,
            pickup_location,
            dropoff_location,
            pickup_date,
            pickup_time,
            passengers,
            vehicle_type,
        } = body;

        const formatTimeWithAMPM = (timeStr: string) => {
            if (!timeStr) return '';
            try {
                const [hours, minutes] = timeStr.split(':');
                const h = parseInt(hours, 10);
                const m = parseInt(minutes, 10);
                const ampm = h >= 12 ? 'PM' : 'AM';
                const hr12 = h % 12 || 12;
                return `${hr12}:${m.toString().padStart(2, '0')} ${ampm}`;
            } catch {
                return timeStr;
            }
        };

        const formattedTime = formatTimeWithAMPM(pickup_time);

        console.log('📧 Booking data:', { customer_name, customer_email, pickup_location, dropoff_location, pickup_time: formattedTime });

        // Validate required fields
        if (!customer_name || !customer_email || !customer_phone || !pickup_location || !dropoff_location) {
            console.log('📧 ❌ Validation failed - missing fields');
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create transporter fresh each time to pick up latest env vars
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
            console.log('📧 ✅ SMTP connection verified successfully');
        } catch (verifyErr) {
            console.error('📧 ❌ SMTP verification FAILED:', verifyErr);
            return NextResponse.json(
                { error: 'Email service connection failed. Check SMTP credentials.', details: String(verifyErr) },
                { status: 500 }
            );
        }

        const emailHtml = `
            <div style="font-family: 'Segoe UI', Arial, sans-serif; width: 100%; margin: 0 auto; background: #ffffff;">
                <div style="background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%); padding: 32px; text-align: center; border-radius: 12px 12px 0 0;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">New Booking Request</h1>
                    <p style="color: #94a3b8; margin: 8px 0 0; font-size: 14px;">Airport Travel Taxis — Automated Notification</p>
                </div>

                <div style="padding: 32px; border: 1px solid #e2e8f0; border-top: none;">
                    <div style="margin-bottom: 24px;">
                        <h2 style="color: #0f172a; font-size: 16px; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #ca8a04; padding-bottom: 8px;">Customer Details</h2>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 120px;">Name</td>
                                <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${customer_name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Phone</td>
                                <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">
                                    <a href="tel:${customer_phone}" style="color: #1d41d1; text-decoration: none;">${customer_phone}</a>
                                </td>
                            </tr>
                            ${customer_email ? `
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email</td>
                                <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">
                                    <a href="mailto:${customer_email}" style="color: #1d41d1; text-decoration: none;">${customer_email}</a>
                                </td>
                            </tr>` : ''}
                        </table>
                    </div>

                    <div style="margin-bottom: 24px;">
                        <h2 style="color: #0f172a; font-size: 16px; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #ca8a04; padding-bottom: 8px;">Trip Details</h2>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 120px;">Pickup</td>
                                <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">📍 ${pickup_location}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Drop-off</td>
                                <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">📍 ${dropoff_location}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Date</td>
                                <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${pickup_date}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Time</td>
                                <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${formattedTime}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Passengers</td>
                                <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${passengers}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Vehicle</td>
                                <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${vehicle_type}</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div style="background: #f8fafc; padding: 20px; text-align: center; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: none;">
                    <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                        Airport Travel Taxis — Professional Chauffeur Service<br />
                        This is an automated notification from your booking system.
                    </p>
                </div>
            </div>
        `;

        // ── Send email to ADMIN (goglobaltaxi@gmail.com directly) ────
        let adminEmailSent = false;
        try {
            const adminResult = await transporter.sendMail({
                from: '"Airport Travel Taxis" <booking@airporttraveltaxis.com>',
                to: 'booking@airporttraveltaxis.com',
                replyTo: customer_email || undefined,
                subject: `🚖 New Booking — ${customer_name} | ${pickup_location} → ${dropoff_location}`,
                html: emailHtml,
            });
            console.log('📧 ✅ Admin email sent! MessageId:', adminResult.messageId);
            adminEmailSent = true;
        } catch (adminErr) {
            console.error('📧 ❌ Admin email FAILED:', adminErr);
        }

        // ── Send confirmation email to customer ────
        let customerEmailSent = false;
        if (customer_email) {
            try {
                const customerHtml = `
                    <div style="font-family: 'Segoe UI', Arial, sans-serif; width: 100%; margin: 0 auto; background: #ffffff;">
                        <div style="background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%); padding: 32px; text-align: center; border-radius: 12px 12px 0 0;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">Booking Received ✓</h1>
                            <p style="color: #94a3b8; margin: 8px 0 0; font-size: 14px;">Thank you for choosing Airport Travel Taxis</p>
                        </div>
                        <div style="padding: 32px; border: 1px solid #e2e8f0; border-top: none;">
                            <p style="color: #334155; font-size: 15px; line-height: 1.6;">
                                Dear <strong>${customer_name}</strong>,
                            </p>
                            <p style="color: #334155; font-size: 15px; line-height: 1.6;">
                                We have received your booking request. Our team will review your details and confirm your ride shortly.
                            </p>
                            
                            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 20px 0;">
                                <h3 style="color: #0f172a; font-size: 14px; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 1px;">Your Trip Summary</h3>
                                <p style="margin: 4px 0; color: #475569; font-size: 14px;">📍 <strong>From:</strong> ${pickup_location}</p>
                                <p style="margin: 4px 0; color: #475569; font-size: 14px;">📍 <strong>To:</strong> ${dropoff_location}</p>
                                <p style="margin: 4px 0; color: #475569; font-size: 14px;">📅 <strong>Date:</strong> ${pickup_date} at ${formattedTime}</p>
                                <p style="margin: 4px 0; color: #475569; font-size: 14px;">🚗 <strong>Vehicle:</strong> ${vehicle_type}</p>
                                <p style="margin: 4px 0; color: #475569; font-size: 14px;">👤 <strong>Passengers:</strong> ${passengers}</p>
                            </div>

                            <p style="color: #334155; font-size: 15px; line-height: 1.6;">
                                If you need immediate assistance, feel free to contact us on WhatsApp:
                            </p>
                            <div style="text-align: center; margin: 20px 0;">
                                <a href="https://wa.me/966569487569" 
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
                    from: '"Airport Travel Taxis" <booking@airporttraveltaxis.com>',
                    to: customer_email,
                    subject: `Your Booking Request — ${pickup_location} → ${dropoff_location}`,
                    html: customerHtml,
                });
                console.log('📧 ✅ Customer email sent! MessageId:', custResult.messageId);
                customerEmailSent = true;
            } catch (custErr) {
                console.error('📧 ❌ Customer email FAILED:', custErr);
            }
        }

        return NextResponse.json({ 
            success: true, 
            adminEmailSent, 
            customerEmailSent 
        });

    } catch (error) {
        console.error('📧 ❌ Booking API FATAL error:', error);
        return NextResponse.json(
            { error: 'Internal server error while sending email', details: String(error) },
            { status: 500 }
        );
    }
}
