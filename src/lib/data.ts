// ─── Fleet Vehicles ────────────────────────────────────────────────
import { extraCities, extraRoutes, extraAirports, borderCrossings } from './extendedData';

// Deduplicate and combine data
const deduplicateBySlug = <T extends { slug: string }>(items: T[]): T[] => {
    const seen = new Set<string>();
    return items.filter((item) => {
        const slug = item.slug.trim().toLowerCase();
        if (seen.has(slug)) {
            return false;
        }
        seen.add(slug);
        return true;
    });
};

export interface Vehicle {
    id: string;
    name: string;
    category: string;
    passengers: number;
    luggage: number;
    features: string[];
    image: string;
    description: string;
}

export const vehicles: Vehicle[] = [
    {
        id: 's-class',
        name: 'Mercedes S-Class',
        category: 'Executive',
        passengers: 3,
        luggage: 2,
        features: ['Executive Comfort', 'Privacy Glass', 'Ambient Lighting', 'English Speaking Chauffeur'],
        image: '/vehicles/Mercedes S-Class.png',
        description: 'Quality executive vehicle suitable for corporate travel and important arrivals.',
    },
    {
        id: 'bmw-7',
        name: 'BMW 7 Series',
        category: 'Executive',
        passengers: 3,
        luggage: 2,
        features: ['Professional Service', 'WiFi', 'High-quality Audio', 'Plush Leather'],
        image: '/vehicles/BMW.png',
        description: 'Arrive in sophisticated style with a professional high-standard vehicle.',
    },
    {
        id: 'genesis',
        name: 'Genesis G90',
        category: 'Executive',
        passengers: 3,
        luggage: 2,
        features: ['Quiet Cabin', 'Executive Rear Seating', 'Climate Control'],
        image: '/vehicles/Genesis.png',
        description: 'Modern comfort and unparalleled hospitality for discerning travelers.',
    },
    {
        id: 'escalade',
        name: 'Cadillac Escalade',
        category: 'Large SUV',
        passengers: 6,
        luggage: 5,
        features: ['Huge Trunk', 'Captains Chairs', 'Bose Sound', 'Road Presence'],
        image: '/vehicles/Cadillac Escalade.png',
        description: 'Spacious SUV travel with large capacity and professional presence.',
    },
    {
        id: 'gmc',
        name: 'GMC Yukon XL',
        category: 'Large SUV',
        passengers: 7,
        luggage: 6,
        features: ['Extra Legroom', 'Family Friendly', 'High-standard interior'],
        image: '/vehicles/GMC.png',
        description: 'Perfect for large families and groups requiring maximum space and comfort.',
    },
    {
        id: 'taurus',
        name: 'Ford Taurus',
        category: 'Business Class',
        passengers: 4,
        luggage: 3,
        features: ['Modern Interior', 'Clean & Sanitized', 'Efficient travel'],
        image: '/vehicles/Ford Taurus.png',
        description: 'High-quality sedan for efficient business and airport transfers.',
    },
    {
        id: 'camry',
        name: 'Toyota Camry',
        category: 'Economy Plus',
        passengers: 4,
        luggage: 2,
        features: ['Reliable', 'Fuel Efficient', 'Clean Interior'],
        image: '/vehicles/camry.jpg',
        description: 'Practical and reliable choice for solo travelers and small families.',
    },
    {
        id: 'vito',
        name: 'Mercedes Vito',
        category: 'Executive Van',
        passengers: 7,
        luggage: 7,
        features: ['Group Travel', 'Rear Climate Control', 'Sliding Doors'],
        image: '/vehicles/Mercedes vito.png',
        description: 'Professional van for corporate groups and family outings.',
    },
    {
        id: 'staria',
        name: 'Hyundai Staria',
        category: 'Executive Van',
        passengers: 9,
        luggage: 5,
        features: ['Panoramic Windows', 'Comfort Seating', 'Futuristic Look'],
        image: '/vehicles/staria.jpg',
        description: 'A modern multi-purpose vehicle with incredible space and visibility.',
    },
    {
        id: 'starex',
        name: 'Hyundai Starex',
        category: 'Standard Van',
        passengers: 9,
        luggage: 4,
        features: ['Robust', 'Reliable Group Transport', 'Aircon'],
        image: '/vehicles/starex.jpg',
        description: 'Budget-friendly group transportation for airport transfers.',
    },
    {
        id: 'sprinter',
        name: 'Mercedes Sprinter',
        category: 'Executive Coach',
        passengers: 15,
        luggage: 12,
        features: ['Standing Height', 'Leather VIP Seats', 'Cooler Box'],
        image: '/vehicles/Mercedes Sprinter.png',
        description: 'High-capacity group transport. Suitable for delegations and event shuttles.',
    },
    {
        id: 'bus-large',
        name: 'Executive Bus',
        category: 'Coach',
        passengers: 50,
        luggage: 50,
        features: ['Toilet Boarding', 'Entertainment System', 'On-board Service'],
        image: '/vehicles/bus.jpg',
        description: 'Full-sized coach for large groups and long-distance travel.',
    },
];

// ─── Services ────────────────────────────────────────────────────────
export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    href: string;
}

export const services: Service[] = [
    {
        id: 'airport',
        title: 'Airport Transfers & Meet & Greet',
        description: 'Professional airport chauffeur service across the Gulf. Our chauffeurs monitor your flight, handle luggage, and provide reliable airport service at DXB, RUH, and more.',
        icon: '✈️',
        href: '/airport/dubai-airport-taxi',
    },
    {
        id: 'hotel',
        title: 'Hotel Transfers',
        description: 'Whether you are checking into major hotels or a local residence, start your stay smoothly. We provide seamless door-to-door transit from any Gulf hotel.',
        icon: '🏨',
        href: '/booking',
    },
    {
        id: 'city-to-city',
        title: 'City to City Transfers',
        description: 'Avoid the crowded flights and airport queues. Relax in a professional sedan while our drivers navigate the highways between regional cities for you.',
        icon: '🏙️',
        href: '/routes/dubai-to-abu-dhabi-taxi',
    },
    {
        id: 'cross-border',
        title: 'Regional Cross-Border Travel',
        description: 'Specializing in long distance chauffeur service and official Saudi border crossings. We handle paperwork and customs for seamless travel between Saudi Arabia, UAE, and Qatar.',
        icon: '🌍',
        href: '/routes/dubai-to-riyadh-taxi',
    },
    {
        id: 'corporate',
        title: 'Corporate Transportation',
        description: 'Professional corporate transportation service. We provide reliable, discreet executive fleets for business travel and roadshows.',
        icon: '💼',
        href: '/contact',
    },
    {
        id: 'events',
        title: 'Wedding & Event Transportation',
        description: 'Wedding transportation and event chauffeur services with high-standard fleets, shuttles, and event logistics across the region.',
        icon: '💍',
        href: '/events-and-weddings',
    },
    {
        id: 'vip-chauffeur',
        title: 'Executive Chauffeurs',
        description: 'Executive chauffeur-service for business travel. Experience professional chauffeur service in Dubai and Riyadh with our vetted, professional drivers.',
        icon: '🎩',
        href: '/vip-chauffeur',
    },
];

// ─── Airport Data ────────────────────────────────────────────────────
export interface Airport {
    slug: string;
    name: string;
    city: string;
    country: string;
    code: string;
    description: string;
    longDescription: string;
    services: string[];
    popularRoutes: { to: string; duration: string }[];
    meetAndGreet: string;
    pickupLocations: string;
    vehiclesOverview: string;
    routesInfo: string;
    bookingDetails: string;
    faq: { question: string; answer: string }[];
}

