const express = require("express");
const router = express.Router();

const bookingRoutes = require("./bookingRoutes");
const newsletterRoutes = require("./newsletterRoutes");

router.use("/bookings", bookingRoutes);
router.use("/newsletter", newsletterRoutes);

// Health check endpoint
router.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

module.exports = router;