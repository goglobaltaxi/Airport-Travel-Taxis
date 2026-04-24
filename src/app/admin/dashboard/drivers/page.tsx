'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Car, Phone, Mail, Calendar, Search, Trash2, CheckCircle, Clock, XCircle, MapPin } from 'lucide-react';

export default function DriversManagement() {
    const [applications, setApplications] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [deleteTarget, setDeleteTarget] = useState<any>(null);
    const [statusFilter, setStatusFilter] = useState('all');

    useEffect(() => {
        fetchApplications();
        const channel = supabase
            .channel('drivers-realtime')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'driver_applications' }, fetchApplications)
            .subscribe();
        return () => { supabase.removeChannel(channel); };
    }, []);

    const fetchApplications = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('driver_applications')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) console.error('Error fetching driver applications:', error);
        else setApplications(data || []);
        setLoading(false);
    };

    const updateStatus = async (id: string, status: string) => {
        const { error } = await supabase
            .from('driver_applications')
            .update({ status })
            .eq('id', id);
        if (!error) fetchApplications();
    };

    const confirmDelete = async () => {
        if (!deleteTarget) return;
        const { error } = await supabase
            .from('driver_applications')
            .delete()
            .eq('id', deleteTarget.id);
        if (!error) { setDeleteTarget(null); fetchApplications(); }
    };

    const filtered = applications.filter(a => {
        const matchesSearch =
            a.full_name?.toLowerCase().includes(search.toLowerCase()) ||
            a.email?.toLowerCase().includes(search.toLowerCase()) ||
            a.phone?.toLowerCase().includes(search.toLowerCase()) ||
            a.city?.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = statusFilter === 'all' || a.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'approved': return 'bg-green-100 text-green-700 border-green-200';
            case 'rejected': return 'bg-red-100 text-red-700 border-red-200';
            case 'reviewing': return 'bg-blue-100 text-blue-700 border-blue-200';
            default: return 'bg-amber-100 text-amber-700 border-amber-200';
        }
    };

    return (
        <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                    { label: 'Total Applications', val: applications.length, color: 'text-primary-600' },
                    { label: 'New / Pending', val: applications.filter(a => !a.status || a.status === 'pending').length, color: 'text-amber-600' },
                    { label: 'Approved', val: applications.filter(a => a.status === 'approved').length, color: 'text-green-600' },
                    { label: 'Rejected', val: applications.filter(a => a.status === 'rejected').length, color: 'text-red-600' },
                ].map((s, i) => (
                    <div key={i} className="glass-card p-4 text-center">
                        <p className={`text-2xl font-bold ${s.color}`}>{s.val}</p>
                        <p className="text-[10px] font-bold text-surface-500 uppercase tracking-widest mt-1">{s.label}</p>
                    </div>
                ))}
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between glass-card p-4">
                <div className="relative w-full sm:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400" size={16} />
                    <input
                        type="search"
                        placeholder="Search by name, email or city..."
                        className="input-field pl-9 h-10 text-sm"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="flex flex-wrap gap-2">
                    {[
                        { key: 'all', label: 'All' },
                        { key: 'pending', label: 'Pending' },
                        { key: 'reviewing', label: 'Reviewing' },
                        { key: 'approved', label: 'Approved' },
                        { key: 'rejected', label: 'Rejected' },
                    ].map(({ key, label }) => (
                        <button
                            key={key}
                            onClick={() => setStatusFilter(key)}
                            className={`px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all ${
                                statusFilter === key
                                    ? 'bg-primary-600 text-white border-primary-600'
                                    : 'bg-white text-surface-500 border-surface-200 hover:border-primary-300'
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Applications Table */}
            {loading ? (
                <div className="glass-card p-12 text-center">
                    <span className="w-8 h-8 border-3 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto block" />
                    <p className="text-surface-500 font-medium mt-4">Loading applications...</p>
                </div>
            ) : filtered.length === 0 ? (
                <div className="glass-card p-12 text-center text-surface-500">
                    <Car size={48} className="mx-auto mb-4 opacity-20" />
                    <p className="text-lg font-medium">No driver applications found.</p>
                    <p className="text-sm mt-2">Applications submitted via the "Drive With Us" page will appear here.</p>
                </div>
            ) : (
                <div className="glass-card overflow-hidden shadow-xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-surface-900 text-white uppercase text-[10px] tracking-[0.2em] font-bold">
                                    <th className="px-5 py-4">Applicant</th>
                                    <th className="px-5 py-4">Contact</th>
                                    <th className="px-5 py-4">Details</th>
                                    <th className="px-5 py-4">Applied</th>
                                    <th className="px-5 py-4">Status</th>
                                    <th className="px-5 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-surface-100">
                                {filtered.map((app) => (
                                    <tr key={app.id} className="hover:bg-surface-50 transition-colors">
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                                                    {app.full_name?.charAt(0)?.toUpperCase() || 'D'}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-surface-900 text-sm">{app.full_name || app.name}</p>
                                                    {app.city && (
                                                        <p className="text-xs text-surface-500 flex items-center gap-1 mt-0.5">
                                                            <MapPin size={10} /> {app.city}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4">
                                            <div className="flex flex-col gap-1">
                                                {app.phone && (
                                                    <a href={`https://wa.me/${app.phone?.replace(/[^0-9+]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-xs text-[#25D366] font-bold flex items-center gap-1 hover:underline">
                                                        <Phone size={11} /> {app.phone}
                                                    </a>
                                                )}
                                                {app.email && (
                                                    <a href={`mailto:${app.email}`} className="text-xs text-primary-600 font-medium flex items-center gap-1 hover:underline">
                                                        <Mail size={11} /> {app.email}
                                                    </a>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-5 py-4">
                                            <div className="flex flex-col gap-1 text-xs text-surface-600">
                                                {app.vehicle_type && <span>🚗 {app.vehicle_type}</span>}
                                                {app.experience && <span>⏱ {app.experience}</span>}
                                                {app.license_type && <span>📄 {app.license_type}</span>}
                                            </div>
                                        </td>
                                        <td className="px-5 py-4">
                                            <span className="text-xs text-surface-500 flex items-center gap-1">
                                                <Calendar size={11} />
                                                {new Date(app.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4">
                                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border uppercase tracking-widest ${getStatusColor(app.status || 'pending')}`}>
                                                {app.status || 'pending'}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => updateStatus(app.id, 'reviewing')}
                                                    className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
                                                    title="Mark Reviewing"
                                                >
                                                    <Clock size={16} />
                                                </button>
                                                <button
                                                    onClick={() => updateStatus(app.id, 'approved')}
                                                    className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-all"
                                                    title="Approve"
                                                >
                                                    <CheckCircle size={16} />
                                                </button>
                                                <button
                                                    onClick={() => updateStatus(app.id, 'rejected')}
                                                    className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all"
                                                    title="Reject"
                                                >
                                                    <XCircle size={16} />
                                                </button>
                                                <button
                                                    onClick={() => setDeleteTarget(app)}
                                                    className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all"
                                                    title="Delete"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Delete Modal */}
            {deleteTarget && (
                <div className="fixed inset-0 bg-surface-900/60 backdrop-blur-sm z-[110] flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 text-center">
                        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Trash2 size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-surface-900 mb-2">Delete Application?</h3>
                        <p className="text-surface-600 mb-6 text-sm">
                            Permanently delete application from <strong>{deleteTarget.full_name || deleteTarget.name}</strong>?
                        </p>
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
