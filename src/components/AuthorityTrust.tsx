import React from 'react';
import { Globe, UserCheck, Car, ShieldCheck, MapPin, HelpCircle } from 'lucide-react';

interface AuthorityTrustProps {
    className?: string;
    section1?: boolean; // Company Overview
    section2?: boolean; // Professional Drivers
    section3?: boolean; // Vehicle Fleet Information
    section4?: boolean; // Safety and Travel Reliability
    section5?: boolean; // Service Availability
    section6?: boolean; // Traveler Support
}

export default function AuthorityTrust({
    className = '',
    section1 = true,
    section2 = true,
    section3 = true,
    section4 = true,
    section5 = true,
    section6 = true,
}: AuthorityTrustProps) {
    if (!section1 && !section2 && !section3 && !section4 && !section5 && !section6) return null;

    return (
        <section className={`section-padding bg-surface-50 border-t border-surface-200 ${className}`}>
            <div className="container-custom mx-auto">
                <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-8 text-center">
                    Service Information and Reliability
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section1 && (
                        <div className="glass-card p-6 shadow-sm border border-surface-100">
                            <h3 className="font-semibold text-surface-900 mb-3 flex items-center gap-2">
                                <Globe className="w-5 h-5 text-surface-700" />
                                Company Overview
                            </h3>
                            <p className="text-surface-600 text-sm leading-relaxed">
                                Airport Travel Taxis provides transportation across Saudi Arabia, United Arab Emirates, Qatar, Kuwait, Bahrain, and Oman. The service handles airport trips, city travel, and cross-border routes.
                            </p>
                        </div>
                    )}
                    {section2 && (
                        <div className="glass-card p-6 shadow-sm border border-surface-100">
                            <h3 className="font-semibold text-surface-900 mb-3 flex items-center gap-2">
                                <UserCheck className="w-5 h-5 text-surface-700" />
                                Professional Drivers
                            </h3>
                            <p className="text-surface-600 text-sm leading-relaxed">
                                Drivers are experienced and know local roads and airports. They assist with luggage and ensure reliable pickups.
                            </p>
                        </div>
                    )}
                    {section3 && (
                        <div className="glass-card p-6 shadow-sm border border-surface-100">
                            <h3 className="font-semibold text-surface-900 mb-3 flex items-center gap-2">
                                <Car className="w-5 h-5 text-surface-700" />
                                Vehicle Fleet Information
                            </h3>
                            <p className="text-surface-600 text-sm leading-relaxed mb-3">
                                The company operates a range of vehicles for different travel needs:
                            </p>
                            <ul className="text-surface-600 text-sm space-y-1 ml-4 list-disc marker:text-surface-400">
                                <li><strong>Individual travelers:</strong> Ford Taurus, Camry</li>
                                <li><strong>Families:</strong> Cadillac Escalade, GMC, Staria</li>
                                <li><strong>Corporate travelers:</strong> Mercedes S-Class, BMW, Genesis</li>
                                <li><strong>Groups:</strong> Mercedes Vito, Mercedes Sprinter, Hiace, Coaster, High-standard Bus</li>
                            </ul>
                        </div>
                    )}
                    {section4 && (
                        <div className="glass-card p-6 shadow-sm border border-surface-100">
                            <h3 className="font-semibold text-surface-900 mb-3 flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-surface-700" />
                                Safety and Travel Reliability
                            </h3>
                            <p className="text-surface-600 text-sm leading-relaxed">
                                Travel relies on licensed drivers and regular vehicle checks. The service ensures safe long-distance travel and professional airport pickups.
                            </p>
                        </div>
                    )}
                    {section5 && (
                        <div className="glass-card p-6 shadow-sm border border-surface-100">
                            <h3 className="font-semibold text-surface-900 mb-3 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-surface-700" />
                                Service Availability
                            </h3>
                            <p className="text-surface-600 text-sm leading-relaxed">
                                Services are available for airport pickups, hotel transfers, city travel, long-distance travel, and cross-border transfers.
                            </p>
                        </div>
                    )}
                    {section6 && (
                        <div className="glass-card p-6 shadow-sm border border-surface-100">
                            <h3 className="font-semibold text-surface-900 mb-3 flex items-center gap-2">
                                <HelpCircle className="w-5 h-5 text-surface-700" />
                                Traveler Support
                            </h3>
                            <p className="text-surface-600 text-sm leading-relaxed">
                                Travelers can contact the service to arrange transportation or to ask questions regarding their travel.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
