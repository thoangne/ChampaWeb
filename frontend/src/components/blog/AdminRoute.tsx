import { type ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ShieldAlert, Loader2 } from "lucide-react";

interface AdminRouteProps {
  children: ReactNode;
}

export default function AdminRoute({ children }: AdminRouteProps) {
  const { user, isAdmin, isLoading, openAuthModal } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center gap-3">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
        <span className="font-serif text-sm text-on-surface-variant tracking-wider">
          Đang xác thực quyền quản trị viên...
        </span>
      </div>
    );
  }

  // 1. Chưa đăng nhập
  if (!user) {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-outline-variant/50 text-center flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-on-surface">
            Yêu cầu Quyền Quản trị viên
          </h2>
          <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
            Khu vực soạn thảo và quản lý bài viết Blog chỉ dành riêng cho Ban biên tập và Quản trị viên hệ thống. Vui lòng đăng nhập bằng tài khoản Quản trị để tiếp tục.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full mt-2">
            <button
              onClick={() => openAuthModal("login")}
              className="flex-1 py-3 px-4 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-all shadow-md"
              type="button"
            >
              Đăng nhập Quản trị
            </button>
            <Navigate to="/bai-viet" state={{ from: location }} replace={false} />
          </div>
        </div>
      </div>
    );
  }

  // 2. Đã đăng nhập nhưng không phải admin
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-error/30 text-center flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-error/10 text-error flex items-center justify-center">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-on-surface">
            Từ chối Truy cập (403 Forbidden)
          </h2>
          <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
            Tài khoản <strong className="text-on-surface">{user.email}</strong> không có vai trò Quản trị viên (Admin). Bạn không được phép tạo hoặc chỉnh sửa nội dung bài viết.
          </p>
          <a
            href="/bai-viet"
            className="w-full py-3 px-4 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold text-sm transition-all"
          >
            Quay lại trang Blog di sản
          </a>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

