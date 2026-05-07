"use client";

import clsx from "clsx";

interface Tab {
  id: string;
  label: string;
  icon: string;
}

interface TabBarProps {
  tabs: Tab[];
  activeId: string;
  onChange: (id: string) => void;
  accentColor?: string;
}

export default function TabBar({ tabs, activeId, onChange, accentColor = "#BB86FC" }: TabBarProps) {
  return (
    <div className="flex flex-wrap gap-1.5 p-1 bg-[#1e1e1e] rounded-xl border border-[#2c2c2c]">
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={clsx(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150",
              isActive
                ? "text-black shadow-md"
                : "text-[#9e9e9e] hover:text-white hover:bg-[#272727]"
            )}
            style={
              isActive
                ? { backgroundColor: accentColor, color: "#000" }
                : undefined
            }
          >
            <span className="text-base leading-none">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
