/**
 * Created by Jo_seungwan on 2016. 9. 2..
 */
// [LOAD PACKAGES]
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var path = require('path');
var port = process.env.PORT || 3000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//mongoose configuration

var mongoose = require('mongoose');
mongoose.connect('mongodb://ip_addres:27017/booktest');

var mongo = require('./routes/index.js');
app.use('/', mongo);

var server = app.listen(port, function(){
    console.log("Express server has started on port " + port)
});