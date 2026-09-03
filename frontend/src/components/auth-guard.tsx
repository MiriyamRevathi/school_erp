"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "~/hooks/use-auth";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  React.useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-2">
          <div className="size-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-xs text-muted-foreground">Verifying session...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}
