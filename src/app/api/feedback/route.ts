import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { rateLimit, getClientIp } from '@/lib/rateLimit';

const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// POST /api/feedback  { booking_ref, rating, comment }
export async function POST(req: NextRequest) {
    const ip = getClientIp(req);
    if (!rateLimit(ip, 3, 60_000)) return NextResponse.json({ error: 'Too many requests' }, { status: 429 });

    try {
        const { booking_ref, rating, comment } = await req.json();
        if (!booking_ref || !rating) return NextResponse.json({ error: 'booking_ref and rating required' }, { status: 400 });
        if (rating < 1 || rating > 5) return NextResponse.json({ error: 'Rating must be 1-5' }, { status: 400 });

        const serial = parseInt(booking_ref.replace(/^ATT-?0*/i, ''), 10);
        const { data: booking } = await supabaseAdmin
            .from('bookings').select('id,customer_name,booking_id_serial').eq('booking_id_serial', serial).single();

        if (!booking) return NextResponse.json({ error: 'Booking not found' }, { status: 404 });

        // Check for duplicate
        const { data: existing } = await supabaseAdmin
            .from('trip_feedback').select('id').eq('booking_id', booking.id).single();
        if (existing) return NextResponse.json({ error: 'Feedback already submitted for this trip' }, { status: 409 });

        await supabaseAdmin.from('trip_feedback').insert([{
            booking_id: booking.id,
            booking_ref: booking_ref.toUpperCase(),
            customer_name: booking.customer_name,
            rating,
            comment: comment || null,
        }]);

        // Sync rating to reviews table as published review
        if (rating >= 4 && booking.customer_name) {
            await supabaseAdmin.from('reviews').insert([{
                name: booking.customer_name,
                rating,
                review: comment || `Great service! Smooth trip with booking ${booking_ref}.`,
                published: rating === 5,
            }]).select();
        }

        return NextResponse.json({ success: true });
    } catch (e) {
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
