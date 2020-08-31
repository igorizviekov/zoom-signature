const express = require("express");
const router = express.Router();
const controller = require("../controller/index");
module.exports = router;
router.get("/signature", controller.getSignature);
