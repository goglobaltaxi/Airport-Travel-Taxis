import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { transferPages } from '@/lib/transferData';
import { airportBorderPages } from '@/lib/airportBorderData';
import { hotelTransferPages } from '@/lib/hotelTransferData';
import { areaTransferPages } from '@/lib/areaTransferData';
import { cityRoutePages } from '@/lib/cityRouteData';
import BookingWidget from '@/components/BookingWidget';
import StructuredInformationBlocks from '@/components/StructuredInformationBlocks';
import DynamicRouteSuggestions from '@/components/DynamicRouteSuggestions';
import RouteFinder from '@/components/RouteFinder';
import TravelCalculator from '@/components/TravelCalculator';
import {
    MapPin,
    Clock,
    Car,
    ShieldCheck,
    ChevronRight,
    Plane,
    ArrowRight,
    Navigation,
    Info,
    Globe,
    FileText,
    Building2,
    Map,
} from 'lucide-react';

export async function generateStaticParams() {
    const transferSlugs = transferPages.map((page) => ({ slug: page.slug }));
    const borderSlugs = airportBorderPages.map((page) => ({ slug: page.slug }));
    const hotelSlugs = hotelTransferPages.map((page) => ({ slug: page.slug }));
    const areaSlugs = areaTransferPages.map((page) => ({ slug: page.slug }));
    const cityRouteSlugs = cityRoutePages.map((page) => ({ slug: page.slug }));
    return [...transferSlugs, ...borderSlugs, ...hotelSlugs, ...areaSlugs, ...cityRouteSlugs];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const page = transferPages.find((p) => p.slug === params.slug) || 
                 airportBorderPages.find((p) => p.slug === params.slug) ||
                 hotelTransferPages.find((p) => p.slug === params.slug) ||
                 areaTransferPages.find((p) => p.slug === params.slug) ||
                 cityRoutePages.find((p) => p.slug === params.slug);
    
    if (!page) return {};
    
    let title = '';
    if ('borderName' in page) {
        title = `Taxi from ${page.airportName} to ${page.borderName}`;
    } else if ('hotelName' in page) {
        title = `Taxi from ${page.hotelName} to ${page.airportName}`;
    } else if ('areaName' in page) {
        const isAreaToAirport = page.slug.endsWith('airport') || page.slug.includes('-to-') && page.slug.split('-to-')[1].includes('airport');
        title = isAreaToAirport 
            ? `Taxi from ${page.areaName} to ${page.airportName}`
            : `Taxi from ${page.airportName} to ${page.areaName}`;
    } else if ('fromLocation' in page) {
        title = `Taxi from ${page.fromLocation} to ${page.toLocation}`;
    } else {
        title = `Taxi from ${(page as any).airportName} to ${(page as any).areaName}`;
    }

    return {
        title,
        description: page.description,
        openGraph: {
            title: `${title} | Airport Travel Taxis`,
            description: page.description,
            url: `https://airporttraveltaxis.com/taxi-from-${page.slug}`,
        },
        alternates: {
            canonical: `https://airporttraveltaxis.com/taxi-from-${page.slug}`,
        },
    };
}

