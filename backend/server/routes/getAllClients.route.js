const express = require("express");
const router = express.Router();

const getClients = require("../controller/clients.controller.js");

router.get("/", getClients);

module.exports = router;
