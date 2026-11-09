import { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone, Clock, MessageCircle, FileText } from "lucide-react";
import SchemaOrg from "@/components/seo/SchemaOrg";

export const metadata: Metadata = {
  title: "Contact Touch N Feel | Chair Manufacturer Bangalore",
  description: "Get in touch with Touch N Feel, Bangalore's premier chair manufacturer. Enquire about bulk orders, ergonomic chairs, dealer opportunities, and visit our factory in Peenya.",
  keywords: ["Chair Manufacturer Bangalore", "Touch N Feel Contact", "Office Furniture Bangalore Contact", "Ergonomic Chairs Dealer Bangalore"]
};

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Touch N Feel - Chair Manufacturer Bangalore",
    description: "Contact details for Touch N Feel office chair manufacturer in Bangalore.",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Touch N Feel",
      telephone: "+91-9945405572",
      email: "tnfjoseph@yahoo.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "No.17/4, 1st Cross, 'B' Street, Kuvempu Nagar, N.G Halli, Mysore Road",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        postalCode: "560026",
        addressCountry: "IN"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "12.9664",
        longitude: "77.5458"
      }
    }
  };

  return (
    <div className="flex flex-col">
      <SchemaOrg schema={schema} />
      {/* Hero */}
      <section className="bg-zinc-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">Get In Touch</h1>
          <p className="text-xl text-zinc-300">
            Have a query, need a bulk quote, or want to become a dealer? Our team in Bangalore is ready to help.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Subject</label>
                  <select className="w-full px-4 py-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors">
                    <option value="">Select an enquiry type</option>
                    <option value="bulk">Bulk Order</option>
                    <option value="dealer">Become a Dealer</option>
                    <option value="product">Product Information</option>
                    <option value="warranty">Warranty & Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Message *</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-12 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office & Manufacturing Facility</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        No.17/4, 1st Cross, 'B' Street,<br />
                        Kuvempu Nagar, N.G Halli,<br />
                        Mysore Road, Bangalore - 560 026
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-12 w-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a href="tel:+919945405572" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                        +91 99454 05572
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-12 w-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:tnfjoseph@yahoo.com" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                        tnfjoseph@yahoo.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-12 w-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground text-sm">
                        Monday – Saturday: 9:00 AM – 6:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-12 w-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">GST Information</h3>
                      <p className="text-muted-foreground text-sm">
                        GSTIN: 29ABCDE1234F1Z5
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">Chat on WhatsApp</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Get instant replies from our sales team on WhatsApp. Available during business hours.
                </p>
                <a
                  href="https://wa.me/919945405572?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#20b958] transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  Start WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Visit Our Showroom</h2>
            <div className="aspect-video w-full rounded-2xl overflow-hidden border shadow-sm">
              {/* Google Map Embed */}
              <iframe 
                src="https://www.google.com/maps?q=Touch+N+Feel+Office+Systems+No.17/4,+1st+Cross,+'B'+Street,+Kuvempu+Nagar,+N.G+Halli,+Mysore+Road,+Bangalore-560026&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Touch N Feel Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
