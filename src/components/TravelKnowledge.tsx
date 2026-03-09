'use client';

import React from 'react';

// ─── Distance & Time Table Data ────────────────────────────────────────────
const distanceData = [
    { route: 'Riyadh → Jeddah', distance: '950 km', time: '9 – 10 hours' },
    { route: 'Riyadh → Dammam', distance: '400 km', time: '4 – 4.5 hours' },
    { route: 'Dubai → Abu Dhabi', distance: '140 km', time: '1.5 – 2 hours' },
    { route: 'Doha → Al Khor', distance: '50 km', time: '40 – 50 minutes' },
    { route: 'Jeddah → Makkah', distance: '80 km', time: '1 – 1.5 hours' },
    { route: 'Riyadh → Madinah', distance: '850 km', time: '8 – 9 hours' },
    { route: 'Dubai → Sharjah', distance: '30 km', time: '30 – 45 minutes' },
    { route: 'Dammam → Bahrain', distance: '75 km', time: '1 – 1.5 hours' },
    { route: 'Kuwait City → Dammam', distance: '400 km', time: '4 – 5 hours' },
    { route: 'Muscat → Nizwa', distance: '170 km', time: '2 – 2.5 hours' },
];

// ─── Transport Comparison Data ─────────────────────────────────────────────
const comparisonData = [
    { factor: 'Travel Time', taxi: 'Depends on distance, direct route', bus: 'Longer due to stops', flight: 'Shortest for long distances' },
    { factor: 'Comfort', taxi: 'Private vehicle, personal space', bus: 'Shared seating, limited space', flight: 'Comfortable for long trips' },
    { factor: 'Flexibility', taxi: 'Any time, any pickup location', bus: 'Fixed schedules and stations', flight: 'Fixed schedules and airports' },
    { factor: 'Direct Pickup', taxi: 'Door-to-door from any address', bus: 'Station pickup only', flight: 'Airport pickup only' },
    { factor: 'Luggage Capacity', taxi: 'Multiple bags, flexible space', bus: 'Limited per passenger', flight: 'Weight limits apply' },
];

// ─── Common Travel Questions ───────────────────────────────────────────────
const travelQuestions = [
    {
        question: 'What is the easiest way to travel between GCC cities?',
        answer: 'Private taxi transfers are a practical option for traveling between GCC cities. Taxis provide door-to-door pickup, no waiting at stations or airports, and the flexibility to travel at any time of day.',
    },
    {
        question: 'Can taxis cross international borders in the GCC?',
        answer: 'Yes. Licensed taxi services operate cross-border routes between Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman. Passengers must carry valid passports and the required visas. The driver handles the vehicle paperwork at border checkpoints.',
    },
    {
        question: 'How long do cross-border trips usually take?',
        answer: 'Cross-border trip duration depends on the distance and border processing time. For example, Dammam to Bahrain takes around 1 to 1.5 hours including the King Fahd Causeway crossing. Dubai to Abu Dhabi is about 1.5 to 2 hours with no border stops.',
    },
    {
        question: 'Is it possible to book a taxi for a group?',
        answer: 'Yes. Group vehicles such as the Mercedes Sprinter, Toyota Hiace, Coaster, and Luxurious Bus are available for larger parties. Families can use SUVs like the GMC Yukon XL or Cadillac Escalade.',
    },
];

// ─── Travel Tips ────────────────────────────────────────────────────────────
const travelTips = [
    { icon: '🛂', tip: 'Carry your passport and any required visas if your trip involves an international border.' },
    { icon: '⏰', tip: 'Arrive early at border crossings, especially during weekends, public holidays, and peak travel seasons.' },
    { icon: '📍', tip: 'Confirm your exact pickup location with the driver before arrival to avoid delays.' },
    { icon: '🕐', tip: 'Plan extra travel time during morning and evening rush hours in busy cities like Riyadh, Dubai, and Doha.' },
    { icon: '🧳', tip: 'Inform the booking team about the number of bags so they can assign the right vehicle size.' },
    { icon: '📱', tip: 'Save the driver contact details shared in your booking confirmation for easy communication.' },
];

interface TravelKnowledgeProps {
    /** The name of the city or route to personalize headings. e.g. "Riyadh" or "Riyadh to Jeddah" */
    context?: string;
    /** Show only a subset of distance table rows that match this filter text (case-insensitive). Omit to show all. */
    distanceFilter?: string;
}

