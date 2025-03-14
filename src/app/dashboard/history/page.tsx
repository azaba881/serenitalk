import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle, Calendar, Download, Search, Filter, Clock } from "lucide-react"
import Link from "next/link"

export default function HistoryPage() {
  // Mock data for sessions history
  const sessions = [
    {
      id: "1",
      type: "IA",
      date: "15/03/2025",
      time: "14:30",
      title: "Gestion du stress",
      preview: "Nous avons discuté de techniques de respiration et de méditation pour gérer le stress quotidien.",
      duration: "25 min",
    },
    {
      id: "2",
      type: "IA",
      date: "14/03/2025",
      time: "10:15",
      title: "Améliorer le sommeil",
      preview: "Conseils pour établir une routine de sommeil saine et améliorer la qualité du repos.",
      duration: "18 min",
    },
    {
      id: "3",
      type: "Professionnel",
      date: "10/03/2025",
      time: "16:00",
      title: "Session avec Dr. Martin",
      preview: "Suivi thérapeutique et discussion sur les progrès réalisés.",
      duration: "45 min",
    },
    {
      id: "4",
      type: "IA",
      date: "05/03/2025",
      time: "09:45",
      title: "Gestion de l'anxiété",
      preview: "Techniques pour gérer les crises d'anxiété et les pensées négatives.",
      duration: "32 min",
    },
    {
      id: "5",
      type: "IA",
      date: "28/02/2025",
      time: "20:10",
      title: "Confiance en soi",
      preview: "Stratégies pour renforcer l'estime de soi et la confiance en ses capacités.",
      duration: "27 min",
    },
    {
      id: "6",
      type: "Professionnel",
      date: "20/02/2025",
      time: "14:30",
      title: "Session avec Dr. Dubois",
      preview: "Première consultation et établissement d'un plan de suivi.",
      duration: "45 min",
    },
  ]

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Historique des activités</h1>
        <Button variant="outline" asChild>
          <a href="#" download>
            <Download className="mr-2 h-4 w-4" />
            Exporter
          </a>
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <TabsList>
            <TabsTrigger value="all">Toutes les sessions</TabsTrigger>
            <TabsTrigger value="ai">Sessions IA</TabsTrigger>
            <TabsTrigger value="pro">Sessions Pro</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Rechercher..." className="w-full pl-8 sm:w-[200px] md:w-[300px]" />
            </div>
            <Select defaultValue="recent">
              <SelectTrigger className="w-[130px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filtrer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Plus récent</SelectItem>
                <SelectItem value="oldest">Plus ancien</SelectItem>
                <SelectItem value="duration">Durée</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4">
            {sessions.map((session) => (
              <Card key={session.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div
                      className={`w-full md:w-2 ${session.type === "Professionnel" ? "bg-secondary" : "bg-primary"}`}
                    ></div>
                    <div className="p-6 flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div className="flex items-center gap-2 mb-2 md:mb-0">
                          <div
                            className={`rounded-full px-2 py-1 text-xs ${
                              session.type === "Professionnel"
                                ? "bg-secondary/10 text-secondary"
                                : "bg-primary/10 text-primary"
                            }`}
                          >
                            {session.type}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {session.date} • {session.time}
                          </span>
                          <span className="text-sm text-muted-foreground">({session.duration})</span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/dashboard/session/${session.id}`}>Voir</Link>
                          </Button>
                          <Button variant="ghost" size="sm" asChild>
                            <a href="#" download>
                              <Download className="h-4 w-4" />
                              <span className="sr-only">Télécharger</span>
                            </a>
                          </Button>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{session.title}</h3>
                      <p className="text-sm text-muted-foreground">{session.preview}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <Button variant="outline">Charger plus</Button>
          </div>
        </TabsContent>
        <TabsContent value="ai" className="space-y-4">
          <div className="grid gap-4">
            {sessions
              .filter((session) => session.type === "IA")
              .map((session) => (
                <Card key={session.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-2 bg-primary"></div>
                      <div className="p-6 flex-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div className="flex items-center gap-2 mb-2 md:mb-0">
                            <div className="rounded-full px-2 py-1 text-xs bg-primary/10 text-primary">
                              {session.type}
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {session.date} • {session.time}
                            </span>
                            <span className="text-sm text-muted-foreground">({session.duration})</span>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/dashboard/session/${session.id}`}>Voir</Link>
                            </Button>
                            <Button variant="ghost" size="sm" asChild>
                              <a href="#" download>
                                <Download className="h-4 w-4" />
                                <span className="sr-only">Télécharger</span>
                              </a>
                            </Button>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{session.title}</h3>
                        <p className="text-sm text-muted-foreground">{session.preview}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="pro" className="space-y-4">
          <div className="grid gap-4">
            {sessions
              .filter((session) => session.type === "Professionnel")
              .map((session) => (
                <Card key={session.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-2 bg-secondary"></div>
                      <div className="p-6 flex-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div className="flex items-center gap-2 mb-2 md:mb-0">
                            <div className="rounded-full px-2 py-1 text-xs bg-secondary/10 text-secondary">
                              {session.type}
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {session.date} • {session.time}
                            </span>
                            <span className="text-sm text-muted-foreground">({session.duration})</span>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/dashboard/session/${session.id}`}>Voir</Link>
                            </Button>
                            <Button variant="ghost" size="sm" asChild>
                              <a href="#" download>
                                <Download className="h-4 w-4" />
                                <span className="sr-only">Télécharger</span>
                              </a>
                            </Button>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{session.title}</h3>
                        <p className="text-sm text-muted-foreground">{session.preview}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Statistiques d'utilisation</CardTitle>
          <CardDescription>Aperçu de votre activité sur SereniTalk</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col gap-2">
              <div className="text-sm font-medium text-muted-foreground">Sessions totales</div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-primary" />
                <div className="text-2xl font-bold">12</div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm font-medium text-muted-foreground">Temps total</div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <div className="text-2xl font-bold">3h 24m</div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm font-medium text-muted-foreground">Prochaine session</div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <div className="text-2xl font-bold">20/03</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

