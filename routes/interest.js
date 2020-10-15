const express = require("express");
const router = express.Router();

// Vores hard-coded user - best practice using mongoDB

const freeUsers = require("../db/freeUser");
const paymentUsers = require("../db/paymentUser");

// Vores router - crud endpoints

router.get("/:interest", (req, res) => {
  // Loop and find persons with specific interest
  let userRanks = [freeUsers, paymentUsers];
  let interestFound = [];

  for (let i = 0; i < 2; i++) {
    interestFound += userRanks[i].find(
      (person) => person.interest === req.params.interest
    );
  }

  res.send(JSON.stringify(interestFound));
});

module.exports = router;
