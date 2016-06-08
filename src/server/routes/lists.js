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
      return next();
    })
    .catch(function (err) {
      return next(err);
    })
}

function getListDates (req, res, next) {
  userQueries.getSingleUser(req.params.id)
  .then(function(result) {
  console.log('line25')

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
  console.log('line37')

    return next();
  })
  .catch(function (err) {
    return next(err);
  })
}

function appendListDates (req, res, next) {
  userQueries.getSingleUser(req.params.id)
  .then(function (result) {
    console.log('line50', result)
    console.log('line51', req.lists)
    console.log('line52', req.occurrences)
    req.occurrences = result[0].occurrences;
    sched.addOccurrences(req.lists, req.occurrences);
    // sched.combineItems(req.lists)
  // console.log('line51')
    
    return next();
  })
  .catch(function (err) {
    console.log(err);
    return next(err);
  })
}

function reduceList (req, res, next) {
    sched.addItems(req.lists, req.occurrences, req.items);

    // sched.combineItems(req.lists)
  return next(); 
}

function sendResults (req, res, next) {
  console.log('line65')
  res.status(200).json({
    status: 'success',
    lists: req.lists,
    items: req.items,
  });
}

module.exports = router;
