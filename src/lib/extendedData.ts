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
    crossingProcess: string;
    popularRoutes: string[];
    vehiclesInfo: string;
    bookingInfo: string;
};

export const extraCities = [
    {
        "slug": "makkah",
        "name": "Makkah",
        "country": "Saudi Arabia",
        "description": "Professional taxi and transfer services in Makkah, Saudi Arabia. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Makkah is a key destination in Saudi Arabia. Our comprehensive transportation service covers every corner of Makkah, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Makkah City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "madinah",
        "name": "Madinah",
        "country": "Saudi Arabia",
        "description": "Professional taxi service in Madinah. Airport transfers, pilgrim transport, and city-wide coverage.",
        "longDescription": "Madinah is one of the holiest cities in Islam and receives millions of pilgrims and visitors every year. Our taxi service covers all areas of Madinah including Al-Masjid an-Nabawi, Quba, Ohod, and the areas surrounding Prince Mohammad bin Abdulaziz Airport. We provide reliable door-to-door transfers for pilgrims, residents, and visitors.",
        "popularRoutes": [
            { "to": "Jeddah", "slug": "jeddah-to-madinah-taxi" },
            { "to": "Makkah", "slug": "jeddah-to-makkah-taxi" }
        ],
        "attractions": [
            "Al-Masjid an-Nabawi",
            "Quba Mosque",
            "Ohod Mountain",
            "Al-Baqi Cemetery",
            "Prince Mohammad bin Abdulaziz Airport"
        ],
        "airportCode": "MED",
        "airportName": "Prince Mohammad bin Abdulaziz International Airport",
        "airportSlug": "madinah-airport-taxi",
        "vehicleOptions": "Individual pilgrims and travelers can use the Toyota Camry, Ford Taurus, or Mercedes S-Class. Families can use the GMC Yukon XL or Cadillac Escalade. For large pilgrim groups, the Mercedes Sprinter, Toyota Hiace, Coaster, or a High-standard Bus are available.",
        "travelUses": "Madinah taxi transfers are commonly used for airport pickups from Prince Mohammad bin Abdulaziz Airport, pilgrim transport between Makkah and Madinah, hotel pickups near Al-Masjid an-Nabawi, and trips to historical landmarks across the city.",
        "faq": [
            { "question": "How do I book a taxi in Madinah?", "answer": "Book through our website or WhatsApp. We will confirm your driver and pickup details for a smooth transfer." },
            { "question": "Do you provide pilgrim transport in Madinah?", "answer": "Yes. We provide transport for Hajj and Umrah pilgrims between Makkah and Madinah and to key religious sites." },
            { "question": "Do you cover the airport in Madinah?", "answer": "Yes. We serve Prince Mohammad bin Abdulaziz International Airport (MED) with meet and greet service." },
            { "question": "What vehicles are suitable for groups in Madinah?", "answer": "For groups we offer the Mercedes Sprinter, Toyota Hiace, Coaster, and High-standard Bus." }
        ],
        "bookingInfo": "Arrange a taxi in Madinah for pilgrim transport, airport pickups, or hotel transfers. Our service is available 24/7."
    },
    {
        "slug": "taif",
        "name": "Taif",
        "country": "Saudi Arabia",
        "description": "Professional taxi and chauffeur services in Taif, Saudi Arabia. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Taif is a key destination in Saudi Arabia. Our comprehensive transportation service covers every corner of Taif, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Taif City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "tabuk",
        "name": "Tabuk",
        "country": "Saudi Arabia",
        "description": "Scheduled taxi and transfer services in Tabuk, Saudi Arabia. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Tabuk is a key destination in Saudi Arabia. Our comprehensive transportation service covers every corner of Tabuk, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Tabuk City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "yanbu",
        "name": "Yanbu",
        "country": "Saudi Arabia",
        "description": "Comfortable taxi and chauffeur services in Yanbu, Saudi Arabia. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Yanbu is a key destination in Saudi Arabia. Our comprehensive transportation service covers every corner of Yanbu, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Yanbu City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "jubail",
        "name": "Jubail",
        "country": "Saudi Arabia",
        "description": "High-standard taxi and transfer services in Jubail, Saudi Arabia. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Jubail is a key destination in Saudi Arabia. Our comprehensive transportation service covers every corner of Jubail, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Jubail City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "khobar",
        "name": "Khobar",
        "country": "Saudi Arabia",
        "description": "Professional taxi and transfer service in Khobar. Airport rides, corporate travel, and cross-border trips to Bahrain.",
        "longDescription": "Khobar is a coastal city in Saudi Arabia's Eastern Province and one of the key business hubs of the region. Our taxi service covers all areas of Khobar including the Khobar Waterfront, Half Moon Bay, Dhahran, and Salmiya. We also provide cross-border transfers to Bahrain via the King Fahd Causeway.",
        "popularRoutes": [
            { "to": "Dammam", "slug": "riyadh-to-dammam-taxi" },
            { "to": "Bahrain", "slug": "bahrain-to-saudi-arabia-taxi" }
        ],
        "attractions": [
            "Khobar Waterfront",
            "Half Moon Bay",
            "Al Rashid Mall",
            "Khobar Corniche",
            "Dana Mall"
        ],
        "airportCode": "DMM",
        "airportName": "King Fahd International Airport",
        "airportSlug": "dammam-airport-taxi",
        "vehicleOptions": "Individual and business travelers can use the Mercedes S-Class, BMW 7 Series, Ford Taurus, or Toyota Camry. Families can use the GMC Yukon XL or Cadillac Escalade. For larger groups, we provide the Mercedes Vito, Sprinter, or a High-standard Bus.",
        "travelUses": "Khobar taxis are used for corporate industry travel, airport pickups at King Fahd International Airport, hotel transfers, cross-border trips to Bahrain, and leisure outings to the Waterfront and Half Moon Bay.",
        "faq": [
            { "question": "How do I book a taxi in Khobar?", "answer": "Book online or by WhatsApp. We will confirm your driver and route before your trip." },
            { "question": "Can taxis pick up from Khobar hotels?", "answer": "Yes. We provide pickups from all hotels in Khobar and Dhahran." },
            { "question": "Do you offer transfers to Bahrain from Khobar?", "answer": "Yes. We provide cross-border transfers from Khobar to Manama via the King Fahd Causeway." },
            { "question": "What vehicles are available?", "answer": "We offer sedans, family SUVs, Professional vans, and coaches for all group sizes." }
        ],
        "bookingInfo": "Arrange a taxi in Khobar for airport transfers, hotel drop-offs, business meetings, or cross-border trips to Bahrain. We operate 24/7."
    },
    {
        "slug": "dhahran",
        "name": "Dhahran",
        "country": "Saudi Arabia",
        "description": "Scheduled taxi and transfer services in Dhahran, Saudi Arabia. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Dhahran is a key destination in Saudi Arabia. Our comprehensive transportation service covers every corner of Dhahran, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Dhahran City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "abha",
        "name": "Abha",
        "country": "Saudi Arabia",
        "description": "Secure taxi and chauffeur services in Abha, Saudi Arabia. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Abha is a key destination in Saudi Arabia. Our comprehensive transportation service covers every corner of Abha, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Abha City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "khamis-mushait",
        "name": "Khamis Mushait",
        "country": "Saudi Arabia",
        "description": "Reliable taxi and chauffeur services in Khamis Mushait, Saudi Arabia. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Khamis Mushait is a key destination in Saudi Arabia. Our comprehensive transportation service covers every corner of Khamis Mushait, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Khamis Mushait City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "najran",
        "name": "Najran",
        "country": "Saudi Arabia",
        "description": "Professional taxi and transfer services in Najran, Saudi Arabia. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Najran is a key destination in Saudi Arabia. Our comprehensive transportation service covers every corner of Najran, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Najran City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "jazan",
        "name": "Jazan",
        "country": "Saudi Arabia",
        "description": "Scheduled taxi and transfer services in Jazan, Saudi Arabia. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Jazan is a key destination in Saudi Arabia. Our comprehensive transportation service covers every corner of Jazan, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Jazan City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "hail",
        "name": "Hail",
        "country": "Saudi Arabia",
        "description": "Professional taxi and chauffeur services in Hail, Saudi Arabia. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Hail is a key destination in Saudi Arabia. Our comprehensive transportation service covers every corner of Hail, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Hail City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "buraidah",
        "name": "Buraidah",
        "country": "Saudi Arabia",
        "description": "Professional taxi and transfer services in Buraidah, Saudi Arabia. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Buraidah is a key destination in Saudi Arabia. Our comprehensive transportation service covers every corner of Buraidah, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Buraidah City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "al-ahsa",
        "name": "Al Ahsa",
        "country": "Saudi Arabia",
        "description": "Comfortable taxi and chauffeur services in Al Ahsa, Saudi Arabia. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Al Ahsa is a key destination in Saudi Arabia. Our comprehensive transportation service covers every corner of Al Ahsa, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Al Ahsa City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "al-qatif",
        "name": "Al Qatif",
        "country": "Saudi Arabia",
        "description": "Scheduled taxi and transfer services in Al Qatif, Saudi Arabia. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Al Qatif is a key destination in Saudi Arabia. Our comprehensive transportation service covers every corner of Al Qatif, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Al Qatif City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "buraydah",
        "name": "Buraydah",
        "country": "Saudi Arabia",
        "description": "Bespoke taxi and chauffeur services in Buraydah, Saudi Arabia. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Buraydah is a key destination in Saudi Arabia. Our comprehensive transportation service covers every corner of Buraydah, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Buraydah City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "khafji",
        "name": "Khafji",
        "country": "Saudi Arabia",
        "description": "High-quality taxi and chauffeur services in Khafji, Saudi Arabia. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Khafji is a key destination in Saudi Arabia. Our comprehensive transportation service covers every corner of Khafji, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Khafji City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "alula",
        "name": "AlUla",
        "country": "Saudi Arabia",
        "description": "Secure taxi and chauffeur services in AlUla, Saudi Arabia. Private transfers, city tours, and cross-border rides.",
        "longDescription": "AlUla is a key destination in Saudi Arabia. Our comprehensive transportation service covers every corner of AlUla, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "AlUla City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "neom",
        "name": "Neom",
        "country": "Saudi Arabia",
        "description": "Scheduled taxi and transfer services in Neom, Saudi Arabia. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Neom is a key destination in Saudi Arabia. Our comprehensive transportation service covers every corner of Neom, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Neom City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "sharjah",
        "name": "Sharjah",
        "country": "United Arab Emirates",
        "description": "Scheduled taxi and transfer services in Sharjah, United Arab Emirates. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Sharjah is a key destination in United Arab Emirates. Our comprehensive transportation service covers every corner of Sharjah, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Sharjah City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "ajman",
        "name": "Ajman",
        "country": "United Arab Emirates",
        "description": "Professional taxi and transfer services in Ajman, United Arab Emirates. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Ajman is a key destination in United Arab Emirates. Our comprehensive transportation service covers every corner of Ajman, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Ajman City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "ras-al-khaimah",
        "name": "Ras Al Khaimah",
        "country": "United Arab Emirates",
        "description": "Professional taxi and chauffeur services in Ras Al Khaimah, United Arab Emirates. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Ras Al Khaimah is a key destination in United Arab Emirates. Our comprehensive transportation service covers every corner of Ras Al Khaimah, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Ras Al Khaimah City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "fujairah",
        "name": "Fujairah",
        "country": "United Arab Emirates",
        "description": "Scheduled taxi and transfer services in Fujairah, United Arab Emirates. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Fujairah is a key destination in United Arab Emirates. Our comprehensive transportation service covers every corner of Fujairah, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Fujairah City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "umm-al-quwain",
        "name": "Umm Al Quwain",
        "country": "United Arab Emirates",
        "description": "Comfortable taxi and chauffeur services in Umm Al Quwain, United Arab Emirates. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Umm Al Quwain is a key destination in United Arab Emirates. Our comprehensive transportation service covers every corner of Umm Al Quwain, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Umm Al Quwain City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "al-ain",
        "name": "Al Ain",
        "country": "United Arab Emirates",
        "description": "professional taxi and chauffeur services in Al Ain, United Arab Emirates. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Al Ain is a key destination in United Arab Emirates. Our comprehensive transportation service covers every corner of Al Ain, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Al Ain City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "al-rayyan",
        "name": "Al Rayyan",
        "country": "Qatar",
        "description": "Bespoke taxi and chauffeur services in Al Rayyan, Qatar. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Al Rayyan is a key destination in Qatar. Our comprehensive transportation service covers every corner of Al Rayyan, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Al Rayyan City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "al-wakrah",
        "name": "Al Wakrah",
        "country": "Qatar",
        "description": "Scheduled taxi and transfer services in Al Wakrah, Qatar. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Al Wakrah is a key destination in Qatar. Our comprehensive transportation service covers every corner of Al Wakrah, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Al Wakrah City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "al-khor",
        "name": "Al Khor",
        "country": "Qatar",
        "description": "Secure taxi and chauffeur services in Al Khor, Qatar. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Al Khor is a key destination in Qatar. Our comprehensive transportation service covers every corner of Al Khor, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Al Khor City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "lusail",
        "name": "Lusail",
        "country": "Qatar",
        "description": "Reliable taxi and chauffeur services in Lusail, Qatar. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Lusail is a key destination in Qatar. Our comprehensive transportation service covers every corner of Lusail, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Lusail City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "madinat-ash-shamal",
        "name": "Madinat ash Shamal",
        "country": "Qatar",
        "description": "Professional taxi and transfer services in Madinat ash Shamal, Qatar. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Madinat ash Shamal is a key destination in Qatar. Our comprehensive transportation service covers every corner of Madinat ash Shamal, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Madinat ash Shamal City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "hawalli",
        "name": "Hawalli",
        "country": "Kuwait",
        "description": "Scheduled taxi and transfer services in Hawalli, Kuwait. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Hawalli is a key destination in Kuwait. Our comprehensive transportation service covers every corner of Hawalli, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Hawalli City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "salmiya",
        "name": "Salmiya",
        "country": "Kuwait",
        "description": "Professional taxi and chauffeur services in Salmiya, Kuwait. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Salmiya is a key destination in Kuwait. Our comprehensive transportation service covers every corner of Salmiya, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Salmiya City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "al-ahmadi",
        "name": "Al Ahmadi",
        "country": "Kuwait",
        "description": "professional taxi and chauffeur services in Al Ahmadi, Kuwait. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Al Ahmadi is a key destination in Kuwait. Our comprehensive transportation service covers every corner of Al Ahmadi, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Al Ahmadi City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "jahra",
        "name": "Jahra",
        "country": "Kuwait",
        "description": "Comfortable taxi and chauffeur services in Jahra, Kuwait. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Jahra is a key destination in Kuwait. Our comprehensive transportation service covers every corner of Jahra, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Jahra City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "farwaniya",
        "name": "Farwaniya",
        "country": "Kuwait",
        "description": "Scheduled taxi and transfer services in Farwaniya, Kuwait. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Farwaniya is a key destination in Kuwait. Our comprehensive transportation service covers every corner of Farwaniya, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Farwaniya City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "mubarak-al-kabeer",
        "name": "Mubarak Al-Kabeer",
        "country": "Kuwait",
        "description": "Bespoke taxi and chauffeur services in Mubarak Al-Kabeer, Kuwait. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Mubarak Al-Kabeer is a key destination in Kuwait. Our comprehensive transportation service covers every corner of Mubarak Al-Kabeer, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Mubarak Al-Kabeer City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "manama",
        "name": "Manama",
        "country": "Bahrain",
        "description": "High-quality taxi and chauffeur services in Manama, Bahrain. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Manama is a key destination in Bahrain. Our comprehensive transportation service covers every corner of Manama, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Manama City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "muharraq",
        "name": "Muharraq",
        "country": "Bahrain",
        "description": "Secure taxi and chauffeur services in Muharraq, Bahrain. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Muharraq is a key destination in Bahrain. Our comprehensive transportation service covers every corner of Muharraq, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Muharraq City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "riffa",
        "name": "Riffa",
        "country": "Bahrain",
        "description": "Scheduled taxi and transfer services in Riffa, Bahrain. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Riffa is a key destination in Bahrain. Our comprehensive transportation service covers every corner of Riffa, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Riffa City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "hamad-town",
        "name": "Hamad Town",
        "country": "Bahrain",
        "description": "Professional taxi and transfer services in Hamad Town, Bahrain. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Hamad Town is a key destination in Bahrain. Our comprehensive transportation service covers every corner of Hamad Town, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Hamad Town City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "isa-town",
        "name": "Isa Town",
        "country": "Bahrain",
        "description": "Scheduled taxi and transfer services in Isa Town, Bahrain. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Isa Town is a key destination in Bahrain. Our comprehensive transportation service covers every corner of Isa Town, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Isa Town City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "sitra",
        "name": "Sitra",
        "country": "Bahrain",
        "description": "Professional taxi and chauffeur services in Sitra, Bahrain. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Sitra is a key destination in Bahrain. Our comprehensive transportation service covers every corner of Sitra, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Sitra City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "salalah",
        "name": "Salalah",
        "country": "Oman",
        "description": "Scheduled taxi and transfer services in Salalah. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Salalah is a key destination in Oman. Our comprehensive transportation service covers every corner of Salalah, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Salalah City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "sohar",
        "name": "Sohar",
        "country": "Oman",
        "description": "Comfortable taxi and chauffeur services in Sohar. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Sohar is a key destination in Oman. Our comprehensive transportation service covers every corner of Sohar, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Sohar City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "nizwa",
        "name": "Nizwa",
        "country": "Oman",
        "description": "professional taxi and chauffeur services in Nizwa. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Nizwa is a key destination in Oman. Our comprehensive transportation service covers every corner of Nizwa, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Nizwa City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "sur",
        "name": "Sur",
        "country": "Oman",
        "description": "Bespoke taxi and chauffeur services in Sur. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Sur is a key destination in Oman. Our comprehensive transportation service covers every corner of Sur, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Sur City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "rustaq",
        "name": "Rustaq",
        "country": "Oman",
        "description": "Scheduled taxi and transfer services in Rustaq. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Rustaq is a key destination in Oman. Our comprehensive transportation service covers every corner of Rustaq, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Rustaq City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "ibri",
        "name": "Ibri",
        "country": "Oman",
        "description": "Secure taxi and chauffeur services in Ibri. Private transfers, city tours, and cross-border rides.",
        "longDescription": "Ibri is a key destination in Oman. Our comprehensive transportation service covers every corner of Ibri, offering safe, reliable, and comfortable rides ranging from economy sedans to professional VIP chauffeurs.",
        "popularRoutes": [],
        "attractions": [
            "Ibri City Center",
            "Local Souq",
            "Grand Mosque",
            "Business District",
            "Shopping Malls"
        ]
    },
    {
        "slug": "sharjah",
        "name": "Sharjah",
        "country": "United Arab Emirates",
        "description": "Reliable taxi service in Sharjah. Airport transfers, hotel drop-offs, and inter-city rides available.",
        "longDescription": "Sharjah is the third-largest emirate in the UAE and borders Dubai to the north. Our taxi service covers all areas of Sharjah including Al Nahda, Al Qasimia, Muwaileh, and the Industrial Area. We also serve travelers connecting between Sharjah International Airport and other destinations in the UAE.",
        "popularRoutes": [
            { "to": "Dubai", "slug": "dubai-to-sharjah-taxi" },
            { "to": "Abu Dhabi", "slug": "dubai-to-abu-dhabi-taxi" }
        ],
        "attractions": [
            "Sharjah Museum of Islamic Civilization",
            "Al Noor Island",
            "Blue Souk",
            "Al Qasba",
            "Sharjah Corniche"
        ],
        "airportCode": "SHJ",
        "airportName": "Sharjah International Airport",
        "airportSlug": "sharjah-airport-taxi",
        "vehicleOptions": "Individual and business travelers can use the Toyota Camry, Ford Taurus, or BMW 7 Series. Families can choose the GMC Yukon XL or Cadillac Escalade. For groups, the Mercedes Vito or Mercedes Sprinter are available.",
        "travelUses": "Sharjah taxis are used for airport pickups at Sharjah International Airport, corporate travel, hotel drop-offs, day trips to nearby Dubai or Ajman, and cultural visits to museums and souqs.",
        "faq": [
            { "question": "How do I book a taxi in Sharjah?", "answer": "Book via our website or WhatsApp. We confirm your driver's details before your pickup time." },
            { "question": "Can taxis pick up from Sharjah hotels?", "answer": "Yes. We provide picks up across all areas of Sharjah including hotels and residential buildings." },
            { "question": "Do you serve Sharjah International Airport?", "answer": "Yes. We provide meet and greet and door-to-door transfers at Sharjah International Airport (SHJ)." },
            { "question": "What vehicles are available in Sharjah?", "answer": "We offer sedans, SUVs, and passenger vans depending on your group size and trip requirements." }
        ],
        "bookingInfo": "Arrange a taxi in Sharjah for airport transfers, hotel pickups, or inter-city trips to Dubai and Abu Dhabi. Our team is available 24/7."
    },
    {
        "slug": "manama",
        "name": "Manama",
        "country": "Bahrain",
        "description": "Professional taxi service in Manama. Airport transfers, hotel rides, and cross-border trips to Saudi Arabia.",
        "longDescription": "Manama is the capital of Bahrain and the country's main commercial and financial center. Our taxi service covers all areas of Manama including Seef, Adliya, Diplomatic Area, Juffair, and Bushairat. We also provide cross-border transfers to the Eastern Province of Saudi Arabia via the King Fahd Causeway.",
        "popularRoutes": [
            { "to": "Dammam", "slug": "bahrain-to-saudi-arabia-taxi" },
            { "to": "Khobar", "slug": "bahrain-to-saudi-arabia-taxi" }
        ],
        "attractions": [
            "Bahrain Fort",
            "Al-Fatih Grand Mosque",
            "Bab Al Bahrain",
            "Seef Mall",
            "King Fahd Causeway"
        ],
        "airportCode": "BAH",
        "airportName": "Bahrain International Airport",
        "airportSlug": "bahrain-airport-taxi",
        "vehicleOptions": "Individual and business travelers can use the Mercedes S-Class, BMW 7 Series, Ford Taurus, or Toyota Camry. Families can use the GMC Yukon XL or Cadillac Escalade. Groups can travel in the Mercedes Vito, Sprinter, or a High-standard Bus.",
        "travelUses": "Manama taxi services are used for airport transfers to Bahrain International Airport, hotel drop-offs in Seef and Juffair, corporate meetings in the Diplomatic Area, cross-border travel to Dammam and Khobar via King Fahd Causeway, and tourism visits around Bahrain.",
        "faq": [
            { "question": "How do I book a taxi in Manama?", "answer": "Book online through our platform or by contacting us via WhatsApp. We will confirm your booking with driver details." },
            { "question": "Can taxis pick up from Manama hotels?", "answer": "Yes. We provide pickups from all major hotels in Manama including those in Seef and Juffair." },
            { "question": "Do you offer airport transfers in Manama?", "answer": "Yes. We serve Bahrain International Airport (BAH) with meet and greet and door-to-door transfers." },
            { "question": "Can I travel to Saudi Arabia from Manama?", "answer": "Yes. We provide cross-border transfers from Manama to Dammam, Khobar, and Riyadh via the King Fahd Causeway." }
        ],
        "bookingInfo": "Arrange a taxi in Manama for airport pickups, hotel transfers, business meetings, or cross-border trips to Saudi Arabia. We operate around the clock."
    }
];
export const extraRoutes = [
    {
        "slug": "riyadh-to-dubai-taxi",
        "from": "Riyadh",
        "to": "Dubai",
        "fromCountry": "Saudi Arabia",
        "toCountry": "UAE",
        "distance": "1,000 km",
        "duration": "10h",
        "description": "Direct taxi service from Riyadh to Dubai. We provide reliable ground transportation between the two major cities of Saudi Arabia and the UAE.",
        "longDescription": "The trip starts in Riyadh, the capital of Saudi Arabia, and ends in Dubai, United Arab Emirates. We provide door-to-door pickup from any location in Riyadh, including hotels and residential areas. The journey typically takes around 10 hours depending on border crossing times and traffic conditions.",
        "highways": "Highway 10 (Saudi Arabia) and E11 Sheikh Zayed Road (UAE)",
        "vehiclesInfo": "We offer various vehicles to suit different travel needs. Individual travelers can choose from the Ford Taurus, BMW, Genesis, or Mercedes S-Class. Families find the GMC, Cadillac Escalade, or Hyundai Staria comfortable for long distances. Groups can book the Mercedes Vito, Mercedes Sprinter, Hiace, or a High-standard Bus. Business travelers frequently select the Mercedes S-Class or BMW for a quiet working environment.",
        "borderInfo": "This trip involves crossing the Al Batha border from Saudi Arabia and the Al Ghuwaifat border into the United Arab Emirates. Passengers must have a valid passport and the necessary visas for the United Arab Emirates. The crossing process includes passport checks and vehicle customs inspections. The approximate time for border formalities is 45 to 90 minutes.",
        "useCases": "This direct taxi route is used by business travelers attending meetings in both cities, families on vacation, and tourists exploring the Gulf region. It also serves as a ground transport alternative for airport connections between Riyadh and Dubai.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Professional Drivers",
            "Al Batha Border Assistance",
            "Modern Vehicle Fleet",
            "Flexible Rest Stops",
            "24/7 Availability"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey usually takes about 10 hours, including the time required for border crossings." },
            { "question": "What vehicles are available?", "answer": "We provide a range of vehicles including the Ford Taurus, GMC, Mercedes S-Class, and larger vans like the Mercedes Sprinter." },
            { "question": "Can the driver pick up from a hotel or airport?", "answer": "Yes, we offer door-to-door service and can pick you up from any hotel, residence, or airport in Riyadh." },
            { "question": "Are cross-border trips possible?", "answer": "Yes, we specialize in cross-border transfers between Saudi Arabia and the United Arab Emirates." },
            { "question": "Is luggage assistance included?", "answer": "Yes, our drivers assist with luggage loading and unloading at both ends of the journey." }
        ],
        "relatedRoutes": [
            { "name": "Riyadh to Doha Taxi", "slug": "riyadh-to-doha-taxi" },
            { "name": "Riyadh to Kuwait Taxi", "slug": "riyadh-to-kuwait-city-taxi" },
            { "name": "Riyadh Airport Taxi", "slug": "riyadh-airport-taxi" }
        ]
    },
    {
        "slug": "dammam-to-dubai-taxi",
        "from": "Dammam",
        "to": "Dubai",
        "fromCountry": "Saudi Arabia",
        "toCountry": "UAE",
        "distance": "800 km",
        "duration": "8h",
        "description": "Direct taxi service from Dammam to Dubai. Reliable ground transportation from the Eastern Province of Saudi Arabia to the UAE.",
        "longDescription": "The trip starts in Dammam, located in the Eastern Province of Saudi Arabia, and ends in Dubai, United Arab Emirates. We provide door-to-door pickup from any location in Dammam, including the airport and hotels. The journey typically takes around 8 hours, traveling through the Al Batha border crossing.",
        "highways": "Highway 40, Highway 10 (Saudi Arabia) and E11 Sheikh Zayed Road (UAE)",
        "vehiclesInfo": "Multiple vehicle options are available for this route. Solo and business travelers often choose the Ford Taurus, BMW, Genesis, or Mercedes S-Class. For family travel, we recommend the GMC, Cadillac Escalade, or Hyundai Staria. Groups can utilize the Mercedes Vito, Mercedes Sprinter, Hiace, or a High-standard Bus. All vehicles are modern and air-conditioned for long-distance travel.",
        "borderInfo": "Travelers cross the Al Batha border from Saudi Arabia and enter the UAE via the Al Ghuwaifat border checkpoint. A valid passport and appropriate UAE entry visa are required. Our drivers facilitate the border crossing process, which includes standard identity and vehicle inspections. The approximate crossing time is between 45 and 75 minutes.",
        "useCases": "This route is popular with business professionals working in the Eastern Province and Dubai, families visiting for leisure, and international tourists. It is also a convenient option for those living in Dammam who need to reach Dubai without flying.",
        "highlights": [
            "Door-to-Door Service",
            "Al Batha Border Formalities Assistance",
            "Professional long-distance chauffeurs",
            "Modern and clean vehicles",
            "Flexible rest stops along the highway",
            "Secure and reliable transport"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey is approximately 8 hours long, including border formalities." },
            { "question": "What vehicles are available?", "answer": "We offer sedans like the Camry and Ford Taurus, SUVs like the GMC, and vans such as the Mercedes Sprinter." },
            { "question": "Can the driver pick up from Dammam Airport?", "answer": "Yes, we can arrange pickups directly from King Fahd International Airport in Dammam." },
            { "question": "Are cross-border trips possible?", "answer": "Yes, we provide full cross-border taxi services between Dammam and Dubai." },
            { "question": "Is the route safe for night travel?", "answer": "Our drivers are experienced in long-distance travel at all hours, ensuring a safe trip day or night." }
        ],
        "relatedRoutes": [
            { "name": "Dammam to Bahrain Taxi", "slug": "bahrain-to-saudi-arabia-taxi" },
            { "name": "Dammam to Kuwait Taxi", "slug": "dammam-to-kuwait-city-taxi" },
            { "name": "Dammam Airport Taxi", "slug": "dammam-airport-taxi" }
        ]
    },
    {
        "slug": "jeddah-to-dubai-taxi",
        "from": "Jeddah",
        "to": "Dubai",
        "fromCountry": "Saudi Arabia",
        "toCountry": "UAE",
        "distance": "1,850 km",
        "duration": "18h",
        "description": "Long-distance taxi service from Jeddah to Dubai. We offer comfortable cross-border travel from the Red Sea coast to the UAE.",
        "longDescription": "The trip starts in Jeddah, on the Red Sea coast, and ends in Dubai, United Arab Emirates. This is an extensive journey that spans across the width of Saudi Arabia and into the UAE. We provides door-to-door pickup from any location in Jeddah and ensures a comfortable ride for the entire duration of this cross-border transfer.",
        "highways": "Highway 40 (Jeddah to Riyadh), Highway 10 (Riyadh to Al Batha), and E11 Sheikh Zayed Road (UAE)",
        "vehiclesInfo": "Given the long distance, we recommend our most comfortable vehicle options. Solo and business travelers often choose the Mercedes S-Class or BMW. For families or groups, the GMC Yukon, Cadillac Escalade, or Mercedes Sprinter are excellent choices due to their space and amenities. Vehicles like the Genesis, Ford Taurus, and Hyundai Staria are also available to meet different requirements.",
        "borderInfo": "This route involves crossing the Al Batha border from Saudi Arabia into the United Arab Emirates at the Al Ghuwaifat checkpoint. Passengers must possess a valid passport and the required UAE travel documents. Our professional drivers are experienced with the border formalities, which typically take 1 to 2 hours for inspection and processing.",
        "useCases": "This inter-country route serves tourists on grand Arabian tours, travelers relocating between cities, and large groups seeking a private alternative to multiple flights. It is a unique way to see the diverse landscapes of the Arabian Peninsula.",
        "highlights": [
            "Full Cross-Country Chauffeur Service",
            "Door-to-Door Pickup and Drop-off",
            "Al Batha Border Documentation Support",
            "Extended rest stops for comfort",
            "Expert long-haul drivers",
            "Safe and reliable fleet"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey is approximately 18 hours long, including required stops and border processing." },
            { "question": "What vehicles are available?", "answer": "We recommend SUVs like the GMC or scheduled sedans like the Mercedes S-Class for this distance, though all fleet vehicles are available." },
            { "question": "Can the driver pick up from a hotel in Jeddah?", "answer": "Yes, we provide full door-to-door service from any hotel or residence in Jeddah." },
            { "question": "Are cross-border trips possible?", "answer": "Yes, we are specialists in cross-border ground transport between Saudi Arabia and the UAE." },
            { "question": "Is the trip done in one go?", "answer": "The trip is a continuous service, but we ensure regular rest stops for the driver and passengers' safety and comfort." }
        ],
        "relatedRoutes": [
            { "name": "Jeddah to Makkah Taxi", "slug": "jeddah-to-makkah-taxi" },
            { "name": "Jeddah to Madinah Taxi", "slug": "jeddah-to-madinah-taxi" },
            { "name": "Jeddah Airport Taxi", "slug": "jeddah-airport-taxi" }
        ]
    },
    {
        "slug": "dubai-to-riyadh-taxi",
        "from": "Dubai",
        "to": "Riyadh",
        "fromCountry": "UAE",
        "toCountry": "Saudi Arabia",
        "distance": "1,050 km",
        "duration": "10h",
        "description": "Private taxi and transfer service from Dubai to Riyadh. Reliable cross-border ground transport between the UAE and the Saudi capital.",
        "longDescription": "Traveling from Dubai (UAE) to Riyadh (Saudi Arabia) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing modern vehicles for individuals, families, and business travelers alike.",
        "highways": "E11 (Sheikh Zayed Road) in the UAE and Highway 10 in Saudi Arabia.",
        "vehiclesInfo": "We offer a diverse fleet for the Dubai to Riyadh route. Individual and business travelers often choose the Mercedes S-Class, BMW, or Genesis. Families can opt for the GMC Yukon, Cadillac Escalade, or Staria. Groups are well-served by the Mercedes Vito, Mercedes Sprinter, Hiace, or a High-standard Bus. Reliable options like the Ford Taurus and Camry are also available.",
        "borderInfo": "This journey involves crossing the Al Ghuwaifat border on the UAE side and entering Saudi Arabia through the Al Batha checkpoint. A valid passport and appropriate entry visa for Saudi Arabia are required. The border process includes identity verification and vehicle customs, typically taking 45 to 90 minutes. Our drivers assist with all standard procedures.",
        "useCases": "This route is frequently used by business professionals traveling between the financial hubs of Dubai and Riyadh, families visiting relatives or going on vacation, and tourists on Gulf-wide tours. It offers a private, door-to-door alternative to regional flights.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Professional Drivers",
            "Al Ghuwaifat/Al Batha Border Assistance",
            "Modern Vehicle Fleet",
            "Flexible Rest Stops",
            "24/7 Availability"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey usually takes about 10 hours, including the time required for border crossings." },
            { "question": "What vehicles are available?", "answer": "We provide a range of vehicles including the Ford Taurus, GMC, Mercedes S-Class, and larger vans like the Mercedes Sprinter." },
            { "question": "Can the driver pick up from a hotel or airport?", "answer": "Yes, we offer door-to-door service and can pick you up from any hotel, residence, or airport in Dubai." },
            { "question": "Are cross-border trips possible?", "answer": "Yes, we specialize in cross-border transfers between the UAE and Saudi Arabia." },
            { "question": "Is luggage assistance included?", "answer": "Yes, our chauffeurs assist with luggage loading and unloading at both ends of the journey." }
        ],
        "relatedRoutes": [
            { "name": "Dubai to Abu Dhabi Taxi", "slug": "dubai-to-abu-dhabi-taxi" },
            { "name": "Dubai to Doha Taxi", "slug": "dubai-to-doha-taxi" },
            { "name": "Dubai Airport Taxi", "slug": "dubai-airport-taxi" }
        ]
    },
    {
        "slug": "riyadh-to-kuwait-city-taxi",
        "from": "Riyadh",
        "to": "Kuwait City",
        "fromCountry": "Saudi Arabia",
        "toCountry": "Kuwait",
        "distance": "650 km",
        "duration": "6h 30min",
        "description": "Private taxi and transfer service from Riyadh to Kuwait City. Comfortable vehicles and professional drivers for the KSA-Kuwait route.",
        "longDescription": "Traveling from Riyadh (Saudi Arabia) to Kuwait City (Kuwait) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highways": "Highway 40 (Riyadh to Dammam) and Highway 95 (Dammam to Kuwait border)",
        "vehiclesInfo": "You can choose from a range of vehicles for this cross-border trip. Individual and business travelers often prefer the Mercedes S-Class, BMW, or Genesis. Families can opt for the GMC Yukon or Cadillac Escalade for extra room. For larger groups, we provide the Mercedes Vito, Mercedes Sprinter, or a High-standard Bus. Budget-friendly options like the Camry and Ford Taurus are also available.",
        "borderInfo": "This route involves crossing the Al Khafji border from Saudi Arabia and entering Kuwait via the Al Nuwaiseeb checkpoint. You must have a valid passport and the required entry visa for Kuwait. The border process includes identity verification and vehicle customs, which generally takes 30 to 60 minutes.",
        "useCases": "This route serves business travelers moving between the administrative hubs of Riyadh and Kuwait City, families on cross-border visits, and tourists exploring the Gulf region. It provides a convenient door-to-door alternative to air travel.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Professional Drivers",
            "Al Khafji/Al Nuwaiseeb Border Assistance",
            "Modern Vehicle Fleet",
            "Flexible Rest Stops",
            "24/7 Availability"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey usually takes about 6.5 hours, including border formalities." },
            { "question": "What vehicles are available?", "answer": "We offer various vehicles including the Ford Taurus, GMC, Mercedes S-Class, and large vans like the Mercedes Sprinter." },
            { "question": "Can the driver pick up from a hotel?", "answer": "Yes, we provide door-to-door service and can pick you up from any hotel or residence in Riyadh." },
            { "question": "Are cross-border trips possible?", "answer": "Yes, we specialize in cross-border transfers between Saudi Arabia and Kuwait." },
            { "question": "Is luggage assistance provided?", "answer": "Yes, our drivers assist with your luggage throughout the journey." }
        ],
        "relatedRoutes": [
            { "name": "Riyadh to Dubai Taxi", "slug": "riyadh-to-dubai-taxi" },
            { "name": "Riyadh to Doha Taxi", "slug": "riyadh-to-doha-taxi" },
            { "name": "Riyadh Airport Taxi", "slug": "riyadh-airport-taxi" }
        ]
    },
    {
        "slug": "kuwait-city-to-riyadh-taxi",
        "from": "Kuwait City",
        "to": "Riyadh",
        "fromCountry": "Kuwait",
        "toCountry": "Saudi Arabia",
        "distance": "650 km",
        "duration": "6h 30min",
        "description": "Private taxi and transfer service from Kuwait City to Riyadh. Reliable cross-border ground transport between the two Gulf capitals.",
        "longDescription": "Traveling from Kuwait City (Kuwait) to Riyadh (Saudi Arabia) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highways": "Highway 95 and Highway 40 (Riyadh-Dammam Highway).",
        "vehiclesInfo": "A wide range of vehicles is available for the Kuwait to Riyadh route. Individual and business travelers often prefer the Mercedes S-Class, BMW, or Genesis. Families find our GMC Yukon, Cadillac Escalade, or Staria ideal for the 6.5-hour trip. For larger groups, we offer the Mercedes Vito, Mercedes Sprinter, or a High-standard Bus. Budget-friendly options like the Ford Taurus and Camry are also available.",
        "borderInfo": "This journey involves crossing the Al Nuwaiseeb border checkpoint from Kuwait and entering Saudi Arabia via the Al Khafji border entry. Passengers must have a valid passport and the necessary entry visa for Saudi Arabia. Border processing typically takes 30 to 60 minutes and includes passport control and vehicle inspection.",
        "useCases": "Popular with business professionals traveling for corporate meetings, families visiting relatives or going on vacation, and tourists exploring the regional capitals. It offers a private and flexible door-to-door alternative to flying.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Professional Drivers",
            "Al Nuwaiseeb/Al Khafji Border Assistance",
            "Modern Vehicle Fleet",
            "Flexible Rest Stops",
            "24/7 Availability"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey usually takes about 6 hours and 30 minutes, depending on traffic and border crossing times." },
            { "question": "What vehicles are available?", "answer": "We offer various vehicles including the Ford Taurus, GMC, Mercedes S-Class, and large vans like the Mercedes Sprinter." },
            { "question": "Can the driver pick up from a hotel?", "answer": "Yes, we provide door-to-door service and can pick you up from any hotel or residence in Kuwait City." },
            { "question": "Are cross-border trips possible?", "answer": "Yes, we specialize in cross-border transfers between Kuwait and Saudi Arabia." },
            { "question": "Is luggage assistance included?", "answer": "Yes, our drivers assist with luggage loading and unloading at both ends of the journey." }
        ],
        "relatedRoutes": [
            { "name": "Kuwait City to Dammam Taxi", "slug": "kuwait-city-to-dammam-taxi" },
            { "name": "Kuwait City to Dubai Taxi", "slug": "kuwait-city-to-dubai-taxi" },
            { "name": "Kuwait Airport Taxi", "slug": "kuwait-airport-taxi" }
        ]
    },
    {
        "slug": "kuwait-city-to-dammam-taxi",
        "from": "Kuwait City",
        "to": "Dammam",
        "fromCountry": "Kuwait",
        "toCountry": "Saudi Arabia",
        "distance": "400 km",
        "duration": "4h",
        "description": "Private taxi and transfer service from Kuwait City to Dammam. Comfortable cross-border ground transport across the Eastern Province.",
        "longDescription": "The trip from Kuwait City to Dammam is a direct cross-border transfer covering approximately 400 km. We provide door-to-door service, picking you up from any location in Kuwait City and ensuring a comfortable and safe journey to your destination in Dammam. Our professional chauffeurs manage all logistics, including the Al Khafji border crossing.",
        "highways": "Highway 95 connects Kuwait City directly to the Eastern Province of Saudi Arabia.",
        "vehiclesInfo": "Multiple vehicle options are available for the Kuwait to Dammam route. Individual and business travelers often choose the Mercedes S-Class, BMW, or Genesis. Families find the GMC Yukon, Cadillac Escalade, or Hyundai Staria excellent for the 4-hour trip. For larger groups, we offer the Mercedes Vito, Mercedes Sprinter, or a High-standard Bus. Budget-friendly options like the Ford Taurus and Camry are also available.",
        "borderInfo": "This journey involves crossing the Al Nuwaiseeb border checkpoint from Kuwait and entering Saudi Arabia via the Al Khafji border entry. Passengers must have a valid passport and the necessary entry visa for Saudi Arabia. Border processing includes identity verification and vehicle customs, which generally takes 30 to 60 minutes.",
        "useCases": "Popular with business professionals connecting the two industrial centers, families visiting relatives in the Eastern Province, and travelers heading to King Fahd International Airport. It offers a convenient, door-to-door alternative to regional travel.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Professional Drivers",
            "Al Nuwaiseeb/Al Khafji Border Assistance",
            "Modern Vehicle Fleet",
            "Flexible Rest Stops",
            "24/7 Availability"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey usually takes about 4 hours, depending on traffic and border crossing times." },
            { "question": "What vehicles are available?", "answer": "We offer various vehicles including the Ford Taurus, GMC, Mercedes S-Class, and large vans like the Mercedes Sprinter." },
            { "question": "Can the driver pick up from a hotel in Kuwait?", "answer": "Yes, we provide door-to-door service and can pick you up from any hotel or residence in Kuwait City." },
            { "question": "Are cross-border trips possible?", "answer": "Yes, we specialize in cross-border transfers between Kuwait and Saudi Arabia." },
            { "question": "Is luggage assistance included?", "answer": "Yes, our drivers assist with luggage loading and unloading at both ends of the journey." }
        ],
        "relatedRoutes": [
            { "name": "Kuwait City to Riyadh Taxi", "slug": "kuwait-city-to-riyadh-taxi" },
            { "name": "Kuwait City to Manama Taxi", "slug": "kuwait-city-to-manama-taxi" },
            { "name": "Kuwait Airport Taxi", "slug": "kuwait-airport-taxi" }
        ]
    },
    {
        "slug": "kuwait-city-to-manama-taxi",
        "from": "Kuwait City",
        "to": "Manama",
        "fromCountry": "Kuwait",
        "toCountry": "Bahrain",
        "distance": "550 km",
        "duration": "5h 30min",
        "description": "Private taxi and transfer service from Kuwait City to Manama. Experience a comfortable cross-border journey from Kuwait to Bahrain.",
        "longDescription": "The trip from Kuwait City to Manama is a direct cross-border transfer covering approximately 550 km. We provide door-to-door service, picking you up from any location in Kuwait City and ensuring a comfortable and safe journey across the King Fahd Causeway to your destination in Manama. Our professional chauffeurs manage all logistics, including multiple border crossings.",
        "highways": "Highway 95 (Saudi Arabia) and the King Fahd Causeway.",
        "vehiclesInfo": "Multiple vehicle options are available for the Kuwait to Manama route. Individual and business travelers often choose the Mercedes S-Class, BMW, or Genesis for a scheduled experience. Families find our GMC Yukon, Cadillac Escalade, or Staria ideal for long-distance comfort. For larger groups, we provide the Mercedes Vito, Mercedes Sprinter, or a High-standard Bus. Standard options like the Ford Taurus and Camry are also available.",
        "borderInfo": "This journey involves two major border checkpoints. First, travelers cross from Kuwait into Saudi Arabia at the Al Nuwaiseeb/Al Khafji checkpoint. Second, they cross from Saudi Arabia into Bahrain via the King Fahd Causeway. Valid passports and entry visas for both Saudi Arabia and Bahrain are required. Total border processing time typically ranges from 1 to 2 hours.",
        "useCases": "Popular with business professionals connecting regional hubs, families visiting relatives or moving between Kuwait and Bahrain, and tourists on Gulf tours. It offers a private and flexible door-to-door alternative to regional flights.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Professional Drivers",
            "Multi-Border Clearing Assistance",
            "Modern Vehicle Fleet",
            "Flexible Rest Stops",
            "24/7 Availability"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey usually takes about 5.5 hours, depending on traffic and border crossing times." },
            { "question": "What vehicles are available?", "answer": "We offer various vehicles including the Ford Taurus, GMC, Mercedes S-Class, and large vans like the Mercedes Sprinter." },
            { "question": "Can the driver pick up from a hotel in Kuwait?", "answer": "Yes, we provide door-to-door service and can pick you up from any hotel or residence in Kuwait City." },
            { "question": "Are multiple border crossings handled?", "answer": "Yes, we specialize in cross-border transfers involving multiple countries and jurisdictions." },
            { "question": "Is luggage assistance included?", "answer": "Yes, our drivers assist with luggage loading and unloading at both ends of the journey." }
        ],
        "relatedRoutes": [
            { "name": "Kuwait City to Riyadh Taxi", "slug": "kuwait-city-to-riyadh-taxi" },
            { "name": "Kuwait City to Dammam Taxi", "slug": "kuwait-city-to-dammam-taxi" },
            { "name": "Kuwait Airport Taxi", "slug": "kuwait-airport-taxi" }
        ]
    },
    {
        "slug": "dammam-to-kuwait-city-taxi",
        "from": "Dammam",
        "to": "Kuwait City",
        "fromCountry": "Saudi Arabia",
        "toCountry": "Kuwait",
        "distance": "400 km",
        "duration": "4h 30min",
        "description": "Private taxi and transfer service from Dammam to Kuwait City. Reliable ground transport between the Eastern Province and Kuwait.",
        "longDescription": "Traveling from Dammam (Saudi Arabia) to Kuwait City (Kuwait) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highways": "Highway 95 (Abu Hadriyah Highway) leading north from Dammam to the Kuwait border.",
        "vehiclesInfo": "We provide a variety of vehicle options for the Dammam to Kuwait City route. For individual or business travel, the Ford Taurus, BMW, and Mercedes S-Class are popular choices. Families often select our spacious GMC, Cadillac Escalade, or Hyundai Staria. Larger groups can book the Mercedes Vito, Mercedes Sprinter, or a High-standard Bus. All our vehicles are modern, well-maintained, and air-conditioned.",
        "borderInfo": "This journey involves crossing the Al Khafji border on the Saudi side and entering Kuwait through the Al Nuwaiseeb checkpoint. A valid passport and the appropriate visa for Kuwait are required. Our drivers are well-versed in the border protocols, which typically include identity checks and vehicle customs, taking approximately 30 to 45 minutes.",
        "useCases": "This route is frequently used by business professionals commuting between Dammam's industrial centers and Kuwait City, families on cross-border visits, and tourists traveling through the GCC. It offers a faster and more flexible alternative than flying or taking public transport.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Professional Drivers",
            "Al Khafji/Al Nuwaiseeb Border Assistance",
            "Modern Vehicle Fleet",
            "Flexible Rest Stops",
            "24/7 Availability"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey usually takes about 4.5 hours, including border formalities." },
            { "question": "What vehicles are available?", "answer": "We offer various vehicles including the Ford Taurus, GMC, Mercedes S-Class, and large vans like the Mercedes Sprinter." },
            { "question": "Can the driver pick up from a hotel?", "answer": "Yes, we provide door-to-door service and can pick you up from any hotel or residence in Dammam." },
            { "question": "Are cross-border trips possible?", "answer": "Yes, we specialize in cross-border transfers between Saudi Arabia and Kuwait." },
            { "question": "Is luggage assistance included?", "answer": "Yes, our drivers assist with luggage loading and unloading at both ends of the journey." }
        ],
        "relatedRoutes": [
            { "name": "Dammam to Bahrain Taxi", "slug": "bahrain-to-saudi-arabia-taxi" },
            { "name": "Dammam to Dubai Taxi", "slug": "dammam-to-dubai-taxi" },
            { "name": "Dammam Airport Taxi", "slug": "dammam-airport-taxi" }
        ]
    },
    {
        "slug": "riyadh-to-abu-dhabi-taxi",
        "from": "Riyadh",
        "to": "Abu Dhabi",
        "fromCountry": "Saudi Arabia",
        "toCountry": "UAE",
        "distance": "900 km",
        "duration": "9h",
        "description": "Direct taxi service from Riyadh to Abu Dhabi. Reliable cross-border ground transportation to the UAE capital.",
        "longDescription": "The trip starts in Riyadh and ends in Abu Dhabi, the capital of the United Arab Emirates. We provide door-to-door pickup from any location in Riyadh. The journey travels through the Eastern Province and crosses into the UAE at the Al Batha border checkpoint. Our professional chauffeurs ensure a comfortable and safe journey for the entire 900 km distance.",
        "highways": "Highway 10 (Saudi Arabia) and E11 Sheikh Zayed Road (UAE).",
        "vehiclesInfo": "We offer a variety of modern, air-conditioned vehicles for this long-distance route. For individual or business travel, the Mercedes S-Class, BMW, or Genesis are excellent choices. Families can opt for the GMC Yukon, Cadillac Escalade, or Hyundai Staria for extra room and comfort. Larger groups can book the Mercedes Vito, Mercedes Sprinter, or a High-standard Bus. Budget-conscious travelers can select the Ford Taurus or Camry.",
        "borderInfo": "This route involves crossing the Al Batha border on the Saudi side and entering the UAE through the Al Ghuwaifat checkpoint. A valid passport and the appropriate visa for the UAE are required. The border process includes identity verification and vehicle customs, which generally takes 45 to 75 minutes. Our drivers are experienced with these procedures and will assist you throughout.",
        "useCases": "This route is frequently used by business professionals traveling to Abu Dhabi's financial and administrative districts, families on vacation, and tourists on Gulf-wide tours. It provides a reliable private alternative to air travel with door-to-door convenience.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Professional Drivers",
            "Al Batha Border Assistance",
            "Modern Vehicle Fleet",
            "Flexible Rest Stops",
            "24/7 Availability"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey usually takes about 9 hours, including border formalities." },
            { "question": "What vehicles are available?", "answer": "We offer various vehicles including the Ford Taurus, GMC, Mercedes S-Class, and large vans like the Mercedes Sprinter." },
            { "question": "Can the driver pick up from a hotel?", "answer": "Yes, we provide door-to-door service and can pick you up from any hotel or residence in Riyadh." },
            { "question": "Are cross-border trips possible?", "answer": "Yes, we specialize in cross-border transfers between Saudi Arabia and the UAE." },
            { "question": "Is luggage assistance included?", "answer": "Yes, our drivers assist with luggage loading and unloading at both ends of the journey." }
        ],
        "relatedRoutes": [
            { "name": "Riyadh to Dubai Taxi", "slug": "riyadh-to-dubai-taxi" },
            { "name": "Riyadh to Doha Taxi", "slug": "riyadh-to-doha-taxi" },
            { "name": "Riyadh Airport Taxi", "slug": "riyadh-airport-taxi" }
        ]
    },
    {
        "slug": "dammam-to-abu-dhabi-taxi",
        "from": "Dammam",
        "to": "Abu Dhabi",
        "fromCountry": "Saudi Arabia",
        "toCountry": "UAE",
        "distance": "650 km",
        "duration": "6h 30min",
        "description": "Direct taxi service from Dammam to Abu Dhabi. Reliable ground transportation from the Eastern Province to the UAE capital.",
        "longDescription": "The trip starts in Dammam and ends in Abu Dhabi, United Arab Emirates. We provide door-to-door pickup from any location in Dammam, including King Fahd International Airport. The journey typically takes around 6.5 hours, traveling through the Al Batha border crossing and into the UAE.",
        "highways": "Highway 95, Highway 10 (Saudi Arabia) and E11 Sheikh Zayed Road (UAE).",
        "vehiclesInfo": "Multiple vehicle options are available for the Dammam to Abu Dhabi route. Solo and business travelers often choose the Ford Taurus, BMW, Genesis, or Mercedes S-Class. For family travel, we recommend the GMC, Cadillac Escalade, or Hyundai Staria. Groups can utilize the Mercedes Vito, Mercedes Sprinter, Hiace, or a Modern Bus. All vehicles are modern and air-conditioned for long-distance travel.",
        "borderInfo": "Travelers cross the Al Batha border from Saudi Arabia and enter the UAE via the Al Ghuwaifat border checkpoint. A valid passport and appropriate UAE entry visa are required. Our drivers facilitate the border crossing process, which includes standard identity and vehicle inspections. The approximate crossing time is between 45 and 60 minutes.",
        "useCases": "This route is popular with business professionals working in the Eastern Province and Abu Dhabi, families visiting for leisure, and international tourists. It is also a convenient option for those living in Dammam who need to reach Abu Dhabi without flying.",
        "highlights": [
            "Door-to-Door Service",
            "Al Batha Border Formalities Assistance",
            "Professional long-distance chauffeurs",
            "Modern and clean vehicles",
            "Flexible rest stops along the highway",
            "Secure and reliable transport"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey is approximately 6.5 hours long, including border formalities." },
            { "question": "What vehicles are available?", "answer": "We offer sedans like the Camry and Ford Taurus, SUVs like the GMC, and vans such as the Mercedes Sprinter." },
            { "question": "Can the driver pick up from Dammam Airport?", "answer": "Yes, we can arrange pickups directly from King Fahd International Airport in Dammam." },
            { "question": "Are cross-border trips possible?", "answer": "Yes, we provide full cross-border taxi services between Dammam and Abu Dhabi." },
            { "question": "Is the route safe for night travel?", "answer": "Our drivers are experienced in long-distance travel at all hours, ensuring a safe trip day or night." }
        ],
        "relatedRoutes": [
            { "name": "Dammam to Bahrain Taxi", "slug": "bahrain-to-saudi-arabia-taxi" },
            { "name": "Dammam to Kuwait Taxi", "slug": "dammam-to-kuwait-city-taxi" },
            { "name": "Dammam Airport Taxi", "slug": "dammam-airport-taxi" }
        ]
    },
    {
        "slug": "riyadh-to-doha-taxi",
        "from": "Riyadh",
        "to": "Doha",
        "fromCountry": "Saudi Arabia",
        "toCountry": "Qatar",
        "distance": "600 km",
        "duration": "6h",
        "description": "Private taxi and transfer service from Riyadh to Doha. Efficient cross-border travel from the Saudi capital to Qatar.",
        "longDescription": "The trip starts in Riyadh and ends in Doha, the capital of Qatar. This route travels through the Eastern Province, reaching the Salwa border crossing. We provide a seamless door-to-door transfer, ensuring a comfortable journey through the desert landscapes of central and eastern Arabia.",
        "highways": "Highway 40 (Riyadh to Hofuf) and Highway 10 to the Salwa border.",
        "vehiclesInfo": "Multiple vehicle options are available for this route. Business and solo travelers often prefer the BMW, Genesis, or Mercedes S-Class. For families, the GMC Yukon, Cadillac Escalade, or Hyundai Staria are excellent choices. Larger groups find the Mercedes Vito, Mercedes Sprinter, or a Modern Bus ideal for the 6-hour journey. We also offer standard options like the Camry and Ford Taurus.",
        "borderInfo": "This route involves crossing the Salwa border on the Saudi side and entering Qatar via the Abu Samra checkpoint. Travelers must have a valid passport and the necessary entry permit or visa for Qatar. The border process includes identity verification and vehicle customs, typically taking 45 to 90 minutes. Our drivers are available to assist you throughout this process.",
        "useCases": "This direct taxi route is perfect for business professionals attending meetings in both capitals, families visiting relatives, and sports fans traveling for international events in Doha. It provides a flexible and private alternative to commercial flights.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Professional Drivers",
            "Salwa/Abu Samra Border Assistance",
            "Modern Vehicle Fleet",
            "Flexible Rest Stops",
            "24/7 Availability"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey usually takes about 6 hours, including border formalities." },
            { "question": "What vehicles are available?", "answer": "We offer various vehicles including the Ford Taurus, GMC, Mercedes S-Class, and large vans like the Mercedes Sprinter." },
            { "question": "Can the driver pick up from a hotel?", "answer": "Yes, we provide door-to-door service and can pick you up from any hotel or residence in Riyadh." },
            { "question": "Are cross-border trips possible?", "answer": "Yes, we specialize in cross-border transfers between Saudi Arabia and Qatar." },
            { "question": "Is luggage assistance included?", "answer": "Yes, our drivers assist with luggage loading and unloading at both ends of the journey." }
        ],
        "relatedRoutes": [
            { "name": "Riyadh to Dubai Taxi", "slug": "riyadh-to-dubai-taxi" },
            { "name": "Riyadh to Kuwait Taxi", "slug": "riyadh-to-kuwait-city-taxi" },
            { "name": "Riyadh Airport Taxi", "slug": "riyadh-airport-taxi" }
        ]
    },
    {
        "slug": "dammam-to-doha-taxi",
        "from": "Dammam",
        "to": "Doha",
        "fromCountry": "Saudi Arabia",
        "toCountry": "Qatar",
        "distance": "300 km",
        "duration": "3h 30min",
        "description": "Private taxi and transfer service from Dammam to Doha. Fast and reliable ground transport from the Eastern Province to Qatar.",
        "longDescription": "The trip starts in Dammam and ends in Doha, Qatar. This is one of the quickest cross-border routes, traveling south from the Eastern Province to the Salwa border. We provide full door-to-door service, making it a convenient choice for both business and personal travel.",
        "highways": "Highway 95 and Highway 10 leading to the Salwa border crossing.",
        "vehiclesInfo": "Our fleet includes various vehicles to suit your needs for the Dammam to Doha trip. Individual travelers often choose the Ford Taurus, BMW, or Genesis. Families can book the GMC, Cadillac Escalade, or Hyundai Staria for extra space. Groups have the option of the Mercedes Vito, Mercedes Sprinter, or a Modern Bus. All vehicles are modern and fully air-conditioned.",
        "borderInfo": "This route crosses the Salwa border checkpoint between Saudi Arabia and Qatar. Passengers must have a valid passport and the required visa or Hayya card (if applicable) for Qatar entry. The crossing includes standard security and vehicle inspections and typically takes 30 to 60 minutes.",
        "useCases": "Popular use cases include business travel for those working in Dammam's petroleum and industrial sectors who need to visit Doha, as well as family weekend trips and international tourists exploring the Gulf coast.",
        "highlights": [
            "Door-to-Door Service",
            "Salwa Border Processing Assistance",
            "Professional long-distance chauffeurs",
            "Modern and clean vehicles",
            "Flexible rest stops along the highway",
            "Secure and reliable transport"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey is approximately 3.5 hours long, including border formalities." },
            { "question": "What vehicles are available?", "answer": "We offer sedans like the Camry and Ford Taurus, SUVs like the GMC, and vans such as the Mercedes Sprinter." },
            { "question": "Can the driver pick up from Dammam Airport?", "answer": "Yes, we can arrange pickups directly from King Fahd International Airport in Dammam." },
            { "question": "Are cross-border trips possible?", "answer": "Yes, we provide full cross-border taxi services between Dammam and Doha." },
            { "question": "Is the route safe for night travel?", "answer": "Our drivers are experienced in long-distance travel at all hours, ensuring a safe trip day or night." }
        ],
        "relatedRoutes": [
            { "name": "Dammam to Bahrain Taxi", "slug": "bahrain-to-saudi-arabia-taxi" },
            { "name": "Dammam to Kuwait Taxi", "slug": "dammam-to-kuwait-city-taxi" },
            { "name": "Dammam Airport Taxi", "slug": "dammam-airport-taxi" }
        ]
    },
    {
        "slug": "dubai-to-kuwait-city-taxi",
        "from": "Dubai",
        "to": "Kuwait City",
        "fromCountry": "UAE",
        "toCountry": "Kuwait",
        "distance": "1,250 km",
        "duration": "12h",
        "description": "Private taxi and transfer service from Dubai to Kuwait City. Comfortable vehicles and professional drivers for the UAE-Saudi-Kuwait route.",
        "longDescription": "Traveling from Dubai (UAE) to Kuwait City (Kuwait) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including multiple border clearances and tolls, utilizing various vehicles like Sedans, SUVs, and high-capacity Vans for individuals, families, and business travelers alike.",
        "highways": "E11 (UAE), Highway 10 and Highway 95 (Saudi Arabia).",
        "vehiclesInfo": "A range of vehicles is available for this journey. Business travelers often prefer the Mercedes S-Class, BMW, or Genesis. Families can select the GMC Yukon, Cadillac Escalade, or Staria for ample space. Groups are accommodated in the Mercedes Vito, Mercedes Sprinter, or a Modern Bus. Reliable sedans like the Ford Taurus and Camry are also on offer.",
        "borderInfo": "This route involves two major border crossings. First, travelers cross from the UAE to Saudi Arabia at the Al Ghuwaifat/Al Batha checkpoint. Second, they cross from Saudi Arabia to Kuwait at the Al Khafji/Al Nuwaiseeb border. Valid passports and entry visas for both Saudi Arabia and Kuwait are required. The total border processing time can range from 2 to 3 hours depending on inspections.",
        "useCases": "This route serves business professionals connecting the financial centers of the Gulf, families on relocation or long-haul visits, and tourists exploring multiple GCC countries. It provides a flexible door-to-door alternative to regional air travel.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Professional Drivers",
            "Multi-Border Clearing Assistance",
            "Modern Vehicle Fleet",
            "Flexible Rest Stops",
            "24/7 Availability"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey usually takes about 12 hours, depending on traffic and border crossing times." },
            { "question": "What vehicles are available?", "answer": "We offer various vehicles including the Ford Taurus, GMC, Mercedes S-Class, and large vans like the Mercedes Sprinter." },
            { "question": "Can the driver pick up from a hotel?", "answer": "Yes, we provide door-to-door service and can pick you up from any hotel or residence in Dubai." },
            { "question": "Are multiple border crossings possible?", "answer": "Yes, we specialize in long-distance cross-border transfers involving multiple countries." },
            { "question": "Is luggage assistance provided?", "answer": "Yes, our chauffeurs assist with your luggage throughout the trip." }
        ],
        "relatedRoutes": [
            { "name": "Dubai to Riyadh Taxi", "slug": "dubai-to-riyadh-taxi" },
            { "name": "Dubai to Doha Taxi", "slug": "dubai-to-doha-taxi" },
            { "name": "Dubai Airport Taxi", "slug": "dubai-airport-taxi" }
        ]
    },
    {
        "slug": "kuwait-city-to-dubai-taxi",
        "from": "Kuwait City",
        "to": "Dubai",
        "fromCountry": "Kuwait",
        "toCountry": "UAE",
        "distance": "1,250 km",
        "duration": "12h",
        "description": "Private taxi and transfer service from Kuwait City to Dubai. Reliable cross-border ground transport from Kuwait to the UAE.",
        "longDescription": "Traveling from Kuwait City (Kuwait) to Dubai (UAE) is a significant inter-country journey. We provide a complete door-to-door transfer service, picking you up from any location in Kuwait City and ensuring a comfortable and professional ride to your destination in Dubai. Our service includes handling all border logistics through Saudi Arabia.",
        "highways": "Highway 95 and Highway 10 (Saudi Arabia), and E11 in the UAE.",
        "vehiclesInfo": "A range of comfortable vehicles is available for the Kuwait to Dubai route. Business travelers often prefer the Mercedes S-Class, BMW, or Genesis for a vetted experience. Families find our GMC Yukon, Cadillac Escalade, or Hyundai Staria ideal for long-duration comfort. For larger groups, we offer the Mercedes Vito, Mercedes Sprinter, or a Modern Bus. Budget-friendly options like the Ford Taurus and Camry are also available.",
        "borderInfo": "This journey involves two major border checkpoints. First, travelers cross from Kuwait into Saudi Arabia at the Al Nuwaiseeb/Al Khafji border. Second, they cross from Saudi Arabia into the UAE via the Al Batha/Al Ghuwaifat border. Valid passports and entry visas for both Saudi Arabia and the UAE are required. Total border processing time can range from 2 to 3 hours.",
        "useCases": "Frequently used by business professionals connecting regional hubs, families for leisure trips or relocations, and tourists on grand Gulf tours. It offers a private and flexible door-to-door alternative to regional flights.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Professional Drivers",
            "Multi-Border Clearing Assistance",
            "Modern Vehicle Fleet",
            "Flexible Rest Stops",
            "24/7 Availability"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey usually takes about 12 hours, depending on traffic and border crossing times." },
            { "question": "What vehicles are available?", "answer": "We offer various vehicles including the Ford Taurus, GMC, Mercedes S-Class, and large vans like the Mercedes Sprinter." },
            { "question": "Can the driver pick up from a hotel in Kuwait?", "answer": "Yes, we provide door-to-door service and can pick you up from any hotel or residence in Kuwait City." },
            { "question": "Are multiple border crossings handled?", "answer": "Yes, our drivers are experienced in the formalities at both the Saudi and UAE borders." },
            { "question": "Is luggage assistance included?", "answer": "Yes, our chauffeurs assist with your luggage throughout the journey." }
        ],
        "relatedRoutes": [
            { "name": "Kuwait City to Riyadh Taxi", "slug": "kuwait-city-to-riyadh-taxi" },
            { "name": "Kuwait City to Dammam Taxi", "slug": "kuwait-city-to-dammam-taxi" },
            { "name": "Kuwait Airport Taxi", "slug": "kuwait-airport-taxi" }
        ]
    },
    {
        "slug": "doha-to-dubai-taxi",
        "from": "Doha",
        "to": "Dubai",
        "fromCountry": "Qatar",
        "toCountry": "UAE",
        "distance": "700 km",
        "duration": "7h 30min",
        "description": "Private taxi and transfer service from Doha to Dubai. Reliable cross-border ground transport from Qatar to the UAE.",
        "longDescription": "The journey from Doha (Qatar) to Dubai (UAE) is a direct cross-border transfer covering approximately 700 km. We provide door-to-door service, picking you up from any location in Doha and ensuring a comfortable and professional ride to your destination in Dubai. Our service handles all logistics, including multiple border crossings through Saudi Arabia.",
        "highways": "Salwa Road (Qatar), Highway 10 (Saudi Arabia), and E11 in the UAE.",
        "vehiclesInfo": "A range of comfortable vehicles is available for the Doha to Dubai route. Business travelers often prefer the Mercedes S-Class, BMW, or Genesis for a vetted experience. Families find our GMC Yukon, Cadillac Escalade, or Hyundai Staria ideal for the 7.5-hour trip. For larger groups, we offer the Mercedes Vito, Mercedes Sprinter, or a Modern Bus. Budget-friendly options like the Ford Taurus and Camry are also available.",
        "borderInfo": "This journey involves two major border checkpoints. First, travelers cross from Qatar into Saudi Arabia at the Abu Samra/Salwa border. Second, they cross from Saudi Arabia into the UAE via the Al Batha/Al Ghuwaifat checkpoint. Valid passports and entry visas for both Saudi Arabia and the UAE are required. Total border processing time can range from 90 to 150 minutes.",
        "useCases": "Frequently used by business professionals connecting regional headquarters, families for leisure trips or relocations, and tourists on grand Gulf tours. It offers a private and flexible door-to-door alternative to regional flights.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Professional Drivers",
            "Multi-Border Clearing Assistance",
            "Modern Vehicle Fleet",
            "Flexible Rest Stops",
            "24/7 Availability"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey usually takes about 7.5 hours, depending on traffic and border crossing times." },
            { "question": "What vehicles are available?", "answer": "We offer various vehicles including the Ford Taurus, GMC, Mercedes S-Class, and large vans like the Mercedes Sprinter." },
            { "question": "Can the driver pick up from a hotel in Doha?", "answer": "Yes, we provide door-to-door service and can pick you up from any hotel or residence in Doha." },
            { "question": "Are multiple border crossings handled?", "answer": "Yes, our drivers are experienced in the formalities at both the Saudi and UAE borders." },
            { "question": "Is luggage assistance included?", "answer": "Yes, our chauffeurs assist with your luggage throughout the journey." }
        ],
        "relatedRoutes": [
            { "name": "Doha to Riyadh Taxi", "slug": "doha-to-riyadh-taxi" },
            { "name": "Doha to Abu Dhabi Taxi", "slug": "doha-to-abu-dhabi-taxi" },
            { "name": "Doha Airport Taxi", "slug": "doha-airport-taxi" }
        ]
    },
    {
        "slug": "doha-to-riyadh-taxi",
        "from": "Doha",
        "to": "Riyadh",
        "fromCountry": "Qatar",
        "toCountry": "Saudi Arabia",
        "distance": "580 km",
        "duration": "6h",
        "description": "Private taxi and transfer service from Doha to Riyadh. Reliable cross-border ground transport between the two regional capitals.",
        "longDescription": "The trip from Doha to Riyadh is a direct cross-border transfer covering approximately 580 km. We provide door-to-door service, picking you up from any location in Doha and ensuring a comfortable and safe journey to your destination in Riyadh. Our professional chauffeurs manage all logistics, including the Abu Samra border crossing.",
        "highways": "Salwa Road in Qatar and Highway 10/40 in Saudi Arabia.",
        "vehiclesInfo": "Multiple vehicle options are available for the Doha to Riyadh route. Individual and business travelers often choose the Mercedes S-Class, BMW, or Genesis. Families find our GMC Yukon, Cadillac Escalade, or Staria ideal for the 6-hour trip. For larger groups, we provide the Mercedes Vito, Mercedes Sprinter, or a Modern Bus. Standard options like the Ford Taurus and Camry are also available.",
        "borderInfo": "This route involves crossing the Abu Samra border checkpoint from Qatar and entering Saudi Arabia via the Salwa border entry. Passengers must have a valid passport and the necessary entry visa for Saudi Arabia. Border processing includes identity verification and vehicle customs, which generally takes 45 to 75 minutes.",
        "useCases": "Frequently used by business professionals traveling for government or commercial purposes, families visiting relatives, and tourists on cross-country tours. It provides a flexible and private alternative to flying.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Professional Drivers",
            "Abu Samra/Salwa Border Assistance",
            "Modern Vehicle Fleet",
            "Flexible Rest Stops",
            "24/7 Availability"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey usually takes about 6 hours, including border crossing formalities." },
            { "question": "What vehicles are available?", "answer": "We offer various vehicles including the Ford Taurus, GMC, Mercedes S-Class, and large vans like the Mercedes Sprinter." },
            { "question": "Can the driver pick up from Doha Airport?", "answer": "Yes, we provide door-to-door service and can pick you up from Hamad International Airport or any hotel in Doha." },
            { "question": "Are cross-border trips possible?", "answer": "Yes, we specialize in cross-border transfers between Doha and Riyadh." },
            { "question": "Is luggage assistance included?", "answer": "Yes, our drivers assist with luggage loading and unloading at both ends of the journey." }
        ],
        "relatedRoutes": [
            { "name": "Doha to Dubai Taxi", "slug": "doha-to-dubai-taxi" },
            { "name": "Doha to Dammam Taxi", "slug": "doha-to-dammam-taxi" },
            { "name": "Doha Airport Taxi", "slug": "doha-airport-taxi" }
        ]
    },
    {
        "slug": "doha-to-dammam-taxi",
        "from": "Doha",
        "to": "Dammam",
        "fromCountry": "Qatar",
        "toCountry": "Saudi Arabia",
        "distance": "410 km",
        "duration": "4h 30min",
        "description": "Private taxi and transfer service from Doha to Dammam. Comfortable cross-border ground transport to the Eastern Province.",
        "longDescription": "The trip from Doha to Dammam is a direct cross-border transfer covering approximately 410 km. We provide door-to-door service, picking you up from any location in Doha and ensuring a comfortable and safe journey to your destination in Dammam. Our professional chauffeurs manage all logistics, including the Abu Samra border crossing.",
        "highways": "Salwa Road and Highway 95 connects Doha to the Eastern Province of Saudi Arabia.",
        "vehiclesInfo": "Multiple vehicle options are available for the Doha to Dammam route. Individual and business travelers often choose the Mercedes S-Class, BMW, or Genesis. Families find the GMC Yukon, Cadillac Escalade, or Hyundai Staria excellent for the 4.5-hour trip. For larger groups, we offer the Mercedes Vito, Mercedes Sprinter, or a Modern Bus. Standard options like the Ford Taurus and Camry are also available.",
        "borderInfo": "This journey involves crossing the Abu Samra border checkpoint from Qatar and entering Saudi Arabia via the Salwa border entry. Passengers must have a valid passport and the necessary entry visa for Saudi Arabia. Border processing includes identity verification and vehicle customs, which generally takes 30 to 60 minutes.",
        "useCases": "Popular with business professionals connecting the two regional centers, families visiting relatives in the Eastern Province, and travelers heading to King Fahd International Airport. It offers a convenient, door-to-door alternative to regional travel.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Professional Drivers",
            "Abu Samra/Salwa Border Assistance",
            "Modern Vehicle Fleet",
            "Flexible Rest Stops",
            "24/7 Availability"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey usually takes about 4.5 hours, depending on traffic and border crossing times." },
            { "question": "What vehicles are available?", "answer": "We offer various vehicles including the Ford Taurus, GMC, Mercedes S-Class, and large vans like the Mercedes Sprinter." },
            { "question": "Can the driver pick up from a hotel in Doha?", "answer": "Yes, we provide door-to-door service and can pick you up from any hotel or residence in Doha." },
            { "question": "Are cross-border trips possible?", "answer": "Yes, we specialize in cross-border transfers between Doha and Saudi Arabia." },
            { "question": "Is luggage assistance included?", "answer": "Yes, our drivers assist with luggage loading and unloading at both ends of the journey." }
        ],
        "relatedRoutes": [
            { "name": "Doha to Riyadh Taxi", "slug": "doha-to-riyadh-taxi" },
            { "name": "Doha to Kuwait City Taxi", "slug": "doha-to-kuwait-city-taxi" },
            { "name": "Doha Airport Taxi", "slug": "doha-airport-taxi" }
        ]
    },
    {
        "slug": "dubai-to-doha-taxi",
        "from": "Dubai",
        "to": "Doha",
        "fromCountry": "UAE",
        "toCountry": "Qatar",
        "distance": "700 km",
        "duration": "7h 30min",
        "description": "Private taxi and transfer service from Dubai to Doha. Reliable cross-border ground transport from the UAE to Qatar.",
        "longDescription": "Traveling from Dubai (UAE) to Doha (Qatar) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including multiple border clearances and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highways": "E11 (UAE), Highway 10 and Salwa Road (Saudi Arabia).",
        "vehiclesInfo": "We provide a diverse fleet for the Dubai to Doha route. Business and individual travelers often prefer the Mercedes S-Class, BMW, or Genesis. Families can book the GMC Yukon, Cadillac Escalade, or Staria for extra space. Groups are accommodated in the Mercedes Vito, Mercedes Sprinter, or a Modern Bus. Reliable options like the Ford Taurus and Camry are also available.",
        "borderInfo": "This journey involves two border crossings. First, from the UAE to Saudi Arabia at the Al Ghuwaifat/Al Batha checkpoint. Second, from Saudi Arabia to Qatar at the Salwa/Abu Samra border. Passengers must have valid passports and entry visas for both Saudi Arabia and Qatar. Total border processing time typically ranges from 90 to 150 minutes.",
        "useCases": "Popular with business professionals connecting the financial centers of Dubai and Doha, families visiting relatives or attending events in Qatar, and tourists on Gulf-wide tours. It is a convenient door-to-door alternative to flying.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Professional Drivers",
            "Multi-Border Clearing Assistance",
            "Modern Vehicle Fleet",
            "Flexible Rest Stops",
            "24/7 Availability"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey usually takes about 7.5 hours, depending on traffic and border crossing times." },
            { "question": "What vehicles are available?", "answer": "We offer various vehicles including the Ford Taurus, GMC, Mercedes S-Class, and large vans like the Mercedes Sprinter." },
            { "question": "Can the driver pick up from a hotel?", "answer": "Yes, we provide door-to-door service and can pick you up from any hotel or residence in Dubai." },
            { "question": "Are multiple border crossings handled?", "answer": "Yes, our drivers are experienced in managing the formalities at both the Saudi and Qatari borders." },
            { "question": "Is luggage assistance included?", "answer": "Yes, our chauffeurs assist with luggage loading and unloading at both ends of the journey." }
        ],
        "relatedRoutes": [
            { "name": "Dubai to Riyadh Taxi", "slug": "dubai-to-riyadh-taxi" },
            { "name": "Dubai to Abu Dhabi Taxi", "slug": "dubai-to-abu-dhabi-taxi" },
            { "name": "Dubai Airport Taxi", "slug": "dubai-airport-taxi" }
        ]
    },
    {
        "slug": "dubai-to-manama-taxi",
        "from": "Dubai",
        "to": "Manama",
        "fromCountry": "UAE",
        "toCountry": "Bahrain",
        "distance": "800 km",
        "duration": "8h",
        "description": "Private taxi and transfer service from Dubai to Manama. Experience a comfortable cross-border journey from the UAE to Bahrain.",
        "longDescription": "The trip from Dubai to Manama is a comprehensive cross-border service covering approximately 800 km. We provide door-to-door pickup from any location in Dubai and a direct transfer across the King Fahd Causeway to your destination in Manama. Our service handles all logistics, including multiple border crossings, to ensure a seamless travel experience.",
        "highways": "E11 (UAE), Highway 10 (Saudi Arabia), and the King Fahd Causeway.",
        "vehiclesInfo": "A wide range of vehicles is available for the Dubai to Manama route. Individual and business travelers often choose the Mercedes S-Class, BMW, or Genesis for a scheduled experience. Families find the GMC Yukon, Cadillac Escalade, or Hyundai Staria ideal for long-distance comfort. For larger groups, we offer the Mercedes Vito, Mercedes Sprinter, or a Modern Bus. Budget-friendly options like the Ford Taurus and Camry are also available.",
        "borderInfo": "This journey involves two major border checkpoints. First, travelers cross from the UAE into Saudi Arabia via the Al Ghuwaifat/Al Batha border. Second, they cross from Saudi Arabia into Bahrain via the King Fahd Causeway. Valid passports and entry visas for both Saudi Arabia and Bahrain are required. Total border processing time typically ranges from 2 to 3 hours.",
        "useCases": "Popular with business professionals connecting regional headquarters, families visiting for leisure or relocations, and tourists on Gulf tours. It offers a private and flexible door-to-door alternative to regional flights.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Professional Drivers",
            "Multi-Border Clearing Assistance",
            "Modern Vehicle Fleet",
            "Flexible Rest Stops",
            "24/7 Availability"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey usually takes about 8 hours, depending on traffic and border crossing times." },
            { "question": "What vehicles are available?", "answer": "We offer various vehicles including the Ford Taurus, GMC, Mercedes S-Class, and large vans like the Mercedes Sprinter." },
            { "question": "Can the driver pick up from Dubai Airport?", "answer": "Yes, we provide door-to-door service and can pick you up from any terminal at Dubai International Airport." },
            { "question": "Are multiple border crossings handled?", "answer": "Yes, we specialize in cross-border transfers involving multiple countries and jurisdictions." },
            { "question": "Is luggage assistance included?", "answer": "Yes, our drivers assist with luggage loading and unloading at both ends of the journey." }
        ],
        "relatedRoutes": [
            { "name": "Dubai to Abu Dhabi Taxi", "slug": "dubai-to-abu-dhabi-taxi" },
            { "name": "Dubai to Riyadh Taxi", "slug": "dubai-to-riyadh-taxi" },
            { "name": "Dubai Airport Taxi", "slug": "dubai-airport-taxi" }
        ]
    },
    {
        "slug": "dubai-to-muscat-taxi",
        "from": "Dubai",
        "to": "Muscat",
        "fromCountry": "UAE",
        "toCountry": "Oman",
        "distance": "450 km",
        "duration": "5h",
        "description": "Private taxi and transfer service from Dubai to Muscat. Reliable cross-border ground transport between the UAE and Oman.",
        "longDescription": "Traveling from Dubai (UAE) to Muscat (Oman) is a popular inter-city and cross-border journey. We provide door-to-door service, picking you up from any location in Dubai, including the airport or hotels, and ensuring a comfortable ride across the border to the Omani capital. Our professional drivers are well-acquainted with the border protocols at Hatta and Al Wajaja.",
        "highways": "E44 (Hatta Road) or E102 in the UAE and Route 1 in Oman.",
        "vehiclesInfo": "A wide range of modern, air-conditioned vehicles is available for the Dubai to Muscat route. Business travelers and individuals often choose the Mercedes S-Class, BMW, or Genesis. Families find the GMC Yukon or Cadillac Escalade ideal for the trip. Larger groups can book the Mercedes Vito, Mercedes Sprinter, or a Modern Bus. Budget-friendly options like the Ford Taurus and Camry are also available.",
        "borderInfo": "This route typically involves crossing the Hatta border checkpoint from the UAE and entering Oman via the Al Wajaja border. A valid passport and the appropriate entry visa for Oman (or eVisa) are required. The border process includes identity verification and vehicle customs, which generally takes 30 to 60 minutes. Your chauffeur will assist with the standard procedures.",
        "useCases": "Popular for business travel between the two regional centers, weekend leisure trips to Muscat, and international tourists exploring the Arabian Peninsula. It provides a reliable private alternative to long-distance bus travel or regional flights.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Professional Drivers",
            "Hatta/Al Wajaja Border Assistance",
            "Modern Vehicle Fleet",
            "Flexible Rest Stops",
            "24/7 Availability"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey usually takes about 5 hours, including the time required for border formalities." },
            { "question": "What vehicles are available?", "answer": "We offer various vehicles including the Ford Taurus, GMC, Mercedes S-Class, and large vans like the Mercedes Sprinter." },
            { "question": "Can the driver pick up from Dubai Airport?", "answer": "Yes, we provide door-to-door service and can pick you up from any terminal at Dubai International Airport." },
            { "question": "Are cross-border trips possible?", "answer": "Yes, we specialize in cross-border transfers between the UAE and Oman." },
            { "question": "Is luggage assistance included?", "answer": "Yes, our drivers assist with luggage loading and unloading at both ends of the journey." }
        ],
        "relatedRoutes": [
            { "name": "Dubai to Abu Dhabi Taxi", "slug": "dubai-to-abu-dhabi-taxi" },
            { "name": "Dubai to Riyadh Taxi", "slug": "dubai-to-riyadh-taxi" },
            { "name": "Dubai Airport Taxi", "slug": "dubai-airport-taxi" }
        ]
    },
    {
        "slug": "sharjah-to-muscat-taxi",
        "from": "Sharjah",
        "to": "Muscat",
        "fromCountry": "UAE",
        "toCountry": "Oman",
        "distance": "430 km",
        "duration": "4h 30min",
        "description": "Private taxi and transfer service from Sharjah to Muscat. Experienced cross-border ground transport to the Omani capital.",
        "longDescription": "The trip from Sharjah to Muscat is a convenient cross-border journey spanning approximately 430 km. We provide door-to-door pickup from your location in Sharjah and a direct transfer to any destination in Muscat. This service is designed for travelers who prefer a private, reliable, and comfortable alternative to buses or regional flights.",
        "highways": "E102 (Sharjah-Kalba Road) and Route 1 in Oman.",
        "vehiclesInfo": "Multiple vehicle options are available for the Sharjah to Muscat route. Individual and business travelers often choose the Mercedes S-Class, BMW, or Genesis. Families find the GMC Yukon, Cadillac Escalade, or Hyundai Staria excellent for the 4.5-hour trip. For larger groups, we offer the Mercedes Vito, Mercedes Sprinter, or a Modern Bus. Budget-friendly options like the Ford Taurus and Camry are also available.",
        "borderInfo": "This route typically involves crossing into Oman via the Khatmat Malaha or Hatta checkpoint. Passengers must have a valid passport and the required entry visa or eVisa for Oman. The border checks include passport control and vehicle inspection, usually taking around 30 to 45 minutes. Our chauffeurs assist with the standard border formalities.",
        "useCases": "Popular with residents of the Northern Emirates for weekend trips, business professionals traveling between Sharjah and Muscat, and tourists exploring the region. It offers a seamless door-to-door experience.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Professional Drivers",
            "Khatmat Malaha Border Assistance",
            "Modern Vehicle Fleet",
            "Flexible Rest Stops",
            "24/7 Availability"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey usually takes about 4.5 hours, including border crossing times." },
            { "question": "What vehicles are available?", "answer": "We offer various vehicles including the Ford Taurus, GMC, Mercedes S-Class, and large vans like the Mercedes Sprinter." },
            { "question": "Can the driver pick up from Sharjah Airport?", "answer": "Yes, we provide door-to-door service and can pick you up from Sharjah International Airport or any location in Sharjah." },
            { "question": "Are cross-border trips possible?", "answer": "Yes, we specialize in cross-border transfers between the UAE and Oman." },
            { "question": "Is luggage assistance included?", "answer": "Yes, our drivers assist with luggage loading and unloading at both ends of the journey." }
        ],
        "relatedRoutes": [
            { "name": "Sharjah to Dubai Taxi", "slug": "sharjah-to-dubai-taxi" },
            { "name": "Sharjah Airport Taxi", "slug": "sharjah-airport-taxi" },
            { "name": "Dubai to Muscat Taxi", "slug": "dubai-to-muscat-taxi" }
        ]
    },
    {
        "slug": "muscat-to-dubai-taxi",
        "from": "Muscat",
        "to": "Dubai",
        "fromCountry": "Oman",
        "toCountry": "UAE",
        "distance": "450 km",
        "duration": "5h",
        "description": "Private taxi and transfer service from Muscat to Dubai. Reliable cross-border ground transport from Oman to the UAE.",
        "longDescription": "The trip from Muscat (Oman) to Dubai (UAE) is a direct cross-border transfer spanning approximately 450 km. We provide door-to-door service, picking you up from any location in Muscat and ensuring a comfortable and professional ride to your destination in Dubai. Our service handles all logistics, including the border clearance at Al Wajaja and Hatta.",
        "highways": "Route 1 (Oman) and E44 (Hatta Road) or E102 in the UAE.",
        "vehiclesInfo": "A range of comfortable vehicles is available for the Muscat to Dubai route. Business travelers often prefer the Mercedes S-Class, BMW, or Genesis for a vetted experience. Families find our GMC Yukon, Cadillac Escalade, or Hyundai Staria ideal for the 5-hour journey. For larger groups, we offer the Mercedes Vito, Mercedes Sprinter, or a Modern Bus. Budget-friendly options like the Ford Taurus and Camry are also available.",
        "borderInfo": "This journey involves crossing the Al Wajaja border from Oman and entering the UAE via the Hatta border checkpoint. Passengers must have a valid passport and the required entry visa or eVisa for the UAE. The border process includes passport control and vehicle inspection, usually taking around 30 to 60 minutes. Our chauffeurs assist with the standard border formalities.",
        "useCases": "Popular with business professionals connecting regional hubs, families for leisure trips or relocations, and tourists exploring the Arabian Peninsula. It offers a private and flexible door-to-door alternative to international flights.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Professional Drivers",
            "Al Wajaja/Hatta Border Assistance",
            "Modern Vehicle Fleet",
            "Flexible Rest Stops",
            "24/7 Availability"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey usually takes about 5 hours, including border crossing times." },
            { "question": "What vehicles are available?", "answer": "We offer various vehicles including the Ford Taurus, GMC, Mercedes S-Class, and large vans like the Mercedes Sprinter." },
            { "question": "Can the driver pick up from Muscat Airport?", "answer": "Yes, we provide door-to-door service and can pick you up from Muscat International Airport or any hotel in Muscat." },
            { "question": "Are cross-border trips possible?", "answer": "Yes, we specialize in cross-border transfers between Oman and the UAE." },
            { "question": "Is luggage assistance included?", "answer": "Yes, our drivers assist with luggage loading and unloading at both ends of the journey." }
        ],
        "relatedRoutes": [
            { "name": "Muscat to Abu Dhabi Taxi", "slug": "muscat-to-abu-dhabi-taxi" },
            { "name": "Dubai to Muscat Taxi", "slug": "dubai-to-muscat-taxi" },
            { "name": "Muscat Airport Taxi", "slug": "muscat-airport-taxi" }
        ]
    },
    {
        "slug": "abu-dhabi-to-muscat-taxi",
        "from": "Abu Dhabi",
        "to": "Muscat",
        "fromCountry": "UAE",
        "toCountry": "Oman",
        "distance": "500 km",
        "duration": "5h 30min",
        "description": "Private taxi and transfer service from Abu Dhabi to Muscat. Experienced cross-border ground transport to the Omani capital.",
        "longDescription": "The trip from Abu Dhabi to Muscat is a comfortable cross-border journey spanning approximately 500 km. We provide door-to-door pickup from your location in Abu Dhabi and a direct transfer to any destination in Muscat. This service is designed for those who value privacy, comfort, and a professional level of service while traveling between the UAE and Oman capitals.",
        "highways": "E22 Highway (Abu Dhabi to Al Ain) and Route 21 in Oman.",
        "vehiclesInfo": "Multiple vehicle options are available for the Abu Dhabi to Muscat route. Individual travelers often choose the BMW, Genesis, or Mercedes S-Class. Families find the GMC Yukon, Cadillac Escalade, or Hyundai Staria excellent for the long-distance trip. For larger groups, we offer the Mercedes Vito, Mercedes Sprinter, or a Modern Bus. Budget-friendly options like the Ford Taurus and Camry are also available.",
        "borderInfo": "This route typically crosses into Oman through the Al Ain borders, such as Khatm Al Shukla or Mezyad, leading to Buraimi and then onward to Muscat. Passengers must have a valid passport and the required entry visa or eVisa for Oman. The border checks include passport control and vehicle inspection, usually taking around 30 to 60 minutes.",
        "useCases": "Popular with business professionals attending government or corporate meetings, families going for leisure or visiting relatives, and tourists exploring the regional heritage. It offers a convenient, door-to-door alternative to regional flights.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Professional Drivers",
            "Al Ain/Buraimi Border Assistance",
            "Modern Vehicle Fleet",
            "Flexible Rest Stops",
            "24/7 Availability"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey usually takes about 5.5 hours, including border formalities." },
            { "question": "What vehicles are available?", "answer": "We offer various vehicles including the Ford Taurus, GMC, Mercedes S-Class, and large vans like the Mercedes Sprinter." },
            { "question": "Can the driver pick up from Abu Dhabi Airport?", "answer": "Yes, we provide door-to-door service and can pick you up from Zayed International Airport or any hotel in Abu Dhabi." },
            { "question": "Are cross-border trips possible?", "answer": "Yes, we specialize in cross-border transfers between Abu Dhabi and Muscat." },
            { "question": "Is luggage assistance included?", "answer": "Yes, our drivers assist with luggage loading and unloading at both ends of the journey." }
        ],
        "relatedRoutes": [
            { "name": "Abu Dhabi to Dubai Taxi", "slug": "abu-dhabi-to-dubai-taxi" },
            { "name": "Abu Dhabi to Riyadh Taxi", "slug": "abu-dhabi-to-riyadh-taxi" },
            { "name": "Abu Dhabi Airport Taxi", "slug": "abu-dhabi-airport-taxi" }
        ]
    },
    {
        "slug": "muscat-to-abu-dhabi-taxi",
        "from": "Muscat",
        "to": "Abu Dhabi",
        "fromCountry": "Oman",
        "toCountry": "UAE",
        "distance": "500 km",
        "duration": "5h 30min",
        "description": "Private taxi and transfer service from Muscat to Abu Dhabi. Reliable cross-border ground transport from Oman to the UAE capital.",
        "longDescription": "The trip from Muscat (Oman) to Abu Dhabi (UAE) is a direct cross-border transfer spanning approximately 500 km. We provide door-to-door service, picking you up from any location in Muscat and ensuring a comfortable and professional ride to your destination in Abu Dhabi. Our service handles all logistics, including the border clearance at Buraimi and Al Ain.",
        "highways": "Route 21 (Oman) and E22 in the UAE.",
        "vehiclesInfo": "A range of comfortable vehicles is available for the Muscat to Abu Dhabi route. Business travelers often prefer the Mercedes S-Class, BMW, or Genesis for a vetted experience. Families find our GMC Yukon, Cadillac Escalade, or Hyundai Staria ideal for the 5.5-hour journey. For larger groups, we offer the Mercedes Vito, Mercedes Sprinter, or a Modern Bus. Budget-friendly options like the Ford Taurus and Camry are also available.",
        "borderInfo": "This journey involves crossing into the UAE via the Buraimi/Al Ain border checkpoint. Passengers must have a valid passport and the required entry visa or eVisa for the UAE. The border process includes passport control and vehicle inspection, usually taking around 30 to 60 minutes. Our chauffeurs assist with the standard border formalities.",
        "useCases": "Popular with business professionals connecting regional hubs, families for leisure trips or relocations, and tourists exploring the Arabian Peninsula. It offers a private and flexible door-to-door alternative to international flights.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Professional Drivers",
            "Buraimi/Al Ain Border Assistance",
            "Modern Vehicle Fleet",
            "Flexible Rest Stops",
            "24/7 Availability"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey usually takes about 5.5 hours, including border crossing times." },
            { "question": "What vehicles are available?", "answer": "We offer various vehicles including the Ford Taurus, GMC, Mercedes S-Class, and large vans like the Mercedes Sprinter." },
            { "question": "Can the driver pick up from Muscat Airport?", "answer": "Yes, we provide door-to-door service and can pick you up from Muscat International Airport or any hotel in Muscat." },
            { "question": "Are cross-border trips possible?", "answer": "Yes, we specialize in cross-border transfers between Oman and the UAE." },
            { "question": "Is luggage assistance included?", "answer": "Yes, our drivers assist with luggage loading and unloading at both ends of the journey." }
        ],
        "relatedRoutes": [
            { "name": "Muscat to Dubai Taxi", "slug": "muscat-to-dubai-taxi" },
            { "name": "Abu Dhabi to Muscat Taxi", "slug": "abu-dhabi-to-muscat-taxi" },
            { "name": "Muscat Airport Taxi", "slug": "muscat-airport-taxi" }
        ]
    },
    {
        "slug": "abu-dhabi-to-riyadh-taxi",
        "from": "Abu Dhabi",
        "to": "Riyadh",
        "fromCountry": "UAE",
        "toCountry": "Saudi Arabia",
        "distance": "900 km",
        "duration": "9h",
        "description": "Private taxi and transfer service from Abu Dhabi to Riyadh. Reliable cross-border ground transport to the Saudi capital.",
        "longDescription": "The trip from Abu Dhabi to Riyadh is a direct cross-border transfer covering approximately 900 km. We provide door-to-door service, picking you up from any location in Abu Dhabi and ensuring a comfortable and safe journey to your destination in Riyadh. Our professional chauffeurs manage all logistics, including the Al Batha border crossing.",
        "highways": "E11 Highway in the UAE and Highway 10 in Saudi Arabia.",
        "vehiclesInfo": "Multiple vehicle options are available for the Abu Dhabi to Riyadh route. Individual and business travelers often choose the Mercedes S-Class, BMW, or Genesis. Families find our GMC Yukon, Cadillac Escalade, or Staria ideal for the 9-hour trip. For larger groups, we provide the Mercedes Vito, Mercedes Sprinter, or a Modern Bus. Standard options like the Ford Taurus and Camry are also available.",
        "borderInfo": "This route involves crossing the Al Ghuwaifat border checkpoint from the UAE and entering Saudi Arabia via the Al Batha border entry. Passengers must have a valid passport and the necessary entry visa for Saudi Arabia. Border processing includes identity verification and vehicle customs, which generally takes 45 to 75 minutes.",
        "useCases": "Frequently used by business professionals traveling for government or commercial purposes, families moving between the two capitals, and tourists on cross-country tours. It provides a flexible and private alternative to flying.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Professional Drivers",
            "Al Ghuwaifat/Al Batha Border Assistance",
            "Modern Vehicle Fleet",
            "Flexible Rest Stops",
            "24/7 Availability"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey usually takes about 9 hours, including border crossing formalities." },
            { "question": "What vehicles are available?", "answer": "We offer various vehicles including the Ford Taurus, GMC, Mercedes S-Class, and large vans like the Mercedes Sprinter." },
            { "question": "Can the driver pick up from Abu Dhabi Airport?", "answer": "Yes, we provide door-to-door service and can pick you up from Zayed International Airport or any hotel in Abu Dhabi." },
            { "question": "Are cross-border trips possible?", "answer": "Yes, we specialize in cross-border transfers between Abu Dhabi and Riyadh." },
            { "question": "Is luggage assistance included?", "answer": "Yes, our drivers assist with luggage loading and unloading at both ends of the journey." }
        ],
        "relatedRoutes": [
            { "name": "Abu Dhabi to Dubai Taxi", "slug": "dubai-to-abu-dhabi-taxi" },
            { "name": "Abu Dhabi to Dammam Taxi", "slug": "abu-dhabi-to-dammam-taxi" },
            { "name": "Abu Dhabi Airport Taxi", "slug": "abu-dhabi-airport-taxi" }
        ]
    },
    {
        "slug": "manama-to-riyadh-taxi",
        "from": "Manama",
        "to": "Riyadh",
        "fromCountry": "Bahrain",
        "toCountry": "Saudi Arabia",
        "distance": "480 km",
        "duration": "5h",
        "description": "Private taxi and transfer service from Manama to Riyadh. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Manama (Bahrain) to Riyadh (Saudi Arabia) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Full Customs & Border Processing Assistance",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Riyadh from Manama?",
                "answer": "The total driving distance is approximately 480 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 5h."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "A valid passport, appropriate visa for Saudi Arabia, and national ID. We manage all vehicle-related border customs."
            }
        ]
    },
    {
        "slug": "riyadh-to-manama-taxi",
        "from": "Riyadh",
        "to": "Manama",
        "fromCountry": "Saudi Arabia",
        "toCountry": "Bahrain",
        "distance": "480 km",
        "duration": "5h",
        "description": "Private taxi and transfer service from Riyadh to Manama. Reliable ground transport across the King Fahd Causeway to Bahrain.",
        "longDescription": "Traveling from Riyadh (Saudi Arabia) to Manama (Bahrain) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highways": "Highway 40 (Riyadh-Dammam Highway) and the King Fahd Causeway.",
        "vehiclesInfo": "A wide range of vehicles is available for the Riyadh to Manama route. Individual travelers and business professionals often select the Ford Taurus, BMW, Genesis, or Mercedes S-Class. Families find the GMC Yukon or Cadillac Escalade ideal for the trip across the causeway. For larger groups, we offer the Mercedes Vito, Mercedes Sprinter, Hiace, or a Modern Bus. All vehicles are modern and fully air-conditioned.",
        "borderInfo": "This route crosses the King Fahd Causeway, the bridge connecting Saudi Arabia and Bahrain. Passengers must have a valid passport and the appropriate entry visa for Bahrain. The process includes passport control and vehicle customs on the embankment island. The crossing time varies depending on the time of day and week but typically takes 30 to 60 minutes.",
        "useCases": "This route is popular for weekend leisure trips to Bahrain, business travelers attending meetings in Manama, and families visiting relatives. It's a convenient door-to-door alternative to regional flights.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Professional Drivers",
            "King Fahd Causeway Assistance",
            "Modern Vehicle Fleet",
            "Flexible Rest Stops",
            "24/7 Availability"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey usually takes about 5 hours, including the time for causeway formalities." },
            { "question": "What vehicles are available?", "answer": "We offer various vehicles including the Ford Taurus, GMC, Mercedes S-Class, and large vans like the Mercedes Sprinter." },
            { "question": "Can the driver pick up from a hotel?", "answer": "Yes, we provide door-to-door service and can pick you up from any hotel or residence in Riyadh." },
            { "question": "Are cross-border trips possible?", "answer": "Yes, we specialize in cross-border transfers between Saudi Arabia and Bahrain." },
            { "question": "Is luggage assistance included?", "answer": "Yes, our drivers assist with luggage loading and unloading at both ends of the journey." }
        ],
        "relatedRoutes": [
            { "name": "Riyadh to Dubai Taxi", "slug": "riyadh-to-dubai-taxi" },
            { "name": "Riyadh to Kuwait Taxi", "slug": "riyadh-to-kuwait-city-taxi" },
            { "name": "Riyadh Airport Taxi", "slug": "riyadh-airport-taxi" }
        ]
    },
    {
        "slug": "dammam-to-manama-taxi",
        "from": "Dammam",
        "to": "Manama",
        "fromCountry": "Saudi Arabia",
        "toCountry": "Bahrain",
        "distance": "80 km",
        "duration": "1h 30min",
        "description": "Quick taxi service from Dammam to Manama. Experience a comfortable journey across the King Fahd Causeway to Bahrain.",
        "longDescription": "The trip from Dammam to Manama is one of the most traveled cross-border routes in the region. We provide door-to-door service starting from any location in Dammam, including King Fahd International Airport, and ending at your destination in Manama. Our professional chauffeurs are familiar with the causeway procedures to ensure a smooth transition between Saudi Arabia and Bahrain.",
        "highways": "King Fahd Causeway connects the two cities directly.",
        "vehiclesInfo": "Multiple vehicle options are available for the Dammam to Manama route. Solo travelers and business professionals often choose the Ford Taurus, BMW, or Mercedes S-Class. Families find the GMC Yukon or Cadillac Escalade ideal for the trip across the causeway. For larger groups, we offer the Mercedes Vito, Mercedes Sprinter, Hiace, or a Modern Bus. All vehicles are modern and fully air-conditioned.",
        "borderInfo": "This journey involves crossing the King Fahd Causeway embankment island for passport and customs control. Travelers must have a valid passport and the appropriate entry visa for Bahrain. The crossing time varies by traffic but typically takes 30 to 45 minutes on average.",
        "useCases": "This route is frequently used by business professionals commuting between the Eastern Province and Manama, residents going for shopping or weekend leisure, and travelers needing airport transfers between the two countries.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Professional Drivers",
            "King Fahd Causeway Assistance",
            "Modern Vehicle Fleet",
            "Flexible Rest Stops",
            "24/7 Availability"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey usually takes about 1 hour and 30 minutes, depending on causeway traffic." },
            { "question": "What vehicles are available?", "answer": "We offer various vehicles including the Ford Taurus, GMC, Mercedes S-Class, and large vans like the Mercedes Sprinter." },
            { "question": "Can the driver pick up from Dammam Airport?", "answer": "Yes, we provide door-to-door service and can pick you up from King Fahd International Airport or any hotel in Dammam." },
            { "question": "Are cross-border trips possible?", "answer": "Yes, we specialize in cross-border transfers between Saudi Arabia and Bahrain." },
            { "question": "Is luggage assistance included?", "answer": "Yes, our drivers assist with luggage loading and unloading at both ends of the journey." }
        ],
        "relatedRoutes": [
            { "name": "Dammam to Dubai Taxi", "slug": "dammam-to-dubai-taxi" },
            { "name": "Dammam to Kuwait Taxi", "slug": "dammam-to-kuwait-city-taxi" },
            { "name": "Dammam Airport Taxi", "slug": "dammam-airport-taxi" }
        ]
    },
    {
        "slug": "jeddah-to-manama-taxi",
        "from": "Jeddah",
        "to": "Manama",
        "fromCountry": "Saudi Arabia",
        "toCountry": "Bahrain",
        "distance": "1,350 km",
        "duration": "14h",
        "description": "Long-distance taxi service from Jeddah to Manama. Comfortable cross-border travel from the Red Sea to Bahrain.",
        "longDescription": "The trip starts in Jeddah on the Red Sea and ends in Manama, Bahrain. This route spans the width of Saudi Arabia via Riyadh and Dammam before crossing the King Fahd Causeway. We ensure a comfortable and reliable door-to-door experience for the entire 1,350 km cross-border transfer.",
        "highways": "Highway 40 (Jeddah to Dammam) and the King Fahd Causeway.",
        "vehiclesInfo": "Due to the long distance, we recommend our most comfortable vehicle options. Solo and business travelers often choose the Mercedes S-Class or BMW. For families or groups, the GMC Yukon, Cadillac Escalade, or Mercedes Sprinter are excellent choices due to their space and amenities. Vehicles like the Genesis, Ford Taurus, and Hyundai Staria are also available.",
        "borderInfo": "This route crosses the King Fahd Causeway between Saudi Arabia and Bahrain. Passengers must possess a valid passport and the required travel documents for Bahrain. Our professional drivers are experienced with the causeway formalities, which typically take 45 to 90 minutes for inspection and processing.",
        "useCases": "This inter-country route is ideal for families relocating, travelers on grand Gulf tours, and large groups seeking a private alternative to flying. It offers a unique door-to-door service across the Arabian Peninsula.",
        "highlights": [
            "Full Cross-Country Chauffeur Service",
            "Door-to-Door Pickup and Drop-off",
            "King Fahd Causeway Documentation Support",
            "Extended rest stops for comfort",
            "Expert long-haul drivers",
            "Safe and reliable fleet"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey is approximately 14 hours long, including required stops and causeway processing." },
            { "question": "What vehicles are available?", "answer": "We recommend SUVs like the GMC or scheduled sedans like the Mercedes S-Class for this distance, though all fleet vehicles are available." },
            { "question": "Can the driver pick up from a hotel in Jeddah?", "answer": "Yes, we provide full door-to-door service from any hotel or residence in Jeddah." },
            { "question": "Are cross-border trips possible?", "answer": "Yes, we specialize in cross-border ground transport between Saudi Arabia and Bahrain." },
            { "question": "Is the trip done in one go?", "answer": "The trip is a continuous service, but we ensure regular rest stops for the driver and passengers' safety and comfort." }
        ],
        "relatedRoutes": [
            { "name": "Jeddah to Makkah Taxi", "slug": "jeddah-to-makkah-taxi" },
            { "name": "Jeddah to Madinah Taxi", "slug": "jeddah-to-madinah-taxi" },
            { "name": "Jeddah Airport Taxi", "slug": "jeddah-airport-taxi" }
        ]
    },
    {
        "slug": "abu-dhabi-to-doha-taxi",
        "from": "Abu Dhabi",
        "to": "Doha",
        "fromCountry": "UAE",
        "toCountry": "Qatar",
        "distance": "600 km",
        "duration": "6h",
        "description": "Private taxi and transfer service from Abu Dhabi to Doha. Reliable cross-border ground transport from the UAE to Qatar.",
        "longDescription": "The trip from Abu Dhabi (UAE) to Doha (Qatar) is a direct cross-border transfer spanning approximately 600 km. We provide door-to-door service, picking you up from any location in Abu Dhabi and ensuring a comfortable and safe journey to your destination in Doha. Our professional chauffeurs are well-acquainted with the logistics of multiple border crossings.",
        "highways": "E11 (UAE), Highway 10 and Salwa Road (Saudi Arabia).",
        "vehiclesInfo": "We offer a diverse fleet for the Abu Dhabi to Doha route. Business and individual travelers often prefer the Mercedes S-Class, BMW, or Genesis. Families find our GMC Yukon, Cadillac Escalade, or Staria ideal for the 6-hour journey. For larger groups, we provide the Mercedes Vito, Mercedes Sprinter, or a Modern Bus. Standard options like the Ford Taurus and Camry are also available.",
        "borderInfo": "This journey involves two major border crossings. First, travelers cross from the UAE into Saudi Arabia at the Al Ghuwaifat/Al Batha checkpoint. Second, they cross from Saudi Arabia into Qatar at the Salwa/Abu Samra border. Valid passports and entry visas for both Saudi Arabia and Qatar are required. Total border processing time typically ranges from 90 to 150 minutes.",
        "useCases": "Popular with business professionals connecting the two regional hubs, families traveling for leisure or relocation, and tourists on Gulf tours. It offers a private and convenient door-to-door alternative to flying.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Professional Drivers",
            "Multi-Border Clearing Assistance",
            "Modern Vehicle Fleet",
            "Flexible Rest Stops",
            "24/7 Availability"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey usually takes about 6 hours, depending on traffic and border crossing times." },
            { "question": "What vehicles are available?", "answer": "We offer various vehicles including the Ford Taurus, GMC, Mercedes S-Class, and large vans like the Mercedes Sprinter." },
            { "question": "Can the driver pick up from Abu Dhabi Airport?", "answer": "Yes, we provide door-to-door service and can pick you up from Zayed International Airport or any hotel in Abu Dhabi." },
            { "question": "Are cross-border trips possible?", "answer": "Yes, we specialize in cross-border transfers between Abu Dhabi and Doha involving multiple countries." },
            { "question": "Is luggage assistance included?", "answer": "Yes, our drivers assist with luggage loading and unloading at both ends of the journey." }
        ],
        "relatedRoutes": [
            { "name": "Abu Dhabi to Dubai Taxi", "slug": "dubai-to-abu-dhabi-taxi" },
            { "name": "Abu Dhabi to Riyadh Taxi", "slug": "abu-dhabi-to-riyadh-taxi" },
            { "name": "Abu Dhabi Airport Taxi", "slug": "abu-dhabi-airport-taxi" }
        ]
    },
    {
        "slug": "abu-dhabi-to-kuwait-city-taxi",
        "from": "Abu Dhabi",
        "to": "Kuwait City",
        "fromCountry": "UAE",
        "toCountry": "Kuwait",
        "distance": "1,150 km",
        "duration": "11h",
        "description": "Private taxi and transfer service from Abu Dhabi to Kuwait City. Comfortable cross-border ground transport across the Gulf.",
        "longDescription": "The trip from Abu Dhabi to Kuwait City is a comprehensive cross-border service covering approximately 1,150 km. We provide door-to-door pickup from any location in Abu Dhabi and a direct transfer to your destination in Kuwait City. This service is designed for those who value privacy, comfort, and professional service for long-haul ground travel.",
        "highways": "E11 (UAE), Highway 10 and Highway 95 (Saudi Arabia).",
        "vehiclesInfo": "Multiple vehicle options are available for the Abu Dhabi to Kuwait City route. Individual and business travelers often choose the Mercedes S-Class, BMW, or Genesis for a vetted experience. Families find the GMC Yukon, Cadillac Escalade, or Hyundai Staria ideal for long-distance comfort. For larger groups, we offer the Mercedes Vito, Mercedes Sprinter, or a Modern Bus. Budget-friendly options like the Ford Taurus and Camry are also available.",
        "borderInfo": "This journey involves two major border checkpoints. First, travelers cross from the UAE into Saudi Arabia via the Al Ghuwaifat/Al Batha border. Second, they cross from Saudi Arabia into Kuwait via the Al Khafji/Al Nuwaiseeb border. Valid passports and entry visas for both Saudi Arabia and Kuwait are required. Total border processing time typically ranges from 2 to 3 hours.",
        "useCases": "Popular with business professionals connecting regional headquarters, families moving across the GCC, and tourists on grand Gulf tours. It offers a private and flexible door-to-door alternative to regional flights.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Professional Drivers",
            "Multi-Border Clearing Assistance",
            "Modern Vehicle Fleet",
            "Flexible Rest Stops",
            "24/7 Availability"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey usually takes about 11 hours, depending on traffic and border crossing times." },
            { "question": "What vehicles are available?", "answer": "We offer various vehicles including the Ford Taurus, GMC, Mercedes S-Class, and large vans like the Mercedes Sprinter." },
            { "question": "Can the driver pick up from Abu Dhabi Airport?", "answer": "Yes, we provide door-to-door service and can pick you up from Zayed International Airport or any hotel in Abu Dhabi." },
            { "question": "Are multiple border crossings handled?", "answer": "Yes, we specialize in cross-border transfers involving multiple countries and jurisdictions." },
            { "question": "Is luggage assistance included?", "answer": "Yes, our drivers assist with luggage loading and unloading at both ends of the journey." }
        ],
        "relatedRoutes": [
            { "name": "Abu Dhabi to Dubai Taxi", "slug": "dubai-to-abu-dhabi-taxi" },
            { "name": "Abu Dhabi to Riyadh Taxi", "slug": "abu-dhabi-to-riyadh-taxi" },
            { "name": "Abu Dhabi Airport Taxi", "slug": "abu-dhabi-airport-taxi" }
        ]
    },
    {
        "slug": "abu-dhabi-to-manama-taxi",
        "from": "Abu Dhabi",
        "to": "Manama",
        "fromCountry": "UAE",
        "toCountry": "Bahrain",
        "distance": "700 km",
        "duration": "7h",
        "description": "Private taxi and transfer service from Abu Dhabi to Manama. Experience a comfortable cross-border journey from the UAE to Bahrain.",
        "longDescription": "The trip from Abu Dhabi to Manama is a direct cross-border transfer covering approximately 700 km. We provide door-to-door service, picking you up from any location in Abu Dhabi and ensuring a comfortable and safe journey to your destination in Manama. Our professional chauffeurs manage all logistics, including the multiple border crossings and the King Fahd Causeway.",
        "highways": "E11 (UAE), Highway 10 (Saudi Arabia), and the King Fahd Causeway.",
        "vehiclesInfo": "Multiple vehicle options are available for the Abu Dhabi to Manama route. Individual and business travelers often choose the Mercedes S-Class, BMW, or Genesis for a vetted experience. Families find our GMC Yukon, Cadillac Escalade, or Staria ideal for long-distance comfort. For larger groups, we provide the Mercedes Vito, Mercedes Sprinter, or a Modern Bus. Standard options like the Ford Taurus and Camry are also available.",
        "borderInfo": "This journey involves two major border checkpoints. First, travelers cross from the UAE into Saudi Arabia via the Al Ghuwaifat/Al Batha border. Second, they cross from Saudi Arabia into Bahrain via the King Fahd Causeway. Valid passports and entry visas for both Saudi Arabia and Bahrain are required. Total border processing time typically ranges from 2 to 3 hours.",
        "useCases": "Popular with business professionals connecting regional hubs, families visiting relatives or moving between the UAE and Bahrain, and tourists on Gulf tours. It offers a private and flexible door-to-door alternative to regional flights.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Professional Drivers",
            "Multi-Border Clearing Assistance",
            "Modern Vehicle Fleet",
            "Flexible Rest Stops",
            "24/7 Availability"
        ],
        "faq": [
            { "question": "How long does the trip take?", "answer": "The journey usually takes about 7 hours, depending on traffic and border crossing times." },
            { "question": "What vehicles are available?", "answer": "We offer various vehicles including the Ford Taurus, GMC, Mercedes S-Class, and large vans like the Mercedes Sprinter." },
            { "question": "Can the driver pick up from Abu Dhabi Airport?", "answer": "Yes, we provide door-to-door service and can pick you up from Zayed International Airport or any hotel in Abu Dhabi." },
            { "question": "Are cross-border trips possible?", "answer": "Yes, we specialize in cross-border transfers between Abu Dhabi and Manama involving multiple countries." },
            { "question": "Is luggage assistance included?", "answer": "Yes, our drivers assist with luggage loading and unloading at both ends of the journey." }
        ],
        "relatedRoutes": [
            { "name": "Abu Dhabi to Dubai Taxi", "slug": "dubai-to-abu-dhabi-taxi" },
            { "name": "Abu Dhabi to Riyadh Taxi", "slug": "abu-dhabi-to-riyadh-taxi" },
            { "name": "Abu Dhabi Airport Taxi", "slug": "abu-dhabi-airport-taxi" }
        ]
    },
    {
        "slug": "doha-to-abu-dhabi-taxi",
        "from": "Doha",
        "to": "Abu Dhabi",
        "fromCountry": "Qatar",
        "toCountry": "UAE",
        "distance": "600 km",
        "duration": "6h",
        "description": "Private taxi and transfer service from Doha to Abu Dhabi. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Doha (Qatar) to Abu Dhabi (UAE) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Full Customs & Border Processing Assistance",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Abu Dhabi from Doha?",
                "answer": "The total driving distance is approximately 600 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 6h."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "A valid passport, appropriate visa for UAE, and national ID. We manage all vehicle-related border customs."
            }
        ]
    },
    {
        "slug": "kuwait-city-to-manama-taxi",
        "from": "Kuwait City",
        "to": "Manama",
        "fromCountry": "Kuwait",
        "toCountry": "Bahrain",
        "distance": "450 km",
        "duration": "4h 30min",
        "description": "Private taxi and transfer service from Kuwait City to Manama. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Kuwait City (Kuwait) to Manama (Bahrain) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Full Customs & Border Processing Assistance",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Manama from Kuwait City?",
                "answer": "The total driving distance is approximately 450 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 4h 30min."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "A valid passport, appropriate visa for Bahrain, and national ID. We manage all vehicle-related border customs."
            }
        ]
    },
    {
        "slug": "manama-to-kuwait-city-taxi",
        "from": "Manama",
        "to": "Kuwait City",
        "fromCountry": "Bahrain",
        "toCountry": "Kuwait",
        "distance": "450 km",
        "duration": "4h 30min",
        "description": "Private taxi and transfer service from Manama to Kuwait City. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Manama (Bahrain) to Kuwait City (Kuwait) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Full Customs & Border Processing Assistance",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Kuwait City from Manama?",
                "answer": "The total driving distance is approximately 450 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 4h 30min."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "A valid passport, appropriate visa for Kuwait, and national ID. We manage all vehicle-related border customs."
            }
        ]
    },
    {
        "slug": "dubai-to-king-khalid-airport-riyadh-taxi",
        "from": "Dubai",
        "to": "King Khalid Airport Riyadh",
        "fromCountry": "UAE",
        "toCountry": "Saudi Arabia",
        "distance": "1,050 km",
        "duration": "10h 30min",
        "description": "Private taxi and transfer service from Dubai to King Khalid Airport Riyadh. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Dubai (UAE) to King Khalid Airport Riyadh (Saudi Arabia) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Full Customs & Border Processing Assistance",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is King Khalid Airport Riyadh from Dubai?",
                "answer": "The total driving distance is approximately 1,050 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 10h 30min."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "A valid passport, appropriate visa for Saudi Arabia, and national ID. We manage all vehicle-related border customs."
            }
        ]
    },
    {
        "slug": "riyadh-to-dubai-airport-dxb-taxi",
        "from": "Riyadh",
        "to": "Dubai Airport DXB",
        "fromCountry": "Saudi Arabia",
        "toCountry": "UAE",
        "distance": "1,050 km",
        "duration": "10h 30min",
        "description": "Private taxi and transfer service from Riyadh to Dubai Airport DXB. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Riyadh (Saudi Arabia) to Dubai Airport DXB (UAE) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Full Customs & Border Processing Assistance",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Dubai Airport DXB from Riyadh?",
                "answer": "The total driving distance is approximately 1,050 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 10h 30min."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "A valid passport, appropriate visa for UAE, and national ID. We manage all vehicle-related border customs."
            }
        ]
    },
    {
        "slug": "kuwait-city-to-dammam-airport-taxi",
        "from": "Kuwait City",
        "to": "Dammam Airport",
        "fromCountry": "Kuwait",
        "toCountry": "Saudi Arabia",
        "distance": "400 km",
        "duration": "4h 30min",
        "description": "Private taxi and transfer service from Kuwait City to Dammam Airport. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Kuwait City (Kuwait) to Dammam Airport (Saudi Arabia) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Full Customs & Border Processing Assistance",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Dammam Airport from Kuwait City?",
                "answer": "The total driving distance is approximately 400 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 4h 30min."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "A valid passport, appropriate visa for Saudi Arabia, and national ID. We manage all vehicle-related border customs."
            }
        ]
    },
    {
        "slug": "dammam-to-kuwait-airport-taxi",
        "from": "Dammam",
        "to": "Kuwait Airport",
        "fromCountry": "Saudi Arabia",
        "toCountry": "Kuwait",
        "distance": "400 km",
        "duration": "4h 30min",
        "description": "Private taxi and transfer service from Dammam to Kuwait Airport. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Dammam (Saudi Arabia) to Kuwait Airport (Kuwait) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Full Customs & Border Processing Assistance",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Kuwait Airport from Dammam?",
                "answer": "The total driving distance is approximately 400 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 4h 30min."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "A valid passport, appropriate visa for Kuwait, and national ID. We manage all vehicle-related border customs."
            }
        ]
    },
    {
        "slug": "bahrain-to-dammam-airport-taxi",
        "from": "Bahrain",
        "to": "Dammam Airport",
        "fromCountry": "Bahrain",
        "toCountry": "Saudi Arabia",
        "distance": "80 km",
        "duration": "1h 30min",
        "description": "Private taxi and transfer service from Bahrain to Dammam Airport. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Bahrain (Bahrain) to Dammam Airport (Saudi Arabia) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Full Customs & Border Processing Assistance",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Dammam Airport from Bahrain?",
                "answer": "The total driving distance is approximately 80 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 1h 30min."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "A valid passport, appropriate visa for Saudi Arabia, and national ID. We manage all vehicle-related border customs."
            }
        ]
    },
    {
        "slug": "dammam-to-bahrain-airport-taxi",
        "from": "Dammam",
        "to": "Bahrain Airport",
        "fromCountry": "Saudi Arabia",
        "toCountry": "Bahrain",
        "distance": "80 km",
        "duration": "1h 30min",
        "description": "Private taxi and transfer service from Dammam to Bahrain Airport. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Dammam (Saudi Arabia) to Bahrain Airport (Bahrain) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Full Customs & Border Processing Assistance",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Bahrain Airport from Dammam?",
                "answer": "The total driving distance is approximately 80 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 1h 30min."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "A valid passport, appropriate visa for Bahrain, and national ID. We manage all vehicle-related border customs."
            }
        ]
    },
    {
        "slug": "doha-to-riyadh-airport-taxi",
        "from": "Doha",
        "to": "Riyadh Airport",
        "fromCountry": "Qatar",
        "toCountry": "Saudi Arabia",
        "distance": "600 km",
        "duration": "6h",
        "description": "Private taxi and transfer service from Doha to Riyadh Airport. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Doha (Qatar) to Riyadh Airport (Saudi Arabia) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Full Customs & Border Processing Assistance",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Riyadh Airport from Doha?",
                "answer": "The total driving distance is approximately 600 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 6h."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "A valid passport, appropriate visa for Saudi Arabia, and national ID. We manage all vehicle-related border customs."
            }
        ]
    },
    {
        "slug": "riyadh-to-hamad-airport-doha-taxi",
        "from": "Riyadh",
        "to": "Hamad Airport Doha",
        "fromCountry": "Saudi Arabia",
        "toCountry": "Qatar",
        "distance": "600 km",
        "duration": "6h",
        "description": "Private taxi and transfer service from Riyadh to Hamad Airport Doha. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Riyadh (Saudi Arabia) to Hamad Airport Doha (Qatar) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Full Customs & Border Processing Assistance",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Hamad Airport Doha from Riyadh?",
                "answer": "The total driving distance is approximately 600 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 6h."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "A valid passport, appropriate visa for Qatar, and national ID. We manage all vehicle-related border customs."
            }
        ]
    },
    {
        "slug": "abu-dhabi-to-hamad-airport-doha-taxi",
        "from": "Abu Dhabi",
        "to": "Hamad Airport Doha",
        "fromCountry": "UAE",
        "toCountry": "Qatar",
        "distance": "550 km",
        "duration": "5h 30min",
        "description": "Private taxi and transfer service from Abu Dhabi to Hamad Airport Doha. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Abu Dhabi (UAE) to Hamad Airport Doha (Qatar) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Full Customs & Border Processing Assistance",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Hamad Airport Doha from Abu Dhabi?",
                "answer": "The total driving distance is approximately 550 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 5h 30min."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "A valid passport, appropriate visa for Qatar, and national ID. We manage all vehicle-related border customs."
            }
        ]
    },
    {
        "slug": "doha-to-dubai-airport-dxb-taxi",
        "from": "Doha",
        "to": "Dubai Airport DXB",
        "fromCountry": "Qatar",
        "toCountry": "UAE",
        "distance": "700 km",
        "duration": "7h 30min",
        "description": "Private taxi and transfer service from Doha to Dubai Airport DXB. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Doha (Qatar) to Dubai Airport DXB (UAE) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Full Customs & Border Processing Assistance",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Dubai Airport DXB from Doha?",
                "answer": "The total driving distance is approximately 700 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 7h 30min."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "A valid passport, appropriate visa for UAE, and national ID. We manage all vehicle-related border customs."
            }
        ]
    },
    {
        "slug": "dubai-to-hamad-airport-doha-taxi",
        "from": "Dubai",
        "to": "Hamad Airport Doha",
        "fromCountry": "UAE",
        "toCountry": "Qatar",
        "distance": "700 km",
        "duration": "7h 30min",
        "description": "Private taxi and transfer service from Dubai to Hamad Airport Doha. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Dubai (UAE) to Hamad Airport Doha (Qatar) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Full Customs & Border Processing Assistance",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Hamad Airport Doha from Dubai?",
                "answer": "The total driving distance is approximately 700 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 7h 30min."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "A valid passport, appropriate visa for Qatar, and national ID. We manage all vehicle-related border customs."
            }
        ]
    },
    {
        "slug": "kuwait-city-to-bahrain-airport-taxi",
        "from": "Kuwait City",
        "to": "Bahrain Airport",
        "fromCountry": "Kuwait",
        "toCountry": "Bahrain",
        "distance": "450 km",
        "duration": "4h 30min",
        "description": "Private taxi and transfer service from Kuwait City to Bahrain Airport. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Kuwait City (Kuwait) to Bahrain Airport (Bahrain) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Full Customs & Border Processing Assistance",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Bahrain Airport from Kuwait City?",
                "answer": "The total driving distance is approximately 450 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 4h 30min."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "A valid passport, appropriate visa for Bahrain, and national ID. We manage all vehicle-related border customs."
            }
        ]
    },
    {
        "slug": "manama-to-kuwait-airport-taxi",
        "from": "Manama",
        "to": "Kuwait Airport",
        "fromCountry": "Bahrain",
        "toCountry": "Kuwait",
        "distance": "450 km",
        "duration": "4h 30min",
        "description": "Private taxi and transfer service from Manama to Kuwait Airport. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Manama (Bahrain) to Kuwait Airport (Kuwait) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Full Customs & Border Processing Assistance",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Kuwait Airport from Manama?",
                "answer": "The total driving distance is approximately 450 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 4h 30min."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "A valid passport, appropriate visa for Kuwait, and national ID. We manage all vehicle-related border customs."
            }
        ]
    },
    {
        "slug": "khobar-to-bahrain-airport-taxi",
        "from": "Khobar",
        "to": "Bahrain Airport",
        "fromCountry": "Saudi Arabia",
        "toCountry": "Bahrain",
        "distance": "60 km",
        "duration": "1h 15min",
        "description": "Private taxi and transfer service from Khobar to Bahrain Airport. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Khobar (Saudi Arabia) to Bahrain Airport (Bahrain) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Full Customs & Border Processing Assistance",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Bahrain Airport from Khobar?",
                "answer": "The total driving distance is approximately 60 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 1h 15min."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "A valid passport, appropriate visa for Bahrain, and national ID. We manage all vehicle-related border customs."
            }
        ]
    },
    {
        "slug": "al-ahsa-to-bahrain-airport-taxi",
        "from": "Al Ahsa",
        "to": "Bahrain Airport",
        "fromCountry": "Saudi Arabia",
        "toCountry": "Bahrain",
        "distance": "160 km",
        "duration": "2h 15min",
        "description": "Private taxi and transfer service from Al Ahsa to Bahrain Airport. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Al Ahsa (Saudi Arabia) to Bahrain Airport (Bahrain) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Full Customs & Border Processing Assistance",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Bahrain Airport from Al Ahsa?",
                "answer": "The total driving distance is approximately 160 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 2h 15min."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "A valid passport, appropriate visa for Bahrain, and national ID. We manage all vehicle-related border customs."
            }
        ]
    },
    {
        "slug": "jubail-to-bahrain-airport-taxi",
        "from": "Jubail",
        "to": "Bahrain Airport",
        "fromCountry": "Saudi Arabia",
        "toCountry": "Bahrain",
        "distance": "150 km",
        "duration": "2h",
        "description": "Private taxi and transfer service from Jubail to Bahrain Airport. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Jubail (Saudi Arabia) to Bahrain Airport (Bahrain) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Full Customs & Border Processing Assistance",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Bahrain Airport from Jubail?",
                "answer": "The total driving distance is approximately 150 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 2h."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "A valid passport, appropriate visa for Bahrain, and national ID. We manage all vehicle-related border customs."
            }
        ]
    },
    {
        "slug": "makkah-to-madinah-taxi",
        "from": "Makkah",
        "to": "Madinah",
        "fromCountry": "Saudi Arabia",
        "toCountry": "Saudi Arabia",
        "distance": "450 km",
        "duration": "4h 30min",
        "description": "Private taxi and transfer service from Makkah to Madinah. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Makkah (Saudi Arabia) to Madinah (Saudi Arabia) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Zero hidden tolls",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Madinah from Makkah?",
                "answer": "The total driving distance is approximately 450 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 4h 30min."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "Just your booking confirmation and a valid ID."
            }
        ]
    },
    {
        "slug": "madinah-to-makkah-taxi",
        "from": "Madinah",
        "to": "Makkah",
        "fromCountry": "Saudi Arabia",
        "toCountry": "Saudi Arabia",
        "distance": "450 km",
        "duration": "4h 30min",
        "description": "Private taxi and transfer service from Madinah to Makkah. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Madinah (Saudi Arabia) to Makkah (Saudi Arabia) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Zero hidden tolls",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Makkah from Madinah?",
                "answer": "The total driving distance is approximately 450 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 4h 30min."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "Just your booking confirmation and a valid ID."
            }
        ]
    },
    {
        "slug": "riyadh-to-makkah-taxi",
        "from": "Riyadh",
        "to": "Makkah",
        "fromCountry": "Saudi Arabia",
        "toCountry": "Saudi Arabia",
        "distance": "870 km",
        "duration": "8h 30min",
        "description": "Private taxi and transfer service from Riyadh to Makkah. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Riyadh (Saudi Arabia) to Makkah (Saudi Arabia) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Zero hidden tolls",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Makkah from Riyadh?",
                "answer": "The total driving distance is approximately 870 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 8h 30min."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "Just your booking confirmation and a valid ID."
            }
        ]
    },
    {
        "slug": "jeddah-to-makkah-taxi",
        "from": "Jeddah",
        "to": "Makkah",
        "fromCountry": "Saudi Arabia",
        "toCountry": "Saudi Arabia",
        "distance": "85 km",
        "duration": "1h",
        "description": "Private taxi and transfer service from Jeddah to Makkah. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Jeddah (Saudi Arabia) to Makkah (Saudi Arabia) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Zero hidden tolls",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Makkah from Jeddah?",
                "answer": "The total driving distance is approximately 85 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 1h."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "Just your booking confirmation and a valid ID."
            }
        ]
    },
    {
        "slug": "jeddah-to-madinah-taxi",
        "from": "Jeddah",
        "to": "Madinah",
        "fromCountry": "Saudi Arabia",
        "toCountry": "Saudi Arabia",
        "distance": "415 km",
        "duration": "4h",
        "description": "Private taxi and transfer service from Jeddah to Madinah. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Jeddah (Saudi Arabia) to Madinah (Saudi Arabia) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Zero hidden tolls",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Madinah from Jeddah?",
                "answer": "The total driving distance is approximately 415 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 4h."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "Just your booking confirmation and a valid ID."
            }
        ]
    },
    {
        "slug": "dammam-to-riyadh-taxi",
        "from": "Dammam",
        "to": "Riyadh",
        "fromCountry": "Saudi Arabia",
        "toCountry": "Saudi Arabia",
        "distance": "400 km",
        "duration": "4h",
        "description": "Private taxi and transfer service from Dammam to Riyadh. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Dammam (Saudi Arabia) to Riyadh (Saudi Arabia) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Zero hidden tolls",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Riyadh from Dammam?",
                "answer": "The total driving distance is approximately 400 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 4h."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "Just your booking confirmation and a valid ID."
            }
        ]
    },
    {
        "slug": "khobar-to-riyadh-taxi",
        "from": "Khobar",
        "to": "Riyadh",
        "fromCountry": "Saudi Arabia",
        "toCountry": "Saudi Arabia",
        "distance": "420 km",
        "duration": "4h 15min",
        "description": "Private taxi and transfer service from Khobar to Riyadh. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Khobar (Saudi Arabia) to Riyadh (Saudi Arabia) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Zero hidden tolls",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Riyadh from Khobar?",
                "answer": "The total driving distance is approximately 420 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 4h 15min."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "Just your booking confirmation and a valid ID."
            }
        ]
    },
    {
        "slug": "jubail-to-dammam-taxi",
        "from": "Jubail",
        "to": "Dammam",
        "fromCountry": "Saudi Arabia",
        "toCountry": "Saudi Arabia",
        "distance": "100 km",
        "duration": "1h",
        "description": "Private taxi and transfer service from Jubail to Dammam. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Jubail (Saudi Arabia) to Dammam (Saudi Arabia) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Zero hidden tolls",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Dammam from Jubail?",
                "answer": "The total driving distance is approximately 100 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 1h."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "Just your booking confirmation and a valid ID."
            }
        ]
    },
    {
        "slug": "riyadh-to-qassim-taxi",
        "from": "Riyadh",
        "to": "Qassim",
        "fromCountry": "Saudi Arabia",
        "toCountry": "Saudi Arabia",
        "distance": "350 km",
        "duration": "3h 30min",
        "description": "Private taxi and transfer service from Riyadh to Qassim. Comfortable vehicles, Professional service, and professional drivers.",
        "longDescription": "Traveling from Riyadh (Saudi Arabia) to Qassim (Saudi Arabia) has never been easier. Our specialized inter-city and cross-border transfer service is designed to provide you with maximum comfort and efficiency. We handle all logistics including border clearance and tolls, utilizing high-standard vehicles like Sedans, SUVs, and high-standard Vans for individuals, families, and business travelers alike.",
        "highlights": [
            "Door-to-Door Private Transfer",
            "Vetted service",
            "Zero hidden tolls",
            "Modern Air-Conditioned Fleet",
            "Professional, Licensed Chauffeurs",
            "Flexible Rest Stops Available"
        ],
        "faq": [
            {
                "question": "How far is Qassim from Riyadh?",
                "answer": "The total driving distance is approximately 350 km."
            },
            {
                "question": "How long does the journey take?",
                "answer": "Under normal traffic and border conditions, the trip takes around 3h 30min."
            },
            {
                "question": "Can I book a return trip?",
                "answer": "Yes, you can easily book a return trip with us at a discounted rate."
            },
            {
                "question": "What documents are required?",
                "answer": "Just your booking confirmation and a valid ID."
            }
        ]
    },
    {
        "slug": "riyadh-to-jeddah-taxi",
        "from": "Riyadh",
        "to": "Jeddah",
        "fromCountry": "Saudi Arabia",
        "toCountry": "Saudi Arabia",
        "distance": "950 km",
        "duration": "9h",
        "description": "Private taxi and transfer service from Riyadh to Jeddah. Reliable inter-city transport between Saudi Arabia's capital and its major port city.",
        "longDescription": "Traveling between Riyadh and Jeddah is now seamless with our private taxi service. We provide comfortable vehicles and professional drivers for the long-distance journey across the Kingdom. Whether for business or personal travel, our door-to-door service ensures a smooth trip without the need for traditional transport alternatives.",
        "highlights": [
            "Door-to-Door Service",
            "Professional Drivers",
            "Comfortable Air-Conditioned Fleet",
            "Flexible Rest Stops",
            "Reliable 24/7 Availability"
        ],
        "faq": [
            { "question": "How long does it take from Riyadh to Jeddah by taxi?", "answer": "The journey typically takes around 9 hours depending on traffic and rest stops." },
            { "question": "Can I book a return trip?", "answer": "Yes, we offer return transfers at competitive rates." }
        ]
    },
    {
        "slug": "jeddah-to-riyadh-taxi",
        "from": "Jeddah",
        "to": "Riyadh",
        "fromCountry": "Saudi Arabia",
        "toCountry": "Saudi Arabia",
        "distance": "950 km",
        "duration": "9h",
        "description": "Private taxi and transfer service from Jeddah to Riyadh. Professional door-to-door transportation across Saudi Arabia.",
        "longDescription": "Our Jeddah to Riyadh taxi service offers a reliable way to travel between these two major cities. Skip the airport and enjoy the comfort of a private vehicle with an experienced chauffeur. We handle all the details of the journey, allowing you to relax or work while we drive.",
        "highlights": [
            "Experienced Long-Distance Drivers",
            "Modern Fleet",
            "Direct Door-to-Door Service",
            "All-Inclusive Service"
        ],
        "faq": [
            { "question": "Is the taxi service available 24/7?", "answer": "Yes, you can book our Jeddah to Riyadh service at any time of day or night." }
        ]
    },
    {
        "slug": "riyadh-to-madinah-taxi",
        "from": "Riyadh",
        "to": "Madinah",
        "fromCountry": "Saudi Arabia",
        "toCountry": "Saudi Arabia",
        "distance": "850 km",
        "duration": "8h",
        "description": "Private taxi and transfer service from Riyadh to Madinah. Comfortable long-distance travel across the Saudi Kingdom.",
        "longDescription": "Travel from Riyadh to the holy city of Madinah in comfort and privacy. Our chauffeur service provides a direct link between the capital and the Prophet's city, catering to residents and visitors who prefer the flexibility of road travel.",
        "highlights": [
            "Private Chauffeur Service",
            "Hotel-to-Hotel Delivery",
            "Spacious Vehicle Options",
            "Professional Route Expertise"
        ],
        "faq": [
            { "question": "How long is the drive from Riyadh to Madinah?", "answer": "The drive usually takes about 8 hours under normal conditions." }
        ]
    },
    {
        "slug": "abu-dhabi-to-al-ain-taxi",
        "from": "Abu Dhabi",
        "to": "Al Ain",
        "fromCountry": "UAE",
        "toCountry": "UAE",
        "distance": "150 km",
        "duration": "1h 45min",
        "description": "Direct taxi service between Abu Dhabi city and Al Ain. Comfortable inter-emirate transportation for business and leisure.",
        "longDescription": "Enjoy a comfortable ride from the capital of the UAE to the Garden City of Al Ain. Our private transfer service provides a reliable and direct way to travel between these two important hubs, skipping the wait for public transport.",
        "highlights": [
            "Direct Inter-Emirate Transfer",
            "Professional Drivers",
            "Door-to-Door Service",
            "Punctual Pickups"
        ],
        "faq": [
            { "question": "What is the travel time from Abu Dhabi to Al Ain?", "answer": "The journey typically takes 1 hour and 45 minutes." }
        ]
    },
    {
        "slug": "dubai-to-ras-al-khaimah-taxi",
        "from": "Dubai",
        "to": "Ras Al Khaimah",
        "fromCountry": "UAE",
        "toCountry": "UAE",
        "distance": "100 km",
        "duration": "1h 15min",
        "description": "Direct taxi service from Dubai to Ras Al Khaimah resorts and city center. Professional inter-emirate transport.",
        "longDescription": "Whether you are heading to a resort on Marjan Island or to the city center, our Dubai to Ras Al Khaimah taxi service provides a seamless door-to-door experience. Our drivers know the leading routes to avoid traffic and ensure a timely arrival.",
        "highlights": [
            "Hotel & Resort Transfers",
            "Experienced Drivers",
            "Reliable 24/7 Availability",
            "Comfortable Modern Fleet"
        ],
        "faq": [
            { "question": "Do you provide transfers to Marjan Island?", "answer": "Yes, we offer direct transfers to all major resorts and locations in Ras Al Khaimah." }
        ]
    },
    {
        "slug": "muscat-to-sohar-taxi",
        "from": "Muscat",
        "to": "Sohar",
        "fromCountry": "Oman",
        "toCountry": "Oman",
        "distance": "220 km",
        "duration": "2h 30min",
        "description": "Reliable inter-city taxi service from Muscat to Sohar. Comfortable ground transport across Oman.",
        "longDescription": "Our Muscat to Sohar taxi service connects the Omani capital with the industrial hub of Sohar. We provide professional chauffeurs and comfortable vehicles for a stress-free journey across the Batinah coast.",
        "highlights": [
            "Professional Omani Chauffeurs",
            "Door-to-Door Service",
            "Modern Air-Conditioned Fleet",
            "Reliable Inter-City Link"
        ],
        "faq": [
            { "question": "How long does it take from Muscat to Sohar?", "answer": "The trip usually takes about 2 hours and 30 minutes." }
        ]
    }
];
export const extraAirports = [
    {
        "slug": "riyadh-airport-taxi",
        "name": "King Khalid International Airport",
        "city": "Riyadh",
        "country": "Saudi Arabia",
        "code": "RUH",
        "description": "Professional airport transfer services at King Khalid International Airport (RUH). Reliable meet & greet and modern vehicles available.",
        "longDescription": "Experience seamless travel at King Khalid International Airport (RUH) in Riyadh. Our professional chauffeurs provide reliable meet & greet services, complimentary flight monitoring, and comfortable transfers to any destination in Riyadh or across the regional borders.",
        "services": [
            "Meet & Greet",
            "Flight Tracking",
            "24/7 Availability",
            "Cross-Border Transfers",
            "Luggage Assistance"
        ],
        popularRoutes: [
            { "to": "Riyadh City Center", "duration": "45 min" },
            { "to": "Diplomatic Quarter", "duration": "50 min" },
            { "to": "Dammam City", "duration": "4h" }
        ],
        "meetAndGreet": "Our professional chauffeur will greet you in the arrivals area with a personalized name board, helping with your bags for a smooth and comfortable exit.",
        "pickupLocations": "Pickups are available from all terminals at KKIA. Your driver will coordinate the exact meeting spot based on your arrival terminal.",
        "vehiclesOverview": "Our Riyadh fleet includes professional sedans for solo travelers, family-sized SUVs, and large vans suitable for all group sizes and travel types.",
        "routesInfo": "Frequent routes include transfers to Olaya, the Diplomatic Quarter, KAFD, and residential areas across Riyadh or inter-city trips to Eastern Province.",
        "bookingDetails": "Arranging your Riyadh transfer is simple. We offer 24/7 service with professional chauffeurs who monitor your flight for any delays.",
        "faq": [
            { "question": "Where do I meet my driver at Riyadh Airport?", "answer": "Your driver will be waiting in the arrivals area after you clear customs, holding a sign with your name." },
            { "question": "Is flight tracking included?", "answer": "Yes, we monitor your flight in real-time and adjust the pickup time if there are any delays or early arrivals." },
            { "question": "Can I book a transfer to Dammam?", "answer": "Yes, we provide direct door-to-door transfers from Riyadh Airport to Dammam and other cities in Saudi Arabia." },
            { "question": "What is the waiting time provided?", "answer": "We offer 60 minutes of complimentary waiting time from the moment your flight lands at King Khalid International Airport." }
        ]
    },
    {
        "slug": "jeddah-airport-taxi",
        "name": "King Abdulaziz International Airport",
        "city": "Jeddah",
        "country": "Saudi Arabia",
        "code": "JED",
        "description": "Reliable airport transfer services at King Abdulaziz International Airport (JED). Professional meet & greet and comfortable fleet.",
        "longDescription": "Experience efficient travel at King Abdulaziz International Airport (JED) in Jeddah. Our professional chauffeurs provide meet & greet services, real-time flight tracking, and comfortable transfers to Jeddah city, Makkah, or other regional destinations.",
        "services": [
            "Meet & Greet",
            "Flight Tracking",
            "24/7 Availability",
            "Makkah Transfers",
            "Luggage Assistance"
        ],
        popularRoutes: [
            { "to": "Jeddah Corniche", "duration": "30 min" },
            { "to": "Makkah (Grand Mosque)", "duration": "1h 15min" },
            { "to": "King Abdullah Economic City", "duration": "1h 30min" }
        ],
        "meetAndGreet": "A professional driver will wait for you in the arrivals hall with a name board, ready to help with your luggage and provide a smooth transfer.",
        "pickupLocations": "Standard pickups are arranged at the arrivals terminal area. For Hajj and Umrah pilgrims, we provide specialized coordination for ease of access.",
        "vehiclesOverview": "Our Jeddah fleet features professional sedans, spacious SUVs for families, and large group vans and buses, ideal for pilgrim and business travel.",
        "routesInfo": "Major routes from Jeddah Airport include transfers to Makkah, Madinah, the Jeddah Corniche, and King Abdullah Economic City.",
        "bookingDetails": "We specialize in Hajj and Umrah transfers, providing 24/7 reliable service with professional drivers who ensure a comfortable journey for all pilgrims.",
        "faq": [
            { "question": "Do you provide transfers to Makkah?", "answer": "Yes, we offer direct and reliable transfers from Jeddah Airport to all hotels and locations in Makkah." },
            { "question": "How do I find my driver at JED?", "answer": "Your driver will be waiting in the arrivals area with a sign showing your name after you exit the baggage claim." },
            { "question": "Is waiting time included?", "answer": "Yes, we provide 60 minutes of complimentary waiting time from the moment your flight arrives at King Abdulaziz International Airport." },
            { "question": "Are the vehicles air-conditioned?", "answer": "Yes, all our vehicles are modern, well-maintained, and equipped with powerful air conditioning for your comfort." }
        ]
    },
    {
        "slug": "madinah-airport-taxi",
        "name": "Prince Mohammad Bin Abdulaziz International Airport",
        "city": "Madinah",
        "country": "Saudi Arabia",
        "code": "MED",
        "description": "Professional airport transfer services at Prince Mohammad Bin Abdulaziz International Airport (MED). Meet & greet and reliable vehicles available.",
        "longDescription": "Experience seamless travel at Prince Mohammad Bin Abdulaziz International Airport (MED) in Madinah. Our professional chauffeurs provide meet & greet services, complimentary flight monitoring, and comfortable transfers to any destination in Saudi Arabia or across the regional borders.",
        "services": [
            "Meet & Greet",
            "Flight Tracking",
            "24/7 Availability",
            "Cross-Border Transfers",
            "Luggage Assistance"
        ],
        popularRoutes: [
            { "to": "Al-Masjid an-Nabawi", "duration": "25 min" },
            { "to": "Madinah City Center", "duration": "30 min" }
        ],
        "meetAndGreet": "Experience a warm welcome in Madinah. Your professional chauffeur will greet you in the arrivals area with a name board and assist with your bags.",
        "pickupLocations": "Pickups are available from the Madinah International Airport arrivals terminal. Full meeting instructions are provided with your booking.",
        "vehiclesOverview": "We offer a range of modern vehicles, including Professional sedans for solo passengers and larger SUVs or vans for families and groups.",
        "routesInfo": "Frequent transfers include trips to Al-Masjid an-Nabawi, various Madinah hotels, and inter-city journeys to Makkah or Jeddah.",
        "bookingDetails": "Our service is available 24/7, specializing in pilgrim and business transportation with puncuality and professional care.",
        "faq": [
            { "question": "Can I book a transfer to Makkah?", "answer": "Yes, we provide direct transfers from Madinah Airport to Makkah for pilgrims and other travelers." },
            { "question": "Where is the meeting point?", "answer": "Your driver will be waiting in the arrivals hall with a sign displaying your name after you clear customs." },
            { "question": "Is flight tracking provided?", "answer": "Yes, we monitor your flight in real-time to ensure your driver is ready when you arrive, regardless of any delays." },
            { "question": "How much waiting time do I have?", "answer": "We offer 60 minutes of complimentary waiting time starts from the time your flight lands at Madinah Airport." }
        ]
    },
    {
        "slug": "dammam-airport-taxi",
        "name": "King Fahd International Airport",
        "city": "Dammam",
        "country": "Saudi Arabia",
        "code": "DMM",
        "description": "Professional airport transfer services at King Fahd International Airport (DMM). Meet & greet and comfortable vehicles available.",
        "longDescription": "Experience seamless travel at King Fahd International Airport (DMM) in Dammam. Our professional chauffeurs provide meet & greet services, complimentary flight monitoring, and comfortable transfers to any destination in Saudi Arabia or across the regional borders.",
        "services": [
            "Meet & Greet",
            "Flight Tracking",
            "24/7 Availability",
            "Cross-Border Transfers",
            "Luggage Assistance"
        ],
        popularRoutes: [
            { "to": "Dammam City Center", "duration": "35 min" },
            { "to": "Khobar", "duration": "45 min" },
            { "to": "Manama (Bahrain)", "duration": "1h 15min" }
        ],
        "meetAndGreet": "Your driver will meet you at the arrivals gate with a name sign. They will help with your luggage and lead you to your parked vehicle.",
        "pickupLocations": "Pickups are arranged at the DMM airport arrivals terminal area. More specific location details are shared upon booking confirmation.",
        "vehiclesOverview": "Our Dammam fleet includes professional sedans, family-sized SUVs, and larger vans perfect for both city trips and cross-border travel.",
        "routesInfo": "Common routes include transfers to Dammam City Center, Khobar, Dhahran, and cross-border rides to Bahrain via the King Fahd Causeway.",
        "bookingDetails": "Arrange your DMM transfer 24/7. We provide professional door-to-door service with real-time flight monitoring for all arrivals.",
        "faq": [
            { "question": "Do you offer transfers to Bahrain?", "answer": "Yes, we provide direct transfers from Dammam Airport to Bahrain via the King Fahd Causeway." },
            { "question": "How do I find my driver?", "answer": "Your driver will be waiting in the arrivals area after baggage claim, holding a sign with your name." },
            { "question": "What happens if my flight is late?", "answer": "We track your flight status in real-time and will adjust your pickup time automatically at no extra cost." },
            { "question": "Is waiting time included?", "answer": "Yes, we offer 60 minutes of free waiting time from the moment your flight lands at King Fahd International Airport." }
        ]
    },
    {
        "slug": "dubai-airport-taxi",
        "name": "Dubai International Airport",
        "city": "Dubai",
        "country": "United Arab Emirates",
        "code": "DXB",
        "description": "Reliable airport transfer services at Dubai International Airport (DXB). Professional meet & greet and modern fleet.",
        "longDescription": "Experience seamless travel at Dubai International Airport (DXB). Our professional chauffeurs provide meet & greet services, real-time flight tracking, and comfortable transfers to any destination in Dubai, other Emirates, or across GCC borders.",
        "services": [
            "Meet & Greet",
            "Flight Tracking",
            "24/7 Availability",
            "Inter-Emirate Transfers",
            "Luggage Assistance"
        ],
        popularRoutes: [
            { "to": "Downtown Dubai", "duration": "20 min" },
            { "to": "Dubai Marina", "duration": "35 min" },
            { "to": "Abu Dhabi", "duration": "1h 30min" }
        ],
        "meetAndGreet": "Your professional chauffeur will meet you in the arrivals hall with a name board after you clear customs. They will assist with your luggage and guide you to your waiting vehicle.",
        "pickupLocations": "We provide pickups from all Dubai International terminals (T1, T2, T3). Specific meeting point details are provided in your booking confirmation.",
        "vehiclesOverview": "Our Dubai fleet features Professional sedans, spacious SUVs for families, and large group vans, providing scheduled comfort for city and inter-city travel.",
        "routesInfo": "Frequent transfers include trips to Downtown Dubai, Palm Jumeirah, and inter-emirate journeys to Abu Dhabi, Sharjah, and Ras Al Khaimah.",
        "bookingDetails": "Advance booking is recommended for guaranteed service. We offer 24/7 support and real-time flight tracking for all airport arrivals in Dubai.",
        "faq": [
            { "question": "Where is the meeting point at DXB?", "answer": "Your driver will meet you in the arrivals hall of your specified terminal, holding a sign with your name." },
            { "question": "How long is the free waiting time?", "answer": "We provide 60 minutes of complimentary waiting time starts from your flight landing time at DXB." },
            { "question": "Can I book a transfer to Abu Dhabi?", "answer": "Yes, we offer direct door-to-door transfers from Dubai Airport to any location in Abu Dhabi." },
            { "question": "Do you offer inter-terminal transfers?", "answer": "Yes, we can provide transfers between terminals or to any other destination in the UAE." }
        ]
    },
    {
        "slug": "abu-dhabi-airport-taxi",
        "name": "Zayed International Airport",
        "city": "Abu Dhabi",
        "country": "United Arab Emirates",
        "code": "AUH",
        "description": "Professional airport transfer services at Zayed International Airport (AUH). Meet & greet and comfortable vehicles available.",
        "longDescription": "Experience seamless travel at Zayed International Airport (AUH) in Abu Dhabi. Our professional chauffeurs provide meet & greet services, complimentary flight monitoring, and comfortable transfers to any destination in United Arab Emirates or across the regional borders.",
        "services": [
            "Meet & Greet",
            "Flight Tracking",
            "24/7 Availability",
            "Cross-Border Transfers",
            "Luggage Assistance"
        ],
        popularRoutes: [
            { "to": "Abu Dhabi City Center", "duration": "30 min" },
            { "to": "Yas Island", "duration": "15 min" },
            { "to": "Dubai", "duration": "1h 20min" }
        ],
        "meetAndGreet": "A professional chauffeur will be waiting in the arrival hall of Zayed International Airport with a personalized name board to assist you with your bags.",
        "pickupLocations": "Pickups are available from the main arrival terminal. Your driver will coordinate the exact spot at AUH and share instructions upon arrival.",
        "vehiclesOverview": "We offer a selection of professional sedans and spacious SUVs, ideal for both business travelers and families arriving in the UAE capital.",
        "routesInfo": "Common routes include transfers to Abu Dhabi City Center, Yas Island, Saadiyat Island, and inter-city trips to Dubai.",
        "bookingDetails": "Arranging your Abu Dhabi transfer is available 24/7. Our drivers monitor your flight status to ensure timely pickup regardless of delays.",
        "faq": [
            { "question": "How do I find my driver at Zayed International?", "answer": "Your driver will be waiting in the designated arrivals hall with a sign displaying your name." },
            { "question": "Is flight tracking included?", "answer": "Yes, we monitor all flights in real-time and adjust the pickup time based on your actual arrival." },
            { "question": "Do you provide transfers to Dubai?", "answer": "Yes, we offer direct, door-to-door transfers from Abu Dhabi Airport to all locations in Dubai." },
            { "question": "How much waiting time is provided?", "answer": "We offer 60 minutes of free waiting time from the moment your flight lands at Zayed International Airport." }
        ]
    },
    {
        "slug": "sharjah-airport-taxi",
        "name": "Sharjah International Airport",
        "city": "Sharjah",
        "country": "United Arab Emirates",
        "code": "SHJ",
        "description": "Experienced airport transfer services at Sharjah International Airport (SHJ). Meet & greet and modern vehicles available.",
        "longDescription": "Experience seamless travel at Sharjah International Airport (SHJ) in Sharjah. Our professional chauffeurs provide meet & greet services, complimentary flight monitoring, and comfortable transfers to any destination in United Arab Emirates or across the regional borders.",
        "services": [
            "Meet & Greet",
            "Flight Tracking",
            "24/7 Availability",
            "Cross-Border Transfers",
            "Luggage Assistance"
        ],
        popularRoutes: [
            { "to": "Sharjah City Center", "duration": "20 min" },
            { "to": "Dubai", "duration": "40 min" }
        ],
        "meetAndGreet": "Your professional driver will meet you in the arrivals hall with a name sign, helping with your bags for a convenient and smooth transfer.",
        "pickupLocations": "Standard pickups are arranged at the Sharjah International Airport arrivals terminal area. Detailed instructions are provided with your booking.",
        "vehiclesOverview": "Our Sharjah fleet includes professional sedans and spacious family vehicles, providing comfortable transit for all travelers.",
        "routesInfo": "Frequent transfers include trips to Sharjah City Center, various hotels, and neighboring emirates like Dubai and Ajman.",
        "bookingDetails": "We provide 24/7 reliable airport transfer services with professional drivers who monitor your flight status for any delays.",
        "faq": [
            { "question": "Where is the meeting point at SHJ?", "answer": "Your driver will be waiting in the departures or arrivals area as specified, holding a personalized name board." },
            { "question": "Do you offer transfers to Dubai?", "answer": "Yes, we provide frequent and direct transfers from Sharjah Airport to any destination in Dubai." },
            { "question": "Is waiting time included?", "answer": "Yes, we offer 60 minutes of complimentary waiting time starts from your flight landing at Sharjah Airport." },
            { "question": "Can I book a return transfer?", "answer": "Yes, you can easily book both arrival and departure transfers through our platform." }
        ]
    },
    {
        "slug": "doha-airport-taxi",
        "name": "Hamad International Airport",
        "city": "Doha",
        "country": "Qatar",
        "code": "DOH",
        "description": "Professional airport transfer services at Hamad International Airport (DOH). Meet & greet and comfortable fleet.",
        "longDescription": "Experience seamless travel at Hamad International Airport (DOH) in Doha. Our professional chauffeurs provide meet & greet services, flight monitoring, and comfortable transfers to any location in Doha or across the border to Saudi Arabia.",
        "services": [
            "Meet & Greet",
            "Flight Tracking",
            "24/7 Availability",
            "Cross-Border Transfers",
            "Luggage Assistance"
        ],
        popularRoutes: [
            { "to": "West Bay (Doha)", "duration": "25 min" },
            { "to": "The Pearl-Qatar", "duration": "35 min" },
            { "to": "Riyadh (Saudi Arabia)", "duration": "6h" }
        ],
        "meetAndGreet": "A professional chauffeur will be waiting in the arrivals hall with a clear name sign, ready to assist with your luggage and guide you to your vehicle.",
        "pickupLocations": "Pickups are available from Hamad International Airport arrivals gate. Exact meeting instructions are provided upon booking confirmation.",
        "vehiclesOverview": "Our Doha fleet includes Professional sedans for business travelers and spacious SUVs or vans for families and groups.",
        "routesInfo": "Common routes include transfers to West Bay, The Pearl, Souq Waqif, and cross-border trips to Saudi Arabia via the Salwa border.",
        "bookingDetails": "Arrange your Doha transfer anytime. We monitor all arrivals and provide reliable door-to-door service across Qatar and beyond.",
        "faq": [
            { "question": "Where do I meet my driver at Hamad Airport?", "answer": "Your driver will be waiting in the arrivals hall with a sign showing your name right after you clear baggage claim." },
            { "question": "Is flight tracking included?", "answer": "Yes, we monitor all flights in real-time and adjust the pickup time for early or delayed arrivals at no extra cost." },
            { "question": "How long is the free waiting time?", "answer": "We offer 60 minutes of free waiting time starts from the moment your flight lands at Hamad International Airport." },
            { "question": "Do you offer transfers to Saudi Arabia?", "answer": "Yes, we specialize in cross-border transfers from Doha to Riyadh and other Saudi cities via the Salwa border." }
        ]
    },
    {
        "slug": "kuwait-airport-taxi",
        "name": "Kuwait International Airport",
        "city": "Kuwait City",
        "country": "Kuwait",
        "code": "KWI",
        "description": "Reliable airport transfer services at Kuwait International Airport (KWI). Professional meet & greet and modern fleet.",
        "longDescription": "Experience efficient travel at Kuwait International Airport (KWI). Our professional chauffeurs provide meet & greet services, flight tracking, and comfortable transfers to Kuwait City or across regional borders.",
        "services": [
            "Meet & Greet",
            "Flight Tracking",
            "24/7 Availability",
            "Cross-Border Transfers",
            "Luggage Assistance"
        ],
        "popularRoutes": [
            { "to": "Kuwait City Center", "duration": "25 min" },
            { "to": "The Avenues Mall", "duration": "30 min" },
            { "to": "Salmiya", "duration": "20 min" }
        ],
        "meetAndGreet": "A professional chauffeur will greet you in the arrivals hall with a name sign, assisting with your luggage for a hassle-free start to your trip.",
        "pickupLocations": "Pickups are available from Kuwait International Airport terminals. Exact meeting instructions are shared upon booking confirmation.",
        "vehiclesOverview": "Our Kuwait fleet includes professional sedans and spacious SUVs, providing comfort for city-wide and cross-border travel.",
        "routesInfo": "We provide transfers to Kuwait City Center, Salmiya, and cross-border trips to Dammam and other regional destinations.",
        "bookingDetails": "Book your Kuwait transfer anytime. Our drivers monitor your flight and provide reliable door-to-door service across the region.",
        "faq": [
            { "question": "Where do I meet my driver at Kuwait Airport?", "answer": "Your driver will be waiting in the arrivals hall with a sign clearly displaying your name." },
            { "question": "What happens if my flight is early or delayed?", "answer": "We monitor all flights in real-time and will adjust your pickup time automatically at no extra cost." },
            { "question": "Do you offer inter-city transfers from KWI?", "answer": "Yes, we provide transfers from Kuwait Airport to Dammam and other cities in the region." },
            { "question": "How much waiting time is included?", "answer": "We offer 60 minutes of complimentary waiting time starts from your flight landing at Kuwait Airport." }
        ]
    },
    {
        "slug": "manama-airport-taxi",
        "name": "Bahrain International Airport",
        "city": "Manama",
        "country": "Bahrain",
        "code": "BAH",
        "description": "Comfortable airport transfer services at Bahrain International Airport (BAH). Meet & greet and professional fleet available.",
        "longDescription": "Experience seamless travel at Bahrain International Airport (BAH) in Manama. Our professional chauffeurs provide meet & greet services, complimentary flight monitoring, and comfortable transfers to any destination in Bahrain or across the regional borders.",
        "services": [
            "Meet & Greet",
            "Flight Tracking",
            "24/7 Availability",
            "Cross-Border Transfers",
            "Luggage Assistance"
        ],
        "popularRoutes": [
            { "to": "Manama City Center", "duration": "15 min" },
            { "to": "Dammam (Saudi Arabia)", "duration": "1h 15min" }
        ],
        "meetAndGreet": "Your driver will meet you at the arrivals gate with a name sign. They will help with your luggage and guide you to your parked vehicle.",
        "pickupLocations": "Standard pickups are arranged at the Bahrain International Airport arrivals terminal area. Detailed instructions are provided with every booking.",
        "vehiclesOverview": "Our Bahrain fleet includes professional sedans and spacious family vehicles, perfect for both island travel and trips across the causeway.",
        "routesInfo": "Common routes include transfers to Manama, Seef, and inter-country journeys to Dammam and Khobar via the King Fahd Causeway.",
        "bookingDetails": "We provide 24/7 reliable airport transfer services with professional drivers who monitor your flight for any delays or early arrivals.",
        "faq": [
            { "question": "How do I find my driver at Bahrain Airport?", "answer": "Your driver will be waiting in the arrivals area with a sign showing your name after you clear customs." },
            { "question": "Do you offer transfers to Saudi Arabia?", "answer": "Yes, we provide direct door-to-door transfers from Bahrain Airport to Dammam, Khobar, and Riyadh." },
            { "question": "Is waiting time included?", "answer": "Yes, we offer 60 minutes of complimentary waiting time from the moment your flight lands in Bahrain." },
            { "question": "Can I book return transfers?", "answer": "Yes, you can easily book your arrival and departure transfers together for a seamless travel experience." }
        ]
    },
    {
        "slug": "muscat-airport-taxi",
        "name": "Muscat International Airport",
        "city": "Muscat",
        "country": "Oman",
        "code": "MCT",
        "description": "Professional airport transfer services at Muscat International Airport (MCT). Meet & greet and comfortable vehicles available.",
        "longDescription": "Experience seamless travel at Muscat International Airport (MCT). Our professional chauffeurs provide meet & greet services, flight monitoring, and comfortable transfers to any destination in Muscat or across the border to the UAE.",
        "services": [
            "Meet & Greet",
            "Flight Tracking",
            "24/7 Availability",
            "Cross-Border Transfers",
            "Luggage Assistance"
        ],
        "popularRoutes": [
            { "to": "Old Muscat", "duration": "25 min" },
            { "to": "Al Qurum Beach", "duration": "20 min" },
            { "to": "Sohar", "duration": "2h 30min" }
        ],
        "meetAndGreet": "Experience Omani hospitality from the moment you land. Your driver will meet you in the arrivals hall with a name board and assist with your bags.",
        "pickupLocations": "Pickups are arranged at the Muscat International Airport arrivals terminal. Full meeting details are shared upon booking.",
        "vehiclesOverview": "Choose from our range of comfortable sedans and SUVs, perfect for navigating Muscat and long-distance Omani routes.",
        "routesInfo": "Common routes include transfers to Old Muscat, Al Qurum, and long-distance trips to Sohar, Nizwa, or cross-border to Dubai.",
        "bookingDetails": "Professional service is available 24/7. We monitor your flight and ensure a punctual pickup at Muscat International Airport.",
        "faq": [
            { "question": "Where is the meeting point at Muscat Airport?", "answer": "Your driver will be waiting in the arrivals hall with a sign showing your name after you exit the baggage claim area." },
            { "question": "Do you offer transfers to Dubai?", "answer": "Yes, we provide cross-border transfers from Muscat to Dubai via the Hatta or Al Ain borders." },
            { "question": "Is flight tracking provided?", "answer": "Yes, we monitor all flight statuses in real-time to ensure your chauffeur is there whenever you land." },
            { "question": "How much waiting time is included?", "answer": "We offer 60 minutes of complimentary waiting time starts once your flight has landed at Muscat Airport." }
        ]
    },
    {
        "slug": "neom-airport-taxi",
        "name": "Neom Bay Airport",
        "city": "Neom",
        "country": "Saudi Arabia",
        "code": "NUM",
        "description": "Professional airport transfer services at Neom Bay Airport (NUM). Meet & greet and reliable fleet available.",
        "longDescription": "Experience seamless travel at Neom Bay Airport (NUM) in Neom. Our professional chauffeurs provide meet & greet services, complimentary flight monitoring, and comfortable transfers to any destination in Saudi Arabia or across the regional borders.",
        "services": [
            "Meet & Greet",
            "Flight Tracking",
            "24/7 Availability",
            "Cross-Border Transfers",
            "Luggage Assistance"
        ],
        "popularRoutes": [
            { "to": "Neom Bay", "duration": "10 min" },
            { "to": "Tabuk", "duration": "2h" }
        ],
        "meetAndGreet": "A professional chauffeur will be waiting in the arrivals area with a personalized name board to ensure a smooth transition to your destination in Neom.",
        "pickupLocations": "Pickups are coordinated at the Neom Bay Airport arrivals terminal. We provide detailed meeting instructions with every booking.",
        "vehiclesOverview": "Our Neom fleet features modern, high-standard sedans and SUVs, maintaining the quality required for travel in this specialized region.",
        "routesInfo": "We provide transfers across the Neom region and inter-city trips to Tabuk and other northern Saudi Arabian locations.",
        "bookingDetails": "Arrange your Neom transfer through our platform for a professional and reliable experience. Our drivers monitor all regional flight arrivals.",
        "faq": [
            { "question": "Where do I meet my driver at Neom Airport?", "answer": "Your driver will be waiting in the arrivals hall with a sign displaying your name after you land." },
            { "question": "Do you monitor flight arrivals?", "answer": "Yes, we track all flights arriving at Neom Bay Airport to ensure your chauffeur is ready when you are." },
            { "question": "Is waiting time included?", "answer": "Yes, we offer 60 minutes of free waiting time from the moment your flight lands in Neom." },
            { "question": "Can I book a transfer to Tabuk?", "answer": "Yes, we provide direct transfers from Neom Bay Airport to Tabuk and other nearby cities." }
        ]
    },
    {
        "slug": "alula-airport-taxi",
        "name": "AlUla International Airport",
        "city": "AlUla",
        "country": "Saudi Arabia",
        "code": "ULH",
        "description": "Specialized airport transfer services at AlUla International Airport (ULH). Meet & greet and professional vehicles available.",
        "longDescription": "Experience seamless travel at AlUla International Airport (ULH) in AlUla. Our professional chauffeurs provide meet & greet services, complimentary flight monitoring, and comfortable transfers to any destination in Saudi Arabia or across the regional borders.",
        "services": [
            "Meet & Greet",
            "Flight Tracking",
            "24/7 Availability",
            "Cross-Border Transfers",
            "Luggage Assistance"
        ],
        popularRoutes: [
            { "to": "Old Town", "duration": "25 min" },
            { "to": "Hegra", "duration": "35 min" }
        ],
        "meetAndGreet": "A professional driver will meet you at AlUla International Airport with a personalized name board, ready to assist with your bags and provide a warm welcome to this historic region.",
        "pickupLocations": "Pickups are arranged at the AlUla Airport arrivals hall. Detailed instructions and meeting points are provided upon booking.",
        "vehiclesOverview": "Our AlUla fleet includes high-standard sedans and SUVs, perfect for comfortable travel to heritage sites and hotels.",
        "routesInfo": "Common routes include transfers to the Old Town, Hegra, various desert resorts, and regional connections across the AlUla area.",
        "bookingDetails": "We provide 24/7 reliable transportation services in AlUla. Our drivers monitor all flights to ensure a timely greeting regardless of arrival time.",
        "faq": [
            { "question": "Where is the meeting point at AlUla Airport?", "answer": "Your driver will be waiting in the arrivals hall with a sign showing your name." },
            { "question": "Do you offer tours to Hegra?", "answer": "Yes, we can provide direct transfers and customized tours to Hegra and other AlUla heritage sites." },
            { "question": "Is flight tracking provided?", "answer": "Yes, we monitor all flight arrivals at ULH to ensure your driver is waiting when you land." },
            { "question": "What is the waiting time provided?", "answer": "We offer 60 minutes of complimentary waiting time after your flight lands at AlUla International Airport." }
        ]
    },
    {
        "slug": "abha-airport-taxi",
        "name": "Abha International Airport",
        "city": "Abha",
        "country": "Saudi Arabia",
        "code": "AHB",
        "description": "Reliable airport transfer services at Abha International Airport (AHB). Meet & greet and comfortable vehicles available.",
        "longDescription": "Experience seamless travel at Abha International Airport (AHB) in Abha. Our professional chauffeurs provide meet & greet services, complimentary flight monitoring, and comfortable transfers to any destination in Saudi Arabia or across the regional borders.",
        "services": [
            "Meet & Greet",
            "Flight Tracking",
            "24/7 Availability",
            "Cross-Border Transfers",
            "Luggage Assistance"
        ],
        popularRoutes: [
            { "to": "Abha City Center", "duration": "20 min" },
            { "to": "Khamis Mushait", "duration": "30 min" }
        ],
        "meetAndGreet": "Your driver will greet you in the arrivals area with a name board, assisting with your luggage and providing a comfortable transfer to your destination in the Asir region.",
        "pickupLocations": "Pickups are available from the Abha International Airport arrivals terminal. Exact meeting details are shared upon booking.",
        "vehiclesOverview": "Our Abha fleet features modern sedans and spacious SUVs, ideal for navigating the mountain roads and city streets of the region.",
        "routesInfo": "Frequent transfers include trips to Abha City Center, Khamis Mushait, various hotels, and scenic locations across the mountains.",
        "bookingDetails": "Reliable 24/7 airport transfer service is available. We monitor your flight to ensure a punctual pickup at Abha International Airport.",
        "faq": [
            { "question": "Where do I meet my driver at Abha Airport?", "answer": "Your driver will be waiting in the arrivals hall with a sign displaying your name." },
            { "question": "Is flight tracking provided?", "answer": "Yes, we monitor all flight statuses in real-time to adjust to any early or late arrivals at AHB." },
            { "question": "How much waiting time is included?", "answer": "We offer 60 minutes of complimentary waiting time from the moment your flight lands in Abha." },
            { "question": "Can I book a transfer to Khamis Mushait?", "answer": "Yes, we provide direct door-to-door transfers between Abha Airport and Khamis Mushait." }
        ]
    },
    {
        "slug": "jazan-airport-taxi",
        "name": "King Abdullah bin Abdulaziz Airport",
        "city": "Jazan",
        "country": "Saudi Arabia",
        "code": "GIZ",
        "description": "Secure airport transfer services at King Abdullah bin Abdulaziz Airport (GIZ). Meet & greet and professional vehicles available.",
        "longDescription": "Experience seamless travel at King Abdullah bin Abdulaziz Airport (GIZ) in Jazan. Our professional chauffeurs provide meet & greet services, complimentary flight monitoring, and comfortable transfers to any destination in Saudi Arabia or across the regional borders.",
        "services": [
            "Meet & Greet",
            "Flight Tracking",
            "24/7 Availability",
            "Cross-Border Transfers",
            "Luggage Assistance"
        ],
        popularRoutes: [
            { "to": "Jazan City Center", "duration": "20 min" },
            { "to": "Business District", "duration": "25 min" }
        ],
        "meetAndGreet": "A professional chauffeur will be waiting in the arrival hall with a personalized name board to assist you with your bags and provide a smooth exit.",
        "pickupLocations": "Pickups are arranged at the Jazan Airport arrivals terminal. Detailed meeting instructions are shared upon booking confirmation.",
        "vehiclesOverview": "Our Jazan fleet features comfortable sedans and spacious SUVs, providing reliable transit for business and leisure travelers in the coastal region.",
        "routesInfo": "Common routes include transfers to Jazan City Center, hotels, the port area, and other locations within the Gizan province.",
        "bookingDetails": "Arrange your Jazan transfer anytime. We provide professional 24/7 service with real-time flight monitoring for all arrivals.",
        "faq": [
            { "question": "How do I find my driver at Jazan Airport?", "answer": "Your driver will be waiting in the designated arrivals hall with a sign clearly displaying your name." },
            { "question": "Is waiting time included?", "answer": "Yes, we offer 60 minutes of free waiting time from the moment your flight lands at King Abdullah bin Abdulaziz Airport." },
            { "question": "What if my flight is early?", "answer": "We track your flight in real-time and will adjust the pickup time so your driver is there whenever you arrive." },
            { "question": "Do you provide business transfers?", "answer": "Yes, we offer professional transfers tailored for business travelers and corporate clients in Jazan." }
        ]
    },
    {
        "slug": "taif-airport-taxi",
        "name": "Taif International Airport",
        "city": "Taif",
        "country": "Saudi Arabia",
        "code": "TIF",
        "description": "Reliable airport transfer services at Taif International Airport (TIF). Meet & greet and modern vehicles available.",
        "longDescription": "Experience seamless travel at Taif International Airport (TIF) in Taif. Our professional chauffeurs provide meet & greet services, complimentary flight monitoring, and comfortable transfers to any destination in Saudi Arabia or across the regional borders.",
        "services": [
            "Meet & Greet",
            "Flight Tracking",
            "24/7 Availability",
            "Cross-Border Transfers",
            "Luggage Assistance"
        ],
        "popularRoutes": [
            { "to": "Taif City Center", "duration": "25 min" },
            { "to": "Makkah", "duration": "1h 30min" }
        ],
        "meetAndGreet": "Your professional driver will meet you in the arrivals hall with a name sign, helping with your bags for a smooth and convenient transfer.",
        "pickupLocations": "Standard pickups are arranged at the Taif International Airport arrivals terminal area. Detailed instructions are provided with your booking.",
        "vehiclesOverview": "Our Taif fleet includes professional sedans and spacious family vehicles, providing comfortable transit for both city trips and trips to Makkah.",
        "routesInfo": "Common transfers include trips to Taif City Center, various mountain resorts, and direct rides to Makkah for pilgrims.",
        "bookingDetails": "Professional service is available 24/7. We monitor your flight and ensure a punctual pickup at Taif International Airport.",
        "faq": [
            { "question": "Do you offer transfers to Makkah from Taif?", "answer": "Yes, we provide direct door-to-door transfers from Taif Airport to all locations in Makkah." },
            { "question": "Where is the meeting point at TIF?", "answer": "Your driver will be waiting in the arrivals area with a sign clearly showing your name." },
            { "question": "Is flight tracking provided?", "answer": "Yes, we monitor all flight statuses in real-time to adjust to any delays or early arrivals." },
            { "question": "Is waiting time included?", "answer": "Yes, we offer 60 minutes of complimentary waiting time after your flight lands at Taif Airport." }
        ]
    },
    {
        "slug": "tabuk-airport-taxi",
        "name": "Prince Sultan bin Abdulaziz Airport",
        "city": "Tabuk",
        "country": "Saudi Arabia",
        "code": "TUU",
        "description": "Reliable airport transfer services in Tabuk. Professional chauffeurs and modern fleet available 24/7.",
        "longDescription": "Start your journey in the Tabuk region with our professional airport transfer service. We provide meet and greet services at TUU airport, ensuring a smooth and comfortable ride to your destination in or around Tabuk.",
        "services": ["Meet & Greet", "Flight Tracking", "24/7 Support", "Modern Fleet"],
        "popularRoutes": [
            { "to": "Tabuk City Center", "duration": "15 min" },
            { "to": "Neom", "duration": "2h" }
        ],
        "meetAndGreet": "Our driver will greet you at the arrivals hall with a name board, assisting with your luggage for a smooth exit.",
        "pickupLocations": "Pickups are arranged at the arrivals terminal of Prince Sultan bin Abdulaziz Airport.",
        "vehiclesOverview": "Choose from our selection of comfortable sedans and spacious SUVs, ideal for both business and group travel in the Tabuk region.",
        "routesInfo": "We offer transfers to Tabuk city, military and business bases, and connections to the Neom development area.",
        "bookingDetails": "Advance booking ensures your driver is ready. We monitor all flights to Tuyuu and provide door-to-door service.",
        "faq": [
            { "question": "Where is the meeting point?", "answer": "Your driver will be waiting in the arrivals hall with a sign with your name." },
            { "question": "Can I book a transfer to Neom?", "answer": "Yes, we provide direct inter-city transfers from Tabuk Airport to various locations in Neom." },
            { "question": "Is flight tracking included?", "answer": "Yes, we monitor all flight statuses to ensure your driver is on time." },
            { "question": "How much waiting time is provided?", "answer": "We offer 60 minutes of complimentary waiting time at TUU airport." }
        ]
    },
    {
        "slug": "yanbu-airport-taxi",
        "name": "Yanbu Commercial Port Airport",
        "city": "Yanbu",
        "country": "Saudi Arabia",
        "code": "YNB",
        "description": "Professional airport transfers at Prince Abdul Mohsin bin Abdulaziz Airport. Secure and reliable 24/7 service.",
        "longDescription": "Our Yanbu airport transfer service provides seamless transportation for corporate and leisure travelers. Enjoy a stress-free arrival with our meet and greet and professional fleet at YNB.",
        "services": ["Professional Chauffeurs", "Flight Tracking", "Meet & Greet", "Modern Fleet"],
        "popularRoutes": [
            { "to": "Yanbu Industrial City", "duration": "20 min" },
            { "to": "Yanbu Al-Bahr", "duration": "15 min" }
        ],
        "meetAndGreet": "Your professional driver will be waiting in the arrivals area with a personalized sign, ready to assist with your bags.",
        "pickupLocations": "Standard pickups are arranged at the arrivals hall of Yanbu Airport.",
        "vehiclesOverview": "Our Yanbu fleet includes Professional sedans and family SUVs, maintaining high standards of comfort and safety.",
        "routesInfo": "Common transfers include trips to the Industrial City, major hotels, and the Yanbu commercial district.",
        "bookingDetails": "We provide 24/7 service with professional chauffeurs. We track all flights to YNB to ensure timely pickups.",
        "faq": [
            { "question": "How do I find my driver?", "answer": "Your driver will meet you in the arrivals hall with a sign displaying your name." },
            { "question": "Do you provide business transfers?", "answer": "Yes, we offer specialized services for corporate travelers in the Yanbu area." },
            { "question": "Is waiting time included?", "answer": "Yes, we offer 60 minutes of complimentary waiting time from the moment your flight lands." },
            { "question": "Are the vehicles air-conditioned?", "answer": "Yes, all our fleet is modern and equipped with powerful air conditioning." }
        ]
    },
    {
        "slug": "hail-airport-taxi",
        "name": "Hail Regional Airport",
        "city": "Hail",
        "country": "Saudi Arabia",
        "code": "HAS",
        "description": "Reliable airport transfers in Hail. Professional drivers and comfortable vehicles available 24/7.",
        "longDescription": "Experience a smooth arrival at Hail Regional Airport with our professional taxi service. We provide meet and greet and direct transfers to any destination in the Hail province.",
        "services": ["Meet & Greet", "Professional Drivers", "24/7 Availability", "Luggage Assistance"],
        "popularRoutes": [
            { "to": "Hail City Center", "duration": "15 min" },
            { "to": "Jubbah", "duration": "1h 15min" }
        ],
        "meetAndGreet": "Our driver will wait for you in the arrivals hall with a name board, ready to help with your bags.",
        "pickupLocations": "Pickups are available from the Hail Regional Airport arrivals terminal.",
        "vehiclesOverview": "Our Hail fleet features modern sedans and spacious SUVs, providing comfortable transit for all travelers.",
        "routesInfo": "Common transfers include trips to Hail city center, hotels, and historic locations in the province.",
        "bookingDetails": "Reliable 24/7 service is available. We monitor your flight to ensure your driver is ready when you arrive.",
        "faq": [
            { "question": "Where is the meeting point?", "answer": "Your driver will meet you in the arrivals hall with a sign with your name." },
            { "question": "Do you offer long-distance transfers?", "answer": "Yes, we can provide transfers to locations outside Hail city." },
            { "question": "Is flight tracking included?", "answer": "Yes, we track all flights to HAS airport for puncuality." },
            { "question": "How much waiting time is provided?", "answer": "We offer 60 minutes of complimentary waiting time after your flight lands." }
        ]
    },
    {
        "slug": "al-ahsa-airport-taxi",
        "name": "Al-Ahsa International Airport",
        "city": "Al-Ahsa",
        "country": "Saudi Arabia",
        "code": "HOF",
        "description": "Professional airport transfers in Al-Ahsa. Reliable service for residents and business travelers.",
        "longDescription": "Start your journey in Hoffuf with our reliable airport transfer service. We provide meet and greet and professional chauffeur service from Al-Ahsa International Airport.",
        "services": ["Meet & Greet", "Flight Monitoring", "Professional Fleet", "24/7 Support"],
        "popularRoutes": [
            { "to": "Hofuf City Center", "duration": "20 min" },
            { "to": "Mubarraz", "duration": "25 min" }
        ],
        "meetAndGreet": "Your driver will greet you in the arrivals hall with a personalized sign, helping with your luggage for a smooth exit.",
        "pickupLocations": "Standard pickups are arranged at the arrivals terminal of Al-Ahsa International Airport.",
        "vehiclesOverview": "Our Al-Ahsa fleet includes Professional sedans and family SUVs, maintaining high standards of comfort.",
        "routesInfo": "We offer transfers to Hofuf, Mubarraz, and the surrounding agricultural and business areas.",
        "bookingDetails": "We provide 24/7 service with professional chauffeurs. We track all flights to HOF to ensure timely pickups.",
        "faq": [
            { "question": "How do I find my driver?", "answer": "Your driver will await you in the arrivals hall with a sign displaying your name." },
            { "question": "Is flight tracking provided?", "answer": "Yes, we monitor your flight status in real-time." },
            { "question": "Is waiting time included?", "answer": "Yes, we offer 60 minutes of complimentary waiting time starts from your flight landing." },
            { "question": "Can I request a large vehicle?", "answer": "Yes, we have SUVs and vans available for families and groups." }
        ]
    },
    {
        "slug": "qassim-airport-taxi",
        "name": "Prince Naif bin Abdulaziz International Airport",
        "city": "Buraidah",
        "country": "Saudi Arabia",
        "code": "ELQ",
        "description": "Reliable airport transfers in Qassim. Professional fleet and drivers for the Qassim region.",
        "longDescription": "Experience seamless travel at Prince Naif bin Abdulaziz Airport with our professional airport transfer service. We provide meet and greet and reliable door-to-door transportation.",
        "services": ["Meet & Greet", "Flight Tracking", "Professional Chauffeurs", "24/7 Support"],
        "popularRoutes": [
            { "to": "Buraidah City Center", "duration": "20 min" },
            { "to": "Unaizah", "duration": "30 min" }
        ],
        "meetAndGreet": "Our driver will greet you at the arrivals gate with a name sign, ready to assist with your luggage and guide you to your vehicle.",
        "pickupLocations": "Pickups are available from the Qassim International Airport arrivals terminal.",
        "vehiclesOverview": "Our Qassim fleet features comfortable sedans and spacious SUVs, providing reliable transit for city and regional travel.",
        "routesInfo": "Common routes include transfers to Buraidah, Unaizah, and other cities in the Qassim province.",
        "bookingDetails": "Arrange your Qassim transfer 24/7. We monitor all arrivals and provide professional door-to-door service.",
        "faq": [
            { "question": "Where is the meeting point?", "answer": "Your driver will meet you in the arrivals hall with a sign with your name." },
            { "question": "Do you provide transfers to Unaizah?", "answer": "Yes, we offer direct transfers from Qassim Airport to all hotels and locations in Unaizah." },
            { "question": "Is flight tracking included?", "answer": "Yes, we monitor all flight statuses in real-time." },
            { "question": "How much waiting time is provided?", "answer": "We offer 60 minutes of complimentary waiting time after your flight lands." }
        ]
    },
    {
        "slug": "salalah-airport-taxi",
        "name": "Salalah International Airport",
        "city": "Salalah",
        "country": "Oman",
        "code": "SLL",
        "description": "Professional airport transfers in Salalah. Meet & greet and comfortable fleet for the Dhofar region.",
        "longDescription": "Enjoy a smooth arrival in the beautiful Dhofar region with our professional Salalah airport transfer service. We provide meet and greet and reliable door-to-door transportation.",
        "services": ["Meet & Greet", "Professional Chauffeurs", "24/7 Support", "Luggage Assistance"],
        "popularRoutes": [
            { "to": "Salalah City Center", "duration": "15 min" },
            { "to": "Dhofar Resorts", "duration": "25 min" }
        ],
        "meetAndGreet": "Experience Omani hospitality from the start. Your driver will meet you in the arrivals hall with a name board and assist with your bags.",
        "pickupLocations": "Pickups are arranged at the Salalah International Airport arrivals terminal.",
        "vehiclesOverview": "Choose from our range of comfortable sedans and SUVs, perfect for navigating Salalah and regional routes.",
        "routesInfo": "Common routes include transfers to Salalah city, coastal resorts, and scenic locations in the Dhofar province.",
        "bookingDetails": "Professional service is available 24/7. We monitor your flight to ensure a punctual pickup at Salalah International Airport.",
        "faq": [
            { "question": "Where is the meeting point?", "answer": "Your driver will be waiting in the arrivals hall with a sign showing your name." },
            { "question": "Do you offer resort transfers?", "answer": "Yes, we provide direct transfers from Salalah Airport to all hotels and resorts in the region." },
            { "question": "Is flight tracking provided?", "answer": "Yes, we monitor all flight statuses in real-time." },
            { "question": "How much waiting time is included?", "answer": "We offer 60 minutes of complimentary waiting time after your flight lands." }
        ]
    },
    {
        "slug": "ras-al-khaimah-airport-taxi",
        "name": "Ras Al Khaimah International Airport",
        "city": "Ras Al Khaimah",
        "country": "United Arab Emirates",
        "code": "RKT",
        "description": "Reliable airport transfers in Ras Al Khaimah. Professional chauffeurs and modern fleet available 24/7.",
        "longDescription": "Start your stay in the northern emirate with our professional airport transfer service. We provide meet and greet and direct transfers from RAK Airport.",
        "services": ["Meet & Greet", "Flight Monitoring", "24/7 Availability", "Professional Drivers"],
        "popularRoutes": [
            { "to": "Al Marjan Island", "duration": "30 min" },
            { "to": "RAK City Center", "duration": "20 min" }
        ],
        "meetAndGreet": "Our driver will greet you in the arrivals hall with a personalized sign, helping with your luggage for a smooth exit.",
        "pickupLocations": "Pickups are available from the Ras Al Khaimah International Airport arrivals terminal.",
        "vehiclesOverview": "Our RAK fleet features modern sedans and spacious SUVs, providing comfortable transit for all travelers.",
        "routesInfo": "Common transfers include trips to Al Marjan Island, RAK City Center, and neighboring emirates like Dubai and Sharjah.",
        "bookingDetails": "Reliable 24/7 service is available. We monitor your flight to ensure your driver is ready when you arrive in Ras Al Khaimah.",
        "faq": [
            { "question": "Where is the meeting point?", "answer": "Your driver will meet you in the arrivals hall with a sign with your name." },
            { "question": "Do you provide transfers to Dubai?", "answer": "Yes, we offer direct door-to-door transfers from RAK Airport to any destination in Dubai." },
            { "question": "Is flight tracking included?", "answer": "Yes, we track all flights to the airport for puncuality." },
            { "question": "Is waiting time included?", "answer": "Yes, we offer 60 minutes of complimentary waiting time starts from your flight landing." }
        ]
    },
    {
        "slug": "fujairah-airport-taxi",
        "name": "Fujairah International Airport",
        "city": "Fujairah",
        "country": "United Arab Emirates",
        "code": "FJR",
        "description": "Professional airport transfers in Fujairah. Reliable service for the East Coast of the UAE.",
        "longDescription": "Our Fujairah airport transfer service provides seamless transportation for travelers visiting the East Coast. Enjoy a stress-free arrival with our meet and greet and professional fleet at FJR.",
        "services": ["Meet & Greet", "Professional Chauffeurs", "24/7 Support", "Flight Tracking"],
        "popularRoutes": [
            { "to": "Fujairah City Center", "duration": "10 min" },
            { "to": "Dibba Al-Fujairah", "duration": "50 min" }
        ],
        "meetAndGreet": "Your driver will meet you in the arrivals hall with a personalized name board, ready to help with your bags.",
        "pickupLocations": "Standard pickups are arranged at the Fujairah International Airport arrivals gate.",
        "vehiclesOverview": "Our Fujairah fleet includes Professional sedans and family SUVs, maintaining high standards of comfort.",
        "routesInfo": "We offer transfers to Fujairah city, coastal resorts in Dibba, and inter-city trips to Dubai or Sharjah.",
        "bookingDetails": "We provide 24/7 service with professional chauffeurs. We track all flights to FJR to ensure timely pickups.",
        "faq": [
            { "question": "How do I find my driver?", "answer": "Your driver will await you in the arrivals hall with a sign displaying your name." },
            { "question": "Is flight tracking provided?", "answer": "Yes, we monitor your flight status in real-time." },
            { "question": "Is waiting time included?", "answer": "Yes, we offer 60 minutes of complimentary waiting time starts from your flight landing." },
            { "question": "Can I book a transfer to Dubai?", "answer": "Yes, we provide direct transfers from Fujairah Airport to all locations in Dubai." }
        ]
    },
    {
        "slug": "al-ain-airport-taxi",
        "name": "Al Ain International Airport",
        "city": "Al Ain",
        "country": "United Arab Emirates",
        "code": "AAN",
        "description": "Reliable airport transfers in Al Ain. Professional chauffeurs and modern fleet available 24/7.",
        "longDescription": "Experience a smooth arrival in the garden city with our professional Al Ain airport transfer service. We provide meet and greet and direct transfers from AAN Airport.",
        "services": ["Meet & Greet", "Flight Monitoring", "Professional Drivers", "24/7 Support"],
        "popularRoutes": [
            { "to": "Al Ain City Center", "duration": "20 min" },
            { "to": "Dubai", "duration": "1h 30min" }
        ],
        "meetAndGreet": "Our driver will greet you in the arrivals hall with a personalized sign, helping with your luggage for a smooth exit.",
        "pickupLocations": "Pickups are available from the Al Ain International Airport arrivals terminal.",
        "vehiclesOverview": "Our Al Ain fleet features modern sedans and spacious SUVs, providing comfortable transit for all travelers.",
        "routesInfo": "Common transfers include trips to Al Ain City Center, local hotels, and inter-city journeys to Abu Dhabi or Dubai.",
        "bookingDetails": "Reliable 24/7 service is available. We monitor your flight to ensure your driver is ready when you arrive in Al Ain.",
        "faq": [
            { "question": "Where is the meeting point?", "answer": "Your driver will meet you in the arrivals hall with a sign with your name." },
            { "question": "Do you provide transfers to Abu Dhabi?", "answer": "Yes, we offer direct door-to-door transfers from Al Ain Airport to any location in Abu Dhabi city." },
            { "question": "Is flight tracking included?", "answer": "Yes, we track all flights to the airport for puncuality." },
            { "question": "Is waiting time included?", "answer": "Yes, we offer 60 minutes of complimentary waiting time starts from your flight landing." }
        ]
    },
    {
        "slug": "sohar-airport-taxi",
        "name": "Sohar Airport",
        "city": "Sohar",
        "country": "Oman",
        "code": "OHS",
        "description": "Professional airport transfers in Sohar. Reliable service for the Batinah region of Oman.",
        "longDescription": "Start your journey in Sohar with our reliable airport transfer service. We provide meet and greet and professional fleet for a seamless arrival at OHS.",
        "services": ["Meet & Greet", "Professional Chauffeurs", "24/7 Availability", "Flight Monitoring"],
        "popularRoutes": [
            { "to": "Sohar City Center", "duration": "15 min" },
            { "to": "Muscat", "duration": "2h 15min" }
        ],
        "meetAndGreet": "Experience Omani hospitality from the start. Your driver will meet you in the arrivals hall with a name board and assist with your bags.",
        "pickupLocations": "Pickups are arranged at the Sohar Airport arrivals terminal area.",
        "vehiclesOverview": "Choose from our range of comfortable sedans and SUVs, perfect for navigating Sohar and regional routes.",
        "routesInfo": "Common routes include transfers to Sohar city, the industrial port, and inter-city trips to Muscat or the UAE border.",
        "bookingDetails": "Professional service is available 24/7. We monitor your flight and ensure a punctual pickup at Sohar Airport.",
        "faq": [
            { "question": "How do I find my driver?", "answer": "Your driver will await you in the arrivals hall with a sign displaying your name." },
            { "question": "Do you offer transfers to Muscat?", "answer": "Yes, we provide direct door-to-door transfers from Sohar Airport to all locations in Muscat." },
            { "question": "Is flight tracking provided?", "answer": "Yes, we monitor your flight status in real-time." },
            { "question": "Is waiting time included?", "answer": "Yes, we offer 60 minutes of complimentary waiting time starts from your flight landing." }
        ]
    }
];
export const borderCrossings: Border[] = [
    {
        "slug": "al-batha-border-taxi",
        "name": "Al Batha Border",
        "countryA": "Saudi Arabia",
        "countryB": "United Arab Emirates",
        "type": "Land Port",
        "description": "The primary land connection between Saudi Arabia and the UAE. Vital for transport between Dubai, Abu Dhabi, and Riyadh.",
        "services": [
            "Fast-track clearings",
            "VIP Chauffeur Transit",
            "Luggage check assistance"
        ],
        "longDescription": "Al Batha Border is the primary land gate connecting the Kingdom of Saudi Arabia with the United Arab Emirates. This crossing is used daily by travelers moving between major hubs like Riyadh, Abu Dhabi, and Dubai. Our taxi service provides a reliable and direct way to navigate this border without the need for vehicle changes or public transport.",
        "crossingProcess": "Crossing the Al Batha Border typically involves two main stages: exiting Saudi Arabia and entering the UAE. Passengers undergo passport control and identity verification at both checkpoints. Customs inspections are performed on the vehicle and luggage. The entire process usually takes between 45 to 90 minutes. Our professional chauffeurs assist with documentation and navigate the dedicated vehicle lanes.",
        "popularRoutes": [
            "Riyadh to Abu Dhabi Taxi",
            "Riyadh to Dubai Taxi",
            "Dammam to Abu Dhabi Taxi",
            "Abu Dhabi to Riyadh Taxi"
        ],
        "vehiclesInfo": "We offer various vehicles for the Al Batha crossing. For individual travelers or business professionals, the Mercedes S-Class, BMW, Genesis, Ford Taurus, or Camry provide a professional environment. Families often choose the GMC, Cadillac Escalade, or Hyundai Staria for extra space. For groups, we provide the Mercedes Vito, Mercedes Sprinter, Hiace, Coaster, or a High-standard Bus. All vehicles are air-conditioned.",
        "bookingInfo": "Travelers can arrange a cross-border taxi transfer through our platform. Whether you are traveling for business or leisure, our door-to-door service ensures a professional journey from any location in Saudi Arabia to your destination in the UAE.",
        "faq": [
            { "question": "How long does the border crossing take?", "answer": "The process generally takes 45 to 90 minutes, depending on traffic levels and inspection procedures." },
            { "question": "What documents are required?", "answer": "You need a valid passport and the appropriate entry visa or residence permit for the country you are entering." },
            { "question": "Can taxis cross the border directly?", "answer": "Yes, our vehicles are permitted to cross the border, providing a seamless door-to-door experience." },
            { "question": "Are airport pickups available?", "answer": "Yes, we offer direct transfers from major airports like Riyadh (RUH) and Abu Dhabi (AUH) across the border." }
        ]
    },
    {
        "slug": "al-ghuwaifat-border-taxi",
        "name": "Al Ghuwaifat Border",
        "countryA": "United Arab Emirates",
        "countryB": "Saudi Arabia",
        "type": "Land Port",
        "description": "The UAE checkpoint directly parallel to Al Batha. It handles volumes of regional passenger travel.",
        "services": [
            "Business Fleet Passing",
            "Toll Management",
            "Family Van Options"
        ],
        "longDescription": "The Al Ghuwaifat Border is the UAE's primary land hub for those entering Saudi Arabia. It is part of the same crossing complex as Al Batha. Our taxi service ensures that passengers traveling from the UAE to Saudi Arabia experience a professional and well-managed transit across this major regional gateway.",
        "crossingProcess": "The crossing process involves UAE exit procedures and Saudi Arabian entry checks at the Al Batha station. Passengers present their passports and visas for verification. Detailed vehicle and luggage inspections are standard. The transit typically takes 45 to 90 minutes. Our chauffeurs guide you through the official lanes for private vehicles and handle the necessary transit paperwork.",
        "popularRoutes": [
            "Abu Dhabi to Riyadh Taxi",
            "Dubai to Riyadh Taxi",
            "Dubai to Dammam Taxi",
            "Sharjah to Riyadh Taxi"
        ],
        "vehiclesInfo": "Multiple vehicle options are available for the Al Ghuwaifat crossing. For individual travelers or business professionals, the Mercedes S-Class, BMW, Genesis, Ford Taurus, or Camry provide a professional environment. Families often choose the GMC, Cadillac Escalade, or Hyundai Staria for extra space. For groups, we provide the Mercedes Vito, Mercedes Sprinter, Hiace, Coaster, or a High-standard Bus. All vehicles are air-conditioned.",
        "bookingInfo": "Arranging a cross-border taxi transfer from the UAE to Saudi Arabia is easy. Our professional chauffeurs provide door-to-door service from any city in the UAE to your chosen destination in Saudi Arabia.",
        "faq": [
            { "question": "How long does the border crossing take?", "answer": "The transit usually takes between 45 to 90 minutes, depending on the queue length at customs." },
            { "question": "What documents are required?", "answer": "Passengers must have a valid passport and a Saudi Arabian entry visa or residence permit." },
            { "question": "Can taxis cross the border directly?", "answer": "Yes, our transfers are continuous; there is no need to switch vehicles at the border." },
            { "question": "Are airport pickups available?", "answer": "Yes, we can pick you up from Zayed International Airport (AUH) or Dubai International Airport (DXB) for direct transit." }
        ]
    },
    {
        "slug": "salwa-border-taxi",
        "name": "Salwa Border",
        "countryA": "Saudi Arabia",
        "countryB": "Qatar",
        "type": "Land Port",
        "description": "The only land border between Saudi Arabia and Qatar, essential for trips between Doha and Riyadh or Dammam.",
        "services": [
            "Quick Passenger Clearance",
            "Direct Doha-Riyadh shuttles",
            "VIP Professional passing"
        ],
        "longDescription": "Salwa Border is the sole land crossing connecting Saudi Arabia directly to Qatar. It is a vital link for travelers moving between Doha and cities in the Eastern Province and Central Region of Saudi Arabia. Our service provides a direct, private transfer that removes the complexity of cross-border travel.",
        "crossingProcess": "The crossing process at Salwa involves exiting Saudi Arabia and entering Qatar via the Abu Samra station. Travelers must present valid passports and entry permits. Customs and security checks are conducted for all vehicles. The average crossing time is between 30 to 60 minutes. Your driver will guide you through each step of the passport control process.",
        "popularRoutes": [
            "Riyadh to Doha Taxi",
            "Dammam to Doha Taxi",
            "Doha to Riyadh Taxi",
            "Doha to Dammam Taxi"
        ],
        "vehiclesInfo": "Our fleet for the Salwa crossing includes vehicles suitable for all travel needs. For individuals, the Mercedes S-Class, BMW, Genesis, Ford Taurus, or Camry provide a professional environment. Families often choose the GMC, Cadillac Escalade, or Hyundai Staria for extra space. For groups, we provide the Mercedes Vito, Mercedes Sprinter, Hiace, Coaster, or a High-standard Bus. All vehicles are air-conditioned.",
        "bookingInfo": "Arranging a cross-border taxi transfer to Qatar is straightforward. We offer pickup from any hotel, residence, or airport in Saudi Arabia, providing a professional journey to your destination in Doha.",
        "faq": [
            { "question": "How long does the border crossing take?", "answer": "The Salwa border crossing typically takes 30 to 60 minutes, depending on the day and time." },
            { "question": "What documents are required?", "answer": "A valid passport and a Qatar entry visa or residency permit are required for all passengers." },
            { "question": "Can taxis cross the border directly?", "answer": "Yes, our private taxis are authorized for cross-border transit between Saudi Arabia and Qatar." },
            { "question": "Are airport pickups available?", "answer": "Yes, we provide service from major Saudi airports for direct transfers to Doha." }
        ]
    },
    {
        "slug": "abu-samra-border-taxi",
        "name": "Abu Samra Border",
        "countryA": "Qatar",
        "countryB": "Saudi Arabia",
        "type": "Land Port",
        "description": "The Qatari side of the Salwa crossing, providing direct access to the entire Saudi highway network.",
        "services": [
            "Corporate Transfers",
            "professional Port Services",
            "Priority Lane Access via VIP"
        ],
        "longDescription": "Abu Samra is the Qatari border station for those traveling overland to Saudi Arabia. It is well-connected to Doha and provides access to the Saudi highway network leading to Dammam or Riyadh. Our taxi service provides a professional and efficient way for travelers to reach Saudi Arabia from any point in Qatar.",
        "crossingProcess": "Passengers departing Qatar via Abu Samra will undergo Qatari exit checks followed by Saudi entry procedures at the Salwa station. Passport verification and customs inspections of the vehicle and luggage are required. The process usually takes between 30 to 60 minutes. Our professional chauffeurs facilitate the transition and assist with the necessary checks.",
        "popularRoutes": [
            "Doha to Riyadh Taxi",
            "Doha to Dammam Taxi",
            "Doha to Al Ahsa Taxi",
            "Doha to Khobar Taxi"
        ],
        "vehiclesInfo": "We provide various vehicle options for the Abu Samra border crossing. For individual travelers or business professionals, the Mercedes S-Class, BMW, Genesis, Ford Taurus, or Camry provide a professional environment. Families often choose the GMC, Cadillac Escalade, or Hyundai Staria for extra space. For groups, we provide the Mercedes Vito, Mercedes Sprinter, Hiace, Coaster, or a High-standard Bus. All vehicles are air-conditioned.",
        "bookingInfo": "Travelers can easily arrange a cross-border taxi transfer from Qatar to Saudi Arabia. Our service provides a professional, door-to-door experience from Doha to your destination in the Kingdom.",
        "faq": [
            { "question": "How long does the border crossing take?", "answer": "The average crossing time at Abu Samra is between 30 to 60 minutes." },
            { "question": "What documents are required?", "answer": "Passports and a valid Saudi Arabian entry visa or residency permit must be presented." },
            { "question": "Can taxis cross the border directly?", "answer": "Yes, our service handles the entire cross-border journey without requiring a change of vehicle." },
            { "question": "Are airport pickups available?", "answer": "Yes, we offer direct pickups from Hamad International Airport (DOH) for transit to Saudi Arabia." }
        ]
    },
    {
        "slug": "king-fahd-causeway-taxi",
        "name": "King Fahd Causeway",
        "countryA": "Saudi Arabia",
        "countryB": "Bahrain",
        "type": "Bridge Post",
        "description": "The iconic 25km bridge connecting Khobar (KSA) to Bahrain. A very popular daily commute for thousands.",
        "services": [
            "Bridge Toll included",
            "Seamless Security Checks",
            "Fast-lane access (when available)"
        ],
        "longDescription": "The King Fahd Causeway is a 25-kilometer series of bridges and causeways connecting the Eastern Province of Saudi Arabia to Bahrain. It is one of the busiest land borders in the region. Our service offers a professional way to transit between Khobar/Dammam and Manama.",
        "crossingProcess": "The crossing process takes place on a central man-made island which houses both Saudi and Bahraini customs. Passengers must undergo passport control and vehicle clearance. The average crossing takes about 30 to 60 minutes. Our chauffeurs assist with all formalities to ensure a quick transit.",
        "popularRoutes": [
            "Dammam to Manama Taxi",
            "Khobar to Bahrain Taxi",
            "Riyadh to Manama Taxi",
            "Bahrain to Dammam Airport Taxi"
        ],
        "vehiclesInfo": "We provide a range of vehicles for causeway transfers. For solo or corporate travelers, we recommend the Mercedes S-Class, BMW, Genesis, Ford Taurus, or Camry. Families moving between the two countries find the GMC, Cadillac Escalade, or Hyundai Staria highly comfortable. Groups can be accommodated in the Mercedes Vito, Mercedes Sprinter, Hiace, Coaster, or a High-standard Bus.",
        "bookingInfo": "You can arrange a cross-border taxi transfer between Saudi Arabia and Bahrain. Our door-to-door service includes pickup from your location and a direct drop-off at your destination.",
        "faq": [
            { "question": "How long does the border crossing take?", "answer": "On average, the crossing takes 30 to 60 minutes, depending on the day of the week." },
            { "question": "What documents are required?", "answer": "A valid passport and the necessary visa for either Saudi Arabia or Bahrain are required." },
            { "question": "Can taxis cross the border directly?", "answer": "Yes, our taxis provide a continuous service across the causeway without requiring you to switch vehicles." },
            { "question": "Are airport pickups available?", "answer": "Yes, we offer direct transfers from major regional airports across the border." }
        ]
    },
    {
        "slug": "al-nuwaiseeb-border-taxi",
        "name": "Al Nuwaiseeb Border",
        "countryA": "Kuwait",
        "countryB": "Saudi Arabia",
        "type": "Land Port",
        "description": "The southern Kuwaiti border connecting towards Saudi Arabia's Eastern Province (Dammam, Khafji).",
        "services": [
            "Kuwait-KSA Shuttles",
            "Business Fleet Access",
            "Customs Handling"
        ],
        "longDescription": "Al Nuwaiseeb Border is the primary land gateway for travelers entering Saudi Arabia from Kuwait. Located in the south of Kuwait, it connects directly towards the Saudi city of Al Khafji and continues down to Dammam. Our taxi service provides a professional solution for cross-country travel.",
        "crossingProcess": "The process at Nuwaiseeb involves Kuwaiti exit procedures followed by Saudi entry procedures at the Al Khafji checkpoint. Passengers must go through passport control and luggage inspection. The typical crossing time ranges from 45 to 60 minutes. Our drivers assist you with the necessary steps at each station.",
        "popularRoutes": [
            "Kuwait City to Dammam Taxi",
            "Kuwait City to Khafji Taxi",
            "Kuwait City to Riyadh Taxi",
            "Kuwait Airport to Dammam Taxi"
        ],
        "vehiclesInfo": "Our fleet for the Al Nuwaiseeb crossing includes various options. Individual travelers often select the Mercedes S-Class, BMW, Genesis, Ford Taurus, or Camry. Families benefit from the space in our GMC, Cadillac Escalade, and Hyundai Staria. For larger groups, we offer the Mercedes Vito, Mercedes Sprinter, Hiace, Coaster, or a High-standard Bus. All vehicles are air-conditioned.",
        "bookingInfo": "Cross-border taxi transfers between Kuwait and Saudi Arabia can be arranged through our platform. We provide reliable transportation from Kuwait City to any destination in the Kingdom.",
        "faq": [
            { "question": "How long does the border crossing take?", "answer": "The crossing usually takes about 45 to 60 minutes, depending on the current volume of travelers." },
            { "question": "What documents are required?", "answer": "Valid passports and the appropriate entry visas for Saudi Arabia are mandatory." },
            { "question": "Can taxis cross the border directly?", "answer": "Yes, our private transfer service stays with you for the entire journey from Kuwait to Saudi Arabia." },
            { "question": "Are airport pickups available?", "answer": "Yes, we provide pickup services from Kuwait International Airport (KWI) for direct transit." }
        ]
    },
    {
        "slug": "al-khafji-border-taxi",
        "name": "Al Khafji Border",
        "countryA": "Saudi Arabia",
        "countryB": "Kuwait",
        "type": "Land Port",
        "description": "The corresponding Saudi border to Nuwaiseeb. Provides immediate access to Khafji and the route down to Dammam.",
        "services": [
            "VIP Terminal Transit",
            "Documentation Support",
            "Quick Clearance"
        ],
        "longDescription": "Al Khafji Border is the Saudi Arabian side of the crossing into Kuwait. It is the main route for those traveling from Dammam, Jubail, or Riyadh towards Kuwait City. Our professional taxi service ensures a smooth transition between the two countries with a focus on reliability.",
        "crossingProcess": "Travelers departing Saudi Arabia via Al Khafji will undergo Saudi exit checks followed by Kuwaiti entry procedures at the Nuwaiseeb station. This includes passport verification, visa checks, and vehicle customs clearance. The crossing usually takes 45 to 60 minutes. Our chauffeurs stay with the vehicle and assist passengers with their luggage.",
        "popularRoutes": [
            "Dammam to Kuwait City Taxi",
            "Khafji to Kuwait City Taxi",
            "Riyadh to Kuwait City Taxi",
            "Khobar to Kuwait City Taxi"
        ],
        "vehiclesInfo": "A variety of vehicles are available for the Khafji border crossing. Individual travelers often choose the Mercedes S-Class, BMW, Genesis, Ford Taurus, or Camry. Families find the GMC, Cadillac Escalade, and Hyundai Staria perfect for the drive. For groups, we utilize the Mercedes Vito, Mercedes Sprinter, Hiace, Coaster, or a High-standard Bus.",
        "bookingInfo": "Arrange your cross-border taxi transfer from Saudi Arabia to Kuwait. Our service provides a professional, door-to-door experience from any location in the Eastern Province.",
        "faq": [
            { "question": "How long does the border crossing take?", "answer": "The average time for the Al Khafji border crossing is between 45 to 60 minutes." },
            { "question": "What documents are required?", "answer": "Passports and any required entry visas for Kuwait must be presented at the border stations." },
            { "question": "Can taxis cross the border directly?", "answer": "Yes, our service handles the entire cross-border journey without any vehicle transfers." },
            { "question": "Are airport pickups available?", "answer": "Yes, we can arrange for a pickup at King Fahd International Airport (DMM) for transit to Kuwait." }
        ]
    }
];
