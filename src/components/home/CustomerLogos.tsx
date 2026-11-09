import { Building, GraduationCap, Stethoscope, Briefcase, Coffee, Hotel } from "lucide-react";

export default function CustomerLogos() {
  const industries = [
    { name: "IT Companies", icon: <Building className="w-8 h-8" /> },
    { name: "Schools", icon: <GraduationCap className="w-8 h-8" /> },
    { name: "Hospitals", icon: <Stethoscope className="w-8 h-8" /> },
    { name: "Government", icon: <Briefcase className="w-8 h-8" /> },
    { name: "Restaurants", icon: <Coffee className="w-8 h-8" /> },
    { name: "Hotels", icon: <Hotel className="w-8 h-8" /> },
  ];

  return (
    <section className="py-20 bg-zinc-950 border-t border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Trusted by Leading Industries</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">We provide ergonomic seating solutions across various sectors.</p>
      </div>
      
      {/* Infinite Scroll Marquee */}
      <div className="relative w-full flex overflow-x-hidden">
        <div className="py-4 animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
          {industries.map((item, idx) => (
            <div key={`first-${idx}`} className="flex items-center gap-4 text-zinc-500 grayscale hover:grayscale-0 hover:text-emerald-500 transition-all duration-300">
              {item.icon}
              <span className="text-xl font-bold tracking-wider">{item.name}</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {industries.map((item, idx) => (
            <div key={`second-${idx}`} className="flex items-center gap-4 text-zinc-500 grayscale hover:grayscale-0 hover:text-emerald-500 transition-all duration-300">
              {item.icon}
              <span className="text-xl font-bold tracking-wider">{item.name}</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {industries.map((item, idx) => (
            <div key={`third-${idx}`} className="flex items-center gap-4 text-zinc-500 grayscale hover:grayscale-0 hover:text-emerald-500 transition-all duration-300">
              {item.icon}
              <span className="text-xl font-bold tracking-wider">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Tailwind config needs to have keyframes for marquee, but we can do it with inline styles or assume globals.css */}
    </section>
  );
}
