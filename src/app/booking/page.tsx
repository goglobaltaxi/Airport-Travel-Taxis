import { Metadata } from 'next';
import BookingWidget from '@/components/BookingWidget';

export const metadata: Metadata = {
    title: 'Book Your Taxi Online | Pre-Booked Airport Transfers',
    description: 'Effortlessly book your professional taxi transfer online. We offer 24/7 pre-booked services for airports, cities, and cross-border travel in the GCC.',
    openGraph: {
        title: 'Book Your Taxi Online | Pre-Booked Airport Transfers',
        description: 'Effortlessly book your professional taxi transfer online. We offer 24/7 pre-booked services for airports, cities, and cross-border travel in the GCC.',
        url: 'https://airporttraveltaxis.com/booking',
    },
    alternates: {
        canonical: 'https://airporttraveltaxis.com/booking',
    },
};

export default function BookingPage() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-4">
                            Get Your <span className="text-primary-600">Quote</span>
                        </h1>
                        <p className="text-surface-600 max-w-2xl mx-auto text-lg">
                            Select your pickup, destination, and vehicle. Get an instant quote and book in seconds.
                        </p>
                    </div>
                    <BookingWidget />
                </div>
            </section>

            {/* Booking Steps */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-10 text-center">
                        How It <span className="text-primary-600">Works</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: '01', icon: '📍', title: 'Select Route', desc: 'Choose your pickup and drop-off locations from our Gulf-wide coverage.' },
                            { step: '02', icon: '🚗', title: 'Choose Vehicle', desc: 'Pick from Economy, Business, SUV, Luxury, or Van based on your needs.' },
                            { step: '03', icon: '💳', title: 'Get Quote', desc: 'Receive an instant, transparent quote with no hidden fees.' },
                            { step: '04', icon: '✅', title: 'Confirm Booking', desc: 'Request instantly or via WhatsApp. Your driver will be assigned immediately.' },
                        ].map((item) => (
                            <div key={item.step} className="glass-card p-6 text-center relative">
                                <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-sm">
                                    {item.step}
                                </div>
                                <span className="text-3xl block mb-3">{item.icon}</span>
                                <h3 className="font-display text-surface-900 mb-2">{item.title}</h3>
                                <p className="text-surface-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guarantees */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <div className="glass-card p-8 lg:p-10">
                        <h2 className="font-display text-2xl text-surface-900 mb-8 text-center">Our Booking Guarantee</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: '💰', title: 'Competitive Pricing', desc: 'No surge, no hidden fees. Request a quote for the best rates.' },
                                { icon: '🔄', title: 'Free Cancellation', desc: 'Cancel for free up to 4 hours before pickup (24h for inter-city).' },
                                { icon: '🛡️', title: 'Fully Insured', desc: 'All rides are fully insured for your peace of mind.' },
                                { icon: '⏱️', title: 'On-Time Guarantee', desc: 'We monitor flights and adjust pickup times accordingly.' },
                                { icon: '👨‍✈️', title: 'Professional Drivers', desc: 'All drivers are vetted, licensed, and professionally trained.' },
                                { icon: '📱', title: '24/7 Support', desc: 'Our customer service team is available around the clock.' },
                            ].map((item) => (
                                <div key={item.title} className="flex items-start gap-3">
                                    <span className="text-2xl mt-0.5">{item.icon}</span>
                                    <div>
                                        <h3 className="font-semibold text-surface-900 mb-1">{item.title}</h3>
                                        <p className="text-surface-600 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
