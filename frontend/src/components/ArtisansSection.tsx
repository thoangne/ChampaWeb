import { Handshake, Quote } from 'lucide-react';
import { ARTISAN_IMAGE } from '../data/champaData';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Card, CardContent } from '../components/ui/card';

export default function ArtisansSection() {
  return (
    <section className="w-full px-margin-mobile py-space-md">
      <Card className="bg-surface-container-low">
        <CardContent className="pt-space-md flex flex-col gap-space-md">
          <div className="flex items-center gap-space-sm">
            <Avatar className="h-16 w-16 shadow-sm">
              <AvatarImage alt="Chân dung Muk Đàng Thị Phan" src={ARTISAN_IMAGE} />
              <AvatarFallback>MP</AvatarFallback>
            </Avatar>
            <div className="flex flex-col min-w-0">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Nghệ Nhân Di Sản Sống</span>
              <h3 className="font-title-lg text-title-lg text-on-surface truncate">Muk Đàng Thị Phan</h3>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Làng gốm Bàu Trúc (Hơn 60 năm gắn bó cùng đất sét)</span>
            </div>
          </div>

          <blockquote className="relative p-space-sm rounded-lg bg-card font-body-md text-body-md text-on-surface leading-relaxed italic">
            <Quote className="absolute right-2 bottom-1 h-10 w-10 text-primary/10 select-none" />
            “Người Chăm làm gốm bằng đôi chân đi giật lùi, xoay quanh chiếc trụ đất. Đất dẻo theo tâm người, lửa đỏ theo lòng người.”
          </blockquote>

          <div className="flex items-start gap-space-xs p-space-sm rounded-lg bg-surface-container text-on-surface-variant">
            <Handshake className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <p className="font-body-sm text-body-sm leading-snug">
              <strong className="text-primary font-semibold">Cam kết trách nhiệm Dana:</strong> 70% nguồn thu được hoàn lưu trực tiếp đến các hộ gia đình nghệ nhân và quỹ văn hóa thiếu nhi Chăm Panduranga.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
