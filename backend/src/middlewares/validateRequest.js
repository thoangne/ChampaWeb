// Kiểm tra dữ liệu đặt tour
exports.validateBooking = (req, res, next) => {
  const { tour_slug, customer_name, customer_phone, departure_date, adults, total_price } = req.body;

  if (!tour_slug || !customer_name || !customer_phone || !departure_date || !adults || !total_price) {
    return res.status(400).json({
      success: false,
      message: "Vui lòng cung cấp đầy đủ thông tin đặt tour bắt buộc.",
    });
  }

  next();
};

// Kiểm tra email đăng ký
exports.validateEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Địa chỉ email không hợp lệ.",
    });
  }

  next();
};