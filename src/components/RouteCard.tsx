import Link from 'next/link';

interface RouteCardProps {
    from: string;
    to: string;
    duration: string;
    slug: string;
}

export default function RouteCard({ from, to, duration, slug }: RouteCardProps) {
    return (
        <Link href={`/routes/${slug}`} className="glass-card-hover p-5 group block">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="font-medium text-surface-900">{from}</span>
                </div>
                <div className="flex-1 mx-3 border-t border-dashed border-surface-400 relative">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-surface-500">→</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="font-medium text-surface-900">{to}</span>
                    <div className="w-2 h-2 rounded-full bg-primary-600" />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <span className="btn-primary text-xs !px-4 !py-1.5 rounded-full inline-block">Get Quote</span>
                <span className="text-sm text-surface-500">{duration}</span>
            </div>
        </Link>
    );
}
