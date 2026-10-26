import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight,MapPin, SunMedium } from "lucide-react";

interface LifeSlide {
  id: number;
  title: string;
  subtitle: string;
  location: string;
  badge: string;
  badgeColor: string;
  image: string;
  description: string;
}

const SLIDES: LifeSlide[] = [
  {
    id: 1,
    title: "Nắng Sớm Trút Đầy Sân Gốm",
    subtitle: "Bình minh làng Hamu Trok",
    location: "Làng Bàu Trúc, Ninh Phước",
    badge: "Nhịp Thở Nghề Cổ",
    badgeColor: "bg-amber-500 text-white shadow-amber-500/20",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
    description: "Những thớt gốm mộc màu đất đỏ hong khô dưới ráng vàng rực rỡ đầu ngày, đẫm hương rơm khô ngọt lành.",
  },
  {
    id: 2,
    title: "Sắc Màu Thoi Dệt Ven Ngõ Cúc Chi",
    subtitle: "Khung cửi bên hiên nhà gỗ",
    location: "Làng Mỹ Nghiệp, Phước Dân",
    badge: "Hoa Văn Dân Gian",
    badgeColor: "bg-orange-500 text-white shadow-orange-500/20",
    image: "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?auto=format&fit=crop&w=1200&q=80",
    description: "Tiếng lách cách thoi đưa nhịp nhàng hoà cùng nụ cười đôn hậu của chị em phụ nữ Chăm bên rặng hoa vàng.",
  },
  {
    id: 3,
    title: "Đàn Cừu Về Chuồng Trong Chiều Tà Đồng Cỏ",
    subtitle: "Bình yên vùng bán sa mạc",
    location: "Đồng cừu An Hải, Ninh Phước",
    badge: "Thiên Nhiên Bản Địa",
    badgeColor: "bg-emerald-600 text-white shadow-emerald-600/20",
    image: "https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&w=1200&q=80",
    description: "Ánh hoàng hôn nhuộm hồng triền cát và rặng xương rồng xanh biếc, tiếng chuông đồng vọng lại thanh thản vô ngần.",
  },
  {
    id: 4,
    title: "Nụ Cười Trẻ Thơ Bên Đồi Trầu Tháp Cổ",
    subtitle: "Rộn rã mùa lễ hội Katê",
    location: "Tháp Po Klong Garai, Đô Vinh",
    badge: "Mạch Nguồn Trao Truyền",
    badgeColor: "bg-amber-600 text-white shadow-amber-600/20",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
    description: "Tà áo dài Chăm thướt tha tung bay trong gió lộng, những ánh mắt trong veo thắp sáng vẻ tôn nghiêm tháp gạch ngàn năm.",
  },
];

export default function LifeCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  // Tự động chuyển slide sau mỗi 5s nếu không rê chuột vào
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Hỗ trợ vuốt trên thiết bị di động
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 45) prevSlide();
    if (deltaX < -45) nextSlide();
    touchStartX.current = null;
  };

  return (
    <section className="w-full bg-gradient-to-b from-amber-50/60 via-orange-50/40 to-surface py-space-xl border-y border-amber-200/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-margin-mobile xl:px-margin">
        {/* Section Header: Tươi vui & Chào đón */}
        <div className="text-center max-w-2xl mx-auto mb-space-lg flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/90 border border-amber-300/60 text-amber-900 font-label-sm text-[11px] font-bold uppercase tracking-widest shadow-sm mb-3">
            <SunMedium className="h-3.5 w-3.5 text-amber-600 animate-spin-slow" />
            <span>GÓC BÌNH YÊN BÊN DÒNG THỜI GIAN</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-on-surface font-semibold tracking-tight leading-snug">
            Nhịp Sống Đời Thường Làng Dana
          </h2>

          <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
            Những khoảnh khắc chân thực, chan hòa ánh nắng và tình người nơi xóm Chăm hiền hòa.
          </p>
        </div>

        {/* Carousel Canvas Container: White Glassmorphism Card */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-xl border border-amber-200/50 shadow-xl shadow-amber-900/5"
        >
          {/* Main Slide Screen */}
          <div className="relative h-[360px] sm:h-[460px] md:h-[520px] w-full overflow-hidden">
            {SLIDES.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    isActive
                      ? "opacity-100 scale-100 pointer-events-auto z-10"
                      : "opacity-0 scale-105 pointer-events-none z-0"
                  }`}
                >
                  {/* Photo with natural sunlit clarity */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Gentle gradient overlay: Crystal clear top, soft warm shadow bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/20 to-transparent pointer-events-none" />

                  {/* Caption & Story lockup */}
                  <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-10 right-6 sm:right-10 flex flex-col items-start gap-2 text-white">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md ${slide.badgeColor}`}
                      >
                        {slide.badge}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium border border-white/30">
                        <MapPin className="h-3 w-3 text-amber-300" />
                        <span>{slide.location}</span>
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight drop-shadow-sm mt-1">
                      {slide.title}
                    </h3>

                    <p className="font-body-md text-xs sm:text-sm text-stone-100 max-w-2xl leading-relaxed drop-shadow line-clamp-2">
                      {slide.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls: Nền trắng ngọc trai bóng mờ */}
          <button
            onClick={prevSlide}
            type="button"
            aria-label="Hình trước"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-amber-950 backdrop-blur-md shadow-md border border-white/50 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={nextSlide}
            type="button"
            aria-label="Hình kế tiếp"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-amber-950 backdrop-blur-md shadow-md border border-white/50 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Slide Indicators / Dots */}
          <div className="absolute top-5 right-5 z-20 flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
            {SLIDES.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                type="button"
                aria-label={`Chuyển tới ảnh ${dotIdx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  dotIdx === currentIndex
                    ? "w-6 h-2 bg-amber-400"
                    : "w-2 h-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}