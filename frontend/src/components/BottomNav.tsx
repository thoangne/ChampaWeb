import { useState } from 'react';
import { Calendar, Compass, Landmark, Map } from 'lucide-react';
import { NAV_ITEMS } from '../data/champaData';

const NAV_ICONS: Record<string, React.ElementType> = {
  temple_buddhist: Landmark,
  explore: Compass,
  map: Map,
  calendar_month: Calendar,
};

export default function BottomNav() {
  const [active, setActive] = useState<string>(NAV_ITEMS[0].path);

  const handleNavClick = (path: string) => {
    setActive(path);
    if (path === 'cong-di-san') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (path === 'hanh-trinh-kham-pha') {
      document.getElementById('hanh-trinh')?.scrollIntoView({ behavior: 'smooth' });
    } else if (path === 'ban-do-thap-cham') {
      document.getElementById('ban-do')?.scrollIntoView({ behavior: 'smooth' });
    } else if (path === 'dat-tour-trai-nghiem') {
      document.getElementById('dat-tour')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-4px_20px_rgba(36,25,21,0.08)] border-t border-surface-container-high/60">
      <div className="flex justify-around items-center h-16 px-space-xs">
        {NAV_ITEMS.map((item) => {
          const IconComponent = NAV_ICONS[item.icon] ?? Landmark;
          const isActive = active === item.path;

          return (
            <a
              key={item.path}
              href={`#${item.path}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.path);
              }}
              className={`flex flex-col items-center justify-center min-w-[64px] h-12 transition-colors gap-1 ${
                isActive ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              <IconComponent className={`h-5 w-5 ${isActive ? 'text-primary' : 'text-on-surface-variant'}`} />
              <span className="font-label-sm text-[11px] text-center leading-none">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
