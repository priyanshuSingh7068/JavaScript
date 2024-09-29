// Practice Set

// Q1- Use logical operators to find weather the age of a person lies between 10 and 20.
// let age = prompt("What is your age?");
// age = Number.parseInt(age);
// if (age > 10 && age < 20) {
//   console.log("Your age lies between 10 and 20");
// } else {
//   console.log("Your age doesn't lies between 10 and 20");
// }

// Q2- Demonstrate the use of switch case statement in JavaScript.
// let age = prompt("What is your age?");
// age = Number.parseInt(age);
// switch (age) {
//   case 12:
//     console.log("Your age is 12");
//     break;
//   case 13:
//     console.log("Your age is 13");
//     break;
//   case 14:
//     console.log("Your age is 14");
//     break;
//   case 15:
//     console.log("Your age is 15");
//     break;
//   default:
//     console.log("Your age is not special");

//     break;
// }

// Q3- Write a JavaScript program to find whether a number is Divisible by 2 and 3.
// let num = prompt("Enter the number");
// age = Number.parseInt(num);
// if (num % 2 == 0 && num % 3 == 0) {
//   console.log("Your number is divisible by 2 and 3");
// } else {
//   console.log("Your number is not divisible by 2 and 3");
// }

// Q4- Write a JavaScript program to find whether a number is Divisible by 2 or 3.
// let num = prompt("Enter the number");
// age = Number.parseInt(num);
// if (num % 2 == 0 || num % 3 == 0) {
//   console.log("Your number is divisible by 2 or 3");
// } else {
//   console.log("Your number is not divisible by 2 or 3");
// }

// Q5- Print "You can drive." or "You cannot drive." based on age being greater than 18 using ternary operator.
let age = prompt("What is your age?");
age = Number.parseInt(age);
console.log(age >= 18 ? "You can drive" : "You cannot drive");
