import { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ManifestoSection from "../components/ManifestoSection";
import ToursSection from "../components/ToursSection";
import WaypointsSection from "../components/WaypointsSection";
import ArtisansSection from "../components/ArtisansSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BottomNav from "../components/BottomNav";
import Footer from "../components/Footer";
import AudioPlayerBar from "../components/AudioPlayerBar";
import HeritageMap from "../components/HeritageMap";
import TripPlannerSection from "../components/TripPlannerSection";
import GuideBanner from "../components/GuideBanner";

export default function DanaHome() {
  // Quản lý trạm đang chọn để đồng bộ giữa WaypointsSection và HeritageMap
  const [activeStation, setActiveStation] = useState<number>(1);

  // Quản lý trạng thái phát âm thanh nhạc cụ Chăm (Saranai - Baranưng)
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

  const toggleAudio = () => {
    setIsAudioPlaying((prev) => !prev);
  };

  return (
    <div className="bg-surface text-on-surface font-body-md flex flex-col min-h-screen selection:bg-primary-container selection:text-on-primary-container">
      {/* 1. Header (Tự động thích ứng Header PC bề thế và Header Mobile gọn) */}
      <Header
        onToggleAudio={toggleAudio}
        isAudioPlaying={isAudioPlaying}
      />

      {/* 2. Main Content Stream */}
      <main className="w-full bg-surface min-h-[calc(100vh-80px)] flex flex-col">
        {/* Section 1: Hero Section & Thanh lập kế hoạch ngang */}
        <HeroSection
          onToggleAudio={toggleAudio}
          isAudioPlaying={isAudioPlaying}
        />

        {/* Section 2: Triết lý Di sản & 4 Thẻ chỉ số tác động xã hội */}
        <ManifestoSection />

        {/* Section 3: Hành trình Độc bản (Bộ lọc Tabs & Lưới 3 Tour) */}
        <ToursSection />

        {/* Section 4: Bản đồ Tuyến Khảo Cổ & Văn Hóa (Split-screen Interactive) */}
        <WaypointsSection
          activeStation={activeStation}
          onSelectStation={setActiveStation}
        />

        {/* Section 5: Góc Nghệ Nhân Giữ Lửa & Banner Du lịch Tái tạo */}
        <ArtisansSection />

        {/* Section 6: Lắng nghe Lữ khách & Banner Tải Cẩm nang Ứng xử PDF */}
        <TestimonialsSection />
      </main>

      {/* 3. Footer PC 4 Cột hoàn chỉnh */}
      <Footer />

      {/* 4. Widget Âm thanh Saranai Nổi */}
      <AudioPlayerBar
        isOpen={isAudioPlaying}
        onClose={() => setIsAudioPlaying(false)}
      />

      {/* 5. Mobile Bottom Navigation (Chỉ hiện trên Mobile, ẩn trên PC) */}
      <BottomNav />
    </div>
  );
}
