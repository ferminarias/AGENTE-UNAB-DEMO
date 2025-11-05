"use client"

import * as React from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

const PhoneIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

const MailIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const CalendarIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
)

const MessageSquareIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
)

const UserIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
)

const SearchIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

const FilterIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
    />
  </svg>
)

const PlusIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
)

const EyeIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
)

const RefreshIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    />
  </svg>
)

const TrendingUpIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const CheckCircleIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

interface Lead {
  id: string
  full_name: string
  email: string
  phone?: string
  interest_program: string
  message?: string
  status: "new" | "contacted" | "qualified" | "enrolled" | "lost"
  priority: "low" | "medium" | "high"
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  notes?: string
  last_contact_date?: string
  next_follow_up?: string
  created_at: string
  updated_at: string
}

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

const statusColors = {
  new: "bg-slate-100 text-slate-700 border border-slate-200",
  contacted: "bg-amber-50 text-amber-700 border border-amber-200",
  qualified: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  enrolled: "bg-blue-50 text-ulinea-blue border border-blue-200",
  lost: "bg-gray-100 text-gray-600 border border-gray-200",
}

const priorityColors = {
  low: "bg-gray-50 text-gray-600 border border-gray-200",
  medium: "bg-orange-50 text-orange-700 border border-orange-200",
  high: "bg-red-50 text-red-700 border border-red-200",
}

