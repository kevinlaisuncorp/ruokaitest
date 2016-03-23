var express = require('express');
var router = express.Router();
var config = require('config');

/* GET users listing. */
router.get('/example', function(req, res, next) {
  res.send("environment: "+config.get('environment'));
});
router.get('/allvars', function(req, res, next) {
  res.send("environment: "+config.get('environment')+" ===>  All other variables that related to the environment are showed as follow: "+JSON.stringify(config.get('Customer')));
});
module.exports = router;
