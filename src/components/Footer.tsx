import Link from 'next/link';
import { airports, routes, gccCountries } from '@/lib/data';

const socialLinks = [
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/airporttraveltaxis/',
        hoverColor: 'hover:bg-[#E4405F]',
        path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.584.07-4.849c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/company/airport-travel-taxis',
        hoverColor: 'hover:bg-[#0A66C2]',
        path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    },
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/profile.php?id=61583717369842',
        hoverColor: 'hover:bg-[#1877F2]',
        path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
        fillRule: 'evenodd' as const,
    },
    {
        name: 'Reddit',
        href: 'https://www.reddit.com/user/Regular_Respect_890/',
        hoverColor: 'hover:bg-[#FF4500]',
        path: 'M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .875.18 1.183.473 1.19-.838 2.822-1.385 4.619-1.464l.872-4.102 3.1 1l-.226 1a1.247 1.247 0 0 1-1.32 1.247c-.688 0-1.25-.561-1.25-1.249 0-.688.561-1.25 1.25-1.25zm-9.043 8.35c-.475 0-.86.385-.86.86a.86.86 0 0 0 .86.86c.475 0 .86-.385.86-.86a.859.859 0 0 0-.86-.86zm6.331 3.518c-.066.066-.172.066-.238 0-.585-.585-1.547-.643-2.063-.643-.516 0-1.478.058-2.063.643-.066.066-.172.066-.238 0-.066-.066-.066-.172 0-.238.167-.168.411-.34.733-.473a2.915 2.915 0 0 1 1.568-.17 2.915 2.915 0 0 1 1.568.17l.733.473c.066.066.066.172 0 .238zm.732-2.658c-.476 0-.861.385-.861.86s.385.86.861.86c.475 0 .86-.385.86-.86s-.385-.86-.86-.86z',
    },
    {
        name: 'Quora',
        href: 'https://www.quora.com/profile/Airport-Travel-Taxis',
        hoverColor: 'hover:bg-[#B92B27]',
        letter: 'Q',
    },
];

const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Our Fleet', href: '/fleet' },
    { label: 'Drive with Us', href: '/drive-with-us' },
    { label: 'Contact', href: '/contact' },
    { label: 'Sitemap', href: '/sitemap.xml' },
];

export default function Footer() {
    return (
        <footer className="bg-surface-900 text-white">
            {/* Main Footer */}
            <div className="container-custom mx-auto section-padding !py-12 lg:!py-16">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8">
                    {/* Brand */}
                    <div className="col-span-2 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-lg">A</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-display font-bold text-white text-lg leading-tight tracking-tight">Airport Travel</span>
                                <span className="text-primary-400 text-xs font-bold tracking-widest uppercase">TAXIS</span>
                            </div>
                        </Link>
                        <p className="text-surface-500 text-sm leading-relaxed mb-4">
                            Pre-booked taxi and transfer services across Saudi Arabia, UAE, Kuwait, Qatar, and Bahrain. Airport transfers, intercity travel, and cross-border transportation.
                        </p>
                        <div className="flex gap-2 text-2xl">
                            {gccCountries.map((c) => (
                                <span key={c.code} title={c.name}><img src={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`} width={24} height={16} alt={`${c.name} flag`} className="inline-block rounded-sm shadow-sm" /></span>
                            ))}
                        </div>
                    </div>

                    {/* Airport Transfers */}
                    <div>
                        <h4 className="font-display font-semibold text-white mb-4">Airport Transfers</h4>
                        <ul className="space-y-2.5">
                            {airports.slice(0, 5).map((airport) => (
                                <li key={airport.slug}>
                                    <Link href={`/airport/${airport.slug}`} className="text-sm text-surface-500 hover:text-primary-400 transition-colors">
                                        {airport.city} Airport ({airport.code})
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/booking" className="text-sm text-primary-400 font-medium hover:text-primary-300 transition-colors">
                                    All airports →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Popular Routes */}
                    <div>
                        <h4 className="font-display font-semibold text-white mb-4">Popular Routes</h4>
                        <ul className="space-y-2.5">
                            {routes.slice(0, 5).map((route) => (
                                <li key={route.slug}>
                                    <Link href={`/routes/${route.slug}`} className="text-sm text-surface-500 hover:text-primary-400 transition-colors">
                                        {route.from} → {route.to}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/booking" className="text-sm text-primary-400 font-medium hover:text-primary-300 transition-colors">
                                    All routes →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-display font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-2.5">
                            {companyLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-surface-500 hover:text-primary-400 transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Need our help? */}
                    <div>
                        <h4 className="font-display font-semibold text-white mb-4">Need our help?</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="https://wa.me/966569487569" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-surface-300 hover:text-primary-400 transition-colors">
                                    <span>💬 Chat on WhatsApp</span>
                                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-green-400">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> Online
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+966569487569" className="flex items-center gap-2 text-sm text-surface-300 hover:text-primary-400 transition-colors">
                                    📞 +966 56 948 7569
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@airporttraveltaxis.com" className="flex items-center gap-2 text-sm text-surface-300 hover:text-primary-400 transition-colors">
                                    📧 info@airporttraveltaxis.com
                                </a>
                            </li>
                            <li className="text-sm font-medium text-primary-400">Available 24/7</li>
                        </ul>
                    </div>
                </div>

                {/* Follow us + WhatsApp promo */}
                <div className="mt-12 pt-10 border-t border-white/10 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                    <div className="lg:col-span-3">
                        <h4 className="font-display font-semibold text-white mb-4">Follow us</h4>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-colors ${social.hoverColor}`}
                                >
                                    {social.letter ? (
                                        <span className="font-serif font-bold text-base leading-none">{social.letter}</span>
                                    ) : (
                                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule={social.fillRule} d={social.path} />
                                        </svg>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-4 bg-primary-600 rounded-2xl p-4">
                            <div className="bg-white rounded-xl p-1.5 shrink-0">
                                <img
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=112x112&margin=0&data=https://wa.me/966569487569"
                                    alt="Scan to chat with Airport Travel Taxis on WhatsApp"
                                    width={72}
                                    height={72}
                                    className="w-[72px] h-[72px]"
                                />
                            </div>
                            <div>
                                <p className="text-white font-display font-bold text-sm leading-snug mb-1">
                                    Scan to book anywhere.<br />WhatsApp makes it easy.
                                </p>
                                <a href="https://wa.me/966569487569" target="_blank" rel="noopener noreferrer" className="text-primary-100 text-xs font-semibold hover:text-white transition-colors">
                                    Or tap to chat now →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-surface-600" suppressHydrationWarning>
                        © {new Date().getFullYear()} Airport Travel Taxis. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/privacy-policy" className="text-sm text-surface-600 hover:text-surface-400 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-and-conditions" className="text-sm text-surface-600 hover:text-surface-400 transition-colors">
                            Terms &amp; Conditions
                        </Link>
                        <Link href="/sitemap.xml" className="text-sm text-surface-600 hover:text-surface-400 transition-colors">
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}