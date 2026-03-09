export interface DistrictTaxiPage {
  slug: string;
  area: string;
  city: string;
  title: string;
  overview: string;
  services: string[];
  pickupLocations: string[];
  travelTips: string[];
  faq: { question: string; answer: string }[];
  relatedPages: { name: string; url: string }[];
}

export const districtTaxiPages: DistrictTaxiPage[] = [
  {
    slug: 'dubai-marina-dubai',
    area: 'Dubai Marina',
    city: 'Dubai',
    title: 'Taxi Service Dubai Marina',
    overview: 'Dubai Marina is a major residential and tourist destination known for its coastal skyscrapers and waterfront promenade. We provide reliable taxi services for residents and visitors throughout this area, connecting the Marina with the rest of the city and regional airports.',
    services: [
      'Direct airport transfers to DXB and DWC',
      'Local hotel pickups and drop-offs',
      'Transportation to nearby shopping malls',
      'Long-distance routes to other emirates'
    ],
    pickupLocations: [
      'Residential apartment towers and villas',
      'Hotels and serviced apartments in the Marina',
      'Marina Mall and waterfront plazas',
      'Office buildings and commercial centers'
    ],
    travelTips: [
      'Confirm your specific tower name and entrance for the pickup.',
      'Allow extra travel time during evening hours on the Marina walk.',
      'Share your destination details clearly with the driver in advance.',
      'Schedule pickups early for morning flights to avoid highway traffic.'
    ],
    faq: [
      {
        question: 'How do I book a taxi in Dubai Marina?',
        answer: 'You can arrange a private taxi online for a specific time and location within the Marina district.'
      },
      {
        question: 'Can taxis pick up from hotels in the Marina?',
        answer: 'Yes, we provide direct pickups from the lobby or main entrance of all hotels in Dubai Marina.'
      },
      {
        question: 'Are airport transfers available from Dubai Marina?',
        answer: 'Yes, we offer 24/7 transfers from Dubai Marina to all international airports in the UAE.'
      }
    ],
    relatedPages: [
      { name: 'Dubai Airport Taxi', url: '/airport/dubai-airport-taxi' },
      { name: 'Dubai City Taxi', url: '/city/dubai-taxi' },
      { name: 'Taxi to Dubai Marina', url: '/taxi-to-area/dubai-airport-to-dubai-marina' }
    ]
  },
  {
    slug: 'palm-jumeirah-dubai',
    area: 'Palm Jumeirah',
    city: 'Dubai',
    title: 'Taxi Service Palm Jumeirah',
    overview: 'Palm Jumeirah is a unique residential and resort area in Dubai. Our taxi services support the transportation needs of those staying on the Palm, providing professional transfers between the islands resorts, villas, and the mainland.',
    services: [
      'Airport transfers for resort guests',
      'Hotel-to-city transportation services',
      'Private road travel for sightseeing and dining',
      'Scheduled pickups for departures'
    ],
    pickupLocations: [
      'Resorts and hotels on the Crescent and Trunk',
      'Private villas and residential complexes',
      'Nakheel Mall and local shopping areas',
      'Beach clubs and leisure destinations'
    ],
    travelTips: [
      'Ensure you provide the correct villa number or resort name.',
      'Allow time for travel along the tunnel and trunk during peak hours.',
      'Confirm the pickup point if staying at a large resort complex.',
      'Book in advance for weekend evening transfers.'
    ],
    faq: [
      {
        question: 'How do I book a taxi on Palm Jumeirah?',
        answer: 'Bookings can be made online for any residential or hotel location on the island.'
      },
      {
        question: 'Is the service available at all Palm resorts?',
        answer: 'Yes, we provide pickup and drop-off services for all hotels and residences on Palm Jumeirah.'
      },
      {
        question: 'Can airport transfers be arranged from the Palm?',
        answer: 'Yes, we provide direct transfers from Palm Jumeirah to Dubai international and Al Maktoum airports.'
      }
    ],
    relatedPages: [
      { name: 'Dubai Airport Taxi', url: '/airport/dubai-airport-taxi' },
      { name: 'Taxi From hotels', url: '/service-hotel-transfers' },
      { name: 'Taxi to Palm Jumeirah', url: '/taxi-to-area/dubai-airport-to-palm-jumeirah' }
    ]
  },
  {
    slug: 'olaya-riyadh',
    area: 'Olaya',
    city: 'Riyadh',
    title: 'Taxi Service Olaya Riyadh',
    overview: 'Olaya is a central business and commercial district in Riyadh, home to many offices, hotels, and shopping centers. We provide professional taxi services for business travelers and residents in the Olaya area, ensuring reliable city transit.',
    services: [
      'Direct transfers to King Khalid Airport',
      'Hotel pickups for business travelers',
      'Transportation between office complexes',
      'Inter-city travel starting from Olaya'
    ],
    pickupLocations: [
      'Major office towers and corporate headquarters',
      'Hotels and residential apartments in Olaya',
      'Centria Mall and local shopping centers',
      'Medical clinics and professional plazas'
    ],
    travelTips: [
      'Confirm the specific tower and gate for your pickup.',
      'Allow extra travel time on King Fahd Road during office hours.',
      'Schedule pickups in advance for important business meetings.',
      'Clearly share your terminal number for airport departures.'
    ],
    faq: [
      {
        question: 'How do I book a taxi in Olaya?',
        answer: 'Private taxis can be booked online for any office, hotel, or residence in the Olaya district.'
      },
      {
        question: 'Can taxis pick up from Olaya offices?',
        answer: 'Yes, we provide pickups from all commercial buildings and office towers in the Olaya area.'
      },
      {
        question: 'Are transfers to King Khalid Airport available?',
        answer: 'Yes, we offer direct and punctual transfers from Olaya to Riyadh airport 24/7.'
      }
    ],
    relatedPages: [
      { name: 'Riyadh Airport Taxi', url: '/airport/riyadh-airport-taxi' },
      { name: 'Riyadh City Taxi', url: '/city/riyadh-taxi' },
      { name: 'Corporate Chauffeur Riyadh', url: '/corporate-chauffeur-riyadh' }
    ]
  },
  {
    slug: 'west-bay-doha',
    area: 'West Bay',
    city: 'Doha',
    title: 'Taxi Service West Bay Doha',
    overview: 'West Bay is the primary business district and tourist destination in Doha, characterized by its distinctive skyline. Our taxi services provide organized transportation for professionals and visitors within this busy commercial area.',
    services: [
      'Airport transfers to Hamad International',
      'Hotel-to-office transportation',
      'City travel to Msheireb and Pearl Qatar',
      'Group transport for corporate events'
    ],
    pickupLocations: [
      'Office towers and ministry buildings',
      'Five-star hotels and residential skyscrapers',
      'City Center Mall and local plazas',
      'Exhibition and convention centers'
    ],
    travelTips: [
      'Provide the exact tower name and parking entrance for pickup.',
      'Allow for morning and afternoon traffic in the business district.',
      'Book in advance for large groups or specialized vehicle needs.',
      'Confirm flight details for arrival meet-and-greet services.'
    ],
    faq: [
      {
        question: 'How do I book a taxi in West Bay?',
        answer: 'You can arrange for a private vehicle and driver online for any location in the West Bay district.'
      },
      {
        question: 'Can taxis pick up from West Bay hotels?',
        answer: 'Yes, we provide direct pickup services from all hotels and serviced apartments in West Bay.'
      },
      {
        question: 'Are airport transfers available from West Bay?',
        answer: 'Yes, we offer professional transfers from West Bay to Hamad International Airport.'
      }
    ],
    relatedPages: [
      { name: 'Doha Airport Taxi', url: '/airport/doha-airport-taxi' },
      { name: 'Doha City Taxi', url: '/city/doha-taxi' },
      { name: 'Taxi to West Bay', url: '/taxi-to-area/doha-airport-to-west-bay' }
    ]
  },
  {
    slug: 'salmiya-kuwait',
    area: 'Salmiya',
    city: 'Kuwait City',
    title: 'Taxi Service Salmiya Kuwait',
    overview: 'Salmiya is a major residential, commercial, and tourist area in Kuwait, known for its shopping districts and coastal views. We provide reliable taxi services for the Salmiya community, ensuring easy access to other parts of the city and the airport.',
    services: [
      'Transfers to Kuwait International Airport',
      'Local transport within Salmiya districts',
      'City travel to Kuwait City center',
      'Long-distance routes to regional ports'
    ],
    pickupLocations: [
      'Private houses and apartment buildings',
      'Hotels and coastal resorts',
      'The Scientific Center and shopping malls',
      'Local restaurants and commercial streets'
    ],
    travelTips: [
      'Confirm the street number and block for residential pickups.',
      'Allow extra time for traffic on the Gulf Road during weekends.',
      'Schedule pickups in advance for early morning airport trips.',
      'Ensure you provide the correct terminal number for KWI airport.'
    ],
    faq: [
      {
        question: 'How do I book a taxi in Salmiya?',
        answer: 'Bookings for private taxis in Salmiya can be made online for any specific time and place.'
      },
      {
        question: 'Can taxis pick up from Salmiya shopping malls?',
        answer: 'Yes, we provide pickups from designated areas at major malls and shopping centers in Salmiya.'
      },
      {
        question: 'Are airport transfers available from Salmiya?',
        answer: 'Yes, we offer direct transportation from Salmiya to Kuwait International Airport 24/7.'
      }
    ],
    relatedPages: [
      { name: 'Kuwait Airport Taxi', url: '/airport/kuwait-airport-taxi' },
      { name: 'Kuwait City Taxi', url: '/city/kuwait-city-taxi' },
      { name: 'Taxi to Salmiya', url: '/taxi-to-area/kuwait-airport-to-salmiya' }
    ]
  },
  {
    slug: 'seef-district-manama',
    area: 'Seef District',
    city: 'Manama',
    title: 'Taxi Service Seef District Manama',
    overview: 'Seef District is a modern commercial and residential area in Manama, home to shopping malls and business towers. Our taxi services provide punctual transportation for residents and professionals in the Seef area.',
    services: [
      'Transfers to Bahrain International Airport',
      'Hotel-to-mall transportation services',
      'City travel to Juffair and the Diplomatic Area',
      'Private driver services for business meetings'
    ],
    pickupLocations: [
      'Hotels and luxury apartments',
      'Office towers and commercial buildings',
      'Seef Mall and City Centre Bahrain',
      'Exhibition and convention centers'
    ],
    travelTips: [
      'Confirm the specific mall entrance or office gate for pickup.',
      'Allow for potential traffic during holiday and weekend hours.',
      'Schedule pickups in advance for time-sensitive travel.',
      'Clearly share your destination within Manama with the driver.'
    ],
    faq: [
      {
        question: 'How do I book a taxi in the Seef District?',
        answer: 'You can arrange a private taxi and driver online for any location in the Seef area.'
      },
      {
        question: 'Can taxis pick up from hotels in Seef?',
        answer: 'Yes, we provide direct pickup services from all hotels and residential towers in the Seef District.'
      },
      {
        question: 'Are airport transfers available from Seef?',
        answer: 'Yes, we offer professional transfers from the Seef District to Bahrain International Airport.'
      }
    ],
    relatedPages: [
      { name: 'Bahrain Airport Taxi', url: '/airport/bahrain-airport-taxi' },
      { name: 'Manama City Taxi', url: '/city/manama-taxi' },
      { name: 'Taxi to Seef', url: '/taxi-to-area/manama-airport-to-seef' }
    ]
  },
  {
    slug: 'al-qurum-muscat',
    area: 'Al Qurum',
    city: 'Muscat',
    title: 'Taxi Service Al Qurum Muscat',
    overview: 'Al Qurum is a upscale residential and commercial area in Muscat, known for its parks and shopping centers. We provide reliable taxi services for the Qurum area, connecting it with Muscat International Airport and other city districts.',
    services: [
      'Direct transfers to Muscat International Airport',
      'Local pickups from hotels and residences',
      'Transportation to shopping and parks',
      'Long-distance travel across Oman'
    ],
    pickupLocations: [
      'Residential villas and apartment buildings',
      'Hotels and resorts in the Qurum area',
      'Shopping centers and local markets',
      'Parks and leisure destinations'
    ],
    travelTips: [
      'Ensure you provide the correct villa or building number for pickup.',
      'Allow for morning rush hour traffic on Sultan Qaboos Highway.',
      'Schedule pickups in advance for airport departures.',
      'Communicate any specific luggage needs for group travel.'
    ],
    faq: [
      {
        question: 'How do I book a taxi in Al Qurum?',
        answer: 'Private taxis in the Al Qurum area can be booked online for any time and location.'
      },
      {
        question: 'Can taxis pick up from Qurum hotels?',
        answer: 'Yes, we provide direct pickups from all hotels and resorts in the Al Qurum district.'
      },
      {
        question: 'Are transitions to Muscat Airport available?',
        answer: 'Yes, we offer punctual transfers from Al Qurum to Muscat International Airport 24/7.'
      }
    ],
    relatedPages: [
      { name: 'Muscat Airport Taxi', url: '/airport/muscat-airport-taxi' },
      { name: 'Muscat City Taxi', url: '/city/muscat-taxi' },
      { name: 'Long Distance Taxi Oman', url: '/long-distance-taxi-oman' }
    ]
  },
  {
    slug: 'tahlia-street-jeddah',
    area: 'Tahlia Street',
    city: 'Jeddah',
    title: 'Taxi Service Tahlia Street Jeddah',
    overview: 'Tahlia Street is a major commercial and shopping district in Jeddah, featuring international retailers and hotels. Our taxi services support the transportation needs of those visiting this vibrant area for business or leisure.',
    services: [
      'Transfers to King Abdulaziz International Airport',
      'Hotel pickups for visitors and tourists',
      'City travel across the Jeddah districts',
      'Private road travel for events and dining'
    ],
    pickupLocations: [
      'Hotels and serviced apartments on Tahlia',
      'Shopping centers and retail plazas',
      'Restaurants and office buildings',
      'Residential complexes in the neighboring area'
    ],
    travelTips: [
      'Confirm the specific mall entrance or hotel lobby for pickup.',
      'Allow extra travel time during evening shopping hours.',
      'Schedule pickups in advance for airport departures or important meetings.',
      'Ensure you provide the correct airport terminal number.'
    ],
    faq: [
      {
        question: 'How do I book a taxi on Tahlia Street?',
        answer: 'You can arrange a private taxi online for any location along Tahlia Street and the surrounding area.'
      },
      {
        question: 'Can taxis pick up from shops on Tahlia?',
        answer: 'Yes, we provide pickups from designated points near the major shopping centers on Tahlia Street.'
      },
      {
        question: 'Are airport transfers available from Tahlia?',
        answer: 'Yes, we offer direct and reliable transfers from Tahlia Street to King Abdulaziz Airport.'
      }
    ],
    relatedPages: [
      { name: 'Jeddah Airport Taxi', url: '/airport/king-abdulaziz-airport-taxi' },
      { name: 'Jeddah City Taxi', url: '/city/jeddah-taxi' },
      { name: 'Corporate Chauffeur Jeddah', url: '/corporate-chauffeur-jeddah' }
    ]
  }
];
