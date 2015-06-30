/**
 * Created by kyle on 2015/7/1.
 */
/**
 * Created by xiaoqing on 2015/6/30.
 */
var Datastore = require('nedb');

var db = new Datastore();

module.exports = function (router) {
    "use strict";

    router.route('/projects/:projectId/apis')
        //新建api
        .post(function (req, res, next) {
            res.json({list: 1}).end();
        });
    router.route('/projects/:projectId/apis/:apiId')
        //获取api数据
        .get(function (req, res, next) {
            res.json({a: 1}).end();
        })
        //update api数据
        .put(function (req, res, next) {
            res.json({a: 1}).end();
        })
        //删除该api
        .delete(function (req, res, next) {
            res.json({a: 1}).end();
        });
};