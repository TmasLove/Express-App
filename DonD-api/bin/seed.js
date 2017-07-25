const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dond');

const Bottle = require('../models/bottle-model.js');

const myTransactionSchema = require('../models/transactions-model.js');



var bottle1 = new Bottle({
  name: 'Johnnie Walker Red',
  price: 27,
  size: '750ml'
});

var bottle2 = new Bottle({
  name: 'Jack Daniels',
  price: 24,
  size: '750ml'
});

var bottle3 = new Bottle({
  name: 'Fireball',
  price: 20,
  size: '750ml'
});

var bottle4 = new Bottle({
  name: 'Absolut',
  price: 23,
  size: '750ml'
});

var bottle5 = new Bottle({
  name: 'Ketel One',
  price: 27,
  size: '750ml'
});

var bottle6 = new Bottle({
  name: 'Belvedere',
  price: 32,
  size: '750ml'
});

var bottle7 = new Bottle({
  name: 'Bacardi Gold',
  price: 15,
  size: '750ml'
});

var bottle8 = new Bottle({
  name: 'Bacardi White',
  price: 15,
  size: '750ml'
});

var bottle9 = new Bottle({
  name: 'Don Q Cristal',
  price: 15,
  size: '750ml'
});

var bottle10 = new Bottle({
  name: 'Don Julio Blanco',
  price: 63,
  size: '750ml'
});

var bottle11 = new Bottle({
  name: 'Camarena Silver',
  price: 23,
  size: '750ml'
});

var bottle12 = new Bottle({
  name: 'Patron Silver',
  price: 42,
  size: '750ml'
});

const bottleArray = [
 // Whiskey
  bottle1,
  bottle2,
  bottle3,

  // Vodka
   bottle4,
   bottle5,
   bottle6,

  // Rum
   bottle7,
   bottle8,
   bottle9,

  // Tequila
   bottle10,
   bottle11,
   bottle12
];


const Beer = require('../models/beer-model.js');

var beer1 = new Beer({
  name: 'Jai Alai',
  price: 11,
  quantity: '6',
  country: 'Florida'
});

var beer2 = new Beer({
  name: 'Lagunitas',
  price: 11,
  quantity: '12',
  country: 'California'
});

var beer3 = new Beer({
  name: 'Funky Buddha',
  price: 11,
  quantity: '12',
  country: 'Florida'
});

var beer4 = new Beer({
  name: 'Stella Artois',
  price: 17,
  quantity: '12',
  country: 'Belgium'
});

var beer5 = new Beer({
  name: 'Keineken',
  price: 15,
  quantity: '12',
  country: 'Netherlands'
});

var beer6 = new Beer({
  name: 'Corona Extra',
  price: 15,
  quantity: '12',
  country: 'Mexico'
});

const beerArray = [
 // IPA
  beer1,
  beer2,
  beer3,

 // Lager
  beer4,
  beer5,
  beer5
];

bottleArray.forEach((bottle) => {
  bottle.save(myTransactionSchema);
   });

beerArray.forEach((beer) => {
  beer.save(myTransactionSchema);
});
