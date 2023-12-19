var express = require('express');
var router = express.Router();
var db = require('../database/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {

db.getAllBooks().then(function(books) {
  res.render('webapplikationer1', { title: 'Webapplikationer1', books: books });
})
.catch(function(error) {
  console.log(error);
  res.render('error');
});
});

module.exports = router;
