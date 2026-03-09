import { Metadata } from 'next';
import Link from 'next/link';
import BookingWidget from '@/components/BookingWidget';
import FAQ from '@/components/FAQ';
import RouteFinder from '@/components/RouteFinder';
import { ChevronRight, MapPin, Clock, Info, ShieldCheck, Car, CheckCircle2, Navigation } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Taxi to Muzdalifah | Professional Pre-Booked Service',
    description: 'Book a professional taxi to Muzdalifah. We provide safe, pre-booked 24/7 transportation with professional chauffeurs across Saudi Arabia and the GCC.',
    openGraph: {
        title: 'Taxi to Muzdalifah | Professional Pre-Booked Service',
        description: 'Book a professional taxi to Muzdalifah. We provide safe, pre-booked 24/7 transportation with professional chauffeurs across Saudi Arabia and the GCC.',
        url: 'https://airporttraveltaxis.com/taxi-to-muzdalifah',
    },
    alternates: {
        canonical: 'https://airporttraveltaxis.com/taxi-to-muzdalifah',
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
                        <span className="text-surface-900 truncate">Taxi to Muzdalifah</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <MapPin className="w-4 h-4 text-primary-600" />
                                <span className="text-sm text-primary-700 font-medium tracking-tight">Pilgrimage Transportation</span>
                            </div>
                            <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-6 leading-tight">
                                Taxi to <span className="text-primary-600">Muzdalifah</span>
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
                                Arrive at Muzdalifah with professional, reliable transport. Focus on your spiritual journey while we handle the logistics of your pre-booked travel.
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
                                Muzdalifah is an open area where pilgrims arrive after sunset from Arafat. The simultaneous movement of millions of pilgrims makes this a heavily managed transit route.
                            </p>
                            
                            <h3 className="font-bold text-xl text-surface-900 mb-3">Transportation for Pilgrims</h3>
                            <p className="text-surface-600 leading-relaxed">
                                Transportation is managed through pre-planned, authorized vehicle groups. Airport Travel Taxis focuses on pre-booked pilgrim transportation; ad-hoc street hailing is not supported.
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
                                    <p className="text-surface-600 leading-relaxed">Airport transfers are provided prior to the Hajj rituals starting; direct routes to Muzdalifah are restricted.</p>
                                </div>
                                <hr className="border-surface-200" />
                                <div>
                                    <h4 className="font-bold text-surface-900 mb-2">Travel from Makkah Hotels</h4>
                                    <p className="text-surface-600 leading-relaxed">Usually, pilgrims travel from Arafat to Muzdalifah, not directly from Makkah hotels.</p>
                                </div>
                                <hr className="border-surface-200" />
                                <div>
                                    <h4 className="font-bold text-surface-900 mb-2">Travel from Madinah Airport</h4>
                                    <p className="text-surface-600 leading-relaxed">Pilgrims arrive in Makkah via intercity transfers before commencing this journey.</p>
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
                                The physical distance from Arafat is approximately 9 kilometers, but the travel time is often extended to several hours due to congestion.
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
                            {["Stay close to your assigned vehicle and group at Arafat.","Do not attempt to find local street taxis, as they are not available for this route.","Remain patient during the slow transit process."].map((tip, i) => (
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
                    <FAQ items={[{"question":"Can we book a ride on the spot?","answer":"No, all transportation for Muzdalifah is organized and pre-booked."},{"question":"Do you offer Uber-style services?","answer":"No, we do not provide ride-hailing services similar to Uber or Careem."},{"question":"How do groups travel?","answer":"Groups travel together in pre-booked, high-capacity vehicles."}]} title="Frequently Asked Questions" />
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
