import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Download, FileText, UserCircle, Briefcase, HelpCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-zinc-950 text-zinc-300 border-t border-zinc-900 overflow-hidden pt-16">
      <div className="blob-glow bg-emerald-900/40 top-0 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 pb-12 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          
          {/* Brand & Contact Info */}
          <div className="space-y-6 lg:col-span-3">
            <div className="flex items-center gap-2.5">
              <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/10">
                <Image
                  src="/images/logo.png"
                  alt="Touch N Feel Logo"
                  width={42}
                  height={42}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight leading-none text-white">TOUCH N FEEL</span>
                <span className="text-[10px] text-emerald-400 font-bold tracking-widest leading-none mt-1 uppercase">Office Systems</span>
              </div>
            </div>
            <p className="text-sm text-zinc-400 font-medium border-l-2 border-emerald-500 pl-3">
              MRF. OF EXECUTIVE OFFICE FURNITURES
            </p>
            <div className="space-y-4 text-sm text-zinc-400">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <p>No.17/4, 1st Cross, 'B' Street, Kuvempu Nagar, N.G Halli, Mysore Road, Bangalore-560 026</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-emerald-500" />
                <a href="tel:+919945405572" className="hover:text-emerald-400 transition-colors">+91 99454 05572</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-emerald-500" />
                <a href="mailto:tnfjoseph@yahoo.com" className="hover:text-emerald-400 transition-colors">tnfjoseph@yahoo.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-emerald-500" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="h-4 w-4 text-emerald-500" />
                <span className="font-mono text-xs bg-zinc-900 px-2 py-1 rounded">GSTIN: 29AWJPT5807P1Z5</span> {/* Placeholder GST */}
              </div>
            </div>
          </div>
          
          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">Company Profile</Link></li>
              <li><Link href="/manufacturing" className="hover:text-emerald-400 transition-colors">Manufacturing Facility</Link></li>
              <li><Link href="/careers" className="hover:text-emerald-400 transition-colors flex items-center gap-2">Careers <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">Hiring</span></Link></li>
              <li><Link href="/blog" className="hover:text-emerald-400 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-wide">Resources</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/catalogue" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><Download className="h-3.5 w-3.5" /> Download Catalogue</Link></li>
              <li><Link href="/dealer-login" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><UserCircle className="h-3.5 w-3.5" /> Dealer Login</Link></li>
              <li><Link href="/warranty" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><Briefcase className="h-3.5 w-3.5" /> Warranty Registration</Link></li>
              <li><Link href="/faqs" className="hover:text-emerald-400 transition-colors flex items-center gap-2"><HelpCircle className="h-3.5 w-3.5" /> FAQs</Link></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-wide">Products</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/categories/premium-executive-chairs" className="hover:text-emerald-400 transition-colors">Executive Chairs</Link></li>
              <li><Link href="/categories/workstation-chairs" className="hover:text-emerald-400 transition-colors">Workstation Chairs</Link></li>
              <li><Link href="/categories/premium-visitor-chairs" className="hover:text-emerald-400 transition-colors">Visitor Chairs</Link></li>
              <li><Link href="/categories/cafeteria-chairs" className="hover:text-emerald-400 transition-colors">Cafeteria Chairs</Link></li>
              <li><Link href="/products" className="hover:text-emerald-400 transition-colors underline underline-offset-4 mt-2 inline-block">View All Products</Link></li>
            </ul>
          </div>

          {/* Location Map */}
          <div className="lg:col-span-3 h-full flex flex-col">
            <h4 className="text-white font-bold mb-6 tracking-wide">Visit Our Factory</h4>
            <div className="w-full flex-1 min-h-[160px] bg-zinc-900 rounded-xl overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-500">
              <iframe
                title="Touch N Feel Location"
                src="https://www.google.com/maps?q=Touch+N+Feel+Office+Systems+No.17/4,+1st+Cross,+'B'+Street,+Kuvempu+Nagar,+N.G+Halli,+Mysore+Road,+Bangalore-560026&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500 gap-6">
          <p>© {new Date().getFullYear()} Touch N Feel Office Systems. Engineered in Bangalore.</p>
          <div className="flex items-center gap-6">
            <div className="flex gap-3 mr-4">
              <Link href="#" className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:border-emerald-400 transition-all duration-300">
                <span className="sr-only">Facebook</span>
                <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
              <Link href="#" className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:border-emerald-400 transition-all duration-300">
                <span className="sr-only">Twitter</span>
                <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </Link>
              <Link href="#" className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:border-emerald-400 transition-all duration-300">
                <span className="sr-only">Instagram</span>
                <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
              <Link href="#" className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:border-emerald-400 transition-all duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
            </div>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
