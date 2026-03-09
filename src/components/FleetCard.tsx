'use client';

import { Vehicle } from '@/lib/data';

export default function FleetCard({ vehicle }: { vehicle: Vehicle }) {
    return (
        <div className="glass-card-hover group overflow-hidden flex flex-col h-full border border-surface-200 hover:border-primary-200 transition-all duration-300 shadow-sm bg-white rounded-2xl">
            {/* Image Section */}
            <div className="h-52 bg-gradient-to-br from-primary-50 to-surface-100 relative overflow-hidden flex items-center justify-center">
                {vehicle.image && (
                    <img 
                        src={vehicle.image} 
                        alt={vehicle.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                            (e.target as any).style.display = 'none';
                        }}
                    />
                )}
                
                {/* Fallback Emoji/Icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 group-hover:opacity-10 transition-opacity">
                    <div className="text-7xl">
                        {(vehicle.category.includes('Luxury') || vehicle.category.includes('Class') || vehicle.category.includes('First')) && '✨'}
                        {vehicle.category.includes('SUV') && '🚙'}
                        {vehicle.category.includes('Van') && '🚐'}
                        {vehicle.category.includes('Coach') && '🚌'}
                        {vehicle.category.includes('Economy') && '🚗'}
                    </div>
                </div>

                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary-600 text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-lg border border-primary-100 shadow-sm z-10 transition-colors">
                    {vehicle.category}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                    <h3 className="font-display text-lg text-surface-900 mb-2 font-semibold group-hover:text-primary-700 transition-colors">{vehicle.name}</h3>
                    <p className="text-surface-600 text-sm line-clamp-2 min-h-[40px] leading-relaxed">{vehicle.description}</p>
                </div>

                {/* Specs */}
                <div className="flex gap-5 mb-5 mt-auto">
                    <div className="flex items-center gap-2 text-sm text-surface-700 font-medium">
                        <span className="opacity-70">👤</span>
                        <span>{vehicle.passengers} Pax</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-surface-700 font-medium">
                        <span className="opacity-70">🧳</span>
                        <span>{vehicle.luggage} Bags</span>
                    </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {vehicle.features.slice(0, 3).map((feature) => (
                        <span key={feature} className="text-[11px] bg-surface-50 border border-surface-200 text-surface-600 px-2.5 py-1 rounded-md font-medium">
                            {feature}
                        </span>
                    ))}
                    {vehicle.features.length > 3 && (
                        <span className="text-[11px] text-surface-400 font-medium py-1">+{vehicle.features.length - 3}</span>
                    )}
                </div>


                {/* Price CTA */}
                <div className="flex items-center justify-between pt-5 border-t border-surface-100 mt-auto">
                    <div>
                        <a href="/booking" className="btn-primary text-xs !px-5 !py-2.5 inline-block shadow-sm hover:shadow-md transition-shadow">Get Quote</a>
                    </div>
                    <a href="/booking" className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors flex items-center gap-1 group/btn">
                        Details <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
