import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, CreditCard, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SubscriptionPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Formule & Abonnement</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Votre formule actuelle</CardTitle>
          <CardDescription>Vous êtes actuellement sur la formule Premium</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">9.99€ / mois</p>
              <p className="text-sm text-muted-foreground">Prochain renouvellement le 15/04/2025</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full px-2 py-1 text-xs bg-primary/10 text-primary">Premium</div>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Chatbot IA avancé</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Messages illimités</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Intégration WhatsApp</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Historique complet</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/dashboard/billing">
              <CreditCard className="mr-2 h-4 w-4" />
              Gérer le paiement
            </Link>
          </Button>
          <Button variant="destructive" size="sm">
            Annuler l'abonnement
          </Button>
        </CardFooter>
      </Card>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Changer de formule</h2>
        <p className="text-muted-foreground">
          Vous pouvez changer de formule à tout moment. Le changement prendra effet immédiatement.
        </p>
      </div>

      <Tabs defaultValue="monthly" className="space-y-4">
        <TabsList>
          <TabsTrigger value="monthly">Mensuel</TabsTrigger>
          <TabsTrigger value="yearly">Annuel (2 mois offerts)</TabsTrigger>
        </TabsList>
        <TabsContent value="monthly" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Gratuit</CardTitle>
                <CardDescription>Assistance limitée avec un chatbot IA</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">0€</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Pour toujours</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Chatbot IA basique</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>5 messages par jour</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Ressources gratuites</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" disabled>
                  Formule actuelle
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-primary">
              <CardHeader className="bg-primary/10">
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">Actuel</span>
                </div>
                <CardTitle>Premium</CardTitle>
                <CardDescription>Assistance étendue avec le chatbot IA</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">9.99€</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Par mois</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Chatbot IA avancé</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Messages illimités</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Intégration WhatsApp</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Historique complet</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" disabled>
                  Formule actuelle
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Personnalisée</CardTitle>
                <CardDescription>Consultation avec un professionnel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">49.99€</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Par mois</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Tous les avantages Premium</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>2 sessions avec un professionnel</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Plan de soutien personnalisé</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Support prioritaire</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Passer à cette formule</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="yearly" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Gratuit</CardTitle>
                <CardDescription>Assistance limitée avec un chatbot IA</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">0€</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Pour toujours</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Chatbot IA basique</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>5 messages par jour</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Ressources gratuites</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" disabled>
                  Formule actuelle
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-primary">
              <CardHeader className="bg-primary/10">
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">Actuel</span>
                </div>
                <CardTitle>Premium</CardTitle>
                <CardDescription>Assistance étendue avec le chatbot IA</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">99.90€</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Par an (8.33€/mois)</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Chatbot IA avancé</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Messages illimités</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Intégration WhatsApp</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Historique complet</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" disabled>
                  Formule actuelle
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Personnalisée</CardTitle>
                <CardDescription>Consultation avec un professionnel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">499.90€</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Par an (41.66€/mois)</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Tous les avantages Premium</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>2 sessions avec un professionnel</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Plan de soutien personnalisé</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Support prioritaire</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Passer à cette formule</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Historique de facturation</CardTitle>
          <CardDescription>Consultez vos factures et paiements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Abonnement Premium</p>
                  <p className="text-sm text-muted-foreground">15/03/2025</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">9.99€</p>
                <p className="text-xs text-muted-foreground">Carte •••• 4242</p>
              </div>
            </div>
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Abonnement Premium</p>
                  <p className="text-sm text-muted-foreground">15/02/2025</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">9.99€</p>
                <p className="text-xs text-muted-foreground">Carte •••• 4242</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Abonnement Premium</p>
                  <p className="text-sm text-muted-foreground">15/01/2025</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">9.99€</p>
                <p className="text-xs text-muted-foreground">Carte •••• 4242</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/dashboard/billing/history">
              Voir tout l'historique
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

