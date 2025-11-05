"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Calendar, ExternalLink, Clock, Phone, Mail } from "lucide-react"

export function LeadDetailDialog({ open, onOpenChange, lead, onOpenCRM }: { open: boolean; onOpenChange: (v: boolean) => void; lead: any; onOpenCRM: () => void }) {
  if (!lead) return null

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getAutomaticStatus = (lead: any) => {
    if (lead.meeting_datetime && lead.meeting_link) {
      return "scheduled_meeting"
    }
    return lead.status
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new": return "bg-blue-100 text-blue-800"
      case "contacted": return "bg-yellow-100 text-yellow-800"
      case "qualified": return "bg-green-100 text-green-800"
      case "enrolled": return "bg-purple-100 text-purple-800"
      case "lost": return "bg-red-100 text-red-800"
      case "scheduled_meeting": return "bg-orange-100 text-orange-800"
      default: return "bg-gray-100 text-gray-800"
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

  const hasScheduledMeeting = lead.meeting_datetime && lead.meeting_link

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            📋 Detalles del Lead
            {hasScheduledMeeting && (
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <Calendar className="w-3 h-3 mr-1" />
                Reunión Programada
              </Badge>
            )}
          </DialogTitle>
          <DialogDescription>Información completa del lead y seguimiento</DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Información Básica */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <Label className="text-gray-600">Nombre Completo</Label>
              <div className="mt-1 font-medium text-base">{lead.full_name}</div>
            </div>
            <div>
              <Label className="text-gray-600">Email</Label>
              <div className="mt-1 flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <a href={`mailto:${lead.email}`} className="text-blue-600 hover:underline">
                  {lead.email}
                </a>
              </div>
            </div>
            {lead.phone && (
              <div>
                <Label className="text-gray-600">Teléfono</Label>
                <div className="mt-1 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <a href={`tel:${lead.phone}`} className="text-blue-600 hover:underline">
                    {lead.phone}
                  </a>
                </div>
              </div>
            )}
            <div>
              <Label className="text-gray-600">Programa de Interés</Label>
              <div className="mt-1 font-medium">{lead.interest_program}</div>
            </div>
            <div>
              <Label className="text-gray-600">Estado Actual</Label>
              <div className="mt-1 flex items-center gap-2">
                {(() => {
                  const currentStatus = getAutomaticStatus(lead)
                  const isAutoStatus = currentStatus === "scheduled_meeting"
                  
                  return (
                    <>
                      <Badge className={getStatusColor(currentStatus)}>
                        {getStatusLabel(currentStatus)}
                      </Badge>
                      {isAutoStatus && (
                        <span className="text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded">
                          🤖 Automático
                        </span>
                      )}
                    </>
                  )
                })()}
              </div>
            </div>
            <div>
              <Label className="text-gray-600">Fecha de Registro</Label>
              <div className="mt-1 text-gray-800">{formatDate(lead.created_at)}</div>
            </div>
          </div>

          {/* Información de Reunión */}
          {hasScheduledMeeting && (
            <div className="border rounded-lg p-4 bg-green-50">
              <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Reunión Programada
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-green-700">📅 Fecha y Hora</Label>
                  <div className="mt-1 font-medium text-green-900 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {formatDate(lead.meeting_datetime)}
                  </div>
                </div>
                <div>
                  <Label className="text-green-700">🔗 Enlace de Reunión</Label>
                  <div className="mt-1">
                    <a
                      href={lead.meeting_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:underline font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Unirse a la reunión
                    </a>
                  </div>
                </div>
              </div>
              {lead.meeting_source && (
                <div className="mt-3">
                  <Label className="text-green-700">📋 Origen de la Reunión</Label>
                  <div className="mt-1 text-green-800">{lead.meeting_source}</div>
                </div>
              )}
            </div>
          )}

          {/* Notas y Seguimiento */}
          {(lead.notes || lead.next_follow_up || lead.last_contact_date) && (
            <div className="border rounded-lg p-4 bg-blue-50">
              <h3 className="font-semibold text-blue-800 mb-3">📝 Seguimiento</h3>
              {lead.notes && (
                <div className="mb-3">
                  <Label className="text-blue-700">Notas</Label>
                  <div className="mt-1 text-blue-900 whitespace-pre-wrap">{lead.notes}</div>
                </div>
              )}
              {lead.last_contact_date && (
                <div className="mb-3">
                  <Label className="text-blue-700">Último Contacto</Label>
                  <div className="mt-1 text-blue-900">{formatDate(lead.last_contact_date)}</div>
                </div>
              )}
              {lead.next_follow_up && (
                <div>
                  <Label className="text-blue-700">Próximo Seguimiento</Label>
                  <div className="mt-1 text-blue-900 font-medium">{formatDate(lead.next_follow_up)}</div>
                </div>
              )}
            </div>
          )}

          {/* Información de Marketing */}
          {(lead.utm_source || lead.utm_medium || lead.utm_campaign || lead.referrer) && (
            <div className="border rounded-lg p-4 bg-gray-50">
              <h3 className="font-semibold text-gray-800 mb-3">📊 Información de Marketing</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {lead.utm_source && (
                  <div>
                    <Label className="text-gray-600">Fuente UTM</Label>
                    <div className="mt-1 text-gray-800">{lead.utm_source}</div>
                  </div>
                )}
                {lead.utm_medium && (
                  <div>
                    <Label className="text-gray-600">Medio UTM</Label>
                    <div className="mt-1 text-gray-800">{lead.utm_medium}</div>
                  </div>
                )}
                {lead.utm_campaign && (
                  <div>
                    <Label className="text-gray-600">Campaña UTM</Label>
                    <div className="mt-1 text-gray-800">{lead.utm_campaign}</div>
                  </div>
                )}
                {lead.referrer && (
                  <div>
                    <Label className="text-gray-600">Referente</Label>
                    <div className="mt-1 text-gray-800 text-xs break-all">{lead.referrer}</div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="outline" onClick={() => onOpenChange(false)}>Cerrar</Button>
            <Button onClick={onOpenCRM} className="bg-blue-600 hover:bg-blue-700">
              📊 Abrir en CRM Completo
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}


