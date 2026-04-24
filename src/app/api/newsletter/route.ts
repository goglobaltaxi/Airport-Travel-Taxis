import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { rateLimit, getClientIp } from '@/lib/rateLimit';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
    const ip = getClientIp(req);
    if (!rateLimit(ip, 3, 60_000)) return NextResponse.json({ error: 'Too many requests' }, { status: 429 });

    try {
        const { email } = await req.json();
        if (!email || typeof email !== 'string' || !email.includes('@')) {
            return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
        }

        const normalised = email.toLowerCase().trim();

        const { data: existing } = await supabase
            .from('newsletter_subscribers')
            .select('id')
            .eq('email', normalised)
            .single();

        if (existing) return NextResponse.json({ success: true });

        const { error } = await supabase
            .from('newsletter_subscribers')
            .insert([{ email: normalised }]);

        if (error) throw error;

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
