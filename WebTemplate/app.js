var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var bootstrap = require("express-bootstrap-service");
var router = express.Router();
//var google = require('google');
/*
var GoogleMapsLoader = require('google-maps');
//var Firebase = require("firebase");
GoogleMapsLoader.load(function(google) {
	GoogleMapsLoader.KEY = 'AIzaSyBExy7YPlfGG-nGG_TwZEj7i4v4q2prrj4';
	new google.maps.Map(el, options);
});
*/

var about = require('./routes/about');
var contact = require('./routes/contact');
var routes = require('./routes/index');
var result = require('./routes/result');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bootstrap.serve);

app.use('/', routes);
app.use('/about', about);
app.use('/contact', contact);
app.use('/result', result);

//Development error handler
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
