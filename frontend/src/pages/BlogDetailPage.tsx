import { useState, useEffect } from "react";
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

export default function BlogDetailPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

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

  const toggleAudio = () => {
    setIsAudioPlaying((prev) => !prev);
  };

  return (
    <div className="bg-surface text-on-surface font-body-md flex flex-col min-h-screen selection:bg-primary-container selection:text-on-primary-container">
      {/* Reading Progress Indicator Bar */}
      <div
        className="fixed top-16 xl:top-20 left-0 h-1 bg-primary z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Global Header */}
      <Header onToggleAudio={toggleAudio} isAudioPlaying={isAudioPlaying} />

      {/* Main Content Area */}
      <main className="w-full pt-16 xl:pt-20 bg-surface min-h-screen flex flex-col">
        {/* Section 1: Article Header & Metadata */}
        <BlogDetailHeader />

        {/* Section 2: Panoramic Hero Showcase */}
        <BlogDetailHero />

        {/* Section 3: 2-Column Editorial & Sticky Sidebar */}
        <div className="w-full px-margin-mobile xl:px-margin pb-space-xl">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            {/* Main Editorial Article (8 cols) */}
            <BlogDetailContent />

            {/* Sticky Research Sidebar (4 cols) */}
            <BlogDetailSidebar />
          </div>
        </div>

        {/* Section 4: Next Reads & Community Academic Discussion */}
        <section className="w-full bg-surface-container-low/70 py-space-xl px-margin-mobile xl:px-margin border-t border-surface-container-high/60">
          <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
            {/* Next Articles in the Curated Series */}
            <BlogDetailRelated />

            {/* Academic Discussion & Community Comments */}
            <BlogDetailComments />
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Saranai Audio Player */}
      <AudioPlayerBar
        isOpen={isAudioPlaying}
        onClose={() => setIsAudioPlaying(false)}
      />

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
