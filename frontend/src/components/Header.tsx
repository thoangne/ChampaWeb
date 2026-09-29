export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 pt-safe bg-surface/90 backdrop-blur-xl shadow-[0_2px_12px_rgba(36,25,21,0.06)]">
      <div className="h-16 xl:h-20 max-w-7xl mx-auto px-margin-mobile xl:px-margin flex items-center justify-between gap-space-sm xl:gap-space-md">
        
        <div className="flex items-center gap-space-sm xl:gap-space-md flex-1 xl:flex-none">
          {/* Mobile Menu Button */}
          <button aria-label="Menu" className="w-10 h-10 rounded-lg flex xl:hidden items-center justify-center text-on-surface hover:text-primary hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>
          
          {/* Logo */}
          <a className="flex items-center gap-space-sm group" href="#">
            <img alt="Dana Champa Logo" className="h-8 xl:h-10 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1XIExWz2uZU00YM6XJkcplYDWjobd6LelTOjUEGYCv1n2QLNjkzBTHI02cyuFEm4ZxIdM4958QQTZySnbAfDlSl9ziiY27sSydPIwBpkCkn0U3HMBdyxZInzn6klLPhBGAX1hV0auedP-tXROUY9l4vz8VaICyZmB5V2Qu4z3g-0CVXlS3V_eAhUZvTX9L9nfzPQ_Iw0C_Vg3fIjSDvLaRbaSkboQ2R_-9m84B4E0FwskRtqgtPfhURCw-q" />
            <div className="flex flex-col text-left">
              <span className="font-label-sm text-[10px] xl:text-label-sm uppercase tracking-widest text-secondary">Panduranga Heritage</span>
              <span className="font-title-md xl:font-headline-sm text-title-md xl:text-headline-sm text-on-surface leading-tight group-hover:text-primary transition-colors">Dana Champa</span>
            </div>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-space-lg">
          <a aria-current="page" className="transition-colors py-space-xs text-primary font-bold" href="#">Trang chủ</a>
          <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-space-xs" href="#">Hành trình Độc bản</a>
          <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-space-xs" href="#">Di sản Kể chuyện</a>
          <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-space-xs" href="#">Bản đồ Văn hóa</a>
          <a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-space-xs" href="#">Góc Nghệ nhân</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-space-xs xl:gap-space-sm">
          <button className="hidden md:flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors">
            <span className="material-symbols-outlined text-secondary text-[20px]">graphic_eq</span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant hidden xl:inline">Thanh âm Saranai</span>
          </button>
          <button className="w-10 h-10 xl:w-9 xl:h-9 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>
          <a className="hidden sm:inline-flex items-center justify-center px-space-md py-2 bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg rounded-lg shadow-md transition-all" href="#">Đồng hành cùng Dana</a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm ml-1">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}