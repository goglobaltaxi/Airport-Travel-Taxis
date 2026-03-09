export interface DestinationPage {
    slug: string;
    destinationName: string;
    destinationType: 'Hotel' | 'Resort' | 'Landmark' | 'Tourist Attraction' | 'Marina' | 'Shopping Mall' | 'Cultural Site';
    city: string;
    cityCountry: string;
    district: string;
    approxTravelTime: string;
    description: string;
    longDescription: string;
    highlights: string[];
    travelTips: string[];
    faq: { question: string; answer: string }[];
    relatedRoutes: { name: string; slug: string; type: 'city' | 'airport' | 'route' }[];
}

export const destinationPages: DestinationPage[] = [

    // ─── Dubai ──────────────────────────────────────────────
    {
        slug: 'burj-al-arab-dubai',
        destinationName: 'Burj Al Arab',
        destinationType: 'Hotel',
        city: 'Dubai',
        cityCountry: 'United Arab Emirates',
        district: 'Jumeirah Beach Road, Jumeirah',
        approxTravelTime: '20–40 minutes from most Dubai areas',
        description: 'Taxi to Burj Al Arab Dubai. Door-to-door transfers to the iconic sail-shaped hotel on Jumeirah Beach Road.',
        longDescription: 'Burj Al Arab is one of Dubai\'s most recognizable landmarks, standing on its own man-made island off Jumeirah Beach Road. Whether you are visiting for a dining reservation, a hotel stay, or a guided tour, our taxi service provides comfortable and punctual transfers from any location in Dubai, including the airport and major hotels.',
        highlights: [
            'Located on a private island connected by a bridge',
            'One of Dubai\'s most photographed landmarks',
            'Home to Al Muntaha and Al Mahara restaurants',
            'Accessible via a causeway off Jumeirah Beach Road',
            'Popular for dining visits, hotel stays, and photography tours',
        ],
        travelTips: [
            'Non-hotel guests require a dining or spa reservation to access the property.',
            'Allow extra time during Jumeirah Beach Road traffic, especially on weekends.',
            'Inform your driver whether you are checking in as a guest or visiting for dining.',
            'Jumeirah traffic can be heavy on Friday evenings and weekends.',
            'Return transfers can be prebooked to avoid waiting after your visit.',
        ],
        faq: [
            { question: 'How do I get to Burj Al Arab by taxi?', answer: 'We provide door-to-door transfers from anywhere in Dubai to the Burj Al Arab entrance on Jumeirah Beach Road.' },
            { question: 'Can a taxi pick me up from Dubai Airport?', answer: 'Yes. We provide direct transfers from Dubai International Airport (DXB) to Burj Al Arab.' },
            { question: 'How long is the drive from Downtown Dubai?', answer: 'From Downtown Dubai, the journey takes approximately 20 to 30 minutes depending on traffic.' },
            { question: 'Are group vehicles available for hotel guests?', answer: 'Yes. We have SUVs and vans for groups and families traveling together.' },
            { question: 'Can I arrange a return pickup?', answer: 'Yes. Return transfers can be booked in advance or scheduled on the day of your visit.' },
        ],
        relatedRoutes: [
            { name: 'Dubai Taxi Service', slug: '/city/dubai-taxi', type: 'city' },
            { name: 'Dubai Airport Taxi', slug: '/airport/dubai-airport-taxi', type: 'airport' },
            { name: 'Dubai to Abu Dhabi Taxi', slug: '/routes/dubai-to-abu-dhabi-taxi', type: 'route' },
        ],
    },
    {
        slug: 'atlantis-the-palm-dubai',
        destinationName: 'Atlantis The Palm',
        destinationType: 'Resort',
        city: 'Dubai',
        cityCountry: 'United Arab Emirates',
        district: 'Palm Jumeirah, The Crescent',
        approxTravelTime: '25–45 minutes from most Dubai areas',
        description: 'Taxi to Atlantis The Palm Dubai. Transfers to the resort on Palm Jumeirah for hotel stays, dining, and Aquaventure visits.',
        longDescription: 'Atlantis The Palm sits at the apex of Palm Jumeirah and is one of Dubai\'s most visited resorts. It is home to Aquaventure Waterpark, a wide range of restaurants, and extensive event spaces. Our taxi service provides transfers from anywhere in Dubai, including the airport, hotels, and city center, directly to the resort entrance.',
        highlights: [
            'Located at the apex of Palm Jumeirah',
            'Home to Aquaventure Waterpark',
            'Multiple restaurants and entertainment venues',
            'Popular for family stays, events, and day visits',
            'Accessible via the Palm Monorail gateway or road',
        ],
        travelTips: [
            'Palm Jumeirah access can have traffic at peak times; allow extra time.',
            'Inform your driver whether you need the hotel entrance or Aquaventure entrance.',
            'For Aquaventure visits, bring valid tickets before arriving.',
            'Parking on Palm Jumeirah is managed; a drop-off service is more convenient.',
            'Evening dining transfers to Atlantis should account for weekend traffic.',
        ],
        faq: [
            { question: 'How do I get to Atlantis The Palm by taxi?', answer: 'We offer direct taxi transfers from any location in Dubai to Atlantis The Palm on Palm Jumeirah.' },
            { question: 'Can I get a pickup from Dubai Airport to Atlantis?', answer: 'Yes. We provide direct transfers from Dubai International Airport to Atlantis The Palm.' },
            { question: 'How long is the drive from Dubai Marina to Atlantis?', answer: 'From Dubai Marina, the journey takes approximately 15 to 25 minutes.' },
            { question: 'Are family-sized vehicles available?', answer: 'Yes. We have large SUVs and vans suitable for families and groups.' },
            { question: 'Can I book a return transfer back from Atlantis?', answer: 'Yes. Return trips can be prebooked or arranged during your visit.' },
        ],
        relatedRoutes: [
            { name: 'Dubai Taxi Service', slug: '/city/dubai-taxi', type: 'city' },
            { name: 'Dubai Airport Taxi', slug: '/airport/dubai-airport-taxi', type: 'airport' },
            { name: 'Dubai to Abu Dhabi Taxi', slug: '/routes/dubai-to-abu-dhabi-taxi', type: 'route' },
        ],
    },
    // ─── Abu Dhabi ───────────────────────────────────────────
    {
        slug: 'yas-island-abu-dhabi',
        destinationName: 'Yas Island',
        destinationType: 'Tourist Attraction',
        city: 'Abu Dhabi',
        cityCountry: 'United Arab Emirates',
        district: 'Yas Island, Abu Dhabi',
        approxTravelTime: '20–40 minutes from Abu Dhabi city, 60–90 minutes from Dubai',
        description: 'Taxi to Yas Island Abu Dhabi. Transfers to Ferrari World, Yas Waterworld, Warner Bros. World, and Yas Marina Circuit.',
        longDescription: 'Yas Island is Abu Dhabi\'s dedicated entertainment hub, home to Ferrari World, Yas Waterworld, Warner Bros. World, and Yas Marina Circuit. It attracts families, motorsport fans, and theme park visitors from across the UAE and the Gulf. Our taxi service provides transfers from Abu Dhabi, Dubai, and the airport directly to your destination on the island.',
        highlights: [
            'Ferrari World Abu Dhabi — theme park with the world\'s fastest roller coaster',
            'Yas Waterworld — waterpark with slides and wave pools',
            'Warner Bros. World — indoor theme park',
            'Yas Marina Circuit — Formula 1 Grand Prix venue',
            'Yas Mall and Hotel accommodation on the island',
        ],
        travelTips: [
            'Yas Island has multiple attractions; specify your destination to your driver.',
            'Pre-purchase attraction tickets to avoid queues at entry.',
            'The drive from Dubai takes about 60 to 90 minutes by road.',
            'Weekends are busier; an early start is recommended for families.',
            'Arrange a return transfer before you enter the park for smooth end-of-day departure.',
        ],
        faq: [
            { question: 'How do I get to Yas Island from Abu Dhabi city?', answer: 'We provide door-to-door transfers from any Abu Dhabi location to your specific destination on Yas Island.' },
            { question: 'Can I travel from Dubai to Yas Island by taxi?', answer: 'Yes. We offer direct intercity transfers from Dubai to Yas Island, about a 60 to 90-minute journey.' },
            { question: 'Is airport transfer to Yas Island available?', answer: 'Yes. We transfer from Zayed International Airport directly to Yas Island.' },
            { question: 'Can I book a taxi to Ferrari World specifically?', answer: 'Yes. Your driver will drop you at the Ferrari World entrance on Yas Island.' },
            { question: 'Are family vehicles available?', answer: 'Yes. Large SUVs and vans are available for families and groups visiting Yas Island.' },
        ],
        relatedRoutes: [
            { name: 'Abu Dhabi Taxi Service', slug: '/city/abu-dhabi-taxi', type: 'city' },
            { name: 'Abu Dhabi Airport Taxi', slug: '/airport/abu-dhabi-airport-taxi', type: 'airport' },
            { name: 'Dubai to Abu Dhabi Taxi', slug: '/routes/dubai-to-abu-dhabi-taxi', type: 'route' },
        ],
    },

    // ─── Riyadh ──────────────────────────────────────────────
    {
        slug: 'ritz-carlton-riyadh',
        destinationName: 'The Ritz-Carlton Riyadh',
        destinationType: 'Hotel',
        city: 'Riyadh',
        cityCountry: 'Saudi Arabia',
        district: 'Mujamea Area, Northern Riyadh',
        approxTravelTime: '20–40 minutes from central Riyadh',
        description: 'Taxi to The Ritz-Carlton Riyadh. Transfers for hotel guests, business visitors, and event attendees in northern Riyadh.',
        longDescription: 'The Ritz-Carlton Riyadh is a landmark hotel set within a historic palace-style property in the northern part of the city. It hosts business conferences, weddings, diplomatic events, and visiting dignitaries. Our taxi service provides professional, on-time transfers from any Riyadh location, including the airport and business districts.',
        highlights: [
            'Set within the Al Khozama palace-style complex',
            'Major venue for conferences and corporate events in Riyadh',
            'Located near the Diplomatic Quarter and major business areas',
            'Features multiple dining venues and extensive gardens',
            'Regularly hosts state-level events and diplomatic gatherings',
        ],
        travelTips: [
            'The hotel has a specific entrance gate; confirm which entrance applies to your visit.',
            'Security checks may be in place for large events; arrive early.',
            'Carry your booking confirmation or event invitation.',
            'Traffic in northern Riyadh can be heavy during morning and evening periods.',
            'Return transfers can be arranged by contacting us during your visit.',
        ],
        faq: [
            { question: 'How do I get to The Ritz-Carlton Riyadh by taxi?', answer: 'We offer direct door-to-door transfers from any location in Riyadh to The Ritz-Carlton hotel entrance.' },
            { question: 'Can I get a transfer from Riyadh Airport to the hotel?', answer: 'Yes. We provide direct transfers from King Khalid International Airport to The Ritz-Carlton Riyadh.' },
            { question: 'Do you serve business travelers to the hotel for conferences?', answer: 'Yes. We regularly transfer corporate guests and event attendees to and from the property.' },
            { question: 'How long is the drive from King Abdullah Financial District?', answer: 'From KAFD, the journey to The Ritz-Carlton Riyadh typically takes 15 to 25 minutes.' },
            { question: 'Can I book a return transfer from the hotel?', answer: 'Yes. Return trips can be prebooked. Our drivers can also wait on-site if required.' },
        ],
        relatedRoutes: [
            { name: 'Riyadh Taxi Service', slug: '/city/riyadh-taxi', type: 'city' },
            { name: 'Riyadh Airport Taxi', slug: '/airport/riyadh-airport-taxi', type: 'airport' },
            { name: 'Riyadh to Jeddah Taxi', slug: '/routes/riyadh-to-jeddah-taxi', type: 'route' },
        ],
    },
    {
        slug: 'diriyah-riyadh',
        destinationName: 'Diriyah',
        destinationType: 'Cultural Site',
        city: 'Riyadh',
        cityCountry: 'Saudi Arabia',
        district: 'Al Bujairi, Wadi Hanifah, Northwest Riyadh',
        approxTravelTime: '20–40 minutes from central Riyadh',
        description: 'Taxi to Diriyah in Riyadh. Transfers to Diriyah\'s Al Bujairi heritage area, At-Turaif UNESCO site, and cultural district.',
        longDescription: 'Diriyah is a UNESCO World Heritage Site located in Wadi Hanifah on the northwestern edge of Riyadh. It was the original home of the Saudi royal family and is now a major cultural and tourism destination. The Al Bujairi heritage area and At-Turaif mud-brick citadel are open to visitors. Our taxi service provides easy transfers from any part of Riyadh.',
        highlights: [
            'At-Turaif District — UNESCO World Heritage Site',
            'Al Bujairi Heritage Park with restaurants and cultural spaces',
            'Birthplace of the first Saudi state in the 18th century',
            'Traditional Najdi mud-brick architecture',
            'Regular cultural events, festivals, and art installations',
        ],
        travelTips: [
            'Diriyah is best visited in the cooler months from October to March.',
            'Wear comfortable shoes as the heritage area involves walking on uneven terrain.',
            'Check opening hours and event schedules on the Diriyah website.',
            'Photography is allowed in most outdoor areas of the district.',
            'Evenings are popular for dining at Al Bujairi; book return transfers in advance.',
        ],
        faq: [
            { question: 'How do I get to Diriyah from Riyadh?', answer: 'We provide direct taxi transfers from any location in Riyadh to the Diriyah entrance gates, including Al Bujairi and At-Turaif.' },
            { question: 'Is airport transfer to Diriyah available?', answer: 'Yes. We transfer directly from King Khalid International Airport to Diriyah.' },
            { question: 'How far is Diriyah from central Riyadh?', answer: 'Diriyah is approximately 15 to 20 km from the city center, taking 20 to 35 minutes by road.' },
            { question: 'Are group transfers available for tourist parties?', answer: 'Yes. We have vans and minibuses available for tourist groups and families.' },
            { question: 'Can I book a driver to wait during my Diriyah visit?', answer: 'Yes. Driver waiting time can be arranged when you place your booking.' },
        ],
        relatedRoutes: [
            { name: 'Riyadh Taxi Service', slug: '/city/riyadh-taxi', type: 'city' },
            { name: 'Riyadh Airport Taxi', slug: '/airport/riyadh-airport-taxi', type: 'airport' },
            { name: 'Riyadh to Dammam Taxi', slug: '/routes/riyadh-to-dammam-taxi', type: 'route' },
        ],
    },

    // ─── Doha ───────────────────────────────────────────────
    {
        slug: 'lusail-marina-doha',
        destinationName: 'Lusail Marina',
        destinationType: 'Marina',
        city: 'Doha',
        cityCountry: 'Qatar',
        district: 'Lusail City, North Doha',
        approxTravelTime: '20–35 minutes from central Doha',
        description: 'Taxi to Lusail Marina in Doha. Transfers to the waterfront district for dining, events, and the Lusail City development.',
        longDescription: 'Lusail Marina is part of Lusail City, Qatar\'s planned urban development located north of Doha. The marina area features waterfront promenades, restaurants, retail outlets, and is adjacent to the Lusail Stadium used in the 2022 FIFA World Cup. Our taxi service provides easy transfers from any part of Doha to the marina area.',
        highlights: [
            'Waterfront promenade with restaurants and cafes',
            'Adjacent to Lusail Stadium — 2022 FIFA World Cup venue',
            'Modern retail outlets and entertainment venues',
            'Part of the planned Lusail City development',
            'Popular for evening walks, dining, and waterfront events',
        ],
        travelTips: [
            'Lusail Marina is a large area; specify whether you need the marina promenade or a specific venue.',
            'Evening visits to the waterfront may coincide with events; allow extra travel time.',
            'Parking at Lusail Marina is available but can fill up on weekends.',
            'Many dining venues at the marina require reservations on busy evenings.',
            'Return transfers should be arranged in advance, especially on event nights.',
        ],
        faq: [
            { question: 'How do I get to Lusail Marina from Doha?', answer: 'We provide direct taxi transfers from anywhere in Doha to Lusail Marina, approximately 25 to 35 minutes away.' },
            { question: 'Can I get a pickup from Hamad International Airport?', answer: 'Yes. We offer direct transfers from Hamad Airport to Lusail Marina.' },
            { question: 'How far is Lusail Marina from The Pearl-Qatar?', answer: 'Lusail Marina is approximately 10 to 15 minutes north of The Pearl-Qatar.' },
            { question: 'Are group vehicles available for families or tour groups?', answer: 'Yes. SUVs and vans are available for group travel to Lusail Marina.' },
            { question: 'Can I book a taxi to Lusail Stadium nearby?', answer: 'Yes. We provide transfers to Lusail Stadium and the surrounding Lusail City district.' },
        ],
        relatedRoutes: [
            { name: 'Doha Taxi Service', slug: '/city/doha-taxi', type: 'city' },
            { name: 'Doha Airport Taxi', slug: '/airport/doha-airport-taxi', type: 'airport' },
            { name: 'Doha to Riyadh Taxi', slug: '/routes/doha-to-riyadh-taxi', type: 'route' },
        ],
    },
    {
        slug: 'the-pearl-qatar-doha',
        destinationName: 'The Pearl-Qatar',
        destinationType: 'Tourist Attraction',
        city: 'Doha',
        cityCountry: 'Qatar',
        district: 'The Pearl-Qatar Island, North Doha',
        approxTravelTime: '15–30 minutes from central Doha',
        description: 'Taxi to The Pearl-Qatar in Doha. Transfers to the upscale waterfront island for dining, shopping, and coastal walks.',
        longDescription: 'The Pearl-Qatar is an artificial island off the coast of Doha, known for its marina promenades, upscale dining, boutique retail, and residential towers. It is one of Doha\'s most visited areas for leisure, dining, and events. Our taxi service provides transfers from anywhere in Doha, including the airport, directly to The Pearl.',
        highlights: [
            'Qanat Quartier — Venice-inspired waterway district',
            'Medina Centrale — main dining and retail hub',
            'Marinas with waterfront promenades',
            'Boutique shops and international restaurant brands',
            'Regular events and night markets',
        ],
        travelTips: [
            'Specify whether you need Qanat Quartier, Medina Centrale, or a specific address.',
            'Evening traffic into The Pearl can be slow on weekends.',
            'Parking at The Pearl is available but congested on Friday evenings.',
            'Many restaurants at The Pearl require reservations at busy times.',
            'Return transfers should be booked in advance for weekend evenings.',
        ],
        faq: [
            { question: 'How do I get to The Pearl-Qatar by taxi?', answer: 'We offer direct transfers from any location in Doha to your specific destination within The Pearl-Qatar.' },
            { question: 'Can I get a transfer from Hamad Airport to The Pearl?', answer: 'Yes. We provide direct transfers from Hamad International Airport to The Pearl-Qatar.' },
            { question: 'How far is The Pearl from downtown Doha?', answer: 'The Pearl is approximately 6 to 8 km from central Doha, a 15 to 25 minute drive.' },
            { question: 'Are group vehicles available?', answer: 'Yes. We have SUVs and passenger vans for families and small groups.' },
            { question: 'Can I book both arrival and return transfers?', answer: 'Yes. Round-trip bookings can be arranged when you make your reservation.' },
        ],
        relatedRoutes: [
            { name: 'Doha Taxi Service', slug: '/city/doha-taxi', type: 'city' },
            { name: 'Doha Airport Taxi', slug: '/airport/doha-airport-taxi', type: 'airport' },
            { name: 'Doha to Dammam Taxi', slug: '/routes/doha-to-dammam-taxi', type: 'route' },
        ],
    },

    // ─── Kuwait City ─────────────────────────────────────────
    // ─── Muscat ──────────────────────────────────────────────
];