const baseAirports: Airport[] = [
    {
        slug: 'dubai-airport-taxi',
        name: 'Dubai International Airport',
        city: 'Dubai',
        country: 'United Arab Emirates',
        code: 'DXB',
        description: 'Private chauffeur service Dubai at DXB. Scheduled chauffeur service Dubai available 24/7 with professional meet and greet.',
        longDescription: 'Dubai International Airport is our primary hub for private chauffeur service Dubai. We offer professional chauffeur service Dubai, ensuring a seamless transition from your flight to your destination. Our drivers are experts in navigating Dubai and the UAE.',
        services: ['Meet & Greet', 'Flight Tracking', '24/7 Availability', 'Free Waiting Time', 'Luggage Assistance', 'Child Seats Available'],
        popularRoutes: [
            { to: 'Downtown Dubai', duration: '20 min' },
            { to: 'Dubai Marina', duration: '30 min' },
            { to: 'Abu Dhabi', duration: '1h 20min' },
            { to: 'Sharjah', duration: '25 min' },
        ],
        meetAndGreet: 'Your driver will meet you at the arrivals hall holding a sign with your name. They will assist with your luggage and guide you to your waiting vehicle.',
        pickupLocations: 'Pickups are available from all terminals (Terminal 1, 2, and 3). The exact meeting point will be shared with you upon booking confirmation.',
        vehiclesOverview: 'Choose from our range of modern vehicles, including executive sedans for individuals and spacious SUVs or vans for families and groups.',
        routesInfo: 'Frequent routes include transfers to Downtown Dubai, Palm Jumeirah, Dubai Marina, and inter-city trips to Abu Dhabi or Sharjah.',
        bookingDetails: 'Advance booking is recommended to ensure vehicle availability. Our service operates 24/7 with real-time flight tracking included.',
        faq: [
            { question: 'Where do I meet my driver at DXB?', answer: 'Your driver will be waiting at the arrivals hall after you clear customs and baggage claim, holding a name board.' },
            { question: 'What happens if my flight is delayed?', answer: 'We monitor your flight status in real-time and adjust the pickup time accordingly at no extra cost.' },
            { question: 'Is waiting time included?', answer: 'Yes, we provide 60 minutes of free waiting time at the airport starts from the time your flight lands.' },
            { question: 'Can I book a transfer to Abu Dhabi?', answer: 'Yes, we offer direct door-to-door transfers from Dubai Airport to any location in Abu Dhabi.' }
        ],
    },
    {
        slug: 'riyadh-airport-taxi',
        name: 'King Khalid International Airport',
        city: 'Riyadh',
        country: 'Saudi Arabia',
        code: 'RUH',
        description: 'Chauffeur service in Riyadh at King Khalid International Airport (RUH). Comfortable chauffeur service in Riyadh for all your travel needs.',
        longDescription: 'Experience professional chauffeur service in Riyadh at King Khalid International Airport. We provide comfortable chauffeur service in Riyadh, catering to both business travelers and families. Our Riyadh chauffeur service ensures punctual and comfortable transportation across the capital.',
        services: ['Meet & Greet', 'Flight Tracking', '24/7 Availability', 'Arabic & English Drivers', 'Corporate Accounts', 'VIP Services'],
        popularRoutes: [
            { to: 'Riyadh City Center', duration: '25 min' },
            { to: 'Diplomatic Quarter', duration: '30 min' },
            { to: 'King Abdullah Financial District', duration: '20 min' },
            { to: 'Dammam', duration: '4h' },
        ],
        meetAndGreet: 'A professional driver will greet you in the arrivals area with a personalized name board, helping you with your bags for a smooth exit.',
        pickupLocations: 'We provide pickups from all KKIA terminals. Your driver will coordinate the exact spot based on your arrival terminal.',
        vehiclesOverview: 'Our Riyadh fleet features professional sedans, family-sized SUVs, and large vans suitable for all types of travelers and group sizes.',
        routesInfo: 'Common transfers include trips to Olaya, the Diplomatic Quarter, KAFD, and residential areas across Riyadh.',
        bookingDetails: 'Bookings can be made online or via phone. We offer 24/7 support and professional drivers who know Riyadh well.',
        faq: [
            { question: 'Do you offer meet and greet at Riyadh Airport?', answer: 'Yes, our meet and greet service is included with every airport pickup at King Khalid International Airport.' },
            { question: 'How much waiting time is provided?', answer: 'We offer 60 minutes of complimentary waiting time from the moment your flight arrives.' },
            { question: 'Can I travel from Riyadh Airport to Dammam?', answer: 'Yes, we provide inter-city transfers from Riyadh Airport to Dammam and other cities in the Eastern Province.' },
            { question: 'Are the drivers bilingual?', answer: 'Yes, we have professional drivers who speak both Arabic and English to assist you.' }
        ],
    },
    {
        slug: 'doha-airport-taxi',
        name: 'Hamad International Airport',
        city: 'Doha',
        country: 'Qatar',
        code: 'DOH',
        description: 'High-standard airport transfer at Hamad International Airport (DOH). Experience Qatar\'s hospitality from the moment you land.',
        longDescription: 'Hamad International Airport, consistently recognized among the leading airports, deserves a professional transfer experience. Our chauffeurs await your arrival with personalized service, ensuring a smooth transition from air to ground travel in Qatar.',
        services: ['Meet & Greet', 'Flight Tracking', '24/7 Service', 'Multilingual Drivers', 'Free Cancellation', 'Comfortable Fleet'],
        popularRoutes: [
            { to: 'The Pearl-Qatar', duration: '20 min' },
            { to: 'Souq Waqif', duration: '15 min' },
            { to: 'West Bay', duration: '18 min' },
            { to: 'Lusail City', duration: '25 min' },
        ],
        meetAndGreet: 'A professional chauffeur will be waiting in the arrival hall with a clear name sign, ready to assist with your luggage and guide you to your vehicle.',
        pickupLocations: 'Pickups are coordinated at the primary arrivals gate of Hamad International Airport. Detailed instructions are provided with every booking.',
        vehiclesOverview: 'Our Doha fleet includes executive sedans for business travelers and spacious SUVs or vans for families and larger groups.',
        routesInfo: 'We provide direct transfers to The Pearl, Souq Waqif, West Bay, and Lusail. We also handle cross-border trips to Saudi Arabia.',
        bookingDetails: 'Arrange your Doha transfer 24/7. We monitor all flights and provide professional door-to-door service across Qatar.',
        faq: [
            { question: 'Where is the meeting point at Hamad Airport?', answer: 'Your driver will meet you in the arrivals hall right after the baggage claim area, holding a personalized sign.' },
            { question: 'Is there a waiting time limit?', answer: 'We offer 60 minutes of free waiting time starts once your flight has landed at Hamad International Airport.' },
            { question: 'Do you offer transfers to Saudi Arabia?', answer: 'Yes, we specialize in cross-border transfers from Doha to Riyadh and other Saudi cities via the Salwa border.' },
            { question: 'Can I request a child seat?', answer: 'Absolutely. You can request a child seat during the booking process to ensure safety for your young travelers.' }
        ],
    },
    {
        slug: 'jeddah-airport-taxi',
        name: 'King Abdulaziz International Airport',
        city: 'Jeddah',
        country: 'Saudi Arabia',
        code: 'JED',
        description: 'Professional transfers at King Abdulaziz International Airport (JED). Serving Hajj, Umrah, and business travelers with excellence.',
        longDescription: 'As the gateway to the Holy Cities of Makkah and Madinah, King Abdulaziz International Airport serves millions of pilgrims and travelers each year. Our specialized transfer service caters to all travel needs, from Hajj and Umrah pilgrim transportation to corporate and leisure travel.',
        services: ['Hajj/Umrah Transfers', 'Meet & Greet', 'Flight Tracking', '24/7 Availability', 'Group Transfers', 'Multilingual Service'],
        popularRoutes: [
            { to: 'Jeddah Corniche', duration: '20 min' },
            { to: 'Makkah', duration: '1h 15min' },
            { to: 'Madinah', duration: '4h' },
            { to: 'King Abdullah Economic City', duration: '1h 30min' },
        ],
        meetAndGreet: 'Your driver will wait in the arrivals hall with a name board. They will help with your luggage and provide a smooth transfer to your destination.',
        pickupLocations: 'Standard pickups are at the arrivals terminal area. For Hajj and Umrah pilgrims, we coordinate specific meeting points for ease of access.',
        vehiclesOverview: 'We offer a variety of vehicles in Jeddah, from comfortable sedans to large group vans and buses, ideal for pilgrim and business travel.',
        routesInfo: 'Major routes from JED include transfers to Makkah, Madinah, and the Jeddah Corniche. Specialized pilgrim transport is always available.',
        bookingDetails: 'Service is available 24/7. We specialize in Hajj and Umrah transfers, ensuring puncuality and comfort for all pilgrims.',
        faq: [
            { question: 'Do you provide transfers to Makkah?', answer: 'Yes, we offer direct and reliable transfers from Jeddah Airport to all hotels and locations in Makkah.' },
            { question: 'How do I find my driver at JED?', answer: 'Your driver will be waiting in the designated arrivals area with a sign showing your name.' },
            { question: 'Is 24/7 service available?', answer: 'Yes, our airport transfer service in Jeddah operates 24 hours a day, 7 days a week.' },
            { question: 'What is the waiting time for airport pickups?', answer: 'We provide 60 minutes of free waiting time from the moment your flight lands in Jeddah.' }
        ],
    },
    {
        slug: 'kuwait-airport-taxi',
        name: 'Kuwait International Airport',
        city: 'Kuwait City',
        country: 'Kuwait',
        code: 'KWI',
        description: 'Efficient airport transfers at Kuwait International Airport (KWI). Reliable service for residents and visitors alike.',
        longDescription: 'Kuwait International Airport is the primary aviation hub of Kuwait, connecting the nation to the world. Our transfer service provides comfortable and reliable rides from the airport to anywhere in Kuwait City and surrounding areas, with options ranging from economy to VIP.',
        services: ['Meet & Greet', 'Flight Tracking', '24/7 Availability', 'Free Waiting Time', 'Corporate accounts', 'VIP Lounge Access'],
        popularRoutes: [
            { to: 'Kuwait City Center', duration: '20 min' },
            { to: 'The Avenues Mall', duration: '25 min' },
            { to: 'Salmiya', duration: '18 min' },
            { to: 'Jahra', duration: '30 min' },
        ],
        meetAndGreet: 'A professional chauffeur will greet you in the arrivals hall with a name sign, assisting with your luggage for a hassle-free start to your trip.',
        pickupLocations: 'Pickups are available from Kuwait International Airport terminals. Exact meeting instructions are shared upon booking.',
        vehiclesOverview: 'Our Kuwait fleet includes professional sedans and spacious SUVs, providing comfort for city-wide and cross-border travel.',
        routesInfo: 'We provide transfers to Kuwait City Center, Salmiya, and inter-city trips to Dammam and other regional destinations.',
        bookingDetails: 'Book your Kuwait transfer anytime. Our drivers monitor your flight and provide reliable door-to-door service.',
        faq: [
            { question: 'Where do I meet my driver at Kuwait Airport?', answer: 'Your driver will be waiting in the arrivals area with a sign clearly displaying your name.' },
            { question: 'What if my flight is early?', answer: 'Our flight tracking system ensures your driver is there whenever you land, early or late.' },
            { question: 'Do you offer inter-city transfers?', answer: 'Yes, we provide transfers from Kuwait Airport to Dammam and other cities in the region.' },
            { question: 'Is child safety a priority?', answer: 'Absolutely. You can request child seats during booking for a safe journey with your family.' }
        ],
    },
    {
        slug: 'muscat-airport-taxi',
        name: 'Muscat International Airport',
        city: 'Muscat',
        country: 'Oman',
        code: 'MCT',
        description: 'Comfortable airport transfers at Muscat International Airport (MCT). Discover Oman\'s beauty from the moment you arrive.',
        longDescription: 'Muscat International Airport, with its stunning Omani architecture, welcomes travelers to the Sultanate of Oman. Our professional transfer service matches the airport\'s elegance with premium vehicles and courteous drivers who showcase true Omani hospitality.',
        services: ['Meet & Greet', 'Flight Tracking', '24/7 Service', 'Omani Hospitality', 'Tour Packages', 'Long Distance Transfers'],
        popularRoutes: [
            { to: 'Old Muscat', duration: '20 min' },
            { to: 'Al Qurum Beach', duration: '15 min' },
            { to: 'Nizwa', duration: '1h 45min' },
            { to: 'Salalah', duration: '10h' },
        ],
        meetAndGreet: 'Experience Omani hospitality from the start. Your driver will meet you in the arrivals hall with a name board and assist with your bags.',
        pickupLocations: 'Pickups are arranged at the Muscat International Airport arrivals terminal. Full details are provided at the time of booking.',
        vehiclesOverview: 'Choose from our range of comfortable sedans and SUVs, perfect for navigating Muscat and long-distance Omani routes.',
        routesInfo: 'Common routes include transfers to Old Muscat, Al Qurum, and long-distance trips to Nizwa or Dubai.',
        bookingDetails: 'Professional service is available 24/7. We monitor your flight and ensure a punctual pickup at Muscat Airport.',
        faq: [
            { question: 'Where do I meet my driver at Muscat Airport?', answer: 'Your driver will be waiting in the arrivals hall with a sign showing your name.' },
            { question: 'Do you offer transfers to Dubai?', answer: 'Yes, we provide cross-border transfers from Muscat to Dubai via the Hatta or Al Ain borders.' },
            { question: 'Can I book a tour from the airport?', answer: 'Yes, we can arrange customized city tours or transfers to historic sites like Nizwa directly from the airport.' },
            { question: 'How much waiting time do I have?', answer: 'We offer 60 minutes of complimentary waiting time after your flight lands at Muscat Airport.' }
        ],
    },
];

