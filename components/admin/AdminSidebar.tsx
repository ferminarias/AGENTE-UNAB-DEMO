"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

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
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0 2.83l.06-.06a1.65 1.65 0  0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
)
const LogOut = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16,17 21,12 16,7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
)

export function AdminSidebar({
  activeTab,
  setActiveTab,
  userEmail,
  onLogout,
}: {
  activeTab: string
  setActiveTab: (tab: string) => void
  userEmail: string
  onLogout: () => void
}) {
  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-ulinea-blue rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">U</span>
          </div>
          <div>
            <div className="text-sidebar-foreground font-bold">ULINEA</div>
            <div className="text-sidebar-foreground/70 text-xs">Admin Panel</div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-sidebar-accent rounded-lg">
          <p className="text-xs text-sidebar-foreground/70">Conectado como:</p>
          <p className="text-sm font-medium text-sidebar-foreground truncate">{userEmail}</p>
        </div>
      </div>

      <nav className="px-4 space-y-2">
        <Button
          variant={activeTab === "dashboard" ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveTab("dashboard")}
        >
          <Dashboard className="w-4 h-4 mr-3" />
          Dashboard
        </Button>
        <Button
          variant={activeTab === "leads" ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveTab("leads")}
        >
          <Users className="w-4 h-4 mr-3" />
          Leads
        </Button>
        <Button
          variant={activeTab === "students" ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveTab("students")}
        >
          <FileText className="w-4 h-4 mr-3" />
          Estudiantes
        </Button>
        <Button
          variant={activeTab === "reports" ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveTab("reports")}
        >
          <BarChart className="w-4 h-4 mr-3" />
          Reportes
        </Button>
        <Button
          variant={activeTab === "settings" ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveTab("settings")}
        >
          <Settings className="w-4 h-4 mr-3" />
          Configuración
        </Button>

        <div className="pt-4 border-t border-sidebar-border">
          <Button
            variant="ghost"
            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
            onClick={onLogout}
          >
            <LogOut className="w-4 h-4 mr-3" />
            Cerrar Sesión
          </Button>
        </div>
      </nav>
    </div>
  )
}


