const mongoose = require('mongoose');

require("dotenv").config();
mongoose.connect(process.env.MONGODB_URI);

const Bottle = require('../models/bottle-model.js');

const myTransactionSchema = require('../models/transactions-model.js');





var bottle1 = new Bottle({
  name: 'Johnnie Walker Red',
  price: 27.00,
  size: '750ml',
  category: 'Whiskey',
  image: '/images/Bottles/jwalker-red.jpg'
});

var bottle2 = new Bottle({
  name: 'Jack Daniels',
  price: 24.00,
  size: '750ml',
  category: 'Whiskey',
  image: '/images/Bottles/jackdaniels.jpg'
});

var bottle3 = new Bottle({
  name: 'Fireball',
  price: 20.00,
  size: '750ml',
  category: 'Whiskey',
  image: '/images/Bottles/fireball.jpg'

});

var bottle4 = new Bottle({
  name: 'Absolut',
  price: 23.00,
  size: '750ml',
  category: 'Vodka',
  image: '/images/Bottles/absolut.jpg'

});

var bottle5 = new Bottle({
  name: 'Ketel One',
  price: 27.00,
  size: '750ml',
  category: 'Vodka',
  image: '/images/Bottles/ketel1.jpg'

});

var bottle6 = new Bottle({
  name: 'Belvedere',
  price: 25.00,
  size: '750ml',
  category: 'Vodka',
  image: '/images/Bottles/Belvedere.jpg'

});

var bottle7 = new Bottle({
  name: 'Bacardi Gold',
  price: 15.00,
  size: '750ml',
  category: 'Rum',
  image: '/images/Bottles/bacardi-gold.jpg'

});

var bottle8 = new Bottle({
  name: 'Bacardi White',
  price: 15.00,
  size: '750ml',
  category: 'Rum',
  image: '/images/Bottles/bacardi-white.jpg'

});

var bottle9 = new Bottle({
  name: 'Don Q Cristal',
  price: 15.00,
  size: '750ml',
  category: 'Rum',
  image: '/images/Bottles/donq.jpg'

});

var bottle10 = new Bottle({
  name: 'Don Julio Blanco',
  price: 43.00,
  size: '750ml',
  category: 'Tequila',
  image: '/images/Bottles/don-julio-blanco.jpg'

});

var bottle11 = new Bottle({
  name: 'Camarena Silver',
  price: 23.00,
  size: '750ml',
  category: 'Tequila',
  image: '/images/Bottles/camarena.jpg'

});

var bottle12 = new Bottle({
  name: 'Patron Silver',
  price: 35.00,
  size: '750ml',
  category: 'Tequila',
  image: '/images/Bottles/patron-silver.jpg'

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
  price: 11.00,
  quantity: '6',
  country: 'Florida',
  category: 'IPA',
  image: '/images/Beers/jai.jpg'

});

var beer2 = new Beer({
  name: 'Lagunitas',
  price: 11.00,
  quantity: '12',
  country: 'California',
  category: 'IPA',
  image: '/images/Beers/lagunitas.jpg'

});

var beer3 = new Beer({
  name: 'Funky Buddha',
  price: 11.00,
  quantity: '12',
  country: 'Florida',
  category: 'IPA',
  image: '/images/Beers/funky.jpg'

});

var beer4 = new Beer({
  name: 'Stella Artois',
  price: 17.00,
  quantity: '12',
  country: 'Belgium',
  category: 'Lager',
  image: '/images/Beers/stella.jpg'

});

var beer5 = new Beer({
  name: 'Keineken',
  price: 15.00,
  quantity: '12',
  country: 'Netherlands',
  category: 'Lager',
  image: '/images/Beers/heineken.jpg'

});

var beer6 = new Beer({
  name: 'Corona Extra',
  price: 15.00,
  quantity: '12',
  country: 'Mexico',
  category: 'Lager',
  image: '/images/Beers/corona.jpg'

});

const beerArray = [
 // IPA
  beer1,
  beer2,
  beer3,

 // Lager
  beer4,
  beer5,
  beer5,
  beer6
];

bottleArray.forEach((bottle) => {
  bottle.save(myTransactionSchema);
   });

beerArray.forEach((beer) => {
  beer.save(myTransactionSchema);
});
