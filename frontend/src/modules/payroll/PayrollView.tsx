"use client";

import * as React from "react";
import { api } from "~/lib/api";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Wallet, RefreshCw, AlertCircle, Search, DollarSign, Eye, CheckCircle2, X } from "lucide-react";

export interface SalarySlip {
  id: string;
  employeeId: string;
  employeeName: string;
  department: string;
  month: string;
  year: number;
  basicSalary: number;
  allowances: number;
  deductions: number;
  netSalary: number;
  status: "Paid" | "Generated" | "Pending";
  paymentDate?: string;
}

export function PayrollView() {
  const [slips, setSlips] = React.useState<SalarySlip[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [search, setSearch] = React.useState("");
  const [selectedSlip, setSelectedSlip] = React.useState<SalarySlip | null>(null);

  const loadPayroll = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.get<SalarySlip[]>("/payroll/slips");
      setSlips(Array.isArray(data) ? data : []);
    } catch (err: any) {
      setError(err.message || "Failed to load staff payroll records");
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadPayroll();
  }, [loadPayroll]);

  const totalPayroll = slips.reduce((sum, s) => sum + s.netSalary, 0);

  const filtered = slips.filter((s) =>
    `${s.employeeName} ${s.employeeId} ${s.department}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Faculty & Staff Payroll</h1>
          <p className="text-sm text-muted-foreground">
            Manage salary disbursements, allowances, tax deductions, and employee pay slips
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={loadPayroll} disabled={loading}>
            <RefreshCw className={`mr-2 size-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-lg bg-destructive/15 p-4 text-sm text-destructive">
          <AlertCircle className="size-5 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {/* KPI Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="border-l-4 border-l-emerald-500">
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-muted-foreground">Total Monthly Payroll</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">${totalPayroll.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">Disbursed for August 2025</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-muted-foreground">Processed Employees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{slips.length}</div>
            <p className="text-xs text-muted-foreground mt-1">100% Payroll completed</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-violet-500">
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-muted-foreground">Average Net Salary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              ${slips.length > 0 ? Math.round(totalPayroll / slips.length).toLocaleString() : 0}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Teaching & Admin Faculty</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle className="text-base">Monthly Salary Records</CardTitle>
              <CardDescription>Salary breakdown and disbursement receipts</CardDescription>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
              <Input
                placeholder="Search by staff name or ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="py-12 text-center text-muted-foreground">
              <RefreshCw className="size-6 animate-spin mx-auto text-primary" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground space-y-2">
              <Wallet className="mx-auto size-8 text-muted-foreground/50" />
              <p className="font-medium text-foreground">No payroll slips found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b bg-muted/50 text-xs font-medium text-muted-foreground uppercase">
                  <tr>
                    <th className="px-4 py-3">Employee</th>
                    <th className="px-4 py-3">Department</th>
                    <th className="px-4 py-3">Period</th>
                    <th className="px-4 py-3">Basic</th>
                    <th className="px-4 py-3">Allowances / Deductions</th>
                    <th className="px-4 py-3">Net Salary</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filtered.map((s) => (
                    <tr key={s.id} className="hover:bg-muted/30">
                      <td className="px-4 py-3">
                        <div className="font-medium text-foreground">{s.employeeName}</div>
                        <div className="text-xs font-mono text-muted-foreground">{s.employeeId}</div>
                      </td>
                      <td className="px-4 py-3 text-xs">
                        <Badge variant="outline">{s.department}</Badge>
                      </td>
                      <td className="px-4 py-3 text-xs font-medium">{s.month} {s.year}</td>
                      <td className="px-4 py-3 font-mono text-xs">${s.basicSalary}</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="text-emerald-600 font-medium">+${s.allowances}</span> /{" "}
                        <span className="text-red-600 font-medium">-${s.deductions}</span>
                      </td>
                      <td className="px-4 py-3 font-bold font-mono text-xs text-foreground">
                        ${s.netSalary}
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant="default">{s.status}</Badge>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Button
                          variant="ghost"
                          size="xs"
                          onClick={() => setSelectedSlip(s)}
                        >
                          <Eye className="mr-1 size-3.5" /> Pay Slip
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Pay Slip Modal */}
      {selectedSlip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-xl border bg-background p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h2 className="text-lg font-bold">Salary Disbursement Slip</h2>
                <p className="text-xs text-muted-foreground">{selectedSlip.month} {selectedSlip.year}</p>
              </div>
              <Button variant="ghost" size="icon-xs" onClick={() => setSelectedSlip(null)}>
                <X className="size-4" />
              </Button>
            </div>

            <div className="rounded-lg bg-muted/40 p-3 text-xs space-y-1">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Employee Name:</span>
                <span className="font-bold text-foreground">{selectedSlip.employeeName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Employee ID:</span>
                <span className="font-mono">{selectedSlip.employeeId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Department:</span>
                <span>{selectedSlip.department}</span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b">
                <span>Basic Salary:</span>
                <span className="font-mono font-medium">${selectedSlip.basicSalary}</span>
              </div>
              <div className="flex justify-between py-1 border-b text-emerald-600">
                <span>Allowances & Bonus:</span>
                <span className="font-mono font-medium">+${selectedSlip.allowances}</span>
              </div>
              <div className="flex justify-between py-1 border-b text-red-600">
                <span>Tax & Deductions:</span>
                <span className="font-mono font-medium">-${selectedSlip.deductions}</span>
              </div>
              <div className="flex justify-between py-2 text-sm font-bold text-foreground">
                <span>Net Salary Disbursed:</span>
                <span className="font-mono text-primary font-bold text-base">${selectedSlip.netSalary}</span>
              </div>
            </div>

            <div className="pt-3 border-t flex justify-end">
              <Button onClick={() => setSelectedSlip(null)}>Close Slip</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
