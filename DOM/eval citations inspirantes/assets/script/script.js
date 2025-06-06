let form = document.querySelector("#quote-form");
let inputQuote = document.querySelector("#quote-text");
let inputAuthor = document.querySelector("#quote-author");
let inputQuoteType = document.querySelector("#quote-type");
let displayQuotes = document.querySelector("#quote-list");
let displayErrorMsg = document.querySelector("#error-msg");
let deleteQuote = document.querySelector(".delete-quote");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputQuote.value && inputAuthor.value) {
    createQuote();
  } else {
    createErrorMsg();
  }
});

function createQuote() {
  displayErrorMsg.innerHTML = "";

  let newLi = document.createElement("li");
  let authorH3 = document.createElement("h3");
  let quoteTypePara = document.createElement("p");
  let quotePara = document.createElement("p");
  let deleteInput = document.createElement("button");

  authorH3.classList.add("style-quote");
  authorH3.innerHTML = inputAuthor.value;
  quoteTypePara.classList.add("style-quote");
  quoteTypePara.innerHTML = "Type : " + inputQuoteType.value;
  quotePara.classList.add("style-quote");
  quotePara.innerHTML = inputQuote.value;
  deleteInput.type = "button";
  deleteInput.classList.add("delete");
  deleteInput.innerHTML = "Supprimer";
  newLi.append(authorH3, quoteTypePara, quotePara, deleteInput);
  displayQuotes.append(newLi);

  deleteInput.addEventListener("click", () => {
    newLi.innerHTML = "";
    if (newLi.innerHTML === "") {
        newLi.remove();
    }
  });
}

function createErrorMsg() {
  displayErrorMsg.innerHTML = "";
  let errorH2 = document.createElement("h2");
  errorH2.innerHTML = "⚠️ Un ou plusieurs champs ne sont pas renseignés ⚠️";
  displayErrorMsg.append(errorH2);
}
