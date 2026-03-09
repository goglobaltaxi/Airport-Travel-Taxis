import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { servicePages } from '@/lib/serviceData';
import BookingWidget from '@/components/BookingWidget';
import {
    MapPin,
    Clock,
    Car,
    ShieldCheck,
    ChevronRight,
    Plane,
    Info,
    ArrowRight,
    CheckCircle2,
    Users,
    Building2,
    Briefcase,
    Globe,
    FileCheck,
    CalendarCheck,
} from 'lucide-react';

interface Props {
    params: { topic: string };
}

export async function generateStaticParams() {
    return servicePages.map((page) => ({ topic: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const page = servicePages.find((p) => p.slug === params.topic);
    if (!page) return {};

    return {
        title: page.title,
        description: page.overview,
        openGraph: {
            title: `${page.title} | Airport Travel Taxis`,
            description: page.overview,
            url: `https://airporttraveltaxis.com/service-${page.slug}`,
        },
        alternates: {
            canonical: `https://airporttraveltaxis.com/service-${page.slug}`,
        },
    };
}

export default function ServicePage({ params }: Props) {
    const page = servicePages.find((p) => p.slug === params.topic);
    if (!page) notFound();

    const vehicles = [
        { name: 'Mercedes S-Class', type: 'Executive Sedan', desc: 'Professional comfort for individual travelers.' },
        { name: 'BMW', type: 'Executive Sedan', desc: 'Refined and reliable inter-city transportation.' },
        { name: 'Genesis', type: 'Executive Sedan', desc: 'Sleek and professional road transit.' },
        { name: 'Cadillac Escalade', type: 'Large SUV', desc: 'Spacious and comfortable SUV for families and teams.' },
        { name: 'GMC', type: 'Large SUV', desc: 'Ideal for group travel and event support.' },
        { name: 'Ford Taurus', type: 'Standard Sedan', desc: 'Efficient and professional city movements.' },
        { name: 'Mercedes Vito', type: 'Passenger Van', desc: 'Premium transport for up to 8 passengers.' },
        { name: 'Mercedes Sprinter', type: 'Minibus', desc: 'Perfect for delegations and larger professional groups.' },
        { name: 'Executive Bus', type: 'Coach', desc: 'Professional transport for large groups and summits.' },
        { name: 'Camry', type: 'Standard Sedan', desc: 'Practical and reliable for city-to-city trips.' },
        { name: 'Staria', type: 'Passenger Van', desc: 'Spacious seating for group road travel.' },
        { name: 'Hiace', type: 'Passenger Van', desc: 'Efficient group transportation for events.' },
        { name: 'Coaster', type: 'Minibus', desc: 'Trusted transport for larger employee groups.' },
    ];

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6 font-medium">
                        <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-surface-900">{page.topic} Service</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <Car className="w-4 h-4 text-primary-600" />
                                <span className="text-sm text-primary-700 font-medium tracking-tight">Professional Transportation Service</span>
                            </div>
                            <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-6 leading-tight uppercase italic">
                                {page.topic} <span className="text-primary-600">Services</span>
                            </h1>
                            <p className="text-surface-600 text-lg leading-relaxed mb-6">{page.overview}</p>

                            <div className="mb-8 p-4 bg-white rounded-xl border border-primary-200 flex gap-3 text-left">
                                <div className="text-primary-600 shrink-0 mt-0.5">
                                    <div className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center font-bold text-xs">i</div>
                                </div>
                                <p className="text-sm text-surface-700 leading-relaxed">
                                    <strong>Service Scope:</strong> This service focuses on pre-booked transportation including airport transfers, intercity travel, cross-border journeys, and VIP Umrah transfers. Local street taxi hailing and short-distance city rides are not part of the service.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {['Professional Chauffeur', 'GCC Coverage', '24/7 Operations', 'Direct Transit', 'Private Fleet'].map((tag) => (
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

            {/* How It Works */}
            <section className="section-padding bg-white border-y border-surface-200">
                <div className="container-custom mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="font-display text-3xl text-surface-900 mb-4 uppercase italic">How the Service Works</h2>
                        <p className="text-surface-500">A clear overview of the booking and travel process for {page.topic}.</p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-8">
                        {page.howItWorks.map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center group">
                                <div className="w-12 h-12 rounded-2xl bg-primary-600 text-white flex items-center justify-center font-bold text-lg mb-6 shadow-xl group-hover:scale-110 transition-transform">
                                    {i + 1}
                                </div>
                                <p className="text-surface-700 text-sm font-medium leading-relaxed">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="grid gap-6">
                            <h2 className="font-display text-3xl text-surface-900 mb-2 uppercase italic">When to Use This Service</h2>
                            <p className="text-surface-600 text-lg mb-6">Our {page.topic.toLowerCase()} are designed for various professional and personal transport requirements.</p>
                            {page.useCases.map((use, i) => (
                                <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-surface-100 shadow-sm">
                                    <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <span className="text-surface-700 font-bold text-sm tracking-tight">{use}</span>
                                </div>
                            ))}
                        </div>
                        <div className="bg-primary-900 rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl">
                            <div className="relative z-10">
                                <CalendarCheck className="w-12 h-12 text-primary-400 mb-6" />
                                <h3 className="font-display text-2xl mb-4 italic uppercase">Travel Planning Tips</h3>
                                <p className="text-primary-100 mb-8">Follow these steps for a smooth transportation experience.</p>
                                <div className="space-y-4">
                                    {page.travelTips.map((tip, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-primary-300">
                                                {i + 1}
                                            </div>
                                            <p className="text-primary-50 text-sm font-medium leading-relaxed">{tip}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vehicle Options */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto">
                    <div className="flex items-end justify-between mb-12 gap-6">
                        <div className="max-w-xl">
                            <h2 className="font-display text-3xl text-surface-900 mb-4 uppercase italic">Available Vehicles</h2>
                            <p className="text-surface-500">Professional fleet options maintained for road travel across the GCC countries.</p>
                        </div>
                        <Link href="/fleet" className="text-primary-600 font-bold flex items-center gap-2 hover:gap-3 transition-all mb-2">
                            View Fleet Details <ArrowRight className="w-4 h-4" />
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

            {/* FAQs */}
            <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl text-surface-900 mb-4 uppercase italic">Frequently Asked Questions</h2>
                        <p className="text-surface-500">Short, factual answers regarding our {page.topic.toLowerCase()} services.</p>
                    </div>
                    <div className="space-y-4">
                        {page.faq.map((item, i) => (
                            <div key={i} className="bg-white border border-surface-200 rounded-2xl p-6 hover:shadow-lg transition-all">
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
                    <h2 className="font-display text-3xl text-surface-900 mb-8 text-center italic uppercase">Related Travel Links</h2>
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
