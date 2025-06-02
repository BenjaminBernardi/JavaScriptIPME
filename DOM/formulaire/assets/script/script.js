let form = document.querySelector(".formulaire-profil");
let inputLastName = document.querySelector(".nom");
let inputFirstName = document.querySelector(".prenom");
let inputAge = document.querySelector(".age");
let inputGenre = document.querySelectorAll(".genre");
let displayCard = document.querySelector(".card");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    createCard();
});

function createCard() {


    createName();
    createAge();
    createGenre();

}

function createName() {
    let newP = document.createElement("p");
    newP.innerHTML = inputFirstName.value + " " + inputLastName.value;
    displayCard.append(newP);
}

function createAge() {
    let newP = document.createElement("p");
    newP.innerHTML = "Age : " + inputAge.value + " ans";
    displayCard.append(newP);
}

function createGenre() {
    
}

