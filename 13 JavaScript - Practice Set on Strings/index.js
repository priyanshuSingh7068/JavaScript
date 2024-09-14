// Practice set *****

// Q1- What will the following print in JavaSdcript? console.log("Pri\"".length);

let str = 'Pri"';
console.log(str.length);

// Q2- Explore the includes, startsWith & endsWith functions of a String.

// includes(); *****

let sentence = "The quick brown fox jumps over the lazy dog.";
let word = "fox2";
console.log(sentence.includes(word));
console.log(
  `The word ${word} ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);

// startsWith(); *****

let stri = "Saturday night plans";
console.log(stri.startsWith("Sat"));
console.log(stri.startsWith("Sat", 3));

// endsWith(); *****

const str4 = "Cats are the best!";
console.log(str4.endsWith("best!"));
console.log(str4.endsWith("best", 17));

// Q3- Write a program to convert a given string to lowerCase.

let str1 = "PRIYANSHU";
console.log(str1.toLowerCase());

// Q4- Extract the amount out of this string "Please give Rs 1000".

let str3 = "Please give Rs 1000";
let amount = Number.parseInt(str3.slice("Please give Rs ".length));
console.log(amount);

// Q5- Try to change 4th character of a given string were you able to do?

let real_name = "priyanshu";
let change_name = real_name.replace("y", "l");
console.log(change_name);
