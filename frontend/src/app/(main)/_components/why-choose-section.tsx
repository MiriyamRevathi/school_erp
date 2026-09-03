import {
  Users,
  Award,
  BookOpen,
  ShieldCheck,
  Laptop,
  HeartHandshake,
} from "lucide-react";

export function WhyChooseSection() {
  const points = [
    {
      title: "Experienced Faculty",
      description: "Qualified and dedicated teachers who support every student's learning journey.",
      icon: Users,
    },
    {
      title: "Academic Excellence",
      description: "A strong focus on consistent academic growth and achievement.",
      icon: Award,
    },
    {
      title: "Student-Centered Learning",
      description: "Learning experiences designed around student participation and development.",
      icon: BookOpen,
    },
    {
      title: "Safe Learning Environment",
      description: "A secure, respectful and supportive environment for students.",
      icon: ShieldCheck,
    },
    {
      title: "Technology-Enabled Education",
      description: "Modern tools and learning resources that support effective teaching.",
      icon: Laptop,
    },
    {
      title: "Holistic Development",
      description: "Equal importance to academics, sports, creativity, leadership and character.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-muted/20 border-b border-border/40">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 space-y-12">
        <div className="max-w-3xl space-y-3 text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-primary">Why Greenfield</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Why Choose Our School?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            We provide a balanced educational experience that nurtures academic capabilities, moral integrity, and lifelong success.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs space-y-3.5 text-left hover:border-primary/50 transition-colors"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <p.icon className="size-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
