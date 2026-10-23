import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { LOGO_URL } from "../data/champaData";
import { toast } from "./ui/sonner";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Đăng ký nhận bản tin thành công!", {
      description: `Bản tin chuyên đề văn hóa Panduranga định kỳ sẽ được gửi tới: ${email}`,
    });
    setEmail("");
  };

  return (
    <footer className="w-full bg-surface-container-low text-on-surface border-t border-surface-container-high/60 shadow-[0_-2px_12px_rgba(36,25,21,0.03)] pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-margin-mobile xl:px-margin pt-space-xl pb-space-lg">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter mb-space-xl">
          {/* Column 1: Brand & Commitment */}
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <img
                src={LOGO_URL}
                alt="Logo Dana Champa"
                className="h-10 w-auto object-contain shrink-0"
              />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-primary leading-tight">
                  Champa Community
                </span>
                <span className="font-label-sm text-[10px] uppercase tracking-widest text-secondary font-semibold">
                  Panduranga Heritage
                </span>
              </div>
            </div>

            <p className="font-body-md text-sm xl:text-base text-on-surface-variant leading-relaxed">
              Cổng thông tin bảo tồn và du lịch văn hóa Champa độc bản. Chúng tôi
              phục dựng ký ức đền tháp, nhịp thở gốm Bàu Trúc, sắc thổ cẩm Mỹ
              Nghiệp và kết nối lữ khách cùng di sản sống của vùng đất Panduranga
              huyền thoại.
            </p>

            {/* 70% Commitment Highlight Card */}
            <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30">
              <div className="flex items-start gap-space-sm">
                <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-title-md text-sm font-bold text-on-surface">
                    Cam kết Hoàn lưu Sinh kế 70%
                  </h5>
                  <p className="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">
                    70% doanh thu từ mỗi hành trình và tác phẩm được hoàn lưu trực
                    tiếp đến gia đình nghệ nhân Chăm và quỹ trùng tu di tích cộng
                    đồng.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Journeys */}
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <h4 className="font-serif text-lg font-bold text-on-surface">
              Hành trình
            </h4>
            <ul className="flex flex-col gap-space-xs">
              {[
                "Bình minh Tháp Po Klong Garai",
                "Lửa lò gốm cổ Bàu Trúc",
                "Sợi chỉ vàng làng Mỹ Nghiệp",
                "Hành hương Đền Po Rome",
                "Con đường Cừu đồng An Hải",
              ].map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    const el = document.getElementById("hanh-trinh");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer py-0.5"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Topics & Digital Modules */}
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <h4 className="font-serif text-lg font-bold text-on-surface">
              Chuyên đề Di sản
            </h4>
            <ul className="flex flex-col gap-space-xs">
              {[
                { label: "Tin tức & Sự kiện", href: "/bai-viet?category=tin-tuc" },
                { label: "Lịch sử Vương triều", href: "/bai-viet?category=lich-su" },
                { label: "Văn hóa & Đền tháp", href: "/bai-viet?category=van-hoa" },
                { label: "Kho ảnh Văn hoá", href: "/so-hoa-di-san?tab=hinh-anh" },
                { label: "Ngôn ngữ Akhar Thrah", href: "/so-hoa-di-san?tab=ngon-ngu" },
                { label: "Giải mã Văn bia Cổ", href: "/so-hoa-di-san?tab=van-bia" },
              ].map((item) => (
                <li key={item.label} className="py-0.5">
                  <Link
                    to={item.href}
                    className="font-body-sm text-sm text-on-surface-variant hover:text-primary transition-colors block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <h4 className="font-serif text-lg font-bold text-on-surface">
                Bản tin Văn hóa Panduranga
              </h4>
              <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                Nhận bản tin chuyên sâu về nghi lễ, câu chuyện làng nghề và lịch
                biểu diễn nghệ thuật dân gian hàng tháng.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="flex items-center gap-space-xs">
              <input
                className="flex-1 px-space-md py-2.5 rounded-xl bg-surface-container-lowest text-on-surface font-body-sm text-sm placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary shadow-sm border border-outline-variant/30"
                placeholder="Địa chỉ email của bạn..."
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="px-space-md py-2.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-md text-xs uppercase tracking-wider transition-colors font-semibold shrink-0 shadow-sm"
                type="submit"
              >
                Đăng ký
              </button>
            </form>

            <div className="flex flex-col gap-1.5 pt-space-xs border-t border-surface-container/60 text-xs">
              <span className="font-label-md text-secondary font-bold uppercase tracking-wider">
                Trung tâm kết nối Panduranga:
              </span>
              <p className="font-body-sm text-on-surface-variant flex items-start gap-1.5">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Số 08 Đường Tháp Chàm, Đô Vinh, TP. Phan Rang - Tháp Chàm, Tỉnh Ninh Thuận</span>
              </p>
              <p className="font-body-sm text-on-surface-variant flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-secondary shrink-0" />
                <span>(+84) 259 388 9988</span>
                <span className="mx-1">•</span>
                <Mail className="h-3.5 w-3.5 text-secondary shrink-0" />
                <span>contact@danachampa.heritage.vn</span>
              </p>
            </div>
          </div>
        </div>

        {/* Sub-footer / Copyright */}
        <div className="pt-space-md flex flex-col md:flex-row items-center justify-between gap-space-sm border-t border-surface-container-high/60 text-xs text-on-surface-variant">
          <div>
            <span>© 2025 Dana Community Heritage Foundation. Bảo lưu mọi quyền di sản.</span>
          </div>
          <div className="flex flex-wrap items-center gap-space-md font-label-md">
            <span className="hover:text-primary transition-colors cursor-pointer">
              Quy tắc Ứng xử Di sản
            </span>
            <span>•</span>
            <span className="hover:text-primary transition-colors cursor-pointer">
              Chính sách Nghệ nhân Cộng đồng
            </span>
            <span>•</span>
            <span className="hover:text-primary transition-colors cursor-pointer">
              Giấy phép Di sản Văn hóa
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
