var express = require('express');
var router = express.Router();

var lists = require('../db/listsQueries');
var listItems = require('../db/listsQueries');

function getLists (req, res, next) {
    lists.getAllLists()
    .then(function (result) {
      req.lists = result;
      return next();
    })
    .catch(function (err) {
      return next(err);
    })
}

function getItems (req, res, next) {
  lists.getAllItemsByUser()
  .then(function (result) {
    req.items = result
    return next();
  })
  .catch(function (err) {
    return next(err);
  })
}

function sendResults (req, res, next) {
  console.log('lists',req.lists);
  console.log('items',req.items);
  res.status(200).json({
    status: 'success',
    lists: req.lists,
    items: req.items
  });
}


router.get('/', getLists, getItems, sendResults);

// router.get('/', fu)

module.exports = router;

// router.get('/', function (req, res, next) {
//   decks.getAllDecks()
//     .then(function (results){
//       res.status(200).json({
//         status: 'success',
//         data: results
//       });
//     })
//     .catch(function (err) {
//       return next(err);
//     })
// });