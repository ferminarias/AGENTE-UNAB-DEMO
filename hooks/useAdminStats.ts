"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"

export interface AdminStats {
  totalLeads: number
  newThisMonth: number
  meetings: number
  conversion: number
}

export function useAdminStats() {
  const supabase = createClient()
  const [stats, setStats] = useState<AdminStats | null>(null)

  useEffect(() => {
    const load = async () => {
      const startOfMonth = new Date()
      startOfMonth.setDate(1)
      startOfMonth.setHours(0, 0, 0, 0)

      const [{ count: totalLeads }, { count: newThisMonth }, { count: meetings }] = await Promise.all([
        supabase.from("leads").select("id", { count: "exact", head: true }),
        supabase.from("leads").select("id", { count: "exact", head: true }).gte("created_at", startOfMonth.toISOString()),
        supabase.from("leads").select("id", { count: "exact", head: true }).not("meeting_datetime", "is", null),
      ])

      const conversion = totalLeads && meetings ? Math.round(((meetings || 0) / (totalLeads || 1)) * 100) : 0
      setStats({ totalLeads: totalLeads || 0, newThisMonth: newThisMonth || 0, meetings: meetings || 0, conversion })
    }
    load()
  }, [supabase])

  return stats
}


