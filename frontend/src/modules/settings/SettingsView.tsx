"use client";

import * as React from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { School, Save, CheckCircle2, Shield, Bell, Globe } from "lucide-react";

export function SettingsView() {
  const [saved, setSaved] = React.useState(false);
  const [formData, setFormData] = React.useState({
    schoolName: "Greenwood International Academy",
    schoolCode: "GIA-2025",
    academicYear: "2025-2026",
    curriculumBoard: "CBSE / International Baccalaureate",
    email: "contact@greenwood.edu",
    phone: "+1 555-0100",
    address: "100 Academic Way, Springfield, IL",
    currency: "USD ($)",
    timezone: "UTC - 05:00 (Eastern Time)",
    gradingScale: "4.0 GPA System (A+, A, B+, B, C, F)",
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">School Profile & System Settings</h1>
        <p className="text-sm text-muted-foreground">
          Configure institutional identity, academic calendars, curriculum rules, and defaults
        </p>
      </div>

      {saved && (
        <div className="rounded-lg bg-emerald-500/15 p-3 text-sm text-emerald-700 font-medium flex items-center gap-2">
          <CheckCircle2 className="size-4" />
          Settings successfully updated and saved!
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <School className="size-4 text-primary" /> Institutional Profile
            </CardTitle>
            <CardDescription>Official institution name, code, and communication contact details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label>Institution Name</Label>
                <Input
                  required
                  value={formData.schoolName}
                  onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                />
              </div>
              <div className="space-y-1">
                <Label>School Affiliation Code</Label>
                <Input
                  required
                  value={formData.schoolCode}
                  onChange={(e) => setFormData({ ...formData, schoolCode: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label>Official Email</Label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-1">
                <Label>Official Phone</Label>
                <Input
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label>Campus Physical Address</Label>
              <Input
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Globe className="size-4 text-primary" /> Academic Year & Localization
            </CardTitle>
            <CardDescription>Active term parameters, grading structure, and currency</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label>Active Academic Year</Label>
                <Input
                  required
                  value={formData.academicYear}
                  onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                />
              </div>
              <div className="space-y-1">
                <Label>Curriculum / Board</Label>
                <Input
                  required
                  value={formData.curriculumBoard}
                  onChange={(e) => setFormData({ ...formData, curriculumBoard: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label>Grading System</Label>
                <Input
                  required
                  value={formData.gradingScale}
                  onChange={(e) => setFormData({ ...formData, gradingScale: e.target.value })}
                />
              </div>
              <div className="space-y-1">
                <Label>Financial Currency</Label>
                <Input
                  required
                  value={formData.currency}
                  onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-2">
          <Button type="submit">
            <Save className="mr-2 size-4" /> Save Configuration
          </Button>
        </div>
      </form>
    </div>
  );
}
