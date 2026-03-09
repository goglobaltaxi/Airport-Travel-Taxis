import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { corporateChauffeurPages } from '@/lib/corporateData';
import BookingWidget from '@/components/BookingWidget';
import {
    MapPin,
    Clock,
    Car,
    ShieldCheck,
    ChevronRight,
    Briefcase,
    Building2,
    Calendar,
    Plane,
    ArrowRight,
    Info,
    CalendarDays,
} from 'lucide-react';

interface Props {
    params: { city: string };
}

export async function generateStaticParams() {
    return corporateChauffeurPages.map((page) => ({ city: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const page = corporateChauffeurPages.find((p) => p.slug === params.city);
    if (!page) return {};

    return {
        title: page.title,
        description: page.overview,
        openGraph: {
            title: `${page.title} | Airport Travel Taxis`,
            description: page.overview,
            url: `https://airporttraveltaxis.com/corporate-chauffeur-${page.slug}`,
        },
        alternates: {
            canonical: `https://airporttraveltaxis.com/corporate-chauffeur-${page.slug}`,
        },
    };
}

export default function CorporateChauffeurPage({ params }: Props) {
    const page = corporateChauffeurPages.find((p) => p.slug === params.city);
    if (!page) notFound();

    const vehicles = [
        { name: 'Mercedes S-Class', type: 'Executive Sedan', desc: 'Professional comfort for business executives.' },
        { name: 'BMW', type: 'Executive Sedan', desc: 'Refined and reliable inter-city business travel.' },
        { name: 'Genesis', type: 'Executive Sedan', desc: 'Sleek and professional road transportation.' },
        { name: 'Cadillac Escalade', type: 'Large SUV', desc: 'Spacious and comfortable SUV for corporate teams.' },
        { name: 'GMC', type: 'Large SUV', desc: 'Ideal for group business travel and event support.' },
        { name: 'Ford Taurus', type: 'Standard Sedan', desc: 'Efficient and professional city transit.' },
        { name: 'Mercedes Vito', type: 'Passenger Van', desc: 'Premium transport for up to 8 professional passengers.' },
        { name: 'Mercedes Sprinter', type: 'Minibus', desc: 'Perfect for corporate delegations and larger teams.' },
        { name: 'Executive Bus', type: 'Coach', desc: 'Professional transport for large corporate groups and summits.' },
        { name: 'Camry', type: 'Standard Sedan', desc: 'Practical and reliable for city business trips.' },
        { name: 'Staria', type: 'Passenger Van', desc: 'Spacious seating for professional group road travel.' },
        { name: 'Hiace', type: 'Passenger Van', desc: 'Efficient group transportation for corporate events.' },
        { name: 'Coaster', type: 'Minibus', desc: 'Trusted transport for larger employee or delegation groups.' },
    ];

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6 font-medium">
                        <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-surface-900">Corporate Chauffeur {page.city}</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <Briefcase className="w-4 h-4 text-primary-600" />
                                <span className="text-sm text-primary-700 font-medium tracking-tight">Business & Executive Transportation</span>
                            </div>
                            <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-6 leading-tight">
                                Corporate Chauffeur Service <span className="text-primary-600">{page.city}</span>
                            </h1>
                            <p className="text-surface-600 text-lg leading-relaxed mb-8">{page.overview}</p>

                            <div className="flex flex-wrap gap-2">
                                {['Business Travel', 'Executive Chauffeur', 'Corporate Events', 'Airport Transfers', 'Professional Service'].map((tag) => (
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

            {/* Common Uses */}
            <section className="section-padding bg-white border-y border-surface-200">
                <div className="container-custom mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-display text-3xl text-surface-900 mb-6 italic">Common Uses</h2>
                            <p className="text-surface-600 leading-relaxed text-lg mb-8">
                                Our corporate chauffeur services in {page.city} are designed to support the dynamic needs of business organizations and individual professionals. We handle the logistical details of your road travel, allowing you to focus on your professional objectives.
                            </p>
                            <div className="grid gap-4">
                                {page.commonUses.map((use, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 bg-surface-50 rounded-2xl border border-surface-100">
                                        <div className="w-8 h-8 rounded-lg bg-primary-600 text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                                            {i + 1}
                                        </div>
                                        <p className="text-surface-700 font-medium">{use}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-primary-900 rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl">
                            <div className="relative z-10">
                                <Briefcase className="w-12 h-12 text-primary-400 mb-6" />
                                <h3 className="font-display text-3xl mb-4 italic">Professional Standard</h3>
                                <p className="text-primary-200 leading-relaxed mb-8">
                                    We prioritize punctuality and reliability for every corporate booking, recognizing the importance of your business commitments in {page.city}.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="w-5 h-5 text-primary-400" />
                                        <span className="text-sm font-medium">Reliable Punctuality</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="w-5 h-5 text-primary-400" />
                                        <span className="text-sm font-medium">Professional Chauffeurs</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="w-5 h-5 text-primary-400" />
                                        <span className="text-sm font-medium">All Major Business Districts Covered</span>
                                    </div>
                                </div>
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
                        <p className="text-surface-500">We offer executive pickups across all major commercial and transit points in {page.city}.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {page.pickupLocations.map((loc, i) => (
                            <div key={i} className="bg-white border border-surface-200 rounded-2xl p-6 shadow-sm flex items-start gap-4">
                                <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
                                    {loc.toLowerCase().includes('airport') ? <Plane className="w-5 h-5" /> :
                                     loc.toLowerCase().includes('office') || loc.toLowerCase().includes('district') ? <Briefcase className="w-5 h-5" /> :
                                     loc.toLowerCase().includes('hotel') ? <Building2 className="w-5 h-5" /> :
                                     <MapPin className="w-5 h-5" />}
                                </div>
                                <p className="text-surface-700 font-bold text-sm uppercase tracking-tight leading-tight">{loc}</p>
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
                            <h2 className="font-display text-3xl text-surface-900 mb-4">Available Fleet</h2>
                            <p className="text-surface-500">Choose from our variety of professional vehicles maintained for executive and business travel.</p>
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

            {/* Travel Tips */}
            <section className="section-padding bg-surface-50 text-surface-900">
                <div className="container-custom mx-auto max-w-4xl">
                    <div className="bg-white border border-surface-200 rounded-[32px] overflow-hidden shadow-sm">
                        <div className="bg-primary-600 p-8 text-white">
                            <div className="flex items-center gap-3 mb-2">
                                <CalendarDays className="w-6 h-6" />
                                <h2 className="font-display text-2xl">Business Travel Tips</h2>
                            </div>
                            <p className="text-primary-100">Guidance for coordinating your corporate transportation effectively.</p>
                        </div>
                        <div className="p-8 grid sm:grid-cols-2 gap-8">
                            {page.travelTips.map((tip, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <Info className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
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
                        <p className="text-surface-500">Common questions about our corporate chauffeur services.</p>
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
