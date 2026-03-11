import React from 'react';

export default function PrivacyPolicy() {
    const lastUpdated = 'March 10, 2026';

    return (
        <div className="pt-32 pb-20 bg-surface-50">
            <div className="container-custom mx-auto max-w-4xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-surface-200">
                <h1 className="font-display text-4xl text-surface-900 mb-2">Privacy Policy</h1>
                <p className="text-surface-500 mb-8 font-medium">Last Updated: {lastUpdated}</p>

                <div className="prose prose-surface max-w-none space-y-8 text-surface-700 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-surface-900 mb-4">1. Introduction</h2>
                        <p>
                            Airport Travel Taxis ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our chauffeur and taxi services across the GCC countries (Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-surface-900 mb-4">2. Information We Collect</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Personal Identification:</strong> Name, email address, phone number (WhatsApp), and payment details.</li>
                            <li><strong>Trip Details:</strong> Pickup and drop-off locations, flight numbers, arrival times, and passenger count.</li>
                            <li><strong>Usage Data:</strong> Information about how you interact with our website to improve user experience.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-surface-900 mb-4">3. How We Use Your Information</h2>
                        <p>We use the collected information to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Process and confirm your travel bookings.</li>
                            <li>Send booking confirmations and driver details via WhatsApp or email.</li>
                            <li>Coordinate with our chauffeurs to ensure punctual pickup and navigation.</li>
                            <li>Improve our fleet management and customer service.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-surface-900 mb-4">4. Data Sharing & Security</h2>
                        <p>
                            We do not sell your personal data. We only share necessary trip details with the assigned chauffeur or regional partner to facilitate your transport. We implement high-standard security measures to protect your data from unauthorized access.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-surface-900 mb-4">5. Cross-Border Documentation</h2>
                        <p>
                            For cross-border transfers, we may require passenger identification details (Passport/ID) only as required by government border authorities to facilitate legal entry and exit procedures.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-surface-900 mb-4">6. Contact Us</h2>
                        <p>
                            If you have any questions regarding this Privacy Policy, please contact us at:
                            <br />
                            <strong>Email:</strong> info@airporttraveltaxis.com
                            <br />
                            <strong>WhatsApp:</strong> +966 56 948 7569
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
