let form = document.querySelector(".formulaire-sorciers");
let inputSorcier1 = document.querySelector(".nom-sorcier-1");
let inputMaison1 = document.querySelector(".maison-sorcier-1");
let inputSorcier2 = document.querySelector(".nom-sorcier-2");
let inputMaison2 = document.querySelector(".maison-sorcier-2");
let displayPlayersStatus = document.querySelector(".players-status");
let displayBattleStatus = document.querySelector(".battle-status");
let tour = 1;

const playerOne = {
  maxHP: 200,
  actualHP: 200,
};

const playerTwo = {
  maxHP: 200,
  actualHP: 200,
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  displayPlayersStatus.innerHTML = "";
  displayBattleStatus.innerHTML = "";
  playerOne.actualHP = playerOne.maxHP;
  playerTwo.actualHP = playerTwo.maxHP;
  tour = 1;
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

  while (playerOne.actualHP > 0 && playerTwo.actualHP > 0) {
    attackPlayer(playerOne, playerTwo);
    if (playerTwo.actualHP > 0) {
      attackPlayer(playerTwo, playerOne);
    }
  }
}

function attackPlayer(attacker, defender) {
  let damage = Math.floor(Math.random() * 10) + 5;
  let newP1 = document.createElement("p");
  defender.actualHP -= damage;
  newP1.innerHTML =
    "Tour " + tour + " : " +
    attacker.name +
    " attaque " +
    defender.name +
    " pour " +
    damage +
    " dégâts. Il reste " +
    defender.actualHP +
    " PV à " +
    defender.name +
    ".";
  displayBattleStatus.append(newP1);
  tour++;

  if(defender.actualHP <= 0){
    let newP2 = document.createElement("p");
    defender.actualHP = 0;
    newP2.innerHTML = attacker.name + " (" + attacker.house + ") a vaincu " + defender.name + " (" + defender.house + ") en " + tour + " tours !";
    displayBattleStatus.append(newP2);
  }
}
