const express = require("express");
const postController = require("../controllers/postController");
const { authenticateUser } = require("../middlewares/authMiddleware");
const { requireAdmin } = require("../middlewares/requireAdmin");

const router = express.Router();

// 1. Tuyến đường công khai (Public)
router.get("/", postController.getPublishedPosts);
router.get("/detail/:slug", postController.getPostBySlug);

// 2. Tuyến đường Quản trị viên (Chỉ Admin - Yêu cầu Token & Role = 'admin')
router.get("/admin/all", authenticateUser, requireAdmin, postController.getAllPostsForAdmin);
router.post("/", authenticateUser, requireAdmin, postController.createPost);
router.put("/:id", authenticateUser, requireAdmin, postController.updatePost);
router.delete("/:id", authenticateUser, requireAdmin, postController.deletePost);

module.exports = router;