// ─── Cross-Border Routes ─────────────────────────────────────────────
export interface Route {
    slug: string;
    from: string;
    to: string;
    fromCountry: string;
    toCountry: string;
    distance: string;
    duration: string;

    description: string;
    longDescription: string;
    highlights: string[];
    faq: { question: string; answer: string }[];
    
    // AI Search Optimization Fields
    highways?: string;
    vehiclesInfo?: string;
    borderInfo?: string;
    useCases?: string;
    relatedRoutes?: { name: string; slug: string; }[];
}

const baseRoutes: Route[] = [
    {
        slug: 'dubai-to-abu-dhabi-taxi',
        from: 'Dubai',
        to: 'Abu Dhabi',
        fromCountry: 'UAE',
        toCountry: 'UAE',
        distance: '140 km',
        duration: '1h 30min',
        
        description: 'Comfortable taxi service from Dubai to Abu Dhabi. Professional Service, comfortable ride, and professional chauffeur for the most popular UAE inter-city route.',
        longDescription: 'The Dubai to Abu Dhabi route is the most traveled inter-city corridor in the UAE. Whether you\'re heading to Abu Dhabi for business meetings at the ADGM, visiting the Louvre Abu Dhabi, or catching a Formula 1 race at Yas Marina Circuit, our transfer service ensures a comfortable and punctual journey.',
        highlights: ['Professional Service - No Surprises', 'Door-to-Door Service', 'Professional Chauffeur', 'Free Wi-Fi & Water', 'Flight Monitoring for Airport Pickups', '24/7 Availability'],
        faq: [
            { question: 'How long does the Dubai to Abu Dhabi transfer take?', answer: 'The journey typically takes around 1 hour and 30 minutes, depending on traffic conditions.' },
            { question: 'Can I book a one-way transfer?', answer: 'Yes, we offer both one-way and return transfers between Dubai and Abu Dhabi.' },
            { question: 'Is there a toll fee included?', answer: 'Yes, all toll fees on the E11 highway are included in the Professional Service.' },
            { question: 'Can I make stops along the way?', answer: 'Yes, you can request stops. Additional waiting time may apply for extended stops.' },
        ],
    },
    {
        slug: 'dubai-to-riyadh-taxi',
        from: 'Dubai',
        to: 'Riyadh',
        fromCountry: 'UAE',
        toCountry: 'Saudi Arabia',
        distance: '1,060 km',
        duration: '10h',
        
        description: 'Cross-border taxi service from Dubai to Riyadh via the Al Batha (Saudi–UAE) border crossing. A comfortable long-distance transfer with full border documentation assistance.',
        longDescription: 'Our Dubai to Riyadh cross-border service is designed for comfort on this long-distance journey. We cross via the official Al Batha border port (Saudi Arabia) — the primary UAE–Saudi land crossing. Our experienced drivers handle all border formalities and customs clearance, making the crossing smooth and hassle-free. Perfect for those who prefer the flexibility of road travel over flying.',
        highlights: ['Al Batha Border Crossing Expertise', 'Full Customs Documentation Handled', 'Experienced Long-Distance Drivers', 'Multiple Rest Stops', 'Door-to-Door Service', 'Comfortable Vehicles'],
        faq: [
            { question: 'Which border crossing is used for Dubai to Riyadh?', answer: 'We use the Al Batha border port — the official Saudi–UAE land crossing. It is the primary and most efficient crossing point between the UAE and Saudi Arabia.' },
            { question: 'What documents do I need for the Al Batha border crossing?', answer: 'You need a valid passport, Saudi visa (if applicable), and vehicle registration documents (which we handle for you).' },
            { question: 'How long does the Al Batha border crossing take?', answer: 'The Al Batha crossing typically takes 30 minutes to 1 hour depending on traffic, with our experienced drivers managing the process efficiently.' },
            { question: 'Can I bring extra luggage?', answer: 'Yes, our vehicles have ample luggage space. For extra-large loads, an SUV or van upgrade is recommended.' },
        ],
    },
    {
        slug: 'doha-to-riyadh-taxi',
        from: 'Doha',
        to: 'Riyadh',
        fromCountry: 'Qatar',
        toCountry: 'Saudi Arabia',
        distance: '480 km',
        duration: '5h 30min',
        
        description: 'Secure cross-border taxi from Doha to Riyadh via the Salwa border port (Saudi–Qatar). Professional service with full border assistance.',
        longDescription: 'The Doha to Riyadh cross-border route connects Qatar to Saudi Arabia\'s capital via the official Salwa border port — the sole Saudi–Qatar land crossing. Our professional drivers handle all customs formalities, making this a stress-free journey for business travelers and families alike.',
        highlights: ['Salwa Border Port Expertise', 'Professional Drivers', 'Comfortable Vehicles', 'Expert Service', 'Door-to-Door Service', 'Group Discounts Available'],
        faq: [
            { question: 'Which border crossing is used for Doha to Riyadh?', answer: 'We use the Salwa border port — the official Saudi–Qatar land crossing (known as Abu Samra on the Qatari side). It is the only road crossing between Qatar and Saudi Arabia.' },
            { question: 'Is the Salwa border open 24/7?', answer: 'Yes, the Salwa border port is open 24/7 but can be busier during weekends and public holidays.' },
            { question: 'Can I book for a group?', answer: 'Yes, we offer van and bus options for groups travelling through Salwa. Contact us for group pricing.' },
            { question: 'What is the cancellation policy?', answer: 'Free cancellation up to 24 hours before the scheduled pickup time.' },
        ],
    },
    {
        slug: 'kuwait-to-dammam-taxi',
        from: 'Kuwait City',
        to: 'Dammam',
        fromCountry: 'Kuwait',
        toCountry: 'Saudi Arabia',
        distance: '380 km',
        duration: '4h 30min',
        
        description: 'Comfortable cross-border taxi from Kuwait City to Dammam via the Al Nuwaiseeb (Kuwait) / Al Khafji (Saudi Arabia) border crossing. Expert service with experienced drivers.',
        longDescription: 'The Kuwait to Dammam route is a popular cross-border journey for business and leisure travelers. We cross via the official Al Nuwaiseeb border port on the Kuwait side and Al Khafji on the Saudi side — the primary Saudi–Kuwait land crossing. Our experienced drivers handle all customs formalities for a smooth, comfortable ride to Saudi Arabia\'s Eastern Province.',
        highlights: ['Al Nuwaiseeb / Al Khafji Border Expertise', 'Comfortable Long-Distance Vehicles', 'Expert Service', 'Door-to-Door Service', 'Business Travel Ready', 'Return Trips Available'],
        faq: [
            { question: 'Which border crossing is used for Kuwait to Dammam?', answer: 'We cross via the Al Nuwaiseeb border port (Kuwait side) and Al Khafji border port (Saudi Arabia side) — the official and primary Saudi–Kuwait land crossing.' },
            { question: 'How long does the Al Nuwaiseeb / Al Khafji crossing take?', answer: 'The Al Nuwaiseeb / Al Khafji border crossing typically takes 30–45 minutes, depending on traffic volume.' },
            { question: 'What currency can I pay in?', answer: 'We accept payment in KWD, SAR, or USD. Card payment is also available.' },
            { question: 'Can I book a return trip?', answer: 'Yes, we offer return trip bookings at a exclusive service.' },
        ],
    },
    {
        slug: 'bahrain-to-saudi-arabia-taxi',
        from: 'Bahrain',
        to: 'Saudi Arabia',
        fromCountry: 'Bahrain',
        toCountry: 'Saudi Arabia',
        distance: '120 km',
        duration: '2h',
        
        description: 'Cross-border taxi via the King Fahd Causeway (Saudi–Bahrain) — the iconic 25km bridge connecting Bahrain to Saudi Arabia. Fast, reliable, and comfortable.',
        longDescription: 'The King Fahd Causeway is the official Saudi–Bahrain border crossing and the world\'s longest sea causeway at 25 kilometres. Our transfer service makes this iconic crossing effortless — we handle all border documentation, customs clearance, and the bridge toll. Whether you\'re heading to Dammam, Khobar, or Dhahran, our professional drivers ensure a seamless journey.',
        highlights: ['King Fahd Causeway Expert Drivers', 'Full Border Documentation Handled', 'Bridge Toll Included', 'Door-to-Door Service', 'Weekend Specials', 'Corporate Accounts'],
        faq: [
            { question: 'Is the King Fahd Causeway toll included?', answer: 'Yes, the King Fahd Causeway bridge toll is fully included in our Professional Service. No hidden fees.' },
            { question: 'How long does the King Fahd Causeway crossing take?', answer: 'The drive across the King Fahd Causeway takes about 30 minutes, plus border processing time at the Saudi or Bahrain checkpoints.' },
            { question: 'Which cities in Saudi Arabia do you serve from Bahrain?', answer: 'We serve Dammam, Al Khobar, Dhahran, and all Eastern Province cities via the King Fahd Causeway.' },
            { question: 'Can I book a specific pick-up time at the King Fahd Causeway?', answer: 'Yes, we can arrange pickup from either the Bahrain or Saudi side of the King Fahd Causeway border checkpoint.' },
        ],
    },
    {
        slug: 'muscat-to-dubai-taxi',
        from: 'Muscat',
        to: 'Dubai',
        fromCountry: 'Oman',
        toCountry: 'UAE',
        distance: '450 km',
        duration: '4h 30min',
        
        description: 'Scenic cross-border transfer from Muscat to Dubai via Hatta border. Experience the stunning Hajar Mountains route.',
        longDescription: 'The Muscat to Dubai route is one of the most scenic drives in the Arabian Peninsula, passing through the magnificent Hajar Mountains. Our experienced drivers navigate the Hatta border crossing efficiently while you enjoy the breathtaking landscapes.',
        highlights: ['Scenic Hajar Mountain Route', 'Hatta Border Expertise', 'Comfortable Long-Distance Vehicles', 'Photo Stops Available', 'Expert Service', 'Door-to-Door Service'],
        faq: [
            { question: 'Which border crossing is used?', answer: 'We primarily use the Hatta border crossing between Oman and UAE.' },
            { question: 'Can we stop for photos along the way?', answer: 'Absolutely! The route is scenic and we can make brief stops at designated viewpoints.' },
            { question: 'What about the UAE road tolls?', answer: 'All UAE Salik tolls are included in the Professional Service.' },
            { question: 'Do you offer Al Ain border as an alternative?', answer: 'Yes, we can also use the Al Ain/Buraimi border if preferred.' },
        ],
    },
];


