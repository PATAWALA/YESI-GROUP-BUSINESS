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
    <section
      id="accueil"
      className="relative isolate w-full overflow-hidden bg-slate-900"
    >
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
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-amber-600/20 blur-[120px] sm:h-96 sm:w-96" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-700/20 blur-[130px] sm:h-96 sm:w-96" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-44">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* ================= COLONNE GAUCHE ================= */}
          <div className="min-w-0">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 backdrop-blur sm:mb-7 sm:px-4">
              <Star className="h-3.5 w-3.5 shrink-0 fill-amber-400 text-amber-400" />
              <span className="truncate text-[10px] font-bold uppercase tracking-[0.14em] text-amber-300 sm:text-[11px] sm:tracking-[0.16em]">
                {heroContent.eyebrow}
              </span>
            </div>

            {/* Titre */}
            <h1 className="text-[1.75rem] font-black leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {heroContent.titleLine1}
              <span className="mt-2 block text-gradient-amber">
                {heroContent.titleLine2}
              </span>
            </h1>

            {/* Sous-titre */}
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-300 sm:mt-7 sm:text-base lg:text-lg">
              {heroContent.subtitle}
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#sourcing"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-700 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-amber-700/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-amber-600/40 sm:w-auto sm:px-7 sm:py-4"
              >
                {heroContent.ctaPrimary}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:border-white/40 hover:bg-white/10 sm:w-auto sm:px-7 sm:py-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                  <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
                </span>
                <span className="truncate">{heroContent.ctaSecondary}</span>
              </a>
            </div>

            {/* Bandeau villes */}
            <div className="mt-10 flex items-center gap-3 overflow-hidden border-t border-white/10 pt-6 sm:mt-12 sm:gap-4">
              <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Nos bases
              </span>
              <div className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
                <div className="flex w-max animate-marquee gap-6 sm:gap-8">
                  {[...heroMarquee, ...heroMarquee].map((city, i) => (
                    <span
                      key={`${city}-${i}`}
                      className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-widest text-slate-400 sm:text-xs"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ================= COLONNE DROITE ================= */}
          <div className="relative min-w-0">
            {/* Carte image */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50 sm:max-w-md">
              <Image
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
                alt="Inspection de marchandises dans un entrepôt en Chine"
                fill
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 420px, 480px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />

              {/* Badge bas de carte */}
              <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/15 bg-slate-900/70 p-3.5 backdrop-blur-xl sm:inset-x-4 sm:bottom-4 sm:p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 sm:h-10 sm:w-10">
                    <ShieldCheck className="h-4 w-4 text-emerald-400 sm:h-5 sm:w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold leading-tight text-white sm:text-sm">
                      Marchandise inspectée avant paiement
                    </p>
                    <p className="mt-0.5 truncate text-[11px] text-slate-400 sm:text-xs">
                      Rapport photo & vidéo systématique
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Badge flottant — haut (caché sous sm, repositionné) */}
            <div className="animate-float absolute left-0 top-6 hidden rounded-2xl border border-white/15 bg-white/95 p-3.5 shadow-2xl backdrop-blur sm:block md:left-2 lg:-left-4 lg:p-4">
              <p className="text-xl font-black tracking-tight text-slate-900 lg:text-2xl">
                <span className="text-amber-600">150+</span>
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 lg:text-[11px]">
                Usines vérifiées
              </p>
            </div>

            {/* Badge flottant — bas (caché sous sm, repositionné) */}
            <div className="animate-float-delay absolute bottom-16 right-0 hidden rounded-2xl border border-white/15 bg-slate-900/90 p-3.5 shadow-2xl backdrop-blur sm:block md:right-2 lg:-right-4 lg:bottom-24 lg:p-4">
              <p className="text-xl font-black tracking-tight text-white lg:text-2xl">
                &lt; 24h
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-amber-400 lg:text-[11px]">
                Réponse garantie
              </p>
            </div>
          </div>
        </div>

        {/* ================= BADGES DE CONFIANCE ================= */}
        <div className="mt-14 grid gap-3 sm:mt-20 sm:grid-cols-3 sm:gap-4">
          {trustBadges.map(({ icon: Icon, title, subtitle }) => (
            <div
              key={title}
              className="group flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur transition-all duration-300 hover:border-amber-500/40 hover:bg-white/[0.07] sm:gap-4 sm:p-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-700/10 ring-1 ring-amber-500/30 transition-transform group-hover:scale-105 sm:h-11 sm:w-11">
                <Icon className="h-4 w-4 text-amber-400 sm:h-5 sm:w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-[13px] font-bold text-white sm:text-sm">
                  {title}
                </p>
                <p className="mt-0.5 text-[11px] leading-relaxed text-slate-400 sm:text-xs">
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