const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const routes = require("./src/routes");
const errorHandler = require("./src/middlewares/errorHandler");

const app = express();

// Middlewares toàn cục
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Phục vụ tài nguyên tĩnh Media uploads
const uploadsPath = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, { recursive: true });
}
app.use("/uploads", express.static(uploadsPath));

// Định tuyến API chính
app.use("/api", routes);

// Phục vụ Frontend tĩnh nếu có (Dành cho Production / Cloud Run / Single Container)
const clientDistPath = path.join(__dirname, "public_client");
if (fs.existsSync(clientDistPath)) {
  app.use(express.static(clientDistPath));
  
  // SPA fallback tương thích hoàn toàn với Express 5
  app.use((req, res, next) => {
    if (req.method === "GET" && !req.path.startsWith("/api")) {
      return res.sendFile(path.join(clientDistPath, "index.html"));
    }
    next();
  });
}

// Bắt lỗi toàn cục
app.use(errorHandler);

module.exports = app;
