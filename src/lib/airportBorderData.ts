export interface AirportBorderPage {
    slug: string;
    airportName: string;
    borderName: string;
    city: string;
    country: string;
    distance: string;
    travelTime: string;
    description: string;
    longDescription: string;
    pickupProcess: string[];
    borderCrossingInfo: {
        passport: string;
        customs: string;
        time: string;
    };
    travelTips: string[];
    faq: { question: string; answer: string }[];
    relatedRoutes: { name: string; slug: string; type: 'city' | 'airport' | 'border' | 'route' }[];
}

export const airportBorderPages: AirportBorderPage[] = [
    {
        slug: 'dubai-airport-to-al-batha-border',
        airportName: 'Dubai International Airport (DXB)',
        borderName: 'Al Batha Border Port',
        city: 'Dubai',
        country: 'United Arab Emirates',
        distance: '480 km',
        travelTime: '4–5 hours',
        description: 'Taxi from Dubai Airport to Al Batha Border. Direct airport transfers to the primary UAE-Saudi Arabia land crossing.',
        longDescription: 'Our cross-border transfer service from Dubai International Airport (DXB) to the Al Batha border port provides a reliable transit solution for travelers heading into Saudi Arabia by road. We ensure a professional journey from the airport arrivals directly to the border checkpoint, including assistance with luggage and experienced long-distance drivers.',
        pickupProcess: [
            'Professional driver meets you at the arrivals hall with a name board.',
            'Meet and greet service available at Terminal 1, 2, and 3.',
            'Assistance with luggage handling from the arrivals gate.',
            'Immediate departure for the long-distance journey to the border.',
        ],
        borderCrossingInfo: {
            passport: 'Valid passport and visa for Saudi Arabia entry are required at the checkpoint.',
            customs: 'Passengers must clear baggage through UAE exit and Saudi entry customs.',
            time: 'The crossing process typically takes 30 to 60 minutes depending on traffic.',
        },
        travelTips: [
            'Ensure you have your Saudi visa or entry permit ready before leaving the airport.',
            'Allow extra time for travel as the journey involves long-distance desert highways.',
            'Inform your driver of any specific entry requirements for your nationality.',
            'Carry physical copies of your passport and travel documents.',
        ],
        faq: [
            { question: 'Can the taxi cross the Al Batha border directly?', answer: 'Yes, our cross-border vehicles are permitted to drop passengers directly at the border port.' },
            { question: 'How long does the border crossing take?', answer: 'The crossing usually takes between 30 and 60 minutes, though it can vary during holidays.' },
            { question: 'Can airport pickups be arranged for night flights?', answer: 'Yes, our airport-to-border transfer service is available 24/7.' },
            { question: 'Is the driver experienced in cross-border travel?', answer: 'Yes, our drivers are experts in the Al Batha route and border procedures.' },
            { question: 'Can I book a return trip from the border?', answer: 'Yes, return transfers from the border to Dubai can be scheduled in advance.' },
        ],
        relatedRoutes: [
            { name: 'Dubai Airport Taxi', slug: '/airport/dubai-airport-taxi', type: 'airport' },
            { name: 'Al Batha Border Taxi', slug: '/border/al-batha-crossing-taxi', type: 'border' },
            { name: 'Dubai to Riyadh Taxi', slug: '/routes/dubai-to-riyadh-taxi', type: 'route' },
        ],
    },
    {
        slug: 'riyadh-airport-to-salwa-border',
        airportName: 'King Khalid International Airport (RUH)',
        borderName: 'Salwa Border Port',
        city: 'Riyadh',
        country: 'Saudi Arabia',
        distance: '450 km',
        travelTime: '4–5 hours',
        description: 'Taxi from Riyadh Airport to Salwa Border. Reliable transfers from the Saudi capital to the Qatar land crossing.',
        longDescription: 'Our taxi service provides direct transportation from King Khalid International Airport (RUH) in Riyadh to the Salwa border port, the primary land gateway to Qatar. We offer professional long-distance transfers for travelers and business professionals needing a reliable connection from the airport to the Saudi-Qatar border.',
        pickupProcess: [
            'Meet and greet at the arrivals terminal in Riyadh Airport.',
            'Driver monitors your flight for a punctual pickup.',
            'Full assistance with suitcases and baggage loading.',
            'Comfortable departure for the eastern desert route to the border.',
        ],
        borderCrossingInfo: {
            passport: 'Passport and valid permits for Qatar entry are checked at the Salwa port.',
            customs: 'Standard customs procedures apply for both departure and entry.',
            time: 'Border processing time at Salwa typically ranges from 20 to 45 minutes.',
        },
        travelTips: [
            'Carry your original passport and Qatar entry visa (if applicable).',
            'Confirm the border operating status before your airport departure.',
            'The route to Salwa involves long stretches of highway; ensure you are comfortable.',
            'Share your Qatar destination with the driver for specialized routing advice.',
        ],
        faq: [
            { question: 'Do you provide transfers to the Salwa border?', answer: 'Yes, we specialize in direct transfers from Riyadh Airport to the Salwa border port.' },
            { question: 'How long does the Salwa border crossing take?', answer: 'Processing typically takes 20 to 45 minutes, depending on the current passenger volume.' },
            { question: 'Can the driver pick up from Terminal 5?', answer: 'Yes, we provide pickups from all KKIA terminals including Terminal 5.' },
            { question: 'Is the vehicle suited for long-distance travel?', answer: 'Yes, our fleet includes high-performance SUVs and sedans for long routes.' },
            { question: 'Is airport-to-border service available 24/7?', answer: 'Yes, we operate 24 hours a day for all international arrivals.' },
        ],
        relatedRoutes: [
            { name: 'Riyadh Airport Taxi', slug: '/airport/riyadh-airport-taxi', type: 'airport' },
            { name: 'Salwa Border Taxi', slug: '/border/salwa-crossing-taxi', type: 'border' },
            { name: 'Riyadh to Doha Taxi', slug: '/routes/doha-to-riyadh-taxi', type: 'route' },
        ],
    },
    {
        slug: 'dammam-airport-to-bahrain-causeway',
        airportName: 'King Fahd International Airport (DMM)',
        borderName: 'King Fahd Causeway',
        city: 'Dammam',
        country: 'Saudi Arabia',
        distance: '50 km',
        travelTime: '45–60 minutes',
        description: 'Taxi from Dammam Airport to Bahrain Causeway. Fast and efficient transfers to the Saudi-Bahrain bridge crossing.',
        longDescription: 'Transfer from King Fahd International Airport (DMM) to the King Fahd Causeway with our dedicated taxi service. This is the primary route for travelers heading from the Eastern Province of Saudi Arabia to the Kingdom of Bahrain. We provide smooth transportation from the airport arrivals directly to the causeway entrance.',
        pickupProcess: [
            'Professional driver awaits you in the DMM arrivals hall.',
            'Help with luggage and steering to the waiting vehicle.',
            'Flight tracking ensures the driver is ready when you land.',
            'Quick exit from the airport towards the Khobar-Bahrain highway.',
        ],
        borderCrossingInfo: {
            passport: 'Passport checks for both Saudi Arabia and Bahrain occur on the Causeway island.',
            customs: 'Customs inspections are carried out at the mid-point of the Causeway.',
            time: 'The Causeway crossing can take 30 to 60 minutes, and longer on weekends.',
        },
        travelTips: [
            'Carry your valid passport and Bahrain visa or residency ID.',
            'The Causeway is very busy on weekend evenings; allow extra travel time.',
            'Ensure you have the required documents for cross-border vehicle transit.',
            'Confirm which side of the Causeway (Saudi or Bahrain) is your final drop-off.',
        ],
        faq: [
            { question: 'Can the taxi go across the King Fahd Causeway?', answer: 'Yes, our vehicles are authorized to cross the Causeway and drop off in Bahrain.' },
            { question: 'How long is the Causeway crossing?', answer: 'The crossing usually takes 30 to 60 minutes, but can vary by traffic.' },
            { question: 'Is airport pickup available for early flights?', answer: 'Yes, we provide 24/7 service from King Fahd International Airport.' },
            { question: 'Are the tolls included in the service?', answer: 'Yes, the Causeway bridge toll is typically included in our quoted transfer.' },
            { question: 'Can I book a return service from Bahrain?', answer: 'Yes, return transfers to Dammam Airport can be pre-arranged.' },
        ],
        relatedRoutes: [
            { name: 'Dammam Airport Taxi', slug: '/airport/dammam-airport-taxi', type: 'airport' },
            { name: 'Causeway Taxi Service', slug: '/border/king-fahd-causeway-taxi', type: 'border' },
            { name: 'Dammam to Bahrain Taxi', slug: '/routes/bahrain-to-saudi-arabia-taxi', type: 'route' },
        ],
    },
    {
        slug: 'kuwait-airport-to-nuwaiseeb-border',
        airportName: 'Kuwait International Airport (KWI)',
        borderName: 'Al Nuwaiseeb Border Port',
        city: 'Kuwait City',
        country: 'Kuwait',
        distance: '100 km',
        travelTime: '1h 15min – 1h 30min',
        description: 'Taxi from Kuwait Airport to Nuwaiseeb Border. reliable transfers to the primary land crossing with Saudi Arabia.',
        longDescription: 'Our airport transfer service from Kuwait International Airport (KWI) to the Al Nuwaiseeb border port offers a comfortable and efficient connection for passengers traveling to Saudi Arabia. We provide professional pickups from the airport and direct transportation to the southern Kuwaiti border checkpoint.',
        pickupProcess: [
            'Driver meets you at the arrivals hall with a name sign.',
            'Pickup available from Terminal 1, 4, or 5 at Kuwait Airport.',
            'Assistance with suitcases and baggage handling.',
            'Direct departure towards the King Fahd expressway to the south.',
        ],
        borderCrossingInfo: {
            passport: 'Valid passport and Saudi entry visa are required for the Al Nuwaiseeb crossing.',
            customs: 'Baggage and passenger clearance at both Kuwait and Saudi customs points.',
            time: 'The crossing typically takes 30 to 45 minutes at the border checkpoint.',
        },
        travelTips: [
            'Check that your passport has at least 6 months of validity left.',
            'Ensure all your Saudi border documentation is in order before the trip.',
            'Allow extra time if traveling during public holidays or regional events.',
            'Share your final Saudi destination for a specialized border-to-city service.',
        ],
        faq: [
            { question: 'Can the taxi pick up from any Kuwait Airport terminal?', answer: 'Yes, we serve all terminals including T4 for Kuwait Airways and T5 for Jazeera.' },
            { question: 'How long is the drive to the Nuwaiseeb border?', answer: 'The drive from the airport to the border usually takes about 75 to 90 minutes.' },
            { question: 'Do you provide transfers from the border back to the airport?', answer: 'Yes, we can arrange pickups from the border for arriving travelers.' },
            { question: 'Can groups with heavy luggage be accommodated?', answer: 'Yes, we have SUVs and larger vans like the Mercedes Sprinter available.' },
            { question: 'Is the service available during the night?', answer: 'Yes, our airport-to-border service operates 24/7.' },
        ],
        relatedRoutes: [
            { name: 'Kuwait Airport Taxi', slug: '/airport/kuwait-airport-taxi', type: 'airport' },
            { name: 'Nuwaiseeb Border Taxi', slug: '/border/nuwaiseeb-crossing-taxi', type: 'border' },
            { name: 'Kuwait to Dammam Taxi', slug: '/routes/kuwait-to-dammam-taxi', type: 'route' },
        ],
    },
    {
        slug: 'doha-airport-to-salwa-border',
        airportName: 'Hamad International Airport (DOH)',
        borderName: 'Salwa Border Port',
        city: 'Doha',
        country: 'Qatar',
        distance: '95 km',
        travelTime: '1h 15min – 1h 30min',
        description: 'Taxi from Doha Airport to Salwa Border. Direct transfers from the Qatari capital to the Saudi Arabia land crossing.',
        longDescription: 'Our taxi service from Hamad International Airport (DOH) to the Salwa border port (Abu Samra on the Qatari side) provides a seamless connection for those traveling to Saudi Arabia by land. We offer reliable, punctual transfers from the airport arrivals directly to the border checkpoint for individuals and groups.',
        pickupProcess: [
            'Professional chauffeur meets you in the Hamad Airport arrivals hall.',
            'Personalized sign for easy and quick meeting.',
            'Full support with luggage handling and vehicle loading.',
            'Direct transportation along the Salwa Road towards the border.',
        ],
        borderCrossingInfo: {
            passport: 'Passport and Saudi visa checks occur at the Salwa/Abu Samra port.',
            customs: 'Standard customs and baggage inspections apply for both countries.',
            time: 'Border processing at Salwa typically takes between 25 and 50 minutes.',
        },
        travelTips: [
            'Verify your Saudi entry requirements before starting the journey from Doha.',
            'The Salwa Road is frequent but busy; pre-booking ensures on-time transit.',
            'Ensure your flight details are shared for accurate arrival tracking.',
            'Carry physical travel documents for quick inspection at the border.',
        ],
        faq: [
            { question: 'How far is the Salwa border from Doha Airport?', answer: 'The border is approximately 95 km from Hamad International Airport.' },
            { question: 'Can the taxi wait while I clear the border?', answer: 'Our standard service is for direct drop-off at the border gate or crossing.' },
            { question: 'Are SUVs available for family groups?', answer: 'Yes, Cadillac Escalade and GMC models are available for families.' },
            { question: 'Is the service available for late-night arrivals?', answer: 'Yes, we operate 24/7 at Hamad International Airport.' },
            { question: 'Can I book a return taxi from the border?', answer: 'Yes, return transfers to Doha can be pre-scheduled.' },
        ],
        relatedRoutes: [
            { name: 'Doha Airport Taxi', slug: '/airport/doha-airport-taxi', type: 'airport' },
            { name: 'Salwa Border Taxi', slug: '/border/salwa-crossing-taxi', type: 'border' },
            { name: 'Doha to Riyadh Taxi', slug: '/routes/doha-to-riyadh-taxi', type: 'route' },
        ],
    },
    {
        slug: 'muscat-airport-to-hatta-border',
        airportName: 'Muscat International Airport (MCT)',
        borderName: 'Hatta Border Port',
        city: 'Muscat',
        country: 'Oman',
        distance: '300 km',
        travelTime: '3h – 3h 30min',
        description: 'Taxi from Muscat Airport to Hatta Border. Professional transfers to the primary Oman-UAE land crossing.',
        longDescription: 'Transfer from Muscat International Airport (MCT) to the Hatta border port with our professional taxi service. We provide a reliable long-distance connection for travelers heading to Dubai or the UAE by road. Our drivers are experienced with the scenic mountain route and border procedures at the Hatta checkpoint.',
        pickupProcess: [
            'Driver meets you at the Muscat Airport arrivals gate.',
            'Assistance with luggage and guidance to the vehicle.',
            'Personalized name sign for efficient meet and greet.',
            'Departure towards the Batinah highway and Hatta mountain pass.',
        ],
        borderCrossingInfo: {
            passport: 'Passport and UAE entry visa checks are conducted at the Hatta port.',
            customs: 'Omani exit and UAE entry customs inspections apply to all baggage.',
            time: 'Processing at the Hatta border typically takes 30 to 60 minutes.',
        },
        travelTips: [
            'Ensure your Omani exit and UAE entry visas are in order.',
            'The Hatta route is scenic but travel through mountains requires extra time.',
            'Carry your original passport and residency ID (if applicable).',
            'Allow additional travel time during major holidays or long weekends.',
        ],
        faq: [
            { question: 'Can the taxi take me directly to the Hatta border?', answer: 'Yes, we provide direct door-to-border transportation from Muscat Airport.' },
            { question: 'How long from the airport to Hatta?', answer: 'The drive typically takes between 3 hours and 3.5 hours.' },
            { question: 'Is airport pickup available for night flights?', answer: 'Yes, our Muscat service is available 24 hours a day.' },
            { question: 'Are vehicles comfortable for the long drive?', answer: 'Yes, we use professional sedans and SUVs for the Muscat-Hatta route.' },
            { question: 'Can I book a return service from Hatta?', answer: 'Yes, return transfers to Muscat can be pre-arranged.' },
        ],
        relatedRoutes: [
            { name: 'Muscat Airport Taxi', slug: '/airport/muscat-airport-taxi', type: 'airport' },
            { name: 'Hatta Border Taxi', slug: '/border/hatta-crossing-taxi', type: 'border' },
            { name: 'Muscat to Dubai Taxi', slug: '/routes/muscat-to-dubai-taxi', type: 'route' },
        ],
    },
    {
        slug: 'abu-dhabi-airport-to-al-batha-border',
        airportName: 'Zayed International Airport (AUH)',
        borderName: 'Al Batha Border Port',
        city: 'Abu Dhabi',
        country: 'United Arab Emirates',
        distance: '360 km',
        travelTime: '3h 30min – 4h',
        description: 'Taxi from Abu Dhabi Airport to Al Batha Border. Reliable transfers to the UAE-Saudi land crossing.',
        longDescription: 'Our airport transfer service from Zayed International Airport (AUH) to the Al Batha border port provides a direct connection for travelers heading to Saudi Arabia. We offer professional and comfortable long-distance transportation from the Abu Dhabi airport arrivals directly to the border checkpoint, suited for all passenger groups.',
        pickupProcess: [
            'Professional driver awaits you in the AUH arrivals hall.',
            'Direct meet and greet service with a personalized sign.',
            'Full assistance with suitcases and baggage loading.',
            'Prompt departure for the southern route to the Saudi border.',
        ],
        borderCrossingInfo: {
            passport: 'Passport and valid Saudi visa are required at the Al Batha checkpoint.',
            customs: 'Baggage clearance at both UAE and Saudi customs stations.',
            time: 'The Al Batha crossing typical duration is between 30 and 60 minutes.',
        },
        travelTips: [
            'Confirm your Saudi entry visa status before starting the trip from Abu Dhabi.',
            'Allow extra time for the 360 km journey to the border.',
            'Bring your physical passport and travel permits for inspection.',
            'Ensure your flight details are provided for accurate pickup timing.',
        ],
        faq: [
            { question: 'How long is the drive to the Al Batha border?', answer: 'The journey from Abu Dhabi Airport typically takes 3.5 to 4 hours.' },
            { question: 'Can the taxi cross from Abu Dhabi to the border?', answer: 'Yes, we provide direct transfers from the airport to the Al Batha port.' },
            { question: 'Is pickup available at Terminal A?', answer: 'Yes, we serve all terminals at Zayed International Airport.' },
            { question: 'Are larger SUVs available for families?', answer: 'Yes, GMC and Cadillac models are available for family groups.' },
            { question: 'Is the service 24/7?', answer: 'Yes, we offer airport-to-border transfers 24 hours a day.' },
        ],
        relatedRoutes: [
            { name: 'Abu Dhabi Airport Taxi', slug: '/airport/abu-dhabi-airport-taxi', type: 'airport' },
            { name: 'Al Batha Border Taxi', slug: '/border/al-batha-crossing-taxi', type: 'border' },
            { name: 'Abu Dhabi to Riyadh Taxi', slug: '/routes/abu-dhabi-to-riyadh-taxi', type: 'route' },
        ],
    },
    {
        slug: 'dubai-airport-to-hatta-border',
        airportName: 'Dubai International Airport (DXB)',
        borderName: 'Hatta Border Port',
        city: 'Dubai',
        country: 'United Arab Emirates',
        distance: '130 km',
        travelTime: '1h 30min – 2h',
        description: 'Taxi from Dubai Airport to Hatta Border. Quick and professional transfers to the UAE-Oman land crossing.',
        longDescription: 'Transfer from Dubai International Airport (DXB) to the Hatta border port with our reliable taxi service. This route is the primary connection for travelers heading from Dubai to the Sultanate of Oman by land. We provide punctual pickups from the airport and direct transportation to the Omani border gate.',
        pickupProcess: [
            'Driver meets you at the airport arrivals hall with a name board.',
            'Pickup from Terminal 1, 2, or 3 at Dubai International.',
            'Full assistance with luggage and guiding to the vehicle.',
            'Immediate exit from the airport towards the Hatta-Oman highway.',
        ],
        borderCrossingInfo: {
            passport: 'Passport and Oman entry visa checks are performed at the Hatta port.',
            customs: 'UAE exit and Oman entry customs clearance for all passengers.',
            time: 'Border processing at Hatta typically takes 30 to 60 minutes.',
        },
        travelTips: [
            'Verify Omani entry visa requirements for your nationality in advance.',
            'The Hatta border can be busy on weekends; allow extra travel time.',
            'Share your flight number for real-time tracking of your arrival.',
            'Ensure your passport is valid for at least six months from the entry date.',
        ],
        faq: [
            { question: 'How long does the transfer to the Hatta border take?', answer: 'The journey from DXB usually takes 1.5 to 2 hours depending on traffic.' },
            { question: 'Can I get a taxi from Terminal 2?', answer: 'Yes, we provide pickups from all Dubai Airport terminals.' },
            { question: 'Does the taxi cross the border?', answer: 'Yes, our service is permitted to drop off directly at the border crossing.' },
            { question: 'Are van options available for groups?', answer: 'Yes, Mercedes Vito and Sprinter vans are available for larger groups.' },
            { question: 'Can I book a return transfer from the border?', answer: 'Yes, return pickups from the border to Dubai can be scheduled.' },
        ],
        relatedRoutes: [
            { name: 'Dubai Airport Taxi', slug: '/airport/dubai-airport-taxi', type: 'airport' },
            { name: 'Hatta Border Taxi', slug: '/border/hatta-crossing-taxi', type: 'border' },
            { name: 'Dubai to Muscat Taxi', slug: '/routes/muscat-to-dubai-taxi', type: 'route' },
        ],
    },
];
