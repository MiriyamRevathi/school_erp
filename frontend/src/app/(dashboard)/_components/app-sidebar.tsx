"use client"

import * as React from "react"
import Link from "next/link"

import { NavMain, type NavCategory } from "~/app/(dashboard)/_components/nav-main"
import { NavSecondary } from "~/app/(dashboard)/_components/nav-secondary"
import {
  sidebarNavCategories,
  sidebarSecondaryNav,
} from "~/app/(dashboard)/_components/sidebar-nav"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar"
import { Badge } from "~/components/ui/badge"
import { FaBookOpenReader } from "react-icons/fa6"
import {
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  ClipboardCheck,
  Calendar,
  Award,
  CalendarClock,
  BookMarked,
  FileText,
  CreditCard,
  Library,
  Bus,
  Megaphone,
  CircleHelp,
  Ticket,
  UsersRound,
  FileBadge,
  PenLine,
  ChartNoAxesColumn,
  FolderOpen,
  Users,
  MessageSquare,
  Sparkles,
  UserCircle2,
} from "lucide-react"
import { useAuth } from "~/hooks/use-auth"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useAuth();
  const role = user?.role || "ADMIN";

  // Build role-specific navigation menu tree
  const navigationCategories: NavCategory[] = React.useMemo(() => {
    if (role === "STUDENT") {
      return [
        {
          label: "Student Portal",
          accentDot: "bg-emerald-500",
          menus: [
            {
              title: "Overview",
              url: "/dashboard/overview",
              icon: LayoutDashboard,
              exact: true,
            },
            {
              title: "My Profile",
              url: "/profile",
              icon: UserCircle2,
            },
          ],
        },
        {
          label: "Academics",
          accentDot: "bg-blue-500",
          menus: [
            {
              title: "My Classes",
              url: "/dashboard/academics/classes",
              icon: BookOpen,
            },
            {
              title: "My Attendance",
              url: "/dashboard/academics/attendance/my-attendance",
              icon: ClipboardCheck,
            },
            {
              title: "My Timetable",
              url: "/dashboard/academics/timetable",
              icon: CalendarClock,
            },
            {
              title: "My Exams",
              url: "/dashboard/academics/exams/schedule",
              icon: Calendar,
            },
            {
              title: "My Results & Report Card",
              url: "/dashboard/academics/exams/report-cards",
              icon: FileBadge,
            },
            {
              title: "Study Materials",
              url: "/dashboard/academics/study-materials",
              icon: FolderOpen,
            },
            {
              title: "Homework & Assignments",
              url: "/dashboard/academics/assignments/submissions",
              icon: BookMarked,
            },
          ],
        },
        {
          label: "Finance",
          accentDot: "bg-orange-500",
          menus: [
            {
              title: "My Invoices & Dues",
              url: "/dashboard/operations/finance/invoices",
              icon: FileText,
            },
            {
              title: "Payment History",
              url: "/dashboard/operations/finance/payments",
              icon: CreditCard,
            },
          ],
        },

        {
          label: "Communication",
          accentDot: "bg-yellow-500",
          menus: [
            {
              title: "Announcements",
              url: "/dashboard/communication/outreach/announcements",
              icon: Megaphone,
            },
          ],
        },
        {
          label: "Support",
          accentDot: "bg-sky-500",
          menus: [
            {
              title: "Help Center",
              url: "/dashboard/support/help-center",
              icon: CircleHelp,
            },
            {
              title: "My Support Tickets",
              url: "/dashboard/support/tickets",
              icon: Ticket,
            },
          ],
        },
      ];
    }

    if (role === "PARENT") {
      return [
        {
          label: "Guardian Portal",
          accentDot: "bg-amber-500",
          menus: [
            {
              title: "Overview",
              url: "/dashboard/overview",
              icon: LayoutDashboard,
              exact: true,
            },
            {
              title: "My Profile",
              url: "/profile",
              icon: UserCircle2,
            },
          ],
        },
        {
          label: "My Children",
          accentDot: "bg-blue-500",
          menus: [
            {
              title: "Child Profile (Liam)",
              url: "/dashboard/people/students/profiles",
              icon: GraduationCap,
            },
            {
              title: "Child Attendance",
              url: "/dashboard/academics/attendance/my-attendance",
              icon: ClipboardCheck,
            },
            {
              title: "Child Report Cards",
              url: "/dashboard/academics/exams/report-cards",
              icon: FileBadge,
            },
            {
              title: "Child Timetable",
              url: "/dashboard/academics/timetable",
              icon: CalendarClock,
            },
          ],
        },
        {
          label: "Finance",
          accentDot: "bg-orange-500",
          menus: [
            {
              title: "Fee Invoices & Statements",
              url: "/dashboard/operations/finance/invoices",
              icon: FileText,
            },
            {
              title: "Payment Receipts",
              url: "/dashboard/operations/finance/payments",
              icon: CreditCard,
            },
          ],
        },
        {
          label: "Communication",
          accentDot: "bg-yellow-500",
          menus: [
            {
              title: "Announcements & Notices",
              url: "/dashboard/communication/outreach/announcements",
              icon: Megaphone,
            },
            {
              title: "Parent-Teacher Meetings",
              url: "/dashboard/communication/parent-engagement/meetings",
              icon: UsersRound,
            },
          ],
        },
        {
          label: "Support",
          accentDot: "bg-sky-500",
          menus: [
            {
              title: "Help Center",
              url: "/dashboard/support/help-center",
              icon: CircleHelp,
            },
            {
              title: "Support Tickets",
              url: "/dashboard/support/tickets",
              icon: Ticket,
            },
          ],
        },
      ];
    }

    if (role === "TEACHER") {
      return [
        {
          label: "Faculty Portal",
          accentDot: "bg-blue-500",
          menus: [
            {
              title: "Overview",
              url: "/dashboard/overview",
              icon: LayoutDashboard,
              exact: true,
            },
            {
              title: "My Profile",
              url: "/profile",
              icon: UserCircle2,
            },
          ],
        },
        {
          label: "Academics",
          accentDot: "bg-emerald-500",
          menus: [
            {
              title: "Classes & Sections",
              url: "/dashboard/academics/classes",
              icon: BookOpen,
              items: [
                { title: "Classes / Sections", url: "/dashboard/academics/classes" },
                { title: "Subjects", url: "/dashboard/academics/subjects" },
                { title: "Curriculum", url: "/dashboard/academics/curriculum" },
                { title: "Lesson Plans", url: "/dashboard/academics/lesson-plans" },
                { title: "Timetable", url: "/dashboard/academics/timetable" },
                { title: "Study Materials", url: "/dashboard/academics/study-materials" },
              ],
            },
            {
              title: "Attendance Register",
              url: "/dashboard/academics/attendance/mark",
              icon: ClipboardCheck,
              items: [
                { title: "Mark Attendance", url: "/dashboard/academics/attendance/mark" },
                { title: "Attendance Reports", url: "/dashboard/academics/attendance/reports" },
                { title: "Leave Requests", url: "/dashboard/academics/attendance/leave-requests" },
              ],
            },
            {
              title: "Examinations & Marks",
              url: "/dashboard/academics/exams/schedule",
              icon: Award,
              items: [
                { title: "Exam Schedule", url: "/dashboard/academics/exams/schedule" },
                { title: "Marks Entry", url: "/dashboard/academics/exams/marks-entry" },
                { title: "Grades & GPA", url: "/dashboard/academics/exams/grades-gpa" },
                { title: "Report Cards", url: "/dashboard/academics/exams/report-cards" },
                { title: "Transcripts", url: "/dashboard/academics/exams/transcripts" },
              ],
            },
            {
              title: "Assignments",
              url: "/dashboard/academics/assignments/create",
              icon: BookMarked,
              items: [
                { title: "Create Assignment", url: "/dashboard/academics/assignments/create" },
                { title: "Submissions", url: "/dashboard/academics/assignments/submissions" },
                { title: "Gradebook", url: "/dashboard/academics/assignments/gradebook" },
              ],
            },
          ],
        },
        {
          label: "People",
          accentDot: "bg-blue-500",
          menus: [
            {
              title: "My Students",
              url: "/dashboard/people/students",
              icon: Users,
              items: [
                { title: "Student Directory", url: "/dashboard/people/students" },
                { title: "Student Profiles", url: "/dashboard/people/students/profiles" },
                { title: "Attendance Logs", url: "/dashboard/people/students/attendance" },
                { title: "Behavior & Discipline", url: "/dashboard/people/students/discipline" },
              ],
            },
          ],
        },
        {
          label: "Communication",
          accentDot: "bg-yellow-500",
          menus: [
            {
              title: "Announcements",
              url: "/dashboard/communication/outreach/announcements",
              icon: Megaphone,
            },
            {
              title: "Messages",
              url: "/dashboard/communication/outreach/messages",
              icon: MessageSquare,
            },
            {
              title: "Parent Meetings",
              url: "/dashboard/communication/parent-engagement/meetings",
              icon: UsersRound,
            },
          ],
        },
        {
          label: "Support",
          accentDot: "bg-sky-500",
          menus: [
            {
              title: "Help Center",
              url: "/dashboard/support/help-center",
              icon: CircleHelp,
            },
            {
              title: "Support Tickets",
              url: "/dashboard/support/tickets",
              icon: Ticket,
            },
          ],
        },
      ];
    }

    // ADMIN Role receives full multi-category tree
    return sidebarNavCategories;
  }, [role]);

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <Link href="/dashboard" className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <FaBookOpenReader className="size-6 text-primary" />
                  <span className="text-base font-semibold">School ERP</span>
                </div>
                <Badge
                  variant={
                    role === "ADMIN"
                      ? "destructive"
                      : role === "TEACHER"
                      ? "default"
                      : "secondary"
                  }
                  className="text-[10px] py-0 ml-auto"
                >
                  {role}
                </Badge>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain categories={navigationCategories} />
        <NavSecondary items={sidebarSecondaryNav} className="mt-auto" />
      </SidebarContent>
    </Sidebar>
  )
}
