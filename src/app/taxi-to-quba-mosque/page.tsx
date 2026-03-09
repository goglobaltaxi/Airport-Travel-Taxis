import { Metadata } from 'next';
import Link from 'next/link';
import BookingWidget from '@/components/BookingWidget';
import FAQ from '@/components/FAQ';
import RouteFinder from '@/components/RouteFinder';
import { ChevronRight, MapPin, Clock, Info, ShieldCheck, Car, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Taxi to Quba Mosque | Professional Pre-Booked Service',
    description: 'Book a professional taxi to Quba Mosque. We provide safe, pre-booked 24/7 transportation with professional chauffeurs across Saudi Arabia and the GCC.',
    openGraph: {
        title: 'Taxi to Quba Mosque | Professional Pre-Booked Service',
        description: 'Book a professional taxi to Quba Mosque. We provide safe, pre-booked 24/7 transportation with professional chauffeurs across Saudi Arabia and the GCC.',
        url: 'https://airporttraveltaxis.com/taxi-to-quba-mosque',
    },
    alternates: {
        canonical: 'https://airporttraveltaxis.com/taxi-to-quba-mosque',
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
                        <span className="text-surface-900 truncate">Taxi to Quba Mosque</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <MapPin className="w-4 h-4 text-primary-600" />
                                <span className="text-sm text-primary-700 font-medium tracking-tight">Pilgrimage Destination</span>
                            </div>
                            <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-6 leading-tight">
                                Taxi to <span className="text-primary-600">Quba Mosque</span>
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
                                Arrive at Quba Mosque with professional, reliable transport. Our factual, organized approach ensures you reach your destination smoothly.
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
                                Quba Mosque in Madinah holds immense historical and spiritual significance as the first mosque built in Islamic history. Many pilgrims make a point to visit it during their stay in Madinah.
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
                                    Pre-scheduled pickups are arranged from Madinah hotels, the airport, or the train station. We do not provide on-demand street hailing.
                                </p>
                            </div>
                            <div className="border border-surface-200 rounded-2xl p-8">
                                <h3 className="font-display text-2xl text-surface-900 mb-4 flex items-center gap-2">
                                    <Clock className="w-6 h-6 text-primary-600" />
                                    Approximate Travel Time
                                </h3>
                                <p className="text-surface-600 leading-relaxed">
                                    From central Madinah hotels near Masjid an Nabawi, the drive to Quba Mosque is approximately 10 to 15 minutes, covering about 5 kilometers.
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
                            {["Plan travel during non-peak hours, such as early morning.","Pre-book a return trip to your hotel.","Share group size details to secure the correct vehicle.","Confirm the exact pickup time."].map((tip, i) => (
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
                    <FAQ items={[{"question":"How far is this location from Madinah hotels?","answer":"It is very close to the center, usually under a 15-minute drive."},{"question":"Can groups travel together?","answer":"Yes, vans and minibuses are available for group trips to the mosque."},{"question":"Are airport pickups available?","answer":"Yes, we can arrange a direct trip from Madinah Airport to the mosque."}]} title="Frequently Asked Questions" />
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
