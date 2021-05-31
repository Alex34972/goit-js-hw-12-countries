function fetchCountries (countrieName){
    return fetch(`https://restcountries.eu/rest/v2/name/${countrieName}`).then(response=>{
        return response.json()
    })
}
const inputEl = document.querySelector('.search');
