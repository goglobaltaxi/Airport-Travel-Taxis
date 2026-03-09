import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { howToTravelPages } from '@/lib/howToTravelData';
import BookingWidget from '@/components/BookingWidget';
import {
    MapPin,
    Clock,
    Car,
    ShieldCheck,
    ChevronRight,
    Navigation,
    Info,
    ArrowRight,
    CheckCircle2,
    Briefcase,
    Plane,
    Bus,
    FileText,
    HelpCircle,
    Route,
} from 'lucide-react';

interface Props {
    params: { topic: string };
}

export async function generateStaticParams() {
    return howToTravelPages.map((page) => ({ topic: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const page = howToTravelPages.find((p) => p.slug === params.topic);
    if (!page) return {};

    return {
        title: page.title,
        description: page.overview,
        openGraph: {
            title: `${page.title} | Airport Travel Taxis`,
            description: page.overview,
            url: `https://airporttraveltaxis.com/how-to-travel-${page.slug}`,
        },
        alternates: {
            canonical: `https://airporttraveltaxis.com/how-to-travel-${page.slug}`,
        },
    };
}

export default function HowToTravelPage({ params }: Props) {
    const page = howToTravelPages.find((p) => p.slug === params.topic);
    if (!page) notFound();

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6 font-medium">
                        <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-surface-900">How to Travel: {page.topic}</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <Route className="w-4 h-4 text-primary-600" />
                                <span className="text-sm text-primary-700 font-medium tracking-tight">Travel Guide & FAQ</span>
                            </div>
                            <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-6 leading-tight uppercase italic">
                                How to Travel from <span className="text-primary-600">{page.topic}</span>
                            </h1>
                            <p className="text-surface-600 text-lg leading-relaxed mb-8">{page.overview}</p>

                            <div className="flex flex-wrap gap-2">
                                {['Travel Logistics', 'Transport Options', 'Trip Duration', 'Road Advice', 'Visitor Information'].map((tag) => (
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

            {/* Transport Options */}
            <section className="section-padding bg-white border-y border-surface-200">
                <div className="container-custom mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="font-display text-3xl text-surface-900 mb-4 uppercase italic">Transport Options</h2>
                        <p className="text-surface-500">Choosing the most suitable method for your journey between {page.topic}.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {page.transportOptions.map((opt, i) => (
                            <div key={i} className="bg-surface-50 border border-surface-200 rounded-3xl p-8 hover:border-primary-300 transition-all flex flex-col shadow-sm group">
                                <div className="p-3 bg-white rounded-2xl border border-surface-200 w-fit mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    {opt.method.toLowerCase().includes('taxi') || opt.method.toLowerCase().includes('chauffeur') ? <Car className="w-6 h-6 text-primary-600" /> :
                                     opt.method.toLowerCase().includes('flight') ? <Plane className="w-6 h-6 text-primary-600" /> :
                                     <Bus className="w-6 h-6 text-primary-600" />}
                                </div>
                                <h3 className="font-display text-xl text-surface-900 mb-4 uppercase tracking-tight">{opt.method}</h3>
                                <p className="text-surface-600 text-sm leading-relaxed mb-6 flex-grow">{opt.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Travel Time & Road Info */}
            <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="bg-primary-900 rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl order-2 lg:order-1">
                            <div className="relative z-10">
                                <Clock className="w-12 h-12 text-primary-400 mb-6" />
                                <h3 className="font-display text-2xl mb-4 italic uppercase tracking-tight">Travel Duration</h3>
                                <p className="text-primary-100 mb-8 leading-relaxed font-medium">
                                    {page.travelTime}
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-primary-200">Approximate timings provided</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-primary-200">Based on regular traffic</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-800 rounded-full translate-x-1/2 -translate-y-1/2 opacity-20"></div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="font-display text-3xl text-surface-900 mb-6 uppercase italic">Road Travel Information</h2>
                            <p className="text-surface-600 leading-relaxed text-lg mb-8">
                                {page.roadInfo}
                            </p>
                            <div className="grid gap-4">
                                {page.travelTips.map((tip, i) => (
                                    <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-surface-200 shadow-sm group hover:border-primary-300 transition-colors">
                                        <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <span className="text-surface-700 font-bold text-sm tracking-tight pt-1">{tip}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section-padding bg-white border-b border-surface-200">
                <div className="container-custom mx-auto max-w-3xl">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-2xl mb-4">
                            <HelpCircle className="w-6 h-6 text-primary-600" />
                        </div>
                        <h2 className="font-display text-3xl text-surface-900 mb-4 uppercase italic">Common Travel Questions</h2>
                        <p className="text-surface-500">Essential information for travelers moving between {page.topic}.</p>
                    </div>
                    <div className="space-y-4">
                        {page.faq.map((item, i) => (
                            <div key={i} className="bg-surface-50 border border-surface-200 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all group">
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
                                className="group bg-white border border-surface-200 hover:border-primary-500 rounded-2xl p-6 transition-all shadow-sm hover:-translate-y-1 text-center"
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <ChevronRight className="w-4 h-4 text-surface-300 group-hover:translate-x-1 group-hover:text-primary-600 transition-all ml-auto" />
                                </div>
                                <h3 className="font-bold text-surface-900 group-hover:text-primary-600 transition-colors uppercase tracking-tight text-sm">{rel.name}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
