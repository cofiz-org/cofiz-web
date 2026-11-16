"use client";

import { MoonIcon, SunIcon } from "@/components/icons";

export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    if (typeof window !== "undefined") {
      window.localStorage.setItem("cofiz-theme", next);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-muted transition-colors hover:bg-foreground/[0.06] hover:text-foreground"
    >
      <MoonIcon className="h-[17px] w-[17px] dark:hidden" />
      <SunIcon className="hidden h-[17px] w-[17px] dark:block" />
    </button>
  );
}
