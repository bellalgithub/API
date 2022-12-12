
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