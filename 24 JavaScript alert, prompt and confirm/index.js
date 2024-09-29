alert("Enter the value of a!");
let a = prompt("Enter a here", "555");
a = Number.parseInt(a);
alert(`You entered a of type ${typeof a}`);
let write = confirm("Do you want to write it to the page");
if (write) {
  document.write(a);
} else {
  alert033+("Please allow me to write");
}
