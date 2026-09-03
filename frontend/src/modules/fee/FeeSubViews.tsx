"use client";

import * as React from "react";
import { api } from "~/lib/api";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { CreditCard, DollarSign, Percent, Award, FileText, CircleDollarSign, Undo2, Receipt, PieChart, BookOpen, FileBarChart, RefreshCw, CheckCircle2 } from "lucide-react";

export function FeeStructureView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Institutional Fee Structure (2025-2026)</h1>
        <p className="text-sm text-muted-foreground">Class-wise tuition dues, laboratory charges, and campus facility fees</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <Card><CardHeader className="pb-2"><CardTitle className="text-sm">High School (Grades 9-10)</CardTitle></CardHeader><CardContent className="space-y-1 text-xs"><div className="flex justify-between"><span>Tuition:</span><span className="font-bold font-mono">$1,200 / term</span></div><div className="flex justify-between"><span>Lab / IT:</span><span className="font-mono">$150 / term</span></div><div className="flex justify-between"><span>Library:</span><span className="font-mono">$50 / term</span></div></CardContent></Card>
        <Card><CardHeader className="pb-2"><CardTitle className="text-sm">Senior Secondary (Grades 11-12)</CardTitle></CardHeader><CardContent className="space-y-1 text-xs"><div className="flex justify-between"><span>Tuition:</span><span className="font-bold font-mono">$1,400 / term</span></div><div className="flex justify-between"><span>Lab / IT:</span><span className="font-mono">$250 / term</span></div><div className="flex justify-between"><span>Library:</span><span className="font-mono">$50 / term</span></div></CardContent></Card>
        <Card><CardHeader className="pb-2"><CardTitle className="text-sm">Middle School (Grades 6-8)</CardTitle></CardHeader><CardContent className="space-y-1 text-xs"><div className="flex justify-between"><span>Tuition:</span><span className="font-bold font-mono">$1,000 / term</span></div><div className="flex justify-between"><span>Lab / IT:</span><span className="font-mono">$100 / term</span></div><div className="flex justify-between"><span>Library:</span><span className="font-mono">$50 / term</span></div></CardContent></Card>
      </div>
    </div>
  );
}

export function DiscountsWaiversView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Fee Discounts & Concessions</h1>
        <p className="text-sm text-muted-foreground">Sibling discounts, staff child waivers, and approved concessions</p>
      </div>
      <Card>
        <CardHeader><CardTitle className="text-base">Active Concession Rules</CardTitle></CardHeader>
        <CardContent className="space-y-3 text-xs">
          <div className="flex items-center justify-between p-3 rounded-lg border bg-muted/20">
            <div><p className="font-semibold text-foreground">Sibling Discount (15% off tuition)</p><p className="text-muted-foreground">Applicable to second and subsequent enrolled siblings</p></div>
            <Badge variant="default">Active</Badge>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg border bg-muted/20">
            <div><p className="font-semibold text-foreground">Faculty Child Benefit (50% off tuition)</p><p className="text-muted-foreground">Granted to full-time permanent teaching and admin staff</p></div>
            <Badge variant="default">Active</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function DueCollectionView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Due Collection & Overdue Recovery</h1>
        <p className="text-sm text-muted-foreground">Track outstanding unpaid student invoices and automated reminder notices</p>
      </div>
      <Card>
        <CardHeader><CardTitle className="text-base">Outstanding Fee Accounts</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between p-3 rounded-lg border border-red-500/30 bg-red-500/5">
              <div><p className="font-semibold text-foreground">Noah Johnson (Grade 9-B)</p><p className="text-muted-foreground">Invoice #INV-2025-003 · Due Date: 2025-09-15</p></div>
              <div className="text-right"><span className="font-bold text-red-600 font-mono text-sm">$1,450 Due</span><Button size="xs" variant="outline" className="block mt-1">Send SMS Reminder</Button></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function RefundsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Refunds & Security Deposits</h1>
        <p className="text-sm text-muted-foreground">Student refundable caution deposits and fee adjustment disbursements</p>
      </div>
      <Card><CardHeader><CardTitle className="text-base">Refund Requests</CardTitle></CardHeader><CardContent className="py-8 text-center text-xs text-muted-foreground">No active refund requests pending review</CardContent></Card>
    </div>
  );
}

