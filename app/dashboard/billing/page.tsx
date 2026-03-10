import { CreditCard, Check } from 'lucide-react'
import Link from 'next/link'

export default function BillingPage() {
  // TODO: Load real plan data from Supabase + Stripe customer portal link
  const plan = { name: 'Starter', price: 500, billing: 'monthly', sermons_used: 0, sermon_limit: 4 }

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display font-bold text-3xl text-[#0a0f2e]">Billing</h1>
        <p className="text-gray-500 mt-1">Manage your plan and payment method.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">Current Plan</p>
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="font-display font-black text-2xl text-[#0a0f2e]">{plan.name}</p>
              <p className="text-gray-400 text-sm">${plan.price}/month · {plan.billing}</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">Active</span>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm mb-1.5">
              <span className="text-gray-500">Sermons this month</span>
              <span className="font-semibold text-[#0a0f2e]">{plan.sermons_used} / {plan.sermon_limit}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div className="bg-[#1a7fe8] h-2 rounded-full" style={{ width: `${(plan.sermons_used / plan.sermon_limit) * 100}%` }} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">Payment Method</p>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
              <CreditCard size={18} className="text-gray-400" />
            </div>
            <div>
              <p className="font-semibold text-[#0a0f2e] text-sm">•••• •••• •••• 4242</p>
              <p className="text-gray-400 text-xs">Expires 12/27</p>
            </div>
          </div>
          {/* TODO: Link to Stripe Customer Portal */}
          <button className="text-sm text-[#1a7fe8] font-semibold hover:underline">Update payment method →</button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">Available Plans</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Starter', price: 500, sermons: 4, current: true },
            { name: 'Growth', price: 750, sermons: 8, current: false },
            { name: 'Pro', price: 1250, sermons: 12, current: false },
          ].map((p) => (
            <div key={p.name} className={`rounded-xl p-5 border-2 ${p.current ? 'border-[#1a7fe8] bg-[#1a7fe8]/5' : 'border-gray-100'}`}>
              <p className="font-display font-bold text-lg text-[#0a0f2e]">{p.name}</p>
              <p className="text-2xl font-display font-black text-[#0a0f2e] mt-1">
                ${p.price}<span className="text-sm text-gray-400 font-normal">/mo</span>
              </p>
              <p className="text-gray-500 text-sm mt-2">{p.sermons} sermons/month</p>
              {p.current ? (
                <div className="flex items-center gap-1.5 mt-4 text-[#1a7fe8] text-sm font-semibold">
                  <Check size={14} /> Current Plan
                </div>
              ) : (
                <Link href="/contact" className="mt-4 block text-center text-sm font-semibold py-2 rounded-lg bg-gray-100 text-[#0a0f2e] hover:bg-gray-200 transition-colors">
                  Upgrade →
                </Link>
              )}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-4">
          To change your plan, contact us at{' '}
          <a href="mailto:billing@eastcoastavl.com" className="text-[#1a7fe8]">billing@eastcoastavl.com</a>
        </p>
      </div>
    </div>
  )
}
