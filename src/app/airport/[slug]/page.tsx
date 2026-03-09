import { Metadata } from 'next';
import Link from 'next/link';
import { airports, routes } from '@/lib/data';
import BookingWidget from '@/components/BookingWidget';
import FAQ from '@/components/FAQ';
import { notFound } from 'next/navigation';
import AuthorityTrust from '@/components/AuthorityTrust';
import { areaTransferPages } from '@/lib/areaTransferData';
import StructuredInformationBlocks from '@/components/StructuredInformationBlocks';
import RouteFinder from '@/components/RouteFinder';
import DynamicRouteSuggestions from '@/components/DynamicRouteSuggestions';
import { ChevronRight, ShieldCheck, Clock, Star, MapPin } from 'lucide-react';

export async function generateStaticParams() {
    return airports.map((airport) => ({ slug: airport.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const airport = airports.find((a) => a.slug === params.slug);
    if (!airport) return {};
    
    // Character count check/adjustment for SEO (Title: ~50-60, Meta: ~140-160)
    const pageTitle = `${airport.city} Airport Taxi & Transfer | Professional Service`;
    const pageDescription = `Book your pre-booked taxi transfer from ${airport.city} Airport (${airport.code}). Reliable, scheduled 24/7 service with professional chauffeurs and a high-standard fleet.`;
    
    return {
        title: pageTitle,
        description: pageDescription,
        openGraph: {
            title: pageTitle,
            description: pageDescription,
            url: `https://airporttraveltaxis.com/airport/${airport.slug}`,
        },
        alternates: {
            canonical: `https://airporttraveltaxis.com/airport/${airport.slug}`,
        },
    };
}

export default function AirportPage({ params }: { params: { slug: string } }) {
    const airport = airports.find((a) => a.slug === params.slug);
    if (!airport) notFound();

    const airportFAQ = [
        { question: `How do I book a transfer from ${airport.name}?`, answer: `You can book through our website or by contacting our 24/7 team. Simply enter your flight details and destination, and we'll have a driver waiting.` },
        { question: `Is flight tracking included?`, answer: `Yes, we monitor all flights in real-time. If your flight is delayed, your driver's pickup time will be adjusted automatically.` },
        { question: `What if my flight arrives early or late?`, answer: `No worries! We track your flight and adjust accordingly. We offer free waiting time of up to 60 minutes for airport pickups.` },
        { question: `Can I book a return transfer?`, answer: `Absolutely! You can book both arrival and departure transfers at the same time to ensure a smooth journey.` },
    ];

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6">
                        <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-surface-900">{airport.city} Airport Transfer</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <span className="text-sm text-primary-700 font-medium">✈️ {airport.code} Airport</span>
                            </div>
                            <h1 className="font-display text-3xl lg:text-[42px] lg:leading-[48px] text-surface-900 mb-4">
                                {airport.city} <span className="text-primary-600">Airport Transfer</span>
                            </h1>
                            <p className="text-surface-600 text-lg leading-relaxed mb-6">{airport.longDescription}</p>

                             {/* Airport Transfer Essentials Block */}
                             <div className="bg-primary-50 rounded-xl p-5 mb-6 border border-primary-100">
                                 <h2 className="font-semibold text-primary-900 mb-3 flex items-center gap-2">
                                     <span className="bg-primary-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">⭐</span>
                                     Airport Transfer Essentials
                                 </h2>
                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                                     <div className="flex items-start gap-2">
                                         <ShieldCheck className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                                         <span className="text-sm text-surface-700">Flight Tracking Included</span>
                                     </div>
                                     <div className="flex items-start gap-2">
                                         <Clock className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                                         <span className="text-sm text-surface-700">60 Min Free Waiting</span>
                                     </div>
                                     <div className="flex items-start gap-2">
                                         <Star className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                                         <span className="text-sm text-surface-700">Meet & Greet Service</span>
                                     </div>
                                     <div className="flex items-start gap-2">
                                         <MapPin className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                                         <span className="text-sm text-surface-700">Door-to-Door Delivery</span>
                                     </div>
                                 </div>
                                 <a href="#booking-widget" className="w-full btn-primary !py-2.5 text-sm flex items-center justify-center gap-2 text-center">
                                     Book My Airport Transfer <ChevronRight className="w-4 h-4" />
                                 </a>
                             </div>
                        </div>

                        <div id="booking-widget">
                            <BookingWidget compact />
                        </div>
                    </div>
                </div>
            </section>

            {/* Structured Information Blocks */}
            <StructuredInformationBlocks 
                startLocation={`${airport.city} Airport`}
                endLocation="Regional Destination"
                type="Airport Transfer"
                travelTime="Variable"
                pickup={`${airport.name} Arrivals Hall`}
                dropoff="Hotel or Specific Address"
                relatedLinks={[
                    { name: `${airport.city} Taxi`, url: `/city/${airport.city.toLowerCase().replace(/ /g, '-')}` },
                    { name: 'GCC Travel Guide', url: '/gcc-travel-airport-transfers' }
                ]}
            />

            <section className="py-16 bg-white border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <div className="max-w-4xl">
                        <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-6 flex items-center gap-3">
                            <span className="p-2 bg-primary-100 rounded-lg text-primary-600">👋</span>
                            Meet and Greet Service
                        </h2>
                        <div className="prose prose-surface max-w-none">
                            <p className="text-surface-600 text-lg leading-relaxed">
                                {airport.meetAndGreet}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pickup Locations */}
            <section className="py-16 bg-surface-50 border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <div className="max-w-4xl">
                        <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-6 flex items-center gap-3">
                            <span className="p-2 bg-primary-100 rounded-lg text-primary-600">📍</span>
                            Pickup Locations
                        </h2>
                        <div className="prose prose-surface max-w-none">
                            <p className="text-surface-600 text-base leading-relaxed">
                                {airport.pickupLocations}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Neighborhoods Served */}
            <section className="py-16 bg-white border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-8">
                        Districts Served from <span className="text-primary-600">{airport.city} Airport</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {areaTransferPages
                            .filter(a => a.airportName.includes(airport.code) || a.city === airport.city)
                            .map((area) => (
                                <Link key={area.slug} href={`/taxi-from-${area.slug}`} className="group bg-surface-50 p-6 rounded-2xl border border-surface-200 hover:border-primary-300 transition-all shadow-sm">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-white rounded-lg text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors border border-surface-200">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-bold text-surface-900">{area.areaName}</h3>
                                    </div>
                                    <p className="text-sm text-surface-500 mb-4 line-clamp-2">Direct airport taxi to {area.areaName} district.</p>
                                    <span className="text-primary-600 text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                        View Route <ChevronRight className="w-3 h-3" />
                                    </span>
                                </Link>
                            ))}
                        {/* More destinations */}
                        <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100 flex flex-col justify-center text-center">
                            <p className="text-sm text-primary-900 font-bold mb-1">Global Coverage</p>
                            <p className="text-xs text-primary-700">All hotels and addresses in {airport.city} are covered by our 24/7 service.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vehicle Options */}
            <section className="py-16 bg-white border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-8 text-center text-balance">Professional Vehicle Options</h2>
                    <div className="glass-card p-8 bg-surface-50 border border-surface-200 rounded-3xl">
                        <p className="text-surface-600 text-lg leading-relaxed mb-10 text-center max-w-3xl mx-auto">
                            {airport.vehiclesOverview}
                        </p>
                        <div className="grid sm:grid-cols-3 gap-6 text-center">
                            <div className="p-6 bg-white rounded-2xl border border-surface-100 shadow-sm">
                                <h4 className="font-semibold text-primary-900 mb-2">Solo Travelers</h4>
                                <p className="text-xs text-surface-500 uppercase tracking-wider mb-2 font-medium">Professional Sedans</p>
                                <p className="text-sm text-surface-600">Mercedes S-Class, BMW, Genesis, Ford Taurus, Camry</p>
                            </div>
                            <div className="p-6 bg-white rounded-2xl border border-surface-100 shadow-sm">
                                <h4 className="font-semibold text-primary-900 mb-2">Family Travel</h4>
                                <p className="text-xs text-surface-500 uppercase tracking-wider mb-2 font-medium">Spacious SUVs</p>
                                <p className="text-sm text-surface-600">GMC, Cadillac Escalade, Hyundai Staria</p>
                            </div>
                            <div className="p-6 bg-white rounded-2xl border border-surface-100 shadow-sm">
                                <h4 className="font-semibold text-primary-900 mb-2">Group Transfers</h4>
                                <p className="text-xs text-surface-500 uppercase tracking-wider mb-2 font-medium">Vans & Group Vehicles</p>
                                <p className="text-sm text-surface-600">Mercedes Vito, Mercedes Sprinter, Hiace, Coaster, Executive Bus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Airport Transfer Routes */}
            <section className="section-padding bg-surface-100 border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-8">
                        Transfer Routes from <span className="text-primary-600">{airport.city} Airport</span>
                    </h2>
                    <p className="text-surface-600 text-lg leading-relaxed mb-8 max-w-4xl">
                        {airport.routesInfo}
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {airport.popularRoutes.map((route) => (
                            <div key={route.to} className="glass-card p-5 bg-white border border-surface-200 rounded-2xl">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-lg">✈️</span>
                                    <span className="text-sm text-surface-500">{airport.code}</span>
                                    <span className="text-surface-400">→</span>
                                    <span className="text-sm text-surface-900 font-medium">{route.to}</span>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <Link href="#booking-widget" className="text-primary-600 text-sm font-semibold hover:underline">Book Now</Link>
                                    <span className="text-sm text-surface-500">{route.duration}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Internal Links to related services */}
                    <div className="flex flex-wrap gap-x-6 gap-y-3 mt-12 border-t border-surface-200 pt-8">
                        <span className="text-surface-500 text-sm font-semibold w-full lg:w-auto">Popular Connections:</span>
                        <Link href={`/city/${airport.city.toLowerCase().replace(/ /g, '-')}`} className="text-primary-600 hover:text-primary-700 font-medium text-sm">{airport.city} Taxi Service</Link>
                        <Link href="/routes/dubai-to-abu-dhabi-taxi" className="text-primary-600 hover:text-primary-700 font-medium text-sm">Dubai to Abu Dhabi</Link>
                        <Link href="/routes/riyadh-to-doha-taxi" className="text-primary-600 hover:text-primary-700 font-medium text-sm">Riyadh to Doha</Link>
                        <Link href="/border/salwa-border-taxi" className="text-primary-600 hover:text-primary-700 font-medium text-sm">Salwa Border Crossing</Link>
                    </div>

                    {/* Dynamically Added Missing Routes */}
                    <div className="flex flex-wrap items-center gap-3 mt-4">
                        <span className="text-surface-500 text-sm font-semibold w-full lg:w-auto">Featured Airport Routes:</span>
                        {routes
                            .filter((r) => r.from === airport.city)
                            .slice(0, 5)
                            .map((r) => (
                                <Link key={`feat-${r.slug}`} href={`/routes/${r.slug}`} className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                                    {r.from} to {r.to} taxi
                                </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Route Finder Integration */}
            <section className="bg-surface-50 py-12 border-y border-surface-200">
                <div className="container-custom mx-auto">
                    <RouteFinder />
                </div>
            </section>

            {/* Related Routes */}
            <DynamicRouteSuggestions 
                currentSlug={airport.slug} 
                type="airport" 
                contextName={airport.city} 
            />

            {/* FAQ */}
            <section className="section-padding bg-white border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <FAQ items={airport.faq} title={`${airport.city} Airport Transfer FAQ`} />
                </div>
            </section>

            {/* Authority & Trust Sections */}
            <AuthorityTrust section3={false} />

             {/* Booking Bottom Section */}
             <section className="section-padding bg-primary-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-primary-400 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
                </div>
                
                <div className="container-custom mx-auto text-center relative z-10">
                    <h2 className="font-display text-3xl lg:text-4xl mb-6">Arrange Your Airport Transfer</h2>
                    <p className="text-primary-100 text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
                        {airport.bookingDetails}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="#booking-widget" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-900 font-bold rounded-xl transition-all hover:bg-primary-50">
                            Book Airport Pickup
                        </Link>
                        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary-400 text-white font-bold rounded-xl transition-all hover:border-white">
                            Corporate Inquiry
                        </Link>
                    </div>
                </div>
            </section>

            {/* Other Airports */}
            <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl text-surface-900 mb-6 text-center">Explore Other Airport Terminals</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {airports.filter((a) => a.slug !== airport.slug).slice(0, 9).map((a) => (
                            <Link key={a.slug} href={`/airport/${a.slug}`} className="glass-card-hover p-5 bg-white border border-surface-200 rounded-2xl flex items-center gap-4">
                                <span className="p-3 bg-surface-100 rounded-xl text-xl shrink-0">✈️</span>
                                <div>
                                    <p className="font-bold text-surface-900 leading-tight">{a.city} ({a.code})</p>
                                    <p className="text-xs text-surface-500 mt-1 uppercase tracking-wider font-medium">{a.country}</p>
                                </div>
                                <ChevronRight className="w-4 h-4 text-primary-600 ml-auto" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: `${airport.city} Airport Transfer Service`,
                        description: airport.description,
                        provider: { '@type': 'LocalBusiness', name: 'Airport Travel Taxis', url: 'https://airporttraveltaxis.com' },
                        areaServed: { '@type': 'City', name: airport.city },
                        serviceType: 'Airport Transfer',
                    }),
                }}
            />
        </div>
    );
}
