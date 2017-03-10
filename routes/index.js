var express = require('express')
var knex = require('knex')

var db = require('../db')

module.exports = {
  getHome: getHome,
  showForm: showForm,
  saveForm: saveForm,
  getCohort: getCohort,
  getIndividual: getIndividual
}


function getHome (req, res) {
  res.render('home.hbs')
}

function showForm (req, res) {
  res.render('form.hbs')
}

function saveForm (req, res) {
  db.saveForm(req.body)
    .then(function() {
      res.redirect('/cohort')
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

function getIndividual (req, res) {
  db.getIndividual(req.params.id)
    .select()
    .then(function (result) {
      res.render('individual', result[0])
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}
