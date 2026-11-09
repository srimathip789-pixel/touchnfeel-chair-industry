import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Cog, FlaskConical, Package, Shield, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Manufacturing Facility | Touch N Feel Office Systems",
  description: "Explore Touch N Feel's state-of-the-art manufacturing facility in Bangalore. Learn about our production process, quality control and raw materials.",
};

const steps = [
  {
    icon: FlaskConical,
    title: "Raw Material Sourcing",
    desc: "We source only the finest materials — premium mesh fabrics, high-grade aluminium alloys, glass-filled nylon, and durable foams from certified suppliers.",
  },
  {
    icon: Cog,
    title: "Precision Fabrication",
    desc: "Our CNC-machined metal components and injection-moulded polymer parts are crafted with tight tolerances for perfect fit and long-lasting durability.",
  },
  {
    icon: CheckCircle,
    title: "Upholstery & Assembly",
    desc: "Skilled craftsmen assemble each chair by hand, ensuring the fabric is tautly fitted, foam is uniformly distributed, and every mechanism clicks perfectly.",
  },
  {
    icon: Shield,
    title: "Quality Control",
    desc: "Every chair undergoes a rigorous multi-point inspection — load testing, mechanism cycling, and finish review — before it leaves our facility.",
  },
  {
    icon: Package,
    title: "Packaging",
    desc: "Products are individually wrapped and packed in reinforced corrugated boxes to prevent damage during transit.",
  },
  {
    icon: Truck,
    title: "Dispatch & Delivery",
    desc: "We ship pan-India via trusted logistics partners, with tracking provided for all bulk orders.",
  },
];

export default function ManufacturingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-zinc-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
            Built With Precision,<br />Delivered With Pride
          </h1>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Every chair we make passes through an end-to-end in-house manufacturing process at our Bangalore facility — from raw material to finished product.
          </p>
          <Link
            href="/products"
            className="inline-flex h-12 items-center justify-center rounded-md bg-white text-zinc-900 px-8 text-sm font-medium hover:bg-zinc-200 transition-colors"
          >
            View Our Products
          </Link>
        </div>
      </section>

      {/* Factory image */}
      <section className="relative h-64 md:h-96 bg-zinc-800 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/factory.jpg"
          alt="Touch N Feel Manufacturing Facility"
          fill
          className="object-cover opacity-75"
          sizes="100vw"
        />
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary/30 border-t border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10+", label: "Years in Business" },
              { value: "50,000+", label: "Chairs Manufactured" },
              { value: "100+", label: "Product Variants" },
              { value: "32", label: "Active Dealer Partners" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-extrabold tracking-tighter mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Manufacturing Process</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              From raw material to finished product, every step is controlled in-house to guarantee the highest quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative bg-card border rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-muted-foreground mb-1">STEP {i + 1}</div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="container mx-auto px-4 md:px-6 space-y-6 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Want to See the Factory?
          </h2>
          <p className="text-zinc-300 text-lg">
            We welcome dealer visits and bulk buyer tours at our Bangalore manufacturing facility. Contact us to schedule a visit.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-md bg-white text-zinc-900 px-8 text-sm font-medium hover:bg-zinc-200 transition-colors"
          >
            Schedule a Factory Visit
          </Link>
        </div>
      </section>
    </div>
  );
}
