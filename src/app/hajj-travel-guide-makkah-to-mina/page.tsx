import { Metadata } from 'next';
import Link from 'next/link';
import BookingWidget from '@/components/BookingWidget';
import FAQ from '@/components/FAQ';
import RouteFinder from '@/components/RouteFinder';
import { ChevronRight, MapPin, Clock, Info, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Hajj Travel Guide: Makkah To Mina | Airport Travel Taxis',
    description: 'Essential Hajj travel guide for Makkah To Mina. Discover reliable pre-booked transportation options and logistics for your pilgrimage to the holy cities.',
    openGraph: {
        title: 'Hajj Travel Guide: Makkah To Mina | Airport Travel Taxis',
        description: 'Essential Hajj travel guide for Makkah To Mina. Discover reliable pre-booked transportation options and logistics for your pilgrimage to the holy cities.',
        url: 'https://airporttraveltaxis.com/hajj-travel-guide-makkah-to-mina',
    },
    alternates: {
        canonical: 'https://airporttraveltaxis.com/hajj-travel-guide-makkah-to-mina',
    },
};

export default function GuidePage() {
    return (
        <div className="pt-20">
            {/* Guide Header */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6 font-medium">
                        <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-surface-900 truncate">Hajj Travel Guide: How pilgrims travel from Makkah to Mina</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <FileText className="w-4 h-4 text-primary-600" />
                                <span className="text-sm text-primary-700 font-medium tracking-tight">Travel Guide</span>
                            </div>
                            <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-6 leading-tight">
                                How pilgrims travel from Makkah to Mina
                            </h1>
                            
                            <div className="mb-6 p-4 bg-white/60 backdrop-blur-md rounded-xl border border-primary-200/50 flex gap-3 text-left max-w-xl">
                                <div className="text-primary-600 shrink-0 mt-0.5">
                                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center font-bold text-sm shadow-sm">i</div>
                                </div>
                                <p className="text-sm text-surface-800 leading-relaxed">
                                    <strong>Important Note:</strong> Airport Travel Taxis provides <strong>pre-booked transportation services</strong> for pilgrims. Local street taxi rides are not part of our service.
                                </p>
                            </div>

                            <p className="text-surface-600 text-lg leading-relaxed mb-8">
                                Use this guide to understand the details, planning advice, and logistics for your journey. Check our pre-booking recommendations to ensure a factual, organized, and reliable transition.
                            </p>
                        </div>

                        <div className="lg:sticky lg:top-24">
                            <BookingWidget />
                        </div>
                    </div>
                </div>
            </section>

            {/* Guide Content Blocks */}
            <section className="section-padding bg-white border-y border-surface-200">
                <div className="container-custom mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Journey Overview Elements */}
                        <div className="space-y-10">
                            <div>
                                <h2 className="font-display text-3xl text-surface-900 mb-4">Overview of the Journey</h2>
                                <p className="text-surface-600 text-lg leading-relaxed">
                                    The movement from Makkah to Mina is a critical early step in the Hajj pilgrimage. Travel is highly regulated due to the volume of traveling pilgrims.
                                </p>
                            </div>
                            
                            <div>
                                <h2 className="font-display text-3xl text-surface-900 mb-4 flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary-600" /> Transportation Options
                                </h2>
                                <p className="text-surface-600 text-lg leading-relaxed">
                                    We offer structured, pre-booked transportation. Pilgrims must reserve vehicles in advance. We do not provide local street taxi services.
                                </p>
                            </div>

                            <div className="bg-surface-50 border border-surface-200 rounded-2xl p-6">
                                <h2 className="font-display text-2xl text-surface-900 mb-4 flex items-center gap-3">
                                    <Clock className="w-6 h-6 text-primary-600" /> Travel Distance & Time
                                </h2>
                                <p className="text-surface-700 font-medium leading-relaxed">
                                    The distance is roughly 8 kilometers. Travel time can range from 30 to 90 minutes depending heavily on road closures and traffic.
                                </p>
                            </div>
                        </div>

                        {/* Tips & Routes */}
                        <div className="space-y-10">
                            <div className="bg-primary-900 text-white rounded-[32px] overflow-hidden shadow-sm">
                                <div className="p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Info className="w-6 h-6 text-primary-300" />
                                        <h2 className="font-display text-2xl">Travel Preparation Tips</h2>
                                    </div>
                                    <div className="space-y-4">
                                        {["Be aware of specific road restrictions.","Travel early to avoid peak congestion.","Stay in communication with your group leader.","Ensure your vehicle is pre-booked well before the date."].map((tip, i) => (
                                            <div key={i} className="flex items-start gap-4">
                                                <ShieldCheck className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                                                <p className="text-primary-50 font-medium">{tip}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <h2 className="font-display text-2xl text-surface-900 mb-4">Common Routes Used</h2>
                                <ul className="space-y-3">
                                    {["Mina to Arafat","Jeddah Airport to Makkah","Arafat to Muzdalifah"].map((route, i) => (
                                        <li key={i} className="flex items-center gap-3 text-surface-600 font-medium">
                                            <MapPin className="w-5 h-5 text-surface-400" />
                                            {route}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto max-w-3xl">
                    <FAQ items={[{"question":"Can I find a street taxi for this route?","answer":"No, Airport Travel Taxis operates strictly via advance booked services."},{"question":"Why does a short distance take so long?","answer":"Hajj logistics involve severe traffic and road closures that extend travel times."},{"question":"Can large groups travel together?","answer":"Yes, by pre-booking large vans or buses."}]} title="Frequently Asked Questions" />
                </div>
            </section>

            {/* Global Route Finder */}
            <section className="section-padding bg-white border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <RouteFinder />
                </div>
            </section>
        </div>
    );
}
