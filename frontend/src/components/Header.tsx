interface HeaderProps {
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
}

export default function Header({ isPlayingAudio, onToggleAudio }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#fff8f6]/85 backdrop-blur-xl shadow-[0_2px_12px_rgba(36,25,21,0.05)]">
      <div className="h-16 px-4 flex items-center justify-between gap-2 max-w-xl mx-auto w-full">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <div className="relative h-8 w-8 flex-shrink-0 flex items-center justify-center">
            <img
              alt="Logo Dana Di sản Chăm"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA8pmruKOFThAklkUBt3Dr_Efa4HrMrgSyhUnMLwlzXi2AfaZ6MJo900yTWgO87EFl4toG7ZcFPI1GtRNfkcZpSNNGvw9HusC53kNh4_CUYnlJr4TU9zHMhRZemrVjSY1SzRoTJfM5GWHcDadv-UYF-jDtdhEAci3gnsfPk6ut7yXAwF-yhzgvPZ0hmEmCOSYPIIcJY8Nicufsa3RIh6RFJ3jX6UBfNhYIq86WF_VdNQHu6Hi2LS8Rpg"
              className="h-8 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-xl text-[#972f12] font-bold tracking-tight leading-none">Dana</span>
              <span className="text-[10px] uppercase tracking-wider text-[#8f4e00] font-semibold">Panduranga</span>
            </div>
            <span className="text-[#58423c] truncate text-[11px] leading-tight">Di sản Chăm • Cổng Di Sản</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 flex-shrink-0">
          <button
            type="button"
            onClick={onToggleAudio}
            aria-label="Âm nhạc Katê Saranai Paranưng"
            className="h-10 px-3 rounded-full bg-[#ffe9e2] flex items-center gap-1.5 text-[#972f12] hover:bg-[#f9e4dd] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">graphic_eq</span>
            <span className="text-xs hidden sm:inline text-[#58423c]">Katê</span>
          </button>
          <button
            type="button"
            aria-label="Menu văn hóa"
            className="w-10 h-10 rounded-lg flex items-center justify-center text-[#241915] hover:text-[#972f12] hover:bg-[#ffe9e2] transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-[#972f12] flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined text-white text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}