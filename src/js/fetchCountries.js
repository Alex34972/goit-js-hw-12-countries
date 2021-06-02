import cantriesCardTempl from "../templates/cantries-card.hbs";
import cantriesSearch from "../templates/search-cantries.hbs";
import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/confirm/dist/PNotifyConfirm.css";
import API from './api-service'
function prompt(){
  error({
  text: "Too many matches found. Please enter a more specific query!",
 
});}

let debounce = require('lodash.debounce');



const refs = {
    input: document.querySelector(".search"),
    cardContainer:document.querySelector(".countries-card"),
    sampleСantries:document.querySelector(".countries-search"),
    form:document.querySelector(".alert")
  };
refs.input.addEventListener(`input`,debounce(onSearch,500));

function onSearch(e) {
    e.preventDefault();
    const countries = e.target.value;
    API.fetchCountries(countries)
    .then(renderCard)
    .finally(()=>countries.reset())};
  
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
   prompt();
 
  }

  } 