// ─── Cities ──────────────────────────────────────────────────────────
export interface City {
    slug: string;
    name: string;
    country: string;
    description: string;
    longDescription: string;
    popularRoutes: { to: string; slug: string; }[];
    attractions: string[];
    airportCode?: string;
    airportName?: string;
    airportSlug?: string;
    vehicleOptions?: string;
    travelUses?: string;
    faq?: { question: string; answer: string; }[];
    bookingInfo?: string;
}

const baseCities: City[] = [
    {
        slug: 'dubai',
        name: 'Dubai',
        country: 'United Arab Emirates',
        description: 'Reliable taxi and chauffeur services in Dubai. Airport transfers, city tours, and inter-city rides available.',
        longDescription: 'Dubai is one of the most visited cities in the world, known for its modern skyline, shopping destinations, and diverse business scene. Our taxi service covers all areas of Dubai including Downtown, Dubai Marina, Palm Jumeirah, Deira, and Business Bay. We provide door-to-door transfers for individuals, families, and corporate travelers.',
        popularRoutes: [
            { to: 'Abu Dhabi', slug: 'dubai-to-abu-dhabi-taxi' },
            { to: 'Sharjah', slug: 'dubai-to-sharjah-taxi' },
            { to: 'Al Ain', slug: 'dubai-to-al-ain-taxi' },
        ],
        attractions: ['Burj Khalifa', 'Dubai Mall', 'Palm Jumeirah', 'Dubai Marina', 'JBR Beach', 'Deira Souks'],
        airportCode: 'DXB',
        airportName: 'Dubai International Airport',
        airportSlug: 'dubai-airport-taxi',
        vehicleOptions: 'For individual travelers or business professionals, we offer the Mercedes S-Class, BMW 7 Series, Genesis G90, or Ford Taurus. Families and small groups can use the Cadillac Escalade, GMC Yukon XL, or Hyundai Staria. For larger groups, the Mercedes Vito, Mercedes Sprinter, or a Executive Bus are available.',
        travelUses: 'Dubai taxi transfers are commonly booked for airport pickups and drop-offs, hotel check-ins, corporate business meetings in DIFC and Business Bay, tourist sightseeing, shopping trips to major malls, and inter-city journeys to Abu Dhabi and Sharjah.',
        faq: [
            { question: 'How do I book a taxi in Dubai?', answer: 'You can book online through our platform or by WhatsApp. Enter your pickup location, destination, and travel time and we will confirm your driver.' },
            { question: 'Can I get a taxi directly from my hotel?', answer: 'Yes. We offer hotel pickup and drop-off across all major areas in Dubai including Downtown, Marina, JBR, and Palm Jumeirah.' },
            { question: 'Do you provide airport transfers to Dubai Airport?', answer: 'Yes. We serve Dubai International Airport (DXB) for both arrivals and departures with meet and greet service available.' },
            { question: 'What vehicles are available in Dubai?', answer: 'We offer sedans, SUVs, executive vans, and large capacity coaches to suit individual travelers, families, and groups.' },
        ],
        bookingInfo: 'You can arrange a taxi transfer within Dubai or to any nearby city or airport through our platform. Our drivers are available 24 hours a day, 7 days a week.',
    },
    {
        slug: 'abu-dhabi',
        name: 'Abu Dhabi',
        country: 'United Arab Emirates',
        description: 'Reliable taxi service in Abu Dhabi. Transfers to Yas Island, Saadiyat, Louvre, and more.',
        longDescription: 'Abu Dhabi is the capital of the UAE and a major hub for government, business, and culture. Our taxi service operates across all areas of Abu Dhabi including the city center, Yas Island, Saadiyat Island, and Khalifa City. We provide reliable door-to-door transfers for residents, visitors, and business travelers.',
        popularRoutes: [
            { to: 'Dubai', slug: 'dubai-to-abu-dhabi-taxi' },
            { to: 'Al Ain', slug: 'abu-dhabi-to-al-ain-taxi' },
        ],
        attractions: ['Sheikh Zayed Grand Mosque', 'Louvre Abu Dhabi', 'Yas Island', 'Corniche Beach', 'Qasr Al Watan'],
        airportCode: 'AUH',
        airportName: 'Zayed International Airport',
        airportSlug: 'abu-dhabi-airport-taxi',
        vehicleOptions: 'Individual travelers and business professionals can choose from the Mercedes S-Class, BMW 7 Series, Genesis G90, or Ford Taurus. Families can use the Cadillac Escalade, GMC Yukon XL, or Hyundai Staria. Groups are served by the Mercedes Vito, Mercedes Sprinter, or a Executive Bus.',
        travelUses: 'Abu Dhabi transfers are commonly booked for airport pickups from Zayed International Airport, government building visits, hotel drop-offs on Yas Island and Saadiyat, corporate meetings, and inter-city trips to Dubai and Al Ain.',
        faq: [
            { question: 'How do I book a taxi in Abu Dhabi?', answer: 'Book online or via WhatsApp. Provide your pickup point, destination, and travel time and we will handle the rest.' },
            { question: 'Can taxis pick up from Abu Dhabi hotels?', answer: 'Yes. We provide pickups from all major hotels and residential compounds across Abu Dhabi.' },
            { question: 'Are airport transfers available in Abu Dhabi?', answer: 'Yes. We provide meet and greet service and door-to-door transfers at Zayed International Airport (AUH).' },
            { question: 'What vehicles are available?', answer: 'We offer executive sedans, family SUVs, passenger vans, and large group coaches depending on your group size.' },
        ],
        bookingInfo: 'Transportation within Abu Dhabi, to nearby cities, or to Zayed International Airport can be arranged through our platform at any time of day.',
    },
    {
        slug: 'riyadh',
        name: 'Riyadh',
        country: 'Saudi Arabia',
        description: 'Professional transportation service in Riyadh. Corporate transfers, airport rides, and city-wide coverage.',
        longDescription: 'Riyadh is the capital of Saudi Arabia and one of the fastest-growing cities in the region. Our taxi service covers all districts of Riyadh including Olaya, Al Malqa, Diplomatic Quarter, King Abdullah Financial District, and the southern districts. We provide reliable door-to-door transfers for individuals, families, and corporate clients.',
        popularRoutes: [
            { to: 'Jeddah', slug: 'riyadh-to-jeddah-taxi' },
            { to: 'Dammam', slug: 'riyadh-to-dammam-taxi' },
        ],
        attractions: ['Kingdom Centre Tower', 'Diriyah', 'National Museum', 'Boulevard Riyadh', 'Al Faisaliyah Tower'],
        airportCode: 'RUH',
        airportName: 'King Khalid International Airport',
        airportSlug: 'riyadh-airport-taxi',
        vehicleOptions: 'Solo travelers and executives can choose from the Mercedes S-Class, BMW 7 Series, Genesis G90, or Ford Taurus. Families can use the GMC Yukon XL or Cadillac Escalade. For larger groups, we provide the Mercedes Vito, Mercedes Sprinter, Toyota Hiace, Coaster, or a Executive Bus.',
        travelUses: 'Riyadh taxi transfers are commonly used for airport trips to King Khalid International Airport, corporate meetings in KAFD and Olaya, hotel transfers, government building visits, and inter-city journeys to Jeddah, Dammam, and Madinah.',
        faq: [
            { question: 'How do I book a taxi in Riyadh?', answer: 'You can book online through our website or by contacting us via WhatsApp. We confirm your booking with driver details before your trip.' },
            { question: 'Can taxis in Riyadh pick up from hotels?', answer: 'Yes. We pick up from all major hotels and residences across Riyadh, including those in Olaya and Diplomatic Quarter.' },
            { question: 'Do you transfer to King Khalid International Airport?', answer: 'Yes. We provide door-to-door service and meet and greet at RUH for both arrivals and departures.' },
            { question: 'What vehicles are available for Riyadh transfers?', answer: 'We have executive sedans, large SUVs, passenger vans, and full-size coaches available depending on group size.' },
        ],
        bookingInfo: 'Arrange a city taxi, inter-city transfer, or airport pickup in Riyadh anytime. Our drivers operate 24/7 across all areas of the city.',
    },
    {
        slug: 'doha',
        name: 'Doha',
        country: 'Qatar',
        description: 'Reliable taxi and chauffeur service in Doha. The Pearl, Souq Waqif, and West Bay covered.',
        longDescription: 'Doha is the capital of Qatar and a growing global city with a strong business and tourism presence. Our taxi service covers all areas of Doha including West Bay, The Pearl, Lusail, Katara, and the Old Airport district. We provide professional door-to-door transfers for all traveler types.',
        popularRoutes: [
            { to: 'Al Khor', slug: 'doha-to-al-khor-taxi' },
            { to: 'Lusail', slug: 'doha-to-lusail-taxi' },
        ],
        attractions: ['Museum of Islamic Art', 'Souq Waqif', 'The Pearl-Qatar', 'Katara Cultural Village', 'Aspire Park'],
        airportCode: 'DOH',
        airportName: 'Hamad International Airport',
        airportSlug: 'doha-airport-taxi',
        vehicleOptions: 'Individual and business travelers can use the Mercedes S-Class, BMW 7 Series, Genesis G90, or Ford Taurus. Families can choose the Cadillac Escalade or GMC Yukon XL. Groups can travel in the Mercedes Vito, Mercedes Sprinter, or a Executive Bus.',
        travelUses: 'Doha taxi services are commonly used for airport transfers to Hamad International Airport, hotel pickups in West Bay, business meeting transport in the financial district, tourist trips to Souq Waqif and The Pearl, and inter-city travel to Lusail and Al Khor.',
        faq: [
            { question: 'How do I book a taxi in Doha?', answer: 'You can book through our website or WhatsApp. Provide your pickup time and location and we will confirm a driver.' },
            { question: 'Can taxis pick up from Doha hotels?', answer: 'Yes. We operate hotel pickups across all areas of Doha including West Bay, The Pearl, and Lusail.' },
            { question: 'Do you offer airport transfers in Doha?', answer: 'Yes. We serve Hamad International Airport (DOH) with meet and greet and door-to-door transfers.' },
            { question: 'What vehicles are available in Doha?', answer: 'We provide sedans, SUVs, and group vans for individual, family, and corporate travel.' },
        ],
        bookingInfo: 'Book a city ride, hotel transfer, or airport pickup in Doha at any time through our platform. We are available 24 hours a day.',
    },
    {
        slug: 'jeddah',
        name: 'Jeddah',
        country: 'Saudi Arabia',
        description: 'Taxi service in Jeddah covering airport transfers, Hajj/Umrah transport, and city rides.',
        longDescription: 'Jeddah is Saudi Arabia\'s main port city and the gateway to the Holy Cities of Makkah and Madinah. Our taxi service covers all areas of Jeddah including Al Balad, the Corniche, Obhur, and Khurais Road. We provide reliable transfers for pilgrims, residents, tourists, and business travelers.',
        popularRoutes: [
            { to: 'Makkah', slug: 'jeddah-to-makkah-taxi' },
            { to: 'Madinah', slug: 'jeddah-to-madinah-taxi' },
        ],
        attractions: ['Jeddah Corniche', 'Al-Balad Old Town', 'King Fahad Fountain', 'Red Sea Mall', 'Floating Mosque'],
        airportCode: 'JED',
        airportName: 'King Abdulaziz International Airport',
        airportSlug: 'jeddah-airport-taxi',
        vehicleOptions: 'Individual travelers can use the Mercedes S-Class, BMW 7 Series, Ford Taurus, or Toyota Camry. Families can choose the Cadillac Escalade or GMC Yukon XL. For pilgrim groups and large parties, we offer the Mercedes Vito, Mercedes Sprinter, Toyota Hiace, Coaster, or a Executive Bus.',
        travelUses: 'Jeddah taxis are commonly used for airport transfers to King Abdulaziz International Airport, pilgrim transport to Makkah and Madinah, hotel and resort drop-offs along the Corniche, corporate travel, and long-distance trips across Saudi Arabia.',
        faq: [
            { question: 'How do I book a taxi in Jeddah?', answer: 'Book online or by WhatsApp. Enter your pickup location and destination and we will assign a driver for your journey.' },
            { question: 'Can taxis pick up from Jeddah hotels?', answer: 'Yes. We provide hotel pickups across all Jeddah districts including Al Balad, Obhur, and the Corniche area.' },
            { question: 'Do you offer transfers to Makkah from Jeddah?', answer: 'Yes. We provide direct door-to-door transfers from Jeddah to Makkah and Madinah for pilgrims.' },
            { question: 'What vehicles are available?', answer: 'We have sedans, family SUVs, executive vans, and large group coaches to accommodate all travel needs.' },
        ],
        bookingInfo: 'Arrange a taxi in Jeddah for hotel transfers, Makkah pilgrim trips, airport pickups, or inter-city travel. Our service operates 24/7.',
    },
    {
        slug: 'kuwait-city',
        name: 'Kuwait City',
        country: 'Kuwait',
        description: 'Professional taxi and transfer service in Kuwait City. Airport, corporate, and city rides.',
        longDescription: 'Kuwait City is the capital and commercial heart of Kuwait. Our taxi service covers all areas of Kuwait City including Sharq, Salmiya, Rumaithiya, Fahaheel, Hawalli, and the Avenues area. We provide professional door-to-door transfers for individuals, families, and corporate travelers.',
        popularRoutes: [
            { to: 'Fahaheel', slug: 'kuwait-to-fahaheel-taxi' },
            { to: 'Jahra', slug: 'kuwait-to-jahra-taxi' },
        ],
        attractions: ['Kuwait Towers', 'The Avenues Mall', 'Grand Mosque', 'Green Island', 'Souq Al-Mubarakiya'],
        airportCode: 'KWI',
        airportName: 'Kuwait International Airport',
        airportSlug: 'kuwait-airport-taxi',
        vehicleOptions: 'Individual and business travelers can use the Mercedes S-Class, BMW 7 Series, Ford Taurus, or Toyota Camry. Families can choose the Cadillac Escalade or GMC Yukon XL. Groups can use the Mercedes Vito, Mercedes Sprinter, Toyota Hiace, or Coaster.',
        travelUses: 'Kuwait City taxi transfers are used for airport pickups at Kuwait International Airport, corporate meetings in Sharq, hotel transfers, family outings to the Avenues Mall, and inter-city travel.',
        faq: [
            { question: 'How do I book a taxi in Kuwait City?', answer: 'Book through our website or WhatsApp. We confirm your driver and pickup details before your trip.' },
            { question: 'Can taxis pick up from Kuwait hotels?', answer: 'Yes. We serve all major hotels in Kuwait City including those in Sharq and Salmiya.' },
            { question: 'Do you offer airport transfers in Kuwait?', answer: 'Yes. We provide transfers to and from Kuwait International Airport (KWI) with meet and greet service.' },
            { question: 'What vehicles are available in Kuwait City?', answer: 'We offer sedans, SUVs, executive vans, and coaches for all group sizes.' },
        ],
        bookingInfo: 'Book a taxi in Kuwait City for airport pickups, business trips, hotel drop-offs, or inter-city travel. Our team is available 24/7.',
    },
    {
        slug: 'muscat',
        name: 'Muscat',
        country: 'Oman',
        description: 'Comfortable taxi service in Muscat. Airport transfers, tours, and inter-city rides.',
        longDescription: 'Muscat is the capital of Oman and a clean, organized city known for its traditional architecture and coastal scenery. Our taxi service covers all major areas of Muscat including Ruwi, Al Qurum, Muttrah, Airport Heights, Madinat Qaboos, and Seeb. We provide reliable door-to-door transfers for tourists, residents, and business travelers.',
        popularRoutes: [
            { to: 'Nizwa', slug: 'muscat-to-nizwa-taxi' },
            { to: 'Sur', slug: 'muscat-to-sur-taxi' },
        ],
        attractions: ['Sultan Qaboos Grand Mosque', 'Royal Opera House', 'Mutrah Souq', 'Al Qurum Beach', 'Bait Al Zubair Museum'],
        airportCode: 'MCT',
        airportName: 'Muscat International Airport',
        airportSlug: 'muscat-airport-taxi',
        vehicleOptions: 'Solo travelers can choose the Toyota Camry, Ford Taurus, or Genesis G90. Families can use the GMC Yukon XL or Cadillac Escalade. For groups and long-distance Omani routes, we offer the Mercedes Vito, Mercedes Sprinter, or a Executive Bus.',
        travelUses: 'Muscat taxi transfers are used for airport transfers to Muscat International Airport, hotel pickups in Al Qurum and Muttrah, tourist trips to heritage sites, corporate business travel, and long-distance journeys to Nizwa, Sohar, or the UAE border.',
        faq: [
            { question: 'How do I book a taxi in Muscat?', answer: 'Book through our website or contact us by WhatsApp. We will confirm your driver\'s details before pickup.' },
            { question: 'Can taxis pick up from Muscat hotels?', answer: 'Yes. We serve all hotels in Muscat including those in Al Qurum, Muttrah, and Seeb.' },
            { question: 'Do you provide airport transfers in Muscat?', answer: 'Yes. We provide meet and greet and door-to-door transfers at Muscat International Airport (MCT).' },
            { question: 'What vehicles are available?', answer: 'We have sedans, family SUVs, and group vans to accommodate all travel needs across Muscat.' },
        ],
        bookingInfo: 'Arrange a city taxi or airport transfer in Muscat at any time. Our service operates throughout Oman for both short and long-distance trips.',
    },
    {
        slug: 'dammam',
        name: 'Dammam',
        country: 'Saudi Arabia',
        description: 'Taxi and transfer service in Dammam & Eastern Province. Serving Khobar, Dhahran, and beyond.',
        longDescription: 'Dammam is the capital of Saudi Arabia\'s Eastern Province and a major hub for the oil and gas industry. Our taxi service covers Dammam city as well as the neighboring cities of Khobar and Dhahran. We provide professional door-to-door transfers for corporate clients, families, and individuals traveling within the Eastern Province.',
        popularRoutes: [
            { to: 'Bahrain', slug: 'bahrain-to-saudi-arabia-taxi' },
            { to: 'Riyadh', slug: 'riyadh-to-dammam-taxi' },
        ],
        attractions: ['King Fahd Park', 'Dammam Corniche', 'Coral Island', 'Khobar Waterfront', 'Half Moon Bay'],
        airportCode: 'DMM',
        airportName: 'King Fahd International Airport',
        airportSlug: 'dammam-airport-taxi',
        vehicleOptions: 'Individual and corporate travelers can use the Mercedes S-Class, BMW 7 Series, Ford Taurus, or Toyota Camry. Families in the Eastern Province often prefer the GMC Yukon XL or Cadillac Escalade. For larger groups, the Mercedes Vito, Sprinter, or a Executive Bus are available.',
        travelUses: 'Dammam taxis are commonly used for corporate oil and gas industry travel, airport transfers to King Fahd International Airport, hotel pickups, inter-city trips to Khobar and Bahrain via King Fahd Causeway, and long-distance travel to Riyadh.',
        faq: [
            { question: 'How do I book a taxi in Dammam?', answer: 'Book online through our platform or by WhatsApp. We will confirm your booking and driver details promptly.' },
            { question: 'Can taxis pick up from Dammam hotels?', answer: 'Yes. We provide pickups from all hotels in Dammam, Khobar, and Dhahran.' },
            { question: 'Do you offer airport transfers in Dammam?', answer: 'Yes. We serve King Fahd International Airport (DMM) with meet and greet service available.' },
            { question: 'Can I book a transfer to Bahrain?', answer: 'Yes. We provide cross-border transfers from Dammam to Manama via the King Fahd Causeway.' },
        ],
        bookingInfo: 'Book a taxi in Dammam for airport pickups, business travel, hotel drop-offs, or cross-border trips to Bahrain. Our service is available around the clock.',
    },
];

