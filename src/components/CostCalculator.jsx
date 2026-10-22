"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Calculator,
  Check,
  ChevronRight,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";

const VEHICLE_TYPES = [
  {
    id: "scooter-commuter",
    name: "Scooter & Commuter",
    cc: "100cc - 125cc",
    example: "Activa, Jupiter, Splendor, Shine",
    basePrice: 349,
  },
  {
    id: "street-sports",
    name: "Street & Sports",
    cc: "150cc - 200cc",
    example: "Pulsar, Apache RTR, FZ, MT-15",
    basePrice: 549,
  },
  {
    id: "cruiser-adv",
    name: "Cruiser & ADV",
    cc: "250cc - 400cc",
    example: "Royal Enfield, Himalayan, Duke 390, Dominar",
    basePrice: 849,
  },
  {
    id: "superbike",
    name: "Multi-Cyl / Superbike",
    cc: "500cc+",
    example: "Ninja 650, Street Triple, Tiger, Harley",
    basePrice: 1499,
  },
];

const SERVICE_TIERS = [
  {
    id: "inspection",
    name: "Quick Safety Inspection",
    desc: "15-point check, chain adjustment, brake check & tyre pressure",
    price: 299,
  },
  {
    id: "standard",
    name: "Standard Periodic Service",
    desc: "30-point check, oil filter change, spark plug service, carb/FI tune",
    price: 699,
    popular: true,
  },
  {
    id: "master",
    name: "Master Performance Overhaul",
    desc: "Complete teardown inspection, throttle body cleaning, valve lash check",
    price: 1399,
  },
];

const ADDONS = [
  {
    id: "synthetic-oil",
    name: "Fully Synthetic Engine Oil Upgrade",
    desc: "Motul / Castrol Racing 10W-40 or 15W-50",
    price: 490,
  },
  {
    id: "chain-care",
    name: "Drive Chain Ultrasonic Clean & O-Ring Lube",
    desc: "Removes road grime, reduces friction & sprocket wear",
    price: 220,
  },
  {
    id: "foam-wax",
    name: "Snow Foam Wash + Teflon/Ceramic Wax Coat",
    desc: "High-gloss protective mirror finish",
    price: 350,
  },
  {
    id: "brake-pad",
    name: "Brake Caliper De-glaze & Pad Service",
    desc: "Enhanced bite and fade resistance",
    price: 280,
  },
  {
    id: "fork-oil",
    name: "Front Suspension Fork Oil Service",
    desc: "Smooth damping and seal inspection",
    price: 550,
  },
];

