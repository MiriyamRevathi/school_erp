"use client";

import * as React from "react";
import { api } from "~/lib/api";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { UsersRound, Search, Plus, Trash2, Edit2, RefreshCw, AlertCircle, Mail, Phone, MapPin, X } from "lucide-react";

export interface Parent {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  occupation: string;
  children: { studentId: string; studentName: string; className: string }[];
  address: string;
  emergencyContact: string;
}

export function ParentView() {
  const [parents, setParents] = React.useState<Parent[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [search, setSearch] = React.useState("");
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [editingParent, setEditingParent] = React.useState<Parent | null>(null);

  const [formData, setFormData] = React.useState<Partial<Parent>>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    occupation: "Professional",
    address: "",
    emergencyContact: "",
    children: [],
  });

  const loadParents = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.get<Parent[]>("/parents");
      setParents(Array.isArray(data) ? data : []);
    } catch (err: any) {
      setError(err.message || "Failed to load parents from backend");
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadParents();
  }, [loadParents]);

  const handleSaveParent = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingParent) {
        await api.put(`/parents/${editingParent.id}`, formData);
      } else {
        await api.post("/parents", formData);
      }
      setShowAddModal(false);
      setEditingParent(null);
      resetForm();
      loadParents();
    } catch (err: any) {
      alert(err.message || "Failed to save parent record");
    }
  };

  const handleDeleteParent = async (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete parent record for ${name}?`)) {
      try {
        await api.delete(`/parents/${id}`);
        loadParents();
      } catch (err: any) {
        alert(err.message || "Failed to delete parent");
      }
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      occupation: "Professional",
      address: "",
      emergencyContact: "",
      children: [],
    });
  };

  const openEdit = (parent: Parent) => {
    setEditingParent(parent);
    setFormData(parent);
    setShowAddModal(true);
  };

  const filtered = parents.filter((p) =>
    `${p.firstName} ${p.lastName} ${p.email} ${p.phone} ${p.occupation}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Parents & Guardians</h1>
          <p className="text-sm text-muted-foreground">
            Manage guardian records, emergency contacts, and linked student associations
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={loadParents} disabled={loading}>
            <RefreshCw className={`mr-2 size-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
          <Button
            size="sm"
            onClick={() => {
              resetForm();
              setEditingParent(null);
              setShowAddModal(true);
            }}
          >
            <Plus className="mr-2 size-4" /> Add Parent
          </Button>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-lg bg-destructive/15 p-4 text-sm text-destructive">
          <AlertCircle className="size-5 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      <Card>
        <CardContent className="pt-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
            <Input
              placeholder="Search parents by name, email, phone..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Guardian Directory ({filtered.length})</CardTitle>
          <CardDescription>Verified parent contacts and linked students</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="py-12 text-center text-muted-foreground">
              <RefreshCw className="size-6 animate-spin mx-auto text-primary mb-2" />
              <p className="text-sm">Loading guardian records...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground space-y-2">
              <UsersRound className="mx-auto size-8 text-muted-foreground/50" />
              <p className="font-medium text-foreground">No guardian records found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b bg-muted/50 text-xs font-medium text-muted-foreground uppercase">
                  <tr>
                    <th className="px-4 py-3">Guardian Name</th>
                    <th className="px-4 py-3">Contact</th>
                    <th className="px-4 py-3">Occupation</th>
                    <th className="px-4 py-3">Linked Children</th>
                    <th className="px-4 py-3">Emergency Contact</th>
                    <th className="px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filtered.map((p) => (
                    <tr key={p.id} className="hover:bg-muted/30 transition-colors">
                      <td className="px-4 py-3">
                        <div className="font-medium text-foreground">
                          {p.firstName} {p.lastName}
                        </div>
                        <div className="text-xs text-muted-foreground">{p.address}</div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="text-xs font-medium">{p.phone}</div>
                        <div className="text-xs text-muted-foreground">{p.email}</div>
                      </td>
                      <td className="px-4 py-3 text-xs">{p.occupation}</td>
                      <td className="px-4 py-3">
                        <div className="flex flex-col gap-1">
                          {p.children?.map((c, i) => (
                            <Badge key={i} variant="outline" className="text-[11px] w-fit">
                              {c.studentName} ({c.className})
                            </Badge>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                        {p.emergencyContact || "—"}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Button variant="ghost" size="icon-xs" onClick={() => openEdit(p)}>
                            <Edit2 className="size-3.5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon-xs"
                            onClick={() => handleDeleteParent(p.id, `${p.firstName} ${p.lastName}`)}
                            className="text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="size-3.5" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Add / Edit Parent Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-xl border bg-background p-6 shadow-xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <h2 className="text-lg font-bold">
                {editingParent ? "Edit Parent Record" : "Add Parent / Guardian"}
              </h2>
              <Button variant="ghost" size="icon-xs" onClick={() => setShowAddModal(false)}>
                <X className="size-4" />
              </Button>
            </div>

            <form onSubmit={handleSaveParent} className="space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label>First Name</Label>
                  <Input
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <Label>Last Name</Label>
                  <Input
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <Label>Phone</Label>
                  <Input
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label>Occupation</Label>
                  <Input
                    value={formData.occupation}
                    onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <Label>Emergency Contact</Label>
                  <Input
                    value={formData.emergencyContact}
                    onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label>Address</Label>
                <Input
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t">
                <Button type="button" variant="outline" onClick={() => setShowAddModal(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {editingParent ? "Update Parent" : "Save Parent"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
