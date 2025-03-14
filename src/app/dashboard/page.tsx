import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  // Mock data for recent sessions
  const recentSessions = [
    {
      id: "1",
      type: "IA",
      date: "Aujourd'hui, 14:30",
      title: "Gestion du stress",
      preview: "Nous avons discuté de techniques de respiration et de méditation pour gérer le stress quotidien.",
    },
    {
      id: "2",
      type: "IA",
      date: "Hier, 10:15",
      title: "Améliorer le sommeil",
      preview: "Conseils pour établir une routine de sommeil saine et améliorer la qualité du repos.",
    },
    {
      id: "3",
      type: "Professionnel",
      date: "15 Mars, 16:00",
      title: "Session avec Dr. Martin",
      preview: "Suivi thérapeutique et discussion sur les progrès réalisés.",
    },
  ]

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Tableau de bord</h1>
        <Button asChild>
          <Link href="/dashboard/start-chat">
            Nouvelle conversation
            <MessageCircle className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sessions totales</CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 depuis la semaine dernière</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Formule actuelle</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Premium</div>
            <p className="text-xs text-muted-foreground">Renouvellement le 15/04/2025</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sessions avec pro</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="17" cy="11" r="3" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Prochaine session le 20/03/2025</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Temps total</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3h 24m</div>
            <p className="text-xs text-muted-foreground">+45m depuis la semaine dernière</p>
          </CardContent>
        </Card>
      </div>

      <Card className="col-span-full bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-red-600 dark:text-red-400">Ressources d'urgence</CardTitle>
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
            className="h-4 w-4 text-red-600 dark:text-red-400"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div>
            <p className="text-sm text-red-600 dark:text-red-400">
              En cas de détresse urgente, contactez immédiatement les services d'urgence
            </p>
          </div>
          <Button variant="destructive" size="sm" asChild>
            <a href="tel:112">Appeler le 112</a>
          </Button>
        </CardContent>
      </Card>

      <Tabs defaultValue="recent" className="space-y-4">
        <TabsList>
          <TabsTrigger value="recent">Sessions récentes</TabsTrigger>
          <TabsTrigger value="upcoming">Sessions à venir</TabsTrigger>
        </TabsList>
        <TabsContent value="recent" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recentSessions.map((session) => (
              <Card key={session.id} className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-md font-medium">{session.title}</CardTitle>
                  <div className="rounded-full px-2 py-1 text-xs bg-primary/10 text-primary">{session.type}</div>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground mb-2">{session.date}</div>
                  <p className="text-sm line-clamp-2">{session.preview}</p>
                  <Button variant="link" size="sm" className="mt-2 p-0" asChild>
                    <Link href={`/dashboard/session/${session.id}`}>
                      Voir la conversation
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/dashboard/history">
              Voir tout l'historique
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </TabsContent>
        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sessions à venir</CardTitle>
              <CardDescription>Vous n'avez pas de sessions programmées.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center py-6">
              <Button asChild>
                <Link href="/dashboard/start-chat">Planifier une session</Link>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

