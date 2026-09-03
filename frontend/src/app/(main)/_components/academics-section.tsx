import Link from "next/link";
import { Button } from "~/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export function AcademicsSection() {
  const levels = [
    {
      title: "Primary School",
      grade: "Grades 1 – 5",
      description: "Strong foundations in literacy, numeracy, creativity and communication.",
    },
    {
      title: "Middle School",
      grade: "Grades 6 – 8",
      description: "Developing independent thinking, problem-solving and collaborative learning.",
    },
    {
      title: "Secondary School",
      grade: "Grades 9 – 10",
      description: "Focused academic preparation, subject knowledge and future opportunities.",
    },
    {
      title: "Higher Secondary",
      grade: "Grades 11 – 12",
      description: "Advanced learning, career preparation and higher education readiness.",
    },
  ];

  const highlights = [
    "Departmental Faculties (Science, Mathematics, Humanities, Commerce)",
    "Standardized International & National Curriculum (CBSE / Cambridge)",
    "Continuous Assessment & Personalized Mentorship Programs",
    "Digital Classrooms & STEM Integrated Courses",
  ];

  return (
    <section id="academics" className="py-16 sm:py-24 bg-background border-b border-border/40">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 space-y-12">
        <div className="max-w-3xl space-y-3 text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-primary">Curriculum &amp; Learning</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Building Strong Foundations for the Future
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Our academic programs are designed to encourage curiosity, critical thinking, creativity and lifelong learning.
          </p>
        </div>

        {/* 4 Academic Levels */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {levels.map((lvl) => (
            <div
              key={lvl.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-primary/50 transition-colors text-left"
            >
              <div className="space-y-3">
                <span className="inline-block text-[11px] font-semibold text-primary px-3 py-1 rounded-full bg-primary/10">
                  {lvl.grade}
                </span>
                <h3 className="text-xl font-bold text-foreground">{lvl.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {lvl.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Highlights & Framework */}
        <div className="rounded-2xl border border-border bg-muted/30 p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-3 max-w-3xl text-left">
            <h4 className="text-lg font-bold text-foreground">Departments, Courses &amp; Curriculum</h4>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <Check className="size-4 text-primary shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
          <Button asChild size="lg" className="font-semibold shrink-0 text-base px-6 h-11 rounded-xl">
            <Link href="/login">
              Explore Academics <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
