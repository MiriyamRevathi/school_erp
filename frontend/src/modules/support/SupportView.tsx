"use client";

import * as React from "react";
import { api } from "~/lib/api";
import { useAuth } from "~/hooks/use-auth";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { CircleHelp, Ticket, Plus, RefreshCw, AlertCircle, Search, MessageSquare, Send, CheckCircle2, Clock, Sparkles, X } from "lucide-react";

export interface SupportTicket {
  id: string;
  ticketNo: string;
  subject: string;
  category: "Billing" | "Academic" | "Transport" | "IT / Portal" | "General";
  description: string;
  creatorName: string;
  creatorEmail: string;
  creatorRole: string;
  status: "Open" | "In Progress" | "Resolved" | "Closed";
  priority: "High" | "Medium" | "Low";
  createdAt: string;
  responses: { sender: string; message: string; timestamp: string }[];
}

export function SupportView({ subView = "help-center" }: { subView?: "help-center" | "tickets" | "product-updates" }) {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = React.useState<"help-center" | "tickets" | "product-updates">(subView);
  const [tickets, setTickets] = React.useState<SupportTicket[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [selectedTicket, setSelectedTicket] = React.useState<SupportTicket | null>(null);
  const [replyText, setReplyText] = React.useState("");

  const [formData, setFormData] = React.useState({
    subject: "",
    category: "Academic",
    priority: "Medium",
    description: "",
  });

  const loadTickets = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.get<SupportTicket[]>("/support/tickets");
      setTickets(Array.isArray(data) ? data : []);
    } catch (err: any) {
      setError(err.message || "Failed to load support tickets");
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    setActiveTab(subView);
    if (subView === "tickets") {
      loadTickets();
    }
  }, [subView, loadTickets]);

  const handleCreateTicket = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/support/tickets", formData);
      setShowCreateModal(false);
      setFormData({ subject: "", category: "Academic", priority: "Medium", description: "" });
      loadTickets();
    } catch (err: any) {
      alert(err.message || "Failed to submit ticket");
    }
  };

  const handleSendReply = async () => {
    if (!selectedTicket || !replyText.trim()) return;
    try {
      const updated = await api.put(`/support/tickets/${selectedTicket.id}`, {
        status: user?.role === "ADMIN" ? "In Progress" : selectedTicket.status,
        reply: replyText,
      });
      setSelectedTicket(updated);
      setReplyText("");
      loadTickets();
    } catch (err: any) {
      alert(err.message || "Failed to send response");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Help Center & Support Desk</h1>
          <p className="text-sm text-muted-foreground">
            Browse knowledge base articles, submit inquiries, and track support requests
          </p>
        </div>
        <div className="flex items-center gap-2">
          {activeTab === "tickets" && (
            <Button size="sm" onClick={() => setShowCreateModal(true)}>
              <Plus className="mr-2 size-4" /> Open New Ticket
            </Button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b pb-2">
        <Button
          variant={activeTab === "help-center" ? "default" : "ghost"}
          size="sm"
          onClick={() => setActiveTab("help-center")}
        >
          <CircleHelp className="mr-2 size-4" /> Help Center & FAQs
        </Button>
        <Button
          variant={activeTab === "tickets" ? "default" : "ghost"}
          size="sm"
          onClick={() => {
            setActiveTab("tickets");
            loadTickets();
          }}
        >
          <Ticket className="mr-2 size-4" /> Support Tickets ({tickets.length})
        </Button>
        <Button
          variant={activeTab === "product-updates" ? "default" : "ghost"}
          size="sm"
          onClick={() => setActiveTab("product-updates")}
        >
          <Sparkles className="mr-2 size-4" /> System Changelog
        </Button>
      </div>

      {/* 1. Help Center & FAQs */}
      {activeTab === "help-center" && (
        <div className="space-y-6">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl">How can we assist you today?</CardTitle>
              <CardDescription>Search answers regarding attendance, marks, fees, and campus services</CardDescription>
            </CardHeader>
            <CardContent className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
                <Input placeholder="Search articles, policies, payment guides..." className="pl-9 bg-background" />
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-bold">Fee Payments & Statements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-muted-foreground">
                <p>• How do I download an official paid invoice receipt?</p>
                <p>• Payment options: Credit card, bank transfer, and online receipts.</p>
                <p>• Sibling discount and scholarship concession policies.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-bold">Attendance & Leave Rules</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-muted-foreground">
                <p>• How to submit a medical leave request for approval.</p>
                <p>• Daily cut-off timings for attendance roll calls.</p>
                <p>• Minimum 75% attendance criteria for term exam eligibility.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-bold">Exams & Report Cards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-muted-foreground">
                <p>• Viewing Term 1 GPA standing and subject percentiles.</p>
                <p>• Printing official authenticated student transcripts.</p>
                <p>• Revaluation procedures for exam answer sheets.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* 2. Support Tickets */}
      {activeTab === "tickets" && (
        <div className="space-y-4">
          {error && (
            <div className="flex items-center gap-2 rounded-lg bg-destructive/15 p-4 text-sm text-destructive">
              <AlertCircle className="size-5 shrink-0" />
              <p>{error}</p>
            </div>
          )}

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Support Requests Registry</CardTitle>
              <CardDescription>
                {user?.role === "ADMIN"
                  ? "All school community help desk tickets requiring resolution"
                  : "Track the status of your inquiries and administrative requests"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="py-12 text-center text-muted-foreground">
                  <RefreshCw className="size-6 animate-spin mx-auto text-primary" />
                </div>
              ) : tickets.length === 0 ? (
                <div className="py-12 text-center text-muted-foreground space-y-2">
                  <Ticket className="mx-auto size-8 text-muted-foreground/50" />
                  <p className="font-medium text-foreground">No support tickets filed</p>
                  <p className="text-xs">Click &quot;Open New Ticket&quot; to submit a support request.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="border-b bg-muted/50 text-xs font-medium text-muted-foreground uppercase">
                      <tr>
                        <th className="px-4 py-3">Ticket #</th>
                        <th className="px-4 py-3">Subject</th>
                        <th className="px-4 py-3">Category</th>
                        <th className="px-4 py-3">Requester</th>
                        <th className="px-4 py-3">Priority</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {tickets.map((t) => (
                        <tr key={t.id} className="hover:bg-muted/30">
                          <td className="px-4 py-3 font-mono text-xs font-bold text-primary">{t.ticketNo}</td>
                          <td className="px-4 py-3">
                            <div className="font-medium text-foreground">{t.subject}</div>
                            <div className="text-xs text-muted-foreground line-clamp-1">{t.description}</div>
                          </td>
                          <td className="px-4 py-3 text-xs">
                            <Badge variant="outline">{t.category}</Badge>
                          </td>
                          <td className="px-4 py-3 text-xs">
                            <div>{t.creatorName}</div>
                            <div className="text-muted-foreground text-[10px]">{t.creatorRole}</div>
                          </td>
                          <td className="px-4 py-3">
                            <Badge variant={t.priority === "High" ? "destructive" : "secondary"}>
                              {t.priority}
                            </Badge>
                          </td>
                          <td className="px-4 py-3">
                            <Badge variant={t.status === "Resolved" ? "default" : "outline"}>
                              {t.status}
                            </Badge>
                          </td>
                          <td className="px-4 py-3 text-right">
                            <Button size="xs" variant="ghost" onClick={() => setSelectedTicket(t)}>
                              <MessageSquare className="mr-1 size-3.5" /> View Thread
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
        </div>
      )}

      {/* 3. Product Updates */}
      {activeTab === "product-updates" && (
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">SchoolERP v2.4.0 — Role-Based Security & Performance</CardTitle>
                <Badge variant="default">Latest Release</Badge>
              </div>
              <CardDescription>Published: September 2026</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-xs text-muted-foreground leading-relaxed">
              <p>• Enhanced multi-tenant Role-Based Access Control (RBAC) with NestJS guards.</p>
              <p>• Added dedicated subcategory pages across Attendance, Finance, Examinations, and Administration.</p>
              <p>• Added instant in-memory session invalidation and automated logout security redirect.</p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Open Ticket Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-xl border bg-background p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h2 className="text-lg font-bold">Submit Support Ticket</h2>
              <Button variant="ghost" size="icon-xs" onClick={() => setShowCreateModal(false)}>
                <X className="size-4" />
              </Button>
            </div>

            <form onSubmit={handleCreateTicket} className="space-y-3 text-sm">
              <div className="space-y-1">
                <Label>Subject</Label>
                <Input
                  required
                  placeholder="e.g. Inquire about fee receipt"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label>Category</Label>
                  <select
                    className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option>Billing</option>
                    <option>Academic</option>
                    <option>Transport</option>
                    <option>IT / Portal</option>
                    <option>General</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <Label>Priority</Label>
                  <select
                    className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                    value={formData.priority}
                    onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <Label>Description</Label>
                <textarea
                  required
                  rows={4}
                  className="w-full rounded-md border bg-background p-3 text-sm"
                  placeholder="Please provide details about your request..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t">
                <Button type="button" variant="outline" onClick={() => setShowCreateModal(false)}>
                  Cancel
                </Button>
                <Button type="submit">Submit Request</Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Ticket Details & Chat Modal */}
      {selectedTicket && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-xl border bg-background p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-primary">{selectedTicket.ticketNo}</span>
                  <Badge variant={selectedTicket.status === "Resolved" ? "default" : "outline"}>
                    {selectedTicket.status}
                  </Badge>
                </div>
                <h2 className="text-base font-bold mt-1">{selectedTicket.subject}</h2>
              </div>
              <Button variant="ghost" size="icon-xs" onClick={() => setSelectedTicket(null)}>
                <X className="size-4" />
              </Button>
            </div>

            <div className="rounded-lg bg-muted/40 p-3 text-xs space-y-1">
              <p className="text-muted-foreground">{selectedTicket.description}</p>
              <div className="pt-2 flex justify-between text-[11px] text-muted-foreground border-t">
                <span>By: {selectedTicket.creatorName} ({selectedTicket.creatorRole})</span>
                <span>{new Date(selectedTicket.createdAt).toLocaleDateString()}</span>
              </div>
            </div>

            {/* Conversation Replies */}
            <div className="space-y-2 max-h-48 overflow-y-auto pr-1 text-xs">
              {selectedTicket.responses?.length === 0 ? (
                <p className="text-center py-3 text-muted-foreground italic">No replies yet on this ticket.</p>
              ) : (
                selectedTicket.responses?.map((r, i) => (
                  <div key={i} className="rounded-lg border p-2.5 space-y-1 bg-muted/20">
                    <div className="flex justify-between font-semibold text-[11px]">
                      <span className="text-primary">{r.sender}</span>
                      <span className="text-muted-foreground text-[10px]">{r.timestamp}</span>
                    </div>
                    <p className="text-foreground">{r.message}</p>
                  </div>
                ))
              )}
            </div>

            {/* Reply Input */}
            <div className="flex gap-2 pt-2 border-t">
              <Input
                placeholder="Type response or status update..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendReply()}
                className="text-xs"
              />
              <Button size="sm" onClick={handleSendReply}>
                <Send className="size-3.5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
