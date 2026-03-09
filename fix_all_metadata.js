const fs = require('fs');
const path = require('path');

const appDir = 'c:/Users/Latitude 7420/Downloads/airportt ravel taxis/src/app';
const folders = fs.readdirSync(appDir).filter(f => {
    // Exclude dynamic folders and already fixed taxi-from folders
    return !f.includes('[') && !f.startsWith('taxi-from-') && fs.existsSync(path.join(appDir, f, 'page.tsx'));
});

folders.forEach(folder => {
    const filePath = path.join(appDir, folder, 'page.tsx');
    let content = fs.readFileSync(filePath, 'utf8');

    const capitalize = (str) => str.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    
    let pageTitle = '';
    let pageDescription = '';

    if (folder.startsWith('hajj-taxi-')) {
        const route = capitalize(folder.replace('hajj-taxi-', ''));
        pageTitle = `Hajj Taxi: ${route} | Pre-Booked Transfer Service`;
        pageDescription = `Book a professional Hajj taxi for the ${route} route. We provide safe, pre-booked 24/7 transportation with professional chauffeurs for pilgrims during Hajj.`;
    } else if (folder.startsWith('umrah-travel-guide-')) {
        const topic = capitalize(folder.replace('umrah-travel-guide-', ''));
        pageTitle = `Umrah Travel Guide: ${topic} | Airport Travel Taxis`;
        pageDescription = `Comprehensive Umrah travel guide focusing on ${topic}. Learn about pre-booked transportation, routes, and travel tips for a smooth pilgrimage experience.`;
    } else if (folder.startsWith('hajj-travel-guide-')) {
        const topic = capitalize(folder.replace('hajj-travel-guide-', ''));
        pageTitle = `Hajj Travel Guide: ${topic} | Airport Travel Taxis`;
        pageDescription = `Essential Hajj travel guide for ${topic}. Discover reliable pre-booked transportation options and logistics for your pilgrimage to the holy cities.`;
    } else if (folder.startsWith('taxi-to-')) {
        const destination = capitalize(folder.replace('taxi-to-', ''));
        pageTitle = `Taxi to ${destination} | Professional Pre-Booked Service`;
        pageDescription = `Book a professional taxi to ${destination}. We provide safe, pre-booked 24/7 transportation with professional chauffeurs across Saudi Arabia and the GCC.`;
    } else {
        // General pages
        switch(folder) {
            case 'about':
                pageTitle = 'About Us | Professional Airport Transfers & Taxi Service';
                pageDescription = 'Learn about Airport Travel Taxis, your trusted provider for pre-booked airport transfers, intercity travel, and cross-border transportation across the GCC.';
                break;
            case 'fleet':
                pageTitle = 'Our Vehicle Fleet | Professional Sedans, SUVs & Vans';
                pageDescription = 'Explore our high-standard vehicle fleet including Mercedes S-Class, Cadillac Escalade, GMC, and passenger vans for all your pre-booked travel needs.';
                break;
            case 'contact':
                pageTitle = 'Contact Us | 24/7 Customer Support for Taxi Bookings';
                pageDescription = 'Get in touch with our team for inquiries regarding pre-booked airport transfers, intercity travel, or corporate transportation across the GCC countries.';
                break;
            case 'booking':
                pageTitle = 'Book Your Taxi Online | Pre-Booked Airport Transfers';
                pageDescription = 'Effortlessly book your professional taxi transfer online. We offer 24/7 pre-booked services for airports, cities, and cross-border travel in the GCC.';
                break;
            case 'drive-with-us':
                pageTitle = 'Drive With Us | Join Our Professional Chauffeur Team';
                pageDescription = 'Join Airport Travel Taxis as a professional driver. We offer opportunities for experienced chauffeurs to provide high-standard transportation across the GCC.';
                break;
            case 'events-and-weddings':
                pageTitle = 'Event & Wedding Transportation | Professional Chauffeurs';
                pageDescription = 'Reliable transportation for events and weddings. We provide coordinated pre-booked group transfers and executive car services for your special occasions.';
                break;
            case 'vip-chauffeur':
                pageTitle = 'VIP Chauffeur Service | Executive Travel & Transfers';
                pageDescription = 'Experience our VIP chauffeur service for executive travel. Professional drivers and premium vehicles for all your pre-booked transportation needs in the GCC.';
                break;
            case 'blog':
                pageTitle = 'Travel Blog | Tips for Airport Transfers & GCC Travel';
                pageDescription = 'Read our travel blog for the latest tips on airport transfers, intercity travel, and navigating cross-border journeys across Saudi Arabia and the GCC.';
                break;
            default:
                return; // Skip if not recognized
        }
    }

    if (!pageTitle || !pageDescription) return;

    // Replace metadata block
    const metadataRegex = /export const metadata: Metadata = \{[\s\S]*?\};/;
    const newMetadata = `export const metadata: Metadata = {
    title: '${pageTitle}',
    description: '${pageDescription}',
    openGraph: {
        title: '${pageTitle}',
        description: '${pageDescription}',
        url: 'https://airporttraveltaxis.com/${folder}',
    },
    alternates: {
        canonical: 'https://airporttraveltaxis.com/${folder}',
    },
};`;

    if (content.match(metadataRegex)) {
        content = content.replace(metadataRegex, newMetadata);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated metadata for ${folder}`);
    }
});
