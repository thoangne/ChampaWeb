import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { X } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";
import AudioPlayerBar from "../components/AudioPlayerBar";
import BlogDetailHeader from "../components/blog/BlogDetailHeader";
import BlogDetailHero from "../components/blog/BlogDetailHero";
import BlogDetailContent from "../components/blog/BlogDetailContent";
import BlogDetailSidebar from "../components/blog/BlogDetailSidebar";
import BlogDetailRelated from "../components/blog/BlogDetailRelated";
import BlogDetailComments from "../components/blog/BlogDetailComments";
import { getBlogDetailBySlug } from "../data/blogDetailData";

export default function BlogDetailPage() {
  const { articleSlug } = useParams<{ articleSlug: string }>();

  // Lấy dữ liệu chi tiết bài viết dựa theo slug
  const article = useMemo(() => {
    return getBlogDetailBySlug(articleSlug);
  }, [articleSlug]);

  // Tiến trình đọc bài viết
  const [scrollProgress, setScrollProgress] = useState(0);

  // Kích thước chữ bài viết (16px, 18px, 20px, 22px)
  const [fontSize, setFontSize] = useState<number>(18);

  // Lightbox ảnh phóng to
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Trạng thái audio bar nổi
  const [isAudioBarOpen, setIsAudioBarOpen] = useState<boolean>(false);

  // Cuộn lên đầu trang khi thay đổi bài viết
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [articleSlug]);

  // Lắng nghe cuộn trang tính % tiến trình đọc
  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (height > 0) {
        const scrolled = (winScroll / height) * 100;
        setScrollProgress(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleIncreaseFontSize = () => {
    setFontSize((prev) => Math.min(prev + 2, 22));
  };

  const handleDecreaseFontSize = () => {
    setFontSize((prev) => Math.max(prev - 2, 15));
  };

  return (
    <div className="bg-surface text-on-surface font-body-md flex flex-col min-h-screen selection:bg-primary-container selection:text-on-primary-container">
      {/* 1. Reading Progress Indicator Bar */}
      <div
        className="fixed top-16 xl:top-20 left-0 h-1 bg-gradient-to-r from-secondary to-primary z-50 transition-all duration-150 ease-out shadow-sm"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* 2. Global Header */}
      <Header
        onToggleAudio={() => setIsAudioBarOpen(!isAudioBarOpen)}
        isAudioPlaying={isAudioBarOpen}
      />

      {/* 3. Main Editorial Flow */}
      <main className="w-full pt-16 xl:pt-20 bg-surface min-h-screen flex flex-col">
        {/* Section 1: Article Header & Reading Controls */}
        <BlogDetailHeader
          article={article}
          fontSize={fontSize}
          onIncreaseFontSize={handleIncreaseFontSize}
          onDecreaseFontSize={handleDecreaseFontSize}
        />

        {/* Section 2: Panoramic Hero Showcase with Lightbox */}
        <BlogDetailHero
          article={article}
          onOpenLightbox={(img) => setLightboxImage(img)}
        />

        {/* Section 3: 2-Column Editorial & Sticky Archival Sidebar */}
        <div className="w-full px-margin-mobile xl:px-margin pb-space-xl">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            {/* Main Editorial Article (8 cols) */}
            <BlogDetailContent
              article={article}
              fontSize={fontSize}
            />

            {/* Sticky Research Sidebar (4 cols) */}
            <BlogDetailSidebar article={article} />
          </div>
        </div>

        {/* Section 4: Next Reads & Community Academic Discussion */}
        <section className="w-full bg-surface-container-low/70 py-space-xl px-margin-mobile xl:px-margin border-t border-surface-container-high/60">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
            {/* Next Articles in the Series */}
            <BlogDetailRelated article={article} />

            {/* Academic Discussion & Community Comments */}
            <BlogDetailComments />
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Audio Player Bar */}
      <AudioPlayerBar
        isOpen={isAudioBarOpen}
        onClose={() => setIsAudioBarOpen(false)}
      />

      {/* Mobile Bottom Navigation */}
      <BottomNav />

      {/* Lightbox Modal xem ảnh độ phân giải cao */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
              type="button"
            >
              <span>Đóng</span>
              <X className="h-5 w-5" />
            </button>
            <img
              src={lightboxImage}
              alt="Ảnh phóng to chi tiết"
              className="max-h-[82vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            <div className="text-center text-white/80 text-xs mt-3 font-medium">
              Tư liệu hình ảnh độ nét cao • Kho lưu trữ Dana Community Heritage
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
