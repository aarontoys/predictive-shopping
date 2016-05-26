var express = require('express');
var router = express.Router();

var lists = require('../db/listsQueries');
var listItems = require('../db/listsQueries');
var userQueries = require('../db/userQueries');

function getLists (req, res, next) {
    lists.getAllLists()
    .then(function (result) {
      req.lists = result;
      console.log('line12',req.lists)
      return next();
    })
    .catch(function (err) {
      return next(err);
    })
}

function getItems (req, res, next) {
  lists.getAllItemsByUser(req.params.id)
  .then(function (result) {
    req.items = result;
    return next();
  })
  .catch(function (err) {
    return next(err);
  })
}

function getListDates (req, res, next) {
  userQueries.getSingleUser(req.params.id)
  .then(function (result) {
    req.occurances = result[0].occurances;
    addOccurances(req.lists, req.occurances);
    console.log('line38',req.lists);
    return next();
  })
  .catch(function (err) {
    return next(err);
  })
}

function sendResults (req, res, next) {
  // console.log('lists',req.lists);
  // console.log('items',req.items);
  res.status(200).json({
    status: 'success',
    lists: req.lists,
    items: req.items,
  });
}


router.get('/:id', getLists, getItems, getListDates, sendResults);


function addOccurances (arr1, arr2) {
  return arr1.map(function (obj, index) {
    if ( arr2[index] ) {
      obj.occurs = arr2[index].toLocaleString();
    } 
  });
};

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