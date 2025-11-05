"use client"

import { SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"

interface VoiceHeaderProps {
  getStatusColor: () => string
  getStatusText: () => string
  variant?: "sheet" | "embed"
}

export function VoiceHeader({ getStatusColor, getStatusText, variant = "sheet" }: VoiceHeaderProps) {
  const baseContent = (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-base md:text-lg font-semibold text-white">Asistente UNAB</p>
        <p className="text-orange-100 text-xs md:text-sm">Elige como quieres comunicarte</p>
      </div>
      <div className="flex items-center space-x-2">
        <div className={`w-2.5 h-2.5 rounded-full ${getStatusColor()}`} />
        <span className="text-xs md:text-sm text-white">{getStatusText()}</span>
      </div>
    </div>
  )

  if (variant === "embed") {
    return <div className="p-4 border-b bg-gradient-to-r from-orange-500 to-orange-600 text-white flex-shrink-0">{baseContent}</div>
  }

  return (
    <SheetHeader className="p-4 border-b bg-gradient-to-r from-orange-500 to-orange-600 text-white flex-shrink-0">
      <div className="flex items-center justify-between">
        <div>
          <SheetTitle className="text-base md:text-lg text-white">Asistente UNAB</SheetTitle>
          <SheetDescription className="text-orange-100 text-xs md:text-sm">Elige como quieres comunicarte</SheetDescription>
        </div>
        <div className="flex items-center space-x-2">
          <div className={`w-2.5 h-2.5 rounded-full ${getStatusColor()}`} />
          <span className="text-xs md:text-sm">{getStatusText()}</span>
        </div>
      </div>
    </SheetHeader>
  )
}
