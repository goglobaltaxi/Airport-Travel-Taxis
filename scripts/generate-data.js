const fs = require('fs');
const path = require('path');

// Helper to create slugs
const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

// --- 1. Extend Cities ---
const saudiCities = [
    'Makkah', 'Madinah', 'Taif', 'Tabuk', 'Yanbu', 'Jubail', 'Khobar', 'Dhahran',
    'Abha', 'Khamis Mushait', 'Najran', 'Jazan', 'Hail', 'Buraidah', 'Al Ahsa', 'Al Qatif',
    'Buraydah', 'Khafji', 'AlUla', 'Neom'
];
const uaeCities = ['Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Al Ain'];
const qatarCities = ['Al Rayyan', 'Al Wakrah', 'Al Khor', 'Lusail', 'Madinat ash Shamal'];
const kuwaitCities = ['Hawalli', 'Salmiya', 'Al Ahmadi', 'Jahra', 'Farwaniya', 'Mubarak Al-Kabeer'];
const bahrainCities = ['Manama', 'Muharraq', 'Riffa', 'Hamad Town', 'Isa Town', 'Sitra'];
const omanCities = ['Salalah', 'Sohar', 'Nizwa', 'Sur', 'Rustaq', 'Ibri'];

const generateCity = (name, country, desc) => ({
    slug: slugify(name),
    name: name,
    country: country,
    description: `Premium taxi and chauffeur services in ${name}, ${country}. Private transfers, city tours, and cross-border rides.`,
    longDescription: `${name} is a key destination in ${country}. Our comprehensive transportation service covers every corner of ${name}, offering safe, reliable, and comfortable rides ranging from economy sedans to luxury VIP chauffeurs.`,
    popularRoutes: [],
    attractions: [`${name} City Center`, 'Local Souq', 'Grand Mosque', 'Business District', 'Shopping Malls']
});

const extraCities = [
    ...saudiCities.map(c => generateCity(c, 'Saudi Arabia')),
    ...uaeCities.map(c => generateCity(c, 'United Arab Emirates')),
    ...qatarCities.map(c => generateCity(c, 'Qatar')),
    ...kuwaitCities.map(c => generateCity(c, 'Kuwait')),
    ...bahrainCities.map(c => generateCity(c, 'Bahrain')),
    ...omanCities.map(c => generateCity(c, 'Oman'))
];

