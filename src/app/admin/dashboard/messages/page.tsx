'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Mail, Phone, Calendar, CheckCircle, Clock, Trash2, Search } from 'lucide-react';

export default function MessagesManagement() {
    const [messages, setMessages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchMessages();
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

    const deleteMessage = async (id: string) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this message?");
        if (!confirmDelete) return;

        const { error } = await supabase
            .from('contact_messages')
            .delete()
            .eq('id', id);

        if (error) alert('Error deleting message');
        else fetchMessages();
    };

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
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between glass-card p-4">
                <div className="relative w-full sm:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400" size={18} />
                    <input
                        type="search"
                        placeholder="Search messages by name or email..."
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
                        <p className="text-lg font-medium">No messages found in your inbox.</p>
                    </div>
                ) : (
                    filteredMessages.map((msg) => (
                        <div key={msg.id} className="glass-card overflow-hidden group hover:shadow-lg transition-all border border-surface-200/50">
                            <div className="bg-surface-50 p-4 border-b border-surface-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                                        <span className="font-bold text-lg">{msg.name.charAt(0).toUpperCase()}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-surface-900">{msg.name}</h3>
                                        <p className="text-xs text-surface-500 font-medium uppercase tracking-widest">{msg.subject || 'General Inquiry'}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className={`px-2.5 py-1 rounded text-[10px] font-bold border uppercase tracking-widest ${getStatusColor(msg.status)}`}>
                                        {msg.status}
                                    </span>
                                    <span className="text-xs font-bold text-surface-400 uppercase tracking-widest flex items-center gap-1">
                                        <Calendar size={12} />
                                        {new Date(msg.created_at).toLocaleDateString()}
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
                                                className="btn-secondary h-9 px-4 text-xs flex items-center gap-2 bg-surface-50 border-surface-200 hover:bg-surface-100"
                                            >
                                                <CheckCircle size={14} className="text-green-600" /> Mark Read
                                            </button>
                                        )}
                                        <button 
                                            onClick={() => deleteMessage(msg.id)}
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
        </div>
    );
}
