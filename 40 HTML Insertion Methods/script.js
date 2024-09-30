let a = document.getElementsByTagName("div")[0];

// a.innerHTML = a.innerHTML + '<h2>Hello World!</h2>';

let div = document.createElement("div");
div.innerHTML = "<h2>Hello World!</h2>";
// a.append(div);
// a.prepend(div);
// a.before(div);
// a.after(div);
a.replaceWith(div);
