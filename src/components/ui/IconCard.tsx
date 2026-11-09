import { ReactNode } from "react";

interface IconCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function IconCard({ icon, title, description }: IconCardProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:bg-zinc-800/80 hover:border-emerald-500/50 transition-all duration-300 group cursor-pointer">
      <div className="h-12 w-12 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2 tracking-wide">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
