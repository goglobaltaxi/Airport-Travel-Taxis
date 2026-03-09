import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | 24/7 Customer Support for Taxi Bookings',
    description: 'Get in touch with our team for inquiries regarding pre-booked airport transfers, intercity travel, or corporate transportation across the GCC countries.',
    openGraph: {
        title: 'Contact Us | 24/7 Customer Support for Taxi Bookings',
        description: 'Get in touch with our team for inquiries regarding pre-booked airport transfers, intercity travel, or corporate transportation across the GCC countries.',
        url: 'https://airporttraveltaxis.com/contact',
    },
    alternates: {
        canonical: 'https://airporttraveltaxis.com/contact',
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
