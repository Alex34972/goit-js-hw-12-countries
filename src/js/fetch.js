const refs = {
  input: document.querySelector(".search"),
};
refs.input.addEventListener(`input`, onSearch);
function onSearch(e) {
  e.preventDefault();
  const searchCountries = e.target.value;
  fetchCountries(searchCountries);
}
function fetchCountries(searchCountries) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchCountries}`).then(
    (res) => {
      return res.json();
    }
  );
}
