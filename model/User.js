// Laver model-klasse for User - logikken - og export dem

class User {
  constructor(fname, lname, age, password, interest) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.password = password;
    this.interest = interest;
  }
}

class FreeUser extends User {
  adsWatched() {
    let ads = 0;
    return ads;
  }
}

class PaymentUser extends User {
  constructor(fname, lname, age, password, interest, image) {
    super(fname, lname, age, password, interest);
    this.image = image;
  }
  creditCard(cardnumber, expires, lastdigits) {
    return `${this.fname} has ${cardnumber} which expires ${expires} and three last digits is ${lastdigits}`;
  }
}

module.exports = { FreeUser, PaymentUser };
