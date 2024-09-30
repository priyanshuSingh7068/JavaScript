// Practice Set

// Q1- Create a navbar and change the color of it first element to red.
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";

// Q2- Create a table without tbody Now use "View page source" button to check wheater it has a tbody or not.

// Q3- Create an element with 3 children Now change the color of first and last element to green.
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green";
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green";

// Q4- Write a JavaScript code to change background of all <li> tags to cyan.
Array.from(document.getElementsByTagName("li")).forEach((e) => {
  e.style.backgroundColor = "cyan";
});

// Q5- Which of the following is used to look for the farthest ancestor that matches a given CSS selector.
// (a). matches ❌
// (b). closest ❌
// (c). contains ❌
// (d). none of these ✅
