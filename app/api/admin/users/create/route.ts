import { NextResponse, type NextRequest } from "next/server"
import { createServerSupabaseClient } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password, confirmEmail = true } = body || {}

    if (!email || !password) {
      return NextResponse.json({ error: "Email y contraseña son requeridos" }, { status: 400 })
    }

    const supabase = createServerSupabaseClient()

    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: !!confirmEmail,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ userId: data.user?.id, email: data.user?.email })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Error inesperado" },
      { status: 500 },
    )
  }
}


