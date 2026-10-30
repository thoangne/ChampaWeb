import { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ManifestoSection from "../components/ManifestoSection";
import DanaLifeCarousel from "../components/DanaLifeCarousel"; // Tích hợp component mới
import ToursSection from "../components/ToursSection";
import WaypointsSection from "../components/WaypointsSection";
import ArtisansSection from "../components/ArtisansSection";
import ChampaCommunityGallery from "../components/ChampaCommunityGallery";
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
    <div className="bg-surface text-on-surface font-body-md flex flex-col min-h-screen">
      {/* 1. Header (Navbar cố định trên cùng) */}
      <Header onToggleAudio={toggleAudio} isAudioPlaying={isAudioPlaying} />

      {/* 2. Main Content Stream */}
      <main className="w-full pt-16 xl:pt-20 bg-surface flex flex-col">
        {/* BANNER SLIDER FULL-WIDTH NẰM NGAY ĐẦU TRANG */}
        <DanaLifeCarousel />

        {/* Section 1: Hero / Tìm kiếm chuyến đi */}
        <HeroSection onToggleAudio={toggleAudio} isAudioPlaying={isAudioPlaying} />

        {/* Section 2: Triết lý Di sản */}
        <ManifestoSection />

        {/* Section 3: Hành trình Độc bản */}
        <ToursSection />

        {/* Section 4: Bản đồ Tuyến Khảo Cổ & Văn Hóa */}
        <WaypointsSection
          activeStation={activeStation}
          onSelectStation={setActiveStation}
        />

        {/* Section 5: Nghệ nhân */}
        <ArtisansSection />

        {/* Section 6: Các hình ảnh của Champa Community (3 hàng chạy xen kẽ từ phải sang trái) */}
        <ChampaCommunityGallery />

        {/* Section 7: Cảm nhận lữ khách */}
        <TestimonialsSection />
      </main>

      <Footer />
      <AudioPlayerBar isOpen={isAudioPlaying} onClose={() => setIsAudioPlaying(false)} />
      <BottomNav />
    </div>
  );
}