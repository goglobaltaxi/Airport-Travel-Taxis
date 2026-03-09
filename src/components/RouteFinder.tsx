'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, MapPin, Navigation, ChevronRight, X, Plane, Building2, Globe } from 'lucide-react';
import { routes, airports, cities, borderCrossings } from '@/lib/data';
import { areaTransferPages } from '@/lib/areaTransferData';

interface LocationSuggestion {
    name: string;
    type: 'city' | 'airport' | 'area' | 'border';
    slug: string;
    country?: string;
}

export default function RouteFinder() {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [showPickupSuggestions, setShowPickupSuggestions] = useState(false);
    const [showDestSuggestions, setShowDestSuggestions] = useState(false);
    const [results, setResults] = useState<any[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    const pickupRef = useRef<HTMLDivElement>(null);
    const destRef = useRef<HTMLDivElement>(null);

    // Combine all locations for suggestions
    const allLocations: LocationSuggestion[] = [
        ...cities.map(c => ({ name: c.name, type: 'city' as const, slug: `/city/${c.slug}`, country: c.country })),
        ...airports.map(a => ({ name: `${a.city} Airport (${a.code})`, type: 'airport' as const, slug: `/airport/${a.slug}`, country: a.country })),
        ...areaTransferPages.map(a => ({ name: a.areaName, type: 'area' as const, slug: `/taxi-from-${a.slug}`, country: a.country })),
        ...borderCrossings.map(b => ({ name: b.name, type: 'border' as const, slug: `/border/${b.slug}`, country: b.countryA }))
    ];

    // Filter suggestions based on input
    const getSuggestions = (input: string) => {
        if (!input.trim()) return [];
        return allLocations.filter(loc => 
            loc.name.toLowerCase().includes(input.toLowerCase()) || 
            (loc.country && loc.country.toLowerCase().includes(input.toLowerCase()))
        ).slice(0, 6);
    };

    const pickupSuggestions = getSuggestions(pickup);
    const destSuggestions = getSuggestions(destination);

    // Close suggestions on click outside
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

    const handleSearch = () => {
        setIsSearching(true);
        const searchResults: any[] = [];

        // 1. Look for exact route match
        const exactRoute = routes.find(r => 
            (r.from.toLowerCase().includes(pickup.toLowerCase()) && r.to.toLowerCase().includes(destination.toLowerCase())) ||
            (r.to.toLowerCase().includes(pickup.toLowerCase()) && r.from.toLowerCase().includes(destination.toLowerCase()))
        );

        if (exactRoute) {
            searchResults.push({
                title: `${exactRoute.from} to ${exactRoute.to} Taxi`,
                url: `/routes/${exactRoute.slug}`,
                type: 'Route',
                description: `Direct chauffeur service between ${exactRoute.from} and ${exactRoute.to}.`
            });
        }

        // 2. Look for airport matches
        const pickupAirport = airports.find(a => a.name.toLowerCase().includes(pickup.toLowerCase()) || a.city.toLowerCase().includes(pickup.toLowerCase()));
        const destAirport = airports.find(a => a.name.toLowerCase().includes(destination.toLowerCase()) || a.city.toLowerCase().includes(destination.toLowerCase()));

        if (pickupAirport) {
            searchResults.push({
                title: `${pickupAirport.city} Airport Transfer`,
                url: `/airport/${pickupAirport.slug}`,
                type: 'Airport',
                description: `Professional airport taxi from ${pickupAirport.name}.`
            });
        }
        if (destAirport && destAirport !== pickupAirport) {
            searchResults.push({
                title: `${destAirport.city} Airport Transfer`,
                url: `/airport/${destAirport.slug}`,
                type: 'Airport',
                description: `Direct transportation to ${destAirport.name}.`
            });
        }

        // 3. Look for area/city matches
        const pickupArea = areaTransferPages.find(a => a.areaName.toLowerCase().includes(pickup.toLowerCase()));
        if (pickupArea) {
            searchResults.push({
                title: `Taxi from ${pickupArea.areaName}`,
                url: `/taxi-from-${pickupArea.slug}`,
                type: 'District',
                description: `Local area transfers within ${pickupArea.city}.`
            });
        }

        // 4. Look for border matches
        const destBorder = borderCrossings.find(b => b.name.toLowerCase().includes(destination.toLowerCase()));
        if (destBorder) {
            searchResults.push({
                title: `${destBorder.name} Border Crossing`,
                url: `/border/${destBorder.slug}`,
                type: 'Border',
                description: `Cross-border road transit via ${destBorder.name}.`
            });
        }

        // 5. Related Suggestions (if results are low)
        if (searchResults.length < 3) {
            // Suggest major routes if no specific match
            const generalSuggestions = routes.slice(0, 3).filter(r => 
                !searchResults.some(sr => sr.url.includes(r.slug))
            );
            generalSuggestions.forEach(r => {
                searchResults.push({
                    title: `${r.from} to ${r.to} Taxi`,
                    url: `/routes/${r.slug}`,
                    type: 'Popular Route',
                    description: `Inter-city chauffeur service.`
                });
            });
        }

        setResults(searchResults.slice(0, 5));
    };

    useEffect(() => {
        if (pickup.length > 2 || destination.length > 2) {
            handleSearch();
        } else {
            setResults([]);
            setIsSearching(false);
        }
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
        <div className="w-full max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-surface-200 p-6 lg:p-8">
                <div className="mb-6">
                    <h3 className="font-display text-xl text-surface-900 mb-2 font-semibold">Route Finder</h3>
                    <p className="text-surface-500 text-sm">Find professional taxi routes, airport transfers, and border crossings.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 relative">
                    {/* Pickup Input */}
                    <div className="relative" ref={pickupRef}>
                        <label className="block text-xs font-bold text-surface-400 uppercase tracking-widest mb-2 ml-1">Starting Point</label>
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
                                placeholder="Start Location (City, Airport...)"
                                className="w-full pl-12 pr-4 py-4 bg-surface-50 border border-surface-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all text-surface-900 placeholder:text-surface-400"
                            />
                            {pickup && (
                                <button onClick={() => setPickup('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-surface-400 hover:text-surface-600">
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        {/* Pickup Suggestions */}
                        {showPickupSuggestions && pickupSuggestions.length > 0 && (
                            <div className="absolute z-50 left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-surface-200 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                                {pickupSuggestions.map((loc) => (
                                    <button
                                        key={loc.slug}
                                        onClick={() => {
                                            setPickup(loc.name);
                                            setShowPickupSuggestions(false);
                                        }}
                                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-surface-50 transition-colors text-left border-b border-surface-50 last:border-0"
                                    >
                                        <div className="p-2 bg-surface-100 rounded-lg text-surface-500">
                                            {getIcon(loc.type)}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-surface-900 text-sm">{loc.name}</p>
                                            <p className="text-xs text-surface-500">{loc.type.charAt(0).toUpperCase() + loc.type.slice(1)} • {loc.country}</p>
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
                                placeholder="Destination (City, Border...)"
                                className="w-full pl-12 pr-4 py-4 bg-surface-50 border border-surface-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all text-surface-900 placeholder:text-surface-400"
                            />
                            {destination && (
                                <button onClick={() => setDestination('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-surface-400 hover:text-surface-600">
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        {/* Destination Suggestions */}
                        {showDestSuggestions && destSuggestions.length > 0 && (
                            <div className="absolute z-50 left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-surface-200 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                                {destSuggestions.map((loc) => (
                                    <button
                                        key={loc.slug}
                                        onClick={() => {
                                            setDestination(loc.name);
                                            setShowDestSuggestions(false);
                                        }}
                                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-surface-50 transition-colors text-left border-b border-surface-50 last:border-0"
                                    >
                                        <div className="p-2 bg-surface-100 rounded-lg text-surface-500">
                                            {getIcon(loc.type)}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-surface-900 text-sm">{loc.name}</p>
                                            <p className="text-xs text-surface-500">{loc.type.charAt(0).toUpperCase() + loc.type.slice(1)} • {loc.country}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Search Results */}
                {isSearching && (
                    <div className="mt-8 border-t border-surface-100 pt-8 animate-in fade-in duration-500">
                        <h4 className="text-xs font-bold text-surface-400 uppercase tracking-widest mb-4 ml-1">Available Route Options</h4>
                        <div className="space-y-3">
                            {results.length > 0 ? (
                                results.map((result, idx) => (
                                    <Link 
                                        key={idx} 
                                        href={result.url}
                                        className="group flex items-center justify-between p-4 rounded-2xl border border-surface-200 hover:border-primary-300 hover:bg-primary-50/30 transition-all bg-white shadow-sm"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-surface-100 rounded-xl text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                                <Search className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-0.5">
                                                    <span className="text-xs font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-md uppercase tracking-tighter">{result.type}</span>
                                                    <p className="font-bold text-surface-900">{result.title}</p>
                                                </div>
                                                <p className="text-sm text-surface-500">{result.description}</p>
                                            </div>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-surface-300 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                                    </Link>
                                ))
                            ) : (
                                <div className="text-center py-8 bg-surface-50 rounded-2xl border border-dashed border-surface-200">
                                    <p className="text-surface-500 text-sm font-medium">No direct routes found for this search.</p>
                                    <p className="text-xs text-surface-400 mt-1">Try searching for a city, airport, or district.</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
