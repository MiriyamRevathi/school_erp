"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/components/ui/avatar"
import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { Badge } from "~/components/ui/badge"
import { CircleUserRoundIcon, CreditCardIcon, LogOutIcon } from "lucide-react"
import { useAuth } from "~/hooks/use-auth"

export type HeaderUserProps = {
  user?: {
    name: string
    email: string
    role?: string
    avatar: string
  }
}

export function HeaderUser({ user: propUser }: HeaderUserProps) {
  const router = useRouter();
  const { user: authUser, logout } = useAuth();
  const activeUser = authUser || {
    name: propUser?.name || "User",
    email: propUser?.email || "user@schoolerp.local",
    role: (propUser?.role as any) || "STUDENT",
    avatar: propUser?.avatar || "/avatars/student.png",
  };
  const role = activeUser.role || "STUDENT";

  const handleLogout = () => {
    logout();
    if (typeof window !== "undefined") {
      window.location.replace("/login");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative h-9 w-9 rounded-full"
          aria-label="Open user menu"
        >
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage src={activeUser.avatar} alt={activeUser.name} />
            <AvatarFallback className="rounded-lg text-xs font-bold">
              {activeUser.name?.slice(0, 2).toUpperCase() || "US"}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="min-w-56 rounded-lg"
        side="bottom"
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={activeUser.avatar} alt={activeUser.name} />
              <AvatarFallback className="rounded-lg">
                {activeUser.name?.slice(0, 2).toUpperCase() || "US"}
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <div className="flex items-center justify-between">
                <span className="truncate font-medium">{activeUser.name}</span>
              </div>
              <span className="truncate text-xs text-muted-foreground">
                {activeUser.email}
              </span>
              <div className="mt-1">
                <Badge
                  variant={
                    role === "ADMIN"
                      ? "destructive"
                      : role === "TEACHER"
                      ? "default"
                      : "secondary"
                  }
                  className="text-[10px] py-0"
                >
                  {role}
                </Badge>
              </div>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => router.push("/profile")} className="cursor-pointer">
            <CircleUserRoundIcon className="mr-2 size-4" />
            Profile
          </DropdownMenuItem>
          {role !== "TEACHER" && (
            <DropdownMenuItem onClick={() => router.push("/dashboard/operations/finance/invoices")} className="cursor-pointer">
              <CreditCardIcon className="mr-2 size-4" />
              Fees & Invoices
            </DropdownMenuItem>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className="text-destructive focus:text-destructive cursor-pointer font-medium">
          <LogOutIcon className="mr-2 size-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
