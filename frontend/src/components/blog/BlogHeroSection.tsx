import { Link } from "react-router-dom";
import { BookOpen, Search, X } from "lucide-react";
import { BLOG_CATEGORIES } from "../../data/blogData";

interface BlogHeroSectionProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  totalFilteredCount: number;
}

export default function BlogHeroSection({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalFilteredCount,
}: BlogHeroSectionProps) {
  return (
    <section className="w-full bg-surface-container-low/60 pt-space-lg pb-space-xl border-b border-surface-container-high/60">
      <div className="max-w-7xl mx-auto px-margin-mobile xl:px-margin flex flex-col gap-space-lg">
        {/* Breadcrumb & Archival Index Marker */}
        <div className="flex items-center justify-between text-on-surface-variant font-label-md text-label-md flex-wrap gap-2">
          <nav className="flex items-center gap-space-xs tracking-wider uppercase text-xs">
            <Link className="hover:text-primary transition-colors" to="/">
              Trang chủ
            </Link>
            <span className="text-outline/60">/</span>
            <span className="text-primary font-bold">Di sản Kể chuyện</span>
          </nav>
          <div className="hidden md:flex items-center gap-space-sm text-secondary font-label-sm text-label-sm uppercase tracking-widest bg-surface-container px-3 py-1 rounded-full border border-outline-variant/30">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            <span>Panduranga Archives • Bản ghi số di sản 2025</span>
          </div>
        </div>

        {/* Main Editorial Headline Lockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end mt-space-xs">
          <div className="lg:col-span-8 flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-widest font-bold">
              <BookOpen className="h-4 w-4" />
              <span>Khảo cứu • Ký ức bản địa • Văn minh Champa</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl xl:text-5xl text-on-surface leading-[1.15] font-semibold">
              Di sản Kể chuyện: Trầm tích Ngàn năm xứ Panduranga
            </h1>
            <p className="font-body-md xl:font-body-lg text-on-surface-variant max-w-3xl leading-relaxed mt-space-xs text-base xl:text-lg">
              Không chỉ là những vết tích đóng bụi thời gian, mỗi viên gạch
              Kalan, từng thớ thổ cẩm và thanh âm Saranai đều đang thở, mang
              theo ký ức và linh hồn của nền văn minh Champa rực rỡ.
            </p>
          </div>

          {/* Quick Archival Search Bar */}
          <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="relative w-full">
              <input
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-surface-container-lowest text-on-surface placeholder:text-outline text-sm pl-11 pr-10 py-3 rounded-xl shadow-sm border border-outline-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="Tìm tư liệu, truyền thuyết, hoa văn..."
                type="text"
              />
              <Search className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface p-1 cursor-pointer"
                  title="Xóa tìm kiếm"
                  type="button"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <div className="flex items-center justify-between text-outline text-[11px] font-label-sm mt-2 px-1">
              <span>Gợi ý: Tháp Po Rome, Bàu Trúc, Katê</span>
              <span className="font-mono text-secondary font-semibold">
                {totalFilteredCount} TÀI LIỆU
              </span>
            </div>
          </div>
        </div>

        {/* Pill Filters with Item Counts */}
        <div className="pt-space-md flex flex-wrap items-center gap-2.5">
          {BLOG_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
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
  );
}
