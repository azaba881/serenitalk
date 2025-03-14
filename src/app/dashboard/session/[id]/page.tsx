import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bot, Download, ArrowLeft, User2 } from "lucide-react"
import Link from "next/link"

export default function SessionPage({ params }: { params: { id: string } }) {
  // Mock data for the session
  const session = {
    id: params.id,
    type: params.id === "3" || params.id === "6" ? "Professionnel" : "IA",
    date: "15/03/2025",
    time: "14:30",
    title:
      params.id === "1"
        ? "Gestion du stress"
        : params.id === "2"
          ? "Améliorer le sommeil"
          : params.id === "3"
            ? "Session avec Dr. Martin"
            : params.id === "4"
              ? "Gestion de l'anxiété"
              : params.id === "5"
                ? "Confiance en soi"
                : "Session avec Dr. Dubois",
    duration: params.id === "3" || params.id === "6" ? "45 min" : "25 min",
    messages: [
      {
        role: "assistant",
        content:
          params.id === "1"
            ? "Bonjour ! Comment puis-je vous aider aujourd'hui concernant la gestion du stress ?"
            : params.id === "2"
              ? "Bonjour ! Vous souhaitez améliorer votre sommeil, c'est bien ça ?"
              : params.id === "3"
                ? "Bonjour ! Comment vous sentez-vous depuis notre dernière session ?"
                : params.id === "4"
                  ? "Bonjour ! Parlons de votre anxiété. Pouvez-vous me décrire ce que vous ressentez ?"
                  : params.id === "5"
                    ? "Bonjour ! Aujourd'hui nous allons travailler sur votre confiance en vous. Par où souhaitez-vous commencer ?"
                    : "Bonjour ! C'est notre première rencontre. Pouvez-vous me parler un peu de vous et de ce qui vous amène ?",
      },
      {
        role: "user",
        content:
          params.id === "1"
            ? "J'ai du mal à gérer mon stress au travail ces derniers temps. J'ai l'impression d'être constamment sous pression."
            : params.id === "2"
              ? "Oui, j'ai du mal à m'endormir le soir et je me réveille souvent la nuit."
              : params.id === "3"
                ? "Je me sens un peu mieux, mais j'ai encore des moments d'anxiété, surtout le matin."
                : params.id === "4"
                  ? "J'ai des palpitations, des sueurs froides et parfois l'impression que je vais m'évanouir."
                  : params.id === "5"
                    ? "J'aimerais être plus à l'aise lors des présentations au travail. Je me sens toujours jugé."
                    : "Je traverse une période difficile suite à une rupture et j'ai du mal à retrouver un équilibre.",
      },
      {
        role: "assistant",
        content:
          params.id === "1"
            ? "Je comprends, le stress professionnel peut être particulièrement difficile à gérer. Pouvez-vous identifier des situations spécifiques qui déclenchent ce stress ? Cela nous aidera à élaborer des stratégies adaptées."
            : params.id === "2"
              ? "Les troubles du sommeil sont fréquents et peuvent avoir un impact significatif sur votre bien-être. Avez-vous remarqué des habitudes particulières avant de vous coucher ? Par exemple, l'utilisation d'écrans, la consommation de caféine ou d'alcool ?"
              : params.id === "3"
                ? "C'est un progrès ! L'anxiété matinale est souvent liée à l'anticipation de la journée. Avez-vous essayé les exercices de respiration que nous avions pratiqués la dernière fois ?"
                : params.id === "4"
                  ? "Ces symptômes sont caractéristiques d'une crise d'anxiété. Il est important de savoir que même si ces sensations sont très désagréables, elles ne sont pas dangereuses. Pouvez-vous me dire quand ces crises surviennent généralement ?"
                  : params.id === "5"
                    ? "Le sentiment d'être jugé lors des présentations est très courant. Rappelez-vous que la plupart des gens sont plus concentrés sur eux-mêmes que sur vous. Quelles pensées vous traversent l'esprit juste avant une présentation ?"
                    : "Je suis désolé pour cette période difficile. Les ruptures peuvent être très déstabilisantes. Comment se manifestent vos difficultés au quotidien ?",
      },
      {
        role: "user",
        content:
          params.id === "1"
            ? "Les réunions d'équipe sont particulièrement stressantes, surtout quand je dois présenter mon travail. J'ai peur de ne pas être à la hauteur."
            : params.id === "2"
              ? "Je regarde souvent des séries sur mon téléphone avant de dormir. Et je bois du café jusqu'en fin d'après-midi."
              : params.id === "3"
                ? "Oui, ils m'aident un peu, mais je n'arrive pas toujours à les faire correctement quand je suis vraiment anxieux."
                : params.id === "4"
                  ? "Souvent dans les lieux publics, comme les transports en commun ou les centres commerciaux. Parfois aussi avant des réunions importantes."
                  : params.id === "5"
                    ? "Je pense que je vais bégayer, oublier ce que je dois dire, ou que les gens vont trouver mes idées stupides."
                    : "J'ai du mal à me concentrer au travail, je dors mal et j'évite les sorties sociales. Je me sens vide.",
      },
      {
        role: "assistant",
        content:
          params.id === "1"
            ? "La peur de ne pas être à la hauteur est une préoccupation courante. Essayons une technique de respiration profonde que vous pourrez utiliser avant ces réunions. Inspirez lentement pendant 4 secondes, retenez pendant 4 secondes, puis expirez pendant 6 secondes. Répétez cet exercice pendant 5 minutes avant une situation stressante. Cela aide à réduire l'anxiété en activant votre système nerveux parasympathique."
            : params.id === "2"
              ? "Ces deux habitudes peuvent significativement perturber votre sommeil. La lumière bleue des écrans supprime la production de mélatonine, l'hormone du sommeil. Et la caféine peut rester dans votre système jusqu'à 8 heures. Je vous suggère d'arrêter les écrans 1 heure avant le coucher et de limiter la caféine après midi. Essayez plutôt une routine relaxante : lecture, étirements doux ou méditation."
              : params.id === "3"
                ? "C'est normal d'avoir du mal à pratiquer ces exercices en pleine anxiété. Essayons une approche différente. Que diriez-vous d'établir une routine matinale qui commence par quelque chose d'agréable pour vous ? Cela pourrait être écouter votre musique préférée, prendre un petit-déjeuner que vous aimez, ou faire une courte promenade."
                : params.id === "4"
                  ? "Les lieux publics et les situations de performance sont des déclencheurs courants. Pour les transports et centres commerciaux, la technique 5-4-3-2-1 peut être utile : identifiez 5 choses que vous voyez, 4 que vous pouvez toucher, 3 que vous entendez, 2 que vous sentez et 1 que vous goûtez. Cela vous ancre dans le présent et détourne l'attention de l'anxiété."
                  : params.id === "5"
                    ? "Ces pensées négatives automatiques alimentent votre anxiété. Essayons de les remettre en question. Quelle est la preuve que vous allez bégayer ? Avez-vous déjà oublié ce que vous deviez dire lors de précédentes présentations ? Et même si cela arrivait, serait-ce vraiment catastrophique ? La plupart des gens sont compréhensifs face aux petites erreurs."
                    : "Ce que vous décrivez ressemble à un état dépressif réactionnel, ce qui est normal après une rupture. Pour commencer à vous sentir mieux, essayons de réintroduire progressivement des activités plaisantes dans votre quotidien, même si vous n'en avez pas envie. Pourriez-vous identifier une petite activité que vous pourriez faire cette semaine ?",
      },
    ],
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/history">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Retour</span>
            </Link>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">{session.title}</h1>
          <div
            className={`rounded-full px-3 py-1 text-xs ${
              session.type === "Professionnel" ? "bg-secondary/10 text-secondary" : "bg-primary/10 text-primary"
            }`}
          >
            {session.type}
          </div>
        </div>
        <Button variant="outline" asChild>
          <a href="#" download>
            <Download className="mr-2 h-4 w-4" />
            Exporter
          </a>
        </Button>
      </div>

      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span>
          {session.date} • {session.time}
        </span>
        <span>Durée: {session.duration}</span>
      </div>

      <Card className="p-6">
        <div className="space-y-8">
          {session.messages.map((message, index) => (
            <div key={index} className={`flex items-start gap-4 ${message.role === "user" ? "justify-end" : ""}`}>
              {message.role === "assistant" && (
                <div className="flex-shrink-0">
                  {session.type === "Professionnel" ? (
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr." />
                      <AvatarFallback>DR</AvatarFallback>
                    </Avatar>
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                  )}
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-lg px-4 py-3 ${
                  message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}
              >
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
              {message.role === "user" && (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                  <User2 className="h-5 w-5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/dashboard/history">Retour à l'historique</Link>
        </Button>
        <Button asChild>
          <Link href="/dashboard/start-chat">Nouvelle conversation</Link>
        </Button>
      </div>
    </div>
  )
}

