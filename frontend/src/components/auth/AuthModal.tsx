import { useState, useEffect, type FormEvent, useMemo } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  X,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Sparkles,
  ArrowRight,
  Loader2,
  CheckCircle2,
  Check,
  ShieldCheck,
  Compass,
  ArrowLeft,
  KeyRound,
  AlertCircle,
} from "lucide-react";

export default function AuthModal() {
  const {
    isAuthModalOpen,
    authModalTab,
    closeAuthModal,
    login,
    register,
    loginWithGoogle,
    loginWithFacebook,
    resetPassword,
    isLoading,
  } = useAuth();

  // Chế độ form: 'login' | 'register' | 'forgot'
  const [mode, setMode] = useState<"login" | "register" | "forgot">("login");
  
  // Ngôn ngữ nội bộ trong modal: 'vi' | 'en'
  const [modalLang, setModalLang] = useState<"vi" | "en">(() => {
    return localStorage.getItem("champa_language") === "en" ? "en" : "vi";
  });

  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [forgotSent, setForgotSent] = useState(false);

  // Đồng bộ tab từ AuthContext khi modal mở ra
  useEffect(() => {
    if (isAuthModalOpen) {
      setMode(authModalTab || "login");
      setErrorMessage("");
      setForgotSent(false);
    }
  }, [isAuthModalOpen, authModalTab]);

  // Đóng modal khi nhấn Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isAuthModalOpen) {
        closeAuthModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAuthModalOpen, closeAuthModal]);

  // Kiểm tra độ mạnh mật khẩu (Password Strength)
  const passwordStrength = useMemo(() => {
    if (!password) return 0;
    let score = 0;
    if (password.length >= 6) score += 1;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password) || /[^A-Za-z0-9]/.test(password)) score += 1;
    return score; // 0 - 4
  }, [password]);

  const strengthLabel = useMemo(() => {
    if (modalLang === "en") {
      switch (passwordStrength) {
        case 0:
        case 1:
          return { text: "Weak", color: "bg-red-500", textCol: "text-red-500" };
        case 2:
          return { text: "Fair", color: "bg-amber-500", textCol: "text-amber-500" };
        case 3:
          return { text: "Good", color: "bg-lime-500", textCol: "text-lime-600" };
        case 4:
          return { text: "Strong", color: "bg-emerald-600", textCol: "text-emerald-600" };
        default:
          return { text: "", color: "bg-stone-200", textCol: "" };
      }
    }
    switch (passwordStrength) {
      case 0:
      case 1:
        return { text: "Yếu", color: "bg-red-500", textCol: "text-red-500" };
      case 2:
        return { text: "Trung bình", color: "bg-amber-500", textCol: "text-amber-500" };
      case 3:
        return { text: "Khá", color: "bg-lime-500", textCol: "text-lime-600" };
      case 4:
        return { text: "Mạnh", color: "bg-emerald-600", textCol: "text-emerald-600" };
      default:
        return { text: "", color: "bg-stone-200", textCol: "" };
    }
  }, [passwordStrength, modalLang]);

  if (!isAuthModalOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email.trim()) {
      setErrorMessage(modalLang === "vi" ? "Vui lòng nhập địa chỉ email." : "Please enter your email address.");
      return;
    }

    // Chế độ quên mật khẩu
    if (mode === "forgot") {
      const ok = await resetPassword(email.trim());
      if (ok) setForgotSent(true);
      return;
    }

    if (!password) {
      setErrorMessage(modalLang === "vi" ? "Vui lòng nhập mật khẩu." : "Please enter your password.");
      return;
    }

    if (mode === "register") {
      if (!fullName.trim()) {
        setErrorMessage(modalLang === "vi" ? "Vui lòng nhập họ và tên của bạn." : "Please enter your full name.");
        return;
      }
      if (password.length < 6) {
        setErrorMessage(
          modalLang === "vi"
            ? "Mật khẩu phải chứa ít nhất 6 ký tự."
            : "Password must be at least 6 characters long."
        );
        return;
      }
      if (password !== confirmPassword) {
        setErrorMessage(
          modalLang === "vi"
            ? "Mật khẩu nhập lại không trùng khớp."
            : "Confirm password does not match."
        );
        return;
      }

      await register(email.trim(), password, fullName.trim());
    } else {
      await login(email.trim(), password);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      {/* 1. Backdrop làm mờ & chuyển động xuất hiện */}
      <div
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-md transition-opacity duration-300"
        onClick={closeAuthModal}
      />

      {/* 2. Container Modal lớn 2 cột phong cách Di sản Champa */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-amber-900/15 overflow-hidden z-10 transition-all transform animate-in fade-in zoom-in-95 duration-200 flex flex-col md:flex-row min-h-[580px]">
        {/* Nút đóng modal ở góc trên phải */}
        <button
          type="button"
          onClick={closeAuthModal}
          className="absolute top-3.5 right-3.5 z-20 p-2 text-stone-400 hover:text-stone-800 hover:bg-stone-100/90 rounded-full transition-all cursor-pointer"
          aria-label="Đóng cửa sổ"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ========================================================
            CỘT TRÁI: SHOWCASE DI SẢN & VĂN HOÁ BẢN ĐỊA (DESKTOP)
        ======================================================== */}
        <div className="hidden md:flex md:w-5/12 bg-gradient-to-br from-amber-950 via-stone-900 to-amber-900 p-8 text-white flex-col justify-between relative overflow-hidden">
          {/* Ảnh nền điền dã mờ nghệ thuật */}
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity"
            style={{ backgroundImage: `url('/images/dana-life/IMG_9911.JPG')` }}
          />
          {/* Lớp lưới hoa văn sa thạch */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px]" />

          {/* Phần trên: Thương hiệu & Khẩu hiệu */}
          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-[11px] font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{modalLang === "vi" ? "Di sản sống Champa" : "Living Champa Heritage"}</span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-amber-50 leading-snug">
              {mode === "login"
                ? modalLang === "vi"
                  ? "Chào mừng trở lại Không gian Di sản"
                  : "Welcome Back to Champa Realm"
                : mode === "register"
                ? modalLang === "vi"
                  ? "Đồng hành cùng Di sản Champa"
                  : "Join Our Heritage Circle"
                : modalLang === "vi"
                ? "Khôi phục Quyền Truy cập"
                : "Reset Your Password"}
            </h3>

            <p className="text-xs text-amber-100/75 leading-relaxed">
              {modalLang === "vi"
                ? "Kết nối các tuyến tour điền dã, báu vật cổ vật, nghệ nhân gốm Bàu Trúc & thổ cẩm Mỹ Nghiệp."
                : "Connect with authentic field expeditions, sacred monuments, Master Artisans and local communities."}
            </p>
          </div>

          {/* Phần giữa: Giá trị cốt lõi */}
          <div className="relative z-10 space-y-3 my-4 py-4 border-y border-white/10">
            <div className="flex items-start gap-2.5">
              <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-300 shrink-0 mt-0.5">
                <Compass className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <p className="font-semibold text-white">
                  {modalLang === "vi" ? "Lưu giữ hành trình" : "Save Your Itineraries"}
                </p>
                <p className="text-[11px] text-stone-300">
                  {modalLang === "vi"
                    ? "Quản lý đơn đặt tour & danh sách điểm khảo cứu yêu thích"
                    : "Manage bookings & bookmarked sacred sites"}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-300 shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <p className="font-semibold text-white">
                  {modalLang === "vi" ? "Bảo mật chuẩn Quốc tế" : "Enterprise-grade Security"}
                </p>
                <p className="text-[11px] text-stone-300">
                  {modalLang === "vi"
                    ? "Mã hóa dữ liệu & xác thực Google / Facebook PKCE"
                    : "End-to-end encrypted & certified OAuth 2.0 PKCE"}
                </p>
              </div>
            </div>
          </div>

          {/* Phần dưới: Trích dẫn nghệ nhân */}
          <div className="relative z-10 text-[11px] italic text-amber-200/90 leading-relaxed bg-black/20 p-3 rounded-2xl border border-white/5">
            "{modalLang === "vi"
              ? "Mỗi bước chân chạm vào đất nung là một lần lắng nghe hơi thở ngàn năm..."
              : "Every footprint touching sacred terracotta echoes a thousand years of memory..."}
            <span className="block not-italic font-medium text-[10px] text-amber-400 mt-1">
              — Muk Đàng Thị Phan (Nghệ nhân Bàu Trúc)
            </span>
          </div>
        </div>

        {/* ========================================================
            CỘT PHẢI: FORM ĐIỀU HƯỚNG & XÁC THỰC NGƯỜI DÙNG
        ======================================================== */}
        <div className="w-full md:w-7/12 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Thanh công cụ nhỏ phía trên: Chuyển ngôn ngữ Modal VI / EN */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
                ChampaWeb Auth
              </span>

              <div className="flex items-center bg-stone-100 p-0.5 rounded-full text-[10px] font-bold pr-7 sm:pr-8">
                <button
                  type="button"
                  onClick={() => setModalLang("vi")}
                  className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                    modalLang === "vi"
                      ? "bg-amber-700 text-white shadow-2xs"
                      : "text-stone-500 hover:text-stone-900"
                  }`}
                >
                  VI
                </button>
                <button
                  type="button"
                  onClick={() => setModalLang("en")}
                  className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                    modalLang === "en"
                      ? "bg-amber-700 text-white shadow-2xs"
                      : "text-stone-500 hover:text-stone-900"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            {/* Segmented Tab Switcher (Đăng nhập / Đăng ký) */}
            {mode !== "forgot" ? (
              <div className="flex bg-stone-100/90 p-1 rounded-2xl mb-5 border border-stone-200/60">
                <button
                  type="button"
                  onClick={() => {
                    setMode("login");
                    setErrorMessage("");
                  }}
                  className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    mode === "login"
                      ? "bg-white text-stone-900 shadow-sm"
                      : "text-stone-500 hover:text-stone-800"
                  }`}
                >
                  <span>{modalLang === "vi" ? "Đăng nhập" : "Sign In"}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMode("register");
                    setErrorMessage("");
                  }}
                  className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    mode === "register"
                      ? "bg-white text-stone-900 shadow-sm"
                      : "text-stone-500 hover:text-stone-800"
                  }`}
                >
                  <span>{modalLang === "vi" ? "Tạo tài khoản" : "Register"}</span>
                </button>
              </div>
            ) : (
              <div className="mb-4">
                <button
                  type="button"
                  onClick={() => {
                    setMode("login");
                    setErrorMessage("");
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-950 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{modalLang === "vi" ? "Quay lại Đăng nhập" : "Back to Sign In"}</span>
                </button>
                <h3 className="text-xl font-serif font-bold text-stone-900 mt-2">
                  {modalLang === "vi" ? "Khôi phục mật khẩu" : "Reset Password"}
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  {modalLang === "vi"
                    ? "Nhập email của bạn để nhận liên kết thiết lập lại mật khẩu."
                    : "Enter your registered email to receive a password reset link."}
                </p>
              </div>
            )}

            {/* Social Buttons (Chỉ hiển thị ở chế độ login & register) */}
            {mode !== "forgot" && (
              <>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {/* Nút Google */}
                  <button
                    type="button"
                    onClick={loginWithGoogle}
                    disabled={isLoading}
                    className="flex items-center justify-center gap-2.5 py-2.5 px-3 rounded-xl border border-stone-200/90 bg-white hover:bg-stone-50 hover:border-stone-300 text-stone-700 text-xs sm:text-sm font-semibold transition-all shadow-2xs hover:shadow-xs cursor-pointer active:scale-[0.98] disabled:opacity-50"
                  >
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                    <span>Google</span>
                  </button>

                  {/* Nút Facebook */}
                  <button
                    type="button"
                    onClick={loginWithFacebook}
                    disabled={isLoading}
                    className="flex items-center justify-center gap-2.5 py-2.5 px-3 rounded-xl border border-stone-200/90 bg-white hover:bg-[#1877F2]/5 hover:border-[#1877F2]/40 text-stone-700 text-xs sm:text-sm font-semibold transition-all shadow-2xs hover:shadow-xs cursor-pointer active:scale-[0.98] disabled:opacity-50"
                  >
                    <svg className="w-4 h-4 fill-[#1877F2] shrink-0" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span>Facebook</span>
                  </button>
                </div>

                {/* Đường phân cách nghệ thuật */}
                <div className="relative flex items-center justify-center my-4">
                  <div className="border-t border-stone-200 w-full" />
                  <span className="bg-white px-3 text-[10px] uppercase tracking-wider text-stone-400 font-bold absolute flex items-center gap-1.5">
                    <span>✦</span>
                    <span>{modalLang === "vi" ? "Hoặc dùng Email" : "Or via Email"}</span>
                    <span>✦</span>
                  </span>
                </div>
              </>
            )}

            {/* Thông báo lỗi dạng Alert Banner */}
            {errorMessage && (
              <div className="p-3 mb-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-start gap-2 animate-in fade-in">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{errorMessage}</span>
              </div>
            )}

            {/* Thông báo khi đã gửi link quên mật khẩu thành công */}
            {mode === "forgot" && forgotSent && (
              <div className="p-4 mb-3 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-xs flex items-start gap-2.5 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">
                    {modalLang === "vi" ? "Yêu cầu đã được tiếp nhận!" : "Reset Link Dispatched!"}
                  </p>
                  <p className="text-[11px] text-emerald-700 mt-0.5">
                    {modalLang === "vi"
                      ? `Vui lòng kiểm tra hộp thư email ${email} để thực hiện đặt lại mật khẩu.`
                      : `Please check your inbox at ${email} to set a new password.`}
                  </p>
                </div>
              </div>
            )}

            {/* Form nhập liệu chính */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Trường Họ tên khi đăng ký */}
              {mode === "register" && (
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {modalLang === "vi" ? "Họ và tên" : "Full Name"}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={modalLang === "vi" ? "Ví dụ: Nguyễn Văn Chăm" : "e.g. John Doe"}
                      required
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-700/15 text-xs sm:text-sm transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Trường Email */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {modalLang === "vi" ? "Địa chỉ Email" : "Email Address"}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    required
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-700/15 text-xs sm:text-sm transition-all"
                  />
                  {email.includes("@") && email.includes(".") && (
                    <Check className="w-4 h-4 text-emerald-600 absolute right-3.5 top-1/2 -translate-y-1/2" />
                  )}
                </div>
              </div>

              {/* Trường Mật khẩu (Chế độ Login & Register) */}
              {mode !== "forgot" && (
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-semibold text-stone-700">
                      {modalLang === "vi" ? "Mật khẩu" : "Password"}
                    </label>
                    {mode === "login" && (
                      <button
                        type="button"
                        onClick={() => {
                          setMode("forgot");
                          setErrorMessage("");
                        }}
                        className="text-xs text-amber-800 hover:text-amber-950 font-medium hover:underline cursor-pointer"
                      >
                        {modalLang === "vi" ? "Quên mật khẩu?" : "Forgot password?"}
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full pl-10 pr-11 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-700/15 text-xs sm:text-sm transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 cursor-pointer"
                      aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Thanh đo độ mạnh mật khẩu (Password Strength Bar) khi Đăng ký */}
                  {mode === "register" && password.length > 0 && (
                    <div className="mt-2 space-y-1.5 animate-in fade-in duration-200">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-stone-500">
                          {modalLang === "vi" ? "Độ an toàn mật khẩu:" : "Password strength:"}
                        </span>
                        <span className={`font-bold ${strengthLabel.textCol}`}>
                          {strengthLabel.text}
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-1.5 h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all ${
                            passwordStrength >= 1 ? strengthLabel.color : "bg-transparent"
                          }`}
                        />
                        <div
                          className={`h-full transition-all ${
                            passwordStrength >= 2 ? strengthLabel.color : "bg-transparent"
                          }`}
                        />
                        <div
                          className={`h-full transition-all ${
                            passwordStrength >= 3 ? strengthLabel.color : "bg-transparent"
                          }`}
                        />
                        <div
                          className={`h-full transition-all ${
                            passwordStrength >= 4 ? strengthLabel.color : "bg-transparent"
                          }`}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Nhập lại mật khẩu (khi Đăng ký) */}
              {mode === "register" && (
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    {modalLang === "vi" ? "Xác nhận lại mật khẩu" : "Confirm Password"}
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full pl-10 pr-11 py-2.5 rounded-xl border border-stone-200 bg-stone-50/50 focus:bg-white focus:outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-700/15 text-xs sm:text-sm transition-all"
                    />
                    {confirmPassword && password === confirmPassword && (
                      <Check className="w-4 h-4 text-emerald-600 absolute right-3.5 top-1/2 -translate-y-1/2" />
                    )}
                  </div>
                </div>
              )}

              {/* Tùy chọn ghi nhớ đăng nhập */}
              {mode === "login" && (
                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-stone-600 select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded border-stone-300 text-amber-700 focus:ring-amber-700/20 cursor-pointer"
                    />
                    <span>{modalLang === "vi" ? "Ghi nhớ đăng nhập" : "Remember this device"}</span>
                  </label>
                </div>
              )}

              {/* Nút bấm Submit chính */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-700 via-orange-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white font-bold text-xs sm:text-sm shadow-md shadow-amber-800/25 hover:shadow-lg transition-all cursor-pointer active:scale-[0.99] disabled:opacity-60 mt-1"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{modalLang === "vi" ? "Đang xác thực..." : "Verifying..."}</span>
                  </>
                ) : mode === "login" ? (
                  <>
                    <span>{modalLang === "vi" ? "Đăng nhập ngay" : "Sign In Now"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                ) : mode === "register" ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{modalLang === "vi" ? "Hoàn tất Đăng ký" : "Complete Registration"}</span>
                  </>
                ) : (
                  <>
                    <KeyRound className="w-4 h-4" />
                    <span>{modalLang === "vi" ? "Gửi liên kết khôi phục" : "Send Reset Link"}</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Footer nhỏ cam kết bảo mật & quyền riêng tư */}
          <div className="pt-4 border-t border-stone-100 text-center">
            <p className="text-[11px] text-stone-400 leading-tight">
              {modalLang === "vi" ? (
                <>
                  Bằng việc tiếp tục, bạn đồng ý với{" "}
                  <a href="#dieu-khoan" className="underline hover:text-amber-800">
                    Điều khoản sử dụng
                  </a>{" "}
                  &{" "}
                  <a href="#chinh-sach" className="underline hover:text-amber-800">
                    Chính sách bảo vệ di sản ChampaWeb
                  </a>
                  .
                </>
              ) : (
                <>
                  By continuing, you agree to our{" "}
                  <a href="#terms" className="underline hover:text-amber-800">
                    Terms of Use
                  </a>{" "}
                  &{" "}
                  <a href="#privacy" className="underline hover:text-amber-800">
                    Heritage Privacy Policy
                  </a>
                  .
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