export function CostCalculator() {
  const [selectedVehicle, setSelectedVehicle] = useState(VEHICLE_TYPES[1].id);
  const [selectedTier, setSelectedTier] = useState(SERVICE_TIERS[1].id);
  const [selectedAddons, setSelectedAddons] = useState([
    "synthetic-oil",
    "chain-care",
  ]);

  const toggleAddon = (addonId) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId)
        ? prev.filter((id) => id !== addonId)
        : [...prev, addonId]
    );
  };

  const currentVehicle =
    VEHICLE_TYPES.find((v) => v.id === selectedVehicle) || VEHICLE_TYPES[0];
  const currentTier =
    SERVICE_TIERS.find((t) => t.id === selectedTier) || SERVICE_TIERS[0];

  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const item = ADDONS.find((a) => a.id === addonId);
    return sum + (item ? item.price : 0);
  }, 0);

  const calculatedTotal =
    currentVehicle.basePrice + currentTier.price + addonsTotal;

  const resetCalculator = () => {
    setSelectedVehicle(VEHICLE_TYPES[1].id);
    setSelectedTier(SERVICE_TIERS[1].id);
    setSelectedAddons(["synthetic-oil", "chain-care"]);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
        {/* Left Column: Interactive Options */}
        <div className="space-y-9 lg:col-span-7">
          {/* 1. Vehicle Selection */}
          <div>
            <div className="mb-3.5 flex items-center justify-between">
              <label className="text-sm font-extrabold uppercase tracking-wider text-muted-foreground">
                Step 1: Choose Your Two-Wheeler Category
              </label>
              <span className="text-xs sm:text-sm font-semibold text-muted-foreground">
                Base Fee applies
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {VEHICLE_TYPES.map((v) => {
                const isSelected = selectedVehicle === v.id;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedVehicle(v.id)}
                    className={`flex flex-col justify-between rounded-xl border p-5 text-left transition-all ${
                      isSelected
                        ? "border-primary bg-primary/5 shadow-xs ring-2 ring-primary"
                        : "border-border bg-card hover:border-primary/50 hover:bg-muted/40"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-extrabold text-base text-foreground">
                          {v.name}
                        </span>
                        <Badge
                          variant="outline"
                          className={
                            isSelected
                              ? "border-primary/40 bg-primary/10 text-primary text-xs font-bold"
                              : "text-xs font-semibold text-muted-foreground"
                          }
                        >
                          {v.cc}
                        </Badge>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                        {v.example}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-border/70 pt-2.5 text-sm">
                      <span className="text-muted-foreground font-medium">Base Labor</span>
                      <span className="font-extrabold text-foreground">
                        ₹{v.basePrice}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Service Tier */}
          <div>
            <div className="mb-3.5 flex items-center justify-between">
              <label className="text-sm font-extrabold uppercase tracking-wider text-muted-foreground">
                Step 2: Choose Service Package
              </label>
            </div>
            <div className="space-y-3.5">
              {SERVICE_TIERS.map((tier) => {
                const isSelected = selectedTier === tier.id;
                return (
                  <div
                    key={tier.id}
                    onClick={() => setSelectedTier(tier.id)}
                    className={`flex cursor-pointer items-center justify-between rounded-xl border p-5 transition-all ${
                      isSelected
                        ? "border-primary bg-primary/5 shadow-xs ring-2 ring-primary"
                        : "border-border bg-card hover:border-primary/50 hover:bg-muted/40"
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
                          isSelected
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-muted-foreground/40 bg-background"
                        }`}
                      >
                        {isSelected && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <span className="text-base font-extrabold text-foreground">
                            {tier.name}
                          </span>
                          {tier.popular && (
                            <Badge className="bg-primary text-xs px-2.5 py-0.5 font-bold text-primary-foreground">
                              Recommended
                            </Badge>
                          )}
                        </div>
                        <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                          {tier.desc}
                        </p>
                      </div>
                    </div>
                    <div className="text-right shrink-0 pl-4">
                      <span className="text-base sm:text-lg font-black text-foreground">
                        +₹{tier.price}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. Add-on Services */}
          <div>
            <div className="mb-3.5 flex items-center justify-between">
              <label className="text-sm font-extrabold uppercase tracking-wider text-muted-foreground">
                Step 3: Recommended Add-Ons & Fluids
              </label>
              <span className="text-xs sm:text-sm font-semibold text-muted-foreground">Optional</span>
            </div>
            <div className="space-y-3">
              {ADDONS.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <label
                    key={addon.id}
                    className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 text-left transition-all ${
                      isChecked
                        ? "border-primary/70 bg-primary/5 ring-1 ring-primary/40"
                        : "border-border bg-card hover:bg-muted/40"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleAddon(addon.id)}
                        className="h-5 w-5 rounded border-border text-primary focus:ring-primary accent-[#a52221] cursor-pointer"
                      />
                      <div>
                        <div className="text-sm sm:text-base font-bold text-foreground">
                          {addon.name}
                        </div>
                        <div className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                          {addon.desc}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm sm:text-base font-extrabold text-foreground shrink-0 pl-4">
                      +₹{addon.price}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Instant Live Estimate Card */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <Card className="border-border bg-card shadow-sm overflow-hidden">
            <CardHeader className="border-b border-border bg-muted/40 p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-primary">
                  <Calculator className="h-6 w-6" />
                  <CardTitle className="text-lg font-black text-foreground">
                    Estimate Summary
                  </CardTitle>
                </div>
                <button
                  type="button"
                  onClick={resetCalculator}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
                  title="Reset to defaults"
                >
                  <RotateCcw className="h-3.5 w-3.5" /> Reset
                </button>
              </div>
            </CardHeader>

            <CardContent className="p-6 space-y-6">
              {/* Line items */}
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-start pb-3 border-b border-border/70">
                  <div>
                    <span className="font-bold text-foreground text-sm sm:text-base">
                      Vehicle Base ({currentVehicle.name})
                    </span>
                    <span className="block text-xs sm:text-sm text-muted-foreground mt-0.5">
                      {currentVehicle.cc}
                    </span>
                  </div>
                  <span className="font-extrabold text-foreground text-base">
                    ₹{currentVehicle.basePrice}
                  </span>
                </div>

                <div className="flex justify-between items-start pb-3 border-b border-border/70">
                  <div>
                    <span className="font-bold text-foreground text-sm sm:text-base">
                      Package: {currentTier.name}
                    </span>
                    <span className="block text-xs sm:text-sm text-muted-foreground mt-0.5">
                      Labor & Inspection points
                    </span>
                  </div>
                  <span className="font-extrabold text-foreground text-base">
                    ₹{currentTier.price}
                  </span>
                </div>

                {selectedAddons.length > 0 && (
                  <div className="space-y-2 pb-3 border-b border-border/70">
                    <span className="font-extrabold text-muted-foreground block text-xs uppercase tracking-wider">
                      Selected Add-Ons ({selectedAddons.length})
                    </span>
                    {selectedAddons.map((id) => {
                      const item = ADDONS.find((a) => a.id === id);
                      if (!item) return null;
                      return (
                        <div
                          key={id}
                          className="flex justify-between text-xs sm:text-sm text-muted-foreground pl-2"
                        >
                          <span className="line-clamp-1">{item.name}</span>
                          <span className="font-bold text-foreground shrink-0 pl-3">
                            ₹{item.price}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Total Calculation Display */}
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center">
                <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-muted-foreground">
                  Estimated Total
                </span>
                <div className="mt-2 flex items-baseline justify-center gap-1.5">
                  <span className="text-4xl sm:text-5xl font-black text-primary">
                    ₹{calculatedTotal}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-muted-foreground">
                    (incl. taxes & labor)
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                  <span>Transparent billing • Zero surprise fees</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="space-y-2.5 pt-1">
                <a href="#inquiry" className="block w-full">
                  <Button size="lg" className="w-full gap-2 font-black h-14 text-base shadow-sm">
                    Book Service with this Estimate
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </a>
                <p className="text-center text-xs text-muted-foreground leading-relaxed">
                  *Final price may vary based on exact parts replaced upon physical inspection.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
