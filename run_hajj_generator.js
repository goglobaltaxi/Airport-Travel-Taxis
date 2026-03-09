const fs = require('fs');
const path = require('path');

const routes = [
    {
        route: 'jeddah-airport-to-makkah',
        from: 'Jeddah Airport',
        to: 'Makkah',
        distance: '95 km',
        time: '75-120 minutes',
        description: 'Pre-booked transfer from Jeddah Airport to Makkah during the Hajj season.',
        overview: 'Transportation during the Hajj season requires careful planning. Our pre-booked taxi service from Jeddah Airport to Makkah provides arriving pilgrims with a direct and reliable way to reach the holy city. We do not offer local street taxi services; all journeys must be scheduled in advance to ensure availability.',
        process: [
            'Driver waits at the Jeddah Airport arrivals area with a clear sign.',
            'Assistance provided for loading luggage into the vehicle.',
            'Direct transportation to your accommodation in Makkah.',
            'Drop-off completed at your requested hotel or location.'
        ],
        tips: [
            'Book your transportation well in advance of your travel dates.',
            'Confirm your exact arrival terminal and flight details.',
            'Allow extra travel time due to traffic.',
            'Have your hotel address readily available for the driver.'
        ],
        faq: [
            { question: 'How do pilgrims travel between Hajj locations?', answer: 'Pilgrims use pre-booked transportation to move safely and efficiently between locations.' },
            { question: 'Can groups travel together?', answer: 'Yes, we provide spacious vans and buses for large groups.' },
            { question: 'Are airport pickups available during Hajj?', answer: 'Yes, our airport pickup service operates fully during the pilgrimage season.' }
        ]
    },
    {
        route: 'makkah-to-mina',
        from: 'Makkah',
        to: 'Mina',
        distance: '8 km',
        time: '30-90 minutes',
        description: 'Pre-booked transfer from Makkah to Mina for Hajj pilgrims.',
        overview: 'The journey from Makkah to Mina is a key part of the Hajj pilgrimage. Due to high volumes of travelers, pre-booked transportation is essential. Our service ensures a dedicated vehicle is ready at your hotel, avoiding the need to find a street taxi during peak periods.',
        process: [
            'Punctual pickup from your Makkah hotel.',
            'Driver assists with passenger boarding and any belongings.',
            'Direct transfer to the designated entry points for Mina.',
            'Drop-off at the closest accessible area to your camp.'
        ],
        tips: [
            'Travel early during peak pilgrimage days.',
            'Confirm pickup points and your specific camp location in Mina.',
            'Carry only necessary items to make boarding and exiting easier.',
            'Coordinate the pickup time carefully with your group.'
        ],
        faq: [
            { question: 'How do pilgrims travel between Hajj locations?', answer: 'Pre-scheduled vehicles organize travel carefully around access restrictions.' },
            { question: 'Can groups travel together?', answer: 'Yes, vehicles like buses and minibuses are ideal for group coordination.' },
            { question: 'Is the travel time affected by the season?', answer: 'Yes, travel times vary heavily based on road closures and traffic volume.' }
        ]
    },
    {
        route: 'mina-to-arafat',
        from: 'Mina',
        to: 'Arafat',
        distance: '14 km',
        time: '45-120 minutes',
        description: 'Pre-booked transfer from Mina to Arafat during the Hajj pilgrimage.',
        overview: 'Moving from Mina to Arafat is a significant step in the Hajj process. Our pre-booked vehicles provide a planned and organized method for this specific journey. By reserving early, pilgrims secure reliable transit without relying on ad-hoc local services.',
        process: [
            'Pickup from the authorized location near your Mina camp.',
            'Organized boarding for all group members.',
            'Transit via designated routes towards Arafat.',
            'Drop-off near your designated Arafat zone.'
        ],
        tips: [
            'Confirm pickup points as roads can change.',
            'Allow extra travel time due to traffic.',
            'Expect delays and remain patient during the transit.',
            'Maintain communication with your group leader.'
        ],
        faq: [
            { question: 'How do pilgrims travel between Hajj locations?', answer: 'Our drivers follow the specific traffic patterns designated for pilgrims.' },
            { question: 'Can groups travel together?', answer: 'Yes, high-capacity coaches and vans allow families to stay together.' },
            { question: 'Are roads open to all vehicles?', answer: 'Only authorized and properly permitted vehicles navigate these routes.' }
        ]
    },
    {
        route: 'arafat-to-muzdalifah',
        from: 'Arafat',
        to: 'Muzdalifah',
        distance: '9 km',
        time: '40-120 minutes',
        description: 'Pre-booked transfer from Arafat to Muzdalifah for Hajj travelers.',
        overview: 'The transit between Arafat and Muzdalifah requires specific coordination. We provide pre-booked transportation for this segment, ensuring a dedicated vehicle is assigned to your group. This eliminates the uncertainty of finding transport on the day.',
        process: [
            'Meeting the driver at the pre-arranged holding point in Arafat.',
            'Efficient boarding process for the group.',
            'Travel along the authorized routes to Muzdalifah.',
            'Drop-off at the designated pilgrim areas.'
        ],
        tips: [
            'Confirm pickup points precisely, as the area is large.',
            'Allow extra travel time due to traffic.',
            'Ensure all group members are present before the vehicle departs.',
            'Keep your identification and documents accessible.'
        ],
        faq: [
            { question: 'How do pilgrims travel between Hajj locations?', answer: 'Travel is managed through pre-arranged vehicles to ensure order.' },
            { question: 'Can groups travel together?', answer: 'Yes, large groups are accommodated in our buses and minibuses.' },
            { question: 'Is the service pre-booked only?', answer: 'Yes, all Hajj transportation must be reserved and scheduled in advance.' }
        ]
    },
    {
        route: 'makkah-to-madinah',
        from: 'Makkah',
        to: 'Madinah',
        distance: '450 km',
        time: '4.5-6 hours',
        description: 'Pre-booked intercity transfer from Makkah to Madinah.',
        overview: 'Many pilgrims travel between Makkah and Madinah as part of their journey. Our intercity pre-booked service provides a long-distance transfer with professional drivers. This ensures a comfortable and organized trip between the two holy cities.',
        process: [
            'Driver arrives at your Makkah hotel at the scheduled time.',
            'Assistance provided for loading all luggage.',
            'Direct highway transit to Madinah.',
            'Drop-off directly at your Madinah accommodation.'
        ],
        tips: [
            'Travel early during peak pilgrimage days.',
            'Expect a travel time of around 5 hours depending on highway traffic.',
            'Provide your hotel details in Madinah clearly for accurate drop-off.',
            'Rest and travel comfortably in our maintained vehicles.'
        ],
        faq: [
            { question: 'How do pilgrims travel between Hajj locations?', answer: 'Intercity travel is conducted via direct, pre-booked highway transfers.' },
            { question: 'Can groups travel together?', answer: 'Yes, coaches and passenger vans are available for larger families.' },
            { question: 'Is this an on-demand service?', answer: 'No, this is strictly a pre-booked service scheduled prior to travel.' }
        ]
    }
];

