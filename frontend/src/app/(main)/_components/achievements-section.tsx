import {
  Trophy,
  Award,
  Medal,
  Sparkles,
} from "lucide-react";

export function AchievementsSection() {
  const metrics = [
    { value: "95%", label: "Academic Success Rate" },
    { value: "50+", label: "Awards & Recognitions" },
    { value: "30+", label: "Inter-School Competitions" },
    { value: "100+", label: "Student Achievements" },
  ];

  const categories = [
    {
      title: "Academic Excellence",
      description: "Consistent state and national board top percentiles, Olympiad gold medals, and admissions to premier global universities.",
      icon: Award,
    },
    {
      title: "Sports Achievements",
      description: "Inter-school championship titles across athletics, basketball, and regional football tournaments.",
      icon: Trophy,
    },
    {
      title: "Cultural Achievements",
      description: "National youth choir awards, drama showcase accolades, and international youth art exhibition selections.",
      icon: Medal,
    },
    {
      title: "Innovation & Projects",
      description: "National robotics challenge champions and student clean energy innovation commendations.",
      icon: Sparkles,
    },
  ];

  const gallery = [
    {
      title: "Science Fair Champions",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
      badge: "1st Place Science Bowl",
    },
    {
      title: "Inter-School Athletics Trophy",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
      badge: "Regional Champions",
    },
    {
      title: "National Robotics Contest",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop",
      badge: "Innovation Award",
    },
  ];

  return (
    <section id="achievements" className="py-16 sm:py-24 bg-background border-b border-border/40">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 space-y-12">
        <div className="max-w-3xl space-y-3 text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-primary">Student Honors</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Celebrating Excellence
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Our students and faculty continue to achieve excellence through dedication, creativity and continuous learning.
          </p>
        </div>

        {/* 4 Statistics Metrics */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-2xl border border-border bg-card p-6 text-left shadow-xs space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-primary">{m.value}</p>
              <p className="text-xs sm:text-sm font-medium text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>

        {/* 4 Achievement Categories */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-border bg-muted/20 p-6 space-y-3 text-left shadow-xs"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <cat.icon className="size-5" />
              </div>
              <h3 className="text-base font-bold text-foreground">{cat.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Clean Gallery Style Showcase */}
        <div className="space-y-4 pt-4">
          <h4 className="text-base font-bold text-foreground text-left">Recent Honors &amp; Laurels Gallery</h4>
          <div className="grid gap-6 sm:grid-cols-3">
            {gallery.map((g) => (
              <div key={g.title} className="group relative overflow-hidden rounded-2xl border border-border shadow-xs">
                <img
                  src={g.image}
                  alt={g.title}
                  className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4 text-left">
                  <span className="inline-block w-fit text-[10px] font-bold uppercase tracking-wider text-white bg-primary px-2 py-0.5 rounded-md mb-1">
                    {g.badge}
                  </span>
                  <p className="text-sm font-bold text-white">{g.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
