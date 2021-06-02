import cantriesCardTempl from "../templates/cantries-card.hbs";
import cantriesSearch from "../templates/search-cantries.hbs";


import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/confirm/dist/PNotifyConfirm.css";

import API from './api-service';
import getRefs from './get-refs';
import promt from './alert';

const refs = getRefs();
let debounce = require('lodash.debounce');
refs.input.addEventListener(`input`,debounce(onSearch,500));

function onSearch(e) {
    e.preventDefault();
    const countries = e.target.value;
    API.fetchCountries(countries)
    .then(renderCard)
    .catch(promt())
    };
  
function renderCard(cantries){
  const marcup = cantriesCardTempl(...cantries);
 if (cantries.length===1) {
  refs.cardContainer.innerHTML = marcup;
  refs.sampleСantries.innerHTML = ``;
  return;
 } else if (cantries.length>=2 && cantries.length<=10) {
  const sample = cantriesSearch(cantries);
  refs.sampleСantries.innerHTML= sample;
 }else{
   promt();
 
  }

  } 