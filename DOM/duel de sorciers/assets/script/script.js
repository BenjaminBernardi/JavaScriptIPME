let form = document.querySelector(".formulaire-sorciers");
let inputSorcier1 = document.querySelector(".nom-sorcier-1");
let inputMaison1 = document.querySelector(".maison-sorcier-1");
let inputSorcier2 = document.querySelector(".nom-sorcier-2");
let inputMaison2 = document.querySelector(".maison-sorcier-2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const playerOne = {
    name: inputSorcier1.value,
    house: inputMaison1.value,
    maxHP: 200,
    actualHP: 200,
  };

  const playerTwo = {
    name: inputSorcier2.value,
    house: inputMaison2.value,
    maxHP: 200,
    actualHP: 200,
  };

  console.log(playerOne.name + ": " + playerOne.house + ", " + playerOne.actualHP);
  console.log(playerTwo.name + ": " + playerTwo.house + ", " + playerTwo.actualHP);
});
