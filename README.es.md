<h1 align="center">
  <img src="https://raw.githubusercontent.com/edujbarrios/specialkeys/main/public/favicon.svg" width="48" alt="⌨" />
  <br/>
  SpecialKeys
</h1>

<p align="center">
  <strong>¿Cansado de presionar Alt+Cmd para escribir caracteres especiales?</strong><br/>
  Cada símbolo, carácter, comando LaTeX y atajo de teclado — a un clic de distancia.
</p>

<p align="center">
  <a href="https://specialkeys.vercel.app">🌐 Demo en vivo</a> ·
  <a href="#-características">Características</a> ·
  <a href="#-empezar">Empezar</a> ·
  <a href="#-contribuir">Contribuir</a>
</p>

<p align="center">
  <a href="./README.md">🇬🇧 English</a> · <strong>🇪🇸 Español</strong>
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-14-black?logo=next.js"/>
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript"/>
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss"/>
  <img alt="KaTeX" src="https://img.shields.io/badge/KaTeX-0.16-008080?logo=latex"/>
  <img alt="Licencia" src="https://img.shields.io/badge/licencia-MIT-BB86FC"/>
  <img alt="Modo oscuro" src="https://img.shields.io/badge/tema-modo--oscuro-121212"/>
</p>

---

## ✨ Características

| Sección | Qué incluye |
|---|---|
| **Caracteres Especiales** | Más de 200 símbolos Unicode en 7 categorías — Matemáticas, Griego, Flechas, Puntuación, Monedas, Acentos, Varios |
| **Comandos LaTeX** | Más de 100 comandos renderizados en tiempo real con KaTeX — Operadores, Relaciones, Griego, Cálculo, Formato, Matrices |
| **Atajos de Teclado** | Más de 120 atajos para macOS (⌥ Option, teclas muertas) y Windows (códigos Alt, Ctrl+Alt) |
| **Búsqueda Global** | Búsqueda instantánea en los tres conjuntos de datos simultáneamente |

### Diseño
- 🌑 **Modo oscuro** — tokens de color Material Design (superficie, primario `#BB86FC`, secundario `#03DAC6`)
- ⌨ **Teclas visuales** — los atajos de teclado se muestran como teclas físicas
- 📋 **Un clic para copiar** — carácter, entidad HTML, comando LaTeX o expresión completa
- 💡 **Guía de teclas muertas** — explica las secuencias de acentos en Mac (⌥E → A = á)
- 🔍 **Búsqueda por sección + búsqueda global** con resultados agrupados
- 🕓 **Historial de copiados** — accede rápidamente a lo que copiaste antes
- 🌐 **Interfaz bilingüe** — alterna entre inglés y español

---

## 🚀 Empezar

```bash
# Clonar
git clone https://github.com/edujbarrios/specialkeys.git
cd specialkeys

# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

---

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx              # Layout raíz + metadatos
│   ├── page.tsx                # Página principal — hero + todas las secciones
│   └── globals.css             # Tailwind + KaTeX + propiedades personalizadas
├── components/
│   ├── GlobalSearch.tsx        # Búsqueda entre todos los datasets
│   ├── Header.tsx              # Navegación fija + toggle de idioma
│   ├── TabBar.tsx              # Barra de categorías reutilizable
│   ├── SearchBar.tsx           # Buscador por sección
│   ├── CharCard.tsx            # Tarjeta de carácter especial
│   ├── LatexCard.tsx           # Tarjeta de comando LaTeX con render KaTeX
│   ├── KeyBadge.tsx            # Tecla visual de teclado
│   ├── ShortcutCard.tsx        # Tarjeta de atajo de OS
│   ├── CopyHistory.tsx         # Historial de elementos copiados
│   ├── SpecialCharsSection.tsx
│   ├── LatexSection.tsx
│   └── OsShortcutsSection.tsx
├── contexts/
│   └── LocaleContext.tsx       # Contexto i18n EN/ES
├── i18n/
│   └── translations.ts        # Diccionario de traducciones
└── data/
    ├── specialChars.ts         # 200+ caracteres — añade más aquí
    ├── latexCommands.ts        # 100+ comandos LaTeX — añade más aquí
    └── osShortcuts.ts          # 120+ atajos de OS — añade más aquí
```

---

## ➕ Añadir Más Caracteres o Comandos

Todos los datos están **completamente parametrizados**. Añade una nueva entrada al array correspondiente:

### Carácter especial
```ts
// src/data/specialChars.ts
{ char: "∞", label: "Infinito", unicode: "U+221E", mac: "⌥ 5", windows: "Alt 8734", html: "&infin;" }
```

### Comando LaTeX
```ts
// src/data/latexCommands.ts
{ command: "\\mu", rendered: "\\mu", label: "Mu", description: "μ" }
```

### Atajo de teclado
```ts
// src/data/osShortcuts.ts
{ os: "mac",     category: "math", keys: ["⌥","M"],     result: "µ", label: "Mu / Micro" }
{ os: "windows", category: "math", keys: ["Alt","956"], result: "μ", label: "Mu" }
```

---

## 🌐 Internacionalización (i18n)

La interfaz está disponible en inglés y español. El idioma se guarda automáticamente en `localStorage`. Para añadir un nuevo idioma:

1. Añade las traducciones en `src/i18n/translations.ts`
2. Agrega la opción al selector de idioma en `Header.tsx`

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si conoces un atajo que falta, abre un PR — los archivos de datos están diseñados para ser fácilmente extensibles.

1. Haz un fork del repositorio
2. Añade tus entradas en `src/data/*.ts`
3. Abre un pull request

---

## 📄 Licencia

MIT © [Eduardo J. Barrios](https://github.com/edujbarrios)

---

<p align="center">
  Hecho con ♥ y modo oscuro · Deja de presionar Alt+Cmd
</p>
