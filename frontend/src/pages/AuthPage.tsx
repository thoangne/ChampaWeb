import { useState, type FormEvent, useMemo } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Sparkles,
  ArrowRight,
  Loader2,
  CheckCircle2,
  ArrowLeft,
  Compass,
  ShieldCheck,
  Check,
  AlertCircle,
  KeyRound,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface AuthPageProps {
  initialMode?: "login" | "register" | "forgot";
}

export default function AuthPage({ initialMode = "login" }: AuthPageProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const isRegisterRoute = location.pathname.includes("dang-ky") || initialMode === "register";

  const [mode, setMode] = useState<"login" | "register" | "forgot">(
    isRegisterRoute ? "register" : initialMode
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [forgotSent, setForgotSent] = useState(false);

  const { login, register, loginWithGoogle, loginWithFacebook, resetPassword, isLoading } = useAuth();

  // Kiểm tra độ mạnh mật khẩu
  const passwordStrength = useMemo(() => {
    if (!password) return 0;
    let score = 0;
    if (password.length >= 6) score += 1;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password) || /[^A-Za-z0-9]/.test(password)) score += 1;
    return score;
  }, [password]);

  const strengthLabel = useMemo(() => {
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
  }, [passwordStrength]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email.trim()) {
      setErrorMessage("Vui lòng cung cấp địa chỉ email.");
      return;
    }

    if (mode === "forgot") {
      const ok = await resetPassword(email.trim());
      if (ok) setForgotSent(true);
      return;
    }

    if (!password) {
      setErrorMessage("Vui lòng cung cấp mật khẩu.");
      return;
    }

    if (mode === "register") {
      if (!fullName.trim()) {
        setErrorMessage("Vui lòng nhập họ tên của bạn.");
        return;
      }
      if (password.length < 6) {
        setErrorMessage("Mật khẩu phải chứa ít nhất 6 ký tự.");
        return;
      }
      if (password !== confirmPassword) {
        setErrorMessage("Mật khẩu xác nhận không trùng khớp.");
        return;
      }

      const ok = await register(email.trim(), password, fullName.trim());
      if (ok) navigate("/");
    } else {
      const ok = await login(email.trim(), password);
      if (ok) navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-stone-800">
      <Header />

      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl border border-stone-200/80 overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
          {/* Cột trái: Giới thiệu Di sản & Hình ảnh nghệ thuật Champa */}
          <div className="lg:col-span-5 bg-gradient-to-br from-amber-950 via-stone-900 to-amber-900 text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity"
              style={{ backgroundImage: `url('/images/dana-life/IMG_9911.JPG')` }}
            />
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 space-y-4">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-xs text-amber-200/80 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Trở về Trang chủ</span>
              </Link>

              <div className="pt-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-700/50 border border-amber-500/30 text-amber-200 text-xs font-medium">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Cộng đồng Văn hóa & Du lịch</span>
                </div>
                <h1 className="text-3xl font-serif font-bold text-amber-100 mt-4 leading-tight">
                  ChampaWeb
                </h1>
                <p className="text-sm text-stone-300 mt-2 leading-relaxed">
                  Cổng kết nối khám phá Tháp Chàm, nghệ thuật gốm Bàu Trúc, thổ cẩm Mỹ Nghiệp và những huyền tích nghìn năm.
                </p>
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/10 mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-600/30 border border-amber-400/40 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Trải nghiệm cá nhân hóa</h4>
                  <p className="text-[11px] text-stone-400">Lưu lại các tour yêu thích & ưu đãi đặt chỗ</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-600/30 border border-amber-400/40 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Xác thực an toàn 100%</h4>
                  <p className="text-[11px] text-stone-400">Đăng nhập nhanh 1-chạm với Google & Facebook</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cột phải: Form Đăng nhập / Đăng ký */}
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
            {/* Header Form */}
            <div className="text-left mb-5">
              {mode !== "forgot" ? (
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-serif font-bold text-stone-900">
                    {mode === "login" ? "Đăng nhập tài khoản" : "Tạo tài khoản mới"}
                  </h2>
                  <div className="flex bg-stone-100 p-1 rounded-xl text-xs font-semibold border border-stone-200/60">
                    <button
                      type="button"
                      onClick={() => {
                        setMode("login");
                        setErrorMessage("");
                      }}
                      className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                        mode === "login"
                          ? "bg-white text-stone-900 shadow-xs"
                          : "text-stone-500 hover:text-stone-900"
                      }`}
                    >
                      Đăng nhập
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setMode("register");
                        setErrorMessage("");
                      }}
                      className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                        mode === "register"
                          ? "bg-white text-stone-900 shadow-xs"
                          : "text-stone-500 hover:text-stone-900"
                      }`}
                    >
                      Đăng ký
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setMode("login");
                      setErrorMessage("");
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-950 transition-colors mb-2 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Quay lại Đăng nhập</span>
                  </button>
                  <h2 className="text-2xl font-serif font-bold text-stone-900">
                    Khôi phục mật khẩu
                  </h2>
                </div>
              )}

              <p className="text-xs text-stone-500 mt-1">
                {mode === "login"
                  ? "Vui lòng nhập thông tin đăng nhập của bạn để tiếp tục."
                  : mode === "register"
                  ? "Điền thông tin để đăng ký tài khoản tham gia cùng ChampaWeb."
                  : "Nhập địa chỉ email của bạn để nhận liên kết đặt lại mật khẩu."}
              </p>
            </div>

            {/* Nút Social Login */}
            {mode !== "forgot" && (
              <>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <button
                    type="button"
                    onClick={loginWithGoogle}
                    disabled={isLoading}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-stone-200 hover:bg-stone-50 hover:border-stone-300 text-stone-700 text-xs sm:text-sm font-semibold transition-all shadow-2xs cursor-pointer disabled:opacity-50"
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

                  <button
                    type="button"
                    onClick={loginWithFacebook}
                    disabled={isLoading}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-stone-200 hover:bg-[#1877F2]/5 hover:border-[#1877F2]/40 text-stone-700 text-xs sm:text-sm font-semibold transition-all shadow-2xs cursor-pointer disabled:opacity-50"
                  >
                    <svg className="w-4 h-4 fill-[#1877F2] shrink-0" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span>Facebook</span>
                  </button>
                </div>

                <div className="relative flex items-center justify-center mb-4">
                  <div className="border-t border-stone-200 w-full" />
                  <span className="bg-white px-3 text-[10px] uppercase tracking-wider text-stone-400 font-bold absolute flex items-center gap-1.5">
                    <span>✦</span>
                    <span>Hoặc tiếp tục với email</span>
                    <span>✦</span>
                  </span>
                </div>
              </>
            )}

            {errorMessage && (
              <div className="p-3 mb-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{errorMessage}</span>
              </div>
            )}

            {mode === "forgot" && forgotSent && (
              <div className="p-4 mb-3 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-xs flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Yêu cầu đã được tiếp nhận!</p>
                  <p className="text-[11px] text-emerald-700 mt-0.5">
                    Vui lòng kiểm tra hộp thư email {email} để thực hiện đặt lại mật khẩu.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {mode === "register" && (
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Họ và tên
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Nguyễn Văn A"
                      required
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-700/15 text-xs sm:text-sm transition-all"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Địa chỉ Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    required
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-700/15 text-xs sm:text-sm transition-all"
                  />
                  {email.includes("@") && email.includes(".") && (
                    <Check className="w-4 h-4 text-emerald-600 absolute right-3.5 top-1/2 -translate-y-1/2" />
                  )}
                </div>
              </div>

              {mode !== "forgot" && (
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-semibold text-stone-700">Mật khẩu</label>
                    {mode === "login" && (
                      <button
                        type="button"
                        onClick={() => {
                          setMode("forgot");
                          setErrorMessage("");
                        }}
                        className="text-xs text-amber-800 hover:underline cursor-pointer"
                      >
                        Quên mật khẩu?
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
                      className="w-full pl-10 pr-11 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-700/15 text-xs sm:text-sm transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Thanh đo độ mạnh mật khẩu khi Đăng ký */}
                  {mode === "register" && password.length > 0 && (
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-stone-500">Độ an toàn mật khẩu:</span>
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

              {mode === "register" && (
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Xác nhận lại mật khẩu
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full pl-10 pr-11 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-700/15 text-xs sm:text-sm transition-all"
                    />
                    {confirmPassword && password === confirmPassword && (
                      <Check className="w-4 h-4 text-emerald-600 absolute right-3.5 top-1/2 -translate-y-1/2" />
                    )}
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-700 via-orange-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white font-bold text-xs sm:text-sm shadow-md shadow-amber-800/20 hover:shadow-lg transition-all cursor-pointer disabled:opacity-60 mt-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Đang xử lý...</span>
                  </>
                ) : mode === "login" ? (
                  <>
                    <span>Đăng nhập</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                ) : mode === "register" ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Tạo tài khoản</span>
                  </>
                ) : (
                  <>
                    <KeyRound className="w-4 h-4" />
                    <span>Gửi liên kết khôi phục</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
