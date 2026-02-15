import { getRequestConfig } from 'next-intl/server';
import { routing } from './i18n/routing';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    // თუ ენა არ არის ვალიდური, გადავდივართ ge-ზე
    if (!locale || !routing.locales.includes(locale as any)) {
        locale = routing.defaultLocale; // ეს ახლა 'ge' არის
    }

    return {
        locale,
        messages: (await import(`./messages/${locale}.json`)).default
    };
});