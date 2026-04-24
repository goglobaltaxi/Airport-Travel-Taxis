interface RateLimitRecord {
    count: number;
    resetAt: number;
}

const store = new Map<string, RateLimitRecord>();

// Clean up old entries every 5 minutes
setInterval(() => {
    const now = Date.now();
    store.forEach((record, key) => {
        if (now > record.resetAt) store.delete(key);
    });
}, 5 * 60 * 1000);

/**
 * Returns true if request is allowed, false if rate limited.
 * Default: 10 requests per 60 seconds per IP.
 */
export function rateLimit(ip: string, limit = 10, windowMs = 60_000): boolean {
    const now = Date.now();
    const record = store.get(ip);

    if (!record || now > record.resetAt) {
        store.set(ip, { count: 1, resetAt: now + windowMs });
        return true;
    }

    if (record.count >= limit) return false;

    record.count++;
    return true;
}

export function getClientIp(req: Request): string {
    const forwarded = req.headers.get('x-forwarded-for');
    if (forwarded) return forwarded.split(',')[0].trim();
    return '127.0.0.1';
}
