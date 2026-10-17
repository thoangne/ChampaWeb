import { Maximize2, Camera } from "lucide-react";
import type { BlogDetailArticle } from "../../data/blogDetailData";

interface BlogDetailHeroProps {
  article: BlogDetailArticle;
  onOpenLightbox?: (imgUrl: string) => void;
}

export default function BlogDetailHero({
  article,
  onOpenLightbox,
}: BlogDetailHeroProps) {
  return (
    <section className="w-full px-margin-mobile xl:px-margin mt-space-md sm:mt-space-lg mb-space-lg sm:mb-space-xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xs">
        {/* Panoramic Curated Cover Image */}
        <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/30 group bg-surface-container-high">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt={article.coverCaption || article.title}
            src={article.coverImage}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none"></div>

          {/* Quick Lightbox Action Button */}
          {onOpenLightbox && (
            <button
              onClick={() => onOpenLightbox(article.coverImage)}
              className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/60 hover:bg-black/80 backdrop-blur-md text-white transition-all shadow-lg border border-white/20 cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
              title="Phóng to ảnh độ phân giải cao"
              type="button"
            >
              <Maximize2 className="h-4 w-4" />
              <span className="hidden sm:inline">Xem ảnh gốc</span>
            </button>
          )}

          {/* Bottom Captions */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col md:flex-row md:items-end justify-between gap-space-sm text-on-primary">
            <div className="max-w-2xl">
              <span className="px-3 py-1 rounded-full bg-primary text-on-primary font-label-sm text-[11px] uppercase tracking-widest font-semibold mb-2 inline-flex items-center gap-1.5 shadow-md">
                <Camera className="h-3 w-3" />
                <span>Ảnh Điền Dã Chuyên Sâu</span>
              </span>
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-surface drop-shadow-md font-semibold leading-snug">
                {article.title}
              </h2>
              <p className="font-body-sm text-xs sm:text-sm text-surface-variant/90 drop-shadow mt-1 line-clamp-2">
                {article.coverCaption}
              </p>
            </div>
            <div className="text-left md:text-right text-surface-variant/90 text-xs self-start md:self-auto font-medium bg-black/40 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-white/10 shrink-0">
              {article.coverSource}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
