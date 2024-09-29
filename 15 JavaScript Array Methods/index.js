let num = [1, 2, 3, 34, 5];
let b = num.toString(); // b is now a string
console.log(b);
let c = num.join(" and ");
console.log(c);
// let r = num.pop(); // pop returns the popped element
// console.log(r, num);
// num.push(10); // push returns the new array length
// console.log(num);
// let r = num.shift(); // shift returns the shift element
// console.log(r, num);
let r = num.unshift(5); // unshift returns the new array length
console.log(r, num); 
