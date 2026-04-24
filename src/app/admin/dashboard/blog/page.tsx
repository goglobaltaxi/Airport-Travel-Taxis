'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Trash2, Edit3, Eye, EyeOff, CheckCircle, FileText } from 'lucide-react';

interface Post {
    id?: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    published: boolean;
    created_at?: string;
}

const toSlug = (s: string) => s.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();

export default function BlogManager() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState<Post | null>(null);
    const [form, setForm] = useState<Post>({ title: '', slug: '', excerpt: '', content: '', published: false });
    const [saving, setSaving] = useState(false);
    const [toast, setToast] = useState('');
    const [deleteTarget, setDeleteTarget] = useState<Post | null>(null);
    const [showForm, setShowForm] = useState(false);

    const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(''), 4000); };

    useEffect(() => { fetchPosts(); }, []);

    const fetchPosts = async () => {
        setLoading(true);
        const { data } = await supabase.from('blog_posts').select('*').order('created_at', { ascending: false });
        setPosts(data || []);
        setLoading(false);
    };

    const save = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        if (editing?.id) {
            await supabase.from('blog_posts').update(form).eq('id', editing.id);
            showToast('✅ Post updated');
        } else {
            await supabase.from('blog_posts').insert([form]);
            showToast('✅ Post created');
        }
        setEditing(null);
        setShowForm(false);
        setForm({ title: '', slug: '', excerpt: '', content: '', published: false });
        setSaving(false);
        fetchPosts();
    };

    const togglePublish = async (p: Post) => {
        await supabase.from('blog_posts').update({ published: !p.published }).eq('id', p.id!);
        showToast(p.published ? '🙈 Post unpublished' : '✅ Post published');
        fetchPosts();
    };

    const startEdit = (p: Post) => {
        setEditing(p);
        setForm({ ...p });
        setShowForm(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const confirmDelete = async () => {
        if (!deleteTarget?.id) return;
        await supabase.from('blog_posts').delete().eq('id', deleteTarget.id);
        showToast('🗑️ Post deleted');
        setDeleteTarget(null);
        fetchPosts();
    };

    const published = posts.filter(p => p.published).length;

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
                    CREATE TABLE IF NOT EXISTS blog_posts (id UUID DEFAULT gen_random_uuid() PRIMARY KEY, title TEXT NOT NULL, slug TEXT UNIQUE NOT NULL, excerpt TEXT, content TEXT, published BOOLEAN DEFAULT false, created_at TIMESTAMPTZ DEFAULT NOW());
                </code>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
                {[
                    { label: 'Total Posts', val: posts.length },
                    { label: 'Published', val: published },
                    { label: 'Drafts', val: posts.length - published },
                ].map((s, i) => (
                    <div key={i} className="glass-card p-4 text-center">
                        <p className="text-2xl font-bold text-surface-900">{s.val}</p>
                        <p className="text-[10px] font-bold text-surface-400 uppercase tracking-widest mt-1">{s.label}</p>
                    </div>
                ))}
            </div>

            {/* Action */}
            <div className="flex justify-end">
                <button onClick={() => { setShowForm(!showForm); setEditing(null); setForm({ title: '', slug: '', excerpt: '', content: '', published: false }); }} className="btn-primary flex items-center gap-2">
                    <Plus size={18} /> {showForm && !editing ? 'Cancel' : 'New Post'}
                </button>
            </div>

            {/* Form */}
            {showForm && (
                <div className="glass-card p-6">
                    <h3 className="font-bold text-surface-900 mb-5">{editing ? 'Edit Post' : 'New Blog Post'}</h3>
                    <form onSubmit={save} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="label-text">Title</label>
                                <input required type="text" className="input-field" value={form.title}
                                    onChange={e => setForm({ ...form, title: e.target.value, slug: editing ? form.slug : toSlug(e.target.value) })} />
                            </div>
                            <div>
                                <label className="label-text">Slug (URL)</label>
                                <input required type="text" className="input-field font-mono text-sm" value={form.slug}
                                    onChange={e => setForm({ ...form, slug: toSlug(e.target.value) })} />
                                <p className="text-xs text-surface-400 mt-1">/blog/{form.slug || 'your-slug-here'}</p>
                            </div>
                        </div>
                        <div>
                            <label className="label-text">Excerpt (short summary)</label>
                            <input type="text" className="input-field" value={form.excerpt} onChange={e => setForm({ ...form, excerpt: e.target.value })} placeholder="One-line summary shown in blog listing..." />
                        </div>
                        <div>
                            <label className="label-text">Content</label>
                            <textarea required rows={12} className="input-field resize-y font-mono text-sm" value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} placeholder="Full blog post content. You can use plain text or HTML..." />
                        </div>
                        <div className="flex items-center gap-4">
                            <select className="input-field w-auto" value={form.published ? 'true' : 'false'} onChange={e => setForm({ ...form, published: e.target.value === 'true' })}>
                                <option value="false">📝 Save as Draft</option>
                                <option value="true">✅ Publish Now</option>
                            </select>
                            {editing && <button type="button" onClick={() => { setEditing(null); setShowForm(false); setForm({ title: '', slug: '', excerpt: '', content: '', published: false }); }} className="btn-secondary">Cancel</button>}
                            <button type="submit" disabled={saving} className="btn-primary flex items-center gap-2 disabled:opacity-50">
                                {saving ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : null}
                                {editing ? 'Update Post' : 'Create Post'}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Posts List */}
            {loading ? (
                <div className="glass-card p-12 text-center"><span className="w-8 h-8 border-3 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto block" /></div>
            ) : posts.length === 0 ? (
                <div className="glass-card p-12 text-center text-surface-400">
                    <FileText size={40} className="mx-auto mb-3 opacity-20" />
                    <p>No blog posts yet. Create your first post above.</p>
                </div>
            ) : (
                <div className="glass-card overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-surface-50 text-[10px] font-bold uppercase tracking-widest text-surface-500">
                            <tr>
                                <th className="px-5 py-3">Title</th>
                                <th className="px-5 py-3">Slug</th>
                                <th className="px-5 py-3">Status</th>
                                <th className="px-5 py-3">Date</th>
                                <th className="px-5 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-100">
                            {posts.map(p => (
                                <tr key={p.id} className="hover:bg-surface-50 transition-colors">
                                    <td className="px-5 py-3">
                                        <p className="font-semibold text-surface-900 text-sm">{p.title}</p>
                                        <p className="text-xs text-surface-400 mt-0.5 line-clamp-1">{p.excerpt}</p>
                                    </td>
                                    <td className="px-5 py-3 font-mono text-xs text-surface-500">/blog/{p.slug}</td>
                                    <td className="px-5 py-3">
                                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border uppercase tracking-widest ${p.published ? 'bg-green-100 text-green-700 border-green-200' : 'bg-surface-100 text-surface-500 border-surface-200'}`}>
                                            {p.published ? 'Published' : 'Draft'}
                                        </span>
                                    </td>
                                    <td className="px-5 py-3 text-xs text-surface-400">{p.created_at ? new Date(p.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '—'}</td>
                                    <td className="px-5 py-3 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button onClick={() => togglePublish(p)} className={`p-2 rounded-lg transition-all ${p.published ? 'bg-amber-50 text-amber-600 hover:bg-amber-600 hover:text-white' : 'bg-green-50 text-green-600 hover:bg-green-600 hover:text-white'}`} title={p.published ? 'Unpublish' : 'Publish'}>
                                                {p.published ? <EyeOff size={15} /> : <Eye size={15} />}
                                            </button>
                                            <button onClick={() => startEdit(p)} className="p-2 bg-amber-50 text-amber-600 rounded-lg hover:bg-amber-600 hover:text-white transition-all"><Edit3 size={15} /></button>
                                            <button onClick={() => setDeleteTarget(p)} className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all"><Trash2 size={15} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {deleteTarget && (
                <div className="fixed inset-0 bg-surface-900/60 backdrop-blur-sm z-[110] flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 text-center">
                        <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4"><Trash2 size={28} /></div>
                        <h3 className="text-lg font-bold mb-2">Delete Post?</h3>
                        <p className="text-sm text-surface-500 mb-6"><strong>"{deleteTarget.title}"</strong></p>
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
