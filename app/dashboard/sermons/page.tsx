import Link from 'next/link'
import { Download, Clock, CheckCircle, Loader, ArrowRight } from 'lucide-react'

// TODO: Replace with real Supabase data fetch
const mockSermons: Array<{ id: string; title: string; sermon_date: string; status: string; download_url: string }> = []

export default function SermonsPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-3xl text-[#0a0f2e]">My Sermons</h1>
          <p className="text-gray-500 mt-1">Download your completed content packages.</p>
        </div>
        <Link href="/dashboard/upload" className="btn-primary text-sm">Upload New <ArrowRight size={14} /></Link>
      </div>

      {mockSermons.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-16 text-center">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
            <Clock size={22} className="text-gray-300" />
          </div>
          <p className="font-semibold text-gray-400">No sermons yet</p>
          <p className="text-gray-300 text-sm mt-1">Your completed content packages will appear here</p>
          <Link href="/dashboard/upload" className="btn-primary mt-6 text-sm inline-flex">
            Upload Your First Sermon <ArrowRight size={14} />
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-100">
          {mockSermons.map((sermon) => (
            <div key={sermon.id} className="p-6 flex items-center justify-between">
              <div>
                <p className="font-semibold text-[#0a0f2e]">{sermon.title}</p>
                <p className="text-gray-400 text-sm mt-0.5">{sermon.sermon_date}</p>
              </div>
              <div className="flex items-center gap-3">
                {sermon.status === 'ready' ? (
                  <>
                    <span className="flex items-center gap-1.5 text-green-600 text-xs font-semibold">
                      <CheckCircle size={14} /> Ready
                    </span>
                    <a href={sermon.download_url} className="btn-primary text-sm py-2 px-4">
                      <Download size={14} /> Download
                    </a>
                  </>
                ) : (
                  <span className="flex items-center gap-1.5 text-[#1a7fe8] text-xs font-semibold">
                    <Loader size={14} className="animate-spin" /> Processing
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
