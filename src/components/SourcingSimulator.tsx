"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  MessageCircle,
  Package,
  Wallet,
  MapPin,
  User,
  Sparkles,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import {
  productCategories,
  quantityOptions,
  budgetRanges,
  destinationCountries,
  simulatorStepLabels,
  siteConfig,
} from "@/data/siteData";

/* ---------------- TYPES ---------------- */

type FormState = {
  category: string;
  product: string;
  quantity: string;
  budget: string;
  destination: string;
  name: string;
  company: string;
  phone: string;
};

const initialState: FormState = {
  category: "",
  product: "",
  quantity: "",
  budget: "",
  destination: "",
  name: "",
  company: "",
  phone: "",
};

const STEP_ICONS = [Package, Wallet, MapPin];

/* ---------------- TRANSITIONS ---------------- */

const slide = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 48 : -48 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -48 : 48 }),
};

/* ================================================================== */

export default function SourcingSimulator() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [touched, setTouched] = useState(false);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  /* ---------- VALIDATION PAR ÉTAPE ---------- */
  const stepValid = useMemo(() => {
    if (step === 0) return form.category !== "" && form.product.trim().length >= 3;
    if (step === 1) return form.quantity !== "" && form.budget !== "";
    return (
      form.destination !== "" &&
      form.name.trim().length >= 2 &&
      form.phone.trim().length >= 6
    );
  }, [step, form]);

  /* ---------- MESSAGE WHATSAPP PRÉ-QUALIFIÉ ---------- */
  const whatsappMessage = useMemo(() => {
    return [
      "Bonjour YESI GROUP BUSINESS 👋",
      "Je viens du site et je souhaite lancer une *demande de sourcing*.",
      "",
      `📦 *Catégorie* : ${form.category || "—"}`,
      `📝 *Produit / besoin* : ${form.product || "—"}`,
      `🔢 *Quantité* : ${form.quantity || "—"}`,
      `💰 *Budget* : ${form.budget || "—"}`,
      `🌍 *Pays de destination* : ${form.destination || "—"}`,
      form.company.trim() ? `🏢 *Société* : ${form.company}` : null,
      `👤 *Contact* : ${form.name || "—"}`,
      `📞 *Téléphone / WhatsApp* : ${form.phone || "—"}`,
      "",
      "Merci de me revenir sous 24h avec une estimation de prix et une shortlist de fournisseurs qualifiés. 🙏",
    ]
      .filter(Boolean)
      .join("\n");
  }, [form]);

  const finalLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  /* ---------- NAVIGATION ---------- */
  const next = () => {
    setTouched(true);
    if (!stepValid) return;
    setTouched(false);
    setDir(1);
    setStep((s) => Math.min(s + 1, 2));
  };

  const back = () => {
    setTouched(false);
    setDir(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  const reset = () => {
    setForm(initialState);
    setStep(0);
    setDir(1);
    setTouched(false);
  };

  const progress = ((step + 1) / 3) * 100;

  /* ================================================================ */

  return (
    <section
      id="sourcing"
      className="relative overflow-hidden bg-slate-900 py-24 lg:py-32"
    >
      {/* Décor */}
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-amber-600/15 blur-[130px]" />
      <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-700/15 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ---------- EN-TÊTE ---------- */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-amber-300">
            <Sparkles className="h-3.5 w-3.5" />
            Simulateur de sourcing
          </span>
          <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            3 étapes. 60 secondes.
            <span className="block text-gradient-amber">
              Votre demande part directement en Chine.
            </span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-400">
            Décrivez votre besoin : nous générons automatiquement un brief
            structuré et pré-qualifié, envoyé à notre équipe sur WhatsApp.
          </p>
        </div>

        {/* ---------- BLOC PRINCIPAL ---------- */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* ============ FORMULAIRE ============ */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-9">
            {/* Barre de progression */}
            <div className="mb-8">
              <div className="mb-4 flex items-center justify-between">
                {simulatorStepLabels.map(({ step: s, label }, i) => {
                  const Icon = STEP_ICONS[i];
                  const done = step > i;
                  const active = step === i;
                  return (
                    <div key={s} className="flex flex-1 items-center gap-2.5">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-all duration-300 ${
                          done
                            ? "border-emerald-400/50 bg-emerald-500/20 text-emerald-300"
                            : active
                              ? "border-amber-400 bg-amber-500 text-slate-900 shadow-lg shadow-amber-500/30"
                              : "border-white/15 bg-white/5 text-slate-500"
                        }`}
                      >
                        {done ? <Check className="h-4 w-4 stroke-[3]" /> : <Icon className="h-4 w-4" />}
                      </span>
                      <span
                        className={`hidden text-xs font-bold uppercase tracking-wider transition-colors sm:block ${
                          active ? "text-white" : done ? "text-emerald-300" : "text-slate-500"
                        }`}
                      >
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-600"
                  initial={false}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>

            {/* Étapes */}
            <div className="relative min-h-[330px]">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={step}
                  custom={dir}
                  variants={slide}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* ---------- ÉTAPE 1 ---------- */}
                  {step === 0 && (
                    <div className="space-y-6">
                      <div>
                        <label className="mb-2.5 block text-sm font-bold text-white">
                          Catégorie de produit <span className="text-amber-500">*</span>
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {productCategories.map((cat) => (
                            <button
                              key={cat}
                              type="button"
                              onClick={() => set("category", cat)}
                              className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                                form.category === cat
                                  ? "border-amber-500 bg-amber-500 text-slate-900 shadow-lg shadow-amber-500/25"
                                  : "border-white/15 bg-white/5 text-slate-300 hover:border-amber-500/50 hover:text-white"
                              }`}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="product"
                          className="mb-2.5 block text-sm font-bold text-white"
                        >
                          Décrivez votre produit ou besoin{" "}
                          <span className="text-amber-500">*</span>
                        </label>
                        <textarea
                          id="product"
                          rows={4}
                          value={form.product}
                          onChange={(e) => set("product", e.target.value)}
                          placeholder="Ex : 500 sacs à dos 30L en polyester 600D, logo brodé, fermeture YKK, couleur noire…"
                          className="w-full resize-none rounded-2xl border border-white/15 bg-slate-950/50 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                        />
                        <p className="mt-2 text-xs text-slate-500">
                          Plus vous êtes précis, plus notre shortlist sera pertinente.
                        </p>
                      </div>

                      {touched && !stepValid && (
                        <p className="text-xs font-semibold text-red-400">
                          Sélectionnez une catégorie et décrivez votre produit (3 caractères min.).
                        </p>
                      )}
                    </div>
                  )}

                  {/* ---------- ÉTAPE 2 ---------- */}
                  {step === 1 && (
                    <div className="space-y-7">
                      <div>
                        <label className="mb-3 block text-sm font-bold text-white">
                          Quantité souhaitée <span className="text-amber-500">*</span>
                        </label>
                        <div className="grid gap-2.5 sm:grid-cols-2">
                          {quantityOptions.map((q) => (
                            <button
                              key={q}
                              type="button"
                              onClick={() => set("quantity", q)}
                              className={`rounded-xl border px-4 py-3 text-left text-xs font-semibold transition-all duration-200 ${
                                form.quantity === q
                                  ? "border-amber-500 bg-amber-500/15 text-white ring-1 ring-amber-500/40"
                                  : "border-white/15 bg-white/5 text-slate-300 hover:border-amber-500/40 hover:text-white"
                              }`}
                            >
                              {q}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="mb-3 block text-sm font-bold text-white">
                          Budget estimé <span className="text-amber-500">*</span>
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {budgetRanges.map((b) => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => set("budget", b)}
                              className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                                form.budget === b
                                  ? "border-amber-500 bg-amber-500 text-slate-900 shadow-lg shadow-amber-500/25"
                                  : "border-white/15 bg-white/5 text-slate-300 hover:border-amber-500/50 hover:text-white"
                              }`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>

                      {touched && !stepValid && (
                        <p className="text-xs font-semibold text-red-400">
                          Merci de sélectionner une quantité et un budget.
                        </p>
                      )}
                    </div>
                  )}

                  {/* ---------- ÉTAPE 3 ---------- */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="destination"
                          className="mb-2.5 block text-sm font-bold text-white"
                        >
                          Pays de destination <span className="text-amber-500">*</span>
                        </label>
                        <select
                          id="destination"
                          value={form.destination}
                          onChange={(e) => set("destination", e.target.value)}
                          className="w-full appearance-none rounded-2xl border border-white/15 bg-slate-950/50 px-4 py-3.5 text-sm text-white outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                        >
                          <option value="">— Sélectionnez votre pays —</option>
                          {destinationCountries.map((c) => (
                            <option key={c} value={c} className="bg-slate-900">
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="mb-2.5 block text-sm font-bold text-white"
                          >
                            Nom complet <span className="text-amber-500">*</span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            value={form.name}
                            onChange={(e) => set("name", e.target.value)}
                            placeholder="Amadou Diallo"
                            className="w-full rounded-2xl border border-white/15 bg-slate-950/50 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="company"
                            className="mb-2.5 block text-sm font-bold text-white"
                          >
                            Société{" "}
                            <span className="text-xs font-medium text-slate-500">
                              (optionnel)
                            </span>
                          </label>
                          <input
                            id="company"
                            type="text"
                            value={form.company}
                            onChange={(e) => set("company", e.target.value)}
                            placeholder="Ma Société SARL"
                            className="w-full rounded-2xl border border-white/15 bg-slate-950/50 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2.5 block text-sm font-bold text-white"
                        >
                          Téléphone / WhatsApp{" "}
                          <span className="text-amber-500">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => set("phone", e.target.value)}
                          placeholder="+221 77 000 00 00"
                          className="w-full rounded-2xl border border-white/15 bg-slate-950/50 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                        />
                      </div>

                      {touched && !stepValid && (
                        <p className="text-xs font-semibold text-red-400">
                          Renseignez votre pays, votre nom et un numéro joignable.
                        </p>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ---------- ACTIONS ---------- */}
            <div className="mt-8 flex items-center justify-between gap-3 border-t border-white/10 pt-6">
              <button
                type="button"
                onClick={back}
                disabled={step === 0}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-bold text-slate-300 transition-colors hover:border-white/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Retour
              </button>

              {step < 2 ? (
                <button
                  type="button"
                  onClick={next}
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-700 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-amber-700/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-600/40"
                >
                  Continuer
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              ) : (
                <a
                  href={finalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (!stepValid) setTouched(true);
                  }}
                  className={`animate-pulse-ring group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-700/30 transition-all duration-300 hover:-translate-y-0.5 ${
                    stepValid ? "" : "pointer-events-none opacity-50"
                  }`}
                >
                  <MessageCircle className="h-4 w-4" />
                  Envoyer sur WhatsApp
                </a>
              )}
            </div>
          </div>

          {/* ============ APERÇU DU MESSAGE ============ */}
          <div className="flex flex-col gap-5">
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15">
                    <MessageCircle className="h-4 w-4 text-emerald-400" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">
                      Aperçu du brief
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Envoyé à YESI GROUP BUSINESS
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={reset}
                  aria-label="Réinitialiser"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-white/25 hover:text-white"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="max-h-[300px] overflow-y-auto rounded-2xl border border-white/5 bg-[#0b141a] p-4">
                <pre className="whitespace-pre-wrap break-words font-sans text-[12.5px] leading-relaxed text-slate-300">
                  {whatsappMessage}
                </pre>
              </div>

              <div className="mt-4 flex items-start gap-2.5 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-3.5">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <p className="text-[11px] leading-relaxed text-slate-400">
                  Ce message part <strong className="text-amber-400">directement</strong> sur
                  le WhatsApp de notre bureau en Chine. Réponse sous 24h ouvrées avec
                  estimation et shortlist fournisseurs.
                </p>
              </div>
            </div>

            {/* Mini-récap */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Package, label: "Produit", value: form.category || "—" },
                { icon: Wallet, label: "Budget", value: form.budget || "—" },
                { icon: MapPin, label: "Pays", value: form.destination || "—" },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 text-center"
                >
                  <Icon className="mx-auto mb-2 h-4 w-4 text-amber-500" />
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    {label}
                  </p>
                  <p className="mt-1 truncate text-[11px] font-semibold text-white">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-xs font-bold text-slate-300 transition-colors hover:border-emerald-500/40 hover:text-white"
            >
              <User className="h-3.5 w-3.5" />
              Ou discuter directement : {siteConfig.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}