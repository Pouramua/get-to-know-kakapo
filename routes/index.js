var express = require('express')

var db = require('../db')

module.exports = {
  get: get,
  getCohort: getCohort
}

function get (req, res) {
  db.getUsers()
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function getCohort (req, res) {
  db.getCohort()
    .then(function (cohort) {
      res.render('cohort.hbs', { cohort: cohort })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}
