"use client";

import * as React from "react";
import { useAuth } from "~/hooks/use-auth";

export default function LogoutPage() {
  const { logout } = useAuth();

  React.useEffect(() => {
    logout();
    if (typeof window !== "undefined") {
      window.location.replace("/login");
    }
  }, [logout]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="size-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <p className="text-sm font-medium">Signing out...</p>
      </div>
    </div>
  );
}
