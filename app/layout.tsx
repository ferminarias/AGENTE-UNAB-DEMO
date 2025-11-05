import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { VoiceWidgetProvider } from "@/components/voice-widget-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Universidad ULINEA - Formación flexible, práctica y global",
  description:
    "Descubre nuestras licenciaturas y maestrías en línea. Educación de calidad con enfoque práctico y global. ¡Inscríbete ahora!",
  keywords: "universidad en línea, licenciaturas, maestrías, educación superior, ULINEA",
  authors: [{ name: "Universidad ULINEA" }],
  creator: "Universidad ULINEA",
  publisher: "Universidad ULINEA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Universidad ULINEA - Formación flexible, práctica y global",
    description:
      "Descubre nuestras licenciaturas y maestrías en línea. Educación de calidad con enfoque práctico y global.",
    url: "/",
    siteName: "Universidad ULINEA",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Universidad ULINEA",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Universidad ULINEA - Formación flexible, práctica y global",
    description:
      "Descubre nuestras licenciaturas y maestrías en línea. Educación de calidad con enfoque práctico y global.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
            <Toaster />
            <VoiceWidgetProvider />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
