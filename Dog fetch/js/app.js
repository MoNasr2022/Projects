const select = document.getElementById('breeds');
const card = document.querySelector('.card');
const form = document.querySelector('form');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
function fetchData(url) {
    return fetch(url)
        .then(checkStatus)
        .then(response => response.json())
        .catch(error => console.log('Looks like there was a problem!', error))

}

Promise.all([
    fetchData('https://dog.ceo/api/breeds/list/all'),
    fetchData('https://dog.ceo/api/breeds/image/random')
])
    .then(data => {
        const breedList = data[0].message;
        const randomImage = data[1].message;

        generateOption(Object.keys(breedList));
        generateImage(randomImage);
    })



// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }

}


function generateOption(data) {
    const options = data.map(item =>
        `<option value="${item}">${item}</option>`
    ).join('');
    select.innerHTML = options;
}


function generateImage(data) {
    const html = `
    <img src= ${data} alt = "">
    <p>Click to view images of ${select.value}s</p>
    `;
    card.innerHTML = html;
}

function fetchBreedImage() {
    const breed = select.value;
    const img = card.querySelector('img');
    const p = card.querySelector('p');
    fetchData('https://dog.ceo/api/breed/hound/images/random')
        .then(data => {
            img.src = data.message;
            img.alt = breed;
            p.textContent = `Click to view more of ${breed}`;
        })
}


// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------
select.addEventListener('change', fetchBreedImage);
card.addEventListener('click', fetchBreedImage)
form.addEventListener('submit', postData)

// ------------------------------------------
//  POST DATA
// ------------------------------------------
function postData(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    const config = {
        method: 'POST',
        Headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, comment: comment })
    }

    fetch('https://jsonplaceholder.typicode.com/comments', config)
        .then(checkStatus)
        .then(res => res.json())
        .then(data => console.log(data))
}
