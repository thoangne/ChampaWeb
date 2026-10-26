require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Dana Champa Backend Server đang chạy tại http://localhost:${PORT}`);
  console.log(`📡 API Endpoints sẵn sàng tại http://localhost:${PORT}/api`);
});