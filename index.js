// Modules
const express = require('express');

// What we did before 

// fetch('api endpoint')
// .then(response => response.json())
// .then(data => {
//     console.log(data);
// })

// Axios now does this for us
const axios = require('axios');
const { urlencoded } = require('express');

// Create the app
const app = express();

// Create a PORT
const PORT = process.env.PORT || 1134;

// Create a HOME route
app.get('/', (req, res) => {
    console.log('---LOADING---')
    // Access API endpoint from Github
    axios.get('https://api.github.com/users/CoreyWilson319')
    .then(response => {
        // Print inside of the Terminal
        // console.log(response.data);
        const coreyObject = {
            login : response.data.login,
            url: response.data.html_url,
            name: response.data.name,
        };
        console.log(coreyObject)

        res.send(coreyObject);
    });
});

// Create a SEI1019 route
app.get('/nitish', (req, res) => {
    console.log('---LOADING---')
    // Access API endpoint from Github
    axios.get('https://api.github.com/users/nitishdayal')
    .then(response => {
        const nitishObject = {
            login : response.data.login,
            url : response.data.html_url,
            name : response.data.name,
        };
        console.log(nitishObject)
        
        res.send(nitishObject);
    })
})

app.get('/thomas', function(req, res){
    console.log('---LOADING---');
    axios.get('https://api.github.com/users/tcgilbert')
    .then(response => {
        const thomasObject = {
            login : response.data.login,
            url : response.data.html_url,
            name : response.data.name,
        };
        console.log(thomasObject)
        res.send(thomasObject)
    })
})

app.get('/alex', (req, res) => {
    console.log('---LOADING---')
    axios.get('https://api.github.com/users/AlexJBustillos')
    .then(response => {
        const alexObject = {
            login: response.data.login,
            url : response.data.html_url,
            name : response.data.name,
        };
        console.log(alexObject)
        res.send(alexObject)
    })
})

app.get('/jaxon', (req, res) => {
    console.log('---LOADING---')
    axios.get('https://api.github.com/users/JaxonNarramore')
    .then(response => {
        const jaxonObject = {
            login: response.data.login,
            url : response.data.html_url,
            name : response.data.name,
        };
        console.log(jaxonObject)
        res.send(jaxonObject)
    })
})

// app.get('/sei', (req, res) => {
//     console.log('---LOADING---')
//     axios.get('https://api.github.com/SEI-ATL')
//     .then(response => {
//         const seiObject = {
//             login: response.data.login,
//             id : response.data.id,
//             name : response.data.description,
//         };
//         console.log(seiObject)
//         res.send(seiObject)
//     })
// })
// Listen on a PORT

app.listen(PORT, function(){
    console.log(`You're vibing to the sound on PORT ${PORT}`)
})

// login, html url, name