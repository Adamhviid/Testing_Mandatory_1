const fs = require("fs");
//const data = require("../utils/person-names.json");

/* fs.readFile("./utils/person-names.json", "utf-8", (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  console.log("File data:", jsonString);
}); */

console.log("\n|------ Mandatory 1 Testing ------|\n");

/* class Person {
  constructor(
    firstName,
    lastName,
    gender,
    cpr,
    dateOfBirth,
    address,
    phoneNumber
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.cpr = cpr;
    this.dateOfBirth = dateOfBirth;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }
} */
//const person = new Person();

const generateRandomCpr = (numLength) => {
  const numbers = "0123456789";
  const cprArray = Array.from(
    { length: numLength },
    (v, k) => numbers[Math.floor(Math.random() * numbers.length)]
  );

  const randomString = cprArray.join("");
  return randomString;
};
//TODO last digit in cpr based on gender
//if (gender == female) {
//  // 2, 4, 6, 8
//} else {
//  // 1, 3, 5, 7, 9
//}
console.log("CPR number: " + generateRandomCpr(4));

function randomDate(start, end) {
  let dob = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    ),
    month = "" + (dob.getMonth() + 1),
    day = "" + dob.getDate(),
    year = dob.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("-");
}
console.log("Date of birth: " + randomDate(new Date(08, 0, 1), new Date()));

/* const getRandomPerson = (personLength) => {
  const person = data.persons[Math.floor(Math.random() * data.persons.length)];
  const personArray = Array.from(
    { length: personLength },
    (v, k) => person[Math.floor(Math.random() * person.length)]
  );

  const randomPerson = personArray.join("");
  return randomPerson;
};
console.log("Person: " + getRandomPerson()); */

const generateRandomAddress = (charLength) => {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  const addressArray = Array.from(
    { length: charLength },
    (v, k) => chars[Math.floor(Math.random() * chars.length)]
  );

  const randomString = addressArray.join("");
  return randomString;
};
console.log("Address: " + generateRandomAddress(11));

const generateRandomPhone = (numLength) => {
  const numbers = "0123456789";
  const phoneArray = Array.from(
    { length: numLength },
    (v, k) => numbers[Math.floor(Math.random() * numbers.length)]
  );

  const randomString = phoneArray.join("");
  return randomString;
};
console.log("Phone number: " + generateRandomPhone(8));
