// Map, Filter & Reduce in JavaScript

// map
let arr = [45, 23, 21];
let a = arr.map((value, index, array) => {
  //   console.log(value, index, array);
  return value + 1;
});
// console.log(a);

// filter
let arr2 = [45, 23, 21, 0, 3, 5];
let a2 = arr2.filter((a) => {
  return a < 10;
});
// console.log(a2);

// reduce
let arr3 = [1, 2, 3, 5, 2, 1];
let newarr3 = arr3.reduce((a, b) => {
  return a + b;
});
console.log(newarr3);
