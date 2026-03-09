import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { landmarkPages } from '@/lib/landmarkData';
import BookingWidget from '@/components/BookingWidget';
import {
    MapPin,
    Clock,
    Car,
    ShieldCheck,
    ChevronRight,
    Camera,
    Building2,
    Users,
    Plane,
    Home,
    Map,
} from 'lucide-react';

export async function generateStaticParams() {
    return landmarkPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const page = landmarkPages.find((p) => p.slug === params.slug);
    if (!page) return {};
    
    const pageTitle = `Taxi to ${page.landmarkName} in ${page.city} | Professional Service`;
    const pageDescription = `Book a professional taxi to ${page.landmarkName} in ${page.city}. We provide safe, pre-booked 24/7 transportation with professional chauffeurs for sightseeing.`;
    
    return {
        title: pageTitle,
        description: pageDescription,
        openGraph: {
            title: pageTitle,
            description: pageDescription,
            url: `https://airporttraveltaxis.com/taxi-to-landmark/${page.slug}`,
        },
        alternates: {
            canonical: `https://airporttraveltaxis.com/taxi-to-landmark/${page.slug}`,
        },
    };
}

export default function LandmarkTaxiPage({ params }: { params: { slug: string } }) {
    const page = landmarkPages.find((p) => p.slug === params.slug);
    if (!page) notFound();

    const vehicles = [
        { name: 'Mercedes S-Class', type: 'Executive Sedan', desc: 'Premium comfort for visits to iconic landmarks.' },
        { name: 'BMW', type: 'Executive Sedan', desc: 'Elegant and professional travel for sightseeing.' },
        { name: 'Genesis', type: 'Executive Sedan', desc: 'Refined comfort for your landmark tour.' },
        { name: 'Cadillac Escalade', type: 'Large SUV', desc: 'Spacious and executive SUV for tourist groups.' },
        { name: 'GMC', type: 'Large SUV', desc: 'Ideal for families visiting major city attractions.' },
        { name: 'Ford Taurus', type: 'Standard Sedan', desc: 'Reliable city car for landmark visits and sightseeing.' },
        { name: 'Mercedes Vito', type: 'Passenger Van', desc: 'Up to 8 passengers in an executive van setting.' },
        { name: 'Mercedes Sprinter', type: 'Minibus', desc: 'Perfect for larger tourist groups and sightseeing tours.' },
        { name: 'Executive Bus', type: 'Coach', desc: 'Large group transport for tourist excursions.' },
        { name: 'Camry', type: 'Standard Sedan', desc: 'Comfortable and efficient for daily tourist trips.' },
        { name: 'Staria', type: 'Passenger Van', desc: 'Spacious seating for groups up to 7 passengers.' },
        { name: 'Hiace', type: 'Passenger Van', desc: 'Practical group transport for tour parties.' },
        { name: 'Coaster', type: 'Minibus', desc: 'Efficient transport for larger sightseeing groups.' },
    ];

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6">
                        <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-surface-900">Taxi to {page.landmarkName}</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <Camera className="w-4 h-4 text-primary-600" />
                                <span className="text-sm text-primary-700 font-medium">
                                    {page.landmarkType} — {page.city}, {page.cityCountry}
                                </span>
                            </div>
                            <h1 className="font-display text-3xl lg:text-[42px] lg:leading-[48px] text-surface-900 mb-4">
                                Taxi to {page.landmarkName}{' '}
                                <span className="text-primary-600">{page.city}</span>
                            </h1>
                            <p className="text-surface-600 text-lg leading-relaxed mb-6">{page.longDescription}</p>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-white border border-surface-200 rounded-xl p-4">
                                    <MapPin className="w-5 h-5 text-primary-600 mb-2" />
                                    <p className="text-xs text-surface-500 uppercase tracking-wide font-medium mb-1">Location</p>
                                    <p className="text-surface-900 font-semibold text-sm">{page.locationDetails}</p>
                                </div>
                                <div className="bg-white border border-surface-200 rounded-xl p-4">
                                    <Clock className="w-5 h-5 text-primary-600 mb-2" />
                                    <p className="text-xs text-surface-500 uppercase tracking-wide font-medium mb-1">Travel Time</p>
                                    <p className="text-surface-900 font-semibold text-sm">{page.approxTravelTime}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {['Sightseeing', 'Tourist Visit', 'Cultural Site', 'Airport Transfer', 'Hotel Pickup', 'Group Travel'].map((tag) => (
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

            {/* Landmark Overview */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-2">
                        Landmark Overview
                    </h2>
                    <p className="text-surface-500 mb-8">Discover why {page.landmarkName} is a must-visit destination in {page.city}.</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {page.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3 bg-surface-50 border border-surface-200 rounded-xl p-4">
                                <Building2 className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                                <span className="text-surface-700 text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Taxi Pickup Options */}
            <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-2">
                        Pickup Options in {page.city}
                    </h2>
                    <p className="text-surface-500 mb-8">
                        Our drivers can collect you from any location for your visit to {page.landmarkName}.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            {
                                icon: Plane,
                                title: 'From the Airport',
                                desc: `Punctual transfers for arriving tourists at the international airport.`,
                            },
                            {
                                icon: Building2,
                                title: 'Hotel Collection',
                                desc: `Pickups from any hotel or tourist residence in the city.`,
                            },
                            {
                                icon: Home,
                                title: 'Home or Residence',
                                desc: `Door-to-door service from your residential address to the landmark.`,
                            },
                            {
                                icon: Map,
                                title: 'City Centers',
                                desc: `Pickup from downtown areas, shopping malls, or other landmarks.`,
                            },
                        ].map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="bg-white border border-surface-200 rounded-xl p-5">
                                <Icon className="w-6 h-6 text-primary-600 mb-3" />
                                <h3 className="font-semibold text-surface-900 text-sm mb-2">{title}</h3>
                                <p className="text-surface-600 text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Travel Time */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto max-w-3xl text-center">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-4">
                        Approximate Travel Time
                    </h2>
                    <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 flex flex-col items-center gap-4">
                        <Clock className="w-8 h-8 text-primary-600" />
                        <div>
                            <p className="font-semibold text-surface-900 text-lg mb-1">{page.approxTravelTime}</p>
                            <p className="text-surface-600 text-sm leading-relaxed">
                                Travel time to {page.landmarkName} varies based on your pickup location in {page.city} and current traffic. We recommend visiting during off-peak hours for a smoother journey and less waiting time at the attraction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vehicle Options */}
            <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-2">Available Vehicles</h2>
                    <p className="text-surface-500 mb-8">
                        Select a vehicle that matches your group size and sightseeing comfort requirements.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {vehicles.map((v) => (
                            <div key={v.name} className="bg-white border border-surface-200 rounded-xl p-4 flex items-start gap-3">
                                <Car className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-surface-900 text-sm">{v.name}</p>
                                    <p className="text-xs text-primary-600 mb-1">{v.type}</p>
                                    <p className="text-surface-500 text-xs leading-snug">{v.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Travel Tips for Visitors */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto max-w-3xl">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-2">
                        Travel Tips for Visitors
                    </h2>
                    <p className="text-surface-500 mb-8">Practical guidance for a smooth journey to {page.landmarkName}.</p>
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
