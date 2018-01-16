const express = require ('express');

const Bottle = require('../models/bottle-model.js');
const Beer = require('../models/beer-model.js');
const UserModel = require('../models/user-model.js');
const router = express.Router();


router.get('/display-cart', (req, res, next) => {
  const userId = req.user._id;
  if(!req.user) {
    console.log("get da f outta here ");
    return;
  }
  UserModel.findById(userId)
  .populate('cartItems')
  .exec( (err, theUser) => {
    if (err) {
      res.json(err);
      return;
    }
    console.log("CART: " + theUser.cartItems);
    res.json(theUser.cartItems);

  });
});

router.post('/save-cart', (req, res, next) => {
    const userId = req.user._id;
    if(!req.user) {
      console.log("get da f outta here ");
      return;
    }

    UserModel.findById(userId, (err, theUser) => {
      if (err) {
        res.json(err);
        return;
      }

      theUser.cartItems.push(req.body.cart);
      theUser.markModified('cartItems');
      theUser.save(err => {
        if (err) {
          res.json(err);
        }
        console.log("CART: " + theUser.cartItems);
        res.json(theUser.cartItems);
      });
    });


});



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

router.post('/addtocart', (req, res, next) => {
  if (!req.user) {
    res.status(401).json({message: 'f- off!'});
    return;
  }
  req.user.cartItems.push(req.body.id);
  req.user.save((err, user) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(user);
  });
});

module.exports = router;
