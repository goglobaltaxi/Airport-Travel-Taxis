import { Metadata } from 'next';
import Link from 'next/link';
import { cities, routes } from '@/lib/data';
import BookingWidget from '@/components/BookingWidget';
import { notFound } from 'next/navigation';
import TravelKnowledge from '@/components/TravelKnowledge';
import AuthorityTrust from '@/components/AuthorityTrust';
import { areaTransferPages } from '@/lib/areaTransferData';
import StructuredInformationBlocks from '@/components/StructuredInformationBlocks';
import RouteFinder from '@/components/RouteFinder';
import DynamicRouteSuggestions from '@/components/DynamicRouteSuggestions';
import TravelCalculator from '@/components/TravelCalculator';
import { 
    MapPin, 
    ShieldCheck, 
    Star, 
    ChevronRight,
    Car,
    Clock,
    UserCheck,
    Coins,
    Plane,
    Users,
    Briefcase
} from 'lucide-react';

export async function generateStaticParams() {
    return cities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const city = cities.find((c) => c.slug === params.slug);
    if (!city) return {};
    
    const pageTitle = `Professional Taxi Service in ${city.name} | Book Online`;
    const pageDescription = `Reliable, pre-booked taxi service in ${city.name}, ${city.country}. We provide scheduled 24/7 airport transfers and intercity travel with professional drivers.`;
    
    return {
        title: pageTitle,
        description: pageDescription,
        openGraph: {
            title: pageTitle,
            description: pageDescription,
            url: `https://airporttraveltaxis.com/city/${city.slug}`,
        },
        alternates: {
            canonical: `https://airporttraveltaxis.com/city/${city.slug}`,
        },
    };
}

