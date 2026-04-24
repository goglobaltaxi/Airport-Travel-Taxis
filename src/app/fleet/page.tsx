import { Metadata } from 'next';
import FleetCard from '@/components/FleetCard';
import { vehicles } from '@/lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Our Vehicle Fleet | Professional Sedans, SUVs & Vans',
    description: 'Explore our high-standard vehicle fleet including Mercedes S-Class, Cadillac Escalade, GMC, and passenger vans for all your pre-booked travel needs.',
    openGraph: {
        title: 'Our Vehicle Fleet | Professional Sedans, SUVs & Vans',
        description: 'Explore our high-standard vehicle fleet including Mercedes S-Class, Cadillac Escalade, GMC, and passenger vans for all your pre-booked travel needs.',
        url: 'https://airporttraveltaxis.com/fleet',
    },
    alternates: {
        canonical: 'https://airporttraveltaxis.com/fleet',
    },
};

export default function FleetPage() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto text-center">
                    <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-4">
                        Our <span className="text-primary-600">Fleet</span>
                    </h1>
                    <p className="text-surface-600 max-w-2xl mx-auto text-lg">
                        Choose from our range of executive vehicles. Each car is meticulously maintained, thoroughly cleaned, and driven by a professional chauffeur.
                    </p>
                </div>
            </section>

            {/* Fleet Grid */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {vehicles.map((vehicle) => (
                            <FleetCard key={vehicle.id} vehicle={vehicle} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-8 text-center">
                        Vehicle <span className="text-primary-600">Comparison</span>
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full glass-card overflow-hidden">
                            <thead>
                                <tr className="border-b border-surface-300 bg-surface-100">
                                    <th className="text-left p-4 text-surface-600 font-medium text-sm">Feature</th>
                                    {vehicles.map((v) => (
                                        <th key={v.id} className="p-4 text-center text-surface-900 font-semibold text-sm">{v.category}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-surface-200">
                                    <td className="p-4 text-surface-600 text-sm">Passengers</td>
                                    {vehicles.map((v) => (
                                        <td key={v.id} className="p-4 text-center text-surface-900 text-sm">{v.passengers}</td>
                                    ))}
                                </tr>
                                <tr className="border-b border-surface-200">
                                    <td className="p-4 text-surface-600 text-sm">Luggage</td>
                                    {vehicles.map((v) => (
                                        <td key={v.id} className="p-4 text-center text-surface-900 text-sm">{v.luggage}</td>
                                    ))}
                                </tr>
                                <tr className="border-b border-surface-200">
                                    <td className="p-4 text-surface-600 text-sm">Price/km</td>
                                    {vehicles.map((v) => (
                                        <td key={v.id} className="p-4 text-center"><a href="/booking" className="btn-primary text-xs !px-3 !py-1 inline-block">Get Quote</a></td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="p-4 text-surface-600 text-sm">WiFi</td>
                                    {vehicles.map((v) => (
                                        <td key={v.id} className="p-4 text-center text-sm">
                                            {v.features.includes('WiFi') || v.features.includes('Free Wi-Fi') ? '✅' : '❌'}
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-primary-600 relative">
                <div className="container-custom mx-auto text-center">
                    <h2 className="font-display text-2xl lg:text-3xl text-white mb-4">Ready to Choose Your Ride?</h2>
                    <p className="text-primary-100 mb-8">Request a quote now and travel in comfort across the region.</p>
                    <Link href="/booking" className="btn-primary bg-white !text-primary-600 hover:!bg-surface-100">
                        Get Quote for a Vehicle
                    </Link>
                </div>
            </section>
        </div>
    );
}
