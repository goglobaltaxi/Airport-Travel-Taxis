'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { airports } from '@/lib/data';

export default function AirportGuidesCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollByAmount = (amount: number) => {
        scrollRef.current?.scrollBy({ left: amount, behavior: 'smooth' });
    };

    return (
        <div className="relative">
            <button
                type="button"
                aria-label="Scroll left"
                onClick={() => scrollByAmount(-320)}
                className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-surface-200 shadow-md items-center justify-center text-surface-600 hover:text-primary-600 hover:border-primary-300 transition-colors"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {airports.map((airport) => (
                    <Link
                        key={airport.slug}
                        href={`/airport/${airport.slug}`}
                        className="shrink-0 snap-start w-[220px] rounded-2xl border border-surface-200 bg-white px-6 py-8 text-center font-display font-semibold text-surface-900 hover:border-primary-300 hover:shadow-md transition-all duration-200"
                    >
                        {airport.city} Airport Taxi
                    </Link>
                ))}
            </div>

            <button
                type="button"
                aria-label="Scroll right"
                onClick={() => scrollByAmount(320)}
                className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-surface-200 shadow-md items-center justify-center text-surface-600 hover:text-primary-600 hover:border-primary-300 transition-colors"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
}