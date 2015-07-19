/**
 * Created by kyle on 2015/7/3.
 */
var Datastore = require('nedb');
var md5 = require('crypto-js/md5');
var path = require('path');
var Promise  = require('promise');

//api数据存放数据库
var dirPath = process.cwd();
var apiDBFile = path.join(dirPath, 'db', 'api.db');
var projectDBFile = path.join(dirPath, 'db', 'project.db');

var db = {
   api:    new Datastore(apiDBFile),
    project:new Datastore(projectDBFile)
};

db.api.loadDatabase();
db.project.loadDatabase();

function generateId(str){
    "use strict";
    return md5(str).toString().substring(0, 6);
}
module.exports = {
    //获取项目列表
    getProject:function(){
        "use strict";
        return new Promise(function (resolve, reject) {
            db.project.find({}, function (err, docs) {
                if (err) reject(err);
                else resolve(docs);
            });
        });

    },
    //  新建项目 检查是否存在
    createProject:function(doc){
        var id = generateId(doc.name);
        doc.id = id;
        return new Promise(function (resolve, reject) {
            this.findProject(id).then(function(docs){
                "use strict";
                if(docs.length > 0 ){
                    reject('该项目已经存在');
                }else{
                    db.project.insert(doc, function(err, newDoc){
                        if (err) reject(err);
                        resolve(newDoc);
                    });
                }
            }, function(err){
                "use strict";
                reject(err);
            });
        }.bind(this));
    },
    findProject:function(id){
        "use strict";
        return new Promise(function (resolve, reject) {
            db.project.find({ id:id }, function (err, docs) {
                if (err) reject(err);
                resolve(docs);
            });
        });
    },
    //根据projectId find Name
    findProjectName:function(id){
        "use strict";
        return new Promise(function (resolve, reject) {
            db.project.find({ id:id }, function (err, docs) {
                if (err) reject(err);
                resolve(docs[0].name);
            });
        });
    },
    deleteProject:function(id){
        "use strict";
        return new Promise(function (resolve, reject) {
            db.project.remove({ id: id }, {}, function (err, numRemoved) {
                if (err) reject(err);
                // numRemoved = 1
                if(numRemoved >=1 ){
                    resolve(numRemoved);
                }else{
                    reject('删除失败');
                }
            });
        });
    },
    //根据project获取api列表
    getApi:function(projectId){
        "use strict";
       var o = {};
        if(projectId != 'all'){
            o.projectId = projectId;
        }
        return new Promise(function (resolve, reject) {

            db.api.find(o, function (err, docs) {
                if (err) reject(err);
                resolve(docs);
            });
        });

    },
    //创建api
    createApi:function(doc){
        var id = generateId(doc.name + doc.projectId);
        doc.id = id;
        return new Promise(function (resolve, reject) {
            this.findApi(id).then(function(docs){
                "use strict";
                if(docs.length > 0 ){
                    reject('该api已经存在');
                }else{
                    db.api.insert(doc, function(err, newDoc){
                        if (err) reject(err);
                        resolve(newDoc);
                    });
                }
            }, function(err){
                "use strict";
                reject(err);
            });
        }.bind(this));
    },
    findApi:function(apiId){
        "use strict";
        return new Promise(function (resolve, reject) {
            db.api.find({id: apiId}, function (err, docs) {
                if (err) reject(err);
                resolve(docs);
            });
        });
    },
    updateApi:function(doc){
        "use strict";
        return new Promise(function (resolve, reject) {
            db.api.update({id: doc.id}, doc, function (err, docs) {
                if (err) reject(err);
                resolve(docs);
            });
        });
    },
    deleteApi:function(id){
        "use strict";
        return new Promise(function (resolve, reject) {
            db.api.remove({ id: id }, {}, function (err, numRemoved) {
                if (err) reject(err);
                // numRemoved = 1
                if(numRemoved >=1 ){
                    resolve(numRemoved);
                }else{
                    reject('删除失败');
                }
            });
        });
    },
    deleteApisByProjectId:function(projectId){
        "use strict";
        return new Promise(function (resolve, reject) {
            db.api.remove({ projectId: projectId }, {multi:true}, function (err, numRemoved) {
                if (err) reject(err);
                // numRemoved = 1
                resolve(numRemoved);
            });
        });
    }

}
;