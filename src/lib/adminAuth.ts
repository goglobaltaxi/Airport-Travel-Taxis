import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

// Verifies the request carries a valid Supabase session token for a logged-in admin.
// The admin dashboard is a Supabase-authenticated SPA, so admin-only API routes
// must check the same session rather than being left open.
export async function isAuthorizedAdmin(req: NextRequest): Promise<boolean> {
    const authHeader = req.headers.get('authorization') || '';
    const token = authHeader.match(/^Bearer\s+(.+)$/i)?.[1];
    if (!token) return false;

    const { data, error } = await supabaseAdmin.auth.getUser(token);
    return !error && !!data?.user;
}
