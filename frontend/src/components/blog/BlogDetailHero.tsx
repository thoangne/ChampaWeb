export default function BlogDetailHero() {
  return (
    <section className="w-full px-margin-mobile xl:px-margin mt-space-md mb-space-xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
        {/* Panoramic Brick Temple Image */}
        <div className="relative w-full h-[380px] md:h-[540px] rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/30 group">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt="Toàn cảnh cụm tháp Kalan Po Klong Garai ráng chiều hoàng hôn Đồi Trầu"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7XPGZZpV39JwKr39VX7oqm24fXTeq5cF10rpQpUdEKf_3urrVONYW10t2x1S_E3ovUJG7BkbVI6mVXvBpY6Y4rAwoU5II3UM01y4enAOS3rpjiYTgW5QikItO09gUNzYsBytXNWIIJZp_0sf2X6tqsMqd4rppHgK-rvfk1oieIk1ERb41Mj5l9NL09UZs_az1UGDnOmL6Z1F-st_-Bpa27b_T0YiH9400CjbcbfZQZeZk83gkVSD9eA"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

          <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-space-sm text-on-primary">
            <div className="max-w-2xl">
              <span className="px-3 py-1 rounded-full bg-primary text-on-primary font-label-sm text-xs uppercase tracking-widest font-semibold mb-2 inline-block shadow-md">
                Cụm Đền Tháp Trung Tâm
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-surface drop-shadow-md font-semibold">
                Kalan Po Klong Garai trong sắc hoàng hôn Đồi Trầu
              </h2>
              <p className="font-body-sm text-xs sm:text-sm text-surface-variant/90 drop-shadow mt-1">
                Toàn cảnh tháp chính cao hơn 20.5 mét xây dựng từ thế kỷ XIII, nơi từng khối gạch đỏ nung hòa hợp kỳ vĩ cùng sa thạch điêu khắc.
              </p>
            </div>
            <div className="text-right text-surface-variant/90 text-xs self-start md:self-auto font-medium">
              Ảnh: Kho tư liệu Bảo tàng Điêu khắc Chăm & Dana Champa
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
