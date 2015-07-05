/**
 * Created by xiaoqing on 2015/6/30.
 */
var db = require('../lib/db');

module.exports = function (router) {
    "use strict";

    router.route('/projects')
        //获取项目列表
        .get(function (req, res, next) {
            db.getProject().then(function (docs) {
                res.json({status: 0, msg: '', data: docs}).end();
            });
        })
        //新建项目
        .post(function (req, res, next) {
            var name = req.param('name');
            var doc = {
                name: name,
                createTime: Date.now()
            };
            db.createProject(doc).then(function (docs) {
                res.json({status: 0, msg: '创建成功', data: docs}).end();
            }, function (err) {
                res.json({status: 1, msg: err, data: {}}).end();
            });
        });
    router.route('/projects/:projectId')
        //删除该项目，和 该项目下面的api列表
        .delete(function (req, res, next) {
            var id = req.params.projectId;
            db.deleteProject(id)
                .then(function (num) {

                    return db.deleteApisByProjectId(id);
                }, function (err) {

                    res.json({status: 1, msg: err, data: {}}).end();
                })
                .then(function (num) {
                    res.json({status: 0, msg: '删除成功', data: num}).end();
                }, function (err) {
                    res.json({status: 1, msg: err, data: {}}).end();
                });
        });

};