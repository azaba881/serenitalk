# SereniTalk – Votre Espace d'Écoute et de Soutien Psychologique

SereniTalk est une plateforme moderne offrant un accompagnement psychologique personnalisé à travers un **chatbot IA intelligent** et des **professionnels qualifiés**, selon la formule choisie.

## 🌟 Objectif Principal
Faciliter l'accès à un soutien psychologique **accessible, confidentiel et efficace** grâce à trois formules distinctes :

1. **Gratuit** → Assistance limitée avec un chatbot IA.
2. **Premium** → Assistance étendue avec le chatbot IA.
3. **Personnalisée** → Consultation avec un professionnel.

📲 **WhatsApp disponible** pour une assistance fluide et discrète.

---

## 🛠️ Technologies Utilisées
- **Next.js** → Interface fluide et performante
- **Clerk** → Authentification sécurisée des utilisateurs
- **Prisma + PostgreSQL** → Stockage et gestion des conversations
- **OpenAI API** → Chatbot intelligent pour le soutien IA
- **Twilio API (WhatsApp & SMS)** → Communication instantanée
- **Stripe** → Gestion des abonnements

---

## 📄 Structure du Site & Fonctionnalités

### 1️⃣ Page d'accueil (/)
✅ Présentation de SereniTalk et des formules
✅ Section Contactez-nous
✅ Inscription & Connexion

**📌 Header** :
- Logo SereniTalk (gauche)
- Menu (Guide, Pricing, Contact Us, Sponsor This Project)
- Sélecteur de langue (EN/FR), Mode sombre/clair, Connexion

### 2️⃣ Tableau de bord utilisateur (/dashboard)
✅ Sessions en cours et passées
✅ Historique des conversations IA & pros
✅ Exportation de conseils personnalisés
✅ Démarrer une nouvelle conversation

**📌 Sidebar** :
- Dashboard
- Formule & Abonnement
- Historique des activités
- Paramètres
- Déconnexion

### 3️⃣ Création d’une session (/dashboard/start-chat)
✅ Choix du mode d’assistance
✅ Interface de chat fluide
✅ Intégration WhatsApp

### 4️⃣ Page Pricing (/pricing)
✅ Comparatif des offres
✅ Abonnement via Stripe
✅ FAQ sur les abonnements

### 5️⃣ Page Contact (/contact)
✅ Formulaire de contact
✅ Email & téléphone du support

### 6️⃣ Administration (/gourou – réservé aux admins)
🔹 Statistiques générales
🔹 Gestion des abonnements
🔹 Modération des conversations

---

## 🎨 UX/UI – Design & Couleurs
- **Bleu clair (#3B82F6)** → Sérénité
- **Vert d’eau (#10B981)** → Bien-être
- **Dégradés doux** pour une interface moderne
- Expérience fluide sur mobile & desktop

---

## 🚀 Pourquoi choisir SereniTalk ?
✅ **Confidentiel & Sécurisé** 🔒
✅ **Assistance 24/7 avec IA** 🤖
✅ **Experts certifiés à votre écoute** 🧑‍⚕️
✅ **WhatsApp pour une communication fluide** 💬

---

## 🚀 Installation & Démarrage

Clonez le projet et installez les dépendances :

```bash
# Cloner le repo
git clone https://github.com/votre-repo/serenitalk.git
cd serenitalk

# Installer les dépendances
npm install  # ou yarn install ou pnpm install
```

Lancez le serveur de développement :

```bash
npm run dev  # ou yarn dev ou pnpm dev ou bun dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

---

## 📚 En savoir plus
- [Documentation Next.js](https://nextjs.org/docs)
- [API Clerk](https://clerk.dev/docs)
- [API OpenAI](https://platform.openai.com/docs/)
- [API Twilio](https://www.twilio.com/docs/whatsapp)
- [Documentation Stripe](https://stripe.com/docs)

---

## 🚀 Déploiement sur Vercel

Le moyen le plus simple de déployer SereniTalk est d'utiliser [Vercel](https://vercel.com/new).

Consultez la [documentation de déploiement Next.js](https://nextjs.org/docs/deployment) pour plus de détails.

---

🎯 **Rejoignez-nous et construisons ensemble un monde plus serein !**