// --- 2. Extend Routes (Specifically Cross-Border & Inter-Airport Focus) ---
const crossBorders = [
    // Standard City to City
    ['Dubai', 'Riyadh', 'UAE', 'Saudi Arabia', '1,050 km', '10h', 'From AED 2,500'],
    ['Riyadh', 'Kuwait City', 'Saudi Arabia', 'Kuwait', '650 km', '6h 30min', 'From SAR 1,500'],
    ['Kuwait City', 'Riyadh', 'Kuwait', 'Saudi Arabia', '650 km', '6h 30min', 'From KWD 120'],
    ['Dammam', 'Kuwait City', 'Saudi Arabia', 'Kuwait', '400 km', '4h 30min', 'From SAR 800'],
    ['Dubai', 'Kuwait City', 'UAE', 'Kuwait', '1,250 km', '12h', 'From AED 3,000'],
    ['Kuwait City', 'Dubai', 'Kuwait', 'UAE', '1,250 km', '12h', 'From KWD 250'],
    ['Doha', 'Dubai', 'Qatar', 'UAE', '700 km', '7h 30min', 'From QAR 2,200'],
    ['Dubai', 'Doha', 'UAE', 'Qatar', '700 km', '7h 30min', 'From AED 2,200'],
    ['Manama', 'Riyadh', 'Bahrain', 'Saudi Arabia', '480 km', '5h', 'From BHD 120'],
    ['Riyadh', 'Manama', 'Saudi Arabia', 'Bahrain', '480 km', '5h', 'From SAR 1,200'],
    ['Abu Dhabi', 'Doha', 'UAE', 'Qatar', '600 km', '6h', 'From AED 1,800'],
    ['Doha', 'Abu Dhabi', 'Qatar', 'UAE', '600 km', '6h', 'From QAR 1,800'],
    ['Kuwait City', 'Manama', 'Kuwait', 'Bahrain', '450 km', '4h 30min', 'From KWD 100'],
    ['Manama', 'Kuwait City', 'Bahrain', 'Kuwait', '450 km', '4h 30min', 'From BHD 100'],

    // Specific City to Airport (Cross-Border Flight Connections)
    ['Dubai', 'King Khalid Airport Riyadh', 'UAE', 'Saudi Arabia', '1,050 km', '10h 30min', 'From AED 2,500'],
    ['Riyadh', 'Dubai Airport DXB', 'Saudi Arabia', 'UAE', '1,050 km', '10h 30min', 'From SAR 2,500'],
    ['Kuwait City', 'Dammam Airport', 'Kuwait', 'Saudi Arabia', '400 km', '4h 30min', 'From KWD 95'],
    ['Dammam', 'Kuwait Airport', 'Saudi Arabia', 'Kuwait', '400 km', '4h 30min', 'From SAR 900'],
    ['Bahrain', 'Dammam Airport', 'Bahrain', 'Saudi Arabia', '80 km', '1h 30min', 'From BHD 40'],
    ['Dammam', 'Bahrain Airport', 'Saudi Arabia', 'Bahrain', '80 km', '1h 30min', 'From SAR 400'],
    ['Doha', 'Riyadh Airport', 'Qatar', 'Saudi Arabia', '600 km', '6h', 'From QAR 2,000'],
    ['Riyadh', 'Hamad Airport Doha', 'Saudi Arabia', 'Qatar', '600 km', '6h', 'From SAR 2,000'],
    ['Abu Dhabi', 'Hamad Airport Doha', 'UAE', 'Qatar', '550 km', '5h 30min', 'From AED 1,800'],
    ['Doha', 'Dubai Airport DXB', 'Qatar', 'UAE', '700 km', '7h 30min', 'From QAR 2,200'],
    ['Dubai', 'Hamad Airport Doha', 'UAE', 'Qatar', '700 km', '7h 30min', 'From AED 2,200'],
    ['Kuwait City', 'Bahrain Airport', 'Kuwait', 'Bahrain', '450 km', '4h 30min', 'From KWD 100'],
    ['Manama', 'Kuwait Airport', 'Bahrain', 'Kuwait', '450 km', '4h 30min', 'From BHD 100'],
    ['Khobar', 'Bahrain Airport', 'Saudi Arabia', 'Bahrain', '60 km', '1h 15min', 'From SAR 350'],
    ['Al Ahsa', 'Bahrain Airport', 'Saudi Arabia', 'Bahrain', '160 km', '2h 15min', 'From SAR 550'],
    ['Jubail', 'Bahrain Airport', 'Saudi Arabia', 'Bahrain', '150 km', '2h', 'From SAR 500'],
];

const internalKsa = [
    ['Makkah', 'Madinah', 'Saudi Arabia', 'Saudi Arabia', '450 km', '4h 30min', 'From SAR 550'],
    ['Madinah', 'Makkah', 'Saudi Arabia', 'Saudi Arabia', '450 km', '4h 30min', 'From SAR 550'],
    ['Riyadh', 'Makkah', 'Saudi Arabia', 'Saudi Arabia', '870 km', '8h 30min', 'From SAR 1,200'],
    ['Jeddah', 'Makkah', 'Saudi Arabia', 'Saudi Arabia', '85 km', '1h', 'From SAR 150'],
    ['Jeddah', 'Madinah', 'Saudi Arabia', 'Saudi Arabia', '415 km', '4h', 'From SAR 500'],
    ['Dammam', 'Riyadh', 'Saudi Arabia', 'Saudi Arabia', '400 km', '4h', 'From SAR 500'],
    ['Khobar', 'Riyadh', 'Saudi Arabia', 'Saudi Arabia', '420 km', '4h 15min', 'From SAR 550'],
    ['Jubail', 'Dammam', 'Saudi Arabia', 'Saudi Arabia', '100 km', '1h', 'From SAR 150'],
    ['Riyadh', 'Qassim', 'Saudi Arabia', 'Saudi Arabia', '350 km', '3h 30min', 'From SAR 450'],
];

