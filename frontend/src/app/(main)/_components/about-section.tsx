import Link from "next/link";
import { Button } from "~/components/ui/button";
import { ArrowRight, Calendar, Users, GraduationCap, BookOpenCheck } from "lucide-react";

export function AboutSection() {
  const stats = [
    { label: "Established", value: "2010", icon: Calendar },
    { label: "Students", value: "1,500+", icon: GraduationCap },
    { label: "Faculty", value: "100+", icon: Users },
    { label: "Academic Programs", value: "25+", icon: BookOpenCheck },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-muted/20 border-b border-border/40">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 space-y-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 xl:gap-14">
          {/* Left Column: Campus Image */}
          <div className="order-2 lg:order-1 lg:col-span-6 xl:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1400&auto=format&fit=crop"
                alt="Greenfield Students in Classroom"
                className="h-[380px] sm:h-[440px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: About Details */}
          <div className="space-y-6 text-left order-1 lg:order-2 lg:col-span-6 xl:col-span-7">
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">Overview</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                About Our School
              </h2>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Greenfield International School is committed to providing a safe, inclusive and inspiring learning environment. We combine strong academic foundations with creativity, discipline, technology and character development to prepare students for a changing world.
            </p>

            {/* School Stats */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 pt-2">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-card p-4.5 text-left shadow-xs">
                  <s.icon className="size-5 text-primary mb-1.5" />
                  <p className="text-2xl font-bold text-foreground">{s.value}</p>
                  <p className="text-xs font-medium text-muted-foreground mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button asChild size="lg" className="font-semibold text-base px-6 h-11 rounded-xl">
                <Link href="#academics">
                  Learn More About Our School <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
