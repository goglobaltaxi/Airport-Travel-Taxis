import { Metadata } from 'next';
import Link from 'next/link';
import { airports } from '@/lib/data';
import FAQ from '@/components/FAQ';
import RouteFinder from '@/components/RouteFinder';
import { notFound } from 'next/navigation';
import { ChevronRight, MapPin, Car, MessageSquare, CheckCircle2, Plane } from 'lucide-react';
import DynamicRouteSuggestions from '@/components/DynamicRouteSuggestions';

export async function generateStaticParams() {
    return airports.map((airport) => ({ slug: airport.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const airport = airports.find((a) => a.slug === params.slug);
    if (!airport) return {};
    
    const pageTitle = `${airport.city} Airport Taxi & Transfer | Book Online`;
    const pageDescription = `Direct taxi transfer from ${airport.city} Airport (${airport.code}). Driver meets you at arrivals. Message us on WhatsApp to get a quote today.`;
    
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

    const baseFaqs = [
        {
            question: `How do I book a transfer from ${airport.name}?`,
            answer: `Send your flight number, arrival time, and destination on WhatsApp. We will confirm your driver.`
        },
        {
            question: `Will the driver wait if my flight is late?`,
            answer: `Yes, we track your flight. If it is delayed, the driver adjusts automatically.`
        },
        {
            question: `Where does the driver meet me at the airport?`,
            answer: `The driver meets you at the arrivals hall, holding a sign with your name.`
        },
        {
            question: `Can I book a return trip at the same time?`,
            answer: `Yes, just mention both trips when you message us on WhatsApp.`
        },
        {
            question: `Can you pick me up from any hotel in the city?`,
            answer: `Yes, we pick up from any hotel lobby or home address.`
        },
        {
            question: `Is this a shared taxi or private car?`,
            answer: `This is always a private car just for you and your group.`
        },
        {
            question: `Can I travel at night or early morning?`,
            answer: `Yes, our service runs 24 hours every day.`
        },
        {
            question: `Do drivers speak English?`,
            answer: `Yes, drivers communicate clearly in English or Arabic.`
        },
        {
            question: `How much luggage can I bring?`,
            answer: `Tell us how many bags you have on WhatsApp and we will match the right car.`
        },
        {
            question: `Can I request a child seat?`,
            answer: `Yes, please ask for a child seat when you send us a message on WhatsApp.`
        }
    ];

    const mergedFaqs = [...baseFaqs, ...(airport.faq || [])].slice(0, 10);

    return (
        <div className="pt-20">
            {/* DIRECT ANSWER (TOP) */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto max-w-4xl">
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6 font-medium flex-wrap">
                        <Link href="/" className="hover:text-gold-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-surface-900 truncate">{airport.city} Airport Transfer</span>
                    </div>

                    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-surface-200">
                        <div className="inline-flex items-center gap-2 mb-4 text-sm font-semibold text-primary-900 bg-surface-100 px-4 py-1.5 rounded-full border border-surface-200">
                            <Plane className="w-4 h-4 text-gold-500" />
                            {airport.code} Airport
                        </div>
                        <h1 className="font-display text-4xl text-primary-900 mb-6 leading-tight">
                            {airport.city} Airport Taxi & Transfer
                        </h1>
                        <p className="text-surface-700 text-lg leading-relaxed mb-6">
                            We send a private driver to meet you at {airport.name} arrivals. Travel time to your destination depends on where you are going in the city. To get the exact quote, you can contact on WhatsApp.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="https://wa.me/966569487569" className="btn-primary flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 border-green-600 text-white shadow-lg w-full sm:w-auto px-8 py-3 rounded-xl font-bold">
                                <MessageSquare className="w-5 h-5" />
                                Get a quote on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="section-padding bg-white border-b border-surface-200">
                <div className="container-custom mx-auto max-w-4xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="font-display text-2xl text-primary-900 mb-4">About This Service</h2>
                            <p className="text-surface-600 leading-relaxed mb-6">
                                This is a private car service starting from {airport.name}. It is for travelers who want a direct ride to their hotel, home, or another city right after landing.
                            </p>
                            
                            <h2 className="font-display text-2xl text-primary-900 mb-4">How This Trip Works</h2>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <Plane className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                                    <p className="text-surface-600"><strong>Arrival:</strong> We track your flight. The driver is ready when you land.</p>
                                </li>
                                <li className="flex gap-3">
                                    <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                                    <p className="text-surface-600"><strong>Meet & Greet:</strong> Your driver waits at arrivals with your name on a sign.</p>
                                </li>
                                <li className="flex gap-3">
                                    <Car className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                                    <p className="text-surface-600"><strong>Travel:</strong> You sit back while we drive directly to your destination.</p>
                                </li>
                                <li className="flex gap-3">
                                    <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                                    <p className="text-surface-600"><strong>Drop-off:</strong> We drop you at the hotel entrance, home, or meeting point.</p>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-surface-50 p-6 md:p-8 rounded-2xl border border-surface-200">
                            <h2 className="font-display text-2xl text-primary-900 mb-4">Travel Details</h2>
                            <p className="text-surface-600 leading-relaxed mb-6">
                                Travel time depends on traffic and your destination. Drivers usually know the fastest route for the time of day.
                            </p>
                            
                            <h2 className="font-display text-2xl text-primary-900 mb-4">Good to Know</h2>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-2 text-surface-600">
                                    <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                    Driver waits up to 60 minutes after landing for free.
                                </li>
                                <li className="flex items-start gap-2 text-surface-600">
                                    <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                    This is a private car, not shared with strangers.
                                </li>
                                <li className="flex items-start gap-2 text-surface-600">
                                    <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                    Cars for 1 person, families, and large groups are available.
                                </li>
                            </ul>
                            
                            <a href="https://wa.me/966569487569" className="text-gold-600 font-bold hover:text-gold-500 inline-flex items-center gap-1 transition-colors">
                                Message now to check availability <ChevronRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* BOOKING / GET QUOTE */}
            <section className="section-padding bg-primary-900 text-white text-center">
                <div className="container-custom mx-auto max-w-2xl">
                    <h2 className="font-display text-3xl mb-4 text-gold-400">Want to know the fare?</h2>
                    <p className="text-surface-300 leading-relaxed mb-8">
                        Click the WhatsApp button below. Send your flight number, arrival date, and drop-off address. We will reply fast. To get exact fare and availability, message on WhatsApp.
                    </p>
                    <a href="https://wa.me/966569487569" className="bg-white text-primary-900 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-3">
                        <MessageSquare className="w-5 h-5 text-green-600" />
                        Contact now for quick response
                    </a>
                </div>
            </section>

            {/* Popular Routes from this airport */}
            {airport.popularRoutes && airport.popularRoutes.length > 0 && (
                <section className="section-padding bg-surface-50 border-b border-surface-200">
                    <div className="container-custom mx-auto max-w-4xl">
                        <h2 className="font-display text-2xl text-primary-900 mb-6">Popular Routes from {airport.city} Airport</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {airport.popularRoutes.map((route) => (
                                <div key={route.to} className="bg-white border border-surface-200 rounded-2xl p-5 shadow-sm">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Plane className="w-4 h-4 text-gold-500" />
                                        <span className="text-sm text-surface-500">{airport.code}</span>
                                        <span className="text-surface-400">→</span>
                                        <span className="text-sm text-surface-900 font-semibold">{route.to}</span>
                                    </div>
                                    <p className="text-xs text-surface-500 mb-3">About {route.duration}</p>
                                    <a href="https://wa.me/966569487569" className="text-gold-600 text-sm font-bold hover:text-gold-500 transition-colors inline-flex items-center gap-1">
                                        Get a quote <ChevronRight className="w-3 h-3" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* FAQs */}
            <section className="section-padding bg-white border-t border-surface-200">
                <div className="container-custom mx-auto max-w-3xl">
                    <FAQ 
                        title="Frequently Asked Questions" 
                        items={mergedFaqs} 
                    />
                </div>
            </section>

            {/* Search Route */}
            <section className="section-padding bg-surface-50 border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <div className="text-center mb-6">
                        <p className="text-surface-600">Most people prefer direct taxi for airport routes. Search other routes below.</p>
                    </div>
                    <RouteFinder />
                </div>
            </section>

            {/* Related Routes */}
            <DynamicRouteSuggestions 
                currentSlug={airport.slug} 
                type="airport" 
                contextName={airport.city} 
            />

            {/* Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            '@context': 'https://schema.org',
                            '@type': 'Service',
                            name: `${airport.city} Airport Transfer Service`,
                            description: `Private taxi transfer from ${airport.name}. Driver meets you at arrivals and takes you directly to your destination.`,
                            provider: { '@type': 'LocalBusiness', name: 'Airport Travel Taxis', url: 'https://airporttraveltaxis.com' },
                            areaServed: { '@type': 'City', name: airport.city },
                            serviceType: 'Airport Transfer',
                        },
                        {
                            '@context': 'https://schema.org',
                            '@type': 'FAQPage',
                            mainEntity: mergedFaqs.map((f) => ({
                                '@type': 'Question',
                                name: f.question,
                                acceptedAnswer: { '@type': 'Answer', text: f.answer },
                            })),
                        }
                    ]),
                }}
            />
        </div>
    );
}
