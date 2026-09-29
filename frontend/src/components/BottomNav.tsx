import { useState } from 'react';
import { NAV_ITEMS } from '../data/champaData';

export default function BottomNav() {
  const [active, setActive] = useState<string>(NAV_ITEMS[0].path);

  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-4px_20px_rgba(36,25,21,0.06)]">
      <div className="flex justify-around items-center h-16 px-space-xs">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.path}
            href="#"
            onClick={(e) => { e.preventDefault(); setActive(item.path); }}
            className={`flex flex-col items-center justify-center min-w-[64px] h-12 hover:text-primary transition-colors gap-0.5 ${active === item.path ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
          >
            <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
            <span className="font-label-sm text-label-sm text-center leading-none mt-0.5">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
