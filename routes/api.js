/**
 * Created by kyle on 2015/7/1.
 */
/**
 * Created by xiaoqing on 2015/6/30.
 */
var Datastore = require('nedb');
var md5 = require('crypto-js/md5');
var path = require('path');

//api数据存放数据库
var dirPath = process.cwd();
var apiDBFile = path.join(dirPath, 'db', 'api.db');
var db = new Datastore(apiDBFile);
db.loadDatabase();

module.exports = function (router) {
    "use strict";

    router.route('/projects/:projectId/api')
        //获取api列表
        .get(function (req, res, next) {
            var projectId = req.params.projectId;

            db.find({projectId: projectId}, function (err, docs) {
                // docs is an array containing documents Mars, Earth, Jupiter
                // If no document is found, docs is equal to []
                res.json({status: 0, msg: '', data: docs}).end();
            })
        })
        //新建api
        .post(function (req, res, next) {
            var projectId = req.params.projectId;
            var data = req.body;
            data.projectId = projectId;
            //根据name和projectId来创建id
            data.id = md5(data.name+projectId).toString().substring(0,6);

            db.find({ id:data.id }, function (err, docs) {
                // docs is an array containing documents Mars, Earth, Jupiter
                // If no document is found, docs is equal to []

                if(docs.length > 0 ){
                    res.json({status:1,msg:'该api已经存在',data:docs}).end();
                }else{
                    db.insert(data, function(err, newDoc){
                        res.json({status:0,msg:'创建成功',data:newDoc}).end();
                    });
                }
            });

        });
    router.route('/projects/:projectId/api/:apiId')
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