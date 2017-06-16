var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Elke\'s Treasures' });
});
router.get('/directions', function(req, res, next){
  res.render('directions', {title: 'Elke\'s Treasures'});
});
module.exports = router;