const template = (data) => `import { Metadata } from 'next';
import Link from 'next/link';
import BookingWidget from '@/components/BookingWidget';
import FAQ from '@/components/FAQ';
import RouteFinder from '@/components/RouteFinder';
import { ChevronRight, Car, MapPin, Clock, Info, ShieldCheck, Navigation } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Hajj Taxi from ${data.from} to ${data.to}',
    description: '${data.description}',
    openGraph: {
        title: 'Hajj Taxi from ${data.from} to ${data.to} | Airport Travel Taxis',
        description: '${data.description}',
        url: 'https://airporttraveltaxis.com/hajj-taxi-${data.route}',
    },
    alternates: {
        canonical: 'https://airporttraveltaxis.com/hajj-taxi-${data.route}',
    },
};

export default function HajjRoutePage() {
    const vehicles = [
        { name: 'Mercedes S-Class', type: 'Executive Sedan', desc: 'Comfortable sedan for travel.' },
        { name: 'Cadillac Escalade', type: 'Large SUV', desc: 'Spacious option for passengers and luggage.' },
        { name: 'GMC', type: 'Large SUV', desc: 'Reliable transport for families and groups.' },
        { name: 'Ford Taurus', type: 'Standard Sedan', desc: 'Practical sedan for intercity journeys.' },
        { name: 'BMW', type: 'Executive Sedan', desc: 'Professional transport.' },
        { name: 'Genesis', type: 'Executive Sedan', desc: 'Sleek travel option.' },
        { name: 'Mercedes Vito', type: 'Passenger Van', desc: 'Spacious van for group travel.' },
        { name: 'Mercedes Sprinter', type: 'Minibus', desc: 'Minibus suitable for larger groups.' },
        { name: 'Luxurious Bus', type: 'Coach', desc: 'High-capacity comfortable coach for big groups.' },
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
                        <span className="text-surface-900 truncate">Hajj Taxi from ${data.from} to ${data.to}</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <Navigation className="w-4 h-4 text-primary-600" />
                                <span className="text-sm text-primary-700 font-medium tracking-tight">Hajj Transportation</span>
                            </div>
                            <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-6 leading-tight">
                                Hajj Taxi from ${data.from} to <span className="text-primary-600">${data.to}</span>
                            </h1>
                            
                            <div className="mb-6 p-4 bg-white/60 backdrop-blur-md rounded-xl border border-primary-200/50 flex gap-3 text-left max-w-xl">
                                <div className="text-primary-600 shrink-0 mt-0.5">
                                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center font-bold text-sm shadow-sm">i</div>
                                </div>
                                <p className="text-sm text-surface-800 leading-relaxed">
                                    <strong>Service Notice:</strong> This is a mandatory pre-booked service. Local street taxi hailing is NOT provided. All journeys must be reserved in advance.
                                </p>
                            </div>

                            <p className="text-surface-600 text-lg leading-relaxed mb-6">
                                ${data.description}
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-white border border-surface-200 rounded-2xl p-5 shadow-sm">
                                    <MapPin className="w-5 h-5 text-primary-600 mb-3" />
                                    <p className="text-xs text-surface-500 uppercase tracking-widest font-bold mb-1">Approx. Distance</p>
                                    <p className="text-surface-900 font-semibold">${data.distance}</p>
                                </div>
                                <div className="bg-white border border-surface-200 rounded-2xl p-5 shadow-sm">
                                    <Clock className="w-5 h-5 text-primary-600 mb-3" />
                                    <p className="text-xs text-surface-500 uppercase tracking-widest font-bold mb-1">Approx. Time</p>
                                    <p className="text-surface-900 font-semibold">${data.time}</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-24">
                            <BookingWidget />
                        </div>
                    </div>
                </div>
            </section>

            {/* Hajj Travel Overview */}
            <section className="section-padding bg-white border-y border-surface-200">
                <div className="container-custom mx-auto max-w-4xl text-center">
                    <h2 className="font-display text-3xl text-surface-900 mb-4">Hajj Travel Overview</h2>
                    <p className="text-surface-600 text-lg leading-relaxed">
                        ${data.overview}
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
                        {${JSON.stringify(data.process)}.map((step, i) => (
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

            {/* Hajj Travel Tips */}
            <section className="section-padding bg-surface-50 border-y border-surface-200">
                <div className="container-custom mx-auto max-w-4xl">
                    <div className="bg-white border border-surface-200 rounded-[32px] overflow-hidden shadow-sm">
                        <div className="bg-primary-600 p-8 text-white">
                            <div className="flex items-center gap-3 mb-2">
                                <Info className="w-6 h-6" />
                                <h2 className="font-display text-2xl">Hajj Travel Tips</h2>
                            </div>
                            <p className="text-primary-100">Ensure a seamless transfer.</p>
                        </div>
                        <div className="p-8 grid sm:grid-cols-2 gap-6">
                            {${JSON.stringify(data.tips)}.map((tip, i) => (
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
                    <FAQ items={${JSON.stringify(data.faq)}} title="Frequently Asked Questions" />
                </div>
            </section>

            {/* Related Hajj Routes */}
            <section className="section-padding bg-surface-100 border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-3xl text-surface-900 mb-8 text-center">Related Hajj Routes</h2>
                    <div className="grid sm:grid-cols-3 gap-6">
                        <Link href="/hajj-taxi-jeddah-airport-to-makkah" className="group bg-white border border-surface-200 hover:border-primary-500 rounded-2xl p-6 transition-all shadow-sm text-center">
                            <span className="text-xs text-primary-600 font-bold mb-2 block uppercase tracking-wider">Hajj Transfer</span>
                            <h3 className="font-bold text-surface-900 transition-colors">Jeddah Airport to Makkah</h3>
                        </Link>
                        <Link href="/hajj-taxi-makkah-to-mina" className="group bg-white border border-surface-200 hover:border-primary-500 rounded-2xl p-6 transition-all shadow-sm text-center">
                            <span className="text-xs text-primary-600 font-bold mb-2 block uppercase tracking-wider">Hajj Transfer</span>
                            <h3 className="font-bold text-surface-900 transition-colors">Makkah to Mina</h3>
                        </Link>
                        <Link href="/hajj-taxi-makkah-to-madinah" className="group bg-white border border-surface-200 hover:border-primary-500 rounded-2xl p-6 transition-all shadow-sm text-center">
                            <span className="text-xs text-primary-600 font-bold mb-2 block uppercase tracking-wider">Hajj Transfer</span>
                            <h3 className="font-bold text-surface-900 transition-colors">Makkah to Madinah</h3>
                        </Link>
                    </div>
                </div>
                <div className="container-custom mx-auto mt-12">
                    <RouteFinder />
                </div>
            </section>
        </div>
    );
}
`;

routes.forEach(route => {
    const dir = path.join(__dirname, 'src/app', `hajj-taxi-${route.route}`);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'page.tsx'), template(route));
});

console.log('Hajj routes generated!');
