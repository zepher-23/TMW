"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  KeyRound,
  Search,
  Wrench,
  Sparkles,
  Bike,
  CheckCircle2,
  Clock,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import { RealisticSuperbike } from "@/components/RealisticSuperbike";

const STAGES = [
  {
    id: "handover",
    step: 1,
    name: "Handover",
    title: "Vehicle Handover & Check-In",
    environment: "Service Reception Bay",
    time: "10 - 15 Mins",
    icon: KeyRound,
    summary:
      "Your motorcycle enters the check-in bay. Our service advisor logs current mileage, captures high-res vehicle condition photos, and records your riding feedback into a digital job card.",
    checklist: [
      "Digital odometer & fuel gauge logging",
      "Rider performance concerns & symptom notes",
      "360° photographic pre-service condition record",
      "Assigned to a certified brand specialist",
    ],
    status: "Intake Station: Vehicle Registered",
  },
  {
    id: "inspection",
    step: 2,
    name: "Inspection",
    title: "25-Point Computerized Diagnostic Scan",
    environment: "Diagnostic Lab & Scan Bay",
    time: "20 - 30 Mins",
    icon: Search,
    summary:
      "Equipped with advanced diagnostic scanners, our technicians measure battery cranking voltage, brake disc thickness, spark plug electrode gap, and scan the ECU for fault codes.",
    checklist: [
      "ECU digital OBD error code diagnostics",
      "Brake pad wear & disc rotor micrometer check",
      "Battery internal resistance & alternator output",
      "Suspension fork seal damping & tire tread depth",
    ],
    status: "Diagnostic Scanner: 25-Point Check Active",
  },
  {
    id: "repair",
    step: 3,
    name: "Repair Work",
    title: "Master Tech Precision Servicing",
    environment: "Hydraulic Workshop Lift Bay",
    time: "2 - 3 Hours",
    icon: Wrench,
    summary:
      "Mounted on a hydraulic motorcycle lift, your bike undergoes precision mechanical servicing. We drain engine oil, replace OEM filters, tune the throttle body, and tighten bolts using calibrated torque wrenches.",
    checklist: [
      "Synthetic engine oil drain & OEM filter renewal",
      "Drive chain ultrasonic scrub, tensioning & lube",
      "Throttle body & fuel injector ultrasonic tune",
      "Calibrated torque tightening to manufacturer spec",
    ],
    status: "Hydraulic Lift Bay: Servicing in Progress",
  },
  {
    id: "washing",
    step: 4,
    name: "Washing & Detailing",
    title: "Snow Foam Bath & Ceramic Detailing",
    environment: "Hex-Light Detailing Studio",
    time: "30 - 45 Mins",
    icon: Sparkles,
    summary:
      "In our dedicated wash studio, road dirt and chain grease are dissolved with high-pressure snow foam. The bike is blow-dried and treated with ceramic mirror-shine wax for long-lasting paint protection.",
    checklist: [
      "pH-neutral high-pressure snow foam shampoo bath",
      "Deep degreasing of engine bay, swingarm & sprocket",
      "Warm air blow-dry to protect electronics",
      "Ceramic gloss wax polish & hydrophobic rain coat",
    ],
    status: "Wash Bay: Snow Foam & Mirror Polish Active",
  },
  {
    id: "delivery",
    step: 5,
    name: "Delivery",
    title: "Quality Inspection & Client Delivery",
    environment: "VIP Handover & Delivery Suite",
    time: "Same-Day Handover",
    icon: Bike,
    summary:
      "A senior supervisor conducts final verification, certifying throttle smoothness, braking stability, and steering alignment before handing over the keys along with a warranty certificate.",
    checklist: [
      "Final quality inspection & supervisor approval",
      "Digital job card sign-off & invoice WhatsApped",
      "Workshop warranty certificate issued",
      "Ready for client pickup or doorstep delivery",
    ],
    status: "Delivery Suite: 100% Certified & Ready for Pickup 🏁",
  },
];

