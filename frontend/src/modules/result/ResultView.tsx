"use client";

import * as React from "react";
import { api } from "~/lib/api";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Award, Plus, RefreshCw, AlertCircle, TrendingUp, Search, Eye, X } from "lucide-react";

export interface StudentResult {
  id: string;
  examId: string;
  studentId: string;
  studentName: string;
  rollNumber: string;
  className: string;
  section: string;
  marks: {
    subject: string;
    obtainedMarks: number;
    maxMarks: number;
    grade: string;
  }[];
  totalObtained: number;
  totalMax: number;
  percentage: number;
  gpa: number;
  overallGrade: string;
  rank: number;
}

export function ResultView() {
  const [results, setResults] = React.useState<StudentResult[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [search, setSearch] = React.useState("");
  const [selectedResult, setSelectedResult] = React.useState<StudentResult | null>(null);
  const [showAddModal, setShowAddModal] = React.useState(false);

  const [formData, setFormData] = React.useState({
    studentName: "Liam Davis",
    rollNumber: "101",
    className: "Grade 10",
    section: "A",
    examId: "exm-1",
    math: 90,
    physics: 85,
    chemistry: 88,
    english: 82,
  });

  const loadResults = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.get<StudentResult[]>("/results");
      setResults(Array.isArray(data) ? data : []);
    } catch (err: any) {
      setError(err.message || "Failed to load examination results");
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadResults();
  }, [loadResults]);

  const handleSaveResult = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        studentName: formData.studentName,
        rollNumber: formData.rollNumber,
        className: formData.className,
        section: formData.section,
        examId: formData.examId,
        marks: [
          { subject: "Mathematics", obtainedMarks: Number(formData.math), maxMarks: 100, grade: "A" },
          { subject: "Physics", obtainedMarks: Number(formData.physics), maxMarks: 100, grade: "A" },
          { subject: "Chemistry", obtainedMarks: Number(formData.chemistry), maxMarks: 100, grade: "A" },
          { subject: "English", obtainedMarks: Number(formData.english), maxMarks: 100, grade: "A" },
        ],
      };
      await api.post("/results", payload);
      setShowAddModal(false);
      loadResults();
    } catch (err: any) {
      alert(err.message || "Failed to record marks");
    }
  };

  const filtered = results.filter((r) =>
    `${r.studentName} ${r.rollNumber} ${r.className}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Academic Results & Transcripts</h1>
          <p className="text-sm text-muted-foreground">
            View term assessment scores, GPA rankings, and student report cards
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={loadResults} disabled={loading}>
            <RefreshCw className={`mr-2 size-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
          <Button size="sm" onClick={() => setShowAddModal(true)}>
            <Plus className="mr-2 size-4" /> Enter Marks
          </Button>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-lg bg-destructive/15 p-4 text-sm text-destructive">
          <AlertCircle className="size-5 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {/* Summary KPI stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-muted-foreground">Class Average GPA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">3.88 / 4.0</div>
            <p className="text-xs text-muted-foreground mt-1">Grade 10 Mid-Term Assessment</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-muted-foreground">Top Rank Holder</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">Liam Davis (Rank #1)</div>
            <p className="text-xs text-muted-foreground mt-1">358 / 400 (89.5%)</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-muted-foreground">Pass Percentage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">100%</div>
            <p className="text-xs text-muted-foreground mt-1">All enrolled candidates cleared</p>
          </CardContent>
        </Card>
      </div>

      {/* Results Table */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle className="text-base">Marks & Grades Registry</CardTitle>
              <CardDescription>Term assessment scores recorded in database</CardDescription>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
              <Input
                placeholder="Search student or roll..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="py-12 text-center text-muted-foreground">
              <RefreshCw className="size-6 animate-spin mx-auto text-primary mb-2" />
              <p className="text-sm">Loading results...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground space-y-2">
              <Award className="mx-auto size-8 text-muted-foreground/50" />
              <p className="font-medium text-foreground">No examination results found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b bg-muted/50 text-xs font-medium text-muted-foreground uppercase">
                  <tr>
                    <th className="px-4 py-3">Rank</th>
                    <th className="px-4 py-3">Student</th>
                    <th className="px-4 py-3">Class</th>
                    <th className="px-4 py-3">Total Marks</th>
                    <th className="px-4 py-3">Percentage</th>
                    <th className="px-4 py-3">GPA</th>
                    <th className="px-4 py-3">Grade</th>
                    <th className="px-4 py-3 text-right">Report Card</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filtered.map((r) => (
                    <tr key={r.id} className="hover:bg-muted/30">
                      <td className="px-4 py-3 font-bold text-primary">#{r.rank}</td>
                      <td className="px-4 py-3">
                        <div className="font-medium text-foreground">{r.studentName}</div>
                        <div className="text-xs text-muted-foreground">Roll #{r.rollNumber}</div>
                      </td>
                      <td className="px-4 py-3 text-xs">
                        <Badge variant="outline">{r.className} - {r.section}</Badge>
                      </td>
                      <td className="px-4 py-3 font-mono text-xs">
                        {r.totalObtained} / {r.totalMax}
                      </td>
                      <td className="px-4 py-3 font-semibold text-xs">{r.percentage}%</td>
                      <td className="px-4 py-3 font-mono text-xs font-bold">{r.gpa}</td>
                      <td className="px-4 py-3">
                        <Badge variant="default">{r.overallGrade}</Badge>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Button
                          variant="ghost"
                          size="xs"
                          onClick={() => setSelectedResult(r)}
                        >
                          <Eye className="mr-1 size-3.5" /> View Card
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Report Card Modal */}
      {selectedResult && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-xl border bg-background p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h2 className="text-lg font-bold">Official Student Report Card</h2>
                <p className="text-xs text-muted-foreground">Greenwood International Academy</p>
              </div>
              <Button variant="ghost" size="icon-xs" onClick={() => setSelectedResult(null)}>
                <X className="size-4" />
              </Button>
            </div>

            <div className="rounded-lg bg-muted/40 p-3 text-xs grid grid-cols-2 gap-2">
              <div>
                <span className="text-muted-foreground">Student: </span>
                <span className="font-bold text-foreground">{selectedResult.studentName}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Roll No: </span>
                <span className="font-mono">{selectedResult.rollNumber}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Class & Sec: </span>
                <span>{selectedResult.className} - {selectedResult.section}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Class Standing: </span>
                <span className="font-bold text-primary">Rank #{selectedResult.rank}</span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold">Subject Breakdown:</span>
              <table className="w-full text-xs text-left">
                <thead className="border-b bg-muted/50">
                  <tr>
                    <th className="py-2 px-3">Subject</th>
                    <th className="py-2 px-3 text-center">Score</th>
                    <th className="py-2 px-3 text-right">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {selectedResult.marks?.map((m, i) => (
                    <tr key={i}>
                      <td className="py-2 px-3 font-medium">{m.subject}</td>
                      <td className="py-2 px-3 text-center font-mono">{m.obtainedMarks} / {m.maxMarks}</td>
                      <td className="py-2 px-3 text-right">
                        <Badge variant="secondary" className="text-[10px]">{m.grade}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pt-3 border-t flex items-center justify-between text-xs">
              <div>
                <span className="text-muted-foreground">Cumulative GPA: </span>
                <span className="text-sm font-bold text-primary">{selectedResult.gpa}</span>
              </div>
              <Button size="sm" onClick={() => setSelectedResult(null)}>Close</Button>
            </div>
          </div>
        </div>
      )}

      {/* Enter Marks Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-xl border bg-background p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h2 className="text-lg font-bold">Record Student Exam Marks</h2>
              <Button variant="ghost" size="icon-xs" onClick={() => setShowAddModal(false)}>
                <X className="size-4" />
              </Button>
            </div>

            <form onSubmit={handleSaveResult} className="space-y-3 text-sm">
              <div className="space-y-1">
                <Label>Student Full Name</Label>
                <Input
                  required
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label>Roll Number</Label>
                  <Input
                    required
                    value={formData.rollNumber}
                    onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <Label>Class</Label>
                  <Input
                    required
                    value={formData.className}
                    onChange={(e) => setFormData({ ...formData, className: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="space-y-1">
                  <Label>Mathematics (0-100)</Label>
                  <Input
                    type="number"
                    value={formData.math}
                    onChange={(e) => setFormData({ ...formData, math: Number(e.target.value) })}
                  />
                </div>
                <div className="space-y-1">
                  <Label>Physics (0-100)</Label>
                  <Input
                    type="number"
                    value={formData.physics}
                    onChange={(e) => setFormData({ ...formData, physics: Number(e.target.value) })}
                  />
                </div>
                <div className="space-y-1">
                  <Label>Chemistry (0-100)</Label>
                  <Input
                    type="number"
                    value={formData.chemistry}
                    onChange={(e) => setFormData({ ...formData, chemistry: Number(e.target.value) })}
                  />
                </div>
                <div className="space-y-1">
                  <Label>English (0-100)</Label>
                  <Input
                    type="number"
                    value={formData.english}
                    onChange={(e) => setFormData({ ...formData, english: Number(e.target.value) })}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t">
                <Button type="button" variant="outline" onClick={() => setShowAddModal(false)}>
                  Cancel
                </Button>
                <Button type="submit">Save Report</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
