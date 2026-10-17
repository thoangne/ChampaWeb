import { ArrowRight, Leaf, Quote } from "lucide-react";
import { ARTISANS } from "../data/champaData";
import { toast } from "./ui/sonner";

export default function ArtisansSection() {
  const handleViewReport = () => {
    toast.success("Báo cáo Hoàn lưu Sinh kế 2024", {
      description: "70% doanh thu đã được phân bổ cho 140 hộ gia đình nghệ nhân và 3 lớp truyền dạy chữ Akhar Thrah.",
    });
  };

  return (
    <section id="nghe-nhan" className="w-full bg-surface py-space-xl">
      <div className="max-w-7xl mx-auto px-margin-mobile xl:px-margin">
        {/* Section Header */}
        <div className="max-w-3xl mb-space-xl">
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

        {/* Feature Split Section: Spotlight 2 Master Artisans */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter mb-space-xl">
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
                <button
                  onClick={() =>
                    toast(`Câu chuyện về ${artisan.name}`, {
                      description: `Đang kết nối trang tư liệu phóng sự độc bản về ${artisan.village}.`,
                    })
                  }
                  className="font-label-md text-xs text-primary font-bold hover:underline flex items-center gap-1"
                  type="button"
                >
                  <span>Đọc câu chuyện</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Regenerative Tourism Commitment Banner */}
        <div className="p-space-lg xl:p-space-xl rounded-2xl bg-gradient-to-r from-primary via-primary-container to-secondary text-on-primary shadow-xl flex flex-col md:flex-row items-center justify-between gap-space-lg">
          <div className="flex items-center gap-space-md">
            <div className="w-14 h-14 rounded-2xl bg-on-primary/10 flex items-center justify-center shrink-0 border border-white/20">
              <Leaf className="h-8 w-8 text-primary-fixed" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <h4 className="font-serif text-xl xl:text-2xl font-bold">
                  Cam kết Du lịch Chữa lành & Tái tạo Xứ Chăm
                </h4>
              </div>
              <p className="font-body-md text-sm xl:text-base text-on-primary/90 max-w-2xl leading-relaxed">
                100% rác thải nhựa bị loại bỏ trong mọi tour. Khách được trang bị
                bình nước gốm Bàu Trúc và túi thổ cẩm Mỹ Nghiệp tái sử dụng làm
                quà lưu niệm vĩnh cửu.
              </p>
            </div>
          </div>

          <button
            onClick={handleViewReport}
            className="px-space-lg py-3 rounded-xl bg-surface text-on-surface font-label-lg text-sm xl:text-base whitespace-nowrap shadow-md hover:bg-surface-container transition-all font-semibold hover:shadow-lg"
            type="button"
          >
            Xem Báo cáo Hoàn lưu 2024
          </button>
        </div>
      </div>
    </section>
  );
}
