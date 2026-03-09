import { Service } from '@/lib/data';
import Link from 'next/link';
import { Plane, Hotel, Building2, Globe2, Briefcase, CarFront } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
    'airport': <Plane className="w-10 h-10 text-primary-600" />,
    'hotel': <Hotel className="w-10 h-10 text-primary-600" />,
    'city-to-city': <Building2 className="w-10 h-10 text-primary-600" />,
    'cross-border': <Globe2 className="w-10 h-10 text-primary-600" />,
    'chauffeur': <CarFront className="w-10 h-10 text-primary-600" />,
    'corporate': <Briefcase className="w-10 h-10 text-primary-600" />,
};

export default function ServiceCard({ service }: { service: Service }) {
    return (
        <Link href={service.href} className="glass-card-hover p-6 group block">
            <div className="mb-6 bg-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-100 transition-all duration-300">
                {iconMap[service.id] || <CarFront className="w-10 h-10 text-primary-600" />}
            </div>
            <h3 className="font-display text-xl font-medium text-surface-900 mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
            </h3>
            <p className="text-surface-600 text-sm leading-relaxed mb-6">
                {service.description}
            </p>
            <div className="flex items-center gap-2 text-primary-600 text-sm font-semibold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                Learn More <span className="text-lg leading-none">&rarr;</span>
            </div>
        </Link>
    );
}
