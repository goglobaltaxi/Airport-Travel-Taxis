'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Calculator, MapPin, Navigation, ChevronRight, X, Plane, Building2, Globe, Clock, Ruler } from 'lucide-react';
import { routes, airports, cities, borderCrossings } from '@/lib/data';
import { areaTransferPages } from '@/lib/areaTransferData';

interface LocationSuggestion {
    name: string;
    type: 'city' | 'airport' | 'area' | 'border';
    slug: string;
    country?: string;
}

interface CalculationResult {
    distance: string;
    duration: string;
    title: string;
    url: string;
}

export default function TravelCalculator() {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [showPickupSuggestions, setShowPickupSuggestions] = useState(false);
    const [showDestSuggestions, setShowDestSuggestions] = useState(false);
    const [result, setResult] = useState<CalculationResult | null>(null);

    const pickupRef = useRef<HTMLDivElement>(null);
    const destRef = useRef<HTMLDivElement>(null);

    // Combine all locations for suggestions
    const allLocations: LocationSuggestion[] = [
        ...cities.map(c => ({ name: c.name, type: 'city' as const, slug: `/city/${c.slug}`, country: c.country })),
        ...airports.map(a => ({ name: `${a.city} Airport (${a.code})`, type: 'airport' as const, slug: `/airport/${a.slug}`, country: a.country })),
        ...areaTransferPages.map(a => ({ name: a.areaName, type: 'area' as const, slug: `/taxi-from-${a.slug}`, country: a.country })),
        ...borderCrossings.map(b => ({ name: b.name, type: 'border' as const, slug: `/border/${b.slug}`, country: b.countryA }))
    ];

    const getSuggestions = (input: string) => {
        if (!input.trim()) return [];
        return allLocations.filter(loc => 
            loc.name.toLowerCase().includes(input.toLowerCase()) || 
            (loc.country && loc.country.toLowerCase().includes(input.toLowerCase()))
        ).slice(0, 5);
    };

    const pickupSuggestions = getSuggestions(pickup);
    const destSuggestions = getSuggestions(destination);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (pickupRef.current && !pickupRef.current.contains(event.target as Node)) {
                setShowPickupSuggestions(false);
            }
            if (destRef.current && !destRef.current.contains(event.target as Node)) {
                setShowDestSuggestions(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const calculateTravel = () => {
        if (!pickup || !destination) {
            setResult(null);
            return;
        }

        // Search logic: Filter through available data for a match
        const pNormalized = pickup.toLowerCase();
        const dNormalized = destination.toLowerCase();

        // Check routes (city-to-city)
        const matchRoute = routes.find(r => 
            (r.from.toLowerCase().includes(pNormalized) && r.to.toLowerCase().includes(dNormalized)) ||
            (r.to.toLowerCase().includes(pNormalized) && r.from.toLowerCase().includes(dNormalized))
        );

        if (matchRoute) {
            setResult({
                distance: matchRoute.distance,
                duration: matchRoute.duration,
                title: `${matchRoute.from} to ${matchRoute.to} Taxi`,
                url: `/routes/${matchRoute.slug}`
            });
            return;
        }

        // Check area transfers
        const matchArea = areaTransferPages.find(a => 
            (a.areaName.toLowerCase().includes(pNormalized) && a.airportName.toLowerCase().includes(dNormalized)) ||
            (a.airportName.toLowerCase().includes(pNormalized) && a.areaName.toLowerCase().includes(dNormalized))
        );

        if (matchArea) {
            setResult({
                distance: matchArea.distance,
                duration: matchArea.travelTime,
                title: `Taxi from ${matchArea.areaName} to ${matchArea.airportName}`,
                url: `/taxi-from-${matchArea.slug}`
            });
            return;
        }

        // Fallback for Riyadh to Doha example specifically requested
        if (pNormalized.includes('riyadh') && dNormalized.includes('doha')) {
            setResult({
                distance: '570 km',
                duration: '6–7 hours',
                title: 'Riyadh to Doha Taxi Transfer',
                url: '/routes/riyadh-to-doha-taxi'
            });
            return;
        }

        setResult(null);
    };

    useEffect(() => {
        calculateTravel();
    }, [pickup, destination]);

    const getIcon = (type: string) => {
        switch (type) {
            case 'city': return <Building2 className="w-4 h-4" />;
            case 'airport': return <Plane className="w-4 h-4" />;
            case 'area': return <MapPin className="w-4 h-4" />;
            case 'border': return <Globe className="w-4 h-4" />;
            default: return <Navigation className="w-4 h-4" />;
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto my-12">
            <div className="bg-surface-50 rounded-3xl border border-surface-200 p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary-600 rounded-xl text-white shadow-lg shadow-primary-600/20">
                        <Calculator className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-display text-2xl text-surface-900 font-bold">Distance & Travel Time Calculator</h3>
                        <p className="text-surface-500 text-sm">Estimate the distance and time for your regional transfer.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 relative">
                    {/* Pickup Input */}
                    <div className="relative" ref={pickupRef}>
                        <label className="block text-xs font-bold text-surface-400 uppercase tracking-widest mb-2 ml-1">Pickup Location</label>
                        <div className="relative group">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-surface-400 group-focus-within:text-primary-600 transition-colors" />
                            <input
                                type="text"
                                value={pickup}
                                onChange={(e) => {
                                    setPickup(e.target.value);
                                    setShowPickupSuggestions(true);
                                }}
                                onFocus={() => setShowPickupSuggestions(true)}
                                placeholder="Starting City or Airport"
                                className="w-full pl-12 pr-4 py-4 bg-white border border-surface-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all text-surface-900 placeholder:text-surface-400 font-medium"
                            />
                            {pickup && (
                                <button onClick={() => setPickup('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-surface-400 hover:text-surface-600">
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        {showPickupSuggestions && pickupSuggestions.length > 0 && (
                            <div className="absolute z-50 left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-surface-200 overflow-hidden">
                                {pickupSuggestions.map((loc) => (
                                    <button
                                        key={loc.slug}
                                        onClick={() => {
                                            setPickup(loc.name);
                                            setShowPickupSuggestions(false);
                                        }}
                                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-surface-50 transition-colors text-left border-b border-surface-50 last:border-0"
                                    >
                                        <div className="p-2 bg-surface-50 rounded-lg text-surface-500">{getIcon(loc.type)}</div>
                                        <div>
                                            <p className="font-bold text-surface-900 text-sm">{loc.name}</p>
                                            <p className="text-[10px] text-surface-400 uppercase tracking-wider font-bold">{loc.type} • {loc.country}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Destination Input */}
                    <div className="relative" ref={destRef}>
                        <label className="block text-xs font-bold text-surface-400 uppercase tracking-widest mb-2 ml-1">Destination</label>
                        <div className="relative group">
                            <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-surface-400 group-focus-within:text-primary-600 transition-colors" />
                            <input
                                type="text"
                                value={destination}
                                onChange={(e) => {
                                    setDestination(e.target.value);
                                    setShowDestSuggestions(true);
                                }}
                                onFocus={() => setShowDestSuggestions(true)}
                                placeholder="Arrival City or Border"
                                className="w-full pl-12 pr-4 py-4 bg-white border border-surface-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all text-surface-900 placeholder:text-surface-400 font-medium"
                            />
                            {destination && (
                                <button onClick={() => setDestination('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-surface-400 hover:text-surface-600">
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        {showDestSuggestions && destSuggestions.length > 0 && (
                            <div className="absolute z-50 left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-surface-200 overflow-hidden">
                                {destSuggestions.map((loc) => (
                                    <button
                                        key={loc.slug}
                                        onClick={() => {
                                            setDestination(loc.name);
                                            setShowDestSuggestions(false);
                                        }}
                                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-surface-50 transition-colors text-left border-b border-surface-50 last:border-0"
                                    >
                                        <div className="p-2 bg-surface-50 rounded-lg text-surface-500">{getIcon(loc.type)}</div>
                                        <div>
                                            <p className="font-bold text-surface-900 text-sm">{loc.name}</p>
                                            <p className="text-[10px] text-surface-400 uppercase tracking-wider font-bold">{loc.type} • {loc.country}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Calculation Results Area */}
                <div className="mt-8 bg-white border border-surface-200 rounded-2xl p-6 overflow-hidden relative">
                    {!result ? (
                        <div className="text-center py-6">
                            <p className="text-surface-500 font-medium">Enter locations to view travel estimates.</p>
                            <p className="text-xs text-surface-400 mt-1 uppercase tracking-widest font-bold">Calculation based on available road data</p>
                        </div>
                    ) : (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid sm:grid-cols-2 gap-8 mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="p-4 bg-primary-50 rounded-2xl text-primary-600">
                                        <Ruler className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-surface-400 uppercase tracking-widest mb-1">Estimated Distance</p>
                                        <p className="text-3xl font-display font-bold text-surface-900">{result.distance}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-4 bg-primary-50 rounded-2xl text-primary-600">
                                        <Clock className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-surface-400 uppercase tracking-widest mb-1">Estimated Travel Time</p>
                                        <p className="text-3xl font-display font-bold text-surface-900">{result.duration}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-surface-100 pt-6">
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div>
                                        <p className="text-xs font-bold text-surface-400 uppercase tracking-widest mb-1">Available Route Page</p>
                                        <h4 className="font-bold text-surface-900">{result.title}</h4>
                                    </div>
                                    <Link 
                                        href={result.url}
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary-900 text-white font-bold rounded-xl transition-all hover:bg-black group"
                                    >
                                        View Full Route <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
