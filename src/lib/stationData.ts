export interface StationPage {
    slug: string;
    stationName: string;
    stationType: 'Railway Station' | 'Metro Station' | 'Public Transport Hub' | 'High-Speed Rail Station';
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

export const stationPages: StationPage[] = [
    {
        slug: 'riyadh-train-station-riyadh',
        stationName: 'Riyadh Train Station',
        stationType: 'Railway Station',
        city: 'Riyadh',
        cityCountry: 'Saudi Arabia',
        locationDetails: 'Eastern Riyadh, near the intersection of Prince Mansour bin Abdulaziz Road',
        approxTravelTime: '20–40 minutes from central Riyadh',
        description: 'Taxi to Riyadh Train Station (SAR). Direct transfers for passengers traveling on the North-South Railway from Riyadh.',
        longDescription: 'Riyadh Train Station is a major railway hub in Saudi Arabia, serving as a primary terminal for the North-South Railway operated by SAR. It connects the capital city with northern regions like Qassim and Hail. Our taxi service provides punctual and reliable transfers from any part of Riyadh directly to the station entrance.',
        features: [
            'Primary terminal for the North-South Railway line',
            'Connects Riyadh with Qassim, Hail, and Al-Jouf',
            'Modern terminal facilities with waiting areas and cafes',
            'Central hub for national rail travel in Saudi Arabia',
            'Located with easy access to the city’s major road networks',
        ],
        travelTips: [
            'Arrive at the station at least 30 to 45 minutes before your train departure.',
            'Confirm which specific platform or entrance you need with your driver.',
            'Traffic in Riyadh can be heavy during peak hours; allow extra travel time.',
            'Keep your digital or printed train tickets ready for inspection at the gates.',
            'Pre-book your arrival taxi to ensure you meet your train on time.',
        ],
        faq: [
            { question: 'How do I reach Riyadh Train Station by taxi?', answer: 'We offer direct transfers from any hotel, residence, or office in Riyadh to the station.' },
            { question: 'Is airport pickup available to the train station?', answer: 'Yes. We provide direct transfers from King Khalid International Airport (RUH) to the station.' },
            { question: 'Can large groups travel together to the station?', answer: 'Yes. We have high-capacity vans and SUVs available for families and travel groups.' },
            { question: 'How long is the journey from central Riyadh?', answer: 'The drive typically takes 20 to 35 minutes depending on current traffic conditions.' },
            { question: 'Can I book a return taxi for when my train arrives?', answer: 'Yes. You can schedule a pickup for your arrival time to ensure a vehicle is waiting.' },
        ],
        relatedRoutes: [
            { name: 'Riyadh Taxi Service', slug: '/city/riyadh-taxi', type: 'city' },
            { name: 'Riyadh Airport Taxi', slug: '/airport/riyadh-airport-taxi', type: 'airport' },
            { name: 'Taxi to Riyadh Season', slug: '/taxi-to-event/riyadh-season-riyadh', type: 'route' },
        ],
    },
    {
        slug: 'dubai-metro-burj-khalifa-station-dubai',
        stationName: 'Burj Khalifa/Dubai Mall Metro Station',
        stationType: 'Metro Station',
        city: 'Dubai',
        cityCountry: 'United Arab Emirates',
        locationDetails: 'Sheikh Zayed Road, near Downtown Dubai',
        approxTravelTime: '15–30 minutes from most central areas',
        description: 'Taxi to Burj Khalifa/Dubai Mall Metro Station. Direct transfers to the busiest hub on the Dubai Metro Red Line.',
        longDescription: 'The Burj Khalifa/Dubai Mall Metro Station is a key public transport hub on the Red Line of the Dubai Metro. It provides direct access to the Burj Khalifa, Dubai Mall, and the surrounding Downtown Dubai area. Our taxi service offers convenient pickups and drop-offs for passengers transitioning between the metro system and private road transport.',
        features: [
            'Busiest station on the Dubai Metro Red Line',
            'Direct elevated walkway access to The Dubai Mall',
            'Prime location on Sheikh Zayed Road near Downtown Dubai',
            'Connection point for tourists and business commuters',
            'Modern infrastructure with air-conditioned walkways',
        ],
        travelTips: [
            'This station is very busy; allow extra time for drop-off during peak periods.',
            'Confirm your pickup point (Landside or Seaside) with your driver.',
            'Use the designated taxi and passenger drop-off zones on Sheikh Zayed Road.',
            'Consider the time required to walk through the link bridge if heading to the mall.',
            'Check the metro operating hours if you are planning late-night travel.',
        ],
        faq: [
            { question: 'How do I reach the Burj Khalifa Metro Station?', answer: 'We provide direct taxi transfers from any Dubai location to the designated station drop-off zones.' },
            { question: 'Can I get a taxi from Dubai Airport to this station?', answer: 'Yes. It is a 15-20 minute drive from DXB Airport to the station.' },
            { question: 'Are there vehicles for groups with luggage?', answer: 'Yes. SUVs and passenger vans are available for travelers with shopping or suitcases.' },
            { question: 'What is the best time to arrive?', answer: 'Morning and evening rush hours are the busiest; mid-day travel is usually faster.' },
            { question: 'Can I schedule a return pickup from the station?', answer: 'Yes. You can pre-book a pickup from the designated taxi area at the station.' },
        ],
        relatedRoutes: [
            { name: 'Dubai Taxi Service', slug: '/city/dubai-taxi', type: 'city' },
            { name: 'Dubai Airport Taxi', slug: '/airport/dubai-airport-taxi', type: 'airport' },
            { name: 'Taxi to Dubai Mall', slug: '/taxi-to-mall/dubai-mall-dubai', type: 'route' },
        ],
    },
    {
        slug: 'doha-metro-station-doha',
        stationName: 'Msheireb Metro Station',
        stationType: 'Public Transport Hub',
        city: 'Doha',
        cityCountry: 'Qatar',
        locationDetails: 'Msheireb Downtown Doha',
        approxTravelTime: '10–25 minutes from West Bay and Hamad Airport',
        description: 'Taxi to Msheireb Metro Station Doha. Professional transfers to the central interchange hub of the Doha Metro network.',
        longDescription: 'Msheireb Metro Station is the flagship station of the Doha Metro and the world\'s largest underground metro hub. It serves as the primary interchange between the Red, Green, and Gold lines. Our taxi service provides efficient door-to-door transportation for commuters and visitors needing reliable access to this central transit hub.',
        features: [
            'Primary interchange hub for all three Doha Metro lines',
            'Centrally located in the modern Msheireb Downtown Doha district',
            'One of the largest and most advanced metro stations globally',
            'Direct connections to major commercial and cultural districts',
            'Modern terminal with extensive retail and service facilities',
        ],
        travelTips: [
            'Msheireb is a central station; follow city traffic updates during rush hours.',
            'Confirm the specific entrance gate or street level drop-off with your driver.',
            'Check your line color and platform before entering the hub.',
            'Allow at least 15 minutes to navigate the station during peak times.',
            'Pre-book your taxi for a smooth transition from the metro to your destination.',
        ],
        faq: [
            { question: 'How do I reach Msheireb Metro Station?', answer: 'We offer direct taxi transfers from any location in Doha to the Msheireb hub.' },
            { question: 'Can I book a taxi from Hamad Airport to the station?', answer: 'Yes. Direct transfers are available from Hamad International Airport (DOH).' },
            { question: 'Are vehicles available for groups of commuters?', answer: 'Yes. SUVs and high-capacity vans are available for larger groups.' },
            { question: 'How long is the journey from West Bay?', answer: 'The drive typically takes 10 to 15 minutes depending on traffic.' },
            { question: 'Can I arrange a pickup for when I finish my metro trip?', answer: 'Yes. You can schedule a pickup from the street level entrance of the station.' },
        ],
        relatedRoutes: [
            { name: 'Doha Taxi Service', slug: '/city/doha-taxi', type: 'city' },
            { name: 'Doha Airport Taxi', slug: '/airport/doha-airport-taxi', type: 'airport' },
            { name: 'Taxi to Msheireb', slug: '/taxi-to-business/msheireb-downtown-doha', type: 'route' },
        ],
    },
    {
        slug: 'kuwait-railway-station-kuwait-city',
        stationName: 'Kuwait Central Station',
        stationType: 'Railway Station',
        city: 'Kuwait City',
        cityCountry: 'Kuwait',
        locationDetails: 'Central Kuwait City, serving the national rail network',
        approxTravelTime: '15–30 minutes from central districts',
        description: 'Taxi to Kuwait Central Station. Reliable transportation to the primary terminal for rail travel and transport links in Kuwait.',
        longDescription: 'Kuwait Central Station is the primary hub for railway services and public transport connections in the country. It serves as a vital terminal for passengers moving between Kuwait City and regional destinations. Our taxi service provides comfortable and safe transportation for travelers from hotels, airports, and residences directly to the station.',
        features: [
            'Primary hub for the national railway system',
            'Centrally located for easy access to Kuwait City districts',
            'Terminal for regional rail and major transport links',
            'Equipped with modern ticketing and waiting facilities',
            'Key connection point for national and regional travel',
        ],
        travelTips: [
            'Arrive at the station early, especially before scheduled train departures.',
            'Confirm the specific entrance or ticket hall with your driver.',
            'Traffic in central Kuwait City can be heavy during peak morning and evening hours.',
            'Ensure you have your travel documents and tickets ready for the station staff.',
            'Book your arrival taxi in advance to ensure you reach the platform on time.',
        ],
        faq: [
            { question: 'How do I get to Kuwait Central Station?', answer: 'We provide direct transfers from any area in Kuwait City to the station entrance.' },
            { question: 'Is airport pickup available to the station?', answer: 'Yes. We offer direct transfers from Kuwait International Airport (KWI).' },
            { question: 'Can groups travel together to the station?', answer: 'Yes. SUVs and passenger vans are available for family and group travel.' },
            { question: 'How long from the Salmiya district?', answer: 'The journey from Salmiya typically takes 20 to 30 minutes.' },
            { question: 'Can I book a return taxi for my arrival?', answer: 'Yes. You can schedule a pickup to ensure a vehicle is waiting at the station.' },
        ],
        relatedRoutes: [
            { name: 'Kuwait City Taxi Service', slug: '/city/kuwait-city-taxi', type: 'city' },
            { name: 'Kuwait Airport Taxi', slug: '/airport/kuwait-airport-taxi', type: 'airport' },
            { name: 'Taxi to Avenues Mall', slug: '/taxi-to-mall/avenues-mall-kuwait-city', type: 'route' },
        ],
    },
    {
        slug: 'bahrain-central-station-manama',
        stationName: 'Manama Central Transport Station',
        stationType: 'Public Transport Hub',
        city: 'Manama',
        cityCountry: 'Bahrain',
        locationDetails: 'Central Manama near the Diplomatic Area',
        approxTravelTime: '15–30 minutes from Bahrain Airport',
        description: 'Taxi to Manama Central Transport Station. Professional transfers to the primary hub for public transportation in Bahrain’s capital.',
        longDescription: 'Manama Central Transport Station is the main terminal for public transit services in the Kingdom of Bahrain. It connects the capital with all other regions and serves as a primary hub for cross-city and intercity travel. Our taxi service provides reliable door-to-door transportation for passengers using the central hub from any part of the island.',
        features: [
            'Primary hub for Bahrain’s national public transport network',
            'Centrally located near the business and diplomatic districts',
            'Terminal for cross-city and regional transit links',
            'Modern facilities with visitor information and waiting zones',
            'Key interchange point for residents and tourists',
        ],
        travelTips: [
            'Central Manama can experience heavy traffic during business hours; plan accordingly.',
            'Confirm which specific zone of the terminal you need for your departure.',
            'Arriving 20 minutes early is recommended during peak transit times.',
            'Ensure you are aware of the station entrance closest to your pickup zone.',
            'Pre-book your return taxi to ensure a dedicated vehicle is ready after your trip.',
        ],
        faq: [
            { question: 'How do I reach the Manama Central Station?', answer: 'We provide direct transfers from any district or hotel in Bahrain to the station.' },
            { question: 'Can I get a taxi from Bahrain Airport to the station?', answer: 'Yes. Direct transfers are available from Bahrain International Airport (BAH).' },
            { question: 'Are there vehicles for large groups?', answer: 'Yes. High-capacity vans and SUVs are available for travel groups.' },
            { question: 'How long is the journey from Juffair?', answer: 'The drive from Juffair typically takes 10 to 15 minutes.' },
            { question: 'Can I book a return transfer from the station?', answer: 'Yes. You can schedule a pickup from the station’s designated passenger area.' },
        ],
        relatedRoutes: [
            { name: 'Bahrain Airport Taxi', slug: '/airport/bahrain-airport-taxi', type: 'airport' },
            { name: 'Manama to Al Khobar Taxi', slug: '/routes/manama-to-al-khobar-taxi', type: 'route' },
            { name: 'Taxi to City Centre Bahrain', slug: '/taxi-to-mall/city-centre-bahrain-manama', type: 'route' },
        ],
    },
    {
        slug: 'haramain-train-station-jeddah',
        stationName: 'Jeddah Central Train Station',
        stationType: 'High-Speed Rail Station',
        city: 'Jeddah',
        cityCountry: 'Saudi Arabia',
        locationDetails: 'Sulaymaniyah, Jeddah',
        approxTravelTime: '15–30 minutes from central Jeddah and the airport',
        description: 'Taxi to Jeddah Central Train Station (Haramain). Direct transfers to the high-speed rail terminal connecting Jeddah with Makkah and Medina.',
        longDescription: 'Jeddah Central Train Station is a state-of-the-art terminal for the Haramain High-Speed Railway. It serves as a vital link for pilgrims and travelers moving between the holy cities of Makkah and Medina and King Abdulaziz International Airport. Our taxi service provides PUNCTUAL and professional transfers for passengers arriving at or departing from this major rail hub.',
        features: [
            'Major terminal for the Haramain High-Speed Railway line',
            'Connects Jeddah with the holy cities of Makkah and Medina',
            'Modern terminal with high-standard facilities and extensive shopping',
            'Direct high-speed link to King Abdulaziz International Airport',
            'Convenient location in the Sulaymaniyah district of Jeddah',
        ],
        travelTips: [
            'Arrive at least 45 to 60 minutes before your high-speed train departure.',
            'Confirm the specific entrance gate for the Haramain terminal with your driver.',
            'Traffic on the way to Sulaymaniyah can be heavy; allow extra time during evening hours.',
            'Have your digital boarding pass ready for the station security and gates.',
            'Pre-book your taxi to avoid waiting after arriving on a high-speed train.',
        ],
        faq: [
            { question: 'How do I reach the Jeddah Haramain Station?', answer: 'We offer direct taxi transfers from any hotel or residence in Jeddah to the station.' },
            { question: 'Can I book a taxi from Jeddah Airport to the station?', answer: 'Yes. We provide direct transfers from King Abdulaziz International Airport (JED).' },
            { question: 'Can large groups travel together to the station?', answer: 'Yes. We have high-capacity passenger vans available for families and pilgrims.' },
            { question: 'How long is the journey from the Corniche?', answer: 'The drive typically takes 20 to 30 minutes depending on traffic.' },
            { question: 'Can I schedule a return pickup from the station?', answer: 'Yes. You can pre-book a vehicle to be ready when your train arrives.' },
        ],
        relatedRoutes: [
            { name: 'Jeddah Taxi Service', slug: '/city/jeddah-taxi', type: 'city' },
            { name: 'Jeddah Airport Taxi', slug: '/airport/jeddah-airport-taxi', type: 'airport' },
            { name: 'Jeddah to Makkah Taxi', slug: '/routes/jeddah-to-makkah-taxi', type: 'route' },
        ],
    },
];
