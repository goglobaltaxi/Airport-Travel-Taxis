const fs = require('fs');
const path = require('path');

const appDir = 'c:/Users/Latitude 7420/Downloads/airportt ravel taxis/src/app';
const folders = fs.readdirSync(appDir).filter(f => f.startsWith('taxi-from-') && !f.includes('['));

folders.forEach(folder => {
    const filePath = path.join(appDir, folder, 'page.tsx');
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // Parse origin and destination from folder name
    // taxi-from-riyadh-to-kuwait-city -> origin: Riyadh, destination: Kuwait City
    const parts = folder.replace('taxi-from-', '').split('-to-');
    if (parts.length !== 2) return;

    const capitalize = (str) => str.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const origin = capitalize(parts[0]);
    const destination = capitalize(parts[1]);

    const pageTitle = `Taxi from ${origin} to ${destination} | Book Online`;
    const pageDescription = `Book a professional taxi from ${origin} to ${destination}. We provide safe, pre-booked 24/7 transportation with professional chauffeurs across the GCC countries.`;

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
    } else {
        console.log(`Metadata block not found in ${folder}`);
    }
});
