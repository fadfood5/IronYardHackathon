var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('carousel', { title: 'Fadi Bitar' });
});

module.exports = router;
