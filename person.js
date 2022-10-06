/* import data from './person-names.json' assert { type: "json" }; */
/* import { data } from './person-names.json' assert { type: "json" };
import { test } from './test.json'  assert { type: "json" };
/* import fs from 'fs'; */

class Person {
  constructor(firstName, lastName, gender, cpr, dateOfBirth, Address, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.cpr = cpr;
    this.dateOfBirth = dateOfBirth;
    this.Address = Address;
    this.phoneNumber = phoneNumber;
  }
}

/* const tmpArray = [];
data.map((obj) => tmpArray.push(obj));
console.log(tmpArray[0].name); */

// Replace ./data.json with your JSON feed
/* fetch('./test.json')
  .then(response => response.json())
  .then(json => console.log(json)) */

/* const test = response.json()
console.log(test);
return test
}).then(data => {
// Work with JSON data here
console.log(data);
}).catch(err => {
// Do something for an error here
}); */
