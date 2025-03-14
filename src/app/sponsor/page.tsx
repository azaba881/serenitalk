import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Coffee, Gift, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SponsorPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Soutenez SereniTalk</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Aidez-nous à rendre le soutien psychologique accessible à tous
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 max-w-5xl mx-auto">
        <Card className="flex flex-col">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <Coffee className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-center">Offrez-nous un café</CardTitle>
            <CardDescription className="text-center">Un petit geste pour nous encourager</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="text-3xl font-bold text-center">5€</div>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2">Paiement unique</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-center">Votre nom dans notre liste de remerciements</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <a href="https://buy.stripe.com/test_fake_url" target="_blank" rel="noopener noreferrer">
                Faire un don
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col border-primary">
          <CardHeader className="bg-primary/10">
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">Populaire</span>
            </div>
            <div className="flex justify-center mb-4">
              <Heart className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-center">Supporter régulier</CardTitle>
            <CardDescription className="text-center">Soutenez notre mission chaque mois</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="text-3xl font-bold text-center">10€</div>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2">Par mois</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-center">Votre nom dans notre liste de remerciements</li>
              <li className="text-center">Accès à notre newsletter exclusive</li>
              <li className="text-center">Badge "Supporter" sur votre profil</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <a href="https://buy.stripe.com/test_fake_url" target="_blank" rel="noopener noreferrer">
                Devenir supporter
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <Gift className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-center">Partenaire</CardTitle>
            <CardDescription className="text-center">Devenez un partenaire officiel</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="text-3xl font-bold text-center">100€+</div>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2">Montant personnalisable</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-center">Tous les avantages précédents</li>
              <li className="text-center">Logo sur notre page partenaires</li>
              <li className="text-center">Mention dans nos communications</li>
              <li className="text-center">Accès à des statistiques anonymisées</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href="/contact">
                Nous contacter
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-16 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous soutenir ?</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          SereniTalk s'efforce de rendre le soutien psychologique accessible à tous, indépendamment de leur situation
          financière. Votre soutien nous aide à maintenir notre offre gratuite, à améliorer nos services et à développer
          de nouvelles fonctionnalités pour mieux accompagner nos utilisateurs dans leur parcours de bien-être mental.
        </p>
        <div className="flex justify-center">
          <img
            alt="L'équipe SereniTalk vous remercie"
            className="rounded-lg object-cover shadow-lg"
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            width={800}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}

