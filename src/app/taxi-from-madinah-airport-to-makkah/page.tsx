import { Metadata } from 'next';
import Link from 'next/link';
import BookingWidget from '@/components/BookingWidget';
import FAQ from '@/components/FAQ';
import RouteFinder from '@/components/RouteFinder';
import { ChevronRight, Plane, MapPin, Clock, Info, ShieldCheck, Car, CheckCircle2, Navigation } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Taxi from Madinah Airport to Makkah | Book Online',
    description: 'Book a professional taxi from Madinah Airport to Makkah. We provide safe, pre-booked 24/7 transportation with professional chauffeurs across the GCC countries.',
    openGraph: {
        title: 'Taxi from Madinah Airport to Makkah | Book Online',
        description: 'Book a professional taxi from Madinah Airport to Makkah. We provide safe, pre-booked 24/7 transportation with professional chauffeurs across the GCC countries.',
        url: 'https://airporttraveltaxis.com/taxi-from-madinah-airport-to-makkah',
    },
    alternates: {
        canonical: 'https://airporttraveltaxis.com/taxi-from-madinah-airport-to-makkah',
    },
};

export default function PilgrimAirportTransferPage() {
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
                        <span className="text-surface-900 truncate">Taxi from Madinah Airport to Makkah</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <Plane className="w-4 h-4 text-primary-600" />
                                <span className="text-sm text-primary-700 font-medium tracking-tight">Pilgrim Airport Transfer</span>
                            </div>
                            <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-6 leading-tight">
                                Taxi from Madinah Airport to Makkah
                            </h1>
                            
                            <div className="mb-6 p-5 bg-white border border-primary-200 rounded-2xl shadow-sm">
                                <h3 className="font-bold text-surface-900 flex items-center gap-2 mb-2">
                                    <Info className="w-5 h-5 text-primary-600" />
                                    Important Service Notice
                                </h3>
                                <p className="text-surface-700 text-sm leading-relaxed mb-3">
                                    Airport Travel Taxis provides <strong>pre-booked airport transfers for pilgrims</strong>.
                                </p>
                                <p className="text-surface-600 text-sm leading-relaxed">
                                    <strong>We do NOT provide:</strong> Local short-distance taxi rides or ride-hailing services. All journeys must be scheduled in advance.
                                </p>
                            </div>

                            <p className="text-surface-600 text-lg leading-relaxed mb-8">
                                Arrive smoothly and travel to Makkah. Our professional transit focus ensures your pre-booked journey from the airport is fully reliable.
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
                <div className="container-custom mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Route Overview */}
                        <div className="bg-surface-50 border border-surface-200 rounded-2xl p-8 h-full">
                            <h2 className="font-display text-2xl text-surface-900 mb-4 flex items-center gap-2">
                                <Navigation className="w-6 h-6 text-primary-600" />
                                Route Overview
                            </h2>
                            <p className="text-surface-700 leading-relaxed">
                                Pilgrims landing in Madinah may wish to proceed directly to Makkah to perform Umrah. This requires an extensive, long-distance intercity transfer immediately following your flight.
                            </p>
                        </div>

                        {/* Airport Pickup Process */}
                        <div className="bg-surface-50 border border-surface-200 rounded-2xl p-8 h-full">
                            <h2 className="font-display text-2xl text-surface-900 mb-4 flex items-center gap-2">
                                <Plane className="w-6 h-6 text-primary-600" />
                                Airport Pickup Process
                            </h2>
                            <p className="text-surface-700 leading-relaxed">
                                You are met inside the Madinah Airport arrivals area. Once ready, the driver navigates directly to the highway heading south to Makkah. Ad-hoc street taxi services are not provided for this extensive route.
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
                            The route from Madinah Airport to Makkah covers roughly 450 kilometers. Expect the travel time to be approximately 4.5 to 5.5 hours, depending on traffic and prayer times.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vehicle Options */}
            <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto">
                    <div className="max-w-xl mb-12">
                        <h2 className="font-display text-3xl text-surface-900 mb-4">Vehicle Options</h2>
                        <p className="text-surface-500">Professional fleet options for your pre-booked long-distance journey.</p>
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
                            {["Ensure you are prepared for a 5-hour drive immediately after landing.","Plan your Ihram appropriately if proceeding directly for Umrah.","Coordinate with the driver regarding brief stops at the required Miqat if needed."].map((tip, i) => (
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
                    <FAQ items={[{"question":"Is stopping at the Miqat permitted?","answer":"Yes, coordinate this requirement during your pre-booking."},{"question":"Is this a private transfer?","answer":"Yes, you book the entire vehicle for your specific party."},{"question":"Do you offer local rides within Madinah?","answer":"No, our services focus entirely on these pre-booked airport and intercity transfers."}]} title="Frequently Asked Questions" />
                </div>
            </section>

            {/* Search Route */}
            <section className="section-padding bg-white border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <RouteFinder />
                </div>
            </section>
        </div>
    );
}

