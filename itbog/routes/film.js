var express = require('express');
var router = express.Router();
var film = require('../film/datahandler');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const List = await film.getFilmList();
  res.render('film', { title: 'Starwars film', List: List});
});

module.exports = router;
