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
    docs: process.env.NEXT_PUBLIC_DOCUMENTATION_URL ?? "/docs",
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
    { name: "Documentation", href: "/docs" },
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
        "Rezo continuously monitors your community and blocks dangerous actions before they become incidents.",
      bullets: [
        "Raid protection with instant threat detection",
        "Anti-ban, anti-kick, anti-channel deletion",
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
      author: "Alex K.",
      role: "Gaming Community Manager",
    },
    {
      quote: "Setup took less than two minutes and the anti-nuke system gives us complete peace of mind.",
      author: "Sarah M.",
      role: "Esports Server Admin",
    },
    {
      quote: "The red interface and dashboard are the most intuitive we've ever used.",
      author: "Thomas R.",
      role: "Community Server Owner",
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
    { name: "/help", description: "Display all available Rezo commands with their descriptions.", category: "Utility", usage: "/help [command]", permission: "Use Application Commands" },
    { name: "/serverinfo", description: "Display detailed server information.", category: "Utility", usage: "/serverinfo", permission: "Use Application Commands" },
    { name: "/userinfo", description: "Display information about a server member.", category: "Utility", usage: "/userinfo [@user]", permission: "Use Application Commands" },
    { name: "/ban", description: "Ban a member from the server with audit log reason.", category: "Moderation", usage: "/ban @user [reason] [delete_days]", permission: "Ban Members" },
    { name: "/kick", description: "Kick a member from the server.", category: "Moderation", usage: "/kick @user [reason]", permission: "Kick Members" },
    { name: "/warn", description: "Issue a tracked warning to a member with auto-punishment system.", category: "Moderation", usage: "/warn @user reason", permission: "Moderate Members" },
    { name: "/timeout", description: "Temporarily exclude a member from text and voice channels.", category: "Moderation", usage: "/timeout @user duration [reason]", permission: "Moderate Members" },
    { name: "/clear", description: "Delete a specific number of messages in a channel.", category: "Moderation", usage: "/clear <number> [@user]", permission: "Manage Messages" },
    { name: "/lock", description: "Lock a channel to prevent members from writing.", category: "Moderation", usage: "/lock [#channel] [reason]", permission: "Manage Channels" },
    { name: "/unlock", description: "Unlock a previously locked channel.", category: "Moderation", usage: "/unlock [#channel]", permission: "Manage Channels" },
    { name: "/antinuke", description: "Configure anti-nuke thresholds, whitelists, and lockdown actions.", category: "Security", usage: "/antinuke setup", permission: "Administrator" },
    { name: "/antiraid", description: "Enable anti-raid protection with automatic detection.", category: "Security", usage: "/antiraid enable", permission: "Administrator" },
    { name: "/backup", description: "Create a complete server backup (roles, channels, permissions).", category: "Security", usage: "/backup create", permission: "Administrator" },
    { name: "/restore", description: "Restore a previous server backup.", category: "Security", usage: "/restore <backup_id>", permission: "Administrator" },
    { name: "/play", description: "Play music from YouTube, Spotify, or SoundCloud.", category: "Music", usage: "/play <song or url>", permission: "Connect & Speak" },
    { name: "/skip", description: "Skip to the next song in the queue.", category: "Music", usage: "/skip", permission: "Connect & Speak" },
    { name: "/queue", description: "Display the music queue with interactive buttons.", category: "Music", usage: "/queue", permission: "Use Application Commands" },
    { name: "/volume", description: "Adjust music playback volume (0-100).", category: "Music", usage: "/volume <0-100>", permission: "Connect & Speak" },
    { name: "/loop", description: "Toggle repeat for current song or queue.", category: "Music", usage: "/loop [song|queue]", permission: "Connect & Speak" },
    { name: "/welcome", description: "Configure welcome messages with custom cards.", category: "Automation", usage: "/welcome setup", permission: "Manage Server" },
    { name: "/autorole", description: "Set automatic roles for new members.", category: "Automation", usage: "/autorole add @role", permission: "Manage Roles" },
    { name: "/giveaway", description: "Create an interactive giveaway with timer and random selection.", category: "Automation", usage: "/giveaway create", permission: "Manage Server" },
    { name: "/level", description: "Display your server rank card and XP.", category: "Leveling", usage: "/level [@user]", permission: "Use Application Commands" },
    { name: "/leaderboard", description: "Display the server XP leaderboard.", category: "Leveling", usage: "/leaderboard", permission: "Use Application Commands" },
    { name: "/setlevel", description: "Set a member's XP level.", category: "Leveling", usage: "/setlevel @user <level>", permission: "Manage Server" },
    { name: "/balance", description: "Display your server wallet and bank balance.", category: "Economy", usage: "/balance [@user]", permission: "Use Application Commands" },
    { name: "/daily", description: "Claim your daily reward.", category: "Economy", usage: "/daily", permission: "Use Application Commands" },
    { name: "/pay", description: "Send money to another member.", category: "Economy", usage: "/pay @user <amount>", permission: "Use Application Commands" },
    { name: "/shop", description: "Display the server shop with purchasable items.", category: "Economy", usage: "/shop", permission: "Use Application Commands" },
    { name: "/ticket", description: "Create a customizable support ticket panel.", category: "Tickets", usage: "/ticket panel", permission: "Manage Channels" },
    { name: "/close", description: "Close a ticket with optional HTML transcript.", category: "Tickets", usage: "/close [reason]", permission: "Manage Channels" },
    { name: "/poll", description: "Create a poll with customizable reactions.", category: "Utility", usage: "/poll <question>", permission: "Use Application Commands" },
    { name: "/embed", description: "Create a custom embed message.", category: "Utility", usage: "/embed create", permission: "Manage Messages" },
    { name: "/avatar", description: "Display a user's avatar in high resolution.", category: "Utility", usage: "/avatar [@user]", permission: "Use Application Commands" },
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
      category: "Quick Start",
      icon: "Rocket",
      guides: [
        {
          title: "Installation & Setup",
          description: "Invite Rezo to your server and configure it in less than 2 minutes.",
          steps: [
            "Click 'Add to Discord' button and select your server",
            "Authorize the necessary permissions for Rezo",
            "Use /setup in any channel for initial configuration",
            "Customize modules according to your needs"
          ],
          duration: "2 min"
        },
        {
          title: "Security Configuration",
          description: "Enable anti-nuke and anti-raid protection to secure your server.",
          steps: [
            "Use /antinuke setup to configure thresholds",
            "Add trusted members with /whitelist add @user",
            "Enable /antiraid for automatic protection",
            "Configure security alerts in a dedicated channel"
          ],
          duration: "5 min"
        },
        {
          title: "Welcome System",
          description: "Create personalized welcome messages with graphic cards.",
          steps: [
            "Use /welcome setup in the desired channel",
            "Customize the message with variables {user}, {server}",
            "Configure a welcome card with /welcome card",
            "Test with /welcome test"
          ],
          duration: "3 min"
        }
      ]
    },
    {
      category: "Moderation",
      icon: "Shield",
      guides: [
        {
          title: "Essential Moderation Commands",
          description: "Master moderation tools to manage your community.",
          steps: [
            "/ban @user [reason] - Ban a member",
            "/kick @user [reason] - Kick a member",
            "/warn @user reason - Warn a member",
            "/timeout @user duration - Temporarily exclude",
            "/clear number [@user] - Delete messages"
          ],
          duration: "5 min"
        },
        {
          title: "AutoMod & Filters",
          description: "Configure automatic filters and spam detection.",
          steps: [
            "Use /automod setup to enable filters",
            "Configure anti-spam, anti-link, anti-mention filters",
            "Set automatic punishments by levels",
            "Add custom forbidden words"
          ],
          duration: "10 min"
        }
      ]
    },
    {
      category: "Music",
      icon: "Headphones",
      guides: [
        {
          title: "Music Playback",
          description: "Use Rezo as a high-quality music player.",
          steps: [
            "/play <song> - Play a song or URL",
            "/queue - View the queue",
            "/skip - Skip to next",
            "/volume 50 - Adjust volume",
            "/loop queue - Repeat the queue"
          ],
          duration: "2 min"
        },
        {
          title: "Advanced Features",
          description: "Audio filters and quality control.",
          steps: [
            "Use /filter bassboost to enhance bass",
            "Enable 8D mode with /filter 8d",
            "Nightcore mode with /filter nightcore",
            "Configure audio quality in settings"
          ],
          duration: "3 min"
        }
      ]
    },
    {
      category: "Economy & Levels",
      icon: "Coins",
      guides: [
        {
          title: "Leveling System",
          description: "Enable XP system and rewards to engage your community.",
          steps: [
            "Enable XP system with /leveling setup",
            "Configure role rewards by levels",
            "Customize rank cards with /rank customize",
            "Check leaderboard with /leaderboard"
          ],
          duration: "8 min"
        },
        {
          title: "Server Economy",
          description: "Create a virtual economy for your server.",
          steps: [
            "Enable economy with /economy setup",
            "Create a shop with /shop create",
            "Add purchasable items",
            "Members earn money with /daily, /work"
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
          title: "Ticket System",
          description: "Set up a professional support system.",
          steps: [
            "Create a ticket panel with /ticket panel",
            "Customize ticket categories",
            "Define authorized staff roles",
            "Tickets close with /close and generate transcripts"
          ],
          duration: "7 min"
        }
      ]
    },
    {
      category: "API & Integrations",
      icon: "Code",
      guides: [
        {
          title: "Webhooks & Logs",
          description: "Integrate Rezo with external services.",
          steps: [
            "Configure audit logs with /logging setup",
            "Create custom webhooks for events",
            "Integrate with your website via API",
            "View complete API documentation"
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
