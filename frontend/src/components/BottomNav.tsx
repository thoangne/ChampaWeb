import { Calendar, Compass, Landmark, Map } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from '../data/champaData';

const NAV_ICONS: Record<string, React.ElementType> = {
  temple_buddhist: Landmark,
  explore: Compass,
  map: Map,
  calendar_month: Calendar,
};

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  // Xác định active tab dựa trên route thực tế
  const getActiveTab = () => {
    if (location.pathname === '/tour') return 'hanh-trinh-kham-pha';
    if (location.pathname.startsWith('/so-hoa-di-san') || location.hash === '#ban-do') return 'ban-do-thap-cham';
    if (location.hash === '#dat-tour') return 'dat-tour-trai-nghiem';
    if (location.hash === '#hanh-trinh') return 'hanh-trinh-kham-pha';
    return 'cong-di-san';
  };

  const active = getActiveTab();

  const handleNavClick = (path: string) => {
    if (path === 'cong-di-san') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
    } else if (path === 'hanh-trinh-kham-pha') {
      if (location.pathname === '/') {
        const el = document.getElementById('hanh-trinh');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/tour');
      }
    } else if (path === 'ban-do-thap-cham') {
      if (location.pathname === '/') {
        const el = document.getElementById('ban-do');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/#ban-do');
      }
    } else if (path === 'dat-tour-trai-nghiem') {
      if (location.pathname === '/') {
        const el = document.getElementById('dat-tour');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/#dat-tour');
      }
    }
  };

  return (
    <nav
      aria-label="Thanh điều hướng dưới di động"
      className="md:hidden fixed bottom-0 left-0 w-full z-50 pb-safe bg-surface/95 backdrop-blur-xl shadow-[0_-4px_24px_rgba(36,25,21,0.09)] border-t border-surface-container-high/80"
    >
      <div className="flex justify-around items-center h-16 px-1">
        {NAV_ITEMS.map((item) => {
          const IconComponent = NAV_ICONS[item.icon] ?? Landmark;
          const isActive = active === item.path;

          return (
            <button
              key={item.path}
              type="button"
              onClick={() => handleNavClick(item.path)}
              aria-label={item.label}
              className={`flex flex-col items-center justify-center min-w-[68px] min-h-[48px] py-1 px-2 rounded-xl transition-all cursor-pointer gap-0.5 ${
                isActive
                  ? 'text-primary font-bold bg-primary/10'
                  : 'text-on-surface-variant hover:text-primary active:bg-surface-container'
              }`}
            >
              <IconComponent className={`h-5 w-5 transition-transform ${isActive ? 'text-primary scale-110' : 'text-on-surface-variant'}`} />
              <span className="font-label-sm text-[11px] text-center leading-tight whitespace-nowrap">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
