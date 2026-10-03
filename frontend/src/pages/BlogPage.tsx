import { useState, useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";
import AudioPlayerBar from "../components/AudioPlayerBar";
import BlogHeroSection from "../components/blog/BlogHeroSection";
import BlogFeaturedPost from "../components/blog/BlogFeaturedPost";
import BlogPillarsSection from "../components/blog/BlogPillarsSection";
import BlogArticlesGrid from "../components/blog/BlogArticlesGrid";
import BlogCTASection from "../components/blog/BlogCTASection";
import { BLOG_ARTICLES } from "../data/blogData";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

  const toggleAudio = () => {
    setIsAudioPlaying((prev) => !prev);
  };

  // Filter articles by category and search keyword
  const filteredArticles = useMemo(() => {
    return BLOG_ARTICLES.filter((article) => {
      const matchCategory =
        selectedCategory === "all" || article.category === selectedCategory;
      const matchSearch =
        searchQuery.trim() === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-surface text-on-surface font-body-md flex flex-col min-h-screen selection:bg-primary-container selection:text-on-primary-container">
      {/* 1. Global Header */}
      <Header onToggleAudio={toggleAudio} isAudioPlaying={isAudioPlaying} />

      {/* 2. Main Blog Flow */}
      <main className="w-full pt-16 xl:pt-20 bg-surface min-h-[calc(100vh-80px)] flex flex-col">
        {/* Section 1: Hero Header & Filters */}
        <BlogHeroSection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalFilteredCount={filteredArticles.length}
        />

        {/* Section 2: Featured Archival Story */}
        <BlogFeaturedPost onToggleAudioPlayer={toggleAudio} />

        {/* Section 3: Four Pillars of Panduranga */}
        <BlogPillarsSection />

        {/* Section 4: In-depth Research Articles Grid */}
        <BlogArticlesGrid articles={filteredArticles} />

        {/* Section 5: Journal PDF & Community Oral History */}
        <BlogCTASection />
      </main>

      {/* 3. Global Footer */}
      <Footer />

      {/* 4. Saranai Audio Player Floating Bar */}
      <AudioPlayerBar
        isOpen={isAudioPlaying}
        onClose={() => setIsAudioPlaying(false)}
      />

      {/* 5. Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
