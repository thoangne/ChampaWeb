import { LOGO_URL } from '../data/champaData';
import { Button } from '../components/ui/button';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { AudioLines, Menu, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_2px_12px_rgba(36,25,21,0.05)]">
      <div className="h-16 px-margin-mobile flex items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-sm min-w-0 flex-1">
          <img alt="Logo Dana Di sản Chăm" className="h-8 w-auto object-contain flex-shrink-0" src={LOGO_URL} />
          <div className="flex flex-col min-w-0">
            <div className="flex items-baseline gap-space-xs">
              <span className="font-headline-sm text-headline-sm text-primary font-bold tracking-tight leading-none">Dana</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Panduranga</span>
            </div>
            <span className="font-body-sm text-body-sm text-on-surface-variant truncate text-[11px] leading-tight">Di sản Chăm • Cổng Di Sản</span>
          </div>
        </div>
        <div className="flex items-center gap-space-xs flex-shrink-0">
          <Button variant="secondary" aria-label="Âm nhạc Katê Saranai Paranưng" className="h-11 rounded-full px-space-sm text-primary">
            <AudioLines className="h-5 w-5" />
            <span className="hidden sm:inline text-label-sm text-on-surface-variant">Katê</span>
          </Button>
          <Button variant="ghost" size="icon" aria-label="Menu văn hóa">
            <Menu className="h-6 w-6" />
          </Button>
          <Avatar className="h-8 w-8 ml-0.5">
            <AvatarFallback className="bg-primary text-primary-foreground">
              <User className="h-[18px] w-[18px]" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
