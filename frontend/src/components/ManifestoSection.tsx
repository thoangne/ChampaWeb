export default function ManifestoSection() {
  return (
    <section className="w-full py-2">
      <div className="relative w-full rounded-xl bg-[#fff1ec] p-4 shadow-sm overflow-hidden flex flex-col gap-4 border border-[#dfc0b8]/40">
        <div className="w-full flex justify-between items-center text-[#972f12]/40">
          <svg className="w-full h-2.5" fill="currentColor" preserveAspectRatio="none" viewBox="0 0 320 10">
            <polygon points="0,10 5,0 10,10 15,0 20,10 25,0 30,10 35,0 40,10 45,0 50,10 55,0 60,10 65,0 70,10 75,0 80,10 85,0 90,10 95,0 100,10 105,0 110,10 115,0 120,10 125,0 130,10 135,0 140,10 145,0 150,10 155,0 160,10 165,0 170,10 175,0 180,10 185,0 190,10 195,0 200,10 205,0 210,10 215,0 220,10 225,0 230,10 235,0 240,10 245,0 250,10 255,0 260,10 265,0 270,10 275,0 280,10 285,0 290,10 295,0 300,10 305,0 310,10 315,0 320,10"></polygon>
          </svg>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#972f12] text-[20px]">spa</span>
            <span className="text-[10px] uppercase tracking-widest text-[#972f12] font-bold">Triết Lý Dana</span>
          </div>
          <p className="text-[14px] text-[#241915] leading-relaxed italic mt-1">
            “Chúng tôi tin rằng, mỗi viên gạch tháp Chăm đều có linh hồn, mỗi vệt khói gốm Bàu Trúc đều cất giấu ký ức tiền nhân. Dana không dẫn bạn đi check-in vội vã. Chúng tôi đưa bạn ngồi xuống cùng các Muk, uống ngụm trà mát, tự tay vuốt thớ đất sét dẻo quánh và thấu hiểu một nền văn hóa bằng cả trái tim trân kính.”
          </p>
        </div>

        <div className="grid grid-cols-3 gap-1 bg-[#ffe9e2] rounded-lg p-2 text-center">
          <div className="flex flex-col items-center">
            <span className="font-serif text-[22px] text-[#972f12] font-bold">100%</span>
            <span className="text-[10px] text-[#58423c] leading-tight mt-0.5">Nghệ nhân bản địa</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-[22px] text-[#8f4e00] font-bold">02</span>
            <span className="text-[10px] text-[#58423c] leading-tight mt-0.5">Làng cổ ĐNA</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-[22px] text-[#39566d] font-bold">UNESCO</span>
            <span className="text-[10px] text-[#58423c] leading-tight mt-0.5">Di sản bảo tồn</span>
          </div>
        </div>
      </div>
    </section>
  );
}