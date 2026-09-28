'use client';

export default function GuideBanner() {
  const downloadGuide = () => {
    alert('Cẩm nang "Ứng xử Văn hóa khi thăm viếng tháp cổ và làng Chăm Panduranga" (Bản PDF màu) đang được gửi về máy của bạn!');
  };

  return (
    <div className="w-full rounded-xl bg-[#f9e4dd] p-4 shadow-sm flex items-center justify-between gap-3 border border-[#dfc0b8]/40">
      <div className="flex items-start gap-2.5 min-w-0">
        <div className="w-10 h-10 rounded-lg bg-[#972f12]/10 text-[#972f12] flex items-center justify-center flex-shrink-0">
          <span className="material-symbols-outlined text-[22px]">menu_book</span>
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[15px] font-bold text-[#241915] leading-tight">Cẩm nang Ứng xử Văn hóa</span>
          <span className="text-[12px] text-[#58423c] truncate">Quy tắc thăm viếng tháp thiêng & làng Chăm (PDF Miễn phí)</span>
        </div>
      </div>
      <button
        type="button"
        onClick={downloadGuide}
        className="h-10 px-3 rounded bg-white text-[#972f12] text-[11px] font-bold flex items-center gap-1 shadow-sm active:bg-[#972f12] active:text-white transition-colors flex-shrink-0 border border-[#dfc0b8]/40"
      >
        <span className="material-symbols-outlined text-[16px]">download</span>
        <span>Tải về</span>
      </button>
    </div>
  );
}