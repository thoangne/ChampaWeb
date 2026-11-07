import { ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { ARTISANS } from "../data/champaData";

export default function ArtisansSection() {
  return (
    <section id="nghe-nhan" className="w-full bg-surface py-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile xl:px-margin">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-space-xl">
          <div className="max-w-3xl">
            <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold block mb-space-xs">
              Người Giữ Lửa Ngàn Năm
            </span>
            <h2 className="font-serif text-3xl xl:text-4xl text-on-surface font-semibold">
              Góc Nghệ Nhân: Ký ức trong đôi bàn tay
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
              Họ không chỉ làm nghề để mưu sinh. Từng đường vuốt đất, từng lượt
              thoi dệt là hành trình gìn giữ danh dự và linh hồn của cả một dân tộc.
            </p>
          </div>
          <Link
            to="/nghe-nhan"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-primary font-bold text-xs shrink-0 transition-colors shadow-xs"
          >
            <span>Tất cả nghệ nhân</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Feature Split Section: Spotlight Master Artisans */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          {ARTISANS.map((artisan) => (
            <div
              key={artisan.name}
              className="p-space-lg rounded-2xl bg-surface-container-low shadow-md flex flex-col justify-between border border-outline-variant/30 hover:shadow-lg transition-all"
            >
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-space-md mb-space-md items-center">
                  <div className="sm:col-span-5 h-56 rounded-xl overflow-hidden bg-surface-container-high shadow-inner">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      alt={artisan.name}
                      src={artisan.image}
                      loading="lazy"
                    />
                  </div>

                  <div className="sm:col-span-7">
                    <span
                      className={`px-space-xs py-0.5 rounded font-label-sm text-[11px] uppercase font-bold tracking-wider ${artisan.badgeClass}`}
                    >
                      {artisan.title}
                    </span>
                    <h3 className="font-serif text-2xl text-on-surface mt-space-xs font-semibold">
                      {artisan.name}
                    </h3>
                    <p className="font-label-md text-xs text-secondary mt-0.5 font-semibold">
                      {artisan.experience}
                    </p>

                    <div className="mt-space-sm p-space-sm rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/20 relative">
                      <Quote className="absolute right-2 top-2 h-5 w-5 text-primary/15" />
                      <p className="font-body-sm text-xs xl:text-sm text-on-surface-variant italic leading-relaxed pr-3">
                        {artisan.quote}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="font-body-md text-sm xl:text-base text-on-surface-variant leading-relaxed">
                  {artisan.bio}
                </p>
              </div>

              <div className="pt-space-md mt-space-md flex flex-wrap items-center justify-between gap-2 border-t border-surface-container/60">
                <span className="font-body-sm text-xs text-on-surface-variant font-medium">
                  {artisan.schedule}
                </span>
                <Link
                  to={`/nghe-nhan#artisan-${artisan.id}`}
                  className="font-label-md text-xs text-primary font-bold hover:underline flex items-center gap-1"
                >
                  <span>Xem chân dung chi tiết</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
