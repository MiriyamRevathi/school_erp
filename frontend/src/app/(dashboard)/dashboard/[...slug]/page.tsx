"use client";

import * as React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useAuth, Role } from "~/hooks/use-auth";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { ShieldAlert, ArrowLeft } from "lucide-react";

// Base Module Views
import { DashboardOverview } from "~/modules/dashboard/DashboardOverview";
import { StudentView } from "~/modules/student/StudentView";
import { TeacherView } from "~/modules/teacher/TeacherView";
import { ParentView } from "~/modules/parent/ParentView";
import { ClassView } from "~/modules/class/ClassView";
import { AttendanceView } from "~/modules/attendance/AttendanceView";
import { ExamView } from "~/modules/exam/ExamView";
import { ResultView } from "~/modules/result/ResultView";
import { FeeView } from "~/modules/fee/FeeView";
import { LibraryView } from "~/modules/library/LibraryView";
import { TimetableView } from "~/modules/timetable/TimetableView";
import { TransportView } from "~/modules/transport/TransportView";
import { HostelView } from "~/modules/hostel/HostelView";
import { PayrollView } from "~/modules/payroll/PayrollView";
import { NotificationView } from "~/modules/notification/NotificationView";
import { UserView } from "~/modules/user/UserView";
import { SettingsView } from "~/modules/settings/SettingsView";
import { ReportView } from "~/modules/report/ReportView";
import { SupportView } from "~/modules/support/SupportView";

// Dedicated Subcategory Views
import {
  MarkAttendanceView,
  AttendanceReportsView,
  LeaveRequestsView,
  StudentMyAttendanceView,
} from "~/modules/attendance/AttendanceSubViews";

import {
  ExamScheduleView,
  MarksEntryView,
  GradesGpaView,
  ReportCardsView,
  TranscriptsView,
  ResultPublishView,
  CertificatesView,
} from "~/modules/exam/ExamSubViews";

import {
  FeeStructureView,
  DiscountsWaiversView,
  DueCollectionView,
  RefundsView,
  ExpenseManagementView,
  BudgetingView,
  AccountingLedgerView,
  FinancialReportsView,
} from "~/modules/fee/FeeSubViews";

import {
  SubjectsView,
  CurriculumView,
  LessonPlansView,
  StudyMaterialsView,
  HomeworkAssignmentsView,
  AdmissionsInquiriesView,
} from "~/modules/academics/AcademicsSubViews";

import {
  StudentProfilesView,
  DisciplineView,
  HealthRecordsView,
  IdCardsView,
  AlumniView,
} from "~/modules/student/StudentSubViews";

import {
  SchoolsBranchesView,
  AcademicYearsView,
  RolesPermissionsView,
  AuditLogsView,
  IntegrationsView,
  WorkflowAutomationView,
} from "~/modules/admin/AdminSubViews";

