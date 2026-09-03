"use client";

import * as React from "react";
import { api } from "~/lib/api";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Layers, Plus, Trash2, Edit2, RefreshCw, AlertCircle, Users, BookOpen, X } from "lucide-react";

export interface SchoolClass {
  id: string;
  name: string;
  grade: string;
  section: string;
  classTeacherName: string;
  roomNumber: string;
  capacity: number;
  totalStudents: number;
  subjects: string[];
}

export function ClassView() {
  const [classes, setClasses] = React.useState<SchoolClass[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [editingClass, setEditingClass] = React.useState<SchoolClass | null>(null);

  const [formData, setFormData] = React.useState<Partial<SchoolClass>>({
    name: "",
    grade: "Grade 10",
    section: "A",
    classTeacherName: "Sarah Jenkins",
    roomNumber: "Room 101",
    capacity: 35,
    totalStudents: 30,
    subjects: ["Mathematics", "Science", "English"],
  });

  const loadClasses = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.get<SchoolClass[]>("/classes");
      setClasses(Array.isArray(data) ? data : []);
    } catch (err: any) {
      setError(err.message || "Failed to load classes from backend");
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadClasses();
  }, [loadClasses]);

  const handleSaveClass = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingClass) {
        await api.put(`/classes/${editingClass.id}`, formData);
      } else {
        await api.post("/classes", formData);
      }
      setShowAddModal(false);
      setEditingClass(null);
      resetForm();
      loadClasses();
    } catch (err: any) {
      alert(err.message || "Failed to save class");
    }
  };

  const handleDeleteClass = async (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      try {
        await api.delete(`/classes/${id}`);
        loadClasses();
      } catch (err: any) {
        alert(err.message || "Failed to delete class");
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      grade: "Grade 10",
      section: "A",
      classTeacherName: "Sarah Jenkins",
      roomNumber: "Room 101",
      capacity: 35,
      totalStudents: 30,
      subjects: ["Mathematics", "Science", "English"],
    });
  };

  const openEdit = (cls: SchoolClass) => {
    setEditingClass(cls);
    setFormData(cls);
    setShowAddModal(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Classes & Sections</h1>
          <p className="text-sm text-muted-foreground">
            Configure academic grade levels, classroom allocations, and assigned class teachers
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={loadClasses} disabled={loading}>
            <RefreshCw className={`mr-2 size-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
          <Button
            size="sm"
            onClick={() => {
              resetForm();
              setEditingClass(null);
              setShowAddModal(true);
            }}
          >
            <Plus className="mr-2 size-4" /> Add Class
          </Button>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-lg bg-destructive/15 p-4 text-sm text-destructive">
          <AlertCircle className="size-5 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <div className="col-span-full py-12 text-center text-muted-foreground">
            <RefreshCw className="size-6 animate-spin mx-auto text-primary mb-2" />
            <p className="text-sm">Loading classes...</p>
          </div>
        ) : classes.length === 0 ? (
          <div className="col-span-full py-12 text-center text-muted-foreground space-y-2">
            <Layers className="mx-auto size-8 text-muted-foreground/50" />
            <p className="font-medium text-foreground">No classes created</p>
          </div>
        ) : (
          classes.map((c) => {
            const occupancyPct = Math.round((c.totalStudents / c.capacity) * 100);
            return (
              <Card key={c.id} className="relative overflow-hidden flex flex-col justify-between">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <Badge variant="outline" className="mb-1 text-[10px]">
                        {c.roomNumber}
                      </Badge>
                      <CardTitle className="text-lg font-bold">{c.name}</CardTitle>
                      <CardDescription>Class Teacher: {c.classTeacherName}</CardDescription>
                    </div>
                    <Badge variant={occupancyPct > 90 ? "destructive" : "secondary"}>
                      {c.totalStudents}/{c.capacity}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-xs">
                  {/* Occupancy progress */}
                  <div>
                    <div className="flex justify-between text-muted-foreground mb-1">
                      <span>Enrollment Capacity</span>
                      <span className="font-medium">{occupancyPct}%</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${Math.min(100, occupancyPct)}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <span className="font-semibold text-foreground">Curriculum Subjects:</span>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {c.subjects?.map((sub, i) => (
                        <Badge key={i} variant="secondary" className="text-[10px]">
                          {sub}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t flex items-center justify-end gap-1">
                    <Button variant="ghost" size="xs" onClick={() => openEdit(c)}>
                      <Edit2 className="mr-1 size-3.5" /> Edit
                    </Button>
                    <Button
                      variant="ghost"
                      size="xs"
                      onClick={() => handleDeleteClass(c.id, c.name)}
                      className="text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="mr-1 size-3.5" /> Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>

      {/* Add / Edit Class Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-xl border bg-background p-6 shadow-xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <h2 className="text-lg font-bold">
                {editingClass ? "Edit Class" : "Create New Class / Section"}
              </h2>
              <Button variant="ghost" size="icon-xs" onClick={() => setShowAddModal(false)}>
                <X className="size-4" />
              </Button>
            </div>

            <form onSubmit={handleSaveClass} className="space-y-4 text-sm">
              <div className="space-y-1">
                <Label>Class Display Name</Label>
                <Input
                  required
                  placeholder="Grade 10 - Section A"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label>Grade Level</Label>
                  <Input
                    required
                    placeholder="Grade 10"
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
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
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label>Class Teacher</Label>
                  <Input
                    required
                    placeholder="Sarah Jenkins"
                    value={formData.classTeacherName}
                    onChange={(e) => setFormData({ ...formData, classTeacherName: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <Label>Room / Classroom</Label>
                  <Input
                    required
                    placeholder="Room 201"
                    value={formData.roomNumber}
                    onChange={(e) => setFormData({ ...formData, roomNumber: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label>Student Capacity</Label>
                  <Input
                    type="number"
                    required
                    value={formData.capacity}
                    onChange={(e) => setFormData({ ...formData, capacity: parseInt(e.target.value, 10) || 30 })}
                  />
                </div>
                <div className="space-y-1">
                  <Label>Enrolled Count</Label>
                  <Input
                    type="number"
                    value={formData.totalStudents}
                    onChange={(e) => setFormData({ ...formData, totalStudents: parseInt(e.target.value, 10) || 0 })}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t">
                <Button type="button" variant="outline" onClick={() => setShowAddModal(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {editingClass ? "Update Class" : "Save Class"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
