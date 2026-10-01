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
} from "lucide-react";
import { toast } from "../ui/sonner";

export default function BlogDetailHeader() {
  const [isBookmarked, setIsBookmarked] = useState(false);

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
    toast.success("Đã sao chép liên kết bài khảo cứu!", {
      description: "Bạn có thể chia sẻ cho bạn bè và đồng nghiệp.",
    });
  };

  const handleDownloadPdf = () => {
    toast.success("Đang chuẩn bị tệp PDF chuyên sâu...", {
      description: "Bản in nghiên cứu 8 trang độ phân giải cao kèm bản vẽ chi tiết.",
    });
  };

  return (
    <section className="w-full bg-surface-container-low/70 py-space-xl px-margin-mobile xl:px-margin border-b border-surface-container-high/60">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-space-xs font-body-sm text-xs sm:text-sm text-on-surface-variant mb-space-md"
        >
          <Link className="hover:text-primary transition-colors" to="/">
            Trang chủ
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-outline" />
          <Link className="hover:text-primary transition-colors" to="/blog">
            Di sản Kể chuyện
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-outline" />
          <span className="hover:text-primary transition-colors cursor-pointer">
            Kiến trúc & Tâm linh Champa
          </span>
          <ChevronRight className="h-3.5 w-3.5 text-outline" />
          <span className="text-primary font-medium truncate max-w-xs md:max-w-md">
            Bí ẩn gạch nung Po Klong Garai
          </span>
        </nav>

        {/* Editorial Badges & Metadata Chips */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-space-sm mb-space-md">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-xs uppercase tracking-wider font-semibold">
            <Landmark className="h-3.5 w-3.5" />
            <span>Khảo cứu Kiến trúc & Tâm linh</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-xs uppercase tracking-wider font-semibold">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Hồ sơ Di tích Quốc gia Đặc biệt</span>
          </span>
          <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-xs uppercase tracking-wider font-medium border border-outline-variant/30">
            Mã tư liệu: KALAN-ARCH-001
          </span>
          <span className="flex items-center gap-1 text-on-surface-variant font-label-sm text-xs">
            <Clock className="h-3.5 w-3.5" />
            <span>12 phút đọc</span>
          </span>
          <span className="flex items-center gap-1 text-on-surface-variant font-label-sm text-xs">
            <Calendar className="h-3.5 w-3.5" />
            <span>24/10/2024</span>
          </span>
        </div>

        {/* Main Headline */}
        <div className="flex flex-col gap-space-xs max-w-5xl">
          <span className="font-label-sm text-xs text-secondary uppercase tracking-[0.2em] font-semibold">
            Kalan Po Klong Garai • Panduranga Epigraphy Series
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl xl:text-5xl text-on-surface leading-tight font-semibold mt-1">
            Bí ẩn gạch nung không vữa mạch Po Klong Garai: Khi lửa và đất hóa thành lời kinh nguyện vĩnh cửu
          </h1>
          <p className="font-body-lg text-base sm:text-lg text-on-surface-variant mt-space-sm leading-relaxed max-w-4xl">
            Hàng triệu viên gạch đất sét nung kết dính khít khao không để lộ một gờ chỉ vữa. Người thợ cả Champa xưa đã mài chập trực tiếp các mặt gạch với nước và nhựa vỏ cây bời lời rừng già, tạo nên khối kiến trúc nguyên khối thách thức nắng gió sa mạc và sự bào mòn của thời gian.
          </p>
        </div>

        {/* Editorial Byline & Action Bar */}
        <div className="mt-space-lg pt-space-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md bg-surface-container/60 p-space-md rounded-2xl border border-outline-variant/30">
          <div className="flex flex-wrap items-center gap-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary font-bold text-base flex items-center justify-center shrink-0 shadow-sm">
                ĐC
              </div>
              <div>
                <p className="font-title-md text-sm sm:text-base font-semibold text-on-surface">
                  Ban Cố vấn Văn hóa Dana & Hội đồng Chức sắc Balamôn Ninh Thuận
                </p>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
                  Khảo cứu thực địa • Viện Khảo cổ học & Panduranga Archives cung cấp ảnh tư liệu
                </p>
              </div>
            </div>
          </div>

          {/* Social & PDF Actions */}
          <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end flex-wrap">
            <button
              onClick={handleBookmark}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer border ${
                isBookmarked
                  ? "bg-primary text-on-primary border-primary"
                  : "bg-surface hover:bg-surface-container text-on-surface border-outline-variant/30"
              }`}
              title="Lưu bài viết"
              type="button"
            >
              <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-current" : ""}`} />
              <span>{isBookmarked ? "Đã lưu" : "Lưu đọc lại"}</span>
            </button>

            <button
              onClick={handleShare}
              className="px-3.5 py-2 rounded-xl bg-surface hover:bg-surface-container text-on-surface text-xs sm:text-sm font-semibold transition-all shadow-sm flex items-center gap-1.5 border border-outline-variant/30 cursor-pointer"
              title="Chia sẻ bài viết"
              type="button"
            >
              <Share2 className="h-4 w-4" />
              <span>Chia sẻ</span>
            </button>

            <button
              onClick={handleDownloadPdf}
              className="px-4 py-2 rounded-xl bg-primary hover:bg-primary-container text-on-primary text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
              type="button"
            >
              <FileText className="h-4 w-4" />
              <span>Tải PDF nghiên cứu</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
