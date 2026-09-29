import { BrowserRouter, Routes, Route } from "react-router-dom";
import DanaHome from "./pages/DanaHome";
import TourListPage from "./pages/TourListPage";
import TourDetailPage from "./pages/TourDetailPage";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Trang chủ */}
        <Route path="/" element={<DanaHome />} />

        {/* Danh sách các tour */}
        <Route path="/tour" element={<TourListPage />} />

        {/* Chi tiết từng tour: /tour/:tourSlug */}
        <Route path="/tour/:tourSlug" element={<TourDetailPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}