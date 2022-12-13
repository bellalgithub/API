
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
