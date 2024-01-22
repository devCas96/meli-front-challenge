import GeneralPageLayout from '@/components/templates/general-page-layout';
import { ROOT_URL } from '@/constants/globals';
import { Locales } from '@/constants/locales';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import '../styles/globals.css';

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL(ROOT_URL),
  title: 'Meli challenge',
  description:
    'Challenge focused on build a small clone of Meli with results page and product detail page.',
};

export default function RootLayout(props: Props) {
  const { children } = props;

  return (
    <html lang={Locales.ES_AR}>
      <body>
        <GeneralPageLayout>{children}</GeneralPageLayout>
      </body>
    </html>
  );
}
