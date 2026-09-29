import { BookOpen, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { toast } from '../components/ui/sonner';

export default function GuideBanner() {
  const handleDownload = () => {
    // TODO: thay bằng link PDF thật, ví dụ window.open('/guide.pdf')
    toast('Đang gửi cẩm nang về máy của bạn', {
      description: 'Ứng xử Văn hóa khi thăm viếng tháp cổ và làng Chăm Panduranga (PDF màu).',
    });
  };

  return (
    <>
      <Card className="bg-surface-container-high shadow-sm p-space-md flex items-center justify-between gap-space-sm">
        <div className="flex items-start gap-space-xs min-w-0">
          <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
            <BookOpen className="h-[22px] w-[22px]" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-title-md text-title-md text-on-surface leading-tight">Cẩm nang Ứng xử Văn hóa</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant truncate">Quy tắc thăm viếng tháp thiêng &amp; làng Chăm (PDF Miễn phí)</span>
          </div>
        </div>
        <Button variant="soft" size="sm" onClick={handleDownload} className="bg-card text-label-sm font-bold flex-shrink-0 px-space-sm">
          <Download className="h-4 w-4" />
          Tải về
        </Button>
      </Card>

      <div className="text-center pt-2">
        <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
          Dana Panduranga • Giữ gìn di sản bằng lòng tự hào bản địa
        </span>
      </div>
    </>
  );
}
