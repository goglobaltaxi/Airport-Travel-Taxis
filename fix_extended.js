const fs = require('fs');
const filePath = 'c:/Users/Latitude 7420/Downloads/airportt ravel taxis/src/lib/extendedData.ts';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/Luxurious Bus/g, "High-standard Bus");
content = content.replace(/Luxurious bus/g, "High-standard bus");

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed extendedData.ts');
