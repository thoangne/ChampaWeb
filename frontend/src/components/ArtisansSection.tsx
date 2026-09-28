import Image from 'next/image';

export default function ArtisansSection() {
  return (
    <section className="w-full py-2">
      <div className="w-full rounded-xl bg-[#fff1ec] p-4 shadow-md flex flex-col gap-4 border border-[#dfc0b8]/40">
        <div className="flex items-center gap-3">
          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 shadow-sm bg-[#ffe9e2]">
            <img
  className="w-full h-full object-cover"
  alt="Muk Đàng Thị Phan"
  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYK61rpwBLH-q6nuL4Fc2DSMV9wr3oVAQcsOsGtsTGkC7XQtBHaJD10id6leier9i_IEzuuC0kQnfsC3MLmtbGE7hzPWe9tK2NnAvFrri6y_DZnh2jCysg0z4sPZ_05rIDK7P5nOI7S7ab8joooFe403Bv0yGSWQYKvenEBx0Q_nVxOxRkoaaXviW-0R95317JKv8ffX4p9n6b4o3_S6hjDwM5iONcMyTPKoRT2epucw4SpZrWl_E4nA"
/>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] uppercase tracking-widest text-[#8f4e00] font-bold">Nghệ Nhân Di Sản Sống</span>
            <h3 className="font-bold text-[17px] text-[#241915] truncate">Muk Đàng Thị Phan</h3>
            <span className="text-[12px] text-[#58423c]">Làng gốm Bàu Trúc (Hơn 60 năm gắn bó cùng đất sét)</span>
          </div>
        </div>

        <blockquote className="p-3 rounded-lg bg-white text-[14px] text-[#241915] leading-relaxed italic relative border border-[#dfc0b8]/30">
          <span className="material-symbols-outlined absolute right-2 bottom-1 text-[#972f12]/10 text-5xl select-none pointer-events-none">format_quote</span>
          “Người Chăm làm gốm bằng đôi chân đi giật lùi, xoay quanh chiếc trụ đất. Đất dẻo theo tâm người, lửa đỏ theo lòng người.”
        </blockquote>

        <div className="flex items-start gap-2 p-2.5 rounded-lg bg-[#ffe9e2] text-[#58423c]">
          <span className="material-symbols-outlined text-[#972f12] text-[20px] mt-0.5 flex-shrink-0">handshake</span>
          <p className="text-[12px] leading-snug">
            <strong className="text-[#972f12] font-semibold">Cam kết trách nhiệm Dana:</strong> 70% nguồn thu được hoàn lưu trực tiếp đến các hộ gia đình nghệ nhân và quỹ văn hóa thiếu nhi Chăm Panduranga.
          </p>
        </div>
      </div>
    </section>
  );
}