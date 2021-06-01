import cantriesCardTempl from "../templates/cantries-card.hbs";

let debounce = require('lodash.debounce');

function fetchCountries(searchCountries) {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchCountries}`).then(
      (res) => {
        return res.json();
      }
    );
  }
const refs = {
    input: document.querySelector(".search"),
    cardContainer:document.querySelector(".countries")
  };
  refs.input.addEventListener(`input`,debounce(onSearch,500));

  function onSearch(e) {
    e.preventDefault();
    const searchCountries = e.target.value;
    fetchCountries(searchCountries).then(cantries => {
      const marcup = cantriesCardTempl(...cantries);
      refs.cardContainer.innerHTML = marcup} 
    )};
  
//function renderCard(cantries)