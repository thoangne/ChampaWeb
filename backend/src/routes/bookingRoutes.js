const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");
const { validateBooking } = require("../middlewares/validateRequest");

router.post("/", validateBooking, bookingController.createBooking);
router.get("/:code", bookingController.getBooking);
router.post("/inquiry", bookingController.createInquiry);

module.exports = router;