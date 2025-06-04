let form = document.querySelector(".formulaire");
let inputAnimalName = document.querySelector(".nom-animal");
let inputAnimalBreed = document.querySelector(".race");
let displayAnimals = document.querySelector(".display-animals");
let releaseAnimal = document.querySelector(".relacher");

form.addEventListener("submit", () => {
  localStorage.setItem("animal_name", inputAnimalName.value);
  localStorage.setItem("animal_breed", inputAnimalBreed.value);
});

function displayAnimalCard() {
    let newP1 = document.createElement("p");
    newP1.innerHTML = localStorage.getItem("animal_name");
    let newP2 = document.createElement("p");
    newP2.innerHTML = localStorage.getItem("animal_breed");
    displayAnimals.append(newP1, newP2);
}

releaseAnimal.addEventListener("click", () => {
    displayAnimals.innerHTML = "";
});

displayAnimalCard();

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
