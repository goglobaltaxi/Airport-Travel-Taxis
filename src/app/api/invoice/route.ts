import { NextRequest, NextResponse } from 'next/server';
import { resend, FROM_BOOKING, generateBookingRef, formatTime12h } from '@/lib/resend';
import { generateInvoiceEmail, generateQuotationEmail } from '@/lib/invoiceTemplate';
import { htmlToPdf } from '@/lib/generatePdf';

// POST /api/invoice
// Admin sends invoice or quotation to customer on demand
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { type, booking, price, vat_rate } = body;

        if (!booking || !booking.customer_email) {
            return NextResponse.json({ error: 'Booking data and customer email are required' }, { status: 400 });
        }

        if (!['invoice', 'quotation'].includes(type)) {
            return NextResponse.json({ error: 'Type must be invoice or quotation' }, { status: 400 });
        }

        const booking_ref = booking.booking_id_serial
            ? generateBookingRef(booking.booking_id_serial)
            : `ATT-${booking.id?.substring(0, 6).toUpperCase()}`;

        // Generate sequential document number: INV-2024-0042 / QUO-2024-0042
        const year = new Date().getFullYear();
        const serial = booking.booking_id_serial
            ? String(booking.booking_id_serial).padStart(4, '0')
            : booking.id?.substring(0, 4).toUpperCase() || '0001';
        const documentNumber = type === 'invoice'
            ? `INV-${year}-${serial}`
            : `QUO-${year}-${serial}`;

        const emailData = {
            booking_ref: `${booking_ref} · ${documentNumber}`,
            customer_name: booking.customer_name,
            customer_email: booking.customer_email,
            customer_phone: booking.customer_phone,
            pickup_location: booking.pickup_location,
            dropoff_location: booking.dropoff_location,
            pickup_date: booking.pickup_date,
            pickup_time: formatTime12h(booking.pickup_time),
            passengers: booking.passengers,
            vehicle_type: booking.vehicle_type,
            price: price || '',
            currency: booking.currency || 'SAR',
            payment_method: booking.payment_method || 'cash_to_driver',
            flight_number: booking.flight_number || '',
            notes: booking.notes || '',
            vat_rate: vat_rate ? parseFloat(vat_rate) : undefined,
            issue_date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }),
        };

        const html = type === 'invoice'
            ? generateInvoiceEmail(emailData)
            : generateQuotationEmail(emailData);

        const subject = type === 'invoice'
            ? `Invoice ${documentNumber} — Airport Travel Taxis`
            : `Your Quotation ${documentNumber} — Airport Travel Taxis`;

        const pdfFilename = type === 'invoice'
            ? `${documentNumber}.pdf`
            : `${documentNumber}.pdf`;

        // Generate PDF attachment
        let pdfAttachment: { filename: string; content: Buffer } | undefined;
        try {
            const pdfBuffer = await htmlToPdf(html);
            pdfAttachment = { filename: pdfFilename, content: pdfBuffer };
        } catch (pdfErr) {
            console.error('[INVOICE API] PDF generation failed, sending email without attachment:', pdfErr);
        }

        const result = await resend.emails.send({
            from: FROM_BOOKING,
            to: [booking.customer_email],
            subject,
            html,
            ...(pdfAttachment ? { attachments: [pdfAttachment] } : {}),
        });

        if (result.error) {
            console.error('[INVOICE API] Resend error:', result.error);
            return NextResponse.json({ error: 'Failed to send email', details: result.error }, { status: 500 });
        }

        return NextResponse.json({
            success: true,
            type,
            booking_ref,
            document_number: documentNumber,
            emailId: result.data?.id,
            pdfAttached: !!pdfAttachment,
        });

    } catch (error) {
        console.error('[INVOICE API] Fatal error:', error);
        return NextResponse.json({ error: 'Internal server error', details: String(error) }, { status: 500 });
    }
}
