import {
  MonitorCheck,
  Cpu,
  FlaskConical,
  Library,
  Trophy,
  Bus,
} from "lucide-react";

export function FacilitiesSection() {
  const facilities = [
    {
      title: "Smart Classrooms",
      description: "Modern classrooms designed for interactive learning.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop",
      icon: MonitorCheck,
    },
    {
      title: "Computer Laboratory",
      description: "Technology-enabled spaces for practical learning.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
      icon: Cpu,
    },
    {
      title: "Science Laboratories",
      description: "Hands-on environments for scientific exploration.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop",
      icon: FlaskConical,
    },
    {
      title: "Library",
      description: "A rich learning environment that encourages reading and research.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000&auto=format&fit=crop",
      icon: Library,
    },
    {
      title: "Sports Facilities",
      description: "Spaces that encourage fitness, teamwork and competitive spirit.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000&auto=format&fit=crop",
      icon: Trophy,
    },
    {
      title: "Transportation",
      description: "Safe and organized transportation support for students.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop",
      icon: Bus,
    },
  ];

  return (
    <section id="facilities" className="py-16 sm:py-24 bg-background border-b border-border/40">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 space-y-12">
        <div className="max-w-3xl space-y-3 text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-primary">Campus Infrastructure</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Learn Beyond the Classroom
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Our facilities provide students with the resources and environment they need to learn, explore and grow.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((fac) => (
            <div
              key={fac.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-xs hover:shadow-md transition-all text-left"
            >
              <div className="relative h-52 w-full overflow-hidden bg-muted">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-lg bg-background/90 text-primary backdrop-blur-xs shadow-xs">
                  <fac.icon className="size-4" />
                </div>
              </div>
              <div className="p-5 space-y-1.5">
                <h3 className="text-lg font-bold text-foreground">{fac.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {fac.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
