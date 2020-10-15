const express = require("express");
const router = express.Router();

// Vores hard-coded user - best practice using mongoDB

const freeUsers = require("../db/freeUser");
const paymentUsers = require("../db/paymentUser");
const token = require("../middleware/ensureToken");
const { response } = require("express");

// Vores router - crud endpoints

router.get("/", (req, res) => {
  // GET free users
  res.json(freeUsers);
});

router.get("/subscription/", (req, res) => {
  // GET payment users
  res.json(paymentUsers);
});

// Protected

router.get("/admin/", token, (req, res) => {
  // GET payment users
  res.json(paymentUsers);
});

// Eksporter controller

module.exports = router;
