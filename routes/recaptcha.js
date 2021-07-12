const express = require("express");

const router = express.Router();

const { verifyRecaptcha, hello } = require("../controllers/recaptcha");

router.post('/verify', verifyRecaptcha);
router.get('/hello', hello);

module.exports = router;