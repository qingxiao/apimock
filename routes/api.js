/**
 * Created by kyle on 2015/7/1.
 */
/**
 * Created by xiaoqing on 2015/6/30.
 */
var db = require('../lib/db');

module.exports = function (router) {
    "use strict";

    router.route('/projects/:projectId/api')
        //获取api列表
        .get(function (req, res, next) {
            var projectId = req.params.projectId;
            db.getApi(projectId)
                .then(function (docs) {
                    res.json({status: 0, msg: '', data: docs}).end();
                }, function (err) {
                    res.json({status: 1, msg: err, data: {}}).end();
                });
        })
        //新建api
        .post(function (req, res, next) {
            var projectId = req.params.projectId;
            var doc = req.body;
            doc.projectId = projectId;
            doc.createTime = Date.now();
            db.findProjectName(projectId).then(function (name) {
                doc.projectName = name;
                console.log(name)
                return db.createApi(doc);
            })
                .then(function (newDoc) {
                    res.json({status: 0, msg: '创建成功', data: newDoc}).end();
                },
                function (err) {
                    res.json({status: 1, msg: err, data: {}}).end();
                });

        });
    router.route('/projects/:projectId/api/:apiId')
        //获取api数据
        .get(function (req, res, next) {
            var projectId = req.params.projectId;
            var apiId = req.params.apiId;
            db.findApi(apiId)
                .then(function (doc) {
                    res.json({status: 0, msg: '', data: doc[0]}).end();
                },
                function (err) {
                    res.json({status: 1, msg: err, data: {}}).end();
                });
        })
        //update api数据
        .put(function (req, res, next) {
            var doc = req.body;
            db.updateApi(doc)
                .then(function (newDoc) {
                    res.json({status: 0, msg: '保存成功', data: newDoc}).end();
                },
                function (err) {
                    res.json({status: 1, msg: err, data: {}}).end();
                });
        })
        //删除该api
        .delete(function (req, res, next) {
            var apiId = req.params.apiId;

            db.deleteApi(apiId)
                .then(function (newDoc) {
                    res.json({status: 0, msg: '删除成功', data: newDoc}).end();
                },
                function (err) {
                    res.json({status: 1, msg: err, data: {}}).end();
                });
        });
};