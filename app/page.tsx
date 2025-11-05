export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="w-full h-screen">
        <iframe 
          src="/voice/embed" 
          className="w-full h-full border-none"
          allow="microphone"
          title="Asistente Virtual UNAB"
        />
      </div>
    </div>
  )
}
