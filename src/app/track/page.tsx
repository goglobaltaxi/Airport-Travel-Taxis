'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function TrackBooking({
    searchParams,
}: {
    searchParams: { ref?: string };
}) {
    const [refInput, setRefInput] = useState(searchParams.ref || '');
    const [booking, setBooking] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [showCancel, setShowCancel] = useState(false);
    const [cancelEmail, setCancelEmail] = useState('');
    const [cancelling, setCancelling] = useState(false);
    const [cancelMsg, setCancelMsg] = useState('');

    useEffect(() => {
        if (searchParams.ref) lookup(searchParams.ref);
    }, []);

    const lookup = async (ref?: string) => {
        const query = (ref || refInput).trim().toUpperCase();
        if (!query) return;
        setLoading(true);
        setNotFound(false);
        setBooking(null);

        // Extract serial number from ATT-XXXX format
        const serial = parseInt(query.replace(/^ATT-?0*/i, ''), 10);

        const { data } = await supabase
            .from('bookings')
            .select('*')
            .eq('booking_id_serial', serial)
            .single();

        if (data) setBooking(data);
        else setNotFound(true);
        setLoading(false);
    };

    const statusConfig: Record<string, { label: string; color: string; icon: string }> = {
        pending:   { label: 'Pending Review',   color: 'bg-amber-100 text-amber-700 border-amber-300',  icon: '⏳' },
        assigned:  { label: 'Driver Assigned',  color: 'bg-blue-100 text-blue-700 border-blue-300',    icon: '🚗' },
        completed: { label: 'Trip Completed',   color: 'bg-green-100 text-green-700 border-green-300', icon: '✅' },
        cancelled: { label: 'Cancelled',        color: 'bg-red-100 text-red-700 border-red-300',       icon: '❌' },
    };

    const handleCancel = async () => {
        if (!booking || !cancelEmail) return;
        setCancelling(true);
        setCancelMsg('');
        try {
            const res = await fetch('/api/cancel', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ref: `ATT-${String(booking.booking_id_serial).padStart(4, '0')}`, email: cancelEmail }),
            });
            const data = await res.json();
            if (data.success) {
                setCancelMsg('✅ Booking cancelled. A confirmation email has been sent.');
                setBooking({ ...booking, status: 'cancelled' });
                setShowCancel(false);
            } else {
                setCancelMsg(`❌ ${data.error || 'Cancellation failed'}`);
            }
        } catch {
            setCancelMsg('❌ Network error. Please try again.');
        } finally {
            setCancelling(false);
        }
    };

    const formatTime = (t: string) => {
        if (!t) return '';
        const [h, m] = t.split(':').map(Number);
        return `${h % 12 || 12}:${String(m).padStart(2, '0')} ${h >= 12 ? 'PM' : 'AM'}`;
    };

    return (
        <div className="min-h-screen bg-surface-50 pt-24 pb-16 px-6">
            <div className="max-w-xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-black text-surface-900 mb-3">Track Your Booking</h1>
                    <p className="text-surface-500">Enter your booking reference number to check your trip status.</p>
                </div>

                {/* Search */}
                <div className="bg-white rounded-2xl border border-surface-200 p-6 shadow-sm mb-6">
                    <label className="block text-sm font-bold text-surface-700 mb-2">Booking Reference</label>
                    <div className="flex gap-3">
                        <input
                            type="text"
                            placeholder="e.g. ATT-0042"
                            value={refInput}
                            onChange={(e) => setRefInput(e.target.value.toUpperCase())}
                            onKeyDown={(e) => e.key === 'Enter' && lookup()}
                            className="flex-1 px-4 py-3 border-2 border-surface-200 rounded-xl font-mono text-lg focus:outline-none focus:border-primary-400 uppercase"
                        />
                        <button
                            onClick={() => lookup()}
                            disabled={loading}
                            className="px-6 py-3 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-50"
                        >
                            {loading ? '...' : 'Search'}
                        </button>
                    </div>
                </div>

                {/* Not Found */}
                {notFound && (
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center text-red-700">
                        <p className="text-2xl mb-2">🔍</p>
                        <p className="font-bold">Booking not found</p>
                        <p className="text-sm mt-1">Please check your reference number and try again.</p>
                    </div>
                )}

                {/* Result */}
                {booking && (() => {
                    const s = statusConfig[booking.status] || statusConfig.pending;
                    const ref = `ATT-${String(booking.booking_id_serial).padStart(4, '0')}`;
                    return (
                        <div className="bg-white rounded-2xl border border-surface-200 shadow-sm overflow-hidden">
                            {/* Header */}
                            <div className="bg-primary-600 px-6 py-5 text-white">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-primary-200 text-xs font-bold uppercase tracking-widest">Booking Reference</p>
                                        <p className="text-2xl font-black font-mono mt-1">{ref}</p>
                                    </div>
                                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold border ${s.color}`}>
                                        {s.icon} {s.label}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 space-y-5">
                                {/* Route */}
                                <div className="bg-surface-50 rounded-xl p-4 border border-surface-200">
                                    <div className="flex items-start gap-3 mb-3">
                                        <span className="w-3 h-3 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-[10px] font-bold text-surface-400 uppercase tracking-widest">Pickup</p>
                                            <p className="font-bold text-surface-900">{booking.pickup_location}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-3 h-3 bg-red-500 rounded-full mt-1.5 flex-shrink-0" />
                                        <div>
                                            <p className="text-[10px] font-bold text-surface-400 uppercase tracking-widest">Drop-off</p>
                                            <p className="font-bold text-surface-900">{booking.dropoff_location}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { label: 'Date', value: new Date(booking.pickup_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }) },
                                        { label: 'Time', value: formatTime(booking.pickup_time) },
                                        { label: 'Vehicle', value: booking.vehicle_type },
                                        { label: 'Passengers', value: booking.passengers },
                                        ...(booking.flight_number ? [{ label: 'Flight', value: `✈️ ${booking.flight_number}` }] : []),
                                        ...(booking.payment_method ? [{ label: 'Payment', value: booking.payment_method === 'cash_to_driver' ? '💵 Cash' : '💳 Online' }] : []),
                                    ].map(({ label, value }) => (
                                        <div key={label} className="bg-surface-50 rounded-xl p-3 border border-surface-200">
                                            <p className="text-[10px] font-bold text-surface-400 uppercase tracking-widest mb-1">{label}</p>
                                            <p className="font-semibold text-surface-900 text-sm">{value}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Invoice/Quotation info */}
                                {(booking.quotation_sent_at || booking.invoice_sent_at) && (
                                    <div className="border-t border-surface-100 pt-4 space-y-2">
                                        {booking.quotation_sent_at && (
                                            <div className="flex items-center justify-between bg-blue-50 rounded-xl px-4 py-3 border border-blue-200">
                                                <span className="text-sm font-bold text-blue-700">📋 Quotation Sent</span>
                                                <span className="text-xs text-blue-600 font-semibold">
                                                    {booking.quotation_price && `${booking.currency || 'SAR'} ${booking.quotation_price}`}
                                                </span>
                                            </div>
                                        )}
                                        {booking.invoice_sent_at && (
                                            <div className="flex items-center justify-between bg-purple-50 rounded-xl px-4 py-3 border border-purple-200">
                                                <span className="text-sm font-bold text-purple-700">🧾 Invoice Sent</span>
                                                <span className="text-xs text-purple-600 font-semibold">
                                                    {booking.invoice_price && `${booking.currency || 'SAR'} ${booking.invoice_price}`}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                )}

                                <a
                                    href={`https://wa.me/966569487569?text=${encodeURIComponent(`Hi, I'm checking on my booking ${ref}. Can you provide an update?`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#128C7E] transition-colors"
                                >
                                    💬 Contact Us on WhatsApp
                                </a>

                                {/* Cancel option for pending/assigned bookings */}
                                {['pending', 'assigned'].includes(booking.status) && (
                                    <div className="pt-2">
                                        {cancelMsg && (
                                            <p className={`text-sm font-semibold text-center mb-3 ${cancelMsg.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}>{cancelMsg}</p>
                                        )}
                                        {!showCancel ? (
                                            <button
                                                onClick={() => setShowCancel(true)}
                                                className="w-full py-2.5 text-sm font-semibold text-red-500 border border-red-200 rounded-xl hover:bg-red-50 transition-colors"
                                            >
                                                Cancel This Booking
                                            </button>
                                        ) : (
                                            <div className="bg-red-50 border border-red-200 rounded-xl p-4 space-y-3">
                                                <p className="text-sm font-bold text-red-700">Confirm Cancellation</p>
                                                <p className="text-xs text-red-600">Enter the email used when booking to confirm.</p>
                                                <input
                                                    type="email"
                                                    placeholder="your@email.com"
                                                    value={cancelEmail}
                                                    onChange={e => setCancelEmail(e.target.value)}
                                                    className="w-full px-3 py-2 border border-red-300 rounded-lg text-sm focus:outline-none focus:border-red-500"
                                                />
                                                <div className="flex gap-2">
                                                    <button onClick={() => setShowCancel(false)} className="flex-1 py-2 text-sm font-semibold border border-surface-200 rounded-lg hover:bg-surface-50">Keep Booking</button>
                                                    <button
                                                        onClick={handleCancel}
                                                        disabled={cancelling || !cancelEmail}
                                                        className="flex-1 py-2 text-sm font-bold bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
                                                    >
                                                        {cancelling ? 'Cancelling...' : 'Confirm Cancel'}
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })()}

                <p className="text-center text-surface-400 text-sm mt-8">
                    <Link href="/" className="hover:text-primary-600 transition-colors">← Back to Home</Link>
                </p>
            </div>
        </div>
    );
}
