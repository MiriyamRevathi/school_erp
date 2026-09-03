import { Navbar } from "./_components/navbar";
import { HeroSection } from "./_components/hero-section";
import { AboutSection } from "./_components/about-section";
import { AcademicsSection } from "./_components/academics-section";
import { WhyChooseSection } from "./_components/why-choose-section";
import { FacilitiesSection } from "./_components/facilities-section";
import { StudentLifeSection } from "./_components/student-life-section";
import { AchievementsSection } from "./_components/achievements-section";
import { Footer } from "./_components/footer";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <AcademicsSection />
        <WhyChooseSection />
        <FacilitiesSection />
        <StudentLifeSection />
        <AchievementsSection />
      </main>
      <Footer />
    </div>
  );
}
