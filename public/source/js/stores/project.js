/**
 * Created by kyle on 2015/6/30.
 */
import Reflux from 'reflux';

var ProjectActions = Reflux.createActions([
    "list",
    "create",
    "delete"
]);

var ProjectStore = Reflux.createStore({
    listenables:ProjectActions,
    onList:function(){
        "use strict";
        console.log('onList');
        var data = { list:[ {name:'p1', id:'xfasd'} ]};
        this.trigger(data);
    },
    onCreate:function(){},
    onDelete:function(){}
});

export {ProjectActions, ProjectStore};
