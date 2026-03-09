'use client';

import { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!formData.name || !formData.email || !formData.message) {
            setError('Please fill in all required fields.');
            return;
        }

        setIsSubmitting(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || 'Failed to send message');
            }

            setSubmitted(true);
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : 'Something went wrong. Please try WhatsApp instead.';
            setError(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

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
                            {submitted ? (
                                <div className="text-center py-12 animate-fade-in">
                                    <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-10 h-10" />
                                    </div>
                                    <h3 className="font-display text-2xl text-surface-900 mb-3">Message Sent!</h3>
                                    <p className="text-surface-600 mb-6">
                                        Thank you for reaching out. We&apos;ll respond within 24 hours. A confirmation email has been sent to <strong>{formData.email}</strong>.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                        <button
                                            onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                                            className="btn-secondary"
                                        >
                                            Send Another Message
                                        </button>
                                        <a
                                            href="https://wa.me/923057262461"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary inline-flex items-center justify-center gap-2"
                                        >
                                            💬 Chat on WhatsApp
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <h2 className="font-display text-2xl text-surface-900 mb-6">Send us a Message</h2>

                                    {error && (
                                        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                                            {error}
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="label-text">Full Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="input-field"
                                                    placeholder="Your name"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="label-text">Email *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="input-field"
                                                    placeholder="your@email.com"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="label-text">Phone</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="input-field"
                                                    placeholder="+971 XX XXX XXXX"
                                                />
                                            </div>
                                            <div>
                                                <label className="label-text">Subject</label>
                                                <select
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    className="input-field"
                                                >
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
                                            <label className="label-text">Message *</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="input-field min-h-[120px]"
                                                placeholder="How can we help you?"
                                                required
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div className="glass-card p-6">
                                <h3 className="font-display text-lg text-surface-900 mb-4">Contact Information</h3>
                                <ul className="space-y-4">
                                    {[
                                        { icon: '📞', label: 'Phone', value: 'Available on WhatsApp', href: 'https://wa.me/923057262461' },
                                        { icon: '💬', label: 'WhatsApp', value: 'Chat on WhatsApp', href: 'https://wa.me/923057262461' },
                                        { icon: '📧', label: 'General', value: 'info@airporttraveltaxis.com', href: 'mailto:info@airporttraveltaxis.com' },
                                        { icon: '🚖', label: 'Bookings', value: 'booking@airporttraveltaxis.com', href: 'mailto:booking@airporttraveltaxis.com' },
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
