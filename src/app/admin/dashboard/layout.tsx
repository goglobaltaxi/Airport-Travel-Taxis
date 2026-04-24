'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, Calendar, Users, LogOut, ChevronRight, Mail, Car, BarChart2, DollarSign, Star, FileText, Tag } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [mounted, setMounted] = useState(false);
    const [unreadCount, setUnreadCount] = useState(0);
    const router = useRouter();
    const pathname = usePathname();

    const fetchUnread = async () => {
        const { count } = await supabase
            .from('contact_messages')
            .select('*', { count: 'exact', head: true })
            .neq('status', 'read');
        setUnreadCount(count || 0);
    };

    useEffect(() => {
        setMounted(true);
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                router.push('/admin/login/');
            } else {
                setUser(session.user);
                fetchUnread();
            }
            setLoading(false);
        };

        checkUser();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (!session) {
                router.push('/admin/login/');
            } else if (session) {
                setUser(session.user);
            }
        });

        // Realtime unread badge updates
        const channel = supabase
            .channel('messages-unread')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'contact_messages' }, fetchUnread)
            .subscribe();

        return () => {
            subscription.unsubscribe();
            supabase.removeChannel(channel);
        };
    }, [router]);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.push('/admin/login');
    };

    if (!mounted || loading || !user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-surface-50">
                <span className="w-10 h-10 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
            </div>
        );
    }

    const menuItems = [
        { name: 'Dashboard',  icon: LayoutDashboard, href: '/admin/dashboard/' },
        { name: 'Bookings',   icon: Calendar,        href: '/admin/dashboard/bookings/' },
        { name: 'Leads',      icon: Users,           href: '/admin/dashboard/leads/' },
        { name: 'Drivers',    icon: Car,             href: '/admin/dashboard/drivers/' },
        { name: 'Messages',   icon: Mail,            href: '/admin/dashboard/messages/' },
        { name: 'Analytics',  icon: BarChart2,       href: '/admin/dashboard/analytics/' },
        { name: 'Pricing',    icon: DollarSign,      href: '/admin/dashboard/pricing/' },
        { name: 'Reviews',    icon: Star,            href: '/admin/dashboard/reviews/' },
        { name: 'Blog',       icon: FileText,        href: '/admin/dashboard/blog/' },
        { name: 'Promos',     icon: Tag,             href: '/admin/dashboard/promos/' },
    ];

    const currentTitle = menuItems.find(m => pathname.startsWith(m.href))?.name || 'Control Panel';

    return (
        <div className="min-h-screen bg-surface-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-surface-900 text-white flex flex-col fixed h-full shadow-2xl z-50">
                <div className="p-6 border-b border-surface-800">
                    <h2 className="text-xl font-display font-bold text-primary-400">Admin Panel</h2>
                    <p className="text-xs text-surface-400 mt-1 uppercase tracking-widest font-semibold">Chauffeur Service</p>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href || (item.href !== '/admin/dashboard/' && pathname.startsWith(item.href));
                        const badge = item.name === 'Messages' && unreadCount > 0 ? unreadCount : null;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                                    isActive
                                        ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20'
                                        : 'text-surface-400 hover:bg-surface-800 hover:text-white'
                                }`}
                            >
                                <Icon size={20} />
                                <span className="font-medium flex-1">{item.name}</span>
                                {badge && (
                                    <span className="bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0">
                                        {badge > 9 ? '9+' : badge}
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-surface-800 space-y-4">
                    <div className="px-3">
                        <p className="text-xs text-surface-500 truncate">{user.email}</p>
                    </div>
                    <button
                        onClick={handleSignOut}
                        className="flex items-center gap-3 p-3 w-full rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors"
                    >
                        <LogOut size={20} />
                        <span className="font-medium">Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-2xl font-display font-bold text-surface-900 flex items-center gap-2">
                                Admin <ChevronRight size={20} className="text-surface-400" />
                                <span className="text-primary-600">
                                    {currentTitle}
                                </span>
                            </h1>
                            <p className="text-surface-600 mt-1 text-sm">Manage your global ride operations</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold border border-green-200 uppercase tracking-wider">
                                System Online
                            </span>
                        </div>
                    </div>

                    {children}
                </div>
            </main>
        </div>
    );
}
