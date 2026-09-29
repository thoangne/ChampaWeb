import { useState } from 'react';
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
import HeritageMap from '../components/HeritageMap';

export default function DanaHome() {
  // Quản lý trạm đang chọn để đồng bộ giữa WaypointsSection và HeritageMap
  const [activeStation, setActiveStation] = useState<number>(1);

  return (
    <div className="bg-surface text-on-surface font-body-md flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen">
        <div className="w-full max-w-7xl mx-auto flex flex-col">
          <HeroSection />
          <ManifestoSection />
          <ToursSection />
          
          {/* Truyền state activeStation và hàm đổi trạm vào WaypointsSection và HeritageMap */}
          <WaypointsSection 
            activeStation={activeStation} 
            onSelectStation={setActiveStation} 
          />
          
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