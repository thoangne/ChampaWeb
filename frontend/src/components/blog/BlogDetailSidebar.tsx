import { useState, useEffect } from "react";
import {
  Download,
  FileText,
  ListOrdered,
  Smile,
  ThumbsUp,
  Award,
} from "lucide-react";
import { toast } from "../ui/sonner";
import type { BlogDetailArticle } from "../../data/blogDetailData";

interface BlogDetailSidebarProps {
  article: BlogDetailArticle;
}

export default function BlogDetailSidebar({ article }: BlogDetailSidebarProps) {
  const [activeSection, setActiveSection] = useState<string>(
    article.chapters[0]?.id || "chuong-1"
  );
  const [hasVoted, setHasVoted] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = article.chapters.map((c) => c.id);
      for (const sectionId of sectionIds) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [article.chapters]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleVote = () => {
    if (!hasVoted) {
      setHasVoted(true);
      toast.success("Cảm ơn bạn đã đánh giá tư liệu!", {
        description: "Ý kiến phản hồi giúp ban biên soạn nâng cao chất lượng học thuật.",
      });
    }
  };

  const handleDownload = () => {
    toast.success("Đang chuẩn bị tệp PDF chuyên sâu...", {
      description: `Bản in "${article.title}" độ phân giải cao kèm sơ đồ tư liệu.`,
    });
  };

  return (
    <aside className="lg:col-span-4 flex flex-col gap-space-lg lg:sticky lg:top-24">
      {/* 1. TABLE OF CONTENTS (Mục Lục Khảo Cứu) */}
      <div className="bg-surface-container-lowest p-space-md sm:p-space-lg rounded-3xl shadow-lg border border-outline-variant/30 flex flex-col gap-space-sm">
        <div className="flex items-center justify-between pb-space-xs border-b border-surface-container/60">
          <span className="font-serif text-lg font-semibold text-on-surface flex items-center gap-2">
            <ListOrdered className="h-5 w-5 text-primary" />
            <span>Mục Lục Khảo Cứu</span>
          </span>
          <span className="text-on-surface-variant font-label-sm text-xs font-semibold">
            {article.chapters.length} chương
          </span>
        </div>

        <nav className="flex flex-col gap-1.5 text-xs sm:text-sm">
          {article.chapters.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`py-2 px-3 rounded-xl transition-all flex items-center gap-2.5 text-left cursor-pointer ${
                  isActive
                    ? "bg-surface-container text-primary font-bold shadow-sm"
                    : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-medium"
                }`}
                type="button"
              >
                <span
                  className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
                    isActive ? "bg-primary scale-125" : "bg-outline/60"
                  }`}
                ></span>
                <span className="truncate">
                  {item.number}. {item.title}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* 2. THẺ TÁC GIẢ & BAN CỐ VẤN DANA */}
      <div className="bg-surface-container-lowest p-space-md sm:p-space-lg rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col gap-space-sm">
        <div className="flex items-center gap-2 text-primary font-serif font-bold text-base">
          <Award className="h-5 w-5" />
          <span>Hội Đồng Khảo Cứu Dana</span>
        </div>

        <div className="flex items-start gap-3 pt-1">
          <div className="w-12 h-12 rounded-2xl bg-primary-container text-on-primary-container font-bold text-base flex items-center justify-center shrink-0 border border-primary/20 shadow-sm">
            {article.authorInitials}
          </div>
          <div className="flex flex-col">
            <h4 className="font-title-md text-sm font-semibold text-on-surface">
              {article.author}
            </h4>
            <p className="font-body-sm text-xs text-on-surface-variant mt-0.5 leading-snug">
              {article.authorRole}
            </p>
          </div>
        </div>

        <p className="font-body-sm text-xs text-on-surface-variant/90 leading-relaxed pt-2 border-t border-surface-container/60">
          Tư liệu được kiểm định bởi cộng đồng người Chăm bản địa và các nhà khảo cứu độc lập của dự án Dana Champa Heritage.
        </p>
      </div>

      {/* 3. TẢI TỆP PDF BẢN IN KHOA HỌC */}
      <div className="bg-gradient-to-br from-primary-container/40 via-surface-container to-surface-container p-space-md sm:p-space-lg rounded-3xl shadow-sm border border-primary/20 flex flex-col gap-space-xs">
        <div className="flex items-center gap-2 text-primary font-bold text-sm">
          <FileText className="h-4 w-4" />
          <span>Bản In Nghiên Cứu Chuyên Sâu</span>
        </div>
        <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
          Tải tài liệu PDF chuẩn học thuật gồm 8 trang trình bày, bản vẽ kỹ thuật và trích lục văn bia Akhar Thrah.
        </p>
        <button
          onClick={handleDownload}
          className="mt-2 w-full py-2.5 px-4 rounded-xl bg-primary hover:bg-primary/90 text-on-primary font-label-md text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
          type="button"
        >
          <Download className="h-4 w-4" />
          <span>Tải bản PDF (2.4 MB)</span>
        </button>
      </div>

      {/* 4. KHẢO SÁT CHẤT LƯỢNG TƯ LIỆU */}
      <div className="bg-surface-container-lowest p-space-md rounded-2xl border border-outline-variant/30 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-on-surface font-medium">
          <Smile className="h-4 w-4 text-secondary shrink-0" />
          <span>Tư liệu này có hữu ích cho bạn?</span>
        </div>
        <button
          onClick={handleVote}
          className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
            hasVoted
              ? "bg-primary text-on-primary border-primary"
              : "bg-surface-container hover:bg-surface-container-high text-on-surface border-transparent"
          }`}
          type="button"
        >
          <ThumbsUp className="h-3.5 w-3.5" />
          <span>{hasVoted ? "Đã thích" : "Hữu ích"}</span>
        </button>
      </div>
    </aside>
  );
}
