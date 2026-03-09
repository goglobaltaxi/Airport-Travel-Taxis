import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { universityPages } from '@/lib/universityData';
import BookingWidget from '@/components/BookingWidget';
import {
    MapPin,
    Clock,
    Car,
    ShieldCheck,
    ChevronRight,
    GraduationCap,
    Building2,
    Users,
    Plane,
    Home,
} from 'lucide-react';

export async function generateStaticParams() {
    return universityPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const page = universityPages.find((p) => p.slug === params.slug);
    if (!page) return {};
    
    const pageTitle = `Taxi to ${page.universityName} in ${page.city} | Professional Service`;
    const pageDescription = `Book a professional taxi to ${page.universityName} in ${page.city}. We provide safe, pre-booked 24/7 transportation with professional chauffeurs for sightseeing.`;
    
    return {
        title: pageTitle,
        description: pageDescription,
        openGraph: {
            title: pageTitle,
            description: pageDescription,
            url: `https://airporttraveltaxis.com/taxi-to-university/${page.slug}`,
        },
        alternates: {
            canonical: `https://airporttraveltaxis.com/taxi-to-university/${page.slug}`,
        },
    };
}

export default function UniversityTaxiPage({ params }: { params: { slug: string } }) {
    const page = universityPages.find((p) => p.slug === params.slug);
    if (!page) notFound();

    const vehicles = [
        { name: 'Toyata Camry', type: 'Standard Sedan', desc: 'Comfortable and reliable for student commutes.' },
        { name: 'Ford Taurus', type: 'Standard Sedan', desc: 'Efficient city car for faculty and campus travel.' },
        { name: 'Hyundai Staria', type: 'Passenger Van', desc: 'Comfortable seating for up to 7 students or staff.' },
        { name: 'Toyota Hiace', type: 'Passenger Van', desc: 'Efficient group transport for university departments.' },
        { name: 'Mercedes Vito', type: 'Passenger Van', desc: 'Up to 8 passengers for visiting academic teams.' },
        { name: 'Mercedes Sprinter', type: 'Minibus', desc: 'Perfect for larger student delegations or events.' },
        { name: 'Toyota Coaster', type: 'Minibus', desc: 'Spacious transport for large university groups.' },
        { name: 'Mercedes S-Class', type: 'Executive Sedan', desc: 'Premium comfort for visiting professors and guests.' },
        { name: 'BMW 7 Series', type: 'Executive Sedan', desc: 'High-standard executive travel for campus dignitaries.' },
        { name: 'Genesis G90', type: 'Executive Sedan', desc: 'Refined and comfortable for professional arrivals.' },
        { name: 'Cadillac Escalade', type: 'Large SUV', desc: 'Spacious for parents or academic guests with luggage.' },
        { name: 'GMC Yukon XL', type: 'Large SUV', desc: 'Ideal for families or groups visiting the campus.' },
        { name: 'Executive Bus', type: 'Coach', desc: 'Large group transport for university conferences.' },
    ];

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6">
                        <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-surface-900">Taxi to {page.universityName}</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <GraduationCap className="w-4 h-4 text-primary-600" />
                                <span className="text-sm text-primary-700 font-medium">
                                    {page.universityType} — {page.city}, {page.cityCountry}
                                </span>
                            </div>
                            <h1 className="font-display text-3xl lg:text-[42px] lg:leading-[48px] text-surface-900 mb-4">
                                Taxi to {page.universityName}{' '}
                                <span className="text-primary-600">{page.city}</span>
                            </h1>
                            <p className="text-surface-600 text-lg leading-relaxed mb-6">{page.longDescription}</p>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-white border border-surface-200 rounded-xl p-4">
                                    <MapPin className="w-5 h-5 text-primary-600 mb-2" />
                                    <p className="text-xs text-surface-500 uppercase tracking-wide font-medium mb-1">Campus Area</p>
                                    <p className="text-surface-900 font-semibold text-sm">{page.locationDetails}</p>
                                </div>
                                <div className="bg-white border border-surface-200 rounded-xl p-4">
                                    <Clock className="w-5 h-5 text-primary-600 mb-2" />
                                    <p className="text-xs text-surface-500 uppercase tracking-wide font-medium mb-1">Travel Time</p>
                                    <p className="text-surface-900 font-semibold text-sm">{page.approxTravelTime}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {['Student Travel', 'Parent Visit', 'Faculty Transfer', 'Airport Transfer', 'Hotel Pickup', 'Group Travel'].map((tag) => (
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

            {/* University Overview */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-2">
                        University Campus Overview
                    </h2>
                    <p className="text-surface-500 mb-8">Academic excellence and location details for {page.universityName}.</p>
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
                        Our reliable drivers can pick you up from various city locations for your visit to {page.universityName}.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            {
                                icon: Plane,
                                title: 'From the Airport',
                                desc: `Punctual transfers for arriving students or faculty at the international airport.`,
                            },
                            {
                                icon: Building2,
                                title: 'Hotel Collection',
                                desc: `Pickups from any hotel or boutique residence in the city for visiting parents.`,
                            },
                            {
                                icon: Home,
                                title: 'Home or Residence',
                                desc: `Door-to-door service from your residential address to the university gates.`,
                            },
                            {
                                icon: Users,
                                title: 'Student Residences',
                                desc: `Transfers from student dorms or off-campus housing areas.`,
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
                                Travel time to {page.universityName} depends on your current area within {page.city} and the time of day. We recommend leaving extra travel time during the morning and afternoon rush hours when campus gate traffic is peak.
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
                        Select a vehicle that matches your group size and comfort requirements.
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

            {/* Campus Travel Tips */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto max-w-3xl">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-2">
                        Campus Travel Tips
                    </h2>
                    <p className="text-surface-500 mb-8">Practical guidance for a smooth journey to {page.universityName}.</p>
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
