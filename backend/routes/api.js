var express = require('express');
var router = express.Router();

router.get('/v1/test', function(req, res, next) {
  res.json({ method: 'get' });
});

router.post('/v1/test', function(req, res, next) {
  res.json({ method: 'post' });
});

module.exports = router;