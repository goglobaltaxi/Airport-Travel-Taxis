'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/lib/data';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Homepage has a full-bleed dark hero photo, so the nav can float
    // transparently over it until the user scrolls past it.
    const isTransparent = pathname === '/' && !isScrolled;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isTransparent
                    ? 'bg-transparent border-b border-transparent'
                    : isScrolled
                        ? 'bg-white/95 backdrop-blur-xl border-b border-surface-200 shadow-sm'
                        : 'bg-white border-b border-surface-100'
            }`}
        >
            <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-18">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 group shrink-0">
                        <div className="w-9 h-9 bg-primary-600 rounded-lg flex items-center justify-center shadow-sm group-hover:bg-primary-700 transition-all">
                            <span className="text-white font-bold text-base">A</span>
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className={`font-display font-bold text-base tracking-tight ${isTransparent ? 'text-white' : 'text-surface-900'}`}>Airport Travel</span>
                            <span className={`text-[10px] font-bold tracking-[0.15em] uppercase ${isTransparent ? 'text-white/80' : 'text-primary-600'}`}>TAXIS</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-0.5">
                        {navLinks.map((link) => (
                            <div
                                key={link.label}
                                className="relative"
                                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <Link
                                    href={link.href}
                                    className={`px-3.5 py-2 text-sm font-semibold uppercase tracking-wide transition-colors rounded-lg flex items-center gap-1 whitespace-nowrap ${
                                        isTransparent
                                            ? 'text-white/90 hover:text-white hover:bg-white/10'
                                            : 'text-surface-600 hover:text-surface-900 hover:bg-surface-100'
                                    }`}
                                >
                                    {link.label}
                                    {link.children && (
                                        <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </Link>

                                {link.children && openDropdown === link.label && (
                                    <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-surface-200 rounded-2xl shadow-lg py-2 animate-fade-in">
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.label}
                                                href={child.href}
                                                className="block px-4 py-2.5 text-sm text-surface-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA + Mobile Toggle */}
                    <div className="flex items-center gap-2.5">
                        <a
                            href="https://wa.me/966569487569"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`hidden md:flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                                isTransparent
                                    ? 'text-white/90 hover:text-white hover:bg-white/10'
                                    : 'text-surface-700 hover:text-surface-900 hover:bg-surface-100'
                            }`}
                        >
                            <span className="text-base">💬</span> WhatsApp
                        </a>
                        <Link
                            href="/booking"
                            className="hidden sm:inline-flex btn-primary text-sm !px-5 !py-2.5 !shadow-blue"
                        >
                            Book now
                        </Link>

                        <button
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            className={`lg:hidden p-2 rounded-lg transition-colors ${
                                isTransparent
                                    ? 'text-white hover:text-white hover:bg-white/10'
                                    : 'text-surface-600 hover:text-surface-900 hover:bg-surface-100'
                            }`}
                            aria-label="Toggle menu"
                        >
                            {isMobileOpen ? (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileOpen && (
                <div className="lg:hidden bg-white border-t border-surface-100 animate-fade-in">
                    <div className="container-custom mx-auto px-4 py-4 space-y-0.5">
                        {navLinks.map((link) => (
                            <div key={link.label}>
                                <Link
                                    href={link.href}
                                    onClick={() => !link.children && setIsMobileOpen(false)}
                                    className="block px-4 py-3 text-surface-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-colors font-medium text-sm"
                                >
                                    {link.label}
                                </Link>
                                {link.children && (
                                    <div className="pl-6 space-y-0.5 pb-1">
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.label}
                                                href={child.href}
                                                onClick={() => setIsMobileOpen(false)}
                                                className="block px-4 py-2 text-sm text-surface-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="pt-3 pb-1 flex flex-col gap-2">
                            <Link
                                href="/booking"
                                onClick={() => setIsMobileOpen(false)}
                                className="btn-primary text-center text-sm"
                            >
                                Book now
                            </Link>
                            <a
                                href="https://wa.me/966569487569"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary text-center text-sm"
                            >
                                💬 WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
