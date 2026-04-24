'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { MapPin, User, Phone, Clock, Send, CheckCircle, XCircle, AlertCircle, Search, ChevronRight, Copy, MessageCircle, Edit3, Trash2, FileText, Receipt } from 'lucide-react';
import { convertToAll, formatAmount, CURRENCY_FLAGS, CURRENCY_NAMES } from '@/lib/currency';

const DISPLAY_CURRENCIES = ['SAR', 'AED', 'KWD', 'BHD', 'QAR', 'OMR', 'USD', 'EUR', 'GBP'];

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
    const [invoiceBooking, setInvoiceBooking] = useState<any>(null);
    const [invoiceType, setInvoiceType] = useState<'invoice' | 'quotation'>('invoice');
    const [invoicePrice, setInvoicePrice] = useState('');
    const [sendingInvoice, setSendingInvoice] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');

    const showToast = (msg: string) => {
        setSuccessMsg(msg);
        setTimeout(() => setSuccessMsg(''), 5000);
    };
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
        status: '',
        currency: 'SAR',
        payment_method: 'cash_to_driver',
        flight_number: '',
        notes: '',
    });

    useEffect(() => {
        fetchBookings();
        const channel = supabase
            .channel('bookings-realtime')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'bookings' }, fetchBookings)
            .subscribe();
        return () => { supabase.removeChannel(channel); };
    }, []);

    const fetchBookings = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('bookings')
            .select('*, lead_assignments (*)')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching bookings:', error);
            showToast(`🚨 DB Error: ${error.message}`);
        } else {
            setBookings(data || []);
        }
        setLoading(false);
    };

    const updateStatus = async (id: string, status: string) => {
        const booking = bookings.find(b => b.id === id);
        
        const { error } = await supabase
            .from('bookings')
            .update({ status })
            .eq('id', id);

        if (error) {
            showToast('❌ Error updating status');
        } else {
            showToast(`✅ Status updated to ${status}`);
            
            // Auto Receipt Email on Completion
            if (status === 'completed' && booking && booking.customer_email) {
                try {
                    fetch('/api/receipt', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ booking }),
                    });
                    showToast('📧 Receipt email sent to customer');
                } catch (err) {
                    console.error('Failed to trigger receipt email:', err);
                }
            }
            
            fetchBookings();
        }
    };

    const copyToClipboard = async (booking: any) => {
        const text = `Booking Reference: ATT-${booking.booking_id_serial.toString().padStart(4, '0')}
Customer: ${booking.customer_name}
Phone: ${booking.customer_phone}${booking.customer_email ? `\nEmail: ${booking.customer_email}` : ''}
From: ${booking.pickup_location}
To: ${booking.dropoff_location}
Date: ${new Date(booking.pickup_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
Time: ${formatTimeWithAMPM(booking.pickup_time)}
Vehicle: ${booking.vehicle_type} | Passengers: ${booking.passengers}${booking.flight_number ? `\nFlight: ${booking.flight_number}` : ''}${booking.currency ? `\nCurrency: ${booking.currency}` : ''}${booking.payment_method ? `\nPayment: ${booking.payment_method === 'cash_to_driver' ? 'Cash to Driver' : 'Online'}` : ''}${booking.notes ? `\nNotes: ${booking.notes}` : ''}`;
        
        try {
            await navigator.clipboard.writeText(text);
            showToast('📋 Booking details copied to clipboard');
        } catch (err) {
            console.error('Failed to copy', err);
        }
    };

    const copyForWhatsApp = async (booking: any) => {
        const text = `*Airport Travel Taxis — Booking Details* 🚖\n\n*Name:* ${booking.customer_name}\n*From:* ${booking.pickup_location}\n*To:* ${booking.dropoff_location}\n*Date:* ${booking.pickup_date}\n*Time:* ${formatTimeWithAMPM(booking.pickup_time)}\n*Vehicle:* ${booking.vehicle_type}\n*Passengers:* ${booking.passengers}\n\nThank you for choosing us! Our team will contact you shortly for confirmation.`;

        try {
            await navigator.clipboard.writeText(text);
            showToast('💬 WhatsApp message copied to clipboard');
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
            showToast('❌ Failed to assign lead');
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
            showToast('🗑️ Booking deleted successfully');
            fetchBookings();
        } catch (error) {
            console.error('Error deleting booking:', error);
            showToast('❌ Error deleting booking');
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
            status: booking.status,
            currency: booking.currency || 'SAR',
            payment_method: booking.payment_method || 'cash_to_driver',
            flight_number: booking.flight_number || '',
            notes: booking.notes || '',
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
            showToast('✅ Booking updated successfully');
            fetchBookings();
        } catch (error) {
            console.error('Error updating booking:', error);
            showToast('❌ Error updating booking');
        }
    };

    const sendInvoice = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!invoiceBooking?.customer_email) {
            showToast('⚠️ No customer email on this booking');
            return;
        }
        setSendingInvoice(true);
        try {
            const res = await fetch('/api/invoice', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: invoiceType, booking: invoiceBooking, price: invoicePrice }),
            });
            const data = await res.json();
            if (data.success) {
                const updateField = invoiceType === 'quotation'
                    ? { quotation_sent_at: new Date().toISOString(), quotation_price: invoicePrice || null }
                    : { invoice_sent_at: new Date().toISOString(), invoice_price: invoicePrice || null };

                await supabase
                    .from('bookings')
                    .update(updateField)
                    .eq('id', invoiceBooking.id);

                const label = invoiceType === 'invoice' ? 'Invoice' : 'Quotation';
                const priceStr = invoicePrice ? ` · ${invoiceBooking.currency || 'SAR'} ${invoicePrice}` : '';
                showToast(`✅ ${label} sent to ${invoiceBooking.customer_email}${priceStr}`);
                setInvoiceBooking(null);
                setInvoicePrice('');
                fetchBookings();
            } else {
                showToast(`❌ Failed to send: ${data.error || 'Unknown error'}`);
            }
        } catch (err) {
            showToast('❌ Network error. Please try again.');
        } finally {
            setSendingInvoice(false);
        }
    };

    const filteredBookings = bookings.filter(b => {
        const matchesSearch =
            b.customer_name?.toLowerCase().includes(search.toLowerCase()) ||
            b.pickup_location?.toLowerCase().includes(search.toLowerCase()) ||
            b.dropoff_location?.toLowerCase().includes(search.toLowerCase()) ||
            b.customer_phone?.toLowerCase().includes(search.toLowerCase());

        const matchesStatus =
            statusFilter === 'all' ||
            (statusFilter === 'quotation_sent' ? !!b.quotation_sent_at :
             statusFilter === 'invoice_sent'   ? !!b.invoice_sent_at   :
             b.status === statusFilter);

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

    const quotationsSent = bookings.filter(b => b.quotation_sent_at).length;
    const invoicesSent = bookings.filter(b => b.invoice_sent_at).length;

    const exportCSV = () => {
        const headers = ['Booking ID','Customer Name','Email','Phone','Pickup','Dropoff','Date','Time','Vehicle','Passengers','Status','Currency','Payment','Flight','Notes','Quotation Sent','Invoice Sent','Created At'];
        const rows = filteredBookings.map(b => [
            `ATT-${b.booking_id_serial?.toString().padStart(4,'0') || ''}`,
            b.customer_name || '',
            b.customer_email || '',
            b.customer_phone || '',
            b.pickup_location || '',
            b.dropoff_location || '',
            b.pickup_date || '',
            formatTimeWithAMPM(b.pickup_time),
            b.vehicle_type || '',
            b.passengers || '',
            b.status || '',
            b.currency || '',
            b.payment_method || '',
            b.flight_number || '',
            b.notes || '',
            b.quotation_sent_at ? new Date(b.quotation_sent_at).toLocaleDateString('en-GB') : '',
            b.invoice_sent_at   ? new Date(b.invoice_sent_at).toLocaleDateString('en-GB')   : '',
            b.created_at        ? new Date(b.created_at).toLocaleDateString('en-GB')         : '',
        ]);
        const csv = [headers, ...rows].map(r => r.map(v => `"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a'); a.href = url; a.download = `bookings-${new Date().toISOString().slice(0,10)}.csv`; a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="space-y-6">
            {/* Toast */}
            {successMsg && (
                <div className="fixed top-6 right-6 z-[200] bg-green-600 text-white px-5 py-3 rounded-xl shadow-2xl font-semibold text-sm flex items-center gap-3 animate-in slide-in-from-top-2 duration-300">
                    <CheckCircle size={18} />
                    {successMsg}
                </div>
            )}

            {/* Stats Summary */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                    { label: 'Total Bookings', val: bookings.length, icon: AlertCircle, color: 'text-primary-600', bg: 'bg-primary-50' },
                    { label: 'Pending', val: bookings.filter(b => b.status === 'pending').length, icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
                    { label: 'Assigned', val: bookings.filter(b => b.status === 'assigned').length, icon: User, color: 'text-blue-600', bg: 'bg-blue-50' },
                    { label: 'Completed', val: bookings.filter(b => b.status === 'completed').length, icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
                    { label: 'Quotations Sent', val: quotationsSent, icon: FileText, color: 'text-blue-700', bg: 'bg-blue-50' },
                    { label: 'Invoices Sent', val: invoicesSent, icon: Receipt, color: 'text-purple-700', bg: 'bg-purple-50' },
                ].map((stat, i) => (
                    <div key={i} className="glass-card p-4 flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl ${stat.bg} ${stat.color}`}>
                            <stat.icon size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-surface-500 uppercase tracking-widest leading-tight">{stat.label}</p>
                            <p className="text-2xl font-bold text-surface-900">{stat.val}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Controls & Tabs */}
            <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                    {[
                        { key: 'all', label: 'All' },
                        { key: 'pending', label: 'Pending' },
                        { key: 'assigned', label: 'Assigned' },
                        { key: 'completed', label: 'Completed' },
                        { key: 'cancelled', label: 'Cancelled' },
                        { key: 'quotation_sent', label: '📋 Quotation Sent' },
                        { key: 'invoice_sent', label: '🧾 Invoice Sent' },
                    ].map(({ key, label }) => (
                        <button
                            key={key}
                            onClick={() => setStatusFilter(key)}
                            className={`px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-wider transition-all border ${
                                statusFilter === key
                                ? 'bg-primary-600 text-white border-primary-600 shadow-lg shadow-primary-600/20'
                                : 'bg-white text-surface-500 border-surface-200 hover:border-primary-300'
                            }`}
                        >
                            {label}
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
                    <div className="flex gap-2">
                        <button onClick={fetchBookings} className="btn-secondary h-11 px-6">Refresh</button>
                        <button onClick={exportCSV} className="btn-secondary h-11 px-6 flex items-center gap-2"><FileText size={16} /> Export CSV</button>
                    </div>
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
                                                <div className="flex flex-wrap items-center gap-1 mt-1">
                                                    <span className="px-1.5 py-0.5 bg-surface-100 rounded text-[10px] font-bold uppercase tracking-widest text-surface-600 border border-surface-200">{booking.vehicle_type || 'Any'}</span>
                                                    <span className="px-1.5 py-0.5 bg-surface-100 rounded text-[10px] font-bold uppercase tracking-widest text-surface-600 border border-surface-200">{booking.passengers || '1'} Pax</span>
                                                    {booking.currency && <span className="px-1.5 py-0.5 bg-blue-50 rounded text-[10px] font-bold uppercase tracking-widest text-blue-600 border border-blue-200">{booking.currency}</span>}
                                                    {booking.payment_method && <span className="px-1.5 py-0.5 bg-green-50 rounded text-[10px] font-bold uppercase tracking-widest text-green-700 border border-green-200">{booking.payment_method === 'cash_to_driver' ? '💵 Cash' : '💳 Online'}</span>}
                                                    {booking.flight_number && <span className="px-1.5 py-0.5 bg-purple-50 rounded text-[10px] font-bold uppercase tracking-widest text-purple-700 border border-purple-200">✈️ {booking.flight_number}</span>}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-0.5">
                                                <span className="text-sm font-bold text-surface-900">{new Date(booking.pickup_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                                                <span className="text-xs text-surface-500 flex items-center gap-1">
                                                    <Clock size={11} /> {formatTimeWithAMPM(booking.pickup_time)}
                                                </span>
                                                <span className="text-[10px] text-surface-400 mt-0.5">
                                                    Received: {new Date(booking.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}
                                                </span>
                                                {booking.notes && (
                                                    <span className="text-[10px] text-amber-700 bg-amber-50 border border-amber-200 rounded px-1.5 py-0.5 mt-0.5 line-clamp-1" title={booking.notes}>
                                                        📝 {booking.notes}
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 min-w-[180px]">
                                            <div className="flex flex-col gap-1.5">
                                                <span className={`px-3 py-1 rounded-full text-[10px] font-bold border uppercase tracking-widest w-fit ${getStatusColor(booking.status)}`}>
                                                    {booking.status}
                                                </span>
                                                {booking.quotation_sent_at && (
                                                    <div className="flex flex-col gap-0.5">
                                                        <span className="px-2 py-1 rounded-md text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200 w-fit flex items-center gap-1">
                                                            <FileText size={9} /> 📋 Quotation Sent
                                                        </span>
                                                        <span className="text-[10px] text-surface-400 pl-1">
                                                            {new Date(booking.quotation_sent_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                                                            {booking.quotation_price && (
                                                                <span className="font-bold text-blue-600"> · {booking.currency || 'SAR'} {booking.quotation_price}</span>
                                                            )}
                                                        </span>
                                                    </div>
                                                )}
                                                {booking.invoice_sent_at && (
                                                    <div className="flex flex-col gap-0.5">
                                                        <span className="px-2 py-1 rounded-md text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200 w-fit flex items-center gap-1">
                                                            <Receipt size={9} /> 🧾 Invoice Sent
                                                        </span>
                                                        <span className="text-[10px] text-surface-400 pl-1">
                                                            {new Date(booking.invoice_sent_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                                                            {booking.invoice_price && (
                                                                <span className="font-bold text-purple-600"> · {booking.currency || 'SAR'} {booking.invoice_price}</span>
                                                            )}
                                                        </span>
                                                    </div>
                                                )}
                                                {!booking.quotation_sent_at && !booking.invoice_sent_at && (
                                                    <span className="text-[10px] text-surface-400 italic">No docs sent</span>
                                                )}
                                            </div>
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
                                                    onClick={() => { setInvoiceBooking(booking); setInvoiceType('quotation'); setInvoicePrice(''); }}
                                                    className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                                    title="Send Quotation"
                                                >
                                                    <FileText size={18} />
                                                </button>
                                                <button
                                                    onClick={() => { setInvoiceBooking(booking); setInvoiceType('invoice'); setInvoicePrice(''); }}
                                                    className="p-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-all shadow-sm"
                                                    title="Send Invoice"
                                                >
                                                    <Receipt size={18} />
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
                                <div>
                                    <label className="label-text">Flight Number (Optional)</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. EK 204"
                                        className="input-field"
                                        value={editForm.flight_number}
                                        onChange={(e) => setEditForm({...editForm, flight_number: e.target.value.toUpperCase()})}
                                    />
                                </div>
                                <div>
                                    <label className="label-text">Currency</label>
                                    <select
                                        className="input-field"
                                        value={editForm.currency}
                                        onChange={(e) => setEditForm({...editForm, currency: e.target.value})}
                                    >
                                        {['SAR','AED','KWD','QAR','BHD','OMR','USD','EUR','GBP'].map((c) => (
                                            <option key={c} value={c}>{c}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="label-text">Payment Method</label>
                                    <select
                                        className="input-field"
                                        value={editForm.payment_method}
                                        onChange={(e) => setEditForm({...editForm, payment_method: e.target.value})}
                                    >
                                        <option value="cash_to_driver">💵 Cash to Driver</option>
                                        <option value="online">💳 Online Payment</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="label-text">Notes / Special Instructions (Optional)</label>
                                    <textarea
                                        rows={3}
                                        placeholder="Any special requests, pickup instructions, etc..."
                                        className="input-field resize-none"
                                        value={editForm.notes || ''}
                                        onChange={(e) => setEditForm({...editForm, notes: e.target.value})}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-surface-100 mt-6">
                                <button type="button" onClick={() => setBookingToDelete(editingBooking)} className="btn-secondary !text-red-600 !border-red-200 hover:!bg-red-50 flex-1 flex items-center justify-center gap-2">
                                    <Trash2 size={18} /> Delete Booking
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

            {/* Invoice / Quotation Modal */}
            {invoiceBooking && (
                <div className="fixed inset-0 bg-surface-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 animate-scale-in">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-display font-bold text-surface-900">
                                Send {invoiceType === 'invoice' ? 'Invoice' : 'Quotation'}
                            </h3>
                            <button onClick={() => setInvoiceBooking(null)} className="text-surface-400 hover:text-surface-900 transition-colors">
                                <XCircle size={24} />
                            </button>
                        </div>

                        {!invoiceBooking.customer_email ? (
                            <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium mb-6">
                                ⚠️ This booking has no customer email. Please edit the booking to add an email first.
                            </div>
                        ) : (
                            <div className="p-3 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm mb-6">
                                Will be sent to: <strong>{invoiceBooking.customer_email}</strong>
                            </div>
                        )}

                        <div className="p-4 bg-surface-50 rounded-xl border border-surface-200 mb-6">
                            <p className="text-xs font-bold text-surface-500 uppercase tracking-widest mb-1">Booking</p>
                            <p className="text-surface-900 font-bold">{invoiceBooking.pickup_location} → {invoiceBooking.dropoff_location}</p>
                            <p className="text-sm text-surface-600">{invoiceBooking.customer_name} | {invoiceBooking.pickup_date}</p>

                            {/* History */}
                            {(invoiceBooking.quotation_sent_at || invoiceBooking.invoice_sent_at) && (
                                <div className="mt-3 pt-3 border-t border-surface-200 flex flex-wrap gap-2">
                                    {invoiceBooking.quotation_sent_at && (
                                        <span className="flex items-center gap-1 text-[11px] font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-md px-2 py-1">
                                            <FileText size={10} />
                                            Quotation sent {new Date(invoiceBooking.quotation_sent_at).toLocaleDateString()}
                                            {invoiceBooking.quotation_price && ` · ${invoiceBooking.currency || 'SAR'} ${invoiceBooking.quotation_price}`}
                                        </span>
                                    )}
                                    {invoiceBooking.invoice_sent_at && (
                                        <span className="flex items-center gap-1 text-[11px] font-semibold text-purple-700 bg-purple-50 border border-purple-200 rounded-md px-2 py-1">
                                            <Receipt size={10} />
                                            Invoice sent {new Date(invoiceBooking.invoice_sent_at).toLocaleDateString()}
                                            {invoiceBooking.invoice_price && ` · ${invoiceBooking.currency || 'SAR'} ${invoiceBooking.invoice_price}`}
                                        </span>
                                    )}
                                </div>
                            )}
                        </div>

                        <form onSubmit={sendInvoice} className="space-y-5">
                            <div>
                                <label className="label-text">Type</label>
                                <div className="flex gap-3 mt-2">
                                    {(['quotation', 'invoice'] as const).map((t) => (
                                        <button
                                            key={t}
                                            type="button"
                                            onClick={() => setInvoiceType(t)}
                                            className={`flex-1 py-2 rounded-xl text-sm font-bold border transition-all capitalize ${invoiceType === t ? 'bg-primary-600 text-white border-primary-600' : 'bg-white text-surface-600 border-surface-200 hover:border-primary-300'}`}
                                        >
                                            {t === 'quotation' ? '📋 Quotation' : '🧾 Invoice'}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="label-text">
                                    Price ({invoiceBooking?.currency || 'SAR'}) — Optional
                                </label>
                                <input
                                    type="number"
                                    min="0"
                                    placeholder="Leave empty if price TBD"
                                    className="input-field"
                                    value={invoicePrice}
                                    onChange={(e) => setInvoicePrice(e.target.value)}
                                />
                                <p className="text-xs text-surface-400 mt-1">If left empty, email will say "price will be confirmed shortly".</p>
                            </div>

                            {/* Live multi-currency preview */}
                            {invoicePrice && Number(invoicePrice) > 0 && (
                                <div className="bg-surface-50 border border-surface-200 rounded-xl overflow-hidden">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-surface-500 px-4 py-2 border-b border-surface-200 bg-white">
                                        Price in All Currencies
                                    </p>
                                    <div className="divide-y divide-surface-100">
                                        {DISPLAY_CURRENCIES.map((code) => {
                                            const conversions = convertToAll(Number(invoicePrice), invoiceBooking?.currency || 'SAR');
                                            const isBase = code === (invoiceBooking?.currency || 'SAR');
                                            return (
                                                <div key={code} className={`flex items-center justify-between px-4 py-2 ${isBase ? 'bg-amber-50' : ''}`}>
                                                    <span className="text-sm text-surface-600 flex items-center gap-2">
                                                        <span>{CURRENCY_FLAGS[code]}</span>
                                                        <span>{CURRENCY_NAMES[code]}</span>
                                                        {isBase && <span className="text-[10px] font-bold text-amber-600 border border-amber-400 rounded px-1">BASE</span>}
                                                    </span>
                                                    <span className={`text-sm font-bold ${isBase ? 'text-amber-700' : 'text-surface-900'}`}>
                                                        {code} {formatAmount(conversions[code], code)}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            <div className="flex gap-3 pt-2">
                                <button type="button" onClick={() => setInvoiceBooking(null)} className="btn-secondary flex-1">Cancel</button>
                                <button
                                    type="submit"
                                    disabled={sendingInvoice || !invoiceBooking.customer_email}
                                    className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {sendingInvoice ? (
                                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : invoiceType === 'invoice' ? <Receipt size={18} /> : <FileText size={18} />}
                                    {sendingInvoice ? 'Sending...' : `Send ${invoiceType === 'invoice' ? 'Invoice' : 'Quotation'}`}
                                </button>
                            </div>
                            {invoiceBooking.customer_phone && (
                                <a
                                    href={`https://wa.me/${invoiceBooking.customer_phone.replace(/[^0-9+]/g, '')}?text=${encodeURIComponent(`Hello ${invoiceBooking.customer_name}, please check your email — we have sent you a ${invoiceType} for your booking from ${invoiceBooking.pickup_location} to ${invoiceBooking.dropoff_location}.${invoicePrice ? ` Total: ${invoiceBooking.currency || 'SAR'} ${invoicePrice}` : ''} — Airport Travel Taxis`)}`}
                                    target="_blank" rel="noopener noreferrer"
                                    className="mt-2 flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366]/10 text-[#25D366] font-bold text-sm rounded-xl border border-[#25D366]/30 hover:bg-[#25D366] hover:text-white transition-all"
                                >
                                    <MessageCircle size={16} /> Also notify on WhatsApp
                                </a>
                            )}
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
