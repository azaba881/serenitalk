import type React from "react"
import { MainNav } from "@/components/main-nav"

export default function SponsorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      {children}
    </div>
  )
}

