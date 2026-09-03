"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";
import { CircleUserRoundIcon, CreditCardIcon, LogOutIcon } from "lucide-react";
import { ThemeSegmentControl } from "./theme-segment-control";
import { useRouter } from "next/navigation";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/components/ui/avatar"
import { useAuth } from "~/hooks/use-auth";

export function UserButton() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  if (loading) {
    return <div className="w-8 h-8 rounded-full bg-muted animate-pulse" />;
  }

  if (!user) {
    return (
      <Link href="/login">
        <Button variant="outline" size="sm">Sign in</Button>
      </Link>
    );
  }

  const initials = user.name?.split(" ").map((name) => name.charAt(0)).join("") || "U";

  const handleLogout = () => {
    logout();
    if (typeof window !== "undefined") {
      window.location.replace("/login");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-lg">
          <Avatar className="size-8 rounded-lg">
            <AvatarImage src={user.avatar} alt={user.name} className="rounded-lg"/>
            <AvatarFallback className="rounded-lg bg-primary text-white font-medium">
              {initials}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52 space-y-1">
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="size-8 rounded-lg">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="rounded-lg bg-primary text-white font-medium">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="truncate text-muted-foreground text-xs">
                {user.email}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuLabel className="font-normal">
          <ThemeSegmentControl />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => router.push("/profile")} className="cursor-pointer">
            <CircleUserRoundIcon />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/dashboard/operations/finance/invoices")} className="cursor-pointer">
            <CreditCardIcon />
            Billing
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className="text-destructive focus:text-destructive cursor-pointer font-medium">
          <LogOutIcon />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