// ─── Testimonials ────────────────────────────────────────────────────
export interface Testimonial {
    name: string;
    role: string;
    content: string;
    rating: number;
    location: string;
}

export const testimonials: Testimonial[] = [
    {
        name: 'Ahmed Al-Rashid',
        role: 'Business Executive',
        content: 'Airport Travel Taxis made my Dubai to Abu Dhabi commute effortless. The driver was professional, the car was immaculate, and we arrived right on time. Highly recommended!',
        rating: 5,
        location: 'Dubai, UAE',
    },
    {
        name: 'Sarah Johnson',
        role: 'Tourist',
        content: 'Used their airport transfer in Doha. The driver was waiting with a sign, helped with all luggage, and the car had cold water ready. Five-star service!',
        rating: 5,
        location: 'Doha, Qatar',
    },
    {
        name: 'Mohammed Al-Saud',
        role: 'Corporate Client',
        content: 'We use Airport Travel Taxis for all our corporate transportation needs in Riyadh. Their fleet management and booking system is excellent. Reliable every single time.',
        rating: 5,
        location: 'Riyadh, KSA',
    },
    {
        name: 'Fatima Hassan',
        role: 'Frequent Traveler',
        content: 'The cross-border service from Bahrain to Saudi was seamless. They handled all the documentation and the ride was incredibly comfortable. Will definitely book again.',
        rating: 5,
        location: 'Manama, Bahrain',
    },
    {
        name: 'James Cooper',
        role: 'Expat',
        content: 'Reliable taxi service in the Gulf region. I\'ve used them in Dubai, Kuwait, and Muscat. Consistent quality across all locations. The app is easy to use too.',
        rating: 5,
        location: 'Kuwait City',
    },
    {
        name: 'Layla Al-Balushi',
        role: 'Travel Blogger',
        content: 'From Muscat to Dubai, the journey through the Hajar Mountains was breathtaking. The driver even stopped for photos at the scenic viewpoints. Above and beyond!',
        rating: 5,
        location: 'Muscat',
    },
];