const generateRoute = (from, to, fromCountry, toCountry, distance, duration, price) => ({
    slug: slugify(`${from}-to-${to}`),
    from,
    to,
    fromCountry,
    toCountry,
    distance,
    duration,
    price,
    description: `Private taxi and transfer service from ${from} to ${to}. Comfortable vehicles, fixed pricing, and professional drivers.`,
    longDescription: `Traveling from ${from} (${fromCountry}) to ${to} (${toCountry}) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing premium vehicles like Sedans, SUVs, and luxury Vans for individuals, families, and business travelers alike.`,
    highlights: [
        'Door-to-Door Private Transfer',
        'Fixed upfront pricing',
        fromCountry !== toCountry ? 'Full Customs & Border Processing Assistance' : 'Zero hidden tolls',
        'Modern Air-Conditioned Fleet',
        'Professional, Licensed Chauffeurs',
        'Flexible Rest Stops Available'
    ],
    faq: [
        { question: `How far is ${to} from ${from}?`, answer: `The total driving distance is approximately ${distance}.` },
        { question: `How long does the journey take?`, answer: `Under normal traffic and border conditions, the trip takes around ${duration}.` },
        { question: `Can I book a return trip?`, answer: `Yes, you can easily book a return trip with us at a discounted rate.` },
        { question: `What documents are required?`, answer: fromCountry !== toCountry ? `A valid passport, appropriate visa for ${toCountry}, and national ID. We manage all vehicle-related border customs.` : `Just your booking confirmation and a valid ID.` }
    ]
});

const extraRoutes = [
    ...crossBorders.map(r => generateRoute(...r)),
    ...internalKsa.map(r => generateRoute(...r))
];

// --- 3. Extend Airports ---
const extraAirportsData = [
    ['Madinah', 'Prince Mohammad Bin Abdulaziz International Airport', 'MED', 'Saudi Arabia'],
    ['Dammam', 'King Fahd International Airport', 'DMM', 'Saudi Arabia'],
    ['Abu Dhabi', 'Zayed International Airport', 'AUH', 'United Arab Emirates'],
    ['Sharjah', 'Sharjah International Airport', 'SHJ', 'United Arab Emirates'],
    ['Manama', 'Bahrain International Airport', 'BAH', 'Bahrain'],
    ['Neom', 'Neom Bay Airport', 'NUM', 'Saudi Arabia'],
    ['AlUla', 'AlUla International Airport', 'ULH', 'Saudi Arabia'],
    ['Abha', 'Abha International Airport', 'AHB', 'Saudi Arabia'],
    ['Jazan', 'King Abdullah bin Abdulaziz Airport', 'GIZ', 'Saudi Arabia'],
    ['Taif', 'Taif International Airport', 'TIF', 'Saudi Arabia'],
];

const generateAirport = (city, name, code, country) => ({
    slug: slugify(`${city}-airport-transfer`),
    name,
    city,
    country,
    code,
    description: `Premium airport transfer services at ${name} (${code}). Meet & greet and luxury vehicles available.`,
    longDescription: `Experience seamless travel at ${name} (${code}) in ${city}. Our professional chauffeurs provide meet & greet services, complimentary flight monitoring, and comfortable transfers to any destination in ${country} or across the GCC borders.`,
    services: ['Meet & Greet', 'Flight Tracking', '24/7 Availability', 'Cross-Border Transfers', 'Luggage Assistance'],
    popularRoutes: [
        { to: 'City Center', price: 'Fixed Rates', duration: '30 min' },
        { to: 'Business District', price: 'Fixed Rates', duration: '40 min' },
    ],
});

const extraAirports = extraAirportsData.map(a => generateAirport(...a));

