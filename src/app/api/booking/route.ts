import { NextRequest, NextResponse } from 'next/server';
import { resend, FROM_BOOKING, ADMIN_EMAIL, formatTime12h, generateBookingRef } from '@/lib/resend';
import { createClient } from '@supabase/supabase-js';
import { generateAdminBookingEmail, generateBookingConfirmationEmail } from '@/lib/invoiceTemplate';
import { rateLimit, getClientIp } from '@/lib/rateLimit';

const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
    if (!rateLimit(getClientIp(req), 10, 60_000)) {
        return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }
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
            currency,
            payment_method,
            flight_number,
            booking_id_serial,
            utm_source,
            referred_by,
        } = body;

        // Blacklist check
        if (customer_email || customer_phone) {
            const checks: any[] = [];
            if (customer_email) checks.push({ column: 'value', value: customer_email.toLowerCase() });
            if (customer_phone) checks.push({ column: 'value', value: customer_phone });

            for (const check of checks) {
                const { data: blocked } = await supabaseAdmin
                    .from('blacklist')
                    .select('id, reason')
                    .eq('value', check.value)
                    .eq('active', true)
                    .single();
                if (blocked) {
                    return NextResponse.json({ error: 'Unable to process booking. Please contact support.' }, { status: 403 });
                }
            }
        }

        // Track referral if present
        if (referred_by && booking_id_serial) {
            const referrerSerial = parseInt(referred_by.replace(/^ATT-?0*/i, ''), 10);
            if (!isNaN(referrerSerial)) {
                const { data: referrerBooking } = await supabaseAdmin
                    .from('bookings').select('id').eq('booking_id_serial', referrerSerial).single();
                if (referrerBooking) {
                    await supabaseAdmin.from('referrals').insert([{
                        referrer_booking_id: referrerBooking.id,
                        referred_booking_id_serial: booking_id_serial,
                        referred_by_ref: referred_by.toUpperCase(),
                    }]);
                }
            }
        }

        if (!customer_name || !customer_phone || !pickup_location || !dropoff_location) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Save utm_source to booking if present
        if (utm_source && booking_id_serial) {
            await supabaseAdmin.from('bookings').update({ utm_source }).eq('booking_id_serial', booking_id_serial);
        }

        const formattedTime = formatTime12h(pickup_time);
        const booking_ref = generateBookingRef(booking_id_serial || Math.floor(Math.random() * 9000 + 1000));

        const emailData = {
            booking_ref,
            customer_name,
            customer_email: customer_email || '',
            customer_phone,
            pickup_location,
            dropoff_location,
            pickup_date,
            pickup_time: formattedTime,
            passengers,
            vehicle_type,
            currency: currency || 'SAR',
            payment_method: payment_method || 'cash_to_driver',
            flight_number: flight_number || '',
            issue_date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }),
        };

        // Send admin notification
        const adminResult = await resend.emails.send({
            from: FROM_BOOKING,
            to: [ADMIN_EMAIL],
            replyTo: customer_email || undefined,
            subject: `New Booking — ${booking_ref} | ${customer_name} | ${pickup_location} → ${dropoff_location}`,
            html: generateAdminBookingEmail(emailData),
        });

        // Send customer confirmation + booking receipt
        let customerEmailSent = false;
        if (customer_email) {
            const custResult = await resend.emails.send({
                from: FROM_BOOKING,
                to: [customer_email],
                subject: `Booking Confirmed — ${booking_ref} | Airport Travel Taxis`,
                html: generateBookingConfirmationEmail(emailData),
            });
            customerEmailSent = !custResult.error;
        }

        return NextResponse.json({
            success: true,
            booking_ref,
            adminEmailSent: !adminResult.error,
            customerEmailSent,
        });

    } catch (error) {
        console.error('[BOOKING API] Fatal error:', error);
        return NextResponse.json({ error: 'Internal server error', details: String(error) }, { status: 500 });
    }
}
