import type { Metadata } from 'next';
import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ClientEffects from './components/ClientEffects';

export const metadata: Metadata = {
  title: 'Georgian Restaurant Marketing Agency | Tamada Group — Revenue Strategy & Marketing',
  description:
    'Tamada Group is the marketing agency built by and for Georgian restaurants in America. Revenue strategy, menu engineering, local SEO, social media, and paid advertising — designed for Georgian cuisine.',
  keywords:
    'Georgian restaurant marketing, Georgian restaurant consulting, khachapuri restaurant, Georgian food marketing, supra event marketing, Georgian restaurant SEO',
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
