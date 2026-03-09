'use client';

import { useState } from 'react';
import { testimonials } from '@/lib/data';

export default function TestimonialSlider() {
    const [active, setActive] = useState(0);

    return (
        <div>
            {/* Main Testimonial */}
            <div className="glass-card p-8 lg:p-10 mb-6 animate-fade-in" key={active}>
                <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[active].rating)].map((_, i) => (
                        <span key={i} className="text-gold-500 text-xl">★</span>
                    ))}
                </div>
                <blockquote className="text-lg lg:text-xl text-surface-700 leading-relaxed mb-6 italic">
                    &ldquo;{testimonials[active].content}&rdquo;
                </blockquote>
                <div>
                    <p className="font-display text-surface-900">{testimonials[active].name}</p>
                    <p className="text-sm text-surface-500">{testimonials[active].role} • {testimonials[active].location}</p>
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center justify-center gap-2">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActive(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === active ? 'bg-primary-600 w-8' : 'bg-surface-300 hover:bg-surface-400'
                            }`}
                        aria-label={`Testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
