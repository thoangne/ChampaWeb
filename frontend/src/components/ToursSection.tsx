import Image from 'next/image';
import { CuratedTour } from '../../types/heritage';

interface ToursSectionProps {
  tours: CuratedTour[];
}

export default function ToursSection({ tours }: ToursSectionProps) {
  return (
    <section className="w-full py-2 flex flex-col gap-4" id="featured-tours">
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 text-[#8f4e00]">
          <span className="material-symbols-outlined text-[16px]">verified</span>
          <span className="text-[10px] uppercase tracking-widest font-semibold">Những Chuyến Đi Có Chiều Sâu Văn Hóa</span>
        </div>
        <h2 className="font-serif text-[26px] text-[#241915] font-bold">Hành trình Độc bản</h2>
      </div>

      {tours.map((tour) => (
        <article key={tour.id} className="w-full rounded-xl bg-white shadow-md overflow-hidden flex flex-col border border-[#dfc0b8]/40">
          <div className="relative w-full h-48 bg-[#ffe9e2]">
            <img
              className="w-full h-full object-cover"
              alt={tour.title}
              src={tour.imageUrl}
            />
            <div className="absolute top-2.5 left-2.5 z-10">
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-sm ${tour.tagColor}`}>
                {tour.tag}
              </span>
            </div>
            <div className="absolute bottom-2.5 right-2.5 z-10 bg-[#241915]/85 backdrop-blur-sm text-[#fff8f6] px-2 py-0.5 rounded text-[11px] font-semibold">
              {tour.duration}
            </div>
          </div>

          <div className="p-4 flex flex-col gap-1.5">
            <div className="flex items-baseline justify-between">
              <span className="text-[10px] uppercase text-[#8f4e00] font-semibold">{tour.location}</span>
              <span className="text-[15px] text-[#972f12] font-bold">{tour.price}</span>
            </div>
            <h3 className="text-[17px] font-bold text-[#241915] leading-snug">{tour.title}</h3>
            <p className="text-[13px] text-[#58423c] line-clamp-2 leading-relaxed">{tour.description}</p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {tour.highlights.map((item, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded bg-[#ffe9e2] text-[#972f12] text-[11px] font-medium">
                  {item}
                </span>
              ))}
            </div>

            <button
              type="button"
              className="mt-2 w-full h-10 rounded-lg bg-[#f9e4dd] text-[#972f12] hover:bg-[#972f12] hover:text-white transition-colors text-[13px] font-semibold flex items-center justify-center gap-1"
            >
              <span>Xem chi tiết lịch trình</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
          </div>
        </article>
      ))}
    </section>
  );
}