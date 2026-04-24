'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Mail, Phone, Calendar, CheckCircle, Clock, Trash2, Search, XCircle } from 'lucide-react';

export default function MessagesManagement() {
    const [messages, setMessages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [deleteTarget, setDeleteTarget] = useState<any>(null);

    useEffect(() => {
        fetchMessages();
        const channel = supabase
            .channel('messages-realtime')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'contact_messages' }, fetchMessages)
            .subscribe();
        return () => { supabase.removeChannel(channel); };
    }, []);

    const fetchMessages = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('contact_messages')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) console.error('Error fetching messages:', error);
        else setMessages(data || []);
        setLoading(false);
    };

    const updateStatus = async (id: string, status: string) => {
        const { error } = await supabase
            .from('contact_messages')
            .update({ status })
            .eq('id', id);

        if (error) alert('Error updating status');
        else fetchMessages();
    };

    const confirmDelete = async () => {
        if (!deleteTarget) return;
        const { error } = await supabase
            .from('contact_messages')
            .delete()
            .eq('id', deleteTarget.id);

        if (error) alert('Error deleting message');
        else { setDeleteTarget(null); fetchMessages(); }
    };

    const unread = messages.filter(m => m.status !== 'read').length;

    const filteredMessages = messages.filter(m =>
        m.name?.toLowerCase().includes(search.toLowerCase()) ||
        m.email?.toLowerCase().includes(search.toLowerCase()) ||
        m.subject?.toLowerCase().includes(search.toLowerCase())
    );

    const getStatusColor = (status: string) => {
        if (status === 'read') return 'bg-green-100 text-green-700 border-green-200';
        return 'bg-amber-100 text-amber-700 border-amber-200';
    };

    return (
        <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                    { label: 'Total Messages', val: messages.length },
                    { label: 'Unread', val: unread },
                    { label: 'Read', val: messages.length - unread },
                ].map((s, i) => (
                    <div key={i} className="glass-card p-4 text-center">
                        <p className={`text-2xl font-bold ${i === 1 && unread > 0 ? 'text-red-600' : 'text-surface-900'}`}>{s.val}</p>
                        <p className="text-[10px] font-bold text-surface-500 uppercase tracking-widest mt-1">{s.label}</p>
                    </div>
                ))}
            </div>

            {/* Search */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between glass-card p-4">
                <div className="relative w-full sm:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400" size={18} />
                    <input
                        type="search"
                        placeholder="Search by name, email or subject..."
                        className="input-field pl-10 h-11"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <button onClick={fetchMessages} className="btn-secondary h-11 px-6">Refresh</button>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {loading ? (
                    <div className="glass-card p-12 text-center">
                        <span className="w-8 h-8 border-3 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto block" />
                        <p className="text-surface-500 font-medium mt-4">Loading messages...</p>
                    </div>
                ) : filteredMessages.length === 0 ? (
                    <div className="glass-card p-12 text-center text-surface-500">
                        <Mail size={48} className="mx-auto mb-4 opacity-20" />
                        <p className="text-lg font-medium">No messages found.</p>
                    </div>
                ) : (
                    filteredMessages.map((msg) => (
                        <div key={msg.id} className={`glass-card overflow-hidden group hover:shadow-lg transition-all border ${msg.status !== 'read' ? 'border-amber-200 border-l-4 border-l-amber-500' : 'border-surface-200/50'}`}>
                            <div className="bg-surface-50 p-4 border-b border-surface-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${msg.status !== 'read' ? 'bg-amber-100 text-amber-700' : 'bg-primary-100 text-primary-600'}`}>
                                        {msg.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-surface-900">{msg.name}</h3>
                                        <p className="text-xs text-surface-500 font-medium uppercase tracking-widest">{msg.subject || 'General Inquiry'}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className={`px-2.5 py-1 rounded text-[10px] font-bold border uppercase tracking-widest ${getStatusColor(msg.status)}`}>
                                        {msg.status === 'read' ? '✓ Read' : '● Unread'}
                                    </span>
                                    <span className="text-xs font-bold text-surface-400 uppercase tracking-widest flex items-center gap-1">
                                        <Calendar size={12} />
                                        {new Date(msg.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="mb-6 pb-6 border-b border-surface-100">
                                    <p className="text-sm text-surface-700 whitespace-pre-wrap leading-relaxed">{msg.message}</p>
                                </div>

                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <div className="flex items-center gap-6">
                                        <a href={`mailto:${msg.email}`} className="text-sm text-primary-600 font-bold flex items-center gap-2 hover:text-primary-800 transition-colors">
                                            <Mail size={16} /> {msg.email}
                                        </a>
                                        {msg.phone && (
                                            <a href={`https://wa.me/${msg.phone.replace(/[^0-9+]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-sm text-[#25D366] font-bold flex items-center gap-2 hover:text-[#128C7E] transition-colors">
                                                <Phone size={16} /> WhatsApp
                                            </a>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {msg.status !== 'read' && (
                                            <button
                                                onClick={() => updateStatus(msg.id, 'read')}
                                                className="btn-secondary h-9 px-4 text-xs flex items-center gap-2"
                                            >
                                                <CheckCircle size={14} className="text-green-600" /> Mark Read
                                            </button>
                                        )}
                                        <button
                                            onClick={() => setDeleteTarget(msg)}
                                            className="btn-secondary h-9 px-4 text-xs flex items-center gap-2 border-red-200 text-red-600 bg-red-50 hover:bg-red-100"
                                        >
                                            <Trash2 size={14} /> Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Custom Delete Modal */}
            {deleteTarget && (
                <div className="fixed inset-0 bg-surface-900/60 backdrop-blur-sm z-[110] flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 text-center">
                        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Trash2 size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-surface-900 mb-2">Delete Message?</h3>
                        <p className="text-surface-600 mb-2 text-sm">From <strong>{deleteTarget.name}</strong></p>
                        <p className="text-surface-400 text-xs mb-6 line-clamp-2">{deleteTarget.message}</p>
                        <div className="flex gap-3">
                            <button onClick={() => setDeleteTarget(null)} className="btn-secondary flex-1">Cancel</button>
                            <button onClick={confirmDelete} className="btn-primary !bg-red-600 hover:!bg-red-700 !border-red-600 flex-1">Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
