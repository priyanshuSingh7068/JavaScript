// Practice Set *****

// Q1-Create a variable of type string and try to add a number to it.
let a = "Priyanshu";
let b = 6;
console.log(a + b);

// Q2- Use type of find the datatype of the string in last questions.
console.log(typeof (a + b));

// Q3- Create a const Object in JavaScript can you change it to hold a number later.
const a1 = {
  name: "Priyanshu",
  section: 1,
  isPrincipal: false,
};
// a1 = 54; // error
// a1 = {} // error

// Q4- Try to add a new key to the const object in Position 3 were you able to do it.
a1["friend"] = "Shubam";
a1["name"] = "Atul";
console.log(a1);

// Q5- Write a JS program to create a word-meaning dectonary of 3 words.
const dectonary = {
  appreciate: "recognize the full worth of.",
  ataraxia: "a state of freedom from emotional disturbance and anxiety",
  yakka: "work, especially hard work.",
};
console.log(dectonary.yakka);
