import cantriesCardTempl from "../templates/cantries-card.hbs";
import cantriesSearch from "../templates/search-cantries.hbs"
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
    cardContainer:document.querySelector(".countries-card"),
    cantrie:document.querySelector(".countries-search")
  };
  refs.input.addEventListener(`input`,debounce(onSearch,500));

  function onSearch(e) {
    e.preventDefault();
    const searchCountries = e.target.value;
    fetchCountries(searchCountries).then(renderCard)};
  
function renderCard(cantries){
  console.log(cantries)
  const marcup = cantriesCardTempl(...cantries);
 if (cantries.length===1) {
  refs.cardContainer.innerHTML = marcup;
  refs.cantrie.innerHTML = ``;
  return
 }console.log(cantries);
 const marcups = cantriesSearch(cantries);
 console.log(marcups);
 refs.cantrie.innerHTML= marcups;

 

  } 