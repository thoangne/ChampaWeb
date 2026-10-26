import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BannerSlide {
  id: number;
  image: string;
  title: string;
  link?: string;
}

const BANNER_SLIDES: BannerSlide[] = [
  {
    id: 1,
    image: "/images/dana-life/IMG_9898.JPG",
    title: "Nắng sớm ngõ làng Dana",
  },
  {
    id: 2,
    image: "/images/dana-life/IMG_9901.JPG",
    title: "Nụ cười xóm Chăm hiền hòa",
  },
  {
    id: 3,
    image: "/images/dana-life/IMG_9911.JPG",
    title: "Khoảng trời xanh bên nếp nhà",
  },
  {
    id: 4,
    image: "/images/dana-life/IMG_3237.JPG",
    title: "Nhịp sống rộn ràng thường nhật",
  },
];

export default function DanaLifeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? BANNER_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === BANNER_SLIDES.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextSlide, 4500);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) prevSlide();
    if (diff < -50) nextSlide();
    touchStartX.current = null;
  };

  return (
    <div
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  onTouchStart={handleTouchStart}
  onTouchEnd={handleTouchEnd}
  className="relative w-full h-[460px] sm:h-[540px] md:h-[620px] lg:h-[680px] xl:h-[720px] overflow-hidden bg-stone-900 select-none shadow-2xl"
>
  {BANNER_SLIDES.map((slide, idx) => (
    <div
      key={slide.id}
      className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out ${
        idx === currentIndex
          ? "opacity-100 scale-100 z-10"
          : "opacity-0 scale-105 z-0 pointer-events-none"
      }`}
    >
      <img
        src={slide.image}
        alt={slide.title}
        fetchPriority={idx === 0 ? "high" : "low"}
        decoding="async"
        className="w-full h-full object-cover object-center brightness-[1.02] contrast-[1.10] saturate-[1.12]"
        style={{
          imageRendering: "-webkit-optimize-contrast",
          transform: "translateZ(0)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
      
      <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.25)] pointer-events-none" />
    </div>
  ))}

      {/* Nút điều hướng Trái (sát mép màn hình như mẫu) */}
      <button
        onClick={prevSlide}
        type="button"
        aria-label="Ảnh trước"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-black/30 hover:bg-black/60 text-white flex items-center justify-center transition-all duration-200 cursor-pointer rounded-sm"
      >
        <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
      </button>

      {/* Nút điều hướng Phải (sát mép màn hình như mẫu) */}
      <button
        onClick={nextSlide}
        type="button"
        aria-label="Ảnh tiếp theo"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-black/30 hover:bg-black/60 text-white flex items-center justify-center transition-all duration-200 cursor-pointer rounded-sm"
      >
        <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
      </button>

      {/* Thanh chấm tròn / gạch hiển thị vị trí ảnh ở góc dưới */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {BANNER_SLIDES.map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={() => setCurrentIndex(dotIdx)}
            type="button"
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              dotIdx === currentIndex
                ? "w-8 h-2.5 bg-amber-500"
                : "w-2.5 h-2.5 bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}