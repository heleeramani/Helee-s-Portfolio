"use client";

import { Icon } from "@iconify/react";
import { useCallback, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const THEME_EVENT = "themechange";

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function readTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  window.dispatchEvent(new Event(THEME_EVENT));
}

// External store backed by the data-theme attribute on <html> (set pre-paint by
// the inline head script). useSyncExternalStore reconciles the server snapshot
// ("light") with the real client value without a hydration mismatch.
function subscribe(callback: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const handleSystemChange = () => {
    // Follow the OS only until the user makes an explicit choice.
    if (!localStorage.getItem(STORAGE_KEY)) {
      applyTheme(getSystemTheme());
    }
  };
  window.addEventListener(THEME_EVENT, callback);
  media.addEventListener("change", handleSystemChange);
  return () => {
    window.removeEventListener(THEME_EVENT, callback);
    media.removeEventListener("change", handleSystemChange);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore<Theme>(subscribe, readTheme, () => "light");

  const toggleTheme = useCallback(() => {
    const next: Theme = readTheme() === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage may be unavailable (private mode, blocked storage).
    }
    applyTheme(next);
  }, []);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-accent hover:bg-blush hover:text-accent"
    >
      <Icon
        icon={isDark ? "ph:sun-bold" : "ph:moon-bold"}
        className="h-4 w-4"
        aria-hidden="true"
      />
      <span className="sr-only">
        {isDark ? "Dark mode active" : "Light mode active"}
      </span>
    </button>
  );
}
