"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MessageCircle, CreditCard, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <MessageCircle className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SereniTalk</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/dashboard"
              className={`text-sm font-medium ${pathname === "/dashboard" ? "text-primary" : "hover:text-primary"}`}
            >
              Tableau de bord
            </Link>
            <Link
              href="/dashboard/subscription"
              className={`text-sm font-medium ${pathname === "/dashboard/subscription" ? "text-primary" : "hover:text-primary"}`}
            >
              Abonnement
            </Link>
            <Link
              href="/dashboard/history"
              className={`text-sm font-medium ${pathname === "/dashboard/history" ? "text-primary" : "hover:text-primary"}`}
            >
              Historique
            </Link>
            <Link
              href="/dashboard/settings"
              className={`text-sm font-medium ${pathname === "/dashboard/settings" ? "text-primary" : "hover:text-primary"}`}
            >
              Paramètres
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                    3
                  </span>
                  <span className="sr-only">Notifications</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <div className="flex items-center justify-between p-2 border-b">
                  <span className="text-sm font-medium">Notifications</span>
                  <Button variant="ghost" size="sm" className="text-xs">
                    Marquer comme lues
                  </Button>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  <DropdownMenuItem className="p-3 cursor-pointer">
                    <div className="flex gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Dr. Martin" />
                        <AvatarFallback>DM</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Rappel de session</p>
                        <p className="text-xs text-muted-foreground">
                          Votre session avec Dr. Martin est prévue demain à 14h00.
                        </p>
                        <p className="text-xs text-muted-foreground">Il y a 30 minutes</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-3 cursor-pointer">
                    <div className="flex gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                        <MessageCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Nouveau message</p>
                        <p className="text-xs text-muted-foreground">
                          Vous avez reçu une réponse à votre dernière conversation.
                        </p>
                        <p className="text-xs text-muted-foreground">Il y a 2 heures</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="p-3 cursor-pointer">
                    <div className="flex gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                        <CreditCard className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Paiement confirmé</p>
                        <p className="text-xs text-muted-foreground">
                          Votre abonnement Premium a été renouvelé avec succès.
                        </p>
                        <p className="text-xs text-muted-foreground">Hier</p>
                      </div>
                    </div>
                  </DropdownMenuItem>
                </div>
                <div className="p-2 border-t">
                  <Button variant="ghost" size="sm" className="w-full text-xs" asChild>
                    <Link href="/dashboard/notifications">Voir toutes les notifications</Link>
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Avatar className="h-9 w-9">
              <AvatarImage src="/placeholder.svg?height=36&width=36" alt="@username" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  )
}

