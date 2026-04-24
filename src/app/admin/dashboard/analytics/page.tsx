'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, LineChart, Line, CartesianGrid, Legend,
} from 'recharts';
import { TrendingUp, DollarSign, Calendar, Users } from 'lucide-react';

const COLORS = ['#0f172a', '#ca8a04', '#3b82f6', '#22c55e', '#ef4444', '#8b5cf6', '#f97316', '#06b6d4'];

export default function AnalyticsDashboard() {
    const [bookings, setBookings] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        supabase.from('bookings').select('*').order('created_at', { ascending: true })
            .then(({ data }) => { setBookings(data || []); setLoading(false); });
    }, []);

    if (loading) return (
        <div className="flex items-center justify-center h-64">
            <span className="w-10 h-10 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
        </div>
    );

    // --- Derived data ---
    const total = bookings.length;
    const completed = bookings.filter(b => b.status === 'completed').length;
    const pending = bookings.filter(b => b.status === 'pending').length;
    const withInvoice = bookings.filter(b => b.invoice_sent_at).length;

    // Bookings per month (last 6 months)
    const monthlyMap: Record<string, number> = {};
    const now = new Date();
    for (let i = 5; i >= 0; i--) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const key = d.toLocaleDateString('en-GB', { month: 'short', year: '2-digit' });
        monthlyMap[key] = 0;
    }
    bookings.forEach(b => {
        const d = new Date(b.created_at);
        const key = d.toLocaleDateString('en-GB', { month: 'short', year: '2-digit' });
        if (key in monthlyMap) monthlyMap[key]++;
    });
    const monthlyData = Object.entries(monthlyMap).map(([month, count]) => ({ month, count }));

    // Status breakdown
    const statusData = ['pending', 'assigned', 'completed', 'cancelled'].map(s => ({
        name: s.charAt(0).toUpperCase() + s.slice(1),
        value: bookings.filter(b => b.status === s).length,
    })).filter(d => d.value > 0);

    // Vehicle type breakdown
    const vehicleMap: Record<string, number> = {};
    bookings.forEach(b => { if (b.vehicle_type) vehicleMap[b.vehicle_type] = (vehicleMap[b.vehicle_type] || 0) + 1; });
    const vehicleData = Object.entries(vehicleMap).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value).slice(0, 6);

    // Currency breakdown
    const currencyMap: Record<string, number> = {};
    bookings.forEach(b => { const c = b.currency || 'SAR'; currencyMap[c] = (currencyMap[c] || 0) + 1; });
    const currencyData = Object.entries(currencyMap).map(([name, value]) => ({ name, value }));

    // Top routes
    const routeMap: Record<string, number> = {};
    bookings.forEach(b => {
        if (b.pickup_location && b.dropoff_location) {
            const key = `${b.pickup_location.split(',')[0]} → ${b.dropoff_location.split(',')[0]}`;
            routeMap[key] = (routeMap[key] || 0) + 1;
        }
    });
    const topRoutes = Object.entries(routeMap).sort((a, b) => b[1] - a[1]).slice(0, 8);

    // Daily bookings (last 14 days)
    const dailyMap: Record<string, number> = {};
    for (let i = 13; i >= 0; i--) {
        const d = new Date(); d.setDate(d.getDate() - i);
        dailyMap[d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })] = 0;
    }
    bookings.forEach(b => {
        const d = new Date(b.created_at);
        const key = d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
        if (key in dailyMap) dailyMap[key]++;
    });
    const dailyData = Object.entries(dailyMap).map(([day, count]) => ({ day, count }));

    const StatCard = ({ label, value, icon: Icon, color }: any) => (
        <div className="glass-card p-5 flex items-center gap-4">
            <div className={`p-3 rounded-xl ${color}`}><Icon size={22} className="text-white" /></div>
            <div>
                <p className="text-[11px] font-bold text-surface-400 uppercase tracking-widest">{label}</p>
                <p className="text-3xl font-black text-surface-900">{value}</p>
            </div>
        </div>
    );

    return (
        <div className="space-y-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard label="Total Bookings"  value={total}       icon={Calendar}    color="bg-primary-600" />
                <StatCard label="Completed"        value={completed}   icon={TrendingUp}  color="bg-green-600" />
                <StatCard label="Pending"          value={pending}     icon={Users}       color="bg-amber-500" />
                <StatCard label="Invoices Sent"    value={withInvoice} icon={DollarSign}  color="bg-purple-600" />
            </div>

            {/* Monthly bookings + Daily trend */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="glass-card p-6">
                    <h3 className="text-sm font-bold text-surface-900 uppercase tracking-widest mb-4">Monthly Bookings (Last 6 Months)</h3>
                    <ResponsiveContainer width="100%" height={220}>
                        <BarChart data={monthlyData} barSize={32}>
                            <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                            <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
                            <Tooltip />
                            <Bar dataKey="count" fill="#0f172a" radius={[6, 6, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="glass-card p-6">
                    <h3 className="text-sm font-bold text-surface-900 uppercase tracking-widest mb-4">Daily Activity (Last 14 Days)</h3>
                    <ResponsiveContainer width="100%" height={220}>
                        <LineChart data={dailyData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                            <XAxis dataKey="day" tick={{ fontSize: 10 }} interval={1} />
                            <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
                            <Tooltip />
                            <Line type="monotone" dataKey="count" stroke="#ca8a04" strokeWidth={2.5} dot={{ r: 3 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Status + Vehicle + Currency pies */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {[
                    { title: 'Booking Status', data: statusData },
                    { title: 'Vehicle Types', data: vehicleData },
                    { title: 'Currency Preference', data: currencyData },
                ].map(({ title, data }) => (
                    <div key={title} className="glass-card p-6">
                        <h3 className="text-sm font-bold text-surface-900 uppercase tracking-widest mb-4">{title}</h3>
                        {data.length === 0 ? (
                            <p className="text-surface-400 text-sm text-center py-8">No data yet</p>
                        ) : (
                            <ResponsiveContainer width="100%" height={200}>
                                <PieChart>
                                    <Pie data={data} cx="50%" cy="50%" outerRadius={70} dataKey="value" label={({ name, percent }: { name?: string; percent?: number }) => `${name ?? ''} ${((percent ?? 0) * 100).toFixed(0)}%`} labelLine={false} fontSize={10}>
                                        {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        )}
                    </div>
                ))}
            </div>

            {/* Top Routes */}
            <div className="glass-card p-6">
                <h3 className="text-sm font-bold text-surface-900 uppercase tracking-widest mb-5">Top Routes</h3>
                {topRoutes.length === 0 ? (
                    <p className="text-surface-400 text-sm">No route data yet</p>
                ) : (
                    <div className="space-y-3">
                        {topRoutes.map(([route, count], i) => {
                            const max = topRoutes[0][1];
                            return (
                                <div key={route} className="flex items-center gap-4">
                                    <span className="text-[11px] font-black text-surface-400 w-5">{i + 1}</span>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-sm font-semibold text-surface-800 truncate">{route}</span>
                                            <span className="text-xs font-bold text-surface-500 ml-3">{count}</span>
                                        </div>
                                        <div className="h-2 bg-surface-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary-600 rounded-full transition-all" style={{ width: `${(count / max) * 100}%` }} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
