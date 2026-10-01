import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Download,
  FileText,
  Info,
  ListOrdered,
  MapPin,
  Smile,
  ThumbsUp,
  Users,
} from "lucide-react";
import { toast } from "../ui/sonner";

export default function BlogDetailSidebar() {
  const [activeSection, setActiveSection] = useState<string>("chuong-1");
  const [hasVoted, setHasVoted] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["chuong-1", "chuong-2", "chuong-3", "chuong-4"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleVote = () => {
    if (!hasVoted) {
      setHasVoted(true);
      toast.success("Cảm ơn bạn đã phản hồi!", {
        description: "Ý kiến của bạn giúp chúng tôi nâng cao chất lượng tư liệu nghiên cứu.",
      });
    }
  };

  const handleDownload = () => {
    toast.success("Đang chuẩn bị tệp PDF chuyên sâu...", {
      description: "Tệp nghiên cứu 8 trang định dạng khoa học sẽ tải về trong giây lát.",
    });
  };

  return (
    <aside className="lg:col-span-4 flex flex-col gap-space-lg lg:sticky lg:top-24">
      {/* TABLE OF CONTENTS */}
      <div className="bg-surface-container-lowest p-space-md sm:p-space-lg rounded-3xl shadow-lg border border-outline-variant/30 flex flex-col gap-space-sm">
        <div className="flex items-center justify-between pb-space-xs border-b border-surface-container/60">
          <span className="font-serif text-lg font-semibold text-on-surface flex items-center gap-2">
            <ListOrdered className="h-5 w-5 text-primary" />
            <span>Mục Lục Khảo Cứu</span>
          </span>
          <span className="text-on-surface-variant font-label-sm text-xs font-semibold">
            4 chương chính
          </span>
        </div>

        <nav className="flex flex-col gap-1.5 text-xs sm:text-sm">
          {[
            { id: "chuong-1", title: "1. Ngọn đồi Trầu & Bản hòa ca đất lửa" },
            { id: "chuong-2", title: "2. Kỹ thuật mài chập & Keo bời lời" },
            { id: "chuong-3", title: "3. Ngôn ngữ biểu tượng & Cửa giả" },
            { id: "chuong-4", title: "4. Thách thức bảo tồn thế kỷ XXI" },
          ].map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`py-2 px-3 rounded-xl transition-all flex items-center gap-2.5 text-left cursor-pointer ${
                  isActive
                    ? "bg-surface-container text-primary font-bold shadow-sm"
                    : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-medium"
                }`}
                type="button"
              >
                <span
                  className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
                    isActive ? "bg-primary scale-125" : "bg-outline/60"
                  }`}
                ></span>
                <span className="truncate">{item.title}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* QUICK CULTURAL FACT CARD */}
      <div className="bg-surface-container p-space-md sm:p-space-lg rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col gap-space-sm">
        <div className="flex items-center gap-2 text-primary font-label-md text-xs uppercase tracking-wider font-semibold">
          <Info className="h-4 w-4" />
          <span>Hồ sơ Di sản Tóm lược</span>
        </div>

        <dl className="flex flex-col gap-2 text-xs sm:text-sm">
          <div className="flex items-start justify-between py-1 border-b border-surface-container-high/60">
            <dt className="text-on-surface-variant">Tọa độ:</dt>
            <dd className="font-semibold text-on-surface text-right">
              Đồi Trầu, P. Đô Vinh, Phan Rang
            </dd>
          </div>
          <div className="flex items-start justify-between py-1 border-b border-surface-container-high/60">
            <dt className="text-on-surface-variant">Niên đại:</dt>
            <dd className="font-semibold text-on-surface text-right">
              Thế kỷ XIII - XIV (Chế Mân)
            </dd>
          </div>
          <div className="flex items-start justify-between py-1 border-b border-surface-container-high/60">
            <dt className="text-on-surface-variant">Tín ngưỡng:</dt>
            <dd className="font-semibold text-on-surface text-right">
              Balamôn giáo • Siva giáo
            </dd>
          </div>
          <div className="flex items-start justify-between py-1 border-b border-surface-container-high/60">
            <dt className="text-on-surface-variant">Hiện vật trung tâm:</dt>
            <dd className="font-semibold text-on-surface text-right">
              Mukha-Linga Po Klong Garai
            </dd>
          </div>
          <div className="flex items-start justify-between py-1">
            <dt className="text-on-surface-variant">Khoảnh khắc lý tưởng:</dt>
            <dd className="font-bold text-secondary text-right">
              05:30 sáng & 16:45 chiều
            </dd>
          </div>
        </dl>

        {/* Mini Location View */}
        <div className="w-full h-32 rounded-2xl shadow-inner relative overflow-hidden bg-surface-container-high border border-outline-variant/30 group">
          <img
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzljZH7__gmKglHYhA2NZtHh2wp1_j6eufhB24fW5dLEg6Q3iVPhcklfXTyfQfftG0s3kkeFa45XwJi0fI0t965d-lV9hy3Bp86bWdiRgQjJMFwqoPZzvC1Puek_bg_vu8Hy90bDTysgtbAXLReE5kLRMopjTkjh5Fgl-uWE2PDhyzuKEA3B_xFsrORw9XqbKdNdrSvBBD0BLP1ezotbfBBmrZCZNeWb86lbUY2kjNCncvJkPSIpv7pA"
            alt="Vị trí Po Klong Garai"
          />
          <div className="absolute inset-0 bg-primary/25 backdrop-brightness-95 flex items-center justify-center">
            <Link
              to="/#ban-do"
              className="px-3.5 py-1.5 rounded-full bg-surface/90 hover:bg-surface text-on-surface font-label-sm text-xs shadow-md flex items-center gap-1.5 transition-all font-semibold"
            >
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span>Xem bản đồ di tích</span>
            </Link>
          </div>
        </div>
      </div>

      {/* EXPERIENTIAL HERITAGE TOUR WIDGET */}
      <div className="bg-gradient-to-br from-surface-container-lowest to-surface-container-low rounded-3xl p-space-md sm:p-space-lg shadow-xl border border-outline-variant/40 flex flex-col gap-space-sm relative overflow-hidden">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-sm text-xs uppercase tracking-wider font-semibold shadow-sm">
            Trải nghiệm Thực địa
          </span>
        </div>

        <h4 className="font-serif text-xl sm:text-2xl text-on-surface font-semibold leading-snug">
          Muốn trực tiếp chạm tay vào ngàn năm gạch nung?
        </h4>

        <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          Hành trình văn hóa độc bản nửa ngày cùng chuyên gia khảo cổ học và các
          Muk (bà mẹ Chăm) làng Đô Vinh. Khám phá bí ẩn mài chập và thưởng thức
          trà thảo mộc Đồi Trầu.
        </p>

        <div className="p-3.5 rounded-2xl bg-surface-container-lowest shadow-sm flex items-center justify-between border border-outline-variant/30">
          <div>
            <span className="block text-on-surface-variant font-label-sm text-[11px]">
              Giá hoàn lưu cộng đồng:
            </span>
            <span className="font-serif text-xl text-primary font-bold">
              450.000đ
              <span className="text-xs font-normal text-on-surface-variant">
                /khách
              </span>
            </span>
          </div>
          <Link
            className="px-4 py-2 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-md text-xs uppercase tracking-wider transition-colors shadow-md font-semibold"
            to="/tour/binh-minh-thap-po-klong-garai"
          >
            Đặt lịch →
          </Link>
        </div>

        <span className="text-on-surface-variant text-xs flex items-center gap-1.5 pt-1">
          <Users className="h-4 w-4 text-secondary shrink-0" />
          <span>Nhóm nhỏ tối đa 8 khách • Khởi hành sáng thứ 7 hàng tuần</span>
        </span>
      </div>

      {/* DOWNLOAD MONOGRAPH PDF CARD */}
      <div className="bg-surface-container-low p-space-md sm:p-space-lg rounded-3xl shadow-sm border border-outline-variant/30 flex flex-col gap-space-xs" id="download-pdf">
        <div className="flex items-start gap-space-sm">
          <FileText className="h-8 w-8 text-primary shrink-0" />
          <div className="flex flex-col">
            <h4 className="font-serif text-lg font-semibold text-on-surface">
              Khảo cứu Toàn văn PDF
            </h4>
            <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed mt-0.5">
              Bản in 8 trang định dạng chuẩn nghiên cứu khoa học, kèm bản vẽ chi
              tiết các trán cửa tháp Kalan.
            </p>
          </div>
        </div>

        <button
          onClick={handleDownload}
          className="w-full mt-space-sm py-2.5 rounded-xl bg-surface hover:bg-surface-container text-primary text-xs sm:text-sm uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm border border-outline-variant/30 cursor-pointer"
          type="button"
        >
          <Download className="h-4 w-4" />
          <span>Tải miễn phí (4.8 MB)</span>
        </button>
      </div>

      {/* READERSHIP FEEDBACK WIDGET */}
      <div className="p-3.5 rounded-2xl bg-surface-container flex items-center justify-between border border-outline-variant/30 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <ThumbsUp className="h-4 w-4 text-secondary" />
          <span className="text-on-surface">
            <strong>98%</strong> độc giả thấy bài viết hữu ích
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={handleVote}
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
              hasVoted
                ? "bg-primary text-on-primary"
                : "hover:bg-surface text-on-surface"
            }`}
            title="Hữu ích"
            type="button"
          >
            <ThumbsUp className="h-4 w-4" />
          </button>
          <button
            onClick={handleVote}
            className="p-1.5 rounded-lg hover:bg-surface text-on-surface transition-colors cursor-pointer"
            title="Chưa hài lòng"
            type="button"
          >
            <Smile className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
