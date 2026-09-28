export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full z-50 bg-[#fff8f6]/90 backdrop-blur-xl shadow-[0_-4px_20px_rgba(36,25,21,0.06)] border-t border-[#dfc0b8]/40">
      <div className="flex justify-around items-center h-16 px-2 max-w-xl mx-auto w-full">
        <a href="#" className="flex flex-col items-center justify-center min-w-[64px] h-12 text-[#972f12] font-bold gap-0.5">
          <span className="material-symbols-outlined text-[22px]">temple_buddhist</span>
          <span className="text-[10px] text-center leading-none mt-0.5">Cổng di sản</span>
        </a>
        <a href="#featured-tours" className="flex flex-col items-center justify-center min-w-[64px] h-12 text-[#58423c] hover:text-[#972f12] transition-colors gap-0.5">
          <span className="material-symbols-outlined text-[22px]">explore</span>
          <span className="text-[10px] text-center leading-none mt-0.5">Hành trình</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center min-w-[64px] h-12 text-[#58423c] hover:text-[#972f12] transition-colors gap-0.5">
          <span className="material-symbols-outlined text-[22px]">map</span>
          <span className="text-[10px] text-center leading-none mt-0.5">Bản đồ số</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center min-w-[64px] h-12 text-[#58423c] hover:text-[#972f12] transition-colors gap-0.5">
          <span className="material-symbols-outlined text-[22px]">calendar_month</span>
          <span className="text-[10px] text-center leading-none mt-0.5">Đặt tour</span>
        </a>
      </div>
    </nav>
  );
}