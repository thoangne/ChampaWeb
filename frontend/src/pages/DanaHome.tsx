import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ManifestoSection from '../components/ManifestoSection';
import ToursSection from '../components/ToursSection';
import WaypointsSection from '../components/WaypointsSection';
import ArtisansSection from '../components/ArtisansSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TripPlannerSection from '../components/TripPlannerSection';
import GuideBanner from '../components/GuideBanner';
import BottomNav from '../components/BottomNav';

export default function DanaHome() {
  return (
    <div className="bg-surface text-on-surface font-body-md flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <HeroSection />
          <ManifestoSection />
          <ToursSection />
          <WaypointsSection />
          <ArtisansSection />
          <TestimonialsSection />
          <section className="w-full px-margin-mobile pt-space-md pb-space-xl flex flex-col gap-space-md">
            <TripPlannerSection />
            <GuideBanner />
          </section>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}