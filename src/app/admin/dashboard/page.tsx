'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { Calendar, Users, CheckCircle, Clock, ArrowRight, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        total: 0,
        today: 0,
        pending: 0,
        assigned: 0,
        completed: 0,
        unreadMessages: 0,
    });
    const [recentBookings, setRecentBookings] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        const todayStr = new Date().toISOString().split('T')[0];

        const [{ data: bookings }, { count: unreadMessages }] = await Promise.all([
            supabase.from('bookings').select('*').order('created_at', { ascending: false }),
            supabase.from('contact_messages').select('*', { count: 'exact', head: true }).neq('status', 'read'),
        ]);

        if (bookings) {
            setStats({
                total: bookings.length,
                today: bookings.filter(b => b.created_at?.startsWith(todayStr)).length,
                pending: bookings.filter(b => b.status === 'pending').length,
                assigned: bookings.filter(b => b.status === 'assigned').length,
                completed: bookings.filter(b => b.status === 'completed').length,
                unreadMessages: unreadMessages || 0,
            });
            setRecentBookings(bookings.slice(0, 5));
        }
        setLoading(false);
    };

    const formatTimeWithAMPM = (timeStr: string) => {
        if (!timeStr) return '';
        try {
            const [hours, minutes] = timeStr.split(':');
            const h = parseInt(hours, 10);
            const m = parseInt(minutes, 10);
            const ampm = h >= 12 ? 'PM' : 'AM';
            const hr12 = h % 12 || 12;
            return `${hr12}:${m.toString().padStart(2, '0')} ${ampm}`;
        } catch {
            return timeStr;
        }
    };

    const statCards = [
        { label: 'Total Bookings', val: stats.total, icon: TrendingUp, color: 'text-primary-600', bg: 'bg-primary-50' },
        { label: 'Today\'s Bookings', val: stats.today, icon: Calendar, color: 'text-indigo-600', bg: 'bg-indigo-50' },
        { label: 'Awaiting Action', val: stats.pending, icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
        { label: 'Completed', val: stats.completed, icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
    ];

    if (loading) {
        return (
            <div className="flex items-center justify-center h-96">
                <span className="w-10 h-10 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className="space-y-10">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {statCards.map((stat, i) => (
                    <div key={i} className="glass-card p-6 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                        <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full ${stat.bg} opacity-50 group-hover:scale-110 transition-transform`} />
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <stat.icon size={28} className={stat.color} />
                            <div className="mt-4">
                                <p className="text-sm font-bold text-surface-400 uppercase tracking-widest">{stat.label}</p>
                                <p className="text-4xl font-display font-bold text-surface-900 mt-1">{stat.val}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-display font-bold text-surface-900">Recent Inquiries</h3>
                        <Link href="/admin/dashboard/bookings/" className="text-sm font-bold text-primary-600 hover:text-primary-700 flex items-center gap-1">
                            View all <ArrowRight size={16} />
                        </Link>
                    </div>
                    
                    <div className="glass-card overflow-hidden">
                        <div className="divide-y divide-surface-100">
                            {recentBookings.map((booking) => (
                                <div key={booking.id} className="p-5 flex items-center justify-between hover:bg-surface-50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-surface-100 rounded-full flex items-center justify-center text-surface-400">
                                            <Calendar size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-surface-900">{booking.customer_name}</p>
                                            <p className="text-xs text-surface-500">{booking.pickup_location} → {booking.dropoff_location}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-bold text-surface-900">{new Date(booking.pickup_date).toLocaleDateString()}</p>
                                        <p className="text-xs text-surface-500 font-medium mb-1">{formatTimeWithAMPM(booking.pickup_time)}</p>
                                        <span className={`text-[10px] font-bold uppercase tracking-widest ${
                                            booking.status === 'pending' ? 'text-amber-600' : 'text-blue-600'
                                        }`}>
                                            {booking.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Action Items */}
                <div className="space-y-6">
                    <h3 className="text-xl font-display font-bold text-surface-900">Action Required</h3>
                    <div className="space-y-3">
                        <div className={`p-4 bg-white border rounded-2xl shadow-sm border-l-4 ${stats.pending > 0 ? 'border-l-amber-500 border-amber-200' : 'border-l-green-500 border-green-200'}`}>
                            <div className="flex items-center justify-between">
                                <h4 className="font-bold text-surface-900 text-sm">Pending Bookings</h4>
                                <span className={`text-lg font-black ${stats.pending > 0 ? 'text-amber-600' : 'text-green-600'}`}>{stats.pending}</span>
                            </div>
                            <p className="text-xs text-surface-500 mt-1">{stats.pending > 0 ? `${stats.pending} bookings need assignment` : 'All bookings handled ✓'}</p>
                        </div>
                        <div className={`p-4 bg-white border rounded-2xl shadow-sm border-l-4 ${stats.unreadMessages > 0 ? 'border-l-red-500 border-red-200' : 'border-l-green-500 border-green-200'}`}>
                            <div className="flex items-center justify-between">
                                <h4 className="font-bold text-surface-900 text-sm">Unread Messages</h4>
                                <span className={`text-lg font-black ${stats.unreadMessages > 0 ? 'text-red-600' : 'text-green-600'}`}>{stats.unreadMessages}</span>
                            </div>
                            <p className="text-xs text-surface-500 mt-1">{stats.unreadMessages > 0 ? `${stats.unreadMessages} messages waiting for reply` : 'Inbox clear ✓'}</p>
                        </div>
                        <div className={`p-4 bg-white border rounded-2xl shadow-sm border-l-4 ${stats.today > 0 ? 'border-l-blue-500 border-blue-200' : 'border-l-surface-300 border-surface-200'}`}>
                            <div className="flex items-center justify-between">
                                <h4 className="font-bold text-surface-900 text-sm">Today's New Bookings</h4>
                                <span className={`text-lg font-black ${stats.today > 0 ? 'text-blue-600' : 'text-surface-400'}`}>{stats.today}</span>
                            </div>
                            <p className="text-xs text-surface-500 mt-1">{stats.today > 0 ? `${stats.today} bookings received today` : 'No bookings today yet'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
