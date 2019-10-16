const express = require('express');
const app = express();
const Dogs = require('./models/dogs.js');

app.get('/dogs', (req, res) => {
    res.render('index.ejs', {
        dogs: Dogs
    })
});


app.listen(3000, () => {
    console.log('listening');
})
