const fs = require('fs');
const path = require('path');

const routes = [
    {
        slug: 'jeddah-airport-to-makkah',
        from: 'Jeddah Airport',
        to: 'Makkah',
        distance: '95 km',
        time: '75-90 minutes',
        description: 'Professional transfer from Jeddah Airport to Makkah. Pre-booked transportation for Umrah pilgrims.',
        process: [
            'Driver meets you at Jeddah Airport arrivals hall.',
            'Assistance with luggage loading.',
            'Direct transfer to your hotel in Makkah.',
            'Safe and comfortable journey.'
        ],
        tips: [
            'Confirm your arrival terminal in Jeddah.',
            'Share your flight details for accurate pickup timing.',
            'Plan travel time considering prayer schedules in Makkah.',
        ],
        faq: [
            { q: 'How long does the journey take?', a: 'The drive from Jeddah Airport to Makkah takes about 75 to 90 minutes depending on traffic.' },
            { q: 'Can airport pickup be arranged for Umrah travelers?', a: 'Yes, our service is tailored for Umrah pilgrims arriving at the airport.' },
            { q: 'Can groups travel together?', a: 'Yes, we offer vans and buses for large pilgrim groups.' }
        ]
    },
    {
        slug: 'jeddah-airport-to-madinah',
        from: 'Jeddah Airport',
        to: 'Madinah',
        distance: '400 km',
        time: '4-5 hours',
        description: 'Professional transfer from Jeddah Airport to Madinah. Direct pre-booked transportation between the airport and the holy city.',
        process: [
            'Driver meets you at Jeddah Airport arrivals hall with a sign.',
            'Luggage assistance provided.',
            'Comfortable long-distance transit to Madinah.',
            'Drop-off at your hotel in Madinah.'
        ],
        tips: [
            'Prepare for a 4 to 5 hour journey.',
            'Share exact flight details prior to arrival.',
            'Coordinate pickup times with prayer schedules.'
        ],
        faq: [
            { q: 'How long does the journey take?', a: 'The drive from Jeddah Airport to Madinah takes about 4 to 5 hours.' },
            { q: 'Can airport pickup be arranged for Umrah travelers?', a: 'Yes, we provide direct pickup from the airport arrivals.' },
            { q: 'Can groups travel together?', a: 'Yes, spacious vans and buses are available.' }
        ]
    },
    {
        slug: 'madinah-to-makkah',
        from: 'Madinah',
        to: 'Makkah',
        distance: '450 km',
        time: '4.5-5.5 hours',
        description: 'Professional transfer from Madinah to Makkah. Pre-booked transportation for Umrah travel between the holy cities.',
        process: [
            'Driver arrives at your hotel in Madinah at the scheduled time.',
            'Help with loading luggage into the vehicle.',
            'Smooth highway journey to Makkah.',
            'Direct drop-off at your Makkah accommodation.'
        ],
        tips: [
            'Plan your departure time considering prayer schedules.',
            'Ensure all luggage is accounted for before departure.',
            'Rest comfortably during the extended journey.'
        ],
        faq: [
            { q: 'How long does the journey take?', a: 'The intercity transfer takes about 4.5 to 5.5 hours.' },
            { q: 'Can pickup be arranged for Umrah travelers?', a: 'Yes, we pick you up directly from your hotel.' },
            { q: 'Can groups travel together?', a: 'Yes, we offer vehicles suitable for any group size.' }
        ]
    },
    {
        slug: 'makkah-to-madinah',
        from: 'Makkah',
        to: 'Madinah',
        distance: '450 km',
        time: '4.5-5.5 hours',
        description: 'Professional transfer from Makkah to Madinah. Advance booking required for this intercity travel service.',
        process: [
            'Pickup from your hotel in Makkah.',
            'Driver assists with luggage.',
            'Direct highway transfer to Madinah.',
            'Drop-off at your Madinah hotel.'
        ],
        tips: [
            'Schedule your pickup with prayer times in mind.',
            'Provide hotel details for precise pickup.',
            'Book in advance to secure large vehicles for groups.'
        ],
        faq: [
            { q: 'How long does the journey take?', a: 'The drive takes roughly 4.5 to 5.5 hours depending on traffic.' },
            { q: 'Can pickup be arranged for Umrah travelers?', a: 'Yes, door-to-door service is provided from your hotel.' },
            { q: 'Can groups travel together?', a: 'Certainly, we accommodate large families and tour groups.' }
        ]
    },
    {
        slug: 'makkah-to-jeddah-airport',
        from: 'Makkah',
        to: 'Jeddah Airport',
        distance: '95 km',
        time: '75-90 minutes',
        description: 'Professional transfer from Makkah to Jeddah Airport. Reliable departure transportation for Umrah pilgrims.',
        process: [
            'Punctual pickup from your Makkah hotel.',
            'Luggage assistance by the driver.',
            'Direct transfer to the departure terminal at Jeddah Airport.',
            'Assistance unloading luggage at the terminal.'
        ],
        tips: [
            'Confirm your departure terminal in advance.',
            'Aim to arrive at the airport well before your flight.',
            'Account for potential Makkah city traffic when scheduling.'
        ],
        faq: [
            { q: 'How long does the journey take?', a: 'The trip takes approximately 75 to 90 minutes.' },
            { q: 'Can airport drop-off be arranged for Umrah travelers?', a: 'Yes, we specialize in reliable departure transfers.' },
            { q: 'Can groups travel together?', a: 'Yes, our fleet includes options for groups of all sizes.' }
        ]
    },
    {
        slug: 'madinah-to-madinah-airport',
        from: 'Madinah',
        to: 'Madinah Airport',
        distance: '20 km',
        time: '25-35 minutes',
        description: 'Professional transfer from Madinah to Madinah Airport. Reliable pre-booked transportation for your departure flight.',
        process: [
            'Driver meets you at your Madinah accommodation.',
            'Help with luggage loading.',
            'Direct drive to Madinah Airport departures.',
            'Assistance unloading at the airport.'
        ],
        tips: [
            'Confirm your flight departure time carefully.',
            'Schedule the pickup to allow time for airport procedures.',
            'Ensure you have all items before leaving the hotel.'
        ],
        faq: [
            { q: 'How long does the journey take?', a: 'The distance is short, taking about 25 to 35 minutes.' },
            { q: 'Can airport drop-off be arranged for Umrah travelers?', a: 'Yes, we provide timely transport to the airport.' },
            { q: 'Can groups travel together?', a: 'Yes, we have minivans and buses for larger group sizes.' }
        ]
    },
    {
        slug: 'madinah-airport-to-madinah-hotel',
        from: 'Madinah Airport',
        to: 'Madinah Hotel',
        distance: '20 km',
        time: '25-35 minutes',
        description: 'Professional transfer from Madinah Airport to your Madinah Hotel. Efficient pre-booked transportation for arriving pilgrims.',
        process: [
            'Meet your driver at the arrivals hall in Madinah Airport.',
            'Assistance with your suitcases.',
            'Short transfer directly to your hotel.',
            'Drop-off at the hotel entrance.'
        ],
        tips: [
            'Share your flight details for arrival tracking.',
            'Confirm your exact hotel name to the driver.',
            'Meet the driver at the designated arrivals area.'
        ],
        faq: [
            { q: 'How long does the journey take?', a: 'The journey typically takes 25 to 35 minutes.' },
            { q: 'Can airport pickup be arranged for Umrah travelers?', a: 'Yes, we offer direct pickup from the airport to your hotel.' },
            { q: 'Can groups travel together?', a: 'Yes, we provide vehicles that can fit groups and their luggage.' }
        ]
    },
    {
        slug: 'jeddah-airport-to-makkah-hotel',
        from: 'Jeddah Airport',
        to: 'Makkah Hotel',
        distance: '95 km',
        time: '75-90 minutes',
        description: 'Professional transfer from Jeddah Airport to your Makkah Hotel. Dedicated pre-booked transportation for Umrah travel.',
        process: [
            'Driver waits at the Jeddah Airport arrivals area.',
            'Luggage assistance provided.',
            'Direct transfer to your specific hotel in Makkah.',
            'Safe and focused driving to the holy city.'
        ],
        tips: [
            'Confirm your arrival terminal and hotel name before landing.',
            'Share your flight number so the driver can monitor delays.',
            'Prepare for a one-hour plus journey.'
        ],
        faq: [
            { q: 'How long does the journey take?', a: 'The trip generally takes 75 to 90 minutes depending on traffic levels.' },
            { q: 'Can airport pickup be arranged for Umrah travelers?', a: 'Yes, we accommodate arriving Umrah pilgrims.' },
            { q: 'Can groups travel together?', a: 'Yes, our large vans and buses can transport big groups together.' }
        ]
    }
];

