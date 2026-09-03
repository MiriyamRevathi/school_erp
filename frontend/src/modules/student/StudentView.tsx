"use client";

import * as React from "react";
import { api } from "~/lib/api";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import {
  Users,
  Search,
  Plus,
  Trash2,
  Edit2,
  Eye,
  RefreshCw,
  AlertCircle,
  Phone,
  MapPin,
  Calendar,
  X,
} from "lucide-react";

export interface Student {
  id: string;
  admissionNo: string;
  rollNumber: string;
  firstName: string;
  lastName: string;
  className: string;
  section: string;
  gender: string;
  dob: string;
  bloodGroup: string;
  parentName: string;
  parentPhone: string;
  address: string;
  status: string;
  admissionDate: string;
}

export function StudentView() {
  const [students, setStudents] = React.useState<Student[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [search, setSearch] = React.useState("");
  const [selectedClass, setSelectedClass] = React.useState<string>("All");

  // Modals state
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [editingStudent, setEditingStudent] = React.useState<Student | null>(null);
  const [viewingStudent, setViewingStudent] = React.useState<Student | null>(null);

  // Form state
  const [formData, setFormData] = React.useState<Partial<Student>>({
    firstName: "",
    lastName: "",
    className: "Grade 10",
    section: "A",
    rollNumber: "",
    gender: "Male",
    dob: "2010-01-01",
    bloodGroup: "O+",
    parentName: "",
    parentPhone: "",
    address: "",
    status: "Active",
  });

  const loadStudents = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.get<Student[]>("/students");
      setStudents(Array.isArray(data) ? data : []);
    } catch (err: any) {
      setError(err.message || "Failed to load students from backend");
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadStudents();
  }, [loadStudents]);

  const handleSaveStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingStudent) {
        await api.put(`/students/${editingStudent.id}`, formData);
      } else {
        await api.post("/students", formData);
      }
      setShowAddModal(false);
      setEditingStudent(null);
      resetForm();
      loadStudents();
    } catch (err: any) {
      alert(err.message || "Failed to save student");
    }
  };

  const handleDeleteStudent = async (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      try {
        await api.delete(`/students/${id}`);
        loadStudents();
      } catch (err: any) {
        alert(err.message || "Failed to delete student");
      }
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      className: "Grade 10",
      section: "A",
      rollNumber: "",
      gender: "Male",
      dob: "2010-01-01",
      bloodGroup: "O+",
      parentName: "",
      parentPhone: "",
      address: "",
      status: "Active",
    });
  };

  const openEdit = (student: Student) => {
    setEditingStudent(student);
    setFormData(student);
    setShowAddModal(true);
  };

  // Filter students
  const filtered = students.filter((s) => {
    const matchesSearch =
      `${s.firstName} ${s.lastName} ${s.admissionNo} ${s.rollNumber}`
        .toLowerCase()
        .includes(search.toLowerCase());
    const matchesClass =
      selectedClass === "All" || s.className.toLowerCase() === selectedClass.toLowerCase();
    return matchesSearch && matchesClass;
  });

  const classList = ["All", ...Array.from(new Set(students.map((s) => s.className)))];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Students Directory</h1>
          <p className="text-sm text-muted-foreground">
            Manage student enrollments, academic profiles, and guardian records
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={loadStudents} disabled={loading}>
            <RefreshCw className={`mr-2 size-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
          <Button
            size="sm"
            onClick={() => {
              resetForm();
              setEditingStudent(null);
              setShowAddModal(true);
            }}
          >
            <Plus className="mr-2 size-4" /> Add Student
          </Button>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-lg bg-destructive/15 p-4 text-sm text-destructive">
          <AlertCircle className="size-5 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {/* Filters and Search Bar */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
              <Input
                placeholder="Search by student name, roll number, admission..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <span className="text-xs font-medium text-muted-foreground">Class:</span>
              {classList.map((cls) => (
                <Button
                  key={cls}
                  variant={selectedClass === cls ? "default" : "outline"}
                  size="xs"
                  onClick={() => setSelectedClass(cls)}
                >
                  {cls}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Students Table */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base">Enrolled Students ({filtered.length})</CardTitle>
              <CardDescription>Official roster of registered students</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="py-12 text-center text-muted-foreground flex flex-col items-center justify-center gap-2">
              <RefreshCw className="size-6 animate-spin text-primary" />
              <p className="text-sm">Loading student directory...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground space-y-2">
              <Users className="mx-auto size-8 text-muted-foreground/50" />
              <p className="font-medium text-foreground">No students found</p>
              <p className="text-xs">Try adjusting your search criteria or add a new student.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b bg-muted/50 text-xs font-medium text-muted-foreground uppercase">
                  <tr>
                    <th className="px-4 py-3">Admission No</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Class & Sec</th>
                    <th className="px-4 py-3">Roll</th>
                    <th className="px-4 py-3">Guardian</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filtered.map((s) => (
                    <tr key={s.id} className="hover:bg-muted/30 transition-colors">
                      <td className="px-4 py-3 font-mono text-xs font-medium text-primary">
                        {s.admissionNo}
                      </td>
                      <td className="px-4 py-3">
                        <div className="font-medium text-foreground">
                          {s.firstName} {s.lastName}
                        </div>
                        <div className="text-xs text-muted-foreground">{s.gender} · {s.bloodGroup}</div>
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant="outline">
                          {s.className} - {s.section}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 font-mono text-xs">{s.rollNumber}</td>
                      <td className="px-4 py-3">
                        <div className="text-xs font-medium">{s.parentName}</div>
                        <div className="text-xs text-muted-foreground">{s.parentPhone}</div>
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant={s.status === "Active" ? "default" : "secondary"}>
                          {s.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="icon-xs"
                            onClick={() => setViewingStudent(s)}
                            title="View Details"
                          >
                            <Eye className="size-3.5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon-xs"
                            onClick={() => openEdit(s)}
                            title="Edit Student"
                          >
                            <Edit2 className="size-3.5" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon-xs"
                            onClick={() => handleDeleteStudent(s.id, `${s.firstName} ${s.lastName}`)}
                            className="text-destructive hover:bg-destructive/10"
                            title="Delete Student"
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

      {/* Add / Edit Student Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-xl border bg-background p-6 shadow-xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <h2 className="text-lg font-bold">
                {editingStudent ? "Edit Student" : "Add New Student"}
              </h2>
              <Button variant="ghost" size="icon-xs" onClick={() => setShowAddModal(false)}>
                <X className="size-4" />
              </Button>
            </div>

            <form onSubmit={handleSaveStudent} className="space-y-4 text-sm">
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

              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-1">
                  <Label>Class</Label>
                  <Input
                    required
                    placeholder="Grade 10"
                    value={formData.className}
                    onChange={(e) => setFormData({ ...formData, className: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <Label>Section</Label>
                  <Input
                    required
                    placeholder="A"
                    value={formData.section}
                    onChange={(e) => setFormData({ ...formData, section: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <Label>Roll No</Label>
                  <Input
                    required
                    placeholder="101"
                    value={formData.rollNumber}
                    onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-1">
                  <Label>Gender</Label>
                  <select
                    className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <Label>Date of Birth</Label>
                  <Input
                    type="date"
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <Label>Blood Group</Label>
                  <Input
                    placeholder="O+"
                    value={formData.bloodGroup}
                    onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label>Guardian Name</Label>
                  <Input
                    placeholder="Parent / Guardian"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <Label>Guardian Phone</Label>
                  <Input
                    placeholder="+1 555-0100"
                    value={formData.parentPhone}
                    onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label>Residential Address</Label>
                <Input
                  placeholder="Street address, city"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t">
                <Button type="button" variant="outline" onClick={() => setShowAddModal(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {editingStudent ? "Update Student" : "Save Student"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Student Details View Modal */}
      {viewingStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-xl border bg-background p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h2 className="text-lg font-bold">Student Profile Details</h2>
              <Button variant="ghost" size="icon-xs" onClick={() => setViewingStudent(null)}>
                <X className="size-4" />
              </Button>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Full Name:</span>
                <span className="font-semibold">{viewingStudent.firstName} {viewingStudent.lastName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Admission No:</span>
                <span className="font-mono text-primary font-medium">{viewingStudent.admissionNo}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Class & Section:</span>
                <span>{viewingStudent.className} - Section {viewingStudent.section} (Roll #{viewingStudent.rollNumber})</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Gender & Blood Group:</span>
                <span>{viewingStudent.gender} · {viewingStudent.bloodGroup}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Date of Birth:</span>
                <span>{viewingStudent.dob}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Guardian Contact:</span>
                <span>{viewingStudent.parentName} ({viewingStudent.parentPhone})</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Address:</span>
                <span className="text-right text-xs">{viewingStudent.address}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Enrollment Status:</span>
                <Badge variant={viewingStudent.status === "Active" ? "default" : "secondary"}>
                  {viewingStudent.status}
                </Badge>
              </div>
            </div>

            <div className="pt-4 border-t flex justify-end">
              <Button onClick={() => setViewingStudent(null)}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
