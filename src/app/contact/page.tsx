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

export default function ContactPage() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto text-center">
                    <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-4">
                        Get in <span className="text-primary-600">Touch</span>
                    </h1>
                    <p className="text-surface-600 max-w-2xl mx-auto text-lg">
                        Have questions or need to book a ride? We&apos;re here to help 24/7.
                    </p>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="glass-card p-8">
                            <h2 className="font-display text-2xl text-surface-900 mb-6">Send us a Message</h2>
                            <form className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="label-text">Full Name</label>
                                        <input type="text" className="input-field" placeholder="Your name" />
                                    </div>
                                    <div>
                                        <label className="label-text">Email</label>
                                        <input type="email" className="input-field" placeholder="your@email.com" />
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="label-text">Phone</label>
                                        <input type="tel" className="input-field" placeholder="+971 XX XXX XXXX" />
                                    </div>
                                    <div>
                                        <label className="label-text">Subject</label>
                                        <select className="input-field">
                                            <option value="">Select subject</option>
                                            <option>Booking Inquiry</option>
                                            <option>Corporate Account</option>
                                            <option>Partnership</option>
                                            <option>Complaint</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="label-text">Message</label>
                                    <textarea className="input-field min-h-[120px]" placeholder="How can we help you?" />
                                </div>
                                <button type="submit" className="btn-primary w-full">Send Message</button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div className="glass-card p-6">
                                <h3 className="font-display text-lg text-surface-900 mb-4">Contact Information</h3>
                                <ul className="space-y-4">
                                    {[
                                        { icon: '📞', label: 'Phone', value: 'Available on WhatsApp', href: 'https://wa.me/923057262461' },
                                        { icon: '💬', label: 'WhatsApp', value: 'Chat on WhatsApp', href: 'https://wa.me/923057262461' },
                                        { icon: '📧', label: 'Email', value: 'info@airporttraveltaxis.com', href: 'mailto:info@airporttraveltaxis.com' },
                                        { icon: '🕐', label: 'Hours', value: '24/7 - 365 days', href: '#' },
                                    ].map((item) => (
                                        <li key={item.label}>
                                            <a href={item.href} className="flex items-start gap-3 group">
                                                <span className="text-xl">{item.icon}</span>
                                                <div>
                                                    <p className="text-sm text-surface-500">{item.label}</p>
                                                    <p className="text-surface-900 group-hover:text-primary-600 transition-colors">{item.value}</p>
                                                </div>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="glass-card p-6">
                                <h3 className="font-display text-lg text-surface-900 mb-4">Office Locations</h3>
                                <div className="space-y-4">
                                    {[
                                        { city: 'Dubai, UAE', address: 'Business Bay, Marasi Drive Tower' },
                                        { city: 'Riyadh, KSA', address: 'King Fahd Road, Olaya District' },
                                        { city: 'Doha, Qatar', address: 'West Bay, Al Corniche Street' },
                                    ].map((office) => (
                                        <div key={office.city} className="flex items-start gap-3">
                                            <span className="text-xl">📍</span>
                                            <div>
                                                <p className="font-medium text-surface-900">{office.city}</p>
                                                <p className="text-sm text-surface-600">{office.address}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="glass-card p-6 bg-primary-50 border-primary-200">
                                <h3 className="font-display text-lg text-surface-900 mb-2">Corporate Inquiries</h3>
                                <p className="text-surface-600 text-sm mb-4">
                                    Looking for a corporate transportation solution? We offer tailored packages for businesses.
                                </p>
                                <a href="mailto:corporate@airporttraveltaxis.com" className="btn-primary text-center block text-sm">
                                    Contact Corporate Team
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
