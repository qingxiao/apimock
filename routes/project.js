/**
 * Created by xiaoqing on 2015/6/30.
 */
var Datastore = require('nedb');
var md5 = require('crypto-js/md5');
var path = require('path');


var dirPath = process.cwd();
var projectDBFile = path.join(dirPath, 'db', 'project.db');

var projectDB = new Datastore(projectDBFile);
projectDB.loadDatabase();

module.exports = function (router) {
    "use strict";

    router.route('/projects')
        //获取项目列表
        .get(function (req, res, next) {
            projectDB.find({}, function (err, docs) {
                res.json({status:0,msg:'',data:docs}).end();
            });
        })
        //新建项目
        .post(function (req, res, next) {
            var name = req.param('name');
            var id = md5(name).toString();
            var doc = {
                id:id,
                name:name
            };
            projectDB.find({ id:id }, function (err, docs) {
                // docs is an array containing documents Mars, Earth, Jupiter
                // If no document is found, docs is equal to []

                if(docs.length > 0 ){
                    res.json({status:1,msg:'该项目已经存在',data:docs}).end();
                }else{
                    projectDB.insert(doc, function(err, newDoc){
                        res.json({status:0,msg:'创建成功',data:newDoc}).end();
                    });
                }
            });

        });
    router.route('/projects/:projectId')
        //获取该项目下的接口列表
        .get(function (req, res, next) {
            res.json({a: 1}).end();
        })
        //删除该项目，和 todo 该项目下面的api列表
        .delete(function (req, res, next) {
            var id = req.params.projectId;
            console.log(id);
            projectDB.remove({ id: id }, {}, function (err, numRemoved) {
                console.log(numRemoved)
                // numRemoved = 1
                if(numRemoved >=1 ){
                    res.json({status:0,msg:'删除成功',data:{numRemoved:numRemoved}}).end();
                }else{
                    res.json({status:1,msg:'删除失败',data:{}}).end();
                }
            });
        });

};