const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const supabaseUrl = process.env.SUPABASE_URL || "https://placeholder-project.supabase.co";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || "placeholder-anon-key";

if (!process.env.SUPABASE_URL || (!process.env.SUPABASE_SERVICE_ROLE_KEY && !process.env.SUPABASE_ANON_KEY)) {
  console.warn("⚠️ [CHÚ Ý] Thiếu cấu hình SUPABASE_URL hoặc SUPABASE_SERVICE_ROLE_KEY trong backend/.env");
  console.warn("ℹ️ Server vẫn khởi chạy bình thường ở chế độ dev (Health check: http://localhost:5000/api/health).");
}

// Cung cấp WebSocket implementation cho môi trường Node.js <= 20
// để tránh lỗi "@supabase/realtime-js: Node.js detected but native WebSocket not found"
let WebSocketImpl = globalThis.WebSocket;
if (!WebSocketImpl) {
  try {
    WebSocketImpl = require("ws");
  } catch {
    // Fallback dummy class nếu ws chưa cài đặt
    WebSocketImpl = class DummyWebSocket {
      constructor() {}
      addEventListener() {}
      removeEventListener() {}
      send() {}
      close() {}
    };
  }
}

let supabase = null;

try {
  supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false },
    realtime: {
      transport: WebSocketImpl,
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
