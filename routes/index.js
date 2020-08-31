const express = require("express");
const router = express.Router();
const controller = require("../controller/index");
router.get("/posts", controller.getSignature);
module.exports = router;
router.post("/signature", controller.getSignature);
