import Link from 'next/link';
import { Shield, Clock, Globe, Star, CheckCircle, Car, Users, MapPin, ChevronRight, Plane, Hotel, Building2, Globe2, Briefcase, CarFront, Heart, Crown, MessageCircle } from 'lucide-react';
import RouteCard from '@/components/RouteCard';
import FAQ from '@/components/FAQ';
import HeroSearch from '@/components/HeroSearch';
import NewsletterForm from '@/components/NewsletterForm';
import AirportGuidesCarousel from '@/components/AirportGuidesCarousel';
import { popularRoutes, generalFAQ, gccCountries, services } from '@/lib/data';

const serviceIconMap: Record<string, React.ReactNode> = {
    'airport': <Plane className="w-10 h-10 text-primary-600/70" strokeWidth={1.5} />,
    'hotel': <Hotel className="w-10 h-10 text-primary-600/70" strokeWidth={1.5} />,
    'city-to-city': <Building2 className="w-10 h-10 text-primary-600/70" strokeWidth={1.5} />,
    'cross-border': <Globe2 className="w-10 h-10 text-primary-600/70" strokeWidth={1.5} />,
    'corporate': <Briefcase className="w-10 h-10 text-primary-600/70" strokeWidth={1.5} />,
    'events': <Heart className="w-10 h-10 text-primary-600/70" strokeWidth={1.5} />,
    'vip-chauffeur': <Crown className="w-10 h-10 text-primary-600/70" strokeWidth={1.5} />,
};

const heroFeatures = [
    { icon: <Plane className="w-5 h-5" />, title: 'Airport Transfers', desc: 'Seamless pickups & drop-offs' },
    { icon: <Car className="w-5 h-5" />, title: 'Vetted Drivers', desc: 'Professional & licensed' },
    { icon: <Shield className="w-5 h-5" />, title: 'Fully Insured', desc: 'Safe, secure travel' },
    { icon: <Clock className="w-5 h-5" />, title: '24/7 Support', desc: 'Always here to help' },
];

