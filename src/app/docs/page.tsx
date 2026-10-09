"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Activity,
  ArrowLeft,
  Award,
  BookOpen,
  Code,
  Headphones,
  Home,
  MessageSquare,
  Shield,
  Terminal,
  Ticket,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function DocsPage() {
  const [activeCategory, setActiveCategory] = useState(0);

  const iconMap: Record<string, any> = {
    Rocket: Award,
    Shield: Shield,
    Headphones: Headphones,
    Coins: Zap,
    Ticket: Ticket,
    Code: Code,
  };

  return (
    <main className="relative min-h-screen bg-[#0a0202] text-slate-100">
      {/* Background Effects */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(220,38,38,0.22),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(239,68,68,0.15),transparent_45%),radial-gradient(circle_at_50%_70%,rgba(185,28,28,0.18),transparent_50%),linear-gradient(180deg,#0a0202_0%,#0d0404_50%,#080101_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.06)_1px,transparent_1px)] bg-[size:44px_44px] opacity-40" />
        <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-red-600/15 blur-[130px] animate-pulse-slow" />
        <div className="absolute -right-32 top-1/3 h-[450px] w-[450px] rounded-full bg-red-500/10 blur-[140px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-red-500/20 bg-[#0a0202]/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
              <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-red-500/20">
                <BookOpen className="w-5 h-5 text-red-400" />
                <span className="font-orbitron font-bold text-white">Documentation</span>
              </div>
            </div>

            <Link
              href={siteConfig.links.support}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-orbitron text-xs font-bold uppercase tracking-wider transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">Get Support</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16 border-b border-red-500/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-500/30 mb-6">
              <Terminal className="w-4 h-4 text-red-400" />
              <span className="text-red-300 font-orbitron font-medium text-xs tracking-wide uppercase">
                Complete Documentation
              </span>
            </div>

            <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
              {siteConfig.botName}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-300 to-red-500">
                Documentation
              </span>
            </h1>

            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
              Learn how to use all of {siteConfig.botName}'s features with our comprehensive step-by-step guides. From setup to advanced configurations.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#quick-start"
                onClick={() => setActiveCategory(0)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-orbitron text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-red-600/30"
              >
                <Award className="w-4 h-4" />
                Quick Start
              </Link>
              <Link
                href={siteConfig.links.support}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-red-500/30 bg-white/5 hover:bg-red-600/10 text-white font-orbitron text-sm font-bold uppercase tracking-wider transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                Discord Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
            {/* Sidebar Navigation */}
            <aside className="lg:sticky lg:top-24 self-start">
              <div className="rounded-2xl border border-red-500/20 bg-[#180808]/80 backdrop-blur-sm p-4">
                <h3 className="font-orbitron font-bold text-sm text-slate-300 mb-4 px-3 uppercase tracking-wider">
                  Categories
                </h3>
                <nav>
                  <ul className="space-y-2">
                    {siteConfig.documentation.map((doc, idx) => {
                      const Icon = iconMap[doc.icon] || Terminal;
                      const isActive = activeCategory === idx;
                      return (
                        <li key={idx}>
                          <button
                            type="button"
                            onClick={() => setActiveCategory(idx)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-inter text-sm font-medium transition-all ${
                              isActive
                                ? "bg-red-600 text-white shadow-lg shadow-red-600/30 border border-red-400/40"
                                : "text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent"
                            }`}
                          >
                            <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-red-400"}`} />
                            <span>{doc.category}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Quick Links */}
                <div className="mt-6 pt-6 border-t border-red-500/20">
                  <h4 className="font-orbitron font-bold text-xs text-slate-400 mb-3 px-3 uppercase tracking-wider">
                    Quick Links
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link
                        href="/"
                        className="flex items-center gap-2 px-3 py-2 text-slate-400 hover:text-white transition-colors"
                      >
                        <Home className="w-4 h-4" />
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={siteConfig.links.dashboard}
                        className="flex items-center gap-2 px-3 py-2 text-slate-400 hover:text-white transition-colors"
                      >
                        <Activity className="w-4 h-4" />
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={siteConfig.links.support}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 text-slate-400 hover:text-white transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        Support Server
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>

            {/* Guides Content */}
            <div className="space-y-8" id="quick-start">
              <div className="mb-8">
                <h2 className="font-orbitron text-3xl font-bold text-white mb-3">
                  {siteConfig.documentation[activeCategory].category}
                </h2>
                <p className="text-slate-400">
                  {siteConfig.documentation[activeCategory].guides.length} guide
                  {siteConfig.documentation[activeCategory].guides.length > 1 ? "s" : ""} available
                </p>
              </div>

              {siteConfig.documentation[activeCategory].guides.map((guide, idx) => (
                <article
                  key={idx}
                  className="rounded-2xl border border-red-500/20 bg-[#180808]/80 backdrop-blur-sm p-6 md:p-8 hover:border-red-400/40 transition-all group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <h3 className="font-orbitron font-bold text-2xl text-white mb-3 group-hover:text-red-300 transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed">{guide.description}</p>
                    </div>
                    <div className="shrink-0 px-3 py-1.5 rounded-lg bg-red-950/50 border border-red-500/30 text-red-300 text-sm font-orbitron font-bold h-fit">
                      {guide.duration}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {guide.steps.map((step, stepIdx) => (
                      <div key={stepIdx} className="flex items-start gap-4 group/step">
                        <div className="shrink-0 w-8 h-8 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 font-orbitron font-bold text-sm mt-0.5 group-hover/step:bg-red-600 group-hover/step:text-white transition-all">
                          {stepIdx + 1}
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-slate-300 leading-relaxed">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 border-t border-red-500/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-4">
              Need Additional Help?
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Join our support community or check out the API documentation for advanced integrations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={siteConfig.links.support}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-orbitron text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-red-600/30"
              >
                <MessageSquare className="w-4 h-4" />
                Join Support Server
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-red-500/30 bg-white/5 hover:bg-red-600/10 text-white font-orbitron text-sm font-bold uppercase tracking-wider transition-all"
              >
                <Home className="w-4 h-4" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-red-500/10 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>© 2024 {siteConfig.botName}. Built by {siteConfig.developer}</p>
            <div className="flex items-center gap-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link href={siteConfig.links.support} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Support
              </Link>
              <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
