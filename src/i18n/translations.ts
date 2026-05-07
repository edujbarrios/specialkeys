export type Locale = "en" | "es";

export const translations = {
  en: {
    // Header
    nav_chars: "Characters",
    nav_latex: "LaTeX",
    nav_shortcuts: "Shortcuts",
    nav_github: "GitHub",

    // Hero
    hero_badge: "Open Source · Dark Mode",
    hero_title_pre: "Tired of pressing",
    hero_title_post: "for special characters?",
    hero_sub:
      "Every special character, Unicode symbol, LaTeX command, and OS keyboard shortcut — one click to copy. No more hunting through character maps.",
    hero_btn_chars: "Browse Characters →",
    hero_btn_latex: "LaTeX Commands",
    hero_btn_shortcuts: "OS Shortcuts",
    stat_chars: "Special Characters",
    stat_latex: "LaTeX Commands",
    stat_shortcuts: "OS Shortcuts",
    stat_cats: "Character Categories",

    // Global Search
    search_placeholder: "Search any symbol, character or LaTeX command…",
    search_esc: "to close",
    search_results: "results",
    search_none_pre: "No results for",
    search_section_chars: "Characters",
    search_section_latex: "LaTeX",
    search_section_shortcuts: "Shortcuts",
    copy_cmd: "copy command",
    copy_expr: "copy expr",
    copy_char: "copy char",
    copy_html: "HTML",
    copied: "✓ copied!",

    // Special Characters Section
    section_chars_title: "Special Characters",
    section_chars_search: "Search by name, char, unicode…",
    section_chars_none: "No results for",

    // LaTeX Section
    section_latex_title: "LaTeX Commands",
    section_latex_search: "Search by command or name…",
    section_latex_none: "No results for",

    // OS Shortcuts Section
    section_shortcuts_title: "Keyboard Shortcuts",
    section_shortcuts_search: "Search by character, key combo…",
    section_shortcuts_none: "No shortcuts found for",
    platform: "Platform:",
    hint_deadkeys:
      "Dead keys produce an invisible accent mark. After pressing the combo, type the desired letter to get the accented character. Example:",
    hint_deadkeys_then: "then",
    hint_altcodes: "Hold",
    hint_altcodes_post:
      "and type the numeric code on the numpad (Num Lock must be on), then release Alt.",
    mac_label: "macOS",
    windows_label: "Windows",
    copy: "copy",

    // Footer
    footer_made: "made with ♥ by",
    footer_oss: "Open Source · MIT License",
  },

  es: {
    // Header
    nav_chars: "Caracteres",
    nav_latex: "LaTeX",
    nav_shortcuts: "Atajos",
    nav_github: "GitHub",

    // Hero
    hero_badge: "Código Abierto · Modo Oscuro",
    hero_title_pre: "¿Cansado de presionar",
    hero_title_post: "para caracteres especiales?",
    hero_sub:
      "Cada carácter especial, símbolo Unicode, comando LaTeX y atajo de teclado — un clic para copiar. Deja de buscar en los mapas de caracteres.",
    hero_btn_chars: "Ver Caracteres →",
    hero_btn_latex: "Comandos LaTeX",
    hero_btn_shortcuts: "Atajos de Teclado",
    stat_chars: "Caracteres Especiales",
    stat_latex: "Comandos LaTeX",
    stat_shortcuts: "Atajos de OS",
    stat_cats: "Categorías",

    // Global Search
    search_placeholder: "Busca cualquier símbolo, carácter o comando LaTeX…",
    search_esc: "para cerrar",
    search_results: "resultados",
    search_none_pre: "Sin resultados para",
    search_section_chars: "Caracteres",
    search_section_latex: "LaTeX",
    search_section_shortcuts: "Atajos",
    copy_cmd: "copiar comando",
    copy_expr: "copiar expr",
    copy_char: "copiar",
    copy_html: "HTML",
    copied: "✓ copiado!",

    // Special Characters Section
    section_chars_title: "Caracteres Especiales",
    section_chars_search: "Buscar por nombre, carácter, unicode…",
    section_chars_none: "Sin resultados para",

    // LaTeX Section
    section_latex_title: "Comandos LaTeX",
    section_latex_search: "Buscar por comando o nombre…",
    section_latex_none: "Sin resultados para",

    // OS Shortcuts Section
    section_shortcuts_title: "Atajos de Teclado",
    section_shortcuts_search: "Busca por carácter o combinación de teclas…",
    section_shortcuts_none: "Sin atajos para",
    platform: "Plataforma:",
    hint_deadkeys:
      "Las teclas muertas producen una marca de acento invisible. Después de la combinación, escribe la vocal deseada. Ejemplo:",
    hint_deadkeys_then: "luego",
    hint_altcodes: "Mantén",
    hint_altcodes_post:
      "y escribe el código numérico en el teclado numérico (Bloq Num activo), luego suelta Alt.",
    mac_label: "macOS",
    windows_label: "Windows",
    copy: "copiar",

    // Footer
    footer_made: "hecho con ♥ por",
    footer_oss: "Código Abierto · Licencia MIT",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
