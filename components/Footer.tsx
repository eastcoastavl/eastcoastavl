import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#050a1a] text-white/70">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex flex-col leading-none mb-4">
              <span className="text-white font-display font-bold tracking-widest uppercase text-lg">EASTCOAST</span>
              <span className="font-display font-black tracking-widest uppercase text-[#1a7fe8] text-2xl">AVL</span>
              <span className="text-white/50 text-sm tracking-widest mt-1">Audio · Video · Lighting</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-white/50 mt-4">
              Professional AVL services for churches, live events, and broadcast production.
              Serving Jacksonville, NC and the surrounding region.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-[#1a7fe8] transition-colors duration-150">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/50">
                <Mail size={14} className="mt-0.5 text-[#1a7fe8] shrink-0" />
                <a href="mailto:info@eastcoastavl.com" className="hover:text-white transition-colors">
                  info@eastcoastavl.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/50">
                <MapPin size={14} className="mt-0.5 text-[#1a7fe8] shrink-0" />
                Jacksonville, NC
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} Eastcoast AVL. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-white/30 hover:text-white/60 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
