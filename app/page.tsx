import { ClientVoiceWidget } from "@/components/client-voice-widget"

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="text-center p-8">
        <h1 className="text-4xl md:text-6xl font-bold text-orange-600 mb-4">
          Asistente Virtual UNAB
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Haz clic en el botón naranja para comenzar a conversar
        </p>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 bg-orange-500 rounded-full animate-pulse"></div>
          <p className="text-gray-600">Widget de voz disponible →</p>
        </div>
      </div>
      <ClientVoiceWidget />
    </div>
  )
}
