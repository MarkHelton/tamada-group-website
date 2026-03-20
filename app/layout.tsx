import type { Metadata } from 'next';
import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ClientEffects from './components/ClientEffects';

export const metadata: Metadata = {
  title: 'Restaurant Revenue Consultant | Tamada Group — F&B Revenue Agency',
  description:
    'Tamada Group is an AI-powered F&B revenue agency. We doubled a hospitality group\'s revenue across 4 properties. Find where your restaurant is losing money — and fix it.',
  keywords:
    'restaurant revenue consultant, F&B revenue agency, restaurant consulting, menu engineering, hospitality revenue',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ClientEffects />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
