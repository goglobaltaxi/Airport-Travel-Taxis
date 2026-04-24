import { NextRequest, NextResponse } from 'next/server';
import { resend, FROM_BOOKING, formatTime12h } from '@/lib/resend';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// POST /api/receipt  { booking_id: "uuid" }
// Called automatically when booking status changes to "completed"
export async function POST(req: NextRequest) {
    try {
        const { booking_id } = await req.json();
        if (!booking_id) return NextResponse.json({ error: 'booking_id required' }, { status: 400 });

        const { data: booking, error } = await supabaseAdmin
            .from('bookings')
            .select('*')
            .eq('id', booking_id)
            .single();

        if (error || !booking) return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
        if (!booking.customer_email) return NextResponse.json({ skipped: true, reason: 'No customer email' });

        const ref = `ATT-${String(booking.booking_id_serial).padStart(4, '0')}`;
        const pickupTime = formatTime12h(booking.pickup_time);

        const html = `
<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>
body{font-family:'Segoe UI',Arial,sans-serif;background:#f1f5f9;margin:0;padding:0}
.wrap{max-width:600px;margin:32px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.08)}
.header{background:linear-gradient(135deg,#0f172a,#1e3a5f);padding:32px;text-align:center}
.header h1{color:#fff;font-size:22px;margin:0}
.badge{display:inline-block;background:#22c55e;color:#fff;font-size:11px;font-weight:700;padding:4px 16px;border-radius:20px;margin-top:12px;letter-spacing:1px;text-transform:uppercase}
.body{padding:32px}
.ref-box{background:#f0fdf4;border-left:4px solid #22c55e;border-radius:8px;padding:16px 20px;margin-bottom:24px}
.ref{font-size:22px;font-weight:800;color:#0f172a;font-family:monospace}
.label{font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#64748b;margin-bottom:4px}
.info-row{display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:14px}
.lbl{color:#64748b;font-weight:500}.val{color:#0f172a;font-weight:600;text-align:right;max-width:60%}
.stars{font-size:24px;letter-spacing:4px;margin:12px 0}
.cta{display:block;background:#ca8a04;color:#fff;text-decoration:none;text-align:center;padding:14px 24px;border-radius:10px;font-weight:700;font-size:15px;margin-top:24px}
.cta2{display:block;background:#0f172a;color:#fff;text-decoration:none;text-align:center;padding:12px 24px;border-radius:10px;font-weight:700;font-size:14px;margin-top:12px}
.footer{background:#f8fafc;padding:20px 32px;text-align:center;font-size:12px;color:#94a3b8;border-top:1px solid #e2e8f0}
</style></head>
<body>
<div class="wrap">
  <div class="header">
    <h1>✅ Trip Completed</h1>
    <p style="color:#94a3b8;font-size:13px;margin:8px 0 0">Thank you for choosing Airport Travel Taxis</p>
    <span class="badge">Journey Complete</span>
  </div>
  <div class="body">
    <p style="font-size:15px;color:#374151;margin-bottom:20px">Dear <strong>${booking.customer_name}</strong>, we hope you had a comfortable journey. Here is your trip summary.</p>
    <div class="ref-box">
      <div class="label">Trip Reference</div>
      <div class="ref">${ref}</div>
    </div>
    <div class="info-row"><span class="lbl">From</span><span class="val">${booking.pickup_location}</span></div>
    <div class="info-row"><span class="lbl">To</span><span class="val">${booking.dropoff_location}</span></div>
    <div class="info-row"><span class="lbl">Date</span><span class="val">${new Date(booking.pickup_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span></div>
    <div class="info-row"><span class="lbl">Time</span><span class="val">${pickupTime}</span></div>
    <div class="info-row"><span class="lbl">Vehicle</span><span class="val">${booking.vehicle_type}</span></div>
    <div class="info-row"><span class="lbl">Passengers</span><span class="val">${booking.passengers}</span></div>
    ${booking.invoice_price ? `<div class="info-row"><span class="lbl">Amount</span><span class="val" style="color:#ca8a04;font-weight:800">${booking.currency || 'SAR'} ${booking.invoice_price}</span></div>` : ''}
    <div style="background:#f8fafc;border-radius:10px;padding:20px;text-align:center;margin-top:24px;border:1px solid #e2e8f0">
      <p style="font-size:14px;font-weight:700;color:#0f172a;margin-bottom:8px">How was your experience?</p>
      <div class="stars">⭐⭐⭐⭐⭐</div>
      <p style="font-size:13px;color:#64748b">We'd love to hear your feedback</p>
    </div>
    <a href="https://airporttraveltaxis.com/feedback/${ref}/" class="cta">Leave a Review</a>
    <a href="https://airporttraveltaxis.com/" class="cta2">Book Your Next Journey</a>
  </div>
  <div class="footer">Airport Travel Taxis · booking@airporttraveltaxis.com · +966 56 948 7569</div>
</div>
</body></html>`;

        const result = await resend.emails.send({
            from: FROM_BOOKING,
            to: [booking.customer_email],
            subject: `Trip Completed — ${ref} · Thank you for travelling with us`,
            html,
        });

        return NextResponse.json({ success: !result.error, emailId: result.data?.id });
    } catch (e) {
        console.error('[RECEIPT]', e);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
