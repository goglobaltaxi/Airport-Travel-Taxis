import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Protect all dashboard routes
    // Temporarily disabled cookie-based check because standard Supabase client uses localStorage
    /*
    if (pathname.startsWith('/admin/dashboard')) {
        const cookies = request.cookies.getAll();
        const hasSession = cookies.some(
            (c) => c.name.startsWith('sb-') && c.name.includes('auth-token')
        );

        if (!hasSession) {
            return NextResponse.redirect(new URL('/admin/login/', request.url));
        }
    }
    */

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/dashboard/:path*'],
};
