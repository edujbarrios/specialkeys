"use client";

import { useState } from "react";

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = "Search…" }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-lg">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9e9e9e] pointer-events-none text-sm">
        🔍
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-[#1e1e1e] border border-[#2c2c2c] rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-[#9e9e9e] outline-none focus:border-[#BB86FC] focus:shadow-[0_0_0_2px_rgba(187,134,252,0.2)] transition-all"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9e9e9e] hover:text-white text-xs"
        >
          ✕
        </button>
      )}
    </div>
  );
}
