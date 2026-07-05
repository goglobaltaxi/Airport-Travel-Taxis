import { Metadata } from 'next';
import Link from 'next/link';
import { routes } from '@/lib/data';
import FAQ from '@/components/FAQ';
import RouteFinder from '@/components/RouteFinder';
import { notFound } from 'next/navigation';
import { ChevronRight, MapPin, Navigation, Car, Map, MessageSquare, CheckCircle2, Clock, Route, Globe } from 'lucide-react';
import DynamicRouteSuggestions from '@/components/DynamicRouteSuggestions';

export async function generateStaticParams() {
    return routes.map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const route = routes.find((r) => r.slug === params.slug);
    if (!route) return {};
    
    const pageTitle = route.seoTitle ?? `Taxi from ${route.from} to ${route.to} | Book Online`;
    const pageDescription = route.seoDescription ?? `Direct taxi service from ${route.from} to ${route.to}. Simple private car travel. Message us on WhatsApp to get a quote today.`;
    
    return {
        title: pageTitle,
        description: pageDescription,
        keywords: [
            `${route.from} to ${route.to} taxi`,
            `${route.from} to ${route.to} transfer`,
            `${route.from} ${route.to} private taxi`,
            `taxi from ${route.from} to ${route.to}`,
            ...(route.fromCountry !== route.toCountry
                ? [`cross-border taxi ${route.fromCountry} ${route.toCountry}`, `${route.from} ${route.to} border crossing`]
                : []
            ),
        ].join(', '),
        openGraph: {
            title: pageTitle,
            description: pageDescription,
            url: `https://airporttraveltaxis.com/routes/${route.slug}`,
            type: 'website',
        },
        twitter: {
            card: 'summary',
            title: pageTitle,
            description: pageDescription,
        },
        alternates: {
            canonical: `https://airporttraveltaxis.com/routes/${route.slug}`,
        },
    };
}

