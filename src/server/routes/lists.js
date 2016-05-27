var express = require('express');
var router = express.Router();

var lists = require('../db/listsQueries');
var listItems = require('../db/listsQueries');
var userQueries = require('../db/userQueries');
var sched = require('../utils/schedule.js');

router.get('/:id', getLists, getItems, getListDates, sendResults);

function getLists (req, res, next) {
    lists.getAllLists()
    .then(function (result) {
      req.lists = result;
      // console.log('line14 lists',req.lists);
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
    // console.log('line26 items',req.items);
    return next();
  })
  .catch(function (err) {
    return next(err);
  })
}

function getListDates (req, res, next) {
  userQueries.getSingleUser(req.params.id)
  .then(function (result) {
    // console.log('line38',result[0].occurances);
    req.occurances = result[0].occurances;
    sched.addItems(req.lists, req.occurances, req.items);
    sched.addOccurances(req.lists, req.occurances);
    // console.log('line 40', result);
    return next();
  })
  .catch(function (err) {
    return next(err);
  })
}

function sendResults (req, res, next) {
  res.status(200).json({
    status: 'success',
    lists: req.lists,
    items: req.items,
  });
}

module.exports = router;
