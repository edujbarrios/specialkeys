"use client";

import { useState, useMemo } from "react";
import {
  osShortcutsData,
  macCategories,
  windowsCategories,
  OS,
} from "@/data/osShortcuts";
import ShortcutCard from "./ShortcutCard";
import TabBar from "./TabBar";
import SearchBar from "./SearchBar";
import clsx from "clsx";

export default function OsShortcutsSection() {
  const [os, setOs] = useState<OS>("mac");
  const [activeCategory, setActiveCategory] = useState("symbols");
  const [search, setSearch] = useState("");

  const categories = os === "mac" ? macCategories : windowsCategories;

  const filtered = useMemo(() => {
    const base = osShortcutsData.filter((s) => s.os === os);
    const q = search.trim().toLowerCase();
    if (!q) return base.filter((s) => s.category === activeCategory);
    return base.filter(
      (s) =>
        s.label.toLowerCase().includes(q) ||
        s.result.includes(q) ||
        s.keys.join("").toLowerCase().includes(q) ||
        (s.note ?? "").toLowerCase().includes(q)
    );
  }, [os, activeCategory, search]);

  const handleOsSwitch = (newOs: OS) => {
    setOs(newOs);
    setActiveCategory("symbols");
    setSearch("");
  };

  return (
    <section id="shortcuts" className="flex flex-col gap-5">
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
        <h2 className="text-xl font-semibold text-white">Keyboard Shortcuts</h2>
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search by character, key combo…"
        />
      </div>

      {/* OS toggle */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-[#9e9e9e]">Platform:</span>
        <div className="flex gap-1 bg-[#1e1e1e] border border-[#2c2c2c] rounded-lg p-0.5">
          {(["mac", "windows"] as OS[]).map((o) => (
            <button
              key={o}
              onClick={() => handleOsSwitch(o)}
              className={clsx(
                "flex items-center gap-1.5 px-4 py-1.5 rounded-md text-sm font-medium transition-all",
                os === o
                  ? "bg-[#BB86FC] text-black shadow"
                  : "text-[#9e9e9e] hover:text-white"
              )}
            >
              {o === "mac" ? "🍎" : "🪟"} {o === "mac" ? "macOS" : "Windows"}
            </button>
          ))}
        </div>
      </div>

      {/* Category tabs — only when not searching */}
      {!search.trim() && (
        <TabBar
          tabs={categories}
          activeId={activeCategory}
          onChange={setActiveCategory}
          accentColor="#BB86FC"
        />
      )}

      {/* Hint for dead keys */}
      {!search.trim() && activeCategory === "dead-keys" && os === "mac" && (
        <div className="flex items-start gap-2 bg-[#BB86FC]/10 border border-[#BB86FC]/20 rounded-xl px-4 py-3 text-xs text-[#BB86FC]">
          <span className="text-base mt-0.5">💡</span>
          <p>
            <strong>Dead keys</strong> produce an invisible accent mark. After pressing the
            combo, type the desired letter to get the accented character.
            Example: <kbd className="bg-[#1e1e1e] px-1 rounded">⌥E</kbd> then{" "}
            <kbd className="bg-[#1e1e1e] px-1 rounded">A</kbd> → <strong>á</strong>
          </p>
        </div>
      )}

      {/* Hint for Windows Alt codes */}
      {!search.trim() && os === "windows" && activeCategory !== "ctrl-alt" && (
        <div className="flex items-start gap-2 bg-[#03DAC6]/10 border border-[#03DAC6]/20 rounded-xl px-4 py-3 text-xs text-[#03DAC6]">
          <span className="text-base mt-0.5">💡</span>
          <p>
            Hold <kbd className="bg-[#1e1e1e] px-1 rounded text-white">Alt</kbd> and type the
            numeric code on the <strong>numpad</strong> (Num Lock must be on), then release Alt.
          </p>
        </div>
      )}

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-[#9e9e9e] text-sm py-8 text-center">
          No shortcuts found for "{search}"
        </p>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-2">
          {filtered.map((item, i) => (
            <ShortcutCard key={`${item.os}-${item.keys.join("")}-${i}`} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}
