var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express()
// var db = require('./sqlDB')

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'))

// app.use('/', async function (req, res, next) {
//   // await db.openConnection()
//   next()
// })

var usersAction = require('./action/user')
var cityAction = require('./action/city')
var subjectAction = require('./action/profession')
app.use('/users', usersAction)
app.use('/cities', cityAction )
app.use('/subject', subjectAction)
app.get('/', (req, res) => res.send('Api Meet Your Expert'))
module.exports = app