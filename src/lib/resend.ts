import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API);

export const FROM_BOOKING = 'Airport Travel Taxis <booking@airporttraveltaxis.com>';
export const FROM_INFO = 'Airport Travel Taxis <info@airporttraveltaxis.com>';
export const ADMIN_EMAIL = 'booking@airporttraveltaxis.com';

export function formatTime12h(timeStr: string): string {
    if (!timeStr) return '';
    try {
        const [hours, minutes] = timeStr.split(':');
        const h = parseInt(hours, 10);
        const m = parseInt(minutes, 10);
        const ampm = h >= 12 ? 'PM' : 'AM';
        const hr12 = h % 12 || 12;
        return `${hr12}:${m.toString().padStart(2, '0')} ${ampm}`;
    } catch {
        return timeStr;
    }
}

export function generateBookingRef(serial: number): string {
    return `ATT-${serial.toString().padStart(4, '0')}`;
}
