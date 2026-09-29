import { Flower2 } from 'lucide-react';
import { MANIFESTO_STATS } from '../data/champaData';
import { Card, CardContent } from '../components/ui/card';

const SAWTOOTH = Array.from({ length: 65 }, (_, i) => `${i * 5},${i % 2 === 0 ? 10 : 0}`).join(' ');

export default function ManifestoSection() {
  return (
    <section className="w-full px-margin-mobile py-space-md">
      <Card className="bg-surface-container-low shadow-sm overflow-hidden">
        <CardContent className="pt-space-md flex flex-col gap-space-md">
          <div className="w-full text-primary/40">
            <svg className="w-full h-2.5" fill="currentColor" preserveAspectRatio="none" viewBox="0 0 320 10">
              <polygon points={SAWTOOTH} />
            </svg>
          </div>

          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-2 text-primary">
              <Flower2 className="h-5 w-5" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold">Triết Lý Dana</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface leading-relaxed italic">
              “Chúng tôi tin rằng, mỗi viên gạch tháp Chăm đều có linh hồn, mỗi vệt khói gốm Bàu Trúc đều cất giấu ký ức tiền nhân. Dana không dẫn bạn đi check-in vội vã. Chúng tôi đưa bạn ngồi xuống cùng các Muk, uống ngụm trà mát, tự tay vuốt thớ đất sét dẻo quánh và thấu hiểu một nền văn hóa bằng cả trái tim trân kính.”
            </p>
          </div>

          <div className="grid grid-cols-3 gap-space-xs bg-surface-container rounded-lg p-space-sm text-center">
            {MANIFESTO_STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span className={`font-headline-sm text-headline-sm font-bold ${s.className}`}>{s.value}</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
