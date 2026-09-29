import { useState } from 'react';
import type { FormEvent } from 'react';
import { CalendarDays, Send } from 'lucide-react';
import { DESTINATION_OPTIONS, TRAVELER_OPTIONS } from '../data/champaData';
import type { TripFormValues } from '../types/heritage';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from '../components/ui/sonner';

export default function TripPlannerSection() {
  const [form, setForm] = useState<TripFormValues>({
    destination: DESTINATION_OPTIONS[0],
    date: new Date().toISOString().slice(0, 10),
    travelers: TRAVELER_OPTIONS[0],
  });

  const update = <K extends keyof TripFormValues>(key: K, value: TripFormValues[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: gửi `form` tới backend (src/api)
    toast.success('Dana đã tiếp nhận yêu cầu hành trình', {
      description: 'Hướng dẫn viên bản địa sẽ liên hệ trong ít phút qua số điện thoại để trao đổi chi tiết.',
    });
  };

  return (
    <Card>
      <CardHeader className="gap-space-sm">
        <div className="flex items-center gap-2 text-primary">
          <CalendarDays className="h-5 w-5" />
          <CardTitle>Khởi hành Chuyến đi Di sản</CardTitle>
        </div>
        <CardDescription className="text-on-surface-variant">
          Chọn lộ trình theo nhịp chân của bạn, Dana đồng hành để mỗi khoảnh khắc trọn vẹn ý nghĩa.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-space-xs" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <Label htmlFor="destination">Điểm trải nghiệm mong muốn</Label>
            <Select value={form.destination} onValueChange={(v) => update('destination', v)}>
              <SelectTrigger id="destination"><SelectValue /></SelectTrigger>
              <SelectContent>
                {DESTINATION_OPTIONS.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-space-xs">
            <div className="flex flex-col gap-1">
              <Label htmlFor="date">Dự kiến ngày đi</Label>
              <Input id="date" type="date" value={form.date} onChange={(e) => update('date', e.target.value)} />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="travelers">Số người</Label>
              <Select value={form.travelers} onValueChange={(v) => update('travelers', v)}>
                <SelectTrigger id="travelers"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {TRAVELER_OPTIONS.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button type="submit" className="mt-space-xs w-full">
            Nhận tư vấn hành trình
            <Send className="h-[18px] w-[18px]" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
