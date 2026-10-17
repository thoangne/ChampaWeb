import { AudioLines, X, Volume2, Play, Pause } from "lucide-react";
import { useAudio } from "../lib/AudioContext";

interface AudioPlayerBarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function AudioPlayerBar({ isOpen, onClose }: AudioPlayerBarProps) {
  const audioContext = useAudio();
  
  // Ưu tiên trạng thái từ AudioContext, nếu không có thì fallback theo prop
  const isPlaying = audioContext ? audioContext.isAudioPlaying : !!isOpen;
  const showBar = isOpen !== undefined ? isOpen : isPlaying;

  const handleToggle = () => {
    if (audioContext) {
      audioContext.toggleAudio();
    }
  };

  const handleClose = () => {
    if (audioContext) {
      audioContext.pauseAudio();
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <aside
      className={`fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 max-w-sm w-[calc(100%-2rem)] sm:w-full transition-all duration-500 ${
        showBar
          ? "translate-y-0 opacity-100 pointer-events-auto shadow-2xl scale-100"
          : "translate-y-16 opacity-0 pointer-events-none scale-95"
      }`}
    >
      <div className="p-space-md rounded-2xl bg-inverse-surface text-inverse-on-surface shadow-2xl flex items-center gap-space-md border border-white/10">
        {/* Animated Icon & Play/Pause toggle */}
        <button
          onClick={handleToggle}
          type="button"
          title={isPlaying ? "Tạm dừng thanh âm" : "Tiếp tục phát"}
          className="w-12 h-12 rounded-xl bg-primary hover:bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-md transition-transform hover:scale-105 cursor-pointer relative group"
        >
          {isPlaying ? (
            <>
              <AudioLines className="h-6 w-6 text-on-primary animate-pulse group-hover:hidden" />
              <Pause className="h-5 w-5 text-on-primary hidden group-hover:block" />
            </>
          ) : (
            <Play className="h-5 w-5 text-on-primary ml-0.5" />
          )}
        </button>

        {/* Track Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 font-label-sm text-[10px] uppercase text-secondary-fixed font-bold tracking-wider">
            <Volume2 className="h-3 w-3 text-secondary-fixed" />
            <span>Thanh âm Saranai Panduranga</span>
          </div>
          <div className="font-serif text-sm font-semibold truncate text-inverse-on-surface mt-0.5">
            Điệu Kèn Saranai & Trống Ginăng
          </div>
          <div className="font-body-sm text-[11px] text-outline-variant truncate">
            Âm sắc lễ hội Katê truyền thống
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-inverse-on-surface transition-colors shrink-0 cursor-pointer"
          title="Tắt âm thanh"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </aside>
  );
}
