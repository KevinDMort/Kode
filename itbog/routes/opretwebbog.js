var express = require('express');
var router = express.Router();
var db = require('../database/db.js');  

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('opretwebbog', { title: 'Sælg en Bog' });
});

router.post('/', function(req, res, next) {
Titel = req.body.Titel;
Forfatter = req.body.Forfatter;
Forlag = req.body.Forlag;
Udgave = req.body.Udgave;
Pris = req.body.Pris;
db.createBook(Titel, Forfatter, Forlag, Udgave, Pris)
.then(function() {
  res.redirect('/');
})
.catch(function(error) {
  console.log(error);
  res.render('error');
});

});

module.exports = router;
