const fs = require('fs');
const path = require('path');

const routes = [
    {
        id: 'jeddah-airport-to-makkah',
        title: 'Taxi from Jeddah Airport to Makkah',
        location: 'Makkah',
        overview: 'Traveling from King Abdulaziz International Airport (JED) in Jeddah to Makkah is the most common route for pilgrims performing Umrah and Hajj. We provide structured, pre-booked airport transfers for this important journey.',
        pickupProcess: 'Your assigned driver will monitor your flight and meet you in the designated arrivals area at Jeddah Airport. Assistance with luggage is provided, and the driver will guide you directly to your pre-booked vehicle. Street taxi hailing and short-distance local rides are not offered.',
        distanceTime: 'The distance is approximately 95 kilometers. The journey typically takes 75 to 90 minutes, depending heavily on highway traffic and entry points into Makkah.',
        tips: [
            'Provide your complete flight arriving details when confirming your book.',
            'Ensure the drop-off hotel name and location in Makkah are accurate.',
            'Expect longer travel times and potential delays during Ramadan and Hajj seasons.'
        ],
        faq: [
            { question: 'Is this an ad-hoc or on-demand service?', answer: 'No, Airport Travel Taxis provides strictly pre-booked airport transfers.' },
            { question: 'Will the driver wait if my flight is delayed?', answer: 'Yes, we track your flight status to adjust the pickup time accordingly.' },
            { question: 'Can large family groups travel together?', answer: 'Yes, we have high-capacity passenger vans and buses available for groups.' }
        ]
    },
    {
        id: 'jeddah-airport-to-madinah',
        title: 'Taxi from Jeddah Airport to Madinah',
        location: 'Madinah',
        overview: 'Some pilgrims choose to travel directly from Jeddah Airport to Madinah before visiting Makkah. This is a long-distance intercity transfer requiring reliable pre-booked transportation.',
        pickupProcess: 'The driver awaits you at the Jeddah Airport arrivals terminal holding a sign. They will assist with luggage loading and begin the direct highway transit to Madinah. We do not offer local ride-hailing style services.',
        distanceTime: 'The distance from Jeddah Airport to Madinah is roughly 420 kilometers. The continuous driving time is estimated at 4 to 5 hours via the Al Hijrah highway.',
        tips: [
            'Prepare for a long road journey after your flight by carrying water.',
            'Pre-book a spacious vehicle such as a passenger van if traveling with considerable luggage.',
            'Communicate any need for rest stops with your driver during the long drive.'
        ],
        faq: [
            { question: 'Does the service provide a direct run to Madinah?', answer: 'Yes, this is a dedicated, direct door-to-door transfer after your flight lands.' },
            { question: 'Are there any hidden costs or meters?', answer: 'We do not mention prices here, but all details are finalized strictly during the pre-booking process with no meters used.' },
            { question: 'Are there larger vehicles for families?', answer: 'Yes, vehicles like the Mercedes Sprinter or GMC are ideal for this route.' }
        ]
    },
    {
        id: 'madinah-airport-to-madinah-city',
        title: 'Taxi from Madinah Airport to Madinah City',
        location: 'Madinah City',
        overview: 'Prince Mohammad Bin Abdulaziz Airport (MED) is the primary entry point for pilgrims directly visiting Madinah. An organized, pre-booked transfer ensures a smooth arrival and quick transit to your city accommodation.',
        pickupProcess: 'Your driver will be stationed at the Madinah Airport arrivals hall. This guarantees immediate departure toward your hotel without standing in taxi lines. Ride-hailing apps are not part of our pre-booked service.',
        distanceTime: 'The airport is situated about 20 kilometers from the central Madinah hotel district near Masjid an Nabawi. The travel time is approximately 25 to 35 minutes.',
        tips: [
            'Verify the passenger count precisely when booking to ensure luggage fits.',
            'Keep your driver’s contact information accessible upon landing.',
            'Note your specific hotel entrance, as many are densely located near the mosque.'
        ],
        faq: [
            { question: 'Is this an exclusive airport transfer service?', answer: 'Yes, Airport Travel Taxis provides scheduled, pre-booked transfers.' },
            { question: 'Can I find this service outside the airport on arrival?', answer: 'No, all journeys must be reserved in advance of your flight.' },
            { question: 'Will the driver help with luggage?', answer: 'Yes, the driver assists with loading your suitcases into the vehicle.' }
        ]
    },
    {
        id: 'madinah-airport-to-makkah',
        title: 'Taxi from Madinah Airport to Makkah',
        location: 'Makkah',
        overview: 'Pilgrims landing in Madinah may wish to proceed directly to Makkah to perform Umrah. This requires an extensive, long-distance intercity transfer immediately following your flight.',
        pickupProcess: 'You are met inside the Madinah Airport arrivals area. Once ready, the driver navigates directly to the highway heading south to Makkah. Ad-hoc street taxi services are not provided for this extensive route.',
        distanceTime: 'The route from Madinah Airport to Makkah covers roughly 450 kilometers. Expect the travel time to be approximately 4.5 to 5.5 hours, depending on traffic and prayer times.',
        tips: [
            'Ensure you are prepared for a 5-hour drive immediately after landing.',
            'Plan your Ihram appropriately if proceeding directly for Umrah.',
            'Coordinate with the driver regarding brief stops at the required Miqat if needed.'
        ],
        faq: [
            { question: 'Is stopping at the Miqat permitted?', answer: 'Yes, coordinate this requirement during your pre-booking.' },
            { question: 'Is this a private transfer?', answer: 'Yes, you book the entire vehicle for your specific party.' },
            { question: 'Do you offer local rides within Madinah?', answer: 'No, our services focus entirely on these pre-booked airport and intercity transfers.' }
        ]
    },
    {
        id: 'taif-airport-to-makkah',
        title: 'Taxi from Taif Airport to Makkah',
        location: 'Makkah',
        overview: 'Taif Regional Airport (TIF) serves as an alternative entry point for pilgrims heading to Makkah. Traveling from Taif involves descending the mountain roads directly to the holy city.',
        pickupProcess: 'A pre-booked driver awaits your arrival at Taif Airport. By reserving in advance, you secure reliable transit down the mountain route. Street hailing and short-distance city rides are not offered.',
        distanceTime: 'The distance between Taif Airport and Makkah is approximately 110 kilometers depending on the specific mountain route used. The journey typically takes 1.5 to 2 hours.',
        tips: [
            'Be aware that the mountain roads from Taif have steep gradients.',
            'Ensure your flight is correctly documented when pre-booking.',
            'If you need to stop at the Qarn al-Manazil Miqat, specify this during your booking.'
        ],
        faq: [
            { question: 'Does the route pass through the Miqat?', answer: 'Yes, if traveling for Umrah, coordinate the Miqat stop with your driver.' },
            { question: 'Are large coaches available from Taif?', answer: 'Yes, we supply a range of vehicles matching your group size.' },
            { question: 'Do I need to book before flying?', answer: 'Yes, all our airport transfers must be pre-booked.' }
        ]
    }
];

