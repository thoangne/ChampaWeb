'use client';

import { HeritageStation } from '../types/heritage';

interface WaypointsSectionProps {
  stations: HeritageStation[];
  selectedStation: HeritageStation;
  onSelectStation: (station: HeritageStation) => void;
}

export default function WaypointsSection({ stations, selectedStation, onSelectStation }: WaypointsSectionProps) {
  return (
    <section className="w-full py-2 flex flex-col gap-3">
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 text-[#8f4e00]">
          <span className="material-symbols-outlined text-[16px]">pin_drop</span>
          <span className="text-[10px] uppercase tracking-widest font-semibold">Bản Đồ Tuyến Khảo Cổ & Văn Hóa</span>
        </div>
        <h2 className="font-serif text-[26px] text-[#241915] font-bold">Cung đường Panduranga</h2>
      </div>

      <div className="relative w-full rounded-xl overflow-hidden shadow-md bg-[#ffe9e2] border border-[#dfc0b8]/40">
        <div
          className="w-full h-56 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUfYzm1NZ4arEZYOjXP-ADVRrL2xvxRYpA11bkxwybvUPyaLDDHcbzdna3ORWQdNhRZ691hmCL8NhJzSAjGU5gLcf6loBzxm9LlDDjY-bDf5UiEUEa8dCbgRQO5NwMElBhJX6SjLnotVvZ4SesvgT8Thywsaeywlcgwf1tW1jO8xFQbtJMa3R7BXOwL3MrVqNKr5Y-maFTUq9d3YpEzE5Uvj6QVImJxg-rCyKTWSyfkqmmjoELc7hWkA')"
          }}
        />

        <div className="p-3 bg-white flex flex-col gap-2">
          <span className="text-[11px] text-[#58423c] italic">
            Bấm vào các trạm di sản để tra cứu quy chuẩn trang phục & giờ viếng thăm:
          </span>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {stations.map((st) => {
              const isActive = selectedStation.id === st.id;
              return (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => onSelectStation(st)}
                  className={`p-2 rounded-lg text-left flex items-start gap-1.5 transition-colors shadow-sm ${
                    isActive ? 'bg-[#972f12] text-white' : 'bg-[#ffe9e2] text-[#241915]'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[18px] flex-shrink-0 mt-0.5 ${isActive ? 'text-white' : 'text-[#8f4e00]'}`}>
                    {st.icon}
                  </span>
                  <div className="min-w-0">
                    <span className="text-[12px] font-bold block truncate">{st.name}</span>
                    <span className={`text-[10px] block truncate ${isActive ? 'opacity-85' : 'text-[#58423c]'}`}>{st.sub}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-1 p-3 rounded-lg bg-[#f9e4dd] flex flex-col gap-1 border border-[#dfc0b8]/60 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-[15px] text-[#972f12] font-bold">{selectedStation.title}</span>
              <span className="text-[11px] text-[#58423c]">{selectedStation.distance}</span>
            </div>
            <p className="text-[12px] text-[#241915] leading-relaxed mt-0.5">{selectedStation.rules}</p>
          </div>
        </div>
      </div>
    </section>
  );
}