import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AIChatbot from "@/components/layout/AIChatbot";
import FloatingActions from "@/components/layout/FloatingActions";
import SchemaOrg from "@/components/seo/SchemaOrg";
import Analytics from "@/components/seo/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Chair Manufacturer in Bangalore | Touch N Feel Premium Furniture",
    template: "%s | Touch N Feel",
  },
  description: "Top chair manufacturer in Bangalore. Premium executive chairs, workstation, ergonomic, hospital, and school furniture. Wholesale and retail available.",
  keywords: ["Chair Manufacturer Bangalore", "Office Chair Manufacturer Bangalore", "Ergonomic Chairs Bangalore", "Visitor Chairs Bangalore", "Hospital Furniture Bangalore"],
  metadataBase: new URL("https://www.touchnfeelchiar.in"),
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.touchnfeelchiar.in",
    siteName: "Touch N Feel",
    title: "Chair Manufacturer in Bangalore | Touch N Feel",
    description: "Top chair manufacturer in Bangalore. Premium executive chairs, workstation, ergonomic, hospital, and school furniture.",
    images: [
      {
        url: "/og-image.jpg", // Placeholder
        width: 1200,
        height: 630,
        alt: "Touch N Feel Chair Manufacturer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chair Manufacturer in Bangalore | Touch N Feel",
    description: "Top chair manufacturer in Bangalore. Premium executive chairs, workstation, ergonomic, hospital, and school furniture.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "lpHXBDJPXaC5lYFOcizo4tYn53IRMWhxv4snyvob9Pc",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "FurnitureStore", "Manufacturer", "LocalBusiness"],
  name: "Touch N Feel",
  url: "https://www.touchnfeelchiar.in",
  logo: "https://www.touchnfeelchiar.in/logo.png",
  image: "https://www.touchnfeelchiar.in/og-image.jpg",
  description: "Leading chair manufacturer in Bangalore offering premium ergonomic, office, and hospital chairs.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Industrial Area, Peenya",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560058",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "13.0285",
    longitude: "77.5197"
  },
  telephone: "+91-9876543210",
  email: "info@touchnfeel.com",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00"
    }
  ],
  sameAs: [
    "https://www.facebook.com/touchnfeel",
    "https://www.linkedin.com/company/touchnfeel",
    "https://www.instagram.com/touchnfeel"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Touch N Feel",
  url: "https://www.touchnfeelchiar.in",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.touchnfeelchiar.in/products?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-foreground`}>
        <Analytics />
        <SchemaOrg schema={[localBusinessSchema, websiteSchema]} />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <AIChatbot />
        <FloatingActions />
      </body>
    </html>
  );
}
