// Your code goes here
document.addEventListener("DOMContentLoaded", () =>
  console.log("The DOM has Loaded")
);
//console.log(
   // "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  //);

document.addEventListener("DOMContentLoaded", function () {
let p = document.querySelector("p");
p.textContent = "This is really cool!";
});
