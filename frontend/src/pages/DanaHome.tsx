import { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ManifestoSection from "../components/ManifestoSection";
import DanaLifeCarousel from "../components/DanaLifeCarousel"; // Tích hợp component mới
import ToursSection from "../components/ToursSection";
import WaypointsSection from "../components/WaypointsSection";
import ArtisansSection from "../components/ArtisansSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BottomNav from "../components/BottomNav";
import Footer from "../components/Footer";
import AudioPlayerBar from "../components/AudioPlayerBar";

export default function DanaHome() {
  const [activeStation, setActiveStation] = useState<number>(1);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

  const toggleAudio = () => {
    setIsAudioPlaying((prev) => !prev);
  };

  return (
    <div className="bg-surface text-on-surface font-body-md flex flex-col min-h-screen selection:bg-primary-container selection:text-on-primary-container">
      {/* 1. Header */}
      <Header
        onToggleAudio={toggleAudio}
        isAudioPlaying={isAudioPlaying}
      />

      {/* 2. Main Content Stream */}
      <main className="w-full bg-surface min-h-[calc(100vh-80px)] flex flex-col">
        {/* Section 1: Hero Section */}
        <HeroSection
          onToggleAudio={toggleAudio}
          isAudioPlaying={isAudioPlaying}
        />

        {/* Section 2: Triết lý Di sản & 4 Thẻ chỉ số tác động xã hội */}
        <ManifestoSection />

        {/* MỚI: Nhịp Sống Đời Thường Làng Dana (Sunlit Heritage Carousel) */}
        <DanaLifeCarousel />

        {/* Section 3: Hành trình Độc bản (Bộ lọc Tabs & Lưới 3 Tour) */}
        <ToursSection />

        {/* Section 4: Bản đồ Tuyến Khảo Cổ & Văn Hóa */}
        <WaypointsSection
          activeStation={activeStation}
          onSelectStation={setActiveStation}
        />

        {/* Section 5: Góc Nghệ Nhân Giữ Lửa */}
        <ArtisansSection />

        {/* Section 6: Lắng nghe Lữ khách & Banner Tải Cẩm nang */}
        <TestimonialsSection />
      </main>

      {/* 3. Footer */}
      <Footer />

      {/* 4. Audio Saranai Floating Bar */}
      <AudioPlayerBar
        isOpen={isAudioPlaying}
        onClose={() => setIsAudioPlaying(false)}
      />

      {/* 5. Mobile Bottom Nav */}
      <BottomNav />
    </div>
  );
}