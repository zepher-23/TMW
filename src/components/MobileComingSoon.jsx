"use client";

import Image from "next/image";
import brandLogo from "@/assets/logo/TeamMostWatedLogo-whitebg@1.5x.webp";

export function MobileComingSoon() {
  return (
    <div className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-[#09090b] px-6 select-none">
      {/* Background Subtle Aesthetic Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle breathing primary crimson aura */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
          style={{
            width: "320px",
            height: "320px",
            background:
              "radial-gradient(circle, rgba(165, 34, 33, 0.45) 0%, rgba(61, 61, 68, 0.25) 55%, transparent 80%)",
            animation: "ambientPulse 8s ease-in-out infinite",
          }}
        />

        {/* Secondary subtle floating light */}
        <div
          className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
          style={{
            width: "200px",
            height: "200px",
            background:
              "radial-gradient(circle, rgba(225, 29, 72, 0.22) 0%, transparent 70%)",
            animation: "ambientFloat 11s ease-in-out infinite alternate",
          }}
        />

        {/* Ultra-subtle background radial vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(5, 5, 7, 0.85) 100%)",
          }}
        />
      </div>

      {/* Minimal Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Brand Logo */}
        <div className="mb-8 rounded-2xl bg-[#fffffd] px-6 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.6)] ring-1 ring-white/10 transition-transform duration-700 ease-out hover:scale-105">
          <Image
            src={brandLogo}
            alt="Team Most Wanted"
            width={160}
            height={52}
            className="h-9 w-auto object-contain"
            priority
          />
        </div>

        {/* Minimal Crimson Line + Coming Soon */}
        <div className="flex items-center gap-3">
          <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#a52221]" />
          <p className="text-[11px] font-semibold tracking-[0.4em] uppercase text-neutral-300">
            Coming Soon
          </p>
          <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#a52221]" />
        </div>
      </div>

      {/* Minimal Bottom Brand Mark */}
      <footer className="absolute bottom-8 left-0 right-0 text-center">
        <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-neutral-600">
          Team Most Wanted
        </span>
      </footer>

      {/* Keyframe Styles for Background Animation */}
      <style jsx>{`
        @keyframes ambientPulse {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(0.9);
            opacity: 0.35;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.22);
            opacity: 0.65;
          }
        }
        @keyframes ambientFloat {
          0% {
            transform: translate(-50%, -50%) translateY(0);
          }
          100% {
            transform: translate(-50%, -50%) translateY(-24px);
          }
        }
      `}</style>
    </div>
  );
}
