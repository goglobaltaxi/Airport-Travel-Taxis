import { Metadata } from 'next';
import Link from 'next/link';
import BookingWidget from '@/components/BookingWidget';
import AuthorityTrust from '@/components/AuthorityTrust';
import RouteFinder from '@/components/RouteFinder';
import TravelCalculator from '@/components/TravelCalculator';
import StructuredInformationBlocks from '@/components/StructuredInformationBlocks';
import { 
    MapPin, 
    ShieldCheck, 
    ChevronRight,
    Car,
    Clock,
    UserCheck,
    Coins,
    Plane,
    Globe,
    Check
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Professional Taxi & Chauffeur Services in Kuwait | Book Online',
    description: 'Reliable and professional taxi, chauffeur, and airport transfer services across Kuwait. Book your direct cross-border transfers to Saudi Arabia and GCC today.',
    openGraph: {
        title: 'Professional Taxi & Chauffeur Services in Kuwait | Book Online',
        description: 'Reliable and professional taxi, chauffeur, and airport transfer services across Kuwait. Book your direct cross-border transfers to Saudi Arabia and GCC today.',
        url: 'https://airporttraveltaxis.com/kuwait',
    },
    alternates: {
        canonical: 'https://airporttraveltaxis.com/kuwait',
    },
};

