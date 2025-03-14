"use client"; // Nécessaire pour utiliser useParams dans un composant client

import { useParams } from "next/navigation"; // Import de useParams
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";  
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bot, Download, ArrowLeft, User2 } from "lucide-react";
import Link from "next/link";

export default function SessionPage() {
  const params = useParams(); // Récupération de l'ID de la session
  const sessionId = params.id as string; // Assure que l'ID est bien une string

  // Mock data pour la session
  const session = {
    id: sessionId,
    type: sessionId === "3" || sessionId === "6" ? "Professionnel" : "IA",
    date: "15/03/2025",
    time: "14:30",
    title:
      sessionId === "1"
        ? "Gestion du stress"
        : sessionId === "2"
        ? "Améliorer le sommeil"
        : sessionId === "3"
        ? "Session avec Dr. Martin"
        : sessionId === "4"
        ? "Gestion de l'anxiété"
        : sessionId === "5"
        ? "Confiance en soi"
        : "Session avec Dr. Dubois",
    duration: sessionId === "3" || sessionId === "6" ? "45 min" : "25 min",
    messages: [
      {
        role: "assistant",
        content:
          sessionId === "1"
            ? "Bonjour ! Comment puis-je vous aider aujourd'hui concernant la gestion du stress ?"
            : sessionId === "2"
            ? "Bonjour ! Vous souhaitez améliorer votre sommeil, c'est bien ça ?"
            : sessionId === "3"
            ? "Bonjour ! Comment vous sentez-vous depuis notre dernière session ?"
            : sessionId === "4"
            ? "Bonjour ! Parlons de votre anxiété. Pouvez-vous me décrire ce que vous ressentez ?"
            : sessionId === "5"
            ? "Bonjour ! Aujourd'hui nous allons travailler sur votre confiance en vous. Par où souhaitez-vous commencer ?"
            : "Bonjour ! C'est notre première rencontre. Pouvez-vous me parler un peu de vous et de ce qui vous amène ?",
      },
    ],
  };

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
          <Link href="/dashboard/history">Retour à l&apos;historique</Link>
        </Button>
        <Button asChild>
          <Link href="/dashboard/start-chat">Nouvelle conversation</Link>
        </Button>
      </div>
    </div>
  );
}
