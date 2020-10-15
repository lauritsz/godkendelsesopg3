// Dependencies

const express = require("express");
const server = express();
const ensureToken = require("./middleware/ensureToken");

// Start server

server.listen(3000, () => {
  console.log(`Server-applikation lytter på http://localhost:3000`);
});

// Routes

const getUsers = require("./routes/users");
server.use("/users", getUsers);

const getMatches = require("./routes/match");
server.use("/match", getMatches);

const getInterest = require("./routes/interest");
server.use("/interest", getInterest);

// Protected Routes

const protectedController = require("./Controller/Protectedcontroller");
const loginController = require("./Controller/loginController");
server.get("/protected", ensureToken, protectedController);
server.post("/login", loginController);
