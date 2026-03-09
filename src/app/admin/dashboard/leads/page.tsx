'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { User, Calendar, MapPin, ExternalLink, Clock, Filter, Copy } from 'lucide-react';

export default function LeadsManagement() {
    const [leads, setLeads] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        fetchLeads();
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

    const copyToClipboard = async (lead: any) => {
        const text = `Booking Reference: #${lead.bookings?.booking_id_serial?.toString().padStart(4, '0') || 'N/A'}
Name: ${lead.bookings?.customer_name}
Phone: ${lead.bookings?.customer_phone}
From: ${lead.bookings?.pickup_location}
To: ${lead.bookings?.dropoff_location}
Date: ${lead.bookings?.pickup_date}
Time: ${lead.bookings?.pickup_time}
Vehicle: ${lead.bookings?.vehicle_type}
Passengers: ${lead.bookings?.passengers}`;
        
        try {
            await navigator.clipboard.writeText(text);
            alert('Lead details copied to clipboard! Ready to paste to your driver.');
        } catch (err) {
            console.error('Failed to copy', err);
        }
    };

    const filteredLeads = leads.filter(l => {
        if (filter === 'all') return true;
        // Add custom filters if needed
        return true;
    });

    return (
        <div className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-xl font-display font-bold text-surface-900">Lead Assignments</h2>
                    <p className="text-sm text-surface-500 mt-1">Track which team members are handling specific bookings</p>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={fetchLeads} className="btn-secondary py-2 px-4 text-sm">Refresh</button>
                </div>
            </div>

            {loading ? (
                <div className="flex flex-col items-center justify-center py-20 gap-4">
                    <span className="w-10 h-10 border-4 border-primary-100 border-t-primary-600 rounded-full animate-spin" />
                    <p className="text-surface-500 font-medium italic">Scanning lead history...</p>
                </div>
            ) : filteredLeads.length === 0 ? (
                <div className="glass-card p-12 text-center text-surface-500">
                    <User size={48} className="mx-auto mb-4 opacity-20" />
                    <p className="text-lg font-medium">No leads have been assigned yet.</p>
                    <p className="text-sm mt-2">Go to the Bookings section to assign your first lead.</p>
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
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-surface-400">
                                        ID: {lead.id.slice(0, 8)}
                                    </span>
                                </div>
                                
                                <h3 className="text-lg font-bold text-surface-900 mb-1">{lead.assignee_name}</h3>
                                <div className="flex items-center gap-2 text-xs text-surface-500 mb-4">
                                    <Calendar size={14} /> Assigned on {new Date(lead.assigned_date).toLocaleDateString()}
                                </div>

                                <div className="space-y-3 pt-4 border-t border-surface-100">
                                    <p className="text-xs font-bold text-surface-400 uppercase tracking-widest mb-1">Booking Detail</p>
                                    <div className="flex items-start gap-2">
                                        <MapPin size={14} className="text-primary-600 mt-0.5" />
                                        <p className="text-sm text-surface-700 leading-tight">
                                            {lead.bookings?.pickup_location} <br/>
                                            <span className="text-surface-400">to</span> <br/>
                                            {lead.bookings?.dropoff_location}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-medium text-surface-900">
                                        <Clock size={14} className="text-surface-400" />
                                        {lead.bookings?.pickup_date} at {lead.bookings?.pickup_time}
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="px-2 py-1 bg-surface-100 rounded text-[10px] font-bold uppercase tracking-widest text-surface-600 border border-surface-200">{lead.bookings?.vehicle_type || 'Any Vehicle'}</span>
                                        <span className="px-2 py-1 bg-surface-100 rounded text-[10px] font-bold uppercase tracking-widest text-surface-600 border border-surface-200">{lead.bookings?.passengers || '1'} Pax</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-surface-50 px-6 py-4 flex justify-between items-center border-t border-surface-100">
                                <span className="text-[10px] font-bold text-surface-500 uppercase tracking-widest">
                                    Status: {lead.bookings?.status}
                                </span>
                                <div className="flex items-center gap-2">
                                    <button 
                                        onClick={() => copyToClipboard(lead)}
                                        className="p-1.5 bg-surface-200 text-surface-600 rounded hover:bg-surface-300 hover:text-surface-900 transition-colors shadow-sm"
                                        title="Copy Details"
                                    >
                                        <Copy size={14} />
                                    </button>
                                    <a 
                                        href={`https://wa.me/${lead.bookings?.customer_phone?.replace(/[^0-9+]/g, '')}`}
                                        target="_blank" rel="noopener noreferrer"
                                        className="text-white bg-[#25D366] hover:bg-[#128C7E] px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors shadow-sm"
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
