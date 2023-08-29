var randomString = require("random-string");
var x = randomString({ length: 20 });
console.log("Rezultat vanjskog modula: " + x);

const resultElement = document.querySelector(".result");
resultElement.textContent = "Rezultat vanjskog modula: " + x;

alert("Algebra");
