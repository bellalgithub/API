
// // Kanye API practice

function loadKanye() {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => kanyeData(data))
}

function kanyeData(data) {

    // console.log(data.quote);
    const quoteDiv = document.getElementById('quote');
    quoteDiv.innerHTML = data.quote;

}

// Random user API Practice


const userLoad = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(response => response.json())
        .then(data => user(data))
}

userLoad();

const user = data => {
    const userInfo = data.results;
    // console.log(userInfo);
    const usersDiv = document.getElementById('user')

    for (const usersData of userInfo) {
        // console.log(usersData);
        const p = document.createElement("p");
        // console.log(usersData);
        p.innerText = `${usersData.name.title} ${usersData.name.first} ${usersData.name.last}
         Email: ${usersData.email}
        `
        usersDiv.appendChild(p)
    }


}


// World Countries Tour for Practice API

const countryLoad = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(country => countries(country))
}
countryLoad();

const countries = data => {

    // console.log(data);
    const countriesDiv = document.getElementById('country-list')
    data.forEach(countryList => {
        // console.log(countryList);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country-class');
        countryDiv.innerHTML = `
        <h2>Country Name: ${countryList.name.common}</h2>
        <h3>Capital : ${countryList.capital}</h3>
        <h4>Population : ${countryList.population}</h4>
        <button onclick ="countryByName('${countryList.name.common}')">Show Details</button>
        `;

        countriesDiv.appendChild(countryDiv);


    });


}

const countryByName = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name} `
    fetch(url)
        .then(response => response.json())
        .then(data => country(data[0]))
}

const country = (countryName) => {

    // console.log(countryName);
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
    
    <h2>Country Name: ${countryName.name.common}</h2>
        <h3>Capital : ${countryName.capital}</h3>
        <h4>Population : ${countryName.population}</h4>
        <img src="${countryName.flags.png}" alt="">
        
    `

}