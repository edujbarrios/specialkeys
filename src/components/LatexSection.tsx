"use client";

import { useState, useMemo } from "react";
import { latexData } from "@/data/latexCommands";
import LatexCard from "./LatexCard";
import TabBar from "./TabBar";
import SearchBar from "./SearchBar";

export default function LatexSection() {
  const [activeCategory, setActiveCategory] = useState(latexData[0].id);
  const [search, setSearch] = useState("");

  const tabs = latexData.map((c) => ({
    id: c.id,
    label: c.label,
    icon: c.icon,
  }));

  const activeData = useMemo(() => {
    const cat = latexData.find((c) => c.id === activeCategory)!;
    if (!search.trim()) return cat.commands;
    const q = search.toLowerCase();
    return cat.commands.filter(
      (cmd) =>
        cmd.command.toLowerCase().includes(q) ||
        cmd.label.toLowerCase().includes(q) ||
        (cmd.description ?? "").toLowerCase().includes(q)
    );
  }, [activeCategory, search]);

  return (
    <section id="latex" className="flex flex-col gap-5">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
        <h2 className="text-xl font-semibold text-white">
          LaTeX Commands
        </h2>
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search by command or name…"
        />
      </div>

      <TabBar
        tabs={tabs}
        activeId={activeCategory}
        onChange={(id) => { setActiveCategory(id); setSearch(""); }}
        accentColor="#03DAC6"
      />

      {activeData.length === 0 ? (
        <p className="text-[#9e9e9e] text-sm py-8 text-center">No results for &quot;{search}&quot;</p>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-2">
          {activeData.map((item) => (
            <LatexCard key={item.command} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}
