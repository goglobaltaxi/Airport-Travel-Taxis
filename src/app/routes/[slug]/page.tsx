import { Metadata } from 'next';
import Link from 'next/link';
import { routes } from '@/lib/data';
import BookingWidget from '@/components/BookingWidget';
import FAQ from '@/components/FAQ';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import TravelKnowledge from '@/components/TravelKnowledge';
import AuthorityTrust from '@/components/AuthorityTrust';
import StructuredInformationBlocks from '@/components/StructuredInformationBlocks';
import RouteFinder from '@/components/RouteFinder';
import DynamicRouteSuggestions from '@/components/DynamicRouteSuggestions';
import TravelCalculator from '@/components/TravelCalculator';

export async function generateStaticParams() {
    return routes.map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const route = routes.find((r) => r.slug === params.slug);
    if (!route) return {};
    
    const pageTitle = `Taxi from ${route.from} to ${route.to} | Professional Service`;
    const pageDescription = `Book a professional taxi from ${route.from} to ${route.to}. We provide safe, pre-booked 24/7 transportation with professional chauffeurs across the Gulf region.`;
    
    return {
        title: pageTitle,
        description: pageDescription,
        openGraph: {
            title: pageTitle,
            description: pageDescription,
            url: `https://airporttraveltaxis.com/routes/${route.slug}`,
        },
        alternates: {
            canonical: `https://airporttraveltaxis.com/routes/${route.slug}`,
        },
    };
}

