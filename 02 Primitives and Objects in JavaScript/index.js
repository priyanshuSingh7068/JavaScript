// Primitives in Js *****
let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("5445");
let e = "Priyanshu";
let f = Symbol("I am a nice symbol");
let g = undefined;
console.log(a, b, c, d, e, f, g);
console.log(
  typeof a,
  typeof b,
  typeof c,
  typeof d,
  typeof e,
  typeof f,
  typeof g
);

// Objects in Js *****
const item = {
  name: "Priyanshu singh",
  course: "JS",
  city: "Kanpur",
};
console.log(item);
console.log(item["name"]);
console.log(item["code"]); // undefined
