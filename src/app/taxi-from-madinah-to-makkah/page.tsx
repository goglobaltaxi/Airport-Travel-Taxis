import { Metadata } from 'next';
import Link from 'next/link';
import BookingWidget from '@/components/BookingWidget';
import FAQ from '@/components/FAQ';
import RouteFinder from '@/components/RouteFinder';
import { ChevronRight, Car, MapPin, Clock, Info, ShieldCheck, Plane } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Taxi from Madinah to Makkah | Book Online',
    description: 'Book a professional taxi from Madinah to Makkah. We provide safe, pre-booked 24/7 transportation with professional chauffeurs across the GCC countries.',
    openGraph: {
        title: 'Taxi from Madinah to Makkah | Book Online',
        description: 'Book a professional taxi from Madinah to Makkah. We provide safe, pre-booked 24/7 transportation with professional chauffeurs across the GCC countries.',
        url: 'https://airporttraveltaxis.com/taxi-from-madinah-to-makkah',
    },
    alternates: {
        canonical: 'https://airporttraveltaxis.com/taxi-from-madinah-to-makkah',
    },
};

export default function UmrahRoutePage() {
    const vehicles = [
        { name: 'Mercedes S-Class', type: 'Executive Sedan', desc: 'Comfortable sedan for professional travel.' },
        { name: 'Cadillac Escalade', type: 'Large SUV', desc: 'Spacious option for passengers and luggage.' },
        { name: 'GMC', type: 'Large SUV', desc: 'Reliable transport for families and groups.' },
        { name: 'Ford Taurus', type: 'Standard Sedan', desc: 'Practical sedan for intercity journeys.' },
        { name: 'BMW', type: 'Executive Sedan', desc: 'Professional transport.' },
        { name: 'Genesis', type: 'Executive Sedan', desc: 'Sleek travel option.' },
        { name: 'Mercedes Vito', type: 'Passenger Van', desc: 'Spacious van for group travel.' },
        { name: 'Mercedes Sprinter', type: 'Minibus', desc: 'Minibus suitable for larger groups.' },
        { name: 'Executive Bus', type: 'Coach', desc: 'High-capacity comfortable coach for big groups.' },
        { name: 'Camry', type: 'Standard Sedan', desc: 'Dependable and efficient transit.' },
        { name: 'Staria', type: 'Passenger Van', desc: 'Modern and spacious passenger van.' },
        { name: 'Hiace', type: 'Passenger Van', desc: 'Practical group transport vehicle.' },
        { name: 'Coaster', type: 'Minibus', desc: 'Efficient minibus for group coordination.' }
    ];

    return (
        <div className="pt-20">
            {/* Hero & Route Overview */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6 font-medium">
                        <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-surface-900 truncate">Taxi from Madinah to Makkah</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <Plane className="w-4 h-4 text-primary-600" />
                                <span className="text-sm text-primary-700 font-medium tracking-tight">Umrah Transportation Route</span>
                            </div>
                            <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-6 leading-tight">
                                Taxi from Madinah to <span className="text-primary-600">Makkah</span>
                            </h1>
                            
                            <div className="mb-6 p-4 bg-white/60 backdrop-blur-md rounded-xl border border-primary-200/50 flex gap-3 text-left max-w-xl">
                                <div className="text-primary-600 shrink-0 mt-0.5">
                                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center font-bold text-sm shadow-sm">i</div>
                                </div>
                                <p className="text-sm text-surface-800 leading-relaxed">
                                    <strong>Service Focus:</strong> This service operates strictly as pre-booked transportation. Local street taxi hailing and short-distance city rides are NOT provided.
                                </p>
                            </div>

                            <p className="text-surface-600 text-lg leading-relaxed mb-6">
                                Professional transfer from Madinah to Makkah. Pre-booked transportation for Umrah travel between the holy cities. Our service ensures a safe, direct, and factual transfer without any hidden surprises.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-white border border-surface-200 rounded-2xl p-5 shadow-sm">
                                    <MapPin className="w-5 h-5 text-primary-600 mb-3" />
                                    <p className="text-xs text-surface-500 uppercase tracking-widest font-bold mb-1">Approx. Distance</p>
                                    <p className="text-surface-900 font-semibold">450 km</p>
                                </div>
                                <div className="bg-white border border-surface-200 rounded-2xl p-5 shadow-sm">
                                    <Clock className="w-5 h-5 text-primary-600 mb-3" />
                                    <p className="text-xs text-surface-500 uppercase tracking-widest font-bold mb-1">Approx. Time</p>
                                    <p className="text-surface-900 font-semibold">4.5-5.5 hours</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-24">
                            <BookingWidget />
                        </div>
                    </div>
                </div>
            </section>

            {/* Route Overview Description */}
            <section className="section-padding bg-white border-y border-surface-200">
                <div className="container-custom mx-auto max-w-4xl text-center">
                    <h2 className="font-display text-3xl text-surface-900 mb-4">Route Overview</h2>
                    <p className="text-surface-600 text-lg leading-relaxed">
                        The journey from Madinah to Makkah covers approximately 450 km. 
                        This route is frequently used by arriving and departing pilgrims. Our pre-booked service ensures you have a dedicated vehicle and driver ready for your required travel time.
                    </p>
                </div>
            </section>

            {/* Pickup Process */}
            <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="font-display text-3xl text-surface-900 mb-4">Pickup Process</h2>
                        <p className="text-surface-500">How our transportation process is handled.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {["Driver arrives at your hotel in Madinah at the scheduled time.","Help with loading luggage into the vehicle.","Smooth highway journey to Makkah.","Direct drop-off at your Makkah accommodation."].map((step, i) => (
                            <div key={i} className="bg-white border border-surface-200 rounded-2xl p-6 shadow-sm">
                                <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold mb-4">
                                    0{i + 1}
                                </div>
                                <p className="text-surface-700 font-medium leading-relaxed">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vehicle Options */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto">
                    <div className="max-w-xl mb-12">
                        <h2 className="font-display text-3xl text-surface-900 mb-4">Vehicle Options</h2>
                        <p className="text-surface-500">Available vehicles for your pre-booked journey.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {vehicles.map((v) => (
                            <div key={v.name} className="bg-surface-50 border border-surface-200 rounded-2xl p-5 shadow-sm">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-white rounded-lg border border-surface-200">
                                        <Car className="w-5 h-5 text-primary-600" />
                                    </div>
                                    <p className="font-bold text-surface-900">{v.name}</p>
                                </div>
                                <p className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-2">{v.type}</p>
                                <p className="text-surface-600 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Travel Tips for Pilgrims */}
            <section className="section-padding bg-surface-50 border-y border-surface-200">
                <div className="container-custom mx-auto max-w-4xl">
                    <div className="bg-white border border-surface-200 rounded-[32px] overflow-hidden shadow-sm">
                        <div className="bg-primary-600 p-8 text-white">
                            <div className="flex items-center gap-3 mb-2">
                                <Info className="w-6 h-6" />
                                <h2 className="font-display text-2xl">Travel Tips for Pilgrims</h2>
                            </div>
                            <p className="text-primary-100">Ensure a seamless transfer.</p>
                        </div>
                        <div className="p-8 grid sm:grid-cols-2 gap-6">
                            {["Plan your departure time considering prayer schedules.","Ensure all luggage is accounted for before departure.","Rest comfortably during the extended journey."].map((tip, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <ShieldCheck className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                                    <p className="text-surface-700 font-medium">{tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto max-w-3xl">
                    <FAQ items={[{"question":"How long does the journey take?","answer":"The intercity transfer takes about 4.5 to 5.5 hours."},{"question":"Can pickup be arranged for Umrah travelers?","answer":"Yes, we pick you up directly from your hotel."},{"question":"Can groups travel together?","answer":"Yes, we offer vehicles suitable for any group size."}]} title="Frequently Asked Questions" />
                </div>
            </section>

            {/* Related Routes */}
            <section className="section-padding bg-surface-100 border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-3xl text-surface-900 mb-8 text-center">Related Umrah Routes</h2>
                    <div className="grid sm:grid-cols-3 gap-6">
                        <Link href="/taxi-from-jeddah-airport-to-makkah" className="group bg-white border border-surface-200 hover:border-primary-500 rounded-2xl p-6 transition-all shadow-sm text-center">
                            <span className="text-xs text-primary-600 font-bold mb-2 block uppercase tracking-wider">Airport Transfer</span>
                            <h3 className="font-bold text-surface-900 transition-colors">Jeddah Airport to Makkah</h3>
                        </Link>
                        <Link href="/taxi-from-madinah-to-makkah" className="group bg-white border border-surface-200 hover:border-primary-500 rounded-2xl p-6 transition-all shadow-sm text-center">
                            <span className="text-xs text-primary-600 font-bold mb-2 block uppercase tracking-wider">City Transfer</span>
                            <h3 className="font-bold text-surface-900 transition-colors">Madinah to Makkah</h3>
                        </Link>
                        <Link href="/taxi-from-jeddah-airport-to-madinah" className="group bg-white border border-surface-200 hover:border-primary-500 rounded-2xl p-6 transition-all shadow-sm text-center">
                            <span className="text-xs text-primary-600 font-bold mb-2 block uppercase tracking-wider">Intercity</span>
                            <h3 className="font-bold text-surface-900 transition-colors">Jeddah Airport to Madinah</h3>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

