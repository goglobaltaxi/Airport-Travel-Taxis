import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { gccCountries, cities, airports, routes, borderCrossings, generalFAQ } from '@/lib/data';
import FAQ from '@/components/FAQ';
import RouteFinder from '@/components/RouteFinder';
import { ChevronRight, Plane, Globe, MapPin } from 'lucide-react';

export async function generateStaticParams() {
    return gccCountries.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({ params }: { params: { country: string } }): Promise<Metadata> {
    const country = gccCountries.find((c) => c.slug === params.country);
    if (!country) return {};
    const title = `Taxi & Airport Transfer Services in ${country.name} | Airport Travel Taxis`;
    const description = `Pre-booked private taxi, airport transfer and cross-border chauffeur services across ${country.name}. Serving all major cities and airports, 24/7.`;
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `https://airporttraveltaxis.com/${country.slug}`,
        },
        alternates: {
            canonical: `https://airporttraveltaxis.com/${country.slug}`,
        },
    };
}

export default function CountryPage({ params }: { params: { country: string } }) {
    const country = gccCountries.find((c) => c.slug === params.country);
    if (!country) notFound();

    const countryCities = cities.filter((c) => country.aliases.includes(c.country));
    const countryAirports = airports.filter((a) => country.aliases.includes(a.country));
    const countryBorders = borderCrossings.filter((b) => country.aliases.includes(b.countryA) || country.aliases.includes(b.countryB));
    const countryRoutes = routes.filter((r) => country.aliases.includes(r.fromCountry) || country.aliases.includes(r.toCountry)).slice(0, 9);

    const faqs = [
        { question: `Do you offer pre-booked airport transfers in ${country.name}?`, answer: `Yes, we provide private, pre-booked airport transfers at all major airports in ${country.name}, with flight tracking and a meet & greet service.` },
        { question: `Can I cross the border from ${country.name} in the same taxi?`, answer: 'Yes, our vehicles are permitted to cross GCC land borders directly, so there is no need to change cars partway through your trip.' },
        { question: `Is the service available 24/7 in ${country.name}?`, answer: `Yes, our drivers in ${country.name} are available around the clock for airport pickups, intercity travel and cross-border trips.` },
        ...generalFAQ.slice(0, 3),
    ];

    return (
        <div className="pt-20">
            {/* HERO */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto max-w-5xl">
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6 font-medium">
                        <Link href="/" className="hover:text-gold-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-surface-900">{country.name}</span>
                    </div>

                    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-surface-200">
                        <div className="inline-flex items-center gap-2 mb-4 text-sm font-semibold text-primary-900 bg-surface-100 px-4 py-1.5 rounded-full border border-surface-200">
                            <span className="text-xl">{country.flag}</span> GCC Country
                        </div>
                        <h1 className="font-display text-3xl md:text-4xl text-primary-900 mb-6 leading-tight">
                            Taxi &amp; Airport Transfer Services in {country.name}
                        </h1>
                        <p className="text-surface-700 text-lg leading-relaxed mb-6">
                            Pre-booked private car transfers, intercity rides and cross-border journeys across {country.name}. Professional drivers, fixed prices and 24/7 availability.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="https://wa.me/966590209905" className="btn-primary flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 border-green-600 text-white shadow-lg w-full sm:w-auto px-8 py-3 rounded-xl font-bold">
                                💬 Get a quote on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CITIES */}
            {countryCities.length > 0 && (
                <section className="section-padding bg-white border-b border-surface-200">
                    <div className="container-custom mx-auto max-w-5xl">
                        <h2 className="font-display text-2xl text-primary-900 mb-8">Cities We Serve in {country.name}</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {countryCities.map((c) => (
                                <Link key={c.slug} href={`/city/${c.slug}`} className="glass-card-hover p-5 bg-white border border-surface-200 rounded-2xl flex items-center justify-between">
                                    <div className="min-w-0">
                                        <p className="font-semibold text-surface-900 flex items-center gap-2"><MapPin className="w-4 h-4 text-gold-600 shrink-0" /> {c.name}</p>
                                        <p className="text-xs text-surface-500 mt-1 line-clamp-1">{c.description}</p>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-gold-600 shrink-0" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* AIRPORTS */}
            {countryAirports.length > 0 && (
                <section className="section-padding bg-surface-50 border-b border-surface-200">
                    <div className="container-custom mx-auto max-w-5xl">
                        <h2 className="font-display text-2xl text-primary-900 mb-8">Airports in {country.name}</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {countryAirports.map((a) => (
                                <Link key={a.slug} href={`/airport/${a.slug}`} className="glass-card-hover p-5 bg-white border border-surface-200 rounded-2xl flex items-center justify-between">
                                    <div className="min-w-0">
                                        <p className="font-semibold text-surface-900 flex items-center gap-2"><Plane className="w-4 h-4 text-gold-600 shrink-0" /> {a.name}</p>
                                        <p className="text-xs text-surface-500 mt-1">{a.code} · {a.city}</p>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-gold-600 shrink-0" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CROSS-BORDER ROUTES */}
            {countryRoutes.length > 0 && (
                <section className="section-padding bg-white border-b border-surface-200">
                    <div className="container-custom mx-auto max-w-5xl">
                        <h2 className="font-display text-2xl text-primary-900 mb-8">Cross-Border Routes To &amp; From {country.name}</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {countryRoutes.map((r) => (
                                <Link key={r.slug} href={`/routes/${r.slug}`} className="glass-card-hover p-5 bg-white border border-surface-200 rounded-2xl flex items-center justify-between">
                                    <div className="min-w-0">
                                        <p className="font-semibold text-surface-900">{r.from} → {r.to}</p>
                                        <p className="text-xs text-surface-500 mt-1">{r.duration}</p>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-gold-600 shrink-0" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* BORDER CROSSINGS */}
            {countryBorders.length > 0 && (
                <section className="section-padding bg-surface-50 border-b border-surface-200">
                    <div className="container-custom mx-auto max-w-5xl">
                        <h2 className="font-display text-2xl text-primary-900 mb-8">Border Crossings Serving {country.name}</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {countryBorders.map((b) => (
                                <Link key={b.slug} href={`/border/${b.slug}`} className="glass-card-hover p-5 bg-white border border-surface-200 rounded-2xl flex items-center justify-between">
                                    <div className="min-w-0">
                                        <p className="font-semibold text-surface-900 flex items-center gap-2"><Globe className="w-4 h-4 text-gold-600 shrink-0" /> {b.name}</p>
                                        <p className="text-xs text-surface-500 mt-1">{b.countryA} — {b.countryB}</p>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-gold-600 shrink-0" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="section-padding bg-primary-900 text-white text-center">
                <div className="container-custom mx-auto max-w-2xl">
                    <h2 className="font-display text-3xl mb-4 text-gold-400">Book Your Ride in {country.name}</h2>
                    <p className="text-surface-300 leading-relaxed mb-8">
                        Send your pickup location, drop-off and travel date on WhatsApp for a fast, fixed-price quote.
                    </p>
                    <a href="https://wa.me/966590209905" className="bg-white text-primary-900 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-3">
                        💬 Contact now for a quick response
                    </a>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding bg-surface-50 border-t border-surface-200">
                <div className="container-custom mx-auto max-w-3xl">
                    <FAQ title={`Frequently Asked Questions — ${country.name}`} items={faqs} />
                </div>
            </section>

            {/* ROUTE FINDER */}
            <section className="section-padding bg-white border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <RouteFinder />
                </div>
            </section>

            {/* OTHER COUNTRIES */}
            <section className="section-padding bg-surface-100 border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl text-surface-900 mb-6">Other GCC Countries</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {gccCountries.filter((c) => c.slug !== country.slug).map((c) => (
                            <Link key={c.slug} href={`/${c.slug}`} className="glass-card-hover p-5 bg-white border border-surface-200 rounded-2xl flex items-center justify-between">
                                <p className="font-semibold text-surface-900">{c.flag} {c.name}</p>
                                <ChevronRight className="w-4 h-4 text-gold-600 shrink-0" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SCHEMA */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
                {
                    '@context': 'https://schema.org',
                    '@type': 'Service',
                    name: `Taxi & Chauffeur Service in ${country.name}`,
                    description: `Private, pre-booked taxi and airport transfer services across ${country.name}.`,
                    provider: { '@type': 'LocalBusiness', name: 'Airport Travel Taxis', url: 'https://airporttraveltaxis.com' },
                    areaServed: { '@type': 'Country', name: country.name },
                },
                {
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
                },
            ]) }} />
        </div>
    );
}
