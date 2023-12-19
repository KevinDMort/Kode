var express = require('express');
var router = express.Router();

const books = [
  {
    Titel: "Introduction to Javascript",
    Forfatter: "Kenneth Geisshirt",
    Forlag: "Libris",
    Udgave: 1,
    Pris: 50
  },
  {
    Titel: "Practical Node.js ",
    Forfatter: "Azat Mardan",
    Forlag: "APress",
    Udgave: 2,
    Pris: 350
  }
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('webapplikationer', { title: 'Webapplikationer', books: books });
});

module.exports = router;
