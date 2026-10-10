import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

// Icônes de marque → Font Awesome (react-icons)
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

import {
  siteConfig,
  offices,
  footerServices,
  footerLinks,
  whatsappLink,
} from "@/data/siteData";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-slate-950 text-slate-400"
    >
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -top-32 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-amber-600/10 blur-[120px]" />

      {/* ---------- BANDE CTA ---------- */}
      <div className="relative mx-auto max-w-7xl px-6 pt-20">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 to-slate-900/40 p-8 sm:p-12">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl">
                Prêt à importer sans risque depuis la Chine ?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Envoyez-nous votre cahier des charges. Nous revenons vers vous
                sous 24h avec une estimation de prix et une shortlist
                d’usines vérifiées.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-700/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp direct
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-bold text-white transition-colors hover:border-white/35 hover:bg-white/5"
              >
                <Mail className="h-4 w-4" />
                Nous écrire
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- CORPS DU FOOTER ---------- */}
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Marque */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 shadow-lg shadow-amber-700/25">
                <span className="text-lg font-black text-white">Y</span>
              </span>
              <span className="leading-tight">
                <span className="block text-[15px] font-black tracking-tight text-white">
                  YESI GROUP
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-500">
                  Business
                </span>
              </span>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              {siteConfig.baseline}
            </p>

            <div className="mt-6 flex gap-2.5">
              {[
                {
                  href: siteConfig.socials.linkedin,
                  Icon: FaLinkedinIn,
                  label: "LinkedIn",
                },
                {
                  href: siteConfig.socials.facebook,
                  Icon: FaFacebookF,
                  label: "Facebook",
                },
                {
                  href: siteConfig.socials.instagram,
                  Icon: FaInstagram,
                  label: "Instagram",
                },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-500/40 hover:text-amber-500"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-amber-500"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white">
              Nos services
            </h3>
            <ul className="mt-5 space-y-3">
              {footerServices.map((service) => (
                <li key={service} className="text-sm text-slate-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white">
              Contact
            </h3>

            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-amber-500"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-amber-500"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  <span className="break-all">{siteConfig.email}</span>
                </a>
              </li>
            </ul>

            <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
              {offices.map((office) => (
                <div key={office.city} className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  <div>
                    <p className="text-sm font-bold text-white">
                      {office.city}
                      <span className="ml-2 text-[10px] font-semibold uppercase tracking-wider text-amber-600">
                        {office.role}
                      </span>
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                      {office.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- BAS DE PAGE ---------- */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {year} {siteConfig.legal} — Tous droits réservés.
          </p>
          <p className="text-xs text-slate-600">
            Sourcing • Contrôle qualité • Export Chine → Monde
          </p>
        </div>
      </div>
    </footer>
  );
}