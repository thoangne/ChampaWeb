import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase, isSupabaseConfigured } from "../lib/supabase";
import { Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";

export default function OAuthCallbackPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        if (isSupabaseConfigured()) {
          const { data, error } = await supabase.auth.getSession();
          if (error) {
            toast.error(`Xác thực mạng xã hội thất bại: ${error.message}`);
            navigate("/");
            return;
          }

          if (data?.session) {
            toast.success("Đăng nhập tài khoản thành công!");
          }
        }
      } catch (err) {
        console.error("Callback process error:", err);
      } finally {
        // Trở về trang trước hoặc trang chủ
        setTimeout(() => {
          navigate("/");
        }, 800);
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-200/80 max-w-sm w-full text-center space-y-4">
        <div className="w-14 h-14 bg-amber-100 text-amber-800 rounded-2xl mx-auto flex items-center justify-center">
          <Sparkles className="w-7 h-7" />
        </div>
        <h2 className="text-xl font-serif font-bold text-stone-900">
          Đang xác thực tài khoản...
        </h2>
        <p className="text-xs text-stone-500 leading-relaxed">
          Hệ thống đang hoàn tất quá trình đăng nhập và đồng bộ dữ liệu di sản của bạn.
        </p>
        <div className="flex items-center justify-center py-2">
          <Loader2 className="w-6 h-6 animate-spin text-amber-700" />
        </div>
      </div>
    </div>
  );
}
