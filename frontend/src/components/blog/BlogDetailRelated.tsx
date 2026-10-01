import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { toast } from "../ui/sonner";

export default function BlogDetailRelated() {
  const relatedPosts = [
    {
      id: "bau-truc",
      title: "Làng gốm Bàu Trúc: Kỹ nghệ không bàn xoay độc bản bên bờ sông Quao",
      badge: "Làng nghề Bàu Trúc",
      readTime: "8 phút đọc",
      desc: '"Tay xoay thân lùi" – bước chân trần uyển chuyển của người phụ nữ Chăm bên khối đất sét mịn màng tạo tác nên những tuyệt tác được UNESCO vinh danh.',
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAem_nE-8N6NViC7hvtu_Az4kUPVsHcYvjMe-iywwNDGmhFcVPBnqU3rYDhz-NqxFFeKfrgMeCt7XjQVf-B2dBqv30iTrYWm1vOxaIG9ZY6LoOraNIo-mpMg8waG4o2IcpcOrm49_20XSRSLyWH7SeNc769CPjeiWv5Y3MA0ptN2jJ4bgdWfNF1K16q_7V5UsdgrEAtQZqKUuB86YDFV2FJIeezI4iMtpR7hy2Asw7bh1dpg1_KYXdm5w",
    },
    {
      id: "my-nghiep",
      title: "Dệt Mỹ Nghiệp: Sợi chỉ nhuộm vỏ cây rừng & đồ hình vũ trụ Champa",
      badge: "Thổ cẩm Mỹ Nghiệp",
      readTime: "6 phút đọc",
      desc: "Giải mã ý nghĩa các hoa văn rùa thần, quả trám và vòm tháp trên những tấm khăn Matra thiêng dâng cúng các lễ tế thần vương.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAo_a_i-EMKPu98h-eDOOg91nOF9LBNlmXhITrSqFPiqBjTJT_Zwq7bWT0CWKgvhL4ZKZ-7zKZROay3eWwnV-q-w7uNqaEtnbu6nd8zow2ZhyNF6YIuOuGsx6LGeZQmZh3EUNfhdaUUOiph27W7CbH7PX_EA739ve5KICklqYPOxa_ecUA6ApiOjKA5KCdVz7EEeDjF_Y0zbyiT8BJKhVGdKghz1BttcF9_mi_WLvR4glEd6KkwhDY5_g",
    },
    {
      id: "dvarapala",
      title: "Hình tượng Apsara và Thần Hộ pháp Dvarapala trong điêu khắc Kalan",
      badge: "Điêu khắc Sa thạch",
      readTime: "10 phút đọc",
      desc: "Ngắm nhìn nụ cười Champa huyền bí và những đường uốn lượn mềm mại vượt qua độ thô ráp của đá cát núi lửa thế kỷ XII.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD7w1ZRHeyyZugXlVm04rhA4QAPxrj2iaDi9QxUO-6elFs8I13RKSmoIkpzt4mBlSShCikmujDeLfvL_abNbcpCftjI7Lv6r-wmJtoOBew3EvuUGmz2eZFAed5N_N_hVNVBdztRp5dfIjPrFE3gUi0GI_cKPiMD9RGPOkONhyq5VzgIvUOOuGRGtbB1EKTgTsARDqr5atKAVh6Xw_QwAXbLgKcgSX2PbRaFyA13WGpPX3_4KgxklOicug",
    },
  ];

  return (
    <div className="flex flex-col gap-space-md">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-xs">
        <div>
          <span className="font-label-sm text-xs text-secondary uppercase tracking-[0.2em] font-semibold">
            Chuyên đề Panduranga Kalan Series
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-on-surface mt-1">
            Khảo cứu tiếp theo bạn không nên bỏ lỡ
          </h2>
        </div>
        <Link
          className="font-label-md text-xs sm:text-sm text-primary hover:underline flex items-center gap-1 font-semibold"
          to="/blog"
        >
          <span>Xem toàn bộ kho tàng 28 bài khảo cứu</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {relatedPosts.map((post) => (
          <article
            key={post.id}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              toast.info(`Khảo cứu: ${post.title}`, {
                description: "Đang mở tài liệu nghiên cứu chuyên đề liên quan.",
              });
            }}
            className="bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-outline-variant/30 hover:-translate-y-1 cursor-pointer"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                alt={post.title}
                src={post.image}
                loading="lazy"
              />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-surface/90 backdrop-blur-md font-label-sm text-[11px] font-semibold text-secondary shadow-sm">
                {post.badge}
              </span>
            </div>

            <div className="p-space-md flex flex-col flex-1 justify-between gap-space-sm">
              <div className="flex flex-col gap-1.5">
                <span className="text-on-surface-variant font-label-sm text-xs flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{post.readTime}</span>
                </span>
                <h3 className="font-serif text-base sm:text-lg font-semibold text-on-surface group-hover:text-primary transition-colors leading-snug line-clamp-2">
                  {post.title}
                </h3>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                  {post.desc}
                </p>
              </div>

              <div className="pt-space-xs flex items-center justify-between text-primary font-semibold text-xs border-t border-surface-container/60 mt-space-xs">
                <span>Đọc bài khảo cứu</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
