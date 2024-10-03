// Q1- Write a program to show different alerts different buttons are clicked.

// Q2- Create a website which is capable of storing bookmarks of your favorite website using href.

// Q3- Repeat Q2 using event listeners.
// document.getElementById("fb"),
//   addEventListener("click", function () {
//     this.window.location = "https://fb.com";
//     this.window.focus();
//   });

//   Q4- Write a JavaScript program to keep fetching content of a website(Every 5 second).
// const fetchContent = async (url) => {
//   con = await fetch(url);
//   let a = await con.json();
//   return a;
// };

// setInterval(async function () {
//   let url = "https://jsonplaceholder.typicode.com/todos/1";
//   console.log(await fetchContent(url));
// }, 3000);

// Q5- Create a glowing bulb effect using classlist toggle method in JavaScript.
setInterval(async function() {
  document.querySelector("#bulb").classList.toggle("bulb");
}, 300);
