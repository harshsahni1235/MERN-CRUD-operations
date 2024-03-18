const express = require("express");
const router = express.Router();

const addClient = require("../controller/addClient.controller.js");

router.post("/", addClient);

module.exports = router;
