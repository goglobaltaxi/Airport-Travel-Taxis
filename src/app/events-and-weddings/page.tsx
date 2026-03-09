import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Event & Wedding Transportation | Professional Chauffeurs',
    description: 'Reliable transportation for events and weddings. We provide coordinated pre-booked group transfers and executive car services for your special occasions.',
    openGraph: {
        title: 'Event & Wedding Transportation | Professional Chauffeurs',
        description: 'Reliable transportation for events and weddings. We provide coordinated pre-booked group transfers and executive car services for your special occasions.',
        url: 'https://airporttraveltaxis.com/events-and-weddings',
    },
    alternates: {
        canonical: 'https://airporttraveltaxis.com/events-and-weddings',
    },
};

export default function EventsWeddingsPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="section-padding bg-surface-100 pb-16">
                <div className="container-custom mx-auto max-w-4xl text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
                        Premium Event Logistics
                    </span>
                    <h1 className="font-display text-4xl lg:text-5xl lg:leading-tight text-surface-900 mb-6">
                        Luxury Transportation For <span className="text-primary-600">Weddings & Events</span>
                    </h1>
                    <p className="text-xl text-surface-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Make your special day flawless with our premium chauffeur services. We offer organized transport solutions for wedding VIPs, guests, and corporate events across the region.
                    </p>
                    <Link href="/contact" className="btn-primary py-3 px-8 text-lg inline-flex items-center gap-2">
                        Request Event Quote
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </Link>
                </div>
            </section>

             {/* Services Detail */}
             <section className="section-padding bg-white">
                <div className="container-custom mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3 block">For VIPs</span>
                            <h2 className="font-display text-3xl font-bold text-surface-900 mb-6">Bridal & VIP Transport</h2>
                            <p className="text-surface-600 leading-relaxed mb-6">
                                Arrive at your venue in undeniable style. Our premium luxury sedans and executive SUVs are meticulously prepared for the bride, groom, and immediate VIP family members. 
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-start">
                                    <span className="text-primary-600 mt-1">✓</span>
                                    <span className="text-surface-700">Immaculate Luxury Vehicles (Mercedes S-Class, BMW 7-Series).</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-primary-600 mt-1">✓</span>
                                    <span className="text-surface-700">Professionally dressed chauffeurs with red-carpet etiquette.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-primary-600 mt-1">✓</span>
                                    <span className="text-surface-700">Flexible standby hours to match the flow of your event.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-surface-100 rounded-3xl h-80 lg:h-96 flex items-center justify-center p-8 border border-surface-200 shadow-sm relative overflow-hidden">
                             {/* Decorative Placeholder / Concept */}
                             <div className="absolute inset-0 bg-gradient-to-tr from-surface-200 to-surface-100 opacity-50"></div>
                             <div className="relative text-center">
                                 <span className="text-6xl mb-4 block">💍</span>
                                 <h3 className="font-display text-xl text-surface-900 font-bold">VIP Arrival Experience</h3>
                             </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 bg-surface-100 rounded-3xl h-80 lg:h-96 flex items-center justify-center p-8 border border-surface-200 shadow-sm relative overflow-hidden">
                             <div className="absolute inset-0 bg-gradient-to-tr from-surface-200 to-surface-100 opacity-50"></div>
                             <div className="relative text-center">
                                 <span className="text-6xl mb-4 block">🚌</span>
                                 <h3 className="font-display text-xl text-surface-900 font-bold">Group Shuttle Logistics</h3>
                             </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3 block">Guest Logistics</span>
                            <h2 className="font-display text-3xl font-bold text-surface-900 mb-6">Group & Guest Transfers</h2>
                            <p className="text-surface-600 leading-relaxed mb-6">
                                Managing guest arrivals from hotels or airports to the venue can be stressful. We provide executive vans and luxury mini-buses to transport your guests safely and punctually to your wedding or corporate gathering.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-start">
                                    <span className="text-primary-600 mt-1">✓</span>
                                    <span className="text-surface-700">Airport Meet & Greet for international guests.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-primary-600 mt-1">✓</span>
                                    <span className="text-surface-700">Dedicated dispatch coordinator for multi-vehicle convoys.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="text-primary-600 mt-1">✓</span>
                                    <span className="text-surface-700">Hotel to Venue organized shuttle schedules.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

             {/* SEO Text */}
             <section className="py-12 bg-surface-50 border-t border-surface-200">
                <div className="container-custom mx-auto max-w-4xl text-center">
                    <p className="text-surface-500 text-sm leading-relaxed">
                        Airport Travel Taxis operates a vetted fleet of high-end vehicles specifically adapted for elite weddings, diplomatic events, and corporate roadshows across Saudi Arabia (Riyadh, Makkah, Jeddah), UAE (Dubai, Abu Dhabi), and major hubs like Doha, Kuwait City, and Bahrain. We coordinate seamlessly with event planners and personal assistants to execute flawless ground transportation.
                    </p>
                </div>
            </section>
        </div>
    );
}
