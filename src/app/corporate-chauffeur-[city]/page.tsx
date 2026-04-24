import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { corporateChauffeurPages } from '@/lib/corporateData';
import { MapPin, Car, ChevronRight, MessageSquare, CheckCircle2, Briefcase } from 'lucide-react';

interface Props { params: { city: string }; }

export async function generateStaticParams() {
    return corporateChauffeurPages.map((page) => ({ city: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const page = corporateChauffeurPages.find((p) => p.slug === params.city);
    if (!page) return {};
    return {
        title: page.title,
        description: `Corporate chauffeur service in ${page.city}. Private car for business meetings, airport transfers, and office trips. Message us on WhatsApp to get a quote.`,
        openGraph: { title: page.title, description: page.overview, url: `https://airporttraveltaxis.com/corporate-chauffeur-${page.slug}` },
        alternates: { canonical: `https://airporttraveltaxis.com/corporate-chauffeur-${page.slug}` },
    };
}

export default function CorporateChauffeurPage({ params }: Props) {
    const page = corporateChauffeurPages.find((p) => p.slug === params.city);
    if (!page) notFound();

    const faqs = [
        { question: `Can you pick us up from our office in ${page.city}?`, answer: "Yes, we pick up from offices, hotels, or any address in the city." },
        { question: "Is the car private or shared?", answer: "All cars are fully private. No other passengers will be in your car." },
        { question: "Can I book for a group of business travelers?", answer: "Yes. Tell us your group size on WhatsApp and we will send the right vehicle." },
        { question: "Do you do airport transfers for business trips?", answer: "Yes, this is one of the most common bookings we handle." },
        { question: "Are drivers punctual?", answer: "Yes, drivers are time-aware and plan for traffic in advance." },
        { question: "Can I book on short notice?", answer: "We try our best. Message us on WhatsApp and we will check availability." },
        { question: "Do drivers speak English?", answer: "Yes, all drivers communicate clearly in English or Arabic." },
        { question: "Can I book a return trip?", answer: "Yes, mention both trips when you message us and we will arrange it." },
        ...(page.faq || [])
    ].slice(0, 10);

    return (
        <div className="pt-20">
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto max-w-4xl">
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6 font-medium flex-wrap">
                        <Link href="/" className="hover:text-gold-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-surface-900 truncate">Corporate Chauffeur {page.city}</span>
                    </div>
                    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-surface-200">
                        <div className="inline-flex items-center gap-2 mb-4 text-sm font-semibold text-primary-900 bg-surface-100 px-4 py-1.5 rounded-full border border-surface-200">
                            <Briefcase className="w-4 h-4 text-gold-500" />
                            Business & Corporate Travel
                        </div>
                        <h1 className="font-display text-4xl text-primary-900 mb-6 leading-tight">
                            Corporate Chauffeur Service in {page.city}
                        </h1>
                        <p className="text-surface-700 text-lg leading-relaxed mb-6">
                            We provide private car service for business travelers in {page.city}. This is for airport transfers, client meetings, and office-to-office trips. To get the exact quote, you can contact on WhatsApp.
                        </p>
                        <a href="https://wa.me/966569487569" className="btn-primary inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg">
                            <MessageSquare className="w-5 h-5" />
                            Get a quote on WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white border-b border-surface-200">
                <div className="container-custom mx-auto max-w-4xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="font-display text-2xl text-primary-900 mb-4">About This Service</h2>
                            <p className="text-surface-600 leading-relaxed mb-6">
                                This is a private car service for business use in {page.city}. It is for people who need a reliable driver who shows up on time and takes them to the right place.
                            </p>
                            <h2 className="font-display text-2xl text-primary-900 mb-4">Common Situations</h2>
                            <ul className="space-y-3">
                                {(page.commonUses || ['Airport transfers', 'Office visits', 'Client meetings', 'Corporate events']).slice(0, 5).map((use, i) => (
                                    <li key={i} className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                                        <p className="text-surface-600">{use}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-surface-50 p-6 md:p-8 rounded-2xl border border-surface-200">
                            <h2 className="font-display text-2xl text-primary-900 mb-4">Good to Know</h2>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-2 text-surface-600"><CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />Drivers know the city well and plan for traffic.</li>
                                <li className="flex items-start gap-2 text-surface-600"><CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />Sedans, SUVs, and vans are available depending on your group.</li>
                                <li className="flex items-start gap-2 text-surface-600"><CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />All vehicles are clean and air-conditioned.</li>
                                <li className="flex items-start gap-2 text-surface-600"><CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />Service is available 24 hours, including early morning flights.</li>
                            </ul>
                            {page.pickupLocations && page.pickupLocations.length > 0 && (
                                <>
                                    <h3 className="font-semibold text-primary-900 mb-3">Pickup Points</h3>
                                    <ul className="space-y-2">
                                        {page.pickupLocations.slice(0, 4).map((loc, i) => (
                                            <li key={i} className="flex items-center gap-2 text-surface-600 text-sm">
                                                <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
                                                {loc}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            <a href="https://wa.me/966569487569" className="text-gold-600 font-bold hover:text-gold-500 inline-flex items-center gap-1 transition-colors mt-4 block">
                                Message now to check availability <ChevronRight className="w-4 h-4 inline" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-primary-900 text-white text-center">
                <div className="container-custom mx-auto max-w-2xl">
                    <h2 className="font-display text-3xl mb-4 text-gold-400">Want to know the fare?</h2>
                    <p className="text-surface-300 leading-relaxed mb-8">Send your pickup address and drop-off location on WhatsApp. We will reply fast. To get exact fare and availability, message on WhatsApp.</p>
                    <a href="https://wa.me/966569487569" className="bg-white text-primary-900 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-3">
                        <MessageSquare className="w-5 h-5 text-green-600" />
                        Contact now for quick response
                    </a>
                </div>
            </section>

            <section className="section-padding bg-surface-50 border-t border-surface-200">
                <div className="container-custom mx-auto max-w-3xl">
                    <h2 className="font-display text-2xl text-surface-900 mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((item, i) => (
                            <div key={i} className="bg-white border border-surface-200 rounded-2xl p-6">
                                <h3 className="font-bold text-surface-900 mb-2">{item.question}</h3>
                                <p className="text-surface-600">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {page.relatedPages && page.relatedPages.length > 0 && (
                <section className="section-padding bg-white border-t border-surface-200">
                    <div className="container-custom mx-auto max-w-4xl">
                        <h2 className="font-display text-2xl text-surface-900 mb-6">Related Services</h2>
                        <div className="flex flex-wrap gap-3">
                            {page.relatedPages.map((rel) => (
                                <Link key={rel.url} href={rel.url} className="text-gold-600 hover:text-gold-500 font-semibold text-sm border border-gold-200 rounded-full px-4 py-2 hover:bg-gold-50 transition-colors">
                                    {rel.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
