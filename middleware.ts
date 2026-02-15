import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // ყურადღება: აქ (ge|en) უნდა იყოს
  matcher: ['/', '/(ge|en)/:path*']
};