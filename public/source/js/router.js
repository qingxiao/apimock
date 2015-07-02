import Router from 'director';
import React from 'react';
import {ButtonToolbar,Button} from 'react-bootstrap';

var routes = {
    //首页
    '/':function(){
        "use strict";
        pageTo('index');
    },
    //当前选中项目下的api列表
    '/project/:pid':function(projectId) {
        "use strict";
        pageTo('index', {projectId:projectId});
    },
    //新增api
    '/project/:pid/api':function(projectId) {
        "use strict";
        pageTo('api_edit',  {projectId:projectId});
    },
    //编辑api
    '/project/:pid/api/:apiId':function(projectId, apiId) {
        "use strict";
        pageTo('api_edit',  {projectId:projectId, apiId:apiId});
    }
};


function pageTo(page, options){
    var pkg = 'components/page/'+page;
    requirejs([pkg], function(Page){
        "use strict";
        React.render(<Page {...options}/>, document.body);
    });
}


var router = new Router(routes);
router.configure({

    notfound:function(){
        "use strict";
        pageTo('index');
    }
});
router.init('/');




export default router;
