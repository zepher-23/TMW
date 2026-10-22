import Image from "next/image";
import brandLogo from "@/assets/logo/TeamMostWatedLogo-whitebg@1.5x.webp";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ServiceInquiryForm } from "@/components/ServiceInquiryForm";
import { CostCalculator } from "@/components/CostCalculator";
import { ServiceProcessAnimation } from "@/components/ServiceProcessAnimation";
import { MobileComingSoon } from "@/components/MobileComingSoon";
import {
  Wrench,
  Gauge,
  ShieldCheck,
  Zap,
  Sparkles,
  Clock,
  Phone,
  MapPin,
  ChevronRight,
  Bike,
  CheckCircle,
  Calculator,
  CalendarCheck,
  Workflow,
  Star,
  Users,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Periodic General Maintenance",
      description:
        "Comprehensive 25-point inspection, oil & filter change, chain tensioning & lubrication, and full safety checks.",
      icon: Wrench,
      tag: "Popular",
    },
    {
      title: "Engine Diagnostics & Overhaul",
      description:
        "Precision troubleshooting for engine knocking, compression loss, carburetor tuning, and fuel injection health.",
      icon: Gauge,
      tag: "Specialist",
    },
    {
      title: "Brake & Suspension Care",
      description:
        "Front & rear brake pad renewal, disc skimming, fork oil overhaul, and suspension preload adjustment.",
      icon: ShieldCheck,
      tag: "Safety",
    },
    {
      title: "Electrical & ECU Diagnostics",
      description:
        "Computerized error code reading, battery health testing, wiring restoration, and high-performance lighting setup.",
      icon: Zap,
      tag: "Tech",
    },
    {
      title: "Performance Tuning & Exhausts",
      description:
        "Sprocket gearing setups, high-flow air intake installation, performance exhaust fitting, and dyno-ready adjustments.",
      icon: Bike,
      tag: "Performance",
    },
    {
      title: "Deep Wash & Ceramic Detailing",
      description:
        "Snow foam pressure wash, engine bay degreasing, chain scrub, ceramic wax polish, and scratch reduction.",
      icon: Sparkles,
      tag: "Aesthetics",
    },
  ];

  return (
    <>
      {/* Mobile-Only Coming Soon View */}
      <div className="block md:hidden">
        <MobileComingSoon />
      </div>

      {/* Desktop & Tablet Full View */}
      <div className="hidden md:flex min-h-screen flex-col bg-background text-foreground transition-colors duration-200">
      {/* Top Announcement Banner */}
      <div className="border-b border-border bg-foreground px-4 py-2.5 text-center text-sm font-semibold text-background">
        🏁 Welcome to Team Most Wanted Two Wheeler Service Center | Workshop Hotline: +91 98765 43210
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#" className="flex items-center">
            <Image
              src={brandLogo}
              alt="Team Most Wanted - Two Wheeler Service"
              height={56}
              className="h-12 sm:h-14 w-auto object-contain"
              priority
            />
          </a>

          <nav className="hidden items-center gap-7 text-base font-semibold md:flex">
            <a href="#services" className="text-muted-foreground transition-colors hover:text-foreground">
              Services
            </a>
            <a href="#calculator" className="text-muted-foreground transition-colors hover:text-foreground">
              Cost Calculator
            </a>
            <a href="#process" className="text-muted-foreground transition-colors hover:text-foreground">
              Service Process
            </a>
            <a href="#book-service" className="text-muted-foreground transition-colors hover:text-foreground">
              Book Service
            </a>
            <a href="#contact" className="text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#book-service">
              <Button size="lg" className="h-11 px-5 text-sm font-bold shadow-xs">
                Book Service
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="px-2 sm:px-4 py-2 sm:py-3">
        <div className="dark w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-black px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-12 lg:py-14 shadow-xl border border-neutral-800">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                Precision Care for Every Ride You Love.
              </h1>

              <p className="mt-4 text-lg sm:text-xl leading-relaxed text-neutral-300 font-normal">
                At <strong className="text-white">Team Most Wanted</strong>, we treat your motorcycle and scooter with racing-standard precision. From scheduled maintenance to advanced engine rebuilding and custom tuning, we keep your engine roaring.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a href="#book-service">
                  <Button size="lg" className="h-12 gap-2 px-7 text-base font-bold shadow-sm">
                    <CalendarCheck className="h-5 w-5" />
                    Book Service Now
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </a>
                <a href="#calculator">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 gap-2 border-neutral-700 bg-neutral-900/80 px-7 text-base font-bold text-white hover:bg-neutral-800 hover:text-white"
                  >
                    <Calculator className="h-5 w-5 text-primary" />
                    Estimate Cost
                  </Button>
                </a>
                <a href="#services">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="h-12 px-5 text-base font-bold text-neutral-300 hover:bg-neutral-900 hover:text-white"
                  >
                    Explore Services
                  </Button>
                </a>
              </div>

              {/* Key Trust Metrics */}
              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-neutral-800 pt-6 sm:mt-10 sm:grid-cols-4">
                <div className="flex items-center gap-3">
                  <Users className="h-7 w-7 text-primary shrink-0" />
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-white">10,000+</div>
                    <div className="text-xs sm:text-sm font-semibold text-neutral-400">Bikes Serviced</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-7 w-7 text-primary shrink-0" />
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-white">4.9 / 5.0</div>
                    <div className="text-xs sm:text-sm font-semibold text-neutral-400">Google Rating</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-7 w-7 text-primary shrink-0" />
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-white">100% Genuine</div>
                    <div className="text-xs sm:text-sm font-semibold text-neutral-400">OEM Spare Parts</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-7 w-7 text-primary shrink-0" />
                  <div>
                    <div className="text-xl sm:text-2xl font-black text-white">Same-Day</div>
                    <div className="text-xs sm:text-sm font-semibold text-neutral-400">Express Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. BOOK A SERVICE SECTION
          ========================================================================= */}
      <section id="book-service" className="border-b border-border bg-muted/25 py-20 sm:py-28 scroll-mt-12">
        <div id="inquiry" className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Information Column */}
            <div className="lg:col-span-6 space-y-7">
              <div>
                <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight">
                  Book Your Two-Wheeler Service
                </h2>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
                  Lock in your service slot in under 60 seconds. Our service advisors will inspect your vehicle, share a digital job card with you upfront, and ensure priority turnaround.
                </p>
              </div>

              {/* Service Perks */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-2xs">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground">Zero Unauthorized Billing</h4>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      No part is replaced without your digital confirmation via WhatsApp or phone call.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-2xs">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Bike className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground">Doorstep Pickup & Drop Available</h4>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      Convenient doorstep handover across city limits with live tracking and transit protection.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-2xs">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground">Need Urgent Support?</h4>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      Direct Workshop Line: <span className="font-bold text-foreground">+91 98765 43210</span> (8:30 AM – 8:00 PM)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-6">
              <ServiceInquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. AVAILABLE SERVICE OPTIONS SECTION
          ========================================================================= */}
      <section id="services" className="border-b border-border py-20 sm:py-28 scroll-mt-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Available Service Options
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Engineered care tailored for daily commuter bikes, performance street racers, cruisers, and high-capacity superbikes.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="transition-all hover:border-primary/50 hover:shadow-lg p-2">
                  <CardHeader className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary" className="text-xs px-3 py-1 font-bold">
                        {item.tag}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">{item.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <a
                      href="#book-service"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
                    >
                      Book this service <ChevronRight className="h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. COST CALCULATOR SECTION
          ========================================================================= */}
      <section id="calculator" className="border-b border-border bg-muted/25 py-20 sm:py-28 scroll-mt-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Transparent Service Cost Calculator
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Get an instant itemized estimate tailored to your two-wheeler model, service requirements, and fluid upgrades.
            </p>
          </div>

          <CostCalculator />
        </div>
      </section>

      {/* =========================================================================
          5. SERVICE PROCESS ANIMATION SECTION
          ========================================================================= */}
      <section id="process" className="border-b border-border py-20 sm:py-28 scroll-mt-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Our 5-Stage Precision Service Process
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Follow your bike&apos;s journey through our computerized diagnostic checks, digital approval, and rigorous quality testing.
            </p>
          </div>

          <ServiceProcessAnimation />
        </div>
      </section>

      {/* =========================================================================
          Contact & Workshop Details
          ========================================================================= */}
      <section id="contact" className="py-20 sm:py-28 scroll-mt-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 space-y-4">
                <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                  Ready to experience smooth performance?
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Drive in or schedule a convenient doorstep pickup for your two-wheeler today.
                </p>

                <div className="mt-6 space-y-4 text-base font-semibold text-foreground">
                  <div className="flex items-center gap-3.5">
                    <MapPin className="h-5 w-5 text-primary shrink-0" />
                    <span>Team Most Wanted Workshop, Main Service Road, City Central</span>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    <span>+91 98765 43210 / +91 98765 43211</span>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <Clock className="h-5 w-5 text-primary shrink-0" />
                    <span>Monday - Saturday: 8:30 AM to 8:00 PM (Sunday by appointment)</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 lg:col-span-5 lg:items-end">
                <a href="#book-service" className="w-full lg:w-auto">
                  <Button size="lg" className="w-full lg:w-auto h-13 px-8 text-base font-bold shadow-xs">
                    Book Your Slot
                  </Button>
                </a>
                <a href="tel:+919876543210" className="w-full lg:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full lg:w-auto h-13 px-8 text-base font-bold border-border bg-card hover:bg-muted"
                  >
                    Call Our Workshop
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-border bg-background py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm font-medium text-muted-foreground sm:flex-row sm:px-6 sm:text-left">
          <div className="flex items-center gap-2.5">
            <Bike className="h-5 w-5 text-primary" />
            <span className="font-extrabold text-foreground">TEAM MOST WANTED</span>
            <span>— Precision Two Wheeler Service Center</span>
          </div>
          <div>
            Powered by Next.js, Tailwind CSS, shadcn/ui & Netlify Serverless Functions.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Contact Button */}
      <a
        href="https://wa.me/919876543210?text=Hello%20Team%20Most%20Wanted%2C%20I%20would%20like%20to%20inquire%20about%20bike%20service."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a] hover:shadow-2xl active:scale-95"
      >
        <svg
          className="h-8 w-8 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
    </>
  );
}
