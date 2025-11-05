"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ExternalLink } from "lucide-react"

export function LeadsTable({
  leads,
  search,
  onChangeStatus,
  onOpenDetail,
}: {
  leads: any[]
  search: string
  onChangeStatus: (id: string, status: string) => void
  onOpenDetail: (lead: any) => void
}) {
  // Función para determinar el estado automático basado en reunión
  const getAutomaticStatus = (lead: any) => {
    if (lead.meeting_datetime && lead.meeting_link) {
      return "scheduled_meeting"
    }
    return lead.status
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

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "new": return "Nuevo"
      case "contacted": return "Contactado"
      case "qualified": return "Calificado"
      case "enrolled": return "Inscrito"
      case "lost": return "Perdido"
      case "scheduled_meeting": return "Cita con Asesor"
      default: return status
    }
  }

  const filtered = (leads || []).filter(
    (l) =>
      l.full_name?.toLowerCase().includes(search.toLowerCase()) ||
      l.email?.toLowerCase().includes(search.toLowerCase()) ||
      l.interest_program?.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nombre</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Programa</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Reunión</TableHead>
          <TableHead>Fecha</TableHead>
          <TableHead>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filtered.map((lead) => (
          <TableRow key={lead.id} className="hover:bg-blue-50/40 transition-colors">
            <TableCell className="font-medium">{lead.full_name}</TableCell>
            <TableCell>{lead.email}</TableCell>
            <TableCell>{lead.interest_program}</TableCell>
            <TableCell>
              {(() => {
                const currentStatus = getAutomaticStatus(lead)
                const isAutoStatus = currentStatus === "scheduled_meeting"
                
                return (
                  <Select 
                    value={currentStatus} 
                    onValueChange={(v) => onChangeStatus(lead.id, v)}
                    disabled={isAutoStatus}
                  >
                    <SelectTrigger className={`w-44 ${isAutoStatus ? 'opacity-75 cursor-not-allowed' : ''}`}>
                      <div className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${getStatusColor(currentStatus)}`}>
                        <span className="w-2 h-2 rounded-full bg-current/60 mr-2" />
                        <span>{getStatusLabel(currentStatus)}</span>
                        {isAutoStatus && <span className="ml-1 text-xs">🤖</span>}
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">Nuevo</SelectItem>
                      <SelectItem value="contacted">Contactado</SelectItem>
                      <SelectItem value="qualified">Calificado</SelectItem>
                      <SelectItem value="enrolled">Inscrito</SelectItem>
                      <SelectItem value="lost">Perdido</SelectItem>
                      <SelectItem value="scheduled_meeting" disabled>
                        Cita con Asesor (Automático)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                )
              })()}
            </TableCell>
            <TableCell>
              {lead.meeting_datetime && lead.meeting_link ? (
                <div className="flex flex-col gap-1">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 w-fit">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(lead.meeting_datetime).toLocaleDateString('es-ES', {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </Badge>
                  <a
                    href={lead.meeting_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Enlace
                  </a>
                </div>
              ) : (
                <span className="text-gray-400 text-xs">Sin reunión</span>
              )}
            </TableCell>
            <TableCell>{new Date(lead.created_at).toLocaleDateString()}</TableCell>
            <TableCell>
              <Button variant="outline" size="sm" onClick={() => onOpenDetail(lead)}>
                Ver detalles
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}


