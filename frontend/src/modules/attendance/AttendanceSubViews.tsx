"use client";

import * as React from "react";
import { api } from "~/lib/api";
import { useAuth } from "~/hooks/use-auth";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { ClipboardCheck, FileBarChart, Plane, Plus, RefreshCw, AlertCircle, CheckCircle2, User, Clock, Calendar, Check, X } from "lucide-react";

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

// -------------------------------------------------------------
// 1. Mark Attendance (Daily Roll Call for Teachers & Admins)
// -------------------------------------------------------------
export function MarkAttendanceView() {
  const [date, setDate] = React.useState<string>(new Date().toISOString().split("T")[0]);
  const [selectedClass, setSelectedClass] = React.useState<string>("Grade 10");
  const [records, setRecords] = React.useState<AttendanceRecord[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [saving, setSaving] = React.useState(false);
  const [savedSuccess, setSavedSuccess] = React.useState(false);

  const loadAttendance = React.useCallback(async () => {
    setLoading(true);
    setSavedSuccess(false);
    try {
      const data = await api.get<AttendanceRecord[]>(`/attendance?date=${date}&className=${selectedClass}`);
      setRecords(Array.isArray(data) ? data : []);
    } catch {
      setRecords([]);
    } finally {
      setLoading(false);
    }
  }, [date, selectedClass]);

  React.useEffect(() => {
    loadAttendance();
  }, [loadAttendance]);

  const handleStatusChange = (id: string, newStatus: AttendanceRecord["status"]) => {
    setRecords((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
  };

  const handleSaveAttendance = async () => {
    setSaving(true);
    try {
      await api.post("/attendance/mark", { records });
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
    } catch (err: any) {
      alert(err.message || "Failed to save attendance");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Daily Roll Call · Attendance Marking</h1>
          <p className="text-sm text-muted-foreground">
            Take student attendance roll call by class and section
          </p>
        </div>
        <Button onClick={handleSaveAttendance} disabled={saving || records.length === 0}>
          <CheckCircle2 className="mr-2 size-4" /> {saving ? "Saving..." : "Save Attendance"}
        </Button>
      </div>

      {savedSuccess && (
        <div className="rounded-lg bg-emerald-500/15 p-3 text-sm text-emerald-700 font-medium flex items-center gap-2">
          <CheckCircle2 className="size-4" /> Attendance records successfully updated for {date}!
        </div>
      )}

      {/* Filter bar */}
      <Card>
        <CardContent className="pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Date</Label>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-40 text-xs"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-muted-foreground">Class</Label>
              <select
                className="rounded-md border bg-background px-3 py-2 text-xs"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
              >
                <option value="Grade 10">Grade 10</option>
                <option value="Grade 9">Grade 9</option>
                <option value="Grade 11">Grade 11</option>
                <option value="Grade 8">Grade 8</option>
              </select>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={loadAttendance}>
            <RefreshCw className="mr-2 size-4" /> Reload
          </Button>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Student Roll List ({records.length})</CardTitle>
          <CardDescription>{selectedClass} · Date: {date}</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="py-12 text-center text-muted-foreground">
              <RefreshCw className="size-6 animate-spin mx-auto text-primary" />
            </div>
          ) : records.length === 0 ? (
            <p className="py-8 text-center text-xs text-muted-foreground">No students found for this class</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b bg-muted/50 text-xs font-medium text-muted-foreground uppercase">
                  <tr>
                    <th className="px-4 py-3">Student</th>
                    <th className="px-4 py-3">Class</th>
                    <th className="px-4 py-3">Status Action</th>
                    <th className="px-4 py-3">Remarks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {records.map((r) => (
                    <tr key={r.id} className="hover:bg-muted/30">
                      <td className="px-4 py-3 font-medium text-foreground">{r.studentName}</td>
                      <td className="px-4 py-3 text-xs">{r.className} - {r.section}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => handleStatusChange(r.id, "Present")}
                            className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                              r.status === "Present"
                                ? "bg-emerald-600 text-white shadow-xs"
                                : "bg-muted text-muted-foreground hover:bg-muted/80"
                            }`}
                          >
                            P
                          </button>
                          <button
                            type="button"
                            onClick={() => handleStatusChange(r.id, "Absent")}
                            className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                              r.status === "Absent"
                                ? "bg-red-600 text-white shadow-xs"
                                : "bg-muted text-muted-foreground hover:bg-muted/80"
                            }`}
                          >
                            A
                          </button>
                          <button
                            type="button"
                            onClick={() => handleStatusChange(r.id, "Late")}
                            className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                              r.status === "Late"
                                ? "bg-amber-600 text-white shadow-xs"
                                : "bg-muted text-muted-foreground hover:bg-muted/80"
                            }`}
                          >
                            L
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-xs text-muted-foreground">{r.remarks || "—"}</td>
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

// -------------------------------------------------------------
// 2. Attendance Reports (Monthly Trends & Summary Analytics)
// -------------------------------------------------------------
export function AttendanceReportsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Institutional Attendance Reports</h1>
        <p className="text-sm text-muted-foreground">
          Monthly student and faculty attendance trends, absence rates, and class averages
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="border-l-4 border-l-emerald-500">
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-muted-foreground">Campus Monthly Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">94.8%</div>
            <p className="text-xs text-muted-foreground mt-1">Average across Grades 8-12</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-muted-foreground">Best Performing Class</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">Grade 10 - Section A</div>
            <p className="text-xs text-muted-foreground mt-1">98.2% Regularity</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-500">
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-muted-foreground">Chronic Absentees (&lt;75%)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">0 Students</div>
            <p className="text-xs text-muted-foreground mt-1">100% exam eligibility compliance</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Class Regularity Breakdown (August 2025)</CardTitle>
          <CardDescription>Aggregated presence records for academic grading</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b bg-muted/50 text-xs font-medium text-muted-foreground uppercase">
                <tr>
                  <th className="px-4 py-3">Class</th>
                  <th className="px-4 py-3">Class Teacher</th>
                  <th className="px-4 py-3">Total Working Days</th>
                  <th className="px-4 py-3">Average Present</th>
                  <th className="px-4 py-3">Attendance %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-xs">
                <tr>
                  <td className="px-4 py-3 font-semibold">Grade 10 - Section A</td>
                  <td className="px-4 py-3">Sarah Jenkins</td>
                  <td className="px-4 py-3 font-mono">25 Days</td>
                  <td className="px-4 py-3 font-mono">31 / 32</td>
                  <td className="px-4 py-3 font-bold text-emerald-600">98.2%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">Grade 10 - Section B</td>
                  <td className="px-4 py-3">David Miller</td>
                  <td className="px-4 py-3 font-mono">25 Days</td>
                  <td className="px-4 py-3 font-mono">28 / 30</td>
                  <td className="px-4 py-3 font-bold text-emerald-600">93.3%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">Grade 9 - Section A</td>
                  <td className="px-4 py-3">Elena Rostova</td>
                  <td className="px-4 py-3 font-mono">25 Days</td>
                  <td className="px-4 py-3 font-mono">26 / 28</td>
                  <td className="px-4 py-3 font-bold text-emerald-600">92.8%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// -------------------------------------------------------------
// 3. Leave Requests (Student & Staff Applications)
// -------------------------------------------------------------
export function LeaveRequestsView() {
  const [leaves, setLeaves] = React.useState([
    { id: "lv-1", applicant: "Liam Davis", role: "Student (Grade 10-A)", type: "Medical Leave", from: "2025-09-18", to: "2025-09-19", reason: "Dental surgery appointment", status: "Approved" },
    { id: "lv-2", applicant: "David Miller", role: "Faculty (Mathematics)", type: "Casual Leave", from: "2025-09-22", to: "2025-09-22", reason: "Family event", status: "Pending" },
  ]);

  const handleAction = (id: string, newStatus: string) => {
    setLeaves((prev) => prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l)));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Leave Management & Approvals</h1>
          <p className="text-sm text-muted-foreground">
            Review student absence applications and faculty leave requests
          </p>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Pending & Approved Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b bg-muted/50 text-xs font-medium text-muted-foreground uppercase">
                <tr>
                  <th className="px-4 py-3">Applicant</th>
                  <th className="px-4 py-3">Leave Type</th>
                  <th className="px-4 py-3">Dates</th>
                  <th className="px-4 py-3">Reason</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-xs">
                {leaves.map((l) => (
                  <tr key={l.id}>
                    <td className="px-4 py-3">
                      <div className="font-semibold text-foreground">{l.applicant}</div>
                      <div className="text-muted-foreground text-[10px]">{l.role}</div>
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant="outline">{l.type}</Badge>
                    </td>
                    <td className="px-4 py-3 font-mono">{l.from} to {l.to}</td>
                    <td className="px-4 py-3 text-muted-foreground">{l.reason}</td>
                    <td className="px-4 py-3">
                      <Badge variant={l.status === "Approved" ? "default" : "secondary"}>{l.status}</Badge>
                    </td>
                    <td className="px-4 py-3 text-right">
                      {l.status === "Pending" ? (
                        <div className="flex items-center justify-end gap-1.5">
                          <Button size="xs" onClick={() => handleAction(l.id, "Approved")}>
                            <Check className="mr-1 size-3" /> Approve
                          </Button>
                          <Button size="xs" variant="outline" onClick={() => handleAction(l.id, "Rejected")}>
                            <X className="mr-1 size-3" /> Reject
                          </Button>
                        </div>
                      ) : (
                        <span className="text-muted-foreground">Processed</span>
                      )}
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
// 4. Student / Parent Read-Only My Attendance View
// -------------------------------------------------------------
export function StudentMyAttendanceView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">My Attendance Record</h1>
        <p className="text-sm text-muted-foreground">
          Liam Davis · Grade 10 - Section A · Academic Year 2025-2026
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="border-l-4 border-l-emerald-500">
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-muted-foreground">Attendance Regularity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">98%</div>
            <p className="text-xs text-muted-foreground mt-1">24 Present / 25 School Days</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-muted-foreground">Status Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground flex items-center gap-2">
              <CheckCircle2 className="size-6 text-emerald-600" /> Present
            </div>
            <p className="text-xs text-muted-foreground mt-1">Marked by Sarah Jenkins (Homeroom)</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-violet-500">
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-muted-foreground">Exam Eligibility</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">Eligible (A+)</div>
            <p className="text-xs text-muted-foreground mt-1">Exceeds 75% requirement</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Recent Attendance Calendar Log</CardTitle>
          <CardDescription>Daily verified presence records</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center p-3 rounded-lg border bg-muted/20">
              <span className="font-semibold text-foreground">Today (Monday)</span>
              <Badge variant="default" className="bg-emerald-600">Present (08:30 AM)</Badge>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg border bg-muted/20">
              <span className="font-semibold text-foreground">Friday, August 29</span>
              <Badge variant="default" className="bg-emerald-600">Present</Badge>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg border bg-muted/20">
              <span className="font-semibold text-foreground">Thursday, August 28</span>
              <Badge variant="default" className="bg-emerald-600">Present</Badge>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg border bg-muted/20">
              <span className="font-semibold text-foreground">Wednesday, August 27</span>
              <Badge variant="destructive">Absent (Medical Leave)</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
