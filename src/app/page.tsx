import { HeroSection } from "@/components/HeroSection";
import { InvitationSection } from "@/components/InvitationSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { MapSection } from "@/components/MapSection";
import { RSVPSection } from "@/components/RSVPSection";
import { Footer } from "@/components/Footer";
import { weddingConfig } from "@/wedding.config";

export const metadata = {
  title: `${weddingConfig.couple.names} - Wedding Invitation`,
  description: `Join us on ${weddingConfig.wedding.date} for our wedding celebration!`,
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <InvitationSection />
      <ScheduleSection />
      <MapSection />
      <RSVPSection />
      <Footer />
    </main>
  );
}
