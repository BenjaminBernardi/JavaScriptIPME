let form = document.querySelector(".formulaire");
let inputCardName = document.querySelector(".nom-carte");
let inputCardType = document.querySelector(".type");
let inputSpecialAttribute = document.querySelector(".pouvoir-special");
let displayCards = document.querySelector(".afficher-cartes");
let deleteAllCards = document.querySelector(".effacer-cartes");

let arrayDecoded;
let array;
getFromStorage(); // recup du local le tableau (si tableau null, initialiser un tableau vide)
if (arrayDecoded !== null) {
  array = arrayDecoded;
  displayAllCards();
} else {
  array = [];
  emptyCollectionMessage();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputCardType.value.length === 0) {
    alert("Veuillez renseigner un type à votre carte !");
  } else {
    const subArray = [];
    subArray.push(inputCardName.value);
    subArray.push(inputCardType.value);
    subArray.push(inputSpecialAttribute.value);
    array.push(subArray);
    storageArray();
    getFromStorage();
    displayCards.innerHTML = "";
    displayAllCards();
  }
});

function storageArray() {
  let jsonArray = JSON.stringify(array);
  localStorage.setItem("array", jsonArray);
}

function getFromStorage() {
  let arrayFromStorage = localStorage.getItem("array");
  arrayDecoded = JSON.parse(arrayFromStorage);
}

function displayAllCards() {
  for (let i = 0; i < arrayDecoded.length; i++) {
    let newDiv = document.createElement("div");
    let newP1 = document.createElement("p");
    let newP2 = document.createElement("p");
    let newP3 = document.createElement("p");
    newP1.innerHTML = arrayDecoded[i][0];
    newP2.innerHTML = "Type : " + arrayDecoded[i][1];
    newP3.innerHTML = "Pouvoir : " + arrayDecoded[i][2];
    newDiv.append(newP1, newP2, newP3);
    displayCards.append(newDiv);
  }
}

function emptyCollectionMessage() {
  let newP = document.createElement("p");
  newP.innerHTML = "Aucune carte dans la collection.";
  displayCards.append(newP);
}

deleteAllCards.addEventListener("click", () => {
  localStorage.clear("array");
  displayCards.innerHTML = "";
  emptyCollectionMessage();
});
