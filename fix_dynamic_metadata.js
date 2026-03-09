const fs = require('fs');
const path = require('path');

const appDir = 'c:/Users/Latitude 7420/Downloads/airportt ravel taxis/src/app';

// List of dynamic template files to update
const templates = [
    'taxi-to-landmark/[slug]/page.tsx',
    'taxi-to-mall/[slug]/page.tsx',
    'taxi-to-hospital/[slug]/page.tsx',
    'taxi-to-government/[slug]/page.tsx',
    'taxi-to-university/[slug]/page.tsx',
    'taxi-to-stadium/[slug]/page.tsx',
    'taxi-to-station/[slug]/page.tsx',
    'taxi-to-port/[slug]/page.tsx',
    'taxi-to-terminal/[slug]/page.tsx',
    'taxi-to-embassy/[slug]/page.tsx',
    'taxi-to-business/[slug]/page.tsx',
    'taxi-to-event/[slug]/page.tsx',
    'taxi-to-destination/[slug]/page.tsx',
    'taxi-to-attraction/[slug]/page.tsx',
    'taxi-service-[area]-[city]/page.tsx',
    'best-way-to-travel-[slug]/page.tsx',
    'corporate-chauffeur-[city]/page.tsx',
    'gcc-travel-[slug]/page.tsx',
    'travel-guide-[topic]/page.tsx'
];

templates.forEach(relPath => {
    const filePath = path.join(appDir, relPath);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // Pattern for generateMetadata
    const metadataRegex = /export async function generateMetadata[\s\S]*?return \{[\s\S]*?\};?\s*?\}/;

    let newMetadata = '';

    if (relPath.includes('taxi-to-')) {
        const type = relPath.split('/')[0].replace('taxi-to-', '');
        const dataVar = type === 'landmark' ? 'landmarkPages' : 
                        type === 'mall' ? 'mallPages' :
                        type === 'hospital' ? 'hospitalPages' :
                        type === 'government' ? 'governmentPages' :
                        type === 'university' ? 'universityPages' :
                        type === 'stadium' ? 'stadiumPages' :
                        type === 'station' ? 'stationPages' :
                        type === 'port' ? 'portPages' :
                        type === 'terminal' ? 'terminalPages' :
                        type === 'embassy' ? 'embassyPages' :
                        type === 'business' ? 'businessPages' :
                        type === 'event' ? 'eventPages' :
                        type === 'destination' ? 'destinationPages' :
                        'attractionPages';
        
        const nameProp = type === 'landmark' ? 'landmarkName' : 'name';

        newMetadata = `export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const page = ${dataVar}.find((p) => p.slug === params.slug);
    if (!page) return {};
    
    const pageTitle = \`Taxi to \${page.${nameProp}} in \${page.city} | Professional Service\`;
    const pageDescription = \`Book a professional taxi to \${page.${nameProp}} in \${page.city}. We provide safe, pre-booked 24/7 transportation with professional chauffeurs for sightseeing.\`;
    
    return {
        title: pageTitle,
        description: pageDescription,
        openGraph: {
            title: pageTitle,
            description: pageDescription,
            url: \`https://airporttraveltaxis.com/taxi-to-${type}/\${page.slug}\`,
        },
        alternates: {
            canonical: \`https://airporttraveltaxis.com/taxi-to-${type}/\${page.slug}\`,
        },
    };
}`;
    } else if (relPath === 'taxi-service-[area]-[city]/page.tsx') {
        newMetadata = `export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = \`\${params.area}-\${params.city}\`;
    const page = districtTaxiPages.find((p) => p.slug === slug);
    if (!page) return {};

    const pageTitle = \`Taxi Service in \${page.area}, \${page.city} | Pre-Book Online\`;
    const pageDescription = \`Reliable, pre-booked taxi service in \${page.area}, \${page.city}. We provide scheduled 24/7 airport transfers and intercity travel with professional drivers.\`;

    return {
        title: pageTitle,
        description: pageDescription,
        openGraph: {
            title: pageTitle,
            description: pageDescription,
            url: \`https://airporttraveltaxis.com/taxi-service-\${page.slug}\`,
        },
        alternates: {
            canonical: \`https://airporttraveltaxis.com/taxi-service-\${page.slug}\`,
        },
    };
}`;
    }

    if (newMetadata && content.match(metadataRegex)) {
        content = content.replace(metadataRegex, newMetadata);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated dynamic metadata for ${relPath}`);
    }
});
