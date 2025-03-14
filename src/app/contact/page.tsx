import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contactez-nous</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Pour des solutions sur mesure ou des questions spécifiques
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <Card>
          <CardHeader>
            <CardTitle>Envoyez-nous un message</CardTitle>
            <CardDescription>
              Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">Prénom</Label>
                <Input id="first-name" placeholder="Prénom" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Nom</Label>
                <Input id="last-name" placeholder="Nom" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="votre@email.com" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Sujet</Label>
              <Input id="subject" placeholder="Comment pouvons-nous vous aider ?" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Décrivez votre demande en détail..." className="min-h-[150px]" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Envoyer le message</Button>
          </CardFooter>
        </Card>

        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Informations de contact</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Vous préférez nous contacter directement ? Utilisez les coordonnées ci-dessous.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">contact@serenitalk.com</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  support@serenitalk.com (assistance technique)
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-bold">Téléphone</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">+33 (0)1 23 45 67 89</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Lundi au vendredi, 9h-18h</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MessageSquare className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-bold">WhatsApp</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">+33 (0)6 12 34 56 78</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Disponible 24/7 pour les abonnés Premium et Personnalisé
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-6 bg-muted/50">
            <h3 className="font-bold mb-2">Solutions pour entreprises</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Nous proposons des solutions sur mesure pour les entreprises souhaitant offrir un soutien psychologique à
              leurs employés.
            </p>
            <Button variant="outline" asChild>
              <a href="mailto:entreprises@serenitalk.com">Contactez notre équipe dédiée</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

