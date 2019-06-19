const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

// process.env.PORT gets an external port provided by any platform like Heroku, if can't be retrieved it returns 3000 (local)
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
app.set('view engine', 'hbs');


hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'duBiEl'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}...`);
});