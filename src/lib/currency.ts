// Approximate fixed rates (pegged currencies are exact, others approximate)
// Base: 1 SAR = X
export const RATES_FROM_SAR: Record<string, number> = {
    SAR: 1.0000,
    AED: 0.9791,   // 1 AED = 1.021 SAR
    KWD: 0.0822,   // 1 KWD = 12.17 SAR
    BHD: 0.1003,   // 1 BHD = 9.97 SAR
    QAR: 0.9714,   // 1 QAR = 1.029 SAR
    OMR: 0.1027,   // 1 OMR = 9.74 SAR
    USD: 0.2667,   // 1 USD = 3.75 SAR (pegged)
    EUR: 0.2460,   // approx
    GBP: 0.2100,   // approx
};

export const CURRENCY_SYMBOLS: Record<string, string> = {
    SAR: 'SAR', AED: 'AED', KWD: 'KWD', BHD: 'BHD',
    QAR: 'QAR', OMR: 'OMR', USD: 'USD', EUR: 'EUR', GBP: 'GBP',
};

export const CURRENCY_FLAGS: Record<string, string> = {
    SAR: '🇸🇦', AED: '🇦🇪', KWD: '🇰🇼', BHD: '🇧🇭',
    QAR: '🇶🇦', OMR: '🇴🇲', USD: '🇺🇸', EUR: '🇪🇺', GBP: '🇬🇧',
};

export const CURRENCY_NAMES: Record<string, string> = {
    SAR: 'Saudi Riyal', AED: 'UAE Dirham', KWD: 'Kuwaiti Dinar',
    BHD: 'Bahraini Dinar', QAR: 'Qatari Riyal', OMR: 'Omani Rial',
    USD: 'US Dollar', EUR: 'Euro', GBP: 'British Pound',
};

// Convert amount from one currency to all others
export function convertToAll(amount: number, fromCurrency: string): Record<string, number> {
    const fromRate = RATES_FROM_SAR[fromCurrency] ?? 1;
    const amountInSAR = amount / fromRate;
    const result: Record<string, number> = {};
    for (const [code, rate] of Object.entries(RATES_FROM_SAR)) {
        result[code] = Math.round(amountInSAR * rate * 100) / 100;
    }
    return result;
}

export function formatAmount(amount: number, currency: string): string {
    const decimals = ['KWD', 'BHD', 'OMR'].includes(currency) ? 3 : 2;
    return amount.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

// Generate the multi-currency price table HTML for emails
export function generateCurrencyTable(amount: number, baseCurrency: string): string {
    const conversions = convertToAll(amount, baseCurrency);
    const displayCurrencies = ['SAR', 'AED', 'KWD', 'BHD', 'QAR', 'OMR', 'USD', 'EUR', 'GBP'];

    const rows = displayCurrencies.map((code) => {
        const isBase = code === baseCurrency;
        const val = conversions[code];
        return `
        <tr style="background:${isBase ? '#fffbeb' : '#fff'};">
            <td style="padding:9px 14px;font-size:13px;border-bottom:1px solid #f1f5f9;white-space:nowrap;">
                <span style="font-size:16px;margin-right:8px;">${CURRENCY_FLAGS[code]}</span>
                <span style="color:#64748b;">${CURRENCY_NAMES[code]}</span>
            </td>
            <td style="padding:9px 14px;font-size:14px;font-weight:${isBase ? '800' : '600'};color:${isBase ? '#ca8a04' : '#0f172a'};text-align:right;border-bottom:1px solid #f1f5f9;white-space:nowrap;">
                ${code} ${formatAmount(val, code)}
                ${isBase ? '<span style="font-size:10px;font-weight:600;color:#ca8a04;margin-left:6px;vertical-align:middle;border:1px solid #ca8a04;border-radius:4px;padding:1px 5px;">BASE</span>' : ''}
            </td>
        </tr>`;
    }).join('');

    return `
    <div style="margin:24px 0;">
        <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#64748b;border-bottom:2px solid #ca8a04;padding-bottom:8px;margin-bottom:0;">
            Price in All Currencies
        </p>
        <table style="width:100%;border-collapse:collapse;background:#fff;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 8px 8px;overflow:hidden;">
            ${rows}
        </table>
        <p style="font-size:10px;color:#94a3b8;margin-top:6px;text-align:right;">
            * Exchange rates are approximate. Final amount in agreed currency applies.
        </p>
    </div>`;
}
