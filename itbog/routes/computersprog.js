var express = require('express');
var router = express.Router();

const books = [
  {
    Titel: "Introduction to Java",
    Forfatter: "Liang, Daniel Y",
    Forlag: "Pearson",
    Udgave: 11,
    Pris: 250
  },
  {
    Titel: "Python Crash Course",
    Forfatter: "Eric Matthes",
    Forlag: "No starch",
    Udgave: 2,
    Pris: 300
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('computersprog', { title: 'Computersprog', books: books });
});


module.exports = router;
