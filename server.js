var path = require('path')

var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')

var index = require('./routes/index')

var server = express()

module.exports = server

server.use(express.static('./styles'))

// Middleware
server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'views'))
server.use(bodyParser.urlencoded({ extended: true }))

// Routes

server.get('/home', index.getHome)
server.get('/form', index.showForm)
server.post('/cohort', index.saveForm)
server.get('/cohort', index.getCohort)
server.get('/cohort/:id', index.getIndividual)
