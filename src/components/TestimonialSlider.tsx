'use client';

import { useState } from 'react';
import { testimonials } from '@/lib/data';

interface ReviewItem {
    content: string;
    rating: number;
    name: string;
    role: string;
    location: string;
}

export default function TestimonialSlider({ reviews }: { reviews?: ReviewItem[] }) {
    const items: ReviewItem[] = reviews && reviews.length > 0
        ? reviews
        : testimonials.map(t => ({ content: t.content, rating: t.rating, name: t.name, role: t.role, location: t.location }));

    const [active, setActive] = useState(0);
    const safeActive = Math.min(active, items.length - 1);

    return (
        <div>
            {/* Main Testimonial */}
            <div className="glass-card p-8 lg:p-10 mb-6 animate-fade-in" key={safeActive}>
                <div className="flex gap-1 mb-4">
                    {[...Array(items[safeActive].rating)].map((_, i) => (
                        <span key={i} className="text-gold-500 text-xl">★</span>
                    ))}
                </div>
                <blockquote className="text-lg lg:text-xl text-surface-700 leading-relaxed mb-6 italic">
                    &ldquo;{items[safeActive].content}&rdquo;
                </blockquote>
                <div>
                    <p className="font-display text-surface-900">{items[safeActive].name}</p>
                    <p className="text-sm text-surface-500">{items[safeActive].role} • {items[safeActive].location}</p>
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center justify-center gap-2">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActive(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === safeActive ? 'bg-primary-600 w-8' : 'bg-surface-300 hover:bg-surface-400'}`}
                        aria-label={`Testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
