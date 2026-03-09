'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { Calendar, Users, CheckCircle, Clock, ArrowRight, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        total: 0,
        pending: 0,
        assigned: 0,
        completed: 0
    });
    const [recentBookings, setRecentBookings] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('bookings')
            .select('*')
            .order('created_at', { ascending: false });

        if (!error && data) {
            setStats({
                total: data.length,
                pending: data.filter(b => b.status === 'pending').length,
                assigned: data.filter(b => b.status === 'assigned').length,
                completed: data.filter(b => b.status === 'completed').length,
            });
            setRecentBookings(data.slice(0, 5));
        }
        setLoading(false);
    };

    const statCards = [
        { label: 'Today\'s Activity', val: stats.total, icon: TrendingUp, color: 'text-primary-600', bg: 'bg-primary-50' },
        { label: 'Awaiting Action', val: stats.pending, icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
        { label: 'Active Leads', val: stats.assigned, icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: 'Success Fulfilled', val: stats.completed, icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
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
                        <Link href="/admin/dashboard/bookings" className="text-sm font-bold text-primary-600 hover:text-primary-700 flex items-center gap-1">
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
                                        <p className="text-sm font-bold text-surface-900">{booking.pickup_date}</p>
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

                {/* System Tasks */}
                <div className="space-y-6">
                    <h3 className="text-xl font-display font-bold text-surface-900">System Tasks</h3>
                    <div className="space-y-4">
                        <div className="p-5 bg-white border border-surface-200 rounded-2xl shadow-sm border-l-4 border-l-primary-600">
                            <h4 className="font-bold text-surface-900 mb-1">Account Ready</h4>
                            <p className="text-sm text-surface-600">Your admin account is active. Send your email to finalize configuration.</p>
                        </div>
                        <div className="p-5 bg-white border border-surface-200 rounded-2xl shadow-sm border-l-4 border-l-amber-600">
                            <h4 className="font-bold text-surface-900 mb-1">Check Pending</h4>
                            <p className="text-sm text-surface-600">You have {stats.pending} bookings waiting for assignment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