export default function TravelKnowledge({ context, distanceFilter }: TravelKnowledgeProps) {
    // Filter distance table rows when a filter is provided
    const filteredDistances = distanceFilter
        ? distanceData.filter((d) => d.route.toLowerCase().includes(distanceFilter.toLowerCase()))
        : distanceData;

    // Always show at least 4 rows — if the filter yields fewer, pad with the rest
    const shownDistances =
        filteredDistances.length >= 4
            ? filteredDistances
            : [...filteredDistances, ...distanceData.filter((d) => !filteredDistances.includes(d))].slice(0, 6);

    const heading = context ? `Travel Information — ${context}` : 'GCC Travel Information';

    return (
        <>
            {/* ─── Section 1: Distance & Time Table ─────────────────────────── */}
            <section className="section-padding bg-white border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-2">{heading}</h2>
                    <p className="text-surface-500 text-sm mb-8 max-w-2xl">
                        Approximate travel distances and times for common routes across the GCC. Times may vary depending on traffic and border processing.
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-surface-100 text-left">
                                    <th className="px-4 py-3 font-semibold text-surface-900 rounded-tl-lg">Route</th>
                                    <th className="px-4 py-3 font-semibold text-surface-900">Distance</th>
                                    <th className="px-4 py-3 font-semibold text-surface-900 rounded-tr-lg">Estimated Travel Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {shownDistances.map((row, i) => (
                                    <tr key={row.route} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                                        <td className="px-4 py-3 text-surface-800 font-medium">{row.route}</td>
                                        <td className="px-4 py-3 text-surface-600">{row.distance}</td>
                                        <td className="px-4 py-3 text-surface-600">{row.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ─── Section 2: Transport Comparison ──────────────────────────── */}
            <section className="section-padding bg-surface-50 border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-2">Transport Comparison</h2>
                    <p className="text-surface-500 text-sm mb-8 max-w-2xl">
                        How taxis compare with buses and flights for GCC travel.
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-surface-100 text-left">
                                    <th className="px-4 py-3 font-semibold text-surface-900 rounded-tl-lg">Factor</th>
                                    <th className="px-4 py-3 font-semibold text-surface-900">Taxi</th>
                                    <th className="px-4 py-3 font-semibold text-surface-900">Bus</th>
                                    <th className="px-4 py-3 font-semibold text-surface-900 rounded-tr-lg">Flight</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row, i) => (
                                    <tr key={row.factor} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-50'}>
                                        <td className="px-4 py-3 text-surface-800 font-medium">{row.factor}</td>
                                        <td className="px-4 py-3 text-surface-600">{row.taxi}</td>
                                        <td className="px-4 py-3 text-surface-600">{row.bus}</td>
                                        <td className="px-4 py-3 text-surface-600">{row.flight}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ─── Section 3: When Travelers Prefer Taxis ───────────────────── */}
            <section className="section-padding bg-white border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-4">When Travelers Prefer Taxi Services</h2>
                    <div className="max-w-3xl space-y-4 text-surface-600 leading-relaxed">
                        <p>
                            Many travelers across the GCC choose taxi services over buses or flights when they need door-to-door transportation. Unlike buses that operate on fixed schedules and stop at stations, taxis pick you up from your home, hotel, or office and drive you directly to your destination.
                        </p>
                        <p>
                            Taxi services are especially practical for group travel. Families or colleagues traveling together can share a single vehicle instead of buying multiple bus or flight tickets. Vehicles like the GMC Yukon XL, Mercedes Sprinter, or Coaster can accommodate groups of different sizes with enough space for luggage.
                        </p>
                        <p>
                            Flexibility is another key reason. Taxis are available around the clock and do not require advance airport check-in or fixed departure times. This makes them a practical option for early morning flights, late night arrivals, business meetings with uncertain schedules, or multi-stop journeys within a city.
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── Section 4: Common Travel Questions ───────────────────────── */}
            <section className="section-padding bg-surface-50 border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-8">Common Travel Questions</h2>
                    <div className="space-y-4 max-w-3xl">
                        {travelQuestions.map((item) => (
                            <div key={item.question} className="glass-card p-5">
                                <h3 className="font-semibold text-surface-900 mb-2">{item.question}</h3>
                                <p className="text-surface-600 text-sm leading-relaxed">{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Section 5: Travel Tips ────────────────────────────────────── */}
            <section className="section-padding bg-white border-t border-surface-200">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-8">Travel Tips for GCC Trips</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {travelTips.map((item) => (
                            <div key={item.tip} className="glass-card p-5">
                                <span className="text-2xl block mb-3">{item.icon}</span>
                                <p className="text-sm text-surface-700 leading-relaxed">{item.tip}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
