"use client";

import * as React from "react";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Building2, CalendarRange, Shield, ScrollText, Plug, Workflow, Settings, CreditCard, Smartphone, Mail, Video, Link2, KeyRound } from "lucide-react";

export function SchoolsBranchesView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Schools & Campus Branches</h1>
        <p className="text-sm text-muted-foreground">Multi-branch institutional hierarchy and campus administration</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="border-l-4 border-l-primary">
          <CardHeader className="pb-2">
            <Badge variant="default" className="w-fit mb-1">Main Campus</Badge>
            <CardTitle className="text-base font-bold">Greenwood Main Campus</CardTitle>
            <CardDescription>100 Academic Way, Springfield, IL · Code: GIA-MAIN</CardDescription>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground space-y-1">
            <p>• Enrolled Capacity: 1,200 Students</p>
            <p>• Principal: Dr. Arthur Mitchell</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export function AcademicYearsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Academic Sessions & Terms</h1>
        <p className="text-sm text-muted-foreground">Manage active academic years, semester start/end dates, and term breaks</p>
      </div>
      <Card>
        <CardHeader><CardTitle className="text-base">Academic Session Calendar</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-xs">
          <div className="flex justify-between items-center p-3 rounded-lg border bg-primary/5 border-primary/30">
            <div><p className="font-bold text-foreground">Academic Year 2025-2026 (Active Session)</p><p className="text-muted-foreground">August 15, 2025 – June 30, 2026 · Term 1 In Progress</p></div>
            <Badge variant="default">Current</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function RolesPermissionsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Role-Based Access Control (RBAC) Matrix</h1>
        <p className="text-sm text-muted-foreground">Feature permissions, administrative scopes, and security policy rules</p>
      </div>
      <Card>
        <CardHeader><CardTitle className="text-base">Role Permissions Matrix</CardTitle></CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b bg-muted/50 font-bold uppercase">
                <tr><th className="p-2">Role</th><th className="p-2">Students & Classes</th><th className="p-2">Attendance & Marks</th><th className="p-2">Fees & Payroll</th><th className="p-2">User Admin</th></tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-2 font-bold text-red-600">ADMIN</td><td className="p-2 text-emerald-600 font-bold">Full Access</td><td className="p-2 text-emerald-600 font-bold">Full Access</td><td className="p-2 text-emerald-600 font-bold">Full Access</td><td className="p-2 text-emerald-600 font-bold">Full Access</td></tr>
                <tr><td className="p-2 font-bold text-blue-600">TEACHER</td><td className="p-2 text-emerald-600 font-medium">Assigned Classes</td><td className="p-2 text-emerald-600 font-medium">Marking & Entry</td><td className="p-2 text-red-600">No Access</td><td className="p-2 text-red-600">No Access</td></tr>
                <tr><td className="p-2 font-bold text-emerald-600">STUDENT</td><td className="p-2 text-muted-foreground">View Own Classes</td><td className="p-2 text-muted-foreground">View Own Record</td><td className="p-2 text-muted-foreground">View Own Invoices</td><td className="p-2 text-red-600">No Access</td></tr>
                <tr><td className="p-2 font-bold text-amber-600">PARENT</td><td className="p-2 text-muted-foreground">View Child Profile</td><td className="p-2 text-muted-foreground">View Child Record</td><td className="p-2 text-muted-foreground">Pay Child Dues</td><td className="p-2 text-red-600">No Access</td></tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function AuditLogsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Security Audit Logs</h1>
        <p className="text-sm text-muted-foreground">Authentication timestamps, role changes, and API access telemetry</p>
      </div>
      <Card>
        <CardHeader><CardTitle className="text-base">Recent System Access Events</CardTitle></CardHeader>
        <CardContent className="space-y-2 text-xs font-mono">
          <div className="flex justify-between p-2 rounded bg-muted/30"><span>AUTH_LOGIN_SUCCESS: admin@schoolerp.local (ADMIN)</span><span className="text-muted-foreground">Just now</span></div>
          <div className="flex justify-between p-2 rounded bg-muted/30"><span>AUTH_LOGIN_SUCCESS: teacher@schoolerp.local (TEACHER)</span><span className="text-muted-foreground">5 mins ago</span></div>
          <div className="flex justify-between p-2 rounded bg-muted/30"><span>MARKS_ENTRY_UPDATE: Grade 10-A Physics Scores Recorded</span><span className="text-muted-foreground">15 mins ago</span></div>
        </CardContent>
      </Card>
    </div>
  );
}

export function IntegrationsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">System Integrations & Gateways</h1>
        <p className="text-sm text-muted-foreground">Payment gateways, SMS messaging relays, and video classroom bridges</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <Card><CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><CreditCard className="size-4 text-primary" /> Payment Gateway</CardTitle></CardHeader><CardContent className="text-xs space-y-1"><p>Stripe & Online Cards</p><Badge variant="default">Connected</Badge></CardContent></Card>
        <Card><CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Smartphone className="size-4 text-primary" /> SMS Alerts</CardTitle></CardHeader><CardContent className="text-xs space-y-1"><p>Twilio SMS Gateway</p><Badge variant="default">Connected</Badge></CardContent></Card>
        <Card><CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Video className="size-4 text-primary" /> Virtual Classroom</CardTitle></CardHeader><CardContent className="text-xs space-y-1"><p>Zoom / Google Meet API</p><Badge variant="default">Ready</Badge></CardContent></Card>
      </div>
    </div>
  );
}

export function WorkflowAutomationView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Workflow Automation & Scheduled Triggers</h1>
        <p className="text-sm text-muted-foreground">Automated absentee notifications, fee overdue alerts, and report card triggers</p>
      </div>
      <Card>
        <CardHeader><CardTitle className="text-base">Active Triggers</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-xs">
          <div className="flex justify-between items-center p-3 rounded-lg border bg-muted/20">
            <div><p className="font-semibold text-foreground">Daily Absentee SMS Notification</p><p className="text-muted-foreground">Fires automatically at 10:00 AM for unexcused student absences</p></div>
            <Badge variant="default">Enabled</Badge>
          </div>
          <div className="flex justify-between items-center p-3 rounded-lg border bg-muted/20">
            <div><p className="font-semibold text-foreground">Term Fee Due Reminder (7 Days Prior)</p><p className="text-muted-foreground">Sends email notifications to parent accounts with pending invoices</p></div>
            <Badge variant="default">Enabled</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
