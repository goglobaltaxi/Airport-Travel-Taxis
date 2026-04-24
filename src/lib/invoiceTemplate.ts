import { generateCurrencyTable } from './currency';

export interface BookingData {
    booking_ref: string;
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    pickup_location: string;
    dropoff_location: string;
    pickup_date: string;
    pickup_time: string;
    passengers: string | number;
    vehicle_type: string;
    price?: string | number;
    currency?: string;
    payment_method?: string;
    flight_number?: string;
    notes?: string;
    issue_date?: string;
    vat_rate?: number;
}

const BRAND = {
    name: 'Airport Travel Taxis',
    website: 'www.airporttraveltaxis.com',
    email: 'booking@airporttraveltaxis.com',
    whatsapp: '+966 56 948 7569',
    primary: '#0f172a',
    accent: '#ca8a04',
    green: '#25d366',
};

const baseStyles = `
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Arial, sans-serif; background: #f1f5f9; width: 100%; }
        .wrapper { width: 100%; max-width: 100%; background: #ffffff; }
        .inner { max-width: 860px; margin: 0 auto; padding: 0 24px; }
        .letterhead { background: #ffffff; width: 100%; }
        .lh-table { width: 100%; border-collapse: collapse; }
        .lh-left { vertical-align: middle; padding: 22px 0; }
        .lh-right { vertical-align: middle; text-align: right; padding: 22px 0; }
        .lh-tag { display: inline-block; background: #0f172a; color: #ca8a04; font-size: 10px; font-weight: 800; letter-spacing: 2px; padding: 3px 10px; border-radius: 4px; text-transform: uppercase; margin-bottom: 7px; }
        .lh-name { font-size: 22px; font-weight: 900; color: #0f172a; letter-spacing: -0.5px; line-height: 1.1; text-transform: uppercase; }
        .lh-sub { font-size: 11px; color: #64748b; margin-top: 4px; }
        .lh-contact { font-size: 12px; color: #475569; line-height: 2.1; }
        .lh-divider { height: 3px; background: linear-gradient(90deg, #92400e, #ca8a04, #f59e0b, #ca8a04, #92400e); border-radius: 3px; }
        .header { background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%); padding: 28px 32px; text-align: center; width: 100%; }
        .header h1 { color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: -0.5px; }
        .header p { color: #94a3b8; font-size: 13px; margin-top: 6px; }
        .badge { display: inline-block; background: #ca8a04; color: #fff; font-size: 11px; font-weight: 700; padding: 4px 16px; border-radius: 20px; margin-top: 12px; letter-spacing: 1px; text-transform: uppercase; }
        .body { padding: 40px 32px; }
        .ref-box { background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #ca8a04; border-radius: 8px; padding: 18px 24px; margin-bottom: 32px; display: flex; justify-content: space-between; align-items: center; }
        .ref-box .ref-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #64748b; }
        .ref-box .ref-value { font-size: 22px; font-weight: 800; color: #0f172a; font-family: monospace; }
        .ref-box .date-text { font-size: 12px; color: #94a3b8; text-align: right; }
        .section { margin-bottom: 28px; }
        .section-title { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #64748b; border-bottom: 2px solid #ca8a04; padding-bottom: 8px; margin-bottom: 16px; }
        table.info { width: 100%; border-collapse: collapse; }
        table.info td { padding: 10px 0; font-size: 14px; vertical-align: top; }
        table.info td:first-child { color: #64748b; width: 160px; font-weight: 500; }
        table.info td:last-child { color: #0f172a; font-weight: 600; }
        .route-box { background: linear-gradient(135deg, #f0f9ff, #f8fafc); border: 1px solid #bae6fd; border-radius: 10px; padding: 20px 24px; }
        .route-row { display: flex; align-items: flex-start; gap: 14px; margin-bottom: 12px; }
        .route-row:last-child { margin-bottom: 0; }
        .dot { width: 12px; height: 12px; border-radius: 50%; margin-top: 4px; flex-shrink: 0; }
        .dot-green { background: #22c55e; }
        .dot-red { background: #ef4444; }
        .route-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #64748b; }
        .route-value { font-size: 16px; font-weight: 700; color: #0f172a; margin-top: 2px; }
        .price-box { background: linear-gradient(135deg, #0f172a, #1e3a5f); border-radius: 10px; padding: 24px 28px; margin: 28px 0; display: flex; justify-content: space-between; align-items: center; }
        .price-label { color: #94a3b8; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
        .price-amount { color: #ca8a04; font-size: 32px; font-weight: 800; }
        .price-note { color: #64748b; font-size: 12px; margin-top: 4px; }
        .no-price { background: #f8fafc; border: 1px dashed #e2e8f0; border-radius: 10px; padding: 18px 24px; text-align: center; color: #64748b; font-size: 14px; margin: 28px 0; }
        .whatsapp-btn { display: block; text-align: center; background: #25d366; color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 8px; font-weight: 700; font-size: 16px; margin: 28px 0; }
        .footer { background: #f8fafc; padding: 32px; text-align: center; border-top: 1px solid #e2e8f0; width: 100%; }
        .footer p { color: #94a3b8; font-size: 13px; line-height: 2; }
        .terms { background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 16px 20px; margin-top: 24px; }
        .terms p { color: #92400e; font-size: 13px; line-height: 1.9; }
        .terms strong { color: #78350f; }
        @media only screen and (max-width: 600px) {
            .body { padding: 24px 16px !important; }
            .ref-box { flex-direction: column; gap: 12px; }
            .price-box { flex-direction: column; gap: 12px; text-align: center; }
            .price-amount { font-size: 26px; }
        }
    </style>
`;

