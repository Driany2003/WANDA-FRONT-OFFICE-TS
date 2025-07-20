"use client"

import { Button } from "@/components/ui/button"

import type React from "react"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

interface CustomModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  className?: string
}

export function 
CustomModal({ isOpen, onClose, title, children, className }: CustomModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
       className={`p-6 [&>button]:hidden w-[750px] max-w-[95vw] ${className || ''}`}
       style={className ? { 
          maxWidth: 'none', 
          width: '780px',
          height: className.includes('h-[') ? 'auto' : '100%'
        } : {}}
      >
        <DialogHeader className="flex flex-row items-center justify-between pb-4 border-b border-gray-200">
          <DialogTitle className="text-xl font-bold text-gray-900">{title}</DialogTitle>
          <Button variant="ghost" size="icon" onClick={onClose} className="absolute right-4 top-4 hover:bg-gray-100">
            <X className="w-5 h-5 text-gray-500" />
          </Button>
        </DialogHeader>
        <div className="py-4 flex-1 overflow-y-auto">{children}</div>
      </DialogContent>
    </Dialog>
  )
}
