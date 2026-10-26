import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, SunMedium, Sparkles } from "lucide-react";

interface LifeSlide {
  id: number;
  image: string;
  title: string;
  storyline: string;
  badgeLabel: string;
  badgeClass: string;
}

const SLIDES: LifeSlide[] = [
  {
    id: 1,
    image: "/images/dana-life/IMG_9898.JPG",
    title: "Nắng sớm ngõ làng Dana",
    storyline: "Những tia nắng đầu ngày rọi qua ngõ nhỏ bình yên",
    badgeLabel: "Nắng mai",
    badgeClass: "bg-amber-100 text-amber-800 border-amber-300/60",
  },
  {
    id: 2,
    image: "/images/dana-life/IMG_9901.JPG",
    title: "Nụ cười xóm Chăm hiền hòa",
    storyline: "Nét hồn hậu, ấm áp và mến khách của người làng",
    badgeLabel: "Nhiệt thành",
    badgeClass: "bg-orange-100 text-orange-800 border-orange-300/60",
  },
  {
    id: 3,
    image: "/images/dana-life/IMG_9911.JPG",
    title: "Khoảng trời xanh bên nếp nhà",
    storyline: "Không gian thanh bình, hoa cỏ nở rực rỡ bên hiên nhà",
    badgeLabel: "Xanh tươi",
    badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300/60",
  },
  {
    id: 4,
    image: "/images/dana-life/IMG_3237.JPG",
    title: "Nhịp sống rộn ràng thường nhật",
    storyline: "Sắc màu văn hóa sống động hòa trong từng bước chân",
    badgeLabel: "Sức sống",
    badgeClass: "bg-rose-100 text-rose-800 border-rose-300/60",
  },
];

export default function DanaLifeCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const touchStartX = useRef<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  // Tự động chuyển ảnh sau 4.5 giây / lượt, tự tạm dừng khi hover
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextSlide, 4500);
    return () => clearInterval(timer);
  }, [isHovered, currentIndex]);

  // Xử lý vuốt chạm trên thiết bị di động
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsHovered(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsHovered(false);
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 40) prevSlide();
    if (deltaX < -40) nextSlide();
    touchStartX.current = null;
  };

  return (
    <section className="w-full bg-gradient-to-b from-amber-50/60 via-orange-50/40 to-surface py-space-xl border-y border-amber-200/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-margin-mobile xl:px-margin">
        {/* Tiêu đề phân đoạn */}
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

        {/* Khung thẻ Carousel dạng kính mờ (White Glassmorphism) */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-xl border border-amber-200/50 shadow-xl shadow-amber-900/5"
        >
          {/* Màn chiếu Slide */}
          <div className="relative h-[360px] sm:h-[460px] md:h-[540px] w-full overflow-hidden">
            {SLIDES.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-700 ease-out transform ${
                    isActive
                      ? "opacity-100 scale-100 pointer-events-auto z-10"
                      : "opacity-0 scale-105 pointer-events-none z-0"
                  }`}
                >
                  {/* Ảnh chính */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient phủ: Phía trên trong veo, chân ảnh bóng đổ ấm áp làm nổi bật chú thích */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-900/25 to-transparent pointer-events-none" />

                  {/* Huy hiệu tương tác góc trên bên trái: Nhịp tim & ánh sáng nhẹ */}
                  <div className="absolute top-5 left-5 z-20">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-amber-950 backdrop-blur-md font-label-sm text-xs font-semibold shadow-md border border-white/60 transition-transform duration-200 hover:scale-105">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
                      </span>
                      <span>Khoảnh khắc đời thường</span>
                    </span>
                  </div>

                  {/* Khối tiêu đề & storyline ở chân ảnh */}
                  <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-10 right-6 sm:right-10 flex flex-col items-start gap-2 text-white">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border shadow-md ${slide.badgeClass}`}
                    >
                      {slide.badgeLabel}
                    </span>

                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight drop-shadow mt-0.5">
                      {slide.title}
                    </h3>

                    <p className="font-body-md text-xs sm:text-sm text-stone-100 max-w-2xl leading-relaxed drop-shadow line-clamp-2">
                      {slide.storyline}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Hai nút điều hướng Trái / Phải dạng tròn, viền trắng mờ phát sáng nhẹ khi hover */}
          <button
            onClick={prevSlide}
            type="button"
            aria-label="Hình trước"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-amber-950 backdrop-blur-md shadow-md border border-white/60 hover:shadow-[0_0_15px_rgba(255,255,255,0.7)] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={nextSlide}
            type="button"
            aria-label="Hình tiếp theo"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-amber-950 backdrop-blur-md shadow-md border border-white/60 hover:shadow-[0_0_15px_rgba(255,255,255,0.7)] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots Indicator dạng viên thuốc (Pill Dots): Active kéo dài w-8 màu vàng hổ phách */}
          <div className="absolute top-5 right-5 z-20 flex items-center gap-1.5 bg-black/35 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
            {SLIDES.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                type="button"
                aria-label={`Chuyển đến ảnh ${dotIdx + 1}`}
                className={`transition-all duration-300 rounded-full h-2 cursor-pointer ${
                  dotIdx === currentIndex
                    ? "w-8 bg-amber-500 shadow-sm"
                    : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}