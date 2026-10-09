export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (envUrl && envUrl.length > 0) {
    return envUrl.startsWith("http") ? envUrl : `https://${envUrl}`;
  }

  const vercelUrl = (process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL)?.trim();
  if (vercelUrl && vercelUrl.length > 0) {
    return `https://${vercelUrl}`;
  }

  return "http://localhost:3000";
}

export const siteConfig = {
  botName: "Rezo",
  botLogo: "/Fluorine_deep_blue.gif",
  botPfp: "/Fluorine_deep_blue.gif",
  badge: "TRUSTED BY 14,025+ SERVERS",
  tagline: "The Ultimate Discord Bot",
  description:
    "Elevate your server with military-grade moderation, anti-nuke protection, and an arsenal of 300+ powerful commands.",
  developer: "Mohsin.Exe",
  teamName: "CodeX Development",
  links: {
    invite:
      process.env.NEXT_PUBLIC_DISCORD_INVITE_URL ??
      "https://discord.com/oauth2/authorize?client_id=1479842310081482792&permissions=8&scope=bot+applications.commands",
    dashboard:
      process.env.NEXT_PUBLIC_DASHBOARD_URL ?? "#dashboard",
    support:
      process.env.NEXT_PUBLIC_SUPPORT_SERVER_URL ??
      "https://discord.gg/codexdevs",
    docs: process.env.NEXT_PUBLIC_DOCUMENTATION_URL ?? "#documentation",
    github:
      process.env.NEXT_PUBLIC_GITHUB_URL ??
      "https://github.com/MohsinAli088",
    status: process.env.NEXT_PUBLIC_STATUS_URL ?? "#status",
    changelog: process.env.NEXT_PUBLIC_CHANGELOG_URL ?? "#changelog",
    discord: process.env.NEXT_PUBLIC_COMMUNITY_DISCORD_URL ?? "https://discord.gg/codexdevs",
    x: process.env.NEXT_PUBLIC_X_URL ?? "https://x.com",
  },
  stats: [
    { label: "Active Servers", value: 14000, suffix: "+", icon: "Server", formattedValue: "14,000+" },
    { label: "Uptime", value: 99.9, suffix: "%", icon: "CircleCheck", formattedValue: "99.9%" },
    { label: "Users Protected", value: 4000000, suffix: "+", icon: "Users", formattedValue: "4M+" },
    { label: "Commands Executed", value: 50000000, suffix: "+", icon: "MessageSquare", formattedValue: "50M+" },
  ],
  nav: [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Commands", href: "#commands" },
    { name: "Documentation", href: "#documentation" },
    { name: "Dashboard", href: "#dashboard" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ],
  coreFeatures: [
    {
      id: "security",
      title: "Advanced Security",
      description: "Military-grade protection with real-time threat detection and automated response systems.",
      badge: "Real-time",
      icon: "ShieldAlert",
    },
    {
      id: "antinuke",
      title: "Anti-Nuke System",
      description: "Prevent server destruction with instant rollback, permission lockdowns, and audit logging.",
      badge: "Zero-Trust",
      icon: "Lock",
    },
    {
      id: "nightmode",
      title: "Night Mode",
      description: "Automated security lockdown during off-hours with customizable schedules and triggers.",
      badge: "Automated",
      icon: "Moon",
    },
    {
      id: "analytics",
      title: "Analytics",
      description: "Comprehensive insights into server activity, member growth, and moderation statistics.",
      badge: "Real-time",
      icon: "ChartNoAxesColumnIncreasing",
    },
  ],
  featureCards: [
    {
      title: "Moderation",
      icon: "Shield",
      points: ["Ban & Kick", "Warn & Timeout", "Mute & Slowmode", "Purge & AutoMod"],
    },
    {
      title: "Anti-Raid & Security",
      icon: "ShieldAlert",
      points: ["Join Burst Lockdown", "Anti-Mass Mention", "Anti-Bot Verification", "Audit Logging"],
    },
    {
      title: "Music & Audio",
      icon: "Disc",
      points: ["Spotify & YouTube", "SoundCloud Streams", "Equalizer Filters", "24/7 Voice Queue"],
    },
    {
      title: "Automation Engine",
      icon: "Sparkles",
      points: ["Dynamic Auto Roles", "Welcome Cards", "Scheduled Announcements", "Custom Triggers"],
    },
    {
      title: "Economy & Leveling",
      icon: "Zap",
      points: ["Rank Cards", "Global XP System", "Server Shop", "Daily Rewards"],
    },
    {
      title: "Tickets & Support",
      icon: "Ticket",
      points: ["Multi-Panel Setup", "Staff Role Claiming", "HTML Transcripts", "Auto-Close Inactive"],
    },
  ],
  showcases: [
    {
      title: "Protect Your Server",
      description:
        "Fluorine continuously monitors your community and blocks dangerous actions before they become incidents.",
      bullets: [
        "Raid protection with instant threat detection",
        "Anti-ban, anti-kick, anti-channel delete",
        "Configurable punishments and incident logs",
      ],
      cta: "Configure Security",
      panelTitle: "Anti-Nuke Control Center",
      metrics: [
        "Raid Protection: Active",
        "Suspicious Actions Blocked: 18",
        "Response Time: < 300ms",
      ],
    },
    {
      title: "Automate Community Growth",
      description:
        "Build retention with welcome flows, smart responses, and leveling incentives that keep members engaged.",
      bullets: [
        "Role-based onboarding journeys",
        "Event-triggered automations",
        "Reward loops with XP and economy sync",
      ],
      cta: "Build Automations",
      panelTitle: "Automation Builder",
      metrics: [
        "Automations Running: 24",
        "Welcome Completion: 87%",
        "Response Accuracy: 99.2%",
      ],
    },
    {
      title: "Run Everything From One Dashboard",
      description:
        "Manage moderation, music, tickets, and analytics without switching between disconnected bot panels.",
      bullets: [
        "Unified command and permission system",
        "Real-time logs and activity streams",
        "Server-wide settings sync in one click",
      ],
      cta: "Open Dashboard",
      panelTitle: "Unified Server Operations",
      metrics: ["Modules Enabled: 17", "Commands Today: 129,402", "System Uptime: 99.9%"],
    },
  ],
  testimonials: [
    {
      quote: "This bot replaced almost every single bot in our server with zero latency.",
      author: "Ari Khan",
      role: "CarryDepie Community Manager",
    },
    {
      quote: "Setup took less than two minutes and the anti-nuke system gives us complete peace of mind.",
      author: "Lena Ortiz",
      role: "Basu City Admin",
    },
    {
      quote: "The deep blue interface and dashboard are the most intuitive we've ever used.",
      author: "Mason Reed",
      role: "Esports Server Owner",
    },
  ],
  communityServers: [
    {
      name: "CarryDepie",
      description: "A premier Discord gaming and chill community protected by advanced bot moderation.",
      icon: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=256&h=256&fit=crop",
      banner: "https://images.unsplash.com/photo-1542751371000-adc38448a05e?w=800&h=300&fit=crop",
      online: "447",
      members: "2,980",
      verified: true,
      tags: ["Protected", "Gaming"],
    },
    {
      name: "Basu City",
      description: "🌟 Welcome to Basu Plays Discord! 🎮 Join for gaming fun, events, and community! 🌌",
      icon: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=256&h=256&fit=crop",
      banner: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&h=300&fit=crop",
      online: "5,524",
      members: "36,831",
      verified: true,
      tags: ["Boosted", "Protected"],
    },
    {
      name: "Mc Flame",
      description: "The official discord community of Mc Flame! Hangout, events, gaming and high energy.",
      icon: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=256&h=256&fit=crop",
      banner: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=300&fit=crop",
      online: "1,501",
      members: "10,010",
      verified: true,
      tags: ["Official", "Community"],
    },
    {
      name: "S Λ I Y Λ R Λ Λ",
      description: "Saiyaraaa | Hangout/Masti - Chill/Chat - Giveaways and weekly gaming tournaments.",
      icon: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=256&h=256&fit=crop",
      banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=300&fit=crop",
      online: "3,133",
      members: "20,887",
      verified: false,
      tags: ["Boosted", "Protected"],
    },
    {
      name: "PSD1 Gang [ Official ]",
      description: "Elite competitive esports and hangout discord community with verified anti-nuke security.",
      icon: "https://images.unsplash.com/photo-1563089145-599997674d42?w=256&h=256&fit=crop",
      banner: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=800&h=300&fit=crop",
      online: "250",
      members: "1,668",
      verified: false,
      tags: ["Esports", "Protected"],
    },
    {
      name: "PAHADI GAMING",
      description: "Welcome to Official Discord Server of Pahadi Gaming. Daily scrims, chat and giveaways!",
      icon: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=256&h=256&fit=crop",
      banner: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=300&fit=crop",
      online: "1,687",
      members: "11,248",
      verified: true,
      tags: ["Boosted", "Protected"],
    },
  ],
  commandCategories: [
    "All",
    "Moderation",
    "Security",
    "Music",
    "Automation",
    "Leveling",
    "Economy",
    "Tickets",
    "Utility",
  ],
  commands: [
    { name: "/help", description: "Affiche toutes les commandes disponibles de Rezo avec leurs descriptions.", category: "Utility", usage: "/help [commande]", permission: "Use Application Commands" },
    { name: "/serverinfo", description: "Affiche les informations détaillées du serveur.", category: "Utility", usage: "/serverinfo", permission: "Use Application Commands" },
    { name: "/userinfo", description: "Affiche les informations d'un membre du serveur.", category: "Utility", usage: "/userinfo [@user]", permission: "Use Application Commands" },
    { name: "/ban", description: "Bannit un membre du serveur avec raison dans les logs d'audit.", category: "Moderation", usage: "/ban @user [raison] [jours_suppression]", permission: "Ban Members" },
    { name: "/kick", description: "Expulse un membre du serveur.", category: "Moderation", usage: "/kick @user [raison]", permission: "Kick Members" },
    { name: "/warn", description: "Avertit un membre avec système de sanctions automatiques.", category: "Moderation", usage: "/warn @user raison", permission: "Moderate Members" },
    { name: "/timeout", description: "Exclut temporairement un membre des canaux textuels et vocaux.", category: "Moderation", usage: "/timeout @user durée [raison]", permission: "Moderate Members" },
    { name: "/clear", description: "Supprime un nombre spécifique de messages dans un canal.", category: "Moderation", usage: "/clear <nombre> [@user]", permission: "Manage Messages" },
    { name: "/lock", description: "Verrouille un canal pour empêcher les membres d'y écrire.", category: "Moderation", usage: "/lock [#canal] [raison]", permission: "Manage Channels" },
    { name: "/unlock", description: "Déverrouille un canal précédemment verrouillé.", category: "Moderation", usage: "/unlock [#canal]", permission: "Manage Channels" },
    { name: "/antinuke", description: "Configure les seuils anti-nuke, whitelists et actions de verrouillage.", category: "Security", usage: "/antinuke setup", permission: "Administrator" },
    { name: "/antiraid", description: "Active la protection anti-raid avec détection automatique.", category: "Security", usage: "/antiraid enable", permission: "Administrator" },
    { name: "/backup", description: "Crée une sauvegarde complète du serveur (rôles, canaux, permissions).", category: "Security", usage: "/backup create", permission: "Administrator" },
    { name: "/restore", description: "Restaure une sauvegarde précédente du serveur.", category: "Security", usage: "/restore <backup_id>", permission: "Administrator" },
    { name: "/play", description: "Joue de la musique depuis YouTube, Spotify ou SoundCloud.", category: "Music", usage: "/play <chanson ou url>", permission: "Connect & Speak" },
    { name: "/skip", description: "Passe à la chanson suivante dans la file d'attente.", category: "Music", usage: "/skip", permission: "Connect & Speak" },
    { name: "/queue", description: "Affiche la file d'attente musicale avec boutons interactifs.", category: "Music", usage: "/queue", permission: "Use Application Commands" },
    { name: "/volume", description: "Ajuste le volume de lecture de la musique (0-100).", category: "Music", usage: "/volume <0-100>", permission: "Connect & Speak" },
    { name: "/loop", description: "Active/désactive la répétition de la chanson ou file d'attente.", category: "Music", usage: "/loop [song|queue]", permission: "Connect & Speak" },
    { name: "/welcome", description: "Configure les messages de bienvenue avec cartes personnalisées.", category: "Automation", usage: "/welcome setup", permission: "Manage Server" },
    { name: "/autorole", description: "Définit des rôles automatiques pour les nouveaux membres.", category: "Automation", usage: "/autorole add @role", permission: "Manage Roles" },
    { name: "/giveaway", description: "Crée un giveaway interactif avec timer et sélection aléatoire.", category: "Automation", usage: "/giveaway create", permission: "Manage Server" },
    { name: "/level", description: "Affiche votre carte de rang et XP du serveur.", category: "Leveling", usage: "/level [@user]", permission: "Use Application Commands" },
    { name: "/leaderboard", description: "Affiche le classement XP du serveur.", category: "Leveling", usage: "/leaderboard", permission: "Use Application Commands" },
    { name: "/setlevel", description: "Définit le niveau XP d'un membre.", category: "Leveling", usage: "/setlevel @user <niveau>", permission: "Manage Server" },
    { name: "/balance", description: "Affiche votre portefeuille et solde bancaire du serveur.", category: "Economy", usage: "/balance [@user]", permission: "Use Application Commands" },
    { name: "/daily", description: "Récupère votre récompense quotidienne.", category: "Economy", usage: "/daily", permission: "Use Application Commands" },
    { name: "/pay", description: "Envoie de l'argent à un autre membre.", category: "Economy", usage: "/pay @user <montant>", permission: "Use Application Commands" },
    { name: "/shop", description: "Affiche la boutique du serveur avec items achetables.", category: "Economy", usage: "/shop", permission: "Use Application Commands" },
    { name: "/ticket", description: "Crée un panneau de tickets support personnalisable.", category: "Tickets", usage: "/ticket panel", permission: "Manage Channels" },
    { name: "/close", description: "Ferme un ticket avec transcription HTML optionnelle.", category: "Tickets", usage: "/close [raison]", permission: "Manage Channels" },
    { name: "/poll", description: "Crée un sondage avec réactions personnalisables.", category: "Utility", usage: "/poll <question>", permission: "Use Application Commands" },
    { name: "/embed", description: "Crée un message embed personnalisé.", category: "Utility", usage: "/embed create", permission: "Manage Messages" },
    { name: "/avatar", description: "Affiche l'avatar d'un utilisateur en haute résolution.", category: "Utility", usage: "/avatar [@user]", permission: "Use Application Commands" },
  ],
  pricing: [
    {
      name: "FREE",
      price: "$0",
      period: "forever",
      description: "Essential moderation and utilities for growing community servers.",
      features: [
        "Core Moderation & AutoMod",
        "Standard Audit Logging",
        "Basic Leveling & Rank Cards",
        "Standard Music (720p audio)",
        "Up to 2 Ticket Panels",
        "Community Support",
      ],
      cta: "Add to Discord",
      highlighted: false,
    },
    {
      name: "PREMIUM",
      price: "$4.99",
      period: "/month",
      badge: "MOST POPULAR",
      description: "Complete security fortress with high-fidelity music & automation.",
      features: [
        "Military-Grade Anti-Nuke System",
        "Anti-Raid & Instant Rollback",
        "Night Mode Automated Lockdown",
        "Lossless 384kbps Hi-Fi Music",
        "Unlimited Tickets with HTML Logs",
        "Custom Bot Embed Color & Branding",
        "Priority 24/7 VIP Support",
      ],
      cta: "Upgrade to Premium",
      highlighted: true,
    },
    {
      name: "ENTERPRISE",
      price: "$12.99",
      period: "/month",
      description: "Maximum power and dedicated node for mega servers and networks.",
      features: [
        "Everything in Premium",
        "Dedicated Bot Instance & Custom Name",
        "Global Cross-Server Sync",
        "Real-Time Webhook Security Feeds",
        "Unlimited Custom Automations",
        "Custom Vanity URL Integration",
        "Dedicated Account Manager",
      ],
      cta: "Contact Enterprise",
      highlighted: false,
    },
  ],
  documentation: [
    {
      category: "Démarrage rapide",
      icon: "Rocket",
      guides: [
        {
          title: "Installation & Configuration",
          description: "Invitez Rezo sur votre serveur et configurez-le en moins de 2 minutes.",
          steps: [
            "Cliquez sur le bouton 'Ajouter à Discord' et sélectionnez votre serveur",
            "Autorisez les permissions nécessaires pour Rezo",
            "Utilisez /setup dans un canal pour la configuration initiale",
            "Personnalisez les modules selon vos besoins"
          ],
          duration: "2 min"
        },
        {
          title: "Configuration de la sécurité",
          description: "Activez la protection anti-nuke et anti-raid pour sécuriser votre serveur.",
          steps: [
            "Utilisez /antinuke setup pour configurer les seuils",
            "Ajoutez des membres de confiance avec /whitelist add @user",
            "Activez /antiraid pour la protection automatique",
            "Configurez les alertes de sécurité dans un canal dédié"
          ],
          duration: "5 min"
        },
        {
          title: "Système de bienvenue",
          description: "Créez des messages de bienvenue personnalisés avec cartes graphiques.",
          steps: [
            "Utilisez /welcome setup dans le canal souhaité",
            "Personnalisez le message avec des variables {user}, {server}",
            "Configurez une carte de bienvenue avec /welcome card",
            "Testez avec /welcome test"
          ],
          duration: "3 min"
        }
      ]
    },
    {
      category: "Modération",
      icon: "Shield",
      guides: [
        {
          title: "Commandes de modération essentielles",
          description: "Maîtrisez les outils de modération pour gérer votre communauté.",
          steps: [
            "/ban @user [raison] - Bannir un membre",
            "/kick @user [raison] - Expulser un membre",
            "/warn @user raison - Avertir un membre",
            "/timeout @user durée - Exclure temporairement",
            "/clear nombre [@user] - Supprimer des messages"
          ],
          duration: "5 min"
        },
        {
          title: "AutoMod & Filtres",
          description: "Configuration des filtres automatiques et détection de spam.",
          steps: [
            "Utilisez /automod setup pour activer les filtres",
            "Configurez les filtres anti-spam, anti-lien, anti-mention",
            "Définissez les sanctions automatiques par niveaux",
            "Ajoutez des mots interdits personnalisés"
          ],
          duration: "10 min"
        }
      ]
    },
    {
      category: "Musique",
      icon: "Headphones",
      guides: [
        {
          title: "Lecture de musique",
          description: "Utilisez Rezo comme lecteur de musique haute qualité.",
          steps: [
            "/play <chanson> - Jouer une chanson ou URL",
            "/queue - Voir la file d'attente",
            "/skip - Passer à la suivante",
            "/volume 50 - Ajuster le volume",
            "/loop queue - Répéter la file d'attente"
          ],
          duration: "2 min"
        },
        {
          title: "Fonctionnalités avancées",
          description: "Filtres audio et contrôle de qualité.",
          steps: [
            "Utilisez /filter bassboost pour renforcer les basses",
            "Activez le mode 8D avec /filter 8d",
            "Mode nightcore avec /filter nightcore",
            "Configurez la qualité audio dans les paramètres"
          ],
          duration: "3 min"
        }
      ]
    },
    {
      category: "Économie & Niveaux",
      icon: "Coins",
      guides: [
        {
          title: "Système de niveaux",
          description: "Activez le système XP et récompenses pour engager votre communauté.",
          steps: [
            "Activez le système XP avec /leveling setup",
            "Configurez les récompenses de rôles par niveaux",
            "Personnalisez les cartes de rang avec /rank customize",
            "Consultez le classement avec /leaderboard"
          ],
          duration: "8 min"
        },
        {
          title: "Économie du serveur",
          description: "Créez une économie virtuelle pour votre serveur.",
          steps: [
            "Activez l'économie avec /economy setup",
            "Créez une boutique avec /shop create",
            "Ajoutez des items achetables",
            "Les membres gagnent de l'argent avec /daily, /work"
          ],
          duration: "10 min"
        }
      ]
    },
    {
      category: "Tickets & Support",
      icon: "Ticket",
      guides: [
        {
          title: "Système de tickets",
          description: "Configurez un système de support professionnel.",
          steps: [
            "Créez un panneau de tickets avec /ticket panel",
            "Personnalisez les catégories de tickets",
            "Définissez les rôles staff autorisés",
            "Les tickets se ferment avec /close et génèrent des transcriptions"
          ],
          duration: "7 min"
        }
      ]
    },
    {
      category: "API & Intégrations",
      icon: "Code",
      guides: [
        {
          title: "Webhooks & Logs",
          description: "Intégrez Rezo avec des services externes.",
          steps: [
            "Configurez les logs d'audit avec /logging setup",
            "Créez des webhooks personnalisés pour les événements",
            "Intégrez avec votre site web via l'API",
            "Consultez la documentation API complète"
          ],
          duration: "15 min"
        }
      ]
    }
  ],
  faqs: [
    {
      q: "Is the bot free to add to my Discord server?",
      a: "Yes! You can invite the bot for free with full access to core moderation, music, leveling, basic automod, and utility commands without entering a credit card.",
    },
    {
      q: "How does the Anti-Nuke system prevent server destruction?",
      a: "Our Anti-Nuke module continuously monitors administrative actions. If a compromised account or rogue admin deletes channels, kicks members, or modifies roles above configured thresholds, the bot immediately revokes permissions, restores deleted items via audit rollback, and notifies owners.",
    },
    {
      q: "How long does setup take?",
      a: "Setup takes less than 2 minutes. Once invited, run `/setup` in any channel or visit our web dashboard to enable security, autoroles, and logging in one click.",
    },
    {
      q: "Can I manage multiple Discord servers from one dashboard?",
      a: "Yes. Our web dashboard lets you seamlessly toggle between all servers where you have Manage Server or Administrator permissions, with isolated server configurations.",
    },
    {
      q: "Does music playback work 24/7 without lag?",
      a: "Yes. Our audio nodes run on low-latency European and North American cloud clusters supporting YouTube, Spotify, and SoundCloud with bass boost, nightcore, and 8D equalizer filters.",
    },
    {
      q: "How do I get help if I run into an issue?",
      a: "You can join our 24/7 Discord support community, read our comprehensive documentation, or open a support ticket directly from the dashboard.",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
