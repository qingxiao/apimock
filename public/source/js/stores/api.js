/**
 * Created by kyle on 2015/6/30.
 */
import Reflux from 'reflux';
import reqwest from 'reqwest';

var ApiActions = Reflux.createActions([
    "list",
    "edit",
    "save",
    "create",
    "delete"
]);

var ApiStore = Reflux.createStore({
    listenables:ApiActions,
    onList:function(projectId = 'all'){
        "use strict";

        reqwest({
            url:'/projects/'+projectId+'/api',
            method:'get',
            type:'json',
            success:function(res){
                if(res.status == 0){
                    this.trigger({apis:res.data});
                }
            }.bind(this)
        });
    },
    onEdit:function(projectId, apiId){
        "use strict";
        reqwest({
            url:'/projects/'+projectId+'/api/'+apiId,
            method:'get',
            type:'json',
            success:function(res){
                if(res.status == 0){
                    this.trigger(res.data);
                }
            }.bind(this)
        });
    },
    onCreate:function(projectId, data){
        "use strict";
        reqwest({
            url:'/projects/'+projectId+'/api',
            method:'post',
            type:'json',
            data:data,
            success:function(res){
                if(res.status == 0){
                    alert('success');
                    this.trigger('saveSuccess');
                }else{
                    alert(res.msg);
                }
            }.bind(this)
        });
    },
    onSave:function(projectId, apiId, data){
        if(projectId && !apiId){
           this.onCreate(projectId, data);
            return;
        }
        "use strict";
        reqwest({
            url:'/projects/'+projectId+'/api/'+apiId,
            method:'put',
            type:'json',
            data:data,
            success:function(res){
                if(res.status == 0){
                    alert('success');
                    this.trigger('saveSuccess');
                }else{
                    alert(res.msg);
                }
            }.bind(this)
        });
    },
    onDelete:function(projectId, apiId){
        "use strict";
        reqwest({
            url:'/projects/'+projectId+'/api/'+apiId,
            method:'delete',
            type:'json',
            data:{
                name:name
            },
            success:function(res){
                if(res.status == 0){
                    alert('success');
                    this.onList(projectId, apiId);
                }else{

                    alert(res.msg);
                }
            }.bind(this)
        });
    }
});

export {ApiActions, ApiStore};
