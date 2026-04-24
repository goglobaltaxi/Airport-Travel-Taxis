'use client';

import { useState } from 'react';

export default function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setStatus('loading');
        setErrorMsg('');
        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            const data = await res.json();
            if (data.success) {
                setStatus('success');
                setEmail('');
            } else {
                setErrorMsg(data.error || 'Something went wrong.');
                setStatus('error');
            }
        } catch {
            setErrorMsg('Network error. Please try again.');
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="flex items-center justify-center gap-2 py-3 text-green-700 font-semibold bg-green-50 rounded-xl border border-green-200 px-6">
                <span className="text-xl">✅</span> You&apos;re subscribed! Thank you.
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
                    required
                    className="input-field flex-1"
                />
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary whitespace-nowrap disabled:opacity-70"
                >
                    {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
            </div>
            {status === 'error' && (
                <p className="text-xs text-red-600 font-medium text-center">{errorMsg}</p>
            )}
        </form>
    );
}