const template = (data) => `import { Metadata } from 'next';
import Link from 'next/link';
import BookingWidget from '@/components/BookingWidget';
import FAQ from '@/components/FAQ';
import RouteFinder from '@/components/RouteFinder';
import { ChevronRight, Plane, MapPin, Clock, Info, ShieldCheck, Car, CheckCircle2, Navigation } from 'lucide-react';

export const metadata: Metadata = {
    title: '${data.title}',
    description: 'Pre-booked airport transfer for pilgrims: ${data.title}.',
    openGraph: {
        title: '${data.title} | Airport Travel Taxis',
        description: 'Pre-booked airport transfer for pilgrims: ${data.title}.',
        url: 'https://airporttraveltaxis.com/taxi-from-${data.id}',
    },
    alternates: {
        canonical: 'https://airporttraveltaxis.com/taxi-from-${data.id}',
    },
};

export default function PilgrimAirportTransferPage() {
    const vehicles = [
        { name: 'Mercedes S-Class', type: 'Executive Sedan' },
        { name: 'Cadillac Escalade', type: 'Large SUV' },
        { name: 'GMC', type: 'Large SUV' },
        { name: 'Ford Taurus', type: 'Standard Sedan' },
        { name: 'BMW', type: 'Executive Sedan' },
        { name: 'Genesis', type: 'Executive Sedan' },
        { name: 'Mercedes Vito', type: 'Passenger Van' },
        { name: 'Mercedes Sprinter', type: 'Minibus' },
        { name: 'Luxurious Bus', type: 'Coach' },
        { name: 'Camry', type: 'Standard Sedan' },
        { name: 'Staria', type: 'Passenger Van' },
        { name: 'Hiace', type: 'Passenger Van' },
        { name: 'Coaster', type: 'Minibus' }
    ];

    return (
        <div className="pt-20">
            {/* Header Section */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6 font-medium">
                        <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-surface-900 truncate">${data.title}</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                <Plane className="w-4 h-4 text-primary-600" />
                                <span className="text-sm text-primary-700 font-medium tracking-tight">Pilgrim Airport Transfer</span>
                            </div>
                            <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-6 leading-tight">
                                ${data.title}
                            </h1>
                            
                            <div className="mb-6 p-5 bg-white border border-primary-200 rounded-2xl shadow-sm">
                                <h3 className="font-bold text-surface-900 flex items-center gap-2 mb-2">
                                    <Info className="w-5 h-5 text-primary-600" />
                                    Important Service Notice
                                </h3>
                                <p className="text-surface-700 text-sm leading-relaxed mb-3">
                                    Airport Travel Taxis provides <strong>pre-booked airport transfers for pilgrims</strong>.
                                </p>
                                <p className="text-surface-600 text-sm leading-relaxed">
                                    <strong>We do NOT provide:</strong> Local short-distance taxi rides or ride-hailing services. All journeys must be scheduled in advance.
                                </p>
                            </div>

                            <p className="text-surface-600 text-lg leading-relaxed mb-8">
                                Arrive smoothly and travel to ${data.location}. Our professional transit focus ensures your pre-booked journey from the airport is fully reliable.
                            </p>
                        </div>

                        <div className="lg:sticky lg:top-24">
                            <BookingWidget />
                        </div>
                    </div>
                </div>
            </section>

            {/* Travel Details Content */}
            <section className="section-padding bg-white border-y border-surface-200">
                <div className="container-custom mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Route Overview */}
                        <div className="bg-surface-50 border border-surface-200 rounded-2xl p-8 h-full">
                            <h2 className="font-display text-2xl text-surface-900 mb-4 flex items-center gap-2">
                                <Navigation className="w-6 h-6 text-primary-600" />
                                Route Overview
                            </h2>
                            <p className="text-surface-700 leading-relaxed">
                                ${data.overview}
                            </p>
                        </div>

                        {/* Airport Pickup Process */}
                        <div className="bg-surface-50 border border-surface-200 rounded-2xl p-8 h-full">
                            <h2 className="font-display text-2xl text-surface-900 mb-4 flex items-center gap-2">
                                <Plane className="w-6 h-6 text-primary-600" />
                                Airport Pickup Process
                            </h2>
                            <p className="text-surface-700 leading-relaxed">
                                ${data.pickupProcess}
                            </p>
                        </div>
                    </div>

                    {/* Distance & Time */}
                    <div className="border border-surface-200 rounded-2xl p-8">
                        <h3 className="font-display text-2xl text-surface-900 mb-4 flex items-center gap-2">
                            <Clock className="w-6 h-6 text-primary-600" />
                            Travel Distance and Estimated Time
                        </h3>
                        <p className="text-surface-600 leading-relaxed md:text-lg">
                            ${data.distanceTime}
                        </p>
                    </div>
                </div>
            </section>

            {/* Vehicle Options */}
            <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto">
                    <div className="max-w-xl mb-12">
                        <h2 className="font-display text-3xl text-surface-900 mb-4">Vehicle Options</h2>
                        <p className="text-surface-500">Professional fleet options for your pre-booked long-distance journey.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {vehicles.map((v) => (
                            <div key={v.name} className="bg-white border border-surface-200 rounded-xl p-4 flex items-center gap-3 shadow-sm">
                                <div className="p-2 bg-surface-100 rounded-lg shrink-0">
                                    <Car className="w-5 h-5 text-primary-600" />
                                </div>
                                <div>
                                    <p className="font-bold text-surface-900 leading-tight">{v.name}</p>
                                    <p className="text-[10px] font-bold text-primary-600 uppercase tracking-widest leading-tight">{v.type}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Travel Tips */}
            <section className="section-padding bg-white border-y border-surface-200">
                <div className="container-custom mx-auto max-w-4xl">
                    <div className="bg-primary-900 rounded-[32px] p-8 md:p-12 text-white shadow-xl">
                        <div className="flex items-center gap-3 mb-8">
                            <ShieldCheck className="w-8 h-8 text-primary-300" />
                            <h2 className="font-display text-3xl">Travel Tips for Pilgrims</h2>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
                            {${JSON.stringify(data.tips)}.map((tip, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-primary-400 shrink-0 mt-0.5" />
                                    <p className="text-primary-50 font-medium leading-relaxed">{tip}</p>
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

            {/* Search Route */}
            <section className="section-padding bg-white border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <RouteFinder />
                </div>
            </section>
        </div>
    );
}
`;

routes.forEach(route => {
    const dir = path.join(__dirname, 'src/app', `taxi-from-${route.id}`);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'page.tsx'), template(route));
});

console.log('Pilgrim airport transfer pages generated successfully!');
