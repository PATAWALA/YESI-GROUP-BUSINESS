import Image from "next/image";
import { ArrowRight, MessageCircle, Star, ShieldCheck } from "lucide-react";
import {
  heroContent,
  trustBadges,
  heroMarquee,
  whatsappLink,
} from "@/data/siteData";

export default function Hero() {
  return (
    <section id="accueil" className="relative isolate overflow-hidden bg-slate-900">
      {/* ---------- IMAGE DE FOND ---------- */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroContent.image}
          alt={heroContent.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/92 to-slate-900/60" />
        <div className="absolute inset-0 bg-grid opacity-[0.35]" />
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-amber-600/20 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-700/20 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-36 lg:pb-28 lg:pt-44">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* ================= COLONNE GAUCHE ================= */}
          <div>
            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 backdrop-blur">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-amber-300">
                {heroContent.eyebrow}
              </span>
            </div>

            {/* Titre */}
            <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {heroContent.titleLine1}
              <span className="mt-2 block text-gradient-amber">
                {heroContent.titleLine2}
              </span>
            </h1>

            {/* Sous-titre */}
            <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {heroContent.subtitle}
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#sourcing"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-700 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-amber-700/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-amber-600/40"
              >
                {heroContent.ctaPrimary}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20">
                  <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
                </span>
                {heroContent.ctaSecondary}
              </a>
            </div>

            {/* Bandeau villes */}
            <div className="mt-12 flex items-center gap-4 overflow-hidden border-t border-white/10 pt-6">
              <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Nos bases
              </span>
              <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
                <div className="flex w-max animate-marquee gap-8">
                  {[...heroMarquee, ...heroMarquee].map((city, i) => (
                    <span
                      key={`${city}-${i}`}
                      className="whitespace-nowrap text-xs font-semibold uppercase tracking-widest text-slate-400"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ================= COLONNE DROITE ================= */}
          <div className="relative">
            {/* Carte image */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
              <Image
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
                alt="Inspection de marchandises dans un entrepôt en Chine"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />

              {/* Badge bas de carte */}
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-slate-900/70 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15">
                    <ShieldCheck className="h-5 w-5 text-emerald-400" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">
                      Marchandise inspectée avant paiement
                    </p>
                    <p className="text-xs text-slate-400">
                      Rapport photo & vidéo systématique
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Badge flottant — haut */}
            <div className="animate-float absolute -left-4 top-10 hidden rounded-2xl border border-white/15 bg-white/95 p-4 shadow-2xl backdrop-blur sm:block">
              <p className="text-2xl font-black tracking-tight text-slate-900">
                <span className="text-amber-600">150+</span>
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Usines vérifiées
              </p>
            </div>

            {/* Badge flottant — bas */}
            <div className="animate-float-delay absolute -right-4 bottom-24 hidden rounded-2xl border border-white/15 bg-slate-900/90 p-4 shadow-2xl backdrop-blur sm:block">
              <p className="text-2xl font-black tracking-tight text-white">
                &lt; 24h
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                Réponse garantie
              </p>
            </div>
          </div>
        </div>

        {/* ================= BADGES DE CONFIANCE ================= */}
        <div className="mt-20 grid gap-4 sm:grid-cols-3">
          {trustBadges.map(({ icon: Icon, title, subtitle }) => (
            <div
              key={title}
              className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-all duration-300 hover:border-amber-500/40 hover:bg-white/[0.07]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-700/10 ring-1 ring-amber-500/30 transition-transform group-hover:scale-105">
                <Icon className="h-5 w-5 text-amber-400" />
              </span>
              <div>
                <p className="text-sm font-bold text-white">{title}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-slate-400">
                  {subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}