import { Metadata } from 'next';
import Link from 'next/link';
import BookingWidget from '@/components/BookingWidget';
import FAQ from '@/components/FAQ';
import RouteFinder from '@/components/RouteFinder';
import { ChevronRight, MapPin, Clock, Info, ShieldCheck, Car, CheckCircle2, Navigation } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Taxi to Masjid Al Haram | Professional Pre-Booked Service',
    description: 'Book a professional taxi to Masjid Al Haram. We provide safe, pre-booked 24/7 transportation with professional chauffeurs across Saudi Arabia and the GCC.',
    openGraph: {
        title: 'Taxi to Masjid Al Haram | Professional Pre-Booked Service',
        description: 'Book a professional taxi to Masjid Al Haram. We provide safe, pre-booked 24/7 transportation with professional chauffeurs across Saudi Arabia and the GCC.',
        url: 'https://airporttraveltaxis.com/taxi-to-masjid-al-haram',
    },
    alternates: {
        canonical: 'https://airporttraveltaxis.com/taxi-to-masjid-al-haram',
    },
};

export default function PilgrimageDestinationPage() {
    const vehicles = [
        { name: 'Mercedes S-Class', type: 'Executive Sedan' },
        { name: 'Cadillac Escalade', type: 'Large SUV' },
        { name: 'GMC', type: 'Large SUV' },
        { name: 'Ford Taurus', type: 'Standard Sedan' },
        { name: 'BMW', type: 'Executive Sedan' },
        { name: 'Genesis', type: 'Executive Sedan' },
        { name: 'Mercedes Vito', type: 'Passenger Van' },
        { name: 'Mercedes Sprinter', type: 'Minibus' },
        { name: 'Executive Bus', type: 'Coach' },
        { name: 'Camry', type: 'Standard Sedan' },
        { name: 'Staria', type: 'Passenger Van' },
        { name: 'Hiace', type: 'Passenger Van' },
        { name: 'Coaster', type: 'Minibus' }
    ];

    return (
        <div className="pt-20">
            {/* Header Section */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6 font-medium">
                        <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-surface-900 truncate">Taxi to Masjid al Haram</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <MapPin className="w-4 h-4 text-primary-600" />
                                <span className="text-sm text-primary-700 font-medium tracking-tight">Pilgrimage Transportation</span>
                            </div>
                            <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-6 leading-tight">
                                Taxi to <span className="text-primary-600">Masjid al Haram</span>
                            </h1>
                            
                            <div className="mb-6 p-5 bg-white border border-primary-200 rounded-2xl shadow-sm">
                                <h3 className="font-bold text-surface-900 flex items-center gap-2 mb-2">
                                    <Info className="w-5 h-5 text-primary-600" />
                                    Important Service Notice
                                </h3>
                                <p className="text-surface-700 text-sm leading-relaxed mb-3">
                                    Airport Travel Taxis provides <strong>pre-booked transfers only</strong>. We focus on longer journeys such as airport transfers and intercity travel.
                                </p>
                                <p className="text-surface-600 text-sm leading-relaxed">
                                    <strong>We do NOT provide:</strong> short-distance local rides, street taxi hailing, or ride-hailing services similar to Uber or Careem.
                                </p>
                            </div>

                            <p className="text-surface-600 text-lg leading-relaxed mb-8">
                                Arrive at Masjid al Haram with professional, reliable transport. Focus on your spiritual journey while we handle the logistics of your pre-booked travel.
                            </p>
                        </div>

                        <div className="lg:sticky lg:top-24">
                            <BookingWidget />
                        </div>
                    </div>
                </div>
            </section>

            {/* Travel Details Content */}
            <section className="section-padding bg-white border-y border-surface-200">
                <div className="container-custom mx-auto max-w-4xl">
                    <div className="grid gap-8">
                        {/* Location Overview */}
                        <div className="bg-surface-50 border border-surface-200 rounded-2xl p-8">
                            <h2 className="font-display text-3xl text-surface-900 mb-4">Overview of the Location</h2>
                            <p className="text-surface-700 text-lg leading-relaxed mb-6">
                                Masjid al Haram is the holiest site in Islam. Located in the center of Makkah, it is the focal point for pilgrims performing Umrah and Hajj. Planning your journey here from airports or other cities is a key part of your pilgrimage.
                            </p>
                            
                            <h3 className="font-bold text-xl text-surface-900 mb-3">Transportation for Pilgrims</h3>
                            <p className="text-surface-600 leading-relaxed">
                                Our service focuses on longer pre-booked journeys for pilgrims, such as airport transfers and intercity travel. We ensure a structured, reliable transfer to your accommodation near the mosque. Short-distance local rides, street taxi hailing, and ride-hailing services are not provided.
                            </p>
                        </div>

                        {/* Travel From Section */}
                        <div className="border border-surface-200 rounded-2xl p-8">
                            <h3 className="font-display text-2xl text-surface-900 mb-6 flex items-center gap-2">
                                <Navigation className="w-6 h-6 text-primary-600" />
                                Travel Routes
                            </h3>
                            
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-surface-900 mb-2">Travel from Jeddah Airport</h4>
                                    <p className="text-surface-600 leading-relaxed">Direct pre-booked transfers from King Abdulaziz International Airport (JED) to hotels near Masjid al Haram.</p>
                                </div>
                                <hr className="border-surface-200" />
                                <div>
                                    <h4 className="font-bold text-surface-900 mb-2">Travel from Makkah Hotels</h4>
                                    <p className="text-surface-600 leading-relaxed">We provide longer transfers from outer Makkah districts or train stations. Short inner-city hops are not available.</p>
                                </div>
                                <hr className="border-surface-200" />
                                <div>
                                    <h4 className="font-bold text-surface-900 mb-2">Travel from Madinah Airport</h4>
                                    <p className="text-surface-600 leading-relaxed">Long-distance intercity transfers from Madinah Airport or Madinah hotels directly to Makkah accommodations.</p>
                                </div>
                            </div>
                        </div>

                        {/* Travel Time */}
                        <div className="bg-surface-50 border border-surface-200 rounded-2xl p-8">
                            <h3 className="font-display text-2xl text-surface-900 mb-3 flex items-center gap-2">
                                <Clock className="w-6 h-6 text-primary-600" />
                                Travel Time Estimates
                            </h3>
                            <p className="text-surface-600 leading-relaxed">
                                Jeddah Airport to Makkah takes 75 to 90 minutes. Intercity travel from Madinah takes 4.5 to 5.5 hours. Times vary based on traffic and prayer schedules.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vehicle Options */}
            <section className="section-padding bg-white border-b border-surface-200">
                <div className="container-custom mx-auto">
                    <div className="max-w-xl mb-12">
                        <h2 className="font-display text-3xl text-surface-900 mb-4">Vehicle Options</h2>
                        <p className="text-surface-500">Professional fleet options for your pre-booked journey.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {vehicles.map((v) => (
                            <div key={v.name} className="bg-surface-50 border border-surface-200 rounded-xl p-4 flex items-center gap-3">
                                <div className="p-2 bg-white rounded-lg shrink-0 shadow-sm">
                                    <Car className="w-5 h-5 text-primary-600" />
                                </div>
                                <div>
                                    <p className="font-bold text-surface-900 leading-tight">{v.name}</p>
                                    <p className="text-[10px] font-bold text-primary-600 uppercase tracking-widest leading-tight">{v.type}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Travel Tips */}
            <section className="section-padding bg-surface-50 border-b border-surface-200">
                <div className="container-custom mx-auto max-w-4xl">
                    <div className="bg-primary-900 rounded-[32px] p-8 md:p-12 text-white shadow-xl">
                        <div className="flex items-center gap-3 mb-8">
                            <ShieldCheck className="w-8 h-8 text-primary-300" />
                            <h2 className="font-display text-3xl">Travel Tips</h2>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {["Book your long-distance transfer well in advance.","Confirm the exact drop-off point with your driver, as vehicles cannot enter pedestrian zones.","Schedule travel outside of major prayer times to avoid severe traffic."].map((tip, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-primary-400 shrink-0 mt-0.5" />
                                    <p className="text-primary-50 font-medium leading-relaxed">{tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto max-w-3xl">
                    <FAQ items={[{"question":"Do you provide short taxi rides within Makkah?","answer":"No, we specialize in longer pre-booked journeys such as airport transfers and intercity travel."},{"question":"Can I travel directly from Jeddah Airport?","answer":"Yes, pre-booked airport transfers to Makkah are our primary service."},{"question":"Are large vehicles available for groups?","answer":"Yes, we provide vans and coaches for group transportation."}]} title="Frequently Asked Questions" />
                </div>
            </section>

            {/* Search Route */}
            <section className="section-padding bg-surface-50 border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <RouteFinder />
                </div>
            </section>
        </div>
    );
}
