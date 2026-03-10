import Link from 'next/link'
import { ArrowRight, Check, Zap, FileText, Share2, Scissors, Image, Music, Mail, Youtube, Upload } from 'lucide-react'

const outputs = [
  { icon: <FileText size={20} />, label: 'Full Transcript', desc: 'Word-for-word with timestamps' },
  { icon: <FileText size={20} />, label: 'Sermon Summary', desc: '3-paragraph pastoral summary' },
  { icon: <FileText size={20} />, label: 'Blog Post', desc: '800-1000 words, SEO-optimized' },
  { icon: <Share2 size={20} />, label: 'Social Captions', desc: 'Instagram, Facebook, TikTok' },
  { icon: <Scissors size={20} />, label: 'Short-Form Clips', desc: 'Vertical format, ready to post' },
  { icon: <Image size={20} />, label: 'Quote Graphics', desc: 'Square + Story sizes' },
  { icon: <Music size={20} />, label: 'Podcast Episode', desc: 'Intro, sermon audio, outro' },
  { icon: <Mail size={20} />, label: 'Email Newsletter', desc: 'Ready to send to your list' },
  { icon: <Youtube size={20} />, label: 'YouTube Description', desc: 'With timestamps' },
]

const plans = [
  {
    name: 'Starter',
    price: { monthly: 500, annual: 450 },
    sermons: 4, clips: 3, graphics: 5, storage: '30 days', podcast: false, highlight: false,
  },
  {
    name: 'Growth',
    price: { monthly: 750, annual: 656 },
    sermons: 8, clips: 5, graphics: 10, storage: '90 days', podcast: true, highlight: true,
  },
  {
    name: 'Pro',
    price: { monthly: 1250, annual: 1062 },
    sermons: 12, clips: 8, graphics: 15, storage: '180 days', podcast: true, highlight: false,
    extra: '4 event content packages/mo',
  },
]

export default function SermonAIPage() {
  return (
    <>
      <section className="hero-bg pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a7fe8]/20 border border-[#1a7fe8]/30 mb-6">
            <Zap size={12} className="text-[#1a7fe8]" />
            <span className="text-[#1a7fe8] text-xs font-bold tracking-widest uppercase">SermonAI by Eastcoast AVL</span>
          </div>
          <h1 className="font-display font-black text-white leading-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Your Sermon.
            <br />
            <span style={{ color: '#1a7fe8' }}>A Full Content Team.</span>
            <br />
            Automated.
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Upload your sermon video once. Receive a complete media package —
            transcript, clips, graphics, podcast, blog post, social captions,
            and more — delivered to your dashboard automatically.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="#pricing" className="btn-primary text-base px-8 py-4">See Plans & Pricing <ArrowRight size={18} /></Link>
            <Link href="/contact" className="btn-outline text-base px-8 py-4">Talk to Us First</Link>
          </div>
        </div>
        <div className="wave-bottom">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 40C480 80 240 0 0 40L0 80Z" fill="white" />
          </svg>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-3">How It Works</p>
            <h2 className="section-title">Three Steps. That&apos;s It.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '01', icon: <Upload size={24} />, title: 'Upload Your Sermon', desc: 'Upload your sermon video directly or connect your Resi account for automatic imports after each service.' },
              { step: '02', icon: <Zap size={24} />, title: 'AI Processes Everything', desc: 'Our pipeline transcribes, summarizes, writes, clips, designs, and produces your full content package.' },
              { step: '03', icon: <ArrowRight size={24} />, title: 'Download & Publish', desc: 'Log in to your dashboard, download everything, and publish across all your platforms in minutes.' },
            ].map((step) => (
              <div key={step.step} className="relative">
                <div className="text-[5rem] font-display font-black text-gray-100 leading-none absolute -top-4 -left-2 select-none">{step.step}</div>
                <div className="relative pt-8 pl-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-[#1a7fe8]" style={{ background: 'rgba(26,127,232,0.08)' }}>
                    {step.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#0a0f2e] mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-3">What You Get</p>
            <h2 className="section-title">Every Upload Delivers 9 Content Types</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {outputs.map((output) => (
              <div key={output.label} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-[#1a7fe8]" style={{ background: 'rgba(26,127,232,0.08)' }}>
                  {output.icon}
                </div>
                <div>
                  <p className="font-semibold text-[#0a0f2e] text-sm">{output.label}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{output.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Pricing</p>
            <h2 className="section-title">Simple, Flat-Rate Plans</h2>
            <p className="text-gray-500 mt-4">Annual plans save up to 15%. No add-ons, no surprises.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  plan.highlight ? 'bg-[#0a0f2e] text-white ring-2 ring-[#1a7fe8] shadow-xl shadow-[#1a7fe8]/20' : 'bg-white border border-gray-200'
                }`}
              >
                {plan.highlight && (
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#1a7fe8]/20 border border-[#1a7fe8]/30 self-start mb-4">
                    <span className="text-[#1a7fe8] text-xs font-bold tracking-widest uppercase">Most Popular</span>
                  </div>
                )}
                <h3 className={`font-display font-black text-2xl mb-1 ${plan.highlight ? 'text-white' : 'text-[#0a0f2e]'}`}>{plan.name}</h3>
                <div className="mt-3 mb-6">
                  <span className={`text-4xl font-display font-black ${plan.highlight ? 'text-white' : 'text-[#0a0f2e]'}`}>${plan.price.monthly}</span>
                  <span className={`text-sm ml-1 ${plan.highlight ? 'text-white/50' : 'text-gray-400'}`}>/month</span>
                  <p className={`text-xs mt-1 ${plan.highlight ? 'text-[#5bb8ff]' : 'text-[#1a7fe8]'}`}>${plan.price.annual}/mo billed annually</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    `${plan.sermons} sermons/month`,
                    `${plan.clips} short-form clips per sermon`,
                    `${plan.graphics} quote graphics per sermon`,
                    plan.podcast ? 'Podcast episode with intro & outro' : null,
                    `${plan.storage} file storage`,
                    (plan as any).extra || null,
                    plan.highlight ? 'Priority processing' : null,
                    plan.name === 'Pro' ? '24hr turnaround SLA' : null,
                  ].filter(Boolean).map((feature) => (
                    <li key={feature as string} className="flex items-start gap-2">
                      <Check size={16} className="mt-0.5 shrink-0 text-[#1a7fe8]" />
                      <span className={`text-sm ${plan.highlight ? 'text-white/70' : 'text-gray-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    plan.highlight ? 'bg-[#1a7fe8] text-white hover:bg-[#2196f3]' : 'bg-gray-100 text-[#0a0f2e] hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0f2e]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-black text-white mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Ready to Reclaim Your Time?
          </h2>
          <p className="text-white/60 mb-8 text-lg">Churches using SermonAI save 8+ hours per week on content creation.</p>
          <Link href="/contact" className="btn-primary text-base px-8 py-4">Contact Us to Subscribe <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  )
}
