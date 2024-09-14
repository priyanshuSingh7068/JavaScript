// Functions in JavaScript *****

function Average(x, y) {
  console.log("Done");
  return (x + y) / 2;
}

let a = 1;
let b = 2;
let c = 3;

console.log(`Average of a and b is ${Average(a, b)}`);
console.log(`Average of b and c is ${Average(b, c)}`);
console.log(`Average of c and a is ${Average(c, a)}`);

// Arrow function *****

const sum = (p, q) => {
  return p + q;
};
console.log(sum(9, 7));