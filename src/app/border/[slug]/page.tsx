import { Metadata } from 'next';
import Link from 'next/link';
import { borderCrossings, routes } from '@/lib/data';
import BookingWidget from '@/components/BookingWidget';
import FAQ from '@/components/FAQ';
import { notFound } from 'next/navigation';
import StructuredInformationBlocks from '@/components/StructuredInformationBlocks';
import { ChevronRight, ShieldCheck, FileText, Globe, Clock, MapPin } from 'lucide-react';

export async function generateStaticParams() {
    return borderCrossings.map((border) => ({ slug: border.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const border = borderCrossings.find((b) => b.slug === params.slug);
    if (!border) return {};
    return {
        title: `${border.name} Taxi Service | Cross-Border Gulf`,
        description: border.description,
        openGraph: {
            title: `${border.name} Taxi & Transfer Service | Airport Travel Taxis`,
            description: border.description,
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

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6">
                        <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
                        <span>/</span>
                        <span>Borders</span>
                        <span>/</span>
                        <span className="text-surface-900">{border.name}</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <span className="text-sm text-primary-700 font-medium">🌍 Official Border Crossing</span>
                            </div>
                            <h1 className="font-display text-3xl lg:text-[42px] lg:leading-[48px] text-surface-900 mb-4">
                                {border.name} <span className="text-primary-600">Taxi Transfer</span>
                            </h1>
                            <p className="text-surface-600 text-lg leading-relaxed mb-6">{border.longDescription}</p>

                             {/* Border Transfer Essentials Block */}
                             <div className="bg-primary-50 rounded-xl p-5 mb-8 border border-primary-100">
                                 <h2 className="font-semibold text-primary-900 mb-3 flex items-center gap-2">
                                     <span className="bg-primary-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">⭐</span>
                                     Border Transfer Essentials
                                 </h2>
                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                                     <div className="flex items-start gap-2">
                                         <FileText className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                                         <span className="text-sm text-surface-700">Customs Documentation Handled</span>
                                     </div>
                                     <div className="flex items-start gap-2">
                                         <Globe className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                                         <span className="text-sm text-surface-700">Cross-Border Permits Ready</span>
                                     </div>
                                     <div className="flex items-start gap-2">
                                         <ShieldCheck className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                                         <span className="text-sm text-surface-700">Experienced Border Drivers</span>
                                     </div>
                                     <div className="flex items-start gap-2">
                                         <Clock className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                                         <span className="text-sm text-surface-700">24/7 Crossing Support</span>
                                     </div>
                                 </div>
                                 <a href="#booking-widget" className="w-full btn-primary !py-2.5 text-sm flex items-center justify-center gap-2 text-center">
                                     Book My Cross-Border Taxi <ChevronRight className="w-4 h-4" />
                                 </a>
                             </div>

                            {/* Services */}
                            <div className="glass-card p-6">
                                <h3 className="font-display text-lg text-surface-900 mb-4">Service Included</h3>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {border.services.map((service) => (
                                        <div key={service} className="flex items-center gap-2">
                                            <span className="text-green-600">✓</span>
                                            <span className="text-surface-700 text-sm">{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="sticky top-24" id="booking-widget">
                            <BookingWidget compact />
                        </div>
                    </div>
                </div>
            </section>

            {/* Structured Information Blocks */}
            <StructuredInformationBlocks 
                startLocation={border.name}
                endLocation="International Transit Destination"
                type="Cross-Border Transfer"
                travelTime="Variable (Subject to Border Control)"
                pickup="Scheduled Airport or City Location"
                dropoff="International Destination Address"
                relatedLinks={[
                    { name: 'GCC Travel Guide', url: '/gcc-travel-cross-border-taxi' },
                    { name: 'Riyadh to Doha Route', url: '/routes/riyadh-to-doha-taxi' },
                    { name: 'Dammam to Bahrain Route', url: '/routes/bahrain-to-saudi-arabia-taxi' }
                ]}
            />

            {/* Border Crossing Process */}
            <section className="py-16 bg-white border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <div className="max-w-4xl">
                        <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-6 flex items-center gap-3">
                            <span className="p-2 bg-primary-100 rounded-lg"><Clock className="w-6 h-6 text-primary-600" /></span>
                            Border Crossing Process
                        </h2>
                        <div className="prose prose-surface max-w-none">
                            <p className="text-surface-600 text-lg leading-relaxed">
                                {border.crossingProcess}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Travel Routes */}
            {/* Travel Routes */}
            <section className="py-16 bg-surface-50 border-y border-surface-200">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-8">
                        Common Transfer Routes via <span className="text-primary-600">{border.name}</span>
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {border.popularRoutes.map((route) => (
                            <div key={route} className="bg-white p-4 rounded-xl border border-surface-200 shadow-sm flex items-center gap-3">
                                <MapPin className="w-4 h-4 text-primary-600" />
                                <span className="text-surface-700 font-medium text-sm">{route}</span>
                            </div>
                        ))}
                    </div>
                    {/* Internal Links to related services */}
                    <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8 border-t border-surface-200 pt-6">
                        <span className="text-surface-500 text-sm font-semibold w-full lg:w-auto">Popular Connections:</span>
                        <Link href="/routes/riyadh-to-doha-taxi" className="text-primary-600 hover:text-primary-700 font-medium text-sm">Riyadh to Doha</Link>
                        <Link href="/routes/bahrain-to-saudi-arabia-taxi" className="text-primary-600 hover:text-primary-700 font-medium text-sm">Dammam to Bahrain</Link>
                        <Link href="/routes/kuwait-city-to-riyadh-taxi" className="text-primary-600 hover:text-primary-700 font-medium text-sm">Kuwait to Riyadh</Link>
                        <Link href="/airport/riyadh-airport-taxi" className="text-primary-600 hover:text-primary-700 font-medium text-sm">Riyadh Airport</Link>
                        <Link href="/airport/doha-airport-taxi" className="text-primary-600 hover:text-primary-700 font-medium text-sm">Doha Airport</Link>
                        <Link href="/airport/kuwait-airport-taxi" className="text-primary-600 hover:text-primary-700 font-medium text-sm">Kuwait Airport</Link>
                        <Link href="/city/dubai" className="text-primary-600 hover:text-primary-700 font-medium text-sm">Dubai Chauffeur</Link>
                    </div>

                    {/* Dynamically Added Missing Routes */}
                    <div className="flex flex-wrap items-center gap-3 mt-4">
                        <span className="text-surface-500 text-sm font-semibold w-full lg:w-auto">Featured Border Routes:</span>
                        {routes
                            .filter((r) => border.popularRoutes.some((pr) => pr.toLowerCase().includes(r.from.toLowerCase()) && pr.toLowerCase().includes(r.to.toLowerCase())))
                            .slice(0, 6)
                            .map((r) => (
                                <Link key={`feat-${r.slug}`} href={`/routes/${r.slug}`} className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                                    {r.from} to {r.to} taxi
                                </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vehicle Options */}
            <section className="py-16 bg-white border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-8 text-center text-balance">Professional Vehicle Options</h2>
                    <div className="glass-card p-8 bg-surface-50 border border-surface-200 rounded-3xl">
                        <p className="text-surface-600 text-lg leading-relaxed mb-10 text-center max-w-3xl mx-auto">
                            {border.vehiclesInfo}
                        </p>
                        <div className="grid sm:grid-cols-3 gap-6 text-center">
                            <div className="p-6 bg-white rounded-2xl border border-surface-100 shadow-sm">
                                <h4 className="font-semibold text-primary-900 mb-2">Individual Travelers</h4>
                                <p className="text-xs text-surface-500 uppercase tracking-wider mb-2 font-medium">Suitable Sedan & Coupe</p>
                                <p className="text-sm text-surface-600">Mercedes S-Class, BMW, Genesis, Ford Taurus, Camry</p>
                            </div>
                            <div className="p-6 bg-white rounded-2xl border border-surface-100 shadow-sm">
                                <h4 className="font-semibold text-primary-900 mb-2">Family Travel</h4>
                                <p className="text-xs text-surface-500 uppercase tracking-wider mb-2 font-medium">Spacious SUV & MPV</p>
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

            {/* FAQ */}
            <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto">
                    <FAQ items={border.faq} title={`${border.name} FAQ`} />
                </div>
            </section>

             {/* Booking Bottom Section */}
             <section className="section-padding bg-primary-900 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-primary-400 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
                </div>
                
                <div className="container-custom mx-auto text-center relative z-10">
                    <h2 className="font-display text-3xl lg:text-4xl mb-6">Arrange Your Border Taxi Transfer</h2>
                    <p className="text-primary-100 text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
                        {border.bookingInfo}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="#hero" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-900 font-bold rounded-xl transition-all hover:bg-primary-50">
                            Book This Border Route
                        </Link>
                        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary-400 text-white font-bold rounded-xl transition-all hover:border-white">
                            Contact Support
                        </Link>
                    </div>
                </div>
            </section>

            {/* Other Borders */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl text-surface-900 mb-6">Explore Other Border Crossings</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {borderCrossings.filter((b) => b.slug !== border.slug).map((b) => (
                            <Link key={b.slug} href={`/border/${b.slug}`} className="glass-card-hover p-5 bg-white border border-surface-200 rounded-2xl">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="font-semibold text-surface-900">🌍 {b.name}</span>
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-xs text-surface-500 font-medium italic">{[b.countryA, b.countryB].join(' - ')}</span>
                                    <ChevronRight className="w-4 h-4 text-primary-600" />
                                </div>
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
                            name: `${border.name} Border Transfer Service`,
                            description: border.description,
                            provider: { '@type': 'LocalBusiness', name: 'Airport Travel Taxis', url: 'https://airporttraveltaxis.com' },
                            areaServed: [border.countryA, border.countryB].map((country) => ({ '@type': 'Country', name: country }))
                        },
                        {
                            '@context': 'https://schema.org',
                            '@type': 'FAQPage',
                            mainEntity: border.faq.map((f) => ({
                                '@type': 'Question',
                                name: f.question,
                                acceptedAnswer: { '@type': 'Answer', text: f.answer },
                            })),
                        },
                    ]),
                }}
            />
        </div>
    );
}
