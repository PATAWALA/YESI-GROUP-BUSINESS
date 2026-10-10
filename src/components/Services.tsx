"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { services, whatsappLink } from "@/data/siteData";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* ---------- EN-TÊTE ---------- */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-amber-700">
            Nos services
          </span>
          <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Une chaîne complète,
            <span className="block text-slate-500">
              de l’usine chinoise à votre entrepôt
            </span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            Vous n’avez pas besoin de parler chinois, ni de voyager, ni de faire
            confiance à l’aveugle. Nous prenons en charge chaque étape et vous
            rendons des comptes à chaque instant.
          </p>
        </div>

        {/* ---------- GRID SERVICES ---------- */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-amber-300 hover:shadow-2xl hover:shadow-slate-900/10"
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

                  {/* Icône */}
                  <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-slate-900/70 backdrop-blur-md">
                    <Icon className="h-5 w-5 text-amber-400" />
                  </span>

                  {/* Titre sur l’image */}
                  <h3 className="absolute inset-x-5 bottom-5 text-lg font-bold leading-snug text-white">
                    {service.title}
                  </h3>
                </div>

                {/* Contenu */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  <ul className="mt-5 grid gap-2.5">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber-100">
                          <Check className="h-2.5 w-2.5 stroke-[3.5] text-amber-700" />
                        </span>
                        <span className="text-[13px] font-medium leading-snug text-slate-700">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappLink(
                      `Bonjour YESI GROUP BUSINESS, je suis intéressé(e) par votre service : ${service.title}. Pouvez-vous m’en dire plus ?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 self-start border-b-2 border-transparent pb-0.5 text-[13px] font-bold text-slate-900 transition-colors hover:border-amber-500 hover:text-amber-700"
                  >
                    Demander un devis
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}