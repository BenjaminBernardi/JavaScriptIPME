let form = document.querySelector("form");
let inputSearch = document.querySelector(".nom-cocktail");
let randomCocktail = document.querySelector(".cocktail-aleatoire");
let deleteResults = document.querySelector(".effacer-resultats");
let displayCocktails = document.querySelector(".afficher-cocktails");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
      inputSearch.value
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      displayCocktails.innerHTML = "";
      createCocktail(data.drinks);
    });
});

randomCocktail.addEventListener("click", (e) => {
    e.preventDefault();
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then((response) => {
        return response.json();
    }).then((data) => {
        displayCocktails.innerHTML = "";
        createCocktail(data.drinks);
    })
});

deleteResults.addEventListener("click", () => {
    displayCocktails.innerHTML = "";
});

function createCocktail(cocktail) {
  for (let i = 0; i < cocktail.length; i++) {
    let newDiv = document.createElement("div");
    let newH3 = document.createElement("h3");
    let newPIngred = document.createElement("p");
    
    let newImg = document.createElement("img");
    newDiv.classList.add("card");
    newH3.innerHTML = cocktail[i].strDrink;
    newPIngred.innerHTML = ingredientsList(cocktail[i]);
    newImg.src = cocktail[i].strDrinkThumb;
    newDiv.append(newImg, newH3, newPIngred);
    if (cocktail[i].strInstructionsFR !== null) {
        let newPInstruct = document.createElement("p");
        newPInstruct.innerHTML = cocktail[i].strInstructionsFR;
        newDiv.append(newPInstruct);
    }   
    displayCocktails.append(newDiv);
  }
}

function ingredientsList(cocktail) {
  let ingredList = "Ingrédients : ";
  if (cocktail.strIngredient1 !== null) {
    ingredList += cocktail.strIngredient1;
  }
  if (cocktail.strIngredient2 !== null) {
    ingredList += " / " + cocktail.strIngredient2;
  }
  if (cocktail.strIngredient3 !== null) {
    ingredList += " / " + cocktail.strIngredient3;
  }
  if (cocktail.strIngredient4 !== null) {
    ingredList += " / " + cocktail.strIngredient4;
  }
  if (cocktail.strIngredient5 !== null) {
    ingredList += " / " + cocktail.strIngredient5;
  }
  if (cocktail.strIngredient6 !== null) {
    ingredList += " / " + cocktail.strIngredient6;
  }
  if (cocktail.strIngredient7 !== null) {
    ingredList += " / " + cocktail.strIngredient7;
  }
  if (cocktail.strIngredient8 !== null) {
    ingredList += " / " + cocktail.strIngredient8;
  }
  if (cocktail.strIngredient9 !== null) {
    ingredList += " / " + cocktail.strIngredient9;
  }
  if (cocktail.strIngredient10 !== null) {
    ingredList += " / " + cocktail.strIngredient10;
  }
  if (cocktail.strIngredient11 !== null) {
    ingredList += " / " + cocktail.strIngredient11;
  }
  if (cocktail.strIngredient12 !== null) {
    ingredList += " / " + cocktail.strIngredient12;
  }
  if (cocktail.strIngredient13 !== null) {
    ingredList += " / " + cocktail.strIngredient13;
  }
  if (cocktail.strIngredient14 !== null) {
    ingredList += " / " + cocktail.strIngredient14;
  }
  if (cocktail.strIngredient15 !== null) {
    ingredList += " / " + cocktail.strIngredient15;
  }
  return ingredList;
}