// ─── FAQ ─────────────────────────────────────────────────────────────
export interface FAQItem {
    question: string;
    answer: string;
}

export const generalFAQ: FAQItem[] = [
    {
        question: 'Is there a unified taxi service that operates across Saudi Arabia, UAE, Kuwait, Qatar, and Bahrain?',
        answer: 'Yes, Airport Travel Taxis is a transportation network that operates across the United Arab Emirates, Saudi Arabia, Qatar, Kuwait, Bahrain. We specialize in cross-border and inter-city travel, connecting the entire Gulf region under one reliable platform.',
    },
    {
        question: 'What is the most reliable way to travel between major regional cities by car?',
        answer: 'The most reliable way to travel between major major regional cities is by booking a private inter-city transfer. We provide door-to-door service, modern vehicles, and professional chauffeurs who are highly experienced in long-distance Gulf highway navigation.',
    },
    {
        question: 'Which official border crossings do you operate on?',
        answer: 'We operate exclusively on the official border crossings: Al Nuwaiseeb & Al Khafji, King Fahd Causeway, Salwa border port, Al Batha border port, Hatta and Al Ain/Buraimi. We specialize in swift documentation processing ensuring your transfer across the region is fast and legal.',
    },
    {
        question: 'Are there hidden fees or extra tolls when booking a cross-border ride?',
        answer: 'No. Airport Travel Taxis operates on a strict transparent pricing model. Your upfront quote includes all border taxes, road tolls, and standard waiting times. What you see during booking is exactly what you pay in AED, SAR, QAR, KWD, BHD, or OMR.',
    },
    {
        question: 'What happens if my flight is delayed for an airport pickup?',
        answer: 'We offer complimentary real-time flight tracking for all airport transfers across the Gulf region. If your flight is delayed or arrives early, your chauffeur automatically adjusts their arrival time. We also provide up to 60 minutes of free waiting time after your flight lands.',
    },
    {
        question: 'Can I request a child seat or special accommodations for my family?',
        answer: 'Absolutely. We prioritize family safety and comfort. You can request complimentary child safety seats, infant carriers, or booster seats during the booking process. Our SUV and Van fleets offer ample space for strollers and family luggage.',
    },
    {
        question: 'Do you offer corporate billing and employee shuttle services?',
        answer: 'Yes, we provide tailored corporate transportation solutions for businesses operating across the Gulf. This includes monthly invoicing, dedicated account managers, VIP executive fleets, and coordinated event or employee shuttle logistics.',
    },
];