const destinations = [
    { name: 'Dubai', country: 'UAE', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600&h=400' },
    { name: 'Riyadh', country: 'Saudi Arabia', img: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&q=80&w=600&h=400' },
    { name: 'Doha', country: 'Qatar', img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=600&h=400' },
    { name: 'Abu Dhabi', country: 'UAE', img: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&q=80&w=600&h=400' },
    { name: 'Kuwait City', country: 'Kuwait', img: 'https://images.unsplash.com/photo-1571025046-78888bf4aed7?auto=format&fit=crop&q=80&w=600&h=400' },
    { name: 'Jeddah', country: 'Saudi Arabia', img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=600&h=400' },
];

const whyChooseUs = [
    {
        icon: <Users className="w-7 h-7 text-primary-600" />,
        title: 'English-speaking drivers',
        desc: 'Our professional chauffeurs speak English and are trained to handle airport pickups, border crossings, and VIP travel.',
        img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
        icon: <Car className="w-7 h-7 text-primary-600" />,
        title: 'Comfortable vehicles',
        desc: 'From executive sedans to 7-seat SUVs, every vehicle is modern, clean, and air-conditioned.',
    },
    {
        icon: <MapPin className="w-7 h-7 text-primary-600" />,
        title: 'Door-to-door comfort',
        desc: 'We pick you up from your hotel, home or office and deliver you right to your destination.',
    },
    {
        icon: <Globe className="w-7 h-7 text-primary-600" />,
        title: 'Cross-border journeys',
        desc: 'Specialists in GCC cross-border travel — Saudi, UAE, Qatar, Kuwait, Bahrain, Oman.',
    },
];

const stats = [
    { value: '50,000+', label: 'Trips Completed' },
    { value: '4.9★', label: 'Average Rating' },
    { value: '10+', label: 'GCC Countries' },
    { value: '24/7', label: 'Availability' },
];

const testimonials = [
    {
        name: 'Ahmed Al-Rashid',
        location: 'Riyadh, Saudi Arabia',
        rating: 5,
        text: 'Excellent service from Dubai to Abu Dhabi. Driver was punctual, professional, and the car was spotless. Will use again!',
    },
    {
        name: 'Sarah Thompson',
        location: 'London, UK',
        rating: 5,
        text: 'Booked for our Umrah trip — Jeddah airport to Makkah. Perfect service, driver handled everything smoothly. Highly recommended.',
    },
    {
        name: 'Mohammed Al-Kuwari',
        location: 'Doha, Qatar',
        rating: 5,
        text: 'Used for a cross-border trip Qatar to Dammam. The driver knew all the border procedures and made it stress-free.',
    },
];

const pressLogos = [
    { name: 'Forbes', text: 'FORBES' },
    { name: 'CNN Travel', text: 'CNN' },
    { name: 'Bloomberg', text: 'Bloomberg' },
    { name: 'Business Insider', text: 'Business Insider' },
    { name: 'Yahoo Finance', text: 'Yahoo Finance' },
];

export default function HomePage() {
    return (
        <>
            {/* ─── HERO (full-bleed photo) ──────────────────────────────── */}
            <section className="relative bg-surface-900 pt-20">
                <div className="relative h-[560px] sm:h-[620px] lg:h-[680px] w-full overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1600"
                        alt="Passenger enjoying a private chauffeur ride"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-900 via-surface-900/60 to-surface-900/10" />

                    <div className="relative h-full container-custom mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center animate-slide-up">
                        {/* Service type tabs */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            <button className="flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white rounded-full text-sm font-semibold shadow-sm">
                                <Plane className="w-4 h-4" /> Transfers
                            </button>
                            <button className="flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white rounded-full text-sm font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20">
                                <Clock className="w-4 h-4" /> Hourly Driver
                            </button>
                            <button className="flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white rounded-full text-sm font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20">
                                <Globe className="w-4 h-4" /> City Tours
                            </button>
                        </div>

                        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-5 tracking-tight max-w-3xl">
                            Airport transfers.<br />
                            Simpler than ever.
                        </h1>

                        <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-xl">
                            Pre-booked private car transfers, intercity rides and cross-border journeys across Saudi Arabia, UAE, Qatar, Kuwait and Bahrain.
                        </p>

                        {/* Stat badges */}
                        <div className="flex flex-wrap items-center gap-8">
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 shrink-0">
                                    <CheckCircle className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="font-display font-bold text-white text-xl leading-none">{stats[0].value}</p>
                                    <p className="text-white/70 text-xs mt-1">Trips completed</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 shrink-0">
                                    <Globe className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="font-display font-bold text-white text-xl leading-none">{stats[2].value}</p>
                                    <p className="text-white/70 text-xs mt-1">Countries served</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search form — floats over the bottom edge of the hero photo */}
                <div className="relative z-20 container-custom mx-auto px-4 sm:px-6 lg:px-8 -mt-8 lg:-mt-10">
                    <HeroSearch />

                    {/* Trust badges */}
                    <div className="flex flex-wrap items-center justify-center gap-6 mt-6 pb-8">
                        <div className="flex items-center gap-2">
                            <div className="flex text-yellow-400 text-sm">★★★★★</div>
                            <span className="text-sm font-semibold text-surface-100">TripAdvisor</span>
                            <span className="text-xs text-surface-400">5,000+ reviews</span>
                        </div>
                        <div className="w-px h-4 bg-surface-700" />
                        <div className="flex items-center gap-2">
                            <div className="flex text-green-500 text-sm">★★★★★</div>
                            <span className="text-sm font-semibold text-surface-100">Trustpilot</span>
                            <span className="text-xs text-surface-400">Excellent</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── FEATURES STRIP ───────────────────────────────────────── */}
            <section className="bg-surface-50 border-y border-surface-200">
                <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                        {heroFeatures.map((f, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 shrink-0">
                                    {f.icon}
                                </div>
                                <div>
                                    <p className="font-semibold text-surface-900 text-sm">{f.title}</p>
                                    <p className="text-xs text-surface-500">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── OUR SERVICES ─────────────────────────────────────────── */}
            <section className="bg-white py-16 lg:py-20">
                <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-10">
                        <h2 className="font-display text-3xl lg:text-4xl font-bold text-surface-900 mb-2">
                            Our services
                        </h2>
                        <p className="text-surface-500">Everything you need to move around the GCC, covered</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                        {services.slice(0, 6).map((service) => (
                            <Link
                                key={service.id}
                                href={service.href}
                                className="group flex items-center justify-between gap-4 bg-surface-50 hover:bg-primary-50/30 rounded-2xl p-6 border border-surface-200 hover:border-primary-200 transition-all duration-200"
                            >
                                <div>
                                    <h3 className="font-display font-bold text-surface-900 text-lg mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-surface-500 text-sm leading-relaxed mb-4 max-w-xs">
                                        {service.description}
                                    </p>
                                    <span className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-semibold text-surface-900 border border-surface-200 group-hover:border-primary-300 group-hover:text-primary-600 transition-colors">
                                        Learn more
                                    </span>
                                </div>
                                <div className="shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    {serviceIconMap[service.id] || <CarFront className="w-10 h-10 text-primary-600/70" strokeWidth={1.5} />}
                                </div>
                            </Link>
                        ))}

                        {/* WhatsApp promo tile */}
                        <a
                            href="https://wa.me/966569487569"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between gap-4 bg-primary-600 hover:bg-primary-700 rounded-2xl p-6 transition-colors duration-200"
                        >
                            <div>
                                <span className="inline-block px-3 py-1 bg-white/15 text-white text-xs font-semibold rounded-full mb-3">
                                    Instant booking
                                </span>
                                <h3 className="font-display font-bold text-white text-lg mb-2">
                                    Book anywhere.<br />WhatsApp makes it easy
                                </h3>
                                <span className="inline-flex items-center gap-1 text-white text-sm font-semibold">
                                    Chat now <ChevronRight className="w-4 h-4" />
                                </span>
                            </div>
                            <div className="shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <MessageCircle className="w-10 h-10 text-white/80" strokeWidth={1.5} />
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* ─── STATS ────────────────────────────────────────────────── */}
            <section className="bg-white py-16">
                <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex items-center justify-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                    </div>
                    <h2 className="font-display text-3xl lg:text-4xl font-bold text-surface-900 mb-2">
                        Travelers love riding with Airport Travel Taxis
                    </h2>
                    <p className="text-surface-500 mb-12 max-w-lg mx-auto">
                        From airport pickups to cross-border journeys, thousands trust us every month.
                    </p>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {stats.map((s) => (
                            <div key={s.label} className="p-6 bg-surface-50 rounded-2xl border border-surface-200">
                                <p className="font-display text-3xl font-bold text-surface-900 mb-1">{s.value}</p>
                                <p className="text-sm text-surface-500 font-medium">{s.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Why choose us cards */}
                    <div className="grid lg:grid-cols-4 gap-6">
                        {/* Large card */}
                        <div className="lg:col-span-2 relative rounded-2xl overflow-hidden h-auto sm:h-80 lg:h-[380px] bg-surface-900 group flex flex-row">
                            {/* Photo panel — desktop/tablet only, narrow enough to frame the face safely */}
                            <div className="relative hidden sm:block sm:w-[36%] shrink-0 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600"
                                    alt="Professional chauffeur"
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface-900/60" />
                                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm rounded-full pl-1.5 pr-3 py-1 shadow-lg">
                                    <div className="w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center shrink-0">
                                        <CheckCircle className="w-3.5 h-3.5 text-white" />
                                    </div>
                                    <span className="text-[11px] font-bold text-surface-900 tracking-wide">ID-VERIFIED</span>
                                </div>
                            </div>

                            {/* Content panel */}
                            <div className="relative flex-1 p-6 lg:p-8 flex flex-col justify-between text-left">
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.3),transparent_65%)] pointer-events-none" />
                                <div className="relative flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                                    <span className="text-surface-400 text-xs font-medium ml-1.5">4.9 driver rating</span>
                                </div>
                                <div className="relative">
                                    <h3 className="text-white font-display font-bold text-2xl lg:text-3xl mb-3">English-speaking drivers</h3>
                                    <p className="text-surface-300 text-sm leading-relaxed mb-5 max-w-sm">
                                        Every chauffeur is background-checked, licensed, and trained for airport pickups, border crossings, and VIP travel.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {['English', 'Arabic', 'Urdu'].map((lang) => (
                                            <span key={lang} className="px-3 py-1 bg-white/10 border border-white/15 rounded-full text-xs font-medium text-white">
                                                {lang}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3 small cards */}
                        {whyChooseUs.slice(1).map((item, i) => (
                            <div key={i} className="bg-surface-50 rounded-2xl p-6 border border-surface-200 text-left hover:border-primary-200 hover:bg-primary-50/30 transition-all duration-200">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4 border border-surface-200">
                                    {item.icon}
                                </div>
                                <h3 className="font-display font-semibold text-surface-900 mb-2">{item.title}</h3>
                                <p className="text-surface-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── EXPLORE DESTINATIONS ─────────────────────────────────── */}
            <section className="bg-surface-50 py-16 lg:py-20">
                <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
                        <div>
                            <h2 className="font-display text-3xl lg:text-4xl font-bold text-surface-900 mb-2">
                                Explore GCC destinations
                            </h2>
                            <p className="text-surface-500">Top cities we serve across the Gulf region</p>
                        </div>
                        <Link href="/booking" className="text-primary-600 font-semibold text-sm hover:text-primary-700 flex items-center gap-1 shrink-0">
                            View all <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {destinations.map((dest) => (
                            <Link key={dest.name} href="/booking" className="group block">
                                <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                                    <img
                                        src={dest.img}
                                        alt={dest.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-0 left-0 p-3">
                                        <p className="text-white font-bold text-sm">{dest.name}</p>
                                        <p className="text-white/70 text-xs">{dest.country}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── AIRPORT TRANSPORTATION GUIDES ───────────────────────────── */}
            <section className="bg-white py-16 lg:py-20">
                <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-display text-3xl lg:text-4xl font-bold text-surface-900 mb-2 text-center">
                        Airport transportation guides
                    </h2>
                    <p className="text-surface-500 text-center mb-10">
                        Everything you need to know before you land
                    </p>
                    <AirportGuidesCarousel />
                </div>
            </section>

            {/* ─── POPULAR ROUTES ───────────────────────────────────────── */}
            <section className="bg-white py-16 lg:py-20">
                <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
                        <div>
                            <h2 className="font-display text-3xl lg:text-4xl font-bold text-surface-900 mb-2">
                                Most popular routes
                            </h2>
                            <p className="text-surface-500">Our most booked inter-city and cross-border transfers</p>
                        </div>
                        <Link href="/booking" className="text-primary-600 font-semibold text-sm hover:text-primary-700 flex items-center gap-1 shrink-0">
                            All routes <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {popularRoutes.slice(0, 6).map((route) => (
                            <RouteCard key={route.slug} {...route} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── DARK CTA SECTION ─────────────────────────────────────── */}
            <section className="bg-surface-900 py-20 lg:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15),transparent_70%)]" />
                <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-600/20 text-primary-400 rounded-full px-4 py-1.5 text-sm font-semibold mb-6 border border-primary-600/30">
                                <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
                                Available 24/7 across GCC
                            </div>
                            <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                Hire a private driver<br />
                                <span className="text-primary-400">by the hour.</span>
                            </h2>
                            <p className="text-surface-400 text-lg mb-8 leading-relaxed max-w-lg">
                                Need a driver for the day? Book by the hour for business meetings, shopping, sightseeing or any errand across the city.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/booking" className="btn-primary text-sm shadow-blue">
                                    Book Now
                                </Link>
                                <a
                                    href="https://wa.me/966569487569"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-200 text-sm border border-white/20"
                                >
                                    💬 WhatsApp Us
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800"
                                alt="Luxury car hire"
                                className="rounded-3xl shadow-2xl w-full h-80 lg:h-96 object-cover object-center"
                            />
                            <div className="absolute -top-4 -right-4 bg-primary-600 text-white rounded-2xl p-4 shadow-xl">
                                <p className="font-bold text-2xl">24/7</p>
                                <p className="text-xs text-primary-200">Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── COUNTRIES SERVED ─────────────────────────────────────── */}
            <section className="bg-white py-12 border-b border-surface-100">
                <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm font-medium text-surface-500 mb-6 uppercase tracking-wider">
                        Serving all GCC countries
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
                        {gccCountries.map((c) => (
                            <div key={c.code} className="flex items-center gap-2 px-4 py-2 bg-surface-50 rounded-full border border-surface-200 hover:border-primary-200 transition-colors">
                                <img src={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`} width={20} height={14} alt={c.name} className="rounded-sm" />
                                <span className="text-sm font-medium text-surface-700">{c.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── PRESS LOGOS ──────────────────────────────────────────── */}
            <section className="bg-surface-50 py-12">
                <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm font-medium text-surface-400 mb-8 uppercase tracking-wider">
                        As featured in
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
                        {pressLogos.map((p) => (
                            <span key={p.name} className="text-xl lg:text-2xl font-bold text-surface-300 hover:text-surface-500 transition-colors cursor-default tracking-tight">
                                {p.text}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── TESTIMONIALS ─────────────────────────────────────────── */}
            <section className="bg-white py-16 lg:py-20">
                <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl lg:text-4xl font-bold text-surface-900 mb-3">
                            2,000,000+ travelers, moments they'll never forget
                        </h2>
                        <div className="flex items-center justify-center gap-2">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400" />)}
                            </div>
                            <span className="text-surface-600 text-sm font-medium">Rated 4.9 / 5 by our customers</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <div key={i} className="bg-surface-50 rounded-2xl p-6 border border-surface-200">
                                <div className="flex text-yellow-400 mb-4">
                                    {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400" />)}
                                </div>
                                <p className="text-surface-700 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                        {t.name[0]}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-surface-900 text-sm">{t.name}</p>
                                        <p className="text-xs text-surface-500">{t.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── APP/WHATSAPP CTA ─────────────────────────────────────── */}
            <section className="bg-primary-600 py-16 lg:py-20">
                <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
                        Book instantly via WhatsApp
                    </h2>
                    <p className="text-primary-100 mb-8 max-w-lg mx-auto text-lg">
                        Chat with us for instant quotes and bookings. Available 24/7 in English and Arabic.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/966569487569"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-all duration-200 shadow-xl text-sm"
                        >
                            💬 WhatsApp Us Now
                        </a>
                        <Link
                            href="/booking"
                            className="inline-flex items-center justify-center gap-2 bg-primary-700 text-white font-semibold px-8 py-4 rounded-xl hover:bg-primary-800 transition-all duration-200 border border-primary-500 text-sm"
                        >
                            Book Online
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── FAQ ──────────────────────────────────────────────────── */}
            <section className="bg-white py-16 lg:py-20">
                <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-display text-3xl lg:text-4xl font-bold text-surface-900 mb-2 text-center">
                            Frequently asked questions
                        </h2>
                        <p className="text-surface-500 text-center mb-10">Everything you need to know about our service</p>
                        <FAQ items={generalFAQ} />
                    </div>
                </div>
            </section>

            {/* ─── Newsletter strip ─────────────────────────────────────── */}
            <section className="bg-surface-50 border-t border-surface-200 py-12">
                <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="font-display text-xl font-bold text-surface-900 mb-2">Be the first to discover more</h3>
                    <p className="text-surface-500 text-sm mb-6">Get travel tips and exclusive offers from Airport Travel Taxis</p>
                    <div className="max-w-md mx-auto">
                        <NewsletterForm />
                    </div>
                </div>
            </section>

            {/* ─── JSON-LD ──────────────────────────────────────────────── */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            '@context': 'https://schema.org',
                            '@type': 'LocalBusiness',
                            '@id': 'https://airporttraveltaxis.com/#organization',
                            name: 'Airport Travel Taxis',
                            description: 'Pre-booked airport taxi and transfer services across Saudi Arabia, UAE, Kuwait, Qatar, and Bahrain.',
                            url: 'https://airporttraveltaxis.com',
                            telephone: '+966569487569',
                            email: 'info@airporttraveltaxis.com',
                            areaServed: gccCountries.map((c) => ({ '@type': 'Country', name: c.name })),
                            serviceType: 'Airport Taxi Service',
                            priceRange: 'On Request',
                            openingHoursSpecification: {
                                '@type': 'OpeningHoursSpecification',
                                dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
                                opens: '00:00',
                                closes: '23:59',
                            },
                        },
                    ]),
                }}
            />
        </>
    );
}
