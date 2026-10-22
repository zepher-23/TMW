"use client";

import { useState } from "react";
import { useColorTheme } from "@/components/theme-provider";
import { Palette, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const { palette, setPalette, availablePalettes, currentPalette } = useColorTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 border-border bg-background px-3 text-xs font-semibold shadow-xs hover:bg-muted"
        title="Switch Color Theme"
      >
        <span
          className="h-3.5 w-3.5 rounded-full ring-1 ring-black/20"
          style={{ backgroundColor: currentPalette.primaryHex }}
        />
        <Palette className="h-3.5 w-3.5 opacity-70" />
        <span className="hidden sm:inline">{currentPalette.name}</span>
        <ChevronDown className="h-3 w-3 opacity-60" />
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute right-0 z-50 mt-2 w-64 origin-top-right rounded-xl border border-border bg-popover p-2 text-popover-foreground shadow-xl ring-1 ring-black/5 animate-in fade-in-50 zoom-in-95">
            <div className="px-2 py-1.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              Color Palettes
            </div>
            <div className="space-y-1">
              {availablePalettes.map((p) => {
                const isActive = p.id === palette;
                return (
                  <button
                    key={p.id}
                    onClick={() => {
                      setPalette(p.id);
                      setIsOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-accent text-accent-foreground font-semibold"
                        : "hover:bg-muted text-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="h-4 w-4 shrink-0 rounded-full shadow-xs ring-1 ring-black/20"
                        style={{ backgroundColor: p.primaryHex }}
                      />
                      <div>
                        <div>{p.name}</div>
                        <div className="text-[10px] text-muted-foreground line-clamp-1">
                          {p.tagline}
                        </div>
                      </div>
                    </div>
                    {isActive && (
                      <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                    )}
                  </button>
                );
              })}
            </div>
            <div className="mt-2 border-t border-border pt-1.5 px-2 text-[10px] text-muted-foreground">
              Tip: Set default in <code className="font-mono text-[9px]">theme-config.js</code>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
