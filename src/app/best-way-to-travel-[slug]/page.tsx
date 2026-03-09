import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { comparisonPages } from '@/lib/comparisonData';
import BookingWidget from '@/components/BookingWidget';
import {
    MapPin,
    Clock,
    Car,
    ShieldCheck,
    ChevronRight,
    Plane,
    Bus,
    Navigation,
    Info,
    ArrowRight,
    CheckCircle2,
    Briefcase,
    Users,
    Luggage,
} from 'lucide-react';

interface Props {
    params: { slug: string };
}

export async function generateStaticParams() {
    return comparisonPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const page = comparisonPages.find((p) => p.slug === params.slug);
    if (!page) return {};

    return {
        title: page.title,
        description: page.overview,
        openGraph: {
            title: `${page.title} | Airport Travel Taxis`,
            description: page.overview,
            url: `https://airporttraveltaxis.com/best-way-to-travel-${page.slug}`,
        },
        alternates: {
            canonical: `https://airporttraveltaxis.com/best-way-to-travel-${page.slug}`,
        },
    };
}

export default function ComparisonPage({ params }: Props) {
    const page = comparisonPages.find((p) => p.slug === params.slug);
    if (!page) notFound();

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6 font-medium">
                        <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-surface-900">Travel from {page.cityA} to {page.cityB}</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <Navigation className="w-4 h-4 text-primary-600" />
                                <span className="text-sm text-primary-700 font-medium tracking-tight">Travel Comparison Guide</span>
                            </div>
                            <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-6 leading-tight">
                                Best Way to Travel from {page.cityA} to <span className="text-primary-600">{page.cityB}</span>
                            </h1>
                            <p className="text-surface-600 text-lg leading-relaxed mb-8">{page.overview}</p>

                            <div className="flex flex-wrap gap-2">
                                {['Travel Comparison', 'City to City', 'Private Transfer', 'Transport Options', 'Trip Planning'].map((tag) => (
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

            {/* Travel Options Comparison */}
            <section className="section-padding bg-white border-y border-surface-200">
                <div className="container-custom mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="font-display text-3xl text-surface-900 mb-4">Transport Options</h2>
                        <p className="text-surface-500">Choosing the right method depends on your priorities for speed, comfort, and group size.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {page.options.map((opt, i) => (
                            <div key={i} className="bg-surface-50 border border-surface-200 rounded-[32px] p-8 hover:border-primary-300 transition-all flex flex-col h-full shadow-sm">
                                <div className="p-3 bg-white rounded-2xl border border-surface-200 w-fit mb-6 shadow-sm">
                                    {opt.method.includes('Taxi') || opt.method.includes('Chauffeur') ? <Car className="w-6 h-6 text-primary-600" /> :
                                     opt.method.includes('Flight') ? <Plane className="w-6 h-6 text-primary-600" /> :
                                     <Bus className="w-6 h-6 text-primary-600" />}
                                </div>
                                <h3 className="font-display text-xl text-surface-900 mb-3">{opt.method}</h3>
                                <div className="flex items-center gap-2 text-primary-700 font-bold text-sm mb-4">
                                    <Clock className="w-4 h-4" />
                                    <span>Approx. {opt.time}</span>
                                </div>
                                <p className="text-surface-600 text-sm leading-relaxed mb-6 flex-grow">{opt.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advantages of Road Travel */}
            <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto text-surface-900">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="bg-primary-900 rounded-[48px] p-12 text-white relative z-10 shadow-2xl overflow-hidden">
                                <h2 className="font-display text-3xl mb-6 italic">Comfort and Flexibility</h2>
                                <p className="text-primary-100 mb-8 leading-relaxed">
                                    Private road transfers offer a personalized environment that other transport methods cannot match, especially for groups and those with specific schedules.
                                </p>
                                <div className="space-y-4">
                                    {page.highlights.map((highlight, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm text-primary-50 font-medium">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary-100 rounded-[48px] -z-10"></div>
                        </div>
                        <div>
                            <h2 className="font-display text-3xl mb-6">When to Choose Private Taxi</h2>
                            <p className="text-surface-600 mb-8 text-lg">
                                Many travelers prefer the direct nature of a road transfer between {page.cityA} and {page.cityB} for the following reasons:
                            </p>
                            <div className="grid gap-6">
                                <div className="flex gap-5">
                                    <div className="p-3 bg-white rounded-xl shadow-sm border border-surface-200">
                                        <Users className="w-6 h-6 text-primary-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1 uppercase tracking-tight text-sm">Group & Family Travel</h3>
                                        <p className="text-surface-500 text-sm leading-relaxed">Easier coordination for groups without splitting up across different tickets or seats.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="p-3 bg-white rounded-xl shadow-sm border border-surface-200">
                                        <Luggage className="w-6 h-6 text-primary-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1 uppercase tracking-tight text-sm">Significant Baggage</h3>
                                        <p className="text-surface-500 text-sm leading-relaxed">Direct handling of multiple suitcases from your start point to your exact destination.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="p-3 bg-white rounded-xl shadow-sm border border-surface-200">
                                        <Briefcase className="w-6 h-6 text-primary-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1 uppercase tracking-tight text-sm">Door-to-Door Connectivity</h3>
                                        <p className="text-surface-500 text-sm leading-relaxed">Avoid the transit between city districts and major transport terminals.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* General FAQs */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl text-surface-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-surface-500">Neutral information about the route between {page.cityA} and {page.cityB}.</p>
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
                    <h2 className="font-display text-3xl text-surface-900 mb-8 text-center italic">Related Travel Guides</h2>
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

            {/* CTA Final */}
            <section className="section-padding bg-primary-600 text-white overflow-hidden relative">
                <div className="container-custom mx-auto text-center relative z-10">
                    <h2 className="font-display text-3xl lg:text-4xl mb-6">Plan Your Trip from {page.cityA} to {page.cityB}</h2>
                    <p className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto">Arrange a professional road transfer for a direct and comfortable journey between the cities.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="#booking" className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-primary-50 transition-colors">Book a Transfer</Link>
                        <Link href="/contact" className="bg-primary-700 text-white border border-primary-500 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-primary-800 transition-colors">Contact Us</Link>
                    </div>
                </div>
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-20"></div>
            </section>
        </div>
    );
}
