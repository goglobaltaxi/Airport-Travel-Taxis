import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
    title: {
        default: 'Airport Transfers & Pre-Booked Taxi | Professional Service',
        template: '%s | Professional Service',
    },
    description: 'Airport Travel Taxis provides pre-booked airport transfers, intercity travel, cross-border transfers and religious transportation across the GCC countries.',
    keywords: [
        'airport transfer riyadh',
        'airport transfer jeddah',
        'airport transfer dubai',
        'pre-booked taxi service',
        'umrah taxi service',
        'hajj transportation',
        'cross-border taxi gcc',
        'makkah transfer service',
        'madinah transfer service',
        'intercity taxi saudi arabia',
        'dammam airport transfer',
        'kuwait to saudi arabia taxi',
        'king fahd causeway transfer',
        'gcc airport taxi',
    ],
    metadataBase: new URL('https://airporttraveltaxis.com'),
    alternates: {
        canonical: 'https://airporttraveltaxis.com',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://airporttraveltaxis.com',
        siteName: 'Airport Travel Taxis',
        title: 'Airport Transfers & Pre-Booked Taxi Service | Professional Service',
        description: 'Book pre-booked airport transfers, intercity taxi, Umrah transfers, and cross-border travel across GCC countries. High-standard transportation service.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Airport Transfers & Pre-Booked Taxi | Airport Travel Taxis',
        description: 'Pre-booked airport and intercity taxi services across Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, and Oman.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: '',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <JsonLd />
            </head>
            <body>
                <Navbar />
                <main className="min-h-screen">{children}</main>
                <Footer />
                <WhatsAppButton />
            </body>
        </html>
    );
}
