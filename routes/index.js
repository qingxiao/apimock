var express = require('express');
var router = express.Router();
var projectRouter = require('./project');
var apiRouter = require('./api');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'API mock' });
});

//接口
projectRouter(router);
apiRouter(router);

module.exports = router;
