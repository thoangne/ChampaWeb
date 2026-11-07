import {
  Compass,
  Download,
  Info,
  Shirt,
  Sun,
  Camera,
  ShoppingBag,
} from "lucide-react";
import { WAYPOINTS } from "../data/champaData";
import HeritageMap from "./HeritageMap";
import { toast } from "./ui/sonner";

interface WaypointsSectionProps {
  activeStation: number;
  onSelectStation: (id: number) => void;
}

export default function WaypointsSection({
  activeStation,
  onSelectStation,
}: WaypointsSectionProps) {
  const handleDownloadMap = () => {
    toast.success("Đang chuẩn bị sơ đồ tuyến khảo cổ", {
      description: "Bản đồ số độ phân giải cao (PDF) bao gồm tọa độ và cự ly chi tiết.",
    });
  };

  return (
    <section id="ban-do" className="w-full bg-surface-container-low py-space-xl border-y border-surface-container-high/60">
      <div className="max-w-7xl mx-auto px-margin-mobile xl:px-margin">
        {/* Section Header */}
        <div className="max-w-3xl mb-space-xl">
          <span className="font-label-md text-label-md uppercase tracking-widest text-primary font-bold block mb-space-xs">
            Bản đồ Điểm chạm Di sản
          </span>
          <h2 className="font-serif text-3xl xl:text-4xl text-on-surface font-semibold">
            Khảo cứu Tuyến đường Di sản Panduranga
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            Hệ thống 5 điểm mốc thiêng liêng được các nhà khảo cổ học và nhân sĩ
            Chăm tuyển chọn. Chọn điểm dừng để tra cứu cự ly di chuyển và quy
            tắc ứng xử tôn nghiêm.
          </p>
        </div>

        {/* 2-Column Desktop Grid for Map & Stops */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Left Column: Interactive Station List */}
          <div className="lg:col-span-5 flex flex-col gap-space-sm" id="stations-list">
            {WAYPOINTS.map((w) => {
              const isActive = w.id === activeStation;

              return (
                <div
                  key={w.id}
                  onClick={() => onSelectStation(w.id)}
                  className={`p-space-md rounded-2xl shadow-sm cursor-pointer transition-all duration-300 hover:translate-x-1 border ${
                    isActive
                      ? "border-l-4 border-l-primary border-primary/20 bg-surface-container-lowest shadow-md ring-1 ring-primary/10"
                      : "border-outline-variant/30 bg-white/80 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`px-space-xs py-0.5 rounded font-label-sm text-[11px] font-bold uppercase tracking-wider ${
                        w.badgeClass ?? "bg-surface-container text-on-surface"
                      }`}
                    >
                      {w.badge ?? `Trạm 0${w.id}`}
                    </span>
                    <span className="font-body-sm text-xs text-on-surface-variant font-medium">
                      {w.distance}
                    </span>
                  </div>

                  <h4 className="font-title-lg text-lg text-on-surface mt-space-xs font-semibold">
                    {w.title}
                  </h4>

                  <p className="font-body-sm text-sm text-on-surface-variant mt-1 leading-relaxed">
                    {w.rules}
                  </p>

                  <div className="mt-space-sm flex flex-wrap items-center gap-space-md text-[12px] font-label-sm text-secondary pt-1 border-t border-surface-container/60">
                    <span className="flex items-center gap-1">
                      {w.id === 1 && <Shirt className="h-3.5 w-3.5" />}
                      {w.id === 2 && <Compass className="h-3.5 w-3.5" />}
                      {w.id === 3 && <ShoppingBag className="h-3.5 w-3.5" />}
                      {w.id === 4 && <Info className="h-3.5 w-3.5" />}
                      {w.id === 5 && <Camera className="h-3.5 w-3.5" />}
                      <span>{w.district}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Sun className="h-3.5 w-3.5" />
                      <span>{w.openHours}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Styled Archaeological Map Canvas */}
          <div className="lg:col-span-7 lg:sticky lg:top-24 mt-space-md lg:mt-0">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-surface-container-high border border-outline-variant/40">
              <HeritageMap
                activeStation={activeStation}
                onSelectStation={onSelectStation}
              />

              {/* Floating Route Legend Box */}
              <div className="absolute bottom-space-md left-space-md right-space-md sm:right-auto bg-surface/95 backdrop-blur-md p-space-md rounded-xl shadow-xl max-w-sm z-20 border border-outline-variant/30">
                <div className="flex items-center gap-space-xs mb-space-xs">
                  <Compass className="h-5 w-5 text-secondary" />
                  <span className="font-label-md text-xs font-bold uppercase text-on-surface tracking-wider">
                    Cung đường Khảo cứu 1 Ngày
                  </span>
                </div>
                <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
                  Lộ trình gợi ý: Bảo tàng → Po Klong Garai → Bàu Trúc → Mỹ Nghiệp (Tổng cự ly: 38km). Xe trung chuyển hoặc thuê xe máy địa phương hỗ trợ trọn gói.
                </p>
                <div className="mt-space-xs flex items-center justify-between pt-space-xs border-t border-surface-container/60">
                  <span className="font-label-sm text-[11px] text-primary font-bold">
                    Dana Shuttle Bus: 8:30 hàng ngày
                  </span>
                  <button
                    onClick={handleDownloadMap}
                    className="text-primary hover:underline font-label-sm text-[11px] font-bold flex items-center gap-1"
                    type="button"
                  >
                    <Download className="h-3 w-3" />
                    <span>Tải sơ đồ PDF</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
