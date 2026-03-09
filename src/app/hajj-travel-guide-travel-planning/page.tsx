import { Metadata } from 'next';
import Link from 'next/link';
import BookingWidget from '@/components/BookingWidget';
import FAQ from '@/components/FAQ';
import RouteFinder from '@/components/RouteFinder';
import { ChevronRight, MapPin, Clock, Info, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Hajj Travel Guide: Travel Planning | Airport Travel Taxis',
    description: 'Essential Hajj travel guide for Travel Planning. Discover reliable pre-booked transportation options and logistics for your pilgrimage to the holy cities.',
    openGraph: {
        title: 'Hajj Travel Guide: Travel Planning | Airport Travel Taxis',
        description: 'Essential Hajj travel guide for Travel Planning. Discover reliable pre-booked transportation options and logistics for your pilgrimage to the holy cities.',
        url: 'https://airporttraveltaxis.com/hajj-travel-guide-travel-planning',
    },
    alternates: {
        canonical: 'https://airporttraveltaxis.com/hajj-travel-guide-travel-planning',
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
                        <span className="text-surface-900 truncate">Hajj Travel Guide: Travel planning for Hajj pilgrims</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <FileText className="w-4 h-4 text-primary-600" />
                                <span className="text-sm text-primary-700 font-medium tracking-tight">Travel Guide</span>
                            </div>
                            <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-6 leading-tight">
                                Travel planning for Hajj pilgrims
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
                                    Advance planning for your transportation ensures you meet the strict logistical requirements of the Hajj pilgrimage without unnecessary stress.
                                </p>
                            </div>
                            
                            <div>
                                <h2 className="font-display text-3xl text-surface-900 mb-4 flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary-600" /> Transportation Options
                                </h2>
                                <p className="text-surface-600 text-lg leading-relaxed">
                                    Reserve your vehicles ahead of time. Our service covers pre-booked transfers only. On-demand street taxis are not part of our service offering.
                                </p>
                            </div>

                            <div className="bg-surface-50 border border-surface-200 rounded-2xl p-6">
                                <h2 className="font-display text-2xl text-surface-900 mb-4 flex items-center gap-3">
                                    <Clock className="w-6 h-6 text-primary-600" /> Travel Distance & Time
                                </h2>
                                <p className="text-surface-700 font-medium leading-relaxed">
                                    Route distances vary. Pilgrims should schedule significantly more time than normal for all journeys during the Hajj season.
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
                                        {["Book vehicles according to your total group size.","Secure reservations early before availability is exhausted.","Coordinate arrival and pickup points meticulously.","Document your driver’s assigned details before the transit."].map((tip, i) => (
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
                                    {["Transportation during Hajj","Jeddah Airport to Makkah","Makkah to Madinah"].map((route, i) => (
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
                    <FAQ items={[{"question":"Can I book a vehicle on arrival at the airport?","answer":"No, Airport Travel Taxis provides pre-booked services only."},{"question":"Does planning help with group transit?","answer":"Yes, securing a bus or van in advance keeps large groups together safely."},{"question":"Are prices fixed during planning?","answer":"Reservations finalize your details; our service operates factually and transparently."}]} title="Frequently Asked Questions" />
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
