import { Metadata } from 'next';
import Link from 'next/link';
import BookingWidget from '@/components/BookingWidget';
import FAQ from '@/components/FAQ';
import RouteFinder from '@/components/RouteFinder';
import { ChevronRight, MapPin, Clock, Info, ShieldCheck, Car, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Taxi to Jamarat Bridge | Professional Pre-Booked Service',
    description: 'Book a professional taxi to Jamarat Bridge. We provide safe, pre-booked 24/7 transportation with professional chauffeurs across Saudi Arabia and the GCC.',
    openGraph: {
        title: 'Taxi to Jamarat Bridge | Professional Pre-Booked Service',
        description: 'Book a professional taxi to Jamarat Bridge. We provide safe, pre-booked 24/7 transportation with professional chauffeurs across Saudi Arabia and the GCC.',
        url: 'https://airporttraveltaxis.com/taxi-to-jamarat-bridge',
    },
    alternates: {
        canonical: 'https://airporttraveltaxis.com/taxi-to-jamarat-bridge',
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
                        <span className="text-surface-900 truncate">Taxi to Jamarat Bridge</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <MapPin className="w-4 h-4 text-primary-600" />
                                <span className="text-sm text-primary-700 font-medium tracking-tight">Pilgrimage Destination</span>
                            </div>
                            <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-6 leading-tight">
                                Taxi to <span className="text-primary-600">Jamarat Bridge</span>
                            </h1>
                            
                            <div className="mb-6 p-4 bg-white/60 backdrop-blur-md rounded-xl border border-primary-200/50 flex gap-3 text-left max-w-xl">
                                <div className="text-primary-600 shrink-0 mt-0.5">
                                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center font-bold text-sm shadow-sm">i</div>
                                </div>
                                <p className="text-sm text-surface-800 leading-relaxed">
                                    <strong>Service Notice:</strong> Transportation is provided through <strong>pre-booked trips only</strong>. Street taxi services and on-demand local rides are NOT offered.
                                </p>
                            </div>

                            <p className="text-surface-600 text-lg leading-relaxed mb-8">
                                Arrive at Jamarat Bridge with professional, reliable transport. Our factual, organized approach ensures you reach your destination smoothly.
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
                            <h2 className="font-display text-3xl text-surface-900 mb-4 flex items-center gap-3">
                                <Info className="w-7 h-7 text-primary-600" />
                                Location Overview
                            </h2>
                            <p className="text-surface-700 text-lg leading-relaxed">
                                The Jamarat Bridge is a pedestrian bridge in Mina used by pilgrims during the Stoning of the Devil ritual. Reaching the access points requires organized transport, as the immediate area is strictly for pedestrians.
                            </p>
                        </div>

                        {/* Pickup & Time */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="border border-surface-200 rounded-2xl p-8">
                                <h3 className="font-display text-2xl text-surface-900 mb-4 flex items-center gap-2">
                                    <MapPin className="w-6 h-6 text-primary-600" />
                                    Pickup Locations
                                </h3>
                                <p className="text-surface-600 leading-relaxed">
                                    Pre-booked pickups originate from various Makkah districts or designated Hajj zones. Street taxi services are not provided near these restricted routes.
                                </p>
                            </div>
                            <div className="border border-surface-200 rounded-2xl p-8">
                                <h3 className="font-display text-2xl text-surface-900 mb-4 flex items-center gap-2">
                                    <Clock className="w-6 h-6 text-primary-600" />
                                    Approximate Travel Time
                                </h3>
                                <p className="text-surface-600 leading-relaxed">
                                    Depending on your starting point in Makkah, travel to the nearest authorized drop-off zone can take 45 to 90 minutes during the pilgrimage days.
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
                        <p className="text-surface-500">Professional fleet options for your pre-booked journey.</p>
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
                        <div className="grid sm:grid-cols-2 gap-6">
                            {["Vehicles will drop you at designated pedestrian transition zones.","Confirm hotel pickup points before departing.","Listen to the driver’s guidance regarding the closest permitted drop-off.","Prepare for significant walking after the vehicle drops you off."].map((tip, i) => (
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
                    <FAQ items={[{"question":"How far is this location from Makkah hotels?","answer":"It is close to Mina, typically a short distance but a long drive during peak ritual days."},{"question":"Can groups travel together?","answer":"Yes, vans and coaches are the primary way groups access the area."},{"question":"Are airport pickups available?","answer":"Pilgrims typically travel from their accommodation rather than the airport for this ritual."}]} title="Frequently Asked Questions" />
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
