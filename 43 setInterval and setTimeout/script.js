// setTimeOut
// let a = setTimeout(() => {
//   alert("hello");
// }, 5000);

// let b = prompt("Do you want to run the settimeout?");
// if ("n" == b) {
//   clearTimeout(a);
// }
// console.log(a);

// setInterval
let a = setInterval(() => {
  console.log("hello moto");
}, 3000);
console.log(a);
clearInterval(a);
