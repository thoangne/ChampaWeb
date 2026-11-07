const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const supabaseUrl = process.env.SUPABASE_URL || "https://placeholder-project.supabase.co";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || "placeholder-anon-key";

if (!process.env.SUPABASE_URL || (!process.env.SUPABASE_SERVICE_ROLE_KEY && !process.env.SUPABASE_ANON_KEY)) {
  console.warn("⚠️ [CHÚ Ý] Thiếu cấu hình SUPABASE_URL hoặc SUPABASE_SERVICE_ROLE_KEY trong backend/.env");
  console.warn("ℹ️ Server vẫn khởi chạy bình thường ở chế độ dev (Health check: http://localhost:5000/api/health).");
}

let supabase = null;

try {
  supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false },
    realtime: {
      // Tránh crash trên Node.js <= 20 thiếu native WebSocket
      transport: typeof WebSocket !== "undefined" ? WebSocket : undefined,
    },
  });
} catch (err) {
  console.warn("⚠️ Không thể khởi tạo Supabase Client:", err.message);
  supabase = {
    auth: {
      signUp: async () => ({ error: { message: "Supabase chưa được cấu hình." } }),
      signInWithPassword: async () => ({ error: { message: "Supabase chưa được cấu hình." } }),
      getUser: async () => ({ error: { message: "Supabase chưa được cấu hình." } }),
    },
    from: () => ({
      select: () => ({ eq: () => ({ order: () => ({ range: async () => ({ data: [], count: 0 }) }) }) }),
      insert: () => ({ select: () => ({ single: async () => ({ data: null }) }) }),
      update: () => ({ eq: async () => ({ data: null }) }),
      delete: () => ({ eq: async () => ({ data: null }) }),
    }),
    rpc: async () => { },
  };
}

module.exports = supabase;
