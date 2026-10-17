import { useState } from "react";
import type { FormEvent } from "react";
import { MessageSquare, ThumbsUp, CornerDownRight, Send } from "lucide-react";
import { toast } from "../ui/sonner";

interface CommentItem {
  id: string;
  initials: string;
  name: string;
  badge: string;
  badgeClass: string;
  timeAgo: string;
  content: string;
  likes: number;
  isNested?: boolean;
}

export default function BlogDetailComments() {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<CommentItem[]>([
    {
      id: "c1",
      initials: "A",
      name: "Người dùng A",
      badge: "Nhà nghiên cứu kiến trúc cổ",
      badgeClass: "bg-primary-fixed text-on-primary-fixed-variant",
      timeAgo: "3 ngày trước",
      content:
        "Bài viết tổng hợp rất mạch lạc giữa phương diện khoa học khảo cổ học vật liệu và tín ngưỡng Siva giáo. Tôi có mẫu phân tích phổ tại viện năm 2019 xác nhận hàm lượng ôxít sắt (Fe2O3) trong đất sét lấy từ mỏ đất gần sông Dinh rất cao, chính điều này khi nung trong điều kiện thiếu oxy từng giai đoạn đã tạo nên màng oxit đỏ sẫm chống thấm tự nhiên mà không cần men.",
      likes: 18,
    },
    {
      id: "c2",
      initials: "B",
      name: "Người dùng B",
      badge: "Hậu duệ dòng họ Muk Đô Vinh",
      badgeClass: "bg-secondary-fixed text-on-secondary-fixed-variant",
      timeAgo: "1 ngày trước",
      content:
        "Cảm ơn nhóm khảo cứu Dana Champa. Trong ký ức người già làng Đô Vinh, nhựa cây bời lời còn được gọi là Bak Kalo, khi đi rừng các thợ cả xưa còn khấn xin thần rừng Yan Bri trước khi cạo vỏ. Kỹ thuật này là sự kết hợp tâm linh với tự nhiên, không chỉ là công nghệ thuần túy.",
      likes: 12,
      isNested: true,
    },
  ]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment: CommentItem = {
      id: Date.now().toString(),
      initials: "LK",
      name: "Lữ khách Độc giả",
      badge: "Người yêu văn hóa",
      badgeClass: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
      timeAgo: "Vừa xong",
      content: commentText.trim(),
      likes: 1,
    };

    setComments([newComment, ...comments]);
    setCommentText("");
    toast.success("Bình luận của bạn đã được ghi nhận!", {
      description: "Ý kiến sẽ hiển thị sau khi qua kiểm duyệt văn hóa.",
    });
  };

  const handleLike = (id: string) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c))
    );
  };

  return (
    <section className="bg-surface rounded-3xl p-space-md sm:p-space-lg xl:p-space-xl shadow-xl border border-outline-variant/30 flex flex-col gap-space-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pb-space-sm border-b border-surface-container/60">
        <div className="flex items-center gap-space-sm">
          <MessageSquare className="h-7 w-7 text-primary shrink-0" />
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-on-surface">
              Góc Đàm Đạo & Thảo Luận Học Thuật
            </h3>
            <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
              {comments.length + 12} ý kiến đóng góp từ các nhà nghiên cứu, kiến trúc sư & người yêu di sản
            </p>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-xs font-medium border border-outline-variant/30 w-fit">
          Diễn đàn mở có kiểm duyệt văn hóa
        </span>
      </div>

      {/* Comment Input Box */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-space-xs bg-surface-container-low p-space-md rounded-2xl border border-outline-variant/30"
      >
        <label className="font-title-md text-sm font-semibold text-on-surface">
          Đóng góp góc nhìn hoặc tư liệu điền dã của bạn
        </label>
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="w-full p-space-sm rounded-xl bg-surface text-on-surface font-body-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 border border-outline-variant/40 shadow-inner resize-y min-h-[90px]"
          placeholder="Chia sẻ quan sát của bạn về kỹ thuật gạch nung hoặc các câu chuyện truyền ngôn dân gian tại Panduranga..."
          rows={3}
        ></textarea>

        <div className="flex items-center justify-between pt-space-xs flex-wrap gap-2">
          <span className="text-on-surface-variant text-xs">
            Hỗ trợ trích dẫn nguồn sách hoặc mã bia ký
          </span>
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            <Send className="h-3.5 w-3.5" />
            <span>Gửi bình luận</span>
          </button>
        </div>
      </form>

      {/* Comment Thread List */}
      <div className="flex flex-col gap-space-md">
        {comments.map((c) => (
          <div
            key={c.id}
            className={`flex items-start gap-space-sm ${
              c.isNested ? "pl-0 md:pl-10" : ""
            }`}
          >
            <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
              {c.initials}
            </div>

            <div className="flex-1 flex flex-col gap-1.5 bg-surface-container-low/60 p-space-md rounded-2xl border border-outline-variant/30">
              <div className="flex items-center justify-between flex-wrap gap-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-serif font-semibold text-sm sm:text-base text-on-surface">
                    {c.name}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full font-label-sm text-[11px] font-semibold ${c.badgeClass}`}
                  >
                    {c.badge}
                  </span>
                </div>
                <span className="text-on-surface-variant text-xs">{c.timeAgo}</span>
              </div>

              <p className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {c.content}
              </p>

              <div className="flex items-center gap-space-md pt-1 text-xs text-on-surface-variant">
                <button
                  onClick={() => handleLike(c.id)}
                  className="hover:text-primary transition-colors flex items-center gap-1 font-semibold cursor-pointer"
                  type="button"
                >
                  <ThumbsUp className="h-3.5 w-3.5" />
                  <span>{c.likes} thích</span>
                </button>
                <button
                  onClick={() =>
                    toast.info(`Đang trả lời bình luận của ${c.name}`)
                  }
                  className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
                  type="button"
                >
                  <CornerDownRight className="h-3.5 w-3.5" />
                  <span>Trả lời</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
