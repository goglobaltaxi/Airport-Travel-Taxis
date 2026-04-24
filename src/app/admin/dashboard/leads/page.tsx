'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { User, Calendar, MapPin, ExternalLink, Clock, Copy, Search } from 'lucide-react';

export default function LeadsManagement() {
    const [leads, setLeads] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        fetchLeads();
        const channel = supabase
            .channel('leads-realtime')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'lead_assignments' }, fetchLeads)
            .subscribe();
        return () => { supabase.removeChannel(channel); };
    }, []);

    const fetchLeads = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('lead_assignments')
            .select('*, bookings (*)')
            .order('created_at', { ascending: false });

        if (error) console.error('Error fetching leads:', error);
        else setLeads(data || []);
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
        } catch { return timeStr; }
    };

    const copyToClipboard = async (lead: any) => {
        const text = `Booking Ref: #${lead.bookings?.booking_id_serial?.toString().padStart(4, '0') || 'N/A'}
Assignee: ${lead.assignee_name}
Customer: ${lead.bookings?.customer_name}
Phone: ${lead.bookings?.customer_phone}
From: ${lead.bookings?.pickup_location}
To: ${lead.bookings?.dropoff_location}
Date: ${lead.bookings?.pickup_date}
Time: ${formatTimeWithAMPM(lead.bookings?.pickup_time)}
Vehicle: ${lead.bookings?.vehicle_type}
Passengers: ${lead.bookings?.passengers}`;

        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            console.error('Failed to copy', err);
        }
    };

    const todayStr = new Date().toISOString().split('T')[0];
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);

    const filteredLeads = leads.filter(l => {
        const matchesSearch =
            l.assignee_name?.toLowerCase().includes(search.toLowerCase()) ||
            l.bookings?.customer_name?.toLowerCase().includes(search.toLowerCase()) ||
            l.bookings?.pickup_location?.toLowerCase().includes(search.toLowerCase());

        const matchesFilter =
            filter === 'all' ? true :
            filter === 'today' ? l.assigned_date === todayStr :
            filter === 'week' ? new Date(l.assigned_date) >= weekAgo :
            true;

        return matchesSearch && matchesFilter;
    });

    return (
        <div className="space-y-6">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between glass-card p-4">
                <div className="relative w-full sm:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400" size={16} />
                    <input
                        type="search"
                        placeholder="Search by assignee or customer..."
                        className="input-field pl-9 h-10 text-sm"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    {[
                        { key: 'all', label: 'All' },
                        { key: 'today', label: 'Today' },
                        { key: 'week', label: 'This Week' },
                    ].map(({ key, label }) => (
                        <button
                            key={key}
                            onClick={() => setFilter(key)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all ${
                                filter === key
                                    ? 'bg-primary-600 text-white border-primary-600'
                                    : 'bg-white text-surface-500 border-surface-200 hover:border-primary-300'
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                    <button onClick={fetchLeads} className="btn-secondary py-2 px-4 text-xs">Refresh</button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
                {[
                    { label: 'Total Assigned', val: leads.length },
                    { label: 'Assigned Today', val: leads.filter(l => l.assigned_date === todayStr).length },
                    { label: 'This Week', val: leads.filter(l => new Date(l.assigned_date) >= weekAgo).length },
                ].map((s, i) => (
                    <div key={i} className="glass-card p-4 text-center">
                        <p className="text-2xl font-bold text-surface-900">{s.val}</p>
                        <p className="text-[10px] font-bold text-surface-500 uppercase tracking-widest mt-1">{s.label}</p>
                    </div>
                ))}
            </div>

            {loading ? (
                <div className="flex flex-col items-center justify-center py-20 gap-4">
                    <span className="w-10 h-10 border-4 border-primary-100 border-t-primary-600 rounded-full animate-spin" />
                    <p className="text-surface-500 font-medium italic">Loading lead assignments...</p>
                </div>
            ) : filteredLeads.length === 0 ? (
                <div className="glass-card p-12 text-center text-surface-500">
                    <User size={48} className="mx-auto mb-4 opacity-20" />
                    <p className="text-lg font-medium">No leads found.</p>
                    <p className="text-sm mt-2">Go to Bookings to assign leads.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredLeads.map((lead) => (
                        <div key={lead.id} className="glass-card overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-surface-200/50">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                        <User size={24} />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-surface-400 font-mono">
                                        #{lead.bookings?.booking_id_serial?.toString().padStart(4, '0') || '----'}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-surface-900 mb-1">{lead.assignee_name}</h3>
                                <div className="flex items-center gap-2 text-xs text-surface-500 mb-4">
                                    <Calendar size={12} /> Assigned on {new Date(lead.assigned_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                                </div>

                                <div className="space-y-3 pt-4 border-t border-surface-100">
                                    <p className="text-[10px] font-bold text-surface-400 uppercase tracking-widest">Customer</p>
                                    <p className="text-sm font-bold text-surface-900">{lead.bookings?.customer_name}</p>
                                    <div className="flex items-start gap-2">
                                        <MapPin size={13} className="text-primary-600 mt-0.5 flex-shrink-0" />
                                        <p className="text-sm text-surface-700 leading-tight">
                                            {lead.bookings?.pickup_location}
                                            <span className="text-surface-400 mx-1">→</span>
                                            {lead.bookings?.dropoff_location}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-medium text-surface-900">
                                        <Clock size={13} className="text-surface-400" />
                                        {lead.bookings?.pickup_date} · {formatTimeWithAMPM(lead.bookings?.pickup_time)}
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2 mt-2">
                                        <span className="px-2 py-1 bg-surface-100 rounded text-[10px] font-bold uppercase tracking-widest text-surface-600 border border-surface-200">{lead.bookings?.vehicle_type || 'Any'}</span>
                                        <span className="px-2 py-1 bg-surface-100 rounded text-[10px] font-bold uppercase tracking-widest text-surface-600 border border-surface-200">{lead.bookings?.passengers || '1'} Pax</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-surface-50 px-6 py-4 flex justify-between items-center border-t border-surface-100">
                                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${
                                    lead.bookings?.status === 'completed' ? 'bg-green-100 text-green-700' :
                                    lead.bookings?.status === 'assigned' ? 'bg-blue-100 text-blue-700' :
                                    'bg-amber-100 text-amber-700'
                                }`}>
                                    {lead.bookings?.status}
                                </span>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => copyToClipboard(lead)}
                                        className="p-1.5 bg-surface-200 text-surface-600 rounded hover:bg-surface-300 transition-colors"
                                        title="Copy Details"
                                    >
                                        <Copy size={14} />
                                    </button>
                                    <a
                                        href={`https://wa.me/${lead.bookings?.customer_phone?.replace(/[^0-9+]/g, '')}`}
                                        target="_blank" rel="noopener noreferrer"
                                        className="text-white bg-[#25D366] hover:bg-[#128C7E] px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors"
                                    >
                                        WhatsApp <ExternalLink size={12} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
