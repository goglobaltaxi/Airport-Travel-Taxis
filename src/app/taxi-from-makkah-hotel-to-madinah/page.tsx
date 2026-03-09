import { Metadata } from 'next';
import Link from 'next/link';
import BookingWidget from '@/components/BookingWidget';
import FAQ from '@/components/FAQ';
import RouteFinder from '@/components/RouteFinder';
import { ChevronRight, MapPin, Clock, Info, ShieldCheck, Car, CheckCircle2, Navigation } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Taxi from Makkah Hotel to Madinah | Book Online',
    description: 'Book a professional taxi from Makkah Hotel to Madinah. We provide safe, pre-booked 24/7 transportation with professional chauffeurs across the GCC countries.',
    openGraph: {
        title: 'Taxi from Makkah Hotel to Madinah | Book Online',
        description: 'Book a professional taxi from Makkah Hotel to Madinah. We provide safe, pre-booked 24/7 transportation with professional chauffeurs across the GCC countries.',
        url: 'https://airporttraveltaxis.com/taxi-from-makkah-hotel-to-madinah',
    },
    alternates: {
        canonical: 'https://airporttraveltaxis.com/taxi-from-makkah-hotel-to-madinah',
    },
};

export default function HotelIntercityTransferPage() {
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
                        <span className="text-surface-900 truncate">Taxi from Makkah Hotel to Madinah</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <Navigation className="w-4 h-4 text-primary-600" />
                                <span className="text-sm text-primary-700 font-medium tracking-tight">Intercity Pilgrim Transfer</span>
                            </div>
                            <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-6 leading-tight">
                                Taxi from Makkah Hotel to Madinah
                            </h1>

                            <div className="mb-6 p-5 bg-white border border-primary-200 rounded-2xl shadow-sm">
                                <h3 className="font-bold text-surface-900 flex items-center gap-2 mb-2">
                                    <Info className="w-5 h-5 text-primary-600" />
                                    Important Service Notice
                                </h3>
                                <p className="text-surface-700 text-sm leading-relaxed mb-3">
                                    Airport Travel Taxis provides <strong>pre-booked long-distance transportation</strong> for pilgrims.
                                </p>
                                <p className="text-surface-600 text-sm leading-relaxed">
                                    <strong>We do NOT provide:</strong> Short-distance hotel rides, local city taxis, or ride-hailing services. All journeys must be scheduled in advance.
                                </p>
                            </div>

                            <p className="text-surface-600 text-lg leading-relaxed mb-8">
                                Travel directly between Makkah and Madinah with a professional, pre-booked driver. This intercity route is designed for pilgrims requiring reliable long-distance transportation.
                            </p>
                        </div>

                        <div className="lg:sticky lg:top-24">
                            <BookingWidget />
                        </div>
                    </div>
                </div>
            </section>

            {/* Travel Details */}
            <section className="section-padding bg-white border-y border-surface-200">
                <div className="container-custom mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Route Overview */}
                        <div className="bg-surface-50 border border-surface-200 rounded-2xl p-8 h-full">
                            <h2 className="font-display text-2xl text-surface-900 mb-4 flex items-center gap-2">
                                <MapPin className="w-6 h-6 text-primary-600" />
                                Route Overview
                            </h2>
                            <p className="text-surface-700 leading-relaxed">
                                Many pilgrims travel from their hotel in Makkah directly to Madinah after completing their Umrah or Hajj rituals. This is a long-distance intercity transfer requiring a pre-booked vehicle. We do not offer short-distance local hotel rides or ride-hailing services.
                            </p>
                        </div>

                        {/* Hotel Pickup Process */}
                        <div className="bg-surface-50 border border-surface-200 rounded-2xl p-8 h-full">
                            <h2 className="font-display text-2xl text-surface-900 mb-4 flex items-center gap-2">
                                <Navigation className="w-6 h-6 text-primary-600" />
                                Hotel Pickup Process
                            </h2>
                            <p className="text-surface-700 leading-relaxed">
                                Your driver will arrive at your Makkah hotel at the pre-arranged time. They will assist with luggage and begin the direct highway journey to Madinah. All bookings must be confirmed in advance — no on-demand service is available.
                            </p>
                        </div>
                    </div>

                    {/* Distance & Time */}
                    <div className="border border-surface-200 rounded-2xl p-8">
                        <h3 className="font-display text-2xl text-surface-900 mb-4 flex items-center gap-2">
                            <Clock className="w-6 h-6 text-primary-600" />
                            Travel Distance and Estimated Time
                        </h3>
                        <p className="text-surface-600 leading-relaxed md:text-lg">
                            The distance from central Makkah to the Madinah hotel district is approximately 450 kilometers. The journey takes 4.5 to 5.5 hours via the Al Hijrah highway, depending on traffic and road conditions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vehicle Options */}
            <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto">
                    <div className="max-w-xl mb-12">
                        <h2 className="font-display text-3xl text-surface-900 mb-4">Vehicle Options</h2>
                        <p className="text-surface-500">Professional fleet for your pre-booked long-distance journey.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {vehicles.map((v) => (
                            <div key={v.name} className="bg-white border border-surface-200 rounded-xl p-4 flex items-center gap-3 shadow-sm">
                                <div className="p-2 bg-surface-100 rounded-lg shrink-0">
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
            <section className="section-padding bg-white border-y border-surface-200">
                <div className="container-custom mx-auto max-w-4xl">
                    <div className="bg-primary-900 rounded-[32px] p-8 md:p-12 text-white shadow-xl">
                        <div className="flex items-center gap-3 mb-8">
                            <ShieldCheck className="w-8 h-8 text-primary-300" />
                            <h2 className="font-display text-3xl">Travel Tips for Pilgrims</h2>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
                            {["Provide your precise hotel address in Makkah and your drop-off location in Madinah when booking.","Coordinate the departure time with prayer schedules to minimize road congestion.","Pack essentials such as water and snacks for the long drive."].map((tip, i) => (
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
            <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto max-w-3xl">
                    <FAQ items={[{"question":"Is this a direct non-stop transfer?","answer":"Yes, it is a direct hotel-to-hotel transfer. The driver can accommodate brief rest stops if needed."},{"question":"Can family groups travel in one vehicle?","answer":"Yes, we have spacious passenger vans and buses for family groups."},{"question":"Do you offer short rides within Makkah?","answer":"No, our services focus on long-distance intercity and airport transfers only."}]} title="Frequently Asked Questions" />
                </div>
            </section>

            {/* Route Finder */}
            <section className="section-padding bg-white border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <RouteFinder />
                </div>
            </section>
        </div>
    );
}

