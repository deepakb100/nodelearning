var express = require('express');

var mongoose = require("mongoose");

var bodyParser = require("body-parser");


var MenueItem = require("./models/menueItemModel");


var db = mongoose.connect('mongodb://menueadmin:yellow*99@ds043615.mongolab.com:43615/menu');
var app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var menueItemsRouter = require("./Routers/menueItemsRouter")(MenueItem);


app.use('/api/menueItems', menueItemsRouter)

app.get('/', function(req, res) {
  res.send('Welcome to my api');
});

app.listen(process.env.PORT, function() {
  console.log('running at: ' + process.env.PORT)
});
