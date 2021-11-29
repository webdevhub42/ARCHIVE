const express = require('express');
const app = express();
const { Pet, Owner, PetType } = require('./models');

app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: true }));//what is this exprees.urlencoded.

app.get('./pets', async function (req, res) {
    const data = {};

    const pets = await Pet.findAll({
        include: [PetType, Owner],//include gets the pet type and the owners of that pet
        order: ['name']
    });

    data.pets = pets;
    res.render('pets', data);
});

app.get('./owners', function (req, res) {
    const data = {};

    res.render('owners', data);
});

app.post('./pets', function (req, res) {

});


app.owners('./pets', function (req, res) {

});

app.get('./', function (_, res) {
    res.redirect('/pets')
});

const port = 8081;

app.listen(port, () => {
    console.log(`listening to port ${port}`)
});
