export default function JsonLd() {
    const schema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'LocalBusiness',
                '@id': 'https://airporttraveltaxis.com/#organization',
                name: 'Airport Travel Taxis',
                url: 'https://airporttraveltaxis.com',
                description: 'Pre-booked airport transfers, intercity travel, cross-border transfers, Umrah transportation, and Hajj transfers across Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman.',
                areaServed: [
                    { '@type': 'Country', name: 'Saudi Arabia' },
                    { '@type': 'Country', name: 'United Arab Emirates' },
                    { '@type': 'Country', name: 'Qatar' },
                    { '@type': 'Country', name: 'Kuwait' },
                    { '@type': 'Country', name: 'Bahrain' },
                    { '@type': 'Country', name: 'Oman' },
                ],
                serviceType: 'Transportation',
                contactPoint: {
                    '@type': 'ContactPoint',
                    contactType: 'customer service',
                    availableLanguage: 'English',
                },
                sameAs: [
                    'https://airporttraveltaxis.com',
                ],
            },
            {
                '@type': 'TaxiService',
                '@id': 'https://airporttraveltaxis.com/#taxiservice',
                name: 'Airport Travel Taxis – Pre-Booked Transfers',
                provider: { '@id': 'https://airporttraveltaxis.com/#organization' },
                serviceType: 'Pre-booked airport and intercity taxi transfers',
                areaServed: 'GCC Countries',
                description: 'Pre-booked taxi and transfer services for airport pickups, intercity travel, cross-border journeys, and pilgrim transportation across the GCC.',
                availableChannel: {
                    '@type': 'ServiceChannel',
                    serviceUrl: 'https://airporttraveltaxis.com/booking',
                },
            },
            {
                '@type': 'WebSite',
                '@id': 'https://airporttraveltaxis.com/#website',
                url: 'https://airporttraveltaxis.com',
                name: 'Airport Travel Taxis',
                publisher: { '@id': 'https://airporttraveltaxis.com/#organization' },
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
