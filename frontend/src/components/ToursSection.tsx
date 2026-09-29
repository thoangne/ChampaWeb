import { BadgeCheck, ChevronRight } from 'lucide-react';
import { TOURS } from '../data/champaData';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export default function ToursSection() {
  return (
    <section id="featured-tours" className="w-full px-margin-mobile py-space-md flex flex-col gap-space-md">
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 text-secondary">
          <BadgeCheck className="h-4 w-4" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold">Những Chuyến Đi Có Chiều Sâu Văn Hóa</span>
        </div>
        <h2 className="font-headline-md text-headline-md text-on-surface">Hành trình Độc bản</h2>
      </div>

      {TOURS.map((tour) => (
        <Card key={tour.id} className="overflow-hidden">
          <div className="relative w-full h-48 bg-surface-container">
            <img className="w-full h-full object-cover" alt={tour.title} src={tour.image} />
            <Badge className={`absolute top-space-sm left-space-sm px-space-sm shadow-sm font-bold ${tour.badgeClass}`}>{tour.badge}</Badge>
            <span className="absolute bottom-space-sm right-space-sm bg-on-surface/85 backdrop-blur-sm text-surface-bright px-2 py-1 rounded text-label-sm font-semibold">
              {tour.duration}
            </span>
          </div>
          <CardHeader className="pb-space-xs">
            <div className="flex items-baseline justify-between">
              <span className="font-label-sm text-label-sm uppercase text-secondary font-semibold">{tour.location}</span>
              <span className="font-title-md text-title-md text-primary font-bold">{tour.price}</span>
            </div>
            <CardTitle>{tour.title}</CardTitle>
            <CardDescription className="line-clamp-2 text-on-surface-variant">{tour.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-space-xs">
            <div className="flex flex-wrap gap-1.5">
              {tour.chips.map((c) => (
                <Badge key={c.label} className={`rounded font-normal ${c.className}`}>{c.label}</Badge>
              ))}
            </div>
            <Button variant="soft" size="sm" className="w-full text-label-md">
              Xem chi tiết lịch trình
              <ChevronRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
