'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AdminIndex() {
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                router.replace('/admin/dashboard/bookings/');
            } else {
                router.replace('/admin/login/');
            }
        };
        checkAuth();
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-surface-50 text-surface-500 font-medium italic">
            Redirecting to Admin Portal...
        </div>
    );
}
