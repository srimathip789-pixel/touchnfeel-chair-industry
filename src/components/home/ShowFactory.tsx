import Image from "next/image";
import { Users, Building2, Cog, TrendingUp, ShieldCheck } from "lucide-react";

interface ShowFactoryProps {
  images?: string[];
}

export default function ShowFactory({ images = [] }: ShowFactoryProps) {
  const stats = [
    { label: "Employees", value: "50+", icon: <Users className="w-6 h-6 text-emerald-500" /> },
    { label: "Factory Size", value: "10,000 sqft", icon: <Building2 className="w-6 h-6 text-emerald-500" /> },
    { label: "Latest Machinery", value: "Imported", icon: <Cog className="w-6 h-6 text-emerald-500" /> },
    { label: "Daily Capacity", value: "500+ Units", icon: <TrendingUp className="w-6 h-6 text-emerald-500" /> },
  ];

  const hasImages = images && images.length > 0;

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-900/10 blur-3xl -z-10 transform translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className={`grid grid-cols-1 ${hasImages ? 'lg:grid-cols-2' : ''} gap-16 items-center`}>
          
          {/* Content */}
          <div className="space-y-8 max-w-3xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold tracking-wide uppercase">
              <ShieldCheck className="w-4 h-4" />
              Made in India
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              State-of-the-Art <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                Manufacturing Facility
              </span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
              We take pride in our in-house manufacturing unit located in Bangalore. Equipped with the latest imported machinery and a skilled workforce, we ensure every chair meets global quality standards.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-2 p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:border-emerald-500/30 transition-colors">
                  {stat.icon}
                  <span className="text-2xl font-bold text-white mt-2">{stat.value}</span>
                  <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image Gallery */}
          {hasImages && (
            <div className="grid grid-cols-2 gap-4 h-[600px]">
              <div className="col-span-2 h-[350px] relative rounded-3xl overflow-hidden border border-white/10 group">
                {images[0] ? (
                  <Image src={images[0]} alt="Factory Wide Shot" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center text-zinc-700 font-mono text-sm group-hover:scale-105 transition-transform duration-700">
                    [Factory Wide Shot - 10,000 sqft]
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white font-bold text-lg">Assembly Line</div>
              </div>
              <div className="h-[234px] relative rounded-3xl overflow-hidden border border-white/10 group">
                {images[1] ? (
                  <Image src={images[1]} alt="Machinery Close-up" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center text-zinc-700 font-mono text-sm group-hover:scale-105 transition-transform duration-700">
                    [Machinery Close-up]
                  </div>
                )}
              </div>
              <div className="h-[234px] relative rounded-3xl overflow-hidden border border-white/10 group">
                {images[2] ? (
                  <Image src={images[2]} alt="Craftsmanship" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center text-zinc-700 font-mono text-sm group-hover:scale-105 transition-transform duration-700">
                    [Craftsmanship]
                  </div>
                )}
              </div>
            </div>
          )}
          
        </div>
      </div>
    </section>
  );
}