export default function RoutePage({ params }: { params: { slug: string } }) {
    const route = routes.find((r) => r.slug === params.slug);
    if (!route) notFound();

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6">
                        <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
                        <span>/</span>
                        <span>Routes</span>
                        <span>/</span>
                        <span className="text-surface-900">{route.from} to {route.to}</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <span className="text-sm text-primary-700 font-medium">
                                    {route.fromCountry === route.toCountry ? '🏙️ Inter-City' : '🌍 Cross-Border'}
                                </span>
                            </div>
                            <h1 className="font-display text-3xl lg:text-[42px] lg:leading-[48px] text-surface-900 mb-4">
                                {route.from} to {route.to} <span className="text-primary-600">Taxi Service</span>
                            </h1>
                            <p className="text-surface-600 text-lg leading-relaxed mb-6">{route.longDescription}</p>

                            {/* Journey Essentials Block */}
                            <div className="bg-primary-50 rounded-xl p-5 mb-8 border border-primary-100">
                                <h2 className="font-semibold text-primary-900 mb-2 flex items-center gap-2">
                                    <span className="bg-primary-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">⭐</span>
                                    Journey Essentials
                                </h2>
                                <p className="text-surface-700 text-sm leading-relaxed mb-4">
                                    Premium private taxi transfer from <strong>{route.from}</strong> to <strong>{route.to}</strong>. Enjoy a seamless door-to-door journey with professional chauffeurs.
                                </p>
                                <ul className="text-xs text-primary-800 grid grid-cols-2 gap-2 font-medium">
                                    <li className="flex items-center gap-1">📍 Distance: {route.distance}</li>
                                    <li className="flex items-center gap-1">⏱️ Duration: {route.duration}</li>
                                    <li className="flex items-center gap-1">🚙 Premium Fleet</li>
                                    <li className="flex items-center gap-1">🛡️ Fully Insured</li>
                                </ul>
                                <a 
                                    href="#booking-widget"
                                    className="mt-4 w-full bg-primary-600 text-white py-2 rounded-lg text-sm font-bold hover:bg-primary-700 transition-all flex items-center justify-center gap-2 text-center"
                                >
                                    Book This Route Now <ChevronRight className="w-4 h-4" />
                                </a>
                            </div>

                            {/* Route Info Cards */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="glass-card p-4 text-center">
                                    <p className="text-2xl font-bold text-surface-900">{route.distance}</p>
                                    <p className="text-sm text-surface-500">Distance</p>
                                </div>
                                <div className="glass-card p-4 text-center">
                                    <p className="text-2xl font-bold text-surface-900">{route.duration}</p>
                                    <p className="text-sm text-surface-500">Duration</p>
                                </div>
                            </div>

                            {/* Highlights */}
                            <div className="glass-card p-6 mb-8">
                                <h3 className="font-display text-lg text-surface-900 mb-4">Route Highlights</h3>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {route.highlights.map((highlight) => (
                                        <div key={highlight} className="flex items-center gap-2">
                                            <span className="text-green-600">✓</span>
                                            <span className="text-surface-700 text-sm">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Distance & Travel Time Details */}
                            {route.highways && (
                                <div className="glass-card p-6 mb-8">
                                    <h3 className="font-display text-lg text-surface-900 mb-4">Distance and Travel Time</h3>
                                    <p className="text-surface-600 text-sm leading-relaxed mb-4">
                                        The approximate distance for this journey is <strong>{route.distance}</strong>, with an estimated travel time of <strong>{route.duration}</strong>.
                                    </p>
                                    <div className="bg-surface-50 rounded-lg p-4 border border-surface-100">
                                        <p className="text-xs text-surface-500 uppercase tracking-wider font-semibold mb-1">Primary Roads</p>
                                        <p className="text-surface-800 text-sm">{route.highways}</p>
                                    </div>
                                </div>
                            )}

                            {/* Vehicle Options */}
                            {route.vehiclesInfo && (
                                <div className="glass-card p-6 mb-8">
                                    <h3 className="font-display text-lg text-surface-900 mb-4">Vehicle Options</h3>
                                    <p className="text-surface-600 text-sm leading-relaxed mb-4">{route.vehiclesInfo}</p>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                        {['Mercedes S-Class', 'Cadillac Escalade', 'GMC', 'Ford Taurus', 'BMW', 'Genesis', 'Mercedes Vito', 'Mercedes Sprinter', 'Executive Bus', 'Camry', 'Staria', 'Hiace', 'Coaster'].map(v => (
                                            <div key={v} className="bg-primary-50 text-primary-700 text-[10px] font-bold py-1 px-2 rounded-md border border-primary-100 text-center uppercase tracking-tight">
                                                {v}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Border Information */}
                            {route.borderInfo && (
                                <div className="glass-card p-6 mb-8 border-l-4 border-l-primary-600">
                                    <h3 className="font-display text-lg text-surface-900 mb-2">Border Information</h3>
                                    <p className="text-surface-600 text-sm leading-relaxed mb-0 whitespace-pre-line">{route.borderInfo}</p>
                                </div>
                            )}

                            {/* Travel Use Cases */}
                            {route.useCases && (
                                <div className="glass-card p-6 mb-8">
                                    <h3 className="font-display text-lg text-surface-900 mb-2">Travel Use Cases</h3>
                                    <p className="text-surface-600 text-sm leading-relaxed mb-0">{route.useCases}</p>
                                </div>
                            )}

                            {/* Internal Route Links */}
                            {route.relatedRoutes && (
                                <div className="glass-card p-6">
                                    <h3 className="font-display text-lg text-surface-900 mb-4">Related Routes</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {route.relatedRoutes.map((r) => (
                                            <Link 
                                                key={r.slug} 
                                                href={`/routes/${r.slug}`}
                                                className="text-xs bg-surface-100 hover:bg-primary-600 hover:text-white transition-all text-surface-700 font-medium py-1.5 px-3 rounded-full border border-surface-200"
                                            >
                                                {r.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="sticky top-24" id="booking-widget">
                            <BookingWidget compact />
                            {/* Booking CTA for AI Optimization */}
                            <div className="mt-6 p-6 bg-primary-900 text-white rounded-2xl">
                                <h4 className="font-display text-lg mb-2">Ready to Book?</h4>
                                <p className="text-primary-100 text-sm mb-4 leading-relaxed">
                                    Contact our support team for trip arrangements or request a ride directly through our portal. We are available 24/7.
                                </p>
                                <Link href="/contact" className="w-full btn-primary !bg-white !text-primary-900 text-center block !py-3">
                                    Contact Support
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Structured Information Blocks */}
            <StructuredInformationBlocks 
                startLocation={route.from}
                endLocation={route.to}
                type={route.fromCountry === route.toCountry ? 'Inter-City Transfer' : 'Cross-Border Transfer'}
                travelTime={route.duration}
                pickup="Hotel, Airport, or Residential Address"
                dropoff="Direct Door-to-Door Destination"
                relatedLinks={route.relatedRoutes ? route.relatedRoutes.map(r => ({ name: r.name, url: `/routes/${r.slug}` })) : []}
            />

            {/* Route Finder Integration */}
            <section className="bg-surface-50 py-12 border-y border-surface-200">
                <div className="container-custom mx-auto">
                    <RouteFinder />
                    <TravelCalculator />
                </div>
            </section>

            {/* Related Routes */}
            <DynamicRouteSuggestions 
                currentSlug={route.slug} 
                type="route" 
                originCity={route.from} 
                destinationCity={route.to} 
            />

            {/* FAQ */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto">
                    <FAQ items={route.faq} title={`${route.from} to ${route.to} FAQ`} />
                </div>
            </section>

            {/* Travel Knowledge */}
            <TravelKnowledge context={`${route.from} to ${route.to}`} distanceFilter={route.from} />

            {/* Authority & Trust Sections */}
            <AuthorityTrust section3={false} />

            {/* Other Routes */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl text-surface-900 mb-6">Other Popular Routes</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {routes.filter((r) => r.slug !== route.slug).map((r) => (
                            <Link key={r.slug} href={`/routes/${r.slug}`} className="glass-card-hover p-5">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="font-medium text-surface-900">{r.from}</span>
                                    <span className="text-surface-400">→</span>
                                    <span className="font-medium text-surface-900">{r.to}</span>
                                </div>
                                <div className="flex items-center justify-end mt-2">
                                    <span className="text-xs text-surface-500">{r.duration}</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Dynamically Added Missing Routes */}
                    <div className="flex flex-wrap gap-3 mt-8 border-t border-surface-200 pt-8">
                        <span className="text-surface-500 text-sm font-semibold w-full">Related Transfer Routes:</span>
                        {routes
                            .filter((r) => r.slug !== route.slug && (r.from === route.from || r.to === route.to))
                            .slice(0, 6)
                            .map((r) => (
                                <Link key={`feat-${r.slug}`} href={`/routes/${r.slug}`} className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                                    {r.from} to {r.to} taxi
                                </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            '@context': 'https://schema.org',
                            '@type': 'Service',
                            name: `${route.from} to ${route.to} Taxi Service`,
                            description: route.description,
                            provider: { '@type': 'LocalBusiness', name: 'Airport Travel Taxis', url: 'https://airporttraveltaxis.com' },
                            areaServed: [
                                { '@type': 'City', name: route.from },
                                { '@type': 'City', name: route.to },
                            ],
                        },
                        {
                            '@context': 'https://schema.org',
                            '@type': 'FAQPage',
                            mainEntity: route.faq.map((f) => ({
                                '@type': 'Question',
                                name: f.question,
                                acceptedAnswer: { '@type': 'Answer', text: f.answer },
                            })),
                        },
                        {
                            '@context': 'https://schema.org',
                            '@type': 'BreadcrumbList',
                            itemListElement: [
                                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://airporttraveltaxis.com' },
                                { '@type': 'ListItem', position: 2, name: 'Routes', item: 'https://airporttraveltaxis.com/routes' },
                                { '@type': 'ListItem', position: 3, name: `${route.from} to ${route.to}` },
                            ],
                        },
                    ]),
                }}
            />
        </div>
    );
}
