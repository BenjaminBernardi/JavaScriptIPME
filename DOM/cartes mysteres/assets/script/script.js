let form = document.querySelector(".formulaire");
let inputCardName = document.querySelector(".nom-carte");
let inputCardType = document.querySelector(".type");
let inputSpecialAttribute = document.querySelector(".pouvoir-special");
let displayCards = document.querySelector(".afficher-cartes");

const array = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputCardType.value.length === 0) {
    alert("Veuillez renseigner un type à votre carte !");
  }
  array.push(inputCardName.value);
  array.push(inputCardType.value);
  array.push(inputSpecialAttribute.value);
});

console.log(array);
