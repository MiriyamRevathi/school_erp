"use client";

import * as React from "react";
import Link from "next/link";
import { api } from "~/lib/api";
import { useAuth } from "~/hooks/use-auth";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import {
  Users,
  GraduationCap,
  Layers,
  ClipboardCheck,
  CreditCard,
  Award,
  Bell,
  ArrowRight,
  TrendingUp,
  Calendar,
  AlertCircle,
  RefreshCw,
  BookOpen,
  Clock,
  CheckCircle2,
  Phone,
  User,
  Shield,
  UsersRound,
} from "lucide-react";

export function DashboardOverview() {
  const { user } = useAuth();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [data, setData] = React.useState<{
    studentsCount: number;
    teachersCount: number;
    classesCount: number;
    attendanceSummary: any;
    recentNotifications: any[];
    upcomingExams: any[];
    recentInvoices: any[];
    myTimetable: any[];
    myResults: any[];
  }>({
    studentsCount: 0,
    teachersCount: 0,
    classesCount: 0,
    attendanceSummary: { attendancePercentage: 94, total: 5, present: 4, absent: 1, late: 0 },
    recentNotifications: [],
    upcomingExams: [],
    recentInvoices: [],
    myTimetable: [],
    myResults: [],
  });

  const loadData = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [students, teachers, classes, attendance, notifs, exams, invoices, timetable, results] =
        await Promise.allSettled([
          api.get("/students"),
          api.get("/teachers"),
          api.get("/classes"),
          api.get("/attendance/summary"),
          api.get("/notifications"),
          api.get("/exams"),
          api.get("/fees/invoices"),
          api.get("/timetable?className=Grade%2010"),
          api.get("/results"),
        ]);

      setData({
        studentsCount: students.status === "fulfilled" && Array.isArray(students.value) ? students.value.length : 0,
        teachersCount: teachers.status === "fulfilled" && Array.isArray(teachers.value) ? teachers.value.length : 0,
        classesCount: classes.status === "fulfilled" && Array.isArray(classes.value) ? classes.value.length : 0,
        attendanceSummary:
          attendance.status === "fulfilled"
            ? attendance.value
            : { attendancePercentage: 94, total: 5, present: 4, absent: 1, late: 0 },
        recentNotifications:
          notifs.status === "fulfilled" && Array.isArray(notifs.value) ? notifs.value.slice(0, 4) : [],
        upcomingExams:
          exams.status === "fulfilled" && Array.isArray(exams.value) ? exams.value.slice(0, 3) : [],
        recentInvoices:
          invoices.status === "fulfilled" && Array.isArray(invoices.value) ? invoices.value.slice(0, 4) : [],
        myTimetable:
          timetable.status === "fulfilled" && Array.isArray(timetable.value) ? timetable.value : [],
        myResults:
          results.status === "fulfilled" && Array.isArray(results.value) ? results.value : [],
      });
    } catch (err: any) {
      setError(err.message || "Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadData();
  }, [loadData]);

  // -------------------------------------------------------------
  // 1. TEACHER DASHBOARD
  // -------------------------------------------------------------
  if (user?.role === "TEACHER") {
    return (
      <div className="space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="default" className="bg-blue-600">FACULTY PORTAL</Badge>
              <span className="text-xs text-muted-foreground">Term 1 · 2025-2026</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight mt-1">Welcome, {user.name}</h1>
            <p className="text-sm text-muted-foreground">
              Senior Physics Faculty & Class Teacher of Grade 10 - Section A
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={loadData} disabled={loading}>
              <RefreshCw className={`mr-2 size-4 ${loading ? "animate-spin" : ""}`} /> Refresh
            </Button>
            <Button size="sm" asChild>
              <Link href="/dashboard/academics/attendance">
                <ClipboardCheck className="mr-2 size-4" /> Mark Today&apos;s Roll
              </Link>
            </Button>
          </div>
        </div>

        {/* Teacher KPI Cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-1">
              <CardTitle className="text-xs font-medium text-muted-foreground">Assigned Class</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Grade 10 - Section A</div>
              <p className="text-xs text-muted-foreground mt-1">32 Enrolled Students · Room 201</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-emerald-500">
            <CardHeader className="pb-1">
              <CardTitle className="text-xs font-medium text-muted-foreground">Class Attendance Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-600">97% Today</div>
              <p className="text-xs text-muted-foreground mt-1">31 Present · 1 Absent</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-violet-500">
            <CardHeader className="pb-1">
              <CardTitle className="text-xs font-medium text-muted-foreground">Upcoming Exam Paper</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">Physics Mid-Term</div>
              <p className="text-xs text-muted-foreground mt-1">Oct 12 · 09:00 AM (100 Marks)</p>
            </CardContent>
          </Card>
        </div>

        {/* Schedule & Quick Links */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <div>
                <CardTitle className="text-base">Today&apos;s Teaching Schedule</CardTitle>
                <CardDescription>Assigned lecture periods for Monday</CardDescription>
              </div>
              <Button variant="ghost" size="xs" asChild>
                <Link href="/dashboard/academics/timetable">View Full Timetable <ArrowRight className="size-3 ml-1" /></Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg border bg-muted/20 text-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-blue-500/10 text-blue-600 font-bold font-mono">08:30</div>
                  <div>
                    <p className="font-semibold text-foreground">Period 1: Homeroom & Assembly</p>
                    <p className="text-muted-foreground">Grade 10-A · Room 201</p>
                  </div>
                </div>
                <Badge variant="outline">Completed</Badge>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg border border-primary/40 bg-primary/5 text-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-primary/20 text-primary font-bold font-mono">09:15</div>
                  <div>
                    <p className="font-semibold text-foreground">Period 2: Physics - Mechanics & Optics</p>
                    <p className="text-muted-foreground">Grade 10-A · Science Block Room 201</p>
                  </div>
                </div>
                <Badge variant="default">Current Class</Badge>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg border bg-muted/20 text-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-muted text-muted-foreground font-bold font-mono">11:00</div>
                  <div>
                    <p className="font-semibold text-foreground">Period 4: Physics Practical Lab</p>
                    <p className="text-muted-foreground">Grade 11-Sci · Science Lab Block</p>
                  </div>
                </div>
                <Badge variant="secondary">Upcoming</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Bell className="size-4 text-primary" /> Faculty Notices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-xs">
              {data.recentNotifications.slice(0, 3).map((n) => (
                <div key={n.id} className="p-2.5 rounded-lg border space-y-1">
                  <p className="font-semibold text-foreground">{n.title}</p>
                  <p className="text-muted-foreground text-[11px] line-clamp-2">{n.message}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 2. STUDENT DASHBOARD
  // -------------------------------------------------------------
  if (user?.role === "STUDENT") {
    const studentResult = data.myResults[0] || {
      gpa: 3.9,
      rank: 1,
      percentage: 89.5,
      totalObtained: 358,
      totalMax: 400,
    };

    return (
      <div className="space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="default" className="bg-emerald-600">STUDENT PORTAL</Badge>
              <span className="text-xs text-muted-foreground">Roll #101 · Grade 10-A</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight mt-1">Hello, {user.name}</h1>
            <p className="text-sm text-muted-foreground">
              Here is your academic progress, class timetable, and examination schedule
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={loadData} disabled={loading}>
              <RefreshCw className={`mr-2 size-4 ${loading ? "animate-spin" : ""}`} /> Refresh
            </Button>
            <Button size="sm" asChild>
              <Link href="/dashboard/academics/exams/report-cards">
                <Award className="mr-2 size-4" /> View My Report Card
              </Link>
            </Button>
          </div>
        </div>

        {/* Student KPI Cards */}
        <div className="grid gap-4 sm:grid-cols-4">
          <Card className="border-l-4 border-l-emerald-500">
            <CardHeader className="pb-1">
              <CardTitle className="text-xs font-medium text-muted-foreground">Cumulative GPA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-600">{studentResult.gpa} / 4.0</div>
              <p className="text-xs text-muted-foreground mt-1">Standing: Rank #{studentResult.rank}</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="pb-1">
              <CardTitle className="text-xs font-medium text-muted-foreground">My Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">98%</div>
              <p className="text-xs text-muted-foreground mt-1">Present 24 of 25 days</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-violet-500">
            <CardHeader className="pb-1">
              <CardTitle className="text-xs font-medium text-muted-foreground">Next Exam</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">Mathematics</div>
              <p className="text-xs text-muted-foreground mt-1">Oct 10 · 09:00 AM (Room 201)</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-amber-500">
            <CardHeader className="pb-1">
              <CardTitle className="text-xs font-medium text-muted-foreground">Fee Invoice</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-600">$1,550 Paid</div>
              <p className="text-xs text-muted-foreground mt-1">Term 1 Cleared</p>
            </CardContent>
          </Card>
        </div>

        {/* Timetable & Active Loans */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <div>
                <CardTitle className="text-base">My Class Timetable (Today)</CardTitle>
                <CardDescription>Room and instructor for Grade 10 - Section A</CardDescription>
              </div>
              <Button variant="ghost" size="xs" asChild>
                <Link href="/dashboard/academics/timetable">Weekly View <ArrowRight className="size-3 ml-1" /></Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-3 rounded-lg border bg-muted/20">
                <div>
                  <span className="font-semibold text-foreground">08:30 - 09:15: Mathematics</span>
                  <p className="text-muted-foreground">Instructor: David Miller · Room 201</p>
                </div>
                <Badge variant="outline">Period 1</Badge>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg border border-primary/40 bg-primary/5">
                <div>
                  <span className="font-semibold text-foreground">09:15 - 10:00: Physics</span>
                  <p className="text-muted-foreground">Instructor: Sarah Jenkins · Room 201</p>
                </div>
                <Badge variant="default">Period 2</Badge>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg border bg-muted/20">
                <div>
                  <span className="font-semibold text-foreground">10:15 - 11:00: English Literature</span>
                  <p className="text-muted-foreground">Instructor: Elena Rostova · Room 201</p>
                </div>
                <Badge variant="outline">Period 3</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <BookOpen className="size-4 text-primary" /> Library Loan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-xs">
              <div className="p-3 rounded-lg border bg-muted/30 space-y-1">
                <p className="font-semibold text-foreground">The C Programming Language</p>
                <p className="text-muted-foreground">Brian W. Kernighan, Dennis M. Ritchie</p>
                <div className="flex items-center justify-between pt-2 border-t text-[11px]">
                  <span className="text-emerald-600 font-medium">Status: Active Loan</span>
                  <span className="font-mono">Due: Sep 15</span>
                </div>
              </div>

              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/dashboard/operations/campus/library/books">Browse Library Catalog</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 3. PARENT DASHBOARD
  // -------------------------------------------------------------
  if (user?.role === "PARENT") {
    return (
      <div className="space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="default" className="bg-amber-600">GUARDIAN PORTAL</Badge>
              <span className="text-xs text-muted-foreground">Parent: Robert Davis</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight mt-1">Parent Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              Monitoring academic growth, fee statements, and attendance for Liam Davis
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={loadData} disabled={loading}>
              <RefreshCw className={`mr-2 size-4 ${loading ? "animate-spin" : ""}`} /> Refresh
            </Button>
          </div>
        </div>

        {/* Child Overview Banner */}
        <Card className="border-l-4 border-l-primary bg-primary/2">
          <CardHeader className="pb-2">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle className="text-lg font-bold">Liam Davis</CardTitle>
                <CardDescription>Grade 10 · Section A · Admission No: ADM-2025-001 · Roll #101</CardDescription>
              </div>
              <Badge variant="default">Enrolled & Active</Badge>
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 text-xs">
            <div>
              <span className="text-muted-foreground">Class Teacher:</span>
              <p className="font-semibold text-foreground">Sarah Jenkins</p>
            </div>
            <div>
              <span className="text-muted-foreground">Attendance Rate:</span>
              <p className="font-semibold text-emerald-600">98% Present</p>
            </div>
            <div>
              <span className="text-muted-foreground">Term 1 Standing:</span>
              <p className="font-semibold text-primary font-bold">GPA 3.9 (Rank #1)</p>
            </div>
            <div>
              <span className="text-muted-foreground">Term Fee Status:</span>
              <p className="font-semibold text-emerald-600">Fully Cleared ($1,550)</p>
            </div>
          </CardContent>
        </Card>

        {/* Parent Details Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <div>
                <CardTitle className="text-base">Child&apos;s Academic Marks (Term 1)</CardTitle>
                <CardDescription>Mid-Term exam subject score breakdown</CardDescription>
              </div>
              <Button variant="ghost" size="xs" asChild>
                <Link href="/dashboard/academics/exams/report-cards">View Report Card <ArrowRight className="size-3 ml-1" /></Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-2 text-xs">
              <div className="flex justify-between py-1.5 border-b">
                <span>Mathematics</span>
                <span className="font-mono font-semibold">94 / 100 (A+)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b">
                <span>Physics</span>
                <span className="font-mono font-semibold">88 / 100 (A)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b">
                <span>Chemistry</span>
                <span className="font-mono font-semibold">91 / 100 (A+)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b">
                <span>English Literature</span>
                <span className="font-mono font-semibold">85 / 100 (A)</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Bell className="size-4 text-primary" /> Important Parent Notices
              </CardTitle>
              <CardDescription>School administration broadcasts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-xs">
              <div className="p-3 rounded-lg border bg-muted/20 space-y-1">
                <p className="font-semibold text-foreground">Parent-Teacher Meeting (PTM)</p>
                <p className="text-muted-foreground">PTM for Grades 9 and 10 will be held this Saturday from 09:00 AM to 01:00 PM in Room 201.</p>
                <Badge variant="destructive" className="text-[10px] mt-1">High Priority</Badge>
              </div>

              <div className="p-3 rounded-lg border bg-muted/20 space-y-1">
                <p className="font-semibold text-foreground">Annual Science Fair</p>
                <p className="text-muted-foreground">Science projects registration open for all Grade 10 students.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 4. ADMIN DASHBOARD (DEFAULT)
  // -------------------------------------------------------------
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="destructive">ADMINISTRATOR</Badge>
            <span className="text-xs text-muted-foreground">Academic Year 2025-2026</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight mt-1">School Overview Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Greenwood International Academy · Multi-Tenant Administration
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={loadData} disabled={loading}>
            <RefreshCw className={`mr-2 size-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
          <Button size="sm" asChild>
            <Link href="/dashboard/people/students">
              <Users className="mr-2 size-4" /> Manage Students
            </Link>
          </Button>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-lg bg-destructive/15 p-4 text-sm text-destructive">
          <AlertCircle className="size-5 shrink-0" />
          <p>{error} (Connecting to backend at http://localhost:3900/api)</p>
        </div>
      )}

      {/* KPI Metric Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Students</CardTitle>
            <Users className="size-5 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{loading ? "..." : data.studentsCount}</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
              <span className="text-emerald-600 font-medium">100% Enrolled</span> in active terms
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-emerald-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Faculty & Teachers</CardTitle>
            <GraduationCap className="size-5 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{loading ? "..." : data.teachersCount}</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
              Across Science, Math, CS, Lang
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-violet-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Classes & Sections</CardTitle>
            <Layers className="size-5 text-violet-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{loading ? "..." : data.classesCount}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Grade 8 to Grade 12 Active
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Today&apos;s Attendance</CardTitle>
            <ClipboardCheck className="size-5 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {loading ? "..." : `${data.attendanceSummary?.attendancePercentage ?? 94}%`}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {data.attendanceSummary?.present ?? 0} Present · {data.attendanceSummary?.absent ?? 0} Absent
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Grid: Operations & Notice Board */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Quick ERP Operations</CardTitle>
            <CardDescription>Direct navigation to everyday school administration workflows</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Link
              href="/dashboard/people/students"
              className="flex flex-col items-center justify-center p-4 rounded-xl border bg-card hover:bg-accent/50 transition-colors text-center group"
            >
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                <Users className="size-6" />
              </div>
              <span className="font-medium text-sm">Students Directory</span>
              <span className="text-xs text-muted-foreground mt-0.5">Admissions & Profiles</span>
            </Link>

            <Link
              href="/dashboard/academics/attendance"
              className="flex flex-col items-center justify-center p-4 rounded-xl border bg-card hover:bg-accent/50 transition-colors text-center group"
            >
              <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-600 mb-2 group-hover:scale-110 transition-transform">
                <ClipboardCheck className="size-6" />
              </div>
              <span className="font-medium text-sm">Mark Attendance</span>
              <span className="text-xs text-muted-foreground mt-0.5">Daily Student Roll</span>
            </Link>

            <Link
              href="/dashboard/operations/finance"
              className="flex flex-col items-center justify-center p-4 rounded-xl border bg-card hover:bg-accent/50 transition-colors text-center group"
            >
              <div className="p-3 rounded-lg bg-orange-500/10 text-orange-600 mb-2 group-hover:scale-110 transition-transform">
                <CreditCard className="size-6" />
              </div>
              <span className="font-medium text-sm">Fee Collection</span>
              <span className="text-xs text-muted-foreground mt-0.5">Invoices & Payments</span>
            </Link>

            <Link
              href="/dashboard/academics/exams"
              className="flex flex-col items-center justify-center p-4 rounded-xl border bg-card hover:bg-accent/50 transition-colors text-center group"
            >
              <div className="p-3 rounded-lg bg-violet-500/10 text-violet-600 mb-2 group-hover:scale-110 transition-transform">
                <Award className="size-6" />
              </div>
              <span className="font-medium text-sm">Examinations</span>
              <span className="text-xs text-muted-foreground mt-0.5">Schedules & Marks</span>
            </Link>

            <Link
              href="/dashboard/academics/timetable"
              className="flex flex-col items-center justify-center p-4 rounded-xl border bg-card hover:bg-accent/50 transition-colors text-center group"
            >
              <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-600 mb-2 group-hover:scale-110 transition-transform">
                <Calendar className="size-6" />
              </div>
              <span className="font-medium text-sm">Class Timetable</span>
              <span className="text-xs text-muted-foreground mt-0.5">Weekly Schedules</span>
            </Link>

            <Link
              href="/dashboard/reports/academic"
              className="flex flex-col items-center justify-center p-4 rounded-xl border bg-card hover:bg-accent/50 transition-colors text-center group"
            >
              <div className="p-3 rounded-lg bg-pink-500/10 text-pink-600 mb-2 group-hover:scale-110 transition-transform">
                <TrendingUp className="size-6" />
              </div>
              <span className="font-medium text-sm">Reports & Analytics</span>
              <span className="text-xs text-muted-foreground mt-0.5">Academic & Financial</span>
            </Link>
          </CardContent>
        </Card>

        {/* Notice Board */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Bell className="size-4 text-primary" /> Notice Board
            </CardTitle>
            <Button variant="ghost" size="xs" asChild>
              <Link href="/dashboard/communication/outreach/announcements">View all</Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-3 pt-2">
            {data.recentNotifications.length === 0 ? (
              <p className="text-xs text-muted-foreground py-4 text-center">No announcements yet</p>
            ) : (
              data.recentNotifications.map((n) => (
                <div key={n.id} className="rounded-lg border p-3 text-xs space-y-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-semibold text-foreground truncate">{n.title}</span>
                    <Badge variant={n.priority === "High" ? "destructive" : "secondary"} className="text-[10px] py-0">
                      {n.priority}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground line-clamp-2">{n.message}</p>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
