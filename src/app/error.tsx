'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        console.error('[GlobalError]', error);
    }, [error]);

    return (
        <div className="min-h-screen bg-surface-50 flex items-center justify-center px-6">
            <div className="text-center max-w-xl">
                <div className="relative mb-8">
                    <p className="text-[10rem] font-black text-surface-100 leading-none select-none">500</p>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-7xl font-black text-red-400 leading-none">500</p>
                    </div>
                </div>

                <h1 className="text-3xl font-bold text-surface-900 mb-3">Something went wrong</h1>
                <p className="text-surface-500 text-base mb-10 leading-relaxed">
                    An unexpected error occurred on our end.<br />
                    Please try again or contact us if the problem persists.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={reset}
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20"
                    >
                        Try Again
                    </button>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-primary-600 font-bold rounded-xl border-2 border-primary-200 hover:border-primary-400 transition-colors"
                    >
                        Back to Home
                    </Link>
                </div>

                <div className="mt-10">
                    <a
                        href="https://wa.me/966569487569"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#25D366] font-semibold hover:underline"
                    >
                        💬 Contact us on WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
}
