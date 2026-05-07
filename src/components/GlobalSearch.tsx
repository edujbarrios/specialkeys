"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { specialCharsData } from "@/data/specialChars";
import { latexData } from "@/data/latexCommands";
import { osShortcutsData } from "@/data/osShortcuts";
import { InlineMath } from "react-katex";
import clsx from "clsx";

interface Result {
  type: "char" | "latex" | "shortcut";
  display: string;
  label: string;
  copyValue: string;
  subtitle?: string;
  isLatex?: boolean;
  latexRendered?: string;
}

const MAX_PER_TYPE = 6;

function buildResults(q: string): Result[] {
  if (!q.trim()) return [];
  const query = q.toLowerCase();

  const chars: Result[] = [];
  for (const cat of specialCharsData) {
    for (const c of cat.chars) {
      if (
        c.label.toLowerCase().includes(query) ||
        c.char.includes(query) ||
        c.unicode.toLowerCase().includes(query) ||
        (c.html ?? "").toLowerCase().includes(query)
      ) {
        chars.push({
          type: "char",
          display: c.char,
          label: c.label,
          copyValue: c.char,
          subtitle: c.unicode,
        });
      }
    }
  }

  const latex: Result[] = [];
  for (const cat of latexData) {
    for (const cmd of cat.commands) {
      if (
        cmd.command.toLowerCase().includes(query) ||
        cmd.label.toLowerCase().includes(query) ||
        (cmd.description ?? "").toLowerCase().includes(query)
      ) {
        latex.push({
          type: "latex",
          display: cmd.command,
          label: cmd.label,
          copyValue: cmd.command,
          subtitle: cmd.description,
          isLatex: true,
          latexRendered: cmd.rendered,
        });
      }
    }
  }

  const shortcuts: Result[] = [];
  for (const s of osShortcutsData) {
    if (
      s.label.toLowerCase().includes(query) ||
      s.result.includes(query) ||
      s.keys.join("+").toLowerCase().includes(query)
    ) {
      shortcuts.push({
        type: "shortcut",
        display: s.result,
        label: s.label,
        copyValue: s.result,
        subtitle: `${s.os === "mac" ? "🍎" : "🪟"} ${s.keys.join(" + ")}`,
      });
    }
  }

  return [
    ...chars.slice(0, MAX_PER_TYPE),
    ...latex.slice(0, MAX_PER_TYPE),
    ...shortcuts.slice(0, MAX_PER_TYPE),
  ];
}

const typeLabel: Record<string, string> = {
  char: "Characters",
  latex: "LaTeX",
  shortcut: "Shortcuts",
};
const typeColor: Record<string, string> = {
  char: "#BB86FC",
  latex: "#03DAC6",
  shortcut: "#FFB74D",
};

export default function GlobalSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const results = useMemo(() => buildResults(query), [query]);

  // Group results by type
  const grouped = useMemo(() => {
    const groups: Record<string, Result[]> = {};
    for (const r of results) {
      if (!groups[r.type]) groups[r.type] = [];
      groups[r.type].push(r);
    }
    return groups;
  }, [results]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); setQuery(""); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const copy = (value: string) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(value);
      setTimeout(() => setCopied(null), 1200);
    });
  };

  return (
    <div ref={ref} className="relative w-full max-w-2xl mx-auto">
      {/* Input */}
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9e9e9e] text-base pointer-events-none">
          🔍
        </span>
        <input
          type="text"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => query && setOpen(true)}
          placeholder="Search any symbol, character or LaTeX command…"
          className={clsx(
            "w-full bg-[#1e1e1e] border rounded-2xl pl-11 pr-12 py-3.5 text-sm text-white",
            "placeholder-[#9e9e9e] outline-none transition-all",
            open && results.length > 0
              ? "border-[#BB86FC] shadow-[0_0_0_3px_rgba(187,134,252,0.15)] rounded-b-none"
              : "border-[#2c2c2c] focus:border-[#BB86FC] focus:shadow-[0_0_0_3px_rgba(187,134,252,0.15)]"
          )}
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
          {query && (
            <button
              onClick={() => { setQuery(""); setOpen(false); }}
              className="text-[#9e9e9e] hover:text-white text-xs"
            >
              ✕
            </button>
          )}
          <kbd className="hidden sm:inline text-[10px] bg-[#2c2c2c] border border-[#444] text-[#9e9e9e] px-1.5 py-0.5 rounded">
            Esc
          </kbd>
        </div>
      </div>

      {/* Dropdown */}
      {open && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-50 bg-[#1e1e1e] border border-[#BB86FC]/40 border-t-0 rounded-b-2xl shadow-2xl max-h-[480px] overflow-y-auto">
          {Object.entries(grouped).map(([type, items]) => (
            <div key={type}>
              {/* Section header */}
              <div
                className="sticky top-0 px-4 py-2 text-[10px] font-semibold uppercase tracking-widest bg-[#1e1e1e]"
                style={{ color: typeColor[type] }}
              >
                {typeLabel[type]}
              </div>

              {items.map((r, i) => (
                <button
                  key={i}
                  onClick={() => copy(r.copyValue)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-[#272727] transition-colors text-left"
                >
                  {/* Display */}
                  <span className="w-10 flex items-center justify-center shrink-0">
                    {r.isLatex && r.latexRendered ? (
                      <span className="text-white text-sm">
                        <InlineMath math={r.latexRendered} />
                      </span>
                    ) : (
                      <span className="text-2xl leading-none text-white">{r.display}</span>
                    )}
                  </span>

                  {/* Labels */}
                  <span className="flex flex-col flex-1 min-w-0">
                    <span className="text-sm text-white truncate">{r.label}</span>
                    {r.subtitle && (
                      <span className="text-[10px] text-[#9e9e9e] font-mono truncate">{r.subtitle}</span>
                    )}
                  </span>

                  {/* Copy badge */}
                  <span
                    className="shrink-0 text-[10px] px-2 py-0.5 rounded-full font-semibold"
                    style={{
                      backgroundColor: copied === r.copyValue ? typeColor[type] : "transparent",
                      color: copied === r.copyValue ? "#000" : typeColor[type],
                      border: `1px solid ${typeColor[type]}40`,
                    }}
                  >
                    {copied === r.copyValue ? "✓ copied!" : "copy"}
                  </span>
                </button>
              ))}
            </div>
          ))}

          <div className="px-4 py-2 border-t border-[#2c2c2c] text-[10px] text-[#9e9e9e] text-center">
            {results.length} results — press <kbd className="bg-[#2c2c2c] px-1 rounded">Esc</kbd> to close
          </div>
        </div>
      )}

      {/* No results */}
      {open && query.trim() && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 z-50 bg-[#1e1e1e] border border-[#2c2c2c] border-t-0 rounded-b-2xl shadow-2xl px-4 py-6 text-center text-[#9e9e9e] text-sm">
          No results for &quot;<span className="text-white">{query}</span>&quot;
        </div>
      )}
    </div>
  );
}
