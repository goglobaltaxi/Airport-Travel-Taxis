export interface HospitalPage {
    slug: string;
    hospitalName: string;
    city: string;
    cityCountry: string;
    district: string;
    approxTravelTime: string;
    description: string;
    longDescription: string;
    visitReasons: string[];
    travelTips: string[];
    faq: { question: string; answer: string }[];
    relatedRoutes: { name: string; slug: string; type: 'city' | 'airport' | 'route' }[];
}

export const hospitalPages: HospitalPage[] = [

    // ─── Riyadh ────────────────────────────────────────────
    {
        slug: 'king-faisal-hospital-riyadh',
        hospitalName: 'King Faisal Specialist Hospital',
        city: 'Riyadh',
        cityCountry: 'Saudi Arabia',
        district: 'Al Mathar District',
        approxTravelTime: '15–40 minutes from most Riyadh areas',
        description: 'Taxi service to King Faisal Specialist Hospital in Riyadh. Transfers for medical appointments, specialist consultations, and patient visits.',
        longDescription: 'King Faisal Specialist Hospital and Research Centre is one of the leading medical facilities in Saudi Arabia, located in the Al Mathar District of Riyadh. Our taxi service provides reliable, door-to-door transfers for patients, visitors, and medical staff traveling from any location in Riyadh, including the airport and hotels.',
        visitReasons: [
            'Specialist consultations and referrals',
            'Scheduled medical appointments and follow-ups',
            'Laboratory tests and diagnostic procedures',
            'Patient admissions and discharge transfers',
            'Visiting patients in hospital wards',
            'Post-operative checkups and recovery visits',
        ],
        travelTips: [
            'Arrive at least 30 minutes before your scheduled appointment.',
            'Carry your appointment reference number and medical files.',
            'Confirm the specific entrance or department location before arriving.',
            'Inform your driver if you or a passenger has limited mobility.',
            'Request a waiting service if you expect an uncertain wait time.',
        ],
        faq: [
            { question: 'How do I arrange a taxi to King Faisal Hospital in Riyadh?', answer: 'You can book online or via WhatsApp. Provide your pickup location, destination, and preferred time.' },
            { question: 'Can other family members travel in the same vehicle?', answer: 'Yes. We offer SUVs and vans that comfortably accommodate families and groups.' },
            { question: 'Can I get a pickup from Riyadh Airport directly to the hospital?', answer: 'Yes. We provide direct transfers from King Khalid International Airport to King Faisal Hospital.' },
            { question: 'Is a wheelchair-accessible vehicle available?', answer: 'Please mention your accessibility requirements when booking. We will do our best to arrange a suitable vehicle.' },
            { question: 'Can the driver wait while I am at my appointment?', answer: 'Yes. Driver waiting time can be arranged. Please confirm this when placing your booking.' },
        ],
        relatedRoutes: [
            { name: 'Riyadh Taxi Service', slug: '/city/riyadh-taxi', type: 'city' },
            { name: 'Riyadh Airport Taxi', slug: '/airport/riyadh-airport-taxi', type: 'airport' },
            { name: 'Riyadh to Jeddah Taxi', slug: '/routes/riyadh-to-jeddah-taxi', type: 'route' },
        ],
    },
    {
        slug: 'king-abdulaziz-hospital-riyadh',
        hospitalName: 'King Abdulaziz Medical City',
        city: 'Riyadh',
        cityCountry: 'Saudi Arabia',
        district: 'Sahafa District, Northern Riyadh',
        approxTravelTime: '20–45 minutes from central Riyadh',
        description: 'Taxi to King Abdulaziz Medical City in Riyadh. Reliable transfers for medical appointments, admissions, and patient visits.',
        longDescription: 'King Abdulaziz Medical City (KAMC) is a major tertiary care hospital located in the northern part of Riyadh. It serves a wide range of patients including those from within Saudi Arabia and neighboring countries. Our taxi service offers comfortable, on-time transfers to the hospital campus from homes, hotels, and Riyadh airport.',
        visitReasons: [
            'Scheduled outpatient and specialist appointments',
            'Hospital admissions and discharge transfers',
            'Diagnostic services and laboratory tests',
            'Surgical procedure pre-admission visits',
            'Visiting patients in the hospital',
            'Rehabilitation program attendance',
        ],
        travelTips: [
            'King Abdulaziz Medical City has multiple entrances — confirm the correct one for your department.',
            'Carry your Saudi health insurance card or Iqama.',
            'Peak visiting hours can affect traffic around the hospital.',
            'Request driver pickup from the designated drop-off area.',
            'Book your return transfer in advance to avoid delays after long appointments.',
        ],
        faq: [
            { question: 'Where is King Abdulaziz Medical City located in Riyadh?', answer: 'It is located in the Sahafa District in northern Riyadh, accessible from King Fahd Road.' },
            { question: 'Can I book a taxi from a hotel to the hospital?', answer: 'Yes. We pick up from all major hotels, serviced apartments, and residences in Riyadh.' },
            { question: 'Do you provide transfers for multiple family members?', answer: 'Yes. We have SUVs and vans available for families traveling together to the hospital.' },
            { question: 'Can airport pickup be arranged?', answer: 'Yes. We provide direct transfers from King Khalid International Airport to KAMC.' },
            { question: 'Is 24-hour booking available?', answer: 'Yes. Our service operates around the clock, so early morning and late-night transfers can be arranged.' },
        ],
        relatedRoutes: [
            { name: 'Riyadh Taxi Service', slug: '/city/riyadh-taxi', type: 'city' },
            { name: 'Riyadh Airport Taxi', slug: '/airport/riyadh-airport-taxi', type: 'airport' },
            { name: 'Riyadh to Dammam Taxi', slug: '/routes/riyadh-to-dammam-taxi', type: 'route' },
        ],
    },

    // ─── Jeddah ────────────────────────────────────────────
    {
        slug: 'king-faisal-hospital-jeddah',
        hospitalName: 'King Faisal Specialist Hospital',
        city: 'Jeddah',
        cityCountry: 'Saudi Arabia',
        district: 'Al Zahrawi District',
        approxTravelTime: '15–35 minutes from most Jeddah areas',
        description: 'Taxi to King Faisal Specialist Hospital in Jeddah. Transfers for specialist appointments, checkups, and patient visits.',
        longDescription: 'King Faisal Specialist Hospital in Jeddah serves patients from across the western region of Saudi Arabia. Located in the Al Zahrawi District, it provides a wide range of diagnostic, surgical, and specialist services. Our taxi service offers reliable transfers from any location in Jeddah, including Jeddah Airport, hotels, and residential areas.',
        visitReasons: [
            'Specialist medical consultations',
            'Scheduled outpatient appointments',
            'Diagnostic imaging and laboratory visits',
            'Patient admissions and transfers',
            'Follow-up checkups and post-discharge visits',
            'Visiting family members receiving treatment',
        ],
        travelTips: [
            'Carry your appointment confirmation and any referral letters.',
            'Allow extra time during peak traffic hours in central Jeddah.',
            'Confirm the correct building or clinic entrance in advance.',
            'Bring all required medical documents and test results.',
            'Arrange a return transfer before your appointment if you expect a long wait.',
        ],
        faq: [
            { question: 'How long does it take to reach King Faisal Hospital Jeddah from the airport?', answer: 'From King Abdulaziz International Airport, the journey takes approximately 25 to 40 minutes depending on traffic.' },
            { question: 'Can I get a pickup from any hotel in Jeddah?', answer: 'Yes. We pick up from all hotels and residences across Jeddah.' },
            { question: 'Is the service available for early morning appointments?', answer: 'Yes. Our drivers are available 24/7, including early morning hospital appointments.' },
            { question: 'Can the driver wait after dropping me off?', answer: 'Yes. Waiting time can be arranged. Please mention this when booking.' },
            { question: 'Do you serve other hospitals in Jeddah as well?', answer: 'Yes. We provide transfers to all major hospitals and medical centers in Jeddah.' },
        ],
        relatedRoutes: [
            { name: 'Jeddah Airport Taxi', slug: '/airport/jeddah-airport-taxi', type: 'airport' },
            { name: 'Riyadh to Jeddah Taxi', slug: '/routes/riyadh-to-jeddah-taxi', type: 'route' },
            { name: 'Riyadh Taxi Service', slug: '/city/riyadh-taxi', type: 'city' },
        ],
    },

    // ─── Abu Dhabi ─────────────────────────────────────────
    {
        slug: 'cleveland-clinic-abu-dhabi',
        hospitalName: 'Cleveland Clinic Abu Dhabi',
        city: 'Abu Dhabi',
        cityCountry: 'United Arab Emirates',
        district: 'Al Maryah Island',
        approxTravelTime: '10–30 minutes from most Abu Dhabi areas',
        description: 'Taxi to Cleveland Clinic Abu Dhabi on Al Maryah Island. Door-to-door transfers for medical appointments and patient visits.',
        longDescription: 'Cleveland Clinic Abu Dhabi is located on Al Maryah Island in Abu Dhabi and is a major referral center for complex medical cases in the UAE and wider Gulf region. Our taxi service provides comfortable and punctual transfers from homes, hotels, and Abu Dhabi Airport directly to the clinic entrance.',
        visitReasons: [
            'Specialist referrals and consultations',
            'Scheduled outpatient appointments',
            'Pre-surgical assessments and admissions',
            'Diagnostic procedures and imaging',
            'Post-operative follow-up visits',
            'Visiting patients receiving inpatient care',
        ],
        travelTips: [
            'Al Maryah Island has specific drop-off points — confirm the correct entrance for your appointment.',
            'Parking on Al Maryah Island is limited; a driver drop-off service is more practical.',
            'Carry your Emirates ID or passport for registration at reception.',
            'Allow extra time during morning traffic hours crossing from Abu Dhabi city.',
            'Arrange a return pickup before your appointment if needed.',
        ],
        faq: [
            { question: 'How do I get to Cleveland Clinic Abu Dhabi by taxi?', answer: 'We offer door-to-door transfers from any location in Abu Dhabi directly to the clinic on Al Maryah Island.' },
            { question: 'Can I travel from Dubai to Cleveland Clinic Abu Dhabi?', answer: 'Yes. We provide intercity transfers from Dubai to Cleveland Clinic Abu Dhabi, approximately a 1.5-hour journey.' },
            { question: 'Is airport pickup available?', answer: 'Yes. We can transfer you from Zayed International Airport directly to the clinic.' },
            { question: 'Can family members accompany a patient in the same vehicle?', answer: 'Yes. We have spacious SUVs and vans available for patients traveling with family.' },
            { question: 'What vehicle should I choose for a patient with mobility needs?', answer: 'Please inform us of any mobility requirements when booking and we will arrange the most appropriate vehicle.' },
        ],
        relatedRoutes: [
            { name: 'Abu Dhabi Taxi Service', slug: '/city/abu-dhabi-taxi', type: 'city' },
            { name: 'Abu Dhabi Airport Taxi', slug: '/airport/abu-dhabi-airport-taxi', type: 'airport' },
            { name: 'Dubai to Abu Dhabi Taxi', slug: '/routes/dubai-to-abu-dhabi-taxi', type: 'route' },
        ],
    },
    {
        slug: 'sheikh-khalifa-hospital-abu-dhabi',
        hospitalName: 'Sheikh Khalifa Medical City',
        city: 'Abu Dhabi',
        cityCountry: 'United Arab Emirates',
        district: 'Tourist Club Area',
        approxTravelTime: '10–25 minutes from most Abu Dhabi areas',
        description: 'Taxi to Sheikh Khalifa Medical City in Abu Dhabi. Transfers for outpatient appointments, patient admissions, and hospital visits.',
        longDescription: 'Sheikh Khalifa Medical City (SKMC) is one of the largest general hospitals in Abu Dhabi, located in the Tourist Club Area. It handles a wide range of medical services including emergency care, specialist clinics, and surgical procedures. Our taxi service provides door-to-door transfers from any point in Abu Dhabi and from Dubai.',
        visitReasons: [
            'Emergency and urgent care visits',
            'Outpatient specialist clinics',
            'Scheduled procedures and admissions',
            'Visiting family or friends as inpatients',
            'Diagnostic tests and imaging',
            'Post-discharge follow-up consultations',
        ],
        travelTips: [
            'The hospital has multiple entrances; confirm which one corresponds to your clinic.',
            'Carry your Emirates ID and health insurance documentation.',
            'Morning appointments can coincide with heavy city traffic.',
            'For emergency transfers, inform your driver when booking.',
            'Return transfers can be arranged in advance or by calling upon departure.',
        ],
        faq: [
            { question: 'Where is Sheikh Khalifa Medical City located?', answer: 'It is located in the Tourist Club Area of Abu Dhabi, central and easily accessible from most parts of the city.' },
            { question: 'Can I get a taxi from Dubai to Sheikh Khalifa Medical City?', answer: 'Yes. We provide direct intercity transfers from any location in Dubai to SKMC in Abu Dhabi.' },
            { question: 'Is hotel pickup available in Abu Dhabi?', answer: 'Yes. We pick up from all major hotels, residences, and serviced apartments across Abu Dhabi.' },
            { question: 'Do you serve families visiting patients?', answer: 'Yes. Group vehicles are available to transport multiple family members together.' },
            { question: 'Is 24-hour service available for early or late transfers?', answer: 'Yes. We operate 24 hours a day, 7 days a week for all hospital transfers.' },
        ],
        relatedRoutes: [
            { name: 'Abu Dhabi Taxi Service', slug: '/city/abu-dhabi-taxi', type: 'city' },
            { name: 'Abu Dhabi Airport Taxi', slug: '/airport/abu-dhabi-airport-taxi', type: 'airport' },
            { name: 'Dubai to Abu Dhabi Taxi', slug: '/routes/dubai-to-abu-dhabi-taxi', type: 'route' },
        ],
    },

    // ─── Dubai ─────────────────────────────────────────────
    {
        slug: 'american-hospital-dubai',
        hospitalName: 'American Hospital Dubai',
        city: 'Dubai',
        cityCountry: 'United Arab Emirates',
        district: 'Oud Metha, Bur Dubai',
        approxTravelTime: '15–35 minutes from most Dubai areas',
        description: 'Taxi to American Hospital Dubai in Oud Metha. Reliable door-to-door transfers for medical appointments and hospital visits.',
        longDescription: 'American Hospital Dubai is a well-established healthcare facility located in Oud Metha, Bur Dubai. It offers a broad range of specialist services including oncology, cardiology, orthopedics, and maternity care. Our taxi service provides convenient transfers from any part of Dubai, including the airport, hotels, and residential districts.',
        visitReasons: [
            'Specialist and general practitioner appointments',
            'Oncology and cancer treatment visits',
            'Maternity care and obstetrics appointments',
            'Cardiology consultations and procedures',
            'Health screening and checkups',
            'Visiting family members receiving inpatient care',
        ],
        travelTips: [
            'Oud Metha area can have heavy traffic during morning and evening rush hours.',
            'Confirm your clinic or department location before your driver drops you off.',
            'Carry all relevant medical records and insurance documents.',
            'If visiting a patient, check visiting hours in advance.',
            'Arrange a return pickup if your appointment duration is uncertain.',
        ],
        faq: [
            { question: 'Where is American Hospital Dubai located?', answer: 'American Hospital is in the Oud Metha area of Bur Dubai, accessible from most parts of the city.' },
            { question: 'How long does the ride from Dubai Marina take?', answer: 'From Dubai Marina, the journey typically takes 25 to 35 minutes depending on traffic.' },
            { question: 'Can I get a transfer from Dubai Airport?', answer: 'Yes. We provide direct transfers from Dubai International Airport (DXB) to the hospital.' },
            { question: 'Can multiple family members travel together?', answer: 'Yes. SUVs and passenger vans are available for groups and families traveling together.' },
            { question: 'Is it possible to book a driver to wait during my appointment?', answer: 'Yes. Our drivers can wait for a fixed period. Please mention this requirement when booking.' },
        ],
        relatedRoutes: [
            { name: 'Dubai Taxi Service', slug: '/city/dubai-taxi', type: 'city' },
            { name: 'Dubai Airport Taxi', slug: '/airport/dubai-airport-taxi', type: 'airport' },
            { name: 'Dubai to Abu Dhabi Taxi', slug: '/routes/dubai-to-abu-dhabi-taxi', type: 'route' },
        ],
    },

    // ─── Doha ──────────────────────────────────────────────
    {
        slug: 'hamad-hospital-doha',
        hospitalName: 'Hamad General Hospital',
        city: 'Doha',
        cityCountry: 'Qatar',
        district: 'Al Rumaila, West Bay Area',
        approxTravelTime: '10–30 minutes from most Doha areas',
        description: 'Taxi to Hamad General Hospital in Doha. Door-to-door transfers for medical appointments, emergency visits, and patient transport in Qatar.',
        longDescription: 'Hamad General Hospital is Qatar\'s primary public hospital and one of the largest medical facilities in the Gulf region. Located near the West Bay area of Doha, it provides emergency and specialist care to residents and visitors alike. Our taxi service offers reliable, on-time transfers from any location in Doha, including the airport, hotels, and residential buildings.',
        visitReasons: [
            'Emergency care and urgent medical visits',
            'Scheduled specialist consultations',
            'Outpatient clinics and follow-up appointments',
            'Hospital admissions and discharge transfers',
            'Visiting patients in inpatient wards',
            'Diagnostic tests, imaging, and laboratory services',
        ],
        travelTips: [
            'Carry your QID (Qatar Identity Document) for patient registration.',
            'For emergencies, inform the driver to use the correct emergency entrance.',
            'Morning appointments often coincide with peak traffic in Doha.',
            'Confirm the specific clinic or building within the hospital campus.',
            'Book a return transfer in advance if your appointment duration is uncertain.',
        ],
        faq: [
            { question: 'How do I get to Hamad General Hospital in Doha?', answer: 'We offer door-to-door taxi transfers from any part of Doha directly to Hamad General Hospital.' },
            { question: 'Can I arrange an airport transfer to Hamad Hospital?', answer: 'Yes. We provide direct transfers from Hamad International Airport (DOH) to the hospital.' },
            { question: 'Is pickup available from The Pearl or Lusail City?', answer: 'Yes. We serve all Doha areas including The Pearl, Lusail, West Bay, and Al Waab.' },
            { question: 'Can family members travel with a patient?', answer: 'Yes. We have SUVs and vans suitable for patients traveling with family members or caregivers.' },
            { question: 'Is the service available on weekends?', answer: 'Yes. Our service is available 7 days a week, including weekends and public holidays.' },
        ],
        relatedRoutes: [
            { name: 'Doha Taxi Service', slug: '/city/doha-taxi', type: 'city' },
            { name: 'Doha Airport Taxi', slug: '/airport/doha-airport-taxi', type: 'airport' },
            { name: 'Doha to Riyadh Taxi', slug: '/routes/doha-to-riyadh-taxi', type: 'route' },
        ],
    },
    {
        slug: 'sidra-hospital-doha',
        hospitalName: 'Sidra Medicine',
        city: 'Doha',
        cityCountry: 'Qatar',
        district: 'Education City, Al Luqta',
        approxTravelTime: '15–35 minutes from central Doha',
        description: 'Taxi to Sidra Medicine in Doha. Transfers to Qatar\'s women\'s and children\'s hospital for appointments, specialist visits, and patient transfers.',
        longDescription: 'Sidra Medicine is Qatar\'s dedicated women\'s and children\'s hospital, located in Education City. It handles complex pediatric and maternity cases from across Qatar and the wider Gulf region. Our taxi service provides comfortable and reliable transfers from anywhere in Doha, with vehicles suited for families and patients with young children.',
        visitReasons: [
            'Pediatric specialist consultations',
            'Maternity care, obstetrics, and delivery preparation',
            'Newborn care and neonatal follow-ups',
            'Women\'s health and gynecology appointments',
            'Diagnostic and imaging services for children',
            'Visiting patients in the maternity and pediatric wards',
        ],
        travelTips: [
            'Education City can be congested during school hours.',
            'Sidra is a large campus; confirm the specific clinic number or building.',
            'Bring your child\'s health record if traveling for a pediatric visit.',
            'Strollers and child seats can be accommodated in our larger vehicles.',
            'Request a drop-off at the main entrance to minimize walking distance.',
        ],
        faq: [
            { question: 'Where is Sidra Medicine located in Doha?', answer: 'Sidra Medicine is in Education City, Al Luqta, in the western part of Doha.' },
            { question: 'Are vehicles available for families with young children?', answer: 'Yes. We have SUVs and vans with space for strollers, child seats, and multiple passengers.' },
            { question: 'Can I book an airport transfer to Sidra Medicine?', answer: 'Yes. We provide direct transfers from Hamad International Airport to Sidra Medicine.' },
            { question: 'How long is the drive from downtown Doha to Sidra?', answer: 'From central Doha, the journey typically takes 20 to 30 minutes depending on traffic.' },
            { question: 'Can the driver wait during a pediatric appointment?', answer: 'Yes. Waiting time can be arranged when you place your booking.' },
        ],
        relatedRoutes: [
            { name: 'Doha Taxi Service', slug: '/city/doha-taxi', type: 'city' },
            { name: 'Doha Airport Taxi', slug: '/airport/doha-airport-taxi', type: 'airport' },
            { name: 'Doha to Dammam Taxi', slug: '/routes/doha-to-dammam-taxi', type: 'route' },
        ],
    },

    // ─── Kuwait ─────────────────────────────────────────────
    {
        slug: 'al-sabah-hospital-kuwait',
        hospitalName: 'Al Sabah Hospital',
        city: 'Kuwait City',
        cityCountry: 'Kuwait',
        district: 'Sulaibikhat Area',
        approxTravelTime: '15–35 minutes from most Kuwait City areas',
        description: 'Taxi to Al Sabah Hospital in Kuwait City. Reliable door-to-door transfers for medical appointments, patient visits, and specialist consultations.',
        longDescription: 'Al Sabah Hospital is one of Kuwait\'s major government hospitals, located in the Sulaibikhat area. It provides general and specialist care including orthopedics, internal medicine, and outpatient services. Our taxi service offers comfortable and punctual transfers from homes, hotels, and Kuwait Airport to the hospital.',
        visitReasons: [
            'Scheduled outpatient appointments',
            'Specialist consultations and referrals',
            'Physical therapy and rehabilitation sessions',
            'Diagnostic tests and imaging procedures',
            'Patient admissions and discharge transfers',
            'Visiting patients in wards',
        ],
        travelTips: [
            'Carry your Civil ID or Iqama for hospital registration.',
            'Morning appointments are common; allow extra travel time for peak hours.',
            'The hospital has multiple gates — confirm the correct entry for your department.',
            'Bring all relevant medical reports and referral letters.',
            'Arrange a return pickup if the appointment length is uncertain.',
        ],
        faq: [
            { question: 'How do I get to Al Sabah Hospital from Kuwait City center?', answer: 'We provide direct taxi transfers from any location in Kuwait City to Al Sabah Hospital in Sulaibikhat.' },
            { question: 'Is pickup from Kuwait Airport available?', answer: 'Yes. We offer direct transfers from Kuwait International Airport to the hospital.' },
            { question: 'Do you serve patients in Hawalli or Salmiya?', answer: 'Yes. We provide pickups from all Kuwait City districts including Hawalli, Salmiya, and Farwaniya.' },
            { question: 'Can multiple family members travel together?', answer: 'Yes. We have SUVs and vans available for group and family travel.' },
            { question: 'Is the service available on Fridays?', answer: 'Yes. Our service operates every day of the week including Fridays and public holidays.' },
        ],
        relatedRoutes: [
            { name: 'Kuwait City Taxi Service', slug: '/city/kuwait-city-taxi', type: 'city' },
            { name: 'Kuwait Airport Taxi', slug: '/airport/kuwait-airport-taxi', type: 'airport' },
            { name: 'Kuwait to Dammam Taxi', slug: '/routes/kuwait-to-dammam-taxi', type: 'route' },
        ],
    },

    // ─── Muscat ─────────────────────────────────────────────
    {
        slug: 'royal-hospital-muscat',
        hospitalName: 'The Royal Hospital',
        city: 'Muscat',
        cityCountry: 'Oman',
        district: 'Bausher',
        approxTravelTime: '15–35 minutes from most Muscat areas',
        description: 'Taxi to The Royal Hospital in Muscat. Transfers for specialist appointments, admissions, and medical visits in Oman.',
        longDescription: 'The Royal Hospital in Muscat is a leading tertiary care institution operated by the Ministry of Health of Oman. Located in the Bausher district, it offers specialist services including oncology, cardiology, neurology, and transplant medicine. Our taxi service provides reliable door-to-door transfers from any location in Muscat, including Muscat International Airport.',
        visitReasons: [
            'Specialist and tertiary care consultations',
            'Oncology and cancer treatment appointments',
            'Cardiology and neurology specialist visits',
            'Hospital admissions and discharge transfers',
            'Diagnostic imaging and laboratory services',
            'Visiting family members receiving inpatient treatment',
        ],
        travelTips: [
            'Carry your Omani National ID or residency card for registration.',
            'The Royal Hospital has separate entrances for outpatient and emergency visits.',
            'Traffic on Sultan Qaboos Highway can increase travel time during rush hours.',
            'Confirm your clinic name or number before the driver drops you off.',
            'Arrange a return trip in advance for appointments with uncertain durations.',
        ],
        faq: [
            { question: 'Where is The Royal Hospital in Muscat?', answer: 'The Royal Hospital is located in the Bausher district of Muscat, accessible from Sultan Qaboos Highway.' },
            { question: 'Can I get a transfer from Muscat Airport to the hospital?', answer: 'Yes. We provide direct transfers from Muscat International Airport to The Royal Hospital.' },
            { question: 'Do you serve all areas of Muscat such as Qurum and Al Khuwair?', answer: 'Yes. We pick up from all Muscat areas including Qurum, Al Khuwair, Ruwi, and Madinat Sultan Qaboos.' },
            { question: 'Can families with multiple members travel together?', answer: 'Yes. We have SUVs and vans available for families accompanying patients.' },
            { question: 'Is the service available on weekends?', answer: 'Yes. Our taxi service is available every day, including weekends and public holidays.' },
        ],
        relatedRoutes: [
            { name: 'Muscat Airport Taxi', slug: '/airport/muscat-airport-taxi', type: 'airport' },
            { name: 'Muscat to Dubai Taxi', slug: '/routes/muscat-to-dubai-taxi', type: 'route' },
            { name: 'Dubai Taxi Service', slug: '/city/dubai-taxi', type: 'city' },
        ],
    },

    // ─── Bahrain ────────────────────────────────────────────
    {
        slug: 'salmaniya-hospital-manama',
        hospitalName: 'Salmaniya Medical Complex',
        city: 'Manama',
        cityCountry: 'Bahrain',
        district: 'Salmaniya District',
        approxTravelTime: '10–25 minutes from most Manama areas',
        description: 'Taxi to Salmaniya Medical Complex in Manama, Bahrain. Transfers for medical appointments, inpatient visits, and specialist consultations.',
        longDescription: 'Salmaniya Medical Complex is Bahrain\'s main government hospital and largest public healthcare facility, located in the Salmaniya district of Manama. It provides a wide range of medical services to residents and visitors. Our taxi service offers easy, door-to-door transfers from homes, hotels, and Bahrain International Airport.',
        visitReasons: [
            'General and specialist outpatient appointments',
            'Emergency and urgent medical consultations',
            'Hospital admissions and discharge transfers',
            'Diagnostic, laboratory, and imaging services',
            'Visiting patients in inpatient wards',
            'Post-operative recovery visits',
        ],
        travelTips: [
            'Carry your CPR (Central Population Registry) card or passport for registration.',
            'The hospital complex has multiple buildings — confirm the right section for your appointment.',
            'Traffic in central Manama can be slow during peak hours.',
            'Arrange a return pickup if you are unsure how long your visit will take.',
            'Inform your driver if you need drop-off at the emergency entrance.',
        ],
        faq: [
            { question: 'Where is Salmaniya Medical Complex in Manama?', answer: 'It is in the Salmaniya district of Manama, centrally located and accessible from most areas in Bahrain.' },
            { question: 'Can I get a transfer from Bahrain International Airport?', answer: 'Yes. We offer direct transfers from Bahrain International Airport to Salmaniya Medical Complex.' },
            { question: 'Do you also provide return transfers after the appointment?', answer: 'Yes. Return trips can be prebooked or arranged upon request when you are ready to leave the hospital.' },
            { question: 'Are group vehicles available for family hospital visits?', answer: 'Yes. We have SUVs and passenger vans suitable for families traveling to the hospital together.' },
            { question: 'Is service available on Bahrain public holidays?', answer: 'Yes. Our service operates throughout the year including on Bahraini public holidays.' },
        ],
        relatedRoutes: [
            { name: 'Bahrain to Saudi Arabia Taxi', slug: '/routes/bahrain-to-saudi-arabia-taxi', type: 'route' },
            { name: 'Dubai Taxi Service', slug: '/city/dubai-taxi', type: 'city' },
            { name: 'Riyadh Taxi Service', slug: '/city/riyadh-taxi', type: 'city' },
        ],
    },
];
