import { routing } from '@/i18n/routing';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware(routing);

export const config = {
  matcher: [
    '/', // Root
    '/(en|ka|ru)/:path*', // Valid locale prefixes
    '/((?!_next|_vercel|api|.*\\..*).*)', // Handle non-static assets
  ],
};
