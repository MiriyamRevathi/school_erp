"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "~/components/ui/sidebar"
import { RiQuestionLine, RiSettingsLine } from "react-icons/ri";
import { CrownIcon, LogOutIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react";
import { useAuth } from "~/hooks/use-auth";

interface IProps {
  user: {
    name: string
    email: string
    avatar: string
  }
}

export const NavUser = ({ user }: IProps) => {
  const { isMobile } = useSidebar()
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { logout, user: authUser } = useAuth();
  const router = useRouter();
  const active = authUser || user;

  const handleLogout = async () => {
    setIsLoggingOut(true);
    logout();
    if (typeof window !== "undefined") {
      window.location.replace("/login");
    }
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="size-8 rounded-sm">
                <AvatarImage src={active.avatar} alt={active.name} className="rounded-full" />
                <AvatarFallback className="rounded-lg bg-primary text-white font-bold">
                  {active.name?.split(" ").map((name) => name.charAt(0)).join("") || "US"}
                </AvatarFallback>
              </Avatar>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "top"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="size-8 rounded-sm">
                  <AvatarImage src={active.avatar} alt={active.name} />
                  <AvatarFallback className="rounded-sm bg-primary text-white font-bold">
                    {active.name?.split(" ").map((name) => name.charAt(0)).join("") || "US"}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{active.name}</span>
                  <span className="text-muted-foreground truncate text-xs">
                    {active.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => router.push("/profile")}>
                <RiSettingsLine className="size-5" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/dashboard/support/help-center")}>
                <RiQuestionLine className="size-5" />
                Help & Support
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} disabled={isLoggingOut} className="text-destructive focus:text-destructive cursor-pointer font-medium">
              <LogOutIcon className="size-5" />
              {isLoggingOut ? "Logging out..." : "Log out"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
