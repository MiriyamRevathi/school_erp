"use client";

import * as React from "react";
import { api } from "~/lib/api";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Calendar, PenLine, ChartNoAxesColumn, FileBadge, ScrollText, Send, Award, RefreshCw, Eye, CheckCircle2, X } from "lucide-react";

// -------------------------------------------------------------
// 1. Exam Schedule View
// -------------------------------------------------------------
export function ExamScheduleView() {
  const [exams, setExams] = React.useState([
    { id: "exm-1", name: "Mid-Term Examination 2025", term: "Term 1", startDate: "2025-10-10", endDate: "2025-10-22", status: "Scheduled", papers: [
      { subject: "Mathematics", date: "2025-10-10", time: "09:00 - 12:00", maxMarks: 100, hall: "Hall A (Room 201)" },
      { subject: "Physics", date: "2025-10-12", time: "09:00 - 12:00", maxMarks: 100, hall: "Hall A (Room 201)" },
      { subject: "Chemistry", date: "2025-10-15", time: "09:00 - 12:00", maxMarks: 100, hall: "Hall A (Room 201)" },
      { subject: "English Literature", date: "2025-10-18", time: "09:00 - 12:00", maxMarks: 100, hall: "Hall A (Room 201)" },
    ]},
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Examinations & Timetable Schedule</h1>
        <p className="text-sm text-muted-foreground">
          Official assessment terms, date sheets, exam hall allocations, and timings
        </p>
      </div>

      <div className="space-y-4">
        {exams.map((ex) => (
          <Card key={ex.id}>
            <CardHeader className="pb-3">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <Badge variant="outline" className="mb-1">{ex.term}</Badge>
                  <CardTitle className="text-lg font-bold">{ex.name}</CardTitle>
                  <CardDescription>Date Range: {ex.startDate} to {ex.endDate}</CardDescription>
                </div>
                <Badge variant="default">{ex.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="border-b bg-muted/50 text-xs font-medium text-muted-foreground uppercase">
                    <tr>
                      <th className="px-4 py-3">Subject Paper</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Time Window</th>
                      <th className="px-4 py-3">Max Score</th>
                      <th className="px-4 py-3">Exam Hall</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-xs">
                    {ex.papers.map((p, i) => (
                      <tr key={i} className="hover:bg-muted/30">
                        <td className="px-4 py-3 font-semibold text-foreground">{p.subject}</td>
                        <td className="px-4 py-3 font-mono">{p.date}</td>
                        <td className="px-4 py-3 font-mono">{p.time}</td>
                        <td className="px-4 py-3 font-bold">{p.maxMarks} Marks</td>
                        <td className="px-4 py-3 text-muted-foreground">{p.hall}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 2. Marks Entry View (Teachers & Admin)
// -------------------------------------------------------------
export function MarksEntryView() {
  const [scores, setScores] = React.useState([
    { id: "1", name: "Liam Davis", roll: "101", math: 94, physics: 88, chem: 91, eng: 85 },
    { id: "2", name: "Sophia Martinez", roll: "102", math: 90, physics: 86, chem: 89, eng: 92 },
    { id: "3", name: "Noah Johnson", roll: "103", math: 85, physics: 82, chem: 80, eng: 88 },
  ]);
  const [saved, setSaved] = React.useState(false);

  const handleScoreChange = (id: string, field: string, val: number) => {
    setScores((prev) => prev.map((s) => (s.id === id ? { ...s, [field]: val } : s)));
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Examination Marks Entry</h1>
          <p className="text-sm text-muted-foreground">
            Enter and record student assessment scores for Grade 10 - Section A
          </p>
        </div>
        <Button onClick={handleSave}>
          <CheckCircle2 className="mr-2 size-4" /> Save Score Sheet
        </Button>
      </div>

      {saved && (
        <div className="rounded-lg bg-emerald-500/15 p-3 text-sm text-emerald-700 font-medium flex items-center gap-2">
          <CheckCircle2 className="size-4" /> Exam marks recorded successfully!
        </div>
      )}

      <Card>
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b bg-muted/50 text-xs font-medium text-muted-foreground uppercase">
                <tr>
                  <th className="px-4 py-3">Student Name</th>
                  <th className="px-4 py-3">Roll #</th>
                  <th className="px-4 py-3">Math (100)</th>
                  <th className="px-4 py-3">Physics (100)</th>
                  <th className="px-4 py-3">Chemistry (100)</th>
                  <th className="px-4 py-3">English (100)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-xs">
                {scores.map((s) => (
                  <tr key={s.id}>
                    <td className="px-4 py-3 font-semibold">{s.name}</td>
                    <td className="px-4 py-3 font-mono">{s.roll}</td>
                    <td className="px-4 py-3">
                      <Input
                        type="number"
                        className="w-20 h-8 text-xs font-mono"
                        value={s.math}
                        onChange={(e) => handleScoreChange(s.id, "math", Number(e.target.value))}
                      />
                    </td>
                    <td className="px-4 py-3">
                      <Input
                        type="number"
                        className="w-20 h-8 text-xs font-mono"
                        value={s.physics}
                        onChange={(e) => handleScoreChange(s.id, "physics", Number(e.target.value))}
                      />
                    </td>
                    <td className="px-4 py-3">
                      <Input
                        type="number"
                        className="w-20 h-8 text-xs font-mono"
                        value={s.chem}
                        onChange={(e) => handleScoreChange(s.id, "chem", Number(e.target.value))}
                      />
                    </td>
                    <td className="px-4 py-3">
                      <Input
                        type="number"
                        className="w-20 h-8 text-xs font-mono"
                        value={s.eng}
                        onChange={(e) => handleScoreChange(s.id, "eng", Number(e.target.value))}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// -------------------------------------------------------------
// 3. Grades & GPA View
// -------------------------------------------------------------
export function GradesGpaView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Grading Scale & GPA Metrics</h1>
        <p className="text-sm text-muted-foreground">
          Grade conversion criteria, grade point averages, and percentile brackets
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Institutional 4.0 GPA Grading Scale</CardTitle>
            <CardDescription>Academic evaluation thresholds</CardDescription>
          </CardHeader>
          <CardContent>
            <table className="w-full text-xs text-left">
              <thead className="border-b bg-muted/50">
                <tr>
                  <th className="p-2">Percentage</th>
                  <th className="p-2">Letter Grade</th>
                  <th className="p-2">Grade Point (GPA)</th>
                  <th className="p-2">Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border font-mono">
                <tr><td className="p-2">90% - 100%</td><td className="p-2 font-bold text-emerald-600">A+</td><td className="p-2">4.0</td><td className="p-2 font-sans text-muted-foreground">Outstanding</td></tr>
                <tr><td className="p-2">80% - 89%</td><td className="p-2 font-bold text-blue-600">A</td><td className="p-2">3.5</td><td className="p-2 font-sans text-muted-foreground">Excellent</td></tr>
                <tr><td className="p-2">70% - 79%</td><td className="p-2 font-bold text-amber-600">B+</td><td className="p-2">3.0</td><td className="p-2 font-sans text-muted-foreground">Very Good</td></tr>
                <tr><td className="p-2">60% - 69%</td><td className="p-2 font-bold text-orange-600">B</td><td className="p-2">2.5</td><td className="p-2 font-sans text-muted-foreground">Good</td></tr>
                <tr><td className="p-2">&lt; 50%</td><td className="p-2 font-bold text-red-600">F</td><td className="p-2">0.0</td><td className="p-2 font-sans text-muted-foreground">Needs Improvement</td></tr>
              </tbody>
            </table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Class Performance Summary</CardTitle>
            <CardDescription>Mid-Term assessment cohort stats</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-xs">
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">Class Average Score:</span>
              <span className="font-bold text-foreground font-mono">89.1% (GPA 3.88)</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">Total A+ Honor Roll Students:</span>
              <span className="font-bold text-emerald-600 font-mono">14 Students (43.7%)</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-muted-foreground">Pass Ratio:</span>
              <span className="font-bold text-emerald-600 font-mono">100% Cleared</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 4. Report Cards View
// -------------------------------------------------------------
export function ReportCardsView() {
  const [selectedStudent, setSelectedStudent] = React.useState<any>(null);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Official Student Report Cards</h1>
        <p className="text-sm text-muted-foreground">
          View and print term evaluation report cards with subject-by-subject scorecards
        </p>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Term 1 Assessment Report Cards (Grade 10-A)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b bg-muted/50 text-xs font-medium text-muted-foreground uppercase">
                <tr>
                  <th className="px-4 py-3">Rank</th>
                  <th className="px-4 py-3">Student Name</th>
                  <th className="px-4 py-3">Roll #</th>
                  <th className="px-4 py-3">Total Marks</th>
                  <th className="px-4 py-3">Percentage</th>
                  <th className="px-4 py-3">GPA</th>
                  <th className="px-4 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-xs">
                <tr className="hover:bg-muted/30">
                  <td className="px-4 py-3 font-bold text-primary">#1</td>
                  <td className="px-4 py-3 font-semibold">Liam Davis</td>
                  <td className="px-4 py-3 font-mono">101</td>
                  <td className="px-4 py-3 font-mono">358 / 400</td>
                  <td className="px-4 py-3 font-bold">89.5%</td>
                  <td className="px-4 py-3 font-mono text-emerald-600 font-bold">3.90</td>
                  <td className="px-4 py-3 text-right">
                    <Button size="xs" onClick={() => setSelectedStudent({ name: "Liam Davis", roll: "101", gpa: "3.90", total: "358 / 400", rank: "#1" })}>
                      <Eye className="mr-1 size-3.5" /> View Card
                    </Button>
                  </td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="px-4 py-3 font-bold text-primary">#2</td>
                  <td className="px-4 py-3 font-semibold">Sophia Martinez</td>
                  <td className="px-4 py-3 font-mono">102</td>
                  <td className="px-4 py-3 font-mono">357 / 400</td>
                  <td className="px-4 py-3 font-bold">89.2%</td>
                  <td className="px-4 py-3 font-mono text-emerald-600 font-bold">3.85</td>
                  <td className="px-4 py-3 text-right">
                    <Button size="xs" onClick={() => setSelectedStudent({ name: "Sophia Martinez", roll: "102", gpa: "3.85", total: "357 / 400", rank: "#2" })}>
                      <Eye className="mr-1 size-3.5" /> View Card
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Report Card Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-xl border bg-background p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h2 className="text-lg font-bold">Greenwood International Academy</h2>
                <p className="text-xs text-muted-foreground">Official Term Assessment Report Card</p>
              </div>
              <Button variant="ghost" size="icon-xs" onClick={() => setSelectedStudent(null)}>
                <X className="size-4" />
              </Button>
            </div>

            <div className="rounded-lg bg-muted/40 p-3 text-xs space-y-1">
              <div className="flex justify-between"><span className="text-muted-foreground">Student Name:</span><span className="font-bold">{selectedStudent.name}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Roll Number:</span><span className="font-mono">{selectedStudent.roll}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Class Standing:</span><span className="font-bold text-primary">{selectedStudent.rank}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Term GPA:</span><span className="font-bold text-emerald-600 font-mono">{selectedStudent.gpa} / 4.0</span></div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t">
              <Button size="sm" onClick={() => setSelectedStudent(null)}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// 5. Transcripts View
// -------------------------------------------------------------
export function TranscriptsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Cumulative Transcripts</h1>
        <p className="text-sm text-muted-foreground">
          Multi-year academic progression transcripts and credit completion certificates
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Academic Transcript Registry</CardTitle>
          <CardDescription>Official verified transcripts for college admissions and transfers</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-xs">
          <div className="flex items-center justify-between p-3 rounded-lg border bg-muted/20">
            <div>
              <p className="font-semibold text-foreground">Liam Davis (ADM-2025-001)</p>
              <p className="text-muted-foreground">Cumulative GPA: 3.92 · 48 Credits Earned · Grade 10</p>
            </div>
            <Button size="xs" variant="outline"><ScrollText className="mr-1 size-3.5" /> Download Transcript</Button>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg border bg-muted/20">
            <div>
              <p className="font-semibold text-foreground">Sophia Martinez (ADM-2025-002)</p>
              <p className="text-muted-foreground">Cumulative GPA: 3.88 · 48 Credits Earned · Grade 10</p>
            </div>
            <Button size="xs" variant="outline"><ScrollText className="mr-1 size-3.5" /> Download Transcript</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// -------------------------------------------------------------
// 6. Result Publish View (Admins & Teachers)
// -------------------------------------------------------------
export function ResultPublishView() {
  const [published, setPublished] = React.useState(true);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Term Result Publication</h1>
        <p className="text-sm text-muted-foreground">
          Control portal result release and notify students and parents
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base">Term 1 Assessment Examination</CardTitle>
              <CardDescription>Academic Year 2025-2026</CardDescription>
            </div>
            <Badge variant={published ? "default" : "secondary"}>
              {published ? "Results Published Online" : "Draft / Unpublished"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 text-xs">
          <p className="text-muted-foreground leading-relaxed">
            When published, students and parents can instantly view their scorecards, grades, and cumulative GPA on their student portal dashboards.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <Button size="sm" variant={published ? "destructive" : "default"} onClick={() => setPublished(!published)}>
              <Send className="mr-1.5 size-3.5" /> {published ? "Unpublish Results" : "Publish to Student Portal"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// -------------------------------------------------------------
// 7. Certificates View
// -------------------------------------------------------------
export function CertificatesView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Merit & Honor Roll Certificates</h1>
        <p className="text-sm text-muted-foreground">
          Generate printable academic excellence certificates and awards
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="border-l-4 border-l-amber-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Award className="size-5 text-amber-500" /> Academic Honor Roll (Term 1)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-xs">
            <p className="font-semibold text-foreground">Liam Davis (GPA 3.90 · Rank #1)</p>
            <p className="text-muted-foreground">Issued by Greenwood International Academy for outstanding scholastic achievement.</p>
            <Button size="xs" variant="outline" className="mt-2"><Award className="mr-1 size-3" /> Print Certificate</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