export default function CRMPage() {
  const [leads, setLeads] = React.useState<Lead[]>([])
  const [filteredLeads, setFilteredLeads] = React.useState<Lead[]>([])
  const [loading, setLoading] = React.useState(true)
  const [searchTerm, setSearchTerm] = React.useState("")
  const [statusFilter, setStatusFilter] = React.useState<string>("all")
  const [selectedLead, setSelectedLead] = React.useState<Lead | null>(null)
  const [isDetailOpen, setIsDetailOpen] = React.useState(false)
  const [notes, setNotes] = React.useState("")
  const [nextFollowUp, setNextFollowUp] = React.useState("")

  const supabase = createClient()

  const fetchLeads = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase.from("leads").select("*").order("created_at", { ascending: false })

      if (error) throw error
      setLeads(data || [])
      setFilteredLeads(data || [])
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
      const { error } = await supabase
        .from("leads")
        .update({
          status,
          last_contact_date: new Date().toISOString(),
        })
        .eq("id", leadId)

      if (error) throw error
      fetchLeads()
    } catch (error) {
      console.error("Error updating lead status:", error)
    }
  }

  const updateLeadNotes = async () => {
    if (!selectedLead) return

    try {
      const { error } = await supabase
        .from("leads")
        .update({
          notes,
          next_follow_up: nextFollowUp || null,
          last_contact_date: new Date().toISOString(),
        })
        .eq("id", selectedLead.id)

      if (error) throw error
      fetchLeads()
      setIsDetailOpen(false)
      setNotes("")
      setNextFollowUp("")
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8 border-b border-slate-200 pb-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Sistema de Gestión de Leads</h1>
          <p className="text-slate-600">ULINEA Universidad - Panel de administración</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 mb-1">Total Leads</p>
                  <p className="text-2xl font-bold text-slate-900">{leads.length}</p>
                </div>
                <div className="h-12 w-12 bg-slate-100 rounded-lg flex items-center justify-center">
                  <UserIcon />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 mb-1">Nuevos</p>
                  <p className="text-2xl font-bold text-slate-900">{leads.filter((l) => l.status === "new").length}</p>
                </div>
                <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <PlusIcon />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 mb-1">Calificados</p>
                  <p className="text-2xl font-bold text-emerald-600">
                    {leads.filter((l) => l.status === "qualified").length}
                  </p>
                </div>
                <div className="h-12 w-12 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <CheckCircleIcon />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600 mb-1">Inscritos</p>
                  <p className="text-2xl font-bold text-ulinea-blue">
                    {leads.filter((l) => l.status === "enrolled").length}
                  </p>
                </div>
                <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <TrendingUpIcon />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6 border-slate-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col md:flex-row gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <SearchIcon />
                  <Input
                    placeholder="Buscar por nombre, email, teléfono..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-slate-200 focus:border-ulinea-blue focus:ring-ulinea-blue/20"
                  />
                </div>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-48 border-slate-200">
                    <FilterIcon />
                    <SelectValue placeholder="Filtrar por estado" />
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

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={fetchLeads}
                  disabled={loading}
                  className="border-slate-200 hover:bg-slate-50 bg-transparent"
                >
                  <RefreshIcon />
                  Actualizar
                </Button>
                <Button
                  variant="outline"
                  onClick={exportToCSV}
                  className="border-ulinea-blue text-ulinea-blue hover:bg-ulinea-blue hover:text-white bg-transparent"
                >
                  <DownloadIcon />
                  Exportar CSV
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm">
          <CardHeader className="border-b border-slate-100">
            <CardTitle className="text-slate-900">Leads ({filteredLeads.length})</CardTitle>
            <CardDescription className="text-slate-600">
              Lista de todos los leads registrados en el sistema
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <RefreshIcon />
                <span className="ml-2 text-slate-600">Cargando...</span>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-slate-100">
                      <TableHead className="text-slate-700 font-medium">Nombre</TableHead>
                      <TableHead className="text-slate-700 font-medium">Email</TableHead>
                      <TableHead className="text-slate-700 font-medium">Teléfono</TableHead>
                      <TableHead className="text-slate-700 font-medium">Programa</TableHead>
                      <TableHead className="text-slate-700 font-medium">Estado</TableHead>
                      <TableHead className="text-slate-700 font-medium">Prioridad</TableHead>
                      <TableHead className="text-slate-700 font-medium">Fecha</TableHead>
                      <TableHead className="text-slate-700 font-medium">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredLeads.map((lead) => (
                      <TableRow key={lead.id} className="border-slate-100 hover:bg-slate-50/50">
                        <TableCell className="font-medium text-slate-900">{lead.full_name}</TableCell>
                        <TableCell className="text-slate-700">{lead.email}</TableCell>
                        <TableCell className="text-slate-700">{lead.phone || "N/A"}</TableCell>
                        <TableCell className="text-slate-700">{lead.interest_program}</TableCell>
                        <TableCell>
                          <Select
                            value={lead.status}
                            onValueChange={(value) => updateLeadStatus(lead.id, value as Lead["status"])}
                          >
                            <SelectTrigger className="w-32 border-0 p-0 h-auto">
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
                        <TableCell className="text-slate-700">{formatDate(lead.created_at)}</TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            {lead.phone && (
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleCall(lead.phone!)}
                                title="Llamar"
                                className="h-8 w-8 p-0 hover:bg-slate-100"
                              >
                                <PhoneIcon />
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleEmail(lead.email, lead.full_name)}
                              title="Enviar email"
                              className="h-8 w-8 p-0 hover:bg-slate-100"
                            >
                              <MailIcon />
                            </Button>
                            {lead.phone && (
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleWhatsApp(lead.phone!, lead.full_name)}
                                title="WhatsApp"
                                className="h-8 w-8 p-0 hover:bg-green-50 hover:text-green-600"
                              >
                                <MessageSquareIcon />
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => scheduleGoogleCalendar(lead)}
                              title="Agendar llamada"
                              className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-ulinea-blue"
                            >
                              <CalendarIcon />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => openLeadDetail(lead)}
                              title="Ver detalles"
                              className="h-8 w-8 p-0 hover:bg-slate-100"
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

        <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
          <DialogContent className="max-w-2xl border-slate-200">
            <DialogHeader>
              <DialogTitle className="text-slate-900">Detalles del Lead</DialogTitle>
              <DialogDescription className="text-slate-600">
                Información completa y seguimiento del lead
              </DialogDescription>
            </DialogHeader>

            {selectedLead && (
              <div className="space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-slate-600">Nombre completo</Label>
                    <p className="text-lg font-semibold text-slate-900">{selectedLead.full_name}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-slate-600">Email</Label>
                    <p className="text-slate-700">{selectedLead.email}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-slate-600">Teléfono</Label>
                    <p className="text-slate-700">{selectedLead.phone || "No proporcionado"}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-slate-600">Programa de interés</Label>
                    <p className="text-slate-700">{selectedLead.interest_program}</p>
                  </div>
                </div>

                {/* Message */}
                {selectedLead.message && (
                  <div>
                    <Label className="text-sm font-medium text-slate-600">Mensaje inicial</Label>
                    <p className="mt-1 p-3 bg-slate-50 rounded-md text-sm text-slate-700 border border-slate-200">
                      {selectedLead.message}
                    </p>
                  </div>
                )}

                {/* UTM Data */}
                {(selectedLead.utm_source || selectedLead.utm_medium || selectedLead.utm_campaign) && (
                  <div>
                    <Label className="text-sm font-medium text-slate-600">Datos de seguimiento</Label>
                    <div className="mt-1 grid grid-cols-3 gap-2 text-sm">
                      {selectedLead.utm_source && (
                        <p className="text-slate-700">
                          <strong>Fuente:</strong> {selectedLead.utm_source}
                        </p>
                      )}
                      {selectedLead.utm_medium && (
                        <p className="text-slate-700">
                          <strong>Medio:</strong> {selectedLead.utm_medium}
                        </p>
                      )}
                      {selectedLead.utm_campaign && (
                        <p className="text-slate-700">
                          <strong>Campaña:</strong> {selectedLead.utm_campaign}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Notes */}
                <div>
                  <Label htmlFor="notes" className="text-sm font-medium text-slate-600">
                    Notas de seguimiento
                  </Label>
                  <Textarea
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Agregar notas sobre el contacto, intereses específicos, próximos pasos..."
                    rows={4}
                    className="mt-1 border-slate-200 focus:border-ulinea-blue focus:ring-ulinea-blue/20"
                  />
                </div>

                {/* Next Follow Up */}
                <div>
                  <Label htmlFor="followup" className="text-sm font-medium text-slate-600">
                    Próximo seguimiento
                  </Label>
                  <Input
                    id="followup"
                    type="date"
                    value={nextFollowUp}
                    onChange={(e) => setNextFollowUp(e.target.value)}
                    className="mt-1 border-slate-200 focus:border-ulinea-blue focus:ring-ulinea-blue/20"
                  />
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-2 pt-4 border-t border-slate-200">
                  <Button
                    variant="outline"
                    onClick={() => setIsDetailOpen(false)}
                    className="border-slate-200 hover:bg-slate-50"
                  >
                    Cancelar
                  </Button>
                  <Button
                    onClick={updateLeadNotes}
                    className="bg-ulinea-blue hover:bg-ulinea-dark-blue text-white border-0"
                  >
                    Guardar cambios
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
