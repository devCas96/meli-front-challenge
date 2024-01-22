import GeneralPageLayout from '@/components/templates/general-page-layout';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import '../styles/globals.css';

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'Meli challenge',
  description: 'Search bar for find products from Meli API',
};

export default function RootLayout(props: Props) {
  const { children } = props;

  return (
    <html lang='en'>
      <body>
        <GeneralPageLayout>{children}</GeneralPageLayout>
      </body>
    </html>
  );
}
