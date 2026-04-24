'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Trash2, Edit3, CheckCircle, XCircle, DollarSign } from 'lucide-react';

interface PriceRule {
    id?: string;
    pickup: string;
    dropoff: string;
    vehicle_type: string;
    price: number;
    currency: string;
    notes?: string;
}

const CURRENCIES = ['SAR', 'AED', 'KWD', 'QAR', 'BHD', 'OMR', 'USD', 'EUR', 'GBP'];
const VEHICLES = ['Economy Sedan', 'Business Sedan', 'Executive Sedan', 'Large SUV', 'Executive SUV', 'Executive Bus', 'Any'];

export default function PricingManager() {
    const [rules, setRules] = useState<PriceRule[]>([]);
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState<PriceRule | null>(null);
    const [form, setForm] = useState<PriceRule>({ pickup: '', dropoff: '', vehicle_type: 'Any', price: 0, currency: 'SAR', notes: '' });
    const [saving, setSaving] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');

    const toast = (msg: string) => { setSuccessMsg(msg); setTimeout(() => setSuccessMsg(''), 4000); };

    useEffect(() => { fetchRules(); }, []);

    const fetchRules = async () => {
        setLoading(true);
        const { data } = await supabase.from('price_rules').select('*').order('pickup');
        setRules(data || []);
        setLoading(false);
    };

    const save = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        if (editing?.id) {
            await supabase.from('price_rules').update(form).eq('id', editing.id);
            toast('✅ Price rule updated');
        } else {
            await supabase.from('price_rules').insert([form]);
            toast('✅ Price rule added');
        }
        setEditing(null);
        setForm({ pickup: '', dropoff: '', vehicle_type: 'Any', price: 0, currency: 'SAR', notes: '' });
        setSaving(false);
        fetchRules();
    };

    const remove = async (id: string) => {
        await supabase.from('price_rules').delete().eq('id', id);
        toast('🗑️ Rule deleted');
        fetchRules();
    };

    const startEdit = (rule: PriceRule) => {
        setEditing(rule);
        setForm({ ...rule });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="space-y-6">
            {successMsg && (
                <div className="fixed top-6 right-6 z-[200] bg-green-600 text-white px-5 py-3 rounded-xl shadow-2xl font-semibold text-sm flex items-center gap-3">
                    <CheckCircle size={18} /> {successMsg}
                </div>
            )}

            {/* SQL reminder */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                <strong>Note:</strong> Run this in Supabase SQL Editor first:
                <code className="block mt-2 bg-amber-100 rounded px-3 py-2 text-xs font-mono">
                    CREATE TABLE IF NOT EXISTS price_rules (id UUID DEFAULT gen_random_uuid() PRIMARY KEY, pickup TEXT NOT NULL, dropoff TEXT NOT NULL, vehicle_type TEXT DEFAULT 'Any', price NUMERIC NOT NULL, currency TEXT DEFAULT 'SAR', notes TEXT, created_at TIMESTAMPTZ DEFAULT NOW());
                </code>
            </div>

            {/* Form */}
            <div className="glass-card p-6">
                <h3 className="text-lg font-bold text-surface-900 mb-5 flex items-center gap-2">
                    <DollarSign size={20} className="text-primary-600" />
                    {editing ? 'Edit Price Rule' : 'Add New Price Rule'}
                </h3>
                <form onSubmit={save} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                        <label className="label-text">Pickup Location</label>
                        <input required type="text" placeholder="e.g. Riyadh Airport (RUH)" className="input-field" value={form.pickup} onChange={e => setForm({ ...form, pickup: e.target.value })} />
                    </div>
                    <div>
                        <label className="label-text">Drop-off Location</label>
                        <input required type="text" placeholder="e.g. Jeddah City Center" className="input-field" value={form.dropoff} onChange={e => setForm({ ...form, dropoff: e.target.value })} />
                    </div>
                    <div>
                        <label className="label-text">Vehicle Type</label>
                        <select className="input-field" value={form.vehicle_type} onChange={e => setForm({ ...form, vehicle_type: e.target.value })}>
                            {VEHICLES.map(v => <option key={v} value={v}>{v}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="label-text">Price</label>
                        <input required type="number" min="0" step="0.01" placeholder="0.00" className="input-field" value={form.price || ''} onChange={e => setForm({ ...form, price: parseFloat(e.target.value) || 0 })} />
                    </div>
                    <div>
                        <label className="label-text">Currency</label>
                        <select className="input-field" value={form.currency} onChange={e => setForm({ ...form, currency: e.target.value })}>
                            {CURRENCIES.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="label-text">Notes (Optional)</label>
                        <input type="text" placeholder="e.g. Includes airport meet & greet" className="input-field" value={form.notes || ''} onChange={e => setForm({ ...form, notes: e.target.value })} />
                    </div>
                    <div className="md:col-span-2 lg:col-span-3 flex gap-3">
                        {editing && <button type="button" onClick={() => { setEditing(null); setForm({ pickup: '', dropoff: '', vehicle_type: 'Any', price: 0, currency: 'SAR', notes: '' }); }} className="btn-secondary flex items-center gap-2"><XCircle size={16} /> Cancel</button>}
                        <button type="submit" disabled={saving} className="btn-primary flex items-center gap-2 disabled:opacity-50">
                            {saving ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Plus size={16} />}
                            {editing ? 'Update Rule' : 'Add Rule'}
                        </button>
                    </div>
                </form>
            </div>

            {/* Rules Table */}
            <div className="glass-card overflow-hidden">
                <div className="px-6 py-4 border-b border-surface-100 flex items-center justify-between">
                    <h3 className="font-bold text-surface-900">Price Rules ({rules.length})</h3>
                    <span className="text-xs text-surface-400">These prices are shown to admin when creating quotations/invoices</span>
                </div>
                {loading ? (
                    <div className="p-12 text-center"><span className="w-8 h-8 border-3 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto block" /></div>
                ) : rules.length === 0 ? (
                    <div className="p-12 text-center text-surface-400">
                        <DollarSign size={40} className="mx-auto mb-3 opacity-20" />
                        <p>No price rules yet. Add your first route price above.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-surface-50 text-[10px] font-bold uppercase tracking-widest text-surface-500">
                                <tr>
                                    <th className="px-5 py-3">Route</th>
                                    <th className="px-5 py-3">Vehicle</th>
                                    <th className="px-5 py-3">Price</th>
                                    <th className="px-5 py-3">Notes</th>
                                    <th className="px-5 py-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-surface-100">
                                {rules.map(rule => (
                                    <tr key={rule.id} className="hover:bg-surface-50 transition-colors">
                                        <td className="px-5 py-3">
                                            <div className="text-sm">
                                                <p className="font-semibold text-surface-900">{rule.pickup}</p>
                                                <p className="text-surface-400 text-xs">→ {rule.dropoff}</p>
                                            </div>
                                        </td>
                                        <td className="px-5 py-3 text-sm text-surface-600">{rule.vehicle_type}</td>
                                        <td className="px-5 py-3">
                                            <span className="font-bold text-primary-600">{rule.currency} {Number(rule.price).toLocaleString()}</span>
                                        </td>
                                        <td className="px-5 py-3 text-xs text-surface-400">{rule.notes || '—'}</td>
                                        <td className="px-5 py-3 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button onClick={() => startEdit(rule)} className="p-2 bg-amber-50 text-amber-600 rounded-lg hover:bg-amber-600 hover:text-white transition-all"><Edit3 size={15} /></button>
                                                <button onClick={() => rule.id && remove(rule.id)} className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all"><Trash2 size={15} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
