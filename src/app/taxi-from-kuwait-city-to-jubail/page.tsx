import { Metadata } from 'next';
import Link from 'next/link';
import BookingWidget from '@/components/BookingWidget';
import FAQ from '@/components/FAQ';
import RouteFinder from '@/components/RouteFinder';
import { ChevronRight, MapPin, Clock, Info, ShieldCheck, Car, CheckCircle2, Navigation, Map } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Taxi from Kuwait City to Jubail | Book Online',
    description: 'Book a professional taxi from Kuwait City to Jubail. We provide safe, pre-booked 24/7 transportation with professional chauffeurs across the GCC countries.',
    openGraph: {
        title: 'Taxi from Kuwait City to Jubail | Book Online',
        description: 'Book a professional taxi from Kuwait City to Jubail. We provide safe, pre-booked 24/7 transportation with professional chauffeurs across the GCC countries.',
        url: 'https://airporttraveltaxis.com/taxi-from-kuwait-city-to-jubail',
    },
    alternates: {
        canonical: 'https://airporttraveltaxis.com/taxi-from-kuwait-city-to-jubail',
    },
};

export default function KuwaitSaudiRoutePage() {
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
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6 font-medium">
                        <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-surface-900 truncate">Taxi from Kuwait City to Jubail</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <Map className="w-4 h-4 text-primary-600" />
                                <span className="text-sm text-primary-700 font-medium tracking-tight">Cross-Border Transfer</span>
                            </div>
                            <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-6 leading-tight">
                                Taxi from Kuwait City to Jubail
                            </h1>

                            <div className="mb-6 p-5 bg-white border border-primary-200 rounded-2xl shadow-sm">
                                <h3 className="font-bold text-surface-900 flex items-center gap-2 mb-2">
                                    <Info className="w-5 h-5 text-primary-600" />
                                    Important Service Notice
                                </h3>
                                <p className="text-surface-700 text-sm leading-relaxed mb-3">
                                    Airport Travel Taxis provides <strong>pre-booked cross-border transportation</strong> only.
                                </p>
                                <p className="text-surface-600 text-sm leading-relaxed">
                                    <strong>We do NOT provide:</strong> Local short-distance rides, street taxi hailing, or ride-hailing services. All journeys must be scheduled in advance.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-white border border-surface-200 rounded-2xl p-5 shadow-sm">
                                    <MapPin className="w-5 h-5 text-primary-600 mb-3" />
                                    <p className="text-xs text-surface-500 uppercase tracking-widest font-bold mb-1">Approx. Distance</p>
                                    <p className="text-surface-900 font-semibold">470 km</p>
                                </div>
                                <div className="bg-white border border-surface-200 rounded-2xl p-5 shadow-sm">
                                    <Clock className="w-5 h-5 text-primary-600 mb-3" />
                                    <p className="text-xs text-surface-500 uppercase tracking-widest font-bold mb-1">Approx. Time</p>
                                    <p className="text-surface-900 font-semibold">4.5 to 5.5 hours</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-24">
                            <BookingWidget />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white border-y border-surface-200">
                <div className="container-custom mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-surface-50 border border-surface-200 rounded-2xl p-8">
                            <h2 className="font-display text-2xl text-surface-900 mb-4 flex items-center gap-2">
                                <Navigation className="w-6 h-6 text-primary-600" />
                                Route Overview
                            </h2>
                            <p className="text-surface-700 leading-relaxed">Jubail Industrial City in Saudi Arabia is a destination for business travelers coming from Kuwait. This cross-border road route uses the Nuwaiseeb border checkpoint.</p>
                        </div>
                        <div className="bg-surface-50 border border-surface-200 rounded-2xl p-8">
                            <h2 className="font-display text-2xl text-surface-900 mb-4 flex items-center gap-2">
                                <Map className="w-6 h-6 text-primary-600" />
                                Border Crossing Process
                            </h2>
                            <p className="text-surface-700 leading-relaxed">The border at Nuwaiseeb processes exit and entry for both countries. Ensure required Saudi documentation is in order before departure.</p>
                        </div>
                    </div>
                    <div className="border border-surface-200 rounded-2xl p-8">
                        <h3 className="font-display text-2xl text-surface-900 mb-4 flex items-center gap-2">
                            <MapPin className="w-6 h-6 text-primary-600" />
                            Pickup Locations
                        </h3>
                        <p className="text-surface-600 leading-relaxed">Pre-booked pickups are arranged from Kuwait City, the airport, or business district hotels.</p>
                    </div>
                </div>
            </section>

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

            <section className="section-padding bg-white border-y border-surface-200">
                <div className="container-custom mx-auto max-w-4xl">
                    <div className="bg-primary-900 rounded-[32px] p-8 md:p-12 text-white shadow-xl">
                        <div className="flex items-center gap-3 mb-8">
                            <ShieldCheck className="w-8 h-8 text-primary-300" />
                            <h2 className="font-display text-3xl">Travel Tips</h2>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
                            {["Route to Jubail passes through Dammam; confirm specific office or hotel addresses.","Bring all required documents including any business travel permits.","Arrange the pickup time to arrive at the border during less congested hours."].map((tip, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-primary-400 shrink-0 mt-0.5" />
                                    <p className="text-primary-50 font-medium leading-relaxed">{tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto max-w-3xl">
                    <FAQ items={[{"question":"Do you offer local rides in Kuwait?","answer":"No, our service covers only pre-booked long-distance and cross-border journeys."},{"question":"Can the driver assist with heavy industrial luggage?","answer":"Inform us of oversized items when booking so a suitable vehicle is assigned."},{"question":"Is this a round-trip option?","answer":"Yes, return trips from Jubail to Kuwait can also be arranged in advance."}]} title="Frequently Asked Questions" />
                </div>
            </section>

            <section className="section-padding bg-white border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <RouteFinder />
                </div>
            </section>
        </div>
    );
}

