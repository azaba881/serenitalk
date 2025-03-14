import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PricingPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nos Formules</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Choisissez la formule qui correspond à vos besoins
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
        {/* Free Plan */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Gratuit</CardTitle>
            <CardDescription>Assistance limitée avec un chatbot IA</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
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
              <li className="flex items-center text-muted-foreground">
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
                  className="mr-2 h-4 w-4"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span>Intégration WhatsApp</span>
              </li>
              <li className="flex items-center text-muted-foreground">
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
                  className="mr-2 h-4 w-4"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span>Historique complet</span>
              </li>
              <li className="flex items-center text-muted-foreground">
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
                  className="mr-2 h-4 w-4"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span>Sessions avec un professionnel</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href="/sign-up">Commencer</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Premium Plan */}
        <Card className="flex flex-col border-primary">
          <CardHeader className="bg-primary/10">
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">Populaire</span>
            </div>
            <CardTitle>Premium</CardTitle>
            <CardDescription>Assistance étendue avec le chatbot IA</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
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
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Exportation des conseils</span>
              </li>
              <li className="flex items-center text-muted-foreground">
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
                  className="mr-2 h-4 w-4"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span>Sessions avec un professionnel</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href="/sign-up">S'abonner</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Personalized Plan */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Personnalisée</CardTitle>
            <CardDescription>Consultation avec un professionnel</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
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
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Suivi thérapeutique</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href="/sign-up">S'abonner</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Questions fréquentes</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Comment fonctionne l'abonnement ?</AccordionTrigger>
            <AccordionContent>
              Nos abonnements sont mensuels et sans engagement. Vous pouvez annuler à tout moment. Le paiement est
              effectué via Stripe, une plateforme de paiement sécurisée.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Puis-je changer de formule ?</AccordionTrigger>
            <AccordionContent>
              Oui, vous pouvez passer d'une formule à une autre à tout moment. Si vous passez à une formule supérieure,
              la différence sera calculée au prorata. Si vous passez à une formule inférieure, le changement prendra
              effet à la fin de votre période de facturation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Comment sont sélectionnés les professionnels ?</AccordionTrigger>
            <AccordionContent>
              Tous nos professionnels sont certifiés et ont au minimum 5 ans d'expérience. Ils sont sélectionnés après
              un processus rigoureux qui évalue leurs compétences, leur expérience et leur approche thérapeutique.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Mes données sont-elles sécurisées ?</AccordionTrigger>
            <AccordionContent>
              Absolument. La confidentialité est notre priorité. Toutes les conversations sont cryptées et nous
              respectons strictement le RGPD. Vos données ne sont jamais partagées avec des tiers sans votre
              consentement explicite.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Comment se déroulent les sessions avec un professionnel ?</AccordionTrigger>
            <AccordionContent>
              Les sessions durent 45 minutes et se déroulent par vidéoconférence sécurisée ou par téléphone, selon votre
              préférence. Vous pouvez planifier vos sessions à l'avance via votre tableau de bord.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

