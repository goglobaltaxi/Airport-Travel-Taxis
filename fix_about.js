const fs = require('fs');
const path = require('path');

const filePath = 'c:/Users/Latitude 7420/Downloads/airportt ravel taxis/src/app/about/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/the Gulf&apos;s premier transport/g, "one of the Gulf's professional transport");
content = content.replace(/premium taxi/g, "scheduled taxi");
content = content.replace(/premium transportation/g, "professional transportation");
content = content.replace(/luxury VIP cars/g, "executive VIP cars");
content = content.replace(/500\+ premium vehicles/g, "500+ professional vehicles");

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed about/page.tsx');
