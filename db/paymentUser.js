// Bruger user model (class) under klasse "PaymentUser".

const User = require("../model/User");

// Laver array med vores to objeckter lavet ud fra vores klasse (model) User.

let sub1 = new User.PaymentUser(
  "Camilla",
  "Tasty",
  "217",
  "12",
  "Tennis",
  "https://i.picsum.photos/id/1052/200/200.jpg?hmac=C8TAQ7jOmsdTxY6LFqx0ft2jNVIX0GxUmo8kCnVHkIE"
);

let sub2 = new User.PaymentUser(
  "Katrine",
  "Munk",
  "1000",
  "123",
  "Golf",
  "https://i.picsum.photos/id/268/200/200.jpg?hmac=I5JAWzISJc5x0jlDhEngvCIwyM0zxRh22iIIzHqOT80"
);

let subsArray = [sub1, sub2];

// Eksporter Array med to objeckter.

module.exports = subsArray;
