"use client";

import * as React from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Badge } from "~/components/ui/badge";
import { BookOpen, Plus, Search, Layers, FileText, CheckCircle2 } from "lucide-react";

export function CurriculumPlannerView() {
  const [search, setSearch] = React.useState("");
  const [units, setUnits] = React.useState([
    {
      id: "unit-1",
      number: 1,
      title: "Classical Mechanics & Kinematics",
      grade: "Grade 10",
      subject: "Physics",
      hours: 24,
      status: "COMPLETED",
      learningObjectives: [
        "Derive equations of uniformly accelerated linear motion",
        "Analyze projectile trajectories with air resistance models",
        "Perform precision measurement lab experiments with vernier calipers",
      ],
    },
    {
      id: "unit-2",
      number: 2,
      title: "Wave Optics & Interference Phenomena",
      grade: "Grade 10",
      subject: "Physics",
      hours: 18,
      status: "IN_PROGRESS",
      learningObjectives: [
        "Explain Huygens wave front propagation principle",
        "Calculate fringe width in Young double slit experiment",
        "Demonstrate polarization using Nicol prisms",
      ],
    },
    {
      id: "unit-3",
      number: 3,
      title: "Thermodynamics & Heat Transfer Cycles",
      grade: "Grade 10",
      subject: "Physics",
      hours: 22,
      status: "UPCOMING",
      learningObjectives: [
        "Formulate First and Second Laws of Thermodynamics",
        "Calculate Carnot Engine theoretical efficiency",
        "Solve entropy variation problems in closed systems",
      ],
    },
  ]);

  const filtered = units.filter(u =>
    u.title.toLowerCase().includes(search.toLowerCase()) ||
    u.subject.toLowerCase().includes(search.toLowerCase()) ||
    u.grade.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 text-left">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Curriculum &amp; Syllabus Planner</h1>
          <p className="text-sm text-muted-foreground">Manage instructional units, Bloom taxonomy objectives, and course syllabi</p>
        </div>
        <Button size="sm">
          <Plus className="mr-1.5 size-4" /> Add Instructional Unit
        </Button>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
          <Input
            placeholder="Search syllabus units..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <div className="space-y-4">
        {filtered.map((unit) => (
          <div key={unit.id} className="rounded-2xl border border-border bg-card p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-border/60 pb-3">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold">
                  U{unit.number}
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">{unit.title}</h3>
                  <p className="text-xs text-muted-foreground">{unit.subject} � {unit.grade} � {unit.hours} Teaching Hours</p>
                </div>
              </div>
              <Badge variant={unit.status === 'COMPLETED' ? 'default' : unit.status === 'IN_PROGRESS' ? 'secondary' : 'outline'}>
                {unit.status}
              </Badge>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Core Learning Objectives:</h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-foreground">
                {unit.learningObjectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}