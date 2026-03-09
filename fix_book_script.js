const fs = require("fs");

// 1. app/layout.tsx
let layout = fs.readFileSync("src/app/layout.tsx", "utf8");
layout = layout.replace(/Book airport transfers/g, "Request airport transfers");
fs.writeFileSync("src/app/layout.tsx", layout);

// 2. app/events-and-weddings/page.tsx
let events = fs.readFileSync("src/app/events-and-weddings/page.tsx", "utf8");
events = events.replace(/Book premium fleets/g, "Request fleets");
fs.writeFileSync("src/app/events-and-weddings/page.tsx", events);

// 3. app/city/[slug]/page.tsx
let city = fs.readFileSync("src/app/city/[slug]/page.tsx", "utf8");
city = city.replace(/Book a private chauffeur/g, "Request a private chauffeur");
fs.writeFileSync("src/app/city/[slug]/page.tsx", city);

// 4. app/booking/page.tsx
let booking = fs.readFileSync("src/app/booking/page.tsx", "utf8");
booking = booking.replace(/Book Your Airport Taxi/g, "Get an Airport Taxi Quote");
booking = booking.replace(/Book a premium/g, "Request an");
booking = booking.replace(/Book Your Ride/g, "Get Your Quote");
booking = booking.replace(/Book instantly/g, "Request instantly");
booking = booking.replace(/Instant Booking/g, "Instant Quotes");
fs.writeFileSync("src/app/booking/page.tsx", booking);

console.log("Book replacements complete.");
