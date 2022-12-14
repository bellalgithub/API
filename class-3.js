
const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchFieldValue = searchField.value;
    // console.log(searchFieldValue);
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldValue}`
    // console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
}