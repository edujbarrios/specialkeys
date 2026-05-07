interface KeyBadgeProps {
  k: string;
}

// Special keys get wider / icon treatment
const specialKeys: Record<string, string> = {
  "⌘": "⌘",
  "⌥": "⌥",
  "⇧": "⇧",
  "⌃": "⌃",
  "⌫": "⌫",
  "⎋": "Esc",
  Ctrl: "Ctrl",
  Alt: "Alt",
  Shift: "Shift",
  "→": "→",
};

export default function KeyBadge({ k }: KeyBadgeProps) {
  const display = specialKeys[k] ?? k;
  const isModifier = ["⌘","⌥","⇧","⌃","Ctrl","Alt","Shift"].includes(k);

  return (
    <kbd
      className={[
        "inline-flex items-center justify-center h-7 rounded-md font-mono text-[11px] font-semibold",
        "bg-[#2a2a2a] border border-[#555] border-b-2 border-b-[#666]",
        "text-[#e1e1e1] shadow-sm select-none",
        "px-2 min-w-[28px]",
        isModifier ? "text-[#BB86FC]" : "",
      ].join(" ")}
    >
      {display}
    </kbd>
  );
}
