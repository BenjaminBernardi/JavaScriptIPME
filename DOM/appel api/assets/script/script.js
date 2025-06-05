let newQuote = document.querySelector(".nouvelle-replique");
let displayQuote = document.querySelector(".afficher-replique");

newQuote.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("https://kaamelott.xyz/api/v1/quote/random").then((response) => {
    return response.json();
  }).then((data) => {
    displayQuote.innerHTML = "";
    let title = document.createElement("h3");
    title.innerHTML = data.characts;
    let para = document.createElement("p");
    para.innerHTML = data.content;
    displayQuote.append(title, para);
  })
});

// https://api.adviceslip.com/advice

// let body = document.querySelector("body");

// fetch("https://api.adviceslip.com/advice").then((response) => {
//     return response.json();
//   }).then((data) => {
//     let para = document.createElement("p");
//     para.innerHTML = data.slip.advice;
//     body.append(para);
//   });