export default function KuwaitCountryPage() {
    return (
        <div className="pt-20">
            {/* ─── Hero Section ──────────────────────────────────────── */}
            <section className="section-padding bg-surface-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-surface-100 to-transparent pointer-events-none"></div>
                <div className="container-custom mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6 font-medium">
                        <Link href="/" className="hover:text-gold-600 transition-colors uppercase tracking-wider text-[11px]">Home</Link>
                        <span>/</span>
                        <span className="text-surface-900 uppercase tracking-wider text-[11px] font-bold">Kuwait Services</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h1 className="font-display text-4xl lg:text-[54px] lg:leading-[1.1] text-primary-900 mb-6 font-bold tracking-tight">
                                Executive Executive <br />
                                <span className="bg-gradient-to-r from-gold-600 to-gold-400 bg-clip-text text-transparent">Fleet Services Kuwait</span>
                            </h1>
                            <p className="text-surface-600 text-lg leading-relaxed mb-8 font-light">
                                Experience unparalleled comfort and reliability with our comprehensive transportation services across Kuwait. We specialize in luxury airport transfers, VIP excursions, and dedicated cross-border trips to Saudi Arabia via Nuwaiseeb and Khafji.
                            </p>

                            {/* Service Highlights Block */}
                            <div className="bg-white rounded-2xl p-6 mb-8 border border-surface-200 shadow-sm hover:shadow-md transition-shadow">
                                <h2 className="font-bold text-primary-900 mb-5 flex items-center gap-3 text-lg">
                                    <span className="bg-gold-50 text-gold-600 w-8 h-8 rounded-lg flex items-center justify-center text-sm shadow-[0_0_10px_rgba(212,175,55,0.2)]">★</span>
                                    The Executive Choice
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-6">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-surface-50 flex items-center justify-center shrink-0">
                                            <ShieldCheck className="w-4 h-4 text-gold-600" />
                                        </div>
                                        <span className="text-sm font-semibold text-surface-800 mt-1.5">Vetted Chauffeurs</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-surface-50 flex items-center justify-center shrink-0">
                                            <Globe className="w-4 h-4 text-gold-600" />
                                        </div>
                                        <span className="text-sm font-semibold text-surface-800 mt-1.5">VIP Border Crossing</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-surface-50 flex items-center justify-center shrink-0">
                                            <Clock className="w-4 h-4 text-gold-600" />
                                        </div>
                                        <span className="text-sm font-semibold text-surface-800 mt-1.5">24/7 Availability</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-surface-50 flex items-center justify-center shrink-0">
                                            <Car className="w-4 h-4 text-gold-600" />
                                        </div>
                                        <span className="text-sm font-semibold text-surface-800 mt-1.5">VIP Modern Fleet</span>
                                    </div>
                                </div>
                                <a href="#booking-widget" className="w-full btn-primary !py-4 text-sm flex items-center justify-center gap-2 text-center uppercase tracking-wider font-bold shadow-xl">
                                    Reserve a Chauffeur <ChevronRight className="w-5 h-5 text-gold-400" />
                                </a>
                            </div>

                            <p className="text-[11px] text-surface-500 mb-4 font-bold uppercase tracking-wider flex items-center gap-2">
                                <MapPin className="w-3.5 h-3.5" /> Serving: Kuwait City • KWI Airport • All Border Ports
                            </p>
                        </div>
                        <div id="booking-widget" className="relative lg:mt-0 mt-8">
                            <div className="absolute -inset-10 bg-gradient-to-tr from-gold-500/10 to-primary-900/5 blur-3xl rounded-full" />
                            <div className="relative">
                                <BookingWidget compact />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Structured Info */}
            <StructuredInformationBlocks 
                startLocation="Kuwait"
                endLocation="Saudi Arabia & Regional Destinations"
                type="VIP Chauffeur & Border Service"
                travelTime="Variable (Local & Inter-city)"
                pickup="Home, Airport, or Hotel in Kuwait"
                dropoff="Direct Door-to-Door Destination"
                relatedLinks={[
                    { name: 'Kuwait Airport Transfer', url: '/airport/kuwait-airport-taxi' },
                    { name: 'Kuwait City Chauffeur', url: '/city/kuwait-city' },
                    { name: 'GCC Executive Travel', url: '/gcc-travel-road-travel' }
                ]}
            />

            {/* ─── Kuwait Cross-Border Services ──────────────────────── */}
            <section className="section-padding bg-white relative">
                <div className="container-custom mx-auto">
                    <div className="text-center mb-16 relative z-10">
                        <h2 className="font-display text-4xl lg:text-5xl text-primary-900 mb-6 font-bold tracking-tight">
                            Seamless <span className="text-gold-600">Border Crossing</span>
                        </h2>
                        <p className="text-surface-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                            We offer specialized, hassle-free border crossing taxi services between Kuwait and Saudi Arabia. Let our expert chauffeurs handle the Nuwaiseeb/Khafji border logistics.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                        {[
                            { title: 'Kuwait to Saudi Arabia', slug: '/taxi-from-kuwait-to-saudi-arabia', desc: 'Direct, executive travel to KSA from anywhere in Kuwait.' },
                            { title: 'Saudi Arabia to Kuwait', slug: '/taxi-from-saudi-arabia-to-kuwait', desc: 'Secure and comfortable return trips from KSA to Kuwait.' },
                            { title: 'Kuwait City to Nuwaiseeb', slug: '/taxi-from-kuwait-city-to-saudi-border-nuwaiseeb', desc: 'Executive transfers straight to the Nuwaiseeb border crossing.' },
                            { title: 'Nuwaiseeb to Kuwait City', slug: '/taxi-from-saudi-border-nuwaiseeb-to-kuwait-city', desc: 'On-time pickups at the border directly to your Kuwait destination.' },
                            { title: 'KWI Airport to Saudi Border', slug: '/taxi-from-kuwait-airport-to-saudi-border', desc: 'Land at KWI and head straight to the Saudi border in luxury.' },
                        ].map((route) => (
                            <Link key={route.slug} href={route.slug} className="group glass-card-hover p-8 border border-surface-200 rounded-2xl transition-all hover:border-gold-300 hover:shadow-xl bg-white hover:bg-surface-50">
                                <div className="w-12 h-12 bg-surface-100 rounded-xl text-primary-900 mb-6 flex items-center justify-center group-hover:bg-primary-900 group-hover:text-gold-400 transition-colors shadow-sm group-hover:shadow-gold">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <h3 className="font-display font-bold text-xl text-primary-900 mb-3">{route.title}</h3>
                                <p className="text-sm text-surface-500 mb-6 font-light leading-relaxed h-10">{route.desc}</p>
                                <span className="text-gold-600 text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                    Discover <ChevronRight className="w-4 h-4" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Popular Intercity Routes ─────────────────────────── */}
            <section className="section-padding bg-surface-100 border-y border-surface-200">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl lg:text-3xl text-primary-900 mb-8 border-l-4 border-gold-500 pl-5 font-bold">
                        Executive Transfers From Kuwait
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            { to: 'Dammam', slug: '/taxi-from-kuwait-city-to-dammam' },
                            { to: 'Riyadh', slug: '/taxi-from-kuwait-city-to-riyadh' },
                            { to: 'Al Khobar', slug: '/taxi-from-kuwait-city-to-khobar' },
                            { to: 'Jubail', slug: '/taxi-from-kuwait-city-to-jubail' },
                        ].map((route) => (
                            <Link key={route.slug} href={route.slug} className="bg-white p-6 border border-surface-200 rounded-2xl hover:shadow-xl hover:border-gold-300 transition-all flex items-center justify-between group">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-surface-50 flex items-center justify-center group-hover:bg-gold-50 transition-colors">
                                        <MapPin className="w-5 h-5 text-primary-900 group-hover:text-gold-600 transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-surface-500 font-bold uppercase tracking-wider mb-0.5">From Kuwait City</p>
                                        <p className="font-display font-bold text-lg text-primary-900">To {route.to}</p>
                                    </div>
                                </div>
                                <ChevronRight className="w-5 h-5 text-surface-300 group-hover:text-gold-600 transition-colors" />
                            </Link>
                        ))}
                    </div>

                    <h2 className="font-display text-2xl lg:text-3xl text-primary-900 mb-8 mt-16 border-l-4 border-gold-500 pl-5 font-bold">
                        Return Journeys to Kuwait
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            { from: 'Dammam', slug: '/taxi-from-dammam-to-kuwait-city' },
                            { from: 'Riyadh', slug: '/taxi-from-riyadh-to-kuwait-city' },
                            { from: 'Al Khobar', slug: '/taxi-from-khobar-to-kuwait-city' },
                            { from: 'Jubail', slug: '/taxi-from-jubail-to-kuwait-city' },
                        ].map((route) => (
                            <Link key={route.slug} href={route.slug} className="bg-white p-6 border border-surface-200 rounded-2xl hover:shadow-xl hover:border-gold-300 transition-all flex items-center justify-between group">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-surface-50 flex items-center justify-center group-hover:bg-gold-50 transition-colors">
                                        <MapPin className="w-5 h-5 text-primary-900 group-hover:text-gold-600 transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-surface-500 font-bold uppercase tracking-wider mb-0.5">From {route.from}</p>
                                        <p className="font-display font-bold text-lg text-primary-900">To Kuwait City</p>
                                    </div>
                                </div>
                                <ChevronRight className="w-5 h-5 text-surface-300 group-hover:text-gold-600 transition-colors" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Kuwait Airport Service ─────────────────────────── */}
            <section className="section-padding bg-white relative">
                <div className="container-custom mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="font-display text-4xl lg:text-5xl text-primary-900 mb-6 font-bold tracking-tight">
                                Kuwait International <br/><span className="bg-gradient-to-r from-gold-600 to-gold-400 bg-clip-text text-transparent">Airport (KWI) Meet & Greet</span>
                            </h2>
                            <p className="text-surface-600 mb-8 text-lg font-light leading-relaxed">
                                Avoid the hassle of waiting in queues upon landing. Our meet-and-greet service ensures your professional chauffeur is waiting for you at the KWI arrivals hall with a name board. We monitor flight times closely, ensuring we are there right on time.
                            </p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-surface-100 flex items-center justify-center text-primary-900 border border-surface-200 shadow-sm"><Check className="w-4 h-4" /></div> 
                                    <span className="font-bold text-surface-800">Free Flight Tracking</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-surface-100 flex items-center justify-center text-primary-900 border border-surface-200 shadow-sm"><Check className="w-4 h-4" /></div> 
                                    <span className="font-bold text-surface-800">60 Minutes Free Waiting Time</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-surface-100 flex items-center justify-center text-primary-900 border border-surface-200 shadow-sm"><Check className="w-4 h-4" /></div> 
                                    <span className="font-bold text-surface-800">White-Glove Door-to-Door</span>
                                </li>
                            </ul>
                            <Link href="/airport/kuwait-airport-taxi" className="btn-primary inline-flex items-center gap-3 !py-4 px-8 uppercase tracking-widest text-xs shadow-xl">
                                <Plane className="w-4 h-4 text-gold-400" /> Book Airport Transfer
                            </Link>
                        </div>
                        <div className="order-1 md:order-2 relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/20 to-transparent blur-3xl rounded-full transform rotate-12 -z-10"></div>
                            <img src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=800" alt="Kuwait VIP Airport Transfer" className="rounded-3xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover border-4 border-white" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-surface-50 py-20 border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <RouteFinder />
                    <TravelCalculator />
                </div>
            </section>

            {/* Authority & Trust */}
            <AuthorityTrust section3={false} section5={false} />

            {/* CTA Section */}
            <section className="section-padding bg-primary-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold-500/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-700/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
                </div>
                <div className="container-custom mx-auto text-center relative z-10">
                    <h2 className="font-display text-4xl lg:text-5xl mb-6 font-bold text-white tracking-tight">Explore Kuwait with Elegance</h2>
                    <p className="text-surface-300 text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                        Whether you are traveling for business to Kuwait City or planning a weekend road trip to Al Khobar, our VIP chauffeurs are at your service.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <Link href="#booking-widget" className="inline-flex items-center justify-center px-10 py-5 bg-gold-500 text-white hover:bg-gold-600 font-bold uppercase tracking-widest text-xs rounded-xl transition-all shadow-gold hover:scale-105">
                            Reserve a Chauffeur
                        </Link>
                        <a href="https://wa.me/966569487569" target="_blank" className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-surface-600 text-white font-bold uppercase tracking-widest text-xs rounded-xl transition-all hover:border-gold-500 hover:text-gold-400">
                            💬 Connect on WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
