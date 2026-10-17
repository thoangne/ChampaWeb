import { useState } from "react";
import type { FormEvent } from "react";
import { BookOpen, Download, HeartHandshake, Send } from "lucide-react";
import { toast } from "../ui/sonner";

export default function BlogCTASection() {
  const [downloadEmail, setDownloadEmail] = useState("");
  const [contributorName, setContributorName] = useState("");
  const [storyTopic, setStoryTopic] = useState("");

  const handleDownload = (e: FormEvent) => {
    e.preventDefault();
    if (!downloadEmail) return;
    toast.success("Bản PDF Kỷ yếu Di sản đang được gửi tới bạn!", {
      description: `Đã gửi link tài liệu 64 trang lưu trữ đến: ${downloadEmail}`,
    });
    setDownloadEmail("");
  };

  const handleContribute = (e: FormEvent) => {
    e.preventDefault();
    if (!contributorName || !storyTopic) return;
    toast.success("Cảm ơn bạn đã đóng góp tư liệu điền dã!", {
      description: "Hội đồng nghiên cứu Dana Community sẽ liên hệ để xác minh và lưu trữ bản ghi.",
    });
    setContributorName("");
    setStoryTopic("");
  };

  return (
    <section className="w-full bg-surface-container-high/60 py-space-xl border-t border-surface-container-high">
      <div className="max-w-7xl mx-auto px-margin-mobile xl:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
          {/* Left: Download Archival Journal (PDF Handbook) */}
          <div className="lg:col-span-6 bg-surface-container-lowest p-space-md sm:p-space-lg xl:p-space-xl rounded-3xl shadow-lg border border-outline-variant/40 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary text-xs font-bold uppercase tracking-wider mb-space-sm">
                <BookOpen className="h-3.5 w-3.5" />
                <span>Tài liệu Khảo cứu Số</span>
              </div>
              <h3 className="font-serif text-2xl xl:text-3xl text-on-surface font-semibold leading-snug">
                Tải Kỷ Yếu Di Sản & Cẩm Nang Khảo Cứu Panduranga
              </h3>
              <p className="font-body-md text-sm xl:text-base text-on-surface-variant mt-space-xs leading-relaxed">
                Tập hợp 28 bài biên khảo độc quyền, hệ thống bản đồ tọa độ tháp
                cổ, giải mã hoa văn thổ cẩm và quy tắc ứng xử tôn nghiêm nơi
                thánh địa. Bản PDF 64 trang song ngữ.
              </p>
            </div>

            <form onSubmit={handleDownload} className="mt-space-lg flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={downloadEmail}
                onChange={(e) => setDownloadEmail(e.target.value)}
                placeholder="Nhập email của bạn để nhận PDF..."
                className="flex-1 px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/40 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all shrink-0 cursor-pointer"
              >
                <Download className="h-4 w-4" />
                <span>Tải miễn phí</span>
              </button>
            </form>
          </div>

          {/* Right: Community Oral History Contribution */}
          <div className="lg:col-span-6 bg-gradient-to-br from-surface-container-lowest to-surface-container-low p-space-md sm:p-space-lg xl:p-space-xl rounded-3xl shadow-lg border border-outline-variant/40 flex flex-col justify-between mt-space-md lg:mt-0">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-secondary text-xs font-bold uppercase tracking-wider mb-space-sm">
                <HeartHandshake className="h-3.5 w-3.5" />
                <span>Bảo Tồn Ký Ức Cộng Đồng</span>
              </div>
              <h3 className="font-serif text-2xl xl:text-3xl text-on-surface font-semibold leading-snug">
                Đóng Góp Câu Chuyện & Tư Liệu Bản Địa
              </h3>
              <p className="font-body-md text-sm xl:text-base text-on-surface-variant mt-space-xs leading-relaxed">
                Bạn là nhân chứng, nhà nghiên cứu hay người con Panduranga lưu
                giữ những câu chuyện truyền khẩu, hình ảnh xưa hay bài thuốc cổ?
                Hãy cùng Dana số hóa và trao truyền.
              </p>
            </div>

            <form onSubmit={handleContribute} className="mt-space-lg flex flex-col gap-2.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  value={contributorName}
                  onChange={(e) => setContributorName(e.target.value)}
                  placeholder="Họ tên của bạn..."
                  className="px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <input
                  type="text"
                  required
                  value={storyTopic}
                  onChange={(e) => setStoryTopic(e.target.value)}
                  placeholder="Chủ đề tư liệu / Câu chuyện..."
                  className="px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-secondary hover:bg-secondary/90 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <Send className="h-4 w-4" />
                <span>Gửi câu chuyện đóng góp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
