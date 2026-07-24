"use client";

import { THEMES, useTheme, type ThemeId } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="fixed bottom-4 right-4 z-40 flex flex-col gap-1 rounded-md border p-2 shadow-lg backdrop-blur-md sm:bottom-6 sm:right-6"
      style={{
        background: "var(--surface-solid)",
        borderColor: "var(--border)",
      }}
      role="group"
      aria-label="Design palette"
    >
      <span
        className="px-2 pb-1 text-[10px] font-medium uppercase tracking-wider"
        style={{ color: "var(--muted)" }}
      >
        Palette
      </span>
      {THEMES.map((t) => {
        const active = theme === t.id;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => setTheme(t.id as ThemeId)}
            className="rounded px-3 py-1.5 text-left text-sm transition-opacity"
            style={{
              background: active ? "var(--accent)" : "transparent",
              color: active ? "var(--on-accent)" : "var(--fg)",
              fontFamily: "var(--font-body)",
              opacity: active ? 1 : 0.75,
            }}
            aria-pressed={active}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
