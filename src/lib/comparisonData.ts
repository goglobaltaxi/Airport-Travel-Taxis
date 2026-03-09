export interface ComparisonPage {
    slug: string;
    cityA: string;
    cityB: string;
    title: string;
    overview: string;
    options: {
        method: string;
        description: string;
        time: string;
    }[];
    highlights: string[];
    whenToChoose: string[];
    faq: { question: string; answer: string }[];
    relatedPages: { name: string; url: string }[];
}

export const comparisonPages: ComparisonPage[] = [
    {
        slug: 'riyadh-to-jeddah',
        cityA: 'Riyadh',
        cityB: 'Jeddah',
        title: 'Travel Options from Riyadh to Jeddah',
        overview: 'Traveling from Riyadh to Jeddah involves crossing a significant part of the Arabian Peninsula. This route is popular for business, family visits, and religious pilgrimage, with several transport methods available to suit different traveler needs.',
        options: [
            {
                method: 'Private Taxi / Chauffeur',
                description: 'A direct door-to-door service that provides a private environment for the entire journey. This method allows for flexible departure times and personalized stops along the way.',
                time: '9 to 11 hours'
            },
            {
                method: 'Domestic Flight',
                description: 'A quick method connecting King Khalid Airport (RUH) with King Abdulaziz Airport (JED). Requires travel to and from the airport plus check-in time.',
                time: '1 hour 40 minutes flight time'
            },
            {
                method: 'Bus Travel',
                description: 'A shared transportation option that follows fixed schedules and stops at designated stations across the route.',
                time: '12 to 14 hours'
            }
        ],
        highlights: [
            'Direct transportation from your home or office to your exact destination.',
            'Ability to schedule departures at any hour of the day or night.',
            'Spacious vehicles for families and those with significant luggage.',
            'Privacy during the long journey across the country.'
        ],
        whenToChoose: [
            'When traveling with a large family or group where sharing a vehicle is more convenient.',
            'When carrying heavy baggage that would be difficult to manage at airports or bus stations.',
            'When a direct doorstep pickup and drop-off is required to save time in the city.',
            'When travelers prefer to avoid airport security and check-in procedures.'
        ],
        faq: [
            { question: 'What is a popular way to travel from Riyadh to Jeddah?', answer: 'Flying is a quick method, although it requires travel to and from airports.' },
            { question: 'Is private road travel available between Riyadh and Jeddah?', answer: 'Yes, private transfers can be arranged for a direct road journey.' },
            { question: 'Can I choose my departure time for a private transfer?', answer: 'Yes, private taxis operate on your schedule and can depart at any time.' }
        ],
        relatedPages: [
            { name: 'Riyadh Airport Taxi', url: '/airport/riyadh-airport-taxi' },
            { name: 'Jeddah Airport Taxi', url: '/airport/king-abdulaziz-airport-taxi' },
            { name: 'Long Distance Taxi Saudi Arabia', url: '/long-distance-taxi-saudi-arabia' }
        ]
    },
    {
        slug: 'dubai-to-abu-dhabi',
        cityA: 'Dubai',
        cityB: 'Abu Dhabi',
        title: 'Travel Options from Dubai to Abu Dhabi',
        overview: 'The route between Dubai and Abu Dhabi is a frequently traveled corridor in the UAE. Residents and tourists move between these two hubs for work, leisure, and airport connections.',
        options: [
            {
                method: 'Private Taxi / Chauffeur',
                description: 'A reliable door-to-door service that avoids the need for transit to stations. Ideal for those wanting a direct path between any residence or hotel in either city.',
                time: '1 hour 30 minutes to 2 hours'
            },
            {
                method: 'Inter-City Bus',
                description: 'A public transport service that operates from major bus stations like Al Ghubaiba or Ibn Battuta.',
                time: '2 to 2.5 hours'
            },
            {
                method: 'Private Vehicle / Own Car',
                description: 'Driving yourself via the E11 or E311 highways that connect the two cities.',
                time: '1 hour 30 minutes'
            }
        ],
        highlights: [
            'Point-to-point transit that eliminates the need for additional city taxis to reach stations.',
            'Professional drivers who are familiar with the highway regulations and traffic patterns.',
            'Availability of different vehicle types to accommodate business travelers or families.',
            'Flexibility to be picked up from any location including airports and malls.'
        ],
        whenToChoose: [
            'When you have a tight schedule and cannot wait for fixed bus departure times.',
            'When you are traveling with several shopping bags or suitcases.',
            'When you need to reach a specific residential area that is far from central bus stations.',
            'For business professionals who need to work during the transit.'
        ],
        faq: [
            { question: 'How long does it take to travel from Dubai to Abu Dhabi by taxi?', answer: 'The journey typically takes between 90 minutes and 2 hours depending on traffic.' },
            { question: 'Is there a train between Dubai and Abu Dhabi?', answer: 'Currently, road transport is the primary method for this route.' },
            { question: 'Can I arrange a pickup from Dubai Airport to Abu Dhabi?', answer: 'Yes, direct airport to city transfers are a standard service for this route.' }
        ],
        relatedPages: [
            { name: 'Dubai Airport Taxi', url: '/airport/dubai-airport-taxi' },
            { name: 'Abu Dhabi Airport Taxi', url: '/airport/abu-dhabi-airport-taxi' },
            { name: 'Dubai City Taxi', url: '/city/dubai-taxi' }
        ]
    },
    {
        slug: 'doha-to-riyadh',
        cityA: 'Doha',
        cityB: 'Riyadh',
        title: 'Travel Options from Doha to Riyadh',
        overview: 'Traveling from Doha to Riyadh involves crossing the border between Qatar and Saudi Arabia. This is a common route for regional business and residents moving between the two capitals.',
        options: [
            {
                method: 'Cross-Border Private Taxi',
                description: 'A direct service that handles the journey through the Salwa border crossing. This provides a continuous journey without the need to switch vehicles at the border.',
                time: '5 to 7 hours'
            },
            {
                method: 'International Flight',
                description: 'Several airlines operate direct flights between Hamad Airport (DOH) and King Khalid Airport (RUH).',
                time: '1 hour 25 minutes flight time'
            },
            {
                method: 'Personal Drive',
                description: 'Driving a private vehicle across the land border, requiring all necessary customs and insurance documentation.',
                time: '6 to 8 hours'
            }
        ],
        highlights: [
            'Seamless border transit with a single vehicle and driver.',
            'Assistance with luggage during the entire trip.',
            'Freedom to schedule departures to avoid peak border crossing times.',
            'Comfortable highway travel on well-maintained regional roads.'
        ],
        whenToChoose: [
            'When you prefer a private environment over a shared commercial flight.',
            'When you are carrying baggage that exceeds standard airline weight limits.',
            'When you need to reach a specific district in Riyadh directly from a Doha residence.',
            'To avoid the procedures and waiting times associated with international airports.'
        ],
        faq: [
            { question: 'Can I travel by land from Doha to Riyadh?', answer: 'Yes, the land route through the Salwa border is a common travel path.' },
            { question: 'Is a passport required for the road trip?', answer: 'Yes, international road travel requires valid passports and visas for all travelers.' },
            { question: 'What is a reliable way to travel between these cities?', answer: 'Private transfers and flights both offer high levels of reliability depending on your preferences.' }
        ],
        relatedPages: [
            { name: 'Doha Airport Taxi', url: '/airport/doha-airport-taxi' },
            { name: 'Salwa Border Taxi', url: '/border/salwa-crossing-taxi' },
            { name: 'Riyadh Airport Taxi', url: '/airport/riyadh-airport-taxi' }
        ]
    },
    {
        slug: 'kuwait-city-to-dammam',
        cityA: 'Kuwait City',
        cityB: 'Dammam',
        title: 'Travel Options from Kuwait City to Dammam',
        overview: 'The route from Kuwait City to Dammam is an important connection between Kuwait and the Eastern Province of Saudi Arabia. It is frequently used for business and family travel.',
        options: [
            {
                method: 'Cross-Border Private Taxi',
                description: 'A professional service that connects Kuwait City directly with Dammam via the Nuwaiseeb and Al Khafji border.',
                time: '4 to 5 hours'
            },
            {
                method: 'Regional Flight',
                description: 'Short flights connecting Kuwait International (KWI) with King Fahd International (DMM).',
                time: '1 hour flight time'
            },
            {
                method: 'International Bus',
                description: 'Scheduled bus services that run between the two cities with fixed stops.',
                time: '6 to 7 hours'
            }
        ],
        highlights: [
            'Avoid the need for connecting flights or airport transits.',
            'Direct pickup from any residential or business address in Kuwait.',
            'Simplified customs and immigration process with a professional driver.',
            'Flexible scheduling to suit your specific arrival requirements in Dammam.'
        ],
        whenToChoose: [
            'When you want to travel directly between addresses without using terminals.',
            'When traveling with a group where a private van or SUV is more practical.',
            'When you have significant luggage that would be difficult to manage on a bus or plane.',
            'To have a more personalized and flexible travel experience.'
        ],
        faq: [
            { question: 'Can a taxi take me from Kuwait to Dammam?', answer: 'Yes, private cross-border transfers are available for this city-to-city route.' },
            { question: 'How long does the land journey take?', answer: 'The trip usually takes 4 to 5 hours depending on border processing times.' },
            { question: 'Is road travel available 24/7?', answer: 'Private transfers can be scheduled at any time, although border hours should be considered.' }
        ],
        relatedPages: [
            { name: 'Kuwait Airport Taxi', url: '/airport/kuwait-airport-taxi' },
            { name: 'Nuwaiseeb Border Taxi', url: '/border/nuwaiseeb-crossing-taxi' },
            { name: 'Dammam Taxi Service', url: '/city/dammam-taxi' }
        ]
    }
];
