export interface LongDistancePage {
    slug: string;
    location: string;
    title: string;
    country: string;
    overview: string;
    popularRoutes: string[];
    pickupLocations: string[];
    travelTips: string[];
    faq: { question: string; answer: string }[];
    relatedPages: { name: string; url: string }[];
}

export const longDistancePages: LongDistancePage[] = [
    {
        slug: 'saudi-arabia',
        location: 'Saudi Arabia',
        title: 'Long Distance Taxi Service Saudi Arabia',
        country: 'Saudi Arabia',
        overview: 'Our long-distance taxi service in Saudi Arabia provides reliable road travel between all major provinces and cities. Whether you are traveling for business, family visits, or religious pilgrimage, we offer direct transportation across the Kingdom on high-quality road networks.',
        popularRoutes: [
            'Riyadh to Jeddah',
            'Riyadh to Dammam',
            'Riyadh to Madinah',
            'Jeddah to Makkah',
            'Dammam to Jubail',
            'Riyadh to Bahrain Border'
        ],
        pickupLocations: [
            'All International and Regional Airports',
            'Residential addresses and homes',
            'Hotels and resorts',
            'Corporate offices and business districts'
        ],
        travelTips: [
            'Plan and book your long-distance trip at least 24 hours in advance.',
            'Ensure all passengers carry valid national IDs or passports.',
            'Expect longer travel times during seasonal rush or prayer times.',
            'Allow time for rest stops at service stations for refreshments.'
        ],
        faq: [
            { question: 'How do long-distance taxi trips work in Saudi Arabia?', answer: 'You book a private vehicle that picks you up from your specific location and takes you directly to your destination city.' },
            { question: 'Can taxis travel between cities like Riyadh and Jeddah?', answer: 'Yes, we provide direct inter-city transfers across all major Saudi Arabian cities.' },
            { question: 'Is the service available for Umrah travelers?', answer: 'Yes, we specialize in transfers between airports, Jeddah, Makkah, and Madinah.' },
            { question: 'Are larger vehicles available for families?', answer: 'Yes, we have SUVs and 7-9 seater vans for comfortable family travel.' }
        ],
        relatedPages: [
            { name: 'Riyadh Airport Taxi', url: '/airport/riyadh-airport-taxi' },
            { name: 'Jeddah Airport Taxi', url: '/airport/king-abdulaziz-airport-taxi' },
            { name: 'Saudi-Bahrain Crossing', url: '/border/king-fahd-causeway-taxi' }
        ]
    },
    {
        slug: 'uae',
        location: 'United Arab Emirates',
        title: 'Long Distance Taxi Service United Arab Emirates',
        country: 'United Arab Emirates',
        overview: 'We provide professional long-distance taxi and chauffeur services across all seven Emirates. Our service connects major hubs like Dubai and Abu Dhabi with other northern and eastern areas, offering a reliable alternative to internal flights or public buses.',
        popularRoutes: [
            'Dubai to Abu Dhabi',
            'Dubai to Sharjah',
            'Abu Dhabi to Al Ain',
            'Dubai to Ras Al Khaimah',
            'Dubai to Fujairah',
            'Abu Dhabi to Oman Border'
        ],
        pickupLocations: [
            'Dubai, Abu Dhabi, and Sharjah Airports',
            'Hotels and landmarks',
            'Private residences',
            'Major business centers'
        ],
        travelTips: [
            'Allow extra travel time during weekday rush hours between Emirates.',
            'Confirm the destination Emirate and specific district for accurate routing.',
            'Keep your physical ID or passport with you at all times.',
            'Inform the driver if you require specific stops during the journey.'
        ],
        faq: [
            { question: 'Can I book a taxi from Dubai to Abu Dhabi?', answer: 'Yes, we provide frequent direct transfers between Dubai and Abu Dhabi.' },
            { question: 'How long does a trip between major Emirates take?', answer: 'A trip from Dubai to Abu Dhabi typically takes 1.5 to 2 hours depending on traffic.' },
            { question: 'Can the taxi travel to the Oman border?', answer: 'Yes, we provide cross-border and border-drop transfers to Hatta and Al Ain crossings.' },
            { question: 'Are vehicles suitable for long drives?', answer: 'Yes, our fleet includes professional sedans and SUVs built for highway comfort.' }
        ],
        relatedPages: [
            { name: 'Dubai Airport Taxi', url: '/airport/dubai-airport-taxi' },
            { name: 'Abu Dhabi Airport Taxi', url: '/airport/abu-dhabi-airport-taxi' },
            { name: 'Hatta Border Taxi', url: '/border/hatta-crossing-taxi' }
        ]
    },
    {
        slug: 'qatar',
        location: 'Qatar',
        title: 'Long Distance Taxi Service Qatar',
        country: 'Qatar',
        overview: 'Our long-distance service in Qatar connects Doha and Hamad International Airport with various industrial, residential, and border areas. We offer direct transportation for business professionals and local residents needing travel outside the central capital zone.',
        popularRoutes: [
            'Doha to Al Khor',
            'Doha to Mesaieed',
            'Doha to Al Ruwais',
            'Doha to Salwa Border',
            'Hamad Airport to Al Wakrah',
            'Doha to Lusail'
        ],
        pickupLocations: [
            'Hamad International Airport (DOH)',
            'Doha West Bay and Business District',
            'Hotels and residential towers',
            'International seaports'
        ],
        travelTips: [
            'Ensure you have your Qatar ID or passport available.',
            'Plan for desert weather conditions during long road trips.',
            'Confirm if your trip requires transit to the Saudi border at Salwa.',
            'Book in advance for travel during major events or holidays.'
        ],
        faq: [
            { question: 'How do long-distance trips work in Qatar?', answer: 'Our private service picks you up and drives you directly to any location within Qatar.' },
            { question: 'Can I book a taxi to the Saudi border?', answer: 'Yes, we provide direct service to the Abu Samra (Salwa) border crossing.' },
            { question: 'Are vehicles available for industrial area visits?', answer: 'Yes, we provide reliable transfers to Mesaieed and Ras Laffan industrial zones.' },
            { question: 'Is the service available at night?', answer: 'Yes, we operate 24/7 for all long-distance and airport transfers.' }
        ],
        relatedPages: [
            { name: 'Doha Airport Taxi', url: '/airport/doha-airport-taxi' },
            { name: 'Salwa Border Taxi', url: '/border/salwa-crossing-taxi' },
            { name: 'Taxi to West Bay', url: '/taxi-to-area/doha-airport-to-west-bay' }
        ]
    },
    {
        slug: 'kuwait',
        location: 'Kuwait',
        title: 'Long Distance Taxi Service Kuwait',
        country: 'Kuwait',
        overview: 'We offer reliable long-distance transportation across Kuwait, connecting Kuwait City and the international airport with northern and southern regions. Our service is ideal for those requiring direct transit to oil fields, border ports, or residential communities outside the metro area.',
        popularRoutes: [
            'Kuwait City to Al Jahra',
            'Kuwait City to Ahmadi',
            'Kuwait City to Nuwaiseeb Border',
            'Kuwait City to Abdali',
            'Kuwait Airport to Salmiya',
            'Kuwait City to Wafra'
        ],
        pickupLocations: [
            'Kuwait International Airport (KWI)',
            'Residential homes and apartments',
            'Commercial offices',
            'Hotels and resorts'
        ],
        travelTips: [
            'Allow for city traffic when departing from Kuwait City central zones.',
            'Ensure you have all necessary IDs for travel toward border areas.',
            'Confirm your vehicle choice based on the number of passengers and luggage.',
            'Check border operating hours if traveling to Nuwaiseeb or Abdali.'
        ],
        faq: [
            { question: 'Can I travel to the southern border by taxi?', answer: 'Yes, we provide direct service from Kuwait City and the airport to the Nuwaiseeb border.' },
            { question: 'How do I arrange a long-distance trip?', answer: 'Booking can be done online or via our 24/7 WhatsApp help desk.' },
            { question: 'Can cross-border trips to Saudi Arabia be arranged?', answer: 'Yes, we specialize in cross-border transfers through Kuwaiti land ports.' },
            { question: 'Are SUVs available for long trips?', answer: 'Yes, we have various SUV models for maximum comfort on the road.' }
        ],
        relatedPages: [
            { name: 'Kuwait Airport Taxi', url: '/airport/kuwait-airport-taxi' },
            { name: 'Nuwaiseeb Border Taxi', url: '/border/nuwaiseeb-crossing-taxi' },
            { name: 'Taxi to Salmiya', url: '/taxi-to-area/kuwait-airport-to-salmiya' }
        ]
    },
    {
        slug: 'bahrain',
        location: 'Bahrain',
        title: 'Long Distance Taxi Service Bahrain',
        country: 'Bahrain',
        overview: 'While Bahrain is an island nation, our long-distance service covers the length of the country and provides essential links across the King Fahd Causeway to Saudi Arabia. We offer professional transportation for cross-border transit and travel within all major Bahraini districts.',
        popularRoutes: [
            'Manama to King Fahd Causeway',
            'Manama to Zallaq',
            'Manama to Durrat Al Bahrain',
            'Bahrain Airport to Saudi Arabia',
            'Manama to Amwaj Islands',
            'Manama to Bahrain International Circuit'
        ],
        pickupLocations: [
            'Bahrain International Airport (BAH)',
            'Hotels and resorts',
            'Residences and apartments',
            'Business and government buildings'
        ],
        travelTips: [
            'Plan your cross-border Causeway trip carefully during weekend peak hours.',
            'Ensure all members of your group have valid passports and visas for Saudi entry.',
            'Inform the driver of your specific stop requirements within Bahrain.',
            'Allow extra time for causeway bridge traffic.'
        ],
        faq: [
            { question: 'Can taxis cross the King Fahd Causeway?', answer: 'Yes, we provide authorized cross-border transportation to Saudi Arabia.' },
            { question: 'Can I book a taxi from Manama to the Saudi border?', answer: 'Yes, we provide direct transfers to the King Fahd Causeway crossing.' },
            { question: 'How long from Manama to the airport?', answer: 'The drive typically takes 15 to 25 minutes depending on location.' },
            { question: 'Can I travel to Durrat Al Bahrain?', answer: 'Yes, we provide long-distance service to the southern-most points of the island.' }
        ],
        relatedPages: [
            { name: 'Bahrain Airport Taxi', url: '/airport/bahrain-airport-taxi' },
            { name: 'Causeway Taxi Service', url: '/border/king-fahd-causeway-taxi' },
            { name: 'Taxi to Juffair', url: '/taxi-to-area/bahrain-airport-to-juffair' }
        ]
    }
];
