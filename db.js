var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getUsers: getUsers,
  getCohort: getCohort,
  getIndividual: getIndividual
  // getUser: getUser,
}

function getUsers (testDb) {
  var db = testDb || connection
  return db('users').select()
}

function getCohort (testDb) {
  var db = testDb || connection
  return db('cohort').select()
}

function getIndividual (id, testDb) {
  var db = testDb || connection
  return db('cohort').where('id', id)
}

// function getUser (id, testDb) {
//   var db = testDb || connection
//   return db('users').where('id', id)
// }
