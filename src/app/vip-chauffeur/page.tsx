import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'VIP Chauffeur Service | Executive Travel & Transfers',
    description: 'Experience our VIP chauffeur service for executive travel. Professional drivers and executive vehicles for all your pre-booked transportation needs in the GCC.',
    openGraph: {
        title: 'VIP Chauffeur Service | Executive Travel & Transfers',
        description: 'Experience our VIP chauffeur service for executive travel. Professional drivers and executive vehicles for all your pre-booked transportation needs in the GCC.',
        url: 'https://airporttraveltaxis.com/vip-chauffeur',
    },
    alternates: {
        canonical: 'https://airporttraveltaxis.com/vip-chauffeur',
    },
};

export default function VIPChauffeurPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="section-padding bg-surface-900 text-white pb-16">
                <div className="container-custom mx-auto max-w-4xl text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-surface-800 text-surface-300 text-sm font-semibold mb-6 border border-surface-700">
                        VIP Service
                    </span>
                    <h1 className="font-display text-4xl lg:text-5xl lg:leading-tight text-white mb-6">
                        Discreet & Professional <span className="text-primary-500">VIP Chauffeurs</span>
                    </h1>
                    <p className="text-xl text-surface-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                        For executives, diplomats, and high-net-worth individuals requiring absolute reliability, security, and discretion in their ground transportation across the Gulf region.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/booking" className="btn-primary py-3 px-8 text-lg">
                            Get Quote for Hourly Standby
                        </Link>
                    </div>
                </div>
            </section>

             {/* Description Section */}
             <section className="section-padding bg-white">
                <div className="container-custom mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="bg-surface-100 rounded-3xl p-8 lg:p-12 border border-surface-200">
                            <h3 className="font-display text-2xl font-bold text-surface-900 mb-6">The Gulf Standard in VIP Travel</h3>
                            <p className="text-surface-700 leading-relaxed mb-6">
                                We go beyond simple A-to-B transportation. Our VIP VIP Chauffeur tier is designed to act as your mobile office and secure transit zone. From the moment you land at King Khalid International Airport in Riyadh or DXB in Dubai, your dedicated chauffeur manages the logistics.
                            </p>
                            <p className="text-surface-700 leading-relaxed">
                                Our VIP chauffeurs sign strict NDAs, are heavily vetted through background checks, and are trained in defensive driving protocols for ultimate peace of mind.
                            </p>
                        </div>
                        
                        <div>
                            <h2 className="font-display text-3xl font-bold text-surface-900 mb-8">What distinguishes our service?</h2>
                            
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                                        <span className="text-xl">🤫</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-surface-900 mb-1">Absolute Discretion</h4>
                                        <p className="text-surface-600 text-sm leading-relaxed">Confidentiality is our promise. All VIP transfers operate under strict Non-Disclosure Agreements, ensuring your business remains private.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                                        <span className="text-xl">🚗</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-surface-900 mb-1">Latest VIP Fleets</h4>
                                        <p className="text-surface-600 text-sm leading-relaxed">We utilize top-tier vehicles such as the latest Mercedes S-Class, BMW 7-Series, and executive SUVs with privacy partitioning.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                                        <span className="text-xl">🤵</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-surface-900 mb-1">Executive Presence</h4>
                                        <p className="text-surface-600 text-sm leading-relaxed">Our chauffeurs are immaculately presented in dark suits, highly knowledgeable of local routes, and speak fluent English / Arabic.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