export default function TransferTaxiPage({ params }: { params: { slug: string } }) {
    const page = (transferPages.find((p) => p.slug === params.slug) || 
                 airportBorderPages.find((p) => p.slug === params.slug) ||
                 hotelTransferPages.find((p) => p.slug === params.slug) ||
                 areaTransferPages.find((p) => p.slug === params.slug) ||
                 cityRoutePages.find((p) => p.slug === params.slug)) as any;

    if (!page) notFound();

    const isBorder = 'borderName' in page;
    const isHotelTransfer = 'hotelName' in page;
    const isAreaTransfer = areaTransferPages.some(ap => ap.slug === page.slug);
    const isAirportToArea = transferPages.some(tp => tp.slug === page.slug);
    const isCityRoute = cityRoutePages.some(cr => cr.slug === page.slug);
    
    let startLocation = '';
    let endLocation = '';

    if (isBorder) {
        startLocation = page.airportName;
        endLocation = page.borderName;
    } else if (isHotelTransfer) {
        startLocation = page.hotelName;
        endLocation = page.airportName;
    } else if (isAreaTransfer) {
        startLocation = page.areaName;
        endLocation = page.airportName;
    } else if (isAirportToArea) {
        startLocation = page.airportName;
        endLocation = page.areaName;
    } else if (isCityRoute) {
        startLocation = page.fromLocation;
        endLocation = page.toLocation;
    }

    const vehicles = [
        { name: 'Mercedes S-Class', type: 'Executive Sedan', desc: 'High-standard comfort for airport pickups.' },
        { name: 'BMW', type: 'Executive Sedan', desc: 'Professional and refined travel from the airport.' },
        { name: 'Genesis', type: 'Executive Sedan', desc: 'Sleek and comfortable airport transfer.' },
        { name: 'Cadillac Escalade', type: 'Large SUV', desc: 'Spacious SUV for travelers with multiple suitcases.' },
        { name: 'GMC', type: 'Large SUV', desc: 'Ideal for group and family airport arrivals.' },
        { name: 'Ford Taurus', type: 'Standard Sedan', desc: 'Reliable and efficient city transit.' },
        { name: 'Mercedes Vito', type: 'Passenger van', desc: 'Professional group transport for up to 8 passengers.' },
        { name: 'Mercedes Sprinter', type: 'Minibus', desc: 'Perfect for larger groups and heavy luggage requirements.' },
        { name: 'Comfortable Bus', type: 'Coach', desc: 'Large group airport transfers and shuttle services.' },
        { name: 'Camry', type: 'Standard Sedan', desc: 'Convenient and practical airport to city transfer.' },
        { name: 'Staria', type: 'Passenger van', desc: 'Spacious and modern seating for group travel.' },
        { name: 'Hiace', type: 'Passenger van', desc: 'Efficient and reliable group airport pickup.' },
        { name: 'Coaster', type: 'Minibus', desc: 'Trusted transport for larger passenger groups.' },
    ];

    const isDeparture = isHotelTransfer || isAreaTransfer || (isCityRoute && endLocation.toLowerCase().includes('airport'));

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <div className="flex items-center gap-2 text-sm text-surface-500 mb-6 font-medium">
                        <Link href="/" className="hover:text-primary-600 transition-colors" id="breadcrumb_home">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-surface-900 truncate max-w-[200px] md:max-w-none">Taxi from {startLocation} to {endLocation}</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-4">
                                {isBorder ? <Globe className="w-4 h-4 text-primary-600" /> : 
                                 isHotelTransfer ? <Building2 className="w-4 h-4 text-primary-600" /> : 
                                 isAreaTransfer ? <Map className="w-4 h-4 text-primary-600" /> :
                                 isCityRoute ? <Navigation className="w-4 h-4 text-primary-600" /> :
                                 <Plane className="w-4 h-4 text-primary-600" />}
                                <span className="text-sm text-primary-700 font-medium tracking-tight">
                                    {isBorder ? 'Cross-Border Airport Transfer' : 
                                     isHotelTransfer ? 'Hotel to Airport Transfer' : 
                                     isAreaTransfer ? 'Area to Airport Transfer' :
                                     isCityRoute ? 'Inter-City Taxi Service' :
                                     'Airport Area Transfer'}
                                </span>
                            </div>
                            <h1 className="font-display text-4xl lg:text-5xl text-surface-900 mb-6 leading-tight">
                                Taxi from {startLocation} to <span className="text-primary-600">{endLocation}</span>
                            </h1>
                            <p className="text-surface-600 text-lg leading-relaxed mb-8">{page.longDescription}</p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-white border border-surface-200 rounded-2xl p-5 shadow-sm">
                                    <Navigation className="w-5 h-5 text-primary-600 mb-3" />
                                    <p className="text-xs text-surface-500 uppercase tracking-widest font-bold mb-1">Distance</p>
                                    <p className="text-surface-900 font-semibold">{page.distance}</p>
                                </div>
                                <div className="bg-white border border-surface-200 rounded-2xl p-5 shadow-sm">
                                    <Clock className="w-5 h-5 text-primary-600 mb-3" />
                                    <p className="text-xs text-surface-500 uppercase tracking-widest font-bold mb-1">Approx. Time</p>
                                    <p className="text-surface-900 font-semibold">{page.travelTime}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {[isDeparture ? 'Departure Transfer' : 'Airport Pickup', 'Meet & Greet', 'Door-to-Door', 'Business Travel', 'Professional Service'].map((tag) => (
                                    <span key={tag} className="text-xs font-semibold bg-white border border-surface-200 text-surface-700 rounded-full px-4 py-1.5 shadow-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-24">
                            <BookingWidget />
                        </div>
                    </div>
                </div>
            </section>

            {/* Structured Information Blocks */}
            <StructuredInformationBlocks 
                startLocation={startLocation}
                endLocation={endLocation}
                type={isBorder ? 'Cross-Border Transfer' : (isAreaTransfer || isHotelTransfer || isAirportToArea ? 'Airport Transfer' : 'City Transfer')}
                travelTime={page.travelTime}
                pickup={isDeparture ? 'Hotel or Residential Address' : `${page.airportName} Arrivals`}
                dropoff={isDeparture ? `${page.airportName} Departures` : 'Hotel or Residential Address'}
                relatedLinks={page.relatedRoutes.map((r: any) => ({ name: r.name, url: r.slug }))}
            />

            {/* Route Finder Integration */}
            <section className="bg-surface-50 py-12 border-y border-surface-200">
                <div className="container-custom mx-auto">
                    <RouteFinder />
                    <TravelCalculator />
                </div>
            </section>

            {/* Border Info Section (Conditional) */}
            {isBorder && 'borderCrossingInfo' in page && (
                <section className="section-padding bg-primary-900 text-white">
                    <div className="container-custom mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="font-display text-3xl mb-4">Border Crossing Information</h2>
                            <p className="text-primary-200">Key details for your successful international road transit.</p>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-8">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                                <Globe className="w-8 h-8 text-primary-400 mb-4" />
                                <h3 className="font-bold text-xl mb-2">Passport & Visas</h3>
                                <p className="text-primary-100 text-sm leading-relaxed">{page.borderCrossingInfo.passport}</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                                <FileText className="w-8 h-8 text-primary-400 mb-4" />
                                <h3 className="font-bold text-xl mb-2">Customs Process</h3>
                                <p className="text-primary-100 text-sm leading-relaxed">{page.borderCrossingInfo.customs}</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                                <Clock className="w-8 h-8 text-primary-400 mb-4" />
                                <h3 className="font-bold text-xl mb-2">Crossing Time</h3>
                                <p className="text-primary-100 text-sm leading-relaxed">{page.borderCrossingInfo.time}</p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Route Overview */}
            <section className="section-padding bg-white border-y border-surface-200">
                <div className="container-custom mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                        <div className="flex-1">
                            <h2 className="font-display text-3xl text-surface-900 mb-6">Route Overview</h2>
                            <div className="flex items-center gap-4 bg-surface-50 border border-surface-200 rounded-2xl p-6 mb-6">
                                <div className="p-3 bg-primary-600 rounded-xl text-white">
                                    {isDeparture ? (isHotelTransfer ? <Building2 className="w-6 h-6" /> : <MapPin className="w-6 h-6" />) : <Plane className="w-6 h-6" />}
                                </div>
                                <div className="h-px flex-1 bg-surface-300 relative">
                                    <ArrowRight className="absolute -right-1.5 -top-2 w-4 h-4 text-surface-400" />
                                </div>
                                <div className="p-3 bg-primary-600 rounded-xl text-white">
                                    {isDeparture ? <Plane className="w-6 h-6" /> : <MapPin className="w-6 h-6" />}
                                </div>
                            </div>
                            <p className="text-surface-600 leading-relaxed text-lg">
                                {isBorder 
                                    ? `Our cross-border transfer from ${page.airportName} to ${page.borderName} is designed for long-distance comfort and reliability. We provide direct transportation from the airport arrivals portal to the international land border crossing.` 
                                    : (isDeparture 
                                        ? `Our airport transfer service from ${startLocation} to ${endLocation} is designed for punctual and stress-free departures. We provide direct transportation from your location in ${isAreaTransfer ? page.areaName : page.hotelName} to the correct departure terminal in ${page.city}.`
                                        : `Our transfer route from ${page.airportName} to ${endLocation} is designed for maximum efficiency and passenger comfort. We provide direct transportation from the airport arrivals to any street, residential building, or hotel in the ${endLocation} district of ${page.city}.`)
                                }
                            </p>
                        </div>
                        <div className="lg:w-1/3 grid grid-cols-1 gap-4">
                            <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
                                <h3 className="font-bold text-primary-900 mb-2">Punctual Arrival</h3>
                                <p className="text-primary-800 text-sm">
                                    {isDeparture ? 'We ensure you reach your flight terminal with plenty of time for check-in and security.' : 'We synchronize our pickup with your real-time flight data for zero waiting time.'}
                                </p>
                            </div>
                            <div className="bg-surface-900 rounded-2xl p-6 text-white shadow-xl">
                                <h3 className="font-bold mb-2">Expert Service</h3>
                                <p className="text-surface-300 text-sm italic">"Our goal is to make your transition {isDeparture ? 'to' : 'from'} {page.airportName} absolutely seamless and reliable."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pickup Process */}
            <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="font-display text-3xl text-surface-900 mb-4">Pickup Process</h2>
                        <p className="text-surface-500">How our {isDeparture ? 'departure pickup' : 'airport pickup'} service works for your {isDeparture ? 'travel' : 'arrival'}.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {page.pickupProcess.map((step: string, i: number) => (
                            <div key={i} className="bg-white border border-surface-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold mb-4">
                                    0{i + 1}
                                </div>
                                <p className="text-surface-700 font-medium leading-relaxed">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vehicle Options */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto">
                    <div className="flex items-end justify-between mb-12 gap-6">
                        <div className="max-w-xl">
                            <h2 className="font-display text-3xl text-surface-900 mb-4">Available Fleet</h2>
                            <p className="text-surface-500">Choose from our diverse range of professional vehicles for your transfer to {endLocation}.</p>
                        </div>
                        <Link href="/fleet" className="text-primary-600 font-bold flex items-center gap-2 hover:gap-3 transition-all mb-2">
                            View All Vehicles <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {vehicles.map((v) => (
                            <div key={v.name} className="bg-surface-50 border border-surface-200 rounded-2xl p-5 hover:border-primary-300 transition-colors">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-white rounded-lg border border-surface-200">
                                        <Car className="w-5 h-5 text-primary-600" />
                                    </div>
                                    <p className="font-bold text-surface-900">{v.name}</p>
                                </div>
                                <p className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-2">{v.type}</p>
                                <p className="text-surface-600 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Travel Tips */}
            <section className="section-padding bg-surface-50">
                <div className="container-custom mx-auto max-w-4xl">
                    <div className="bg-white border border-surface-200 rounded-[32px] overflow-hidden shadow-sm">
                        <div className="bg-primary-600 p-8 text-white">
                            <div className="flex items-center gap-3 mb-2">
                                <Info className="w-6 h-6" />
                                <h2 className="font-display text-2xl">Essential Travel Tips</h2>
                            </div>
                            <p className="text-primary-100">Helpful guidance for a seamless transfer service.</p>
                        </div>
                        <div className="p-8 grid sm:grid-cols-2 gap-6">
                            {page.travelTips.map((tip: string, i: number) => (
                                <div key={i} className="flex items-start gap-4">
                                    <ShieldCheck className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                                    <p className="text-surface-700 font-medium">{tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Routes */}
            <DynamicRouteSuggestions 
                currentSlug={page.slug} 
                type="area" 
                contextName={page.city || page.fromLocation} 
            />

            {/* FAQs */}
            <section className="section-padding bg-white">
                <div className="container-custom mx-auto max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl text-surface-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-surface-500">Common inquiries about our transfer service.</p>
                    </div>
                    <div className="space-y-4">
                        {page.faq.map((item: any, i: number) => (
                            <div key={i} className="bg-surface-50 border border-surface-200 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all">
                                <h3 className="font-bold text-surface-900 mb-3 flex items-start gap-3">
                                    <span className="text-primary-600 font-black">Q.</span>
                                    {item.question}
                                </h3>
                                <div className="flex items-start gap-3">
                                    <span className="text-surface-400 font-black">A.</span>
                                    <p className="text-surface-600 leading-relaxed font-medium">{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Pages */}
            <section className="section-padding bg-surface-100">
                <div className="container-custom mx-auto">
                    <h2 className="font-display text-3xl text-surface-900 mb-8 text-center italic">Related Services</h2>
                    <div className="grid sm:grid-cols-3 gap-6">
                        {page.relatedRoutes.map((rel: any) => (
                            <Link
                                key={rel.slug}
                                href={rel.slug}
                                className="group bg-white border border-surface-200 hover:border-primary-500 rounded-2xl p-6 transition-all shadow-sm hover:-translate-y-1"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded ${
                                        rel.type === 'airport' ? 'bg-blue-50 text-blue-600' :
                                        rel.type === 'city' ? 'bg-purple-50 text-purple-600' :
                                        rel.type === 'border' ? 'bg-orange-50 text-orange-600' :
                                        'bg-green-50 text-green-600'
                                    }`}>
                                        {rel.type} service
                                    </span>
                                    <ChevronRight className="w-4 h-4 text-surface-300 group-hover:translate-x-1 group-hover:text-primary-600 transition-all" />
                                </div>
                                <h3 className="font-bold text-surface-900 group-hover:text-primary-600 transition-colors uppercase tracking-tight">{rel.name}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
