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
  developer: "nova_lead_",
  teamName: "Rezo Development",
  links: {
    invite:
      process.env.NEXT_PUBLIC_DISCORD_INVITE_URL ??
      "https://discord.com/oauth2/authorize?client_id=1553823703903641771",
    dashboard:
      process.env.NEXT_PUBLIC_DASHBOARD_URL ?? "#dashboard",
    support:
      process.env.NEXT_PUBLIC_SUPPORT_SERVER_URL ??
      "https://discord.gg/W7FJjwbPSS",
    docs: process.env.NEXT_PUBLIC_DOCUMENTATION_URL ?? "#documentation",
    github:
      process.env.NEXT_PUBLIC_GITHUB_URL ??
      "https://github.com/nova-lead",
    status: process.env.NEXT_PUBLIC_STATUS_URL ?? "#status",
    changelog: process.env.NEXT_PUBLIC_CHANGELOG_URL ?? "#changelog",
    discord: process.env.NEXT_PUBLIC_COMMUNITY_DISCORD_URL ?? "https://discord.gg/W7FJjwbPSS",
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
      title: "Protégez Votre Serveur",
      description:
        "Rezo surveille continuellement votre communauté et bloque les actions dangereuses avant qu'elles ne deviennent des incidents.",
      bullets: [
        "Protection anti-raid avec détection instantanée des menaces",
        "Anti-ban, anti-kick, anti-suppression de canaux",
        "Sanctions configurables et logs d'incidents",
      ],
      cta: "Configurer la Sécurité",
      panelTitle: "Centre de Contrôle Anti-Nuke",
      metrics: [
        "Protection Anti-Raid: Active",
        "Actions Suspectes Bloquées: 18",
        "Temps de Réponse: < 300ms",
      ],
    },
    {
      title: "Automatisez la Croissance de Votre Communauté",
      description:
        "Fidélisez vos membres avec des flux de bienvenue, des réponses intelligentes et des incitations de niveau qui maintiennent l'engagement.",
      bullets: [
        "Parcours d'intégration basés sur les rôles",
        "Automatisations déclenchées par événements",
        "Boucles de récompenses avec synchronisation XP et économie",
      ],
      cta: "Créer des Automatisations",
      panelTitle: "Constructeur d'Automatisations",
      metrics: [
        "Automatisations Actives: 24",
        "Complétion Bienvenue: 87%",
        "Précision Réponses: 99.2%",
      ],
    },
    {
      title: "Gérez Tout depuis un Seul Tableau de Bord",
      description:
        "Gérez la modération, la musique, les tickets et les analyses sans basculer entre différents panneaux de bot déconnectés.",
      bullets: [
        "Système de commandes et permissions unifié",
        "Logs en temps réel et flux d'activité",
        "Synchronisation des paramètres serveur en un clic",
      ],
      cta: "Ouvrir le Dashboard",
      panelTitle: "Opérations Serveur Unifiées",
      metrics: ["Modules Activés: 17", "Commandes Aujourd'hui: 129,402", "Disponibilité Système: 99.9%"],
    },
  ],
  testimonials: [
    {
      quote: "Ce bot a remplacé presque tous les autres bots de notre serveur avec une latence nulle.",
      author: "Alex K.",
      role: "Gestionnaire de Communauté Gaming",
    },
    {
      quote: "La configuration a pris moins de deux minutes et le système anti-nuke nous donne une tranquillité d'esprit totale.",
      author: "Sarah M.",
      role: "Admin Serveur Esport",
    },
    {
      quote: "L'interface rouge et le tableau de bord sont les plus intuitifs que nous ayons jamais utilisés.",
      author: "Thomas R.",
      role: "Propriétaire de Serveur Communautaire",
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
      q: "Le bot est-il gratuit à ajouter sur mon serveur Discord ?",
      a: "Oui ! Vous pouvez inviter le bot gratuitement avec un accès complet aux commandes de modération de base, musique, niveaux, automod et utilitaires sans carte de crédit.",
    },
    {
      q: "Comment le système Anti-Nuke empêche-t-il la destruction du serveur ?",
      a: "Notre module Anti-Nuke surveille continuellement les actions administratives. Si un compte compromis ou un admin malveillant supprime des canaux, expulse des membres ou modifie des rôles au-dessus des seuils configurés, le bot révoque immédiatement les permissions, restaure les éléments supprimés via la restauration d'audit, et notifie les propriétaires.",
    },
    {
      q: "Combien de temps prend la configuration ?",
      a: "La configuration prend moins de 2 minutes. Une fois invité, exécutez `/setup` dans n'importe quel canal ou visitez notre tableau de bord web pour activer la sécurité, les auto-rôles et la journalisation en un clic.",
    },
    {
      q: "Puis-je gérer plusieurs serveurs Discord depuis un seul tableau de bord ?",
      a: "Oui. Notre tableau de bord web vous permet de basculer facilement entre tous les serveurs où vous avez les permissions Gérer le serveur ou Administrateur, avec des configurations de serveur isolées.",
    },
    {
      q: "La lecture de musique fonctionne-t-elle 24h/24 et 7j/7 sans lag ?",
      a: "Oui. Nos nœuds audio fonctionnent sur des clusters cloud européens et nord-américains à faible latence prenant en charge YouTube, Spotify et SoundCloud avec bass boost, nightcore et filtres d'égaliseur 8D.",
    },
    {
      q: "Comment puis-je obtenir de l'aide si je rencontre un problème ?",
      a: "Vous pouvez rejoindre notre communauté Discord de support 24h/24 et 7j/7, lire notre documentation complète, ou ouvrir un ticket de support directement depuis le tableau de bord.",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
