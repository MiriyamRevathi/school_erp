"use client";

import * as React from "react";
import { api } from "~/lib/api";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import {
  GraduationCap,
  Search,
  Plus,
  Trash2,
  Edit2,
  RefreshCw,
  AlertCircle,
  Mail,
  Phone,
  BookOpen,
  X,
} from "lucide-react";

export interface Teacher {
  id: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  qualification: string;
  subjects: string[];
  status: string;
  joiningDate: string;
}

export function TeacherView() {
  const [teachers, setTeachers] = React.useState<Teacher[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [search, setSearch] = React.useState("");
  const [selectedDept, setSelectedDept] = React.useState<string>("All");

  const [showAddModal, setShowAddModal] = React.useState(false);
  const [editingTeacher, setEditingTeacher] = React.useState<Teacher | null>(null);

  const [formData, setFormData] = React.useState<Partial<Teacher>>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "Science",
    designation: "Teacher",
    qualification: "B.Ed",
    subjects: ["General Studies"],
    status: "Active",
  });

  const loadTeachers = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.get<Teacher[]>("/teachers");
      setTeachers(Array.isArray(data) ? data : []);
    } catch (err: any) {
      setError(err.message || "Failed to load teachers from backend");
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadTeachers();
  }, [loadTeachers]);

  const handleSaveTeacher = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingTeacher) {
        await api.put(`/teachers/${editingTeacher.id}`, formData);
      } else {
        await api.post("/teachers", formData);
      }
      setShowAddModal(false);
      setEditingTeacher(null);
      resetForm();
      loadTeachers();
    } catch (err: any) {
      alert(err.message || "Failed to save teacher");
    }
  };

  const handleDeleteTeacher = async (id: string, name: string) => {
    if (confirm(`Are you sure you want to remove teacher ${name}?`)) {
      try {
        await api.delete(`/teachers/${id}`);
        loadTeachers();
      } catch (err: any) {
        alert(err.message || "Failed to delete teacher");
      }
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      department: "Science",
      designation: "Teacher",
      qualification: "B.Ed",
      subjects: ["General Studies"],
      status: "Active",
    });
  };

  const openEdit = (teacher: Teacher) => {
    setEditingTeacher(teacher);
    setFormData(teacher);
    setShowAddModal(true);
  };

  const departments = ["All", ...Array.from(new Set(teachers.map((t) => t.department)))];

  const filtered = teachers.filter((t) => {
    const matchesSearch =
      `${t.firstName} ${t.lastName} ${t.email} ${t.employeeId} ${t.department}`
        .toLowerCase()
        .includes(search.toLowerCase());
    const matchesDept = selectedDept === "All" || t.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Teachers & Faculty</h1>
          <p className="text-sm text-muted-foreground">
            Manage academic departments, subject educators, and staff profiles
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={loadTeachers} disabled={loading}>
            <RefreshCw className={`mr-2 size-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
          <Button
            size="sm"
            onClick={() => {
              resetForm();
              setEditingTeacher(null);
              setShowAddModal(true);
            }}
          >
            <Plus className="mr-2 size-4" /> Add Teacher
          </Button>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-lg bg-destructive/15 p-4 text-sm text-destructive">
          <AlertCircle className="size-5 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {/* Filters & Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
              <Input
                placeholder="Search teachers by name, email, employee ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <span className="text-xs font-medium text-muted-foreground">Department:</span>
              {departments.map((dept) => (
                <Button
                  key={dept}
                  variant={selectedDept === dept ? "default" : "outline"}
                  size="xs"
                  onClick={() => setSelectedDept(dept)}
                >
                  {dept}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Teachers Roster Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <div className="col-span-full py-12 text-center text-muted-foreground">
            <RefreshCw className="size-6 animate-spin mx-auto text-primary mb-2" />
            <p className="text-sm">Loading faculty records...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="col-span-full py-12 text-center text-muted-foreground">
            <GraduationCap className="size-8 mx-auto text-muted-foreground/50 mb-2" />
            <p className="font-medium text-foreground">No faculty members found</p>
          </div>
        ) : (
          filtered.map((t) => (
            <Card key={t.id} className="relative overflow-hidden flex flex-col justify-between">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <Badge variant="outline" className="font-mono text-[10px] mb-1">
                      {t.employeeId}
                    </Badge>
                    <CardTitle className="text-base font-bold">
                      {t.firstName} {t.lastName}
                    </CardTitle>
                    <CardDescription>{t.designation} · {t.department}</CardDescription>
                  </div>
                  <Badge variant={t.status === "Active" ? "default" : "secondary"}>
                    {t.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-xs">
                <div className="space-y-1 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="size-3.5 text-primary" />
                    <span className="truncate">{t.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="size-3.5 text-primary" />
                    <span>{t.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="size-3.5 text-primary" />
                    <span>{t.qualification}</span>
                  </div>
                </div>

                <div>
                  <span className="font-semibold text-foreground">Subjects:</span>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {t.subjects?.map((sub, i) => (
                      <Badge key={i} variant="secondary" className="text-[10px]">
                        {sub}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t flex items-center justify-end gap-1">
                  <Button variant="ghost" size="xs" onClick={() => openEdit(t)}>
                    <Edit2 className="mr-1 size-3.5" /> Edit
                  </Button>
                  <Button
                    variant="ghost"
                    size="xs"
                    onClick={() => handleDeleteTeacher(t.id, `${t.firstName} ${t.lastName}`)}
                    className="text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="mr-1 size-3.5" /> Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Add / Edit Teacher Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-xl border bg-background p-6 shadow-xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <h2 className="text-lg font-bold">
                {editingTeacher ? "Edit Teacher" : "Add Faculty Member"}
              </h2>
              <Button variant="ghost" size="icon-xs" onClick={() => setShowAddModal(false)}>
                <X className="size-4" />
              </Button>
            </div>

            <form onSubmit={handleSaveTeacher} className="space-y-4 text-sm">
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
                  <Label>Department</Label>
                  <select
                    className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  >
                    <option>Science</option>
                    <option>Mathematics</option>
                    <option>Languages</option>
                    <option>Computer Science</option>
                    <option>Social Studies</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <Label>Designation</Label>
                  <Input
                    required
                    placeholder="Senior Teacher"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label>Qualification</Label>
                <Input
                  placeholder="M.Sc Physics, B.Ed"
                  value={formData.qualification}
                  onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                />
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t">
                <Button type="button" variant="outline" onClick={() => setShowAddModal(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {editingTeacher ? "Update Faculty" : "Save Faculty"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
