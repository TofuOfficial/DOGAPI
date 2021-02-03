const fetch = require('node-fetch');

fetch('https://my-dog-api.herokuapp.com/dog-breeds') // fetching the data
    .then(res => res.json())
    .then(data => data.forEach(dog => {
        if(dog.id === 1) {
            console.log(dog);
        }
    })); // Grabbing Golden Retirever Information using ID