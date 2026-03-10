'use client'

import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { LogOut } from 'lucide-react'

export default function SignOutButton() {
  const router = useRouter()

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <button
      onClick={handleSignOut}
      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/40 hover:text-white/70 transition-colors text-sm font-medium w-full"
    >
      <LogOut size={18} /> Sign Out
    </button>
  )
}
