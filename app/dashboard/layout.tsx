import Link from 'next/link'
import { LayoutDashboard, Upload, FileText, CreditCard, Zap } from 'lucide-react'
import SignOutButton from '@/components/SignOutButton'

const navItems = [
  { href: '/dashboard', icon: <LayoutDashboard size={18} />, label: 'Dashboard' },
  { href: '/dashboard/upload', icon: <Upload size={18} />, label: 'Upload Sermon' },
  { href: '/dashboard/sermons', icon: <FileText size={18} />, label: 'My Sermons' },
  { href: '/dashboard/billing', icon: <CreditCard size={18} />, label: 'Billing' },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex">
      <aside className="w-64 bg-[#0a0f2e] flex flex-col fixed top-0 left-0 h-full z-40">
        <div className="p-6 border-b border-white/10">
          <Link href="/" className="flex flex-col leading-none">
            <span className="text-white font-display font-bold tracking-widest uppercase text-sm">EASTCOAST</span>
            <span className="font-display font-black tracking-widest uppercase text-[#1a7fe8] text-xl">AVL</span>
          </Link>
          <div className="flex items-center gap-1 mt-2">
            <Zap size={10} className="text-[#1a7fe8]" />
            <span className="text-[#1a7fe8] text-xs font-bold tracking-widest uppercase">SermonAI Portal</span>
          </div>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-all duration-150 text-sm font-medium"
                >
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-white/10">
          <SignOutButton />
        </div>
      </aside>
      <div className="ml-64 flex-1 flex flex-col min-h-screen">
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  )
}
