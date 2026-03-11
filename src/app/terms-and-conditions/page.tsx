import React from 'react';

export default function TermsAndConditions() {
    const lastUpdated = 'March 10, 2026';

    return (
        <div className="pt-32 pb-20 bg-surface-50">
            <div className="container-custom mx-auto max-w-4xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-surface-200">
                <h1 className="font-display text-4xl text-surface-900 mb-2">Terms & Conditions</h1>
                <p className="text-surface-500 mb-8 font-medium">Last Updated: {lastUpdated}</p>

                <div className="prose prose-surface max-w-none space-y-8 text-surface-700 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-surface-900 mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using the services of Airport Travel Taxis ("we," "our," or "us"), you agree to be bound by these Terms and Conditions. Our services include pre-booked airport transfers, inter-city chauffeur services, and cross-border transportation across the GCC region.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-surface-900 mb-4">2. Booking & Confirmation</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>All bookings must be confirmed via our website, WhatsApp, or official email.</li>
                            <li>Bookings are only finalized once a confirmation message or email is sent from our side.</li>
                            <li>For airport pickups, passengers must provide correct flight numbers to enable flight tracking and timely chauffeur arrival.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-surface-900 mb-4">3. Waiting Time Policy</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Airport Pickups:</strong> We provide up to 60 minutes of complimentary waiting time after the flight has landed. Additional waiting time may incur extra charges.</li>
                            <li><strong>City Pickups:</strong> 15 minutes of free waiting time is provided at hotels or residences. Our chauffeur will attempt to contact you before departure.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-surface-900 mb-4">4. Cancellation & Refund</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Cancellations made 24 hours or more before the pickup time are eligible for a full refund (if prepaid) or no cancellation fee.</li>
                            <li>Cancellations within 24 hours of the scheduled service may incur a late cancellation fee.</li>
                            <li>"No-show" bookings (passenger doesn't arrive and doesn't communicate) are non-refundable.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-surface-900 mb-4">5. Cross-Border Transportation</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Passengers are solely responsible for ensuring they have valid travel documents (Passport, Visa, ID) required for entry and exit between GCC countries (e.g., UAE, Saudi Arabia, Bahrain, Qatar, Kuwait).</li>
                            <li>Airport Travel Taxis is not liable for entry refusal or delays caused by missing or invalid traveler documentation at any border port.</li>
                            <li>Our chauffeurs will assist with vehicle documentation at the border port, but passenger immigration is your responsibility.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-surface-900 mb-4">6. Passenger Behavior & Safety</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>All passengers must wear seatbelts at all times as per regional traffic laws.</li>
                            <li>Smoking, alcohol consumption, and any illegal substances are strictly prohibited in our vehicles.</li>
                            <li>The chauffeur reserves the right to refuse service to any passenger showing aggressive behavior or posing a safety risk.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-surface-900 mb-4">7. Limitation of Liability</h2>
                        <p>
                            Airport Travel Taxis is not liable for delays caused by extreme traffic conditions, weather, road accidents, or exceptional border processing times that are beyond our reasonable control.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-surface-900 mb-4">8. Contact Information</h2>
                        <p>
                            For support or inquiries regarding these terms, please contact:
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
