const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
require('./helpers');

const directoryPublic = path.join(__dirname, '../public');
const directoryPartials = path.join(__dirname, '../partials');

app.use(express.static(directoryPublic));
hbs.registerPartials(directoryPartials);
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'hbs');
app.get('/', (req, res) => {
    res.render('index', {
        student: 'estudiante'
    });
});
app.post('/calcule', (req, res) => {
    console.log(req.body);
    res.render('calcule', {
        student: req.body.name,
        value1: parseInt(req.body.value1),
        value2: parseInt(req.body.value2),
        value3: parseInt(req.body.value3)
    });
});
app.get('*', (req, res) => {
    res.render('error', {
        student: 'estudiante'
    });
});

app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000');
});