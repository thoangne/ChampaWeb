'use client';

import Image from 'next/image';

interface HeroSectionProps {
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
}

export default function HeroSection({ isPlayingAudio, onToggleAudio }: HeroSectionProps) {
  return (
    <section className="relative w-full pt-4 pb-2 flex flex-col gap-4">
      <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-[#ffe9e2] text-[#972f12] shadow-sm">
        <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
        <span className="text-[10px] uppercase tracking-wider font-semibold">Khám phá Chiều sâu Di sản Panduranga</span>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#8f4e00] font-bold">Dana • Panduranga</span>
        <h1 className="font-serif text-[28px] leading-[36px] font-bold text-[#241915] tracking-tight mt-1">
          Chạm vào nhịp thở ngàn năm xứ Panduranga
        </h1>
        <p className="text-[15px] leading-[24px] text-[#58423c] mt-1">
          Không đơn thuần là chuyến du ngoạn. Đây là hành trình trở về để lắng nghe đất nung kể chuyện, thổ cẩm hát ca và tâm hồn người Chăm mở lối.
        </p>
      </div>

      <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-md bg-[#f9e4dd]">
        <img
          className="w-full h-full object-cover"
          alt="Tháp Po Klong Garai"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAGi4ZrMVPgv0DZTeazcl9xBmgMPbILKbLeMkQwoseksXokyUW9M8iaEq2PgXSgTLXoKVfxP-ilB2ne6SG-w5Q6ZRxyzWBTgPCBCmbYSD0K5u7NMMn1PTKseCFVnwHYuA4YdPZIm06yUhfhsM3x7mRhtPGfUrVcwgoLq4C_nQo9RVmLzaX070J4RNxYKLU09b5h0udtgbDoV6v_mE1pM-BSTuZT1Af_55SVE1LgIJYLoT5X1V1rwlXBg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#241915]/90 via-[#241915]/30 to-transparent flex flex-col justify-end p-4">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="inline-block w-2 h-2 rounded-full bg-[#8f4e00] animate-ping"></span>
            <span className="text-[10px] uppercase tracking-widest text-[#ffdcc2] font-semibold">Tháp Po Klong Garai • Thế kỷ XII</span>
          </div>
          <p className="text-[16px] leading-[24px] text-white font-serif italic">
            “Gạch đỏ ngàn năm không vữa kết, hồn Chăm vương vấn khói rơm sương.”
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-1">
        <a
          href="#featured-tours"
          className="w-full h-12 rounded-lg bg-[#972f12] text-white text-[14px] font-semibold flex items-center justify-center gap-2 shadow-md active:scale-[0.99] transition-transform"
        >
          <span>Khám phá Hành trình</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </a>

        <button
          type="button"
          onClick={onToggleAudio}
          className="w-full h-12 rounded-lg bg-[#ffe9e2] text-[#58423c] flex items-center justify-between px-4 shadow-sm active:bg-[#f9e4dd] transition-colors"
        >
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#8f4e00] text-[24px]">
              {isPlayingAudio ? 'pause_circle' : 'play_circle'}
            </span>
            <span className="text-[15px] font-semibold text-[#241915]">Lắng nghe thanh âm Panduranga</span>
          </div>
          <div className="flex items-center gap-1 h-5">
            <span className={`w-1 bg-[#8f4e00] rounded-full transition-all ${isPlayingAudio ? 'h-5 animate-pulse' : 'h-3'}`}></span>
            <span className={`w-1 bg-[#972f12] rounded-full transition-all ${isPlayingAudio ? 'h-6 animate-pulse' : 'h-5'}`}></span>
            <span className={`w-1 bg-[#8f4e00] rounded-full transition-all ${isPlayingAudio ? 'h-4 animate-pulse' : 'h-2'}`}></span>
            <span className={`w-1 bg-[#b84628] rounded-full transition-all ${isPlayingAudio ? 'h-5 animate-pulse' : 'h-4'}`}></span>
          </div>
        </button>

        {isPlayingAudio && (
          <div className="text-center py-1">
            <span className="text-[11px] text-[#8f4e00] italic">Đang phát độc tấu Saranai & tiếng trống Paranưng lễ Katê...</span>
          </div>
        )}
      </div>
    </section>
  );
}