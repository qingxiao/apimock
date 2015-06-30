/**
 * Created by xiaoqing on 2015/6/30.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/project', function(req, res, next) {
    res.send([{name:'pname'}]);
});

module.exports = router;