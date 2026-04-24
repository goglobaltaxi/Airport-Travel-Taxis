import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { resend, FROM_BOOKING } from '@/lib/resend';
import { rateLimit, getClientIp } from '@/lib/rateLimit';

const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// POST /api/cancel  { ref: "ATT-0042", email: "customer@email.com" }
export async function POST(req: NextRequest) {
    const ip = getClientIp(req);
    if (!rateLimit(ip, 5, 60_000)) {
        return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    try {
        const { ref, email } = await req.json();
        if (!ref || !email) {
            return NextResponse.json({ error: 'Booking reference and email are required' }, { status: 400 });
        }

        const serial = parseInt(ref.replace(/^ATT-?0*/i, ''), 10);
        if (isNaN(serial)) {
            return NextResponse.json({ error: 'Invalid booking reference' }, { status: 400 });
        }

        const { data: booking, error } = await supabaseAdmin
            .from('bookings')
            .select('*')
            .eq('booking_id_serial', serial)
            .single();

        if (error || !booking) {
            return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
        }

        if (booking.customer_email?.toLowerCase() !== email.toLowerCase()) {
            return NextResponse.json({ error: 'Email does not match this booking' }, { status: 403 });
        }

        if (booking.status === 'cancelled') {
            return NextResponse.json({ error: 'Booking is already cancelled' }, { status: 400 });
        }

        if (booking.status === 'completed') {
            return NextResponse.json({ error: 'Completed bookings cannot be cancelled' }, { status: 400 });
        }

        // Cancel the booking
        await supabaseAdmin
            .from('bookings')
            .update({ status: 'cancelled' })
            .eq('id', booking.id);

        const bookingRef = `ATT-${String(booking.booking_id_serial).padStart(4, '0')}`;

        // Send cancellation confirmation email
        const html = `
<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>
body{font-family:'Segoe UI',Arial,sans-serif;background:#f1f5f9;margin:0;padding:0}
.wrap{max-width:600px;margin:32px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.08)}
.header{background:linear-gradient(135deg,#0f172a,#1e3a5f);padding:32px;text-align:center}
.header h1{color:#fff;font-size:22px;margin:0}
.header p{color:#94a3b8;font-size:13px;margin:8px 0 0}
.badge{display:inline-block;background:#ef4444;color:#fff;font-size:11px;font-weight:700;padding:4px 16px;border-radius:20px;margin-top:12px;letter-spacing:1px;text-transform:uppercase}
.body{padding:32px}
.ref-box{background:#fef2f2;border-left:4px solid #ef4444;border-radius:8px;padding:16px 20px;margin-bottom:24px}
.ref-box .ref{font-size:22px;font-weight:800;color:#0f172a;font-family:monospace}
.ref-box .label{font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#64748b;margin-bottom:4px}
.info-row{display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:14px}
.info-row .lbl{color:#64748b;font-weight:500}
.info-row .val{color:#0f172a;font-weight:600}
.cta{display:block;background:#0f172a;color:#fff;text-decoration:none;text-align:center;padding:14px 24px;border-radius:10px;font-weight:700;font-size:15px;margin-top:24px}
.footer{background:#f8fafc;padding:20px 32px;text-align:center;font-size:12px;color:#94a3b8;border-top:1px solid #e2e8f0}
</style></head>
<body>
<div class="wrap">
  <div class="header">
    <h1>Booking Cancelled</h1>
    <p>Airport Travel Taxis</p>
    <span class="badge">Cancellation Confirmed</span>
  </div>
  <div class="body">
    <p style="font-size:15px;color:#374151;margin-bottom:20px">Dear <strong>${booking.customer_name}</strong>, your booking has been successfully cancelled as requested.</p>
    <div class="ref-box">
      <div class="label">Cancelled Booking</div>
      <div class="ref">${bookingRef}</div>
    </div>
    <div class="info-row"><span class="lbl">Route</span><span class="val">${booking.pickup_location} → ${booking.dropoff_location}</span></div>
    <div class="info-row"><span class="lbl">Was Scheduled</span><span class="val">${new Date(booking.pickup_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span></div>
    <p style="margin-top:20px;font-size:14px;color:#475569">If you'd like to book again or need assistance, please don't hesitate to contact us.</p>
    <a href="https://wa.me/966569487569" class="cta">Book a New Ride</a>
  </div>
  <div class="footer">Airport Travel Taxis · booking@airporttraveltaxis.com · +966 56 948 7569</div>
</div>
</body></html>`;

        try {
            await resend.emails.send({
                from: FROM_BOOKING,
                to: [booking.customer_email],
                subject: `Booking ${bookingRef} Cancelled — Airport Travel Taxis`,
                html,
            });
        } catch (emailErr) {
            console.error('[CANCEL] Email failed (booking still cancelled):', emailErr);
        }

        return NextResponse.json({ success: true, ref: bookingRef });
    } catch (e) {
        console.error('[CANCEL] Error:', e);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
