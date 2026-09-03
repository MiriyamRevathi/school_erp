"use client";

import * as React from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Badge } from "~/components/ui/badge";
import { Search, CheckCircle2, Clock, BookOpen, AlertCircle, FileCheck } from "lucide-react";

export function SyllabusTrackerView() {
  const [activeTab, setActiveTab] = React.useState<"ALL" | "COMPLETED" | "PENDING">("ALL");
  const [search, setSearch] = React.useState("");

  const syllabusItems = [
    { code: "PHY-101", title: "Mechanics, Dynamics & Circular Motion", teacher: "Sarah Jenkins", totalLectures: 30, completedLectures: 28, percent: 93 },
    { code: "PHY-102", title: "Thermodynamics, Entropy & Heat Engines", teacher: "Sarah Jenkins", totalLectures: 24, completedLectures: 18, percent: 75 },
    { code: "CHM-101", title: "Atomic Structure, Quantum Numbers & Periodic Trends", teacher: "David Miller", totalLectures: 28, completedLectures: 28, percent: 100 },
    { code: "CHM-102", title: "Chemical Kinetics, Equilibrium & Electrochemistry", teacher: "David Miller", totalLectures: 26, completedLectures: 19, percent: 73 },
    { code: "MTH-101", title: "Differential Calculus, Limits & Applications of Derivatives", teacher: "Michael Chang", totalLectures: 32, completedLectures: 30, percent: 94 },
    { code: "MTH-102", title: "Integral Calculus, Differential Equations & Vectors", teacher: "Michael Chang", totalLectures: 30, completedLectures: 22, percent: 73 },
    { code: "CS-101", title: "Object-Oriented Programming & Python Data Structures", teacher: "Elena Rostova", totalLectures: 28, completedLectures: 28, percent: 100 },
    { code: "CS-102", title: "Relational Database Design & SQL Query Optimization", teacher: "Elena Rostova", totalLectures: 24, completedLectures: 20, percent: 83 },
  ];

  const filtered = syllabusItems.filter(item => {
    if (activeTab === "COMPLETED" && item.percent < 100) return false;
    if (activeTab === "PENDING" && item.percent === 100) return false;
    return item.title.toLowerCase().includes(search.toLowerCase()) || item.code.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="space-y-6 text-left">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Syllabus Coverage &amp; Delivery Progress</h1>
          <p className="text-sm text-muted-foreground">Monitor instructional hours delivered across departments against curriculum roadmaps</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative flex-1 max-w-sm w-full">
          <Search className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
          <Input
            placeholder="Search syllabus units..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex items-center gap-1.5 self-start sm:self-auto">
          <Button variant={activeTab === "ALL" ? "default" : "outline"} size="xs" onClick={() => setActiveTab("ALL")}>All Units</Button>
          <Button variant={activeTab === "COMPLETED" ? "default" : "outline"} size="xs" onClick={() => setActiveTab("COMPLETED")}>100% Completed</Button>
          <Button variant={activeTab === "PENDING" ? "default" : "outline"} size="xs" onClick={() => setActiveTab("PENDING")}>In Progress</Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((item) => (
          <div key={item.code} className="rounded-2xl border border-border bg-card p-5 shadow-xs space-y-3 text-left">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-md">{item.code}</span>
              <Badge variant={item.percent === 100 ? "default" : "secondary"}>
                {item.percent === 100 ? "Syllabus Completed" : `${item.percent}% Delivered`}
              </Badge>
            </div>
            <h3 className="text-base font-bold text-foreground leading-snug">{item.title}</h3>
            <p className="text-xs text-muted-foreground">Lead Faculty: {item.teacher} � {item.completedLectures} of {item.totalLectures} Lecture Hours Delivered</p>
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: `${item.percent}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
