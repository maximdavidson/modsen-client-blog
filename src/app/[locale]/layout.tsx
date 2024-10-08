import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'Client Blog',
  description: 'Generated by create next app',
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div id="root">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
        <div id="modal" />
      </body>
    </html>
  );
}
