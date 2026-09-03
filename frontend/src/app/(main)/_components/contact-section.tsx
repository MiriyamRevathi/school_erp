"use client";

import * as React from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-background border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 space-y-16">
        <div className="grid gap-12 lg:grid-cols-12 xl:gap-16">
          {/* Left Column: School Contact & Hours Information */}
          <div className="space-y-8 text-left lg:col-span-5 xl:col-span-5">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Reach Out
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Get in Touch
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Have questions about our curriculum, admissions process, or campus tours? Our team is here to assist you.
              </p>
            </div>

            <div className="space-y-5 text-sm text-muted-foreground">
              <div className="flex items-start gap-3.5">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Campus Address</h4>
                  <p className="mt-0.5">100 Greenfield Academic Parkway, Springfield, IL 62701</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                  <Phone className="size-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Telephone</h4>
                  <p className="mt-0.5 font-mono">+1 (555) 234-5678 / +1 (555) 234-5679</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                  <Mail className="size-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Email Inquiries</h4>
                  <p className="mt-0.5">admissions@greenfield.edu / info@greenfield.edu</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                  <Clock className="size-5" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Office Hours</h4>
                  <p className="mt-0.5">Monday – Friday: 08:00 AM – 04:00 PM</p>
                  <p>Saturday: 09:00 AM – 01:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="rounded-3xl border border-border/80 bg-card p-8 sm:p-10 shadow-sm text-left">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <CheckCircle2 className="size-12 text-primary mx-auto" />
                  <h3 className="text-xl font-bold text-foreground">Thank You for Contacting Us</h3>
                  <p className="text-sm text-muted-foreground">
                    Your inquiry has been submitted. Our admissions team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-foreground">Send Us a Message</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Fill out the form below and we will get back to you promptly.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 pt-2">
                    <div className="space-y-1.5">
                      <Label className="text-xs font-semibold">Full Name *</Label>
                      <Input
                        required
                        placeholder="e.g. John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="h-10 rounded-xl"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs font-semibold">Email Address *</Label>
                      <Input
                        required
                        type="email"
                        placeholder="e.g. john@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="h-10 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label className="text-xs font-semibold">Phone Number</Label>
                      <Input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="h-10 rounded-xl"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-xs font-semibold">Inquiry Subject *</Label>
                      <Input
                        required
                        placeholder="e.g. Grade 9 Admissions"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="h-10 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold">Message *</Label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please let us know your requirements or questions..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-xl border border-input bg-background p-3.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto font-semibold text-base px-8 h-11 rounded-xl">
                    <Send className="mr-2 size-4" /> Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
