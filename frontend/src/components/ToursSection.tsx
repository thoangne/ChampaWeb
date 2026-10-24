import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Star } from "lucide-react";
import { TOURS } from "../data/champaData";

const CATEGORIES = [
  { id: "all", label: "Tất cả" },
  { id: "craft", label: "Nghề cổ" },
  { id: "architecture", label: "Kiến trúc Đền tháp" },
  { id: "ritual", label: "Nghi lễ Thiêng" },
];

export default function ToursSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTours =
    activeCategory === "all"
      ? TOURS
      : TOURS.filter((tour) => tour.category === activeCategory);

  return (
    <section id="hanh-trinh" className="w-full bg-surface py-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile xl:px-margin">
        {/* Section Header with Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
          <div>
            <span className="font-label-md text-label-md uppercase tracking-widest text-primary font-bold block mb-space-xs">
              Hành trình Văn hóa Độc bản
            </span>
            <h2 className="font-serif text-3xl xl:text-4xl text-on-surface font-semibold">
              Chiều sâu Xứ Sở Panduranga
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-space-xs">
              Mỗi lịch trình được thiết kế giới hạn số lượng khách, tập trung
              vào đối thoại chiều sâu cùng nhân chứng sống di sản.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-space-xs bg-surface-container-low p-1.5 rounded-xl border border-outline-variant/30 overflow-x-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
                className={`px-space-md py-2 rounded-lg font-label-md text-label-md whitespace-nowrap transition-all font-medium ${
                  activeCategory === cat.id
                    ? "bg-primary text-on-primary shadow-sm font-semibold"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Columns Journey Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-outline-variant/30"
            >
              {/* Image & Badges */}
              <div className="relative h-64 overflow-hidden bg-surface-container">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={tour.title}
                  src={tour.image}
                  loading="lazy"
                />
                <div className="absolute top-space-md left-space-md">
                  <span
                    className={`px-space-sm py-1 rounded-md font-label-sm text-label-sm uppercase font-bold tracking-wider shadow-sm ${tour.badgeClass}`}
                  >
                    {tour.badge}
                  </span>
                </div>
                <div className="absolute bottom-space-sm right-space-sm bg-inverse-surface/85 backdrop-blur-sm text-inverse-on-surface px-space-sm py-1 rounded-md font-label-md text-label-md flex items-center gap-1.5 text-xs">
                  <Clock className="h-3.5 w-3.5 text-secondary-fixed" />
                  <span>{tour.duration}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-space-lg flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mb-space-xs">
                    <span>{tour.location}</span>
                    <span className="flex items-center gap-1 text-secondary font-semibold">
                      <Star className="h-3.5 w-3.5 fill-current text-secondary" />
                      {tour.rating ?? "4.95"} ({tour.reviewsCount ?? "50"} lượt)
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-on-surface group-hover:text-primary transition-colors font-semibold mt-1">
                    <Link to={`/tour/${tour.slug}`}>{tour.title}</Link>
                  </h3>

                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm leading-relaxed line-clamp-3">
                    {tour.description}
                  </p>

                  {/* Highlights list chips */}
                  <div className="mt-space-md flex flex-wrap gap-space-xs">
                    {tour.chips.map((chip) => (
                      <span
                        key={chip.label}
                        className="px-2.5 py-1 rounded-md bg-surface-container text-on-surface-variant font-body-sm text-[12px]"
                      >
                        {chip.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Heritage Direct Contact & CTA */}
                <div className="pt-space-md mt-space-md flex items-center justify-between border-t border-surface-container-high/60">
                  <div>
                    <span className="font-label-sm text-secondary font-semibold uppercase tracking-wider block text-[11px]">
                      Trải nghiệm độc bản
                    </span>
                    <span className="font-serif text-base xl:text-lg text-primary font-bold">
                      Tư vấn trực tiếp
                    </span>
                  </div>

                  <Link
                    to={`/tour/${tour.slug}`}
                    className="px-space-md py-2.5 rounded-xl bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1.5 font-semibold group/btn"
                  >
                    <span>Chi tiết & Tư vấn</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
