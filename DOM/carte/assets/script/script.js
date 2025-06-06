let form = document.querySelector("form");
let inputSearch = document.querySelector(".rechercher");
let deleteMarkers = document.querySelector(".supprimer");

let map = L.map("map").setView([48.8588897, 2.320041], 10);
let marker;
let markersArray = [];

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // https://nominatim.openstreetmap.org/search?q=MONTPELLIER&format=json
  fetch(
    "https://nominatim.openstreetmap.org/search?q=" +
      inputSearch.value +
      "&format=json"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.length !== 0) {
        console.log(data[0]);
        inputSearch.value = data[0].display_name;
        marker = L.marker([data[0].lat, data[0].lon]).addTo(map);
        map.setView([data[0].lat, data[0].lon], 13);
        markersArray.push(marker);
        console.log(markersArray);
      } else {
        Swal.fire({
          title: "Aucun résultat !",
          icon: "info",
        });
      }
    });
});

deleteMarkers.addEventListener("click", () => {
    arrayLength = markersArray.length;
    if (arrayLength !== 0) {
        for (let i = 0; i < arrayLength; i++) {
            map.removeLayer(markersArray[i]);
        }
    }
    markersArray = [];
});
