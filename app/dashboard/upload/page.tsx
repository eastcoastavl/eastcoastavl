'use client'

import { useState, useRef } from 'react'
import { Upload, FileVideo, CheckCircle, Loader } from 'lucide-react'

type UploadState = 'idle' | 'uploading' | 'processing' | 'done'

export default function UploadPage() {
  const [state, setState] = useState<UploadState>('idle')
  const [progress, setProgress] = useState(0)
  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]
    if (f) setFile(f)
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    const f = e.dataTransfer.files?.[0]
    if (f && f.type.startsWith('video/')) setFile(f)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!file || !title) return
    setState('uploading')
    // TODO: POST /api/upload/presign → get presigned R2 URL, PUT file, POST /api/upload/complete
    for (let i = 0; i <= 100; i += 10) {
      await new Promise((r) => setTimeout(r, 150))
      setProgress(i)
    }
    setState('processing')
    await new Promise((r) => setTimeout(r, 1500))
    setState('done')
  }

  if (state === 'done') {
    return (
      <div className="max-w-xl mx-auto text-center py-16">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-green-500" />
        </div>
        <h2 className="font-display font-bold text-2xl text-[#0a0f2e] mb-2">Sermon Submitted!</h2>
        <p className="text-gray-500 mb-2">Your sermon is being processed. You&apos;ll receive an email when your content package is ready.</p>
        <p className="text-gray-400 text-sm mb-8">Processing typically takes 15-30 minutes.</p>
        <button onClick={() => { setState('idle'); setFile(null); setTitle(''); setDate(''); setProgress(0) }} className="btn-primary">
          Upload Another Sermon
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="font-display font-bold text-3xl text-[#0a0f2e]">Upload a Sermon</h1>
        <p className="text-gray-500 mt-1">Upload your sermon video and we&apos;ll generate your complete content package.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => fileRef.current?.click()}
          className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all duration-200 ${
            file ? 'border-[#1a7fe8] bg-[#1a7fe8]/5' : 'border-gray-200 hover:border-[#1a7fe8]/50 hover:bg-gray-50'
          }`}
        >
          <input ref={fileRef} type="file" accept="video/*" className="hidden" onChange={handleFileChange} />
          {file ? (
            <div className="flex items-center justify-center gap-3">
              <FileVideo size={24} className="text-[#1a7fe8]" />
              <div className="text-left">
                <p className="font-semibold text-[#0a0f2e] text-sm">{file.name}</p>
                <p className="text-gray-400 text-xs">{(file.size / 1024 / 1024).toFixed(1)} MB</p>
              </div>
            </div>
          ) : (
            <>
              <Upload size={32} className="text-gray-300 mx-auto mb-3" />
              <p className="font-semibold text-gray-600 text-sm">Drop your sermon video here, or click to browse</p>
              <p className="text-gray-400 text-xs mt-1">MP4, MOV, MKV — up to 10GB</p>
            </>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0a0f2e] mb-1.5">Sermon Title <span className="text-red-400">*</span></label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="e.g. The Power of Faith" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a7fe8] focus:border-transparent" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#0a0f2e] mb-1.5">Sermon Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a7fe8] focus:border-transparent" />
        </div>

        {state === 'uploading' && (
          <div>
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-500 font-medium">Uploading…</span>
              <span className="text-[#1a7fe8] font-semibold">{progress}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div className="bg-[#1a7fe8] h-2 rounded-full transition-all duration-200" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}

        {state === 'processing' && (
          <div className="flex items-center gap-3 p-4 bg-[#1a7fe8]/5 rounded-xl border border-[#1a7fe8]/20">
            <Loader size={18} className="text-[#1a7fe8] animate-spin" />
            <p className="text-sm text-[#1a7fe8] font-medium">Submitting to processing pipeline…</p>
          </div>
        )}

        <button type="submit" disabled={!file || !title || state === 'uploading' || state === 'processing'} className="w-full btn-primary justify-center py-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0">
          <Upload size={18} />
          {state === 'uploading' ? 'Uploading…' : state === 'processing' ? 'Processing…' : 'Upload Sermon'}
        </button>
      </form>
    </div>
  )
}
