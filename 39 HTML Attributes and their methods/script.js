let first = document.querySelector("#first");
let a = first.getAttribute("class");
// console.log(a);
// console.log(first.hasAttribute("class"));
// console.log(first.hasAttribute("style"));

// first.setAttribute("hidden", "true");

first.setAttribute("class", "true sachin");

first.removeAttribute("class", "true sachin");
// console.log(first.attributes);

console.log(first.dataset.game);
console.log(first.dataset.player);
