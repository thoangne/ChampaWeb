import { X, Calendar, Clock, MapPin, Eye, BookOpen } from "lucide-react";

interface BlogPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: {
    title: string;
    excerpt: string;
    content: string;
    coverImage: string;
    mainCategory: string;
    category: string;
    badge: string;
    fieldLocation: string;
    readTime: string;
    authorName: string;
    status: string;
  };
}

export default function BlogPreviewModal({ isOpen, onClose, post }: BlogPreviewModalProps) {
  if (!isOpen) return null;

  const categoryNames: Record<string, string> = {
    "tin-tuc": "Tin tức & Sự kiện",
    "lich-su": "Tiến trình Lịch sử",
    "van-hoa": "Văn hóa & Nghệ thuật",
  };

  // Hàm render nội dung định dạng đơn giản (H2, blockquote, đoạn văn)
  const renderFormattedContent = (rawText: string) => {
    const lines = rawText.split("\n\n");
    return lines.map((paragraph, index) => {
      const trimmed = paragraph.trim();
      if (trimmed.startsWith("## ")) {
        return (
          <h2
            key={index}
            className="font-serif text-2xl sm:text-3xl font-bold text-on-surface mt-8 mb-4 border-b border-outline-variant/30 pb-2 text-secondary"
          >
            {trimmed.replace("## ", "")}
          </h2>
        );
      }
      if (trimmed.startsWith("### ")) {
        return (
          <h3
            key={index}
            className="font-serif text-xl sm:text-2xl font-bold text-on-surface mt-6 mb-3 text-primary"
          >
            {trimmed.replace("### ", "")}
          </h3>
        );
      }
      if (trimmed.startsWith("> ")) {
        return (
          <blockquote
            key={index}
            className="my-6 p-4 sm:p-6 rounded-2xl bg-[#fff1ec] border-l-4 border-primary italic font-serif text-base sm:text-lg text-on-surface shadow-xs"
          >
            {trimmed.replace(/^>\s*/, "")}
          </blockquote>
        );
      }
      return (
        <p
          key={index}
          className="font-body-md text-base sm:text-lg leading-relaxed text-on-surface-variant my-4 whitespace-pre-line"
        >
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div className="fixed inset-0 z-[120] bg-black/70 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-surface w-full max-w-4xl max-h-[92vh] rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/60 flex flex-col">
        {/* Modal Top Bar */}
        <div className="bg-white px-4 sm:px-6 py-3 border-b border-outline-variant/40 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <Eye className="w-4 h-4" />
            </div>
            <div>
              <span className="font-serif font-bold text-sm sm:text-base text-on-surface">
                Chế độ Xem trước Độc giả (Live Preview)
              </span>
              <span className="hidden sm:inline-block text-[11px] text-on-surface-variant ml-2 bg-surface-container px-2 py-0.5 rounded-full">
                Mô phỏng bài viết thực tế
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Article Body */}
        <div className="overflow-y-auto p-4 sm:p-8 md:p-12 space-y-6">
          {/* Metadata badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary text-white shadow-xs">
              {categoryNames[post.mainCategory] || "Khảo cứu Di sản"}
            </span>
            {post.badge && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-surface-container-high text-primary border border-outline-variant/30">
                {post.badge}
              </span>
            )}
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                post.status === "published"
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-amber-100 text-amber-800"
              }`}
            >
              {post.status === "published" ? "Đã xuất bản" : "Bản nháp"}
            </span>
          </div>

          {/* Article Title */}
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-on-surface leading-tight tracking-tight">
            {post.title || "Tiêu đề bài viết khảo cứu chưa đặt"}
          </h1>

          {/* Author & Read Time Meta */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-on-surface-variant py-2 border-y border-outline-variant/30">
            <div className="flex items-center gap-1.5 font-semibold text-primary">
              <BookOpen className="w-4 h-4" />
              <span>{post.authorName || "Ban Quản Trị Di Sản"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            {post.fieldLocation && (
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-secondary" />
                <span>{post.fieldLocation}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>Hôm nay (Bản xem trước)</span>
            </div>
          </div>

          {/* Excerpt Lead */}
          {post.excerpt && (
            <p className="font-body-md text-base sm:text-lg font-medium text-on-surface leading-relaxed italic bg-surface-container-low p-4 sm:p-5 rounded-2xl border-l-4 border-secondary">
              {post.excerpt}
            </p>
          )}

          {/* Cover Image */}
          {post.coverImage && (
            <div className="rounded-2xl overflow-hidden shadow-lg border border-outline-variant/40 max-h-[460px]">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-stone max-w-none pt-4">
            {post.content ? (
              renderFormattedContent(post.content)
            ) : (
              <p className="text-on-surface-variant italic">
                (Chưa có nội dung bài viết. Hãy nhập nội dung ở trình soạn thảo...)
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

