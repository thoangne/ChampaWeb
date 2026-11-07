const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const supabaseUrl = process.env.SUPABASE_URL || "https://placeholder-project.supabase.co";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || "placeholder-anon-key";

if (!process.env.SUPABASE_URL || (!process.env.SUPABASE_SERVICE_ROLE_KEY && !process.env.SUPABASE_ANON_KEY)) {
  console.warn("⚠️ [CHÚ Ý] Thiếu cấu hình SUPABASE_URL hoặc SUPABASE_SERVICE_ROLE_KEY trong backend/.env");
  console.warn("ℹ️ Server vẫn khởi chạy bình thường ở chế độ dev (Health check: http://localhost:5000/api/health).");
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
