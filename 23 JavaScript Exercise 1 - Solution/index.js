let a = Math.random() * 100;
a = Number.parseInt(a);
let inp;
let score = 100;

while (a != inp) {
  score = score - 1;
  inp = prompt("Enter the number : ");
  if (inp == a) {
    console.log("Congratulation! You guess the correct number.");
    console.log(`You guess the actual number in ${100 - score} chances`);
  } else if (inp < a && inp > 0) {
    console.log("Your number is smaller than the actual number.");
  } else if (inp < 100 && inp > a) {
    console.log("Your number is greater than the actual number");
  } else {
    console.log("Enter the number between 1 to 100.");
  }
}
