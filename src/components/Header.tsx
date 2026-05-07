"use client";

import { useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { Locale } from "@/i18n/translations";
import clsx from "clsx";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#chars",     label: t("nav_chars") },
    { href: "#latex",     label: t("nav_latex") },
    { href: "#shortcuts", label: t("nav_shortcuts") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#121212]/95 backdrop-blur-md border-b border-[#2c2c2c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0" onClick={() => setMenuOpen(false)}>
          <span className="text-2xl leading-none">⌨</span>
          <span className="font-bold text-white text-base tracking-tight">
            Special<span className="text-[#BB86FC]">Keys</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-sm text-[#9e9e9e] hover:text-white hover:bg-[#1e1e1e] rounded-lg transition-colors"
            >
              {l.label}
            </a>
          ))}

          <LangToggle locale={locale} setLocale={setLocale} />

          <a
            href="https://github.com/edujbarrios/specialkeys"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 flex items-center gap-1.5 px-3 py-1.5 text-sm text-[#BB86FC] border border-[#BB86FC]/40 rounded-lg hover:bg-[#BB86FC]/10 transition-colors"
          >
            <GitHubIcon />
            <span className="hidden lg:inline">{t("nav_github")}</span>
          </a>
        </nav>

        {/* Mobile: lang toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <LangToggle locale={locale} setLocale={setLocale} compact />
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="p-2 rounded-lg text-[#9e9e9e] hover:text-white hover:bg-[#1e1e1e] transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#2c2c2c] bg-[#121212] px-4 py-3 flex flex-col gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2.5 text-sm text-[#9e9e9e] hover:text-white hover:bg-[#1e1e1e] rounded-lg transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/edujbarrios/specialkeys"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2.5 text-sm text-[#BB86FC] rounded-lg hover:bg-[#1e1e1e] transition-colors"
          >
            <GitHubIcon /> {t("nav_github")}
          </a>
        </div>
      )}
    </header>
  );
}

function LangToggle({ locale, setLocale, compact = false }: {
  locale: Locale;
  setLocale: (l: Locale) => void;
  compact?: boolean;
}) {
  return (
    <div className={clsx("flex items-center gap-0.5 bg-[#1e1e1e] border border-[#2c2c2c] rounded-lg p-0.5", compact ? "" : "ml-2")}>
      {(["en", "es"] as Locale[]).map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          title={l === "en" ? "English" : "Español"}
          className={clsx(
            "flex items-center gap-1 rounded-md transition-all text-xs font-medium",
            compact ? "px-1.5 py-1" : "px-2 py-1",
            locale === l
              ? "bg-[#BB86FC] text-black shadow"
              : "text-[#9e9e9e] hover:text-white"
          )}
        >
          <span>{l === "en" ? "🇬🇧" : "🇪🇸"}</span>
          {!compact && <span className="hidden sm:inline uppercase">{l}</span>}
        </button>
      ))}
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
