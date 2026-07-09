import { Metadata } from 'next';
import Link from 'next/link';
import { borderCrossings, vehicles } from '@/lib/data';
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
    const title = border.seoTitle || `${border.name} Taxi Service | Cross-Border Gulf`;
    const description = border.seoDescription || `Direct taxi service crossing ${border.name}. Private car, driver guides you through the border. Message us on WhatsApp to get a quote.`;
    return {
        title,
        description,
        openGraph: {
            title,
            description,
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
                        {border.image && (
                            <img
                                src={border.image}
                                alt={`${border.name} — ${border.countryA} to ${border.countryB} crossing`}
                                className="w-full h-auto max-h-96 object-cover rounded-2xl mb-6"
                            />
                        )}
                        <div className="inline-flex items-center gap-2 mb-4 text-sm font-semibold text-primary-900 bg-surface-100 px-4 py-1.5 rounded-full border border-surface-200">
                            <Globe className="w-4 h-4 text-gold-500" />
                            Official Border Crossing
                        </div>
                        <h1 className="font-display text-3xl md:text-4xl text-primary-900 mb-6 leading-tight">
                            {border.seoHeading || `${border.name} Taxi Transfer`}
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
                                {border.longDescription || `This is a private car service that crosses ${border.name} between ${border.countryA} and ${border.countryB}. You stay in the same car the whole way. It is for people who want a simple, direct road trip with no transfers.`}
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

            {/* PRICING CHART */}
            {border.pricingTable && border.pricingTable.length > 0 && (
                <section className="section-padding bg-surface-50 border-b border-surface-200">
                    <div className="container-custom mx-auto max-w-4xl">
                        <div className="text-center mb-10">
                            <h2 className="font-display text-3xl text-primary-900 mb-4">
                                {border.name} Taxi Price Chart
                            </h2>
                            <p className="text-surface-600 max-w-2xl mx-auto">
                                Check out our flat-rate estimates for popular cross-border routes passing through the {border.name}. Prices are all-inclusive of toll charges and driver border transit support.
                            </p>
                        </div>
                        
                        <div className="overflow-x-auto rounded-2xl border border-surface-200 shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-primary-900 text-white">
                                        <th className="p-4 md:p-5 font-semibold text-sm">Route</th>
                                        <th className="p-4 md:p-5 font-semibold text-sm text-center">Executive Sedan</th>
                                        <th className="p-4 md:p-5 font-semibold text-sm text-center">Large SUV</th>
                                        <th className="p-4 md:p-5 font-semibold text-sm text-center">Executive Van</th>
                                        <th className="p-4 md:p-5 font-semibold text-sm text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-surface-200">
                                    {border.pricingTable.map((row, index) => (
                                        <tr key={index} className="hover:bg-surface-50 transition-colors">
                                            <td className="p-4 md:p-5 font-medium text-surface-900 text-sm md:text-base">
                                                🚗 {row.route}
                                            </td>
                                            <td className="p-4 md:p-5 text-center font-medium text-surface-700 text-sm md:text-base">
                                                {row.sedanPrice}
                                            </td>
                                            <td className="p-4 md:p-5 text-center font-medium text-surface-700 text-sm md:text-base">
                                                {row.suvPrice}
                                            </td>
                                            <td className="p-4 md:p-5 text-center font-medium text-surface-700 text-sm md:text-base">
                                                {row.vanPrice}
                                            </td>
                                            <td className="p-4 md:p-5 text-center">
                                                <a 
                                                    href={`https://wa.me/966569487569?text=${encodeURIComponent(`Hi, I want to book a taxi for route: ${row.route}`)}`}
                                                    className="inline-flex items-center justify-center bg-green-600 hover:bg-green-500 text-white font-bold text-xs px-4 py-2 rounded-lg transition-all shadow-sm"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Book Now
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-surface-500 mt-4 text-center italic">
                            *Prices are indicative and subject to seasonal adjustments or special events. Contact us via WhatsApp for a final, guaranteed quote.
                        </p>
                    </div>
                </section>
            )}

            {/* BEST TIME TO CROSS CHART */}
            {border.waitTimeChart && border.waitTimeChart.length > 0 && (
                <section className="section-padding bg-white border-b border-surface-200">
                    <div className="container-custom mx-auto max-w-4xl">
                        <div className="text-center mb-10">
                            <h2 className="font-display text-3xl text-primary-900 mb-4">
                                Best Time to Cross {border.name}
                            </h2>
                            <p className="text-surface-600 max-w-2xl mx-auto">
                                Wait times at {border.name} vary by day and time. Use this guide to plan your crossing and avoid the busiest queues.
                            </p>
                        </div>
                        <div className="bg-surface-50 rounded-2xl border border-surface-200 p-6 md:p-8 space-y-4">
                            {border.waitTimeChart.map((row, index) => {
                                const barColor = row.level >= 85 ? 'bg-red-500' : row.level >= 60 ? 'bg-orange-500' : row.level >= 40 ? 'bg-amber-400' : 'bg-green-500';
                                const textColor = row.level >= 85 ? 'text-red-600' : row.level >= 60 ? 'text-orange-600' : row.level >= 40 ? 'text-amber-600' : 'text-green-600';
                                return (
                                    <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                        <span className="text-sm font-medium text-surface-700 sm:w-44 shrink-0">{row.label}</span>
                                        <div className="flex-1 bg-surface-200 rounded-full h-3.5 overflow-hidden">
                                            <div className={`h-full rounded-full ${barColor}`} style={{ width: `${row.level}%` }} />
                                        </div>
                                        <span className={`text-xs font-semibold ${textColor} sm:w-48 shrink-0`}>{row.text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* FLEET GALLERY WITH CAR IMAGES */}
            <section className="section-padding bg-white border-b border-surface-200">
                <div className="container-custom mx-auto max-w-5xl">
                    <div className="text-center mb-10">
                        <h2 className="font-display text-3xl text-primary-900 mb-4">
                            Premium Fleet for {border.name} Crossing
                        </h2>
                        <p className="text-surface-600 max-w-2xl mx-auto">
                            Travel in ultimate luxury, comfort, and safety. We offer a curated selection of late-model, air-conditioned vehicles driven by professional bilingual chauffeurs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {vehicles.filter(v => ['s-class', 'gmc', 'vito', 'sprinter'].includes(v.id)).map((vehicle) => (
                            <div key={vehicle.id} className="group overflow-hidden flex flex-col h-full border border-surface-200 hover:border-gold-500/50 hover:shadow-lg transition-all duration-300 bg-white rounded-2xl">
                                {/* Image Box */}
                                <div className="h-44 bg-gradient-to-br from-surface-50 to-surface-100 relative overflow-hidden flex items-center justify-center p-4">
                                    {vehicle.image && (
                                        <img 
                                            src={vehicle.image} 
                                            alt={vehicle.name} 
                                            className="max-w-[90%] max-h-[85%] object-contain group-hover:scale-105 transition-transform duration-500 animate-fade-in"
                                        />
                                    )}
                                    <div className="absolute top-3 right-3 bg-primary-900 text-gold-400 text-[9px] uppercase tracking-wider font-bold px-2 py-1 rounded">
                                        {vehicle.category}
                                    </div>
                                </div>

                                {/* Content Box */}
                                <div className="p-5 flex flex-col flex-grow">
                                    <h3 className="font-display text-base text-primary-900 font-bold mb-1 group-hover:text-gold-600 transition-colors">
                                        {vehicle.name}
                                    </h3>
                                    <p className="text-xs text-surface-500 line-clamp-2 min-h-[32px] mb-4">
                                        {vehicle.description}
                                    </p>

                                    {/* Capacity specs */}
                                    <div className="flex gap-4 mb-4 text-xs text-surface-700 font-semibold border-t border-b border-surface-100 py-2">
                                        <span className="flex items-center gap-1">👤 {vehicle.passengers} Pax</span>
                                        <span className="flex items-center gap-1">🧳 {vehicle.luggage} Bags</span>
                                    </div>

                                    {/* Features list */}
                                    <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                                        {vehicle.features.slice(0, 2).map((feat) => (
                                            <span key={feat} className="text-[10px] bg-surface-50 border border-surface-200 text-surface-600 px-2 py-0.5 rounded">
                                                {feat}
                                            </span>
                                        ))}
                                    </div>

                                    <a 
                                        href={`https://wa.me/966569487569?text=${encodeURIComponent(`Hi, I want to book the ${vehicle.name} taxi crossing the ${border.name}`)}`}
                                        className="btn-primary text-center text-xs py-2.5 rounded-xl w-full font-bold bg-primary-900 border-primary-900 text-white hover:bg-gold-600 hover:border-gold-600 transition-colors shadow-sm block mt-auto"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Book {vehicle.name.split(' ')[0]}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DETAILED SEO ARTICLE SECTION */}
            {border.detailedSeoContent && border.detailedSeoContent.length > 0 && (
                <section className="section-padding bg-surface-50 border-b border-surface-200">
                    <div className="container-custom mx-auto max-w-3xl">
                        <article className="prose prose-surface max-w-none">
                            {border.detailedSeoContent.map((section, sIndex) => (
                                <div key={sIndex} className="mb-10 last:mb-0">
                                    <h2 className="font-display text-2xl md:text-3xl text-primary-900 font-bold mb-4">
                                        {section.title}
                                    </h2>
                                    {section.paragraphs.map((para, pIndex) => (
                                        <p key={pIndex} className="text-surface-700 text-base md:text-lg leading-relaxed mb-4 last:mb-0">
                                            {para}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </article>
                    </div>
                </section>
            )}

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
