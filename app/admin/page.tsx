"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdminStats } from "@/components/admin/AdminStats"
import { AdminSidebar } from "@/components/admin/AdminSidebar"
import { LeadsTable } from "@/components/admin/LeadsTable"
import { AddLeadDialog } from "@/components/admin/AddLeadDialog"
import { LeadDetailDialog } from "@/components/admin/LeadDetailDialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Simple icons
const Dashboard = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
)

const Users = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const FileText = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14,2 14,8 20,8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10,9 9,9 8,9" />
  </svg>
)

const BarChart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
)

const Settings = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0 2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
)
const Sun = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M5 19l1.5-1.5" />
  </svg>
)

const Moon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

const Search = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
)

const LogOut = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16,17 21,12 16,7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
)

// Mock data
const mockLeads = [
  {
    id: 1,
    name: "María González",
    email: "maria@email.com",
    program: "MBA",
    status: "Nuevo",
    phone: "+1234567890",
    date: "2024-01-15",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    email: "carlos@email.com",
    program: "Marketing Digital",
    status: "Contactado",
    phone: "+1234567891",
    date: "2024-01-14",
  },
  {
    id: 3,
    name: "Ana López",
    email: "ana@email.com",
    program: "Psicología",
    status: "Interesado",
    phone: "+1234567892",
    date: "2024-01-13",
  },
  {
    id: 4,
    name: "Luis Martínez",
    email: "luis@email.com",
    program: "Ingeniería",
    status: "Inscrito",
    phone: "+1234567893",
    date: "2024-01-12",
  },
]

export default function AdminPanel() {
  const { theme, setTheme } = useTheme()
  const [activeTab, setActiveTab] = useState("dashboard")
  const [searchTerm, setSearchTerm] = useState("")
  const [leads, setLeads] = useState([] as any[])
  const [user, setUser] = useState(null as any)
  const [loading, setLoading] = useState(true)
  const [loadingLeads, setLoadingLeads] = useState(false)
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [isDetailOpen, setIsDetailOpen] = useState(false)
  const [selectedLead, setSelectedLead] = useState(null as any)
  const [newLead, setNewLead] = useState({ full_name: "", email: "", phone: "", interest_program: "consulta-general" })
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (user) {
        setUser(user)
      } else {
        router.push("/admin/login")
      }
      setLoading(false)
    }
    checkAuth()
  }, [supabase, router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/admin/login")
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800"
      case "contacted":
        return "bg-yellow-100 text-yellow-800"
      case "qualified":
        return "bg-green-100 text-green-800"
      case "enrolled":
        return "bg-purple-100 text-purple-800"
      case "lost":
        return "bg-red-100 text-red-800"
      case "scheduled_meeting":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const fetchLeads = async () => {
    setLoadingLeads(true)
    const { data, error } = await supabase.from("leads").select("*").order("created_at", { ascending: false })
    if (!error) setLeads(data || [])
    setLoadingLeads(false)
  }

  useEffect(() => {
    if (activeTab === "leads" && user) {
      fetchLeads()
    }
  }, [activeTab, user])

  const updateLeadStatus = async (leadId: string, status: string) => {
    const { error } = await supabase.from("leads").update({ status }).eq("id", leadId)
    if (!error) fetchLeads()
  }

  const addLead = async () => {
    const { full_name, email, phone, interest_program } = newLead
    if (!full_name || !email) return
    const { error } = await supabase
      .from("leads")
      .insert({ full_name, email, phone, interest_program, status: "new", priority: "medium" })
    if (!error) {
      setIsAddOpen(false)
      setNewLead({ full_name: "", email: "", phone: "", interest_program: "consulta-general" })
      fetchLeads()
    }
  }

  const filteredLeads = mockLeads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.program.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getMockStatusColor = (status: string) => {
    switch (status) {
      case "Nuevo":
        return "bg-blue-100 text-blue-800"
      case "Contactado":
        return "bg-yellow-100 text-yellow-800"
      case "Interesado":
        return "bg-green-100 text-green-800"
      case "Inscrito":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
          <p className="mt-4 text-gray-600 font-medium">Cargando...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} userEmail={user.email} onLogout={handleLogout} />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
                <p className="text-muted-foreground">Resumen general de ULINEA Universidad</p>
              </div>

              {/* Stats Cards (reales) */}
              <AdminStats />

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Actividad Reciente</CardTitle>
                  <CardDescription>Últimos leads y actividades del sistema</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockLeads.slice(0, 3).map((lead) => (
                      <div key={lead.id} className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-ulinea-blue rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-medium">{lead.name[0]}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{lead.name}</p>
                          <p className="text-xs text-muted-foreground">Interesado en {lead.program}</p>
                        </div>
                        <Badge className={getMockStatusColor(lead.status)}>{lead.status}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "leads" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold text-foreground">Gestión de Leads</h1>
                  <p className="text-muted-foreground">Administra y da seguimiento a los leads</p>
                </div>
                <button className="px-4 py-2 rounded text-white bg-ulinea-blue hover:bg-ulinea-dark-blue" onClick={() => setIsAddOpen(true)}>
                  Agregar Lead
                </button>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Buscar leads..."
                  value={searchTerm}
                  onChange={(e: { target: { value: string } }) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Leads Table */}
              <Card>
                <CardContent className="p-0">
                  <LeadsTable
                    leads={leads}
                    search={searchTerm}
                    onChangeStatus={updateLeadStatus}
                    onOpenDetail={(lead) => {
                      setSelectedLead(lead)
                      setIsDetailOpen(true)
                    }}
                  />
                </CardContent>
              </Card>

              <AddLeadDialog
                open={isAddOpen}
                onOpenChange={setIsAddOpen}
                value={newLead}
                onChange={(v) => setNewLead({ ...newLead, ...v })}
                onSave={addLead}
              />

              <LeadDetailDialog
                open={isDetailOpen}
                onOpenChange={setIsDetailOpen}
                lead={selectedLead}
                onOpenCRM={() => router.push("/admin/crm")}
              />
            </div>
          )}

          {activeTab === "students" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Estudiantes</h1>
                <p className="text-muted-foreground">Gestión de estudiantes matriculados</p>
              </div>
              <Card>
                <CardContent className="p-6">
                  <p className="text-center text-muted-foreground">Módulo de estudiantes en desarrollo</p>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "reports" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Reportes</h1>
                <p className="text-muted-foreground">Análisis y métricas del sistema</p>
              </div>
              <Card>
                <CardContent className="p-6">
                  <p className="text-center text-muted-foreground">Módulo de reportes en desarrollo</p>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Configuración</h1>
                <p className="text-muted-foreground">Configuración del sistema y preferencias</p>
              </div>
              <Card>
                <CardContent className="p-6">
                  <p className="text-center text-muted-foreground">Módulo de configuración en desarrollo</p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
      {/* Floating theme toggle bottom-left */}
      <button
        aria-label="Cambiar tema"
        className="fixed bottom-6 left-6 z-50 rounded-full border bg-background/80 backdrop-blur p-3 shadow hover:shadow-md transition"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </div>
  )
}

// Stats component moved to components/admin/AdminStats.tsx
