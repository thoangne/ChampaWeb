const authService = require("../services/authService");

exports.register = async (req, res, next) => {
  try {
    const { email, password, fullName } = req.body;
    const result = await authService.registerUser({ email, password, fullName });
    return res.status(201).json({
      success: true,
      message: "Đăng ký tài khoản thành công!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await authService.loginUser({ email, password });
    return res.status(200).json({
      success: true,
      message: "Đăng nhập thành công!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

exports.oauthCallback = async (req, res, next) => {
  try {
    const { provider, token, user } = req.body;
    const result = await authService.handleOAuthCallback({ provider, token, user });
    return res.status(200).json({
      success: true,
      message: `Đăng nhập qua ${provider === "google" ? "Google" : "Facebook"} thành công!`,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

exports.getMe = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Không tìm thấy token xác thực hoặc phiên đăng nhập đã hết hạn.",
      });
    }

    const token = authHeader.split(" ")[1];
    const user = await authService.verifyToken(token);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Phiên đăng nhập không hợp lệ hoặc đã hết hạn.",
      });
    }

    return res.status(200).json({
      success: true,
      data: { user },
    });
  } catch (error) {
    next(error);
  }
};

exports.logout = async (req, res, next) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Đăng xuất thành công!",
    });
  } catch (error) {
    next(error);
  }
};
