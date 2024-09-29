// Using Loops With Arrays in JavaScript

let arr = [3, 54, 1, 2, 4];

// for loop
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for each
// arr.forEach((element) => {
//   console.log(element * element);
// });

// Array.from
let name = "Priyanshu";
let carr = Array.from(name);
console.log(carr);

// for...of
for (let i of arr) {
  console.log(i);
}

// for...in
for(let i in arr){
    console.log(arr[i]);
    
}