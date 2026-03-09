import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { longDistancePages } from '@/lib/longDistanceData';
import BookingWidget from '@/components/BookingWidget';
import {
    MapPin,
    Clock,
    Car,
    ShieldCheck,
    ChevronRight,
    Navigation,
    Info,
    Globe,
    FileText,
    ArrowRight,
    Map,
    Calendar,
    Plane,
    Building2,
} from 'lucide-react';

interface Props {
    params: { location: string };
}

export async function generateStaticParams() {
    return longDistancePages.map((page) => ({ location: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const page = longDistancePages.find((p) => p.slug === params.location);
    if (!page) return {};

    return {
        title: page.title,
        description: page.overview,
        openGraph: {
            title: `${page.title} | Airport Travel Taxis`,
            description: page.overview,
            url: `https://airporttraveltaxis.com/long-distance-taxi-${page.slug}`,
        },
        alternates: {
            canonical: `https://airporttraveltaxis.com/long-distance-taxi-${page.slug}`,
        },
    };
}

export default function LongDistancePage({ params }: Props) {
    const page = longDistancePages.find((p) => p.slug === params.location);
    if (!page) notFound();

    const vehicles = [
        { name: 'Mercedes S-Class', type: 'Executive Sedan', desc: 'Maximum comfort for inter-city travel.' },
        { name: 'BMW', type: 'Executive Sedan', desc: 'Professional and refined long-distance transit.' },
        { name: 'Genesis', type: 'Executive Sedan', desc: 'Sleek and comfortable road travel.' },
        { name: 'Cadillac Escalade', type: 'Large SUV', desc: 'Spacious SUV for families with significant luggage.' },
        { name: 'GMC', type: 'Large SUV', desc: 'Ideal for group travel across long distances.' },
        { name: 'Ford Taurus', type: 'Standard Sedan', desc: 'Reliable and efficient highway transit.' },
        { name: 'Mercedes Vito', type: 'Passenger Van', desc: 'Premium group transport for up to 8 passengers.' },
        { name: 'Mercedes Sprinter', type: 'Minibus', desc: 'Perfect for larger groups and professional tours.' },
        { name: 'Executive Bus', type: 'Coach', desc: 'Large group transfers and corporate shuttle services.' },
        { name: 'Camry', type: 'Standard Sedan', desc: 'Practical and trusted for city-to-city trips.' },
        { name: 'Staria', type: 'Passenger Van', desc: 'Spacious seating for group road travel.' },
        { name: 'Hiace', type: 'Passenger Van', desc: 'Efficient and reliable long-range pickup.' },
        { name: 'Coaster', type: 'Minibus', desc: 'Trusted transport for larger passenger groups.' },
    ];

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6 font-medium">
                        <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-surface-900">Long Distance Taxi {page.location}</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <Map className="w-4 h-4 text-primary-600" />
                                <span className="text-sm text-primary-700 font-medium tracking-tight">Inter-City & Cross-Border Service</span>
                            </div>
                            <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-6 leading-tight">
                                Long Distance Taxi Service <span className="text-primary-600">{page.location}</span>
                            </h1>
                            <p className="text-surface-600 text-lg leading-relaxed mb-8">{page.overview}</p>

                            <div className="flex flex-wrap gap-2">
                                {['Long Distance', 'Inter-City', 'Cross-Border', 'Professional Chauffeur', 'Private Transport'].map((tag) => (
                                    <span key={tag} className="text-xs font-semibold bg-white border border-surface-200 text-surface-700 rounded-full px-4 py-1.5 shadow-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-24">
                            <BookingWidget />
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Highlights */}
            <section className="section-padding bg-white border-y border-surface-200">
                <div className="container-custom mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-display text-3xl text-surface-900 mb-6 italic">Service Overview</h2>
                            <p className="text-surface-600 leading-relaxed text-lg mb-6">
                                Professional long-distance taxi services across {page.location} provide a private, comfortable, and direct alternative to public transport or internal flights. We specialize in point-to-point road travel between cities, industrial zones, and neighboring countries within the GCC.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 bg-surface-50 rounded-2xl border border-surface-100">
                                    <Globe className="w-6 h-6 text-primary-600 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-surface-900">Broad Coverage</h3>
                                        <p className="text-surface-600 text-sm">We serve all major cities and provinces within {page.location}.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-surface-50 rounded-2xl border border-surface-100">
                                    <Car className="w-6 h-6 text-primary-600 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-surface-900">Door-to-Door</h3>
                                        <p className="text-surface-600 text-sm">Pickups from your doorstep and drop-offs at your exact destination.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <h3 className="font-display text-2xl text-surface-900 mb-2">Popular Long Distance Routes</h3>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {page.popularRoutes.map((route) => (
                                    <div key={route} className="bg-primary-50 border border-primary-100 p-4 rounded-xl flex items-center gap-3">
                                        <ArrowRight className="w-4 h-4 text-primary-600" />
                                        <span className="text-sm font-bold text-primary-900">{route}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pickup Locations */}
            <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="font-display text-3xl text-surface-900 mb-4">Pickup Locations</h2>
                        <p className="text-surface-500">We offer flexible pickup options across {page.location} for your long-distance journey.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white border border-surface-200 rounded-2xl p-6 shadow-sm">
                            <Plane className="w-8 h-8 text-primary-600 mb-4" />
                            <h3 className="font-bold text-surface-900 mb-2 uppercase tracking-tight text-sm">Airports</h3>
                            <p className="text-surface-600 text-sm leading-relaxed">Direct pickups from international and regional airport arrivals.</p>
                        </div>
                        <div className="bg-white border border-surface-200 rounded-2xl p-6 shadow-sm">
                            <Building2 className="w-8 h-8 text-primary-600 mb-4" />
                            <h3 className="font-bold text-surface-900 mb-2 uppercase tracking-tight text-sm">Hotels</h3>
                            <p className="text-surface-600 text-sm leading-relaxed">Convenient meet-and-greet at your hotel lobby or entrance.</p>
                        </div>
                        <div className="bg-white border border-surface-200 rounded-2xl p-6 shadow-sm">
                            <MapPin className="w-8 h-8 text-primary-600 mb-4" />
                            <h3 className="font-bold text-surface-900 mb-2 uppercase tracking-tight text-sm">Residential</h3>
                            <p className="text-surface-600 text-sm leading-relaxed">Private pickup directly from your home, apartment, or villa.</p>
                        </div>
                        <div className="bg-white border border-surface-200 rounded-2xl p-6 shadow-sm">
                            <FileText className="w-8 h-8 text-primary-600 mb-4" />
                            <h3 className="font-bold text-surface-900 mb-2 uppercase tracking-tight text-sm">Offices</h3>
                            <p className="text-surface-600 text-sm leading-relaxed">Reliable transportation for business trips starting from your workplace.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vehicle Options */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto">
                    <div className="flex items-end justify-between mb-12 gap-6">
                        <div className="max-w-xl">
                            <h2 className="font-display text-3xl text-surface-900 mb-4">Available Fleet</h2>
                            <p className="text-surface-500">Choose from a variety of professional vehicles optimized for long-distance comfort.</p>
                        </div>
                        <Link href="/fleet" className="text-primary-600 font-bold flex items-center gap-2 hover:gap-3 transition-all mb-2">
                            View All Vehicles <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {vehicles.map((v) => (
                            <div key={v.name} className="bg-surface-50 border border-surface-200 rounded-2xl p-5 hover:border-primary-300 transition-colors">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-white rounded-lg border border-surface-200">
                                        <Car className="w-5 h-5 text-primary-600" />
                                    </div>
                                    <p className="font-bold text-surface-900">{v.name}</p>
                                </div>
                                <p className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-2">{v.type}</p>
                                <p className="text-surface-600 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Travel Planning Tips */}
            <section className="section-padding bg-surface-50 text-surface-900">
                <div className="container-custom mx-auto max-w-4xl">
                    <div className="bg-white border border-surface-200 rounded-[32px] overflow-hidden shadow-sm">
                        <div className="bg-primary-900 p-8 text-white">
                            <div className="flex items-center gap-3 mb-2">
                                <Calendar className="w-6 h-6" />
                                <h2 className="font-display text-2xl">Travel Planning Tips</h2>
                            </div>
                            <p className="text-primary-200">Helpful guidance for a smooth long-distance road journey.</p>
                        </div>
                        <div className="p-8 grid sm:grid-cols-2 gap-8">
                            {page.travelTips.map((tip, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <ShieldCheck className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                                    <p className="text-surface-700 font-medium">{tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl text-surface-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-surface-500">Common inquiries about our long-distance taxi services.</p>
                    </div>
                    <div className="space-y-4">
                        {page.faq.map((item, i) => (
                            <div key={i} className="bg-surface-50 border border-surface-200 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all">
                                <h3 className="font-bold text-surface-900 mb-3 flex items-start gap-3">
                                    <span className="text-primary-600 font-black">Q.</span>
                                    {item.question}
                                </h3>
                                <div className="flex items-start gap-3">
                                    <span className="text-surface-400 font-black">A.</span>
                                    <p className="text-surface-600 leading-relaxed font-medium">{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Pages */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-3xl text-surface-900 mb-8 text-center italic">Related Services</h2>
                    <div className="grid sm:grid-cols-3 gap-6">
                        {page.relatedPages.map((rel) => (
                            <Link
                                key={rel.url}
                                href={rel.url}
                                className="group bg-white border border-surface-200 hover:border-primary-500 rounded-2xl p-6 transition-all shadow-sm hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <ChevronRight className="w-4 h-4 text-surface-300 group-hover:translate-x-1 group-hover:text-primary-600 transition-all ml-auto" />
                                </div>
                                <h3 className="font-bold text-surface-900 group-hover:text-primary-600 transition-colors uppercase tracking-tight">{rel.name}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
