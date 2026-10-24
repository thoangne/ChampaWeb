import { Link } from "react-router-dom";
import { BookOpen, Search, X } from "lucide-react";
import {
  BLOG_CATEGORIES,
  BLOG_MAIN_CATEGORIES,
  type BlogMainCategoryType,
} from "../../data/blogData";

interface BlogHeroSectionProps {
  mainCategory: BlogMainCategoryType;
  onSelectMainCategory: (cat: BlogMainCategoryType) => void;
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
  searchQuery?: string;
  onSearchQueryChange?: (q: string) => void;
}

export default function BlogHeroSection({
  mainCategory,
  onSelectMainCategory,
  selectedCategory,
  onSelectCategory,
  searchQuery = "",
  onSearchQueryChange,
}: BlogHeroSectionProps) {
  return (
    <section className="w-full bg-surface-container-low/60 pt-space-md sm:pt-space-lg pb-space-lg sm:pb-space-xl border-b border-surface-container-high/60">
      <div className="max-w-7xl mx-auto px-margin-mobile xl:px-margin flex flex-col gap-space-md sm:gap-space-lg">
        {/* Breadcrumb & Archival Index Marker */}
        <div className="flex items-center justify-between text-on-surface-variant font-label-md text-xs sm:text-sm flex-wrap gap-2">
          <nav className="flex items-center gap-space-xs tracking-wider uppercase text-xs">
            <Link className="hover:text-primary transition-colors" to="/">
              Trang chủ
            </Link>
            <span className="text-outline/60">/</span>
            <span className="text-primary font-bold">Bài Viết & Khảo Cứu</span>
          </nav>
          <div className="hidden sm:flex items-center gap-2 text-secondary font-label-sm text-xs uppercase tracking-widest bg-surface-container px-3 py-1 rounded-full border border-outline-variant/30">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            <span>Panduranga Archives • Bản ghi số di sản 2025</span>
          </div>
        </div>

        {/* Main Editorial Headline Lockup */}
        <div className="flex flex-col gap-space-xs sm:gap-space-sm max-w-4xl mt-space-xs">
          <div className="flex items-center gap-space-xs text-primary font-label-sm text-xs uppercase tracking-widest font-bold">
            <BookOpen className="h-4 w-4" />
            <span>Khảo cứu • Ký ức bản địa • Văn minh Champa</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-on-surface leading-tight font-semibold tracking-tight">
            Di sản Kể chuyện: Trầm tích Ngàn năm xứ Panduranga
          </h1>
          <p className="font-body-md xl:font-body-lg text-on-surface-variant max-w-3xl leading-relaxed mt-1 text-sm sm:text-base xl:text-lg">
            Không chỉ là những vết tích đóng bụi thời gian, mỗi viên gạch
            Kalan, từng thớ thổ cẩm và thanh âm Saranai đều đang thở, mang
            theo ký ức và linh hồn của nền văn minh Champa rực rỡ.
          </p>
        </div>

        {/* Tầng 1: 3 Trụ cột chính (Tin tức - Lịch sử - Văn hóa) */}
        <div className="pt-space-md border-t border-surface-container-high/60 flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Phân loại chủ đề trọng tâm:</span>
            </div>

            {/* Live Search Input */}
            {onSearchQueryChange && (
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-outline pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchQueryChange(e.target.value)}
                  placeholder="Tìm kiếm bài khảo cứu..."
                  className="w-full pl-9 pr-8 py-1.5 rounded-xl bg-surface-container-lowest text-on-surface text-xs placeholder:text-outline/70 border border-outline-variant/40 focus:outline-none focus:ring-1 focus:ring-primary shadow-sm"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => onSearchQueryChange("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-outline hover:text-on-surface rounded-full cursor-pointer"
                    aria-label="Xóa từ khóa tìm kiếm"
                  >
                    <X className="h-3 w-3" />
                  </button>
                )}
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
            {BLOG_MAIN_CATEGORIES.map((mCat) => {
              const isMainActive = mainCategory === mCat.id;
              return (
                <button
                  key={mCat.id}
                  onClick={() => onSelectMainCategory(mCat.id)}
                  type="button"
                  className={`flex flex-col text-left p-3 rounded-2xl transition-all cursor-pointer border ${
                    isMainActive
                      ? "bg-primary text-on-primary border-primary shadow-md ring-2 ring-primary/20 -translate-y-0.5"
                      : "bg-surface-container-lowest hover:bg-surface-container text-on-surface border-outline-variant/30"
                  }`}
                >
                  <span className="font-title-sm text-sm font-bold">
                    {mCat.label}
                  </span>
                  <span
                    className={`font-body-sm text-[11px] mt-0.5 line-clamp-1 ${
                      isMainActive
                        ? "text-on-primary/80"
                        : "text-on-surface-variant"
                    }`}
                  >
                    {mCat.desc}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tầng 2: Chuyên đề chi tiết (Hiển thị khi ở Tất cả hoặc Văn hóa) */}
          {(mainCategory === "all" || mainCategory === "van-hoa") && (
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-xs text-on-surface-variant font-medium mr-1">
                Chuyên mục chi tiết:
              </span>
              {BLOG_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => onSelectCategory(cat.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer shadow-sm ${
                      isActive
                        ? "bg-secondary text-white ring-2 ring-secondary/20 shadow-sm"
                        : "bg-surface-container-lowest hover:bg-surface-container text-on-surface border border-outline-variant/30"
                    }`}
                    type="button"
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-surface-container-high text-on-surface-variant"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
