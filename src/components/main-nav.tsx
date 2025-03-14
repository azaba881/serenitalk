import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { LanguageToggle } from "@/components/language-toggle"
import { ModeToggle } from "@/components/mode-toggle"
import { UserButton } from "@/components/user-button"

export function MainNav() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <MessageCircle className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SereniTalk</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/pricing" className="text-sm font-medium hover:text-primary">
            Pricing
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary">
            Contact Us
          </Link>
          <Link href="/sponsor" className="text-sm font-medium hover:text-primary">
            Sponsor This Project
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <MobileNav />
          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle />
            <ModeToggle />
            <UserButton />
          </div>
        </div>
      </div>
    </header>
  )
}

