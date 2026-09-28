import { useState } from 'react';
import { STATIONS, TOURS } from '../data/champaData';

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
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [selectedStation, setSelectedStation] = useState(STATIONS[0]);

  return (
    <div className="bg-[#fff8f6] text-[#241915] min-h-screen flex flex-col font-['Be_Vietnam_Pro',sans-serif]">
      {/* 1. Header cố định */}
      <Header
        isPlayingAudio={isPlayingAudio}
        onToggleAudio={() => setIsPlayingAudio(!isPlayingAudio)}
      />

      {/* 2. Toàn bộ nội dung cuộn */}
      <main className="flex-1 pt-16 pb-24 px-4 max-w-xl mx-auto w-full flex flex-col gap-3">
        <HeroSection
          isPlayingAudio={isPlayingAudio}
          onToggleAudio={() => setIsPlayingAudio(!isPlayingAudio)}
        />
        <ManifestoSection />
        <ToursSection tours={TOURS} />
        <WaypointsSection
          stations={STATIONS}
          selectedStation={selectedStation}
          onSelectStation={setSelectedStation}
        />
        <ArtisansSection />
        <TestimonialsSection />
        <TripPlannerSection />
        <GuideBanner />

        {/* Footer ghi chú văn hóa */}
        <div className="text-center pt-2 pb-4">
          <span className="text-[10px] text-[#58423c] tracking-wider uppercase">
            Dana Panduranga • Giữ gìn di sản bằng lòng tự hào bản địa
          </span>
        </div>
      </main>

      {/* 3. Bottom Navigation */}
      <BottomNav />
    </div>
  );
}