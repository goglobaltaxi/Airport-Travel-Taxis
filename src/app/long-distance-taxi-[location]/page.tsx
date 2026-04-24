import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { longDistancePages } from '@/lib/longDistanceData';
import { MapPin, Car, ChevronRight, MessageSquare, CheckCircle2 } from 'lucide-react';

interface Props { params: { location: string }; }

export async function generateStaticParams() {
    return longDistancePages.map((page) => ({ location: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const page = longDistancePages.find((p) => p.slug === params.location);
    if (!page) return {};
    return {
        title: page.title,
        description: `Direct long distance taxi service in ${page.location}. Simple private car from city to city. Message us on WhatsApp to get a quick quote.`,
        openGraph: { title: page.title, description: page.overview, url: `https://airporttraveltaxis.com/long-distance-taxi-${page.slug}` },
        alternates: { canonical: `https://airporttraveltaxis.com/long-distance-taxi-${page.slug}` },
    };
}

export default function LongDistancePage({ params }: Props) {
    const page = longDistancePages.find((p) => p.slug === params.location);
    if (!page) notFound();

    const faqs = [
        { question: `Do you pick up from my home in ${page.location}?`, answer: "Yes, we pick you up from any hotel, home, or office address." },
        { question: "How do I book this trip?", answer: "Send your location and travel date on WhatsApp and we will confirm." },
        { question: "Is this a private car?", answer: "Yes, the car is just for you and your group. No shared rides." },
        { question: "Can I travel at night?", answer: "Yes, we run 24 hours every day." },
        { question: "Do you do cross-border trips?", answer: "Yes, we handle out-of-country long distance trips too." },
        { question: "What cars are available?", answer: "We have sedans, SUVs, vans, and minibuses. Tell us your group size on WhatsApp." },
        { question: "Can I stop on the way for food?", answer: "Yes, just ask your driver to stop for a break." },
        { question: "Do drivers speak English?", answer: "Yes, drivers speak both English and Arabic." },
        ...(page.faq || [])
    ].slice(0, 10);

    return (
        <div className="pt-20">
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto max-w-4xl">
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6 font-medium flex-wrap">
                        <Link href="/" className="hover:text-gold-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-surface-900 truncate">Long Distance Taxi {page.location}</span>
                    </div>
                    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-surface-200">
                        <h1 className="font-display text-4xl text-primary-900 mb-6 leading-tight">
                            Long Distance Taxi Service in {page.location}
                        </h1>
                        <p className="text-surface-700 text-lg leading-relaxed mb-6">
                            We provide private car trips from {page.location} to other cities in the region. Travel time depends on your exact route and distance. To get the exact quote, you can contact on WhatsApp.
                        </p>
                        <a href="https://wa.me/966569487569" className="btn-primary inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg">
                            <MessageSquare className="w-5 h-5" />
                            Get a quote on WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white border-b border-surface-200">
                <div className="container-custom mx-auto max-w-4xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="font-display text-2xl text-primary-900 mb-4">About This Service</h2>
                            <p className="text-surface-600 leading-relaxed mb-6">
                                This is a private car service for long trips starting from {page.location}. It is for people who want to travel to other cities, industrial areas, or neighboring countries without switching vehicles.
                            </p>
                            <h2 className="font-display text-2xl text-primary-900 mb-4">How It Works</h2>
                            <ul className="space-y-4">
                                <li className="flex gap-3"><MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" /><p className="text-surface-600"><strong>Pickup:</strong> Driver comes to your home, hotel, or office in {page.location}.</p></li>
                                <li className="flex gap-3"><Car className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" /><p className="text-surface-600"><strong>Travel:</strong> You sit back while we drive directly to your destination.</p></li>
                                <li className="flex gap-3"><MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" /><p className="text-surface-600"><strong>Drop-off:</strong> We drop you at the exact address with your luggage.</p></li>
                            </ul>
                        </div>
                        <div className="bg-surface-50 p-6 md:p-8 rounded-2xl border border-surface-200">
                            <h2 className="font-display text-2xl text-primary-900 mb-4">Good to Know</h2>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-2 text-surface-600"><CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />Sedans, SUVs, vans, and minibuses are available.</li>
                                <li className="flex items-start gap-2 text-surface-600"><CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />No shared rides — private car only.</li>
                                <li className="flex items-start gap-2 text-surface-600"><CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />Available 24 hours every day.</li>
                                <li className="flex items-start gap-2 text-surface-600"><CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />Most people prefer direct taxi for long routes to save time.</li>
                            </ul>
                            {page.popularRoutes && page.popularRoutes.length > 0 && (
                                <>
                                    <h3 className="font-semibold text-primary-900 mb-3">Popular Routes</h3>
                                    <ul className="space-y-2">
                                        {page.popularRoutes.slice(0, 4).map((route) => (
                                            <li key={route} className="flex items-center gap-2 text-surface-600 text-sm">
                                                <ChevronRight className="w-4 h-4 text-gold-500 shrink-0" />
                                                {route}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-primary-900 text-white text-center">
                <div className="container-custom mx-auto max-w-2xl">
                    <h2 className="font-display text-3xl mb-4 text-gold-400">Want to know the fare?</h2>
                    <p className="text-surface-300 leading-relaxed mb-8">Send your pickup location, drop-off city, and travel date on WhatsApp. We will reply fast. To get exact fare and availability, message on WhatsApp.</p>
                    <a href="https://wa.me/966569487569" className="bg-white text-primary-900 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-3">
                        <MessageSquare className="w-5 h-5 text-green-600" />
                        Contact now for quick response
                    </a>
                </div>
            </section>

            <section className="section-padding bg-surface-50 border-t border-surface-200">
                <div className="container-custom mx-auto max-w-3xl">
                    <h2 className="font-display text-2xl text-surface-900 mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((item, i) => (
                            <div key={i} className="bg-white border border-surface-200 rounded-2xl p-6">
                                <h3 className="font-bold text-surface-900 mb-2">{item.question}</h3>
                                <p className="text-surface-600">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {page.relatedPages && page.relatedPages.length > 0 && (
                <section className="section-padding bg-white border-t border-surface-200">
                    <div className="container-custom mx-auto max-w-4xl">
                        <h2 className="font-display text-2xl text-surface-900 mb-6">Related Services</h2>
                        <div className="flex flex-wrap gap-3">
                            {page.relatedPages.map((rel) => (
                                <Link key={rel.url} href={rel.url} className="text-gold-600 hover:text-gold-500 font-semibold text-sm border border-gold-200 rounded-full px-4 py-2 hover:bg-gold-50 transition-colors">
                                    {rel.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
