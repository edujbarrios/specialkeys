<h1 align="center">
  <img src="https://raw.githubusercontent.com/edujbarrios/specialkeys/main/public/favicon.svg" width="48" alt="⌨" />
  <br/>
  SpecialKeys
</h1>

<p align="center">
  <strong>Tired of pressing Alt+Cmd for special characters?</strong><br/>
  Every symbol, character, LaTeX command, and OS shortcut — one click away.
</p>

<p align="center">
  <strong>🇬🇧 English</strong> · <a href="./README.es.md">🇪🇸 Español</a>
</p>

<p align="center">
  <a href="https://specialkeys.vercel.app">🌐 Live Demo</a> ·
  <a href="#-features">Features</a> ·
  <a href="#-getting-started">Getting Started</a> ·
  <a href="#-contributing">Contributing</a>
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-14-black?logo=next.js"/>
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript"/>
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss"/>
  <img alt="KaTeX" src="https://img.shields.io/badge/KaTeX-0.16-008080?logo=latex"/>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-BB86FC"/>
  <img alt="Dark Mode" src="https://img.shields.io/badge/theme-dark--mode-121212"/>
</p>

---

## ✨ Features

| Section | What you get |
|---|---|
| **Special Characters** | 200+ Unicode symbols across 7 categories — Math, Greek, Arrows, Punctuation, Currency, Accents, Misc |
| **LaTeX Commands** | 100+ commands rendered live with KaTeX — Operators, Relations, Greek, Calculus, Formatting, Matrices |
| **OS Shortcuts** | 120+ keyboard shortcuts for macOS (⌥ Option, dead keys) and Windows (Alt codes, Ctrl+Alt) |
| **Global Search** | Instant search across all three datasets simultaneously |

### Design
- 🌑 **Dark Mode first** — Material Design color tokens (surface, primary `#BB86FC`, secondary `#03DAC6`)
- ⌨ **Visual key badges** — keyboard shortcuts rendered as physical keys
- 📋 **One click to copy** — character, HTML entity, LaTeX command, or expression
- 💡 **Dead-key hints** — explains Mac accent sequences (⌥E → A = á)
- 🔍 **Per-section search + global search** dropdown with grouped results

---

## 🚀 Getting Started

```bash
# Clone
git clone https://github.com/edujbarrios/specialkeys.git
cd specialkeys

# Install
npm install

# Dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout + metadata
│   ├── page.tsx           # Main page — hero + all sections
│   └── globals.css        # Tailwind + KaTeX + custom properties
├── components/
│   ├── GlobalSearch.tsx   # Cross-dataset search dropdown
│   ├── Header.tsx         # Sticky nav
│   ├── TabBar.tsx         # Reusable category tab bar
│   ├── SearchBar.tsx      # Per-section search input
│   ├── CharCard.tsx       # Special character card
│   ├── LatexCard.tsx      # LaTeX command card with KaTeX render
│   ├── KeyBadge.tsx       # Visual keyboard key badge
│   ├── ShortcutCard.tsx   # OS shortcut card
│   ├── SpecialCharsSection.tsx
│   ├── LatexSection.tsx
│   └── OsShortcutsSection.tsx
└── data/
    ├── specialChars.ts    # 200+ chars, 7 categories — add more here
    ├── latexCommands.ts   # 100+ LaTeX commands — add more here
    └── osShortcuts.ts     # 120+ OS shortcuts — add more here
```

---

## ➕ Adding More Characters / Commands

All data is **fully parametrized**. Add a new entry to the relevant array:

### Special character
```ts
// src/data/specialChars.ts
{ char: "∞", label: "Infinity", unicode: "U+221E", mac: "⌥ 5", windows: "Alt 8734", html: "&infin;" }
```

### LaTeX command
```ts
// src/data/latexCommands.ts
{ command: "\\mu", rendered: "\\mu", label: "Mu", description: "μ" }
```

### OS shortcut
```ts
// src/data/osShortcuts.ts
{ os: "mac", category: "math", keys: ["⌥", "M"], result: "µ", label: "Mu / Micro" }
{ os: "windows", category: "math", keys: ["Alt", "956"], result: "μ", label: "Mu" }
```

---

## 🤝 Contributing

Contributions are welcome! If you know a shortcut that's missing, open a PR — the data files are designed to be trivially extensible.

1. Fork the repo
2. Add your entries to `src/data/*.ts`
3. Open a pull request

---

## 📄 License

MIT © [Eduardo J. Barrios](https://github.com/edujbarrios)

---

<p align="center">
  Made with ♥ and dark mode · Stop pressing Alt+Cmd
</p>
