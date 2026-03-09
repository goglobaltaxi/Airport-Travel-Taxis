import { Metadata } from 'next';
import Link from 'next/link';
import BookingWidget from '@/components/BookingWidget';
import FAQ from '@/components/FAQ';
import RouteFinder from '@/components/RouteFinder';
import { ChevronRight, Plane, Navigation, MapPin, Clock, Info, ShieldCheck, Car, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Taxi from Kuwait Airport to Saudi Border | Book Online',
    description: 'Book a professional taxi from Kuwait Airport to Saudi Border. We provide safe, pre-booked 24/7 transportation with professional chauffeurs across the GCC countries.',
    openGraph: {
        title: 'Taxi from Kuwait Airport to Saudi Border | Book Online',
        description: 'Book a professional taxi from Kuwait Airport to Saudi Border. We provide safe, pre-booked 24/7 transportation with professional chauffeurs across the GCC countries.',
        url: 'https://airporttraveltaxis.com/taxi-from-kuwait-airport-to-saudi-border',
    },
    alternates: {
        canonical: 'https://airporttraveltaxis.com/taxi-from-kuwait-airport-to-saudi-border',
    },
};

export default function AirportToBorderRoutePage() {
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
                        <span className="text-surface-900 truncate">Taxi from Kuwait Airport to Saudi Border</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <Plane className="w-4 h-4 text-primary-600" />
                                <span className="text-sm text-primary-700 font-medium tracking-tight">Airport to Border Transfer</span>
                            </div>
                            <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-6 leading-tight">
                                Taxi from Kuwait Airport to Saudi Border
                            </h1>
                            
                            <div className="mb-6 p-5 bg-white border border-primary-200 rounded-2xl shadow-sm">
                                <h3 className="font-bold text-surface-900 flex items-center gap-2 mb-2">
                                    <Info className="w-5 h-5 text-primary-600" />
                                    Important Service Notice
                                </h3>
                                <p className="text-surface-700 text-sm leading-relaxed mb-3">
                                    Airport Travel Taxis provides <strong>pre-booked cross-border transfers</strong>.
                                </p>
                                <p className="text-surface-600 text-sm leading-relaxed">
                                    <strong>We do NOT provide:</strong> Short-distance city rides, local street hailing, or ride-hailing services. All journeys must be scheduled in advance.
                                </p>
                            </div>

                            <p className="text-surface-600 text-lg leading-relaxed mb-8">
                                Connect from your flight directly to the international land border. Our professional drivers and maintained vehicles ensure a reliable, structured airport pickup and cross-border transit.
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
                    <div className="grid gap-8">
                        {/* Route Overview & Airport Pickup Process */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-surface-50 border border-surface-200 rounded-2xl p-8">
                                <h2 className="font-display text-2xl text-surface-900 mb-4 flex items-center gap-2">
                                    <MapPin className="w-6 h-6 text-primary-600" />
                                    Route Overview
                                </h2>
                                <p className="text-surface-700 leading-relaxed">
                                    Travelers landing at Kuwait International Airport (KWI) heading south by road to Saudi Arabia utilize the Nuwaiseeb border. Our pre-booked vehicles ensure a direct and factual connection to this crossing.
                                </p>
                            </div>
                            <div className="bg-surface-50 border border-surface-200 rounded-2xl p-8">
                                <h2 className="font-display text-2xl text-surface-900 mb-4 flex items-center gap-2">
                                    <Plane className="w-6 h-6 text-primary-600" />
                                    Airport Pickup Process
                                </h2>
                                <p className="text-surface-700 leading-relaxed">
                                    The driver meets arriving passengers directly inside the terminal. The process removes the need to negotiate with ad-hoc transport outside the airport. This service must be reserved in advance.
                                </p>
                            </div>
                        </div>

                        {/* Border Crossing & Time Info */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="border border-surface-200 rounded-2xl p-8">
                                <h3 className="font-display text-2xl text-surface-900 mb-4 flex items-center gap-2">
                                    <Navigation className="w-6 h-6 text-primary-600" />
                                    Border Crossing Information
                                </h3>
                                <p className="text-surface-600 leading-relaxed">
                                    The Nuwaiseeb border requires stamping out of Kuwait and stamping into Saudi Arabia. Drivers are familiar with the dual-check system and navigate the lanes accordingly.
                                </p>
                            </div>
                            <div className="border border-surface-200 rounded-2xl p-8">
                                <h3 className="font-display text-2xl text-surface-900 mb-4 flex items-center gap-2">
                                    <Clock className="w-6 h-6 text-primary-600" />
                                    Travel Distance and Time
                                </h3>
                                <p className="text-surface-600 leading-relaxed">
                                    From Kuwait Airport to the Nuwaiseeb crossing is about 110 kilometers. The travel time is approximately 1 to 1.5 hours on the main southbound highway.
                                </p>
                            </div>
                        </div>
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
                            <h2 className="font-display text-3xl">Travel Tips</h2>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
                            {["Confirm your specific Saudi destination when organizing the transfer.","Print your visa approvals if required by Saudi border authorities.","Ensure the specified luggage capacity of the chosen vehicle meets your needs."].map((tip, i) => (
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
                    <FAQ items={[{"question":"Do you offer rides to Kuwait City instead?","answer":"We focus on cross-border travel and long intercity journeys, not short city hops."},{"question":"Is the crossing open 24/7?","answer":"The Nuwaiseeb border is generally open 24 hours, accommodating late night flights."},{"question":"Are large buses available?","answer":"Yes, we provide buses and coaches for large group arrivals."}]} title="Frequently Asked Questions" />
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