export default function RoutePage({ params }: { params: { slug: string } }) {
    const route = routes.find((r) => r.slug === params.slug);
    if (!route) notFound();

    const isCrossBorder = route.fromCountry !== route.toCountry;

    const baseFaqs = [
        {
            "question": "Can you pick me up from the airport?",
            "answer": "Yes, the driver will meet you outside arrivals."
        },
        {
            "question": "How do I book this trip?",
            "answer": "Send your details on WhatsApp and we will confirm."
        },
        {
            "question": "Will I change cars during the trip?",
            "answer": "No, you stay in the same car for the whole trip."
        },
        {
            "question": "Can I travel at night?",
            "answer": "Yes, our drivers are available 24 hours."
        },
        {
            "question": "Do drivers speak English?",
            "answer": "Yes, drivers communicate clearly in English or Arabic."
        },
        {
            "question": "Can I stop for food or rest?",
            "answer": "Yes, you can ask the driver to stop for a quick break."
        },
        {
            "question": "How much luggage can I bring?",
            "answer": "It depends on the car. Tell us your bags when you message on WhatsApp."
        },
        {
            "question": "What if my flight is late?",
            "answer": "Let us know on WhatsApp, and we will adjust the pickup time."
        }
    ];

    if (isCrossBorder) {
        baseFaqs.unshift(
            {
                "question": "Do I need a hard copy of my visa?",
                "answer": "Yes, always carry printed copies for the border."
            },
            {
                "question": "How long does border crossing take?",
                "answer": "It usually takes 30 to 60 minutes."
            }
        );
    } else {
        baseFaqs.unshift(
            {
                "question": "Is this a direct point-to-point service?",
                "answer": "Yes, we drive you directly to your exact location."
            },
            {
                "question": "Can I request a child seat?",
                "answer": "Yes, please mention it when you message us on WhatsApp."
            }
        );
    }

    const mergedFaqs = [...baseFaqs, ...(route.faq || [])].slice(0, 10);

    return (
        <div className="pt-20">
            {/* HERO */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto max-w-4xl">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6 font-medium flex-wrap">
                        <Link href="/" className="hover:text-gold-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/routes" className="hover:text-gold-600 transition-colors">Routes</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-surface-900 truncate">{route.from} to {route.to}</span>
                    </div>

                    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-surface-200">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200 text-primary-700 text-xs font-semibold rounded-full px-3 py-1 mb-4">
                            <Globe className="w-3.5 h-3.5" />
                            {isCrossBorder ? `${route.fromCountry} → ${route.toCountry} Cross-Border Transfer` : 'Private Intercity Transfer'}
                        </div>

                        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-900 mb-4 leading-tight">
                            {route.from} to {route.to} Taxi
                        </h1>
                        <p className="text-surface-600 text-lg leading-relaxed mb-6">
                            {route.seoDescription ?? `Private door-to-door taxi from ${route.from} to ${route.to}. ${isCrossBorder ? 'Our experienced drivers handle the border crossing for you.' : 'Direct highway journey with no changes.'} Get a fixed quote on WhatsApp.`}
                        </p>

                        {/* Stats Bar */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-7">
                            <div className="flex items-center gap-3 bg-surface-50 border border-surface-200 rounded-xl p-3">
                                <div className="w-9 h-9 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                                    <Route className="w-4 h-4 text-primary-700" />
                                </div>
                                <div>
                                    <p className="text-[11px] text-surface-500 font-medium uppercase tracking-wide">Distance</p>
                                    <p className="font-bold text-surface-900 text-sm">{route.distance}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-surface-50 border border-surface-200 rounded-xl p-3">
                                <div className="w-9 h-9 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                                    <Clock className="w-4 h-4 text-primary-700" />
                                </div>
                                <div>
                                    <p className="text-[11px] text-surface-500 font-medium uppercase tracking-wide">Drive Time</p>
                                    <p className="font-bold text-surface-900 text-sm">{route.duration}</p>
                                </div>
                            </div>
                            {isCrossBorder ? (
                                <div className="flex items-center gap-3 bg-surface-50 border border-surface-200 rounded-xl p-3 col-span-2 sm:col-span-1">
                                    <div className="w-9 h-9 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                                        <Navigation className="w-4 h-4 text-amber-700" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] text-surface-500 font-medium uppercase tracking-wide">Border</p>
                                        <p className="font-bold text-surface-900 text-sm">Driver-assisted</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center gap-3 bg-surface-50 border border-surface-200 rounded-xl p-3 col-span-2 sm:col-span-1">
                                    <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-green-700" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] text-surface-500 font-medium uppercase tracking-wide">Service</p>
                                        <p className="font-bold text-surface-900 text-sm">Door-to-Door</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Highlights */}
                        {route.highlights && route.highlights.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-7">
                                {route.highlights.map((h) => (
                                    <span key={h} className="inline-flex items-center gap-1.5 text-xs font-medium bg-green-50 text-green-800 border border-green-200 rounded-full px-3 py-1">
                                        <CheckCircle2 className="w-3.5 h-3.5" />{h}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-3">
                            <a href="https://wa.me/966569487569" className="btn-primary flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 border-green-600 text-white shadow-lg w-full sm:w-auto px-8 py-3 rounded-xl font-bold">
                                <MessageSquare className="w-5 h-5" />
                                Get a Quote on WhatsApp
                            </a>
                            <Link href="/booking" className="flex items-center justify-center gap-2 border-2 border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white transition-colors px-8 py-3 rounded-xl font-bold w-full sm:w-auto">
                                Book Online
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SIMPLE INTRO & HOW THIS TRIP WORKS */}
            <section className="section-padding bg-white border-b border-surface-200">
                <div className="container-custom mx-auto max-w-4xl">
                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div>
                            <h2 className="font-display text-2xl text-primary-900 mb-4">About This Route</h2>
                            <p className="text-surface-600 leading-relaxed mb-6">
                                {route.longDescription || `This service is a private car ride from ${route.from} to ${route.to}. It is for people who want a direct road trip without changing cars.`}
                            </p>
                            
                            <h2 className="font-display text-2xl text-primary-900 mb-4">How This Trip Works</h2>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                                    <p className="text-surface-600"><strong>Pickup:</strong> The driver picks you up from your home, hotel, or airport in {route.from}.</p>
                                </li>
                                <li className="flex gap-3">
                                    <Car className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                                    <p className="text-surface-600"><strong>Travel:</strong> You sit back while we drive towards {route.to}.</p>
                                </li>
                                {isCrossBorder && (
                                    <li className="flex gap-3">
                                        <Navigation className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                                        <p className="text-surface-600"><strong>Border:</strong> You exit {route.fromCountry} and enter {route.toCountry}. The driver guides you.</p>
                                    </li>
                                )}
                                <li className="flex gap-3">
                                    <Map className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                                    <p className="text-surface-600"><strong>Drop-off:</strong> We drive straight to your location in {route.to} and drop you at the door.</p>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-surface-50 p-6 md:p-8 rounded-2xl border border-surface-200">
                            <h2 className="font-display text-2xl text-primary-900 mb-4">Travel Time</h2>
                            <p className="text-surface-600 leading-relaxed mb-6">
                                Travel time depends on traffic and your exact drop-off area. {isCrossBorder && 'Weekends might take a little longer at customs.'}
                            </p>
                            
                            {isCrossBorder && (
                                <>
                                    <h2 className="font-display text-2xl text-primary-900 mb-4">Border Process</h2>
                                    <ul className="space-y-3 mb-6">
                                        <li className="flex items-start gap-2 text-surface-600">
                                            <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
                                            You must show your passport and visa at the {route.fromCountry} exit.
                                        </li>
                                        <li className="flex items-start gap-2 text-surface-600">
                                            <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
                                            Then, you do the same at the {route.toCountry} entry point.
                                        </li>
                                        <li className="flex items-start gap-2 text-surface-600">
                                            <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
                                            Our drivers do this trip often and will tell you exactly where to go.
                                        </li>
                                    </ul>
                                </>
                            )}
                            
                            <a href="https://wa.me/966569487569" className="text-gold-600 font-bold hover:text-gold-500 inline-flex items-center gap-1 transition-colors mt-2">
                                Message now to check availability <ChevronRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {route.content && (
                        <div 
                            className="border-t border-surface-200 pt-10 text-surface-700 leading-relaxed text-base space-y-6 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-primary-900 [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:font-display [&_h3]:text-xl [&_h3]:text-primary-900 [&_h3]:mt-6 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-2 [&_a]:text-gold-600 [&_a]:underline [&_strong]:text-surface-900 [&_p]:mb-4 [&_table]:w-full [&_table]:border-collapse [&_table]:my-6 [&_table_th]:bg-primary-900 [&_table_th]:text-white [&_table_th]:border [&_table_th]:border-primary-900 [&_table_th]:p-3 [&_table_th]:text-left [&_table_th]:font-semibold [&_table_td]:border [&_table_td]:border-surface-200 [&_table_td]:p-3 [&_table_td]:text-surface-700 [&_table_tr:nth-child(even)]:bg-surface-50"
                            dangerouslySetInnerHTML={{ __html: route.content }}
                        />
                    )}
                </div>
            </section>

            {/* BOOKING / GET QUOTE SECTION */}
            <section className="section-padding bg-primary-900 text-white text-center">
                <div className="container-custom mx-auto max-w-2xl">
                    <h2 className="font-display text-3xl mb-4 text-gold-400">Want to know the fare?</h2>
                    <p className="text-surface-300 leading-relaxed mb-8">
                        Click the WhatsApp button below. Send your pickup location, drop-off city, and travel date. We will reply fast. To get exact fare and availability, message on WhatsApp.
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
                currentSlug={route.slug} 
                type="route" 
                originCity={route.from} 
                destinationCity={route.to} 
            />

            {/* Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            '@context': 'https://schema.org',
                            '@type': 'Service',
                            name: `${route.from} to ${route.to} Taxi Transfer`,
                            description: route.seoDescription ?? `Private taxi from ${route.from} to ${route.to}. Door-to-door service with professional drivers.`,
                            serviceType: isCrossBorder ? 'Cross-Border Private Taxi Transfer' : 'Private Intercity Taxi Transfer',
                            provider: {
                                '@type': 'LocalBusiness',
                                name: 'Airport Travel Taxis',
                                url: 'https://airporttraveltaxis.com',
                                telephone: '+966569487569',
                                areaServed: 'GCC — Saudi Arabia, UAE, Kuwait, Qatar, Bahrain',
                            },
                            areaServed: [
                                { '@type': 'City', name: route.from, containedInPlace: { '@type': 'Country', name: route.fromCountry } },
                                { '@type': 'City', name: route.to, containedInPlace: { '@type': 'Country', name: route.toCountry } },
                            ],
                            offers: {
                                '@type': 'Offer',
                                availability: 'https://schema.org/InStock',
                                availabilityStarts: '2026-01-01',
                                priceSpecification: {
                                    '@type': 'PriceSpecification',
                                    priceCurrency: route.fromCountry === 'Kuwait' ? 'KWD' : route.fromCountry === 'Qatar' ? 'QAR' : 'AED',
                                },
                            },
                        },
                        {
                            '@context': 'https://schema.org',
                            '@type': 'FAQPage',
                            mainEntity: mergedFaqs.map((f) => ({
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
                                { '@type': 'ListItem', position: 3, name: `${route.from} to ${route.to} Taxi`, item: `https://airporttraveltaxis.com/routes/${route.slug}` },
                            ],
                        },
                    ]),
                }}
            />
        </div>
    );
}
