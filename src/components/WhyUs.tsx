"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { stats, reasons, whatsappLink, siteConfig } from "@/data/siteData";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function WhyUs() {
  return (
    <section id="pourquoi-nous" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* ---------- CHIFFRES CLÉS ---------- */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label, detail }, i) => (
            <motion.div
              key={label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-400 hover:-translate-y-1 hover:border-amber-300 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 shadow-lg shadow-slate-900/15">
                <Icon className="h-5 w-5 text-amber-400" />
              </span>
              <p className="mt-5 text-3xl font-black tracking-tight text-slate-900">
                {value}
              </p>
              <p className="mt-1 text-sm font-bold text-slate-800">{label}</p>
              <p className="mt-0.5 text-xs text-slate-500">{detail}</p>
              <span className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-amber-500/5 transition-transform duration-500 group-hover:scale-150" />
            </motion.div>
          ))}
        </div>

        {/* ---------- BLOC PRINCIPAL ---------- */}
        <div className="mt-20 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Images */}
          <div className="relative">
            <div className="relative aspect-[5/6] w-full overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/15">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
                alt="Négociation avec une usine en Chine"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-10 -right-4 hidden w-56 overflow-hidden rounded-3xl border-4 border-white shadow-2xl sm:block">
              <div className="relative aspect-square w-full">
                <Image
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80"
                  alt="Conteneurs prêts à l'export"
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute -left-4 top-8 hidden rounded-2xl border border-slate-200 bg-white/95 px-5 py-4 shadow-xl backdrop-blur sm:block">
              <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600">
                Depuis la Chine
              </p>
              <p className="mt-1 text-sm font-black text-slate-900">
                Guangzhou • Yiwu • Shenzhen
              </p>
            </div>
          </div>

          {/* Texte */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-amber-700">
              Pourquoi nous
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Vous n’importez plus seul.
              <span className="block text-slate-500">
                Vous avez une équipe sur le terrain.
              </span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-600">
              La différence entre une bonne affaire et une arnaque se joue sur
              trois choses : <strong className="text-slate-900">qui vous connaissez en Chine</strong>,{" "}
              <strong className="text-slate-900">qui vérifie la marchandise</strong> et{" "}
              <strong className="text-slate-900">qui contrôle le paiement</strong>.
              YESI GROUP BUSINESS couvre les trois.
            </p>

            <ul className="mt-9 grid gap-5">
              {reasons.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-900 shadow-lg shadow-slate-900/15">
                    <Icon className="h-5 w-5 text-amber-400" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink(
                "Bonjour YESI GROUP BUSINESS, je souhaite être accompagné(e) pour mon projet d’importation depuis la Chine."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-slate-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Démarrer mon projet
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <p className="mt-4 text-xs text-slate-500">
              Réponse sous 24h • {siteConfig.whatsappDisplay}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}