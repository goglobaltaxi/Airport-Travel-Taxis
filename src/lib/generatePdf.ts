import Chromium from '@sparticuz/chromium-min';
import puppeteer from 'puppeteer-core';

const CHROMIUM_PACK_URL =
    'https://github.com/Sparticuz/chromium/releases/download/v147.0.0/chromium-v147.0.0-pack.tar';

const LOCAL_CHROME_PATHS = [
    process.env.CHROME_PATH,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
].filter(Boolean) as string[];

async function getExecutablePath(): Promise<string> {
    if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME) {
        return Chromium.executablePath(CHROMIUM_PACK_URL);
    }
    const { existsSync } = await import('fs');
    for (const p of LOCAL_CHROME_PATHS) {
        if (existsSync(p)) return p;
    }
    return Chromium.executablePath(CHROMIUM_PACK_URL);
}

export async function htmlToPdf(html: string): Promise<Buffer> {
    const isServerless = !!(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME);
    const executablePath = await getExecutablePath();

    const browser = await puppeteer.launch({
        args: isServerless
            ? Chromium.args
            : ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
        executablePath,
        headless: true,
    });
    try {
        const page = await browser.newPage();
        await page.setContent(html, { waitUntil: 'domcontentloaded' });
        const pdf = await page.pdf({
            format: 'A4',
            printBackground: true,
            margin: { top: '0', right: '0', bottom: '0', left: '0' },
        });
        return Buffer.from(pdf);
    } finally {
        await browser.close();
    }
}
