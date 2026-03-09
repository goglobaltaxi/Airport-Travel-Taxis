export interface ServicePage {
    slug: string;
    topic: string;
    title: string;
    overview: string;
    howItWorks: string[];
    useCases: string[];
    travelTips: string[];
    faq: { question: string; answer: string }[];
    relatedPages: { name: string; url: string }[];
}

export const servicePages: ServicePage[] = [
    {
        slug: 'airport-transfers',
        topic: 'Airport Transfers',
        title: 'Airport Transfer Services in GCC',
        overview: 'Airport transfer services provide organized transportation between airports and city destinations. This service ensures travelers have a pre-arranged vehicle waiting upon arrival or a scheduled pickup for departures, avoiding the need for public taxi queues.',
        howItWorks: [
            'Book your transfer online by providing flight details and destination.',
            'Receive confirmation with your driver and vehicle information.',
            'For arrivals, meet your driver at the arrival terminal gate.',
            'For departures, the driver picks you up from your hotel or residence.',
            'Travel directly to your destination in a private vehicle.'
        ],
        useCases: [
            'Individual arrival pickups from major international airports.',
            'Scheduled departure transfers for flights anytime 24/7.',
            'Group transportation for families or business teams.',
            'Transfers between different airport terminals or nearby hotels.'
        ],
        travelTips: [
            'Share your flight number so the driver can track any delays.',
            'Book your airport transfer at least 24 hours in advance.',
            'Confirm the number of passengers and bags to receive the correct vehicle.',
            'Check for meet-and-greet instructions in your booking confirmation.'
        ],
        faq: [
            { question: 'How do airport transfers work?', answer: 'You pre-book a vehicle that meets you at the airport arrivals or picks you up from your address for a flight.' },
            { question: 'Is the service available at night?', answer: 'Yes, airport transfers operate 24 hours a day to match all flight schedules.' },
            { question: 'What if my flight is late?', answer: 'Drivers monitor flight statuses and adjust the pickup time accordingly.' }
        ],
        relatedPages: [
            { name: 'Dubai Airport Taxi', url: '/airport/dubai-airport-taxi' },
            { name: 'Riyadh Airport Taxi', url: '/airport/riyadh-airport-taxi' },
            { name: 'Airport Pickup Guide', url: '/travel-guide-airport-pickup-service' }
        ]
    },
    {
        slug: 'city-to-city-taxi',
        topic: 'City to City Taxi',
        title: 'City to City Taxi Services',
        overview: 'City-to-city taxi services allow travelers to book private road transportation between different cities in the GCC. This is a direct alternative to domestic flights or bus travel, offering the flexibility to travel on your own schedule.',
        howItWorks: [
            'Select your starting city and destination city.',
            'Choose a vehicle that suits your group size and luggage needs.',
            'Schedule a pickup from your doorstep at a time that suits you.',
            'Travel via high-speed regional road networks managed by professional drivers.',
            'Drop-off at your exact address in the destination city.'
        ],
        useCases: [
            'Travel between Riyadh and Jeddah or other major provinces.',
            'Moving between Dubai and Abu Dhabi for work or tourism.',
            'Inter-provincial travel for families on holiday.',
            'Transport to industrial zones or regional towns.'
        ],
        travelTips: [
            'Allow for traffic during peak hours when entering major cities.',
            'Plan for breaks during long-distance road trips over 4 hours.',
            'Ensure all passengers have their identification documents during the trip.',
            'Confirm your destination address clearly to the driver.'
        ],
        faq: [
            { question: 'Can taxis travel between cities?', answer: 'Yes, private road transfers are a common method for traveling between GCC cities.' },
            { question: 'Is there a limit on luggage?', answer: 'Luggage capacity depends on the vehicle type selected (Sedan, SUV, or Van).' },
            { question: 'Can I book a one-way trip?', answer: 'Yes, city-to-city services are available for both one-way and return journeys.' }
        ],
        relatedPages: [
            { name: 'Long Distance Taxi Saudi Arabia', url: '/long-distance-taxi-saudi-arabia' },
            { name: 'Dubai to Abu Dhabi Guide', url: '/best-way-to-travel-dubai-to-abu-dhabi' },
            { name: 'Inter-City Routes', url: '/routes' }
        ]
    },
    {
        slug: 'cross-border-taxi',
        topic: 'Cross Border Taxi',
        title: 'Cross Border Taxi Services in GCC',
        overview: 'Cross-border taxi services provide land transportation across international borders within the GCC. This service allows travelers to reach neighboring countries in a single vehicle, simplifying the transit through land border crossings.',
        howItWorks: [
            'Arrange for a vehicle licensed for international cross-border travel.',
            'Provide passenger information and visa status for border documentation.',
            'Driver coordinates the journey through designated land crossing points.',
            'The vehicle transits through customs and immigration checkpoints.',
            'Arrival and drop-off at your destination in the neighboring country.'
        ],
        useCases: [
            'Travel across the King Fahd Causeway between Bahrain and KSA.',
            'Movement between Kuwait and Saudi Arabia via land ports.',
            'Transfers between Qatar and Saudi Arabia via the Salwa border.',
            'Road travel between the UAE and Oman.'
        ],
        travelTips: [
            'Verify visa requirements for all passengers before arranging the trip.',
            'Carry physical passports as digital copies may not be accepted at land borders.',
            'Be aware of border crossing operating hours for different ports.',
            'Travel during off-peak hours to avoid long queues at customs.'
        ],
        faq: [
            { question: 'Can cross-border trips be arranged?', answer: 'Yes, authorized vehicles can transport passengers across land borders between GCC countries.' },
            { question: 'Do I stay in the same car at the border?', answer: 'Yes, the same vehicle and driver take you through the entire journey.' },
            { question: 'How long does border processing take?', answer: 'Processing time varies depending on the specific border and current traffic levels.' }
        ],
        relatedPages: [
            { name: 'Salwa Border Taxi', url: '/border/salwa-crossing-taxi' },
            { name: 'King Fahd Causeway Taxi', url: '/border/king-fahd-causeway-taxi' },
            { name: 'Cross Border Travel Guide', url: '/travel-guide-cross-border-taxi-gcc' }
        ]
    },
    {
        slug: 'private-driver',
        topic: 'Private Driver',
        title: 'Private Driver Services in GCC',
        overview: 'Private driver services offer travelers a dedicated chauffeur and vehicle for their specific transportation needs. This service is ideal for those who require personalized road travel for appointments, tourism, or long-distance itineraries.',
        howItWorks: [
            'Define your travel requirements, including locations and times.',
            'Select a vehicle type that meets your comfort and capacity needs.',
            'Meet your dedicated driver at the arranged pickup point.',
            'Maintain a private environment for your journey or daily activities.',
            'Utilize the driver for direct transit or multiple stops as planned.'
        ],
        useCases: [
            'Transportation for business professionals between offices.',
            'Sightseeing and tourism tours for families in new cities.',
            'Wait-and-return services for medical or government appointments.',
            'Daily driver arrangements for visitors staying for several days.'
        ],
        travelTips: [
            'Communicate your full itinerary to ensures efficient planning.',
            'Confirm the seating capacity for all passengers in your group.',
            'Allow for local road conditions and traffic patterns during the day.',
            'Book in advance to ensure the availability of your preferred vehicle.'
        ],
        faq: [
            { question: 'Can travelers arrange private drivers for long trips?', answer: 'Yes, private drivers can be booked for inter-city and regional road travel.' },
            { question: 'Are daily driver services available?', answer: 'Yes, services can be arranged for specific durations or single journeys.' },
            { question: 'Is the service available for group travel?', answer: 'Yes, we have vans and buses available for group private transportation.' }
        ],
        relatedPages: [
            { name: 'VIP Chauffeur Services', url: '/vip-chauffeur' },
            { name: 'Corporate Chauffeur Service', url: '/corporate-chauffeur-dubai' },
            { name: 'Fleet Overview', url: '/fleet' }
        ]
    },
    {
        slug: 'chauffeur-service',
        topic: 'Chauffeur Service',
        title: 'Professional Chauffeur Services',
        overview: 'Professional chauffeur services provide reliable, organized road transportation for business and individuals. Our chauffeurs are trained to manage your travel logistics, ensuring you arrive at your destination punctually and in a professional manner.',
        howItWorks: [
            'Schedule your chauffeur service for a specific route or timeframe.',
            'Your professional driver arrives at the pickup point in a maintained vehicle.',
            'Experience organized transit with a focus on reliability and punctuality.',
            'The driver handles all road navigation and parking details.',
            'Arrival at your destination following your personal or professional schedule.'
        ],
        useCases: [
            'Executive travel for business meetings and events.',
            'Official delegation transportation for embassies and organizations.',
            'Professional transport for weddings and corporate gatherings.',
            'Organized road travel for high-profile visitors and guests.'
        ],
        travelTips: [
            'Provide accurate contact details for the main passenger.',
            'Schedule pickups at least 15 minutes early for important meetings.',
            'Confirm the vehicle type if you have specific presentation requirements.',
            'Communicate any specific entry gate instructions for pickup sites.'
        ],
        faq: [
            { question: 'How do chauffeur services differ from standard taxis?', answer: 'Chauffeur services offer pre-booked, organized travel with a focus on professional standards and reliability.' },
            { question: 'Can I book a chauffeur for a whole day?', answer: 'Yes, chauffeur services can be arranged for hourly or daily durations.' },
            { question: 'Are executive vehicles available?', answer: 'Yes, our fleet includes sedans like the Mercedes S-Class and BMW models.' }
        ],
        relatedPages: [
            { name: 'Corporate Chauffeur Riyadh', url: '/corporate-chauffeur-riyadh' },
            { name: 'Executive Fleet', url: '/fleet' },
            { name: 'Business Travel Guide', url: '/travel-guide-private-driver-gcc' }
        ]
    }
];
