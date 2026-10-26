const bookingService = require("../services/bookingService");

exports.createBooking = async (req, res, next) => {
  try {
    const result = await bookingService.createTourBooking(req.body);
    return res.status(201).json({
      success: true,
      message: "Đặt tour thành công!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

exports.getBooking = async (req, res, next) => {
  try {
    const { code } = req.params;
    const booking = await bookingService.getBookingByCode(code);
    return res.status(200).json({
      success: true,
      data: booking,
    });
  } catch (error) {
    next(error);
  }
};

exports.createInquiry = async (req, res, next) => {
  try {
    const inquiry = await bookingService.createTripInquiry(req.body);
    return res.status(201).json({
      success: true,
      message: "Tiếp nhận yêu cầu tư vấn thành công!",
      data: inquiry,
    });
  } catch (error) {
    next(error);
  }
};