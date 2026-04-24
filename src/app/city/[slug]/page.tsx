import { Metadata } from 'next';
import Link from 'next/link';
import { cities, routes } from '@/lib/data';
import FAQ from '@/components/FAQ';
import RouteFinder from '@/components/RouteFinder';
import { notFound } from 'next/navigation';
import { ChevronRight, MapPin, Car, Map, MessageSquare, CheckCircle2 } from 'lucide-react';
import DynamicRouteSuggestions from '@/components/DynamicRouteSuggestions';

export async function generateStaticParams() {
    return cities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const city = cities.find((c) => c.slug === params.slug);
    if (!city) return {};
    
    const pageTitle = `Professional Taxi Service in ${city.name} | Book Online`;
    const pageDescription = `Direct private taxi service in ${city.name}. Simple intercity travel and airport transfers. Message us on WhatsApp to get a quote today.`;
    
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

    const baseFaqs = [
        {
            "question": `Can you pick me up from my hotel in ${city.name}?`,
            "answer": "Yes, our driver will pick you up directly from your hotel lobby or home address."
        },
        {
            "question": "Do you do cross-border trips from this city?",
            "answer": "Yes, we handle long-distance and cross-border travel every day."
        },
        {
            "question": "How do I book a ride?",
            "answer": "Send your pickup location and date on WhatsApp, and we will confirm."
        },
        {
            "question": "Can I travel to another city at night?",
            "answer": "Yes, our drivers are available 24 hours for scheduled trips."
        },
        {
            "question": "Do drivers speak English?",
            "answer": "Yes, drivers communicate clearly in English or Arabic depending on your preference."
        },
        {
            "question": "What if my travel plans change?",
            "answer": "Just message us on WhatsApp to update your pickup time."
        },
        {
            "question": "Do you provide airport transfers?",
            "answer": "Yes, we drop you off directly at the exact airport terminal."
        },
        {
            "question": "How much luggage can I bring?",
            "answer": "This depends on the car. Let us know how many bags you have on WhatsApp."
        },
        {
            "question": "Can I request a child seat?",
            "answer": "Yes, please ask for a child seat when you send us a message."
        },
        {
            "question": "Are your cars clean and air-conditioned?",
            "answer": "Yes, all cars are fully air-conditioned and cleaned before every trip."
        }
    ];

    const mergedFaqs = [...baseFaqs, ...(city.faq || [])].slice(0, 10);

    return (
        <div className="pt-20">
            {/* DIRECT ANSWER (TOP) */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto max-w-4xl">
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6 font-medium flex-wrap">
                        <Link href="/" className="hover:text-gold-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/city" className="hover:text-gold-600 transition-colors">Cities</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-surface-900 truncate">{city.name}</span>
                    </div>

                    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-surface-200">
                        <h1 className="font-display text-4xl text-primary-900 mb-6 leading-tight">
                            Taxi Service in {city.name}
                        </h1>
                        <p className="text-surface-700 text-lg leading-relaxed mb-6">
                            We provide private taxi services in {city.name} for long-distance travel and airport runs. Travel time depends on your exact destination. To get the exact quote, you can contact on WhatsApp.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 mb-4">
                            <a href="https://wa.me/966569487569" className="btn-primary flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 border-green-600 text-white shadow-lg w-full sm:w-auto px-8 py-3 rounded-xl font-bold">
                                <MessageSquare className="w-5 h-5" />
                                Get a quote on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* SIMPLE INTRO & HOW THIS TRIP WORKS */}
            <section className="section-padding bg-white border-b border-surface-200">
                <div className="container-custom mx-auto max-w-4xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="font-display text-2xl text-primary-900 mb-4">About This Service</h2>
                            <p className="text-surface-600 leading-relaxed mb-6">
                                This service provides a private car and driver starting from {city.name}. It is for people who want to travel to other cities, cross borders, or go to the airport comfortably without switching cars.
                            </p>
                            
                            <h2 className="font-display text-2xl text-primary-900 mb-4">How This Trip Works</h2>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                                    <p className="text-surface-600"><strong>Pickup:</strong> The driver picks you up from your exact address in {city.name}.</p>
                                </li>
                                <li className="flex gap-3">
                                    <Car className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                                    <p className="text-surface-600"><strong>Travel:</strong> You sit back while we drive directly to your destination.</p>
                                </li>
                                <li className="flex gap-3">
                                    <Map className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                                    <p className="text-surface-600"><strong>Drop-off:</strong> We drive straight to your arrival point and drop you at the door safely.</p>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-surface-50 p-6 md:p-8 rounded-2xl border border-surface-200">
                            <h2 className="font-display text-2xl text-primary-900 mb-4">Travel Details</h2>
                            <p className="text-surface-600 leading-relaxed mb-6">
                                The exact length of your journey depends on where you want to go. Whether you travel to another neighborhood or another country, we make sure the schedule is clear before you start.
                            </p>
                            
                            <h2 className="font-display text-2xl text-primary-900 mb-4">Good to Know</h2>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-2 text-surface-600">
                                    <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                    We do not offer 5-minute local rides. Focus is on long distance.
                                </li>
                                <li className="flex items-start gap-2 text-surface-600">
                                    <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                    Drivers handle luggage loading for you.
                                </li>
                                <li className="flex items-start gap-2 text-surface-600">
                                    <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                    Most people prefer direct taxi for out-of-city routes to save time.
                                </li>
                            </ul>
                            
                            <a href="https://wa.me/966569487569" className="text-gold-600 font-bold hover:text-gold-500 inline-flex items-center gap-1 transition-colors mt-2">
                                Message now to check availability <ChevronRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* BOOKING / GET QUOTE SECTION */}
            <section className="section-padding bg-primary-900 text-white text-center">
                <div className="container-custom mx-auto max-w-2xl">
                    <h2 className="font-display text-3xl mb-4 text-gold-400">Want to know the fare?</h2>
                    <p className="text-surface-300 leading-relaxed mb-8">
                        Click the WhatsApp button below. Send your pickup location, drop-off destination, and travel date. We will reply fast. To get exact fare and availability, message on WhatsApp.
                    </p>
                    <a href="https://wa.me/966569487569" className="bg-white text-primary-900 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-3">
                        <MessageSquare className="w-5 h-5 text-green-600" />
                        Contact now for quick response
                    </a>
                </div>
            </section>

            {/* FAQs */}
            <section className="section-padding bg-surface-50 border-t border-surface-200">
                <div className="container-custom mx-auto max-w-3xl">
                    <FAQ 
                        title="Frequently Asked Questions" 
                        items={mergedFaqs} 
                    />
                </div>
            </section>

            {/* Search Route */}
            <section className="section-padding bg-white border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <div className="text-center mb-6">
                        <p className="text-surface-600">Most people prefer direct taxi for this route. Search other routes below.</p>
                    </div>
                    <RouteFinder />
                </div>
            </section>

            {/* Related Routes */}
            <DynamicRouteSuggestions 
                currentSlug={city.slug} 
                type="city" 
                contextName={city.name} 
            />

            {/* Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            '@context': 'https://schema.org',
                            '@type': 'Service',
                            name: `Taxi Service in ${city.name}`,
                            description: `Private taxi transport starting from ${city.name}. Reliable and direct trips for long distances.`,
                            provider: { '@type': 'LocalBusiness', name: 'Airport Travel Taxis', url: 'https://airporttraveltaxis.com' },
                            areaServed: { '@type': 'City', name: city.name }
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
