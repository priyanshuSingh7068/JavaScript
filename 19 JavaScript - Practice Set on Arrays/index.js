// Practice Set

// Q1- Create an array of numbers and take input form the user to add numbers to this array.
// let arr = [5, 35, 7, 2, 88, 3, 22, 62];
// let n = prompt("Enter the number")
// n = Number.parseInt(n)
// arr.push(n)
// console.log(arr)

// Q2- Keep adding numbers to the array in 1 until 0 is added to the array.
// let arr = [];
// do {
//   n = prompt("Enter the number");
//   n = Number.parseInt(n);
//   arr.push(n);
// } while (n != 0);
// console.log(arr);

// Q3- Filter for numbers divisible by 10 from a given Array.
// let arr = [50, 35, 70, 2, 880, 3, 220, 62, 44, 234];
// let n = arr.filter((x) => {
//   return x % 10 == 0;
// });
// console.log(n);

// Q4- Create an array of squre of given numbers.
// let arr = [50, 35, 70, 2, 880, 3, 220, 62, 44, 234];
// let newarr = arr.map((x)=>{
//     return x*x
// })
// console.log(newarr);

// Q5- Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to be calcculated).
let arr = [1, 2, 3, 4, 5, 6, 7];
let n = arr.reduce((x, y) => {
  return x * y;
});
console.log(n);
