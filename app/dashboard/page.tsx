import Link from 'next/link'
import { Upload, FileText, Clock, ArrowRight } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display font-bold text-3xl text-[#0a0f2e]">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back. Here&apos;s an overview of your account.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        {[
          { label: 'Sermons This Month', value: '0', sub: '4 remaining' },
          { label: 'Total Sermons', value: '0', sub: 'All time' },
          { label: 'Current Plan', value: 'Starter', sub: '$500/month' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <p className="text-sm text-gray-400 font-medium mb-1">{stat.label}</p>
            <p className="font-display font-bold text-3xl text-[#0a0f2e]">{stat.value}</p>
            <p className="text-xs text-gray-400 mt-1">{stat.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        <Link href="/dashboard/upload" className="bg-[#0a0f2e] rounded-2xl p-6 flex items-center justify-between group hover:ring-2 hover:ring-[#1a7fe8] transition-all duration-200">
          <div>
            <p className="text-[#1a7fe8] text-xs font-bold tracking-widest uppercase mb-2">New Submission</p>
            <p className="font-display font-bold text-xl text-white">Upload a Sermon</p>
            <p className="text-white/50 text-sm mt-1">Start a new content package</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#1a7fe8]/20 flex items-center justify-center text-[#1a7fe8] group-hover:bg-[#1a7fe8] group-hover:text-white transition-all duration-200">
            <Upload size={22} />
          </div>
        </Link>
        <Link href="/dashboard/sermons" className="bg-white rounded-2xl border border-gray-100 p-6 flex items-center justify-between group hover:border-[#1a7fe8]/30 hover:shadow-md transition-all duration-200">
          <div>
            <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-2">Content Library</p>
            <p className="font-display font-bold text-xl text-[#0a0f2e]">My Sermons</p>
            <p className="text-gray-400 text-sm mt-1">View & download your packages</p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-[#1a7fe8]/10 group-hover:text-[#1a7fe8] transition-all duration-200">
            <FileText size={22} />
          </div>
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-semibold text-[#0a0f2e]">Recent Sermons</h2>
          <Link href="/dashboard/sermons" className="text-[#1a7fe8] text-sm font-semibold hover:underline flex items-center gap-1">
            View All <ArrowRight size={14} />
          </Link>
        </div>
        <div className="p-12 text-center">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
            <Clock size={22} className="text-gray-300" />
          </div>
          <p className="font-semibold text-gray-400">No sermons yet</p>
          <p className="text-gray-300 text-sm mt-1">Upload your first sermon to get started</p>
          <Link href="/dashboard/upload" className="btn-primary mt-6 text-sm">
            Upload Now <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}
