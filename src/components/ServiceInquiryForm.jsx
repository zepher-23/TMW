"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Send, Loader2 } from "lucide-react";

export function ServiceInquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    bikeModel: "",
    serviceType: "General Periodic Service",
    notes: "",
  });
  const [status, setStatus] = useState("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMessage("");

    try {
      const res = await fetch("/api/service-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to submit service inquiry");
      }

      const data = await res.json();
      setStatus("success");
      setResponseMessage(data.message || "Inquiry sent successfully!");
      setFormData({
        name: "",
        phone: "",
        bikeModel: "",
        serviceType: "General Periodic Service",
        notes: "",
      });
    } catch {
      setStatus("error");
      setResponseMessage("Could not submit inquiry right now. Please call us directly.");
    }
  };

  return (
    <div className="w-full rounded-2xl border border-border bg-card p-7 shadow-sm transition-colors sm:p-9">
      <div className="mb-7">
        <h3 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
          Request a Service Callback
        </h3>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
          Leave your details and our master technicians will confirm your service slot within 30 minutes.
        </p>
      </div>

      {status === "success" ? (
        <div className="rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
          <CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-primary" />
          <h4 className="text-lg font-bold text-foreground">
            Booking Request Received!
          </h4>
          <p className="mt-2 text-base text-muted-foreground">
            {responseMessage}
          </p>
          <Button
            variant="outline"
            size="lg"
            className="mt-5 h-11 px-6 text-sm font-bold"
            onClick={() => setStatus("idle")}
          >
            Submit Another Request
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rahul Sharma"
                className="w-full rounded-xl border border-input bg-transparent px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. +91 98765 43210"
                className="w-full rounded-xl border border-input bg-transparent px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">
                Bike Model & Make
              </label>
              <input
                type="text"
                required
                value={formData.bikeModel}
                onChange={(e) => setFormData({ ...formData, bikeModel: e.target.value })}
                placeholder="e.g. Yamaha R15 / Royal Enfield 350"
                className="w-full rounded-xl border border-input bg-transparent px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-foreground mb-2">
                Service Required
              </label>
              <select
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full rounded-xl border border-input bg-card px-4 py-3 text-base text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none cursor-pointer"
              >
                <option value="General Periodic Service">General Periodic Service</option>
                <option value="Engine Diagnostics & Repair">Engine Diagnostics & Repair</option>
                <option value="Brake & Chain Maintenance">Brake & Chain Maintenance</option>
                <option value="Performance Tuning">Performance Tuning</option>
                <option value="Electrical / Battery Check">Electrical / Battery Check</option>
                <option value="Foam Wash & Detailing">Foam Wash & Detailing</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-foreground mb-2">
              Additional Issue / Notes (Optional)
            </label>
            <textarea
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Any specific noise, vibration, or parts replacement needed..."
              className="w-full rounded-xl border border-input bg-transparent px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
            />
          </div>

          {status === "error" && (
            <p className="text-sm font-semibold text-destructive">{responseMessage}</p>
          )}

          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-full justify-center gap-2 h-13 py-3.5 text-base font-bold rounded-xl shadow-xs"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Submitting Request...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                Confirm Service Callback Request
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
