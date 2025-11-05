import { type NextRequest, NextResponse } from "next/server"
import { contactFormSchema } from "@/lib/validators"
import { headers } from "next/headers"
import { createServerSupabaseClient } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    // Get client IP for tracking
    const headersList = headers()
    const forwarded = headersList.get("x-forwarded-for")
    const realIp = headersList.get("x-real-ip")
    const clientIp = forwarded?.split(",")[0] || realIp || "unknown"

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactFormSchema.parse(body)

    // Get additional tracking data
    const userAgent = headersList.get("user-agent") || ""
    const referer = headersList.get("referer") || ""

    // Prefer server client with service role to avoid RLS edge-cases
    const supabase = createServerSupabaseClient()

    const { data, error } = await supabase
      .from("leads")
      .insert({
        full_name: validatedData.fullName,
        email: validatedData.email,
        phone: validatedData.phone,
        interest_program: validatedData.interestProgram,
        message: validatedData.message,
        utm_source: validatedData.utmSource,
        utm_medium: validatedData.utmMedium,
        utm_campaign: validatedData.utmCampaign,
        utm_term: validatedData.utmTerm,
        utm_content: validatedData.utmContent,
        referrer: referer,
        path: validatedData.path,
        status: "new",
        priority: "medium",
      })
      .select()

    if (error) {
      console.error("[contact] Supabase error:", error)
      return NextResponse.json(
        { error: "Error al enviar el mensaje. Intenta nuevamente.", detail: error.message },
        { status: 500 },
      )
    }

    return NextResponse.json(
      {
        message: "Mensaje enviado correctamente. Te contactaremos pronto.",
        id: data[0]?.id,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[contact] Contact form error:", error)

    // ZodError detection without direct import
    if (typeof error === "object" && error !== null && (error as any).name === "ZodError") {
      return NextResponse.json({ error: "Datos inválidos. Verifica la información ingresada." }, { status: 400 })
    }

    return NextResponse.json(
      { error: "Error interno del servidor. Intenta nuevamente.", detail: error instanceof Error ? error.message : String(error) },
      { status: 500 },
    )
  }
}
