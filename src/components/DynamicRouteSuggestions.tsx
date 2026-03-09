'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, MapPin, Navigation, Plane, Building2 } from 'lucide-react';
import { routes, airports, cities } from '@/lib/data';
import { areaTransferPages } from '@/lib/areaTransferData';

interface RouteSuggestion {
    title: string;
    description: string;
    url: string;
    type: 'Route' | 'Airport' | 'District' | 'Border';
}

interface DynamicRouteSuggestionsProps {
    currentSlug: string;
    type: 'route' | 'airport' | 'city' | 'area';
    contextName?: string; // e.g., "Riyadh"
    originCity?: string;
    destinationCity?: string;
}

export default function DynamicRouteSuggestions({ 
    currentSlug, 
    type, 
    contextName,
    originCity,
    destinationCity 
}: DynamicRouteSuggestionsProps) {
    const suggestions: RouteSuggestion[] = [];

    // ─── Logic for Route Pages ───
    if (type === 'route' && originCity) {
        // Find other routes from the same origin
        const otherRoutesFromOrigin = routes
            .filter(r => r.from === originCity && r.slug !== currentSlug)
            .slice(0, 3)
            .map(r => ({
                title: `${r.from} to ${r.to} Taxi`,
                description: `Direct chauffeur service to ${r.to}.`,
                url: `/routes/${r.slug}`,
                type: 'Route' as const
            }));
        suggestions.push(...otherRoutesFromOrigin);

        // Find airport taxi for origin
        const originAirport = airports.find(a => a.city === originCity);
        if (originAirport) {
            suggestions.push({
                title: `${originCity} Airport Taxi`,
                description: `Professional transfers at ${originAirport.code} Airport.`,
                url: `/airport/${originAirport.slug}`,
                type: 'Airport' as const
            });
        }
    }

    // ─── Logic for Airport Pages ───
    if (type === 'airport' && contextName) {
        // Find major routes from this city
        const cityRoutes = routes
            .filter(r => r.from === contextName || r.to === contextName)
            .slice(0, 3)
            .map(r => ({
                title: `${r.from} to ${r.to} Taxi`,
                description: `Chauffeur connection between cities.`,
                url: `/routes/${r.slug}`,
                type: 'Route' as const
            }));
        suggestions.push(...cityRoutes);

        // Find local area transfers (districts)
        const localDistricts = areaTransferPages
            .filter(a => a.city === contextName)
            .slice(0, 2)
            .map(a => ({
                title: `${a.areaName} Taxi`,
                description: `Local area transfers in ${contextName}.`,
                url: `/taxi-from-${a.slug}`,
                type: 'District' as const
            }));
        suggestions.push(...localDistricts);
    }

    // ─── Logic for City Pages ───
    if (type === 'city' && contextName) {
        // Find airport taxi
        const cityAirport = airports.find(a => a.city === contextName);
        if (cityAirport) {
            suggestions.push({
                title: `${contextName} Airport Taxi`,
                description: `Reliable transfers at ${cityAirport.code} Airport.`,
                url: `/airport/${cityAirport.slug}`,
                type: 'Airport' as const
            });
        }

        // Find routes from this city
        const fromCityRoutes = routes
            .filter(r => r.from === contextName)
            .slice(0, 3)
            .map(r => ({
                title: `${r.from} to ${r.to} Taxi`,
                description: `Professional door-to-door service to ${r.to}.`,
                url: `/routes/${r.slug}`,
                type: 'Route' as const
            }));
        suggestions.push(...fromCityRoutes);
    }

    // ─── Logic for Area/District Pages ───
    if (type === 'area' && contextName) {
        // Find airport taxi for the parent city
        const parentCity = areaTransferPages.find(a => a.slug === currentSlug)?.city;
        if (parentCity) {
            const cityAirport = airports.find(a => a.city === parentCity);
            if (cityAirport) {
                suggestions.push({
                    title: `${parentCity} Airport Taxi`,
                    description: `Transfers to/from ${cityAirport.code} Airport.`,
                    url: `/airport/${cityAirport.slug}`,
                    type: 'Airport' as const
                });
            }

            // Other areas in the same city
            const otherAreas = areaTransferPages
                .filter(a => a.city === parentCity && a.slug !== currentSlug)
                .slice(0, 2)
                .map(a => ({
                    title: `${a.areaName} Taxi`,
                    description: `District transfers within ${parentCity}.`,
                    url: `/taxi-from-${a.slug}`,
                    type: 'District' as const
                }));
            suggestions.push(...otherAreas);
        }
    }

    // Unique-ify and limit
    const uniqueSuggestions = Array.from(new Map(suggestions.map(s => [s.url, s])).values()).slice(0, 4);

    if (uniqueSuggestions.length === 0) return null;

    const getIcon = (type: string) => {
        switch (type) {
            case 'Route': return <Navigation className="w-5 h-5" />;
            case 'Airport': return <Plane className="w-5 h-5" />;
            case 'District': return <MapPin className="w-5 h-5" />;
            default: return <ChevronRight className="w-5 h-5" />;
        }
    };

    return (
        <section className="py-12 bg-white">
            <div className="container-custom mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <div className="h-8 w-1 bg-primary-600 rounded-full" />
                    <h2 className="font-display text-2xl lg:text-3xl text-surface-900 font-semibold">Related Routes</h2>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {uniqueSuggestions.map((suggestion, idx) => (
                        <Link 
                            key={idx} 
                            href={suggestion.url}
                            className="group p-5 rounded-2xl border border-surface-200 hover:border-primary-300 hover:bg-primary-50/30 transition-all bg-white shadow-sm flex flex-col h-full"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-surface-50 rounded-xl text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all">
                                    {getIcon(suggestion.type)}
                                </div>
                                <span className="text-[10px] font-bold text-surface-400 uppercase tracking-widest">{suggestion.type}</span>
                            </div>
                            
                            <h3 className="font-bold text-surface-900 mb-2 group-hover:text-primary-700 transition-colors">
                                {suggestion.title}
                            </h3>
                            <p className="text-sm text-surface-500 line-clamp-2 leading-relaxed mb-4 flex-grow">
                                {suggestion.description}
                            </p>
                            
                            <div className="flex items-center text-primary-600 text-sm font-bold gap-1 mt-auto">
                                View Route <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
