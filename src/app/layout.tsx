
import type { Metadata } from 'next';
import { SmoothScrollProvider } from "@/components/ui/smooth-scroll-provider";
import { Nunito, Nunito_Sans } from 'next/font/google';
import './globals.css';
import { LenisSmoothScroll } from '@/components/ui/lenis-smooth-scroll';
import { WhatsAppFloat } from '@/components/ui/whatsapp-float';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-heading',
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'R.C.M Matriculation Elementary School | Avadi',
  description: 'R.C.M Matriculation Elementary School in Avadi offers a caring, foundational elementary education focused on young learners.',
  keywords: ['R.C.M Matriculation Elementary School', 'Avadi elementary school', 'primary matriculation school Avadi'],
  alternates: {
    canonical: 'https://rcmmatric.edu.in',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness', 'School'],
  name: 'R.C.M Matriculation Elementary School',
  url: 'https://rcmmatric.edu.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Avadi Campus',
    addressLocality: 'Avadi',
    addressRegion: 'Tamil Nadu',
    postalCode: '600054',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.11386,
    longitude: 80.10739,
  },
  hasMap: 'https://maps.google.com/?q=13.11386,80.10739',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.variable} ${nunitoSans.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-[#F8FAFC] text-[#475569] antialiased min-h-screen">
        <LenisSmoothScroll>
          {children}
          <WhatsAppFloat />
        </LenisSmoothScroll>
      </body>
    </html>
  );
}