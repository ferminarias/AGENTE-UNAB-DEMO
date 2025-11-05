"use client"

import { useCallback, useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"

export interface LeadRow {
  id: string
  full_name: string
  email: string
  phone?: string
  interest_program: string
  status: "new" | "contacted" | "qualified" | "enrolled" | "lost"
  priority: "low" | "medium" | "high"
  created_at: string
}

export function useLeads(active: boolean) {
  const supabase = createClient()
  const [leads, setLeads] = useState<LeadRow[]>([])
  const [loading, setLoading] = useState(false)

  const fetchLeads = useCallback(async () => {
    setLoading(true)
    const { data, error } = await supabase.from("leads").select("*").order("created_at", { ascending: false })
    if (!error) setLeads((data as unknown as LeadRow[]) || [])
    setLoading(false)
  }, [supabase])

  const updateLeadStatus = useCallback(
    async (leadId: string, status: LeadRow["status"]) => {
      const { error } = await supabase.from("leads").update({ status }).eq("id", leadId)
      if (!error) fetchLeads()
    },
    [supabase, fetchLeads],
  )

  const addLead = useCallback(
    async (input: { full_name: string; email: string; phone?: string; interest_program: string }) => {
      const { full_name, email, phone, interest_program } = input
      const { error } = await supabase
        .from("leads")
        .insert({ full_name, email, phone, interest_program, status: "new", priority: "medium" })
      if (!error) fetchLeads()
      return !error
    },
    [supabase, fetchLeads],
  )

  useEffect(() => {
    if (active) fetchLeads()
  }, [active, fetchLeads])

  return { leads, loading, fetchLeads, updateLeadStatus, addLead }
}


