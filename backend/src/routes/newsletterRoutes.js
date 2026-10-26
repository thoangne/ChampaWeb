const express = require("express");
const router = express.Router();
const newsletterController = require("../controllers/newsletterController");
const { validateEmail } = require("../middlewares/validateRequest");

router.post("/subscribe", validateEmail, newsletterController.subscribe);

module.exports = router;