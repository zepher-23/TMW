"use client";

import React, { createContext, useContext, useEffect } from "react";
import { COLOR_PALETTES, DEFAULT_PALETTE } from "@/lib/theme-config";

const ThemeContext = createContext(undefined);

function subscribe(callback) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export function ThemeProvider({ children, defaultPalette = DEFAULT_PALETTE }) {
  const palette = React.useSyncExternalStore(
    subscribe,
    () => {
      try {
        const saved = localStorage.getItem("tmw-theme-palette");
        if (
          saved &&
          saved !== "racing-red" &&
          saved !== "navy-slate" &&
          COLOR_PALETTES.some((p) => p.id === saved)
        ) {
          return saved;
        }
      } catch {
        // ignore
      }
      return defaultPalette;
    },
    () => defaultPalette
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", palette);
  }, [palette]);

  const setPalette = (id) => {
    try {
      localStorage.setItem("tmw-theme-palette", id);
      window.dispatchEvent(new Event("storage"));
    } catch {
      // ignore
    }
    document.documentElement.setAttribute("data-theme", id);
  };

  const currentPalette =
    COLOR_PALETTES.find((p) => p.id === palette) || COLOR_PALETTES[0];

  return (
    <ThemeContext.Provider
      value={{
        palette,
        setPalette,
        availablePalettes: COLOR_PALETTES,
        currentPalette,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useColorTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useColorTheme must be used within a ThemeProvider");
  }
  return context;
}
