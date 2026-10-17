import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DanaHome from "./pages/DanaHome";
import TourListPage from "./pages/TourListPage";
import TourDetailPage from "./pages/TourDetailPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import DigitalHeritagePage from "./pages/DigitalHeritagePage";
import { Toaster } from "./components/ui/sonner";
import { AudioProvider } from "./lib/AudioContext";

export default function App() {
  return (
    <AudioProvider>
      <BrowserRouter>
        <Routes>
        {/* Trang chủ */}
        <Route path="/" element={<DanaHome />} />

        {/* Danh sách các tour */}
        <Route path="/tour" element={<TourListPage />} />

        {/* Chi tiết từng tour: /tour/:tourSlug */}
        <Route path="/tour/:tourSlug" element={<TourDetailPage />} />

        {/* Phân hệ Bài Viết (Tin tức, Lịch sử, Văn hóa) */}
        <Route path="/bai-viet" element={<BlogPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/di-san" element={<BlogPage />} />

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
      <Toaster />
    </BrowserRouter>
  </AudioProvider>
);
}