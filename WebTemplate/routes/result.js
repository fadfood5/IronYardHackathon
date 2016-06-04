var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('result', { title: 'The Iron Searcher - Result' });
});

module.exports = router;