export function ServiceProcessAnimation() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-advance through stages
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % STAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const current = STAGES[activeStage];

  return (
    <div className="w-full">
      {/* 5-Step Process Timeline Selector */}
      <div className="mb-8">
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-5 sm:gap-3">
          {STAGES.map((stage, idx) => {
            const isActive = activeStage === idx;
            const isCompleted = activeStage > idx;
            const Icon = stage.icon;

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => {
                  setActiveStage(idx);
                  setIsPlaying(false);
                }}
                className={`relative flex items-center gap-3 rounded-xl border p-3.5 text-left transition-all duration-300 focus:outline-none ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-sm ring-2 ring-primary/20"
                    : isCompleted
                    ? "border-primary/40 bg-primary/5 text-foreground hover:border-primary"
                    : "border-border/80 bg-card text-muted-foreground hover:border-border hover:text-foreground"
                }`}
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : isCompleted
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div
                    className={`text-[11px] font-bold uppercase tracking-wider ${
                      isActive ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    Stage 0{stage.step}
                  </div>
                  <div
                    className={`truncate text-sm font-extrabold ${
                      isActive ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {stage.name}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Container: Seamlessly blends into page background & theme */}
      <div className="rounded-3xl border border-border/70 bg-card/60 backdrop-blur-xs p-5 sm:p-8 transition-colors duration-200">
        {/* Stage Header Info Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-border/70">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary"></span>
            </span>
            <span className="text-muted-foreground font-semibold uppercase tracking-wider text-xs">
              Stage {current.step} of 5:
            </span>
            <span className="text-foreground font-extrabold text-sm sm:text-base">{current.name}</span>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted border border-border/80 text-foreground text-[11px] font-bold">
              📍 {current.environment}
            </span>
            <span className="flex items-center gap-1.5 text-foreground font-bold">
              <Clock className="h-3.5 w-3.5 text-primary" />
              {current.time}
            </span>
          </div>
        </div>

        {/* Seamless Animation Canvas (Transparent background blending with theme) */}
        <div className="relative w-full flex items-center justify-center py-4 sm:py-6">
          <svg
            viewBox="0 0 680 320"
            className="w-full h-auto max-h-[360px] select-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Dynamic Laser Beam matching active theme's primary color */}
              <linearGradient id="laserBeamLight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0" />
                <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
              </linearGradient>

              {/* Headlight beam */}
              <linearGradient id="headlightBeamLight" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="35%" stopColor="#fef08a" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>

              {/* Snow Foam Spray */}
              <linearGradient id="foamSpray" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
              </linearGradient>

              {/* Synthetic Oil Stream */}
              <linearGradient id="oilStream" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="1" />
              </linearGradient>

              {/* Detailing Hexagon Grid Pattern */}
              <pattern id="themeHexGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M 20 0 L 40 11.5 L 40 34.5 L 20 46 L 0 34.5 L 0 11.5 Z"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="1.2"
                  strokeOpacity="0.15"
                />
              </pattern>

              {/* Realistic Motorcycle Shaders & Gradients */}
              <linearGradient id="forkGold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d97706" />
                <stop offset="35%" stopColor="#fef08a" />
                <stop offset="65%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>

              <linearGradient id="chromeShine" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="30%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#94a3b8" />
                <stop offset="70%" stopColor="#f1f5f9" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>

              <linearGradient id="exhaustHeat" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#cbd5e1" />
                <stop offset="30%" stopColor="#fbbf24" />
                <stop offset="55%" stopColor="#60a5fa" />
                <stop offset="75%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>

              <linearGradient id="tireRubber" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2e2e36" />
                <stop offset="50%" stopColor="#1a1a1e" />
                <stop offset="100%" stopColor="#111114" />
              </linearGradient>

              <linearGradient id="metalDisc" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e2e8f0" />
                <stop offset="50%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#cbd5e1" />
              </linearGradient>
            </defs>

            {/* Ground Baseline (Clean, theme-blended floor horizon) */}
            <line
              x1="30"
              y1="250"
              x2="650"
              y2="250"
              stroke="var(--color-border)"
              strokeWidth="1.5"
            />

            {/* =========================================================================
                ENVIRONMENT ACCENTS LAYER (Seamless & Theme-Synchronized)
                ========================================================================= */}

            {/* =========================================================================
                ENVIRONMENT ACCENTS LAYER (100% Visual Storytelling, Zero Shabby Labels)
                ========================================================================= */}

            {/* 1. HANDOVER ENVIRONMENT (Check-in Kiosk, Floor Demarcations, Smart Key Tray) */}
            {current.id === "handover" && (
              <g className="transition-opacity duration-700">
                {/* Ceiling Intake Architectural Lighting Track */}
                <line x1="25" y1="12" x2="655" y2="12" stroke="var(--color-border)" strokeWidth="2" />
                <rect x="45" y="8" width="22" height="7" rx="2" fill="var(--color-primary)" opacity="0.8" />
                <polygon points="45,15 15,85 97,85 67,15" fill="var(--color-primary)" opacity="0.06" />

                {/* Digital Intake Terminal / Check-in Kiosk (Left Margin, x=20..75) */}
                <rect x="22" y="246" width="46" height="5" rx="2" fill="var(--color-foreground)" opacity="0.85" />
                <rect x="41" y="135" width="8" height="112" rx="2" fill="var(--color-muted-foreground)" opacity="0.7" />
                {/* Terminal Screen & Display */}
                <rect x="18" y="88" width="54" height="48" rx="6" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1.5" />
                <rect x="22" y="92" width="46" height="40" rx="4" fill="var(--color-muted)" opacity="0.45" />
                {/* Graphical Digital Checklist on Terminal (Clipboard document with checkmarks) */}
                <rect x="27" y="98" width="8" height="3" rx="1" fill="var(--color-primary)" />
                <line x1="39" y1="100" x2="62" y2="100" stroke="var(--color-muted-foreground)" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
                {/* Checkmark 1 */}
                <path d="M 28 108 L 30 110 L 34 106" fill="none" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="38" y1="108" x2="60" y2="108" stroke="var(--color-foreground)" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
                {/* Checkmark 2 */}
                <path d="M 28 116 L 30 118 L 34 114" fill="none" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="38" y1="116" x2="56" y2="116" stroke="var(--color-foreground)" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
                {/* Checkmark 3 */}
                <path d="M 28 124 L 30 126 L 34 122" fill="none" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="38" y1="124" x2="52" y2="124" stroke="var(--color-foreground)" strokeWidth="2" strokeLinecap="round" opacity="0.75" />

                {/* Floor Registration Dock Markings (Below baseline y=250) */}
                <rect
                  x="105"
                  y="254"
                  width="470"
                  height="36"
                  rx="6"
                  fill="none"
                  stroke="var(--color-border)"
                  strokeWidth="1.5"
                  strokeDasharray="8 6"
                />
                {/* Corner Guide Brackets */}
                <path d="M 112 266 L 112 258 L 120 258" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" />
                <path d="M 568 266 L 568 258 L 560 258" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" />
                <path d="M 112 278 L 112 286 L 120 286" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" />
                <path d="M 568 278 L 568 286 L 560 286" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" />
                {/* Direction Chevrons into Intake Bay */}
                <path d="M 325 268 L 340 273 L 355 268" fill="none" stroke="var(--color-muted-foreground)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                <path d="M 325 274 L 340 279 L 355 274" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" opacity="0.7" />

                {/* Smart Key Handover Pedestal (Right Margin, x=605..645) */}
                <g transform="translate(620, 165)">
                  {/* Base plate */}
                  <rect x="-18" y="82" width="36" height="4" rx="2" fill="var(--color-foreground)" opacity="0.8" />
                  {/* Chrome Pillar */}
                  <line x1="0" y1="0" x2="0" y2="82" stroke="var(--color-muted-foreground)" strokeWidth="4" />
                  {/* Handover Tray */}
                  <ellipse cx="0" cy="0" rx="22" ry="7" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1.5" />
                  <ellipse cx="0" cy="-2" rx="16" ry="5" fill="var(--color-primary)" opacity="0.2" />
                  {/* Smart Key Fob Icon on Tray */}
                  <circle cx="0" cy="-14" r="18" fill="var(--color-primary)" opacity="0.12">
                    <animate attributeName="r" values="14;22;14" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="0" cy="-2" r="9" fill="var(--color-card)" stroke="var(--color-primary)" strokeWidth="1.8" />
                  <path
                    d="M -3 -4 C -5 -4 -6 -2 -6 0 C -6 3 -4 4 -2 4 L 4 4 L 4 1 L 6 1 L 6 -1 L 4 -1 L 4 -3 C 4 -3 2 -4 -3 -4 Z"
                    fill="var(--color-primary)"
                  />
                  <circle cx="-3" cy="0" r="1.5" fill="var(--color-background)" />
                </g>
              </g>
            )}

            {/* 2. INSPECTION ENVIRONMENT (Diagnostic Sensor Gantry, Live Oscilloscope Waveform, Alignment Towers) */}
            {current.id === "inspection" && (
              <g className="transition-opacity duration-700">
                {/* Overhead Diagnostic Gantry Rail */}
                <line x1="20" y1="12" x2="660" y2="12" stroke="var(--color-border)" strokeWidth="2.5" />
                {/* Motorized Diagnostic Laser Scanner Head (Sweeping back and forth) */}
                <g>
                  <rect x="210" y="7" width="40" height="9" rx="2.5" fill="var(--color-primary)">
                    <animate attributeName="x" values="210; 450; 210" dur="2.8s" repeatCount="indefinite" />
                  </rect>
                  {/* Laser Emitter Diodes */}
                  <circle cx="220" cy="16" r="2" fill="#ffffff">
                    <animate attributeName="cx" values="220; 460; 220" dur="2.8s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="240" cy="16" r="2" fill="#ffffff">
                    <animate attributeName="cx" values="240; 480; 240" dur="2.8s" repeatCount="indefinite" />
                  </circle>
                  {/* Laser Scanning Cone Beam */}
                  <polygon points="215,16 195,140 265,140 245,16" fill="url(#laserBeamLight)">
                    <animate attributeName="points" values="215,16 195,140 265,140 245,16; 455,16 435,140 505,140 485,16; 215,16 195,140 265,140 245,16" dur="2.8s" repeatCount="indefinite" />
                  </polygon>
                </g>

                {/* Mobile Diagnostic Workstation Cart (Left Margin, x=16..84) */}
                <g transform="translate(18, 115)">
                  {/* Cart Frame & Shelves */}
                  <rect x="0" y="127" width="66" height="5" rx="2" fill="var(--color-foreground)" opacity="0.8" />
                  <line x1="5" y1="0" x2="5" y2="127" stroke="var(--color-muted-foreground)" strokeWidth="3" />
                  <line x1="61" y1="0" x2="61" y2="127" stroke="var(--color-muted-foreground)" strokeWidth="3" />
                  {/* Middle Shelf */}
                  <rect x="5" y="70" width="56" height="4" fill="var(--color-border)" />
                  {/* Caster Wheels */}
                  <circle cx="10" cy="132" r="3.5" fill="var(--color-muted-foreground)" />
                  <circle cx="56" cy="132" r="3.5" fill="var(--color-muted-foreground)" />

                  {/* Oscilloscope Diagnostic Monitor (Top Shelf) */}
                  <rect x="3" y="2" width="60" height="48" rx="5" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1.5" />
                  <rect x="6" y="5" width="54" height="42" rx="3" fill="#090d16" />
                  {/* Oscilloscope Grid Lines */}
                  <line x1="6" y1="26" x2="60" y2="26" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="33" y1="5" x2="33" y2="47" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />
                  {/* Animated Heartbeat / Sensor Waveform */}
                  <path
                    d="M 6 26 L 16 26 L 20 16 L 24 36 L 28 20 L 32 30 L 36 26 L 60 26"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    <animate
                      attributeName="d"
                      values="M 6 26 L 16 26 L 20 16 L 24 36 L 28 20 L 32 30 L 36 26 L 60 26;
                              M 6 26 L 22 26 L 26 14 L 30 38 L 34 18 L 38 32 L 42 26 L 60 26;
                              M 6 26 L 16 26 L 20 16 L 24 36 L 28 20 L 32 30 L 36 26 L 60 26"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </path>

                  {/* Diagnostic LED Bank & System Pass Diodes (Middle Tier) */}
                  <rect x="8" y="54" width="50" height="12" rx="3" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1" />
                  <circle cx="15" cy="60" r="2.5" fill="#22c55e" />
                  <circle cx="23" cy="60" r="2.5" fill="#22c55e" />
                  <circle cx="31" cy="60" r="2.5" fill="#22c55e" />
                  <circle cx="39" cy="60" r="2.5" fill="var(--color-primary)" />
                  <circle cx="47" cy="60" r="2.5" fill="#38bdf8">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
                  </circle>

                  {/* Heavy-Duty Diagnostic Cable Loom Running to Chassis */}
                  <path
                    d="M 61 66 C 75 75, 78 105, 95 110"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                  <path
                    d="M 61 70 C 80 82, 85 112, 102 118"
                    fill="none"
                    stroke="var(--color-foreground)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </g>

                {/* Laser Alignment Tower (Right Margin, x=605..645) */}
                <g transform="translate(615, 120)">
                  <rect x="-12" y="127" width="24" height="4" rx="2" fill="var(--color-foreground)" opacity="0.8" />
                  <rect x="-3" y="0" width="6" height="127" fill="var(--color-muted-foreground)" opacity="0.7" />
                  {/* Optical Alignment Head targeting front rotor */}
                  <rect x="-14" y="20" width="28" height="24" rx="4" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1.5" />
                  <circle cx="-1" cy="32" r="5" fill="#22c55e" opacity="0.9" />
                  <line x1="-14" y1="32" x2="-45" y2="32" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4 2">
                    <animate attributeName="stroke-dashoffset" values="0;-12" dur="0.8s" repeatCount="indefinite" />
                  </line>
                </g>

                {/* Floor Optical Crosshair Targets under wheel centers */}
                <g opacity="0.6">
                  <circle cx="190" cy="265" r="14" fill="none" stroke="var(--color-primary)" strokeWidth="1.2" strokeDasharray="3 3" />
                  <line x1="172" y1="265" x2="208" y2="265" stroke="var(--color-primary)" strokeWidth="1.2" />
                  <line x1="190" y1="247" x2="190" y2="283" stroke="var(--color-primary)" strokeWidth="1.2" />

                  <circle cx="505" cy="265" r="14" fill="none" stroke="var(--color-primary)" strokeWidth="1.2" strokeDasharray="3 3" />
                  <line x1="487" y1="265" x2="523" y2="265" stroke="var(--color-primary)" strokeWidth="1.2" />
                  <line x1="505" y1="247" x2="505" y2="283" stroke="var(--color-primary)" strokeWidth="1.2" />
                </g>
              </g>
            )}

            {/* 3. REPAIR WORK ENVIRONMENT (Hydraulic Scissor Lift, Rolling Tool Chest, Articulated Lamp, Oil Catch Pan) */}
            {current.id === "repair" && (
              <g className="transition-opacity duration-700">
                {/* Articulated Overhead Workshop Work Light shining directly on engine bay */}
                <g>
                  <circle cx="260" cy="12" r="4" fill="var(--color-foreground)" />
                  <line x1="260" y1="12" x2="295" y2="45" stroke="var(--color-foreground)" strokeWidth="3.5" strokeLinecap="round" />
                  <circle cx="295" cy="45" r="3.5" fill="var(--color-primary)" />
                  <line x1="295" y1="45" x2="330" y2="65" stroke="var(--color-foreground)" strokeWidth="3" strokeLinecap="round" />
                  {/* Lamp Cone Hood */}
                  <polygon points="325,58 340,68 335,78" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1.5" />
                  {/* Downward Inspection Task Beam onto engine */}
                  <polygon points="338,73 305,175 385,175 330,73" fill="var(--color-primary)" opacity="0.12" />
                </g>

                {/* Mechanic Rolling Multi-Drawer Tool Cabinet (Left Margin, x=16..80) */}
                <g transform="translate(16, 110)">
                  <rect x="0" y="0" width="64" height="126" rx="5" fill="var(--color-primary)" stroke="var(--color-border)" strokeWidth="1.5" />
                  {/* Top Work Mat with Tool Silhouettes */}
                  <rect x="3" y="4" width="58" height="10" rx="2" fill="var(--color-foreground)" opacity="0.85" />
                  {/* Silhouette Wrench on Top Tray */}
                  <line x1="12" y1="9" x2="38" y2="9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="9" r="2.5" fill="none" stroke="#ffffff" strokeWidth="1.5" />
                  {/* Sliding Tool Drawers with Aluminum Handles */}
                  {[18, 33, 48, 63, 80, 100].map((yOffset, idx) => (
                    <g key={`drawer-${idx}`}>
                      <rect x="3" y={yOffset} width="58" height={idx >= 4 ? 16 : 12} rx="2" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1" />
                      <line x1="18" y1={yOffset + (idx >= 4 ? 8 : 6)} x2="46" y2={yOffset + (idx >= 4 ? 8 : 6)} stroke="var(--color-muted-foreground)" strokeWidth="2.2" strokeLinecap="round" />
                    </g>
                  ))}
                  {/* Heavy-Duty Caster Wheels */}
                  <circle cx="10" cy="130" r="4" fill="var(--color-foreground)" opacity="0.75" />
                  <circle cx="54" cy="130" r="4" fill="var(--color-foreground)" opacity="0.75" />
                </g>

                {/* Fluid Staging Drum & Service Supplies Stand (Right Margin, x=595..655) */}
                <g transform="translate(598, 128)">
                  <rect x="0" y="0" width="58" height="108" rx="6" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1.5" />
                  {/* Metal Drum Ribs */}
                  <line x1="0" y1="36" x2="58" y2="36" stroke="var(--color-border)" strokeWidth="1.5" />
                  <line x1="0" y1="72" x2="58" y2="72" stroke="var(--color-border)" strokeWidth="1.5" />
                  {/* Pressure Dial Gauge */}
                  <circle cx="29" cy="18" r="10" fill="var(--color-background)" stroke="var(--color-border)" strokeWidth="1.2" />
                  <line x1="29" y1="18" x2="34" y2="13" stroke="var(--color-primary)" strokeWidth="1.8" strokeLinecap="round" />
                  {/* OEM Synthetic Oil Bottle Silhouette on Shelf */}
                  <g transform="translate(18, 44)">
                    <rect x="4" y="0" width="14" height="20" rx="3" fill="#f59e0b" opacity="0.9" />
                    <rect x="7" y="-4" width="8" height="4" rx="1" fill="var(--color-foreground)" />
                    <circle cx="11" cy="10" r="2.5" fill="#ffffff" />
                  </g>
                  {/* OEM Oil Filter Silhouette */}
                  <g transform="translate(16, 78)">
                    <rect x="4" y="4" width="18" height="20" rx="3" fill="var(--color-foreground)" opacity="0.8" />
                    <circle cx="13" cy="14" r="4" fill="var(--color-primary)" opacity="0.9" />
                  </g>
                </g>

                {/* HYDRAULIC MOTORCYCLE LIFT (Bike is elevated on this platform) */}
                <g transform="translate(125, 248)">
                  {/* Heavy-duty steel lift deck */}
                  <rect x="0" y="0" width="430" height="10" rx="3" fill="var(--color-foreground)" opacity="0.9" />
                  {/* Platform Hazard Stripes */}
                  <g opacity="0.95">
                    <polygon points="12,0 22,0 14,10 4,10" fill="#eab308" />
                    <polygon points="32,0 42,0 34,10 24,10" fill="#eab308" />
                    <polygon points="52,0 62,0 54,10 44,10" fill="#eab308" />
                    <polygon points="375,0 385,0 377,10 367,10" fill="#eab308" />
                    <polygon points="395,0 405,0 397,10 387,10" fill="#eab308" />
                    <polygon points="415,0 425,0 417,10 407,10" fill="#eab308" />
                  </g>

                  {/* Scissor Lift Linkage Arms (Strictly beneath platform deck) */}
                  <line x1="90" y1="10" x2="160" y2="44" stroke="var(--color-muted-foreground)" strokeWidth="6" strokeLinecap="round" />
                  <line x1="160" y1="10" x2="90" y2="44" stroke="var(--color-muted-foreground)" strokeWidth="6" strokeLinecap="round" />
                  <line x1="270" y1="10" x2="340" y2="44" stroke="var(--color-muted-foreground)" strokeWidth="6" strokeLinecap="round" />
                  <line x1="340" y1="10" x2="270" y2="44" stroke="var(--color-muted-foreground)" strokeWidth="6" strokeLinecap="round" />
                  {/* Center Hydraulic Ram */}
                  <rect x="200" y="10" width="30" height="28" fill="var(--color-muted-foreground)" opacity="0.85" />
                  <rect x="208" y="20" width="14" height="18" fill="var(--color-card)" />
                  {/* Bottom Floor Plate */}
                  <rect x="40" y="42" width="350" height="8" rx="2" fill="var(--color-foreground)" opacity="0.88" />
                </g>

                {/* Crankcase Oil Drain Catch Pan & Animated Oil Stream */}
                <g transform="translate(325, 260)">
                  <polygon points="0,14 42,14 36,0 6,0" fill="var(--color-foreground)" opacity="0.9" />
                  <rect x="8" y="3" width="26" height="8" rx="2" fill="#d97706" opacity="0.95" />
                  {/* Amber Oil Drops from Engine into Pan */}
                  <circle cx="21" cy="-14" r="2.5" fill="#f59e0b">
                    <animate attributeName="cy" values="-14;0" dur="0.9s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0" dur="0.9s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="21" cy="-7" r="2" fill="#d97706">
                    <animate attributeName="cy" values="-7;4" dur="0.9s" begin="0.45s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0" dur="0.9s" begin="0.45s" repeatCount="indefinite" />
                  </circle>
                </g>
              </g>
            )}

            {/* 4. WASHING & DETAILING ENVIRONMENT (Hex Studio Canopy, Drainage Grates, Foam Lance, Suds & Sparkles) */}
            {current.id === "washing" && (
              <g className="transition-opacity duration-700">
                {/* Ceiling Lighting Track & Hex Studio Canopy */}
                <line x1="25" y1="8" x2="655" y2="8" stroke="var(--color-border)" strokeWidth="2" />
                {/* Left Hex Canopy */}
                <g opacity="0.65">
                  <polygon points="50,16 68,6 86,16 86,30 68,40 50,30" fill="none" stroke="var(--color-primary)" strokeWidth="1.8" />
                  <polygon points="105,16 123,6 141,16 141,30 123,40 105,30" fill="none" stroke="var(--color-primary)" strokeWidth="1.8" />
                </g>
                {/* Right Hex Canopy */}
                <g opacity="0.65">
                  <polygon points="535,16 553,6 571,16 571,30 553,40 535,30" fill="none" stroke="var(--color-primary)" strokeWidth="1.8" />
                  <polygon points="590,16 608,6 626,16 626,30 608,40 590,30" fill="none" stroke="var(--color-primary)" strokeWidth="1.8" />
                </g>

                {/* Wash Floor Grate with Drainage Slats (Below baseline y=250) */}
                <rect x="130" y="252" width="420" height="26" rx="3" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1.5" />
                <g stroke="var(--color-muted-foreground)" opacity="0.6" strokeWidth="2">
                  {[150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480, 510, 530].map((xPos) => (
                    <line key={`grate-${xPos}`} x1={xPos} y1="256" x2={xPos} y2="274" />
                  ))}
                </g>

                {/* High-Pressure Snow Foam Lance (Right Margin, Sprays Downward at Floor) */}
                <g transform="translate(605, 80)">
                  <line x1="35" y1="-20" x2="0" y2="0" stroke="var(--color-foreground)" strokeWidth="4.5" strokeLinecap="round" opacity="0.8" />
                  <circle cx="0" cy="0" r="4.5" fill="var(--color-primary)" />
                  {/* Downward Spray Cone (Directly to wash grate, clear of motorcycle silhouette) */}
                  <polygon points="0,0 -40,110 -10,120" fill="url(#foamSpray)">
                    <animate attributeName="opacity" values="0.35;0.75;0.35" dur="1.8s" repeatCount="indefinite" />
                  </polygon>
                </g>

                {/* Floating Iridescent Detailing Suds & Bubbles (Confined strictly to margins and floor) */}
                <circle cx="50" cy="160" r="9" fill="#e0f2fe" opacity="0.6" stroke="var(--color-primary)" strokeWidth="1">
                  <animate attributeName="cy" values="165;145;165" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="75" cy="205" r="7" fill="#e0f2fe" opacity="0.5" stroke="var(--color-primary)" strokeWidth="1">
                  <animate attributeName="cy" values="210;190;210" dur="2.7s" repeatCount="indefinite" />
                </circle>
                <circle cx="590" cy="180" r="10" fill="#e0f2fe" opacity="0.6" stroke="var(--color-primary)" strokeWidth="1">
                  <animate attributeName="cy" values="185;165;185" dur="2.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="620" cy="215" r="8" fill="#e0f2fe" opacity="0.55" stroke="var(--color-primary)" strokeWidth="1">
                  <animate attributeName="cy" values="220;200;220" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="180" cy="262" r="5" fill="#e0f2fe" opacity="0.7" stroke="var(--color-primary)" strokeWidth="0.8" />
                <circle cx="490" cy="262" r="6" fill="#e0f2fe" opacity="0.7" stroke="var(--color-primary)" strokeWidth="0.8" />

                {/* Ceramic Gloss Sparkle Stars */}
                <g fill="#ffffff" opacity="0.8">
                  <path d="M 230 145 Q 235 145 235 140 Q 235 145 240 145 Q 235 145 235 150 Q 235 145 230 145 Z">
                    <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
                  </path>
                  <path d="M 460 120 Q 464 120 464 116 Q 464 120 468 120 Q 464 120 464 124 Q 464 120 460 120 Z">
                    <animate attributeName="opacity" values="0.8;0.1;0.8" dur="2.4s" repeatCount="indefinite" />
                  </path>
                </g>
              </g>
            )}

            {/* 5. DELIVERY ENVIRONMENT (Luxury Showroom Presentation Pedestal, Spotlights, Velvet VIP Stanchions) */}
            {current.id === "delivery" && (
              <g className="transition-opacity duration-700">
                {/* Overhead Presentation Spotlight Track */}
                <line x1="25" y1="12" x2="655" y2="12" stroke="var(--color-border)" strokeWidth="2.5" />
                {/* Dual Focused Presentation Spotlights (Illuminating the bike dramatically from ceiling) */}
                <g>
                  {/* Left Spotlight */}
                  <rect x="70" y="8" width="24" height="8" rx="2" fill="var(--color-primary)" />
                  <polygon points="70,16 110,248 240,248 94,16" fill="var(--color-primary)" opacity="0.08" />
                  {/* Right Spotlight */}
                  <rect x="586" y="8" width="24" height="8" rx="2" fill="var(--color-primary)" />
                  <polygon points="586,16 440,248 570,248 610,16" fill="var(--color-primary)" opacity="0.08" />
                </g>

                {/* Showroom Presentation Turntable / Ground Platform (Below baseline y=250) */}
                <ellipse cx="340" cy="264" rx="245" ry="16" fill="var(--color-card)" stroke="var(--color-border)" strokeWidth="1.5" />
                <ellipse cx="340" cy="264" rx="235" ry="12" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" opacity="0.5" />
                {/* Ambient Floor Glow Accent */}
                <ellipse cx="340" cy="264" rx="215" ry="8" fill="var(--color-primary)" opacity="0.08" />

                {/* Left VIP Stanchion Post & Velvet Rope (Strictly at Left Boundary x=35..45) */}
                <g transform="translate(40, 160)">
                  {/* Heavy Brass/Chrome Base */}
                  <ellipse cx="0" cy="88" rx="14" ry="4" fill="var(--color-foreground)" opacity="0.8" />
                  {/* Stanchion Post */}
                  <line x1="0" y1="0" x2="0" y2="88" stroke="var(--color-foreground)" strokeWidth="4.5" />
                  {/* Spherical Finial */}
                  <circle cx="0" cy="-4" r="5" fill="var(--color-primary)" />
                  {/* Velvet Rope Swag Dropping Gracefully into Margin */}
                  <path
                    d="M 0 6 C -15 25, -25 45, -35 50"
                    fill="none"
                    stroke="#dc2626"
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.9"
                  />
                  {/* Velvet Rope Swag Draped Right */}
                  <path
                    d="M 0 6 C 25 35, 45 42, 60 45"
                    fill="none"
                    stroke="#dc2626"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    opacity="0.75"
                  />
                </g>

                {/* Right VIP Stanchion Post & Velvet Rope (Strictly at Right Boundary x=635..645) */}
                <g transform="translate(638, 160)">
                  {/* Heavy Base */}
                  <ellipse cx="0" cy="88" rx="14" ry="4" fill="var(--color-foreground)" opacity="0.8" />
                  {/* Stanchion Post */}
                  <line x1="0" y1="0" x2="0" y2="88" stroke="var(--color-foreground)" strokeWidth="4.5" />
                  {/* Spherical Finial */}
                  <circle cx="0" cy="-4" r="5" fill="var(--color-primary)" />
                  {/* Velvet Rope Swag */}
                  <path
                    d="M 0 6 C -25 35, -45 42, -60 45"
                    fill="none"
                    stroke="#dc2626"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    opacity="0.75"
                  />
                </g>

                {/* Key Presentation Pedestal on Side (Right Margin x=585..625) */}
                <g transform="translate(605, 172)">
                  <rect x="-14" y="75" width="28" height="4" rx="2" fill="var(--color-foreground)" opacity="0.8" />
                  <line x1="0" y1="0" x2="0" y2="75" stroke="var(--color-muted-foreground)" strokeWidth="4" />
                  {/* Presentation Cushion Top */}
                  <ellipse cx="0" cy="0" rx="18" ry="7" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
                  {/* Key Fob on Cushion */}
                  <ellipse cx="0" cy="-2" rx="7" ry="3.5" fill="var(--color-card)" stroke="var(--color-primary)" strokeWidth="1.5" />
                  <circle cx="5" cy="-2" r="2.5" fill="none" stroke="#eab308" strokeWidth="1" />
                  {/* Delivery Ready Star Halo */}
                  <circle cx="0" cy="-12" r="16" fill="var(--color-primary)" opacity="0.1">
                    <animate attributeName="r" values="12;20;12" dur="2.2s" repeatCount="indefinite" />
                  </circle>
                </g>

                {/* Pristine Showroom Polish Sparkle Glints */}
                <g fill="#ffffff" opacity="0.85">
                  <path d="M 210 130 Q 215 130 215 125 Q 215 130 220 130 Q 215 130 215 135 Q 215 130 210 130 Z">
                    <animate attributeName="opacity" values="0.2;1;0.2" dur="1.8s" repeatCount="indefinite" />
                  </path>
                  <path d="M 445 105 Q 450 105 450 100 Q 450 105 455 105 Q 450 105 450 110 Q 450 105 445 105 Z">
                    <animate attributeName="opacity" values="1;0.2;1" dur="2.2s" repeatCount="indefinite" />
                  </path>
                  <path d="M 525 210 Q 529 210 529 206 Q 529 210 533 210 Q 529 210 529 214 Q 529 210 525 210 Z">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                  </path>
                </g>
              </g>
            )}

            {/* =========================================================================
                THE REALISTIC SUPERBIKE SILHOUETTE (Dynamically Themed)
                ========================================================================= */}
            <RealisticSuperbike
              isRepairing={current.id === "repair"}
              isDelivering={false}
              isMoving={false}
            />
          </svg>
        </div>

        {/* Bottom Interactive Playback Controls Bar */}
        <div className="flex items-center justify-between pt-4 border-t border-border/70">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs font-bold text-foreground">
              {current.status}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setActiveStage((prev) => (prev - 1 + STAGES.length) % STAGES.length);
                setIsPlaying(false);
              }}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors shadow-2xs"
              title="Previous Stage"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex h-8 px-3 items-center gap-1.5 rounded-lg border border-border bg-background text-xs font-bold text-foreground hover:border-primary/50 transition-colors shadow-2xs"
              title={isPlaying ? "Pause Tour" : "Auto Play"}
            >
              {isPlaying ? (
                <>
                  <Pause className="h-3.5 w-3.5" /> Pause
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5" /> Play
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveStage((prev) => (prev + 1) % STAGES.length);
                setIsPlaying(false);
              }}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors shadow-2xs"
              title="Next Stage"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Detailed Stage Content & Actions */}
        <div className="mt-8 pt-8 border-t border-border/70">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left Detail Text & Checklist */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-black text-sm">
                  0{current.step}
                </span>
                <h3 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                  {current.title}
                </h3>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed">
                {current.summary}
              </p>

              {/* Checklist Grid */}
              <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                {current.checklist.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-sm font-semibold text-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-4 flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
              <div className="w-full rounded-2xl border border-border bg-muted/30 p-5 space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Workshop Location
                </div>
                <div className="text-sm font-black text-foreground">
                  📍 {current.environment}
                </div>
                <div className="text-xs text-muted-foreground leading-relaxed">
                  Every stage is monitored and recorded under our certified workshop service protocol.
                </div>
              </div>

              <a href="#book-service" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto h-11 px-6 text-sm font-bold shadow-xs">
                  Book Your Service Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
