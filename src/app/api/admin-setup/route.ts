import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

// POST /api/admin-setup  { email, password, secret }
// Creates an admin user. Gated by ADMIN_SETUP_SECRET (server-only env var) so
// the public /admin/setup page can't be used by strangers to self-provision
// an admin account.
export async function POST(req: NextRequest) {
    try {
        const { email, password, secret } = await req.json();

        if (!process.env.ADMIN_SETUP_SECRET || secret !== process.env.ADMIN_SETUP_SECRET) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        if (!email || !password || password.length < 6) {
            return NextResponse.json({ error: 'Valid email and a password of at least 6 characters are required' }, { status: 400 });
        }

        const { error } = await supabaseAdmin.auth.admin.createUser({
            email,
            password,
            email_confirm: true,
            user_metadata: { role: 'admin' },
        });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('[ADMIN-SETUP API] Fatal error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
