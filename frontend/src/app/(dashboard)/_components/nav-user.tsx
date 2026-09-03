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
import { EllipsisVerticalIcon, CircleUserRoundIcon, CreditCardIcon, BellIcon, LogOutIcon } from "lucide-react"
import { useAuth } from "~/hooks/use-auth"
import { useRouter } from "next/navigation"

export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {
  const { isMobile } = useSidebar()
  const { logout, user: authUser } = useAuth()
  const router = useRouter()
  const active = authUser || user

  const handleLogout = () => {
    logout()
    if (typeof window !== "undefined") {
      window.location.replace("/login")
    }
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={active.avatar} alt={active.name} />
                <AvatarFallback className="rounded-lg text-xs font-bold">{active.name?.slice(0, 2).toUpperCase() || "US"}</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{active.name}</span>
                <span className="truncate text-xs text-muted-foreground">
                  {active.email}
                </span>
              </div>
              <EllipsisVerticalIcon className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={active.avatar} alt={active.name} />
                  <AvatarFallback className="rounded-lg text-xs font-bold">{active.name?.slice(0, 2).toUpperCase() || "US"}</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{active.name}</span>
                  <span className="truncate text-xs text-muted-foreground">
                    {active.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => router.push("/profile")} className="cursor-pointer">
                <CircleUserRoundIcon className="mr-2 size-4" />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/dashboard/operations/finance/invoices")} className="cursor-pointer">
                <CreditCardIcon className="mr-2 size-4" />
                Billing
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="text-destructive focus:text-destructive cursor-pointer font-medium">
              <LogOutIcon className="mr-2 size-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
