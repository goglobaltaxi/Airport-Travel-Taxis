import { Metadata } from 'next';
import Link from 'next/link';
import { borderCrossings } from '@/lib/data';
import FAQ from '@/components/FAQ';
import RouteFinder from '@/components/RouteFinder';
import { notFound } from 'next/navigation';
import { ChevronRight, MapPin, Car, MessageSquare, CheckCircle2, Globe } from 'lucide-react';

export async function generateStaticParams() {
    return borderCrossings.map((border) => ({ slug: border.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const border = borderCrossings.find((b) => b.slug === params.slug);
    if (!border) return {};
    return {
        title: `${border.name} Taxi Service | Cross-Border Gulf`,
        description: `Direct taxi service crossing ${border.name}. Private car, driver guides you through the border. Message us on WhatsApp to get a quote.`,
        openGraph: {
            title: `${border.name} Taxi Service`,
            description: `Direct taxi service crossing ${border.name}. Private car, driver guides you through the border.`,
            url: `https://airporttraveltaxis.com/border/${border.slug}`,
        },
        alternates: {
            canonical: `https://airporttraveltaxis.com/border/${border.slug}`,
        },
    };
}

export default function BorderPage({ params }: { params: { slug: string } }) {
    const border = borderCrossings.find((b) => b.slug === params.slug);
    if (!border) notFound();

    const baseFaqs = [
        { question: "Do I need a hard copy of my visa?", answer: "Yes, always carry printed copies for the border crossing." },
        { question: "Will I change cars at the border?", answer: "No, you stay in the same car for the whole trip." },
        { question: "How long does the border crossing take?", answer: "It usually takes 30 to 60 minutes, sometimes more on busy days." },
        { question: "Does the driver help at customs?", answer: "Yes, drivers do this trip regularly and guide you clearly." },
        { question: "Can I travel at night?", answer: "Yes, drivers are available 24 hours every day." },
        { question: "How do I book this trip?", answer: "Send your details on WhatsApp and we will confirm the ride." },
        { question: "Can I stop for food during the trip?", answer: "Yes, just ask your driver to stop for a short break." },
        { question: "Is this a shared taxi?", answer: "No, this is always a private car just for you and your group." },
        { question: "Do drivers speak English?", answer: "Yes, drivers communicate clearly in English or Arabic." },
        { question: "What documents do I need?", answer: "Bring your passport, visa, and any entry permits. Carry printed copies." },
    ];

    const mergedFaqs = [...baseFaqs, ...(border.faq || [])].slice(0, 10);

    return (
        <div className="pt-20">
            {/* DIRECT ANSWER (TOP) */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto max-w-4xl">
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6 font-medium flex-wrap">
                        <Link href="/" className="hover:text-gold-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-surface-900 truncate">{border.name}</span>
                    </div>

                    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-surface-200">
                        <div className="inline-flex items-center gap-2 mb-4 text-sm font-semibold text-primary-900 bg-surface-100 px-4 py-1.5 rounded-full border border-surface-200">
                            <Globe className="w-4 h-4 text-gold-500" />
                            Official Border Crossing
                        </div>
                        <h1 className="font-display text-4xl text-primary-900 mb-6 leading-tight">
                            {border.name} Taxi Transfer
                        </h1>
                        <p className="text-surface-700 text-lg leading-relaxed mb-6">
                            This service takes you through {border.name} in a private car. The driver knows this crossing well and will guide you. Border wait times vary by day. To get the exact quote, you can contact on WhatsApp.
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
                                This is a private car service that crosses {border.name} between {border.countryA} and {border.countryB}. You stay in the same car the whole way. It is for people who want a simple, direct road trip with no transfers.
                            </p>

                            <h2 className="font-display text-2xl text-primary-900 mb-4">How This Trip Works</h2>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                                    <p className="text-surface-600"><strong>Pickup:</strong> Driver picks you up from your home, hotel, or airport.</p>
                                </li>
                                <li className="flex gap-3">
                                    <Car className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                                    <p className="text-surface-600"><strong>Travel:</strong> You drive towards the border crossing point.</p>
                                </li>
                                <li className="flex gap-3">
                                    <Globe className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                                    <p className="text-surface-600"><strong>Border:</strong> You show your documents at exit and entry checkpoints. The driver will tell you where to go.</p>
                                </li>
                                <li className="flex gap-3">
                                    <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                                    <p className="text-surface-600"><strong>Drop-off:</strong> The driver takes you directly to your final destination.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-surface-50 p-6 md:p-8 rounded-2xl border border-surface-200">
                            <h2 className="font-display text-2xl text-primary-900 mb-4">Border Process</h2>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-2 text-surface-600">
                                    <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                    You exit {border.countryA} with a passport stamp.
                                </li>
                                <li className="flex items-start gap-2 text-surface-600">
                                    <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                    You enter {border.countryB} with a visa or entry stamp.
                                </li>
                                <li className="flex items-start gap-2 text-surface-600">
                                    <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                    The driver handles vehicle paperwork while you do the passport checks.
                                </li>
                                <li className="flex items-start gap-2 text-surface-600">
                                    <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                    Drivers usually help at the border — they know what to expect.
                                </li>
                            </ul>

                            {border.popularRoutes && border.popularRoutes.length > 0 && (
                                <>
                                    <h2 className="font-display text-xl text-primary-900 mb-3">Common Routes via This Border</h2>
                                    <ul className="space-y-2 mb-6">
                                        {border.popularRoutes.slice(0, 4).map((route) => (
                                            <li key={route} className="flex items-center gap-2 text-surface-600">
                                                <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
                                                <span className="text-sm">{route}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            <a href="https://wa.me/966569487569" className="text-gold-600 font-bold hover:text-gold-500 inline-flex items-center gap-1 transition-colors mt-2">
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
                    <FAQ title="Frequently Asked Questions" items={mergedFaqs} />
                </div>
            </section>

            {/* Route Finder */}
            <section className="section-padding bg-white border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <div className="text-center mb-6">
                        <p className="text-surface-600">Most people prefer direct taxi for this crossing. Search any route below.</p>
                    </div>
                    <RouteFinder />
                </div>
            </section>

            {/* Other Borders */}
            <section className="section-padding bg-surface-100 border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl text-surface-900 mb-6">Other Border Crossings</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {borderCrossings.filter((b) => b.slug !== border.slug).map((b) => (
                            <Link key={b.slug} href={`/border/${b.slug}`} className="glass-card-hover p-5 bg-white border border-surface-200 rounded-2xl flex items-center justify-between">
                                <div>
                                    <p className="font-semibold text-surface-900">🌍 {b.name}</p>
                                    <p className="text-xs text-surface-500 mt-1">{b.countryA} — {b.countryB}</p>
                                </div>
                                <ChevronRight className="w-4 h-4 text-gold-600 shrink-0" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
                { '@context': 'https://schema.org', '@type': 'Service', name: `${border.name} Border Transfer Service`, description: `Private taxi crossing ${border.name} between ${border.countryA} and ${border.countryB}.`, provider: { '@type': 'LocalBusiness', name: 'Airport Travel Taxis', url: 'https://airporttraveltaxis.com' }, areaServed: [border.countryA, border.countryB].map((c) => ({ '@type': 'Country', name: c })) },
                { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: mergedFaqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) },
            ]) }} />
        </div>
    );
}
