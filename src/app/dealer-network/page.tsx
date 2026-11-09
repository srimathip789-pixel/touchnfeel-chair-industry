import { Metadata } from "next";
import SchemaOrg from "@/components/seo/SchemaOrg";

export const metadata: Metadata = {
  title: "Dealer Network | Become a Chair Distributor",
  description: "Join Touch N Feel's dealer network. We are the leading chair manufacturer in Bangalore offering lucrative margins for our office and ergonomic chair distributors.",
};

export default function DealerNetwork() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Dealer Network - Touch N Feel",
    description: "Information on becoming a dealer or distributor for our premium office chairs.",
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <SchemaOrg schema={schema} />
      <h1 className="text-4xl font-bold mb-8 text-center">Become a Touch N Feel Authorized Dealer</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground mb-8 text-center">
          Partner with Bangalore's leading chair manufacturer and grow your business with our premium ergonomic, office, and hospital furniture.
        </p>
        
        <h2 className="text-2xl font-semibold mt-12 mb-4">Why Partner With Us?</h2>
        <p>As an authorized dealer for Touch N Feel, you gain access to an extensive catalog of over 300 chair models. Our manufacturing facility in Peenya ensures consistent quality, timely deliveries, and highly competitive B2B pricing that guarantees excellent profit margins.</p>
        
        <ul className="list-disc pl-6 mb-8">
          <li><strong>High Margins:</strong> Enjoy lucrative wholesale pricing exclusively for our dealer network.</li>
          <li><strong>Quality Assurance:</strong> ISO 9001:2015 certified manufacturing with BIFMA compliant components.</li>
          <li><strong>Marketing Support:</strong> Receive catalogs, fabric swatches, and digital assets to help you sell.</li>
          <li><strong>Priority Dispatch:</strong> Fast-tracked production for dealer orders to meet your client deadlines.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Our Manufacturing Edge</h2>
        <p>Unlike importers, we are original equipment manufacturers (OEM). This means we have complete control over the production line—from the injection molding of nylon bases to the cutting and stitching of premium upholstery. If your clients require custom branding or specific color matching, our facility can accommodate it seamlessly.</p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">How to Apply</h2>
        <p>If you have an established furniture retail outlet or a B2B project management firm, we would love to hear from you. Please fill out our dealer registration form on the contact page or email us directly at dealers@touchnfeel.com with your company profile and GST details.</p>
        
        <div className="mt-12 p-8 bg-card border rounded-2xl text-center">
          <h3 className="text-xl font-bold mb-4">Ready to Grow Your Business?</h3>
          <p className="mb-6 text-muted-foreground">Contact our wholesale division today to request the latest dealer price list and catalog.</p>
          <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-xl bg-emerald-600 text-white font-semibold px-8 hover:bg-emerald-700 transition-colors">
            Register as a Dealer
          </a>
        </div>
      </div>
    </div>
  );
}
