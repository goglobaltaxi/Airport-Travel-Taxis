import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { embassyPages } from '@/lib/embassyData';
import BookingWidget from '@/components/BookingWidget';
import {
    MapPin,
    Clock,
    Car,
    ShieldCheck,
    ChevronRight,
    FileText,
    Building2,
    AlertCircle,
} from 'lucide-react';

export async function generateStaticParams() {
    return embassyPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const page = embassyPages.find((p) => p.slug === params.slug);
    if (!page) return {};
    
    const pageTitle = `Taxi to ${page.embassyName} in ${page.city} | Professional Service`;
    const pageDescription = `Book a professional taxi to ${page.embassyName} in ${page.city}. We provide safe, pre-booked 24/7 transportation with professional chauffeurs for sightseeing.`;
    
    return {
        title: pageTitle,
        description: pageDescription,
        openGraph: {
            title: pageTitle,
            description: pageDescription,
            url: `https://airporttraveltaxis.com/taxi-to-embassy/${page.slug}`,
        },
        alternates: {
            canonical: `https://airporttraveltaxis.com/taxi-to-embassy/${page.slug}`,
        },
    };
}

export default function EmbassyTaxiPage({ params }: { params: { slug: string } }) {
    const page = embassyPages.find((p) => p.slug === params.slug);
    if (!page) notFound();

    const vehicles = [
        { name: 'Mercedes S-Class', type: 'Executive Sedan', desc: 'Suitable for individual business travelers.' },
        { name: 'BMW 7 Series', type: 'Executive Sedan', desc: 'Comfortable and spacious for solo or couple travel.' },
        { name: 'Genesis G90', type: 'Executive Sedan', desc: 'A refined option for professional trips.' },
        { name: 'Ford Taurus', type: 'Standard Sedan', desc: 'Practical sedan for everyday embassy visits.' },
        { name: 'Toyota Camry', type: 'Standard Sedan', desc: 'Comfortable and reliable for city transfers.' },
        { name: 'Cadillac Escalade', type: 'Large SUV', desc: 'Spacious for families or groups with luggage.' },
        { name: 'GMC Yukon XL', type: 'Large SUV', desc: 'Ideal for families with children or extra documents.' },
        { name: 'Hyundai Staria', type: 'Passenger Van', desc: 'Suitable for small groups traveling together.' },
        { name: 'Mercedes Vito', type: 'Passenger Van', desc: 'Fits up to 8 passengers with luggage.' },
        { name: 'Mercedes Sprinter', type: 'Minibus', desc: 'For larger groups requiring shared embassy transport.' },
    ];

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6">
                        <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-surface-900">Taxi to {page.embassyName} {page.city}</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <Building2 className="w-4 h-4 text-primary-600" />
                                <span className="text-sm text-primary-700 font-medium">Embassy Transfer</span>
                            </div>
                            <h1 className="font-display text-3xl lg:text-[42px] lg:leading-[48px] text-surface-900 mb-4">
                                Taxi to {page.embassyName} <span className="text-primary-600">{page.city}</span>
                            </h1>
                            <p className="text-surface-600 text-lg leading-relaxed mb-6">{page.longDescription}</p>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-white border border-surface-200 rounded-xl p-4">
                                    <MapPin className="w-5 h-5 text-primary-600 mb-2" />
                                    <p className="text-xs text-surface-500 uppercase tracking-wide font-medium mb-1">District</p>
                                    <p className="text-surface-900 font-semibold text-sm">{page.district}</p>
                                </div>
                                <div className="bg-white border border-surface-200 rounded-xl p-4">
                                    <Clock className="w-5 h-5 text-primary-600 mb-2" />
                                    <p className="text-xs text-surface-500 uppercase tracking-wide font-medium mb-1">Travel Time</p>
                                    <p className="text-surface-900 font-semibold text-sm">{page.approxTravelTime}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {['Home Pickup', 'Hotel Pickup', 'Airport Pickup', 'Return Trip Available', '24/7 Service'].map((tag) => (
                                    <span key={tag} className="text-xs bg-surface-100 border border-surface-200 text-surface-700 rounded-full px-3 py-1">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <BookingWidget />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why People Visit This Embassy */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-2">
                        Why People Visit the {page.embassyName} in {page.city}
                    </h2>
                    <p className="text-surface-500 mb-8">Common reasons for scheduling a consular appointment.</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {page.visitReasons.map((reason, i) => (
                            <div key={i} className="flex items-start gap-3 bg-surface-50 border border-surface-200 rounded-xl p-4">
                                <FileText className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                                <span className="text-surface-700 text-sm">{reason}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pickup Options */}
            <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-2">Taxi Pickup Options in {page.city}</h2>
                    <p className="text-surface-500 mb-8">We pick up from any location across {page.city} and drop off directly at the embassy entrance.</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: MapPin,
                                title: 'Home or Residence',
                                desc: `Our driver will arrive at your home, apartment, or compound in ${page.city}. No need to arrange onward transport.`,
                            },
                            {
                                icon: Building2,
                                title: 'Hotel Pickup',
                                desc: `We collect from any hotel in ${page.city}. Your driver will coordinate with reception if required.`,
                            },
                            {
                                icon: AlertCircle,
                                title: 'Airport Transfer',
                                desc: `Arriving in ${page.city} then heading straight to the embassy? We provide direct airport-to-embassy transfers.`,
                            },
                        ].map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="bg-white border border-surface-200 rounded-xl p-6">
                                <Icon className="w-6 h-6 text-primary-600 mb-3" />
                                <h3 className="font-semibold text-surface-900 mb-2">{title}</h3>
                                <p className="text-surface-600 text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Travel Time */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto max-w-3xl">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-4">Travel Time to the Embassy</h2>
                    <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 flex items-start gap-4">
                        <Clock className="w-8 h-8 text-primary-600 flex-shrink-0 mt-1" />
                        <div>
                            <p className="font-semibold text-surface-900 text-lg mb-1">{page.approxTravelTime}</p>
                            <p className="text-surface-600 text-sm leading-relaxed">
                                Travel time varies depending on your pickup location within {page.city}, time of day, and current traffic conditions.
                                We recommend scheduling your pickup at least 60 minutes before your embassy appointment to account for traffic and security screening time on arrival.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vehicle Options */}
            <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-2">Available Vehicles</h2>
                    <p className="text-surface-500 mb-8">Choose a vehicle that suits your group size and travel preference.</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {vehicles.map((v) => (
                            <div key={v.name} className="bg-white border border-surface-200 rounded-xl p-5 flex items-start gap-3">
                                <Car className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-surface-900 text-sm">{v.name}</p>
                                    <p className="text-xs text-primary-600 mb-1">{v.type}</p>
                                    <p className="text-surface-500 text-xs">{v.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Travel Tips */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto max-w-3xl">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-2">Travel Tips for Your Embassy Visit</h2>
                    <p className="text-surface-500 mb-8">Follow these guidelines to prepare for a smooth embassy appointment.</p>
                    <div className="space-y-4">
                        {page.travelTips.map((tip, i) => (
                            <div key={i} className="flex items-start gap-4 bg-surface-50 border border-surface-200 rounded-xl p-5">
                                <div className="w-7 h-7 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-sm font-bold flex-shrink-0">
                                    {i + 1}
                                </div>
                                <p className="text-surface-700 text-sm leading-relaxed">{tip}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto max-w-3xl">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-8">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {page.faq.map((item, i) => (
                            <div key={i} className="bg-white border border-surface-200 rounded-xl p-6">
                                <div className="flex items-start gap-3">
                                    <ShieldCheck className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-surface-900 mb-2">{item.question}</p>
                                        <p className="text-surface-600 text-sm leading-relaxed">{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Pages */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-8">Related Services</h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {page.relatedRoutes.map((rel) => (
                            <Link
                                key={rel.slug}
                                href={rel.slug}
                                className="group flex items-center justify-between bg-surface-50 border border-surface-200 hover:border-primary-400 hover:bg-primary-50 rounded-xl p-5 transition-all"
                            >
                                <span className="text-surface-900 font-medium group-hover:text-primary-700 text-sm">{rel.name}</span>
                                <ChevronRight className="w-4 h-4 text-surface-400 group-hover:text-primary-600 transition-colors" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
