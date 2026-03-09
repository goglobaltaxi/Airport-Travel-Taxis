import { Metadata } from 'next';
import Link from 'next/link';
import { stats, gccCountries } from '@/lib/data';

export const metadata: Metadata = {
    title: 'About Us | Professional Airport Transfers & Taxi Service',
    description: 'Learn about Airport Travel Taxis, your trusted provider for pre-booked airport transfers, intercity travel, and cross-border transportation across the GCC.',
    openGraph: {
        title: 'About Us | Professional Airport Transfers & Taxi Service',
        description: 'Learn about Airport Travel Taxis, your trusted provider for pre-booked airport transfers, intercity travel, and cross-border transportation across the GCC.',
        url: 'https://airporttraveltaxis.com/about',
    },
    alternates: {
        canonical: 'https://airporttraveltaxis.com/about',
    },
};

export default function AboutPage() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-6">
                            About <span className="text-primary-600">Airport Travel Taxis</span>
                        </h1>
                        <p className="text-lg text-surface-600 leading-relaxed">
                            We are one of the Gulf's professional transport and airport transfer service, connecting 6 countries with scheduled taxi, chauffeur, and transfer services. Our mission is to make travel across the Gulf region seamless, comfortable, and reliable.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat) => (
                            <div key={stat.label} className="glass-card p-6 text-center">
                                <p className="font-display text-3xl lg:text-4xl text-primary-600 mb-2">{stat.value}</p>
                                <p className="text-surface-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="font-display text-3xl text-surface-900 mb-6">
                                Our <span className="text-primary-600">Story</span>
                            </h2>
                            <div className="space-y-4 text-surface-600 leading-relaxed mb-8">
                                <p>
                                    Airport Travel Taxis was founded with a simple vision: to create a unified, professional transportation network that connects all six Gulf Cooperation Council countries seamlessly.
                                </p>
                                <p>
                                    Starting with airport transfer services in Dubai, we quickly expanded to cover all major cities and airports across the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain. Today, we operate a fleet of 500+ vehicles ranging from economy sedans to executive VIP cars.
                                </p>
                                <p>
                                    What sets us apart is our specialization in cross-border travel. Our drivers are certified experts on every official Saudi border port — including Al Nuwaiseeb &amp; Al Khafji (Saudi–Kuwait), the King Fahd Causeway (Saudi–Bahrain), Salwa (Saudi–Qatar), and Al Batha (Saudi–UAE). We handle all documentation, customs clearance, and formalities so you travel without stress.
                                </p>
                            </div>

                            <div className="glass-card p-6 bg-white">
                                <h3 className="font-display text-xl text-surface-900 mb-5 flex items-center gap-2">
                                    <span className="bg-primary-100 text-primary-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">🎓</span>
                                    Credentials & Awards
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        { icon: '🏆', text: 'Leading Gulf Fleet Operator 2024' },
                                        { icon: '🛡️', text: 'ISO 45001 Transport Safety Certified' },
                                        { icon: '⭐', text: '4.9/5 Average Rating (10,000+ Reviews)' },
                                        { icon: '✅', text: 'RTA Dubai & TGA Saudi Arabia Approved' },
                                    ].map((item) => (
                                        <li key={item.text} className="flex items-center gap-3 bg-surface-50 p-2.5 rounded-lg font-medium text-sm text-surface-800">
                                            <span className="text-lg">{item.icon}</span>
                                            <span>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="glass-card p-8 sticky top-24">
                            <h3 className="font-display text-2xl text-surface-900 mb-6">Why Choose Us?</h3>
                            <ul className="space-y-5">
                                {[
                                    { icon: '🌍', text: 'Covering Saudi Arabia, UAE, Kuwait, Qatar, and Bahrain', desc: 'Seamless travel across borders' },
                                    { icon: '🚗', text: '500+ professional vehicles', desc: 'From business sedans to executive VIP cars' },
                                    { icon: '👔', text: 'Professional, vetted chauffeurs', desc: 'Highly trained and experienced' },
                                    { icon: '💰', text: 'Transparent Quotes', desc: 'Clear and upfront quotes for all routes' },
                                    { icon: '🛂', text: 'Cross-border expertise', desc: 'Hassle-free customs and border crossing' },
                                    { icon: '⏰', text: '24/7 customer support', desc: 'Always available when you need us' },
                                ].map((item) => (
                                    <li key={item.text} className="flex items-start gap-4">
                                        <span className="text-2xl mt-1">{item.icon}</span>
                                        <div>
                                            <p className="font-semibold text-surface-900 text-lg">{item.text}</p>
                                            <p className="text-surface-500 text-sm">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coverage */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto text-center">
                    <h2 className="font-display text-3xl text-surface-900 mb-4">
                        We Serve the Entire <span className="text-primary-600">Gulf region</span>
                    </h2>
                    <p className="text-surface-600 mb-10 max-w-2xl mx-auto">
                        Our network spans across all six Gulf countries, connecting major cities, airports, and business districts.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {gccCountries.map((country) => (
                            <div key={country.code} className="glass-card-hover p-6 text-center">
                                <span className="block mb-3 flex justify-center"><img src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`} width={40} height={30} alt={`${country.name} flag`} className="rounded-md shadow-sm" /></span>
                                <p className="font-semibold text-surface-900 text-sm">{country.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-primary-600">
                <div className="container-custom mx-auto text-center">
                    <h2 className="font-display text-2xl lg:text-3xl text-white mb-4">Ready to Experience Professional Travel?</h2>
                    <p className="text-primary-100 mb-8">Join thousands of satisfied customers across the region.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking" className="btn-primary bg-white !text-primary-600 hover:!bg-surface-100">Get a Quote</Link>
                        <Link href="/contact" className="btn-secondary !border-white/40 !text-white hover:!bg-white/10">Contact Us</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
