const fs = require("fs");

// 1. RouteCard.tsx
let rc = fs.readFileSync("src/components/RouteCard.tsx", "utf8");
rc = rc.replace(
  /<span className="text-primary-600 font-bold">\{price\}<\/span>/g,
  `<span className="btn-primary text-xs !px-4 !py-1.5 rounded-full inline-block">Get Quote</span>`
);
fs.writeFileSync("src/components/RouteCard.tsx", rc);

// 2. FleetCard.tsx
let fc = fs.readFileSync("src/components/FleetCard.tsx", "utf8");
fc = fc.replace(
  /<div>\s*<p className="text-xs text-surface-500">Starting from<\/p>\s*<p className="text-lg font-bold text-primary-600">AED \{vehicle\.pricePerKm\}\/km<\/p>\s*<\/div>/g,
  `<div>
                        <a href="/booking" className="btn-primary text-sm !px-5 !py-2 inline-block">Get Quote</a>
                    </div>`
);
fc = fc.replace(
  /<a href="\/booking" className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors group-hover:translate-x-1 transform duration-300">\s*Book Now ?\s*<\/a>/g,
  `<a href="/booking" className="text-sm font-medium text-surface-500 hover:text-primary-600 transition-colors group-hover:translate-x-1 transform duration-300">
                        Details ?
                    </a>`
);
fs.writeFileSync("src/components/FleetCard.tsx", fc);

// 3. app/fleet/page.tsx
let fpg = fs.readFileSync("src/app/fleet/page.tsx", "utf8");
fpg = fpg.replace(
  /<td key=\{v\.id\} className="p-4 text-center text-primary-600 font-semibold text-sm">AED \{v\.pricePerKm\}<\/td>/g,
  `<td key={v.id} className="p-4 text-center"><a href="/booking" className="btn-primary text-xs !px-3 !py-1 inline-block">Get Quote</a></td>`
);
fs.writeFileSync("src/app/fleet/page.tsx", fpg);

// 4. app/city/[slug]/page.tsx
if(fs.existsSync("src/app/city/[slug]/page.tsx")){
    let cpg = fs.readFileSync("src/app/city/[slug]/page.tsx", "utf8");
    cpg = cpg.replace(
    /<span className="text-primary-600 font-bold">\{route\.price\}<\/span>/g,
    `<span className="btn-primary text-xs !px-3 !py-1 rounded-full inline-block">Get Quote</span>`
    );
    fs.writeFileSync("src/app/city/[slug]/page.tsx", cpg);
}

// 5. app/airport/[slug]/page.tsx
if(fs.existsSync("src/app/airport/[slug]/page.tsx")){
    let apg = fs.readFileSync("src/app/airport/[slug]/page.tsx", "utf8");
    apg = apg.replace(
    /<span className="text-primary-600 font-bold">\{route\.price\}<\/span>/g,
    `<span className="btn-primary text-xs !px-3 !py-1 rounded-full inline-block">Get Quote</span>`
    );
    fs.writeFileSync("src/app/airport/[slug]/page.tsx", apg);
}

// 6. src/app/booking/page.tsx
let bpg = fs.readFileSync("src/app/booking/page.tsx", "utf8");
bpg = bpg.replace(/Get an instant price estimate and book in seconds/g, "Get an instant quote and book in seconds");
bpg = bpg.replace(/Get Price/g, "Get Quote");
bpg = bpg.replace(/Receive an instant, transparent price estimate with no hidden fees/g, "Receive an instant, transparent quote with no hidden fees");
bpg = bpg.replace(/Fixed Pricing/g, "Competitive Pricing");
bpg = bpg.replace(/The price you see is the price you pay\. No surge, no hidden fees/g, "No surge, no hidden fees. Request a quote for the best rates");
fs.writeFileSync("src/app/booking/page.tsx", bpg);

// 7. BookingWidget.tsx
let bw = fs.readFileSync("src/components/BookingWidget.tsx", "utf8");
bw = bw.replace(
  /AED \{\(selectedVehicle\.pricePerKm \* \(Math\.random\(\) \* 100 \+ 50\)\)\.toFixed\(0\)\}/g,
  `<span className="text-lg">Quote Provided on Request</span>`
);
bw = bw.replace(
  /\*Final price may vary based on actual distance/g,
  "*Please submit your request for an accurate quote"
);
fs.writeFileSync("src/components/BookingWidget.tsx", bw);

// 8. app/about/page.tsx
let abpg = fs.readFileSync("src/app/about/page.tsx", "utf8");
abpg = abpg.replace(/Fixed prices, no surprises/, "Transparent Quotes");
abpg = abpg.replace(/Transparent pricing for all routes/, "Clear and upfront quotes for all routes");
fs.writeFileSync("src/app/about/page.tsx", abpg);

// 9. app/page.tsx
let home = fs.readFileSync("src/app/page.tsx", "utf8");
home = home.replace(
  /priceRange: '\$\$',/g,
  `priceRange: 'Variable',`
);
fs.writeFileSync("src/app/page.tsx", home);


console.log("Done");
