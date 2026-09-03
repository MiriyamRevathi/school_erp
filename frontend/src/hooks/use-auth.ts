"use client";

import * as React from "react";

export type Role = "ADMIN" | "TEACHER" | "STUDENT" | "PARENT";

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: Role;
  linkedId?: string;
  avatar?: string;
}

export function useAuth() {
  const [user, setUser] = React.useState<AuthUser | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const storedUser = localStorage.getItem("school_erp_user");
        const storedToken = localStorage.getItem("school_erp_token");

        if (storedUser && storedToken) {
          const parsed = JSON.parse(storedUser);
          if (parsed && parsed.role) {
            setUser(parsed);
          } else {
            setUser(null);
          }
        } else {
          setUser(null);
        }
      }
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const loginAs = (newUser: AuthUser, token?: string) => {
    setUser(newUser);
    if (typeof window !== "undefined") {
      const generatedToken = token || `token-role-${newUser.role}-${newUser.id}-${Date.now()}`;
      localStorage.setItem("school_erp_user", JSON.stringify(newUser));
      localStorage.setItem("school_erp_token", generatedToken);
      sessionStorage.setItem("school_erp_user", JSON.stringify(newUser));
      sessionStorage.setItem("school_erp_token", generatedToken);
      document.cookie = `school_erp_token=${generatedToken}; path=/; max-age=86400; SameSite=Lax`;
    }
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("school_erp_user");
      localStorage.removeItem("school_erp_token");
      sessionStorage.removeItem("school_erp_user");
      sessionStorage.removeItem("school_erp_token");
      document.cookie = "school_erp_token=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  };

  return { user, loading, loginAs, logout };
}
