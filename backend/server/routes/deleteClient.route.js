const express = require("express");
const router = express.Router();

const deleteClientData = require("../controller/deleteClient.controller.js");

router.delete("/", deleteClientData);

module.exports = router;
