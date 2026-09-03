"use client";

import * as React from "react";
import { api } from "~/lib/api";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import {
  ClipboardCheck,
  CheckCircle2,
  XCircle,
  Clock,
  RefreshCw,
  AlertCircle,
  Save,
  Calendar,
} from "lucide-react";

export interface AttendanceRecord {
  id: string;
  studentId: string;
  studentName: string;
  className: string;
  section: string;
  date: string;
  status: "Present" | "Absent" | "Late" | "Excused";
  remarks?: string;
}

export function AttendanceView() {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = React.useState<string>(today);
  const [selectedClass, setSelectedClass] = React.useState<string>("Grade 10");
  const [records, setRecords] = React.useState<AttendanceRecord[]>([]);
  const [summary, setSummary] = React.useState<any>({
    total: 0,
    present: 0,
    absent: 0,
    late: 0,
    attendancePercentage: 0,
  });
  const [loading, setLoading] = React.useState(true);
  const [saving, setSaving] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = React.useState(false);

  const loadAttendance = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [recs, sum, students] = await Promise.all([
        api.get<AttendanceRecord[]>(`/attendance?date=${selectedDate}`),
        api.get(`/attendance/summary?date=${selectedDate}`),
        api.get<any[]>("/students"),
      ]);

      let attendanceList = Array.isArray(recs) ? recs : [];

      // If no records exist for today, synthesize from students list so user can mark attendance
      if (attendanceList.length === 0 && Array.isArray(students) && students.length > 0) {
        attendanceList = students.map((s) => ({
          id: `draft-${s.id}`,
          studentId: s.id,
          studentName: `${s.firstName} ${s.lastName}`,
          className: s.className,
          section: s.section,
          date: selectedDate,
          status: "Present",
        }));
      }

      setRecords(attendanceList);
      setSummary(sum || { total: 0, present: 0, absent: 0, late: 0, attendancePercentage: 0 });
    } catch (err: any) {
      setError(err.message || "Failed to load attendance records");
    } finally {
      setLoading(false);
    }
  }, [selectedDate]);

  React.useEffect(() => {
    loadAttendance();
  }, [loadAttendance]);

  const updateStatus = (index: number, status: "Present" | "Absent" | "Late") => {
    const updated = [...records];
    updated[index].status = status;
    setRecords(updated);

    // recalculate live summary
    const present = updated.filter((r) => r.status === "Present").length;
    const absent = updated.filter((r) => r.status === "Absent").length;
    const late = updated.filter((r) => r.status === "Late").length;
    const total = updated.length;
    setSummary({
      total,
      present,
      absent,
      late,
      attendancePercentage: total > 0 ? Math.round((present / total) * 100) : 100,
    });
  };

  const handleSaveAttendance = async () => {
    setSaving(true);
    setError(null);
    setSaveSuccess(false);
    try {
      await api.post("/attendance/mark", { records });
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
      loadAttendance();
    } catch (err: any) {
      setError(err.message || "Failed to save attendance");
    } finally {
      setSaving(false);
    }
  };

  const markAll = (status: "Present" | "Absent") => {
    const updated = records.map((r) => ({ ...r, status }));
    setRecords(updated);
    const present = status === "Present" ? updated.length : 0;
    const absent = status === "Absent" ? updated.length : 0;
    setSummary({
      total: updated.length,
      present,
      absent,
      late: 0,
      attendancePercentage: status === "Present" ? 100 : 0,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Daily Attendance Register</h1>
          <p className="text-sm text-muted-foreground">
            Track student presence, record absences, and generate attendance roll sheets
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={loadAttendance} disabled={loading}>
            <RefreshCw className={`mr-2 size-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
          <Button size="sm" onClick={handleSaveAttendance} disabled={saving || records.length === 0}>
            <Save className="mr-2 size-4" />
            {saving ? "Saving..." : "Save Attendance"}
          </Button>
        </div>
      </div>

      {saveSuccess && (
        <div className="rounded-lg bg-emerald-500/15 p-3 text-sm text-emerald-700 font-medium flex items-center gap-2">
          <CheckCircle2 className="size-4" />
          Attendance marked successfully!
        </div>
      )}

      {error && (
        <div className="flex items-center gap-2 rounded-lg bg-destructive/15 p-4 text-sm text-destructive">
          <AlertCircle className="size-5 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {/* Date & Filter Toolbar */}
      <Card>
        <CardContent className="pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Calendar className="size-4 text-muted-foreground" />
              <Input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-40 text-xs"
              />
            </div>
            <select
              className="rounded-md border bg-background px-3 py-1.5 text-xs"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              <option value="All">All Grades</option>
              <option value="Grade 10">Grade 10</option>
              <option value="Grade 9">Grade 9</option>
              <option value="Grade 11">Grade 11</option>
              <option value="Grade 8">Grade 8</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Quick Mark:</span>
            <Button variant="outline" size="xs" onClick={() => markAll("Present")}>
              Mark All Present
            </Button>
            <Button variant="outline" size="xs" onClick={() => markAll("Absent")}>
              Mark All Absent
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Attendance Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-4">
        <Card className="bg-blue-500/5 border-blue-500/20">
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-muted-foreground">Total Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{summary.total ?? records.length}</div>
          </CardContent>
        </Card>

        <Card className="bg-emerald-500/5 border-emerald-500/20">
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-emerald-700">Present</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">{summary.present}</div>
          </CardContent>
        </Card>

        <Card className="bg-red-500/5 border-red-500/20">
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-red-700">Absent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{summary.absent}</div>
          </CardContent>
        </Card>

        <Card className="bg-amber-500/5 border-amber-500/20">
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-amber-700">Late / Excused</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-600">{summary.late}</div>
          </CardContent>
        </Card>
      </div>

      {/* Attendance Marking Table */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Roll Call Sheet ({selectedDate})</CardTitle>
          <CardDescription>Click status badges to toggle attendance state</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="py-12 text-center text-muted-foreground">
              <RefreshCw className="size-6 animate-spin mx-auto text-primary mb-2" />
              <p className="text-sm">Loading attendance sheet...</p>
            </div>
          ) : records.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground space-y-2">
              <ClipboardCheck className="mx-auto size-8 text-muted-foreground/50" />
              <p className="font-medium text-foreground">No students in roster</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b bg-muted/50 text-xs font-medium text-muted-foreground uppercase">
                  <tr>
                    <th className="px-4 py-3">#</th>
                    <th className="px-4 py-3">Student Name</th>
                    <th className="px-4 py-3">Class & Section</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3 text-right">Quick Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {records.map((r, i) => (
                    <tr key={r.id || i} className="hover:bg-muted/30 transition-colors">
                      <td className="px-4 py-3 text-xs text-muted-foreground">{i + 1}</td>
                      <td className="px-4 py-3 font-medium text-foreground">{r.studentName}</td>
                      <td className="px-4 py-3 text-xs">
                        <Badge variant="outline">{r.className} - {r.section}</Badge>
                      </td>
                      <td className="px-4 py-3">
                        <Badge
                          variant={
                            r.status === "Present"
                              ? "default"
                              : r.status === "Absent"
                              ? "destructive"
                              : "secondary"
                          }
                          className="font-medium"
                        >
                          {r.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            type="button"
                            onClick={() => updateStatus(i, "Present")}
                            className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                              r.status === "Present"
                                ? "bg-emerald-600 text-white shadow-xs"
                                : "border border-muted text-muted-foreground hover:bg-emerald-50"
                            }`}
                          >
                            P
                          </button>
                          <button
                            type="button"
                            onClick={() => updateStatus(i, "Absent")}
                            className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                              r.status === "Absent"
                                ? "bg-red-600 text-white shadow-xs"
                                : "border border-muted text-muted-foreground hover:bg-red-50"
                            }`}
                          >
                            A
                          </button>
                          <button
                            type="button"
                            onClick={() => updateStatus(i, "Late")}
                            className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                              r.status === "Late"
                                ? "bg-amber-600 text-white shadow-xs"
                                : "border border-muted text-muted-foreground hover:bg-amber-50"
                            }`}
                          >
                            L
                          </button>
                        </div>
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
  );
}
