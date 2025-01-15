import { routing } from '@/i18n/routing';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: 'ka' | 'en' | 'ru' }>;
}) {
  const { locale } = await params;

  // Validate locale in case a user typed an unknown param
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Dynamically fetch messages for the current locale
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
