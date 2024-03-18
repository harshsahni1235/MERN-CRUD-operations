const express = require("express");
const router = express.Router();
const getAllClients = require("./getAllClients.route");
const addClient = require("./addClient.route");
const deleteClient = require("./deleteClient.route");
const updateClient = require("./updateClient.route");

router.use("/get", getAllClients);
router.use("/add", addClient);
router.use("/delete", deleteClient);
router.use("/update", updateClient);

module.exports = router;