export default function CityPage({ params }: { params: { slug: string } }) {
    const city = cities.find((c) => c.slug === params.slug);
    if (!city) notFound();

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6">
                        <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
                        <span>/</span>
                        <span>Cities</span>
                        <span>/</span>
                        <span className="text-surface-900">{city.name}</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h1 className="font-display text-3xl lg:text-[42px] lg:leading-[48px] text-surface-900 mb-4">
                                Taxi Service in <span className="text-primary-600">{city.name}</span>
                            </h1>
                            <p className="text-surface-600 text-lg leading-relaxed mb-6">{city.longDescription}</p>

                            {/* Service Highlights Block */}
                            <div className="bg-primary-50 rounded-xl p-5 mb-8 border border-primary-100">
                                <h2 className="font-semibold text-primary-900 mb-3 flex items-center gap-2">
                                    <span className="bg-primary-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">⭐</span>
                                    Service Highlights
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                                    <div className="flex items-start gap-2">
                                        <ShieldCheck className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                                        <span className="text-sm text-surface-700">Vetted Professional Drivers</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <Coins className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                                        <span className="text-sm text-surface-700">Fixed Upfront Pricing</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <Clock className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                                        <span className="text-sm text-surface-700">24/7 Service Available</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <Car className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                                        <span className="text-sm text-surface-700">Professional & Economy Fleet</span>
                                    </div>
                                </div>
                                <a href="#booking-widget" className="w-full btn-primary !py-2.5 text-sm flex items-center justify-center gap-2 text-center">
                                    Book a Taxi in {city.name} <ChevronRight className="w-4 h-4" />
                                </a>
                            </div>

                            <p className="text-sm text-surface-500 mb-4">📍 Location: {city.country}</p>
                        </div>
                        <div id="booking-widget">
                            <BookingWidget compact />
                        </div>
                    </div>
                </div>
            </section>

            {/* Structured Information Blocks */}
            <StructuredInformationBlocks 
                startLocation={city.name}
                endLocation="Regional Destination"
                type="City Taxi Service"
                travelTime="Variable"
                pickup="Hotel or Specific Address"
                dropoff="Direct Door-to-Door Destination"
                relatedLinks={[
                    { name: `${city.name} Airport`, url: `/airport/${city.airportSlug}` },
                    { name: 'GCC Travel Guide', url: '/gcc-travel-road-travel' }
                ]}
            />

            {/* Popular Routes */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-8">
                        Popular Routes from <span className="text-primary-600">{city.name}</span>
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {city.popularRoutes.map((route) => (
                            <Link key={route.to} href={`/routes/${route.slug}`} className="glass-card-hover p-5 border border-surface-200 rounded-2xl">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="font-medium text-surface-900">{city.name}</span>
                                    <span className="text-surface-400">→</span>
                                    <span className="font-medium text-surface-900">{route.to}</span>
                                </div>
                                <span className="btn-primary text-xs !px-3 !py-1 rounded-full inline-block">Book Transfer</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Route Finder Integration */}
            <section className="bg-surface-50 py-12 border-y border-surface-200">
                <div className="container-custom mx-auto">
                    <RouteFinder />
                    <TravelCalculator />
                </div>
            </section>

            {/* Nearby Locations */}
            <section className="section-padding bg-surface-50 border-y border-surface-200">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-8">
                        Nearby Districts & Shared Areas in <span className="text-primary-600">{city.name}</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {areaTransferPages
                            .filter(a => a.city === city.name)
                            .map((area) => (
                                <Link key={area.slug} href={`/taxi-from-${area.slug}`} className="group bg-white p-6 rounded-2xl border border-surface-200 hover:border-primary-300 transition-all shadow-sm">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-primary-50 rounded-lg text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-bold text-surface-900">{area.areaName}</h3>
                                    </div>
                                    <p className="text-sm text-surface-500 mb-4 line-clamp-2">Reliable taxi transfers from {area.areaName} to major hubs.</p>
                                    <span className="text-primary-600 text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                        View Service <ChevronRight className="w-3 h-3" />
                                    </span>
                                </Link>
                            ))}
                        {/* Fallback for cities with no areas in this specific data file */}
                        {areaTransferPages.filter(a => a.city === city.name).length === 0 && (
                            ['City Center', 'Main Business Hub', 'Residential Quarters', 'Industrial Zone'].map((fallback) => (
                                <div key={fallback} className="bg-white p-6 rounded-2xl border border-surface-200 shadow-sm opacity-70">
                                    <div className="flex items-center gap-3 mb-2">
                                        <MapPin className="w-4 h-4 text-surface-400" />
                                        <h3 className="font-bold text-surface-900">{fallback}</h3>
                                    </div>
                                    <p className="text-xs text-surface-500">Service available across all {city.name} sectors.</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* Airport Connections */}
            {city.airportName && (
                <section className="section-padding bg-surface-50 border-t border-surface-200">
                    <div className="container-custom mx-auto">
                        <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-4">
                            Airport Transfers in <span className="text-primary-600">{city.name}</span>
                        </h2>
                        <p className="text-surface-600 mb-6 max-w-2xl">
                            We provide reliable transfers between {city.name} city and{' '}
                            <strong>{city.airportName} ({city.airportCode})</strong>. Our drivers monitor your flight in real time
                            and meet you at the arrivals hall with a name board.
                        </p>
                        <Link
                            href={`/airport/${city.airportSlug}`}
                            className="inline-flex items-center gap-2 btn-primary"
                        >
                            <Plane className="w-4 h-4" />
                            {city.airportName} Taxi
                        </Link>
                    </div>
                </section>
            )}

            {/* Vehicle Options */}
            {city.vehicleOptions && (
                <section className="section-padding bg-white border-t border-surface-200">
                    <div className="container-custom mx-auto">
                        <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-4">
                            Vehicle Options in <span className="text-primary-600">{city.name}</span>
                        </h2>
                        <p className="text-surface-600 mb-8 max-w-2xl">{city.vehicleOptions}</p>
                        <div className="grid sm:grid-cols-3 gap-5">
                            {[
                                { icon: <UserCheck className="w-6 h-6 text-primary-600" />, title: 'Individual Travelers', desc: 'Mercedes S-Class, BMW 7 Series, Genesis G90, Ford Taurus, Toyota Camry' },
                                { icon: <Users className="w-6 h-6 text-primary-600" />, title: 'Families & Small Groups', desc: 'GMC Yukon XL, Cadillac Escalade, Hyundai Staria, Mercedes Vito' },
                                { icon: <Briefcase className="w-6 h-6 text-primary-600" />, title: 'Large Groups', desc: 'Mercedes Sprinter, Toyota Hiace, Coaster, Executive Bus' },
                            ].map((item) => (
                                <div key={item.title} className="glass-card p-5">
                                    <div className="mb-3">{item.icon}</div>
                                    <h3 className="font-semibold text-surface-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-surface-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6">
                            <Link href="/fleet" className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center gap-1">
                                View Full Fleet <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Travel Uses */}
            {city.travelUses && (
                <section className="section-padding bg-surface-100 border-t border-surface-200">
                    <div className="container-custom mx-auto">
                        <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-4">
                            How People Use Taxis in <span className="text-primary-600">{city.name}</span>
                        </h2>
                        <p className="text-surface-600 max-w-3xl">{city.travelUses}</p>
                    </div>
                </section>
            )}

            {/* Attractions */}
            <section className="section-padding bg-white border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-8">
                        Places to Visit in <span className="text-primary-600">{city.name}</span>
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {city.attractions.map((attraction) => (
                            <div key={attraction} className="glass-card p-4 text-center">
                                <span className="text-2xl block mb-2">🏛️</span>
                                <p className="text-sm text-surface-900 font-medium">{attraction}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="section-padding bg-surface-50 border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl text-surface-900 mb-8">Our Services in {city.name}</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: '✈️', title: 'Airport Transfers', desc: `Reliable airport pickup and drop-off service in ${city.name}.` },
                            { icon: '🏨', title: 'Hotel Transfers', desc: `Comfortable transfers to and from any hotel in ${city.name}.` },
                            { icon: '🏙️', title: 'City Tours', desc: `Explore ${city.name}'s attractions with our professional chauffeurs.` },
                            { icon: '💼', title: 'Corporate Travel', desc: `Professional transportation for business travelers in ${city.name}.` },
                            { icon: '🎩', title: 'Hourly Chauffeur', desc: `Request a private chauffeur by the hour for your ${city.name} itinerary.` },
                            { icon: '👨‍👩‍👧‍👦', title: 'Family Transfers', desc: `Spacious vehicles for families traveling in ${city.name}.` },
                        ].map((service) => (
                            <div key={service.title} className="glass-card-hover p-5">
                                <span className="text-2xl block mb-3">{service.icon}</span>
                                <h3 className="font-semibold text-surface-900 mb-1">{service.title}</h3>
                                <p className="text-sm text-surface-600">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="section-padding bg-white border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl text-surface-900 mb-6">Related Travel Pages</h2>
                    <div className="flex flex-wrap gap-3">
                        {city.airportSlug && (
                            <Link href={`/airport/${city.airportSlug}`} className="text-primary-600 hover:text-primary-700 font-medium text-sm border border-primary-200 rounded-full px-4 py-2 hover:bg-primary-50 transition-colors">
                                {city.name} Airport Taxi
                            </Link>
                        )}
                        {city.popularRoutes.slice(0, 3).map((r) => (
                            <Link key={r.slug} href={`/routes/${r.slug}`} className="text-primary-600 hover:text-primary-700 font-medium text-sm border border-primary-200 rounded-full px-4 py-2 hover:bg-primary-50 transition-colors">
                                {city.name} → {r.to}
                            </Link>
                        ))}
                        <Link href="/border/king-fahd-causeway-taxi" className="text-primary-600 hover:text-primary-700 font-medium text-sm border border-primary-200 rounded-full px-4 py-2 hover:bg-primary-50 transition-colors">
                            King Fahd Causeway
                        </Link>
                        <Link href="/border/salwa-border-taxi" className="text-primary-600 hover:text-primary-700 font-medium text-sm border border-primary-200 rounded-full px-4 py-2 hover:bg-primary-50 transition-colors">
                            Salwa Border Crossing
                        </Link>
                    </div>

                    {/* Dynamically Added Missing Routes */}
                    <div className="flex flex-wrap gap-3 mt-4">
                        <span className="text-surface-500 text-sm font-semibold w-full">Featured Routes:</span>
                        {routes
                            .filter((r) => r.from === city.name)
                            .slice(0, 6)
                            .map((r) => (
                                <Link key={`feat-${r.slug}`} href={`/routes/${r.slug}`} className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                                    {r.from} to {r.to} taxi
                                </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Routes */}
            <DynamicRouteSuggestions 
                currentSlug={city.slug} 
                type="city" 
                contextName={city.name} 
            />

            {/* FAQ */}
            {city.faq && city.faq.length > 0 && (
                <section className="section-padding bg-surface-50 border-t border-surface-200">
                    <div className="container-custom mx-auto">
                        <h2 className="font-display text-2xl text-surface-900 mb-8">{city.name} Taxi — Frequently Asked Questions</h2>
                        <div className="space-y-4 max-w-3xl">
                            {city.faq.map((item) => (
                                <div key={item.question} className="glass-card p-5">
                                    <h3 className="font-semibold text-surface-900 mb-2">{item.question}</h3>
                                    <p className="text-surface-600 text-sm">{item.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Travel Knowledge */}
            <TravelKnowledge context={city.name} distanceFilter={city.name} />

            {/* Authority & Trust Sections */}
            <AuthorityTrust section3={false} section5={false} />

            {/* Booking Section */}
            <section className="section-padding bg-primary-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-primary-400 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
                </div>
                <div className="container-custom mx-auto text-center relative z-10">
                    <h2 className="font-display text-3xl lg:text-4xl mb-6">Arrange a Taxi in {city.name}</h2>
                    <p className="text-primary-100 text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
                        {city.bookingInfo ?? `You can arrange a taxi within ${city.name} or to any nearby city or airport at any time. Our drivers are available 24/7 across the city.`}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="#booking-widget" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-900 font-bold rounded-xl transition-all hover:bg-primary-50">
                            Book City Taxi
                        </Link>
                        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary-400 text-white font-bold rounded-xl transition-all hover:border-white">
                            Corporate Inquiry
                        </Link>
                    </div>
                </div>
            </section>

            {/* Other Cities */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl text-surface-900 mb-6">Explore Other Cities</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {cities.filter((c) => c.slug !== city.slug).map((c) => (
                            <Link key={c.slug} href={`/city/${c.slug}`} className="glass-card-hover p-5 text-center">
                                <p className="font-semibold text-surface-900">{c.name}</p>
                                <p className="text-xs text-surface-500">{c.country}</p>
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
                        '@type': 'LocalBusiness',
                        name: `Airport Travel Taxis - ${city.name}`,
                        url: `https://airporttraveltaxis.com/city/${city.slug}`,
                        description: city.description,
                        areaServed: { '@type': 'City', name: city.name },
                        address: { '@type': 'PostalAddress', addressLocality: city.name, addressCountry: city.country },
                    }),
                }}
            />
        </div>
    );
}
