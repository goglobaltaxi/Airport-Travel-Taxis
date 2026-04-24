import { Service } from '@/lib/data';
import Link from 'next/link';
import { Plane, Hotel, Building2, Globe2, Briefcase, CarFront } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
    'airport': <Plane className="w-8 h-8 text-gold-500" />,
    'hotel': <Hotel className="w-8 h-8 text-gold-500" />,
    'city-to-city': <Building2 className="w-8 h-8 text-gold-500" />,
    'cross-border': <Globe2 className="w-8 h-8 text-gold-500" />,
    'chauffeur': <CarFront className="w-8 h-8 text-gold-500" />,
    'corporate': <Briefcase className="w-8 h-8 text-gold-500" />,
};

export default function ServiceCard({ service }: { service: Service }) {
    return (
        <Link href={service.href} className="glass-card-hover p-6 group block border border-transparent hover:border-gold-500/30">
            <div className="mb-6 bg-primary-900 border border-primary-800 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-950 transition-all duration-300 shadow-lg shadow-gold-500/5">
                {iconMap[service.id] || <CarFront className="w-8 h-8 text-gold-500" />}
            </div>
            <h3 className="font-display text-xl font-medium text-surface-900 mb-3 group-hover:text-gold-600 transition-colors">
                {service.title}
            </h3>
            <p className="text-surface-600 text-sm leading-relaxed mb-6">
                {service.description}
            </p>
            <div className="flex items-center gap-2 text-gold-600 text-sm font-bold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 uppercase tracking-widest">
                Learn More <span className="text-lg leading-none">&rarr;</span>
            </div>
        </Link>
    );
}
