
// API practice for 10 user's 

function loadData() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => userData(data));

}

loadData();
const ul = document.getElementById('users-list');

function userData(data) {
    for (const user of data) {
        // console.log(user.name);
        const li = document.createElement("li");
        li.classList.add('item');
        li.innerHTML = `
        
        <h2> User: ${user.name}</h2>
        <h3> Email: ${user.email}</h3>
        <h4> City: ${user.address.city}</h4>
        <h5> Lng: ${user.address.geo.lng}</h5>
        `
        ul.appendChild(li);
    }
}

// API practice for 100 post 

function loadPost() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => usersPost(data))

}
loadPost();
const up = document.getElementById('users-post');
function usersPost(data) {
    for (const post of data) {
        const li = document.createElement("li");
        li.classList.add('userPost')
        li.innerHTML = `
        <h2>ID: ${post.id}</h2>
        <h3>Title: ${post.title}</h3>
        <h4>Post: ${post.body}</h4> 
        ` ;
        up.appendChild(li);
    }

}


