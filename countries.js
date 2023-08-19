inpCountry = document.getElementById("inpCountry");
btnCountry = document.getElementById("btnCountry");
result = document.getElementById("information")

btnCountry.addEventListener("click", () => {
    let countryName = inpCountry.value;
    const url = require=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        console.log(data[0].capital[0])
        console.log(data[0].flags.png)
        console.log(data[0].continents[0])
        console.log(data[0].languages)
        console.log(data[0].population)
        console.log(data[0].currencies)

        result.innerHTML = `
            <span id=flags>
            <img id="flag" src="${data[0].flags.png}">
            </span>
            <h2>Name: ${countryName}</h2>
            <h3>Capital: ${data[0].capital[0]} </h3>
            <h3>Population: ${data[0].population} </h3>
            <h3>Currency: ${(data[0].currencies[Object.keys(data[0].currencies)].name)} (${(data[0].currencies[Object.keys(data[0].currencies)].symbol)})</h3>
            <h3>Language: ${Object.values(data[0].languages).toString().split(",").join(", ")}</h3>
            <h3>Continent: ${data[0].continents[0]}</h3>
        `
    }).catch((err) => {
        if(countryName == 0) {
            result.innerHTML = `
                  <h3>This field is required! </h3> 
        `
        } else {
            result.innerHTML = `
                  <h3>This country don't exist, try again!</h3> 
        `
        }
    })

})