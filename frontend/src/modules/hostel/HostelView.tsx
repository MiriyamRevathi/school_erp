"use client";

import * as React from "react";
import { api } from "~/lib/api";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Hotel, RefreshCw, AlertCircle, Users, DoorOpen, Bed } from "lucide-react";

export interface HostelRoom {
  id: string;
  hostelName: string;
  roomNumber: string;
  roomType: string;
  floor: number;
  capacity: number;
  occupied: number;
  monthlyFee: number;
  occupants: { studentId: string; studentName: string; allocatedDate: string }[];
}

export function HostelView() {
  const [rooms, setRooms] = React.useState<HostelRoom[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const loadRooms = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.get<HostelRoom[]>("/hostel/rooms");
      setRooms(Array.isArray(data) ? data : []);
    } catch (err: any) {
      setError(err.message || "Failed to load hostel accommodation records");
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadRooms();
  }, [loadRooms]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Hostel & Residential Accommodation</h1>
          <p className="text-sm text-muted-foreground">
            Manage dormitories, bed capacity, student room allocations, and boarding fees
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={loadRooms} disabled={loading}>
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

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <div className="col-span-full py-12 text-center text-muted-foreground">
            <RefreshCw className="size-6 animate-spin mx-auto text-primary mb-2" />
            <p className="text-sm">Loading hostel rooms...</p>
          </div>
        ) : rooms.length === 0 ? (
          <div className="col-span-full py-12 text-center text-muted-foreground space-y-2">
            <Hotel className="mx-auto size-8 text-muted-foreground/50" />
            <p className="font-medium text-foreground">No hostel rooms registered</p>
          </div>
        ) : (
          rooms.map((rm) => (
            <Card key={rm.id} className="flex flex-col justify-between">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <Badge variant="outline" className="text-[10px] mb-1 font-mono">
                      Floor #{rm.floor}
                    </Badge>
                    <CardTitle className="text-lg font-bold">{rm.hostelName}</CardTitle>
                    <CardDescription>Room: {rm.roomNumber} ({rm.roomType})</CardDescription>
                  </div>
                  <Badge variant={rm.occupied >= rm.capacity ? "destructive" : "secondary"}>
                    {rm.occupied}/{rm.capacity} Beds
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-xs">
                <div className="flex justify-between items-center text-muted-foreground pb-2 border-b">
                  <span>Monthly Boarding Fee:</span>
                  <span className="font-bold text-foreground font-mono">${rm.monthlyFee} / mo</span>
                </div>

                <div>
                  <span className="font-semibold text-foreground flex items-center gap-1.5 mb-1.5">
                    <Users className="size-3.5 text-primary" /> Current Residents:
                  </span>
                  {rm.occupants?.length === 0 ? (
                    <p className="text-xs text-muted-foreground italic">Vacant room - Available for allocation</p>
                  ) : (
                    <div className="space-y-1">
                      {rm.occupants.map((occ, i) => (
                        <div key={i} className="flex justify-between rounded bg-muted/40 p-1.5 text-[11px]">
                          <span className="font-medium">{occ.studentName}</span>
                          <span className="text-muted-foreground font-mono">Since {occ.allocatedDate}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
