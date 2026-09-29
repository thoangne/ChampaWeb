import { Heart, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/champaData';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { Card, CardContent } from '../components/ui/card';

export default function TestimonialsSection() {
  return (
    <section className="w-full px-margin-mobile py-space-md flex flex-col gap-space-sm">
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 text-secondary">
          <Heart className="h-4 w-4" />
          <span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold">Lắng Nghe Lữ Khách</span>
        </div>
        <h2 className="font-headline-md text-headline-md text-on-surface">Cảm nhận từ trái tim</h2>
      </div>

      {TESTIMONIALS.map((t) => (
        <Card key={t.id} className="shadow-sm">
          <CardContent className="pt-space-md flex flex-col gap-space-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-9 w-9">
                  <AvatarFallback className={`text-sm ${t.avatarClass}`}>{t.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <span className="font-title-md text-title-md text-on-surface block leading-tight">{t.name}</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{t.origin}</span>
                </div>
              </div>
              <div className="flex text-secondary" aria-label="5 sao">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface italic mt-1 leading-relaxed">{t.content}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
