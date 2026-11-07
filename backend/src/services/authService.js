const supabase = require("../config/supabaseClient");

class AuthService {
  constructor() {
    this.isSupabaseConfigured =
      Boolean(process.env.SUPABASE_URL) &&
      !process.env.SUPABASE_URL.includes("placeholder-project") &&
      Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY) &&
      !String(process.env.SUPABASE_ANON_KEY).includes("placeholder");

    // Bộ nhớ in-memory dev fallback nếu chưa cấu hình Supabase credentials thật
    this.mockUsers = new Map([
      [
        "admin@champaweb.vn",
        {
          id: "usr-admin-001",
          email: "admin@champaweb.vn",
          password: "Admin@123456",
          fullName: "Quản Trị Viên Di Sản",
          avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
          provider: "email",
          role: "admin",
          createdAt: new Date().toISOString(),
        },
      ],
      [
        "demo@champaweb.vn",
        {
          id: "usr-demo-001",
          email: "demo@champaweb.vn",
          password: "Password123@",
          fullName: "Nguyễn Chăm Demo",
          avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
          provider: "email",
          role: "customer",
          createdAt: new Date().toISOString(),
        },
      ],
    ]);
  }

  // 1. Đăng ký bằng Email & Mật khẩu
  async registerUser({ email, password, fullName }) {
    if (!email || !password) {
      throw new Error("Vui lòng cung cấp đầy đủ email và mật khẩu!");
    }

    const cleanEmail = email.toLowerCase().trim();

    if (this.isSupabaseConfigured) {
      const { data, error } = await supabase.auth.signUp({
        email: cleanEmail,
        password: password,
        options: {
          data: {
            full_name: fullName || cleanEmail.split("@")[0],
          },
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      const user = data.user;
      const token = data.session?.access_token || `jwt-token-${user.id}`;

      return {
        user: {
          id: user.id,
          email: user.email,
          fullName: user.user_metadata?.full_name || fullName || "",
          avatarUrl: user.user_metadata?.avatar_url || "",
          provider: "email",
        },
        token,
      };
    }

    // Dev Fallback Mode
    if (this.mockUsers.has(cleanEmail)) {
      const error = new Error("Email này đã được sử dụng. Vui lòng đăng nhập hoặc dùng email khác.");
      error.status = 409;
      throw error;
    }

    const newUser = {
      id: `usr-${Date.now()}`,
      email: cleanEmail,
      password, // Trong thực tế lưu hash bcrypt
      fullName: fullName || cleanEmail.split("@")[0],
      avatarUrl: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(fullName || cleanEmail)}`,
      provider: "email",
      role: "customer",
      createdAt: new Date().toISOString(),
    };

    this.mockUsers.set(cleanEmail, newUser);

    return {
      user: {
        id: newUser.id,
        email: newUser.email,
        fullName: newUser.fullName,
        avatarUrl: newUser.avatarUrl,
        provider: newUser.provider,
        role: newUser.role,
      },
      token: `mock-jwt-token-${newUser.id}`,
    };
  }

  // 2. Đăng nhập bằng Email & Mật khẩu
  async loginUser({ email, password }) {
    if (!email || !password) {
      throw new Error("Vui lòng nhập email và mật khẩu!");
    }

    const cleanEmail = email.toLowerCase().trim();

    if (this.isSupabaseConfigured) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: cleanEmail,
        password: password,
      });

      if (error) {
        throw new Error("Email hoặc mật khẩu không chính xác.");
      }

      const user = data.user;
      return {
        user: {
          id: user.id,
          email: user.email,
          fullName: user.user_metadata?.full_name || user.email.split("@")[0],
          avatarUrl: user.user_metadata?.avatar_url || "",
          provider: "email",
        },
        token: data.session.access_token,
      };
    }

    // Dev Fallback Mode
    const user = this.mockUsers.get(cleanEmail);
    if (!user || user.password !== password) {
      const error = new Error("Email hoặc mật khẩu không chính xác.");
      error.status = 401;
      throw error;
    }

    return {
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        avatarUrl: user.avatarUrl,
        provider: user.provider,
        role: user.role,
      },
      token: `mock-jwt-token-${user.id}`,
    };
  }

  // 3. Xử lý Social OAuth (Google / Facebook)
  async handleOAuthCallback({ provider, token, user }) {
    if (!provider || !["google", "facebook"].includes(provider)) {
      throw new Error("Nhà cung cấp OAuth không hợp lệ!");
    }

    const email = user?.email || `user_${Date.now()}@${provider}.oauth`;
    const fullName = user?.fullName || (provider === "google" ? "Google User" : "Facebook User");
    const avatarUrl = user?.avatarUrl || "";

    const userProfile = {
      id: user?.id || `oauth-${provider}-${Date.now()}`,
      email,
      fullName,
      avatarUrl,
      provider,
      role: "customer",
    };

    // Lưu vào mock user cho dev mode
    this.mockUsers.set(email.toLowerCase(), {
      ...userProfile,
      createdAt: new Date().toISOString(),
    });

    return {
      user: userProfile,
      token: token || `mock-oauth-token-${provider}-${Date.now()}`,
    };
  }

  // 4. Xác minh Token và Lấy User
  async verifyToken(token) {
    if (!token) return null;

    if (this.isSupabaseConfigured) {
      const { data: { user }, error } = await supabase.auth.getUser(token);
      if (error || !user) return null;
      return {
        id: user.id,
        email: user.email,
        fullName: user.user_metadata?.full_name || "",
        avatarUrl: user.user_metadata?.avatar_url || "",
        provider: user.app_metadata?.provider || "email",
        role: user.app_metadata?.role || user.user_metadata?.role || "customer",
      };
    }

    // Dev Fallback Mode
    for (const user of this.mockUsers.values()) {
      if (token.includes(user.id)) {
        return {
          id: user.id,
          email: user.email,
          fullName: user.fullName,
          avatarUrl: user.avatarUrl,
          provider: user.provider,
          role: user.role,
        };
      }
    }

    // Token mẫu cho demo
    return {
      id: "usr-demo-001",
      email: "demo@champaweb.vn",
      fullName: "Nguyễn Chăm Demo",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      provider: "email",
      role: "customer",
    };
  }
}

module.exports = new AuthService();
