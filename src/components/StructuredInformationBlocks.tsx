import React from 'react';
import Link from 'next/link';
import { Navigation, Info, Clock, CheckCircle2, Globe } from 'lucide-react';

interface StructuredInformationBlocksProps {
    startLocation: string;
    endLocation: string;
    type: string;
    travelTime: string;
    pickup: string;
    dropoff: string;
    relatedLinks: { name: string; url: string }[];
}

export default function StructuredInformationBlocks({ 
    startLocation, 
    endLocation, 
    type, 
    travelTime, 
    pickup, 
    dropoff,
    relatedLinks 
}: StructuredInformationBlocksProps) {
    return (
        <section className="section-padding bg-surface-50 border-y border-surface-200">
            <div className="container-custom mx-auto">
                <div className="mb-10 text-center lg:text-left">
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-2">
                        Structured Travel Information
                    </h2>
                    <p className="text-surface-600">Factual summary for travel coordination and assistance.</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-8">
                        {/* BLOCK 1: Quick Summary */}
                        <div className="bg-white border border-surface-200 rounded-2xl p-6 shadow-sm">
                            <h3 className="flex items-center gap-2 font-display text-xl text-surface-900 mb-4 tracking-tight uppercase italic">
                                <Info className="w-5 h-5 text-gold-500" />
                                Quick Summary
                            </h3>
                            <p className="text-surface-600 leading-relaxed font-medium">
                                Professional transportation between <strong>{startLocation}</strong> and <strong>{endLocation}</strong>. 
                                This service provides a direct <strong>{type}</strong> connection via road for individual and group travelers.
                            </p>
                        </div>

                        {/* BLOCK 2: Travel Facts */}
                        <div className="bg-white border border-surface-200 rounded-2xl p-6 shadow-sm">
                            <h3 className="flex items-center gap-2 font-display text-xl text-surface-900 mb-4 tracking-tight uppercase italic">
                                <Clock className="w-5 h-5 text-gold-500" />
                                Travel Facts
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-surface-700 font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                                    Estimated travel time: {travelTime}
                                </li>
                                <li className="flex items-center gap-3 text-surface-700 font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                                    Typical pickup: {pickup}
                                </li>
                                <li className="flex items-center gap-3 text-surface-700 font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                                    Typical drop-off: {dropoff}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* BLOCK 3: Common Travel Scenarios */}
                        <div className="bg-white border border-surface-200 rounded-2xl p-6 shadow-sm text-surface-900">
                            <h3 className="flex items-center gap-2 font-display text-xl mb-4 tracking-tight uppercase italic">
                                <Globe className="w-5 h-5 text-gold-500" />
                                Common Travel Scenarios
                            </h3>
                            <p className="text-surface-600 leading-relaxed font-medium mb-4">
                                This service is utilized by travelers for a variety of logistical requirements:
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { scenario: 'Airport Arrivals', context: 'Pickup for landing passengers' },
                                    { scenario: 'Business Trips', context: 'Professional meeting transport' },
                                    { scenario: 'Tourist Travel', context: 'Sightseeing and city visits' },
                                    { scenario: 'Cross-Border Trips', context: 'Regional land transit' },
                                ].map((item) => (
                                    <div key={item.scenario} className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1.5 text-surface-900 font-bold text-sm">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-500" />
                                            {item.scenario}
                                        </div>
                                        <span className="text-[11px] text-surface-500 ml-5">{item.context}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* BLOCK 4: Related Transportation Topics */}
                        <div className="bg-primary-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-800 rounded-full translate-x-1/2 -translate-y-1/2 opacity-20 group-hover:scale-110 transition-transform"></div>
                            <h3 className="font-display text-xl mb-6 relative z-10 italic uppercase tracking-tight">Related Transportation Topics</h3>
                            <div className="flex flex-wrap gap-2 relative z-10">
                                {relatedLinks.map((link) => (
                                    <Link 
                                        key={link.url} 
                                        href={link.url}
                                        className="text-[10px] font-bold uppercase tracking-widest bg-white/10 hover:bg-white/20 px-3.5 py-2 rounded-xl transition-all border border-white/10 hover:border-white/30"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
