import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Booking Confirmed | Airport Travel Taxis',
    robots: { index: false, follow: false },
};

export default function BookingConfirmed({
    searchParams,
}: {
    searchParams: { ref?: string; name?: string };
}) {
    const ref = searchParams.ref || '';
    const name = searchParams.name || 'Valued Customer';

    return (
        <div className="min-h-screen bg-gradient-to-br from-surface-50 to-green-50 flex items-center justify-center px-6 pt-24 pb-16">
            <div className="max-w-2xl w-full">
                {/* Success Icon */}
                <div className="text-center mb-10">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-200">
                        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1 className="text-4xl font-black text-surface-900 mb-3">Booking Received!</h1>
                    <p className="text-surface-500 text-lg">
                        Thank you, <strong className="text-surface-800">{name}</strong>. Your booking request has been submitted.
                    </p>
                </div>

                {/* Booking Ref Card */}
                {ref && (
                    <div className="bg-white border-2 border-green-200 rounded-2xl p-6 text-center mb-6 shadow-sm">
                        <p className="text-xs font-bold text-surface-400 uppercase tracking-widest mb-2">Your Booking Reference</p>
                        <p className="text-4xl font-black text-primary-600 font-mono tracking-wider">{ref}</p>
                        <p className="text-sm text-surface-400 mt-2">Save this reference number</p>
                    </div>
                )}

                {/* Info Steps */}
                <div className="bg-white rounded-2xl border border-surface-200 p-6 mb-6 shadow-sm">
                    <h3 className="font-bold text-surface-900 mb-4 text-base">What happens next?</h3>
                    <div className="space-y-4">
                        {[
                            { step: '1', icon: '📧', title: 'Confirmation email sent', desc: 'Check your inbox for the booking details email.' },
                            { step: '2', icon: '🔍', title: 'Our team reviews your booking', desc: 'We review your trip details and assign the best vehicle.' },
                            { step: '3', icon: '💬', title: 'We contact you via WhatsApp', desc: 'You\'ll receive confirmation and driver details before pickup.' },
                            { step: '4', icon: '🚗', title: 'Enjoy your ride', desc: 'Your professional chauffeur will be ready at the pickup point.' },
                        ].map(({ step, icon, title, desc }) => (
                            <div key={step} className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                                    {step}
                                </div>
                                <div>
                                    <p className="font-semibold text-surface-900 text-sm">{icon} {title}</p>
                                    <p className="text-surface-500 text-sm mt-0.5">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <a
                        href={`https://wa.me/966569487569?text=${encodeURIComponent(`Hi, I just made a booking. My reference is ${ref}. I'd like to confirm my trip details.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#128C7E] transition-colors text-sm"
                    >
                        💬 WhatsApp Us
                    </a>
                    {ref && (
                        <Link
                            href={`/track?ref=${ref}`}
                            className="flex items-center justify-center gap-2 py-3 px-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors text-sm"
                        >
                            🔍 Track Booking
                        </Link>
                    )}
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 py-3 px-4 bg-white text-surface-700 font-bold rounded-xl border-2 border-surface-200 hover:border-primary-300 transition-colors text-sm"
                    >
                        ← Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
