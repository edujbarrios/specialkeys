"use client";

import { useState } from "react";
import { LatexCommand } from "@/data/latexCommands";
import clsx from "clsx";
import { InlineMath } from "react-katex";

interface LatexCardProps {
  item: LatexCommand;
}

export default function LatexCard({ item }: LatexCardProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string, kind: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(kind);
      setTimeout(() => setCopied(null), 1200);
    });
  };

  return (
    <div
      className={clsx(
        "group relative flex flex-col gap-2 rounded-xl p-3",
        "bg-[#1e1e1e] border border-transparent",
        "hover:border-[#03DAC6] hover:bg-[#232323] hover:shadow-[0_4px_20px_rgba(3,218,198,0.15)]",
        "transition-all duration-200 select-none cursor-pointer"
      )}
      onClick={() => copy(item.command, "cmd")}
      title={`Click to copy ${item.command}`}
    >
      {/* Rendered formula */}
      <div className="flex items-center justify-center min-h-[40px] text-white">
        <InlineMath math={item.rendered} />
      </div>

      {/* Command badge */}
      <div className="flex items-center justify-between gap-2">
        <code className="text-[10px] font-mono text-[#BB86FC] bg-[#2c2c2c] px-2 py-0.5 rounded truncate flex-1">
          {item.command}
        </code>
        <span className="text-[9px] text-[#9e9e9e] shrink-0">{item.label}</span>
      </div>

      {item.description && (
        <p className="text-[9px] text-[#9e9e9e] truncate">{item.description}</p>
      )}

      {/* Copy pills */}
      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => { e.stopPropagation(); copy(item.command, "cmd"); }}
          className="text-[8px] bg-[#03DAC6] text-black font-semibold px-2 py-0.5 rounded-full"
        >
          {copied === "cmd" ? "✓ copied!" : "copy command"}
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); copy(item.rendered, "rendered"); }}
          className="text-[8px] bg-[#272727] text-[#9e9e9e] border border-[#444] px-2 py-0.5 rounded-full hover:border-[#03DAC6] hover:text-white transition-colors"
        >
          {copied === "rendered" ? "✓ copied!" : "copy expr"}
        </button>
      </div>
    </div>
  );
}
