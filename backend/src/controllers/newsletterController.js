const newsletterService = require("../services/newsletterService");

exports.subscribe = async (req, res, next) => {
  try {
    const { email, source } = req.body;
    const subscriber = await newsletterService.subscribe(email, source);
    return res.status(200).json({
      success: true,
      message: "Đăng ký nhận bản tin thành công!",
      data: subscriber,
    });
  } catch (error) {
    next(error);
  }
};