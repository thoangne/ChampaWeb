export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/95 backdrop-blur-xl shadow-[0_-4px_20px_rgba(36,25,21,0.06)] xl:hidden">
      <div className="flex justify-around items-center h-16 px-space-xs">
        <a className="flex flex-col items-center justify-center min-w-[64px] h-12 text-primary font-bold transition-colors gap-0.5" href="#">
          <span className="material-symbols-outlined text-[22px]">temple_buddhist</span>
          <span className="font-label-sm text-center leading-none mt-0.5">Trang chủ</span>
        </a>
        <a className="flex flex-col items-center justify-center min-w-[64px] h-12 text-on-surface-variant hover:text-primary transition-colors gap-0.5" href="#">
          <span className="material-symbols-outlined text-[22px]">explore</span>
          <span className="font-label-sm text-center leading-none mt-0.5">Hành trình</span>
        </a>
        <a className="flex flex-col items-center justify-center min-w-[64px] h-12 text-on-surface-variant hover:text-primary transition-colors gap-0.5" href="#">
          <span className="material-symbols-outlined text-[22px]">map</span>
          <span className="font-label-sm text-center leading-none mt-0.5">Bản đồ</span>
        </a>
        <a className="flex flex-col items-center justify-center min-w-[64px] h-12 text-on-surface-variant hover:text-primary transition-colors gap-0.5" href="#">
          <span className="material-symbols-outlined text-[22px]">calendar_month</span>
          <span className="font-label-sm text-center leading-none mt-0.5">Đặt tour</span>
        </a>
      </div>
    </nav>
  );
}