const letterheadHtml = `
<div class="letterhead">
    <div class="inner">
        <table class="lh-table">
            <tr>
                <td class="lh-left">
                    <div class="lh-tag">✈ GCC Premium Transfers</div>
                    <div class="lh-name">Airport Travel Taxis</div>
                    <div class="lh-sub">Professional Chauffeur Service — GCC Region</div>
                </td>
                <td class="lh-right">
                    <div class="lh-contact">
                        <div>🌐 www.airporttraveltaxis.com</div>
                        <div>📧 booking@airporttraveltaxis.com</div>
                        <div>📱 +966 56 948 7569</div>
                    </div>
                </td>
            </tr>
        </table>
        <div class="lh-divider"></div>
    </div>
</div>`;

export function generateInvoiceEmail(data: BookingData): string {
    const issueDate = data.issue_date || new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
    const hasPrice = data.price && Number(data.price) > 0;

    return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Invoice — ${data.booking_ref}</title>${baseStyles}</head>
<body style="margin:0;padding:0;background:#f1f5f9;width:100%;">
<div class="wrapper">
    ${letterheadHtml}
    <div class="header">
        <div class="inner">
            <h1>Tax Invoice</h1>
            <p>Official Booking & Payment Record</p>
            <span class="badge">Invoice</span>
        </div>
    </div>
    <div class="inner"><div class="body">
        <div class="ref-box">
            <div>
                <div class="ref-label">Invoice / Booking Ref</div>
                <div class="ref-value">${data.booking_ref}</div>
            </div>
            <div class="date-text">
                <div style="font-weight:600;color:#0f172a;">Issue Date</div>
                <div>${issueDate}</div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Customer Details</div>
            <table class="info">
                <tr><td>Name</td><td>${data.customer_name}</td></tr>
                <tr><td>Phone</td><td><a href="tel:${data.customer_phone}" style="color:#1d4ed8;text-decoration:none;">${data.customer_phone}</a></td></tr>
                ${data.customer_email ? `<tr><td>Email</td><td><a href="mailto:${data.customer_email}" style="color:#1d4ed8;text-decoration:none;">${data.customer_email}</a></td></tr>` : ''}
            </table>
        </div>

        <div class="section">
            <div class="section-title">Trip Details</div>
            <div class="route-box">
                <div class="route-row">
                    <div class="dot dot-green"></div>
                    <div>
                        <div class="route-label">Pickup</div>
                        <div class="route-value">${data.pickup_location}</div>
                    </div>
                </div>
                <div class="route-row">
                    <div class="dot dot-red"></div>
                    <div>
                        <div class="route-label">Drop-off</div>
                        <div class="route-value">${data.dropoff_location}</div>
                    </div>
                </div>
            </div>
            <table class="info" style="margin-top:14px;">
                <tr><td>Date</td><td>${data.pickup_date}</td></tr>
                <tr><td>Time</td><td>${data.pickup_time}</td></tr>
                <tr><td>Passengers</td><td>${data.passengers}</td></tr>
                <tr><td>Vehicle</td><td>${data.vehicle_type}</td></tr>
                ${data.flight_number ? `<tr><td>Flight No.</td><td>✈️ ${data.flight_number}</td></tr>` : ''}
                ${data.payment_method ? `<tr><td>Payment</td><td>${data.payment_method === 'cash_to_driver' ? '💵 Cash to Driver' : '💳 Online Payment'}</td></tr>` : ''}
                ${data.currency ? `<tr><td>Currency</td><td>${data.currency}</td></tr>` : ''}
                ${data.notes ? `<tr><td>Notes</td><td>${data.notes}</td></tr>` : ''}
            </table>
        </div>

        ${hasPrice ? (() => {
            const totalPrice = Number(data.price);
            const vatRate = data.vat_rate || 0;
            const hasVat = vatRate > 0;
            const subtotal = hasVat ? totalPrice / (1 + vatRate / 100) : totalPrice;
            const vatAmount = totalPrice - subtotal;
            const currency = data.currency || 'SAR';

            return `
            <div class="price-box" style="display: block;">
                ${hasVat ? `
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <div class="price-label" style="font-size: 11px;">Subtotal</div>
                    <div style="color: #94a3b8; font-weight: 600;">${currency} ${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px;">
                    <div class="price-label" style="font-size: 11px;">VAT (${vatRate}%)</div>
                    <div style="color: #94a3b8; font-weight: 600;">${currency} ${vatAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                </div>
                ` : ''}
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <div class="price-label">Total Amount</div>
                        <div class="price-note">All inclusive — no hidden charges</div>
                    </div>
                    <div style="text-align:right;">
                        <div class="price-amount">${currency} ${totalPrice.toLocaleString()}</div>
                        <div class="price-note">${hasVat ? 'Including VAT' : 'No Tax Applicable'}</div>
                    </div>
                </div>
            </div>
            ${generateCurrencyTable(totalPrice, currency)}`;
        })() : `
        <div class="no-price">
            Price will be confirmed by our team shortly via WhatsApp or email.
        </div>`}

        <div class="terms">
            <strong>Terms & Conditions:</strong>
            <p>• Payment due upon confirmation of booking.<br>
            • Free cancellation up to 24 hours before pickup.<br>
            • Vehicle may vary subject to availability (equivalent or higher class).<br>
            • This invoice serves as your booking confirmation.</p>
        </div>

        <a href="https://wa.me/966569487569" class="whatsapp-btn">💬 Contact Us on WhatsApp</a>
    </div></div>
    <div class="footer">
        <p><strong>${BRAND.name}</strong><br>
        ${BRAND.website} | ${BRAND.email}<br>
        WhatsApp: ${BRAND.whatsapp}<br><br>
        © ${new Date().getFullYear()} Airport Travel Taxis. All rights reserved.</p>
    </div>
</div>
</body></html>`;
}

export function generateQuotationEmail(data: BookingData): string {
    const issueDate = data.issue_date || new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
    const validUntil = new Date();
    validUntil.setDate(validUntil.getDate() + 7);
    const validUntilStr = validUntil.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
    const hasPrice = data.price && Number(data.price) > 0;

    return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Quotation — ${data.booking_ref}</title>${baseStyles}</head>
<body style="margin:0;padding:0;background:#f1f5f9;width:100%;">
<div class="wrapper">
    ${letterheadHtml}
    <div class="header">
        <div class="inner">
            <h1>Price Quotation</h1>
            <p>Official Quote — Valid 7 Days</p>
            <span class="badge" style="background:#1d4ed8;">Quotation</span>
        </div>
    </div>
    <div class="inner"><div class="body">
        <div class="ref-box">
            <div>
                <div class="ref-label">Quotation Ref</div>
                <div class="ref-value">${data.booking_ref}</div>
            </div>
            <div class="date-text">
                <div style="font-weight:600;color:#0f172a;">Issued</div>
                <div>${issueDate}</div>
                <div style="margin-top:4px;font-weight:600;color:#0f172a;">Valid Until</div>
                <div>${validUntilStr}</div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Prepared For</div>
            <table class="info">
                <tr><td>Name</td><td>${data.customer_name}</td></tr>
                <tr><td>Phone</td><td><a href="tel:${data.customer_phone}" style="color:#1d4ed8;text-decoration:none;">${data.customer_phone}</a></td></tr>
                ${data.customer_email ? `<tr><td>Email</td><td><a href="mailto:${data.customer_email}" style="color:#1d4ed8;text-decoration:none;">${data.customer_email}</a></td></tr>` : ''}
            </table>
        </div>

        <div class="section">
            <div class="section-title">Journey Details</div>
            <div class="route-box">
                <div class="route-row">
                    <div class="dot dot-green"></div>
                    <div>
                        <div class="route-label">Pickup Location</div>
                        <div class="route-value">${data.pickup_location}</div>
                    </div>
                </div>
                <div class="route-row">
                    <div class="dot dot-red"></div>
                    <div>
                        <div class="route-label">Destination</div>
                        <div class="route-value">${data.dropoff_location}</div>
                    </div>
                </div>
            </div>
            <table class="info" style="margin-top:14px;">
                <tr><td>Date</td><td>${data.pickup_date}</td></tr>
                <tr><td>Time</td><td>${data.pickup_time}</td></tr>
                <tr><td>Passengers</td><td>${data.passengers}</td></tr>
                <tr><td>Vehicle Class</td><td>${data.vehicle_type}</td></tr>
                ${data.flight_number ? `<tr><td>Flight No.</td><td>✈️ ${data.flight_number}</td></tr>` : ''}
                ${data.payment_method ? `<tr><td>Payment</td><td>${data.payment_method === 'cash_to_driver' ? '💵 Cash to Driver' : '💳 Online Payment'}</td></tr>` : ''}
                ${data.currency ? `<tr><td>Currency</td><td>${data.currency}</td></tr>` : ''}
                ${data.notes ? `<tr><td>Special Notes</td><td>${data.notes}</td></tr>` : ''}
            </table>
        </div>

        ${hasPrice ? (() => {
            const totalPrice = Number(data.price);
            const vatRate = data.vat_rate || 0;
            const hasVat = vatRate > 0;
            const subtotal = hasVat ? totalPrice / (1 + vatRate / 100) : totalPrice;
            const vatAmount = totalPrice - subtotal;
            const currency = data.currency || 'SAR';

            return `
            <div class="price-box" style="display: block;">
                ${hasVat ? `
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <div class="price-label" style="font-size: 11px;">Subtotal</div>
                    <div style="color: #94a3b8; font-weight: 600;">${currency} ${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px;">
                    <div class="price-label" style="font-size: 11px;">VAT (${vatRate}%)</div>
                    <div style="color: #94a3b8; font-weight: 600;">${currency} ${vatAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                </div>
                ` : ''}
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <div class="price-label">Quoted Price</div>
                        <div class="price-note">All inclusive — no hidden charges</div>
                    </div>
                    <div style="text-align:right;">
                        <div class="price-amount">${currency} ${totalPrice.toLocaleString()}</div>
                        <div class="price-note">${hasVat ? 'Including VAT' : 'No Tax Applicable'}</div>
                    </div>
                </div>
            </div>
            ${generateCurrencyTable(totalPrice, currency)}`;
        })() : `
        <div class="no-price">
            Our team will provide a competitive price quote within 2 hours via WhatsApp or email.
        </div>`}

        <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:16px 20px;margin-top:8px;">
            <p style="color:#166534;font-size:13px;font-weight:600;margin-bottom:6px;">What's Included:</p>
            <p style="color:#15803d;font-size:13px;line-height:1.8;">
                ✓ Professional licensed chauffeur<br>
                ✓ Meet & greet at pickup point<br>
                ✓ Free waiting time (60 min airports / 15 min other)<br>
                ✓ Complimentary water bottles<br>
                ✓ 24/7 customer support
            </p>
        </div>

        <div class="terms" style="margin-top:16px;">
            <strong>Quotation Terms:</strong>
            <p>• This quotation is valid for 7 days from issue date.<br>
            • Price is confirmed upon booking acceptance.<br>
            • Free cancellation up to 24 hours before pickup.<br>
            • To confirm this booking, please reply via WhatsApp or email.</p>
        </div>

        <a href="https://wa.me/966569487569?text=${encodeURIComponent(`Hi, I'd like to confirm booking ${data.booking_ref} — ${data.pickup_location} to ${data.dropoff_location} on ${data.pickup_date}`)}" class="whatsapp-btn">✅ Accept & Confirm via WhatsApp</a>
    </div></div>
    <div class="footer">
        <p><strong>${BRAND.name}</strong><br>
        ${BRAND.website} | ${BRAND.email}<br>
        WhatsApp: ${BRAND.whatsapp}<br><br>
        © ${new Date().getFullYear()} Airport Travel Taxis. All rights reserved.</p>
    </div>
</div>
</body></html>`;
}

export function generateAdminBookingEmail(data: BookingData): string {
    return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>New Booking — ${data.booking_ref}</title>${baseStyles}</head>
<body style="margin:0;padding:0;background:#f1f5f9;width:100%;">
<div class="wrapper">
    <div class="header">
        <div class="inner">
            <h1>New Booking Request</h1>
            <p>${BRAND.name} — Admin Notification</p>
            <span class="badge" style="background:#22c55e;">Action Required</span>
        </div>
    </div>
    <div class="inner"><div class="body">
        <div class="ref-box">
            <div>
                <div class="ref-label">Booking Reference</div>
                <div class="ref-value">${data.booking_ref}</div>
            </div>
            <div class="date-text">
                <div style="font-weight:600;color:#0f172a;">Received</div>
                <div>${data.issue_date || new Date().toLocaleString()}</div>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Customer</div>
            <table class="info">
                <tr><td>Name</td><td>${data.customer_name}</td></tr>
                <tr><td>Phone</td><td><a href="tel:${data.customer_phone}" style="color:#1d4ed8;">${data.customer_phone}</a></td></tr>
                ${data.customer_email ? `<tr><td>Email</td><td><a href="mailto:${data.customer_email}" style="color:#1d4ed8;">${data.customer_email}</a></td></tr>` : ''}
            </table>
        </div>

        <div class="section">
            <div class="section-title">Trip</div>
            <div class="route-box">
                <div class="route-row">
                    <div class="dot dot-green"></div>
                    <div><div class="route-label">From</div><div class="route-value">${data.pickup_location}</div></div>
                </div>
                <div class="route-row">
                    <div class="dot dot-red"></div>
                    <div><div class="route-label">To</div><div class="route-value">${data.dropoff_location}</div></div>
                </div>
            </div>
            <table class="info" style="margin-top:14px;">
                <tr><td>Date</td><td>${data.pickup_date}</td></tr>
                <tr><td>Time</td><td>${data.pickup_time}</td></tr>
                <tr><td>Passengers</td><td>${data.passengers}</td></tr>
                <tr><td>Vehicle</td><td>${data.vehicle_type}</td></tr>
                ${data.flight_number ? `<tr><td>Flight No.</td><td>✈️ ${data.flight_number}</td></tr>` : ''}
                ${data.payment_method ? `<tr><td>Payment</td><td>${data.payment_method === 'cash_to_driver' ? '💵 Cash to Driver' : '💳 Online Payment'}</td></tr>` : ''}
                ${data.currency ? `<tr><td>Currency</td><td>${data.currency}</td></tr>` : ''}
            </table>
        </div>

        <a href="https://wa.me/${data.customer_phone?.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${data.customer_name}, this is Airport Travel Taxis confirming your booking ${data.booking_ref} — ${data.pickup_location} to ${data.dropoff_location} on ${data.pickup_date}. We will assign a driver shortly.`)}" class="whatsapp-btn" style="background:#25d366;">📲 Contact Customer on WhatsApp</a>
    </div></div>
    <div class="footer">
        <p>This is an automated notification from your booking system.<br>${BRAND.name} — Admin Panel</p>
    </div>
</div>
</body></html>`;
}

export function generateBookingConfirmationEmail(data: BookingData): string {
    return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Booking Confirmed — ${data.booking_ref}</title>${baseStyles}</head>
<body style="margin:0;padding:0;background:#f1f5f9;width:100%;">
<div class="wrapper">
    <div class="header">
        <div class="inner">
            <h1>Booking Received ✓</h1>
            <p>Thank you for choosing ${BRAND.name}</p>
            <span class="badge" style="background:#22c55e;">Confirmed</span>
        </div>
    </div>
    <div class="inner"><div class="body">
        <div class="ref-box">
            <div>
                <div class="ref-label">Your Booking Reference</div>
                <div class="ref-value">${data.booking_ref}</div>
            </div>
            <div class="date-text">
                <div style="font-weight:600;color:#0f172a;">Booked On</div>
                <div>${data.issue_date || new Date().toLocaleDateString()}</div>
            </div>
        </div>

        <p style="color:#334155;font-size:15px;line-height:1.7;margin-bottom:20px;">
            Dear <strong>${data.customer_name}</strong>,<br><br>
            We have received your booking request. Our team will review your details and confirm your ride shortly. You will receive a confirmation via WhatsApp or email.
        </p>

        <div class="section">
            <div class="section-title">Your Trip Summary</div>
            <div class="route-box">
                <div class="route-row">
                    <div class="dot dot-green"></div>
                    <div><div class="route-label">Pickup</div><div class="route-value">${data.pickup_location}</div></div>
                </div>
                <div class="route-row">
                    <div class="dot dot-red"></div>
                    <div><div class="route-label">Drop-off</div><div class="route-value">${data.dropoff_location}</div></div>
                </div>
            </div>
            <table class="info" style="margin-top:14px;">
                <tr><td>Date</td><td>${data.pickup_date}</td></tr>
                <tr><td>Time</td><td>${data.pickup_time}</td></tr>
                <tr><td>Passengers</td><td>${data.passengers}</td></tr>
                <tr><td>Vehicle</td><td>${data.vehicle_type}</td></tr>
                ${data.flight_number ? `<tr><td>Flight No.</td><td>✈️ ${data.flight_number}</td></tr>` : ''}
                ${data.payment_method ? `<tr><td>Payment</td><td>${data.payment_method === 'cash_to_driver' ? '💵 Cash to Driver' : '💳 Online Payment'}</td></tr>` : ''}
                ${data.currency ? `<tr><td>Currency</td><td>${data.currency}</td></tr>` : ''}
            </table>
        </div>

        <a href="https://wa.me/966569487569" class="whatsapp-btn">💬 Contact Us on WhatsApp</a>
    </div></div>
    <div class="footer">
        <p><strong>${BRAND.name}</strong><br>
        ${BRAND.website} | ${BRAND.email}<br>
        WhatsApp: ${BRAND.whatsapp}<br><br>
        © ${new Date().getFullYear()} Airport Travel Taxis. All rights reserved.</p>
    </div>
</div>
</body></html>`;
}
