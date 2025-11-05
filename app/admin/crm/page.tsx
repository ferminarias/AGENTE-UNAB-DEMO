"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
// Supabase removed - CRM functionality disabled
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

// Inline SVG components for better compatibility
const UserIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
)

const PlusIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
)

const CheckIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const GraduationCapIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
    />
  </svg>
)

const PhoneIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

const MailIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const CalendarIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
)

const MessageSquareIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
)

const SearchIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
)

const FilterIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z"
    />
  </svg>
)

const EyeIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
)

const DownloadIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
)

const RefreshIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    />
  </svg>
)

const LogOutIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
    />
  </svg>
)

const formatDate = (date: string | Date) => {
  const d = new Date(date)
  return d.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
}

const formatDateTime = (date: string | Date) => {
  const d = new Date(date)
  return d.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

const formatDateForInput = (date: string) => {
  const d = new Date(date)
  return d.toISOString().split("T")[0]
}

interface Lead {
  id: string
  full_name: string
  email: string
  phone?: string
  interest_program: string
  message?: string
  status: "new" | "contacted" | "qualified" | "enrolled" | "lost" | "scheduled_meeting"
  priority: "low" | "medium" | "high"
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  notes?: string
  last_contact_date?: string
  next_follow_up?: string
  meeting_link?: string
  meeting_datetime?: string
  meeting_source?: string
  created_at: string
  updated_at: string
}

const statusColors = {
  new: "bg-blue-100 text-blue-800",
  contacted: "bg-yellow-100 text-yellow-800",
  qualified: "bg-green-100 text-green-800",
  enrolled: "bg-purple-100 text-purple-800",
  lost: "bg-red-100 text-red-800",
  scheduled_meeting: "bg-orange-100 text-orange-800",
}

const priorityColors = {
  low: "bg-gray-100 text-gray-800",
  medium: "bg-orange-100 text-orange-800",
  high: "bg-red-100 text-red-800",
}

export default function AdminCRMPage() {
  const { theme, setTheme } = React.useContext(require("next-themes").ThemeProvider?.context || React.createContext({theme:"light", setTheme:()=>{}}))
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const router = useRouter()

  React.useEffect(() => {
    const checkAuth = () => {
      const adminAuth = localStorage.getItem("adminAuth")
      const loginTime = localStorage.getItem("adminLoginTime")

      if (adminAuth === "true" && loginTime) {
        // Check if session is still valid (24 hours)
        const now = Date.now()
        const loginTimestamp = Number.parseInt(loginTime)
        const sessionDuration = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

        if (now - loginTimestamp < sessionDuration) {
          setIsAuthenticated(true)
        } else {
          // Session expired
          localStorage.removeItem("adminAuth")
          localStorage.removeItem("adminLoginTime")
          router.push("/admin/login")
        }
      } else {
        router.push("/admin/login")
      }
      setLoading(false)
    }

    checkAuth()
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    localStorage.removeItem("adminLoginTime")
    router.push("/admin/login")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
          <p className="mt-4 text-gray-600 font-medium">Cargando CRM...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return <CRMContent onLogout={handleLogout} />
}

function CRMContent({ onLogout }: { onLogout: () => void }) {
  const [leads, setLeads] = React.useState<Lead[]>([])
  const [filteredLeads, setFilteredLeads] = React.useState<Lead[]>([])
  const [loading, setLoading] = React.useState(true)
  const [searchTerm, setSearchTerm] = React.useState("")
  const [statusFilter, setStatusFilter] = React.useState<string>("all")
  const [selectedLead, setSelectedLead] = React.useState<Lead | null>(null)
  const [isDetailOpen, setIsDetailOpen] = React.useState(false)
  const [notes, setNotes] = React.useState("")
  const [nextFollowUp, setNextFollowUp] = React.useState("")
  const [meetingLink, setMeetingLink] = React.useState("")
  const [meetingDatetime, setMeetingDatetime] = React.useState("")
  const [meetingSource, setMeetingSource] = React.useState("")

  // Supabase removed - using mock data
  const fetchLeads = async () => {
    setLoading(true)
    try {
      // Mock data - replace with your own data source
      setLeads([])
      setFilteredLeads([])
      console.log("[CRM] Supabase removed - no leads to fetch")
    } catch (error) {
      console.error("Error fetching leads:", error)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    fetchLeads()
  }, [])

  React.useEffect(() => {
    let filtered = leads

    if (searchTerm) {
      filtered = filtered.filter(
        (lead) =>
          lead.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lead.phone?.includes(searchTerm) ||
          lead.interest_program.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((lead) => lead.status === statusFilter)
    }

    setFilteredLeads(filtered)
  }, [leads, searchTerm, statusFilter])

  const updateLeadStatus = async (leadId: string, status: Lead["status"]) => {
    try {
      console.log("[CRM] Supabase removed - cannot update lead status")
      // Replace with your own data source
    } catch (error) {
      console.error("Error updating lead status:", error)
    }
  }

  const updateLeadNotes = async () => {
    if (!selectedLead) return

    try {
      console.log("[CRM] Supabase removed - cannot update lead notes")
      // Replace with your own data source
      setIsDetailOpen(false)
      setNotes("")
      setNextFollowUp("")
      setMeetingLink("")
      setMeetingDatetime("")
      setMeetingSource("")
    } catch (error) {
      console.error("Error updating lead notes:", error)
    }
  }

  const handleCall = (phone: string) => {
    window.open(`tel:${phone}`, "_self")
  }

  const handleEmail = (email: string, name: string) => {
    const subject = encodeURIComponent(`Información sobre programas académicos - ULINEA Universidad`)
    const body = encodeURIComponent(
      `Hola ${name},\n\nGracias por tu interés en ULINEA Universidad. Me pongo en contacto contigo para resolver todas tus dudas sobre nuestros programas académicos.\n\n¿Cuándo sería un buen momento para conversar?\n\nSaludos cordiales,\nEquipo de Admisiones\nULINEA Universidad`,
    )
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_self")
  }

  const handleWhatsApp = (phone: string, name: string) => {
    const message = encodeURIComponent(
      `Hola ${name}, soy del equipo de admisiones de ULINEA Universidad. Vi que te interesa conocer más sobre nuestros programas académicos. ¿Te parece si conversamos?`,
    )
    window.open(`https://wa.me/${phone.replace(/\D/g, "")}?text=${message}`, "_blank")
  }

  const scheduleGoogleCalendar = (lead: Lead) => {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() + 1) // Tomorrow
    startDate.setHours(10, 0, 0, 0) // 10 AM

    const endDate = new Date(startDate)
    endDate.setHours(11, 0, 0, 0) // 11 AM

    const title = encodeURIComponent(`Llamada con ${lead.full_name} - ULINEA Universidad`)
    const details = encodeURIComponent(
      `Llamada de seguimiento con ${lead.full_name}\nPrograma de interés: ${lead.interest_program}\nEmail: ${lead.email}\nTeléfono: ${lead.phone || "No proporcionado"}`,
    )

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate.toISOString().replace(/[-:]/g, "").split(".")[0]}Z/${endDate.toISOString().replace(/[-:]/g, "").split(".")[0]}Z&details=${details}&location=Llamada%20telefónica`

    window.open(googleCalendarUrl, "_blank")
  }

  const openLeadDetail = (lead: Lead) => {
    setSelectedLead(lead)
    setNotes(lead.notes || "")
    setNextFollowUp(lead.next_follow_up ? formatDateForInput(lead.next_follow_up) : "")
    setMeetingLink(lead.meeting_link || "")
    setMeetingDatetime(lead.meeting_datetime ? new Date(lead.meeting_datetime).toISOString().slice(0,16) : "")
    setMeetingSource(lead.meeting_source || "")
    setIsDetailOpen(true)
  }

  const exportToCSV = () => {
    const headers = ["Nombre", "Email", "Teléfono", "Programa", "Estado", "Prioridad", "Fecha de creación"]
    const csvContent = [
      headers.join(","),
      ...filteredLeads.map((lead) =>
        [
          lead.full_name,
          lead.email,
          lead.phone || "",
          lead.interest_program,
          lead.status,
          lead.priority,
          formatDateTime(lead.created_at),
        ].join(","),
      ),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `leads-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50">
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8 relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-red-600 p-8 text-white">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-white">CRM Dashboard</h1>
              <p className="text-blue-100 text-lg">Sistema de gestión de leads - ULINEA Universidad</p>
              <div className="mt-4 flex items-center space-x-6 text-sm text-blue-100">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Sistema activo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Datos en tiempo real</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <Button
                variant="secondary"
                onClick={onLogout}
                className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
              >
                <LogOutIcon />
                <span className="ml-2">Cerrar Sesión</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="relative overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600"></div>
            <CardContent className="relative p-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-xs font-medium mb-1">Total Leads</p>
                  <p className="text-2xl font-bold">{leads.length}</p>
                  <p className="text-blue-200 text-xs mt-1">Registros totales</p>
                </div>
                <div className="bg-white/20 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <UserIcon />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500"></div>
            <CardContent className="relative p-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-xs font-medium mb-1">Nuevos</p>
                  <p className="text-2xl font-bold">{leads.filter((l) => l.status === "new").length}</p>
                  <p className="text-cyan-200 text-xs mt-1">Sin contactar</p>
                </div>
                <div className="bg-white/20 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <PlusIcon />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600"></div>
            <CardContent className="relative p-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-xs font-medium mb-1">Calificados</p>
                  <p className="text-2xl font-bold">{leads.filter((l) => l.status === "qualified").length}</p>
                  <p className="text-green-200 text-xs mt-1">Listos para inscripción</p>
                </div>
                <div className="bg-white/20 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <CheckIcon />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600"></div>
            <CardContent className="relative p-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-100 text-xs font-medium mb-1">Inscritos</p>
                  <p className="text-2xl font-bold">{leads.filter((l) => l.status === "enrolled").length}</p>
                  <p className="text-red-200 text-xs mt-1">Estudiantes activos</p>
                </div>
                <div className="bg-white/20 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <GraduationCapIcon />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col md:flex-row gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <SearchIcon />
                  </div>
                  <Input
                    placeholder="Buscar por nombre, email, teléfono..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20"
                  />
                </div>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-48 border-gray-200 focus:border-blue-500">
                    <div className="flex items-center">
                      <FilterIcon />
                      <SelectValue placeholder="Filtrar por estado" className="ml-2" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los estados</SelectItem>
                    <SelectItem value="new">Nuevos</SelectItem>
                    <SelectItem value="contacted">Contactados</SelectItem>
                    <SelectItem value="qualified">Calificados</SelectItem>
                    <SelectItem value="enrolled">Inscritos</SelectItem>
                    <SelectItem value="lost">Perdidos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={fetchLeads}
                  disabled={loading}
                  className="border-gray-200 hover:bg-blue-50 hover:border-blue-300 bg-transparent"
                >
                  <RefreshIcon />
                  <span className="ml-2">Actualizar</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={exportToCSV}
                  className="border-gray-200 hover:bg-green-50 hover:border-green-300 bg-transparent"
                >
                  <DownloadIcon />
                  <span className="ml-2">Exportar CSV</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-bold text-gray-900">Leads Registrados</CardTitle>
                <CardDescription className="text-gray-600 mt-1">
                  {filteredLeads.length} de {leads.length} leads mostrados
                </CardDescription>
              </div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {filteredLeads.length} resultados
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-600 border-t-transparent"></div>
                  <p className="mt-4 text-gray-600">Cargando leads...</p>
                </div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50/50">
                      <TableHead className="font-semibold text-gray-700">Nombre</TableHead>
                      <TableHead className="font-semibold text-gray-700">Email</TableHead>
                      <TableHead className="font-semibold text-gray-700">Teléfono</TableHead>
                      <TableHead className="font-semibold text-gray-700">Programa</TableHead>
                      <TableHead className="font-semibold text-gray-700">Estado</TableHead>
                      <TableHead className="font-semibold text-gray-700">Prioridad</TableHead>
                      <TableHead className="font-semibold text-gray-700">Cita</TableHead>
                      <TableHead className="font-semibold text-gray-700">Origen</TableHead>
                      <TableHead className="font-semibold text-gray-700">Link</TableHead>
                      <TableHead className="font-semibold text-gray-700">Fecha</TableHead>
                      <TableHead className="font-semibold text-gray-700">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredLeads.map((lead) => (
                      <TableRow key={lead.id} className="hover:bg-blue-50/50 transition-colors duration-200">
                        <TableCell className="font-medium text-gray-900">{lead.full_name}</TableCell>
                        <TableCell className="text-gray-700">{lead.email}</TableCell>
                        <TableCell className="text-gray-700">{lead.phone || "N/A"}</TableCell>
                        <TableCell className="text-gray-700">{lead.interest_program}</TableCell>
                        <TableCell>
                          <Select
                            value={lead.status}
                            onValueChange={(value) => updateLeadStatus(lead.id, value as Lead["status"])}
                          >
                            <SelectTrigger className="w-32 border-0 bg-transparent">
                              <Badge className={statusColors[lead.status]}>{lead.status}</Badge>
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="new">Nuevo</SelectItem>
                              <SelectItem value="contacted">Contactado</SelectItem>
                              <SelectItem value="qualified">Calificado</SelectItem>
                              <SelectItem value="enrolled">Inscrito</SelectItem>
                              <SelectItem value="lost">Perdido</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <Badge className={priorityColors[lead.priority]}>{lead.priority}</Badge>
                        </TableCell>
                        <TableCell>
                          {lead.meeting_datetime ? (
                            <Badge className="bg-emerald-100 text-emerald-800">{formatDateTime(lead.meeting_datetime)}</Badge>
                          ) : (
                            <span className="text-gray-400 text-sm">—</span>
                          )}
                        </TableCell>
                        <TableCell>
                          {lead.meeting_source ? (
                            <Badge className="bg-indigo-100 text-indigo-800">{lead.meeting_source}</Badge>
                          ) : (
                            <span className="text-gray-400 text-sm">—</span>
                          )}
                        </TableCell>
                        <TableCell>
                          {lead.meeting_link ? (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(lead.meeting_link!, "_blank")}
                              className="hover:bg-blue-50 hover:border-blue-300"
                            >
                              Abrir
                            </Button>
                          ) : (
                            <span className="text-gray-400 text-sm">—</span>
                          )}
                        </TableCell>
                        <TableCell className="text-gray-700">{formatDate(lead.created_at)}</TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            {lead.phone && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleCall(lead.phone!)}
                                title="Llamar"
                                className="hover:bg-green-50 hover:border-green-300"
                              >
                                <PhoneIcon />
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEmail(lead.email, lead.full_name)}
                              title="Enviar email"
                              className="hover:bg-blue-50 hover:border-blue-300"
                            >
                              <MailIcon />
                            </Button>
                            {lead.phone && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleWhatsApp(lead.phone!, lead.full_name)}
                                title="WhatsApp"
                                className="hover:bg-green-50 hover:border-green-300"
                              >
                                <MessageSquareIcon />
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => scheduleGoogleCalendar(lead)}
                              title="Agendar llamada"
                              className="hover:bg-purple-50 hover:border-purple-300"
                            >
                              <CalendarIcon />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => openLeadDetail(lead)}
                              title="Ver detalles"
                              className="hover:bg-orange-50 hover:border-orange-300"
                            >
                              <EyeIcon />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Lead Detail Dialog */}
        <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Detalles del Lead</DialogTitle>
              <DialogDescription>Información completa y seguimiento del lead</DialogDescription>
            </DialogHeader>

            {selectedLead && (
              <div className="space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-600">Nombre completo</Label>
                    <p className="text-lg font-semibold">{selectedLead.full_name}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-600">Email</Label>
                    <p>{selectedLead.email}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-600">Teléfono</Label>
                    <p>{selectedLead.phone || "No proporcionado"}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-600">Programa de interés</Label>
                    <p>{selectedLead.interest_program}</p>
                  </div>
                </div>

                {/* Message */}
                {selectedLead.message && (
                  <div>
                    <Label className="text-sm font-medium text-gray-600">Mensaje inicial</Label>
                    <p className="mt-1 p-3 bg-gray-50 rounded-md text-sm">{selectedLead.message}</p>
                  </div>
                )}

                {/* UTM Data */}
                {(selectedLead.utm_source || selectedLead.utm_medium || selectedLead.utm_campaign) && (
                  <div>
                    <Label className="text-sm font-medium text-gray-600">Datos de seguimiento</Label>
                    <div className="mt-1 grid grid-cols-3 gap-2 text-sm">
                      {selectedLead.utm_source && (
                        <p>
                          <strong>Fuente:</strong> {selectedLead.utm_source}
                        </p>
                      )}
                      {selectedLead.utm_medium && (
                        <p>
                          <strong>Medio:</strong> {selectedLead.utm_medium}
                        </p>
                      )}
                      {selectedLead.utm_campaign && (
                        <p>
                          <strong>Campaña:</strong> {selectedLead.utm_campaign}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Notes */}
                <div>
                  <Label htmlFor="notes" className="text-sm font-medium text-gray-600">
                    Notas de seguimiento
                  </Label>
                  <Textarea
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Agregar notas sobre el contacto, intereses específicos, próximos pasos..."
                    rows={4}
                    className="mt-1"
                  />
                </div>

                {/* Next Follow Up */}
                <div>
                  <Label htmlFor="followup" className="text-sm font-medium text-gray-600">
                    Próximo seguimiento
                  </Label>
                  <Input
                    id="followup"
                    type="date"
                    value={nextFollowUp}
                    onChange={(e) => setNextFollowUp(e.target.value)}
                    className="mt-1"
                  />
                </div>

                {/* Meeting Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="meetingDatetime" className="text-sm font-medium text-gray-600">
                      Cita (fecha y hora)
                    </Label>
                    <Input
                      id="meetingDatetime"
                      type="datetime-local"
                      value={meetingDatetime}
                      onChange={(e) => setMeetingDatetime(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="meetingLink" className="text-sm font-medium text-gray-600">
                      Enlace de reunión
                    </Label>
                    <Input
                      id="meetingLink"
                      type="url"
                      value={meetingLink}
                      onChange={(e) => setMeetingLink(e.target.value)}
                      placeholder="https://meet.google.com/..."
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="meetingSource" className="text-sm font-medium text-gray-600">
                    Origen de la cita (voz/elevenlabs/n8n/manual)
                  </Label>
                  <Input
                    id="meetingSource"
                    value={meetingSource}
                    onChange={(e) => setMeetingSource(e.target.value)}
                    placeholder="elevenlabs"
                    className="mt-1"
                  />
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-2 pt-4 border-t">
                  <Button variant="outline" onClick={() => setIsDetailOpen(false)}>
                    Cancelar
                  </Button>
                  <Button onClick={updateLeadNotes}>Guardar cambios</Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
