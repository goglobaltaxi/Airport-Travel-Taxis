const fs = require('fs');

const filePath = 'c:/Users/Latitude 7420/Downloads/airportt ravel taxis/src/lib/extendedData.ts';
let content = fs.readFileSync(filePath, 'utf8');

const replacements = [
    { from: /luxury/gi, to: 'high-standard' },
    { from: /premium/gi, to: 'scheduled' },
    { from: /elite/gi, to: 'professional' },
    { from: /best/gi, to: 'leading' },
    { from: /top-rated/gi, to: 'professional' },
    { from: /top-tier/gi, to: 'professional' },
    { from: /world-class/gi, to: 'professional' },
    { from: /AI generated/gi, to: 'professional' },
    { from: /Exclusive/gi, to: 'Professional' },
    { from: /Executive/gi, to: 'Professional' },
    { from: /Luxury/gi, to: 'Professional' },
    { from: /Premium/gi, to: 'Scheduled' },
];

replacements.forEach(({ from, to }) => {
    content = content.replace(from, to);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Finished cleaning extendedData.ts');
