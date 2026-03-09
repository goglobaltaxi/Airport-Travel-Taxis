export interface TerminalPage {
    slug: string;
    airportName: string;
    terminalNumber: string;
    terminalType: 'Departure Terminal' | 'Arrival Terminal' | 'International Terminal' | 'Multi-purpose Terminal';
    city: string;
    cityCountry: string;
    locationDetails: string;
    approxTravelTime: string;
    description: string;
    longDescription: string;
    features: string[];
    travelTips: string[];
    faq: { question: string; answer: string }[];
    relatedRoutes: { name: string; slug: string; type: 'city' | 'airport' | 'route' }[];
}

export const terminalPages: TerminalPage[] = [
    {
        slug: 'dubai-airport-terminal-3-dubai',
        airportName: 'Dubai International Airport',
        terminalNumber: '3',
        terminalType: 'International Terminal',
        city: 'Dubai',
        cityCountry: 'United Arab Emirates',
        locationDetails: 'Garhoud area, Dubai',
        approxTravelTime: '15–30 minutes from central Dubai',
        description: 'Taxi to Dubai Airport Terminal 3. Dedicated transportation to the primary terminal for Emirates and international flights.',
        longDescription: 'Dubai International Airport Terminal 3 is one of the largest and most advanced airport terminals in the world, serving as the exclusive hub for Emirates airline and various international partners. Our taxi service provides reliable door-to-door transportation for passengers departing from or arriving at this major gateway, ensuring on-time drop-offs and seamless collections.',
        features: [
            'Exclusive hub for Emirates and Qantas flights',
            'Multiple concourses with high-capacity boarding gates',
            'Direct access to the Dubai Metro Red Line',
            'Extensive retail, dining, and passenger lounge facilities',
            'State-of-the-art check-in and baggage handling systems',
        ],
        travelTips: [
            'Arrive at the terminal at least 3 hours before international departures.',
            'Confirm your flight departs from Terminal 3 before booking your taxi.',
            'The terminal is very large; allow extra time for navigating to your gate.',
            'Peak travel hours are often late at night and early in the morning.',
            'Pre-book your arrival taxi to avoid waiting in terminal queues.',
        ],
        faq: [
            { question: 'How do I reach Dubai Airport Terminal 3?', answer: 'We offer direct taxi transfers from any hotel or residence in Dubai to Terminal 3.' },
            { question: 'Can I book a taxi from Abu Dhabi to Terminal 3?', answer: 'Yes. We provide cross-city transfers from Abu Dhabi directly to the terminal.' },
            { question: 'Are vehicles available for groups with heavy luggage?', answer: 'Yes. SUVs and high-capacity vans like the GMC and Hiace are available.' },
            { question: 'How long is the journey from Downtown Dubai?', answer: 'The drive typically takes 15 to 25 minutes depending on traffic.' },
            { question: 'Can I schedule a return pickup from arrivals?', answer: 'Yes. You can pre-book a vehicle to be ready at the Terminal 3 arrival zone.' },
        ],
        relatedRoutes: [
            { name: 'Dubai Taxi Service', slug: '/city/dubai-taxi', type: 'city' },
            { name: 'Dubai Airport Taxi', slug: '/airport/dubai-airport-taxi', type: 'airport' },
            { name: 'Taxi to Dubai Mall', slug: '/taxi-to-mall/dubai-mall-dubai', type: 'route' },
        ],
    },
    {
        slug: 'riyadh-airport-terminal-1-riyadh',
        airportName: 'King Khalid International Airport',
        terminalNumber: '1',
        terminalType: 'International Terminal',
        city: 'Riyadh',
        cityCountry: 'Saudi Arabia',
        locationDetails: 'Northern Riyadh, near Airport Road',
        approxTravelTime: '30–45 minutes from central Riyadh',
        description: 'Taxi to Riyadh Airport Terminal 1. Reliable transfers to the international terminal at King Khalid International Airport (RUH).',
        longDescription: 'Terminal 1 at King Khalid International Airport in Riyadh is the primary gateway for international air travel in and out of the Saudi capital. It serves a wide range of global airlines. Our taxi service offers professional and punctual transportation for international travelers, ensuring a comfortable journey from your location directly to the terminal doors.',
        features: [
            'Primary gateway for international airlines in Riyadh',
            'Serves major global carriers and international routes',
            'Modern terminal facilities with passenger services and retail',
            'Located with easy access to the main Riyadh city network',
            'Key transport hub for international business and leisure travel',
        ],
        travelTips: [
            'Arrive at least 3 to 4 hours before your international flight check-in.',
            'Confirm whether your airline is operating from Terminal 1 or Terminal 2.',
            'Allow extra travel time during Riyadh evening rush hours (5 PM - 8 PM).',
            'Ensure you have your passport and flight booking ready for inspection.',
            'Pre-book your taxi to avoid peak-hour transit delays in North Riyadh.',
        ],
        faq: [
            { question: 'How do I reach Riyadh Airport Terminal 1?', answer: 'We provide direct transfers from all Riyadh districts to Terminal 1.' },
            { question: 'Is pickup available from central Riyadh hotels?', answer: 'Yes. We offer door-to-door service from all major hotels in the city.' },
            { question: 'Are there vehicles for families with many suitcases?', answer: 'Yes. We have GMC and Mercedes Vito vans suitable for family luggage.' },
            { question: 'How long from the Olaya district?', answer: 'The drive from Olaya typically takes 30 to 40 minutes.' },
            { question: 'Can I schedule a return journey from the terminal?', answer: 'Yes. You can pre-book a pickup for when you arrive back in Riyadh.' },
        ],
        relatedRoutes: [
            { name: 'Riyadh Taxi Service', slug: '/city/riyadh-taxi', type: 'city' },
            { name: 'Riyadh Airport Taxi', slug: '/airport/riyadh-airport-taxi', type: 'airport' },
            { name: 'Taxi to Riyadh Season', slug: '/taxi-to-event/riyadh-season-riyadh', type: 'route' },
        ],
    },
    {
        slug: 'hamad-airport-terminal-doha',
        airportName: 'Hamad International Airport',
        terminalNumber: 'Main',
        terminalType: 'Multi-purpose Terminal',
        city: 'Doha',
        cityCountry: 'Qatar',
        locationDetails: 'Hamad Airport, Doha',
        approxTravelTime: '15–30 minutes from central Doha',
        description: 'Taxi to Hamad Airport Terminal. Professional transfers to the world-renowned terminal at Hamad International Airport (DOH).',
        longDescription: 'Hamad International Airport features a singular, expansive, and high-tech terminal building that serves as the hub for Qatar Airways and all international flights to Doha. Our taxi service provides efficient and comfortable transportation for passengers traveling to this award-winning facility for departures or arrivals, covering all Doha districts and hotels.',
        features: [
            'Single integrated terminal for all international and domestic flights',
            'Global hub for Qatar Airways and international partners',
            'Award-winning architecture with extensive passenger amenities',
            'Direct connection to the Doha Metro and major highways',
            'Advanced biometric and security screening systems',
        ],
        travelTips: [
            'Arrive at least 3 hours before your scheduled international departure.',
            'The terminal is extensive; check your gate number as soon as you arrive.',
            'Morning and late-evening periods are the busiest times at the terminal.',
            'Inform your driver if you are heading to departures or a specific VIP area.',
            'Use the pre-paid booking service for a guaranteed on-time pickup.',
        ],
        faq: [
            { question: 'How do I reach Hamad Airport Terminal by taxi?', answer: 'We offer direct transfers from any location in Doha to the terminal.' },
            { question: 'Can I book a taxi from West Bay to the airport?', answer: 'Yes. We provide direct pickups from West Bay and the Pearl area.' },
            { question: 'Are SUVs available for large amounts of luggage?', answer: 'Yes. Cadillac Escalade and GMC models are available for heavy luggage.' },
            { question: 'How long from Msheireb Downtown?', answer: 'The journey typically takes 15 to 20 minutes depending on traffic.' },
            { question: 'Can I schedule a return pickup from the airport?', answer: 'Yes. You can pre-book a vehicle for your arrival at the terminal.' },
        ],
        relatedRoutes: [
            { name: 'Doha Taxi Service', slug: '/city/doha-taxi', type: 'city' },
            { name: 'Doha Airport Taxi', slug: '/airport/doha-airport-taxi', type: 'airport' },
            { name: 'Taxi to Msheireb', slug: '/taxi-to-station/doha-metro-station-doha', type: 'route' },
        ],
    },
    {
        slug: 'abu-dhabi-airport-terminal-1-abu-dhabi',
        airportName: 'Zayed International Airport',
        terminalNumber: '1',
        terminalType: 'International Terminal',
        city: 'Abu Dhabi',
        cityCountry: 'United Arab Emirates',
        locationDetails: 'Zayed International Airport, Abu Dhabi',
        approxTravelTime: '20–35 minutes from Abu Dhabi city center',
        description: 'Taxi to Abu Dhabi Airport Terminal 1. Reliable transportation to the international terminal at Zayed international Airport (AUH).',
        longDescription: 'Terminal 1 at Zayed International Airport (formerly Abu Dhabi International) serves many international airlines and regional flights. Our taxi service offers professional door-to-door transportation for passengers needing to reach this terminal from any district in Abu Dhabi or from neighboring cities. We ensure punctual arrival for your flight check-in.',
        features: [
            'Key terminal for regional and international air carriers',
            'Integrated facilities with efficient check-in and security',
            'Centrally located within the Zayed international Airport complex',
            'Convenient access to Lounges and passenger service centers',
            'Primary link for regional travel in the UAE capital',
        ],
        travelTips: [
            'Arrive at the terminal at least 3 hours before check-in for international flights.',
            'Confirm with your airline if you are flying from Terminal 1 or Terminal A.',
            'Allow extra time if traveling from Dubai or other emirates (approx 1.5 hours).',
            'The terminal is busy during holiday periods; pre-book to ensure availability.',
            'Notify your driver if you require assistance with heavy luggage upon arrival.',
        ],
        faq: [
            { question: 'How do I reach Abu Dhabi Airport Terminal 1?', answer: 'We provide direct transfers from all Abu Dhabi districts and hotels to Terminal 1.' },
            { question: 'Can I get a taxi from Dubai to Abu Dhabi Terminal 1?', answer: 'Yes. We offer cross-emirate transfers directly to the terminal.' },
            { question: 'Are there vehicles for families with suitcases?', answer: 'Yes. Our large SUVs and vans are ideal for family travel with luggage.' },
            { question: 'How long from Saadiyat Island?', answer: 'The drive typically takes 25 to 35 minutes depending on traffic.' },
            { question: 'Can I book a return transfer from the terminal?', answer: 'Yes. You can schedule a pickup to meet you at the arrival zone.' },
        ],
        relatedRoutes: [
            { name: 'Abu Dhabi Taxi Service', slug: '/city/abu-dhabi-taxi', type: 'city' },
            { name: 'Abu Dhabi Airport Taxi', slug: '/airport/abu-dhabi-airport-taxi', type: 'airport' },
            { name: 'Taxi to Ferrari World', slug: '/taxi-to-attraction/ferrari-world-abu-dhabi', type: 'route' },
        ],
    },
    {
        slug: 'kuwait-airport-terminal-4-kuwait',
        airportName: 'Kuwait International Airport',
        terminalNumber: '4',
        terminalType: 'International Terminal',
        city: 'Kuwait City',
        cityCountry: 'Kuwait',
        locationDetails: 'Farwaniya District, Kuwait',
        approxTravelTime: '15–30 minutes from central Kuwait City',
        description: 'Taxi to Kuwait Airport Terminal 4. Dedicated transfers to the exclusive terminal for Kuwait Airways passengers.',
        longDescription: 'Terminal 4 at Kuwait International Airport is a modern, dedicated facility serving passengers flying with Kuwait Airways. It offers a streamlined travel experience with exclusive check-in and lounge facilities. Our taxi service provides reliable transportation from all residential and business areas in Kuwait directly to the Terminal 4 departures level.',
        features: [
            'Exclusive terminal for Kuwait Airways international departures',
            'Modern terminal design for efficient passenger flow',
            'Dedicated check-in areas and exclusive passenger lounges',
            'Centrally located within the Kuwait Airport complex in Farwaniya',
            'Streamlined security and baggage handling for national carrier flights',
        ],
        travelTips: [
            'Arrive at the terminal 3 hours before your scheduled flight departure.',
            'Confirmation of travel on Kuwait Airways is essential for Terminal 4 use.',
            'Traffic on the Airport Road can be heavy during peak morning and evening hours.',
            'Check your gate number as the terminal layout is designed for quick transit.',
            'Pre-book your taxi to ensure you reach the departures level without delay.',
        ],
        faq: [
            { question: 'How do I reach Kuwait Airport Terminal 4?', answer: 'We offer direct taxi transfers from any location in Kuwait City to Terminal 4.' },
            { question: 'Can I book a taxi from Salmiya to the airport?', answer: 'Yes. We provide direct pickups from Salmiya and Hawally districts.' },
            { question: 'Are vehicles available for groups with heavy luggage?', answer: 'Yes. Mercedes Vito and Sprinter vans are available for larger groups.' },
            { question: 'How long from the city center?', answer: 'The journey typically takes 15 to 25 minutes depending on traffic.' },
            { question: 'Can I schedule a return pickup from arrivals?', answer: 'Yes. You can pre-book a vehicle to be ready at the arrivals gate.' },
        ],
        relatedRoutes: [
            { name: 'Kuwait City Taxi Service', slug: '/city/kuwait-city-taxi', type: 'city' },
            { name: 'Kuwait Airport Taxi', slug: '/airport/kuwait-airport-taxi', type: 'airport' },
            { name: 'Taxi to Kuwait Station', slug: '/taxi-to-station/kuwait-railway-station-kuwait-city', type: 'route' },
        ],
    },
];
