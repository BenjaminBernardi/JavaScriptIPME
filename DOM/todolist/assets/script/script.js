let inputTextToDo = document.querySelector(".texte-todo");
let buttonAddToDo = document.querySelector(".ajouter-todo");
let deleteAll = document.querySelector(".supprimer-tout");
let myToDo = document.querySelector(".mes-todo");

function createTodo() {
  if (inputTextToDo.value.length > 0) {
    // Créer un élément li avec createElement
    let newLi = document.createElement("li");
    // Insérer ma valeur dedans
    let newToDo = document.createTextNode(inputTextToDo.value);
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

      // newLi.classList.toggle('lineThrough')
    });

    // Inserer l'élément dans myToDo avec appendChild
    newLi.appendChild(newToDo);
    myToDo.append(newLi);
    inputTextToDo.value = "";
  }
}

buttonAddToDo.addEventListener("click", () => {
  createTodo();
});

inputTextToDo.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    createTodo();
  }
});

deleteAll.addEventListener("click", () => {
  let myToDoList = myToDo.querySelectorAll(".styleToDo");
  let toDoLength = myToDoList.length;
  for (i = 0; i < toDoLength; i++) {
    myToDoList[i].remove();
  }
});
