const express = require ('express');

const Bottle = require('../models/bottle-model.js');
const Beer = require('../models/beer-model.js');

const router = express.Router();






// GET BEERS
router.get('/beers', (req, res, next) => {
  Beer.find((err, beerList) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(beerList);
  });
});



// GET BOTTLES
router.get('/bottles', (req, res, next) => {
  Bottle.find((err, bottleList) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(bottleList);
  });
});



module.exports = router;
