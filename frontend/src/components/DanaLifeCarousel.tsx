import { useState, useEffect, useRef, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Maximize2,
  X,
  MapPin,
  Calendar,
  Sparkles,
  Camera,
  Layers,
} from "lucide-react";

export interface PhotoSlide {
  id: number;
  image: string;
  category: string;
  title: string;
  subtitle: string;
  location: string;
  date: string;
  description: string;
  author: string;
}

const PHOTO_SLIDES: PhotoSlide[] = [
  {
    id: 1,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBWzz5wVWN2Rre_bf3lzTZ89szZW61A19gyuIM1D6eHB2bgjSvLJ2IjqYRR2_FvWNOaiuYH_mZKTaaCYHyrAo6Y-MHZRm5QMjTQqVYlWO-UTZpP7j-38TvaXGvTC0E43MbjaK6OcYizspkYPA97vZ7ux2qQedU074FLdyFMB7zxmwJM_GGaJUJxVOmC--t3UtTdUYuMj2PhxbPFLX9SyKZLF-p5BPhi_fHZpOUSInajqnNWFka72rYwew",
    category: "Kiến Trúc Đền Tháp Kỳ Vĩ",
    title: "Tháp Cổ Po Klong Garai - Đỉnh Cao Nghệ Thuật Champa",
    subtitle: "Quần thể đền tháp gạch nung thế kỷ XIII - Di tích Quốc gia đặc biệt",
    location: "Đồi Trầu, Phường Đô Vinh, TP. Phan Rang - Tháp Chàm (Cách trung tâm 7km)",
    date: "Xây dựng TK XIII - XIV",
    description:
      "Biểu tượng kiêu hãnh của xứ Panduranga với 3 tòa tháp Kalan chính, Gopura cổng và Kosagrha lửa. Nơi lưu giữ tượng Yoni - Linga thần Po Klong Garai cùng bia ký Sanskrit cổ ca ngợi công đức dẫn nước ngọt tưới mát đồng bằng.",
    author: "Điểm đến Di sản Số 1",
  },
  {
    id: 2,
    image: "/images/dana-life/IMG_9911.JPG",
    category: "Di Sản Văn Hóa Nhân Loại UNESCO",
    title: "Làng Gốm Bàu Trúc - Kỹ Nghệ Đất Nung Không Bàn Xoay",
    subtitle: "Làng gốm cổ xưa nhất Đông Nam Á vẫn đỏ lửa nung lộ thiên",
    location: "Thị trấn Phước Dân, Huyện Ninh Phước (Cách Phan Rang 10km)",
    date: "Di sản UNESCO 2022",
    description:
      "Tận mắt chiêm ngưỡng phương thức 'tay làm chân quay, đi giật lùi' độc nhất vô nhị của phụ nữ Chăm. Gốm nung củi và rơm rạ ngoài trời tạo nên những vệt khói loang độc bản hòa quyện cùng nước thảo mộc trâm bầu.",
    author: "Làng nghề truyền thống",
  },
  {
    id: 3,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXDHM6yk37AcZTWKD2kHI9jPGZKP1I4JY5yxSnfX4BbftErgSz5JHk80zz2TUzC_obO4A9NMXDFx8yx6BPBGmoGhCEaCXQvDZl1oXbqVoWkpJ3biH8-ERIAfE760E73pitqQdKh1Cszx9wZVscKNWrs_AhSvA-Knlo8t0FpNAlnZWyKlwoQFLeUtM0rrVeqUM5MhUYT5g8PyjacjFmVVYeo1XjeHE7PUh2mJzLoBrzGxvfV-vafEjkXA",
    category: "Nghệ Thuật Sợi Dệt Cung Đình",
    title: "Làng Dệt Thổ Cẩm Mỹ Nghiệp - Sợi Chỉ Vàng Katê",
    subtitle: "Phục dựng hơn 20 mẫu hoa văn hoàng gia Champa thế kỷ XVII",
    location: "Thôn Mỹ Nghiệp, Huyện Ninh Phước (Cách làng gốm Bàu Trúc 2km)",
    date: "Bảo tồn làng nghề cổ",
    description:
      "Bên những khung cửi gỗ rộn rã nhịp thoi đưa, từng sợi chỉ nhuộm từ vỏ trâm bầu, củ nâu rừng được đan cài thành đồ án chim thần Garuda, thần Shiva và hoa sen phục vụ cho các đại lễ Katê thiêng liêng.",
    author: "Làng dệt thủ công",
  },
  {
    id: 4,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAzljZH7__gmKglHYhA2NZtHh2wp1_j6eufhB24fW5dLEg6Q3iVPhcklfXTyfQfftG0s3kkeFa45XwJi0fI0t965d-lV9hy3Bp86bWdiRgQjJMFwqoPZzvC1Puek_bg_vu8Hy90bDTysgtbAXLReE5kLRMopjTkjh5Fgl-uWE2PDhyzuKEA3B_xFsrORw9XqbKdNdrSvBBD0BLP1ezotbfBBmrZCZNeWb86lbUY2kjNCncvJkPSIpv7pA",
    category: "Thánh Địa Huyền Bí",
    title: "Đền Tháp Po Rome - Vị Vua Cuối Cùng Trên Đồi Đá",
    subtitle: "Ngôi đền tháp xây dựng trên đỉnh đồi đá biệt lập giữa thảo nguyên",
    location: "Làng Hậu Sanh, Xã Phước Hữu, Huyện Ninh Phước",
    date: "Thế kỷ XVII",
    description:
      "Nằm uy nghi giữa miền đất bán sa mạc, tháp Po Rome là nơi thờ phụng vị vua anh minh cuối cùng được phong thánh trong tâm thức Chăm. Nơi đây lưu giữ bức tượng vua tạc theo phong cách bán diện và bệ thờ linh thiêng.",
    author: "Di tích lịch sử Champa",
  },
  {
    id: 5,
    image: "/images/dana-life/IMG_3237.JPG",
    category: "Cảnh Sắc Bản Địa Thơ Mộng",
    title: "Đồng Cừu An Hải & Đồi Cát Nam Cương Trầm Mặc",
    subtitle: "Bình yên thảo nguyên bán sa mạc và đồi cát chuyển mình theo gió",
    location: "Xã An Hải, Huyện Ninh Phước, Tỉnh Ninh Thuận",
    date: "Điểm đến sinh thái",
    description:
      "Mỗi chiều buông xuống, hàng trăm chú cừu thong dong gặm cỏ dưới chân đồi cát lộng gió. Không gian khoáng đạt của miền cát sa mạc Panduranga đưa lữ khách trở về với sự tĩnh tại nguyên sơ của thiên nhiên.",
    author: "Thiên nhiên Panduranga",
  },
];

