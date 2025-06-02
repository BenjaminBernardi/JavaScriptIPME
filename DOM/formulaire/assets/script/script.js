let form = document.querySelector(".formulaire-profil");
let inputLastName = document.querySelector(".nom");
let inputFirstName = document.querySelector(".prenom");
let inputAge = document.querySelector(".age");
let inputGenre = document.querySelectorAll(".genre");
let inputProfession = document.querySelector(".select-profession");
let inputRegion = document.querySelector(".select-region");
let inputHobbies = document.querySelectorAll(".hobbies");
let inputLinkedIn = document.querySelector(".linkedin");
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
  createRegion();
  createHobbies();
  createLinkedIn();
}

function createName() {
  let newP = document.createElement("p");
  newP.innerHTML = inputFirstName.value + " " + inputLastName.value;
  displayCard.append(newP);
}

function createAge() {
  if (inputAge.value > 0) {
    let newP = document.createElement("p");
    newP.innerHTML = "Age : " + inputAge.value + " ans";
    displayCard.append(newP);
  }
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

function createRegion() {
  if (inputRegion.value.length > 0) {
    let newP = document.createElement("p");
    newP.innerHTML = "Région : " + inputRegion.value;
    displayCard.append(newP);
  }
}

function createHobbies() {
  if (checkboxNotEmpty()) {
    let newP = document.createElement("p");
    newP.innerHTML = "Hobbies : ";
    let hobbiesLength = inputHobbies.length;
    for (i = 0; i < hobbiesLength; i++) {
      if (inputHobbies[i].checked) {
        newP.innerHTML += inputHobbies[i].value + ", ";
      }
    }
    newP.innerHTML = newP.innerHTML.slice(0, -2);
    displayCard.append(newP);
  }
}

function createLinkedIn() {
  if (inputLinkedIn.value.length > 0) {
    let newP = document.createElement("p");
    newP.innerHTML = "LinkedIn : ";
    let newA = document.createElement("a");
    newA.innerHTML = inputLinkedIn.value;
    newA.href = inputLinkedIn.value;
    newP.append(newA);
    displayCard.append(newP);
  }
}

function checkboxNotEmpty() {
  let hobbiesLength = inputHobbies.length;
  for (i = 0; i < hobbiesLength; i++) {
    if (inputHobbies[i].checked) {
      return true;
    }
  }
}
