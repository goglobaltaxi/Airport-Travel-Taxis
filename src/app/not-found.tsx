import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Page Not Found | Airport Travel Taxis',
    robots: { index: false, follow: false },
};

export default function NotFound() {
    return (
        <div className="min-h-screen bg-surface-50 flex items-center justify-center px-6">
            <div className="text-center max-w-xl">
                {/* Number */}
                <div className="relative mb-8">
                    <p className="text-[10rem] font-black text-surface-100 leading-none select-none">404</p>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-7xl font-black text-primary-600 leading-none">404</p>
                    </div>
                </div>

                <h1 className="text-3xl font-bold text-surface-900 mb-3">Page Not Found</h1>
                <p className="text-surface-500 text-base mb-10 leading-relaxed">
                    The page you're looking for doesn't exist or has been moved.<br />
                    Let us get you back on track.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20"
                    >
                        ← Back to Home
                    </Link>
                    <Link
                        href="/booking"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-primary-600 font-bold rounded-xl border-2 border-primary-200 hover:border-primary-400 transition-colors"
                    >
                        Book a Ride
                    </Link>
                </div>

                <div className="mt-12 pt-8 border-t border-surface-200">
                    <p className="text-sm text-surface-400 mb-4">Popular pages</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {[
                            { label: 'Fleet', href: '/fleet' },
                            { label: 'About Us', href: '/about' },
                            { label: 'Contact', href: '/contact' },
                            { label: 'VIP Chauffeur', href: '/vip-chauffeur' },
                        ].map(({ label, href }) => (
                            <Link
                                key={href}
                                href={href}
                                className="px-4 py-2 text-sm font-medium text-surface-600 bg-white border border-surface-200 rounded-lg hover:border-primary-300 hover:text-primary-600 transition-colors"
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
