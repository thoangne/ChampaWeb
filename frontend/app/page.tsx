'use client';

import { useState } from 'react';
import { STATIONS, TOURS } from '../src/data/champaData';
import { HeritageStation } from '../types/heritage';

import Header from '../src/components/Header';
import HeroSection from '../src/components/HeroSection';
import ManifestoSection from '../src/components/ManifestoSection';
import ToursSection from '../src/components/ToursSection';
import WaypointsSection from '../src/components/WaypointsSection';
import ArtisansSection from '../src/components/ArtisansSection';
import TestimonialsSection from '../src/components/TestimonialsSection';
import TripPlannerSection from '../src/components/TripPlannerSection';
import GuideBanner from '../src/components/GuideBanner';
import BottomNav from '../src/components/BottomNav';

export default function HomePage() {
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [selectedStation, setSelectedStation] = useState<HeritageStation>(STATIONS[0]);

  return (
    <div className="bg-[#fff8f6] text-[#241915] min-h-screen flex flex-col">
      <Header
        isPlayingAudio={isPlayingAudio}
        onToggleAudio={() => setIsPlayingAudio(!isPlayingAudio)}
      />

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

        <div className="text-center pt-2 pb-4">
          <span className="text-[10px] text-[#58423c] tracking-wider uppercase">
            Dana Panduranga • Giữ gìn di sản bằng lòng tự hào bản địa
          </span>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}