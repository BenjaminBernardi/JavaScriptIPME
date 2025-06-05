let form = document.querySelector("form");
let inputSearch = document.querySelector(".nom-cocktail");
let displayCocktails = document.querySelector(".afficher-cocktails")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(inputSearch.value);
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + inputSearch.value).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        displayCocktails.innerHTML = ""
        let newDiv = document.createElement("div");
        let newH3 = document.createElement("h3");
        let newP = document.createElement("p");
        for (let i = 0; i < data.drinks.length; i++) {
            console.log(data.drinks[i].strDrink);
            console.log(data.drinks[i].strIngredient1);
            console.log(data.drinks[i].strInstructionsFR);
        }
    })
});
