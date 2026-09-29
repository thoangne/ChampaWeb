import { useState } from 'react';
import { ArrowRight, PauseCircle, PlayCircle, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../data/champaData';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

export default function HeroSection() {
  const [playing, setPlaying] = useState(false);
  const PlayIcon = playing ? PauseCircle : PlayCircle;

  return (
    <section className="relative w-full px-margin-mobile pt-space-md pb-space-lg flex flex-col gap-space-md lg:gap-6">
      <Badge className="self-start px-space-sm py-1 uppercase tracking-wider shadow-sm">
        <Sparkles className="h-[15px] w-[15px] fill-current" />
        Khám phá Chiều sâu Di sản Panduranga
      </Badge>

      <div className="flex flex-col gap-space-xs lg:gap-2">
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm lg:text-sm uppercase tracking-[0.2em] text-secondary font-bold">Dana • Panduranga</span>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:text-5xl lg:text-[46px] text-on-surface tracking-tight leading-tight mt-1">
            Chạm vào nhịp thở ngàn năm xứ Panduranga
          </h1>
        </div>
        <p className="font-body-md text-body-md md:text-lg text-on-surface-variant leading-relaxed">
          Không đơn thuần là chuyến du ngoạn. Đây là hành trình trở về để lắng nghe đất nung kể chuyện, thổ cẩm hát ca và tâm hồn người Chăm mở lối.
        </p>
      </div>

      {/* Ảnh tự động thay đổi chiều cao: điện thoại (300px) -> tablet (400px) -> PC (480px) */}
      <div className="relative w-full rounded-xl overflow-hidden shadow-md bg-surface-container-high h-[300px] md:h-[400px] lg:h-[480px]">
        <img className="w-full h-full object-cover" alt="Tháp Po Klong Garai lúc hoàng hôn" src={HERO_IMAGE} />
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/30 to-transparent flex flex-col justify-end p-space-md lg:p-8">
          <div className="flex items-center gap-space-xs mb-1 lg:mb-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary animate-ping" />
            <span className="font-label-sm text-label-sm lg:text-[13px] uppercase tracking-widest text-secondary-fixed">Tháp Po Klong Garai • Thế kỷ XII</span>
          </div>
          <p className="font-title-md text-title-md lg:text-2xl text-on-primary font-serif italic">
            “Gạch đỏ ngàn năm không vữa kết, hồn Chăm vương vấn khói rơm sương.”
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-space-xs pt-1 lg:gap-3">
        <Button asChild className="w-full md:h-14 lg:text-base">
          <a href="#featured-tours">
            Khám phá Hành trình
            <ArrowRight className="h-[18px] w-[18px] lg:h-5 lg:w-5" />
          </a>
        </Button>
        <Button variant="secondary" className="w-full justify-between px-space-md md:h-14 lg:text-base" onClick={() => setPlaying((p) => !p)}>
          <span className="flex items-center gap-2">
            <PlayIcon className="h-[22px] w-[22px] lg:h-6 lg:w-6 text-secondary" />
            <span className="font-title-md text-title-md lg:text-base text-on-surface">Lắng nghe thanh âm Panduranga</span>
          </span>
          <span className="flex items-center gap-1 h-5 lg:h-6">
            <span className={`w-1 bg-secondary rounded-full transition-all ${playing ? 'h-4 animate-pulse' : 'h-3'}`} />
            <span className={`w-1 bg-primary rounded-full transition-all ${playing ? 'h-6' : 'h-5'}`} />
            <span className={`w-1 bg-secondary rounded-full transition-all ${playing ? 'h-5 animate-pulse' : 'h-2'}`} />
            <span className={`w-1 bg-primary-container rounded-full transition-all ${playing ? 'h-3' : 'h-4'}`} />
          </span>
        </Button>
        {playing && (
          <p className="text-center py-1 font-label-sm text-label-sm lg:text-sm text-secondary italic animate-in fade-in">
            Đang phát độc tấu Saranai &amp; tiếng trống Paranưng lễ Katê...
          </p>
        )}
      </div>
    </section>
  );
}