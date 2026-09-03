import {
  Trophy,
  Palette,
  Compass,
  Award,
  CalendarDays,
  Bus,
} from "lucide-react";

export function StudentLifeSection() {
  const activities = [
    {
      title: "Sports",
      description: "Encourage teamwork, fitness and competitive spirit.",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop",
      icon: Trophy,
    },
    {
      title: "Cultural Activities",
      description: "Music, dance, art and cultural celebrations.",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop",
      icon: Palette,
    },
    {
      title: "Clubs & Activities",
      description: "Opportunities for students to explore interests and develop skills.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop",
      icon: Compass,
    },
    {
      title: "Competitions",
      description: "Academic and extracurricular competitions that encourage confidence.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000&auto=format&fit=crop",
      icon: Award,
    },
    {
      title: "School Events",
      description: "Annual celebrations, exhibitions, workshops and special events.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop",
      icon: CalendarDays,
    },
    {
      title: "Field Trips",
      description: "Learning experiences beyond the classroom.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop",
      icon: Bus,
    },
  ];

  return (
    <section id="student-life" className="py-16 sm:py-24 bg-muted/20 border-b border-border/40">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 space-y-12">
        <div className="max-w-3xl space-y-3 text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-primary">Beyond Textbooks</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Student Life at Our School
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Education extends beyond textbooks. Students have opportunities to participate, collaborate, compete and discover their interests.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((act) => (
            <div
              key={act.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-xs hover:shadow-md transition-all text-left"
            >
              <div className="relative h-52 w-full overflow-hidden bg-muted">
                <img
                  src={act.image}
                  alt={act.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-lg bg-background/90 text-primary backdrop-blur-xs shadow-xs">
                  <act.icon className="size-4" />
                </div>
              </div>
              <div className="p-5 space-y-1.5">
                <h3 className="text-lg font-bold text-foreground">{act.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {act.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
