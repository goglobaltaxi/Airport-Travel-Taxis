'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) setShow(true);
    }, []);

    const accept = () => {
        localStorage.setItem('cookie_consent', 'accepted');
        setShow(false);
    };

    const decline = () => {
        localStorage.setItem('cookie_consent', 'declined');
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[300] p-4">
            <div className="max-w-4xl mx-auto bg-surface-900 text-white rounded-2xl shadow-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-1">
                    <p className="font-bold text-white text-sm mb-1">🍪 We use cookies</p>
                    <p className="text-surface-300 text-xs leading-relaxed">
                        We use cookies to improve your experience, analyze traffic, and personalize content.
                        By continuing, you agree to our{' '}
                        <Link href="/privacy-policy" className="text-primary-400 hover:underline">Privacy Policy</Link>.
                    </p>
                </div>
                <div className="flex gap-3 flex-shrink-0">
                    <button
                        onClick={decline}
                        className="px-4 py-2 text-xs font-bold text-surface-400 hover:text-white border border-surface-700 rounded-lg transition-colors"
                    >
                        Decline
                    </button>
                    <button
                        onClick={accept}
                        className="px-5 py-2 text-xs font-bold bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
                    >
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    );
}
