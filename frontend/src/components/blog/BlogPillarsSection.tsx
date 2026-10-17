import { Link } from "react-router-dom";
import { ChevronRight, Landmark } from "lucide-react";
import { BLOG_PILLARS } from "../../data/blogData";

export default function BlogPillarsSection() {
  return (
    <section className="w-full bg-surface-container-low py-space-xl border-y border-surface-container-high/60">
      <div className="max-w-7xl mx-auto px-margin-mobile xl:px-margin flex flex-col gap-space-lg">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-xs text-secondary font-label-sm text-xs uppercase tracking-widest font-bold">
              <Landmark className="h-4 w-4" />
              <span>Chuyên đề Tuyển chọn</span>
            </div>
            <h2 className="font-serif text-3xl xl:text-4xl text-on-surface font-semibold">
              Tứ trụ Di sản Sống Panduranga
            </h2>
          </div>
          <p className="font-body-sm text-sm text-on-surface-variant max-w-md leading-relaxed">
            Bốn trụ cột văn hóa nuôi dưỡng mạch nguồn cộng đồng Chăm qua bao
            thế kỷ: Lửa gốm Bàu Trúc, khung cửi Mỹ Nghiệp, lễ hội đền tháp và
            thanh âm thiêng liêng.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {BLOG_PILLARS.map((pillar) => (
            <Link
              key={pillar.id}
              to={`/bai-viet/${pillar.slug}`}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl flex flex-col hover:-translate-y-1.5 transition-all duration-300 group border border-outline-variant/30 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden bg-surface-container-high">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={pillar.title}
                  src={pillar.image}
                  loading="lazy"
                />
                <span
                  className={`absolute top-3 left-3 px-2.5 py-1 rounded-full font-label-sm text-[11px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-md ${pillar.badgeClass}`}
                >
                  {pillar.badge}
                </span>
              </div>

              <div className="p-space-md flex flex-col flex-1 justify-between gap-space-sm">
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-xs text-secondary uppercase font-semibold">
                    {pillar.village}
                  </span>
                  <h3 className="font-title-lg text-base xl:text-lg text-on-surface group-hover:text-primary transition-colors leading-snug font-semibold">
                    {pillar.title}
                  </h3>
                  <p className="font-body-sm text-xs xl:text-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-outline text-xs border-t border-surface-container/60">
                  <span>{pillar.readTime}</span>
                  <span className="text-primary font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Đọc khảo cứu</span>
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
