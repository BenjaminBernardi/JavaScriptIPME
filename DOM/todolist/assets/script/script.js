let inputTextToDO = document.querySelector(".texte-todo");
let buttonAddToDO = document.querySelector(".ajouter-todo");
let deleteAll = document.querySelector(".supprimer-tout");
let myToDo = document.querySelector(".mes-todo");

buttonAddToDO.addEventListener("click", () => {
  // Créer un élément li avec createElement
  let newLi = document.createElement("li");
  // Insérer ma valeur dedans
  let newToDo = document.createTextNode(inputTextToDO.value);
  //ajouter une classe de base
  newLi.classList.add("styleToDo");

  // Ajouter un evenement click sur le li
  newLi.addEventListener("click", () => {
    // regarder si la class existe sur mon element
    if (newLi.classList.contains("lineThrough")) {
      // si oui -> je la supprime
      newLi.classList.remove("lineThrough");
    } else {
      // si non -> li classList add
      newLi.classList.add("lineThrough");
    }
  });

  // Inserer l'élément dans myToDo avec appendChild
  newLi.appendChild(newToDo);
  myToDo.append(newLi);
});
