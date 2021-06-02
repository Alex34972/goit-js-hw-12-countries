
function fetchCountries(countries) {
    return fetch(`https://restcountries.eu/rest/v2/name/${countries}`).then(
      (res) => {
        return res.json();
      }
    );
  }
  export default { fetchCountries };