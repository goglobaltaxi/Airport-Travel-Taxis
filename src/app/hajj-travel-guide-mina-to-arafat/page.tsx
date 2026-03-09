import { Metadata } from 'next';
import Link from 'next/link';
import BookingWidget from '@/components/BookingWidget';
import FAQ from '@/components/FAQ';
import RouteFinder from '@/components/RouteFinder';
import { ChevronRight, MapPin, Clock, Info, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Hajj Travel Guide: Mina To Arafat | Airport Travel Taxis',
    description: 'Essential Hajj travel guide for Mina To Arafat. Discover reliable pre-booked transportation options and logistics for your pilgrimage to the holy cities.',
    openGraph: {
        title: 'Hajj Travel Guide: Mina To Arafat | Airport Travel Taxis',
        description: 'Essential Hajj travel guide for Mina To Arafat. Discover reliable pre-booked transportation options and logistics for your pilgrimage to the holy cities.',
        url: 'https://airporttraveltaxis.com/hajj-travel-guide-mina-to-arafat',
    },
    alternates: {
        canonical: 'https://airporttraveltaxis.com/hajj-travel-guide-mina-to-arafat',
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
                        <span className="text-surface-900 truncate">Hajj Travel Guide: How pilgrims travel from Mina to Arafat</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <FileText className="w-4 h-4 text-primary-600" />
                                <span className="text-sm text-primary-700 font-medium tracking-tight">Travel Guide</span>
                            </div>
                            <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-6 leading-tight">
                                How pilgrims travel from Mina to Arafat
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
                                    The transit to Arafat from Mina is a major logistical undertaking. Pilgrims move en masse, requiring patience and organized transportation.
                                </p>
                            </div>
                            
                            <div>
                                <h2 className="font-display text-3xl text-surface-900 mb-4 flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary-600" /> Transportation Options
                                </h2>
                                <p className="text-surface-600 text-lg leading-relaxed">
                                    Group transportation via pre-booked vans or buses ensures your group stays together. Our services are advance booking only; no street taxis are offered.
                                </p>
                            </div>

                            <div className="bg-surface-50 border border-surface-200 rounded-2xl p-6">
                                <h2 className="font-display text-2xl text-surface-900 mb-4 flex items-center gap-3">
                                    <Clock className="w-6 h-6 text-primary-600" /> Travel Distance & Time
                                </h2>
                                <p className="text-surface-700 font-medium leading-relaxed">
                                    The route is approximately 14 kilometers, taking 45 to 120 minutes during peak hours.
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
                                        {["Follow official guidance carefully.","Board vehicles systematically to save time.","Expect heavy traffic and remain patient.","Keep your identification readily accessible."].map((tip, i) => (
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
                                    {["Makkah to Mina","Arafat to Muzdalifah","Makkah to Madinah"].map((route, i) => (
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
                    <FAQ items={[{"question":"Are pre-booked services necessary?","answer":"Yes, finding transport without an advance booking is extremely difficult and not part of our service."},{"question":"Do you offer group transportation?","answer":"Yes, our fleet includes high-capacity vans and coaches."},{"question":"Are the travel times exact?","answer":"No, travel times vary greatly due to millions of pilgrims moving simultaneously."}]} title="Frequently Asked Questions" />
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
