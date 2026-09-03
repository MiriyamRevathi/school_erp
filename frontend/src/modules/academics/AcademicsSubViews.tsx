"use client";

import * as React from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { BookOpen, BookMarked, NotebookPen, PenLine, Video, FolderOpen, UserPlus, FileText, UserCheck, Inbox, Plus, Download } from "lucide-react";

export function SubjectsView() {
  const subjects = [
    { code: "PHY-101", name: "Physics & Mechanics", grade: "Grade 10", teacher: "Sarah Jenkins", periodsPerWeek: 5 },
    { code: "MTH-101", name: "Advanced Mathematics", grade: "Grade 10", teacher: "David Miller", periodsPerWeek: 6 },
    { code: "CHM-101", name: "Inorganic Chemistry", grade: "Grade 10", teacher: "Sarah Jenkins", periodsPerWeek: 4 },
    { code: "ENG-101", name: "English Literature", grade: "Grade 10", teacher: "Elena Rostova", periodsPerWeek: 4 },
    { code: "CSC-101", name: "Computer Science & Python", grade: "Grade 10", teacher: "Marcus Thorne", periodsPerWeek: 4 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Academic Curriculum Subjects</h1>
        <p className="text-sm text-muted-foreground">Course codes, weekly teaching periods, and assigned faculty</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((s) => (
          <Card key={s.code}>
            <CardHeader className="pb-2">
              <Badge variant="outline" className="w-fit font-mono text-[10px] mb-1">{s.code}</Badge>
              <CardTitle className="text-base font-bold">{s.name}</CardTitle>
              <CardDescription>{s.grade} · {s.teacher}</CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground pt-2 border-t flex justify-between">
              <span>Weekly Periods:</span>
              <span className="font-bold text-foreground">{s.periodsPerWeek} Lectures / wk</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function CurriculumView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Curriculum & Syllabus Breakdown</h1>
        <p className="text-sm text-muted-foreground">CBSE / IB syllabus units, learning goals, and term coverage</p>
      </div>
      <Card>
        <CardHeader><CardTitle className="text-base">Grade 10 Physics Syllabus Outline</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-xs">
          <div className="p-3 rounded-lg border bg-muted/20">
            <h4 className="font-bold text-foreground">Unit 1: Optics & Light Reflection</h4>
            <p className="text-muted-foreground mt-1">Spherical mirrors, refraction indices, lens formula, magnification, and human eye optics.</p>
          </div>
          <div className="p-3 rounded-lg border bg-muted/20">
            <h4 className="font-bold text-foreground">Unit 2: Electricity & Magnetism</h4>
            <p className="text-muted-foreground mt-1">Ohm’s law, series/parallel resistance, heating effect, magnetic field lines, and electromagnetic induction.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function LessonPlansView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Faculty Lesson Plans</h1>
        <p className="text-sm text-muted-foreground">Weekly learning goals, teaching resources, and lesson submissions</p>
      </div>
      <Card>
        <CardHeader><CardTitle className="text-base">Active Teaching Plans (Week 4)</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-xs">
          <div className="flex justify-between items-center p-3 rounded-lg border bg-muted/20">
            <div><p className="font-semibold text-foreground">Grade 10 Physics: Optical Lenses Experiment</p><p className="text-muted-foreground">Instructor: Sarah Jenkins · Status: Approved by Academic Dean</p></div>
            <Badge variant="default">Approved</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function StudyMaterialsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Study Materials & Digital Resources</h1>
        <p className="text-sm text-muted-foreground">Downloadable textbook chapters, revision notes, and formula sheets</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-base">Physics Formula Sheet (Grade 10)</CardTitle><CardDescription>PDF Document · 2.4 MB</CardDescription></CardHeader>
          <CardContent><Button size="xs" variant="outline"><Download className="mr-1 size-3.5" /> Download PDF</Button></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-base">Mathematics Calculus Problem Bank</CardTitle><CardDescription>PDF Document · 4.1 MB</CardDescription></CardHeader>
          <CardContent><Button size="xs" variant="outline"><Download className="mr-1 size-3.5" /> Download PDF</Button></CardContent>
        </Card>
      </div>
    </div>
  );
}

export function HomeworkAssignmentsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Homework & Assignments</h1>
        <p className="text-sm text-muted-foreground">Track homework assignments, student submission turn-ins, and grades</p>
      </div>
      <Card>
        <CardHeader><CardTitle className="text-base">Assignments Registry</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-xs">
          <div className="flex justify-between items-center p-3 rounded-lg border bg-muted/20">
            <div>
              <p className="font-semibold text-foreground">Physics: Optics Ray Diagram Worksheet</p>
              <p className="text-muted-foreground">Due: Friday, September 12 · Max Score: 20 pts</p>
            </div>
            <Badge variant="secondary">Turned In</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function AdmissionsInquiriesView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Admissions Leads & Inquiries</h1>
        <p className="text-sm text-muted-foreground">Prospective student inquiries, parent counseling, and follow-ups</p>
      </div>
      <Card>
        <CardHeader><CardTitle className="text-base">New Inquiries (Session 2026-2027)</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-xs">
          <div className="flex justify-between items-center p-3 rounded-lg border bg-muted/20">
            <div><p className="font-semibold text-foreground">Alex Henderson (Seeking Grade 9)</p><p className="text-muted-foreground">Parent: Mark Henderson · Phone: +1 555-4401</p></div>
            <Badge variant="outline">Follow-Up Scheduled</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
