"use client";

import * as React from "react";
import { api } from "~/lib/api";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Shield, Plus, RefreshCw, AlertCircle, Search, Mail, UserCheck, X } from "lucide-react";

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Teacher" | "Student" | "Parent" | "Staff";
  status: "Active" | "Inactive" | "Suspended";
  createdAt: string;
  lastLogin: string;
}

export function UserView() {
  const [users, setUsers] = React.useState<UserAccount[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [search, setSearch] = React.useState("");
  const [roleFilter, setRoleFilter] = React.useState<string>("All");
  const [showAddModal, setShowAddModal] = React.useState(false);

  const [formData, setFormData] = React.useState<Partial<UserAccount>>({
    name: "",
    email: "",
    role: "Teacher",
    status: "Active",
  });

  const loadUsers = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.get<UserAccount[]>("/users");
      setUsers(Array.isArray(data) ? data : []);
    } catch (err: any) {
      setError(err.message || "Failed to load system users");
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const handleSaveUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/users", formData);
      setShowAddModal(false);
      loadUsers();
    } catch (err: any) {
      alert(err.message || "Failed to create user account");
    }
  };

  const filtered = users.filter((u) => {
    const matchesSearch =
      `${u.name} ${u.email} ${u.role}`.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter === "All" || u.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Users & Access Management</h1>
          <p className="text-sm text-muted-foreground">
            Manage system accounts, administrator privileges, and role permissions
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={loadUsers} disabled={loading}>
            <RefreshCw className={`mr-2 size-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
          <Button size="sm" onClick={() => setShowAddModal(true)}>
            <Plus className="mr-2 size-4" /> Add User
          </Button>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-lg bg-destructive/15 p-4 text-sm text-destructive">
          <AlertCircle className="size-5 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {/* Filter toolbar */}
      <Card>
        <CardContent className="pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
            <Input
              placeholder="Search users by name, email, role..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto">
            {["All", "Admin", "Teacher", "Student", "Parent"].map((role) => (
              <Button
                key={role}
                variant={roleFilter === role ? "default" : "outline"}
                size="xs"
                onClick={() => setRoleFilter(role)}
              >
                {role}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* User Table */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">System User Accounts ({filtered.length})</CardTitle>
          <CardDescription>Authentication credentials and access roles</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="py-12 text-center text-muted-foreground">
              <RefreshCw className="size-6 animate-spin mx-auto text-primary" />
            </div>
          ) : filtered.length === 0 ? (
            <p className="py-8 text-center text-xs text-muted-foreground">No accounts found</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b bg-muted/50 text-xs font-medium text-muted-foreground uppercase">
                  <tr>
                    <th className="px-4 py-3">Account Name</th>
                    <th className="px-4 py-3">Email Address</th>
                    <th className="px-4 py-3">Role</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Last Login</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filtered.map((u) => (
                    <tr key={u.id} className="hover:bg-muted/30">
                      <td className="px-4 py-3 font-semibold text-foreground">{u.name}</td>
                      <td className="px-4 py-3 text-xs text-muted-foreground">{u.email}</td>
                      <td className="px-4 py-3">
                        <Badge
                          variant={
                            u.role === "Admin"
                              ? "destructive"
                              : u.role === "Teacher"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {u.role}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant="outline">{u.status}</Badge>
                      </td>
                      <td className="px-4 py-3 text-xs text-muted-foreground font-mono">
                        {new Date(u.lastLogin).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Add User Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-xl border bg-background p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h2 className="text-lg font-bold">Create User Account</h2>
              <Button variant="ghost" size="icon-xs" onClick={() => setShowAddModal(false)}>
                <X className="size-4" />
              </Button>
            </div>

            <form onSubmit={handleSaveUser} className="space-y-4 text-sm">
              <div className="space-y-1">
                <Label>Full Name</Label>
                <Input
                  required
                  placeholder="Arthur Mitchell"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-1">
                <Label>Email Address</Label>
                <Input
                  type="email"
                  required
                  placeholder="user@schoolerp.local"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-1">
                <Label>Role Access</Label>
                <select
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value as any })}
                >
                  <option>Admin</option>
                  <option>Teacher</option>
                  <option>Student</option>
                  <option>Parent</option>
                  <option>Staff</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t">
                <Button type="button" variant="outline" onClick={() => setShowAddModal(false)}>
                  Cancel
                </Button>
                <Button type="submit">Create Account</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