// ─── Stats ───────────────────────────────────────────────────────────
export const stats = [
    { value: '50K+', label: 'Happy Customers' },
    { value: '6', label: 'Saudi Arabia, UAE, Kuwait, Qatar, and Bahrain' },
    { value: '500+', label: 'Professional Drivers' },
    { value: '24/7', label: 'Service Available' },
];

// ─── Blog Posts ──────────────────────────────────────────────────────
export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'best-airports-gcc',
        title: 'Top 6 Airports in the Gulf region: A Complete Guide',
        excerpt: 'Explore the best airports across the Gulf Cooperation Council countries, from Dubai\'s mega-hub to Oman\'s architectural gem.',
        date: '2024-12-15',
        readTime: '8 min read',
        category: 'Travel Guide',
        image: '/blog/airports.jpg',
    },
    {
        slug: 'cross-border-travel-tips',
        title: 'Cross-Border Travel Tips: Navigating regional borders Like a Pro',
        excerpt: 'Everything you need to know about traveling between Saudi Arabia, UAE, Kuwait, Qatar, and Bahrain by road, including visa requirements and border procedures.',
        date: '2024-12-10',
        readTime: '6 min read',
        category: 'Travel Tips',
        image: '/blog/borders.jpg',
    },
    {
        slug: 'dubai-to-abu-dhabi-guide',
        title: 'The Ultimate Dubai to Abu Dhabi Road Trip Guide',
        excerpt: 'Plan the perfect road trip between Dubai and Abu Dhabi with our comprehensive guide covering routes, stops, and attractions.',
        date: '2024-12-05',
        readTime: '10 min read',
        category: 'Routes',
        image: '/blog/dubai-abudhabi.jpg',
    },
    {
        slug: 'corporate-transportation-gcc',
        title: 'Corporate Transportation Solutions in the Gulf',
        excerpt: 'Discover how modern corporate transportation services are transforming business travel across the Gulf region.',
        date: '2024-11-28',
        readTime: '5 min read',
        category: 'Business',
        image: '/blog/corporate.jpg',
    },
    {
        slug: 'hajj-umrah-transport',
        title: 'Hajj & Umrah Transportation: A Complete Planning Guide',
        excerpt: 'Plan your pilgrimage journey with our comprehensive guide to Hajj and Umrah transportation in Saudi Arabia.',
        date: '2024-11-20',
        readTime: '7 min read',
        category: 'Saudi Arabia',
        image: '/blog/hajj.jpg',
    },
    {
        slug: 'luxury-rides-gcc',
        title: 'Chauffeur Services in the Gulf: What to Expect',
        excerpt: 'From Mercedes to BMW, explore the world of professional chauffeur services across the region.',
        date: '2024-11-15',
        readTime: '6 min read',
        category: 'Luxury',
        image: '/blog/luxury.jpg',
    },
];

