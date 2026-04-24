import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { rateLimit, getClientIp } from '@/lib/rateLimit';

const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// POST /api/promo  { code: "WELCOME10" }
export async function POST(req: NextRequest) {
    const ip = getClientIp(req);
    if (!rateLimit(ip, 10, 60_000)) {
        return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    try {
        const { code } = await req.json();
        if (!code || typeof code !== 'string') {
            return NextResponse.json({ error: 'Code is required' }, { status: 400 });
        }

        const { data, error } = await supabaseAdmin
            .from('promo_codes')
            .select('*')
            .eq('code', code.trim().toUpperCase())
            .eq('active', true)
            .single();

        if (error || !data) {
            return NextResponse.json({ valid: false, error: 'Invalid or expired promo code' });
        }

        const now = new Date();
        if (data.valid_from && new Date(data.valid_from) > now) {
            return NextResponse.json({ valid: false, error: 'This code is not active yet' });
        }
        if (data.valid_until && new Date(data.valid_until) < now) {
            return NextResponse.json({ valid: false, error: 'This promo code has expired' });
        }
        if (data.max_uses && data.used_count >= data.max_uses) {
            return NextResponse.json({ valid: false, error: 'This promo code has reached its usage limit' });
        }

        return NextResponse.json({
            valid: true,
            code: data.code,
            discount_type: data.discount_type,   // 'percent' | 'fixed'
            discount_value: data.discount_value,
            description: data.description || null,
        });
    } catch (e) {
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
