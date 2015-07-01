import Router from 'director';
import React from 'react';
import {ButtonToolbar,Button} from 'react-bootstrap';

var routes = {
    '/':function(){
        "use strict";
        pageTo('index');
    },
    '/project/:pid':function(projectId) {
        "use strict";
        pageTo('index', {projectId:projectId});
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
