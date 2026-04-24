import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { resend, FROM_BOOKING, formatTime12h } from '@/lib/resend';

const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// GET /api/reminders?secret=YOUR_CRON_SECRET
// Call this daily via Vercel Cron or external cron service
export async function GET(req: NextRequest) {
    const secret = req.nextUrl.searchParams.get('secret');
    if (secret !== process.env.CRON_SECRET) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];

    const { data: bookings, error } = await supabaseAdmin
        .from('bookings')
        .select('*')
        .eq('pickup_date', tomorrowStr)
        .in('status', ['pending', 'assigned'])
        .eq('reminder_sent', false);

    if (error) {
        console.error('[REMINDERS] DB error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!bookings || bookings.length === 0) {
        return NextResponse.json({ sent: 0, message: 'No upcoming bookings for tomorrow' });
    }

    let sent = 0;
    const failed: string[] = [];

    for (const booking of bookings) {
        if (!booking.customer_email) continue;

        const ref = `ATT-${String(booking.booking_id_serial).padStart(4, '0')}`;
        const pickupTime = formatTime12h(booking.pickup_time);

        const html = `
<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>
body{font-family:'Segoe UI',Arial,sans-serif;background:#f1f5f9;margin:0;padding:0}
.wrap{max-width:600px;margin:32px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.08)}
.header{background:linear-gradient(135deg,#0f172a,#1e3a5f);padding:32px;text-align:center}
.header h1{color:#fff;font-size:22px;margin:0}
.header p{color:#94a3b8;font-size:13px;margin:8px 0 0}
.badge{display:inline-block;background:#ca8a04;color:#fff;font-size:11px;font-weight:700;padding:4px 16px;border-radius:20px;margin-top:12px;letter-spacing:1px;text-transform:uppercase}
.body{padding:32px}
.ref-box{background:#f8fafc;border-left:4px solid #ca8a04;border-radius:8px;padding:16px 20px;margin-bottom:24px}
.ref-box .ref{font-size:22px;font-weight:800;color:#0f172a;font-family:monospace}
.ref-box .label{font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#64748b;margin-bottom:4px}
.info-row{display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid #f1f5f9;font-size:14px}
.info-row .lbl{color:#64748b;font-weight:500}
.info-row .val{color:#0f172a;font-weight:600;text-align:right;max-width:60%}
.cta{display:block;background:#25D366;color:#fff;text-decoration:none;text-align:center;padding:14px 24px;border-radius:10px;font-weight:700;font-size:15px;margin-top:24px}
.footer{background:#f8fafc;padding:20px 32px;text-align:center;font-size:12px;color:#94a3b8;border-top:1px solid #e2e8f0}
</style></head>
<body>
<div class="wrap">
  <div class="header">
    <h1>✈ Your Ride is Tomorrow</h1>
    <p>Airport Travel Taxis — Reminder</p>
    <span class="badge">Trip Reminder</span>
  </div>
  <div class="body">
    <p style="font-size:15px;color:#374151;margin-bottom:20px">Dear <strong>${booking.customer_name}</strong>, this is a friendly reminder that your transfer is scheduled for <strong>tomorrow</strong>.</p>
    <div class="ref-box">
      <div class="label">Booking Reference</div>
      <div class="ref">${ref}</div>
    </div>
    <div class="info-row"><span class="lbl">Pickup</span><span class="val">${booking.pickup_location}</span></div>
    <div class="info-row"><span class="lbl">Drop-off</span><span class="val">${booking.dropoff_location}</span></div>
    <div class="info-row"><span class="lbl">Date</span><span class="val">${new Date(booking.pickup_date).toLocaleDateString('en-GB', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })}</span></div>
    <div class="info-row"><span class="lbl">Time</span><span class="val">${pickupTime}</span></div>
    <div class="info-row"><span class="lbl">Vehicle</span><span class="val">${booking.vehicle_type}</span></div>
    <div class="info-row"><span class="lbl">Passengers</span><span class="val">${booking.passengers}</span></div>
    ${booking.flight_number ? `<div class="info-row"><span class="lbl">Flight</span><span class="val">✈ ${booking.flight_number}</span></div>` : ''}
    <p style="margin-top:20px;font-size:14px;color:#475569">Please ensure you are ready at the pickup location 5 minutes before your scheduled time. Our driver will contact you shortly before arrival.</p>
    <a href="https://wa.me/966569487569?text=${encodeURIComponent(`Hi, I have a booking tomorrow. Reference: ${ref}`)}" class="cta">💬 Contact Us on WhatsApp</a>
  </div>
  <div class="footer">Airport Travel Taxis · booking@airporttraveltaxis.com · +966 56 948 7569</div>
</div>
</body></html>`;

        try {
            const result = await resend.emails.send({
                from: FROM_BOOKING,
                to: [booking.customer_email],
                subject: `⏰ Reminder: Your ride tomorrow at ${pickupTime} — ${ref}`,
                html,
            });

            if (!result.error) {
                await supabaseAdmin
                    .from('bookings')
                    .update({ reminder_sent: true })
                    .eq('id', booking.id);
                sent++;
            } else {
                failed.push(ref);
            }
        } catch (e) {
            console.error(`[REMINDERS] Failed for ${ref}:`, e);
            failed.push(ref);
        }
    }

    return NextResponse.json({ sent, failed, total: bookings.length });
}
