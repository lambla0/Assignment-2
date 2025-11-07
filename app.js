var express = require('express');
var path = require('path');
var expressLayouts = require('express-ejs-layouts');

var indexRouter = require('./routes/index');

var app = express();

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;


