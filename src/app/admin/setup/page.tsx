'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { UserPlus, Shield, CheckCircle } from 'lucide-react';

export default function AdminSetup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleCreateAdmin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setMessage('');

        try {
            const { data, error: signUpError } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        role: 'admin',
                    },
                },
            });

            if (signUpError) throw signUpError;

            setMessage('Account created successfully! You can now log in at the admin portal.');
            setTimeout(() => {
                router.push('/admin/login');
            }, 3000);
        } catch (err: any) {
            setError(err.message || 'Failed to create admin');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-surface-50 px-4 pt-20 pb-12">
            <div className="max-w-md w-full glass-card p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary-600"></div>
                
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                        <Shield size={32} />
                    </div>
                    <h1 className="text-2xl font-display font-bold text-surface-900 mb-2">Initial Admin Setup</h1>
                    <p className="text-surface-600 text-sm">Create the first administrative account for the system.</p>
                </div>

                {message && (
                    <div className="mb-6 p-4 bg-green-50 text-green-700 border border-green-100 rounded-xl flex items-center gap-3 animate-fade-in shadow-sm">
                        <CheckCircle size={20} className="shrink-0" />
                        <span className="text-sm font-medium">{message}</span>
                    </div>
                )}

                {error && (
                    <div className="mb-6 p-4 bg-red-50 text-red-600 border border-red-100 rounded-xl text-sm animate-fade-in shadow-sm">
                        {error}
                    </div>
                )}

                {!message && (
                    <form onSubmit={handleCreateAdmin} className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="label-text">Desired Admin Email</label>
                            <input
                                required
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input-field"
                                placeholder="admin@example.com"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="label-text">Password</label>
                            <input
                                required
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input-field"
                                placeholder="••••••••"
                                minLength={6}
                            />
                            <p className="text-[10px] text-surface-500 italic mt-1 px-1">Must be at least 6 characters.</p>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn-primary w-full py-4 text-base tracking-wide flex items-center justify-center gap-2 group shadow-xl"
                        >
                            {loading ? (
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    <UserPlus size={18} className="group-hover:scale-110 transition-transform" />
                                    <span>Create Admin Account</span>
                                </>
                            )}
                        </button>
                    </form>
                )}

                <div className="mt-8 pt-6 border-t border-surface-200 text-center">
                    <p className="text-[10px] text-surface-400 uppercase tracking-[0.2em] font-bold">Global Ride Management System</p>
                </div>
            </div>
        </div>
    );
}
