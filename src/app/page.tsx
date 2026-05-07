"use client";

import Header from "@/components/Header";
import SpecialCharsSection from "@/components/SpecialCharsSection";
import LatexSection from "@/components/LatexSection";
import OsShortcutsSection from "@/components/OsShortcutsSection";
import GlobalSearch from "@/components/GlobalSearch";
import { useLocale } from "@/contexts/LocaleContext";

export default function Home() {
  const { t } = useLocale();
  return (
    <div className="min-h-screen bg-[#121212] text-[#e1e1e1]">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col gap-16">
        {/* Hero */}
        <section className="flex flex-col items-center text-center gap-5 pt-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#BB86FC]/10 border border-[#BB86FC]/30 rounded-full text-[#BB86FC] text-xs font-medium">
            <span>⌨️</span> {t("hero_badge")}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            {t("hero_title_pre")}{" "}
            <span className="relative inline-block">
              <span className="text-[#BB86FC]">Alt+Cmd</span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 6 Q50 0 100 4 Q150 8 200 2"
                  stroke="#BB86FC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.6"
                />
              </svg>
            </span>
            {" "}{t("hero_title_post")}
          </h1>

          <p className="text-base sm:text-lg text-[#9e9e9e] max-w-2xl leading-relaxed">
            {t("hero_sub")}
          </p>

          {/* Global search */}
          <GlobalSearch />

          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#chars"
              className="px-5 py-2.5 bg-[#BB86FC] text-black font-semibold rounded-xl hover:bg-[#a06ce0] transition-colors text-sm"
            >
            {t("hero_btn_chars")}
            </a>
            <a
              href="#latex"
              className="px-5 py-2.5 bg-[#1e1e1e] text-white border border-[#2c2c2c] font-medium rounded-xl hover:border-[#03DAC6] hover:text-[#03DAC6] transition-colors text-sm"
            >
              {t("hero_btn_latex")}
            </a>
            <a
              href="#shortcuts"
              className="px-5 py-2.5 bg-[#1e1e1e] text-white border border-[#2c2c2c] font-medium rounded-xl hover:border-[#FFB74D] hover:text-[#FFB74D] transition-colors text-sm"
            >
              ⌨ {t("hero_btn_shortcuts")}
            </a>
          </div>

          {/* Stats bar */}
          <div className="flex flex-wrap gap-6 justify-center mt-2 text-sm text-[#9e9e9e]">
            {[
              ["200+", t("stat_chars")],
              ["100+", t("stat_latex")],
              ["120+", t("stat_shortcuts")],
              ["7",    t("stat_cats")],
            ].map(([n, label]) => (
              <div key={label} className="flex flex-col items-center gap-0.5">
                <span className="text-2xl font-bold text-white">{n}</span>
                <span className="text-xs">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#2c2c2c] to-transparent" />

        {/* Special Characters */}
        <SpecialCharsSection />

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#2c2c2c] to-transparent" />

        {/* LaTeX */}
        <LatexSection />

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#2c2c2c] to-transparent" />

        {/* OS Shortcuts */}
        <OsShortcutsSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-[#2c2c2c] mt-10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9e9e9e]">
          <div className="flex items-center gap-2">
            <span>⌨</span>
            <span>
              <span className="text-white font-medium">SpecialKeys</span> — {t("footer_made")}{" "}
              <a
                href="https://github.com/edujbarrios"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#BB86FC] hover:underline"
              >
                Eduardo J. Barrios
              </a>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/edujbarrios/specialkeys"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>·</span>
            <span>{t("footer_oss")}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
