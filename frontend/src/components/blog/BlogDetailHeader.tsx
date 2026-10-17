import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bookmark,
  ChevronRight,
  Clock,
  Calendar,
  FileText,
  Share2,
  ShieldCheck,
  Landmark,
  MapPin,
  Check,
} from "lucide-react";
import { toast } from "../ui/sonner";
import type { BlogDetailArticle } from "../../data/blogDetailData";

interface BlogDetailHeaderProps {
  article: BlogDetailArticle;
  fontSize: number;
  onIncreaseFontSize: () => void;
  onDecreaseFontSize: () => void;
}

export default function BlogDetailHeader({
  article,
  fontSize,
  onIncreaseFontSize,
  onDecreaseFontSize,
}: BlogDetailHeaderProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast.success(
      isBookmarked
        ? "Đã xóa khỏi danh sách lưu đọc lại"
        : "Đã lưu bài viết vào danh sách đọc lại của bạn!"
    );
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
    toast.success("Đã sao chép liên kết bài khảo cứu!", {
      description: "Bạn có thể gửi liên kết cho bạn bè và đồng nghiệp.",
    });
  };

  const handleCopyCitation = () => {
    const citation = `"${article.title}". Tác giả: ${article.author}. Nguồn: Dana Community Heritage Archives (${window.location.href}), truy cập ngày ${new Date().toLocaleDateString('vi-VN')}.`;
    navigator.clipboard.writeText(citation);
    toast.success("Đã sao chép trích dẫn khoa học!", {
      description: "Định dạng trích dẫn chuẩn cho tài liệu học thuật và báo chí.",
    });
  };

  return (
    <section className="w-full bg-surface-container-low/70 py-space-lg sm:py-space-xl px-margin-mobile xl:px-margin border-b border-surface-container-high/60">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
        {/* 1. Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-space-xs font-body-sm text-xs sm:text-sm text-on-surface-variant"
        >
          <Link className="hover:text-primary transition-colors" to="/">
            Trang chủ
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-outline" />
          <Link className="hover:text-primary transition-colors" to="/bai-viet">
            Bài Viết
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-outline" />
          <Link
            className="hover:text-primary transition-colors"
            to={`/bai-viet?category=${article.mainCategory}`}
          >
            {article.categoryLabel}
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-outline" />
          <span className="text-primary font-medium truncate max-w-xs md:max-w-md">
            {article.title}
          </span>
        </nav>

        {/* 2. Editorial Badges & Metadata Chips */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-space-sm">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-label-sm text-xs uppercase tracking-wider font-semibold shadow-sm ${article.badgeClass}`}>
            <Landmark className="h-3.5 w-3.5" />
            <span>{article.badge}</span>
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest text-secondary font-label-sm text-xs uppercase tracking-wider font-semibold border border-outline-variant/30">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            <span>{article.code}</span>
          </span>

          <span className="flex items-center gap-1 text-on-surface-variant font-label-sm text-xs bg-surface-container px-3 py-1 rounded-full border border-outline-variant/30">
            <Clock className="h-3.5 w-3.5" />
            <span>{article.readTime}</span>
          </span>

          <span className="flex items-center gap-1 text-on-surface-variant font-label-sm text-xs bg-surface-container px-3 py-1 rounded-full border border-outline-variant/30">
            <Calendar className="h-3.5 w-3.5" />
            <span>{article.date}</span>
          </span>

          {article.fieldLocation && (
            <span className="hidden md:inline-flex items-center gap-1 text-on-surface-variant font-label-sm text-xs bg-surface-container px-3 py-1 rounded-full border border-outline-variant/30">
              <MapPin className="h-3.5 w-3.5 text-secondary" />
              <span>{article.fieldLocation}</span>
            </span>
          )}
        </div>

        {/* 3. Main Headline & Subtitle */}
        <div className="flex flex-col gap-space-xs max-w-5xl mt-1">
          <span className="font-label-sm text-xs text-secondary uppercase tracking-[0.2em] font-bold">
            {article.categoryLabel} • Panduranga Cultural Archives
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-on-surface leading-tight font-semibold mt-1 tracking-tight">
            {article.title}
          </h1>
          <p className="font-body-md xl:font-body-lg text-sm sm:text-base xl:text-lg text-on-surface-variant mt-2 sm:mt-space-sm leading-relaxed max-w-4xl">
            {article.subtitle}
          </p>
        </div>

        {/* 4. Editorial Byline & Action Control Bar */}
        <div className="mt-space-sm pt-space-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md bg-surface-container/60 p-space-md rounded-2xl border border-outline-variant/30 shadow-sm">
          {/* Author info */}
          <div className="flex items-center gap-space-sm">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary-container text-on-primary-container font-bold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-sm border border-primary/20">
              {article.authorInitials}
            </div>
            <div className="flex flex-col">
              <p className="font-title-md text-sm sm:text-base font-semibold text-on-surface">
                {article.author}
              </p>
              <p className="font-body-sm text-xs text-on-surface-variant leading-tight">
                {article.authorRole}
              </p>
            </div>
          </div>

          {/* Reader Interactive Toolbar */}
          <div className="flex items-center flex-wrap gap-2 w-full lg:w-auto justify-end border-t lg:border-t-0 pt-3 lg:pt-0 border-surface-container-high/60">
            {/* Font Size Adjuster */}
            <div className="inline-flex items-center rounded-xl bg-surface-container-lowest border border-outline-variant/40 p-1 shadow-sm">
              <button
                onClick={onDecreaseFontSize}
                disabled={fontSize <= 15}
                className="px-2.5 py-1 text-xs font-semibold text-on-surface hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                title="Giảm cỡ chữ đọc"
                type="button"
              >
                A-
              </button>
              <span className="text-[11px] font-mono text-outline px-1 border-x border-surface-container">
                {fontSize}px
              </span>
              <button
                onClick={onIncreaseFontSize}
                disabled={fontSize >= 22}
                className="px-2.5 py-1 text-xs font-semibold text-on-surface hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                title="Tăng cỡ chữ đọc"
                type="button"
              >
                A+
              </button>
            </div>

            {/* Bookmark button */}
            <button
              onClick={handleBookmark}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold shadow-sm ${
                isBookmarked
                  ? "bg-primary-container text-on-primary-container border-primary"
                  : "bg-surface-container-lowest hover:bg-surface-container text-on-surface border-outline-variant/40"
              }`}
              title="Lưu bài viết đọc lại"
              type="button"
            >
              <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-current text-primary" : ""}`} />
              <span className="hidden sm:inline">{isBookmarked ? "Đã lưu" : "Lưu đọc sau"}</span>
            </button>

            {/* Share / Copy link button */}
            <button
              onClick={handleShare}
              className="p-2.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container text-on-surface border border-outline-variant/40 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold shadow-sm"
              title="Chia sẻ liên kết"
              type="button"
            >
              {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Share2 className="h-4 w-4" />}
              <span className="hidden sm:inline">{copied ? "Đã sao chép" : "Chia sẻ"}</span>
            </button>

            {/* Citation button */}
            <button
              onClick={handleCopyCitation}
              className="p-2.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container text-on-surface border border-outline-variant/40 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold shadow-sm"
              title="Trích dẫn khoa học chuẩn APA"
              type="button"
            >
              <FileText className="h-4 w-4 text-secondary" />
              <span className="hidden sm:inline">Trích dẫn</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
