document.getElementById("button-addon2").addEventListener("click", function(){
    var input = document.getElementById("input-field");
    var inputValue = input.value;

    fetch(`https://restcountries.eu/rest/v2/name/${inputValue}`)
    .then(res => res.json())
    .then(data => loadCountries(data))
    // console.log("working")
})


function loadCountries(countries){
   for( const country of countries){
       console.log(country)
       var countryContainer = document.getElementById("country-container");
       var div = document.createElement("div");
       div.classList.add("col");
       div.innerHTML = `
       <div class="card">
            <img src="${country.flag}" class="card-img-top w-50 mx-auto" alt="...">
            <div class="card-body">
              <h5 class="card-title">${country.name}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button onclick="showDetails('${country.alpha3Code}')">Show Details</button>
            </div>
          </div>`
        countryContainer.appendChild(div);
        
   }
}

function showDetails(codes){
    for(code of codes){
    fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
    .then(res => res.json())
    .then(data => console.log(data))
    var detaisContainer = document.getElementById("show-details");
    detaisContainer.innerHTML = `
    <h3>${code.capital}</h3>
    <h3>courencies</h3>
    <h3>population</h3>
    <h3>region</h3>`
    }
   
}