export function ExpenseManagementView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Operational Expenditures</h1>
        <p className="text-sm text-muted-foreground">Campus utilities, facility maintenance, and laboratory inventory expenses</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <Card><CardHeader className="pb-1"><CardTitle className="text-xs">Utilities & Power</CardTitle></CardHeader><CardContent><div className="text-xl font-bold font-mono">$3,420</div><p className="text-xs text-muted-foreground">August 2025</p></CardContent></Card>
        <Card><CardHeader className="pb-1"><CardTitle className="text-xs">Science Lab Supplies</CardTitle></CardHeader><CardContent><div className="text-xl font-bold font-mono">$1,850</div><p className="text-xs text-muted-foreground">Chemistry & Physics</p></CardContent></Card>
        <Card><CardHeader className="pb-1"><CardTitle className="text-xs">Bus Fleet Fuel</CardTitle></CardHeader><CardContent><div className="text-xl font-bold font-mono">$2,100</div><p className="text-xs text-muted-foreground">Transport department</p></CardContent></Card>
      </div>
    </div>
  );
}

export function BudgetingView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Annual Budgeting & Departmental Allocation</h1>
        <p className="text-sm text-muted-foreground">Financial year 2025-2026 budget utilization vs allocated funds</p>
      </div>
      <Card><CardHeader><CardTitle className="text-base">Budget Allocation Matrix</CardTitle></CardHeader><CardContent className="space-y-3 text-xs"><div className="flex justify-between py-2 border-b"><span>Academic & Curriculum:</span><span className="font-mono font-bold">$120,000 Allocated (68% Utilized)</span></div><div className="flex justify-between py-2 border-b"><span>Infrastructure & Campus:</span><span className="font-mono font-bold">$85,000 Allocated (52% Utilized)</span></div><div className="flex justify-between py-2 border-b"><span>IT & Digital Learning:</span><span className="font-mono font-bold">$40,000 Allocated (74% Utilized)</span></div></CardContent></Card>
    </div>
  );
}

export function AccountingLedgerView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">General Accounting Ledger</h1>
        <p className="text-sm text-muted-foreground">Double-entry cash book, tuition receivables, and bank reconciliation</p>
      </div>
      <Card><CardHeader><CardTitle className="text-base">Recent Ledger Journal Entries</CardTitle></CardHeader><CardContent className="space-y-2 text-xs font-mono"><div className="flex justify-between p-2 rounded bg-muted/30"><span>2025-09-10 · Tuition Receipt (Liam Davis)</span><span className="text-emerald-600 font-bold">+ $1,550.00 CR</span></div><div className="flex justify-between p-2 rounded bg-muted/30"><span>2025-09-08 · Science Lab Vendor Payment</span><span className="text-red-600 font-bold">- $850.00 DR</span></div></CardContent></Card>
    </div>
  );
}

export function FinancialReportsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Financial Audits & Revenue Statements</h1>
        <p className="text-sm text-muted-foreground">Term collection rate, profit & loss statement, and fee receivables</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Card><CardHeader><CardTitle className="text-base">Collection Efficiency</CardTitle></CardHeader><CardContent><div className="text-2xl font-bold text-emerald-600">82.5% Collected</div><p className="text-xs text-muted-foreground mt-1">Term 1 targets met</p></CardContent></Card>
        <Card><CardHeader><CardTitle className="text-base">Total Outstanding Dues</CardTitle></CardHeader><CardContent><div className="text-2xl font-bold text-red-600">$2,400 Receivables</div><p className="text-xs text-muted-foreground mt-1">Pending parent payments</p></CardContent></Card>
      </div>
    </div>
  );
}
