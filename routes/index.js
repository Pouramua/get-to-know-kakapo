var express = require('express')
var knex = require('knex')

var db = require('../db')

module.exports = {
  get: get,
  showForm: showForm,
  getCohort: getCohort,
  getIndividual: getIndividual
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

function showForm (req, res) {
  res.render('form.hbs')
  
function getCohort (req, res) {
  db.getCohort()
    .then(function (cohort) {
      res.render('cohort.hbs', { cohort: cohort })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function getIndividual (req, res) {
  db.getIndividual(req.params.id)
    .select()
    .then(function (result) {
      console.log(result[0].name);
      res.render('individual', result[0])
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}
