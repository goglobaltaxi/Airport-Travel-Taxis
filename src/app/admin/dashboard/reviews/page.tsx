'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Star, Plus, Trash2, Eye, EyeOff, CheckCircle } from 'lucide-react';

interface Review {
    id?: string;
    name: string;
    location?: string;
    rating: number;
    review: string;
    published: boolean;
    created_at?: string;
}

export default function ReviewsManager() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState<Review>({ name: '', location: '', rating: 5, review: '', published: true });
    const [saving, setSaving] = useState(false);
    const [toast, setToast] = useState('');
    const [deleteTarget, setDeleteTarget] = useState<Review | null>(null);

    const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(''), 4000); };

    useEffect(() => { fetchReviews(); }, []);

    const fetchReviews = async () => {
        setLoading(true);
        const { data } = await supabase.from('reviews').select('*').order('created_at', { ascending: false });
        setReviews(data || []);
        setLoading(false);
    };

    const save = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        await supabase.from('reviews').insert([form]);
        showToast('✅ Review added');
        setForm({ name: '', location: '', rating: 5, review: '', published: true });
        setShowForm(false);
        setSaving(false);
        fetchReviews();
    };

    const togglePublish = async (r: Review) => {
        await supabase.from('reviews').update({ published: !r.published }).eq('id', r.id!);
        showToast(r.published ? '🙈 Review hidden' : '👁️ Review published');
        fetchReviews();
    };

    const confirmDelete = async () => {
        if (!deleteTarget?.id) return;
        await supabase.from('reviews').delete().eq('id', deleteTarget.id);
        showToast('🗑️ Review deleted');
        setDeleteTarget(null);
        fetchReviews();
    };

    const Stars = ({ n }: { n: number }) => (
        <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => <Star key={i} size={14} className={i <= n ? 'text-amber-400 fill-amber-400' : 'text-surface-200 fill-surface-200'} />)}
        </div>
    );

    const published = reviews.filter(r => r.published).length;
    const hidden = reviews.filter(r => !r.published).length;
    const avg = reviews.length ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1) : '—';

    return (
        <div className="space-y-6">
            {toast && (
                <div className="fixed top-6 right-6 z-[200] bg-green-600 text-white px-5 py-3 rounded-xl shadow-2xl font-semibold text-sm flex items-center gap-3">
                    <CheckCircle size={18} /> {toast}
                </div>
            )}

            {/* SQL reminder */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                <strong>Note:</strong> Run in Supabase SQL Editor:
                <code className="block mt-2 bg-amber-100 rounded px-3 py-2 text-xs font-mono">
                    CREATE TABLE IF NOT EXISTS reviews (id UUID DEFAULT gen_random_uuid() PRIMARY KEY, name TEXT NOT NULL, location TEXT, rating INT DEFAULT 5, review TEXT NOT NULL, published BOOLEAN DEFAULT true, created_at TIMESTAMPTZ DEFAULT NOW());
                </code>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                    { label: 'Total Reviews', val: reviews.length },
                    { label: 'Published', val: published },
                    { label: 'Hidden', val: hidden },
                    { label: 'Avg Rating', val: `${avg} ⭐` },
                ].map((s, i) => (
                    <div key={i} className="glass-card p-4 text-center">
                        <p className="text-2xl font-bold text-surface-900">{s.val}</p>
                        <p className="text-[10px] font-bold text-surface-400 uppercase tracking-widest mt-1">{s.label}</p>
                    </div>
                ))}
            </div>

            {/* Add Button */}
            <div className="flex justify-end">
                <button onClick={() => setShowForm(!showForm)} className="btn-primary flex items-center gap-2">
                    <Plus size={18} /> {showForm ? 'Cancel' : 'Add Review'}
                </button>
            </div>

            {/* Add Form */}
            {showForm && (
                <div className="glass-card p-6">
                    <h3 className="font-bold text-surface-900 mb-4">Add New Review</h3>
                    <form onSubmit={save} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="label-text">Customer Name</label>
                            <input required type="text" className="input-field" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                        </div>
                        <div>
                            <label className="label-text">Location (Optional)</label>
                            <input type="text" placeholder="e.g. Dubai, UAE" className="input-field" value={form.location || ''} onChange={e => setForm({ ...form, location: e.target.value })} />
                        </div>
                        <div>
                            <label className="label-text">Rating</label>
                            <select className="input-field" value={form.rating} onChange={e => setForm({ ...form, rating: parseInt(e.target.value) })}>
                                {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} ⭐ {n === 5 ? '— Excellent' : n === 4 ? '— Very Good' : n === 3 ? '— Good' : n === 2 ? '— Fair' : '— Poor'}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="label-text">Published</label>
                            <select className="input-field" value={form.published ? 'true' : 'false'} onChange={e => setForm({ ...form, published: e.target.value === 'true' })}>
                                <option value="true">✅ Visible on website</option>
                                <option value="false">🙈 Hidden</option>
                            </select>
                        </div>
                        <div className="md:col-span-2">
                            <label className="label-text">Review Text</label>
                            <textarea required rows={3} className="input-field resize-none" value={form.review} onChange={e => setForm({ ...form, review: e.target.value })} placeholder="Customer review text..." />
                        </div>
                        <div className="md:col-span-2">
                            <button type="submit" disabled={saving} className="btn-primary flex items-center gap-2 disabled:opacity-50">
                                {saving ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Plus size={16} />}
                                Save Review
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Reviews Grid */}
            {loading ? (
                <div className="glass-card p-12 text-center"><span className="w-8 h-8 border-3 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto block" /></div>
            ) : reviews.length === 0 ? (
                <div className="glass-card p-12 text-center text-surface-400">
                    <Star size={40} className="mx-auto mb-3 opacity-20" />
                    <p>No reviews yet. Add your first review above.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {reviews.map(r => (
                        <div key={r.id} className={`glass-card p-5 border-2 transition-all ${r.published ? 'border-surface-200' : 'border-dashed border-surface-300 opacity-60'}`}>
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <p className="font-bold text-surface-900">{r.name}</p>
                                    {r.location && <p className="text-xs text-surface-400 mt-0.5">{r.location}</p>}
                                </div>
                                <Stars n={r.rating} />
                            </div>
                            <p className="text-sm text-surface-600 leading-relaxed mb-4 line-clamp-3">{r.review}</p>
                            <div className="flex items-center justify-between pt-3 border-t border-surface-100">
                                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${r.published ? 'bg-green-100 text-green-700' : 'bg-surface-100 text-surface-500'}`}>
                                    {r.published ? '✓ Published' : 'Hidden'}
                                </span>
                                <div className="flex gap-2">
                                    <button onClick={() => togglePublish(r)} className={`p-1.5 rounded-lg transition-all ${r.published ? 'bg-amber-50 text-amber-600 hover:bg-amber-600 hover:text-white' : 'bg-green-50 text-green-600 hover:bg-green-600 hover:text-white'}`}>
                                        {r.published ? <EyeOff size={14} /> : <Eye size={14} />}
                                    </button>
                                    <button onClick={() => setDeleteTarget(r)} className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all">
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {deleteTarget && (
                <div className="fixed inset-0 bg-surface-900/60 backdrop-blur-sm z-[110] flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 text-center">
                        <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4"><Trash2 size={28} /></div>
                        <h3 className="text-lg font-bold text-surface-900 mb-2">Delete Review?</h3>
                        <p className="text-sm text-surface-500 mb-6">By <strong>{deleteTarget.name}</strong></p>
                        <div className="flex gap-3">
                            <button onClick={() => setDeleteTarget(null)} className="btn-secondary flex-1">Cancel</button>
                            <button onClick={confirmDelete} className="btn-primary !bg-red-600 !border-red-600 flex-1">Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
