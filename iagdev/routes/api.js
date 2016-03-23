var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/helloworld', function(req, res, next) {
  res.send('{"message":"helloworld"}');
});
router.post('/helloworld', function(req, res, next) {
  res.send('{"message":"helloworld"}');
});
module.exports = router;
