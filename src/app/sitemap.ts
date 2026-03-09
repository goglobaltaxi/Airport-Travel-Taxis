import { airports, routes, cities, borderCrossings } from '@/lib/data';
import { embassyPages } from '@/lib/embassyData';
import { hospitalPages } from '@/lib/hospitalData';
import { destinationPages } from '@/lib/destinationData';
import { eventPages } from '@/lib/eventData';
import { mallPages } from '@/lib/mallData';
import { businessPages } from '@/lib/businessData';
import { universityPages } from '@/lib/universityData';
import { landmarkPages } from '@/lib/landmarkData';
import { portPages } from '@/lib/portData';
import { attractionPages } from '@/lib/attractionData';
import { stadiumPages } from '@/lib/stadiumData';
import { stationPages } from '@/lib/stationData';
import { governmentPages } from '@/lib/governmentData';
import { terminalPages } from '@/lib/terminalData';
import { transferPages } from '@/lib/transferData';
import { airportBorderPages } from '@/lib/airportBorderData';
import { hotelTransferPages } from '@/lib/hotelTransferData';
import { areaTransferPages } from '@/lib/areaTransferData';
import { longDistancePages } from '@/lib/longDistanceData';
import { corporateChauffeurPages } from '@/lib/corporateData';
import { comparisonPages } from '@/lib/comparisonData';
import { travelGuidePages } from '@/lib/travelGuideData';
import { servicePages } from '@/lib/serviceData';
import { districtTaxiPages } from '@/lib/districtData';
import { howToTravelPages } from '@/lib/howToTravelData';
import { cityRoutePages } from '@/lib/cityRouteData';
import { gccTravelPages } from '@/lib/gccTravelData';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://airporttraveltaxis.com';

    const staticPages = [
        { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1.0 },
        { url: `${baseUrl}/fleet`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
        { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
        { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
        { url: `${baseUrl}/booking`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
        { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
        { url: `${baseUrl}/events-and-weddings`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
        { url: `${baseUrl}/vip-chauffeur`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
        { url: `${baseUrl}/drive-with-us`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
        // Hajj taxi routes
        { url: `${baseUrl}/hajj-taxi-jeddah-airport-to-makkah`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.9 },
        { url: `${baseUrl}/hajj-taxi-makkah-to-mina`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.9 },
        { url: `${baseUrl}/hajj-taxi-mina-to-arafat`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.9 },
        { url: `${baseUrl}/hajj-taxi-arafat-to-muzdalifah`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.9 },
        { url: `${baseUrl}/hajj-taxi-makkah-to-madinah`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.9 },
        // Umrah travel guides
        { url: `${baseUrl}/umrah-travel-guide-jeddah-airport-to-makkah`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/umrah-travel-guide-makkah-to-madinah`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/umrah-travel-guide-madinah-airport-to-madinah-city`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/umrah-travel-guide-transportation-in-makkah`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/umrah-travel-guide-between-holy-cities`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        // Hajj travel guides
        { url: `${baseUrl}/hajj-travel-guide-makkah-to-mina`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/hajj-travel-guide-mina-to-arafat`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/hajj-travel-guide-arafat-to-muzdalifah`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/hajj-travel-guide-transportation-during-hajj`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/hajj-travel-guide-travel-planning`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        // Taxi-to destination pages
        { url: `${baseUrl}/taxi-to-masjid-al-haram`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-to-masjid-an-nabawi`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-to-mina-camps`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-to-mount-arafat`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-to-muzdalifah`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-to-jamarat-bridge`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-to-jannat-al-baqi-cemetery`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${baseUrl}/taxi-to-quba-mosque`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
        // Cross-border GCC routes
        { url: `${baseUrl}/taxi-from-saudi-arabia-to-qatar`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-saudi-arabia-to-bahrain`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-saudi-arabia-to-kuwait`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-uae-to-saudi-arabia`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-qatar-to-saudi-arabia`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-kuwait-to-saudi-arabia`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        // Airport to border routes
        { url: `${baseUrl}/taxi-from-dubai-airport-to-saudi-border`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-riyadh-airport-to-qatar-border`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-dammam-airport-to-bahrain-causeway`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-kuwait-airport-to-saudi-border`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-doha-airport-to-saudi-border`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        // Airport to holy city pilgrim transfers
        { url: `${baseUrl}/taxi-from-jeddah-airport-to-makkah`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-jeddah-airport-to-madinah`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-madinah-airport-to-madinah-city`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-madinah-airport-to-makkah`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-taif-airport-to-makkah`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        // Hotel intercity transfers
        { url: `${baseUrl}/taxi-from-makkah-hotel-to-madinah`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-madinah-hotel-to-makkah`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        // Kuwait – Saudi Arabia city routes
        { url: `${baseUrl}/taxi-from-kuwait-city-to-riyadh`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-kuwait-city-to-dammam`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-kuwait-city-to-khobar`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-kuwait-city-to-jubail`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-riyadh-to-kuwait-city`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-dammam-to-kuwait-city`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-khobar-to-kuwait-city`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-jubail-to-kuwait-city`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-kuwait-city-to-saudi-border-nuwaiseeb`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-saudi-border-nuwaiseeb-to-kuwait-city`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        // Additional missing routes
        { url: `${baseUrl}/taxi-from-jeddah-airport-to-makkah-hotel`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-madinah-airport-to-madinah-hotel`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-madinah-to-madinah-airport`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-madinah-to-makkah`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-makkah-to-jeddah-airport`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${baseUrl}/taxi-from-makkah-to-madinah`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    ];

    const airportPages = airports.map((airport) => ({
        url: `${baseUrl}/airport/${airport.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const routePages = routes.map((route) => ({
        url: `${baseUrl}/routes/${route.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const cityPages = cities.map((city) => ({
        url: `${baseUrl}/city/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const borderPages = borderCrossings.map((border) => ({
        url: `${baseUrl}/border/${border.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const embassyPagesList = embassyPages.map((ep) => ({
        url: `${baseUrl}/taxi-to-embassy/${ep.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const hospitalPagesList = hospitalPages.map((hp) => ({
        url: `${baseUrl}/taxi-to-hospital/${hp.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const destinationPagesList = destinationPages.map((dp) => ({
        url: `${baseUrl}/taxi-to-destination/${dp.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const eventPagesList = eventPages.map((ep) => ({
        url: `${baseUrl}/taxi-to-event/${ep.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const mallPagesList = mallPages.map((mp) => ({
        url: `${baseUrl}/taxi-to-mall/${mp.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const businessPagesList = businessPages.map((bp) => ({
        url: `${baseUrl}/taxi-to-business/${bp.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const universityPagesList = universityPages.map((up) => ({
        url: `${baseUrl}/taxi-to-university/${up.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const landmarkPagesList = landmarkPages.map((lp) => ({
        url: `${baseUrl}/taxi-to-landmark/${lp.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const portPagesList = portPages.map((pp) => ({
        url: `${baseUrl}/taxi-to-port/${pp.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const attractionPagesList = attractionPages.map((ap) => ({
        url: `${baseUrl}/taxi-to-attraction/${ap.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const stadiumPagesList = stadiumPages.map((sp) => ({
        url: `${baseUrl}/taxi-to-stadium/${sp.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const stationPagesList = stationPages.map((sp) => ({
        url: `${baseUrl}/taxi-to-station/${sp.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const governmentPagesList = governmentPages.map((gp) => ({
        url: `${baseUrl}/taxi-to-government/${gp.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const terminalPagesList = terminalPages.map((tp) => ({
        url: `${baseUrl}/taxi-to-terminal/${tp.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const transferPagesList = transferPages.map((tp) => ({
        url: `${baseUrl}/taxi-from-${tp.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const airportBorderPagesList = airportBorderPages.map((abp) => ({
        url: `${baseUrl}/taxi-from-${abp.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const hotelTransferPagesList = hotelTransferPages.map((htp) => ({
        url: `${baseUrl}/taxi-from-${htp.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const areaTransferPagesList = areaTransferPages.map((atp) => ({
        url: `${baseUrl}/taxi-from-${atp.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const longDistancePagesList = longDistancePages.map((ldp) => ({
        url: `${baseUrl}/long-distance-taxi-${ldp.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const corporatePagesList = corporateChauffeurPages.map((cp) => ({
        url: `${baseUrl}/corporate-chauffeur-${cp.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const comparisonPagesList = comparisonPages.map((cp) => ({
        url: `${baseUrl}/best-way-to-travel-${cp.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    const travelGuidePagesList = travelGuidePages.map((tgp) => ({
        url: `${baseUrl}/travel-guide-${tgp.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    const servicePagesList = servicePages.map((sp) => ({
        url: `${baseUrl}/service-${sp.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    const districtPagesList = districtTaxiPages.map((dp) => ({
        url: `${baseUrl}/taxi-service-${dp.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const howToTravelPagesList = howToTravelPages.map((ht) => ({
        url: `${baseUrl}/how-to-travel-${ht.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const cityRoutePagesList = cityRoutePages.map((cr) => ({
        url: `${baseUrl}/taxi-from-${cr.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const gccTravelPagesList = gccTravelPages.map((gtp) => ({
        url: `${baseUrl}/gcc-travel-${gtp.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...airportPages, ...routePages, ...cityPages, ...borderPages, ...embassyPagesList, ...hospitalPagesList, ...destinationPagesList, ...eventPagesList, ...mallPagesList, ...businessPagesList, ...universityPagesList, ...landmarkPagesList, ...portPagesList, ...attractionPagesList, ...stadiumPagesList, ...stationPagesList, ...governmentPagesList, ...terminalPagesList, ...transferPagesList, ...airportBorderPagesList, ...hotelTransferPagesList, ...areaTransferPagesList, ...longDistancePagesList, ...corporatePagesList, ...comparisonPagesList, ...travelGuidePagesList, ...servicePagesList, ...districtPagesList, ...howToTravelPagesList, ...cityRoutePagesList, ...gccTravelPagesList];
}
