"use client";

import * as React from "react";
import { api } from "~/lib/api";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Calendar, Plus, RefreshCw, AlertCircle, Clock, MapPin, User, X } from "lucide-react";

export interface TimetableSlot {
  id: string;
  className: string;
  section: string;
  dayOfWeek: string;
  periodNumber: number;
  timeSlot: string;
  subject: string;
  teacherName: string;
  roomNumber: string;
}

export function TimetableView() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const [selectedDay, setSelectedDay] = React.useState<string>("Monday");
  const [selectedClass, setSelectedClass] = React.useState<string>("Grade 10");
  const [slots, setSlots] = React.useState<TimetableSlot[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [showAddModal, setShowAddModal] = React.useState(false);

  const [formData, setFormData] = React.useState<Partial<TimetableSlot>>({
    className: "Grade 10",
    section: "A",
    dayOfWeek: "Monday",
    periodNumber: 1,
    timeSlot: "08:30 - 09:15",
    subject: "Mathematics",
    teacherName: "David Miller",
    roomNumber: "Room 201",
  });

  const loadTimetable = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.get<TimetableSlot[]>("/timetable");
      setSlots(Array.isArray(data) ? data : []);
    } catch (err: any) {
      setError(err.message || "Failed to load timetable");
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadTimetable();
  }, [loadTimetable]);

  const handleSaveSlot = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/timetable", formData);
      setShowAddModal(false);
      loadTimetable();
    } catch (err: any) {
      alert(err.message || "Failed to create timetable slot");
    }
  };

  const filteredSlots = slots.filter((s) => {
    const matchesDay = s.dayOfWeek.toLowerCase() === selectedDay.toLowerCase();
    const matchesClass = selectedClass === "All" || s.className.toLowerCase() === selectedClass.toLowerCase();
    return matchesDay && matchesClass;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Class Timetables & Schedules</h1>
          <p className="text-sm text-muted-foreground">
            Manage weekly period matrix, subject allocation, and instructor room timetables
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={loadTimetable} disabled={loading}>
            <RefreshCw className={`mr-2 size-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
          <Button size="sm" onClick={() => setShowAddModal(true)}>
            <Plus className="mr-2 size-4" /> Add Period Slot
          </Button>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-lg bg-destructive/15 p-4 text-sm text-destructive">
          <AlertCircle className="size-5 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {/* Days & Class Filter */}
      <Card>
        <CardContent className="pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {days.map((day) => (
              <Button
                key={day}
                variant={selectedDay === day ? "default" : "outline"}
                size="xs"
                onClick={() => setSelectedDay(day)}
              >
                {day}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Select Grade:</span>
            <select
              className="rounded-md border bg-background px-3 py-1.5 text-xs"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              <option value="All">All Grades</option>
              <option value="Grade 10">Grade 10</option>
              <option value="Grade 9">Grade 9</option>
              <option value="Grade 11">Grade 11</option>
              <option value="Grade 8">Grade 8</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Timetable Schedule Grid */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">
            {selectedDay} Schedule · {selectedClass}
          </CardTitle>
          <CardDescription>Chronological period breakdown and instructor assignments</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="py-12 text-center text-muted-foreground">
              <RefreshCw className="size-6 animate-spin mx-auto text-primary" />
            </div>
          ) : filteredSlots.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground space-y-2">
              <Calendar className="mx-auto size-8 text-muted-foreground/50" />
              <p className="font-medium text-foreground">No periods scheduled for {selectedDay}</p>
              <p className="text-xs">Click &quot;Add Period Slot&quot; to assign a class lecture.</p>
            </div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {filteredSlots.map((s) => (
                <div
                  key={s.id}
                  className="rounded-xl border p-4 bg-card hover:bg-accent/40 transition-colors space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="font-mono text-[10px]">
                      Period #{s.periodNumber}
                    </Badge>
                    <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                      <Clock className="size-3" /> {s.timeSlot}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-base text-foreground">{s.subject}</h3>
                    <p className="text-xs text-primary font-medium">{s.className} - {s.section}</p>
                  </div>

                  <div className="pt-2 border-t text-xs text-muted-foreground space-y-1">
                    <div className="flex items-center gap-1.5">
                      <User className="size-3.5" />
                      <span className="truncate">{s.teacherName}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="size-3.5" />
                      <span>{s.roomNumber}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Add Slot Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-xl border bg-background p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h2 className="text-lg font-bold">Assign Period Slot</h2>
              <Button variant="ghost" size="icon-xs" onClick={() => setShowAddModal(false)}>
                <X className="size-4" />
              </Button>
            </div>

            <form onSubmit={handleSaveSlot} className="space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label>Day of Week</Label>
                  <select
                    className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                    value={formData.dayOfWeek}
                    onChange={(e) => setFormData({ ...formData, dayOfWeek: e.target.value })}
                  >
                    {days.map((d) => (
                      <option key={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <Label>Period No (1-8)</Label>
                  <Input
                    type="number"
                    min={1}
                    max={8}
                    required
                    value={formData.periodNumber}
                    onChange={(e) => setFormData({ ...formData, periodNumber: Number(e.target.value) })}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label>Subject</Label>
                <Input
                  required
                  placeholder="Advanced Physics"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label>Instructor Name</Label>
                  <Input
                    required
                    placeholder="Sarah Jenkins"
                    value={formData.teacherName}
                    onChange={(e) => setFormData({ ...formData, teacherName: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <Label>Time Slot</Label>
                  <Input
                    required
                    placeholder="08:30 - 09:15"
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
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
                  <Label>Room No</Label>
                  <Input
                    required
                    placeholder="Room 201"
                    value={formData.roomNumber}
                    onChange={(e) => setFormData({ ...formData, roomNumber: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t">
                <Button type="button" variant="outline" onClick={() => setShowAddModal(false)}>
                  Cancel
                </Button>
                <Button type="submit">Save Slot</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
