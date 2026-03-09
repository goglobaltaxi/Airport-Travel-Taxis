'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Calendar, MapPin, User, Phone, Clock, Send, CheckCircle, XCircle, AlertCircle, Search, ChevronRight } from 'lucide-react';

export default function BookingsManagement() {
    const [bookings, setBookings] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [selectedBooking, setSelectedBooking] = useState<any>(null);
    const [assigneeName, setAssigneeName] = useState('');
    const [assigneeDate, setAssigneeDate] = useState('');

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('bookings')
            .select('*, lead_assignments (*)')
            .order('created_at', { ascending: false });

        if (error) console.error('Error fetching bookings:', error);
        else setBookings(data || []);
        setLoading(false);
    };

    const updateStatus = async (id: string, status: string) => {
        const { error } = await supabase
            .from('bookings')
            .update({ status })
            .eq('id', id);

        if (error) alert('Error updating status');
        else fetchBookings();
    };

    const assignLead = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedBooking || !assigneeName || !assigneeDate) return;

        try {
            const { error: assignError } = await supabase
                .from('lead_assignments')
                .insert([{
                    booking_id: selectedBooking.id,
                    assignee_name: assigneeName,
                    assigned_date: assigneeDate
                }]);

            if (assignError) throw assignError;

            // Update booking status to 'assigned'
            await supabase
                .from('bookings')
                .update({ status: 'assigned' })
                .eq('id', selectedBooking.id);

            // Prepare WhatsApp Message for Assignee
            const message = `🚨 *NEW LEAD ASSIGNMENT* 🚨\n\n*Assignee:* ${assigneeName}\n*Assignment Date:* ${assigneeDate}\n\n*Booking Details:*\n- From: ${selectedBooking.pickup_location}\n- To: ${selectedBooking.dropoff_location}\n- Date: ${selectedBooking.pickup_date}\n- Time: ${selectedBooking.pickup_time}\n- Passengers: ${selectedBooking.passengers}\n- Vehicle: ${selectedBooking.vehicle_type}\n\n*Customer Info:*\n- Name: ${selectedBooking.customer_name}\n- Phone: ${selectedBooking.customer_phone}`;
            
            window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');

            setSelectedBooking(null);
            setAssigneeName('');
            setAssigneeDate('');
            fetchBookings();
        } catch (error) {
            console.error('Error assigning lead:', error);
            alert('Failed to assign lead');
        }
    };

    const filteredBookings = bookings.filter(b => 
        b.customer_name?.toLowerCase().includes(search.toLowerCase()) ||
        b.pickup_location?.toLowerCase().includes(search.toLowerCase()) ||
        b.dropoff_location?.toLowerCase().includes(search.toLowerCase())
    );

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending': return 'bg-amber-100 text-amber-700 border-amber-200';
            case 'assigned': return 'bg-blue-100 text-blue-700 border-blue-200';
            case 'completed': return 'bg-green-100 text-green-700 border-green-200';
            case 'cancelled': return 'bg-red-100 text-red-700 border-red-200';
            default: return 'bg-surface-100 text-surface-700 border-surface-200';
        }
    };

    return (
        <div className="space-y-6">
            {/* Stats Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {[
                    { label: 'Total Inquiries', val: bookings.length, icon: AlertCircle, color: 'text-primary-600' },
                    { label: 'Pending', val: bookings.filter(b => b.status === 'pending').length, icon: Clock, color: 'text-amber-600' },
                    { label: 'Assigned', val: bookings.filter(b => b.status === 'assigned').length, icon: User, color: 'text-blue-600' },
                    { label: 'Completed', val: bookings.filter(b => b.status === 'completed').length, icon: CheckCircle, color: 'text-green-600' },
                ].map((stat, i) => (
                    <div key={i} className="glass-card p-4 flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-surface-50 ${stat.color}`}>
                            <stat.icon size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-surface-500 uppercase tracking-widest">{stat.label}</p>
                            <p className="text-2xl font-bold text-surface-900">{stat.val}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between glass-card p-4">
                <div className="relative w-full sm:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400" size={18} />
                    <input
                        type="search"
                        placeholder="Search by name or location..."
                        className="input-field pl-10 h-11"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <button onClick={fetchBookings} className="btn-secondary h-11 px-6">Refresh List</button>
            </div>

            {/* Bookings Table */}
            <div className="glass-card overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface-900 text-white uppercase text-[10px] tracking-[0.2em] font-bold">
                                <th className="px-6 py-4">Booking ID</th>
                                <th className="px-6 py-4">Customer</th>
                                <th className="px-6 py-4">Route Details</th>
                                <th className="px-6 py-4">Date / Time</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-100">
                            {loading ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-20 text-center">
                                        <div className="flex flex-col items-center gap-3">
                                            <span className="w-8 h-8 border-3 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
                                            <p className="text-sm text-surface-500 font-medium">Loading your operations...</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : filteredBookings.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-20 text-center text-surface-500">No bookings found</td>
                                </tr>
                            ) : (
                                filteredBookings.map((booking) => (
                                    <tr key={booking.id} className="hover:bg-surface-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <span className="font-mono text-xs font-bold text-surface-500">#{booking.booking_id_serial.toString().padStart(4, '0')}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-surface-900">{booking.customer_name}</span>
                                                <span className="text-xs text-surface-500 flex items-center gap-1 mt-1">
                                                    <Phone size={12} /> {booking.customer_phone}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2 text-xs">
                                                    <MapPin size={12} className="text-primary-600" />
                                                    <span className="text-surface-700 font-medium">{booking.pickup_location}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs">
                                                    <ChevronRight size={12} className="text-surface-400" />
                                                    <span className="text-surface-700 font-medium">{booking.dropoff_location}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-surface-900">{new Date(booking.pickup_date).toLocaleDateString()}</span>
                                                <span className="text-xs text-surface-500 uppercase flex items-center gap-1">
                                                    <Clock size={12} /> {booking.pickup_time}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold border uppercase tracking-widest ${getStatusColor(booking.status)}`}>
                                                {booking.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                {booking.status === 'pending' && (
                                                    <button 
                                                        onClick={() => setSelectedBooking(booking)}
                                                        className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                                        title="Assign Lead"
                                                    >
                                                        <Send size={18} />
                                                    </button>
                                                )}
                                                <button 
                                                    onClick={() => updateStatus(booking.id, 'completed')}
                                                    className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-all shadow-sm"
                                                    title="Mark Completed"
                                                >
                                                    <CheckCircle size={18} />
                                                </button>
                                                <button 
                                                    onClick={() => updateStatus(booking.id, 'cancelled')}
                                                    className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all shadow-sm"
                                                    title="Cancel Booking"
                                                >
                                                    <XCircle size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Lead Assignment Modal */}
            {selectedBooking && (
                <div className="fixed inset-0 bg-surface-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 animate-scale-in">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-display font-bold text-surface-900">Assign Lead</h3>
                            <button onClick={() => setSelectedBooking(null)} className="text-surface-400 hover:text-surface-900 transition-colors">
                                <XCircle size={24} />
                            </button>
                        </div>

                        <form onSubmit={assignLead} className="space-y-6">
                            <div className="p-4 bg-surface-50 rounded-xl border border-surface-200">
                                <p className="text-xs font-bold text-surface-500 uppercase tracking-widest mb-2">Booking to Assign</p>
                                <p className="text-surface-900 font-bold">{selectedBooking.pickup_location} → {selectedBooking.dropoff_location}</p>
                                <p className="text-sm text-surface-600">{selectedBooking.customer_name} | {selectedBooking.pickup_date}</p>
                            </div>

                            <div>
                                <label className="label-text">Assignee Name</label>
                                <input 
                                    required 
                                    type="text" 
                                    placeholder="Enter person's name..." 
                                    className="input-field" 
                                    value={assigneeName}
                                    onChange={(e) => setAssigneeName(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="label-text">Assignment Date</label>
                                <input 
                                    required 
                                    type="date" 
                                    className="input-field" 
                                    value={assigneeDate}
                                    onChange={(e) => setAssigneeDate(e.target.value)}
                                />
                            </div>

                            <div className="flex gap-3">
                                <button type="button" onClick={() => setSelectedBooking(null)} className="btn-secondary flex-1">Cancel</button>
                                <button type="submit" className="btn-primary flex-1 flex items-center justify-center gap-2">
                                    <Send size={18} /> Confirm & Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
