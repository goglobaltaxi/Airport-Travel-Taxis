import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { resend, FROM_INFO } from '@/lib/resend';

const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// POST /api/broadcast  { subject, html, preview_only? }
export async function POST(req: NextRequest) {
    try {
        const { subject, html, preview_only } = await req.json();
        if (!subject || !html) return NextResponse.json({ error: 'subject and html required' }, { status: 400 });

        // Collect unique emails from bookings
        const { data: bookings } = await supabaseAdmin
            .from('bookings')
            .select('customer_email, customer_name')
            .neq('customer_email', null)
            .neq('status', 'cancelled');

        if (!bookings) return NextResponse.json({ error: 'Could not fetch customers' }, { status: 500 });

        const seen = new Set<string>();
        const recipients: { email: string; name: string }[] = [];
        for (const b of bookings) {
            if (b.customer_email && !seen.has(b.customer_email.toLowerCase())) {
                seen.add(b.customer_email.toLowerCase());
                recipients.push({ email: b.customer_email, name: b.customer_name || '' });
            }
        }

        if (preview_only) {
            return NextResponse.json({ total: recipients.length, sample: recipients.slice(0, 5) });
        }

        // Send in batches of 50 (Resend free tier limit)
        const BATCH = 50;
        let sent = 0; const failed: string[] = [];

        for (let i = 0; i < recipients.length; i += BATCH) {
            const batch = recipients.slice(i, i + BATCH);
            for (const r of batch) {
                const personalised = html
                    .replace(/\{\{name\}\}/g, r.name || 'Valued Customer');
                const result = await resend.emails.send({
                    from: FROM_INFO,
                    to: [r.email],
                    subject,
                    html: personalised,
                });
                if (result.error) failed.push(r.email);
                else sent++;
            }
            // Small delay between batches to respect rate limits
            if (i + BATCH < recipients.length) await new Promise(res => setTimeout(res, 1000));
        }

        // Log the broadcast
        await supabaseAdmin.from('email_broadcasts').insert([{
            subject, total_recipients: recipients.length, sent, failed: failed.length,
        }]);

        return NextResponse.json({ success: true, total: recipients.length, sent, failed: failed.length });
    } catch (e) {
        console.error('[BROADCAST]', e);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
