import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Drive With Us | Join Our Professional Chauffeur Team',
    description: 'Join Airport Travel Taxis as a professional driver. We offer opportunities for experienced chauffeurs to provide high-standard transportation across the GCC.',
    openGraph: {
        title: 'Drive With Us | Join Our Professional Chauffeur Team',
        description: 'Join Airport Travel Taxis as a professional driver. We offer opportunities for experienced chauffeurs to provide high-standard transportation across the GCC.',
        url: 'https://airporttraveltaxis.com/drive-with-us',
    },
    alternates: {
        canonical: 'https://airporttraveltaxis.com/drive-with-us',
    },
};

export default function DriveWithUsPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="section-padding bg-surface-100 pb-16">
                <div className="container-custom mx-auto max-w-4xl text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
                        Partner With Us
                    </span>
                    <h1 className="font-display text-4xl lg:text-5xl lg:leading-tight text-surface-900 mb-6">
                        Drive With The Gulf&apos;s Premium <span className="text-primary-600">Executive Network</span>
                    </h1>
                    <p className="text-xl text-surface-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Turn your premium vehicle into a highly profitable asset. We partner with professional drivers and fleet owners across Saudi Arabia, UAE, Qatar, Bahrain, Kuwait to serve VIP clientele.
                    </p>
                    <a href="#registration-form" className="btn-primary py-3 px-8 text-lg inline-flex items-center gap-2">
                        Register Your Vehicle
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </a>
                </div>
            </section>

            {/* Partner Benefits Overview Block */}
            <section className="py-8 bg-white border-y border-surface-200">
                <div className="container-custom mx-auto max-w-4xl">
                    <div className="bg-primary-50 rounded-2xl p-6 lg:p-8 flex items-start gap-4">
                        <div className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-surface-900 mb-2">Partner Benefits Overview</h2>
                            <p className="text-surface-700 leading-relaxed">
                                We specialize in high-ticket transfers including cross-border trips, airport meet & greets, and VIP hourly rentals. Unlike standard ride-hailing apps, our partners benefit from scheduled rides, premium booking fees, corporate clients, no surge-chasing, and dedicated support. Ideal for owners of Sedans, SUVs, and Luxury Vans.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-surface-200">
                            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-2xl mb-6">💰</div>
                            <h3 className="text-xl font-bold text-surface-900 mb-3">Higher Earnings</h3>
                            <p className="text-surface-600 leading-relaxed">
                                Keep more of what you earn with our transparent commission structure. Pre-booked, long-distance trips (like Dubai to Riyadh) ensure maximum profitability per trip.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-surface-200">
                            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-2xl mb-6">📅</div>
                            <h3 className="text-xl font-bold text-surface-900 mb-3">Scheduled Rides</h3>
                            <p className="text-surface-600 leading-relaxed">
                                Say goodbye to driving around aimlessly waiting for pings. 90% of our bookings are scheduled in advance, allowing you to plan your week efficiently.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-surface-200">
                            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-2xl mb-6">👔</div>
                            <h3 className="text-xl font-bold text-surface-900 mb-3">Premium Clientele</h3>
                            <p className="text-surface-600 leading-relaxed">
                                Serve corporate executives, diplomats, and VIP tourists who respect your service and vehicle. We strictly vet our clients to ensure a professional environment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Requirements & Form */}
            <section id="registration-form" className="section-padding bg-white">
                <div className="container-custom mx-auto">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                        {/* Requirements */}
                        <div className="lg:col-span-5">
                            <h2 className="font-display text-3xl font-bold text-surface-900 mb-6">Vehicle Requirements</h2>
                            <p className="text-surface-600 mb-8">We maintain a high standard for our fleet. To join our network, your vehicle must meet the following criteria:</p>
                            
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-surface-700">Model year 2020 or newer.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-surface-700">Excellent exterior and interior condition (no dents, scratches, or odors).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-surface-700">Comprehensive commercial or private insurance valid in the Gulf.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-surface-700">Valid vehicle registration and driver&apos;s license for your operating country.</span>
                                </li>
                            </ul>

                            <h3 className="text-xl font-bold text-surface-900 mb-4">Accepted Categories</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-surface-100 border border-surface-200 rounded-lg text-sm font-medium text-surface-700">Business Sedans</span>
                                <span className="px-3 py-1 bg-surface-100 border border-surface-200 rounded-lg text-sm font-medium text-surface-700">Premium SUVs</span>
                                <span className="px-3 py-1 bg-surface-100 border border-surface-200 rounded-lg text-sm font-medium text-surface-700">Luxury Vehicles</span>
                                <span className="px-3 py-1 bg-surface-100 border border-surface-200 rounded-lg text-sm font-medium text-surface-700">Executive Vans</span>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-7">
                            <div className="bg-surface-50 p-8 rounded-2xl border border-surface-200 shadow-sm">
                                <h3 className="font-display text-2xl font-bold text-surface-900 mb-6">Driver & Vehicle Registration</h3>
                                <form className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium text-surface-700 mb-1">Full Name</label>
                                            <input type="text" className="w-full px-4 py-2 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-surface-700 mb-1">Phone Number</label>
                                            <input type="tel" className="w-full px-4 py-2 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none" placeholder="+971 50 123 4567" />
                                        </div>
                                    </div>
                                    
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium text-surface-700 mb-1">Email Address</label>
                                            <input type="email" className="w-full px-4 py-2 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none" placeholder="john@example.com" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-surface-700 mb-1">Country of Operation</label>
                                            <select className="w-full px-4 py-2 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none">
                                                <option>Saudi Arabia</option>
                                                <option>United Arab Emirates</option>
                                                <option>Qatar</option>
                                                <option>Kuwait</option>
                                                <option>Bahrain</option>
                                                <option>Oman</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="border-t border-surface-200 pt-5 mt-5">
                                        <h4 className="font-semibold text-surface-900 mb-4">Vehicle Details</h4>
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-surface-700 mb-1">Make & Model</label>
                                                <input type="text" className="w-full px-4 py-2 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none" placeholder="e.g. Lexus ES 350" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-surface-700 mb-1">Year</label>
                                                <input type="number" className="w-full px-4 py-2 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none" placeholder="2023" />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-surface-700 mb-1">Are you willing to do Cross-Border trips?</label>
                                        <div className="flex items-center gap-4 mt-2">
                                            <label className="flex items-center gap-2">
                                                <input type="radio" name="cross_border" className="text-primary-600 focus:ring-primary-500" value="yes" />
                                                <span className="text-surface-700">Yes</span>
                                            </label>
                                            <label className="flex items-center gap-2">
                                                <input type="radio" name="cross_border" className="text-primary-600 focus:ring-primary-500" value="no" />
                                                <span className="text-surface-700">No (City only)</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <button type="button" className="btn-primary w-full py-3 text-lg">
                                            Submit Registration
                                        </button>
                                        <p className="text-xs text-center text-surface-500 mt-3">Our fleet management team will contact you within 24 hours.</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
