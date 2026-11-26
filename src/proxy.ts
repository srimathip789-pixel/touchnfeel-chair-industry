import { NextResponse, type NextRequest } from 'next/server';

/**
 * Protects /admin with HTTP Basic Auth (server-side — cannot be bypassed in the browser).
 * Set these in Vercel → Project → Settings → Environment Variables:
 *   ADMIN_USER, ADMIN_PASSWORD  (use a long random password)
 * If they are not set, /admin is blocked completely.
 */
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export function proxy(request: NextRequest) {
  const user = process.env.ADMIN_USER;
  const pass = process.env.ADMIN_PASSWORD;

  if (!user || !pass) {
    return new NextResponse('Not found', { status: 404 });
  }

  const header = request.headers.get('authorization') || '';
  if (header.startsWith('Basic ')) {
    try {
      const [u, ...rest] = atob(header.slice(6)).split(':');
      if (safeEqual(u, user) && safeEqual(rest.join(':'), pass)) {
        const res = NextResponse.next();
        res.headers.set('X-Robots-Tag', 'noindex, nofollow');
        res.headers.set('Cache-Control', 'no-store');
        return res;
      }
    } catch { /* malformed header → fall through to 401 */ }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="TouchNFeel Admin", charset="UTF-8"' },
  });
}

export const config = { matcher: ['/admin', '/admin/:path*'] };
