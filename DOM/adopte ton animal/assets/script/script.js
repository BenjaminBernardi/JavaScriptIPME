let form = document.querySelector(".formulaire");

form.addEventListener("submit", (e) => {
  e.preventDefault();

});



/*
// setItem
// localStorage.setItem("first_name", "Benjamin");
// localStorage.setItem("last_name", "Bernardi");

// getItem
let firstName = localStorage.getItem("first_name");
console.log(firstName);

// supprimer un item
// localStorage.clear("first_name");

let array = ["toto", "tata"];
console.log(array); // => ici vrai tableau

// j'utilise JSON.stringify (ce que je veux encoder) => cela me permet de transformer mon tableau en string
let jsonArray = JSON.stringify(array); // => ici une string qui représente mon tableau
console.log(jsonArray);
localStorage.setItem("array", jsonArray);

// comment décoder du JSON ?
// on récupère nos éléments du local storage pour ensuite pouvoir les décoder grâce à JSON.parse
let arrayFromStorage = localStorage.getItem("array");
let arrayDecoded = JSON.parse(arrayFromStorage);
console.log(arrayDecoded);
*/