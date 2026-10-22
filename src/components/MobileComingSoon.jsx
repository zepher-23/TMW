import Image from "next/image";
import brandLogo from "@/assets/logo/TeamMostWatedLogo-whitebg@1.5x.webp";
import { Phone, Clock, MapPin, Laptop, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileComingSoon() {
  return (
    <div className="flex min-h-[100dvh] flex-col justify-between bg-black text-white px-5 py-8 sm:px-8 selection:bg-primary selection:text-white">
      {/* Top Bar with Logo */}
      <header className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center rounded-2xl bg-white/95 p-3 shadow-md max-w-[200px]">
          <Image
            src={brandLogo}
            alt="Team Most Wanted"
            width={180}
            height={58}
            className="h-10 w-auto object-contain"
            priority
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="my-auto flex flex-col items-center text-center py-8">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-6">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          Mobile Experience Coming Soon
        </div>

        {/* Big Headline */}
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
          We&apos;re Tuning Up Our <br />
          <span className="text-primary">Mobile Experience</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-sm text-sm sm:text-base text-neutral-300 leading-relaxed">
          Our full interactive motorcycle workshop portal, instant cost calculator, and digital service booking are currently optimized for desktop and tablet screens.
        </p>

        {/* Desktop Recommendation Card */}
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/80 p-4 text-left max-w-sm w-full">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Laptop className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white">Visit from a Desktop or Tablet</h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              To explore our full workshop portal, please open this website on a computer.
            </p>
          </div>
        </div>

        {/* Direct Action Buttons for Mobile Users */}
        <div className="mt-6 flex flex-col w-full max-w-sm gap-3">
          <a href="tel:+919876543210" className="w-full">
            <Button
              size="lg"
              className="w-full h-12 text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center gap-2 rounded-xl"
            >
              <Phone className="h-4 w-4" />
              Call Workshop (+91 98765 43210)
            </Button>
          </a>

          <a
            href="https://wa.me/919876543210?text=Hello%20Team%20Most%20Wanted%2C%20I%20would%20like%20to%20inquire%20about%20bike%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full h-12 text-sm font-bold border-neutral-700 bg-neutral-900 text-white hover:bg-neutral-800 flex items-center justify-center gap-2 rounded-xl"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" />
              Chat on WhatsApp
            </Button>
          </a>
        </div>

        {/* Workshop Info */}
        <div className="mt-8 flex flex-col gap-2 text-xs text-neutral-400">
          <div className="flex items-center justify-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-primary" />
            <span>Mon – Sat: 8:30 AM – 8:00 PM</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            <span>Premier Two-Wheeler Workshop</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="pt-4 text-center text-xs text-neutral-500 border-t border-neutral-900">
        © {new Date().getFullYear()} Team Most Wanted. All rights reserved.
      </footer>
    </div>
  );
}
