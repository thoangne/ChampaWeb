import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DanaHome from "./pages/DanaHome";
import TourListPage from "./pages/TourListPage";
import TourDetailPage from "./pages/TourDetailPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import DigitalHeritagePage from "./pages/DigitalHeritagePage";
import ProductListPage from "./pages/ProductListPage";
import ArtisansPage from "./pages/ArtisansPage";
import AuthPage from "./pages/AuthPage";
import OAuthCallbackPage from "./pages/OAuthCallbackPage";
import AuthModal from "./components/auth/AuthModal";
import { Toaster } from "./components/ui/sonner";
import { AudioProvider } from "./lib/AudioContext";
import { AuthProvider } from "./context/AuthContext";

// Admin CMS Modules
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminArticlesPage from "./pages/admin/AdminArticlesPage";
import AdminArticleCreatePage from "./pages/admin/AdminArticleCreatePage";
import AdminArticleEditPage from "./pages/admin/AdminArticleEditPage";
import AdminNewsPage from "./pages/admin/AdminNewsPage";
import AdminNewsCreatePage from "./pages/admin/AdminNewsCreatePage";
import AdminNewsEditPage from "./pages/admin/AdminNewsEditPage";
import AdminCategoriesPage from "./pages/admin/AdminCategoriesPage";
import AdminMediaPage from "./pages/admin/AdminMediaPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminActivityLogsPage from "./pages/admin/AdminActivityLogsPage";
import AdminSettingsPage from "./pages/admin/AdminSettingsPage";

export default function App() {
  return (
    <AuthProvider>
      <AudioProvider>
        <BrowserRouter>
          <Routes>
            {/* Trang chủ */}
            <Route path="/" element={<DanaHome />} />

            {/* Xác thực tài khoản */}
            <Route path="/dang-nhap" element={<AuthPage initialMode="login" />} />
            <Route path="/login" element={<AuthPage initialMode="login" />} />
            <Route path="/dang-ky" element={<AuthPage initialMode="register" />} />
            <Route path="/register" element={<AuthPage initialMode="register" />} />
            <Route path="/auth/callback" element={<OAuthCallbackPage />} />

            {/* Danh sách các tour */}
            <Route path="/tour" element={<TourListPage />} />

            {/* Chi tiết từng tour: /tour/:tourSlug */}
            <Route path="/tour/:tourSlug" element={<TourDetailPage />} />

            {/* Phân hệ Sản phẩm & Chân dung nghệ nhân */}
            <Route path="/san-pham" element={<ProductListPage />} />
            <Route path="/nghe-nhan" element={<ArtisansPage />} />

            {/* Phân hệ Bài Viết (Tin tức, Lịch sử, Văn hóa) */}
            <Route path="/bai-viet" element={<BlogPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/di-san" element={<BlogPage />} />

            {/* Hệ thống Quản trị Nội dung Toàn diện (CMS Admin Management) */}
            <Route path="/admin" element={<AdminDashboardPage />} />
            <Route path="/admin/articles" element={<AdminArticlesPage />} />
            <Route path="/admin/articles/create" element={<AdminArticleCreatePage />} />
            <Route path="/admin/articles/edit/:id" element={<AdminArticleEditPage />} />
            <Route path="/admin/news" element={<AdminNewsPage />} />
            <Route path="/admin/news/create" element={<AdminNewsCreatePage />} />
            <Route path="/admin/news/edit/:id" element={<AdminNewsEditPage />} />
            <Route path="/admin/categories" element={<AdminCategoriesPage />} />
            <Route path="/admin/media" element={<AdminMediaPage />} />
            <Route path="/admin/users" element={<AdminUsersPage />} />
            <Route path="/admin/activity-logs" element={<AdminActivityLogsPage />} />
            <Route path="/admin/settings" element={<AdminSettingsPage />} />

            {/* Tương thích ngược các tuyến đường quản trị cũ */}
            <Route path="/admin/blog" element={<Navigate to="/admin/articles" replace />} />
            <Route path="/admin/blog/quan-ly" element={<Navigate to="/admin/articles" replace />} />
            <Route path="/admin/blog/editor" element={<Navigate to="/admin/articles/create" replace />} />
            <Route path="/admin/blog/editor/:id" element={<Navigate to="/admin/articles" replace />} />

            {/* Chi tiết bài viết khảo cứu: /blog/:articleSlug hoặc /bai-viet/:articleSlug */}
            <Route path="/blog/:articleSlug" element={<BlogDetailPage />} />
            <Route path="/bai-viet/:articleSlug" element={<BlogDetailPage />} />

            {/* Chuyển hướng các đường dẫn cũ vào phân hệ Số hoá di sản */}
            <Route path="/ngon-ngu" element={<Navigate to="/so-hoa-di-san?tab=ngon-ngu" replace />} />
            <Route path="/hinh-anh" element={<Navigate to="/so-hoa-di-san?tab=hinh-anh" replace />} />

            {/* Phân hệ Số hoá di sản (Hình ảnh Văn hoá, Ngôn ngữ Chăm, Giải mã Văn bia) */}
            <Route path="/so-hoa-di-san" element={<DigitalHeritagePage />} />
            <Route path="/ban-do" element={<Navigate to="/#ban-do" replace />} />
          </Routes>
          <AuthModal />
          <Toaster />
        </BrowserRouter>
      </AudioProvider>
    </AuthProvider>
  );
}
