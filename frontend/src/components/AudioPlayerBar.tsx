import { AudioLines, X, Volume2 } from "lucide-react";

interface AudioPlayerBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AudioPlayerBar({ isOpen, onClose }: AudioPlayerBarProps) {
  return (
    <aside
      className={`fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 max-w-sm w-[calc(100%-2rem)] sm:w-full transition-all duration-500 ${
        isOpen
          ? "translate-y-0 opacity-100 pointer-events-auto shadow-2xl scale-100"
          : "translate-y-16 opacity-0 pointer-events-none scale-95"
      }`}
    >
      <div className="p-space-md rounded-2xl bg-inverse-surface text-inverse-on-surface shadow-2xl flex items-center gap-space-md border border-white/10">
        {/* Animated Icon */}
        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-md">
          <AudioLines className="h-6 w-6 text-on-primary animate-pulse" />
        </div>

        {/* Track Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 font-label-sm text-[10px] uppercase text-secondary-fixed font-bold tracking-wider">
            <Volume2 className="h-3 w-3 text-secondary-fixed" />
            <span>Thanh âm Đất Mẹ</span>
          </div>
          <div className="font-serif text-sm font-semibold truncate text-inverse-on-surface mt-0.5">
            Điệu Kèn Saranai Mừng Lễ Katê
          </div>
          <div className="font-body-sm text-[11px] text-outline-variant truncate">
            Nghệ nhân Thập Văn Hải độc tấu
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-inverse-on-surface transition-colors shrink-0"
          title="Đóng thanh nhạc"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </aside>
  );
}
