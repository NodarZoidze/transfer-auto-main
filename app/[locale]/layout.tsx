import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import HeaderComponent from "@/components/Header"; // შენი იმპორტები დატოვე როგორც არის
import FooterComponent from "@/components/FooterComponent"; // შენი იმპორტები დატოვე როგორც არის
import "../globals.css";

// ✅ აი, აქ ვქმნით 'ge'-ს!
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // ამოწმებს, არის თუ არა 'ge' სიაში
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <HeaderComponent />
          {children}
          <FooterComponent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}