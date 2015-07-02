/**
 * Created by kyle on 2015/6/30.
 */
import Reflux from 'reflux';
import reqwest from 'reqwest';

var ProjectActions = Reflux.createActions([
    "list",
    "create",
    "delete"
]);

var ProjectStore = Reflux.createStore({
    listenables:ProjectActions,
    onList:function(){
        "use strict";
        reqwest({
            url:'/projects',
            method:'get',
            type:'json',
            success:function(res){
                this.trigger({projects:res.data});

            }.bind(this)
        });
    },
    onCreate:function(name){
        "use strict";
        reqwest({
            url:'/projects',
            method:'post',
            type:'json',
            data:{
                name:name
            },
            success:function(res){
                if(res.status == 0){
                    this.onList();
                }else{
                    alert(res.msg);
                }
            }.bind(this)
        });
    },
    onDelete:function(id){
        "use strict";
        reqwest({
            url:'/projects/'+id,
            method:'delete',
            type:'json',
            success:function(res){
                if(res.status == 0){
                    this.onList();
                }else{
                    alert(res.msg);
                }
            }.bind(this)
        });
    }
});

export {ProjectActions, ProjectStore};
