const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { authenticateUser } = require("../middlewares/authMiddleware");

// Đăng ký tài khoản email & mật khẩu
router.post("/register", authController.register);

// Đăng nhập email & mật khẩu
router.post("/login", authController.login);

// Xác thực & đồng bộ OAuth (Google / Facebook)
router.post("/oauth-callback", authController.oauthCallback);

// Lấy thông tin user hiện tại (yêu cầu token)
router.get("/me", authenticateUser, authController.getMe);

// Đăng xuất
router.post("/logout", authController.logout);

module.exports = router;
