'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Calendar, MapPin, User, Phone, Clock, Send, CheckCircle, XCircle, AlertCircle, Search, ChevronRight, Copy, MessageCircle, Edit3, Trash2 } from 'lucide-react';

export default function BookingsManagement() {
    const [bookings, setBookings] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [selectedBooking, setSelectedBooking] = useState<any>(null);
    const [assigneeName, setAssigneeName] = useState('');
    const [assigneeDate, setAssigneeDate] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [editingBooking, setEditingBooking] = useState<any>(null);
    const [bookingToDelete, setBookingToDelete] = useState<any>(null);
    const [editForm, setEditForm] = useState<any>({
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        pickup_location: '',
        dropoff_location: '',
        pickup_date: '',
        pickup_time: '',
        vehicle_type: '',
        passengers: '',
        status: ''
    });

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

    const copyToClipboard = async (booking: any) => {
        const text = `Booking Reference: #${booking.booking_id_serial.toString().padStart(4, '0')}
Name: ${booking.customer_name}
Phone: ${booking.customer_phone}
From: ${booking.pickup_location}
To: ${booking.dropoff_location}
Date: ${booking.pickup_date}
Time: ${formatTimeWithAMPM(booking.pickup_time)}
Vehicle: ${booking.vehicle_type}
Passengers: ${booking.passengers}`;
        
        try {
            await navigator.clipboard.writeText(text);
            alert('Booking details copied!');
        } catch (err) {
            console.error('Failed to copy', err);
        }
    };

    const copyForWhatsApp = async (booking: any) => {
        const text = `*Airport Travel Taxis — Booking Details* 🚖\n\n*Name:* ${booking.customer_name}\n*From:* ${booking.pickup_location}\n*To:* ${booking.dropoff_location}\n*Date:* ${booking.pickup_date}\n*Time:* ${formatTimeWithAMPM(booking.pickup_time)}\n*Vehicle:* ${booking.vehicle_type}\n*Passengers:* ${booking.passengers}\n\nThank you for choosing us! Our team will contact you shortly for confirmation.`;
        
        try {
            await navigator.clipboard.writeText(text);
            alert('WhatsApp message copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy', err);
        }
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
            const message = `🚨 *NEW LEAD ASSIGNMENT* 🚨\n\n*Assignee:* ${assigneeName}\n*Assignment Date:* ${assigneeDate}\n\n*Booking Details:*\n- From: ${selectedBooking.pickup_location}\n- To: ${selectedBooking.dropoff_location}\n- Date: ${selectedBooking.pickup_date}\n- Time: ${formatTimeWithAMPM(selectedBooking.pickup_time)}\n- Passengers: ${selectedBooking.passengers}\n- Vehicle: ${selectedBooking.vehicle_type}\n\n*Customer Info:*\n- Name: ${selectedBooking.customer_name}\n- Phone: ${selectedBooking.customer_phone}`;
            
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

    const deleteBooking = async () => {
        if (!bookingToDelete) return;
        
        try {
            const { error } = await supabase
                .from('bookings')
                .delete()
                .eq('id', bookingToDelete.id);

            if (error) throw error;
            setBookingToDelete(null);
            setEditingBooking(null);
            fetchBookings();
        } catch (error) {
            console.error('Error deleting booking:', error);
            alert('Error deleting booking');
        }
    };

    const startEdit = (booking: any) => {
        setEditingBooking(booking);
        setEditForm({
            customer_name: booking.customer_name,
            customer_email: booking.customer_email || '',
            customer_phone: booking.customer_phone,
            pickup_location: booking.pickup_location,
            dropoff_location: booking.dropoff_location,
            pickup_date: booking.pickup_date,
            pickup_time: booking.pickup_time,
            vehicle_type: booking.vehicle_type,
            passengers: booking.passengers,
            status: booking.status
        });
    };

    const handleUpdateBooking = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { error } = await supabase
                .from('bookings')
                .update(editForm)
                .eq('id', editingBooking.id);

            if (error) throw error;
            setEditingBooking(null);
            fetchBookings();
        } catch (error) {
            console.error('Error updating booking:', error);
            alert('Error updating booking');
        }
    };

    const filteredBookings = bookings.filter(b => {
        const matchesSearch = 
            b.customer_name?.toLowerCase().includes(search.toLowerCase()) ||
            b.pickup_location?.toLowerCase().includes(search.toLowerCase()) ||
            b.dropoff_location?.toLowerCase().includes(search.toLowerCase());
        
        const matchesStatus = statusFilter === 'all' || b.status === statusFilter;
        
        return matchesSearch && matchesStatus;
    });

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

            {/* Controls & Tabs */}
            <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                    {['all', 'pending', 'assigned', 'completed', 'cancelled'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setStatusFilter(tab)}
                            className={`px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-wider transition-all border ${
                                statusFilter === tab 
                                ? 'bg-primary-600 text-white border-primary-600 shadow-lg shadow-primary-600/20' 
                                : 'bg-white text-surface-500 border-surface-200 hover:border-primary-300'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

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
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-xs text-surface-500 font-mono tracking-tight">{booking.customer_phone}</span>
                                                    <a href={`https://wa.me/${booking.customer_phone?.replace(/[^0-9+]/g, '')}`} target="_blank" rel="noopener noreferrer" className="p-1 bg-[#25D366]/10 text-[#25D366] rounded hover:bg-[#25D366] hover:text-white transition-colors" title="Message on WhatsApp">
                                                        <Phone size={12} />
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-1 w-48 xl:w-64">
                                                <div className="flex items-center gap-2 text-xs">
                                                    <MapPin size={12} className="text-primary-600 flex-shrink-0" />
                                                    <span className="text-surface-700 font-medium truncate" title={booking.pickup_location}>{booking.pickup_location}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs">
                                                    <ChevronRight size={12} className="text-surface-400 flex-shrink-0" />
                                                    <span className="text-surface-700 font-medium truncate" title={booking.dropoff_location}>{booking.dropoff_location}</span>
                                                </div>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="px-1.5 py-0.5 bg-surface-100 rounded text-[10px] font-bold uppercase tracking-widest text-surface-600 border border-surface-200">{booking.vehicle_type || 'Any'}</span>
                                                    <span className="px-1.5 py-0.5 bg-surface-100 rounded text-[10px] font-bold uppercase tracking-widest text-surface-600 border border-surface-200">{booking.passengers || '1'} Pax</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-surface-900">{new Date(booking.pickup_date).toLocaleDateString()}</span>
                                                <span className="text-xs text-surface-500 uppercase flex items-center gap-1">
                                                    <Clock size={12} /> {formatTimeWithAMPM(booking.pickup_time)}
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
                                                <button 
                                                    onClick={() => copyToClipboard(booking)}
                                                    className="p-2 bg-surface-100 text-surface-600 rounded-lg hover:bg-surface-200 hover:text-surface-900 transition-all shadow-sm"
                                                    title="Copy Internal Details"
                                                >
                                                    <Copy size={18} />
                                                </button>
                                                <button 
                                                    onClick={() => copyForWhatsApp(booking)}
                                                    className="p-2 bg-[#25D366]/10 text-[#25D366] rounded-lg hover:bg-[#25D366] hover:text-white transition-all shadow-sm"
                                                    title="Copy for Client WhatsApp"
                                                >
                                                    <MessageCircle size={18} />
                                                </button>
                                                {booking.status === 'pending' && (
                                                    <button 
                                                        onClick={() => setSelectedBooking(booking)}
                                                        className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                                        title="Assign Lead"
                                                    >
                                                        <Send size={18} />
                                                    </button>
                                                )}
                                                {booking.status === 'assigned' && (
                                                    <a 
                                                        href={`https://wa.me/${booking.customer_phone?.replace(/[^0-9+]/g, '')}?text=${encodeURIComponent(`Hello ${booking.customer_name},\n\nYour booking with Airport Travel Taxis is confirmed!\n\n📍 From: ${booking.pickup_location}\n📍 To: ${booking.dropoff_location}\n📅 Date: ${booking.pickup_date} at ${formatTimeWithAMPM(booking.pickup_time)}\n🚗 Vehicle: ${booking.vehicle_type}\n\nYour driver has been assigned and will contact you shortly before pickup. Let us know if you need anything!`)}`}
                                                        target="_blank" rel="noopener noreferrer"
                                                        className="p-2 bg-[#25D366]/10 text-[#25D366] rounded-lg hover:bg-[#25D366] hover:text-white transition-all shadow-sm"
                                                        title="Notify Customer via WhatsApp"
                                                    >
                                                        <Phone size={18} />
                                                    </a>
                                                )}
                                                <button 
                                                    onClick={() => startEdit(booking)}
                                                    className="p-2 bg-amber-50 text-amber-600 rounded-lg hover:bg-amber-600 hover:text-white transition-all shadow-sm"
                                                    title="Edit Booking"
                                                >
                                                    <Edit3 size={18} />
                                                </button>
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
                                                <button 
                                                    onClick={() => setBookingToDelete(booking)}
                                                    className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all shadow-sm"
                                                    title="Delete Booking"
                                                >
                                                    <Trash2 size={18} />
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
            {selectedBooking && !editingBooking && (
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

            {/* Edit Booking Modal */}
            {editingBooking && (
                <div className="fixed inset-0 bg-surface-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 animate-scale-in max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-display font-bold text-surface-900">Edit Booking</h3>
                            <button onClick={() => setEditingBooking(null)} className="text-surface-400 hover:text-surface-900 transition-colors">
                                <XCircle size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleUpdateBooking} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="label-text">Customer Name</label>
                                    <input 
                                        required 
                                        type="text" 
                                        className="input-field" 
                                        value={editForm.customer_name}
                                        onChange={(e) => setEditForm({...editForm, customer_name: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="label-text">Customer Phone</label>
                                    <input 
                                        required 
                                        type="text" 
                                        className="input-field" 
                                        value={editForm.customer_phone}
                                        onChange={(e) => setEditForm({...editForm, customer_phone: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="label-text">Pickup Location</label>
                                    <input 
                                        required 
                                        type="text" 
                                        className="input-field" 
                                        value={editForm.pickup_location}
                                        onChange={(e) => setEditForm({...editForm, pickup_location: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="label-text">Dropoff Location</label>
                                    <input 
                                        required 
                                        type="text" 
                                        className="input-field" 
                                        value={editForm.dropoff_location}
                                        onChange={(e) => setEditForm({...editForm, dropoff_location: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="label-text">Customer Email (Optional)</label>
                                    <input 
                                        type="email" 
                                        className="input-field" 
                                        value={editForm.customer_email}
                                        onChange={(e) => setEditForm({...editForm, customer_email: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="label-text">Current Status</label>
                                    <select 
                                        className="input-field"
                                        value={editForm.status}
                                        onChange={(e) => setEditForm({...editForm, status: e.target.value})}
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="assigned">Assigned</option>
                                        <option value="completed">Completed</option>
                                        <option value="cancelled">Cancelled</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="label-text">Date</label>
                                        <input 
                                            required 
                                            type="date" 
                                            className="input-field" 
                                            value={editForm.pickup_date}
                                            onChange={(e) => setEditForm({...editForm, pickup_date: e.target.value})}
                                        />
                                    </div>
                                    <div>
                                        <label className="label-text">Time</label>
                                        <input 
                                            required 
                                            type="time" 
                                            className="input-field" 
                                            value={editForm.pickup_time?.substring(0,5) || ''}
                                            onChange={(e) => setEditForm({...editForm, pickup_time: e.target.value})}
                                        />
                                    </div>
                                    <div>
                                        <label className="label-text">Passengers</label>
                                        <input 
                                            required 
                                            type="number" 
                                            className="input-field" 
                                            value={editForm.passengers}
                                            onChange={(e) => setEditForm({...editForm, passengers: e.target.value})}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="label-text">Vehicle Type</label>
                                    <input 
                                        required 
                                        type="text" 
                                        className="input-field" 
                                        value={editForm.vehicle_type}
                                        onChange={(e) => setEditForm({...editForm, vehicle_type: e.target.value})}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-surface-100 mt-6">
                                <button type="button" onClick={() => setBookingToDelete(editingBooking)} className="btn-secondary !text-red-600 !border-red-200 hover:!bg-red-50 flex-1 flex items-center justify-center gap-2">
                                    <Trash2 size={18} /> Delete Form
                                </button>
                                <button type="button" onClick={() => setEditingBooking(null)} className="btn-secondary flex-1">
                                    Cancel
                                </button>
                                <button type="submit" className="btn-primary flex-[2] flex items-center justify-center gap-2">
                                    <CheckCircle size={18} /> Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Custom Delete Confirmation Modal */}
            {bookingToDelete && (
                <div className="fixed inset-0 bg-surface-900/60 backdrop-blur-sm z-[110] flex items-center justify-center p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 animate-scale-in text-center">
                        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Trash2 size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-surface-900 mb-2">Delete Booking?</h3>
                        <p className="text-surface-600 mb-6 line-clamp-2">
                            Are you sure you want to permanently delete booking for <strong>{bookingToDelete.customer_name}</strong>? This action cannot be undone.
                        </p>
                        <div className="flex gap-3">
                            <button onClick={() => setBookingToDelete(null)} className="btn-secondary flex-1">
                                No, Cancel
                            </button>
                            <button onClick={deleteBooking} className="btn-primary !bg-red-600 hover:!bg-red-700 !border-red-600 flex-1">
                                Yes, Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
