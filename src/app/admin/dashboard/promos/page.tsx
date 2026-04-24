'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Trash2, CheckCircle, Tag } from 'lucide-react';

interface PromoCode {
    id?: string;
    code: string;
    discount_type: 'percent' | 'fixed';
    discount_value: number;
    description?: string;
    max_uses?: number;
    used_count?: number;
    valid_from?: string;
    valid_until?: string;
    active: boolean;
    created_at?: string;
}

const empty: PromoCode = { code: '', discount_type: 'percent', discount_value: 10, description: '', max_uses: undefined, valid_from: '', valid_until: '', active: true };

export default function PromosManager() {
    const [promos, setPromos] = useState<PromoCode[]>([]);
    const [loading, setLoading] = useState(true);
    const [form, setForm] = useState<PromoCode>(empty);
    const [saving, setSaving] = useState(false);
    const [toast, setToast] = useState('');
    const [deleteTarget, setDeleteTarget] = useState<PromoCode | null>(null);

    const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(''), 4000); };

    useEffect(() => { fetch(); }, []);

    const fetch = async () => {
        setLoading(true);
        const { data } = await supabase.from('promo_codes').select('*').order('created_at', { ascending: false });
        setPromos(data || []);
        setLoading(false);
    };

    const save = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        const payload = {
            ...form,
            code: form.code.trim().toUpperCase(),
            max_uses: form.max_uses || null,
            valid_from: form.valid_from || null,
            valid_until: form.valid_until || null,
        };
        const { error } = await supabase.from('promo_codes').insert([payload]);
        if (error) showToast(`❌ ${error.message}`);
        else { showToast('✅ Promo code created'); setForm(empty); fetch(); }
        setSaving(false);
    };

    const toggleActive = async (p: PromoCode) => {
        await supabase.from('promo_codes').update({ active: !p.active }).eq('id', p.id!);
        showToast(p.active ? '⏸ Code deactivated' : '✅ Code activated');
        fetch();
    };

    const confirmDelete = async () => {
        if (!deleteTarget?.id) return;
        await supabase.from('promo_codes').delete().eq('id', deleteTarget.id);
        showToast('🗑️ Code deleted');
        setDeleteTarget(null);
        fetch();
    };

    return (
        <div className="space-y-6">
            {toast && (
                <div className="fixed top-6 right-6 z-[200] bg-green-600 text-white px-5 py-3 rounded-xl shadow-2xl font-semibold text-sm flex items-center gap-3">
                    <CheckCircle size={18} /> {toast}
                </div>
            )}

            {/* SQL note */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                <strong>Note:</strong> Run in Supabase SQL Editor:
                <code className="block mt-2 bg-amber-100 rounded px-3 py-2 text-xs font-mono whitespace-pre-wrap">
{`CREATE TABLE IF NOT EXISTS promo_codes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code TEXT UNIQUE NOT NULL,
  discount_type TEXT DEFAULT 'percent',
  discount_value NUMERIC NOT NULL,
  description TEXT,
  max_uses INT,
  used_count INT DEFAULT 0,
  valid_from TIMESTAMPTZ,
  valid_until TIMESTAMPTZ,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
-- Also add to bookings:
ALTER TABLE bookings ADD COLUMN IF NOT EXISTS promo_code TEXT;
ALTER TABLE bookings ADD COLUMN IF NOT EXISTS reminder_sent BOOLEAN DEFAULT false;`}
                </code>
            </div>

            {/* Create form */}
            <div className="glass-card p-6">
                <h3 className="text-lg font-bold text-surface-900 mb-5 flex items-center gap-2">
                    <Tag size={20} className="text-primary-600" /> Create Promo Code
                </h3>
                <form onSubmit={save} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                        <label className="label-text">Code</label>
                        <input required type="text" className="input-field uppercase font-mono" placeholder="e.g. WELCOME10" value={form.code} onChange={e => setForm({ ...form, code: e.target.value.toUpperCase() })} />
                    </div>
                    <div>
                        <label className="label-text">Discount Type</label>
                        <select className="input-field" value={form.discount_type} onChange={e => setForm({ ...form, discount_type: e.target.value as 'percent' | 'fixed' })}>
                            <option value="percent">Percentage (%)</option>
                            <option value="fixed">Fixed Amount</option>
                        </select>
                    </div>
                    <div>
                        <label className="label-text">Discount Value</label>
                        <input required type="number" min="0" step="0.01" className="input-field" placeholder={form.discount_type === 'percent' ? '10 = 10%' : 'e.g. 50'} value={form.discount_value || ''} onChange={e => setForm({ ...form, discount_value: parseFloat(e.target.value) || 0 })} />
                    </div>
                    <div>
                        <label className="label-text">Description (optional)</label>
                        <input type="text" className="input-field" placeholder="e.g. New customer discount" value={form.description || ''} onChange={e => setForm({ ...form, description: e.target.value })} />
                    </div>
                    <div>
                        <label className="label-text">Max Uses (optional)</label>
                        <input type="number" min="1" className="input-field" placeholder="Unlimited if blank" value={form.max_uses || ''} onChange={e => setForm({ ...form, max_uses: parseInt(e.target.value) || undefined })} />
                    </div>
                    <div>
                        <label className="label-text">Valid Until (optional)</label>
                        <input type="date" className="input-field" value={form.valid_until || ''} onChange={e => setForm({ ...form, valid_until: e.target.value })} />
                    </div>
                    <div className="md:col-span-2 lg:col-span-3">
                        <button type="submit" disabled={saving} className="btn-primary flex items-center gap-2 disabled:opacity-50">
                            {saving ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Plus size={16} />}
                            Create Code
                        </button>
                    </div>
                </form>
            </div>

            {/* Table */}
            <div className="glass-card overflow-hidden">
                <div className="px-6 py-4 border-b border-surface-100 font-bold text-surface-900">Promo Codes ({promos.length})</div>
                {loading ? (
                    <div className="p-12 text-center"><span className="w-8 h-8 border-3 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto block" /></div>
                ) : promos.length === 0 ? (
                    <div className="p-12 text-center text-surface-400"><Tag size={36} className="mx-auto mb-3 opacity-20" /><p>No promo codes yet.</p></div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-surface-50 text-[10px] font-bold uppercase tracking-widest text-surface-500">
                                <tr>
                                    <th className="px-5 py-3">Code</th>
                                    <th className="px-5 py-3">Discount</th>
                                    <th className="px-5 py-3">Uses</th>
                                    <th className="px-5 py-3">Expires</th>
                                    <th className="px-5 py-3">Status</th>
                                    <th className="px-5 py-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-surface-100">
                                {promos.map(p => (
                                    <tr key={p.id} className="hover:bg-surface-50 transition-colors">
                                        <td className="px-5 py-3 font-mono font-bold text-surface-900">{p.code}</td>
                                        <td className="px-5 py-3 font-bold text-primary-600">
                                            {p.discount_type === 'percent' ? `${p.discount_value}%` : p.discount_value}
                                            <span className="text-xs text-surface-400 font-normal ml-1">{p.description}</span>
                                        </td>
                                        <td className="px-5 py-3 text-sm text-surface-600">{p.used_count || 0}{p.max_uses ? ` / ${p.max_uses}` : ' / ∞'}</td>
                                        <td className="px-5 py-3 text-xs text-surface-400">{p.valid_until ? new Date(p.valid_until).toLocaleDateString('en-GB') : '—'}</td>
                                        <td className="px-5 py-3">
                                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border uppercase tracking-widest ${p.active ? 'bg-green-100 text-green-700 border-green-200' : 'bg-surface-100 text-surface-500 border-surface-200'}`}>
                                                {p.active ? 'Active' : 'Inactive'}
                                            </span>
                                        </td>
                                        <td className="px-5 py-3 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button onClick={() => toggleActive(p)} className={`p-2 rounded-lg transition-all text-xs font-bold ${p.active ? 'bg-amber-50 text-amber-600 hover:bg-amber-600 hover:text-white' : 'bg-green-50 text-green-600 hover:bg-green-600 hover:text-white'}`}>
                                                    {p.active ? 'Deactivate' : 'Activate'}
                                                </button>
                                                <button onClick={() => setDeleteTarget(p)} className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all"><Trash2 size={15} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {deleteTarget && (
                <div className="fixed inset-0 bg-surface-900/60 backdrop-blur-sm z-[110] flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 text-center">
                        <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4"><Trash2 size={28} /></div>
                        <h3 className="text-lg font-bold mb-2">Delete Code?</h3>
                        <p className="text-sm text-surface-500 mb-6"><strong>{deleteTarget.code}</strong></p>
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
