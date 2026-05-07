"use client";

import { useState, useMemo } from "react";
import { specialCharsData } from "@/data/specialChars";
import CharCard from "./CharCard";
import TabBar from "./TabBar";
import SearchBar from "./SearchBar";

export default function SpecialCharsSection() {
  const [activeCategory, setActiveCategory] = useState(specialCharsData[0].id);
  const [search, setSearch] = useState("");

  const tabs = specialCharsData.map((c) => ({
    id: c.id,
    label: c.label,
    icon: c.icon,
  }));

  const activeData = useMemo(() => {
    const cat = specialCharsData.find((c) => c.id === activeCategory)!;
    if (!search.trim()) return cat.chars;
    const q = search.toLowerCase();
    return cat.chars.filter(
      (ch) =>
        ch.label.toLowerCase().includes(q) ||
        ch.char.includes(q) ||
        ch.unicode.toLowerCase().includes(q) ||
        (ch.html ?? "").toLowerCase().includes(q)
    );
  }, [activeCategory, search]);

  return (
    <section id="chars" className="flex flex-col gap-5">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
        <h2 className="text-xl font-semibold text-white">
          Special Characters
        </h2>
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search by name, char, unicode…"
        />
      </div>

      <TabBar
        tabs={tabs}
        activeId={activeCategory}
        onChange={(id) => { setActiveCategory(id); setSearch(""); }}
        accentColor="#BB86FC"
      />

      {activeData.length === 0 ? (
        <p className="text-[#9e9e9e] text-sm py-8 text-center">No results for "{search}"</p>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
          {activeData.map((item) => (
            <CharCard key={item.unicode + item.char} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}
