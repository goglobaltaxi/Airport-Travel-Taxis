import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { travelGuidePages } from '@/lib/travelGuideData';
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
    Globe,
    FileText,
    Settings,
    Map,
    HelpCircle,
    BookOpen
} from 'lucide-react';

interface Props {
    params: { topic: string };
}

export async function generateStaticParams() {
    return travelGuidePages.map((page) => ({ topic: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const page = travelGuidePages.find((p) => p.slug === params.topic);
    if (!page) return {};

    return {
        title: page.title,
        description: page.overview,
        openGraph: {
            title: `${page.title} | Airport Travel Taxis`,
            description: page.overview,
            url: `https://airporttraveltaxis.com/travel-guide-${page.slug}`,
        },
        alternates: {
            canonical: `https://airporttraveltaxis.com/travel-guide-${page.slug}`,
        },
    };
}

export default function TravelGuidePage({ params }: Props) {
    const page = travelGuidePages.find((p) => p.slug === params.topic);
    if (!page) notFound();

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6 font-medium">
                        <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-surface-900">{page.topic} Guide</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <BookOpen className="w-4 h-4 text-primary-600" />
                                <span className="text-sm text-primary-700 font-medium tracking-tight">Travel Knowledge Hub</span>
                            </div>
                            <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-6 leading-tight">
                                {page.topic} in <span className="text-primary-600">GCC Countries</span>
                            </h1>
                            <p className="text-surface-600 text-lg leading-relaxed mb-8">{page.overview}</p>

                            <div className="flex flex-wrap gap-2">
                                {['Travel Guide', 'How it Works', 'GCC Transport', 'Trip Planning', 'Visitor Tips'].map((tag) => (
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
                        <h2 className="font-display text-3xl text-surface-900 mb-4">How the Service Works</h2>
                        <p className="text-surface-500">A step-by-step overview of using {page.topic.toLowerCase()} services.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {page.howItWorks.map((step, i) => (
                            <div key={i} className="relative group">
                                <div className="bg-surface-50 border border-surface-200 rounded-2xl p-6 h-full transition-all group-hover:border-primary-300 shadow-sm">
                                    <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold mb-4 shadow-lg">
                                        {i + 1}
                                    </div>
                                    <p className="text-surface-700 text-sm font-medium leading-relaxed">{step}</p>
                                </div>
                                {i < page.howItWorks.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-[-50%] z-10">
                                        <ArrowRight className="w-5 h-5 text-surface-300" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Common Situations */}
            <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-display text-3xl text-surface-900 mb-6 italic">When Travelers Use This Service</h2>
                            <p className="text-surface-600 mb-8 text-lg leading-relaxed">
                                Understanding the typical use cases for {page.topic.toLowerCase()} helps travelers plan their logistics more effectively across the region.
                            </p>
                            <div className="grid gap-4">
                                {page.commonSituations.map((situation, i) => (
                                    <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-surface-200 shadow-sm">
                                        <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <span className="text-surface-700 font-medium">{situation}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-primary-900 rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl">
                            <div className="relative z-10">
                                <Settings className="w-12 h-12 text-primary-400 mb-6" />
                                <h3 className="font-display text-2xl mb-4 italic">Travel Considerations</h3>
                                <p className="text-primary-200 mb-8">Key details to keep in mind for a smooth journey.</p>
                                <div className="space-y-6">
                                    {page.considerations.map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-primary-300">
                                                {i + 1}
                                            </div>
                                            <p className="text-primary-100 text-sm leading-relaxed">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-800 rounded-full translate-x-1/2 -translate-y-1/2 opacity-20"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* General FAQs */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto max-w-3xl">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-2xl mb-4">
                            <HelpCircle className="w-6 h-6 text-primary-600" />
                        </div>
                        <h2 className="font-display text-3xl text-surface-900 mb-4">Common Questions</h2>
                        <p className="text-surface-500">Essential information regarding {page.topic.toLowerCase()}.</p>
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
                    <h2 className="font-display text-3xl text-surface-900 mb-8 text-center italic">Related Knowledge</h2>
                    <div className="grid sm:grid-cols-3 gap-6">
                        {page.relatedPages.map((rel) => (
                            <Link
                                key={rel.url}
                                href={rel.url}
                                className="group bg-white border border-surface-200 hover:border-primary-500 rounded-2xl p-6 transition-all shadow-sm hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-2 py-1 rounded">service page</span>
                                    <ChevronRight className="w-4 h-4 text-surface-300 group-hover:translate-x-1 group-hover:text-primary-600 transition-all" />
                                </div>
                                <h3 className="font-bold text-surface-900 group-hover:text-primary-600 transition-colors uppercase tracking-tight">{rel.name}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="section-padding bg-primary-600 text-white relative overflow-hidden">
                <div className="container-custom mx-auto text-center relative z-10">
                    <h2 className="font-display text-3xl lg:text-4xl mb-6 italic">Need to Arrange Transportation?</h2>
                    <p className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto">Book your professional airport pickup, inter-city transfer, or cross-border taxi today.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="#booking" className="bg-white text-primary-600 px-10 py-4 rounded-full font-bold shadow-xl hover:bg-primary-50 transition-colors">Start Booking</Link>
                        <Link href="/contact" className="bg-primary-700 text-white border border-primary-500 px-10 py-4 rounded-full font-bold shadow-xl hover:bg-primary-800 transition-colors">Contact Helpdesk</Link>
                    </div>
                </div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-30"></div>
            </section>
        </div>
    );
}

