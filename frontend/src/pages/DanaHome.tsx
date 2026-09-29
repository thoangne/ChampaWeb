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

export default function DanaHome() {
  // Quản lý trạm đang chọn để đồng bộ giữa WaypointsSection và HeritageMap
  const [activeStation, setActiveStation] = useState<number>(1);

  // Quản lý trạng thái phát âm thanh nhạc cụ Chăm (Saranai - Baranưng)
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

  const toggleAudio = () => {
    setIsAudioPlaying((prev) => !prev);
  };

  return (
<<<<<<< Updated upstream
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
=======
    <div className="bg-surface text-on-surface font-body-md flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen">
        <div className="w-full max-w-7xl mx-auto flex flex-col">
          <HeroSection />
          <ManifestoSection />
          <ToursSection />
          
          {/* Phần Bản đồ tuyến di sản & Bản đồ Leaflet.js tương tác */}
          <section className="w-full bg-surface-container-low py-space-xl">
            <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
              <div className="max-w-3xl mb-space-xl">
                <span className="font-label-md text-label-md uppercase tracking-widest text-primary font-bold block mb-space-xs">
                  Bản đồ Điểm chạm Di sản
                </span>
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                  Khảo cứu Tuyến đường Di sản Panduranga
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                  Hệ thống 5 điểm mốc thiêng liêng được các nhà khảo cổ học và nhân sĩ Chăm tuyển chọn. Chọn điểm dừng để tra cứu cự ly di chuyển và quy tắc ứng xử tôn nghiêm.
                </p>
              </div>

              {/* Lưới 2 cột: Cột trái là danh sách trạm (WaypointsSection), Cột phải là bản đồ Leaflet */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
                <div className="lg:col-span-5 flex flex-col gap-space-sm">
                  <WaypointsSection 
                    activeStation={activeStation} 
                    onSelectStation={setActiveStation} 
                  />
                </div>

                <div className="lg:col-span-7 sticky top-24 mt-space-md lg:mt-0">
                  <HeritageMap 
                    activeStation={activeStation} 
                    onSelectStation={setActiveStation} 
                  />
                </div>
              </div>
            </div>
          </section>
          
          <ArtisansSection />
          <TestimonialsSection />
          <section className="w-full px-margin-mobile pt-space-md pb-space-xl flex flex-col gap-space-md">
            <TripPlannerSection />
            <GuideBanner />
          </section>
        </div>
>>>>>>> Stashed changes
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