export default function DanaLifeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const touchStartX = useRef<number | null>(null);

  const SLIDE_DURATION = 4000; // 4.0 giây cho mỗi ảnh (theo chuẩn trải nghiệm du lịch)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === PHOTO_SLIDES.length - 1 ? 0 : prev + 1));
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? PHOTO_SLIDES.length - 1 : prev - 1));
    setProgress(0);
  }, []);

  // Bộ đếm tự động phát hình ảnh (Slideshow player)
  useEffect(() => {
    if (!isPlaying || isLightboxOpen) return;

    const intervalTime = 50;
    const step = (intervalTime / SLIDE_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          nextSlide();
          return 0;
        }
        return old + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, isLightboxOpen, nextSlide]);

  // Điều khiển bằng phím mũi tên và phím cách (Space)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLightboxOpen && e.key === "Escape") {
        setIsLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === " ") {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide, isLightboxOpen]);

  // Hỗ trợ vuốt cảm ứng trên màn hình điện thoại
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

  const currentSlide = PHOTO_SLIDES[currentIndex];

  return (
    <section className="relative w-full py-6 sm:py-8 lg:py-10 bg-surface select-none">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* ========================================================
            1. THANH TIÊU ĐỀ TRÌNH CHIẾU HÌNH ẢNH
        ======================================================== */}
        <div className="flex items-center justify-between mb-3 sm:mb-5">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-primary relative">
              {isPlaying && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              )}
            </span>
            <span className="font-label-sm text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Điểm Đến Du Lịch & Danh Thắng Champa Panduranga
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Ẩn / hiện thông tin ảnh */}
            <button
              type="button"
              onClick={() => setShowInfo((prev) => !prev)}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-on-surface-variant hover:text-primary bg-surface-container hover:bg-surface-container-high transition-all cursor-pointer"
              title="Bật/tắt thẻ thông tin mô phỏng"
            >
              <Layers className="h-3.5 w-3.5" />
              <span>{showInfo ? "Ẩn mô tả" : "Hiện mô tả"}</span>
            </button>

            {/* Chỉ số slide 01 / 04 */}
            <div className="flex items-center gap-1 font-mono text-xs font-bold text-on-surface-variant px-2.5 py-1 rounded-full bg-surface-container-low border border-outline-variant/30">
              <span className="text-primary font-bold">0{currentIndex + 1}</span>
              <span className="opacity-40">/</span>
              <span className="opacity-70">0{PHOTO_SLIDES.length}</span>
            </div>
          </div>
        </div>

        {/* ========================================================
            2. KHUNG TRÌNH CHIẾU HÌNH ẢNH CHÍNH (PHOTO PLAYER STAGE)
        ======================================================== */}
        <div
          className="relative w-full h-[440px] sm:h-[540px] md:h-[600px] lg:h-[660px] rounded-3xl overflow-hidden bg-stone-950 shadow-[0_20px_50px_rgba(36,25,21,0.18)] border border-surface-container-high/60 group"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Lớp nền mờ lấy từ chính bức ảnh để lấp đầy không gian hài hòa */}
          <img
            src={currentSlide.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-35 scale-110 pointer-events-none transition-all duration-700 ease-out"
          />

          {/* Lớp mờ tối nghệ thuật giúp chữ và ảnh nổi bật */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/35 pointer-events-none z-10" />

          {/* BỨC ẢNH CHÍNH: HIỂN THỊ RÕ RÀNG, ĐẦY ĐỦ, KHÔNG BỊ KÉO / MÉO */}
          <div className="relative z-10 w-full h-full flex items-center justify-center p-2 sm:p-6 lg:p-8">
            <img
              key={currentSlide.id}
              src={currentSlide.image}
              alt={currentSlide.title}
              className="max-h-full max-w-full w-auto h-auto object-contain rounded-2xl shadow-2xl transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              loading="eager"
            />
          </div>

          {/* ========================================================
              3. CỤM ĐIỀU KHIỂN PHÁT ẢNH NỔI (PLAYER CONTROLS - GÓC TRÊN)
          ======================================================== */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            {/* Nút Play / Pause trình chiếu */}
            <button
              type="button"
              onClick={() => setIsPlaying((prev) => !prev)}
              aria-label={isPlaying ? "Tạm dừng phát ảnh" : "Tiếp tục phát ảnh"}
              className="h-9 px-3 rounded-full bg-black/55 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center gap-1.5 text-xs font-semibold shadow-lg transition-all cursor-pointer"
              title={isPlaying ? "Tạm dừng trình chiếu" : "Tiếp tục trình chiếu"}
            >
              {isPlaying ? (
                <>
                  <Pause className="h-3.5 w-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Tạm dừng</span>
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="hidden sm:inline">Phát ảnh</span>
                </>
              )}
            </button>

            {/* Nút Phóng to toàn màn hình (Fullscreen Lightbox) */}
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              aria-label="Phóng to ảnh chất lượng cao"
              className="w-9 h-9 rounded-full bg-black/55 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-all cursor-pointer"
              title="Xem ảnh cỡ lớn"
            >
              <Maximize2 className="h-4 w-4" />
            </button>
          </div>

          {/* Nút Điều hướng Trái & Phải nổi hai bên ảnh */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Ảnh trước"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/45 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer transform hover:scale-110 shadow-xl"
          >
            <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Ảnh kế tiếp"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/45 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer transform hover:scale-110 shadow-xl"
          >
            <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>

          {/* ========================================================
              4. THẺ NỔI HIỂN THỊ THÔNG TIN MÔ PHỎNG HÌNH ẢNH (GÓC DƯỚI)
          ======================================================== */}
          {showInfo && (
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xl z-20 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="bg-black/65 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-5 text-white shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex flex-col gap-2.5">
                {/* Huy hiệu chuyên mục & Địa danh */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/90 text-white text-[11px] font-bold tracking-wide shadow-xs">
                    <Sparkles className="h-3 w-3" />
                    {currentSlide.category}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/15 text-white/90 text-[11px] font-medium backdrop-blur-sm">
                    <MapPin className="h-3 w-3 text-amber-400" />
                    {currentSlide.location}
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-white/70">
                    <Camera className="h-3 w-3" />
                    {currentSlide.author}
                  </span>
                </div>

                {/* Tiêu đề ảnh */}
                <h3 className="font-serif text-lg sm:text-2xl font-bold leading-tight text-white tracking-tight">
                  {currentSlide.title}
                </h3>

                {/* Đoạn trích mô phỏng hình ảnh */}
                <p className="font-body-md text-xs sm:text-sm text-white/85 leading-relaxed line-clamp-2 sm:line-clamp-3">
                  {currentSlide.description}
                </p>

                {/* Thông tin thời gian và ghi chú tác phẩm */}
                <div className="pt-2 flex items-center justify-between border-t border-white/15 mt-1 text-[11px] text-white/75">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3 w-3 text-amber-400" />
                    <span>Thời điểm: {currentSlide.date}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Camera className="h-3 w-3 text-amber-400" />
                    <span>{currentSlide.author}</span>
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* THANH TIẾN TRÌNH CHẠY DƯỚI ĐÁY KHUNG PHÁT ẢNH */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
            <div
              className="h-full bg-gradient-to-r from-amber-400 via-primary to-amber-500 transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* ========================================================
            5. DẢI FILMSTRIP THUMBNAIL PHÍA DƯỚI (CHỌN ẢNH NHANH)
        ======================================================== */}
        <div className="mt-4 flex items-center justify-between gap-3 overflow-x-auto pb-1">
          <div className="flex items-center gap-2 sm:gap-3">
            {PHOTO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => {
                  setCurrentIndex(idx);
                  setProgress(0);
                }}
                className={`relative flex items-center gap-2 p-1 sm:p-1.5 rounded-2xl border transition-all cursor-pointer ${
                  idx === currentIndex
                    ? "bg-surface-container-lowest border-primary shadow-md ring-2 ring-primary/30"
                    : "bg-surface-container-low/60 border-transparent hover:bg-surface-container hover:border-outline-variant/40 opacity-75 hover:opacity-100"
                }`}
                title={slide.title}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-12 h-10 sm:w-16 sm:h-12 rounded-xl object-cover"
                />
                <div className="hidden md:flex flex-col text-left pr-2 max-w-[140px] xl:max-w-[180px]">
                  <span className="text-xs font-bold text-on-surface line-clamp-1">
                    {slide.title}
                  </span>
                  <span className="text-[10px] text-on-surface-variant line-clamp-1">
                    {slide.location}
                  </span>
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* ========================================================
          6. MODAL PHÓNG TO ẢNH FULL MÀN HÌNH (LIGHTBOX)
      ======================================================== */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200 select-none"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Header Lightbox */}
          <div
            className="flex items-center justify-between text-white w-full max-w-7xl mx-auto z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white/10 text-white font-label-sm text-xs font-bold uppercase tracking-wider">
                {currentSlide.category}
              </span>
              <span className="text-white/80 text-xs sm:text-sm font-serif">
                {currentSlide.title} • {currentSlide.location}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Đóng xem ảnh lớn"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Ảnh phóng to chính giữa màn hình */}
          <div
            className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
            />
          </div>

          {/* Footer Lightbox */}
          <div
            className="flex items-center justify-between text-white/80 w-full max-w-7xl mx-auto z-10 text-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <span>{currentSlide.description}</span>
            <span className="font-mono text-amber-400 font-bold whitespace-nowrap pl-4">
              0{currentIndex + 1} / 0{PHOTO_SLIDES.length}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}