var express = require('express');
var router = express.Router();

var lists = require('../db/listsQueries');
var listItems = require('../db/listsQueries');
var userQueries = require('../db/userQueries');
var sched = require('../utils/schedule.js');

router.get('/:id', getLists, getListDates, getItems, appendListDates, reduceList, sendResults);

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

function getListDates (req, res, next) {
  userQueries.getSingleUser(req.params.id)
  .then(function(result) {
    // console.log(result);
    // req.dates = result;
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

function appendListDates (req, res, next) {
  userQueries.getSingleUser(req.params.id)
  .then(function (result) {
    console.log('line38',req.lists);
    req.occurrences = result[0].occurrences;
    console.log(req.occurrences);
    sched.addOccurrences(req.lists, req.occurrences);
    sched.addItems(req.lists, req.occurrences, req.items);
    // sched.combineItems(req.lists)
    
    // console.log('line 40', req.test[0]);
    return next();
  })
  .catch(function (err) {
    return next(err);
  })
}

function reduceList (req, res, next) {
    // sched.combineItems(req.lists)
  return next(); 
}

function sendResults (req, res, next) {
  res.status(200).json({
    status: 'success',
    lists: req.lists,
    items: req.items,
  });
}

module.exports = router;
