/* 
const devs = {
    name: 'Bellal', id: 1, dept: 'IT',

    address: {
        vill: 'Haydarabad',
        post: 'Tongi',
        dist: 'Gazzipur'
    },

    location: [39, 40, 41],
    skill: ['JS', 'PHP', 'HTML']

}

const stringifyObject = JSON.stringify(devs);
const parseObject = JSON.parse(stringifyObject);

console.log(stringifyObject);
console.log(parseObject);
console.log(parseObject.address.vill);
console.log(parseObject.skill);
 */


/* fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json)) */


//   ------------------------> 10 Users practice API <---------------------------------------------

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => userInfo(data))
}

loadData();

function userInfo(data) {
    // console.log('log', data);
    const ul = document.getElementById('user-list');
    for (const user of data) {
        // console.log('u', user.email);
        const li = document.createElement("li");
        li.classList.add('user-class');
        li.innerHTML = `
        <h2> User: ${user.name} </h2>
        <h3> Email: ${user.email}</h3>
        <h4>Address: ${user.address.street}</h4>
         
        ` ;
        ul.appendChild(li);

    }

}


//   ------------------------> 100 posts practice API <---------------------------------------------

function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => userPost(data));
}
loadPost();

function userPost(data) {
    // console.log('c', data);
    // data.map(data1 => console.log(data1.title));
    const div = document.getElementById('user-post');
    data.map(userData => {
        const li = document.createElement('li');
        li.classList.add('post-class');
        li.innerHTML = `
        <h3>ID: ${userData.id}</h3>
        <h4>Title: ${userData.title}</h4>
        <h6>Body: ${userData.body}</h6>
 
        `;
        div.appendChild(li);
    })

}

// POST Method for API

function postData() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            name: 'Bellal Hossain',
            ID: 123,
            skill: 'JS',
            Address: {
                vill: 'Haydarabad',
                PO: 'Haydarabad',
                Dist: 'Gazipur'
            }
        }),
        headers: {
            'Content-type': 'application/json ; charset= UTF-8',
        },

    })
        .then(response => response.json())
        .then(data => console.log(data));
}



