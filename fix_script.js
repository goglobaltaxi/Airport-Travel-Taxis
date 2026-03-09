const fs = require("fs");

// 1. Footer.tsx flags and text
let footer = fs.readFileSync("src/components/Footer.tsx", "utf8");
footer = footer.replace(
    /\{c\.flag\}/g,
    `<img src={\`https://flagcdn.com/w40/\${c.code.toLowerCase()}.png\`} width={24} height={16} alt={\`\${c.name} flag\`} className="inline-block rounded-sm shadow-sm" />`
);
footer = footer.replace(/Book a Ride/g, "Get a Quote");
fs.writeFileSync("src/components/Footer.tsx", footer);

// 2. about/page.tsx flags and text
let about = fs.readFileSync("src/app/about/page.tsx", "utf8");
about = about.replace(
    /<span className="text-4xl block mb-3">\{country\.flag\}<\/span>/g,
    `<span className="block mb-3 flex justify-center"><img src={\`https://flagcdn.com/w80/\${country.code.toLowerCase()}.png\`} width={40} height={30} alt={\`\${country.name} flag\`} className="rounded-md shadow-sm" /></span>`
);
about = about.replace(/Book a Ride/g, "Get a Quote");
fs.writeFileSync("src/app/about/page.tsx", about);

// 3. Navbar.tsx
let navbar = fs.readFileSync("src/components/Navbar.tsx", "utf8");
navbar = navbar.replace(/>\s*Book Now\s*</g, ">Get Quote<");
navbar = navbar.replace(/"Book Now"/g, '"Get Quote"');
fs.writeFileSync("src/components/Navbar.tsx", navbar);

// 4. BookingWidget.tsx
let bw = fs.readFileSync("src/components/BookingWidget.tsx", "utf8");
bw = bw.replace(/Book Your Ride/g, "Request a Quote");
bw = bw.replace(/Book via WhatsApp/g, "Request via WhatsApp");
fs.writeFileSync("src/components/BookingWidget.tsx", bw);

// 5. app/page.tsx
let home = fs.readFileSync("src/app/page.tsx", "utf8");
home = home.replace(/Ready to Book Your Ride\?/g, "Ready to Get Your Quote?");
home = home.replace(/>\s*Book Online\s*</g, ">Get Quote<");
fs.writeFileSync("src/app/page.tsx", home);

// 6. app/fleet/page.tsx
let fleet = fs.readFileSync("src/app/fleet/page.tsx", "utf8");
fleet = fleet.replace(/Book now and travel/g, "Request a quote now and travel");
fleet = fleet.replace(/Book Your Vehicle/g, "Get Quote for a Vehicle");
fs.writeFileSync("src/app/fleet/page.tsx", fleet);

// 7. app/vip-chauffeur/page.tsx
if(fs.existsSync("src/app/vip-chauffeur/page.tsx")){
    let vip = fs.readFileSync("src/app/vip-chauffeur/page.tsx", "utf8");
    vip = vip.replace(/Book Hourly Standby/g, "Get Quote for Hourly Standby");
    fs.writeFileSync("src/app/vip-chauffeur/page.tsx", vip);
}

// 8. app/booking/page.tsx
let booking = fs.readFileSync("src/app/booking/page.tsx", "utf8");
booking = booking.replace(/Book Your <span className="text-primary-600">Ride<\/span>/g, `Get Your <span className="text-primary-600">Quote</span>`);
fs.writeFileSync("src/app/booking/page.tsx", booking);

console.log("Replacements complete.");
