const express = require('express');
const app = express();
const methodOverride = require('method-override');
const Dogs = require('./models/dogs.js');


//middle-ware
app.use(methodOverride('_method'));

//routes
app.get('/dogs', (req, res) => {
    res.render('index.ejs', {
        dogs: Dogs
    })
});

app.delete('/dogs/:index', (req, res) => {
    //delete logic
    Dogs.splice(req.params.index, 1);
    //redirect to homepage
    res.redirect('/dogs');
})

app.get('/dogs/:index/edit', (req, res) => {
    res.render('edit.ejs', {
    Dogs: Dogs[req.params.index],
    index: req.params.index
    })
})

app.listen(3000, () => {
    console.log('listening');
})
