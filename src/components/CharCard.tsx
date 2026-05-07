"use client";

import { useState } from "react";
import { SpecialChar } from "@/data/specialChars";
import clsx from "clsx";

interface CharCardProps {
  item: SpecialChar;
}

export default function CharCard({ item }: CharCardProps) {
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
        "group relative flex flex-col items-center gap-2 rounded-xl p-3 cursor-pointer",
        "bg-[#1e1e1e] border border-transparent",
        "hover:border-[#BB86FC] hover:bg-[#232323] hover:shadow-[0_4px_20px_rgba(187,134,252,0.2)]",
        "transition-all duration-200 select-none"
      )}
      onClick={() => copy(item.char, "char")}
      title={`Click to copy ${item.char}`}
    >
      {/* Big character */}
      <span className="text-3xl leading-none font-light text-white">
        {item.char}
      </span>

      {/* Label */}
      <span className="text-[10px] text-[#9e9e9e] text-center leading-tight font-medium">
        {item.label}
      </span>

      {/* Unicode badge */}
      <span className="text-[9px] font-mono text-[#BB86FC]/60">{item.unicode}</span>

      {/* Shortcut row */}
      {(item.mac || item.windows) && (
        <div className="flex flex-wrap gap-1 justify-center mt-0.5">
          {item.mac && (
            <button
              onClick={(e) => { e.stopPropagation(); copy(item.char, "char"); }}
              className="text-[8px] bg-[#2c2c2c] px-1.5 py-0.5 rounded text-[#03DAC6] font-mono leading-none hover:bg-[#BB86FC] hover:text-black transition-colors"
              title={`macOS: ${item.mac}`}
            >
              {item.mac}
            </button>
          )}
          {item.windows && (
            <button
              onClick={(e) => { e.stopPropagation(); copy(item.char, "char"); }}
              className="text-[8px] bg-[#2c2c2c] px-1.5 py-0.5 rounded text-[#03DAC6] font-mono leading-none hover:bg-[#BB86FC] hover:text-black transition-colors"
              title={`Windows: ${item.windows}`}
            >
              {item.windows}
            </button>
          )}
        </div>
      )}

      {/* Copy pills */}
      <div className="flex gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => { e.stopPropagation(); copy(item.char, "char"); }}
          className="text-[8px] bg-[#BB86FC] text-black font-semibold px-2 py-0.5 rounded-full"
        >
          {copied === "char" ? "✓ copied!" : "copy char"}
        </button>
        {item.html && (
          <button
            onClick={(e) => { e.stopPropagation(); copy(item.html!, "html"); }}
            className="text-[8px] bg-[#272727] text-[#9e9e9e] border border-[#444] px-2 py-0.5 rounded-full hover:border-[#BB86FC] hover:text-white transition-colors"
          >
            {copied === "html" ? "✓ copied!" : "HTML"}
          </button>
        )}
      </div>
    </div>
  );
}
