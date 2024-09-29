let a = prompt("Hey whats your age?");
a = Number.parseInt(a); // Converting the string to a number
if (a <= 0) {
  alert("This is an invalid age");
} else if (a < 9) {
  alert("You are a kid and you cannot even think of driving");
} else if (a < 18 && a >= 9) {
  alert("You are a kid and you can think of driving after 18");
} else {
  alert("You can now drive as you are above 18");
}
console.log("Done");

// Switch Case *****
let age = prompt("What is your age?");
age = Number.parseInt(age);
switch (age) {
  case 12:
    console.log("Your age is 12");
    break;
  case 13:
    console.log("Your age is 13");
    break;
  case 14:
    console.log("Your age is 14");
    break;
  case 15:
    console.log("Your age is 15");
    break;
  default:
    console.log("Your age is not special");

    break;
}

// Ternary Operators *****
console.log("You can", age<18? "not drive" : "drive");