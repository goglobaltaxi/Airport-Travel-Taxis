import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { gccTravelPages } from '@/lib/gccTravelData';
import BookingWidget from '@/components/BookingWidget';
import StructuredInformationBlocks from '@/components/StructuredInformationBlocks';
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
    Plane,
    Bus,
    FileText,
    HelpCircle,
    Globe,
    AlertCircle,
} from 'lucide-react';
import RouteFinder from '@/components/RouteFinder';
import TravelCalculator from '@/components/TravelCalculator';

interface Props {
    params: { slug: string };
}

export async function generateStaticParams() {
    return gccTravelPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const page = gccTravelPages.find((p) => p.slug === params.slug);
    if (!page) return {};

    return {
        title: page.title,
        description: page.overview,
        openGraph: {
            title: `${page.title} | Airport Travel Taxis`,
            description: page.overview,
            url: `https://airporttraveltaxis.com/gcc-travel-${page.slug}`,
        },
        alternates: {
            canonical: `https://airporttraveltaxis.com/gcc-travel-${page.slug}`,
        },
    };
}

export default function GCCTravelPage({ params }: Props) {
    const page = gccTravelPages.find((p) => p.slug === params.slug);
    if (!page) notFound();

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6 font-medium">
                        <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-surface-900">{page.title}</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <Globe className="w-4 h-4 text-primary-600" />
                                <span className="text-sm text-primary-700 font-medium tracking-tight">GCC Travel Knowledge</span>
                            </div>
                            <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-6 leading-tight">
                                {page.title}
                            </h1>
                            <p className="text-surface-600 text-lg leading-relaxed mb-8">{page.overview}</p>

                            <div className="flex flex-wrap gap-2">
                                {['Regional Travel', 'Transportation', 'GCC States', 'Factual Information', 'Visitor Guide'].map((tag) => (
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

            {/* Route Finder Integration */}
            <section className="bg-surface-50 py-12 border-y border-surface-200">
                <div className="container-custom mx-auto">
                    <RouteFinder />
                    <TravelCalculator />
                </div>
            </section>

            {/* Travel Options */}
            <section className="section-padding bg-white border-y border-surface-200">
                <div className="container-custom mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="font-display text-3xl text-surface-900 mb-4">Travel Options in GCC</h2>
                        <p className="text-surface-500">Various transportation methods available for moving within and between GCC countries.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {page.travelOptions.map((opt, i) => (
                            <div key={i} className="bg-surface-50 border border-surface-200 rounded-2xl p-8 hover:border-primary-300 transition-all flex flex-col shadow-sm group">
                                <div className="p-3 bg-white rounded-xl border border-surface-200 w-fit mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    {opt.method.toLowerCase().includes('taxi') || opt.method.toLowerCase().includes('driver') || opt.method.toLowerCase().includes('chauffeur') ? <Car className="w-6 h-6 text-primary-600" /> :
                                     opt.method.toLowerCase().includes('flight') || opt.method.toLowerCase().includes('airport') ? <Plane className="w-6 h-6 text-primary-600" /> :
                                     <Bus className="w-6 h-6 text-primary-600" />}
                                </div>
                                <h3 className="font-bold text-lg text-surface-900 mb-3 tracking-tight">{opt.method}</h3>
                                <p className="text-surface-600 text-sm leading-relaxed mb-6 flex-grow">{opt.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* When to Use Private Transfers */}
            <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-display text-3xl text-surface-900 mb-6">When Travelers Use Private Transfers</h2>
                            <p className="text-surface-700 leading-relaxed text-lg mb-8">
                                {page.whenToUse}
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-surface-200 shadow-sm">
                                    <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <span className="text-surface-700 font-bold text-sm tracking-tight">Professional Local Drivers</span>
                                </div>
                                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-surface-200 shadow-sm">
                                    <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
                                        <Navigation className="w-5 h-5" />
                                    </div>
                                    <span className="text-surface-700 font-bold text-sm tracking-tight">Direct Door-to-Door Hubs</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-surface-900 rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl">
                            <div className="relative z-10">
                                <AlertCircle className="w-12 h-12 text-primary-400 mb-6" />
                                <h3 className="font-display text-2xl mb-4 italic uppercase tracking-tight">Requirement Focus</h3>
                                <p className="text-primary-100 mb-8 leading-relaxed font-medium">
                                    Understanding the local requirements is essential for a smooth journey through the region.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-primary-200">Legal Documentation</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-primary-200">Entry Procedures</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-800 rounded-full translate-x-1/2 -translate-y-1/2 opacity-20"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Travel Requirements */}
            <section className="section-padding bg-white border-b border-surface-200">
                <div className="container-custom mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="font-display text-3xl text-surface-900 mb-4">Travel Requirements</h2>
                        <p className="text-surface-500">Key considerations for organizing your road and airport travel.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {page.requirements.map((req, i) => (
                            <div key={req.title} className="bg-surface-50 border border-surface-200 rounded-2xl p-8 hover:bg-white transition-all shadow-sm">
                                <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold mb-6">
                                    {i + 1}
                                </div>
                                <h3 className="font-bold text-xl text-surface-900 mb-4 uppercase tracking-tighter">{req.title}</h3>
                                <p className="text-surface-600 text-sm leading-relaxed font-medium">{req.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Travel Tips */}
             <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto max-w-4xl">
                    <div className="bg-white border border-surface-200 rounded-[32px] overflow-hidden shadow-sm">
                        <div className="bg-primary-900 p-8 text-white">
                            <div className="flex items-center gap-3 mb-2">
                                <Info className="w-6 h-6" />
                                <h2 className="font-display text-2xl">Regional Travel Tips</h2>
                            </div>
                            <p className="text-primary-100">Helpful guidance for navigating the GCC transportation network.</p>
                        </div>
                        <div className="p-8 grid sm:grid-cols-2 gap-6">
                            {page.tips.map((tip, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                                    <p className="text-surface-700 font-medium">{tip}</p>
                                </div>
                            ))}
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
                        <h2 className="font-display text-3xl text-surface-900 mb-4">Common Questions</h2>
                        <p className="text-surface-500">Essential information for travelers in the GCC.</p>
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

            {/* Route Finder Integration */}
            <section className="bg-surface-50 py-12 border-y border-surface-200">
                <div className="container-custom mx-auto">
                    <RouteFinder />
                    <TravelCalculator />
                </div>
            </section>

            {/* Related Pages */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-3xl text-surface-900 mb-8 text-center italic">Related Travel Links</h2>
                    <div className="grid sm:grid-cols-3 gap-6">
                        {page.relatedLinks.map((rel) => (
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
