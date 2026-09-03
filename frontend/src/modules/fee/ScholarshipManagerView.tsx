"use client";

import * as React from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Badge } from "~/components/ui/badge";
import { Award, Plus, Search, CheckCircle2, ShieldCheck, DollarSign } from "lucide-react";

export function ScholarshipManagerView() {
  const [search, setSearch] = React.useState("");
  const scholarships = [
    { code: "SCH-ACAD-100", name: "Presidential Merit Fellowship", discountPercent: 100, recipients: 12, totalValuation: 180000, eligibilityCriteria: "Cumulative GPA >= 3.95 & National Merit Finalist" },
    { code: "SCH-STEM-050", name: "STEM Innovation & Robotics Grant", discountPercent: 50, recipients: 24, totalValuation: 180000, eligibilityCriteria: "State Science Fair Winner or Robotics Team Captain" },
    { code: "SCH-ATHL-050", name: "Varsity Athletics Excellence Award", discountPercent: 50, recipients: 18, totalValuation: 135000, eligibilityCriteria: "Regional Championship Team Member & GPA >= 3.2" },
    { code: "SCH-NEED-075", name: "Greenfield Opportunity Access Waiver", discountPercent: 75, recipients: 35, totalValuation: 393750, eligibilityCriteria: "Household income threshold & Dean Academic Interview" },
    { code: "SCH-SIBL-025", name: "Sibling Institutional Concession", discountPercent: 25, recipients: 84, totalValuation: 315000, eligibilityCriteria: "Second or third concurrent sibling enrolled at Greenfield" },
  ];

  const filtered = scholarships.filter(s => s.name.toLowerCase().includes(search.toLowerCase()) || s.code.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6 text-left">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Scholarship &amp; Tuition Waiver Management</h1>
          <p className="text-sm text-muted-foreground">Manage financial aid endowments, merit grants, and sibling concessions</p>
        </div>
        <Button size="sm">
          <Plus className="mr-1.5 size-4" /> Create Grant Policy
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="rounded-xl border bg-card p-4">
          <p className="text-xs text-muted-foreground font-medium">Total Aid Endowment</p>
          <p className="text-2xl font-bold text-foreground mt-1">$1,203,750</p>
        </div>
        <div className="rounded-xl border bg-card p-4">
          <p className="text-xs text-muted-foreground font-medium">Beneficiary Scholars</p>
          <p className="text-2xl font-bold text-primary mt-1">173 Students</p>
        </div>
        <div className="rounded-xl border bg-card p-4">
          <p className="text-xs text-muted-foreground font-medium">Active Grant Schemes</p>
          <p className="text-2xl font-bold text-foreground mt-1">5 Programs</p>
        </div>
        <div className="rounded-xl border bg-card p-4">
          <p className="text-xs text-muted-foreground font-medium">Average Award Coverage</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">54.2%</p>
        </div>
      </div>

      <div className="space-y-4">
        {filtered.map((s) => (
          <div key={s.code} className="rounded-2xl border border-border bg-card p-6 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">{s.code}</span>
                <Badge variant="default">{s.discountPercent}% Fee Waiver</Badge>
              </div>
              <h3 className="text-lg font-bold text-foreground">{s.name}</h3>
              <p className="text-xs text-muted-foreground">Criteria: {s.eligibilityCriteria}</p>
            </div>
            <div className="text-left sm:text-right shrink-0 space-y-0.5">
              <p className="text-lg font-bold text-foreground">${s.totalValuation.toLocaleString()} Allocated</p>
              <p className="text-xs text-muted-foreground">{s.recipients} Enrolled Scholars</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
