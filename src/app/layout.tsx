import type { Metadata } from 'next';
import GeneralPageLayout from '@/components/templates/general-page-layout';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Meli challenge',
  description: 'Search bar for find products from Meli API',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <GeneralPageLayout>{children}</GeneralPageLayout>
      </body>
    </html>
  );
}
