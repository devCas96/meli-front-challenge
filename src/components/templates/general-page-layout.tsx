import React from 'react';
import Header from '../molecules/header/header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function GeneralPageLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
