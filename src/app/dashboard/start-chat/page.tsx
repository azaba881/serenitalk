import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, Bot, User2, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function StartChatPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Nouvelle conversation</h1>
      </div>

      <Tabs defaultValue="ai" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="ai-free">IA Gratuite</TabsTrigger>
          <TabsTrigger value="ai">IA Premium</TabsTrigger>
          <TabsTrigger value="pro">Professionnel</TabsTrigger>
        </TabsList>

        <TabsContent value="ai-free">
          <Card>
            <CardHeader>
              <CardTitle>Assistance IA Gratuite</CardTitle>
              <CardDescription>
                Discutez avec notre chatbot IA pour un soutien de base (limité à 5 messages par jour)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">SereniBot</p>
                    <p className="text-sm text-muted-foreground">
                      Bonjour ! Comment puis-je vous aider aujourd&apos;hui ? Je suis là pour vous écouter et vous offrir un
                      soutien.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary">
                    <User2 className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Vous</p>
                    <p className="text-sm text-muted-foreground">
                      J&apos;ai du mal à gérer mon stress ces derniers temps...
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/dashboard/chat/free">
                  Commencer la conversation
                  <MessageCircle className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="ai">
          <Card>
            <CardHeader>
              <CardTitle>Assistance IA Premium</CardTitle>
              <CardDescription>
                Accédez à notre IA avancée avec des messages illimités et des fonctionnalités supplémentaires
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">SereniBot Premium</p>
                    <p className="text-sm text-muted-foreground">
                      Bonjour ! Je suis votre assistant premium. Je peux vous aider avec des techniques avancées de
                      gestion du stress, des exercices de pleine conscience, et bien plus encore.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary">
                    <User2 className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Vous</p>
                    <p className="text-sm text-muted-foreground">
                      J&apos;aimerais explorer des techniques de méditation adaptées à mon emploi du temps chargé...
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-green-600 dark:text-green-400"
                  >
                    <path
                      d="M1.5 7.5C1.5 4.18629 4.18629 1.5 7.5 1.5C10.8137 1.5 13.5 4.18629 13.5 7.5C13.5 10.8137 10.8137 13.5 7.5 13.5C4.18629 13.5 1.5 10.8137 1.5 7.5ZM7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0ZM10.8536 5.14645C11.0488 5.34171 11.0488 5.65829 10.8536 5.85355L7.85355 8.85355C7.65829 9.04882 7.34171 9.04882 7.14645 8.85355L5.14645 6.85355C4.95118 6.65829 4.95118 6.34171 5.14645 6.14645C5.34171 5.95118 5.65829 5.95118 5.85355 6.14645L7.5 7.79289L10.1464 5.14645C10.3417 4.95118 10.6583 4.95118 10.8536 5.14645Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground">Messages illimités</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-green-600 dark:text-green-400"
                  >
                    <path
                      d="M1.5 7.5C1.5 4.18629 4.18629 1.5 7.5 1.5C10.8137 1.5 13.5 4.18629 13.5 7.5C13.5 10.8137 10.8137 13.5 7.5 13.5C4.18629 13.5 1.5 10.8137 1.5 7.5ZM7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0ZM10.8536 5.14645C11.0488 5.34171 11.0488 5.65829 10.8536 5.85355L7.85355 8.85355C7.65829 9.04882 7.34171 9.04882 7.14645 8.85355L5.14645 6.85355C4.95118 6.65829 4.95118 6.34171 5.14645 6.14645C5.34171 5.95118 5.65829 5.95118 5.85355 6.14645L7.5 7.79289L10.1464 5.14645C10.3417 4.95118 10.6583 4.95118 10.8536 5.14645Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground">Intégration WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-green-600 dark:text-green-400"
                  >
                    <path
                      d="M1.5 7.5C1.5 4.18629 4.18629 1.5 7.5 1.5C10.8137 1.5 13.5 4.18629 13.5 7.5C13.5 10.8137 10.8137 13.5 7.5 13.5C4.18629 13.5 1.5 10.8137 1.5 7.5ZM7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0ZM10.8536 5.14645C11.0488 5.34171 11.0488 5.65829 10.8536 5.85355L7.85355 8.85355C7.65829 9.04882 7.34171 9.04882 7.14645 8.85355L5.14645 6.85355C4.95118 6.65829 4.95118 6.34171 5.14645 6.14645C5.34171 5.95118 5.65829 5.95118 5.85355 6.14645L7.5 7.79289L10.1464 5.14645C10.3417 4.95118 10.6583 4.95118 10.8536 5.14645Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground">Historique complet</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/dashboard/chat/premium">
                  Commencer la conversation
                  <MessageCircle className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="pro">
          <Card>
            <CardHeader>
              <CardTitle>Consultation Professionnelle</CardTitle>
              <CardDescription>Planifiez une session avec un professionnel qualifié en santé mentale</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-base">Dr. Sophie Martin</CardTitle>
                    <CardDescription>Psychologue clinicienne</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground">
                      Spécialisée en thérapie cognitive et comportementale, avec 10 ans d&apos;expérience.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href="/dashboard/book/1">
                        Prendre rendez-vous
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="p-4">
                    <CardTitle className="text-base">Dr. Thomas Dubois</CardTitle>
                    <CardDescription>Psychothérapeute</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground">
                      Expert en gestion du stress et de l&apos;anxiété, approche humaniste.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href="/dashboard/book/2">
                        Prendre rendez-vous
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div className="rounded-lg border p-4 bg-muted/50">
                <h3 className="text-sm font-medium mb-2">Votre forfait actuel</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Avec votre abonnement Personnalisé, vous disposez de 2 sessions restantes ce mois-ci.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/dashboard/subscription">Gérer mon abonnement</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

