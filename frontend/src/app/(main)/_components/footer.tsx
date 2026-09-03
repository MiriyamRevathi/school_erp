import Link from "next/link";
import { GraduationCap, MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-card text-foreground">
      <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 lg:px-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-left">
          {/* Col 1: School Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-xs">
                <GraduationCap className="size-5" />
              </div>
              <div>
                <p className="text-base font-bold tracking-tight text-foreground">
                  Greenfield International School
                </p>
                <p className="text-[11px] text-muted-foreground">Excellence in Education Since 2010</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Empowering students through values-driven education, innovative academics, and comprehensive extracurricular development.
            </p>
            <div className="pt-1">
              <Button size="sm" asChild variant="outline" className="rounded-xl">
                <Link href="/login">
                  Faculty &amp; Student ERP Login <ArrowRight className="ml-1.5 size-3.5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-foreground">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link href="#home" className="hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-foreground transition-colors">About Our School</Link></li>
              <li><Link href="#academics" className="hover:text-foreground transition-colors">Academic Levels &amp; Curriculum</Link></li>
              <li><Link href="#facilities" className="hover:text-foreground transition-colors">Campus Facilities</Link></li>
              <li><Link href="#student-life" className="hover:text-foreground transition-colors">Student Life &amp; Clubs</Link></li>
              <li><Link href="#achievements" className="hover:text-foreground transition-colors">School Achievements</Link></li>
            </ul>
          </div>

          {/* Col 3: Admissions & Office Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-foreground">Admissions &amp; Hours</h4>
            <div className="space-y-2 text-xs text-muted-foreground">
              <div className="flex items-start gap-2">
                <Clock className="size-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Administrative Office:</p>
                  <p>Mon – Fri: 08:00 AM – 04:00 PM</p>
                  <p>Saturday: 09:00 AM – 01:00 PM</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="font-semibold text-foreground">Session 2026-2027 Admissions:</p>
                <p>Registration open for Grades 1 through 11.</p>
              </div>
            </div>
          </div>

          {/* Col 4: Campus Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-foreground">Campus Contact</h4>
            <ul className="space-y-2.5 text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 text-primary shrink-0 mt-0.5" />
                <span>100 Greenfield Academic Parkway, Springfield, IL 62701</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-primary shrink-0" />
                <span className="font-mono">+1 (555) 234-5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-primary shrink-0" />
                <span>admissions@greenfield.edu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between border-t border-border pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Greenfield International School. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 flex items-center gap-1.5">
            <span>Powered by Greenfield School ERP</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
