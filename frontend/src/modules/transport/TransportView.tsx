"use client";

import * as React from "react";
import { api } from "~/lib/api";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Bus, Plus, RefreshCw, AlertCircle, Phone, MapPin, Clock, Users, X } from "lucide-react";

export interface TransportRoute {
  id: string;
  routeName: string;
  vehicleNumber: string;
  driverName: string;
  driverPhone: string;
  capacity: number;
  assignedStudents: number;
  stops: { name: string; pickupTime: string; dropTime: string }[];
}

export function TransportView() {
  const [routes, setRoutes] = React.useState<TransportRoute[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [showAddModal, setShowAddModal] = React.useState(false);

  const [formData, setFormData] = React.useState<Partial<TransportRoute>>({
    routeName: "",
    vehicleNumber: "BUS-03 (SPG-8823)",
    driverName: "",
    driverPhone: "",
    capacity: 40,
    assignedStudents: 25,
    stops: [
      { name: "Maple Center", pickupTime: "07:15 AM", dropTime: "03:45 PM" },
      { name: "School Campus", pickupTime: "08:00 AM", dropTime: "03:00 PM" },
    ],
  });

  const loadRoutes = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.get<TransportRoute[]>("/transport/routes");
      setRoutes(Array.isArray(data) ? data : []);
    } catch (err: any) {
      setError(err.message || "Failed to load transport routes");
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadRoutes();
  }, [loadRoutes]);

  const handleSaveRoute = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/transport/routes", formData);
      setShowAddModal(false);
      loadRoutes();
    } catch (err: any) {
      alert(err.message || "Failed to add route");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Campus Transport & Routes</h1>
          <p className="text-sm text-muted-foreground">
            Manage school buses, student pickup stops, driver contact profiles, and fleet capacity
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={loadRoutes} disabled={loading}>
            <RefreshCw className={`mr-2 size-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
          <Button size="sm" onClick={() => setShowAddModal(true)}>
            <Plus className="mr-2 size-4" /> Add Bus Route
          </Button>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-lg bg-destructive/15 p-4 text-sm text-destructive">
          <AlertCircle className="size-5 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {loading ? (
          <div className="col-span-full py-12 text-center text-muted-foreground">
            <RefreshCw className="size-6 animate-spin mx-auto text-primary mb-2" />
            <p className="text-sm">Loading transport fleet...</p>
          </div>
        ) : routes.length === 0 ? (
          <div className="col-span-full py-12 text-center text-muted-foreground space-y-2">
            <Bus className="mx-auto size-8 text-muted-foreground/50" />
            <p className="font-medium text-foreground">No transport routes configured</p>
          </div>
        ) : (
          routes.map((rt) => (
            <Card key={rt.id} className="flex flex-col justify-between">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <Badge variant="outline" className="font-mono text-[10px] mb-1">
                      {rt.vehicleNumber}
                    </Badge>
                    <CardTitle className="text-lg font-bold">{rt.routeName}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <span>Driver: {rt.driverName}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1 font-mono text-xs">
                        <Phone className="size-3" /> {rt.driverPhone}
                      </span>
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">
                    <Users className="mr-1 size-3" /> {rt.assignedStudents}/{rt.capacity}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-xs">
                <div className="rounded-lg bg-muted/40 p-3 space-y-2">
                  <span className="font-semibold text-foreground flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-primary" /> Stops & Timings:
                  </span>
                  <div className="space-y-1.5 pl-2 border-l-2 border-primary/30">
                    {rt.stops?.map((stop, i) => (
                      <div key={i} className="flex items-center justify-between text-muted-foreground">
                        <span className="font-medium text-foreground">{stop.name}</span>
                        <span className="font-mono text-[11px] flex items-center gap-1">
                          <Clock className="size-3" /> Pickup: {stop.pickupTime} · Drop: {stop.dropTime}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Add Route Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-xl border bg-background p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h2 className="text-lg font-bold">Add Transport Route</h2>
              <Button variant="ghost" size="icon-xs" onClick={() => setShowAddModal(false)}>
                <X className="size-4" />
              </Button>
            </div>

            <form onSubmit={handleSaveRoute} className="space-y-3 text-sm">
              <div className="space-y-1">
                <Label>Route Name</Label>
                <Input
                  required
                  placeholder="East Springfield Circuit (Route 3)"
                  value={formData.routeName}
                  onChange={(e) => setFormData({ ...formData, routeName: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label>Vehicle / Bus No</Label>
                  <Input
                    required
                    placeholder="BUS-03 (SPG-8823)"
                    value={formData.vehicleNumber}
                    onChange={(e) => setFormData({ ...formData, vehicleNumber: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <Label>Capacity (Seats)</Label>
                  <Input
                    type="number"
                    required
                    value={formData.capacity}
                    onChange={(e) => setFormData({ ...formData, capacity: Number(e.target.value) })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label>Driver Name</Label>
                  <Input
                    required
                    placeholder="David Clark"
                    value={formData.driverName}
                    onChange={(e) => setFormData({ ...formData, driverName: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <Label>Driver Phone</Label>
                  <Input
                    required
                    placeholder="+1 555-0303"
                    value={formData.driverPhone}
                    onChange={(e) => setFormData({ ...formData, driverPhone: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t">
                <Button type="button" variant="outline" onClick={() => setShowAddModal(false)}>
                  Cancel
                </Button>
                <Button type="submit">Save Route</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
