"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Globe2 } from "lucide-react";
import { navLinks, siteConfig, whatsappLink } from "@/data/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(15,23,42,0.25)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* ---------- LOGO ---------- */}
        <a href="#accueil" className="group flex items-center gap-3">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 shadow-lg shadow-amber-600/25 transition-transform duration-300 group-hover:scale-105">
            <span className="text-lg font-black tracking-tight text-white">
              Y
            </span>
            <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white bg-slate-900" />
          </span>
          <span className="leading-tight">
            <span
              className={`block text-[15px] font-black tracking-tight transition-colors ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              YESI GROUP
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-600">
              Business
            </span>
          </span>
        </a>

        {/* ---------- LIENS DESKTOP ---------- */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                  scrolled
                    ? "text-slate-600 hover:text-slate-900"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-amber-600 transition-transform duration-300 hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* ---------- CTA DESKTOP ---------- */}
        <div className="hidden items-center gap-3 lg:flex">
          <span
            className={`hidden items-center gap-1.5 text-xs font-semibold xl:flex ${
              scrolled ? "text-slate-500" : "text-slate-300"
            }`}
          >
            <Globe2 className="h-3.5 w-3.5 text-amber-600" />
            Chine • Afrique • Europe
          </span>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-700 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-amber-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-600/40"
          >
            <MessageCircle className="h-4 w-4 transition-transform group-hover:rotate-12" />
            WhatsApp
          </a>
        </div>

        {/* ---------- BURGER MOBILE ---------- */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border transition-colors lg:hidden ${
            scrolled
              ? "border-slate-200 bg-white text-slate-900"
              : "border-white/20 bg-white/10 text-white backdrop-blur"
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* ---------- MENU MOBILE ---------- */}
      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-[max-height,opacity] duration-400 lg:hidden ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-700 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-amber-600/30"
            >
              <MessageCircle className="h-4 w-4" />
              Discuter sur WhatsApp — {siteConfig.whatsappDisplay}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}