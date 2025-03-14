import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Paramètres</h1>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profil</TabsTrigger>
          <TabsTrigger value="account">Compte</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Confidentialité</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informations personnelles</CardTitle>
              <CardDescription>Mettez à jour vos informations personnelles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4 md:items-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="@username" />
                  <AvatarFallback>UN</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button variant="outline" size="sm">
                    Changer la photo
                  </Button>
                  <p className="text-xs text-muted-foreground">JPG, PNG ou GIF. 1MB maximum.</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Prénom</Label>
                  <Input id="first-name" defaultValue="Jean" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Nom</Label>
                  <Input id="last-name" defaultValue="Dupont" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="jean.dupont@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" placeholder="Parlez-nous un peu de vous..." className="min-h-[100px]" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Enregistrer les modifications</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Préférences de communication</CardTitle>
              <CardDescription>Personnalisez vos préférences de communication avec les professionnels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="language">Langue préférée</Label>
                <Select defaultValue="fr">
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Sélectionnez une langue" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="en">Anglais</SelectItem>
                    <SelectItem value="es">Espagnol</SelectItem>
                    <SelectItem value="de">Allemand</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="communication-method">Méthode de communication préférée</Label>
                <Select defaultValue="chat">
                  <SelectTrigger id="communication-method">
                    <SelectValue placeholder="Sélectionnez une méthode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="chat">Chat en ligne</SelectItem>
                    <SelectItem value="video">Vidéoconférence</SelectItem>
                    <SelectItem value="phone">Téléphone</SelectItem>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">Fuseau horaire</Label>
                <Select defaultValue="europe-paris">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Sélectionnez un fuseau horaire" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="europe-paris">Europe/Paris (UTC+1)</SelectItem>
                    <SelectItem value="europe-london">Europe/London (UTC+0)</SelectItem>
                    <SelectItem value="america-new_york">America/New_York (UTC-5)</SelectItem>
                    <SelectItem value="asia-tokyo">Asia/Tokyo (UTC+9)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Enregistrer les préférences</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informations du compte</CardTitle>
              <CardDescription>Mettez à jour les informations de votre compte</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Nom d'utilisateur</Label>
                <Input id="username" defaultValue="jean_dupont" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Numéro de téléphone</Label>
                <Input id="phone" type="tel" defaultValue="+33 6 12 34 56 78" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Enregistrer les modifications</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Changer le mot de passe</CardTitle>
              <CardDescription>Mettez à jour votre mot de passe pour sécuriser votre compte</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Mot de passe actuel</Label>
                <Input id="current-password" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="new-password">Nouveau mot de passe</Label>
                <Input id="new-password" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Changer le mot de passe</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Supprimer le compte</CardTitle>
              <CardDescription>Supprimez définitivement votre compte et toutes vos données</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Cette action est irréversible. Toutes vos données, y compris votre profil, vos conversations et vos
                préférences, seront définitivement supprimées.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="destructive">Supprimer le compte</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Préférences de notification</CardTitle>
              <CardDescription>Configurez comment et quand vous souhaitez être notifié</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Notifications par email</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-sessions">Sessions à venir</Label>
                    <p className="text-sm text-muted-foreground">Recevez un rappel avant vos sessions programmées</p>
                  </div>
                  <Switch id="email-sessions" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-messages">Nouveaux messages</Label>
                    <p className="text-sm text-muted-foreground">
                      Soyez notifié lorsque vous recevez un nouveau message
                    </p>
                  </div>
                  <Switch id="email-messages" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-newsletter">Newsletter</Label>
                    <p className="text-sm text-muted-foreground">Recevez nos conseils et actualités mensuels</p>
                  </div>
                  <Switch id="email-newsletter" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Notifications push</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-sessions">Sessions à venir</Label>
                    <p className="text-sm text-muted-foreground">Recevez un rappel avant vos sessions programmées</p>
                  </div>
                  <Switch id="push-sessions" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-messages">Nouveaux messages</Label>
                    <p className="text-sm text-muted-foreground">
                      Soyez notifié lorsque vous recevez un nouveau message
                    </p>
                  </div>
                  <Switch id="push-messages" defaultChecked />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Notifications WhatsApp</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="whatsapp-sessions">Sessions à venir</Label>
                    <p className="text-sm text-muted-foreground">Recevez un rappel avant vos sessions programmées</p>
                  </div>
                  <Switch id="whatsapp-sessions" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="whatsapp-messages">Nouveaux messages</Label>
                    <p className="text-sm text-muted-foreground">
                      Soyez notifié lorsque vous recevez un nouveau message
                    </p>
                  </div>
                  <Switch id="whatsapp-messages" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Enregistrer les préférences</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres de confidentialité</CardTitle>
              <CardDescription>
                Gérez qui peut voir vos informations et comment vos données sont utilisées
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Visibilité du profil</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="profile-visibility">Profil public</Label>
                    <p className="text-sm text-muted-foreground">Permettre aux professionnels de voir votre profil</p>
                  </div>
                  <Switch id="profile-visibility" defaultChecked />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Données et confidentialité</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="data-analytics">Analyse des données</Label>
                    <p className="text-sm text-muted-foreground">
                      Nous aidons à améliorer nos services en analysant l'utilisation de façon anonyme
                    </p>
                  </div>
                  <Switch id="data-analytics" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="data-personalization">Personnalisation</Label>
                    <p className="text-sm text-muted-foreground">
                      Utiliser vos données pour personnaliser votre expérience
                    </p>
                  </div>
                  <Switch id="data-personalization" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="data-research">Recherche</Label>
                    <p className="text-sm text-muted-foreground">
                      Contribuer à la recherche sur la santé mentale (données anonymisées)
                    </p>
                  </div>
                  <Switch id="data-research" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Historique des conversations</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="history-retention">Conservation des données</Label>
                    <p className="text-sm text-muted-foreground">
                      Durée de conservation de votre historique de conversations
                    </p>
                  </div>
                  <Select defaultValue="1-year">
                    <SelectTrigger id="history-retention" className="w-[180px]">
                      <SelectValue placeholder="Sélectionnez une durée" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3-months">3 mois</SelectItem>
                      <SelectItem value="6-months">6 mois</SelectItem>
                      <SelectItem value="1-year">1 an</SelectItem>
                      <SelectItem value="forever">Indéfiniment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="outline" size="sm">
                  Télécharger mes données
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Enregistrer les préférences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

