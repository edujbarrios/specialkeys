"use client";

import { useState } from "react";
import { KeyCombo } from "@/data/osShortcuts";
import KeyBadge from "./KeyBadge";
import clsx from "clsx";

interface ShortcutCardProps {
  item: KeyCombo;
}

export default function ShortcutCard({ item }: ShortcutCardProps) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(item.result).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  };

  return (
    <div
      onClick={copy}
      className={clsx(
        "group relative flex flex-col gap-2.5 rounded-xl p-3 cursor-pointer select-none",
        "bg-[#1e1e1e] border border-transparent",
        "hover:border-[#BB86FC]/50 hover:bg-[#232323] hover:shadow-[0_4px_16px_rgba(187,134,252,0.15)]",
        "transition-all duration-150"
      )}
      title={`Click to copy "${item.result}"`}
    >
      {/* Keys + result row */}
      <div className="flex items-center gap-1.5 flex-wrap">
        {item.keys.map((k, i) => (
          <span key={i} className="flex items-center gap-1">
            <KeyBadge k={k} />
            {i < item.keys.length - 1 && (
              <span className="text-[10px] text-[#9e9e9e]">+</span>
            )}
          </span>
        ))}
        {item.followUp && (
          <>
            <span className="text-[10px] text-[#9e9e9e]">→</span>
            <span className="text-[10px] font-mono text-[#9e9e9e]">vowel</span>
          </>
        )}
        <span className="ml-auto text-2xl leading-none font-light text-white">
          {item.result}
        </span>
      </div>

      {/* Label */}
      <span className="text-[11px] text-[#9e9e9e] leading-tight">{item.label}</span>

      {/* Note */}
      {item.note && (
        <p className="text-[9px] font-mono text-[#BB86FC]/60 leading-relaxed">
          {item.note}
        </p>
      )}

      {/* Copy feedback */}
      <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-[8px] bg-[#BB86FC] text-black font-semibold px-2 py-0.5 rounded-full">
          {copied ? "✓ copied!" : "copy"}
        </span>
      </div>
    </div>
  );
}