// ─── Popular Routes for Homepage ────────────────────────────────────
export const popularRoutes = [
    { from: 'Dubai', to: 'Abu Dhabi', duration: '1.5h', slug: 'dubai-to-abu-dhabi-taxi' },
    { from: 'Dubai', to: 'Riyadh', duration: '10h', slug: 'dubai-to-riyadh-taxi' },
    { from: 'Doha', to: 'Riyadh', duration: '5.5h', slug: 'doha-to-riyadh-taxi' },
    { from: 'Kuwait', to: 'Dammam', duration: '4.5h', slug: 'kuwait-to-dammam-taxi' },
    { from: 'Bahrain', to: 'Saudi Arabia', duration: '2h', slug: 'bahrain-to-saudi-arabia-taxi' },
    { from: 'Makkah', to: 'Madinah', duration: '4h', slug: 'makkah-to-madinah-taxi' },
];

// ─── Saudi Arabia, UAE, Kuwait, Qatar, and Bahrain ──────────────────────────────────────────────────
export const gccCountries = [
    { name: 'Saudi Arabia', code: 'SA', flag: '🇸🇦' },
    { name: 'United Arab Emirates', code: 'AE', flag: '🇦🇪' },
    { name: 'Qatar', code: 'QA', flag: '🇶🇦' },
    { name: 'Kuwait', code: 'KW', flag: '🇰🇼' },
    { name: 'Bahrain', code: 'BH', flag: '🇧🇭' },
];

// ─── Navigation Links ───────────────────────────────────────────────
export const navLinks = [
    { label: 'Home', href: '/' },
    {
        label: 'Borders', href: '#',
        children: [
            { label: 'Al Batha (UAE-KSA)', href: '/border/al-batha-border-taxi' },
            { label: 'Al Ghuwaifat (UAE-KSA)', href: '/border/al-ghuwaifat-border-taxi' },
            { label: 'Salwa (KSA-Qatar)', href: '/border/salwa-border-taxi' },
            { label: 'Abu Samra (Qatar-KSA)', href: '/border/abu-samra-border-taxi' },
            { label: 'King Fahd (Saudi-Bahrain)', href: '/border/king-fahd-causeway-taxi' },
            { label: 'Al Nuwaiseeb (Kuwait-KSA)', href: '/border/al-nuwaiseeb-border-taxi' },
            { label: 'Al Khafji (Kuwait-KSA)', href: '/border/al-khafji-border-taxi' },
        ],
    },
    {
        label: 'Services', href: '#',
        children: [
            { label: 'Airport Transfers', href: '/airport/dubai-airport-taxi' },
            { label: 'City to City', href: '/routes/dubai-to-abu-dhabi-taxi' },
            { label: 'Cross-Border', href: '/routes/dubai-to-riyadh-taxi' },
            { label: 'VIP Chauffeur', href: '/vip-chauffeur' },
            { label: 'Events & Weddings', href: '/events-and-weddings' },
            { label: 'Corporate', href: '/contact' },
        ],
    },
    { label: 'Fleet', href: '/fleet' },
    {
        label: 'Routes', href: '#',
        children: [
            { label: 'Dubai → Abu Dhabi', href: '/routes/dubai-to-abu-dhabi-taxi' },
            { label: 'Dubai → Riyadh', href: '/routes/dubai-to-riyadh-taxi' },
            { label: 'Doha → Riyadh', href: '/routes/doha-to-riyadh-taxi' },
            { label: 'Kuwait → Dammam', href: '/routes/kuwait-to-dammam-taxi' },
            { label: 'Bahrain → Saudi', href: '/routes/bahrain-to-saudi-arabia-taxi' },
        ],
    },
    { label: 'Driver Registration', href: '/drive-with-us' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
];


export const airports: Airport[] = deduplicateBySlug([...baseAirports, ...(extraAirports as any)]);
export const routes: Route[] = deduplicateBySlug([...baseRoutes, ...(extraRoutes as any)]);
export const cities: City[] = deduplicateBySlug([...baseCities, ...(extraCities as any)]);

export { borderCrossings };
export type { Border } from './extendedData';