// --- 4. Official Border Crossings ---
const borderCrossingsData = [
    {
        name: 'Al Batha Border',
        countryA: 'Saudi Arabia',
        countryB: 'United Arab Emirates',
        type: 'Land Port',
        description: 'The primary land connection between Saudi Arabia and the UAE. Vital for transport between Dubai, Abu Dhabi, and Riyadh.',
        services: ['Fast-track clearings', 'VIP Chauffeur Transit', 'Luggage check assistance'],
    },
    {
        name: 'Al Ghuwaifat Border',
        countryA: 'United Arab Emirates',
        countryB: 'Saudi Arabia',
        type: 'Land Port',
        description: 'The UAE checkpoint directly parallel to Al Batha. It handles massive volumes of GCC passenger travel.',
        services: ['Business Fleet Passing', 'Toll Management', 'Family Van Options'],
    },
    {
        name: 'Salwa Border',
        countryA: 'Saudi Arabia',
        countryB: 'Qatar',
        type: 'Land Port',
        description: 'The only land border between Saudi Arabia and Qatar, essential for trips between Doha and Riyadh or Dammam.',
        services: ['Quick Passenger Clearance', 'Direct Doha-Riyadh shuttles', 'VIP Executive passing'],
    },
    {
        name: 'Abu Samra Border',
        countryA: 'Qatar',
        countryB: 'Saudi Arabia',
        type: 'Land Port',
        description: 'The Qatari side of the Salwa crossing, providing direct access to the entire Saudi highway network.',
        services: ['Corporate Transfers', 'World-Class Port Services', 'Priority Lane Access via VIP'],
    },
    {
        name: 'King Fahd Causeway',
        countryA: 'Saudi Arabia',
        countryB: 'Bahrain',
        type: 'Bridge Post',
        description: 'The iconic 25km bridge connecting Khobar (KSA) to Bahrain. A very popular daily commute for thousands.',
        services: ['Bridge Toll included', 'Seamless Security Checks', 'Fast-lane access (when available)'],
    },
    {
        name: 'Al Nuwaiseeb Border',
        countryA: 'Kuwait',
        countryB: 'Saudi Arabia',
        type: 'Land Port',
        description: 'The southern Kuwaiti border connecting towards Saudi Arabia\'s Eastern Province (Dammam, Khafji).',
        services: ['Kuwait-KSA Shuttles', 'Business Fleet Access', 'Customs Handling'],
    },
    {
        name: 'Al Khafji Border',
        countryA: 'Saudi Arabia',
        countryB: 'Kuwait',
        type: 'Land Port',
        description: 'The corresponding Saudi border to Nuwaiseeb. Provides immediate access to Khafji and the route down to Dammam.',
        services: ['VIP Terminal Transit', 'Documentation Support', 'Quick Clearance'],
    },
    {
        name: 'Hatta Border',
        countryA: 'United Arab Emirates',
        countryB: 'Oman',
        type: 'Land Port',
        description: 'The incredibly scenic mountain pass connecting Dubai with Oman. Popular with tourists and business travelers.',
        services: ['Scenic Route Navigation', 'Tourist Visa Processing Help', 'SUV & Luxury Sedans'],
    },
    {
        name: 'Al Ain Border',
        countryA: 'United Arab Emirates',
        countryB: 'Oman',
        type: 'Land Port',
        description: 'Connects the garden city of Al Ain with Al Buraimi in Oman. A smooth and less congested crossing point.',
        services: ['Direct Oman Connect', 'Luggage Handling', 'Fixed Upfront Rates'],
    }
];

const borderCrossings = borderCrossingsData.map(b => ({
    slug: slugify(b.name),
    ...b,
    longDescription: b.description + ' We ensure a smooth clearance via ' + b.name + ' for international travel routes.',
    faq: [
        { question: `What are the operating hours for ${b.name}?`, answer: `Most major GCC borders like ${b.name} operate 24/7, however, wait times can highly fluctuate depending on the season, weekends, and holidays.` },
        { question: `Do your chauffeurs assist at the ${b.name} border?`, answer: `Yes, our drivers are highly experienced with the ${b.name} customs parameters. They will navigate the dedicated vehicle channels and guide you step-by-step through passport control.` },
        { question: `Can I book a transfer from the airport directly across this border?`, answer: `Absolutely. A very common route is selecting an airport pickup (i.e. Dubai Airport) and transferring directly across the border to another country. We handle all vehicle documentation for cross-border transit.` }
    ]
}));

// Output the TS content
const fileContent = `
export type Border = {
    slug: string;
    name: string;
    countryA: string;
    countryB: string;
    type: string;
    description: string;
    longDescription: string;
    services: string[];
    faq: { question: string; answer: string }[];
};

export const extraCities = ${JSON.stringify(extraCities, null, 4)};
export const extraRoutes = ${JSON.stringify(extraRoutes, null, 4)};
export const extraAirports = ${JSON.stringify(extraAirports, null, 4)};
export const borderCrossings: Border[] = ${JSON.stringify(borderCrossings, null, 4)};
`;

fs.writeFileSync(path.join(__dirname, '../src/lib/extendedData.ts'), fileContent.trim());
console.log('Successfully generated extensive Airport & Cross-Border routing data!');
