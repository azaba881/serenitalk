"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bot, Send, User2, Paperclip, Mic } from "lucide-react"
import { useParams } from "next/navigation"

export default function ChatPage() {
  const { type } = useParams()
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        type === "premium"
          ? "Bonjour ! Je suis votre assistant premium SereniTalk. Comment puis-je vous aider aujourd'hui ?"
          : "Bonjour ! Je suis SereniBot. Comment puis-je vous aider aujourd'hui ? (Vous avez 5 messages gratuits par jour)",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: input }])
    setInput("")

    // Simulate AI typing
    setIsTyping(true)

    // Simulate AI response after a delay
    setTimeout(() => {
      let response = ""

      if (input.toLowerCase().includes("stress")) {
        response =
          "La gestion du stress est essentielle pour votre bien-être. Avez-vous essayé des techniques de respiration profonde ? Inspirez lentement pendant 4 secondes, retenez pendant 4 secondes, puis expirez pendant 6 secondes. Répétez cet exercice pendant 5 minutes."
      } else if (input.toLowerCase().includes("sommeil") || input.toLowerCase().includes("dormir")) {
        response =
          "Pour améliorer votre sommeil, essayez d'établir une routine régulière. Évitez les écrans une heure avant de vous coucher, maintenez votre chambre fraîche et sombre, et pratiquez une activité relaxante comme la lecture avant de dormir."
      } else if (input.toLowerCase().includes("anxiété") || input.toLowerCase().includes("anxieux")) {
        response =
          "L'anxiété peut être difficile à gérer. Une technique efficace est la méthode 5-4-3-2-1 : identifiez 5 choses que vous voyez, 4 choses que vous pouvez toucher, 3 choses que vous entendez, 2 choses que vous sentez, et 1 chose que vous goûtez. Cela vous aide à vous ancrer dans le présent."
      } else {
        response =
          "Je comprends. Pouvez-vous m'en dire plus sur ce que vous ressentez ? Je suis là pour vous écouter et vous aider à trouver des solutions adaptées à votre situation."
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold tracking-tight">
          {type === "premium" ? "Conversation Premium" : "Conversation Gratuite"}
        </h1>
        {type !== "premium" && (
          <div className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">Messages restants: 4/5</div>
        )}
      </div>

      <Card className="flex-1 flex flex-col overflow-hidden p-4">
        <div className="flex-1 overflow-y-auto pr-2">
          {messages.map((message, index) => (
            <div key={index} className={`flex items-start gap-3 mb-4 ${message.role === "user" ? "justify-end" : ""}`}>
              {message.role === "assistant" && (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
              )}
              <div
                className={`rounded-lg px-3 py-2 max-w-[80%] ${
                  message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              </div>
              {message.role === "user" && (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
                  <User2 className="h-5 w-5" />
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex items-start gap-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <div className="rounded-lg px-3 py-2 bg-muted">
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-primary/60 animate-bounce [animation-delay:0.2s]"></div>
                  <div className="h-2 w-2 rounded-full bg-primary/60 animate-bounce [animation-delay:0.4s]"></div>
                  <div className="h-2 w-2 rounded-full bg-primary/60 animate-bounce [animation-delay:0.6s]"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="mt-4 flex items-end gap-2">
          <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
            <Paperclip className="h-5 w-5" />
            <span className="sr-only">Attach file</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
            <Mic className="h-5 w-5" />
            <span className="sr-only">Voice input</span>
          </Button>
          <div className="relative flex-1">
            <Input
              placeholder="Écrivez votre message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="pr-10 py-6 rounded-full"
            />
          </div>
          <Button onClick={handleSend} size="icon" className="rounded-full h-10 w-10" disabled={!input.trim()}>
            <Send className="h-5 w-5" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </Card>
    </div>
  )
}

