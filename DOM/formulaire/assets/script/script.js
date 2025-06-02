let form = document.querySelector(".formulaire-profil");
let inputLastName = document.querySelector(".nom");
let inputFirstName = document.querySelector(".prenom");
let inputAge = document.querySelector(".age");
let inputGenre = document.querySelectorAll(".genre");
let inputProfession = document.querySelector(".select-profession");
let displayCard = document.querySelector(".card");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  createCard();
});

function createCard() {
  createName();
  createAge();
  createGenre();
  createProfession();
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
  let newP = document.createElement("p");
  let genreLength = inputGenre.length;
  for (i = 0; i < genreLength; i++) {
    if (inputGenre[i].checked) {
      newP.innerHTML = "Sexe : " + inputGenre[i].value;
    }
  }
  displayCard.append(newP);
}

function createProfession() {
  if (inputProfession.value.length > 0) {
    let newP = document.createElement("p");
    newP.innerHTML = "Profession : " + inputProfession.value;
    displayCard.append(newP);
  }
}
