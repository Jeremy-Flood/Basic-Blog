console.log("Hello World")
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/goodbye', function (req, res) {
  res.send('Hello Goodbye')
})

app.listen(3000)
