export interface StadiumPage {
    slug: string;
    stadiumName: string;
    stadiumType: 'Football Stadium' | 'Sports Venue' | 'Concert Venue' | 'Olympic Stadium' | 'Multi-purpose Stadium';
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

export const stadiumPages: StadiumPage[] = [
    {
        slug: 'lusail-stadium-doha',
        stadiumName: 'Lusail Stadium',
        stadiumType: 'Football Stadium',
        city: 'Doha',
        cityCountry: 'Qatar',
        locationDetails: 'Lusail City, North Doha',
        approxTravelTime: '20–35 minutes from central Doha and Hamad Airport',
        description: 'Taxi to Lusail Stadium Doha. Professional transfers for football matches, major finals, and international events in Lusail City.',
        longDescription: 'Lusail Stadium is Qatar\'s most iconic sports venue and the flagship stadium of the 2022 FIFA World Cup. Located in the modern Lusail City, it is a masterpiece of architectural design and a major destination for international sports and entertainment. Our taxi service provides organized and reliable transfers from any location in Doha directly to the stadium area.',
        features: [
            'Largest stadium in Qatar and a global architectural icon',
            'Host venue for major international football finals',
            'State-of-the-art facilities with advanced climate control',
            'Located in the heart of the modern Lusail City development',
            'Primary venue for high-profile matches and national celebrations',
        ],
        travelTips: [
            'Arrive at least 2 to 3 hours before an event start to clear security and find your gate.',
            'Confirm the specific stadium gate or drop-off zone with your driver.',
            'Expect road closures and traffic management during major matches or concerts.',
            'Ensure you have your digital tickets and identification ready for port security.',
            'Pre-book your return taxi to ensure a dedicated vehicle is ready after the event ends.',
        ],
        faq: [
            { question: 'How do I reach Lusail Stadium from Doha?', answer: 'We offer direct door-to-door transfers from any hotel or residence in Doha to the Lusail Stadium area.' },
            { question: 'Can I book a taxi from Hamad Airport to the stadium?', answer: 'Yes. We provide direct transfers from Hamad International Airport (DOH) to the stadium.' },
            { question: 'Can large groups travel together to the match?', answer: 'Yes. We have high-capacity vans and minibuses available for fan groups and families.' },
            { question: 'Is it easy to get a taxi after a large match?', answer: 'Matches attract large crowds; we strongly recommend pre-booking your return transfer for a guaranteed pickup.' },
            { question: 'How long is the drive from West Bay?', answer: 'From the West Bay business district, the drive typically takes 15 to 25 minutes depending on traffic.' },
        ],
        relatedRoutes: [
            { name: 'Doha Taxi Service', slug: '/city/doha-taxi', type: 'city' },
            { name: 'Doha Airport Taxi', slug: '/airport/doha-airport-taxi', type: 'airport' },
            { name: 'Taxi to Lusail Marina', slug: '/taxi-to-destination/lusail-marina-doha', type: 'route' },
        ],
    },
    {
        slug: 'king-fahd-stadium-riyadh',
        stadiumName: 'King Fahd International Stadium',
        stadiumType: 'Football Stadium',
        city: 'Riyadh',
        cityCountry: 'Saudi Arabia',
        locationDetails: 'Eastern Riyadh near Khuraais Road',
        approxTravelTime: '25–45 minutes from central Riyadh',
        description: 'Taxi to King Fahd International Stadium Riyadh. Direct transfers for international football matches and major sports events in Riyadh.',
        longDescription: 'King Fahd International Stadium, also known as the "Pearl of Stadiums," is a multi-purpose venue in Riyadh. It is famous for its unique tent-shaped roof and hosts major football matches for the Saudi national team and local clubs. Our taxi service provides pro-active transfers from central Riyadh and the airport to this iconic sporting landmark.',
        features: [
            'One of the largest and most recognizable stadiums in the Middle East',
            'Unique architectural design featuring an iconic tent-like roof',
            'Hosts major international football tournaments and local league matches',
            'Equipped with modern spectator facilities and VIP areas',
            'Key venue for Saudi national team matches and major finals',
        ],
        travelTips: [
            'Arrive early as traffic on Khuraais Road and surrounding areas can be heavy during matches.',
            'Verify your entrance gate on your ticket before arriving at the stadium.',
            'Allow extra travel time during the evening hours for high-profile local derbies.',
            'Inform your driver whether you need the public entrance or the media/VIP gates.',
            'Pre-book your return trip as on-demand availability can be limited immediately after events.',
        ],
        faq: [
            { question: 'How do I get to King Fahd Stadium by taxi?', answer: 'We provide direct transfers from any location in Riyadh to the stadium entrance.' },
            { question: 'Is airport pickup available for the stadium?', answer: 'Yes. We offer transfers from King Khalid International Airport (RUH) directly to the stadium.' },
            { question: 'Are there vehicles for large groups of fans?', answer: 'Yes. We have SUVs and passenger vans available for family and group outings.' },
            { question: 'How far is the stadium from central Riyadh?', answer: 'The stadium is located in the eastern part of the city, typically 30 to 45 minutes from the center.' },
            { question: 'Can I book a return transfer after the game?', answer: 'Yes. Scheduled return pickups ensure you have a vehicle waiting at the designated area.' },
        ],
        relatedRoutes: [
            { name: 'Riyadh Taxi Service', slug: '/city/riyadh-taxi', type: 'city' },
            { name: 'Riyadh Airport Taxi', slug: '/airport/riyadh-airport-taxi', type: 'airport' },
            { name: 'Taxi to Riyadh Season', slug: '/taxi-to-event/riyadh-season-riyadh', type: 'route' },
        ],
    },
    {
        slug: 'dubai-international-stadium-dubai',
        stadiumName: 'Dubai International Stadium',
        stadiumType: 'Sports Venue',
        city: 'Dubai',
        cityCountry: 'United Arab Emirates',
        locationDetails: 'Dubai Sports City, Sheikh Mohammed Bin Zayed Road',
        approxTravelTime: '20–40 minutes from central Dubai and Marina',
        description: 'Taxi to Dubai International Stadium. Transfers to the iconic cricket and sports venue in Dubai Sports City for international matches and events.',
        longDescription: 'Dubai International Stadium is a world-class multi-purpose venue located in Dubai Sports City. It is primarily known for its spectacular "Ring of Fire" lighting and hosting major international cricket tournaments. Our taxi service offers reliable and professional transportation for sports fans from any part of Dubai directly to the stadium gates.',
        features: [
            'Modern multi-purpose stadium famous for its unique lighting system',
            'Major center for international cricket and regional sports events',
            'Located in the dedicated Dubai Sports City district',
            'Excellent spectator facilities with high-capacity seating',
            'Surrounded by sports academies and leisure facilities',
        ],
        travelTips: [
            'Arrive early for international cricket matches to avoid peak traffic at entrance gates.',
            'Confirm whether you are visiting the main stadium or the surrounding ICC Academy.',
            'The E311 highway provides the main access; allow for rush hour traffic.',
            'Specify your preferred drop-off point near the spectator entrances.',
            'Book your return transfer in advance to avoid waiting after evening match finishes.',
        ],
        faq: [
            { question: 'How do I reach Dubai International Stadium?', answer: 'We provide direct transfers from any hotel or residence in Dubai to the stadium in Sports City.' },
            { question: 'Can taxis pick up from Dubai Airport?', answer: 'Yes. We offer direct transfers from Dubai International (DXB) and Al Maktoum (DWC) airports.' },
            { question: 'Can groups travel together to a sports event?', answer: 'Yes. SUVs, vans, and minibuses are available for fan groups and families.' },
            { question: 'How long is the drive from Dubai Marina?', answer: 'From Dubai Marina, the journey typically takes 15 to 25 minutes depending on traffic.' },
            { question: 'Is help with gear or equipment provided?', answer: 'Our drivers will assist with loading any bags or sports equipment into the vehicle.' },
        ],
        relatedRoutes: [
            { name: 'Dubai Taxi Service', slug: '/city/dubai-taxi', type: 'city' },
            { name: 'Dubai Airport Taxi', slug: '/airport/dubai-airport-taxi', type: 'airport' },
            { name: 'Taxi to Motiongate Dubai', slug: '/taxi-to-attraction/motiongate-dubai', type: 'route' },
        ],
    },
    {
        slug: 'jaber-al-ahmad-stadium-kuwait',
        stadiumName: 'Jaber Al-Ahmad International Stadium',
        stadiumType: 'Football Stadium',
        city: 'Kuwait City',
        cityCountry: 'Kuwait',
        locationDetails: 'Ardiya, Kuwait City',
        approxTravelTime: '15–30 minutes from central Kuwait City',
        description: 'Taxi to Jaber Al-Ahmad Stadium Kuwait. Professional transfers for football matches and national sports events at Kuwait’s premier international stadium.',
        longDescription: 'Jaber Al-Ahmad International Stadium is Kuwait\'s primary national stadium, located in the Ardiya district. It is a multi-purpose venue that hosts matches for the Kuwait national football team and major domestic finals. Our taxi service provides puntual and safe transportation for fans and professionals visiting this significant sports landmark.',
        features: [
            'Kuwait\'s largest and most modern international sports stadium',
            'Capacity for 60,000 spectators with state-of-the-art facilities',
            'Primary home of the Kuwait national football team',
            'Hosts major regional football tournaments and national celebrations',
            'Located conveniently in the Ardiya area with easy road access',
        ],
        travelTips: [
            'Arrive early as traffic near the Ardiya district increases significantly during match days.',
            'Verify your entrance gate on the stadium map before arriving.',
            'Allow for security checks at the main port gates before reaching the spectator area.',
            'Specify whether you need the main public entrance or the executive/media gates.',
            'Pre-book your return taxi to ensure a seamless departure after the game ends.',
        ],
        faq: [
            { question: 'How do I get to Jaber Al-Ahmad Stadium?', answer: 'We provide door-to-door transfers from any area in Kuwait City to the stadium entrance.' },
            { question: 'Is airport transfer available for the stadium?', answer: 'Yes. We offer direct transfers from Kuwait International Airport (KWI) to the stadium.' },
            { question: 'Are there vehicles for large groups of fans?', answer: 'Yes. We have SUVs and passenger vans available for family and group travel.' },
            { question: 'How far is the stadium from the city center?', answer: 'The drive from central Kuwait City typically takes 15 to 25 minutes.' },
            { question: 'Can I book a round-trip for an evening match?', answer: 'Yes. You can schedule both arrival and return transfers in advance.' },
        ],
        relatedRoutes: [
            { name: 'Kuwait City Taxi Service', slug: '/city/kuwait-city-taxi', type: 'city' },
            { name: 'Kuwait Airport Taxi', slug: '/airport/kuwait-airport-taxi', type: 'airport' },
            { name: 'Taxi to Avenues Mall', slug: '/taxi-to-mall/avenues-mall-kuwait-city', type: 'route' },
        ],
    },
    {
        slug: 'bahrain-national-stadium-riffa',
        stadiumName: 'Bahrain National Stadium',
        stadiumType: 'Football Stadium',
        city: 'Riffa',
        cityCountry: 'Bahrain',
        locationDetails: 'Riffa, Central Bahrain',
        approxTravelTime: '20–35 minutes from Manama city center',
        description: 'Taxi to Bahrain National Stadium in Riffa. Reliable transportation for football matches and international sports events in central Bahrain.',
        longDescription: 'The Bahrain National Stadium, located in Riffa, is the Kingdom\'s primary venue for international football and major athletic events. It serves as the home ground for the Bahrain national team and hosts significant regional tournaments. Our taxi service ensures a smooth journey from Manama, hotels, or the airport to the stadium for all event attendees.',
        features: [
            'Primary international sports stadium for the Kingdom of Bahrain',
            'Home of the Bahrain national football team',
            'Major venue for regional sports tournaments and national events',
            'Equipped with modern spectator facilities and athletic tracks',
            'Located in the central area of Riffa with excellent road connections',
        ],
        travelTips: [
            'Plan for extra travel time as traffic in Riffa increases during large sporting events.',
            'Confirm the specific stadium gate on your ticket before your journey.',
            'Arriving early is recommended to clear security and find your seating area.',
            'Inform your driver whether you need the public entrance or the VIP gate.',
            'Pre-book your return transfer to avoid waiting for taxis after the event concludes.',
        ],
        faq: [
            { question: 'How do I reach the Bahrain National Stadium?', answer: 'We provide direct transfers from Manama and any part of Bahrain to the stadium in Riffa.' },
            { question: 'Can I get a taxi from Bahrain Airport to the stadium?', answer: 'Yes. We offer direct transfers from Bahrain International Airport (BAH) to Riffa.' },
            { question: 'Are vehicles available for families and fan groups?', answer: 'Yes. We have SUVs and vans suitable for family outings and groups of friends.' },
            { question: 'How long is the drive from Manama?', answer: 'The journey typically takes 20 to 30 minutes depending on current traffic.' },
            { question: 'Can I book a return transfer after a night game?', answer: 'Yes. Scheduled return pickups ensure you have a ride ready at a fixed time.' },
        ],
        relatedRoutes: [
            { name: 'Bahrain Airport Taxi', slug: '/airport/bahrain-airport-taxi', type: 'airport' },
            { name: 'Manama to Al Khobar Taxi', slug: '/routes/manama-to-al-khobar-taxi', type: 'route' },
            { name: 'Taxi to City Centre Bahrain', slug: '/taxi-to-mall/city-centre-bahrain-manama', type: 'route' },
        ],
    },
    {
        slug: 'sultan-qaboos-sports-complex-muscat',
        stadiumName: 'Sultan Qaboos Sports Complex',
        stadiumType: 'Olympic Stadium',
        city: 'Muscat',
        cityCountry: 'Oman',
        locationDetails: 'Bausher, Muscat',
        approxTravelTime: '15–30 minutes from central Muscat',
        description: 'Taxi to Sultan Qaboos Sports Complex Muscat. Professional transfers for football matches and multi-sport events at Oman’s premier sports facility.',
        longDescription: 'The Sultan Qaboos Sports Complex, located in Bausher, is the largest and most important sports venue in Oman. It is a multi-purpose facility hosting international football, athletics, and cultural events. Our taxi service provides punctual and professional transfers for fans and athletes from all Muscat districts directly to the complex gates.',
        features: [
            'Oman\'s largest and most significant multi-sport venue',
            'Home ground for the Oman national football team',
            'Equipped with an Olympic-size swimming pool and athletic tracks',
            'Major host for regional football championships and festivals',
            'Modern facilities capable of hosting diverse international sports',
        ],
        travelTips: [
            'Arrive early as roads in the Bausher area can be busy during match days.',
            'Confirm whether you are visiting the main football stadium or the aquatic center.',
            'Verify the closest gate to your seating area with your driver.',
            'Inform your driver about any extra sports equipment or bags you may have.',
            'Schedule your return pickup in advance to ensure a smooth departure after the event.',
        ],
        faq: [
            { question: 'How do I reach Sultan Qaboos Sports Complex?', answer: 'We provide door-to-door transfers from any hotel or district in Muscat to the complex in Bausher.' },
            { question: 'Is airport transfer available to the complex?', answer: 'Yes. We offer direct transfers from Muscat International Airport (MCT) to the stadium.' },
            { question: 'Are there vehicles for group travel?', answer: 'Yes. SUVs and vans are available for fan groups and sports teams.' },
            { question: 'How long from the Al Khuwair district?', answer: 'The drive from Al Khuwair typically takes 10 to 15 minutes.' },
            { question: 'Can I book both arrival and return transfers?', answer: 'Yes. Pre-booked round-trip transfers can be arranged for your convenience.' },
        ],
        relatedRoutes: [
            { name: 'Muscat Taxi Service', slug: '/city/muscat-taxi', type: 'city' },
            { name: 'Muscat Airport Taxi', slug: '/airport/muscat-airport-taxi', type: 'airport' },
            { name: 'Taxi to Muscat Old Town', slug: '/taxi-to-landmark/muscat-old-town-muscat', type: 'route' },
        ],
    },
];
