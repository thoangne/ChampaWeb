export default function TestimonialsSection() {
  return (
    <section className="w-full py-2 flex flex-col gap-3">
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 text-[#8f4e00]">
          <span className="material-symbols-outlined text-[16px]">favorite</span>
          <span className="text-[10px] uppercase tracking-widest font-semibold">Lắng Nghe Lữ Khách</span>
        </div>
        <h2 className="font-serif text-[26px] text-[#241915] font-bold">Cảm nhận từ trái tim</h2>
      </div>

      <div className="w-full rounded-xl bg-white p-4 shadow-sm flex flex-col gap-1 border border-[#dfc0b8]/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#fea047] text-[#6d3a00] flex items-center justify-center font-bold text-xs">
              TM
            </div>
            <div>
              <span className="font-bold text-[14px] text-[#241915] block leading-tight">Thảo My</span>
              <span className="text-[11px] text-[#58423c]">TP. Hồ Chí Minh</span>
            </div>
          </div>
          <div className="flex text-[#8f4e00]">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            ))}
          </div>
        </div>
        <p className="text-[13px] text-[#241915] italic mt-1 leading-relaxed">
          “Đi tour của Dana, lần đầu tiên mình hiểu vì sao phụ nữ Chăm lại đi lùi quanh khối đất để làm gốm. Cảm xúc trân quý vô cùng! Cảm giác như được chạm vào mạch nguồn văn hóa chứ không phải cưỡi ngựa xem hoa.”
        </p>
      </div>

      <div className="w-full rounded-xl bg-white p-4 shadow-sm flex flex-col gap-1 border border-[#dfc0b8]/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#526e87] text-white flex items-center justify-center font-bold text-xs">
              DM
            </div>
            <div>
              <span className="font-bold text-[14px] text-[#241915] block leading-tight">David Miller</span>
              <span className="text-[11px] text-[#58423c]">Melbourne, Úc</span>
            </div>
          </div>
          <div className="flex text-[#8f4e00]">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            ))}
          </div>
        </div>
        <p className="text-[13px] text-[#241915] italic mt-1 leading-relaxed">
          “Authentic and deeply respectful. Not a tourist trap, but a real connection with living heritage. The sound of the Saranai horn at dusk next to the ancient Kalan tower will stay with me forever.”
        </p>
      </div>
    </section>
  );
}