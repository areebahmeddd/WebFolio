import type React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Areeb Ahmed',
  description: 'Personal portfolio website of Areeb Ahmed',
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤖</text></svg>',
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-background font-['Helvetica_Neue'] tracking-wider text-white`}
      >
        <div className="mx-auto max-w-screen-md p-6">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