const template = (data) => `import { Metadata } from 'next';
import Link from 'next/link';
import BookingWidget from '@/components/BookingWidget';
import FAQ from '@/components/FAQ';
import RouteFinder from '@/components/RouteFinder';
import { ChevronRight, Car, MapPin, Clock, Info, ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Taxi from ${data.from} to ${data.to}',
    description: '${data.description}',
    openGraph: {
        title: 'Taxi from ${data.from} to ${data.to} | Airport Travel Taxis',
        description: '${data.description}',
        url: 'https://airporttraveltaxis.com/taxi-from-${data.slug}',
    },
    alternates: {
        canonical: 'https://airporttraveltaxis.com/taxi-from-${data.slug}',
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
                        <span className="text-surface-900 truncate">Taxi from ${data.from} to ${data.to}</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <MapPin className="w-4 h-4 text-primary-600" />
                                <span className="text-sm text-primary-700 font-medium tracking-tight">Umrah Transportation Route</span>
                            </div>
                            <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-6 leading-tight">
                                Taxi from ${data.from} to <span className="text-primary-600">${data.to}</span>
                            </h1>
                            <p className="text-surface-600 text-lg leading-relaxed mb-6">
                                ${data.description} All services operate strictly on a pre-booked basis. Local street taxi hailing and short-distance city rides are not provided.
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

            {/* Pickup Process */}
            <section className="section-padding bg-white border-y border-surface-200">
                <div className="container-custom mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="font-display text-3xl text-surface-900 mb-4">Pickup Process</h2>
                        <p className="text-surface-500">How our transportation process is handled.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {${JSON.stringify(data.process)}.map((step, i) => (
                            <div key={i} className="bg-surface-50 border border-surface-200 rounded-2xl p-6 shadow-sm">
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
            <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto">
                    <div className="max-w-xl mb-12">
                        <h2 className="font-display text-3xl text-surface-900 mb-4">Vehicle Options</h2>
                        <p className="text-surface-500">Available vehicles for your pre-booked journey.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {vehicles.map((v) => (
                            <div key={v.name} className="bg-white border border-surface-200 rounded-2xl p-5 shadow-sm">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-surface-100 rounded-lg border border-surface-200">
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
            <section className="section-padding bg-white border-y border-surface-200">
                <div className="container-custom mx-auto max-w-4xl">
                    <div className="bg-surface-50 border border-surface-200 rounded-[32px] overflow-hidden shadow-sm">
                        <div className="bg-primary-600 p-8 text-white">
                            <div className="flex items-center gap-3 mb-2">
                                <Info className="w-6 h-6" />
                                <h2 className="font-display text-2xl">Travel Tips for Pilgrims</h2>
                            </div>
                            <p className="text-primary-100">Ensure a smooth transfer.</p>
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
            <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto max-w-3xl">
                    <FAQ items={${JSON.stringify(data.faq)}} title="Frequently Asked Questions" />
                </div>
            </section>

            {/* Related Routes */}
            <section className="section-padding bg-white border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-3xl text-surface-900 mb-8 text-center">Related Umrah Routes</h2>
                    <div className="grid sm:grid-cols-3 gap-6">
                        <Link href="/taxi-from-jeddah-airport-to-makkah" className="group bg-surface-50 border border-surface-200 hover:border-primary-500 rounded-2xl p-6 transition-all shadow-sm">
                            <h3 className="font-bold text-surface-900 transition-colors uppercase">Jeddah Airport to Makkah</h3>
                        </Link>
                        <Link href="/taxi-from-madinah-to-makkah" className="group bg-surface-50 border border-surface-200 hover:border-primary-500 rounded-2xl p-6 transition-all shadow-sm">
                            <h3 className="font-bold text-surface-900 transition-colors uppercase">Madinah to Makkah</h3>
                        </Link>
                        <Link href="/taxi-from-jeddah-airport-to-madinah" className="group bg-surface-50 border border-surface-200 hover:border-primary-500 rounded-2xl p-6 transition-all shadow-sm">
                            <h3 className="font-bold text-surface-900 transition-colors uppercase">Jeddah Airport to Madinah</h3>
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
    const dir = path.join(__dirname, 'src/app', \`taxi-from-\${route.slug}\`);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'page.tsx'), template(route));
});

console.log('Pages generated!');
