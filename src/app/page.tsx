import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, MessageCircle, Shield, Clock, Users, ArrowRight } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />

      <main className="flex-1">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Vidéo d'arrière-plan */}
          <div className="absolute inset-0 w-full h-full z-0">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
              <source
                src="https://assets.mixkit.co/videos/44522/44522-720.mp4"
                type="video/mp4"
              />
            </video>
            {/* Overlay pour améliorer la lisibilité du texte */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white">
                  Retrouvez votre sérénité intérieure
                </h1>
                <p className="mx-auto max-w-[700px] text-xl text-gray-200 md:text-2xl">
                  Un accompagnement personnalisé pour votre bien-être mental, où que vous soyez, quand vous en avez
                  besoin.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link href="/dashboard">Commencer Maintenant</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
                >
                  <Link href="/pricing">Voir les Formules</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center justify-center gap-8">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-white">15k+</span>
                  <span className="text-gray-200">Utilisateurs</span>
                </div>
                <div className="h-12 w-px bg-white/20"></div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-white">100k+</span>
                  <span className="text-gray-200">Conversations</span>
                </div>
                <div className="h-12 w-px bg-white/20"></div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-white">24/7</span>
                  <span className="text-gray-200">Disponibilité</span>
                </div>
              </div>
            </div>
          </div>

          {/* Flèche de défilement */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">À propos de nous</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  SereniTalk est né d&apos;une vision simple : rendre le soutien psychologique accessible à tous
                </p>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <p className="text-gray-500 dark:text-gray-400">
                  Fondée en 2023 par une équipe de psychologues et d&apos;experts en technologie, notre plateforme combine
                  l&apos;intelligence artificielle et l&apos;expertise humaine pour offrir un soutien adapté à chaque individu.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Nous croyons que la santé mentale est aussi importante que la santé physique, et que chacun mérite
                  d&apos;avoir accès à des ressources de qualité, quel que soit son emploi du temps ou sa situation
                  géographique.
                </p>
                <div className="grid gap-4 md:grid-cols-2 mt-4">
                  <div className="flex items-start gap-2">
                    <Users className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-bold">+15 000</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Utilisateurs actifs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MessageCircle className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-bold">+100 000</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Conversations</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="L'équipe SereniTalk"
                  className="rounded-lg object-cover shadow-lg"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nos Formules</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choisissez la formule qui correspond à vos besoins
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-8">
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
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/dashboard">Commencer</Link>
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
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/dashboard">S&apos;abonner</Link>
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
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/dashboard">S&apos;abonner</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <Image
              alt="Séance de thérapie"
              className="rounded-lg object-cover shadow-lg mt-8 mx-auto h-64 w-full"
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              width={1200}
              height={256}
            />
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Comment ça marche</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Un processus simple en trois étapes pour commencer votre parcours de bien-être
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Créez votre compte</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Inscrivez-vous gratuitement en quelques secondes et complétez votre profil pour une expérience
                  personnalisée.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Choisissez votre formule</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Sélectionnez la formule qui correspond à vos besoins : gratuite, premium ou personnalisée.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Commencez à échanger</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Démarrez une conversation avec notre IA ou planifiez une session avec un professionnel selon votre
                  formule.
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <Button size="lg" asChild>
                <Link href="/dashboard">
                  Commencer maintenant
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Pourquoi choisir SereniTalk ?
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Une plateforme moderne qui offre un accompagnement personnalisé selon vos besoins
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-bold">Confidentiel & Sécurisé</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Vos conversations sont protégées et privées
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-bold">Assistance 24/7</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Notre IA est disponible à tout moment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MessageCircle className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-bold">WhatsApp intégré</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Communication fluide et discrète</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-bold">Experts certifiés</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Des professionnels qualifiés à votre écoute
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="inline-block rounded-lg bg-red-50 px-3 py-1 text-sm text-red-600 dark:bg-red-900/30 dark:text-red-400">
                    Besoin d&apos;aide immédiate ?{" "}
                    <a href="/contact" className="font-bold underline">
                      Contactez-nous
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Personne en détresse recevant du soutien"
                  className="rounded-lg object-cover shadow-lg"
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-8 bg-red-50 dark:bg-red-900/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
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
                  className="h-6 w-6 text-red-600 dark:text-red-400"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <h2 className="text-2xl font-bold tracking-tighter text-red-600 dark:text-red-400">
                En cas de détresse urgente
              </h2>
              <p className="max-w-[600px] text-gray-700 dark:text-gray-300">
                Si vous ou un proche êtes en situation de crise, contactez immédiatement les services d&apos;urgence
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="destructive" asChild>
                  <a href="tel:112">Appeler le 112</a>
                </Button>
                <Button
                  variant="outline"
                  className="border-red-200 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/30"
                  asChild
                >
                  <Link href="/resources">Ressources d&apos;urgence</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contactez-nous</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Pour des solutions sur mesure ou des questions spécifiques
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" asChild>
                  <Link href="/contact">Nous Contacter</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left dark:text-gray-400">
            © 2025 SereniTalk. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
              Conditions d&apos;utilisation
            </Link>
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

