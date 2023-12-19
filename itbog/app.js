var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var computersprogRouter = require('./routes/computersprog');
var webapplikationerRouter = require('./routes/webapplikationer');
var computersprog1Router = require('./routes/computersprog1');
var webapplikationer1Router = require('./routes/webapplikationer1');
var opretwebbogRouter = require('./routes/opretwebbog');
var filmRouter = require('./routes/film');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use ('/computersprog', computersprogRouter);
app.use ('/computersprog1', computersprog1Router);
app.use ('/webapplikationer', webapplikationerRouter);
app.use ('/webapplikationer1', webapplikationer1Router);
app.use ('/opretwebbog', opretwebbogRouter);
app.use ('/film', filmRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