function AccessDenied({ role, route }: { role: Role; route: string }) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center p-4">
      <Card className="w-full max-w-md text-center shadow-lg border-destructive/30">
        <CardHeader className="space-y-2">
          <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-destructive/15 text-destructive">
            <ShieldAlert className="size-7" />
          </div>
          <CardTitle className="text-xl font-bold">Access Restricted</CardTitle>
          <CardDescription>
            Your current role <Badge variant="outline" className="font-bold">{role}</Badge> does not have permission to access <code className="text-xs bg-muted px-1.5 py-0.5 rounded">/{route}</code>.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-xs text-muted-foreground">
            This module contains administrative operations restricted to authorized staff.
          </p>
          <Button className="w-full" asChild>
            <Link href="/dashboard">
              <ArrowLeft className="mr-2 size-4" /> Return to Dashboard
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default function DashboardSlugPage() {
  const params = useParams();
  const { user, loading } = useAuth();
  const slugArray = Array.isArray(params?.slug) ? params.slug : [params?.slug || ""];
  const path = slugArray.join("/").toLowerCase();
  const role = user?.role || "ADMIN";

  if (loading) {
    return <div className="py-12 text-center text-sm text-muted-foreground">Loading module...</div>;
  }

  // =============================================================
  // 1. ROLE-BASED ACCESS CONTROL (RBAC) ROUTE PERMISSION CHECKS
  // =============================================================
  if (role === "STUDENT") {
    // Block administrative and staff CRUD routes
    if (
      path.includes("payroll") ||
      path.includes("user") ||
      path.includes("role") ||
      path.includes("setting") ||
      path.includes("school-setup") ||
      path.includes("integrations") ||
      path.includes("workflow") ||
      path.includes("audit") ||
      path.includes("staff") ||
      path.includes("teachers") ||
      path.includes("discounts-waivers") ||
      path.includes("budgeting") ||
      path.includes("accounting-ledger") ||
      path.includes("expense-management") ||
      path.includes("due-collection") ||
      path.includes("mark") ||
      path.includes("marks-entry") ||
      path.includes("result-publish") ||
      path.includes("admissions/inquiries") ||
      path.includes("admissions/applications") ||
      path.includes("admissions/document-verification")
    ) {
      return <AccessDenied role={role} route={path} />;
    }
  }

  if (role === "PARENT") {
    // Block admin/staff modules for parents
    if (
      path.includes("payroll") ||
      path.includes("user") ||
      path.includes("role") ||
      path.includes("setting") ||
      path.includes("school-setup") ||
      path.includes("integrations") ||
      path.includes("workflow") ||
      path.includes("audit") ||
      path.includes("staff") ||
      path.includes("teachers") ||
      path.includes("budgeting") ||
      path.includes("accounting-ledger") ||
      path.includes("expense-management") ||
      path.includes("mark") ||
      path.includes("marks-entry") ||
      path.includes("result-publish")
    ) {
      return <AccessDenied role={role} route={path} />;
    }
  }

  if (role === "TEACHER") {
    // Block user management, payroll, accounting, system settings for teachers
    if (
      path.includes("payroll") ||
      path.includes("user") ||
      path.includes("role") ||
      path.includes("setting") ||
      path.includes("school-setup") ||
      path.includes("integrations") ||
      path.includes("workflow") ||
      path.includes("audit") ||
      path.includes("accounting-ledger") ||
      path.includes("budgeting") ||
      path.includes("expense-management")
    ) {
      return <AccessDenied role={role} route={path} />;
    }
  }

  // =============================================================
  // 2. PRECISE SUB-ROUTE DISPATCHING
  // =============================================================

  // --- SUPPORT ---
  if (path === "support/help-center") return <SupportView subView="help-center" />;
  if (path === "support/tickets") return <SupportView subView="tickets" />;
  if (path === "support/product-updates") return <SupportView subView="product-updates" />;
  if (path.startsWith("support")) return <SupportView subView="help-center" />;

  // --- DASHBOARD OVERVIEW & ANALYTICS ---
  if (path === "overview" || path === "analytics") return <DashboardOverview />;

  // --- ACADEMICS: ATTENDANCE ---
  if (path === "academics/attendance/mark") return <MarkAttendanceView />;
  if (path === "academics/attendance/reports") return <AttendanceReportsView />;
  if (path === "academics/attendance/leave-requests") return <LeaveRequestsView />;
  if (path === "academics/attendance/my-attendance") return <StudentMyAttendanceView />;
  if (path.startsWith("academics/attendance")) {
    return role === "STUDENT" || role === "PARENT" ? <StudentMyAttendanceView /> : <MarkAttendanceView />;
  }

  // --- ACADEMICS: EXAMS ---
  if (path === "academics/exams/schedule") return <ExamScheduleView />;
  if (path === "academics/exams/marks-entry") return <MarksEntryView />;
  if (path === "academics/exams/grades-gpa") return <GradesGpaView />;
  if (path === "academics/exams/report-cards") return <ReportCardsView />;
  if (path === "academics/exams/transcripts") return <TranscriptsView />;
  if (path === "academics/exams/result-publish") return <ResultPublishView />;
  if (path === "academics/exams/certificates") return <CertificatesView />;
  if (path.startsWith("academics/exams")) return <ExamScheduleView />;

  // --- ACADEMICS: PROGRAMS & TEACHING ---
  if (path === "academics/classes") return <ClassView />;
  if (path === "academics/subjects") return <SubjectsView />;
  if (path === "academics/curriculum") return <CurriculumView />;
  if (path === "academics/lesson-plans") return <LessonPlansView />;
  if (path === "academics/timetable") return <TimetableView />;
  if (path === "academics/homework") return <HomeworkAssignmentsView />;
  if (path === "academics/online-classes") return <SubjectsView />;
  if (path === "academics/study-materials") return <StudyMaterialsView />;

  // --- ACADEMICS: ADMISSIONS ---
  if (path === "academics/admissions/inquiries") return <AdmissionsInquiriesView />;
  if (path === "academics/admissions/applications") return <AdmissionsInquiriesView />;
  if (path === "academics/admissions/enrollment") return <StudentView />;
  if (path === "academics/admissions/document-verification") return <AdmissionsInquiriesView />;
  if (path === "academics/admissions/waiting-list") return <AdmissionsInquiriesView />;
  if (path === "academics/admissions/scholarships") return <DiscountsWaiversView />;

  // --- ACADEMICS: ASSIGNMENTS ---
  if (path.startsWith("academics/assignments")) return <HomeworkAssignmentsView />;

  // --- PEOPLE: STUDENTS ---
  if (path === "people/students") return <StudentView />;
  if (path === "people/students/admission-records") return <StudentView />;
  if (path === "people/students/profiles") return <StudentProfilesView />;
  if (path === "people/students/attendance") return <StudentMyAttendanceView />;
  if (path === "people/students/discipline") return <DisciplineView />;
  if (path === "people/students/health-records") return <HealthRecordsView />;
  if (path === "people/students/id-cards") return <IdCardsView />;
  if (path === "people/students/promotions-transfers") return <StudentView />;
  if (path === "people/students/alumni") return <AlumniView />;

  // --- PEOPLE: PARENTS ---
  if (path.startsWith("people/parents")) return <ParentView />;

  // --- PEOPLE: STAFF & HR ---
  if (path === "people/staff/payroll") return <PayrollView />;
  if (path === "people/staff/attendance") return <AttendanceReportsView />;
  if (path === "people/staff/leave") return <LeaveRequestsView />;
  if (path === "people/teachers" || path.startsWith("people/staff")) return <TeacherView />;

  // --- OPERATIONS: FINANCE ---
  if (path === "operations/finance/fee-structure") return <FeeStructureView />;
  if (path === "operations/finance/discounts-waivers") return <DiscountsWaiversView />;
  if (path === "operations/finance/scholarships") return <DiscountsWaiversView />;
  if (path === "operations/finance/invoices") return <FeeView />;
  if (path === "operations/finance/payments") return <FeeView />;
  if (path === "operations/finance/due-collection") return <DueCollectionView />;
  if (path === "operations/finance/refunds") return <RefundsView />;
  if (path === "operations/finance/expense-management") return <ExpenseManagementView />;
  if (path === "operations/finance/budgeting") return <BudgetingView />;
  if (path === "operations/finance/accounting-ledger") return <AccountingLedgerView />;
  if (path === "operations/finance/financial-reports") return <FinancialReportsView />;
  if (path.startsWith("operations/finance")) return <FeeView />;

  // --- OPERATIONS: EVENTS ---
  if (path.startsWith("operations/events")) return <ExamScheduleView />;

  // --- CAMPUS SERVICES ---
  if (path.startsWith("operations/campus/transport")) return <TransportView />;
  if (path.startsWith("operations/campus/library")) return <LibraryView />;
  if (path.startsWith("operations/campus/hostel")) return <HostelView />;
  if (path.startsWith("operations/campus/inventory") || path.startsWith("operations/campus/cafeteria") || path.startsWith("operations/campus/security")) {
    return <HostelView />;
  }

  // --- COMMUNICATION ---
  if (path.startsWith("communication/outreach")) return <NotificationView />;
  if (path.startsWith("communication/parent-engagement")) return <ParentView />;
  if (path.startsWith("communication")) return <NotificationView />;

  // --- ADMINISTRATION ---
  if (path === "admin/schools-branches") return <SchoolsBranchesView />;
  if (path === "admin/school-setup/profile" || path === "settings" || path === "admin/system/settings") return <SettingsView />;
  if (path === "admin/school-setup/academic-years" || path === "admin/school-setup/terms-semesters") return <AcademicYearsView />;
  if (path === "admin/school-setup/departments" || path === "admin/school-setup/branches") return <SchoolsBranchesView />;
  if (path === "admin/users-access/users") return <UserView />;
  if (path === "admin/users-access/roles") return <RolesPermissionsView />;
  if (path === "admin/users-access/audit-logs") return <AuditLogsView />;
  if (path.startsWith("admin/integrations")) return <IntegrationsView />;
  if (path === "admin/workflow-automation") return <WorkflowAutomationView />;
  if (path.startsWith("admin")) return <SettingsView />;

  // --- REPORTS ---
  if (path === "reports/academic") return <ReportView />;
  if (path === "reports/attendance") return <AttendanceReportsView />;
  if (path === "reports/finance") return <FinancialReportsView />;
  if (path.startsWith("reports")) return <ReportView />;

  // Default fallback
  return <DashboardOverview />;
}
