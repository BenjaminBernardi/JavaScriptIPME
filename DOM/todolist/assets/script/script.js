let inputTextToDO = document.querySelector(".texte-todo");
let buttonAddToDO = document.querySelector(".ajouter-todo");
let deleteAll = document.querySelector(".supprimer-tout");
let myToDo = document.querySelector(".mes-todo");

buttonAddToDO.addEventListener("click", () => {
    // Créer un élément li avec createElement
    let newLi = document.createElement("li");
    // Insérer ma valeur dedans
    let newToDo = document.createTextNode(inputTextToDO.value);
    



    // Ajouter un evenement click sur le li
        // regarder si la class existe sur mon element
            // si oui -> je la supprime
            // si non -> li classList add 




    // Inserer l'élément dans myToDo avec appendChild
    newLi.appendChild(newToDo);
    document.body.insertBefore(newLi, myToDo);
});