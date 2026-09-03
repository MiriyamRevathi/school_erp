"use client";

import * as React from "react";
import { api } from "~/lib/api";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Award, Plus, Trash2, Edit2, RefreshCw, AlertCircle, Calendar, Clock, X } from "lucide-react";

export interface Exam {
  id: string;
  name: string;
  term: string;
  academicYear: string;
  startDate: string;
  endDate: string;
  status: "Upcoming" | "Ongoing" | "Completed" | "Published";
  schedules: {
    subject: string;
    date: string;
    time: string;
    className: string;
    maxMarks: number;
  }[];
}

export function ExamView() {
  const [exams, setExams] = React.useState<Exam[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [selectedExam, setSelectedExam] = React.useState<Exam | null>(null);

  const [formData, setFormData] = React.useState<Partial<Exam>>({
    name: "",
    term: "Term 1",
    academicYear: "2025-2026",
    startDate: "2025-10-15",
    endDate: "2025-10-25",
    status: "Upcoming",
    schedules: [
      { subject: "Mathematics", date: "2025-10-15", time: "09:00 - 12:00", className: "Grade 10", maxMarks: 100 },
      { subject: "Physics", date: "2025-10-17", time: "09:00 - 12:00", className: "Grade 10", maxMarks: 100 },
    ],
  });

  const loadExams = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.get<Exam[]>("/exams");
      setExams(Array.isArray(data) ? data : []);
      if (data && data.length > 0 && !selectedExam) {
        setSelectedExam(data[0]);
      }
    } catch (err: any) {
      setError(err.message || "Failed to load exams from backend");
    } finally {
      setLoading(false);
    }
  }, [selectedExam]);

  React.useEffect(() => {
    loadExams();
  }, [loadExams]);

  const handleSaveExam = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/exams", formData);
      setShowAddModal(false);
      loadExams();
    } catch (err: any) {
      alert(err.message || "Failed to create exam");
    }
  };

  const handleDeleteExam = async (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      try {
        await api.delete(`/exams/${id}`);
        loadExams();
      } catch (err: any) {
        alert(err.message || "Failed to delete exam");
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Examinations & Schedules</h1>
          <p className="text-sm text-muted-foreground">
            Manage assessment terms, subject examination timetables, and grading rules
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={loadExams} disabled={loading}>
            <RefreshCw className={`mr-2 size-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
          <Button size="sm" onClick={() => setShowAddModal(true)}>
            <Plus className="mr-2 size-4" /> Create Exam Term
          </Button>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-lg bg-destructive/15 p-4 text-sm text-destructive">
          <AlertCircle className="size-5 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Exam Terms List */}
        <Card className="lg:col-span-1">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Examination Terms ({exams.length})</CardTitle>
            <CardDescription>Select an examination to view its subject schedule</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {loading ? (
              <div className="py-8 text-center text-muted-foreground">
                <RefreshCw className="size-5 animate-spin mx-auto text-primary" />
              </div>
            ) : exams.length === 0 ? (
              <p className="py-8 text-center text-xs text-muted-foreground">No exams scheduled</p>
            ) : (
              exams.map((exm) => (
                <div
                  key={exm.id}
                  onClick={() => setSelectedExam(exm)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    selectedExam?.id === exm.id
                      ? "border-primary bg-primary/5 shadow-xs"
                      : "hover:bg-muted/40"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-sm">{exm.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {exm.term} · {exm.academicYear}
                      </p>
                    </div>
                    <Badge variant={exm.status === "Completed" ? "default" : "secondary"} className="text-[10px]">
                      {exm.status}
                    </Badge>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground pt-2 border-t">
                    <span className="flex items-center gap-1">
                      <Calendar className="size-3" /> {exm.startDate}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteExam(exm.id, exm.name);
                      }}
                      className="text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="size-3.5" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        {/* Selected Exam Schedule Table */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">
                  {selectedExam ? selectedExam.name : "Exam Schedule"}
                </CardTitle>
                <CardDescription>
                  {selectedExam
                    ? `${selectedExam.term} · Assessment period: ${selectedExam.startDate} to ${selectedExam.endDate}`
                    : "Select an exam on the left"}
                </CardDescription>
              </div>
              {selectedExam && (
                <Badge variant="outline" className="font-mono">
                  {selectedExam.schedules?.length || 0} Papers
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {!selectedExam || !selectedExam.schedules || selectedExam.schedules.length === 0 ? (
              <div className="py-12 text-center text-muted-foreground space-y-2">
                <Award className="mx-auto size-8 text-muted-foreground/50" />
                <p className="font-medium text-foreground">No timetable entries for this exam</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="border-b bg-muted/50 text-xs font-medium text-muted-foreground uppercase">
                    <tr>
                      <th className="px-4 py-3">Subject</th>
                      <th className="px-4 py-3">Class</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Time Slot</th>
                      <th className="px-4 py-3 text-right">Max Marks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {selectedExam.schedules.map((sch, i) => (
                      <tr key={i} className="hover:bg-muted/30">
                        <td className="px-4 py-3 font-semibold text-foreground">{sch.subject}</td>
                        <td className="px-4 py-3 text-xs">
                          <Badge variant="outline">{sch.className}</Badge>
                        </td>
                        <td className="px-4 py-3 font-mono text-xs">{sch.date}</td>
                        <td className="px-4 py-3 text-xs flex items-center gap-1.5 text-muted-foreground">
                          <Clock className="size-3.5" /> {sch.time}
                        </td>
                        <td className="px-4 py-3 text-right font-mono font-medium text-xs">
                          {sch.maxMarks} pts
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Create Exam Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-xl border bg-background p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h2 className="text-lg font-bold">Schedule Examination Term</h2>
              <Button variant="ghost" size="icon-xs" onClick={() => setShowAddModal(false)}>
                <X className="size-4" />
              </Button>
            </div>

            <form onSubmit={handleSaveExam} className="space-y-4 text-sm">
              <div className="space-y-1">
                <Label>Exam Name</Label>
                <Input
                  required
                  placeholder="Mid-Term Examinations 2025"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label>Term</Label>
                  <Input
                    required
                    placeholder="Term 1"
                    value={formData.term}
                    onChange={(e) => setFormData({ ...formData, term: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <Label>Academic Year</Label>
                  <Input
                    required
                    placeholder="2025-2026"
                    value={formData.academicYear}
                    onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label>Start Date</Label>
                  <Input
                    type="date"
                    required
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <Label>End Date</Label>
                  <Input
                    type="date"
                    required
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t">
                <Button type="button" variant="outline" onClick={() => setShowAddModal(false)}>
                  Cancel
                </Button>
                <Button type="submit">Publish Schedule</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
