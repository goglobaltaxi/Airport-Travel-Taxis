import Link from 'next/link';
import { airports, routes, gccCountries } from '@/lib/data';

export default function Footer() {
    return (
        <footer className="bg-surface-900 text-white">
            {/* Main Footer */}
            <div className="container-custom mx-auto section-padding !py-12 lg:!py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-lg">A</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-display font-bold text-white text-lg leading-tight">Airport Travel Taxis</span>
                                <span className="text-primary-400 text-xs font-semibold tracking-wider uppercase">TAXIS</span>
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
                            {airports.map((airport) => (
                                <li key={airport.slug}>
                                    <Link href={`/airport/${airport.slug}`} className="text-sm text-surface-500 hover:text-primary-400 transition-colors">
                                        {airport.city} Airport ({airport.code})
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Popular Routes */}
                    <div>
                        <h4 className="font-display font-semibold text-white mb-4">Popular Routes</h4>
                        <ul className="space-y-2.5">
                            {routes.map((route) => (
                                <li key={route.slug}>
                                    <Link href={`/routes/${route.slug}`} className="text-sm text-surface-500 hover:text-primary-400 transition-colors">
                                        {route.from} → {route.to}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2.5">
                            {[
                                { label: 'Get a Quote', href: '/booking' },
                                { label: 'Our Fleet', href: '/fleet' },
                                { label: 'Drive with Us', href: '/drive-with-us' },
                                { label: 'About Us', href: '/about' },
                                { label: 'Blog', href: '/blog' },
                                { label: 'Contact', href: '/contact' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-surface-500 hover:text-primary-400 transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <h4 className="font-display font-semibold text-white mt-6 mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li className="text-sm text-surface-500">
                                <a href="https://wa.me/923057262461" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                                    <span>📞 Chat on WhatsApp</span>
                                </a>
                            </li>
                            <li className="text-sm text-surface-500">📧 info@airporttraveltaxis.com</li>
                            <li className="text-sm text-surface-500 font-medium text-primary-400">Available 24/7</li>
                            <li className="pt-2 flex flex-col gap-3">
                                <a href="https://www.instagram.com/airporttraveltaxis/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-surface-500 hover:text-[#E4405F] transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.584.07-4.849c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                    Instagram
                                </a>
                                <a href="https://linkedin.com/company/airport-travel-taxis" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-surface-500 hover:text-[#0A66C2] transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                    LinkedIn
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=61583717369842" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-surface-500 hover:text-[#1877F2] transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                    Facebook
                                </a>
                                <a href="https://www.reddit.com/user/Regular_Respect_890/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-surface-500 hover:text-[#FF4500] transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .875.18 1.183.473 1.19-.838 2.822-1.385 4.619-1.464l.872-4.102 3.1 1l-.226 1a1.247 1.247 0 0 1-1.32 1.247c-.688 0-1.25-.561-1.25-1.249 0-.688.561-1.25 1.25-1.25zm-9.043 8.35c-.475 0-.86.385-.86.86a.86.86 0 0 0 .86.86c.475 0 .86-.385.86-.86a.859.859 0 0 0-.86-.86zm6.331 3.518c-.066.066-.172.066-.238 0-.585-.585-1.547-.643-2.063-.643-.516 0-1.478.058-2.063.643-.066.066-.172.066-.238 0-.066-.066-.066-.172 0-.238.167-.168.411-.34.733-.473a2.915 2.915 0 0 1 1.568-.17 2.915 2.915 0 0 1 1.568.17l.733.473c.066.066.066.172 0 .238zm.732-2.658c-.476 0-.861.385-.861.86s.385.86.861.86c.475 0 .86-.385.86-.86s-.385-.86-.86-.86z"/>
                                    </svg>
                                    Reddit
                                </a>
                                <a href="https://www.quora.com/profile/Airport-Travel-Taxis" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-surface-500 hover:text-[#B92B27] transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M11.666 11.233c.002-.132.012-.25.021-.355.034-1.054.475-2.073 1.144-2.883C13.5 7.185 14.53 6.643 15.65 6.643c2.059 0 3.737 1.77 3.737 3.945 0 2.21-1.636 4.028-3.69 4.028-1.07 0-2.046-.46-2.73-1.22l-.123-.133c-.225-.246-.407-.492-.553-.742.148.246.33.492.553.742l.123.134a4.198 4.198 0 0 0 2.73 1.22c2.054 0 3.69-1.817 3.69-4.028 0-2.175-1.678-3.945-3.737-3.945-1.12 0-2.15.542-2.819 1.352a4.872 4.872 0 0 0-1.144 2.883l-.014.24-.007.115c-.007.13-.01.27-.01.42 0 .4.041.808.12 1.21.037.195.088.384.148.566.059.182.133.356.216.518.06.115.127.228.2.333a4.037 4.037 0 0 0 1.224 1.25l.133.087c.189.123.393.221.606.296.241.085.495.14.757.166.212.02.43.03.652.03 2.115 0 3.829-1.393 3.829-3.486s-1.714-3.483-3.829-3.483c-1.18 0-2.221.734-2.829 1.62-.609.886-.963 2.067-1.157 3.32-.016.104-.029.213-.042.33a11.137 11.137 0 0 0 .144-1.211c.08-.34.195-.67.338-.979a4.27 4.27 0 0 1 .5-.9c.73-.91 1.748-1.503 2.87-1.503 2.115 0 3.829 1.393 3.829 3.486s-1.714 3.486-3.829 3.486c-.223 0-.44-.01-.65-.03a4.276 4.276 0 0 1-.758-.166 4.14 4.14 0 0 1-.606-.296 4.015 4.015 0 0 1-.133-.087 3.996 3.996 0 0 1-1.224-1.25 4.475 4.475 0 0 1-.2-.333 4.218 4.218 0 0 1-.216-.518 4.49 4.49 0 0 1-.148-.566 5.862 5.862 0 0 1-.12-1.21zm-10.42 12.01c-.131-.4-.2-.84-.2-1.26 0-3.32 3.16-6.02 7.03-6.02 3.86 0 7.02 2.7 7.02 6.02 0 .42-.07.86-.2 1.26.13-.4.2-.84.2-1.26 0-3.32-3.16-6.02-7.02-6.02-3.87 0-7.03 2.7-7.03 6.02 0 .42.069.86.2 1.26.47 1.455 1.576 2.658 2.94 3.344l-1.077 2.028a.591.591 0 0 0 .584.904l3.1-.061a9.204 9.204 0 0 0 1.283.102c3.87 0 7.03-2.7 7.03-6.02 0-.42-.07-.86-.2-1.26a6.83 6.83 0 0 1 .18 1.48c.02.164.02.328.02.49 0 3.873-3.155 7.012-7.03 7.012a9.204 9.204 0 0 1-1.283-.102c-.52-.061-.79.37-.584.77l1.077 2.02c1.47-.738 2.65-2.02 3.16-3.56.13-.4.2-.84.2-1.26.13.4.2.84.2 1.26 0 3.32-3.16 6.02-7.03 6.02-.45 0-.89-.033-1.31-.1-.58-.093-.728.32-.505.69l1.45 2.14a.703.703 0 0 1-.504 1.12l-4.9-1.04c-1.89-1.01-3.39-2.72-4.14-4.81a6.852 6.852 0 0 1-.2-1.26z"/>
                                    </svg>
                                    Quora
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-surface-600">
                        © {new Date().getFullYear()} Airport Travel Taxis. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="text-sm text-surface-600 hover:text-surface-400 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-and-conditions" className="text-sm text-surface-600 hover:text-surface-400 transition-colors">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
