document.getElementById("button-addon2").addEventListener("click", function(){
    var input = document.getElementById("input-field");
    var inputValue = input.value;
    input.value = ""
    if(inputValue == ""){
        alert("Input value can not be empty")
    }
    fetch(`https://restcountries.eu/rest/v2/name/${inputValue}`)
    .then(res => res.json())
    .then(data => loadCountries(data))
    // console.log("working")
})


function loadCountries(countries){
    if(countries.status == 404){
        alert("Search result not found")
    }
   for( const country of countries){
    
       console.log(country)
       var countryContainer = document.getElementById("country-container");
       var detaisContainer = document.getElementById("show-details")
       detaisContainer.innerHTML = ""
       countryContainer.innerHTML = ""
      
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
    
    fetch(`https://restcountries.eu/rest/v2/alpha/${codes}`)
    .then(res => res.json())
    .then(data => details(data))
    
   
}


function details(datass){
    
    var detaisContainer = document.getElementById("show-details")
    
    detaisContainer.innerHTML = `
    <div ">
    <h2>capital</h2>
          <h2>capital:${datass.capital}</h2>
          <h2>currencies:${datass.currencies[0].name}</h2>
          <h2>Area code:${datass.area}</h2>
          </div>`
          ;
}


