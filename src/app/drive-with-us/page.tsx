"use client";

import { useState } from 'react';
import Link from 'next/link';

// Metadata cannot be exported from a Client Component in Next.js
// If SEO metadata is needed here, we should wrap the content in a separate layout or meta component, 
// but for simplicity we convert the page to a client component. 
// A better approach in Next 13+ is to keep page.tsx as server and import a <DriverForm /> client component.
// But for a quick fix, we remove the static metadata export.

export default function DriveWithUsPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        country: 'Saudi Arabia',
        vehicle_make: '',
        vehicle_year: '',
        cross_border: 'yes'
    });
    const [status, setStatus] = useState({ submitting: false, success: false, error: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ submitting: true, success: false, error: '' });

        try {
            const res = await fetch('/api/driver', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setStatus({ submitting: false, success: true, error: '' });
                setFormData({
                    name: '', phone: '', email: '', country: 'Saudi Arabia',
                    vehicle_make: '', vehicle_year: '', cross_border: 'yes'
                });
            } else {
                const data = await res.json();
                setStatus({ submitting: false, success: false, error: data.error || 'Failed to submit' });
            }
        } catch (err) {
            setStatus({ submitting: false, success: false, error: 'Network error occurred.' });
        }
    };

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

                        <div className="lg:col-span-7">
                            <div className="bg-surface-50 p-8 rounded-2xl border border-surface-200 shadow-sm">
                                <h3 className="font-display text-2xl font-bold text-surface-900 mb-6">Driver & Vehicle Registration</h3>
                                
                                {status.success ? (
                                    <div className="bg-green-50 text-green-800 p-6 rounded-xl border border-green-200 text-center">
                                        <div className="text-4xl mb-4">✅</div>
                                        <h4 className="text-xl font-bold mb-2">Application Submitted!</h4>
                                        <p>Thank you for registering. Our team will review your application and contact you within 24-48 hours.</p>
                                    </div>
                                ) : (
                                    <form className="space-y-5" onSubmit={handleSubmit}>
                                        {status.error && (
                                            <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm border border-red-200">
                                                {status.error}
                                            </div>
                                        )}
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-surface-700 mb-1">Full Name</label>
                                                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none" placeholder="John Doe" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-surface-700 mb-1">Phone Number</label>
                                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-2 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none" placeholder="+971 50 123 4567" />
                                            </div>
                                        </div>
                                        
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-surface-700 mb-1">Email Address</label>
                                                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none" placeholder="john@example.com" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-surface-700 mb-1">Country of Operation</label>
                                                <select name="country" value={formData.country} onChange={handleChange} className="w-full px-4 py-2 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none">
                                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                                    <option value="Qatar">Qatar</option>
                                                    <option value="Kuwait">Kuwait</option>
                                                    <option value="Bahrain">Bahrain</option>
                                                    <option value="Oman">Oman</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="border-t border-surface-200 pt-5 mt-5">
                                            <h4 className="font-semibold text-surface-900 mb-4">Vehicle Details</h4>
                                            <div className="grid sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-sm font-medium text-surface-700 mb-1">Make & Model</label>
                                                    <input type="text" name="vehicle_make" value={formData.vehicle_make} onChange={handleChange} required className="w-full px-4 py-2 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none" placeholder="e.g. Lexus ES 350" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-surface-700 mb-1">Year</label>
                                                    <input type="number" name="vehicle_year" value={formData.vehicle_year} onChange={handleChange} required min="2010" max="2027" className="w-full px-4 py-2 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none" placeholder="2023" />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-surface-700 mb-1">Are you willing to do Cross-Border trips?</label>
                                            <div className="flex items-center gap-4 mt-2">
                                                <label className="flex items-center gap-2">
                                                    <input type="radio" name="cross_border" value="yes" checked={formData.cross_border === 'yes'} onChange={handleChange} className="text-primary-600 focus:ring-primary-500" />
                                                    <span className="text-surface-700">Yes</span>
                                                </label>
                                                <label className="flex items-center gap-2">
                                                    <input type="radio" name="cross_border" value="no" checked={formData.cross_border === 'no'} onChange={handleChange} className="text-primary-600 focus:ring-primary-500" />
                                                    <span className="text-surface-700">No (City only)</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <button type="submit" disabled={status.submitting} className="btn-primary w-full py-3 text-lg disabled:opacity-70 disabled:cursor-not-allowed">
                                                {status.submitting ? 'Submitting Application...' : 'Submit Registration'}
                                            </button>
                                            <p className="text-xs text-center text-surface-500 mt-3">Our fleet management team will contact you within 24 hours.</p>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
