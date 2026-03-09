'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '@/lib/data';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-xl border-b border-surface-300 shadow-sm'
                    : 'bg-white'
                }`}
        >
            <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                            <span className="text-white font-bold text-lg">A</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-display font-bold text-surface-900 text-lg leading-tight">Airport Travel</span>
                            <span className="text-primary-600 text-xs font-semibold tracking-wider uppercase">TAXIS</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <div
                                key={link.label}
                                className="relative"
                                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <Link
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-medium text-surface-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-surface-100"
                                >
                                    {link.label}
                                    {link.children && (
                                        <svg className="inline-block w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </Link>

                                {/* Dropdown */}
                                {link.children && openDropdown === link.label && (
                                    <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-surface-300 rounded-xl shadow-lg py-2 animate-fade-in">
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.label}
                                                href={child.href}
                                                className="block px-4 py-2.5 text-sm text-surface-700 hover:text-primary-600 hover:bg-surface-100 transition-colors"
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
                    <div className="flex items-center gap-3">
                        <Link href="/booking" className="hidden sm:inline-flex btn-primary text-sm !px-6 !py-2.5">Get Quote</Link>

                        <button
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            className="lg:hidden p-2 text-surface-700 hover:text-surface-900 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileOpen ? (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileOpen && (
                <div className="lg:hidden bg-white border-t border-surface-300 animate-fade-in">
                    <div className="container-custom mx-auto px-4 py-4 space-y-1">
                        {navLinks.map((link) => (
                            <div key={link.label}>
                                <Link
                                    href={link.href}
                                    onClick={() => !link.children && setIsMobileOpen(false)}
                                    className="block px-4 py-3 text-surface-700 hover:text-primary-600 hover:bg-surface-100 rounded-lg transition-colors font-medium"
                                >
                                    {link.label}
                                </Link>
                                {link.children && (
                                    <div className="pl-6 space-y-1">
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.label}
                                                href={child.href}
                                                onClick={() => setIsMobileOpen(false)}
                                                className="block px-4 py-2 text-sm text-surface-600 hover:text-primary-600 hover:bg-surface-100 rounded-lg transition-colors"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="pt-3">
                            <Link
                                href="/booking"
                                onClick={() => setIsMobileOpen(false)}
                                className="btn-primary block text-center text-sm"
                            >Get Quote</Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
