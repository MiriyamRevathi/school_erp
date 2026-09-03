"use client";

import * as React from "react";
import { api } from "~/lib/api";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card";
import { Megaphone, RefreshCw, AlertCircle, CheckCircle2, Bell, Clock, Users } from "lucide-react";

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  category: "Announcement" | "Academic" | "Event" | "Emergency" | "Fee";
  targetAudience: "All" | "Teachers" | "Students" | "Parents";
  priority: "High" | "Medium" | "Low";
  publishedAt: string;
  read: boolean;
}

export function NotificationView() {
  const [notifications, setNotifications] = React.useState<NotificationItem[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [audienceFilter, setAudienceFilter] = React.useState<string>("All");

  const loadNotifications = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.get<NotificationItem[]>("/notifications");
      setNotifications(Array.isArray(data) ? data : []);
    } catch (err: any) {
      setError(err.message || "Failed to load announcements");
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    loadNotifications();
  }, [loadNotifications]);

  const handleMarkAsRead = async (id: string) => {
    try {
      await api.put(`/notifications/${id}/read`);
      loadNotifications();
    } catch (err: any) {
      alert(err.message || "Failed to mark announcement as read");
    }
  };

  const filtered = notifications.filter((n) => {
    return audienceFilter === "All" || n.targetAudience === audienceFilter || n.targetAudience === "All";
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Announcements & Notice Board</h1>
          <p className="text-sm text-muted-foreground">
            Official school circulars, academic notices, event bulletins, and urgent broadcasts
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={loadNotifications} disabled={loading}>
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

      {/* Audience Filters */}
      <Card>
        <CardContent className="pt-6 flex items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground">Filter Audience:</span>
          {["All", "Teachers", "Students", "Parents"].map((aud) => (
            <Button
              key={aud}
              variant={audienceFilter === aud ? "default" : "outline"}
              size="xs"
              onClick={() => setAudienceFilter(aud)}
            >
              {aud}
            </Button>
          ))}
        </CardContent>
      </Card>

      {/* Notice Cards List */}
      <div className="space-y-4">
        {loading ? (
          <div className="py-12 text-center text-muted-foreground">
            <RefreshCw className="size-6 animate-spin mx-auto text-primary mb-2" />
            <p className="text-sm">Loading announcements...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-12 text-center text-muted-foreground space-y-2">
            <Megaphone className="mx-auto size-8 text-muted-foreground/50" />
            <p className="font-medium text-foreground">No circulars posted</p>
          </div>
        ) : (
          filtered.map((n) => (
            <Card
              key={n.id}
              className={`transition-all ${
                !n.read ? "border-l-4 border-l-primary bg-primary/2" : ""
              }`}
            >
              <CardHeader className="pb-2">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-base font-bold">{n.title}</CardTitle>
                    {!n.read && (
                      <Badge variant="default" className="text-[10px] py-0">
                        New
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={n.priority === "High" ? "destructive" : "secondary"}>
                      {n.priority} Priority
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <Users className="mr-1 size-3" /> {n.targetAudience}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="flex items-center gap-2 text-xs">
                  <span>Category: {n.category}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="size-3" /> {new Date(n.publishedAt).toLocaleDateString()}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="text-muted-foreground leading-relaxed">{n.message}</p>
                <div className="pt-2 border-t flex justify-end">
                  {!n.read ? (
                    <Button variant="ghost" size="xs" onClick={() => handleMarkAsRead(n.id)}>
                      <CheckCircle2 className="mr-1 size-3.5" /> Mark as Read
                    </Button>
                  ) : (
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <CheckCircle2 className="size-3 text-emerald-600" /> Read
                    </span>
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
