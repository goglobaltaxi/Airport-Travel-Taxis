import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { districtTaxiPages } from '@/lib/districtData';
import BookingWidget from '@/components/BookingWidget';
import {
    MapPin,
    Clock,
    Car,
    ShieldCheck,
    ChevronRight,
    Building2,
    Info,
    ArrowRight,
    CheckCircle2,
    Briefcase,
    ShoppingBag,
    Home,
    Plane,
    Map,
} from 'lucide-react';

interface Props {
    params: { area: string; city: string };
}

export async function generateStaticParams() {
    return districtTaxiPages.map((page) => {
        // Splitting the slug to get area and city components
        // Expecting slug format: {area}-{city}
        const parts = page.slug.split('-');
        const city = parts[parts.length - 1];
        const area = parts.slice(0, parts.length - 1).join('-');
        return { area, city };
    });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = `${params.area}-${params.city}`;
    const page = districtTaxiPages.find((p) => p.slug === slug);
    if (!page) return {};

    const pageTitle = `Taxi Service in ${page.area}, ${page.city} | Pre-Book Online`;
    const pageDescription = `Reliable, pre-booked taxi service in ${page.area}, ${page.city}. We provide scheduled 24/7 airport transfers and intercity travel with professional drivers.`;

    return {
        title: pageTitle,
        description: pageDescription,
        openGraph: {
            title: pageTitle,
            description: pageDescription,
            url: `https://airporttraveltaxis.com/taxi-service-${page.slug}`,
        },
        alternates: {
            canonical: `https://airporttraveltaxis.com/taxi-service-${page.slug}`,
        },
    };
}

