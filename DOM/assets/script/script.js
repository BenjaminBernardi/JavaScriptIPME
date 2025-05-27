console.log("Hello world!");

let mySuperH1 = document.getElementsByTagName("h1");
console.log(mySuperH1);

let mySuperH1ById = document.getElementById("mon-super-h1");
console.log(mySuperH1ById);

let mySuperH1ByClass = document.getElementsByClassName("toto");
console.log(mySuperH1ByClass);

let para1 = document.querySelector(".test-p");
let para2 = document.querySelector("[data-test]");
let para3 = document.querySelector("#bonjour");
let para4 = document.querySelectorAll("p")[3];

para4.innerHTML = "Nouveau bonjour";

console.log(para1, para2, para3, para4);

let para5 = document.querySelector("span");
if (para5.innerHTML.length > 2) {
  para5.remove();
}

console.log(para5);

/* Exercice 1 */

let exo1 = document.querySelector("#info");
exo1.innerHTML = "Bonjour, ceci est un nouveau texte.";

/* Exercice 2 */

let exo2 = document.querySelectorAll("h2");
for (let i = 0; i < exo2.length; i++) {
    exo2[i].innerHTML += " - Important";
}

/* Exercice 3 */

let exo3 = document.querySelector("#a-supprimer");
exo3.remove();

/* Exercice 4 */

let exo4 = document.querySelectorAll("p");
/* for (let i = 0; i < exo4.length; i++) {
    exo4[i].remove();
} */

/* Exercice 5 */

let exo5 = document.querySelector("#fruits");
let exo5List = exo5.querySelectorAll("li");
exo5List[0].innerHTML = "Fraise";
exo5List[1].innerHTML = "Kiwi";

/* Exercice 6 */

let exo6 = document.querySelector("#message");
exo6.innerHTML = "Bienvenue sur la page !";

/* Exercice 7 */

let exo7 = document.querySelector("#contenu");
exo7.innerHTML = "<h3>Nouveau titre</h3>\n<p>Nouveau paragraphe</p>"

/* Exercice 8 */

let exo8 = document.querySelector(".prenoms");
let exo8List = exo8.querySelectorAll("li");
exo8List[exo8List.length - 1].remove();

/* Exercice 9 */

let exo9 = document.querySelector("[data-super-div]");
let exo9List = exo9.querySelectorAll("p");
for (i = 0; i < exo9List.length; i++) {
    if (exo9List[i].innerHTML.includes("pokemon")) {
        exo9List[i].remove();
    }
}

/* Tuer le chat */


/* //je récupere la div et je lui ajoute un evenement au click
let div = document.querySelector('.test');
div.addEventListener('click', () => {
    console.log('ici');
});

//je recupere le lien et je lui change son attribut, je peux lui changer tout ces attributs
// exemple changer un src dans une image !!
let lien = document.querySelector('#lien');
lien.href = "https://facebook.fr"; */