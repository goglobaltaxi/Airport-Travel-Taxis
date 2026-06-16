'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Calendar, Search } from 'lucide-react';

const locations = [
    'Dubai, UAE', 'Abu Dhabi, UAE', 'Sharjah, UAE',
    'Riyadh, Saudi Arabia', 'Jeddah, Saudi Arabia', 'Dammam, Saudi Arabia',
    'Doha, Qatar', 'Kuwait City, Kuwait', 'Manama, Bahrain', 'Muscat, Oman',
    'Dubai Airport (DXB)', 'Abu Dhabi Airport (AUH)', 'Riyadh Airport (RUH)',
    'Jeddah Airport (JED)', 'Hamad International Airport (Doha)',
    'King Fahd Airport (Dammam)', 'Muscat Airport (MCT)',
    'Makkah', 'Madinah',
];

export default function HeroSearch() {
    const router = useRouter();
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [today, setToday] = useState('');

    useEffect(() => {
        setToday(new Date().toISOString().split('T')[0]);
    }, []);

    const handleSearch = () => {
        router.push('/booking');
    };

    return (
        <div className="w-full">
            <div className="bg-white rounded-2xl shadow-search border border-surface-200 p-2 flex flex-col sm:flex-row gap-1">
                {/* From */}
                <div className="flex-1 flex items-center gap-2 px-4 py-2.5 hover:bg-surface-50 rounded-xl transition-colors cursor-pointer group min-w-0">
                    <MapPin className="w-4 h-4 text-primary-500 shrink-0" />
                    <div className="min-w-0 flex-1">
                        <div className="text-[10px] font-bold text-surface-500 uppercase tracking-wider mb-0.5">From</div>
                        <input
                            type="text"
                            list="from-locations"
                            placeholder="City, airport or hotel"
                            value={from}
                            onChange={e => setFrom(e.target.value)}
                            className="w-full text-sm font-medium text-surface-900 placeholder:text-surface-400 bg-transparent border-none outline-none"
                        />
                        <datalist id="from-locations">
                            {locations.map(l => <option key={l} value={l} />)}
                        </datalist>
                    </div>
                </div>

                <div className="hidden sm:block w-px bg-surface-200 my-2" />

                {/* To */}
                <div className="flex-1 flex items-center gap-2 px-4 py-2.5 hover:bg-surface-50 rounded-xl transition-colors cursor-pointer group min-w-0">
                    <MapPin className="w-4 h-4 text-surface-400 shrink-0" />
                    <div className="min-w-0 flex-1">
                        <div className="text-[10px] font-bold text-surface-500 uppercase tracking-wider mb-0.5">To</div>
                        <input
                            type="text"
                            list="to-locations"
                            placeholder="City, airport or hotel"
                            value={to}
                            onChange={e => setTo(e.target.value)}
                            className="w-full text-sm font-medium text-surface-900 placeholder:text-surface-400 bg-transparent border-none outline-none"
                        />
                        <datalist id="to-locations">
                            {locations.map(l => <option key={l} value={l} />)}
                        </datalist>
                    </div>
                </div>

                <div className="hidden sm:block w-px bg-surface-200 my-2" />

                {/* Date */}
                <div className="flex items-center gap-2 px-4 py-2.5 hover:bg-surface-50 rounded-xl transition-colors cursor-pointer min-w-0">
                    <Calendar className="w-4 h-4 text-surface-400 shrink-0" />
                    <div className="min-w-0">
                        <div className="text-[10px] font-bold text-surface-500 uppercase tracking-wider mb-0.5">Date</div>
                        <input
                            type="date"
                            min={today}
                            value={date}
                            onChange={e => setDate(e.target.value)}
                            className="text-sm font-medium text-surface-900 bg-transparent border-none outline-none cursor-pointer w-full"
                        />
                    </div>
                </div>

                {/* Search button */}
                <button
                    onClick={handleSearch}
                    className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 shrink-0 shadow-blue active:scale-[0.98] text-sm"
                >
                    <Search className="w-4 h-4" />
                    Search
                </button>
            </div>
        </div>
    );
}
