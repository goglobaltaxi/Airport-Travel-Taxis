import BookingWidget from '@/components/BookingWidget';
import ServiceCard from '@/components/ServiceCard';
import FleetCard from '@/components/FleetCard';
import RouteCard from '@/components/RouteCard';
import TestimonialSlider from '@/components/TestimonialSlider';
import FAQ from '@/components/FAQ';
import Link from 'next/link';
import { services, vehicles, popularRoutes, stats, generalFAQ, gccCountries } from '@/lib/data';
import { Shield, Clock, Globe } from 'lucide-react';
import AuthorityTrust from '@/components/AuthorityTrust';
import RouteFinder from '@/components/RouteFinder';
import TravelCalculator from '@/components/TravelCalculator';
import StructuredInformationBlocks from '@/components/StructuredInformationBlocks';

export default function HomePage() {
    return (
        <>
            {/* ─── Hero Section ─────────────────────────────────────────── */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-surface-50">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-surface-50 via-surface-50/95 to-transparent z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2070"
                        alt="Professional Chauffeur Service"
                        className="w-full h-full object-cover object-right opacity-80"
                    />
                </div>

                <div className="container-custom mx-auto relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                        {/* Left - Text (7 cols) */}
                        <div className="lg:col-span-7 animate-slide-up">
                            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-surface-200 shadow-sm rounded-full px-4 py-1.5 mb-8">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-sm text-surface-700 font-medium">Available 24/7 Across Gulf region</span>
                            </div>

                            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-surface-900 leading-[1.1] mb-6 font-medium tracking-tight">
                                Professional <br />
                                <span className="text-gold-600 italic font-semibold">Chauffeur Service.</span>
                            </h1>

                            <p className="text-lg text-surface-600 leading-relaxed mb-8 max-w-xl">
                                The leading <strong className="text-surface-900 font-bold">chauffeur service in Riyadh</strong>, Jeddah, and across the Gulf. Experience seamless comfortable transfers, city-to-city rides, and professional <strong className="text-surface-900 font-bold">private chauffeur service Dubai</strong>.
                            </p>

                            <div className="mb-10 p-4 bg-white/60 backdrop-blur-md rounded-xl border border-primary-200/50 flex gap-3 text-left max-w-xl">
                                <div className="text-primary-600 shrink-0 mt-0.5">
                                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center font-bold text-sm shadow-sm">i</div>
                                </div>
                                <p className="text-sm text-surface-800 leading-relaxed">
                                    <strong>Service Scope:</strong> This service focuses on pre-booked transportation including airport transfers, intercity travel, cross-border journeys, and VIP Umrah transfers. Local street taxi hailing and short-distance city rides are not part of the service.
                                </p>
                            </div>

                            {/* Trust Features */}
                            <div className="flex flex-wrap items-center gap-6 mb-12">
                                {[
                                    { icon: <Shield className="w-5 h-5 text-gold-600" />, text: 'Fully Insured' },
                                    { icon: <Clock className="w-5 h-5 text-gold-600" />, text: 'On-time Guarantee' },
                                    { icon: <Globe className="w-5 h-5 text-gold-600" />, text: 'Saudi Arabia, UAE, Kuwait, Qatar, and Bahrain' },
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        {feature.icon}
                                        <span className="text-surface-900 font-medium text-sm">{feature.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Stats Grid inside Hero */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-4 border-b border-surface-200">
                                {stats.map((stat) => (
                                    <div key={stat.label}>
                                        <p className="font-display text-3xl font-bold text-surface-900">{stat.value}</p>
                                        <p className="text-xs text-surface-500 font-medium uppercase tracking-wider">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right - Booking Widget (5 cols) */}
                        <div className="lg:col-span-5 relative mt-8 lg:mt-0 animate-slide-in-right">
                            <div className="absolute -inset-4 bg-primary-600/5 blur-2xl rounded-full" />
                            <div className="relative shadow-2xl shadow-surface-300/50 rounded-2xl bg-white border border-surface-200/50">
                                <BookingWidget compact />
                            </div>
                        </div>
                    </div>

                    {/* Route Finder Integration */}
                    <div className="mt-16 lg:mt-24">
                        <RouteFinder />
                    </div>

                    {/* Travel Calculator Integration */}
                    <div className="mt-8">
                        <TravelCalculator />
                    </div>
                </div>
            </section>

            {/* Structured Information Blocks */}
            <StructuredInformationBlocks 
                startLocation="Various GCC Locations"
                endLocation="Regional Destinations"
                type="Chauffeur & Taxi Service"
                travelTime="Variable (Inter-city & Cross-border)"
                pickup="Home, Office, or Airport"
                dropoff="Direct Door-to-Door"
                relatedLinks={[
                    { name: 'GCC Travel Guide', url: '/gcc-travel-road-travel' },
                    { name: 'Airport Transfers', url: '/gcc-travel-airport-transfers' },
                    { name: 'Cross-Border Taxi', url: '/gcc-travel-cross-border-taxi' }
                ]}
            />

            {/* ─── Services Section ─────────────────────────────────────── */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl lg:text-4xl text-surface-900 mb-4">
                            Our <span className="text-primary-600">Services</span>
                        </h2>
                        <p className="text-surface-600 max-w-2xl mx-auto">
                            Comprehensive transportation solutions across all Saudi Arabia, UAE, Kuwait, Qatar, and Bahrain. From airport pickups to corporate travel.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Popular Routes ───────────────────────────────────────── */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl lg:text-4xl text-surface-900 mb-4">
                            Popular <span className="text-primary-600">Routes</span>
                        </h2>
                        <p className="text-surface-600 max-w-2xl mx-auto">
                            Our most booked inter-city and cross-border routes across the Gulf region.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {popularRoutes.map((route) => (
                            <RouteCard key={route.slug} {...route} />
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Link href="/routes/dubai-to-abu-dhabi-taxi" className="btn-secondary inline-block">
                            View All Routes
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── Fleet Preview ────────────────────────────────────────── */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl lg:text-4xl text-surface-900 mb-4">
                            Our <span className="text-primary-600">Fleet</span>
                        </h2>
                        <p className="text-surface-600 max-w-2xl mx-auto">
                            From business sedans to high-standard SUVs, choose the perfect vehicle for your journey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {vehicles.slice(0, 3).map((vehicle) => (
                            <FleetCard key={vehicle.id} vehicle={vehicle} />
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Link href="/fleet" className="btn-primary inline-block">
                            View Full Fleet
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── City Specific Expertise ────────────────────────────────────── */}
            <section className="section-padding bg-white overflow-hidden">
                <div className="container-custom mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-display text-3xl lg:text-4xl text-surface-900 mb-6">
                                Professional <span className="text-primary-600">Chauffeur Service</span> across Major Cities
                            </h2>
                            <p className="text-surface-600 mb-8 leading-relaxed">
                                We specialize in providing a reliable <strong className="text-surface-900 font-bold">chauffeur service in Riyadh</strong>, professional <strong className="text-surface-900 font-bold">chauffeur service Jeddah</strong>, and high-standard <strong className="text-surface-900 font-bold">private chauffeur service Dubai</strong>. Whether you need a corporate ride in Dammam or a <strong className="text-surface-900 font-bold">Mecca chauffeur service</strong> for pilgrimage, our vetted drivers ensure comfort and safety.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { city: 'Riyadh', keyword: 'Reliable Chauffeur Service Riyadh', desc: 'Comfortable airport and city transfers.' },
                                    { city: 'Dubai', keyword: 'Private Chauffeur Service Dubai', desc: 'High-standard travel in the heart of UAE.' },
                                    { city: 'Jeddah', keyword: 'Chauffeur Service Jeddah', desc: 'Seamless rides for business & leisure.' },
                                    { city: 'Mecca & Madina', keyword: 'Holy City Chauffeur Service', desc: 'Dedicated service for Umrah & Hajj.' },
                                ].map((item) => (
                                    <div key={item.city} className="p-5 border border-surface-200 rounded-xl hover:bg-surface-50 transition-colors">
                                        <h4 className="font-bold text-surface-900 mb-1">{item.city}</h4>
                                        <p className="text-primary-600 text-sm font-semibold mb-2">{item.keyword}</p>
                                        <p className="text-surface-500 text-xs">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary-600/10 blur-3xl rounded-full" />
                            <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800" alt="Professional Chauffeur Service" className="relative rounded-3xl shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── The Human Touch (Our Identity) ────────────────────────────── */}

            <section className="section-padding bg-white border-y border-surface-200">
                <div className="container-custom mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-5 gap-10 items-center">
                        <div className="md:col-span-2">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" alt="Airport Travel Taxis Founder" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
                        </div>
                        <div className="md:col-span-3">
                            <h2 className="font-display text-3xl lg:text-4xl text-surface-900 mb-6">
                                More Than Just a Ride. <br /><span className="text-primary-600">A Promise of Reliability.</span>
                            </h2>
                            <p className="text-surface-600 leading-relaxed mb-6">
                                &quot;When I started Airport Travel Taxis, I noticed a huge gap in the market. You had countless taxi apps and regional services, but coordinating seamless travel across borders — from Dubai to Riyadh, or Bahrain to Dammam — was incredibly stressful. The industry felt cold and strictly transactional.&quot;
                            </p>
                            <p className="text-surface-600 leading-relaxed mb-8">
                                &quot;We built this platform to bring the <strong>human element</strong> back into travel. Our chauffeurs do more than drive; they handle the border paperwork, they track your delayed flights, and they ensure that your family or executives arrive safely without the usual travel anxieties. We didn&apos;t just build a technology company; we built a hospitality service on wheels.&quot;
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-display text-xl">
                                    A
                                </div>
                                <div>
                                    <p className="font-semibold text-surface-900">Abdullah Al-Rashid</p>
                                    <p className="text-sm text-surface-500">Founder & CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Authority & Trust Sections ────────────────────────────── */}
            <AuthorityTrust section5={false} />

            {/* ─── CTA Banner ───────────────────────────────────────────── */}
            <section className="section-padding relative overflow-hidden bg-primary-600">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent_60%)]" />
                <div className="container-custom mx-auto relative z-10 text-center">
                    <h2 className="font-display text-3xl lg:text-4xl text-white mb-4">
                        Ready to Get Your Quote?
                    </h2>
                    <p className="text-primary-100 max-w-xl mx-auto mb-8">
                        Get an instant quote and book your scheduled taxi service across the region. Available 24/7.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking" className="btn-primary bg-white !text-primary-600 hover:!bg-surface-100 shadow-lg">Get Quote</Link>
                        <a
                            href="https://wa.me/923057262461"
                            target="_blank"
                            className="btn-secondary !border-white/40 !text-white hover:!bg-white/10"
                        >
                            💬 WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>

            {/* ─── Testimonials ─────────────────────────────────────────── */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl lg:text-4xl text-surface-900 mb-4">
                            What Our <span className="text-primary-600">Customers Say</span>
                        </h2>
                        <p className="text-surface-600">Trusted by thousands of travelers across the region.</p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <TestimonialSlider />
                    </div>
                </div>
            </section>

            {/* ─── FAQ ──────────────────────────────────────────────────── */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <FAQ items={generalFAQ} />
                </div>
            </section>

            {/* ─── Schema.org JSON-LD ───────────────────────────────────── */}
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
                            telephone: '+923057262461',
                            email: 'info@airporttraveltaxis.com',
                            areaServed: gccCountries.map((c) => ({
                                '@type': 'Country',
                                name: c.name,
                            })),
                            serviceType: 'Airport Taxi Service',
                            priceRange: 'On Request',
                            openingHoursSpecification: {
                                '@type': 'OpeningHoursSpecification',
                                dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
                                opens: '00:00',
                                closes: '23:59',
                            },
                        },
                        {
                            '@context': 'https://schema.org',
                            '@type': 'WebSite',
                            name: 'Airport Travel Taxis',
                            url: 'https://airporttraveltaxis.com',
                            potentialAction: {
                                '@type': 'SearchAction',
                                target: 'https://airporttraveltaxis.com/routes/{search_term_string}',
                                'query-input': 'required name=search_term_string',
                            },
                        },
                    ]),
                }}
            />
        </>
    );
}
