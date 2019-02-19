var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')

const servo = require('./servo');
const say = require('./say');

var app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}));

app.post('/', function (req, res) {
  console.log(req.body);
  
  res.send("😎");

  say(req.body.message);
  servo.cycle();
})

app.listen(8008, function () {
  console.log('😎')
})


