"use client";

import * as React from "react";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { ShieldAlert, HeartPulse, IdCard, ArrowRightLeft, GraduationCap, User, Phone, MapPin } from "lucide-react";

export function StudentProfilesView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Student Profile Details</h1>
        <p className="text-sm text-muted-foreground">Comprehensive academic record, guardian details, and enrollment bio</p>
      </div>
      <Card className="border-l-4 border-l-primary">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl font-bold">Liam Davis</CardTitle>
              <CardDescription>Admission #ADM-2025-001 · Roll #101 · Grade 10 - Section A</CardDescription>
            </div>
            <Badge variant="default">Active Student</Badge>
          </div>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 gap-4 text-xs">
          <div className="space-y-2">
            <div><span className="text-muted-foreground">Date of Birth: </span><span className="font-medium">April 15, 2010</span></div>
            <div><span className="text-muted-foreground">Blood Group: </span><span className="font-bold text-red-600">O+</span></div>
            <div><span className="text-muted-foreground">Address: </span><span>124 Maple Street, Springfield</span></div>
          </div>
          <div className="space-y-2">
            <div><span className="text-muted-foreground">Primary Guardian: </span><span className="font-medium">Robert Davis (Father)</span></div>
            <div><span className="text-muted-foreground">Contact Phone: </span><span className="font-mono">+1 555-0101</span></div>
            <div><span className="text-muted-foreground">Class Teacher: </span><span>Sarah Jenkins</span></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function DisciplineView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Student Discipline & Conduct Logs</h1>
        <p className="text-sm text-muted-foreground">Behavioral commendations, incident logs, and merit points</p>
      </div>
      <Card>
        <CardHeader><CardTitle className="text-base">Merit & Commendation Records</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-xs">
          <div className="flex justify-between items-center p-3 rounded-lg border bg-emerald-500/5 border-emerald-500/30">
            <div><p className="font-semibold text-foreground">Liam Davis: Science Fair Outstanding Project Commendation</p><p className="text-muted-foreground">Awarded by Sarah Jenkins · +10 Merit Points</p></div>
            <Badge variant="default" className="bg-emerald-600">Commendation</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function HealthRecordsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Campus Health & Medical Records</h1>
        <p className="text-sm text-muted-foreground">Student medical files, allergy logs, blood groups, and emergency contacts</p>
      </div>
      <Card>
        <CardHeader><CardTitle className="text-base">Medical Roster (Grade 10)</CardTitle></CardHeader>
        <CardContent className="space-y-2 text-xs">
          <div className="flex justify-between py-2 border-b"><span>Liam Davis</span><span className="font-mono font-bold text-red-600">O+ (No Known Allergies)</span></div>
          <div className="flex justify-between py-2 border-b"><span>Sophia Martinez</span><span className="font-mono font-bold text-red-600">A+ (Peanut Allergy)</span></div>
          <div className="flex justify-between py-2 border-b"><span>Noah Johnson</span><span className="font-mono font-bold text-red-600">B+ (Asthma Inhaler on File)</span></div>
        </CardContent>
      </Card>
    </div>
  );
}

export function IdCardsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Student ID Cards</h1>
        <p className="text-sm text-muted-foreground">Digital ID card visual badges and barcode generation</p>
      </div>
      <div className="max-w-sm rounded-xl border bg-card p-4 shadow-md space-y-3 border-primary/30">
        <div className="text-center border-b pb-2">
          <h3 className="font-bold text-sm">Greenwood International Academy</h3>
          <p className="text-[10px] text-muted-foreground">Student Identity Card · 2025-2026</p>
        </div>
        <div className="flex gap-3 text-xs">
          <div className="size-16 rounded-lg bg-muted flex items-center justify-center font-bold text-muted-foreground">PHOTO</div>
          <div className="space-y-0.5">
            <p className="font-bold text-sm text-foreground">Liam Davis</p>
            <p className="text-muted-foreground">Grade 10 · Section A</p>
            <p className="font-mono text-[10px]">Roll: 101 · ID: ADM-2025-001</p>
          </div>
        </div>
        <div className="pt-2 border-t text-center font-mono text-[10px] text-muted-foreground">
          ||||| | |||| |||| |||| |||
        </div>
      </div>
    </div>
  );
}

export function AlumniView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Alumni Network & Directory</h1>
        <p className="text-sm text-muted-foreground">Graduated student directory, university destinations, and reunions</p>
      </div>
      <Card><CardHeader><CardTitle className="text-base">Class of 2024 Alumni</CardTitle></CardHeader><CardContent className="space-y-2 text-xs"><div className="flex justify-between py-2 border-b"><span>Ethan Brown</span><span className="font-semibold text-primary">MIT (Computer Science)</span></div><div className="flex justify-between py-2 border-b"><span>Olivia Taylor</span><span className="font-semibold text-primary">Stanford University (Biochemistry)</span></div></CardContent></Card>
    </div>
  );
}
