"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function AddLeadDialog({
  open,
  onOpenChange,
  value,
  onChange,
  onSave,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
  value: { full_name: string; email: string; phone?: string; interest_program: string }
  onChange: (v: Partial<{ full_name: string; email: string; phone?: string; interest_program: string }>) => void
  onSave: () => void
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Agregar Lead</DialogTitle>
          <DialogDescription>Completa los datos básicos para crear un nuevo lead</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Nombre completo</Label>
            <Input value={value.full_name} onChange={(e) => onChange({ full_name: e.target.value })} />
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" value={value.email} onChange={(e) => onChange({ email: e.target.value })} />
          </div>
          <div>
            <Label>Teléfono</Label>
            <Input value={value.phone || ""} onChange={(e) => onChange({ phone: e.target.value })} />
          </div>
          <div>
            <Label>Programa</Label>
            <Input value={value.interest_program} onChange={(e) => onChange({ interest_program: e.target.value })} />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancelar</Button>
          <Button onClick={onSave} disabled={!value.full_name || !value.email}>Guardar</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}


