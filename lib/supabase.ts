import { createClient } from "@supabase/supabase-js"
import type { Database } from "./database.types"

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Client-side Supabase client (only create if env vars are available)
export const supabase = supabaseUrl && supabaseAnonKey ? createClient<Database>(supabaseUrl, supabaseAnonKey) : null

// Server-side client for API routes
export function createServerSupabaseClient() {
  const serverUrl = process.env.SUPABASE_URL
  const serverKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!serverUrl || !serverKey) {
    throw new Error("Supabase server configuration missing")
  }

  return createClient<Database>(serverUrl, serverKey)
}

// Helper to check if Supabase is configured
export function isSupabaseConfigured(): boolean {
  return !!(supabaseUrl && supabaseAnonKey)
}
