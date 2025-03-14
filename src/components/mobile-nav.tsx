"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LanguageToggle } from "@/components/language-toggle"
import { ModeToggle } from "@/components/mode-toggle"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <div className="flex items-center justify-between border-b pb-4">
          <Link href="/" className="flex items-center gap-2 font-semibold" onClick={() => setOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>SereniTalk</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <nav className="flex flex-col gap-4 py-4">
          <Link href="/pricing" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Pricing
          </Link>
          <Link href="/contact" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Contact Us
          </Link>
          <Link href="/sponsor" className="text-lg font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Sponsor This Project
          </Link>
        </nav>
        <div className="mt-auto border-t pt-4 flex items-center gap-4">
          <LanguageToggle />
          <ModeToggle />
          <Button className="w-full" asChild>
            <Link href="/dashboard" onClick={() => setOpen(false)}>
              Tableau de bord
            </Link>
          </Button>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <Button variant="outline" className="w-full" asChild>
            <Link href="/sign-in" onClick={() => setOpen(false)}>
              Se connecter
            </Link>
          </Button>
          <Button variant="default" className="w-full" asChild>
            <Link href="/sign-up" onClick={() => setOpen(false)}>
              S'inscrire
            </Link>
          </Button>
        </div>
        <div className="mt-6 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h3 className="font-bold text-red-600 dark:text-red-400">Besoin d'aide urgente ?</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 mb-2">
            En cas de détresse, contactez immédiatement les services d'urgence
          </p>
          <Button variant="destructive" size="sm" className="w-full" asChild>
            <a href="tel:112">Appeler le 112</a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

