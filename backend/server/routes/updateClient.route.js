const express = require("express");
const router = express.Router();

const updateClient = require("../controller/updateClient.controller.js");

router.put("/", updateClient);

module.exports = router;
