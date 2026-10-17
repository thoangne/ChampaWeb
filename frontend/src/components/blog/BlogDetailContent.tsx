import {
  ArrowUp,
  CheckCircle2,
  Pause,
  Play,
  Quote,
  Scale,
  Volume2,
} from "lucide-react";
import { useAudio } from "../../lib/AudioContext";
import type { BlogDetailArticle } from "../../data/blogDetailData";
import { toast } from "../ui/sonner";

interface BlogDetailContentProps {
  article: BlogDetailArticle;
  fontSize: number;
}

export default function BlogDetailContent({
  article,
  fontSize,
}: BlogDetailContentProps) {
  const { isAudioPlaying, toggleAudio } = useAudio();

  const handleToggleAudio = () => {
    toggleAudio();
    const nextState = !isAudioPlaying;
    if (nextState) {
      toast.success("Đang phát thuyết minh bản địa", {
        description: article.audioTitle,
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <article className="lg:col-span-8 flex flex-col gap-space-xl">
      {/* 1. Mini Audio Thuyết minh Banner */}
      <div className="bg-surface-container rounded-2xl p-4 sm:p-5 shadow-sm border border-outline-variant/40 flex items-center gap-4">
        <button
          onClick={handleToggleAudio}
          className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all shadow-md cursor-pointer ${
            isAudioPlaying
              ? "bg-primary text-on-primary ring-4 ring-primary/20 scale-105"
              : "bg-surface-container-highest hover:bg-primary hover:text-on-primary text-on-surface"
          }`}
          title={isAudioPlaying ? "Tạm dừng" : "Phát thuyết minh"}
          type="button"
        >
          {isAudioPlaying ? (
            <Pause className="h-5 w-5 fill-current" />
          ) : (
            <Play className="h-5 w-5 fill-current ml-0.5" />
          )}
        </button>

        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="font-semibold text-on-surface truncate flex items-center gap-1.5">
              <Volume2 className="h-4 w-4 text-secondary shrink-0" />
              <span>{article.audioTitle}</span>
            </span>
            <span className="font-mono text-secondary font-semibold shrink-0 ml-2">
              {article.audioDuration}
            </span>
          </div>
          <p className="font-body-sm text-xs text-on-surface-variant truncate">
            Giọng đọc thuyết minh truyền cảm kèm âm hưởng nhạc cụ dân tộc Saranai - Paranưng
          </p>
        </div>
      </div>

      {/* 2. Trích dẫn Văn bia hoặc Cổ thư (nếu có) */}
      {article.epigraphyQuote && (
        <div className="bg-surface-container-low rounded-2xl p-space-md sm:p-space-lg shadow-sm relative overflow-hidden border border-outline-variant/40">
          <div className="absolute -right-4 -bottom-6 text-primary/10 select-none pointer-events-none">
            <Quote className="w-32 h-32" />
          </div>
          <div className="flex items-start gap-space-sm relative z-10">
            <Quote className="h-8 w-8 text-primary shrink-0 mt-1" />
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-sm text-xs uppercase tracking-widest text-primary font-bold">
                Trích dẫn Văn bia Cổ & Ký ức Bản địa
              </span>
              {article.epigraphyQuote.chamText && (
                <div className="font-serif text-lg text-secondary tracking-widest py-1 select-none">
                  {article.epigraphyQuote.chamText}
                </div>
              )}
              <p className="font-serif text-lg sm:text-xl text-on-surface italic leading-relaxed">
                "{article.epigraphyQuote.translation}"
              </p>
              <span className="font-body-sm text-xs sm:text-sm text-on-surface-variant font-medium mt-1">
                — {article.epigraphyQuote.source}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 3. Các chương nội dung khảo cứu (Chapters) */}
      {article.chapters.map((chapter, index) => {
        const isFirstChapter = index === 0;

        return (
          <section
            key={chapter.id}
            id={chapter.id}
            className="scroll-mt-24 flex flex-col gap-space-md"
          >
            <div className="flex items-center gap-space-xs">
              <span className="font-mono text-primary font-bold text-lg">
                {chapter.number} /
              </span>
              <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-bold">
                {chapter.categoryTag}
              </span>
            </div>

            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-on-surface font-semibold leading-snug">
              {chapter.title}
            </h2>

            <div
              className="text-on-surface-variant space-y-space-md leading-relaxed text-justify"
              style={{ fontSize: `${fontSize}px` }}
            >
              {chapter.content.map((paragraph, pIdx) => {
                // Drop Cap cho chữ cái đầu tiên của đoạn mở đầu
                if (isFirstChapter && pIdx === 0 && paragraph.length > 0) {
                  const firstLetter = paragraph[0];
                  const restText = paragraph.slice(1);
                  return (
                    <p key={pIdx}>
                      <span className="float-left text-5xl sm:text-6xl leading-[0.8] pr-3 pt-1 font-serif font-bold text-primary select-none">
                        {firstLetter}
                      </span>
                      {restText}
                    </p>
                  );
                }

                return <p key={pIdx}>{paragraph}</p>;
              })}
            </div>

            {/* Quote đính kèm trong chương (nếu có) */}
            {chapter.quote && (
              <div className="bg-surface-container rounded-2xl p-space-md my-2 border-l-4 border-primary">
                <p className="font-serif text-base sm:text-lg text-on-surface italic leading-relaxed">
                  "{chapter.quote.text}"
                </p>
                <div className="text-right text-xs text-on-surface-variant font-semibold mt-2">
                  — {chapter.quote.author} {chapter.quote.source ? `(${chapter.quote.source})` : ""}
                </div>
              </div>
            )}

            {/* Highlight Box / Comparison Box (nếu có) */}
            {chapter.highlightBox && (
              <div className="bg-surface-container-high rounded-2xl p-space-md sm:p-space-lg shadow-sm my-space-sm border border-outline-variant/40">
                <span className="font-title-md text-sm sm:text-base font-semibold text-on-surface flex items-center gap-2 mb-2">
                  <Scale className="h-4 w-4 text-secondary" />
                  <span>{chapter.highlightBox.title}</span>
                </span>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mb-3">
                  {chapter.highlightBox.description}
                </p>
                {chapter.highlightBox.details && (
                  <ul className="space-y-2">
                    {chapter.highlightBox.details.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-on-surface">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </section>
        );
      })}

      {/* 4. Luận điểm cốt lõi (Key Takeaways) */}
      <div className="bg-surface-container-low rounded-2xl p-space-md sm:p-space-lg border border-primary/20 shadow-sm">
        <div className="flex items-center gap-2 text-primary font-serif font-bold text-lg mb-3">
          <CheckCircle2 className="h-5 w-5" />
          <span>Luận Điểm Nghiên Cứu Cốt Lõi</span>
        </div>
        <div className="space-y-2.5">
          {article.keyTakeaways.map((takeaway, tIdx) => (
            <div key={tIdx} className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {tIdx + 1}
              </span>
              <p className="font-body-md text-sm sm:text-base text-on-surface leading-relaxed">
                {takeaway}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Nút cuộn nhanh lên đầu trang */}
      <div className="pt-space-md flex items-center justify-between border-t border-surface-container-high/60">
        <span className="font-label-sm text-xs text-on-surface-variant">
          Kho tàng Panduranga Archives • Bản ghi số di sản 2025
        </span>
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline cursor-pointer p-1"
          type="button"
        >
          <span>Về đầu trang</span>
          <ArrowUp className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
}
