import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n-request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    // აქ არაფერი აღარ ჩაწერო, რომ ვერსიებმა არ იჩხუბონ
};

export default withNextIntl(nextConfig);