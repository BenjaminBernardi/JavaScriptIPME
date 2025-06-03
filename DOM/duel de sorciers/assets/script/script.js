let form = document.querySelector(".formulaire-sorciers");
let inputSorcier1 = document.querySelector(".nom-sorcier-1");
let inputMaison1 = document.querySelector(".maison-sorcier-1");
let inputSorcier2 = document.querySelector(".nom-sorcier-2");
let inputMaison2 = document.querySelector(".maison-sorcier-2");
let displayPlayersStatus = document.querySelector(".players-status");
let displayBattleStatus = document.querySelector(".battle-status");

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
  battleStatus();
}

function playersStats() {
  let newP1 = document.createElement("p");
  newP1.innerHTML = playerOne.name + ": " + playerOne.house;
  let newP2 = document.createElement("p");
  newP2.innerHTML = playerTwo.name + ": " + playerTwo.house;
  displayPlayersStatus.append(newP1, newP2);
}

function battleStatus() {
  let newH2 = document.createElement("h2");
  newH2.innerHTML = "Historique du duel :";
  displayBattleStatus.append(newH2);

  while(playerOne.actualHP > 0 && playerTwo.actualHP > 0) {
    attack();
  }
}

function attack() {
    let damage1 = Math.floor(Math.random() * 10) + 5;
    playerTwo.actualHP -= damage1;
    if (playerTwo.actualHP > 0 && playerOne.actualHP > 0) {
        console.log("Duel : " + playerOne.name + " attaque " + playerTwo.name + " pour " + damage1 + " dégâts. Il reste " + playerTwo.actualHP + " PV à " + playerTwo.name + ".");
    } else if (playerTwo.actualHP <= 0 && playerOne.actualHP > 0) {
        playerTwo.actualHP = 0;
        console.log("Duel : " + playerOne.name + " attaque " + playerTwo.name + " pour " + damage1 + " dégâts. Il reste " + playerTwo.actualHP + " PV à " + playerTwo.name + ".");
        console.log(playerOne.name + " (" + playerOne.house + ") a vaincu " + playerTwo.name + " (" + playerTwo.house + ") !");
    }
    let damage2 = Math.floor(Math.random() * 10) + 5;
    playerOne.actualHP -= damage2;
    if (playerOne.actualHP > 0) {
        console.log("Duel : " + playerTwo.name + " attaque " + playerOne.name + " pour " + damage2 + " dégâts. Il reste " + playerOne.actualHP + " PV à " + playerOne.name + ".");
    } else {
        playerOne.actualHP = 0;
        console.log("Duel : " + playerTwo.name + " attaque " + playerOne.name + " pour " + damage2 + " dégâts. Il reste " + playerOne.actualHP + " PV à " + playerOne.name + ".");
        console.log(playerTwo.name + " (" + playerTwo.house + ") a vaincu " + playerOne.name + " (" + playerOne.house + ") !");
    }
}
