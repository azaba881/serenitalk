import type React from "react"
import { DashboardNav } from "@/components/dashboard-nav"
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { LayoutDashboard, CreditCard, Clock, Settings, LogOut, MessageCircle } from "lucide-react"
import Link from "next/link"
import { UserNav } from "@/components/user-nav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardNav />
      <div className="flex flex-1">
        <SidebarProvider>
          <Sidebar>
            <SidebarHeader className="flex h-14 items-center border-b px-6">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <MessageCircle className="h-6 w-6 text-primary" />
                <span>SereniTalk</span>
              </Link>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/dashboard">
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      <span>Tableau de bord</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/dashboard/start-chat">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      <span>Nouvelle conversation</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/dashboard/subscription">
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Formule & Abonnement</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/dashboard/history">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>Historique des activités</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
              <SidebarSeparator />
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/dashboard/settings">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Paramètres</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Déconnexion</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="border-t p-4">
              <UserNav />
            </SidebarFooter>
          </Sidebar>
          <div className="flex-1 p-8">{children}</div>
        </SidebarProvider>
      </div>
    </div>
  )
}

