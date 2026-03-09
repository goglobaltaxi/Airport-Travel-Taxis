export interface EventPage {
    slug: string;
    venueName: string;
    venueType: 'Exhibition Center' | 'Conference Venue' | 'Sports Stadium' | 'Festival Location' | 'Arena' | 'Fairground';
    city: string;
    cityCountry: string;
    district: string;
    approxTravelTime: string;
    description: string;
    longDescription: string;
    features: string[];
    travelTips: string[];
    faq: { question: string; answer: string }[];
    relatedRoutes: { name: string; slug: string; type: 'city' | 'airport' | 'route' }[];
}

export const eventPages: EventPage[] = [
    {
        slug: 'riyadh-season-riyadh',
        venueName: 'Riyadh Season',
        venueType: 'Festival Location',
        city: 'Riyadh',
        cityCountry: 'Saudi Arabia',
        district: 'Multiple Zones (Boulevard City, Winter Wonderland)',
        approxTravelTime: '20–50 minutes depending on the zone',
        description: 'Taxi to Riyadh Season zones. Reliable transportation to Boulevard City, Winter Wonderland, and other festival areas in Riyadh.',
        longDescription: 'Riyadh Season is a massive city-wide entertainment and cultural festival in Riyadh, featuring multiple themed zones across the city. Locations such as Boulevard World, Boulevard City, and various sports and music venues attract millions of visitors. Our taxi service provides easy transfers to any Riyadh Season zone from your home, hotel, or the airport.',
        features: [
            'Multiple themed entertainment zones',
            'International concerts and live performances',
            'Global dining experiences and pop-up markets',
            'Sports events and world-class exhibitions',
            'Cultural shows and family-friendly attractions',
        ],
        travelTips: [
            'Arrive early as traffic near major zones like Boulevard can be heavy.',
            'Confirm which specific zone you are visiting before booking your taxi.',
            'Check the Riyadh Season app for event timings and entry gates.',
            'Allow extra travel time during evening peak hours and weekends.',
            'Note the designated taxi drop-off and pickup areas at each zone.',
        ],
        faq: [
            { question: 'How do I get to Riyadh Season venues by taxi?', answer: 'We provide door-to-door transfers to all Riyadh Season zones. Just specify your pickup location and destination zone.' },
            { question: 'Can I get a taxi from Riyadh Airport to Boulevard City?', answer: 'Yes. We offer direct transfers from King Khalid International Airport to all major festival locations.' },
            { question: 'Is it possible to book a return taxi after an event?', answer: 'Yes. We recommend booking your return trip in advance to avoid long waits after major concerts or shows.' },
            { question: 'Can large groups travel together to Riyadh Season?', answer: 'Yes. We have vans and minibuses available for families and large groups of friends.' },
            { question: 'Do you operate during late-night hours?', answer: 'Yes. Our taxi service is available 24/7, covering late-night events and early morning returns.' },
        ],
        relatedRoutes: [
            { name: 'Riyadh Taxi Service', slug: '/city/riyadh-taxi', type: 'city' },
            { name: 'Riyadh Airport Taxi', slug: '/airport/riyadh-airport-taxi', type: 'airport' },
            { name: 'Riyadh to Jeddah Taxi', slug: '/routes/riyadh-to-jeddah-taxi', type: 'route' },
        ],
    },
    {
        slug: 'expo-city-dubai',
        venueName: 'Expo City Dubai',
        venueType: 'Exhibition Center',
        city: 'Dubai',
        cityCountry: 'United Arab Emirates',
        district: 'Expo Road, Dubai South',
        approxTravelTime: '30–50 minutes from central Dubai',
        description: 'Taxi to Expo City Dubai. Professional transfers to the home of global exhibitions, conferences, and Al Wasl Plaza.',
        longDescription: 'Expo City Dubai is a major global destination for exhibitions, business conferences, and cultural events. Built on the legacy of Expo 2020, it houses the Dubai Exhibition Centre and numerous pavilions. Our taxi service ensures a smooth journey from any part of Dubai or the airport directly to the Expo City entrances.',
        features: [
            'Dubai Exhibition Centre (DEC)',
            'Al Wasl Plaza and themed pavilions',
            'Business and innovation hubs',
            'Regular international trade fairs and summits',
            'Sustainable city infrastructure and entertainment zones',
        ],
        travelTips: [
            'Expo City is a large site; specify if you need a specific pavilion or hall entrance.',
            'The drive from Dubai Marina or JBR is shorter than from Downtown Dubai.',
            'Follow signage for the designated taxi and chauffeur drop-off zones.',
            'Check for parking restrictions during major global summits or events.',
            'Consider booking your return trip in advance for large exhibition days.',
        ],
        faq: [
            { question: 'How long does a taxi take from Dubai Airport to Expo City?', answer: 'The journey typically takes 40 to 50 minutes depending on traffic conditions.' },
            { question: 'Can I get a taxi from any hotel in Dubai to Expo City?', answer: 'Yes. We pick up from all hotels and residences across Dubai and the UAE.' },
            { question: 'Are there group vehicles for business delegations?', answer: 'Yes. We provide Mercedes Sprinters and large buses for corporate groups.' },
            { question: 'Can I travel from Abu Dhabi to Expo City Dubai?', answer: 'Yes. We provide intercity transfers from Abu Dhabi directly to Expo City.' },
            { question: 'Is the service available during major exhibitions?', answer: 'Yes. We scale our services to provide reliable transport during peak event periods.' },
        ],
        relatedRoutes: [
            { name: 'Dubai Taxi Service', slug: '/city/dubai-taxi', type: 'city' },
            { name: 'Dubai Airport Taxi', slug: '/airport/dubai-airport-taxi', type: 'airport' },
            { name: 'Dubai to Abu Dhabi Taxi', slug: '/routes/dubai-to-abu-dhabi-taxi', type: 'route' },
        ],
    },
    {
        slug: 'dubai-world-trade-centre-dubai',
        venueName: 'Dubai World Trade Centre',
        venueType: 'Conference Venue',
        city: 'Dubai',
        cityCountry: 'United Arab Emirates',
        district: 'Sheikh Zayed Road',
        approxTravelTime: '15–30 minutes from most central areas',
        description: 'Taxi to Dubai World Trade Centre (DWTC). Direct transfers for trade shows, exhibitions, and corporate events on Sheikh Zayed Road.',
        longDescription: 'Dubai World Trade Centre is the region\'s premier destination for exhibitions and trade fairs. Located in the heart of the business district on Sheikh Zayed Road, it hosts major events like GITEX and Gulfood. Our taxi service provides punctual transfers for exhibitors and visitors from all over the city.',
        features: [
            'Multiple exhibition halls and conference rooms',
            'Central location in Dubai\'s business district',
            'Home to major international trade shows annually',
            'Direct access to Sheikh Zayed Road',
            'Extensive dining and meeting facilities on-site',
        ],
        travelTips: [
            'DWTC is located on Sheikh Zayed Road; allow for rush hour traffic.',
            'Specify the hall number to your driver for the closest drop-off point.',
            'Arrival is recommended at least 30 minutes before your meeting or show start.',
            'Use the designated taxi queues or pre-book for a smoother departure.',
            'Check event-specific parking info if you are also bringing gear.',
        ],
        faq: [
            { question: 'Where is the best place to be dropped off at DWTC?', answer: 'The main entrance on Sheikh Zayed Road or the specific hall entrance listed on your event badge is best.' },
            { question: 'Can I get a taxi from Dubai Airport to DWTC?', answer: 'Yes. It is a 15-20 minute drive from DXB Airport to the Trade Centre.' },
            { question: 'Are executive vehicles available for business trips?', answer: 'Yes. We offer Mercedes S-Class and BMW 7 Series for corporate travel.' },
            { question: 'Can groups book a minibus to DWTC?', answer: 'Yes. We have Mercedes Vito and Sprinter vans for group transfers.' },
            { question: 'Is it easy to find a taxi after an event ends?', answer: 'Events can be busy; we recommend pre-booking your return transfer for a guaranteed pickup.' },
        ],
        relatedRoutes: [
            { name: 'Dubai Taxi Service', slug: '/city/dubai-taxi', type: 'city' },
            { name: 'Dubai Airport Taxi', slug: '/airport/dubai-airport-taxi', type: 'airport' },
            { name: 'Dubai to Sharjah Taxi', slug: '/routes/dubai-to-sharjah-taxi', type: 'route' },
        ],
    },
    {
        slug: 'kuwait-international-fairground-kuwait',
        venueName: 'Kuwait International Fairground',
        venueType: 'Fairground',
        city: 'Kuwait City',
        cityCountry: 'Kuwait',
        district: 'Mishref',
        approxTravelTime: '15–30 minutes from central Kuwait City',
        description: 'Taxi to Kuwait International Fairground in Mishref. Transfers for exhibitions, consumer fairs, and trade shows.',
        longDescription: 'The Kuwait International Fairground is the largest exhibition center in Kuwait, located in the Mishref area. It hosts numerous local and international consumer fairs, trade shows, and specialized exhibitions throughout the year. Our taxi service offers reliable pickups from all Kuwait City districts and the airport.',
        features: [
            'Multiple large-scale exhibition halls',
            'Vast outdoor exhibition spaces',
            'Major center for Kuwaiti trade and consumer events',
            'Ample space for large-scale fairs and festivals',
            'Convenient location in the Mishref district',
        ],
        travelTips: [
            'Fairground events can attract large crowds; arrive early for parking/drop-off.',
            'Check which hall your specific event is located in for the closest drop-off.',
            'Morning hours on weekdays and evenings on weekends are the busiest.',
            'Keep your driver contact info handy for your return pickup.',
            'Confirm the drop-off gate when you arrive to ease your return trip.',
        ],
        faq: [
            { question: 'How do I get to the Fairground from Kuwait City center?', answer: 'We offer direct taxi transfers from any area in Kuwait City to the Fairground in Mishref.' },
            { question: 'Is airport pickup available to the Fairground?', answer: 'Yes. We provide direct transfers from Kuwait International Airport (KWI) to the Fairground.' },
            { question: 'Can I book a van for our exhibition team?', answer: 'Yes. We have vans available for teams and groups traveling together.' },
            { question: 'Is it possible to arrange a round-trip?', answer: 'Yes. You can book both arrival and return transfers in one request.' },
            { question: 'Do you operate on public holidays?', answer: 'Yes. Our service is available 24/7, including holidays when fairs are often held.' },
        ],
        relatedRoutes: [
            { name: 'Kuwait City Taxi Service', slug: '/city/kuwait-city-taxi', type: 'city' },
            { name: 'Kuwait Airport Taxi', slug: '/airport/kuwait-airport-taxi', type: 'airport' },
            { name: 'Kuwait to Dammam Taxi', slug: '/routes/kuwait-to-dammam-taxi', type: 'route' },
        ],
    },
    {
        slug: 'oman-convention-exhibition-centre-muscat',
        venueName: 'Oman Convention & Exhibition Centre',
        venueType: 'Conference Venue',
        city: 'Muscat',
        cityCountry: 'Oman',
        district: 'Al Irfan, near Airport',
        approxTravelTime: '10–20 minutes from Muscat Airport',
        description: 'Taxi to Oman Convention & Exhibition Centre (OCEC) in Muscat. Direct transfers for international conferences, summits, and exhibitions.',
        longDescription: 'The Oman Convention & Exhibition Centre (OCEC) is a state-of-the-art venue located near Muscat International Airport in the Al Irfan district. It hosts global summits, trade fairs, and theatrical performances. Our taxi service provides convenient door-to-door transport for delegates and visitors.',
        features: [
            'State-of-the-art auditorium and exhibition halls',
            'Modern conference and meeting facilities',
            'Close proximity to Muscat International Airport',
            'Regular venue for international conventions',
            'Architectural landmark in the Al Irfan district',
        ],
        travelTips: [
            'The OCEC is very close to the airport; allow 10-15 minutes for the drive.',
            'Confirm whether your event is in the Exhibition Hall or the Convention building.',
            'Nearby hotels are often used for delegates; we provide transfers from all.',
            'Arrive early for international summits to clear security checks.',
            'Pre-book for evening shows or theater performances.',
        ],
        faq: [
            { question: 'How far is OCEC from the airport?', answer: 'It is very close, typically a 10-minute drive from Muscat International Airport.' },
            { question: 'Can I get a taxi from any hotel in Muscat to OCEC?', answer: 'Yes. We pick up from all hotels, including those in Ruwi, Qurum, and Al Khuwair.' },
            { question: 'Are executive vehicles available for VIP delegates?', answer: 'Yes. We offer Mercedes and BMW models for executive delegate transport.' },
            { question: 'Can multiple people share a van to the venue?', answer: 'Yes. We have vans available for shared group travel to conferences.' },
            { question: 'Is return transport easy to arrange?', answer: 'Yes. You can pre-book your return to your hotel or the airport for a fixed time.' },
        ],
        relatedRoutes: [
            { name: 'Muscat Airport Taxi', slug: '/airport/muscat-airport-taxi', type: 'airport' },
            { name: 'Muscat to Dubai Taxi', slug: '/routes/muscat-to-dubai-taxi', type: 'route' },
            { name: 'Dubai Taxi Service', slug: '/city/dubai-taxi', type: 'city' },
        ],
    },
];
