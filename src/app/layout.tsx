import type { Metadata } from "next";
import "./globals.css";
import { LocaleProvider } from "@/contexts/LocaleContext";

export const metadata: Metadata = {
  title: "SpecialKeys — Stop pressing Alt+Cmd for special characters",
  description:
    "A beautiful dark-mode compendium of special characters, Unicode symbols, and LaTeX commands. Click to copy — no more hunting through OS menus.",
  keywords: ["special characters", "unicode", "latex", "symbols", "copy paste", "keyboard shortcuts"],
  authors: [{ name: "Eduardo J. Barrios", url: "https://github.com/edujbarrios" }],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "SpecialKeys",
    description: "Stop pressing Alt+Cmd. Every special character & LaTeX command, one click away.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body><LocaleProvider>{children}</LocaleProvider></body>
    </html>
  );
}
