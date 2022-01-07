const { response } = require('express');
var express = require('express');
var router = express.Router();
var utils = require('../utils');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET feature */
router.get('/feature', function (req, res) {
  email = req.query.email
  featureName = req.query.featureName
  response = utils.canAccess(email,featureName)
  res.json(response)
})

/* POST feature */
router.post('/feature', function (req, res) {
  email = req.query.email
  featureName = req.query.featureName
  enable = req.query.enable
  canAccess = utils.canUpdate(email,featureName,enable)
  code = (canAccess) ? 200:304
  res.status(code).send()
})

module.exports = router;
