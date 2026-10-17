import { useState, useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";
import AudioPlayerBar from "../components/AudioPlayerBar";
import { GALLERY_CATEGORIES, GALLERY_PHOTOS, type GalleryPhoto } from "../data/galleryData";
import { Camera, ChevronLeft, ChevronRight, Eye, MapPin, X, ZoomIn } from "lucide-react";
import { Link } from "react-router-dom";

export default function CultureGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

  const toggleAudio = () => {
    setIsAudioPlaying((prev) => !prev);
  };

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === "all") return GALLERY_PHOTOS;
    return GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const activePhotoIndex = useMemo(() => {
    if (!activePhoto) return -1;
    return filteredPhotos.findIndex((p) => p.id === activePhoto.id);
  }, [activePhoto, filteredPhotos]);

  const handleNextPhoto = () => {
    if (activePhotoIndex === -1) return;
    const nextIndex = (activePhotoIndex + 1) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (activePhotoIndex === -1) return;
    const prevIndex =
      (activePhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[prevIndex]);
  };

  return (
    <div className="bg-surface text-on-surface font-body-md flex flex-col min-h-screen selection:bg-primary-container selection:text-on-primary-container">
      {/* 1. Global Header */}
      <Header onToggleAudio={toggleAudio} isAudioPlaying={isAudioPlaying} />

      {/* 2. Main Content */}
      <main className="w-full pt-16 xl:pt-20 bg-surface min-h-[calc(100vh-80px)] flex flex-col">
        {/* Hero Section */}
        <section className="w-full bg-surface-container-low/70 pt-space-lg pb-space-xl border-b border-surface-container-high/60">
          <div className="max-w-7xl mx-auto px-margin-mobile xl:px-margin flex flex-col gap-space-md">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-space-xs tracking-wider uppercase text-xs text-on-surface-variant font-label-md">
              <Link className="hover:text-primary transition-colors" to="/">
                Trang chủ
              </Link>
              <span className="text-outline/60">/</span>
              <span className="text-primary font-bold">Hình ảnh Văn hoá</span>
            </nav>

            {/* Title Lockup */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mt-space-xs">
              <div className="flex flex-col gap-space-xs max-w-3xl">
                <div className="flex items-center gap-2 text-primary font-label-sm text-xs uppercase tracking-widest font-bold">
                  <Camera className="h-4 w-4" />
                  <span>Kho Tư Liệu Nhiếp Ảnh Nghệ Thuật & Điền Dã</span>
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl xl:text-5xl text-on-surface font-semibold leading-tight">
                  Kho Tàng Thị Giác: Ánh Sáng & Trầm Tích Champa
                </h1>
                <p className="font-body-md text-on-surface-variant text-base xl:text-lg leading-relaxed mt-1">
                  Mỗi khung hình là một lát cắt thời gian vô giá, ghi lại vẻ uy
                  nghiêm của đền tháp Kalan cổ kính, nhịp thoi dệt thổ cẩm và hồn
                  thiêng trong ánh mắt người giữ lửa Panduranga.
                </p>
              </div>

              <div className="hidden lg:flex items-center gap-2 text-secondary font-label-sm text-xs uppercase tracking-widest bg-surface-container px-4 py-2 rounded-full border border-outline-variant/30">
                <Camera className="h-4 w-4 text-primary" />
                <span>Bảo tàng Ảnh Số • {filteredPhotos.length} Tác phẩm</span>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="pt-space-md flex flex-wrap items-center gap-2.5">
              {GALLERY_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold tracking-wide transition-all cursor-pointer shadow-sm ${
                      isActive
                        ? "bg-primary text-on-primary ring-2 ring-primary/20 shadow-md hover:-translate-y-0.5"
                        : "bg-surface-container-lowest hover:bg-surface-container text-on-surface border border-outline-variant/30"
                    }`}
                    type="button"
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                        isActive
                          ? "bg-primary-container text-on-primary"
                          : "bg-surface-container-high text-on-surface-variant"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Masonry / Photo Gallery Grid */}
        <section className="w-full max-w-7xl mx-auto px-margin-mobile xl:px-margin py-space-xl">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setActivePhoto(photo)}
                className="group relative break-inside-avoid bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-outline-variant/30 transition-all duration-300 cursor-pointer"
              >
                {/* Image Showcase */}
                <div className="relative overflow-hidden aspect-auto bg-surface-container">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                    <span className="font-label-sm text-xs tracking-wider uppercase text-secondary-container font-semibold">
                      {photo.location}
                    </span>
                    <h4 className="font-serif text-lg font-bold mt-1 text-white leading-snug">
                      {photo.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-3 text-xs text-white/80">
                      <Eye className="h-3.5 w-3.5" />
                      <span>Bấm để xem chi tiết giám tuyển & độ nét cao</span>
                    </div>
                  </div>

                  {/* Corner Zoom Icon */}
                  <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ZoomIn className="h-4 w-4" />
                  </div>
                </div>

                {/* Caption Card below */}
                <div className="p-4 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs text-on-surface-variant font-label-sm">
                    <span className="flex items-center gap-1 text-primary font-semibold">
                      <MapPin className="h-3 w-3" />
                      <span className="line-clamp-1">{photo.location}</span>
                    </span>
                    <span className="font-mono">{photo.year}</span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-1">
                    {photo.title}
                  </h3>
                  <p className="font-body-sm text-xs text-on-surface-variant line-clamp-2 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 3. Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200">
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50 cursor-pointer"
            aria-label="Đóng ảnh"
            type="button"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevPhoto}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white items-center justify-center transition-all cursor-pointer z-50"
            aria-label="Ảnh trước"
            type="button"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNextPhoto}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white items-center justify-center transition-all cursor-pointer z-50"
            aria-label="Ảnh kế tiếp"
            type="button"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Modal Container */}
          <div className="relative max-w-5xl w-full max-h-[90vh] bg-surface-container-lowest rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10">
            {/* Left: HD Image */}
            <div className="md:w-3/5 bg-black flex items-center justify-center overflow-hidden max-h-[50vh] md:max-h-full">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="w-full h-full object-contain max-h-[80vh]"
              />
            </div>

            {/* Right: Curatorial Notes & Metadata */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-surface-container-low max-h-[40vh] md:max-h-full">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs font-label-sm uppercase tracking-wider text-secondary">
                  <span>Panduranga Visual Archive</span>
                  <span className="font-mono font-bold">{activePhoto.year}</span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-on-surface leading-snug">
                    {activePhoto.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-primary font-semibold mt-2">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{activePhoto.location}</span>
                  </div>
                </div>

                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  {activePhoto.description}
                </p>

                {activePhoto.curatorNote && (
                  <div className="p-4 rounded-2xl bg-surface-container border border-outline-variant/30 flex flex-col gap-1">
                    <span className="font-label-sm text-xs font-bold uppercase tracking-wider text-primary">
                      Ghi chú giám tuyển di sản:
                    </span>
                    <p className="font-body-sm text-xs text-on-surface-variant italic leading-relaxed">
                      "{activePhoto.curatorNote}"
                    </p>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {activePhoto.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-surface-container-high text-on-surface-variant text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-surface-container-high flex items-center justify-between text-xs text-on-surface-variant">
                <span>Tác giả: <strong className="text-on-surface">{activePhoto.author}</strong></span>
                <span className="font-mono">
                  {activePhotoIndex + 1} / {filteredPhotos.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Global Footer */}
      <Footer />

      {/* 5. Saranai Audio Player Floating Bar */}
      <AudioPlayerBar
        isOpen={isAudioPlaying}
        onClose={() => setIsAudioPlaying(false)}
      />

      {/* 6. Mobile Bottom Nav */}
      <BottomNav />
    </div>
  );
}
