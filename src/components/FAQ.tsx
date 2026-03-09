'use client';

import { useState } from 'react';
import type { FAQItem } from '@/lib/data';

export default function FAQ({ items, title = 'Frequently Asked Questions' }: { items: FAQItem[]; title?: string }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div>
            <h2 className="font-display text-2xl lg:text-3xl text-surface-900 mb-8 text-center">
                {title}
            </h2>
            
            <div className="max-w-3xl mx-auto mb-8 p-4 bg-primary-50 rounded-xl border border-primary-200 flex gap-3 text-left">
                <div className="text-primary-600 shrink-0 mt-0.5">
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center font-bold text-sm">i</div>
                </div>
                <p className="text-sm text-surface-700 leading-relaxed">
                    <strong>Service Notice:</strong> This service focuses on pre-booked transportation including airport transfers, intercity travel, cross-border journeys, and VIP Umrah transfers. Local street taxi hailing and short-distance city rides are not part of the service.
                </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
                {items.map((item, index) => (
                    <div key={index} className="glass-card overflow-hidden transition-all duration-300">
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between p-5 text-left group"
                        >
                            <span className="font-medium text-surface-900 pr-4 group-hover:text-primary-600 transition-colors">
                                {item.question}
                            </span>
                            <svg
                                className={`w-5 h-5 text-surface-500 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className="px-5 pb-5 text-surface-600 leading-relaxed">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
