// Practice Set

// Q1- Write a program using prompt function to take input of age as a value from the user and use alert to tell him of he can drive!
// let age = prompt("Enter your age");
// age = Number.parseInt(age);

// const canDrive = (age) => {
//   return age >= 18 ? true : false;
// };
// if (canDrive(age)) {
//   alert("Yes you can drive");
// } else {
//   alert("You cannot drive");
// }

// Q2- In Q1 confirm to ask the user if he wants to see the prompt again.
// let runAgain = true;
// const canDrive = (age) => {
//   return age >= 18 ? true : false;
// };
// while (runAgain) {
//   let age = prompt("Enter your age");
//   age = Number.parseInt(age);
//   if (canDrive(age)) {
//     alert("Yes you can drive");
//   } else {
//     alert("You cannot drive");
//   }
//   runAgain = confirm("Do you want to play again?");
// }

// Q3- In the previos question use console.error to log the error if the age enterd is negative.
// let runAgain = true;
// const canDrive = (age) => {
//   return age >= 18 ? true : false;
// };
// while (runAgain) {
//   let age = prompt("Enter your age");
//   age = Number.parseInt(age);
//   if (age < 0) {
//     console.error("Please enter the valid age");
//     break;
//   }
//   if (canDrive(age)) {
//     alert("Yes you can drive");
//   } else {
//     alert("You cannot drive");
//   }
//   runAgain = confirm("Do you want to play again?");
// }

// Q4- Write a program to change the url to google.com (Redirection) if user enters a number greater than 4.
// let number = prompt("Enter your number");
// number = Number.parseInt(number);

// if (number > 4) {
//   location.href = "https://google.com";
// }

// Q5- Change the background of the page to yellow, red or any other color based on user input through prompt.
let color = prompt("Enter the page background color");
document.body.style.background = color;
