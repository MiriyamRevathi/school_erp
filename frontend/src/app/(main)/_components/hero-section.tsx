import Link from "next/link";
import { Button } from "~/components/ui/button";
import { ArrowRight, Sparkles, Star, ShieldCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#fbf9f4] dark:bg-background pt-8 pb-20 sm:pt-12 sm:pb-24 lg:pt-14 lg:pb-28 border-b border-stone-200/60 dark:border-border/40">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-12 xl:gap-16">
          {/* Left Column: FoodFlow-style Typography & CTA */}
          <div className="space-y-6 text-left lg:col-span-6 xl:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-stone-200/50 dark:bg-muted dark:border-border px-3.5 py-1 text-[11px] font-bold tracking-wider text-foreground/80 uppercase">
              <Sparkles className="size-3.5 text-primary shrink-0" />
              <span>WELCOME TO GREENFIELD INTERNATIONAL SCHOOL</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.12]">
              Empowering Students <br />
              <span className="text-primary">To Learn, Lead &amp; Succeed</span>
            </h1>

            <p className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
              Providing quality education, meaningful learning experiences and a supportive environment where every student can discover their potential.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button size="lg" asChild className="font-bold text-base px-7 h-12 rounded-2xl shadow-sm">
                <Link href="#about">
                  Explore Our School <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="font-bold text-base px-7 h-12 rounded-2xl border-stone-300 dark:border-border bg-white dark:bg-background">
                <Link href="/login">
                  Log in to ERP
                </Link>
              </Button>
            </div>

            <div className="pt-4 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-muted-foreground">
              <ShieldCheck className="size-4 text-primary shrink-0" />
              <span>Excellence in Education • Character • Innovation</span>
            </div>
          </div>

          {/* Right Column: Hero Visual with FoodFlow-style Floating Badge */}
          <div className="relative lg:col-span-6 xl:col-span-6 pb-6 pr-2">
            <div className="relative overflow-hidden rounded-3xl border border-stone-200/80 dark:border-border shadow-2xl bg-card">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1600&auto=format&fit=crop"
                alt="Greenfield International School Modern Campus"
                className="h-[380px] sm:h-[460px] lg:h-[490px] w-full object-cover"
                loading="eager"
              />
            </div>

            {/* FoodFlow Floating Badge at Bottom-Left */}
            <div className="absolute -bottom-2 sm:bottom-2 left-4 sm:-left-4 z-20 rounded-2xl bg-white dark:bg-card p-4 sm:p-5 shadow-2xl border border-stone-200/90 dark:border-border flex items-center gap-3.5 max-w-xs text-left">
              <div className="flex size-11 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 shrink-0">
                <Star className="size-6 fill-amber-500 text-amber-500" />
              </div>
              <div className="space-y-0.5">
                <p className="text-sm font-extrabold text-foreground">4.9 / 5 Accreditation</p>
                <p className="text-xs text-muted-foreground">From 1,500+ Students &amp; Parents</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
