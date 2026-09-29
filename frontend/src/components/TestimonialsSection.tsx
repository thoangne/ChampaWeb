import { useState } from "react";
import type { FormEvent } from "react";
import { BookOpen, CheckCircle, Download, Star } from "lucide-react";
import { TESTIMONIALS } from "../data/champaData";
import { toast } from "./ui/sonner";

export default function TestimonialsSection() {
  const [email, setEmail] = useState("");

  const handleDownloadGuide = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Cẩm nang văn hóa đang được gửi tới bạn!", {
      description: `Đã gửi liên kết tải tài liệu PDF 32 trang song ngữ đến: ${email}`,
    });
    setEmail("");
  };

  return (
    <section className="w-full bg-surface-container-low py-space-xl border-t border-surface-container-high/60">
      <div className="max-w-7xl mx-auto px-margin-mobile xl:px-margin">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center mb-space-xl">
          <div className="lg:col-span-8">
            <span className="font-label-md text-label-md uppercase tracking-widest text-primary font-bold block mb-space-xs">
              Lắng nghe từ Lữ khách
            </span>
            <h2 className="font-serif text-3xl xl:text-4xl text-on-surface font-semibold">
              Ký ức đọng lại nơi lòng người
            </h2>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
              <span className="font-serif font-bold text-on-surface text-2xl text-primary">
                4.97 / 5.0
              </span>
              <span>• Tổng hợp 420+ chia sẻ chân thực</span>
            </div>
          </div>
        </div>

        {/* 3 Testimonials Desktop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-space-xl">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between border border-outline-variant/30 hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center gap-1 text-secondary mb-space-sm">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-secondary" />
                  ))}
                </div>
                <p className="font-body-md text-sm xl:text-base text-on-surface leading-relaxed italic">
                  {t.content}
                </p>
              </div>

              <div className="pt-space-md mt-space-md flex items-center gap-space-sm border-t border-surface-container/60">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-sm ${t.avatarClass}`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-title-md text-sm xl:text-title-md text-on-surface font-semibold">
                    {t.name}
                  </div>
                  <div className="font-body-sm text-xs text-on-surface-variant line-clamp-1">
                    {t.origin}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FREE DOWNLOAD CULTURAL GUIDE BANNER */}
        <div
          id="cam-nang"
          className="p-space-lg xl:p-space-xl rounded-2xl bg-surface-container-lowest shadow-xl border border-outline-variant/30"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-primary-fixed mb-space-sm">
                <BookOpen className="h-4 w-4 text-primary" />
                <span className="font-label-sm text-[11px] uppercase font-bold text-on-primary-fixed">
                  Tài liệu Phi lợi nhuận • Xuất bản 2025
                </span>
              </div>
              <h3 className="font-serif text-2xl xl:text-3xl text-on-surface font-semibold">
                Cẩm nang Ứng xử Văn hóa khi ghé thăm Thánh địa & Làng nghề Chăm
              </h3>
              <p className="font-body-md text-sm xl:text-base text-on-surface-variant mt-space-sm max-w-2xl leading-relaxed">
                Tập tài liệu 32 trang song ngữ (Việt - Anh) được biên soạn cùng
                Hội đồng Chức sắc Bàlamôn & Bàni Ninh Thuận: Quy chuẩn trang
                phục vào tháp Kalan, điều kiêng kỵ khi bước vào gian bếp cổ, và
                cách chào hỏi Muk theo phong tục mẫu hệ.
              </p>
              <div className="flex flex-wrap items-center gap-space-md mt-space-md">
                <div className="flex items-center gap-1.5 font-body-sm text-xs xl:text-sm text-on-surface-variant">
                  <CheckCircle className="h-4 w-4 text-secondary" /> Định dạng
                  PDF (14 MB)
                </div>
                <div className="flex items-center gap-1.5 font-body-sm text-xs xl:text-sm text-on-surface-variant">
                  <CheckCircle className="h-4 w-4 text-secondary" /> Kèm sơ đồ
                  tháp 3D
                </div>
                <div className="flex items-center gap-1.5 font-body-sm text-xs xl:text-sm text-on-surface-variant">
                  <CheckCircle className="h-4 w-4 text-secondary" /> Miễn phí
                  100%
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-space-xs mt-space-md lg:mt-0">
              <form
                className="flex flex-col gap-space-xs"
                onSubmit={handleDownloadGuide}
              >
                <label
                  htmlFor="guide-email"
                  className="font-label-sm text-xs uppercase text-on-surface-variant font-semibold"
                >
                  Nhận bản PDF qua Email
                </label>
                <input
                  id="guide-email"
                  className="w-full px-space-md py-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-sm placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary shadow-sm border border-outline-variant/30"
                  placeholder="Nhập email của bạn..."
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-lg text-sm tracking-wider transition-all flex items-center justify-center gap-space-xs shadow-md mt-space-xs font-semibold"
                  type="submit"
                >
                  <Download className="h-4 w-4" />
                  <span>Tải Cẩm Nang Ngay (Miễn phí)</span>
                </button>
              </form>
              <span className="font-body-sm text-[12px] text-outline text-center mt-1">
                Chúng tôi tôn trọng quyền riêng tư và không gửi thư rác.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
