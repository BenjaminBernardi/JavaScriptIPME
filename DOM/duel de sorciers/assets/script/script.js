let form = document.querySelector(".formulaire-sorciers");
let inputSorcier1 = document.querySelector(".nom-sorcier-1");
let inputMaison1 = document.querySelector(".maison-sorcier-1");
let inputSorcier2 = document.querySelector(".nom-sorcier-2");
let inputMaison2 = document.querySelector(".maison-sorcier-2");
let displayPlayersStatus = document.querySelector(".players-status");

const playerOne = {
  maxHP: 200,
  actualHP: 200,
};

const playerTwo = {
  name: inputSorcier2.value,
  house: inputMaison2.value,
  maxHP: 200,
  actualHP: 200,
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  playerOne.name = inputSorcier1.value;
  playerOne.house = inputMaison1.value;
  playerTwo.name = inputSorcier2.value;
  playerTwo.house = inputMaison2.value;
  displayBattleInfo();
});

function displayBattleInfo() {
  playersStats();
}

function playersStats() {
  let newP1 = document.createElement("p");
  newP1.innerHTML = playerOne.name;
  let newP2 = document.createElement("p");
  newP2.innerHTML = playerOne.house;
  let newP3 = document.createElement("p");
  newP3.innerHTML = playerTwo.name;
  let newP4 = document.createElement("p");
  newP4.innerHTML = playerTwo.house;
  displayPlayersStatus.append(newP1, newP2, newP3, newP4);
}
