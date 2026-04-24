'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const LABELS = ['Terrible', 'Poor', 'Good', 'Very Good', 'Excellent'];

export default function FeedbackPage() {
    const params = useParams();
    const ref = (params?.ref as string || '').toUpperCase().replace(/%2D/g, '-');

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [comment, setComment] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [done, setDone] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!rating) { setError('Please select a star rating.'); return; }
        setSubmitting(true);
        setError('');
        try {
            const res = await fetch('/api/feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ booking_ref: ref, rating, comment }),
            });
            const data = await res.json();
            if (data.success) {
                setDone(true);
            } else {
                setError(data.error || 'Something went wrong. Please try again.');
            }
        } catch {
            setError('Network error. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    if (done) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-surface-50 to-amber-50 flex items-center justify-center px-6 pt-24 pb-16">
                <div className="max-w-md w-full text-center">
                    <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-200">
                        <span className="text-5xl">⭐</span>
                    </div>
                    <h1 className="text-3xl font-black text-surface-900 mb-3">Thank You!</h1>
                    <p className="text-surface-600 text-lg mb-2">Your feedback has been recorded.</p>
                    <p className="text-surface-400 text-sm mb-8">
                        {rating >= 4
                            ? 'We\'re thrilled you had a great experience!'
                            : 'We appreciate your honest feedback and will work to improve.'}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="https://wa.me/966569487569"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 py-3 px-5 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#128C7E] transition-colors text-sm"
                        >
                            💬 Chat With Us
                        </a>
                        <Link
                            href="/"
                            className="flex items-center justify-center gap-2 py-3 px-5 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors text-sm"
                        >
                            Book Again →
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-surface-50 to-amber-50 flex items-center justify-center px-6 pt-24 pb-16">
            <div className="max-w-md w-full">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow shadow-amber-200">
                        <span className="text-3xl">✈️</span>
                    </div>
                    <h1 className="text-3xl font-black text-surface-900 mb-2">How Was Your Ride?</h1>
                    <p className="text-surface-500">
                        Booking <span className="font-bold font-mono text-surface-700">{ref}</span>
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-surface-200 shadow-lg p-8 space-y-6">
                    {/* Star Rating */}
                    <div>
                        <label className="block text-sm font-bold text-surface-700 mb-4 text-center uppercase tracking-wider">
                            Rate Your Experience
                        </label>
                        <div className="flex justify-center gap-2 mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setRating(star)}
                                    onMouseEnter={() => setHover(star)}
                                    onMouseLeave={() => setHover(0)}
                                    className="text-4xl transition-transform hover:scale-110 focus:outline-none"
                                    aria-label={`Rate ${star} stars`}
                                >
                                    <span className={star <= (hover || rating) ? 'text-amber-400' : 'text-surface-200'}>
                                        ★
                                    </span>
                                </button>
                            ))}
                        </div>
                        {(hover || rating) > 0 && (
                            <p className="text-center text-sm font-bold text-amber-600">
                                {LABELS[(hover || rating) - 1]}
                            </p>
                        )}
                    </div>

                    {/* Comment */}
                    <div>
                        <label className="block text-sm font-bold text-surface-700 mb-2">
                            Additional Comments <span className="text-surface-400 font-normal">(Optional)</span>
                        </label>
                        <textarea
                            rows={4}
                            className="w-full px-4 py-3 border-2 border-surface-200 rounded-xl text-sm text-surface-700 focus:outline-none focus:border-primary-400 resize-none placeholder:text-surface-300"
                            placeholder="Tell us about your experience with the driver, vehicle, or service..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700 font-medium">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={submitting || !rating}
                        className="w-full py-3.5 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {submitting ? (
                            <><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Submitting...</>
                        ) : (
                            'Submit Feedback'
                        )}
                    </button>
                </form>

                <p className="text-center text-surface-400 text-xs mt-6">
                    <Link href="/" className="hover:text-primary-600 transition-colors">← Airport Travel Taxis</Link>
                </p>
            </div>
        </div>
    );
}
