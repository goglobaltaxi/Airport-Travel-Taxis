import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';

interface RouteCardProps {
    from: string;
    to: string;
    fromCountry?: string;
    toCountry?: string;
    distance?: string;
    duration: string;
    slug: string;
}

const countryCodes: Record<string, string> = {
    'Saudi Arabia': 'SA',
    'United Arab Emirates': 'AE',
    'UAE': 'AE',
    'Qatar': 'QA',
    'Kuwait': 'KW',
    'Bahrain': 'BH',
    'Oman': 'OM',
};

// Fallback for callers (like the homepage) that only pass city names, no country.
const cityCodes: Record<string, string> = {
    'Dubai': 'AE', 'Abu Dhabi': 'AE', 'Sharjah': 'AE',
    'Riyadh': 'SA', 'Jeddah': 'SA', 'Dammam': 'SA', 'Makkah': 'SA', 'Madinah': 'SA', 'Khobar': 'SA', 'Taif': 'SA',
    'Doha': 'QA',
    'Kuwait': 'KW', 'Kuwait City': 'KW', 'Jahra': 'KW',
    'Bahrain': 'BH', 'Manama': 'BH',
    'Muscat': 'OM',
};

const resolveCode = (city: string, country?: string) => (country && countryCodes[country]) || cityCodes[city];

export default function RouteCard({ from, to, fromCountry, toCountry, distance, duration, slug }: RouteCardProps) {
    const fromCode = resolveCode(from, fromCountry);
    const toCode = resolveCode(to, toCountry);

    return (
        <Link href={`/routes/${slug}`} className="glass-card-hover p-6 group block">
            <div className="flex items-center gap-1.5 text-xs font-medium text-surface-500 mb-5">
                <Clock className="w-3.5 h-3.5" />
                <span>{duration}</span>
                {distance && (
                    <>
                        <span className="text-surface-300">•</span>
                        <span>{distance}</span>
                    </>
                )}
            </div>

            <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-2 min-w-0">
                    {fromCode && (
                        <img src={`https://flagcdn.com/w40/${fromCode.toLowerCase()}.png`} width={20} height={14} alt="" className="rounded-sm shrink-0" />
                    )}
                    <span className="font-display font-semibold text-surface-900 truncate">{from}</span>
                </div>

                <div className="flex-1 relative h-px border-t border-dashed border-surface-300 mx-1">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-primary-50 border border-primary-100 flex items-center justify-center group-hover:bg-primary-600 group-hover:border-primary-600 transition-colors duration-200">
                        <ArrowRight className="w-3.5 h-3.5 text-primary-600 group-hover:text-white transition-colors duration-200" />
                    </div>
                </div>

                <div className="flex items-center gap-2 min-w-0 justify-end">
                    <span className="font-display font-semibold text-surface-900 truncate">{to}</span>
                    {toCode && (
                        <img src={`https://flagcdn.com/w40/${toCode.toLowerCase()}.png`} width={20} height={14} alt="" className="rounded-sm shrink-0" />
                    )}
                </div>
            </div>

            <span className="btn-primary w-full text-sm !py-2.5">
                Get Quote <ArrowRight className="w-4 h-4" />
            </span>
        </Link>
    );
}