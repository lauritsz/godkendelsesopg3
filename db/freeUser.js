// Bruger user model (class) under klasse "FreeUser".

const User = require("../model/User");

// Laver array med vores to objeckter lavet ud fra vores klasse (model) User.

let User1 = new User.FreeUser("Thomas", "Tog", "217", "12", "Tennis");
let User2 = new User.FreeUser("Emil", "Emilianos", "1000", "123", "Basketball");
let userArray = [User1, User2];

// Eksporter Array med to objeckter.

module.exports = userArray;