// Practice set *****

// Q1- Write a program to print the marks of a student in an object using for loop.

// let marks = {
//   priyanshu: 90,
//   shubham: 9,
//   lovish: 56,
//   monika: 4,
// };

// for (let i = 0; i < Object.keys(marks).length; i++) {
// console.log(`The marks of ${Object.keys(marks)[i]} are ${marks[Object.keys(marks)[i]]}.`);
// }

// Q2- Write a program in Q1 using for in loop.

// let marks = {
//   priyanshu: 90,
//   shubham: 9,
//   lovish: 56,
//   monika: 4,
// };

// for (let key in marks) {
//         console.log(`The marks of ${key} are ${marks[key]}.`);
// }

// Q3- write a program to print "try again" until the user enter the correct Number.

// let cn = 4;
// let i;
// i = prompt("Enter a number");
// while (i != cn) {
//     i = prompt("try again")
// }
// console.log("You have entered a correct number");

// Q4- Write a function to find mean of 5 Number.

const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4;
};
console.log(mean(4, 5, 6, 7));
