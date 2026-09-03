"use client";

import * as React from "react";
import { api } from "~/lib/api";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { CreditCard, DollarSign, RefreshCw, AlertCircle, CheckCircle2, Search, X } from "lucide-react";

export interface FeeInvoice {
  id: string;
  invoiceNo: string;
  studentId: string;
  studentName: string;
  className: string;
  term: string;
  academicYear: string;
  tuitionFee: number;
  transportFee: number;
  hostelFee: number;
  libraryFee: number;
  discount: number;
  totalAmount: number;
  paidAmount: number;
  dueAmount: number;
  dueDate: string;
  status: "Paid" | "Partially Paid" | "Unpaid" | "Overdue";
  paidDate?: string;
  paymentMethod?: string;
}

export function FeeView() {
  const [invoices, setInvoices] = React.useState<FeeInvoice[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [search, setSearch] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState<string>("All");

  const [payingInvoice, setPayingInvoice] = React.useState<FeeInvoice | null>(null);
  const [paymentAmount, setPaymentAmount] = React.useState<number>(0);
  const [paymentMethod, setPaymentMethod] = React.useState<string>("Credit Card");
  const [processingPayment, setProcessingPayment] = React.useState(false);

  const loadInvoices = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.get<FeeInvoice[]>("/fees/invoices");
      setInvoices(Array.isArray(data) ? data : []);
    } catch (err: any) {
      setError(err.message || "Failed to load fee invoices");
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadInvoices();
  }, [loadInvoices]);

  const handleRecordPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!payingInvoice) return;
    setProcessingPayment(true);
    try {
      await api.post(`/fees/invoices/${payingInvoice.id}/pay`, {
        amount: Number(paymentAmount),
        paymentMethod,
      });
      setPayingInvoice(null);
      loadInvoices();
    } catch (err: any) {
      alert(err.message || "Failed to process payment");
    } finally {
      setProcessingPayment(false);
    }
  };

  const openPaymentModal = (inv: FeeInvoice) => {
    setPayingInvoice(inv);
    setPaymentAmount(inv.dueAmount);
    setPaymentMethod("Credit Card");
  };

  const totalBilled = invoices.reduce((s, i) => s + i.totalAmount, 0);
  const totalCollected = invoices.reduce((s, i) => s + i.paidAmount, 0);
  const totalOutstanding = invoices.reduce((s, i) => s + i.dueAmount, 0);

  const filtered = invoices.filter((i) => {
    const matchesSearch =
      `${i.studentName} ${i.invoiceNo} ${i.className}`.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || i.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Fee Management & Billing</h1>
          <p className="text-sm text-muted-foreground">
            Manage student invoices, payment collections, discounts, and fee structures
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={loadInvoices} disabled={loading}>
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

      {/* Financial KPI stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-muted-foreground">Total Invoiced</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">${totalBilled.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">Term 1 Academic Year 2025-2026</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-emerald-500">
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-emerald-700">Total Collected</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">${totalCollected.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {totalBilled > 0 ? Math.round((totalCollected / totalBilled) * 100) : 0}% collection rate
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-500">
          <CardHeader className="pb-1">
            <CardTitle className="text-xs font-medium text-red-700">Outstanding Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">${totalOutstanding.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">Pending student payments</p>
          </CardContent>
        </Card>
      </div>

      {/* Search & Filter Toolbar */}
      <Card>
        <CardContent className="pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
            <Input
              placeholder="Search by student, invoice no, class..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto">
            {["All", "Paid", "Partially Paid", "Unpaid"].map((status) => (
              <Button
                key={status}
                variant={statusFilter === status ? "default" : "outline"}
                size="xs"
                onClick={() => setStatusFilter(status)}
              >
                {status}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Invoices Table */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Invoices & Statements ({filtered.length})</CardTitle>
          <CardDescription>Itemized billing records across tuition and campus services</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="py-12 text-center text-muted-foreground">
              <RefreshCw className="size-6 animate-spin mx-auto text-primary mb-2" />
              <p className="text-sm">Loading fee invoices...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground space-y-2">
              <CreditCard className="mx-auto size-8 text-muted-foreground/50" />
              <p className="font-medium text-foreground">No invoices found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b bg-muted/50 text-xs font-medium text-muted-foreground uppercase">
                  <tr>
                    <th className="px-4 py-3">Invoice No</th>
                    <th className="px-4 py-3">Student</th>
                    <th className="px-4 py-3">Class</th>
                    <th className="px-4 py-3">Breakdown</th>
                    <th className="px-4 py-3">Total</th>
                    <th className="px-4 py-3">Paid / Due</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filtered.map((inv) => (
                    <tr key={inv.id} className="hover:bg-muted/30">
                      <td className="px-4 py-3 font-mono text-xs font-medium text-primary">
                        {inv.invoiceNo}
                      </td>
                      <td className="px-4 py-3">
                        <div className="font-medium text-foreground">{inv.studentName}</div>
                        <div className="text-xs text-muted-foreground">Due: {inv.dueDate}</div>
                      </td>
                      <td className="px-4 py-3 text-xs">
                        <Badge variant="outline">{inv.className}</Badge>
                      </td>
                      <td className="px-4 py-3 text-xs text-muted-foreground">
                        <div>Tuition: ${inv.tuitionFee}</div>
                        {inv.transportFee > 0 && <div>Transport: ${inv.transportFee}</div>}
                        {inv.hostelFee > 0 && <div>Hostel: ${inv.hostelFee}</div>}
                      </td>
                      <td className="px-4 py-3 font-semibold text-xs">${inv.totalAmount}</td>
                      <td className="px-4 py-3 text-xs">
                        <div className="text-emerald-600 font-medium">Paid: ${inv.paidAmount}</div>
                        <div className={inv.dueAmount > 0 ? "text-red-600 font-medium" : "text-muted-foreground"}>
                          Due: ${inv.dueAmount}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <Badge
                          variant={
                            inv.status === "Paid"
                              ? "default"
                              : inv.status === "Partially Paid"
                              ? "secondary"
                              : "destructive"
                          }
                        >
                          {inv.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-right">
                        {inv.dueAmount > 0 ? (
                          <Button
                            size="xs"
                            variant="outline"
                            onClick={() => openPaymentModal(inv)}
                          >
                            <DollarSign className="mr-1 size-3.5" /> Pay Now
                          </Button>
                        ) : (
                          <span className="text-xs text-emerald-600 font-medium flex items-center justify-end gap-1">
                            <CheckCircle2 className="size-3.5" /> Cleared
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Record Payment Modal */}
      {payingInvoice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-xl border bg-background p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h2 className="text-lg font-bold">Record Fee Payment</h2>
              <Button variant="ghost" size="icon-xs" onClick={() => setPayingInvoice(null)}>
                <X className="size-4" />
              </Button>
            </div>

            <div className="rounded-lg bg-muted/40 p-3 text-xs space-y-1">
              <div>
                <span className="text-muted-foreground">Student: </span>
                <span className="font-semibold text-foreground">{payingInvoice.studentName}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Invoice: </span>
                <span className="font-mono">{payingInvoice.invoiceNo}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Outstanding Due: </span>
                <span className="font-bold text-red-600">${payingInvoice.dueAmount}</span>
              </div>
            </div>

            <form onSubmit={handleRecordPayment} className="space-y-4 text-sm">
              <div className="space-y-1">
                <Label>Payment Amount ($)</Label>
                <Input
                  type="number"
                  required
                  min={1}
                  max={payingInvoice.dueAmount}
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(Number(e.target.value))}
                />
              </div>

              <div className="space-y-1">
                <Label>Payment Method</Label>
                <select
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option>Credit Card</option>
                  <option>Bank Transfer</option>
                  <option>Cash Receipt</option>
                  <option>UPI / Online</option>
                  <option>Cheque</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t">
                <Button type="button" variant="outline" onClick={() => setPayingInvoice(null)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={processingPayment}>
                  {processingPayment ? "Processing..." : "Confirm Payment"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
