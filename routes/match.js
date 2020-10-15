const express = require("express");
const router = express.Router();

// Vores hard-coded user - best practice using mongoDB

const freeUsers = require("../db/freeUser");
const paymentUsers = require("../db/paymentUser");

// Vores router - crud endpoints

router.get("/:age", (req, res) => {
  // Loop and find persons with specific age
  let userRanks = [freeUsers, paymentUsers];
  let matchFound = ["Match med alder: "];

  for (let i = 0; i < 2; i++) {
    matchFound += userRanks[i].find((person) => person.age === req.params.age);
  }

  res.send(JSON.stringify(matchFound));
});

module.exports = router;
