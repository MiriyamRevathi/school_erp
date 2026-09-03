"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { ThemeToggleButton } from "~/components/theme-toggle-button";
import { GraduationCap, ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About School", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Facilities", href: "#facilities" },
  { label: "Student Life", href: "#student-life" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/70 bg-[#fbf9f4]/90 dark:bg-background/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-16">
        {/* Left: School Logo & Title */}
        <Link href="/" className="flex items-center gap-3.5 group shrink-0">
          <div className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-xs transition-transform group-hover:scale-105">
            <GraduationCap className="size-6" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-foreground leading-tight">
              Greenfield International School
            </span>
            <span className="text-[11px] text-muted-foreground font-medium">
              Excellence in Education • Character • Innovation
            </span>
          </div>
        </Link>

        {/* Right Area: Navigation Links + Actions (FoodFlow-style right alignment) */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <nav className="flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="h-4 w-px bg-border" />

          <div className="flex items-center gap-3">
            <ThemeToggleButton />
            <Button variant="ghost" size="sm" asChild className="font-semibold text-sm">
              <Link href="/login">Log in</Link>
            </Button>
            <Button size="sm" asChild className="font-semibold shadow-xs px-4 h-9 rounded-xl">
              <Link href="/login">
                Get Started <ArrowRight className="ml-1.5 size-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggleButton />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-background px-6 py-5 lg:hidden animate-in slide-in-from-top-2 text-left">
          <nav className="flex flex-col space-y-3.5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground py-1"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t flex flex-col gap-2">
              <Button variant="outline" size="sm" asChild className="w-full justify-center">
                <Link href="/login">Log in</Link>
              </Button>
              <Button size="sm" asChild className="w-full justify-center">
                <Link href="/login">Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