export default function DistrictTaxiPage({ params }: Props) {
    const slug = `${params.area}-${params.city}`;
    const page = districtTaxiPages.find((p) => p.slug === slug);
    if (!page) notFound();

    const vehicles = [
        { name: 'Mercedes S-Class', type: 'Executive Sedan', desc: 'Professional transport for city districts.' },
        { name: 'BMW', type: 'Executive Sedan', desc: 'Refined and reliable inter-city travel.' },
        { name: 'Genesis', type: 'Executive Sedan', desc: 'Sleek and comfortable road transportation.' },
        { name: 'Cadillac Escalade', type: 'Large SUV', desc: 'Spacious SUV for families and groups.' },
        { name: 'GMC', type: 'Large SUV', desc: 'Ideal for group travel and airport transfers.' },
        { name: 'Ford Taurus', type: 'Standard Sedan', desc: 'Efficient and professional city transit.' },
        { name: 'Mercedes Vito', type: 'Passenger Van', desc: 'Premium transport for up to 8 passengers.' },
        { name: 'Mercedes Sprinter', type: 'Minibus', desc: 'Perfect for larger teams and delegations.' },
        { name: 'Executive Bus', type: 'Coach', desc: 'Professional transport for large corporate groups.' },
        { name: 'Camry', type: 'Standard Sedan', desc: 'Practical and reliable for local district trips.' },
        { name: 'Staria', type: 'Passenger Van', desc: 'Spacious seating for group road travel.' },
        { name: 'Hiace', type: 'Passenger Van', desc: 'Efficient group transportation for events.' },
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
                        <span className="text-surface-900">Taxi {page.area}, {page.city}</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <MapPin className="w-4 h-4 text-primary-600" />
                                <span className="text-sm text-primary-700 font-medium tracking-tight">Area-Specific Taxi Service</span>
                            </div>
                            <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-6 leading-tight uppercase italic">
                                Taxi Service <span className="text-primary-600">{page.area}</span>
                            </h1>
                            <p className="text-surface-600 text-lg leading-relaxed mb-8">{page.overview}</p>

                            <div className="flex flex-wrap gap-2">
                                {['Local Taxi', 'Airport Transfer', 'Hotel Pickup', 'City Travel', 'Professional Driver'].map((tag) => (
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

            {/* Services Available */}
            <section className="section-padding bg-white border-y border-surface-200">
                <div className="container-custom mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-display text-3xl text-surface-900 mb-6 uppercase italic">Services Available</h2>
                            <p className="text-surface-600 leading-relaxed text-lg mb-8">
                                We provide a full range of transportation services within and from {page.area}, catering to the needs of residents, business travelers, and tourists alike.
                            </p>
                            <div className="grid gap-4">
                                {page.services.map((service, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 bg-surface-50 rounded-2xl border border-surface-100 group hover:border-primary-300 transition-colors">
                                        <div className="p-2 bg-white rounded-lg text-primary-600 border border-surface-200">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <p className="text-surface-700 font-bold text-sm tracking-tight pt-1">{service}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-primary-900 rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl">
                            <div className="relative z-10">
                                <Car className="w-12 h-12 text-primary-400 mb-6" />
                                <h3 className="font-display text-2xl mb-4 italic uppercase tracking-tight">Standard of Service</h3>
                                <p className="text-primary-200 mb-8 font-medium">
                                    Our drivers are professional and experienced with the local roads in {page.area}, ensuring punctual and reliable transportation for every booking.
                                </p>
                                <div className="space-y-4 text-sm font-bold uppercase tracking-wider text-primary-300">
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="w-4 h-4" />
                                        <span>24/7 Availability</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="w-4 h-4" />
                                        <span>Direct Address-to-Address</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="w-4 h-4" />
                                        <span>Airport Meet & Greet</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-800 rounded-full translate-x-1/2 -translate-y-1/2 opacity-20"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pickup Locations */}
            <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="font-display text-3xl text-surface-900 mb-4 uppercase italic">Pickup Locations</h2>
                        <p className="text-surface-500">We offer executive pickups across all major points in {page.area}.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {page.pickupLocations.map((loc, i) => (
                            <div key={i} className="bg-white border border-surface-200 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center group hover:border-primary-300 transition-all">
                                <div className="p-3 bg-primary-50 rounded-xl text-primary-600 mb-4 group-hover:scale-110 transition-transform">
                                    {loc.toLowerCase().includes('home') || loc.toLowerCase().includes('residence') || loc.toLowerCase().includes('villa') ? <Home className="w-6 h-6" /> :
                                     loc.toLowerCase().includes('hotel') ? <Building2 className="w-6 h-6" /> :
                                     loc.toLowerCase().includes('mall') || loc.toLowerCase().includes('shop') ? <ShoppingBag className="w-6 h-6" /> :
                                     loc.toLowerCase().includes('office') ? <Briefcase className="w-6 h-6" /> :
                                     <MapPin className="w-6 h-6" />}
                                </div>
                                <h3 className="text-surface-900 font-bold text-sm uppercase tracking-tight leading-tight">{loc}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vehicle Options */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto">
                    <div className="flex items-end justify-between mb-12 gap-6">
                        <div className="max-w-xl">
                            <h2 className="font-display text-3xl text-surface-900 mb-4 uppercase italic">Fleet Options</h2>
                            <p className="text-surface-500">Choose from a variety of professional vehicles maintained for local and inter-city road travel.</p>
                        </div>
                        <Link href="/fleet" className="text-primary-600 font-bold flex items-center gap-2 hover:gap-3 transition-all mb-2">
                            View All Vehicles <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {vehicles.map((v) => (
                            <div key={v.name} className="bg-surface-50 border border-surface-200 rounded-2xl p-5 hover:border-primary-300 transition-colors shadow-sm">
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

            {/* Travel Tips */}
            <section className="section-padding bg-surface-100 text-surface-900">
                <div className="container-custom mx-auto max-w-4xl">
                    <div className="bg-white border border-surface-200 rounded-[32px] overflow-hidden shadow-xl">
                        <div className="bg-primary-600 p-8 text-white">
                            <div className="flex items-center gap-3 mb-2">
                                <Info className="w-6 h-6" />
                                <h2 className="font-display text-2xl uppercase italic">Travel Tips for {page.area}</h2>
                            </div>
                            <p className="text-primary-100">Helpful advice for coordinating your transportation effectively.</p>
                        </div>
                        <div className="p-8 grid sm:grid-cols-2 gap-8">
                            {page.travelTips.map((tip, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                                    <p className="text-surface-700 font-bold text-sm leading-relaxed">{tip}</p>
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
                        <h2 className="font-display text-3xl text-surface-900 mb-4 uppercase italic">Common Inquiries</h2>
                        <p className="text-surface-500">Factual information regarding taxi services in {page.area}.</p>
                    </div>
                    <div className="space-y-4">
                        {page.faq.map((item, i) => (
                            <div key={i} className="bg-surface-50 border border-surface-200 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all group">
                                <h3 className="font-bold text-surface-900 mb-3 flex items-start gap-3">
                                    <span className="text-primary-600 font-black group-hover:scale-110 transition-transform">Q.</span>
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
                    <h2 className="font-display text-3xl text-surface-900 mb-8 text-center italic uppercase">Related Area Services</h2>
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
