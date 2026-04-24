'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Shield, ShieldAlert, UserPlus, Trash2, Search, CheckCircle, XCircle } from 'lucide-react';

export default function BlacklistManagement() {
    const [blacklist, setBlacklist] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState({ value: '', reason: '' });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        fetchBlacklist();
    }, []);

    const fetchBlacklist = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('blacklist')
            .select('*')
            .order('created_at', { ascending: false });
        
        if (error) console.error(error);
        else setBlacklist(data || []);
        setLoading(false);
    };

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');
        try {
            const { error: insertError } = await supabase
                .from('blacklist')
                .insert([{ ...form, active: true }]);
            
            if (insertError) throw insertError;
            
            setSuccess('User blacklisted successfully');
            setForm({ value: '', reason: '' });
            setShowModal(false);
            fetchBlacklist();
            setTimeout(() => setSuccess(''), 3000);
        } catch (err: any) {
            setError(err.message || 'Failed to blacklist user');
        } finally {
            setSubmitting(false);
        }
    };

    const toggleActive = async (id: string, current: boolean) => {
        await supabase.from('blacklist').update({ active: !current }).eq('id', id);
        fetchBlacklist();
    };

    const deleteEntry = async (id: string) => {
        if (!confirm('Are you sure you want to remove this entry?')) return;
        await supabase.from('blacklist').delete().eq('id', id);
        fetchBlacklist();
    };

    const filtered = blacklist.filter(b => 
        b.value?.toLowerCase().includes(search.toLowerCase()) || 
        b.reason?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {success && (
                <div className="fixed top-6 right-6 z-[100] bg-green-600 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-top-2">
                    <CheckCircle size={18} /> {success}
                </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between glass-card p-6">
                <div className="relative w-full sm:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400" size={18} />
                    <input
                        type="search"
                        placeholder="Search emails or phone numbers..."
                        className="input-field pl-10 h-11"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <button 
                    onClick={() => setShowModal(true)}
                    className="btn-primary flex items-center gap-2 h-11 px-6 shadow-lg shadow-primary-600/20"
                >
                    <UserPlus size={18} /> Blacklist User
                </button>
            </div>

            <div className="glass-card overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-surface-900 text-white uppercase text-[10px] tracking-[0.2em] font-bold">
                            <th className="px-6 py-4">User Details</th>
                            <th className="px-6 py-4">Reason</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Date Added</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-100">
                        {loading ? (
                            <tr><td colSpan={5} className="px-6 py-20 text-center text-surface-500">Loading...</td></tr>
                        ) : filtered.length === 0 ? (
                            <tr><td colSpan={5} className="px-6 py-20 text-center text-surface-500">No blacklisted users found</td></tr>
                        ) : (
                            filtered.map((b) => (
                                <tr key={b.id} className="hover:bg-surface-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded-lg ${b.active ? 'bg-red-50 text-red-600' : 'bg-surface-100 text-surface-400'}`}>
                                                <Shield size={18} />
                                            </div>
                                            <span className="font-bold text-surface-900">{b.value}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm text-surface-600 line-clamp-1" title={b.reason}>{b.reason || 'No reason provided'}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold border uppercase tracking-widest ${
                                            b.active ? 'bg-red-100 text-red-700 border-red-200' : 'bg-surface-100 text-surface-500 border-surface-200'
                                        }`}>
                                            {b.active ? 'Blocked' : 'Inactive'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs text-surface-500">{new Date(b.created_at).toLocaleDateString()}</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button 
                                                onClick={() => toggleActive(b.id, b.active)}
                                                className={`p-2 rounded-lg transition-all ${
                                                    b.active ? 'bg-green-50 text-green-600 hover:bg-green-600 hover:text-white' : 'bg-red-50 text-red-600 hover:bg-red-600 hover:text-white'
                                                }`}
                                                title={b.active ? 'Unblock' : 'Re-block'}
                                            >
                                                {b.active ? <CheckCircle size={18} /> : <ShieldAlert size={18} />}
                                            </button>
                                            <button 
                                                onClick={() => deleteEntry(b.id)}
                                                className="p-2 bg-surface-100 text-surface-500 rounded-lg hover:bg-red-600 hover:text-white transition-all"
                                                title="Delete Entry"
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

            {showModal && (
                <div className="fixed inset-0 bg-surface-900/60 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-scale-in">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-display font-bold text-surface-900">Blacklist User</h3>
                            <button onClick={() => setShowModal(false)} className="text-surface-400 hover:text-surface-900 transition-colors">
                                <XCircle size={24} />
                            </button>
                        </div>
                        <form onSubmit={handleAdd} className="space-y-6">
                            {error && <div className="p-3 bg-red-50 text-red-600 border border-red-100 rounded-lg text-sm">{error}</div>}
                            <div>
                                <label className="label-text">Email or Phone Number</label>
                                <input 
                                    required 
                                    type="text" 
                                    placeholder="e.g. spam@gmail.com or +971..." 
                                    className="input-field"
                                    value={form.value}
                                    onChange={e => setForm({...form, value: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="label-text">Reason for Blocking</label>
                                <textarea 
                                    className="input-field min-h-[100px]" 
                                    placeholder="e.g. Repeated fake bookings..."
                                    value={form.reason}
                                    onChange={e => setForm({...form, reason: e.target.value})}
                                />
                            </div>
                            <div className="flex gap-3">
                                <button type="button" onClick={() => setShowModal(false)} className="btn-secondary flex-1">Cancel</button>
                                <button disabled={submitting} type="submit" className="btn-primary flex-1 bg-red-600 hover:bg-red-700 text-white">
                                    {submitting ? 'Blocking...' : 'Block User'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
