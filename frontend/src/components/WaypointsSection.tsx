import { useState } from 'react';
import { Landmark, MapPin, Shapes, Sprout, Tent, type LucideIcon } from 'lucide-react';
import { MAP_IMAGE, WAYPOINTS } from '../data/champaData';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { cn } from '../lib/utils';

// Tên icon (Material Symbols) trong data -> icon lucide
const ICONS: Record<string, LucideIcon> = {
  temple_hindu: Tent,
  potted_plant: Sprout,
  texture: Shapes,
  account_balance: Landmark,
};

export default function WaypointsSection() {
  const [activeId, setActiveId] = useState<number>(WAYPOINTS[0].id);
  const active = WAYPOINTS.find((w) => w.id === activeId) ?? WAYPOINTS[0];

  return (
    <section className="w-full px-margin-mobile py-space-md flex flex-col gap-space-sm">
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 text-secondary">
          <MapPin className="h-4 w-4" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold">Bản Đồ Tuyến Khảo Cổ &amp; Văn Hóa</span>
        </div>
        <h2 className="font-headline-md text-headline-md text-on-surface">Cung đường Panduranga</h2>
      </div>

      <Card className="overflow-hidden bg-surface-container">
        <div className="w-full h-56 bg-cover bg-center" style={{ backgroundImage: `url('${MAP_IMAGE}')` }} />
        <div className="p-space-sm bg-card flex flex-col gap-space-xs">
          <span className="font-label-sm text-label-sm text-on-surface-variant italic">
            Bấm vào các trạm di sản để tra cứu quy chuẩn trang phục &amp; giờ viếng thăm:
          </span>
          <div className="grid grid-cols-2 gap-2 pt-1">
            {WAYPOINTS.map((w) => {
              const isActive = w.id === activeId;
              const Icon = ICONS[w.icon] ?? MapPin;
              return (
                <Button
                  key={w.id}
                  variant={isActive ? 'default' : 'secondary'}
                  onClick={() => setActiveId(w.id)}
                  className={cn('h-auto justify-start items-start p-2 text-left shadow-none', !isActive && 'text-on-surface')}
                >
                  <Icon className={cn('h-[18px] w-[18px] flex-shrink-0 mt-0.5', !isActive && 'text-secondary')} />
                  <span className="min-w-0">
                    <span className="font-label-md text-label-md font-bold block truncate">{w.shortName}</span>
                    <span className={cn('font-label-sm text-label-sm font-normal block truncate', isActive ? 'opacity-80' : 'text-on-surface-variant')}>{w.district}</span>
                  </span>
                </Button>
              );
            })}
          </div>

          <div className="mt-2 p-space-sm rounded-lg bg-surface-container-high flex flex-col gap-1">
            <div className="flex items-center justify-between gap-2">
              <span className="font-title-md text-title-md text-primary font-bold">{active.title}</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant text-right">{active.sub}</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface">{active.rules}</p>
          </div>
        </div>
      </Card>
    </section>
  );
}
